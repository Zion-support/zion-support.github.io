#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns to fix
const fixes = [
  // Fix double semicolons and brackets
  { pattern: /];];/g, replacement: '];' },
  { pattern: /];\s*];/g, replacement: '];' },
  { pattern: /};\s*};/g, replacement: '};' },
  { pattern: /\);\s*\);/g, replacement: ');' },
  
  // Fix missing commas in object properties
  { pattern: /(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g, replacement: "$1: '$2',\n    $3:" },
  { pattern: /(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, replacement: '$1: "$2",\n    $3:' },
  
  // Fix JSX syntax issues
  { pattern: /<(\w+)\s+([^>]*?)\s*>\s*<\/\1>/g, replacement: '<$1 $2 />' },
  
  // Fix missing closing tags
  { pattern: /<(\w+)([^>]*)>\s*$/gm, replacement: '<$1$2></$1>' },
  
  // Fix malformed JSX fragments
  { pattern: /<>\s*<\/(\w+)>/g, replacement: '<$1></$1>' },
  { pattern: /<(\w+)>\s*<\/>/g, replacement: '<$1></$1>' },
  
  // Fix missing semicolons after variable declarations
  { pattern: /(const|let|var)\s+(\w+)\s*=\s*[^;]+$/gm, replacement: '$1 $2 = $&;' },
  
  // Fix missing commas in arrays
  { pattern: /\]\s*\[/g, replacement: '], [' },
  { pattern: /}\s*{/g, replacement: '}, {' },
  
  // Fix malformed function calls
  { pattern: /(\w+)\s*\(\s*\)\s*{/g, replacement: '$1() {' },
  
  // Fix missing closing parentheses
  { pattern: /\(\s*[^)]*$/gm, replacement: '()' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
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

async function main() {
  console.log('Fixing syntax errors in TypeScript/JSX files...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, fixes };