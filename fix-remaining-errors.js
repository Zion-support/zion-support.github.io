#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining TypeScript errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace("import React from 'react';\n", '');
      modified = true;
    }

    // Remove unused Navigation imports
    if (content.includes("import Navigation from '../components/Navigation';") && !content.includes('<Navigation')) {
      content = content.replace("import Navigation from '../components/Navigation';\n", '');
      modified = true;
    }

    // Fix ErrorBoundary usage - add import if missing
    if (content.includes('<ErrorBoundary') && !content.includes("import ErrorBoundary")) {
      const importLine = "import ErrorBoundary from '../../components/GlobalErrorBoundary';\n";
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import line
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      lines.splice(insertIndex, 0, importLine);
      content = lines.join('\n');
      modified = true;
    }

    // Remove unused AboutLayout function
    if (content.includes('function AboutLayout()')) {
      const lines = content.split('\n');
      const newLines = [];
      let skipFunction = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('function AboutLayout()')) {
          skipFunction = true;
          braceCount = 0;
          continue;
        }
        
        if (skipFunction) {
          if (line.includes('{')) braceCount++;
          if (line.includes('}')) braceCount--;
          if (braceCount === 0) {
            skipFunction = false;
            continue;
          }
          continue;
        }
        
        newLines.push(line);
      }
      
      content = newLines.join('\n');
      modified = true;
    }

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
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

main().catch(console.error);