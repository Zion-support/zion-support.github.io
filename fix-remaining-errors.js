#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals at the beginning of files
  // Pattern: import React from 'react'; -> import React from 'react';
  fixed = fixed.replace(/import\s+React\s+from\s+'react';\s*$/gm, "import React from 'react';");
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+([^']+)'\s*$/gm, "import $1 from 'react';");
  
  // Fix numeric literal issues in JSX
  // Pattern: 5G -> "5G"
  fixed = fixed.replace(/(\d+[A-Za-z]+)/g, '"$1"');
  
  // Fix JSX expressions with multiple parent elements
  // Wrap multiple elements in React.Fragment
  fixed = fixed.replace(/<>\s*<([^>]+)>\s*<([^>]+)>\s*<\/>\s*$/gm, '<>\n  <$1></$1>\n  <$2></$2>\n</>');
  
  // Fix missing closing quotes in string literals
  fixed = fixed.replace(/'([^']*)\n/g, "'$1'\n");
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)\n/g, 'className="$1"\n');
  
  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*)\n/g, '`$1`\n');
  
  // Fix missing semicolons in import statements
  fixed = fixed.replace(/import\s+([^;]+)\n/g, 'import $1;\n');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)\n/g, "$1: '$2',\n");
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/{\s*([^}]*)\n\s*$/gm, '{\n  $1\n}');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>\s*$/gm, '</>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      cwd: process.cwd(),
      ignore: ['node_modules/**', 'dist/**', '.next/**']
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixRemainingErrors, processFile };