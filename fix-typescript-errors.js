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
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const files = await glob('**/*.{ts,tsx}', { cwd: srcDir });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(srcDir, file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} files`);
}

main().catch(console.error);

export { fixFile, patterns };