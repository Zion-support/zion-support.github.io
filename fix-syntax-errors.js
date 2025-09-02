#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns to fix
const fixes = [
  // Fix semicolons in JSX attributes
  {
    pattern: /to='([^']*)';/g,
    replacement: "to='$1'"
  },
  {
    pattern: /href='([^']*)';/g,
    replacement: "href='$1'"
  },
  {
    pattern: /className='([^']*)';/g,
    replacement: "className='$1'"
  },
  // Fix hover: spacing issues
  {
    pattern: /hover: ([^']*);/g,
    replacement: "hover:$1"
  },
  // Fix missing commas in TypeScript type definitions
  {
    pattern: /: \{ ([^}]+) \}/g,
    replacement: (match, content) => {
      // Add missing commas between type properties
      const fixed = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,}]+)(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1, $3');
      return `: { ${fixed} }`;
    }
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+:\s*[^,}]+)(\s+)(\w+:\s*[^,}]+)/g,
    replacement: '$1, $3'
  }
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

// Main function
async function main() {
  // Find all TypeScript and JSX files
  const files = await glob('src/**/*.{ts,tsx,js,jsx}', { ignore: ['node_modules/**', 'dist/**', 'build/**'] });

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} files`);
}

main().catch(console.error);