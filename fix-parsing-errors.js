#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix missing commas in object literals
  {
    pattern: /(\s+)(\w+):\s*['"`][^'"`]*['"`],?\s*\n\s*(\w+):/g,
    replacement: '$1$2: $3,\n$1$3:'
  },
  // Fix missing commas in arrays
  {
    pattern: /(\s+)(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g,
    replacement: '$1$2: $3,\n$1$3:'
  },
  // Fix missing closing braces in objects
  {
    pattern: /(\s+)(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g,
    replacement: '$1$2: $3,\n$1$3:'
  },
  // Fix JSX closing tag issues
  {
    pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*<\/?(\w+)([^>]*)>/g,
    replacement: '<$1$2>$3</$1>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object/array literals
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const nextLine = lines[i + 1];
      
      // Check if current line ends with a property and next line starts with a property
      if (line.match(/\s+\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s+\w+:/)) {
        // Add comma if missing
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      // Fix missing closing braces
      if (line.match(/\s+\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s*[}\]]/)) {
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files
const files = await glob('src/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} TypeScript/JSX files`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);