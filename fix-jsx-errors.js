#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for JSX syntax errors
function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing semicolons after imports
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix 2: Fix missing closing tags for common elements
    const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
    selfClosingTags.forEach(tag => {
      const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
      content = content.replace(regex, (match, attrs) => {
        if (!match.endsWith('/>')) {
          modified = true;
          return `<${tag}${attrs} />`;
        }
        return match;
      });
    });

    // Fix 3: Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)<\//g, '<React.Fragment>$1</React.Fragment>');
    content = content.replace(/<>([^<]*?)$/gm, '<React.Fragment>$1</React.Fragment>');

    // Fix 4: Fix missing commas in object literals
    content = content.replace(/(\w+):\s*\[([^\]]+)\]\s*\n\s*}/g, (match, key, array) => {
      if (!match.includes(',')) {
        modified = true;
        return `${key}: [${array}],\n  }`;
      }
      return match;
    });

    // Fix 5: Fix missing closing tags for common JSX elements
    const commonTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'button', 'section', 'main', 'article', 'aside', 'header', 'footer', 'nav'];
    
    commonTags.forEach(tag => {
      // Find unclosed opening tags
      const openTagRegex = new RegExp(`<${tag}([^>]*?)>(?!.*</${tag}>)`, 'g');
      const matches = content.match(openTagRegex);
      
      if (matches) {
        matches.forEach(match => {
          // Check if there's a corresponding closing tag
          const tagContent = match.replace(new RegExp(`<${tag}[^>]*?>`), '');
          if (!tagContent.includes(`</${tag}>`)) {
            // This is a simplified fix - in practice, you'd need more sophisticated parsing
            console.log(`Found potentially unclosed ${tag} tag in ${filePath}`);
          }
        });
      }
    });

    // Fix 6: Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)\s*$/gm, (match, expr) => {
      if (expr.trim() && !expr.includes('}')) {
        modified = true;
        return `{${expr.trim()}}`;
      }
      return match;
    });

    // Fix 7: Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
    content = content.replace(/(\w+)\s*\n\s*]/g, '$1\n  ]');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJsxFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);