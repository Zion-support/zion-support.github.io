#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix object literal syntax errors
function fixObjectLiterals(content) {
  // Fix missing opening braces in array objects
  // Pattern: [\s]*icon: -> [\s]*{\s*icon:
  content = content.replace(/(\s+)(icon:\s*[^,}]+,\s*title:\s*[^,}]+,\s*description:\s*[^,}]+(?:,\s*benefits:\s*\[[^\]]+\])?)\s*}/g, (match, indent, objContent) => {
    return `${indent}{${objContent}\n${indent}}`;
  });

  // Fix missing opening braces for single property objects
  content = content.replace(/(\s+)(icon:\s*[^,}]+)\s*}/g, (match, indent, objContent) => {
    return `${indent}{${objContent}\n${indent}}`;
  });

  // Fix missing opening braces for title property
  content = content.replace(/(\s+)(title:\s*[^,}]+,\s*description:\s*[^,}]+(?:,\s*benefits:\s*\[[^\]]+\])?)\s*}/g, (match, indent, objContent) => {
    return `${indent}{${objContent}\n${indent}}`;
  });

  return content;
}

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  // Fix missing closing tags - this is more complex and would need specific patterns
  // For now, let's focus on the object literal issues
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixObjectLiterals(fixedContent);
    fixedContent = fixJSXSyntax(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
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
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
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

export { fixObjectLiterals, fixJSXSyntax, processFile };