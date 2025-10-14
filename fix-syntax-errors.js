#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix syntax errors in a file
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix 1: Fix malformed import statements
  // Pattern: import React from "react";"import { Helmet } from "react-helmet-async";"
  fixed = fixed.replace(/import\s+([^;]+);"import\s+/g, 'import $1;\nimport ');
  
  // Fix 2: Fix missing quotes in import statements
  // Pattern: import React from 'react;'
  fixed = fixed.replace(/import\s+([^;]+)from\s+'([^']*);'/g, 'import $1 from \'$2\';');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]*);"/g, 'import $1 from "$2";');
  
  // Fix 3: Fix JSX attributes using colons instead of equals
  // Pattern: className: "text-white" -> className="text-white"
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"');
  fixed = fixed.replace(/(\w+):\s*'([^']*)'/g, "$1='$2'");
  
  // Fix 4: Fix malformed object syntax
  // Pattern: { name="AI Solutions, href=""/ai-solutions" } -> { name: "AI Solutions", href: "/ai-solutions" }
  fixed = fixed.replace(/(\w+)=([^,}]+),/g, '$1: $2,');
  fixed = fixed.replace(/(\w+)=([^,}]+)}/g, '$1: $2}');
  
  // Fix 5: Fix missing quotes in object properties
  fixed = fixed.replace(/(\w+):\s*([^",}]+),/g, '$1: "$2",');
  fixed = fixed.replace(/(\w+):\s*([^",}]+)}/g, '$1: "$2"}');
  
  // Fix 6: Fix concatenated strings without proper spacing
  // Pattern: "text-white mb-8">"          <p -> "text-white mb-8">\n          <p
  fixed = fixed.replace(/>"(\s*)</g, '>\n$1<');
  
  // Fix 7: Fix malformed JSX closing tags
  fixed = fixed.replace(/>"(\s*)(<\/[^>]+>)/g, '>\n$1$2');
  
  // Fix 8: Fix missing closing quotes in JSX
  fixed = fixed.replace(/(\w+)="([^"]*)"(\s*)([^"<])/g, '$1="$2"$3$4');
  
  // Fix 9: Fix malformed function declarations
  // Pattern: const currentYear :  new Date().getFullYear();
  fixed = fixed.replace(/const\s+(\w+)\s*:\s*/g, 'const $1 = ');
  
  // Fix 10: Fix missing semicolons and proper line breaks
  fixed = fixed.replace(/;\s*"/g, ';\n');
  fixed = fixed.replace(/}\s*"/g, '}\n');
  
  // Fix 11: Fix malformed array syntax
  // Pattern: const services :  [ -> const services = [
  fixed = fixed.replace(/const\s+(\w+)\s*:\s*\[/g, 'const $1 = [');
  
  // Fix 12: Fix missing closing brackets and parentheses
  fixed = fixed.replace(/}\s*"(\s*)([^}])/g, '}\n$1$2');
  
  // Fix 13: Clean up extra quotes and malformed strings
  fixed = fixed.replace(/"\s*"/g, '"');
  fixed = fixed.replace(/""/g, '"');
  
  // Fix 14: Fix malformed JSX attributes with missing quotes
  fixed = fixed.replace(/(\w+)=([^"'\s>]+)(\s|>)/g, '$1="$2"$3');
  
  // Fix 15: Fix missing closing tags and brackets
  fixed = fixed.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
  
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

export { fixSyntaxErrors, processFile };