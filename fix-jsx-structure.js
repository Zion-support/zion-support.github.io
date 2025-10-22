#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix broken JSX anchor tags
function fixAnchorTags(content) {
  let fixed = content;
  
  // Fix broken anchor tags where the text is outside the tag
  fixed = fixed.replace(
    /<a\s+([^>]*?)href="([^"]*?)"([^>]*?)><\/a>\s*([^<]+?)\s*<\/a>/g,
    '<a $1href="$2"$3>$4</a>'
  );
  
  // Fix anchor tags where the text is completely outside
  fixed = fixed.replace(
    /<a\s+([^>]*?)href="([^"]*?)"([^>]*?)><\/a>\s*([^<]+?)(?=\s*<\/div>|\s*<\/section>|\s*<\/React\.Fragment>)/g,
    '<a $1href="$2"$3>$4</a>'
  );
  
  // Fix anchor tags with missing closing tags
  fixed = fixed.replace(
    /<a\s+([^>]*?)href="([^"]*?)"([^>]*?)>([^<]*?)(?!<\/a>)/g,
    (match, before, href, after, text) => {
      if (text.trim() && !match.includes('</a>')) {
        return `<a ${before}href="${href}"${after}>${text}</a>`;
      }
      return match;
    }
  );
  
  return fixed;
}

// Function to fix broken JSX structure
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(
    /<div\s+([^>]*?)>([^<]*?)(?!<\/div>)(?=\s*<\/section>|\s*<\/React\.Fragment>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</div>')) {
        return `<div ${attrs}>${content}</div>`;
      }
      return match;
    }
  );
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(
    /<section\s+([^>]*?)>([^<]*?)(?!<\/section>)(?=\s*<\/div>|\s*<\/React\.Fragment>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</section>')) {
        return `<section ${attrs}>${content}</section>`;
      }
      return match;
    }
  );
  
  // Fix React.Fragment closing issues
  fixed = fixed.replace(
    /<React\.Fragment>([^<]*?)(?!<\/React\.Fragment>)(?=\s*<\/div>)/g,
    (match, content) => {
      if (content.trim() && !match.includes('</React.Fragment>')) {
        return `<React.Fragment>${content}</React.Fragment>`;
      }
      return match;
    }
  );
  
  return fixed;
}

// Function to fix specific file issues
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply fixes
  content = fixAnchorTags(content);
  content = fixJSXStructure(content);
  
  return content;
}

// Main function
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Processing ${files.length} TSX files...`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixFile(file);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}