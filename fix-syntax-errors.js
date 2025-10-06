#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing commas in object properties
  {
    pattern: /(\d+)([a-zA-Z])/g,
    replacement: '$1, $2'
  },
  // Fix extra semicolons and commas in object declarations
  {
    pattern: /};,/g,
    replacement: '};'
  },
  // Fix double semicolons
  {
    pattern: /;;/g,
    replacement: ';'
  },
  // Fix malformed JSX with double closing tags
  {
    pattern: /<\/div><\/div>/g,
    replacement: '</div>'
  },
  // Fix missing commas in arrays/objects
  {
    pattern: /(\w+)(\s+)(\w+)(\s*)(\w+)(\s*)(\w+)/g,
    replacement: '$1, $3, $5, $7'
  },
  // Fix malformed JSX comments
  {
    pattern: /{\/\* content \*\/}/g,
    replacement: '{/* content */}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    // Fix missing commas after numeric literals in object properties
    content = content.replace(/(\d+)([a-zA-Z])/g, '$1, $2');
    
    // Fix extra closing braces
    content = content.replace(/\}\};/g, '};');
    content = content.replace(/\}\},/g, '},');
    
    // Fix malformed object syntax
    content = content.replace(/\{\s*\}/g, '{}');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all blog files with potential syntax errors
const blogFiles = await glob('app/blog/**/*.tsx');

console.log(`Found ${blogFiles.length} blog files to check...`);

let fixedCount = 0;
blogFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);