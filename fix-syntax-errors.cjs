#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix interface properties - add semicolons
  {
    pattern: /(\w+)\s*:\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2;$3'
  },
  // Fix object properties - add semicolons
  {
    pattern: /(\w+)\s*:\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2;$3'
  },
  // Fix function parameters - add commas
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing semicolons after return statements
  {
    pattern: /return\s+([^;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: 'return $1;$2'
  },
  // Fix missing semicolons after variable declarations
  {
    pattern: /(\w+)\s*=\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2;$3'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
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

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**', 'out/**']
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);