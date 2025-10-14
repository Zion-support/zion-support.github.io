#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining syntax errors in a file
function fixRemainingErrors(content) {
  let fixed = content;

  // Fix 1: Fix malformed function declarations
  // Pattern: const PagePage = () => {'  return (' -> const PagePage = () => {\n  return (
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{'(\s*)return\s*\(/g, 'const $1 = () => {\n  return (');
  
  // Fix 2: Fix JSX attributes with colons
  // Pattern: name: "description" -> name="description"
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"');
  fixed = fixed.replace(/(\w+):\s*'([^']*)'/g, "$1='$2'");
  
  // Fix 3: Fix malformed JSX closing tags
  // Pattern: </Helmet>"      <div> -> </Helmet>\n      <div>
  fixed = fixed.replace(/>"(\s*)</g, '>\n$1<');
  
  // Fix 4: Fix malformed string literals
  // Pattern: "            This page is under construction. Please check back later."          </p>
  fixed = fixed.replace(/"(\s*)([^"]*)"(\s*)(<\/[^>]+>)/g, '$1$2$3$4');
  
  // Fix 5: Fix missing closing quotes in JSX
  fixed = fixed.replace(/(\w+)="([^"]*)"(\s*)([^"<])/g, '$1="$2"$3$4');
  
  // Fix 6: Fix malformed JSX structure
  // Pattern: <div>          <h1 -> <div>\n          <h1
  fixed = fixed.replace(/>(\s*)(<[^>]+>)/g, '>\n$1$2');
  
  // Fix 7: Fix missing closing tags
  fixed = fixed.replace(/(<[^>]+>)(\s*)([^<]+)(\s*)(<\/[^>]+>)/g, '$1\n$2$3$4\n$5');
  
  // Fix 8: Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div>/g, 'return (\n    <div>');
  
  // Fix 9: Fix missing semicolons and proper formatting
  fixed = fixed.replace(/}\s*$/gm, '}\n');
  fixed = fixed.replace(/;\s*$/gm, ';\n');
  
  // Fix 10: Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+):\s*([^"'\s>]+)(\s|>)/g, '$1="$2"$3');
  
  // Fix 11: Clean up extra quotes and malformed strings
  fixed = fixed.replace(/"\s*"/g, '"');
  fixed = fixed.replace(/""/g, '"');
  
  // Fix 12: Fix malformed JSX closing tags
  fixed = fixed.replace(/>"(\s*)(<\/[^>]+>)/g, '>\n$1$2');
  
  // Fix 13: Fix missing closing brackets
  fixed = fixed.replace(/}\s*"(\s*)([^}])/g, '}\n$1$2');
  
  // Fix 14: Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{'(\s*)/g, 'const $1 = () => {\n$2');
  
  // Fix 15: Fix malformed JSX structure
  fixed = fixed.replace(/(<[^>]+>)(\s*)([^<]+)(\s*)(<\/[^>]+>)/g, '$1\n$2$3$4\n$5');
  
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
    'app/**/*.jsx',
    'app/**/*.js'
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
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixRemainingErrors, processFile };