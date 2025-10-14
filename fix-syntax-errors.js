#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals - replace ' with ' at end of lines
  fixed = fixed.replace(/'$/gm, "'");
  
  // Fix malformed object properties - remove extra quotes and fix syntax
  fixed = fixed.replace(/(\w+):\s*'([^']*)',/g, '$1: "$2",');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)",/g, '$1: "$2",');
  
  // Fix object properties with trailing quotes
  fixed = fixed.replace(/(\w+):\s*'([^']*)'$/gm, '$1: "$2"');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"$/gm, '$1: "$2"');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)'$/gm, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*)'$/gm, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*)'$/gm, 'description="$1"');
  
  // Fix object literals with missing commas
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/{\s*'([^']*)':\s*'([^']*)',?\s*}/g, '{"$1": "$2"}');
  
  // Fix missing closing brackets/parentheses
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  // Fix numeric literal issues
  fixed = fixed.replace(/(\d+)([a-zA-Z_])/g, '$1 $2');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*'([^']*)';/g, 'import { $1 } from "$2";');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, '$1;');
  
  // Fix extra quotes in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<(\w+)\s*([^>]*)\s*>\s*$/gm, '<$1 $2>');
  
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
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(async pattern => {
    const files = await glob(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };