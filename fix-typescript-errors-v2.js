#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// More comprehensive patterns to fix
const fixes = [
  // Fix malformed JSX expressions with > characters
  {
    pattern: /(\{[^}]*)\s*>\s*([^}]*\})/g,
    replacement: '$1 > $2'
  },
  // Fix missing commas in object literals (more comprehensive)
  {
    pattern: /(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):\s*['"`][^'"`]*['"`]\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):/g,
    replacement: '$1$2: $3,\n$4$5:'
  },
  // Fix missing commas in arrays
  {
    pattern: /(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):\s*['"`][^'"`]*['"`]\s*\n(\s+)\]/g,
    replacement: '$1$2: $3,\n$4]'
  },
  // Fix malformed JSX attributes
  {
    pattern: /<(\w+)\s*>\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)=/g,
    replacement: '<$1\n$2$3='
  },
  // Fix unclosed br tags
  {
    pattern: /<br\s*>\s*\n(\s*)<\/br>/g,
    replacement: '<br />\n$1'
  },
  // Fix malformed template literals with > characters
  {
    pattern: /`([^`]*)\s*>\s*([^`]*)`/g,
    replacement: '`$1 > $2`'
  },
  // Fix malformed icon properties
  {
    pattern: /icon:\s*['"`]>['"`]\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):/g,
    replacement: "icon: '>',\n$1$2:"
  },
  // Fix malformed object properties with > characters
  {
    pattern: /([a-zA-Z_$][a-zA-Z0-9_$]*):\s*['"`][^'"`]*\s*>\s*[^'"`]*['"`]\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):/g,
    replacement: "$1: '>',\n$2$3:"
  },
  // Fix malformed spread operator
  {
    pattern: /\.\.\.\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):/g,
    replacement: '...$1,\n$2$3:'
  },
  // Fix malformed JSX expressions
  {
    pattern: /\{\s*>\s*\}/g,
    replacement: '{>}'
  },
  // Fix malformed object literals with missing commas
  {
    pattern: /(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):\s*[^,\n]+\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):/g,
    replacement: '$1$2: $3,\n$4$5:'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let iterations = 0;
    const maxIterations = 10;
    
    // Apply fixes iteratively until no more changes
    while (iterations < maxIterations) {
      let changed = false;
      
      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      });
      
      if (!changed) break;
      iterations++;
    }
    
    if (iterations > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath} (${iterations} iterations)`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files in src/components
  const files = await glob('src/components/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);