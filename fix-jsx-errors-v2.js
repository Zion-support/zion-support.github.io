#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// More specific JSX/TSX error patterns to fix
const fixes = [
  // Fix missing commas after benefits arrays
  {
    pattern: /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g,
    replacement: '$1,\n$2,\n$3'
  },
  // Fix missing commas after description properties
  {
    pattern: /(\s+description:\s*'[^']+',)\s*(\n\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g,
    replacement: '$1\n$2,\n$3,\n$4'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\s+title:\s*'[^']+',)\s*(\n\s+description:\s*'[^']+',)\s*(\n\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g,
    replacement: '$1\n$2\n$3,\n$4,\n$5'
  },
  // Fix extra semicolons and brackets
  {
    pattern: /;\s*;\s*\]\s*;\s*\]\s*;/g,
    replacement: '];'
  },
  {
    pattern: /;\s*\]\s*;\s*\]\s*;/g,
    replacement: '];'
  },
  // Fix missing commas in JSX attributes
  {
    pattern: /(\w+)\s*=\s*\{([^}]+)\}\s*(\w+)\s*=/g,
    replacement: '$1={$2}, $3='
  },
  // Fix specific pattern: benefits array without comma
  {
    pattern: /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*const)/g,
    replacement: '$1,\n$2\n$3'
  },
  // Fix specific pattern: benefits array at end of object
  {
    pattern: /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*];)/g,
    replacement: '$1,\n$2\n$3'
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

// Main execution
async function main() {
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

  console.log(`Found ${files.length} TSX files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);