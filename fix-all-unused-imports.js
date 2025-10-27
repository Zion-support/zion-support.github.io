#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixUnusedImports() {
  try {
    // Find all TypeScript/TSX files in the app directory
    const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });
    
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join('/workspace', file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has unused React import on line 2
      const lines = content.split('\n');
      if (lines.length >= 2 && lines[1].trim() === "import React from 'react';") {
        // Remove the React import line
        const newContent = lines.slice(0, 1).concat(lines.slice(2)).join('\n');
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    }
    
    console.log(`\nFixed ${fixedCount} files with unused React imports.`);
  } catch (error) {
    console.error('Error fixing unused imports:', error);
  }
}

fixUnusedImports();
