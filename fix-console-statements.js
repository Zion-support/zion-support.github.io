#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to wrap console statements in development check
function fixConsoleStatements(content) {
  // Pattern to match console statements that are not already wrapped
  const consolePattern = /^(\s*)(console\.(log|warn|error|info|debug)\([^)]*\);?)$/gm;
  
  return content.replace(consolePattern, (match, indent, consoleStatement) => {
    // Check if already wrapped
    if (content.includes(`if (process.env.NODE_ENV === 'development')`)) {
      return match;
    }
    
    return `${indent}if (process.env.NODE_ENV === 'development') {\n${indent}  ${consoleStatement}\n${indent}}`;
  });
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixConsoleStatements(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      if (process.env.NODE_ENV === 'development') {
         
        console.log(`Fixed console statements in: ${filePath}`);
      }
      return true;
    }
    return false;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
       
      console.error(`Error processing ${filePath}:`, error.message);
    }
    return false;
  }
}

// Main function
async function main() {
  const scriptFiles = await glob('scripts/**/*.js');
  let totalFixed = 0;
  
  for (const file of scriptFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
  
  if (process.env.NODE_ENV === 'development') {
     
    console.log(`\nFixed console statements in ${totalFixed} files`);
  }
}

main().catch(console.error);