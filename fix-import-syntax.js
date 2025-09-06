#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix import statements
function fixImportStatements(content) {
  // Fix import statements that use commas instead of semicolons
  // Pattern: import ... from "..." , -> import ... from "...";
  content = content.replace(/import\s+.*?\s+from\s+['"][^'"]*['"]\s*,/g, (match) => {
    return match.replace(/,\s*$/, ';');
  });
  
  // Fix 'use client' statements
  content = content.replace(/'use client'\s*,/g, "'use client';");
  
  // Fix interface declarations that use commas
  content = content.replace(/interface\s+\w+\s*\{[^}]*\}\s*,/g, (match) => {
    return match.replace(/,\s*$/, ';');
  });
  
  // Fix type declarations that use commas
  content = content.replace(/type\s+\w+\s*=\s*[^;]+,\s*$/gm, (match) => {
    return match.replace(/,\s*$/, ';');
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixImportStatements(content);
    
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
    'src/**/*.tsx',
    'src/**/*.ts',
    'zion-os/**/*.tsx',
    'zion-os/**/*.ts'
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
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the main function
main().catch(console.error);

export { fixImportStatements, processFile };