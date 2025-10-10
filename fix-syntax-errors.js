#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix semicolons after JSX elements (but not after regular statements)
  // Pattern: JSX element followed by semicolon at end of line
  fixed = fixed.replace(/(<[^>]+>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX attributes
  fixed = fixed.replace(/(\w+="[^"]*");\s*$/gm, '$1');
  
  // Fix semicolons after JSX closing tags
  fixed = fixed.replace(/(<\/[^>]+>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX self-closing tags
  fixed = fixed.replace(/(<[^>]+\/>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX fragments
  fixed = fixed.replace(/(<>|<\/>);\s*$/gm, '$1');
  
  // Fix semicolons after JSX expressions in attributes
  fixed = fixed.replace(/(\{[^}]*\});\s*$/gm, '$1');
  
  // Remove standalone semicolons on their own lines
  fixed = fixed.replace(/^\s*;\s*$/gm, '');
  
  // Fix malformed JSX structure - remove semicolons after opening tags
  fixed = fixed.replace(/(<[A-Za-z][^>]*>);\s*$/gm, '$1');
  
  // Fix semicolons after React component declarations
  fixed = fixed.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{);\s*$/gm, '$1');
  
  // Fix semicolons after return statements
  fixed = fixed.replace(/(return\s*\([^)]*\));\s*$/gm, '$1');
  
  // Fix semicolons after JSX return
  fixed = fixed.replace(/(return\s*<[^>]+>);\s*$/gm, '$1');
  
  // Clean up multiple empty lines
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(async pattern => {
    const files = await glob(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };