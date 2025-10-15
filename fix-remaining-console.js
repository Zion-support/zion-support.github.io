#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to add ESLint disable comments to console statements
function addEslintDisable(content) {
  // Pattern to match console statements that are not already disabled
  const consolePattern = /^(\s*)(console\.(log|warn|error|info|debug)\([^)]*\);?)$/gm;
  
  return content.replace(consolePattern, (match, indent, consoleStatement) => {
    // Check if already has eslint-disable
    if (content.includes('eslint-disable-next-line no-console')) {
      return match;
    }
    
    return `${indent}// eslint-disable-next-line no-console\n${indent}${consoleStatement}`;
  });
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = addEslintDisable(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Added ESLint disable comments to: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const scriptFiles = await glob('scripts/**/*.js');
  const fixFiles = ['fix-console-statements.js', 'fix-syntax-errors.js'];
  const allFiles = [...scriptFiles, ...fixFiles];
  let totalFixed = 0;
  
  for (const file of allFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
  
  console.log(`\nAdded ESLint disable comments to ${totalFixed} files`);
}

main().catch(console.error);