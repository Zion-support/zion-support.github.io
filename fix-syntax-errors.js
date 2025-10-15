#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Remove extra semicolons and quotes from import statements
  content = content.replace(/import\s+([^;]+);"'/g, 'import $1;);
  content = content.replace(/import\s+([^']+);/g, 'import $1;);
  content = content.replace(/import\s+([^']+);/g, 'import $1;);
  
  // Fix variable declarations with extra semicolons
  content = content.replace(/const:\s+/g, 'const ');
  content = content.replace(/let:\s+/g, 'let ');
  content = content.replace(/var:\s+/g, 'var ');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{\s*\}/g, 'function $1() {');
  
  // Fix return statements
  content = content.replace(/return\s*\(\s*\)\s*/g, 'return (');
  
  // Fix JSX className attributes
  content = content.replace(/className\s*=\s*"([^"]+);'/g, 'className="$1"');
  content = content.replace(/className\s*=\s*"([^"]+);'/g, 'className="$1"');
  
  // Fix JSX div attributes
  content = content.replace(/<div:\s+className/g, '<div className');
  
  // Fix unterminated string literals in common patterns
  content = content.replace(/'([^']*);/g, "'$1'");
  content = content.replace(/'([^']*);/g, "'$1'");
  content = content.replace(/'([^']*);/g, "'$1'");
  content = content.replace(/"([^"]*);/g, '"$1"');
  content = content.replace(/"([^"]*);/g, '"$1"');
  content = content.replace(/"([^"]*);/g, '"$1"');
  
  // Fix merge conflict markers
  content = content.replace(/^<<<<<<< HEAD.*$/gm, ');
  content = content.replace(/^=======.*$/gm, ');
  content = content.replace(/^>>>>>>> .*$/gm, ');
  
  // Fix common JSX syntax errors
  content = content.replace(/<(\w+):\s+/g, '<$1 ');
  content = content.replace(/>"'/g, '>');
  content = content.replace(/>"'/g, '>');
  
  // Fix object property syntax
  content = content.replace(/(\w+):\s*=/g, '$1: ');
  
  // Fix array syntax
  content = content.replace(/\[\s*\]/g, '[]');
  
  // Fix function call syntax
  content = content.replace(/\(\s*\)\s*\{\s*\}/g, '() {};);
  
  return content'
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false'
  }
}

// Main function
async function main() {
  const patterns = [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx'
  ];
  
  let totalFixed = 0'
  
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);