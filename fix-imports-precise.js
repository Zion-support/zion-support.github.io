#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix only import statement double braces
function fixImportStatements(content) {
  // Fix double braces in import statements - very specific pattern
  content = content.replace(/import\s*\{([^}]+)\}\}from\s*['"]([^'"]+)['"]/g, "import {$1} from '$2'");
  
  // Fix any remaining malformed imports
  content = content.replace(/import\s*\{([^}]+)\}\}from\s*['"]([^'"]+)['"]/g, "import {$1} from '$2'");
  
  return content;
}

// Function to fix function declaration syntax
function fixFunctionDeclarations(content) {
  // Fix function declarations with extra comma
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $1: React.FC = () => {');
  
  return content;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply only specific fixes
    content = fixImportStatements(content);
    content = fixFunctionDeclarations(content);
    content = fixMergeConflicts(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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

export { fixImportStatements, fixFunctionDeclarations, fixMergeConflicts, processFile };