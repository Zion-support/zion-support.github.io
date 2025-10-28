#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by keeping the HEAD version (after =======)
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep only the content after =======
  return content
    .replace(/^<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1')
    .replace(/^<<<<<<< [^\n]+[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1')
    .replace(/^<<<<<<< [^\n]+[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
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
  console.log('🔧 Starting merge conflict resolution...\n');
  
  // Find all TypeScript/TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let processedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    for (const file of files) {
      if (processFile(file)) {
        processedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files checked: ${totalFiles}`);
  console.log(`   Files with conflicts fixed: ${processedFiles}`);
  
  if (processedFiles > 0) {
    console.log('\n✅ Merge conflicts resolved successfully!');
  } else {
    console.log('\n✅ No merge conflicts found.');
  }
}

// Run the script
main().catch(console.error);