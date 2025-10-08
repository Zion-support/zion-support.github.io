#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    let seenReactImport = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a React import
      if (line.trim().startsWith('import React from \'react\';')) {
        if (!seenReactImport) {
          newLines.push(line);
          seenReactImport = true;
          modified = true;
        }
        // Skip duplicate React imports
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
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

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);