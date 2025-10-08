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
    const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*$/gm;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process files recursively
async function processFiles(pattern) {
  const files = await glob(pattern, { 
    ignore: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.log',
      '*.json'
    ]
  });
  
  let processedCount = 0;
  let modifiedCount = 0;
  
  files.forEach(file => {
    processedCount++;
    if (removeConsoleLogs(file)) {
      modifiedCount++;
      // console.log(`Modified: ${file}`);
    }
  });
  
  // console.log(`\nProcessed ${processedCount} files, modified ${modifiedCount} files`);
  return { processedCount, modifiedCount };
}

// Main execution
// console.log('Starting console.log removal...');

const patterns = [
  'src/**/*.{js,jsx,ts,tsx}',
  'app/**/*.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
  'components/**/*.{js,jsx,ts,tsx}'
];

let totalProcessed = 0;
let totalModified = 0;

for (const pattern of patterns) {
  // console.log(`\nProcessing pattern: ${pattern}`);
  const result = await processFiles(pattern);
  totalProcessed += result.processedCount;
  totalModified += result.modifiedCount;
}

// console.log(`\n=== Summary ===`);
// console.log(`Total files processed: ${totalProcessed}`);
// console.log(`Total files modified: ${totalModified}`);
// console.log('Console.log removal completed!');