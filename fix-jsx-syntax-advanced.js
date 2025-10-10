#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors more comprehensively
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix malformed button tags that got corrupted
  fixed = fixed.replace(/Get Started><\/<button/g, 'Get Started</button');
  fixed = fixed.replace(/Schedule Demo><\/<button/g, 'Schedule Demo</button');
  fixed = fixed.replace(/Learn More><\/<button/g, 'Learn More</button');
  fixed = fixed.replace(/Get Started><\/<div/g, 'Get Started</button>\n              <button');
  fixed = fixed.replace(/Schedule Demo><\/<div/g, 'Schedule Demo</button>\n            </div');
  
  // Fix other common patterns
  fixed = fixed.replace(/Advanced 5G Features><\/<h2/g, 'Advanced 5G Features</h2');
  fixed = fixed.replace(/About Zion Tech Group><\/<h1/g, 'About Zion Tech Group</h1');
  fixed = fixed.replace(/Accessibility><\/<span/g, 'Accessibility</span');
  fixed = fixed.replace(/Solutions><\/<span/g, 'Solutions</span');
  
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