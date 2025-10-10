#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors by escaping > characters in text content
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix > characters in JSX text content that should be escaped
  // This regex looks for > characters that are not part of JSX tags
  fixed = fixed.replace(/([^<>\s])>([^<>\s])/g, '$1&gt;$2');
  
  // Fix specific patterns that are common in the codebase
  fixed = fixed.replace(/Get Started>/g, 'Get Started&gt;');
  fixed = fixed.replace(/Schedule Demo>/g, 'Schedule Demo&gt;');
  fixed = fixed.replace(/Learn More>/g, 'Learn More&gt;');
  fixed = fixed.replace(/Advanced 5G Features>/g, 'Advanced 5G Features&gt;');
  fixed = fixed.replace(/About Zion Tech Group>/g, 'About Zion Tech Group&gt;');
  fixed = fixed.replace(/Accessibility>/g, 'Accessibility&gt;');
  fixed = fixed.replace(/Solutions>/g, 'Solutions&gt;');
  
  // Fix any remaining malformed closing tags
  fixed = fixed.replace(/><\/<([^>]+)>/g, '></$1>');
  
  // Fix incomplete JSX elements
  fixed = fixed.replace(/;\s*$/gm, '');
  
  // Fix React.Fragment issues
  fixed = fixed.replace(/<\/React\.Fragment>\s*\)\s*$/gm, '</React.Fragment>');
  
  // Fix incomplete JSX expressions
  fixed = fixed.replace(/{\s*;\s*}/g, '{}');
  
  // Fix any remaining semicolons in JSX
  fixed = fixed.replace(/;\s*>/g, '>');
  fixed = fixed.replace(/;\s*<\/\s*([^>]+)>/g, '></$1>');
  
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