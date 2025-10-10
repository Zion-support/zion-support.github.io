#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove semicolons after JSX elements and other common patterns
  fixed = fixed.replace(/;\s*$/gm, ''); // Remove trailing semicolons
  fixed = fixed.replace(/;\s*{/g, ' {'); // Fix semicolons before opening braces
  fixed = fixed.replace(/;\s*}/g, ' }'); // Fix semicolons before closing braces
  fixed = fixed.replace(/;\s*\[/g, ' ['); // Fix semicolons before opening brackets
  fixed = fixed.replace(/;\s*\]/g, ' ]'); // Fix semicolons before closing brackets
  fixed = fixed.replace(/;\s*\(/g, ' ('); // Fix semicolons before opening parentheses
  
  // Fix specific patterns
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [');
  fixed = fixed.replace(/{\s*;/g, '{');
  fixed = fixed.replace(/}\s*;/g, '}');
  fixed = fixed.replace(/\[\s*;/g, '[');
  fixed = fixed.replace(/\]\s*;/g, ']');
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix duplicate imports
  fixed = fixed.replace(/import React from 'react';\s*import React, {[^}]+} from 'react';/g, (match) => {
    const secondImport = match.match(/import React, {([^}]+)} from 'react';/);
    if (secondImport) {
      return `import React, {${secondImport[1]}} from 'react';`;
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/=\s*{;\s*([^}]+);\s*}/g, '={$1}');
  fixed = fixed.replace(/=\s*"([^"]*);\s*"/g, '="$1"');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{;/g, 'const $1 = () => {');
  
  // Clean up extra whitespace
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  fixed = fixed.replace(/^\s*\n/gm, '');
  
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
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);

export { fixSyntaxErrors, processFile };