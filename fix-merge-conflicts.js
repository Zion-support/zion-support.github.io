#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1')
    .replace(/=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved merge conflicts in: ${filePath}`);
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
  console.log('Starting merge conflict resolution...');
  
  // Find all TypeScript and JavaScript files
  const patterns = [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.js',
    'src/**/*.jsx',
    'app/**/*.ts',
    'app/**/*.tsx',
    'app/**/*.js',
    'app/**/*.jsx'
  ];
  
  let totalProcessed = 0;
  let totalResolved = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalProcessed++;
      if (processFile(file)) {
        totalResolved++;
      }
    }
  }
  
  console.log(`\nMerge conflict resolution complete!`);
  console.log(`Files processed: ${totalProcessed}`);
  console.log(`Files with resolved conflicts: ${totalResolved}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, processFile };