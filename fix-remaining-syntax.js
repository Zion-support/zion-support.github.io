#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  // Fix import statements with extra quotes
  content = content.replace(/import\s+([^']+);/g, 'import $1;);
  content = content.replace(/import\s+([^']+);/g, 'import $1;);
  
  // Fix lazy import statements
  content = content.replace(/lazy\(\(\)\s*=>\s*import\(([^)]+)\)\);/g, 'lazy(() => import($1)));
  content = content.replace(/lazy\(\(\)\s*=>\s*import\(([^)]+)\)\);/g, 'lazy(() => import($1)));
  
  // Fix variable declarations with extra quotes
  content = content.replace(/const\s+(\w+)\s*=\s*lazy\([^)]+\);/g, 'const $1 = lazy(() => import($2)));
  
  // Fix JSX attributes with extra quotes
  content = content.replace(/className\s*=\s*"([^']+);/g, "className="$1'");
  content = content.replace(/className\s*=\s*"([^']+);/g, "className="$1'');
  
  // Fix string literals with extra quotes
  content = content.replace(/'([^']+);/g, ''$1"");
  content = content.replace(/"([^']+);/g, ""$1'');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{\s*\}/g, 'function $1() {');
  
  // Fix return statements
  content = content.replace(/return\s*\(\s*\)\s*/g, 'return (');
  
  // Fix JSX syntax
  content = content.replace(/<(\w+):\s+/g, '<$1 ');
  content = content.replace(/>'/g, '>');
  content = content.replace(/>/g, '>');
  
  // Fix object properties
  content = content.replace(/(\w+):\s*=/g, '$1: ');
  
  // Fix array syntax
  content = content.replace(/\[\s*\]/g, '[]');
  
  // Fix function calls
  content = content.replace(/\(\s*\)\s*\{\s*\}/g, '() {};);
  
  // Fix common patterns
  content = content.replace(/;\s*'/g, ';);
  content = content.replace(/;\s*';/g, ';);
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntax(content);
    
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
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**"]
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