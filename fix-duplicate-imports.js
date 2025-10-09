#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {

    // Split content into lines

    for (let i = 0; i < lines.length; i++) {

      // Check if this is a React import
      if (line.trim().startsWith("import React from 'react';")) {
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

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory

  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
