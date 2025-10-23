#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix semicolon issues
function fixSemicolons(content) {
  // Fix function declarations with extra semicolons
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{;/g, 'const $1: React.FC = () => {');
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{;/g, 'const $1 = () => {');
  
  // Fix array declarations with extra semicolons
  content = content.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [');
  
  // Fix object properties with extra semicolons
  content = content.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');
  content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2');
  
  // Fix array elements with extra semicolons
  content = content.replace(/\{([^}]+)\},;/g, '{$1},');
  content = content.replace(/\{([^}]+)\};/g, '{$1}');
  
  // Fix string literals with extra semicolons
  content = content.replace(/(['"`][^'"`]*['"`]),;/g, '$1,');
  content = content.replace(/(['"`][^'"`]*['"`]);/g, '$1');
  
  // Fix JSX elements with extra semicolons
  content = content.replace(/(<[^>]+>),;/g, '$1,');
  content = content.replace(/(<[^>]+>);/g, '$1');
  
  // Fix closing braces with extra semicolons
  content = content.replace(/\},;/g, '},');
  content = content.replace(/\};/g, '}');
  
  // Fix closing brackets with extra semicolons
  content = content.replace(/\],;/g, '],');
  content = content.replace(/\];/g, ']');
  
  return content;
}

// Function to fix other syntax issues
function fixSyntax(content) {
  // Fix missing spaces in imports
  content = content.replace(/import\s+React\s+from/g, 'import React from');
  
  // Fix malformed JSX
  content = content.replace(/<>\s*<([^>]+)>/g, '<><$1>');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSemicolons(content);
    content = fixSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed semicolons: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts'
];

let totalFixed = 0;

(async () => {
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
})();