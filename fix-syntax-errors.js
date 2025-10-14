#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals with extra quotes and semicolons
  // Pattern: 'text', -> 'text',
  fixed = fixed.replace(/'([^']*)',\s*'/g, "'$1',");
  
  // Fix object properties with extra quotes and semicolons
  // Pattern: key: 'value',; -> key: 'value',
  fixed = fixed.replace(/(\w+):\s*'([^']*)',\s*;/g, "$1: '$2',");
  
  // Fix unterminated string literals at end of lines
  // Pattern: 'text' -> 'text'
  fixed = fixed.replace(/'([^']*)\n/g, "'$1'\n");
  
  // Fix numeric literal issues (e.g., 5G -> "5G")
  fixed = fixed.replace(/(\d+[A-Za-z]+)/g, '"$1"');
  
  // Fix missing closing quotes in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)\n/g, "$1: '$2',\n");
  
  // Fix JSX fragment closing issues
  // Replace unclosed fragments with proper closing
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>\s*$/gm, '</>');
  
  // Fix malformed object syntax
  // Pattern: {key: 'value',} -> {key: 'value'}
  fixed = fixed.replace(/,(\s*})/g, '$1');
  
  // Fix extra quotes in object properties
  // Pattern: "key": "value", -> key: "value",
  fixed = fixed.replace(/"([^"]+)":\s*"([^"]+)",/g, '$1: "$2",');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)'\n(\s*})/g, "$1: '$2',\n$3");
  
  // Fix unterminated strings in JSX
  fixed = fixed.replace(/className="([^"]*)\n/g, 'className="$1"\n');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/\[\s*{\s*$/gm, '[\n    {');
  fixed = fixed.replace(/}\s*\]/gm, '}\n  ]');
  
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

export { fixSyntaxErrors, processFile };