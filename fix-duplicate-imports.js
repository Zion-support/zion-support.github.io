#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if it's a TypeScript/TSX file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) {
      return false;
    }

    // Skip if file is in node_modules or dist
    if (filePath.includes('node_modules') || filePath.includes('dist')) {
      return false;
    }

    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    const seenImports = new Set();

    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          importLines.push(line);
        } else {
          modified = true;
        }
      } else {
        otherLines.push(line);
      }
    }

    if (modified) {
      const newContent = [...importLines, ...otherLines].join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed duplicate imports: ${filePath}`);
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
  console.log('Starting duplicate import fixes...');

  // Get all TypeScript/TSX files
  const files = await glob('src/**/*.{ts,tsx}', { cwd: process.cwd() });

  let fixedCount = 0;

  for (const file of files) {
    if (fixDuplicateImports(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixDuplicateImports };
