#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\n\s*)(\w+):/g, '$1: $2,\n$3$4:');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*(\n\s*)(\w+):/g, '$1,\n$2$3:');
  
  // Fix semicolons in JSX text content
  fixed = fixed.replace(/(<[^>]+>)\s*([^<]+);\s*(<\/[^>]+>)/g, '$1$2$3');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*);\s*"/g, 'className="$1"');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*([^<]+)\s*;\s*<\/\1>/g, '<$1$2>$3</$1>');
  
  // Fix duplicate content (remove everything after the first closing brace of a function)
  const functionMatch = fixed.match(/(export\s+default\s+function[^{]+\{[^}]+})/s);
  if (functionMatch) {
    const functionEnd = fixed.indexOf('}', functionMatch.index + functionMatch[0].length);
    if (functionEnd !== -1) {
      const afterFunction = fixed.substring(functionEnd + 1);
      if (afterFunction.trim().length > 0) {
        // Keep only the function and remove everything after
        fixed = fixed.substring(0, functionEnd + 1) + '\n}';
      }
    }
  }
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\n\s*)(\w+):/g, '$1: $2,\n$3$4:');
  
  // Fix malformed grid classes
  fixed = fixed.replace(/grid md:\s*grid-cols/g, 'grid md:grid-cols');
  
  // Fix missing closing parentheses in JSX
  fixed = fixed.replace(/(<[^>]+>)\s*([^<]+)\s*;\s*(<\/[^>]+>)/g, '$1$2$3');
  
  // Fix duplicate closing tags
  fixed = fixed.replace(/(<\/[^>]+>)\s*<\/[^>]+>/g, '$1');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n}'.repeat(openBraces - closeBraces);
  }
  
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
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };