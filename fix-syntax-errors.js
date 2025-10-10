#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix semicolons in wrong places (after JSX elements, imports, etc.)
  // Remove semicolons after closing JSX tags
  fixed = fixed.replace(/;\s*<\/[^>]+>/g, '</$1>');
  
  // Remove semicolons after JSX opening tags
  fixed = fixed.replace(/;\s*<[^>]+>/g, '<$1>');
  
  // Remove semicolons after React component declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
  
  // Remove semicolons after array/object declarations
  fixed = fixed.replace(/\[\s*;/g, '[');
  fixed = fixed.replace(/{\s*;/g, '{');
  
  // Remove semicolons after return statements
  fixed = fixed.replace(/return\s*\(;/g, 'return (');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Remove semicolons after import statements (keep the import itself)
  fixed = fixed.replace(/import\s+[^;]+;\s*;/g, (match) => match.replace(/;$/, ''));
  
  // Fix empty JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  
  // Remove semicolons after function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\([^)]*\)\s*{;/g, 'function $1($2) {');
  
  // Fix array/object syntax
  fixed = fixed.replace(/\[\s*{;\s*/g, '[{');
  fixed = fixed.replace(/}\s*;\s*\]/g, '}]');
  fixed = fixed.replace(/{\s*;\s*/g, '{');
  fixed = fixed.replace(/}\s*;\s*}/g, '}}');
  
  // Remove semicolons after variable declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*{;/g, 'const $1 = {');
  
  // Fix JSX attributes
  fixed = fixed.replace(/<(\w+)\s+([^>]+);\s*>/g, '<$1 $2>');
  
  // Remove semicolons after closing braces
  fixed = fixed.replace(/}\s*;\s*$/gm, '}');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\s*;\s*>/g, '</>');
  
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

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };