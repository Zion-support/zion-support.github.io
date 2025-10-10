#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to match commented-out variable declarations
const patterns = [
  // Match commented-out const/let/var declarations
  { regex: /\/\/\s*(const|let|var)\s+(\w+)\s*=/g, replacement: '$1 $2 =' },
  // Match commented-out variable assignments
  { regex: /\/\/\s*(\w+)\s*=/g, replacement: '$1 =' },
  // Match commented-out variable references
  { regex: /\/\/\s*(\w+)\s*[;,)]/g, replacement: '$1' },
  // Match commented-out object property assignments
  { regex: /\/\/\s*(\w+):\s*(\w+)/g, replacement: '$1: $2' },
  // Match commented-out function calls
  { regex: /\/\/\s*(\w+)\s*\(/g, replacement: '$1(' },
];

function fixFile(filePath) {
  try {

    patterns.forEach(pattern => {
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }
    return false;
  } catch (error) {

    return false;
  }
}

async function main() {
  
  
  files.forEach(file => {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);

export { fixFile, patterns };