#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix quote issues
function fixQuoteIssues(content) {
  let fixed = content;

  // Fix "use client" directive
  fixed = fixed.replace(/"use client""/g, '"use client"');
  
  // Fix import statements with extra quotes
  fixed = fixed.replace(/import\s+([^;]+);"/g, 'import $1;');
  
  // Fix any other double quotes at end of lines
  fixed = fixed.replace(/;""/g, ';');
  fixed = fixed.replace(/""/g, '"');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixQuoteIssues(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed quotes in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];

  let totalFixed = 0;
  let totalProcessed = 0;

  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalProcessed++;
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });

  console.log(`\nProcessed ${totalProcessed} files`);
  console.log(`Fixed quotes in ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixQuoteIssues, processFile };