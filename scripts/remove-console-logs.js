#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.error statements
    // but keep console.error for actual error handling
    const patterns = [
      // Remove console.log statements
      /console\.log\([^)]*\);?\s*/g,
      // Remove console.warn statements (but keep error handling ones)
      /console\.warn\([^)]*\);?\s*(?!.*error|.*Error|.*failed|.*Failed)/g,
      // Remove console.info statements
      /console\.info\([^)]*\);?\s*/g,
      // Remove console.debug statements
      /console\.debug\([^)]*\);?\s*/g,
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern, '');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript and JavaScript files
async function processFiles() {
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.d.ts',
        '**/__tests__/**',
        '**/test/**',
        '**/*.test.*',
        '**/*.spec.*',
      ]
    });
    
    for (const file of files) {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        modifiedFiles++;
      }
    }
  }
  
  if (modifiedFiles > 0) {
    } else {
    }
}

// Run the script
processFiles().catch(console.error);

export { removeConsoleLogs, processFiles };