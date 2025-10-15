#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final syntax errors
function fixFinalSyntax(content) {
  // Fix try blocks with extra semicolons
  content = content.replace(/try\s*\{\s*;/g, 'try {');
  
  // Fix console.error statements
  content = content.replace(/console\.error\([^)]+\);/g, (match) => match.slice(0, -1) + ';');
  
  // Fix closing braces with extra quotes
  content = content.replace(/}\s*'/g, '};');
  
  // Fix if statements with extra quotes
  content = content.replace(/if\s*\([^)]+\)\s*\{\s*"'\s*/g, (match) => match.replace(/"'\s*$/, ' {'));
  
  // Fix return statements
  content = content.replace(/return\s+[^;]+\);/g, (match) => match.slice(0, -1) + ';');
  
  // Fix variable declarations
  content = content.replace(/const\s+[^=]+=\s*[^;]+\);/g, (match) => match.slice(0, -1) + ';');
  
  // Fix object destructuring
  content = content.replace(/const\s+\{[^}]+\}\s*=\s*[^;]+\);/g, (match) => match.slice(0, -1) + ';');
  
  // Fix function calls
  content = content.replace(/\([^)]+\)\s*\{\s*"'\s*/g, (match) => match.replace(/"'\s*$/, ' {'));
  
  // Fix string literals with extra quotes
  content = content.replace(/'([^']+);/g, "'$1'");
  content = content.replace(/"([^"]+);/g, '"$1"');
  
  // Fix semicolons
  content = content.replace(/;\s*'/g, ';');
  content = content.replace(/;\s*';/g, ';');
  
  // Fix closing parentheses
  content = content.replace(/\)\s*'/g, ');');
  content = content.replace(/\)\s*';/g, ');');
  
  // Fix export statements
  content = content.replace(/export\s+default\s+[^;]+'/g, (match) => match.slice(0, -1) + ';');
  
  // Fix JSX closing tags
  content = content.replace(/\)\s*"/g, ');');
  content = content.replace(/\)\s*'/g, ');');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
    'api/**/*.js',
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx'
  ];
  
  let totalFixed = 0;
  
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