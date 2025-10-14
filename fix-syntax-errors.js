#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals by adding missing quotes
  // Look for lines that start with a quote but don't end with one
  fixed = fixed.replace(/^(\s*"[^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"') && !p1.endsWith('";')) {
      return p1 + '"' + p2;
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"')) {
      return `content="${p1}"${p2}`;
    }
    return match;
  });
  
  // Remove merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  
  // Fix extra semicolons and quotes
  fixed = fixed.replace(/;";/g, ';');
  fixed = fixed.replace(/";"/g, ';');
  fixed = fixed.replace(/""/g, '"');
  fixed = fixed.replace(/;;/g, ';');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import React from "react";";/g, 'import React from "react";');
  fixed = fixed.replace(/import {[^}]*} from "[^"]*";";/g, (match) => match.replace(/";$/, '";'));
  
  // Fix JSX structure issues
  fixed = fixed.replace(/return \("([\s\S]*?)"\);/g, (match, p1) => {
    return `return (\n${p1}\n);`;
  });
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>([\s\S]*?)(\n\s*\))/g, (match, p1, p2, p3) => {
    if (!p2.includes('</div>')) {
      return `<div${p1}>${p2}</div>${p3}`;
    }
    return match;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
  fixed = fixed.replace(/const \w+ = \(\) => \{"/g, (match) => match.replace(/"/, ''));
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '\n' + '}'.repeat(missingBraces);
  }
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, p1) => {
    if (!p1.trim()) return '<></>';
    return `<>${p1}</>`;
  });
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, p1) => {
    if (['return', 'const', 'let', 'var', 'function'].includes(p1)) {
      return match;
    }
    if (!match.endsWith(';') && !match.endsWith('{') && !match.endsWith('}') && !match.endsWith(')')) {
      return match + ';';
    }
    return match;
  });
  
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
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
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