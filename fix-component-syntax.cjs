#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of component files with errors
const componentFiles = execSync('find app/components -name "*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && fs.existsSync(file));

console.log(`Found ${componentFiles.length} component files to check`);

let fixedFiles = 0;
let errorFiles = 0;

for (const filePath of componentFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax issues
    
    // Fix missing semicolons in object properties
    content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g, (match, key, value) => {
      if (!value.trim().endsWith(';') && !value.trim().endsWith(',') && !value.trim().endsWith('}')) {
        return `${key}: ${value.trim()},`;
      }
      return match;
    });

    // Fix missing commas in function parameters
    content = content.replace(/\(\s*([^)]+)\s*\)/g, (match, params) => {
      const fixedParams = params.replace(/(\w+)\s+(\w+)(?=\s*[,)])/g, '$1, $2');
      return `(${fixedParams})`;
    });

    // Fix JSX closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/(\w+)>/g, (match, openTag, attrs, content, closeTag) => {
      if (openTag !== closeTag) {
        return `<${openTag}${attrs}>${content}</${openTag}>`;
      }
      return match;
    });

    // Fix missing closing braces
    content = content.replace(/\{\s*([^}]*)\s*$/gm, (match, content) => {
      if (content.trim() && !content.trim().endsWith('}')) {
        return `{${content.trim()}}`;
      }
      return match;
    });

    // Fix stray semicolons
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/^\s*;\s*/gm, '');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]*)\s*;\s*\}/g, '{$1}');
    
    // Fix missing commas in arrays
    content = content.replace(/\[\s*([^\]]*)\s*\]/g, (match, items) => {
      const fixedItems = items.replace(/([^,}])\s+([^,}])/g, '$1, $2');
      return `[${fixedItems}]`;
    });

    // Clean up extra whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/\n\s*\n/g, '\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorFiles++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${componentFiles.length}`);
console.log(`- Files fixed: ${fixedFiles}`);
console.log(`- Files with errors: ${errorFiles}`);