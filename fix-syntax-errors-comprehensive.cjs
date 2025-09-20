#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons in object properties
  content = content.replace(/(\w+):\s*([^,\n}]+),(\s*)(\w+):/g, '$1: $2,\n    $4:');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s+(\w+)(?=\s*[,\]])/g, '$1, $2');
  
  // Fix missing quotes in strings
  content = content.replace(/(\w+)(\w+)(?=\s*[,\]])/g, '$1, $2');
  
  // Fix object property declarations
  content = content.replace(/(\w+)(\w+):/g, '$1, $2:');
  
  // Fix array elements
  content = content.replace(/\[([^\]]+)\]/g, (match, content) => {
    const fixed = content.replace(/(\w+)(\w+)/g, '$1, $2');
    return `[${fixed}]`;
  });
  
  // Fix function parameters
  content = content.replace(/\(\s*([^,]+),([^)]+)\s*\)/g, '($1, $2)');
  
  // Fix template literals
  content = content.replace(/`([^`]*)(\w+)(\w+)([^`]*)`/g, '`$1$2, $3$4`');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
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
    'src/components/*.tsx',
    'src/components/*.ts',
    'src/components/*.jsx',
    'src/components/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };