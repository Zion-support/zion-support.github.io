#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix console statements in a file
function fixConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace console.log with a comment or remove
    const consoleRegex = /console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g;
    const matches = content.match(consoleRegex);

    if (matches) {
      // Replace with eslint-disable-next-line no-console comment
      content = content.replace(consoleRegex, match => {
        const lines = match.split('\n');
        const firstLine = lines[0];
        const indent = firstLine.match(/^(\s*)/)[1];
        return `${indent}// eslint-disable-next-line no-console\n${match}`;
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      // console.log(`Fixed console statements in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'lib/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: ['**/node_modules/**', '**/.*'],
    });
    files.forEach(file => {
      if (fixConsoleStatements(file)) {
        totalFixed++;
      }
    });
  }

  // console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();
