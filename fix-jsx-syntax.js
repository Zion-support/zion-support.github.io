#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  // Fix common JSX syntax issues
  let fixed = content;
  
  // Fix semicolons in JSX closing tags
  fixed = fixed.replace(/;\s*<\/\s*([^>]+)>/g, '></$1>');
  
  // Fix semicolons in JSX self-closing tags
  fixed = fixed.replace(/;\s*\/>/g, ' />');
  
  // Fix semicolons in JSX opening tags
  fixed = fixed.replace(/;\s*>/g, '>');
  
  // Fix malformed closing tags like "  </" to proper closing tags
  fixed = fixed.replace(/\s+<\/\s*$/gm, '');
  
  // Fix incomplete JSX elements that end with just ";"
  fixed = fixed.replace(/;\s*$/gm, '');
  
  // Fix React.Fragment closing issues
  fixed = fixed.replace(/<\/React\.Fragment>\s*\)\s*$/gm, '</React.Fragment>');
  
  // Fix incomplete JSX expressions
  fixed = fixed.replace(/{\s*;\s*}/g, '{}');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
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
    'app/**/*.tsx',
    'app/**/*.jsx'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    console.log(`Processing ${files.length} files matching ${pattern}...`);
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXSyntax, processFile };