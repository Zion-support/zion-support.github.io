#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// More comprehensive syntax fixes
const fixes = [
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
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