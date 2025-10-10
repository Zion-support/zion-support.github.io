#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix object property syntax errors
  fixed = fixed.replace(/(\w+):\s*(\w+),;/g, '$1: $2,');
  fixed = fixed.replace(/(\w+):\s*'([^']+)',;/g, "$1: '$2',");
  fixed = fixed.replace(/(\w+):\s*"([^"]+)",;/g, '$1: "$2",');
  fixed = fixed.replace(/(\w+):\s*\[([^\]]+)\],;/g, '$1: [$2],');
  
  // Fix array syntax errors
  fixed = fixed.replace(/\[\s*{;\s*/g, '[{');
  fixed = fixed.replace(/}\s*;\s*\]/g, '}]');
  fixed = fixed.replace(/\[\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\s*\]/g, "['$1', '$2', '$3']");
  
  // Fix JSX syntax errors
  fixed = fixed.replace(/<\$1>/g, '');
  fixed = fixed.replace(/<\$1\s*>/g, '');
  fixed = fixed.replace(/<\$1\s*\/>/g, '');
  fixed = fixed.replace(/<\$1\s*;\s*>/g, '');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\(\s*<\$1>;/g, 'const $1 = () => (');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\(\s*<\$1>\s*\);/g, 'const $1 = () => (<>');
  
  // Fix return statements
  fixed = fixed.replace(/return\s*\(\s*<\$1>/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*<\$1>\s*\)/g, 'return (<>');
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/<(\w+)\s+([^>]+);\s*>/g, '<$1 $2>');
  
  // Fix semicolons in wrong places
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/;\s*\/\//g, ' //');
  fixed = fixed.replace(/;\s*\/\*/g, ' /*');
  
  // Fix duplicate React imports
  fixed = fixed.replace(/import React from 'react';\s*import React, {[^}]+} from 'react';/g, "import React, { $1 } from 'react';");
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\s*;\s*>/g, '</>');
  
  // Fix empty JSX elements
  fixed = fixed.replace(/<(\w+)\s*>\s*<\/\1>/g, '<$1 />');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/\[\s*;\s*/g, '[');
  fixed = fixed.replace(/{\s*;\s*/g, '{');
  
  // Fix JSX expressions
  fixed = fixed.replace(/{\s*<\$1>\s*}/g, '{}');
  fixed = fixed.replace(/{\s*<\$1\s*>\s*}/g, '{}');
  
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
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run main function if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixRemainingErrors, processFile };