#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix merge conflicts by keeping the HEAD version
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let fixed = content
    .replace(/  return fixed;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix malformed icon properties
  fixed = fixed.replace(/ico,\s*n:/g, 'icon:');
  
  // Fix missing closing braces in JSX
  fixed = fixed.replace(/(<div[^>]*>)\s*$/gm, '$1');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, func) => {
    if (func.match(/^(div|section|main|header|footer)$/)) {
      return match;
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      let fixed = fixMergeConflicts(content);
      fixed = fixSyntaxErrors(fixed);
      
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    // Check for syntax errors even without merge conflicts
    if (content.includes('ico, n:') || content.includes('},\n    {')) {
      console.log(`Fixing syntax errors in: ${filePath}`);
      
      let fixed = fixSyntaxErrors(content);
      
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed syntax: ${filePath}`);
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
  console.log('Starting merge conflict and syntax error fixes...\n');
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
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
  
  console.log(`\nCompleted! Processed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixMergeConflicts, fixSyntaxErrors, processFile };