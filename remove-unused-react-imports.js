#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TSX files
const pageFiles = await glob('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${pageFiles.length} TSX files to process...`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Check if file uses React. syntax
    const usesReactSyntax = content.includes('React.') || content.includes('React,');
    
    if (!usesReactSyntax) {
      // Remove React import if it exists
      const lines = content.split('\n');
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip React import lines
        if (line.trim().startsWith('import React from') || 
            line.trim().startsWith("import React from 'react'") ||
            line.trim().startsWith('import React from "react"')) {
          modified = true;
          continue;
        }
        
        newLines.push(line);
      }
      
      if (modified) {
        const newContent = newLines.join('\n');
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Removed unused React import from: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nRemoved unused React imports from ${fixedCount} files out of ${pageFiles.length} total files.`);