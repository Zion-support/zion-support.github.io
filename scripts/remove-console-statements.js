#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove console statements from a file
function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove console.log, console.warn, console.error, console.info, console.debug
    const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
    if (consoleRegex.test(content)) {
      content = content.replace(consoleRegex, '');
      modified = true;
    }

    // Remove console statements that span multiple lines
    const multiLineConsoleRegex = /^\s*console\.(log|warn|error|info|debug)\(\s*[\s\S]*?\);\s*$/gm;
    if (multiLineConsoleRegex.test(content)) {
      content = content.replace(multiLineConsoleRegex, '');
      modified = true;
    }

    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Function to process all TypeScript and JavaScript files
async function processFiles() {
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'utils/**/*.{ts,tsx,js,jsx}',
    'hooks/**/*.{ts,tsx,js,jsx}',
    'scripts/**/*.{ts,tsx,js,jsx}'
  ];

  let totalFiles = 0;
  let modifiedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      // Skip node_modules and dist directories
      if (file.includes('node_modules') || file.includes('dist') || file.includes('.next')) {
        continue;
      }

      totalFiles++;
      if (removeConsoleStatements(file)) {
        modifiedFiles++;
      }
    }
  }

}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {

  processFiles();
}

export { removeConsoleStatements, processFiles };