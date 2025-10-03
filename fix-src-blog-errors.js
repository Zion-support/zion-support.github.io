#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors in src/pages/blog files
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/^(\s*<[^>]*"[^"]*$)/gm, (match) => {
    if (!match.includes('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix malformed JSX with quotes
  fixed = fixed.replace(/<([^>]*)\s*"$/gm, '<$1>');
  
  // Fix lines that end with just a quote
  fixed = fixed.replace(/^(\s*)\s*"$/gm, '');
  
  // Fix unterminated strings in JSX attributes
  fixed = fixed.replace(/(\w+="[^"]*$)/gm, '$1"');
  
  // Fix common JSX structure issues
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<div className="text-left"><\/div>/g, '<div className="text-left">');
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<span/g, '<span');
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<h[1-6]/g, '<h$1');
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<p/g, '<p');
  
  return fixed;
}

// Main function to process src/pages/blog files
async function main() {
  const blogDir = path.join(process.cwd(), 'src', 'pages', 'blog');
  const files = await glob('**/*.tsx', { cwd: blogDir });
  
  console.log(`Found ${files.length} src blog files to process...`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixJSXErrors(originalContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} src blog files.`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXErrors };