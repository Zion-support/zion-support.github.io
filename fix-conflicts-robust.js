#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all files with merge conflicts
const findConflictedFiles = () => {
  try {
    const result = execSync('grep -r ")
const resolveMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('
    
    // Clean up extra whitespace and empty lines
    resolvedContent = resolvedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, resolvedContent);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  const conflictedFiles = findConflictedFiles();
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const filePath of conflictedFiles) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  }
  
  console.log(`Resolved merge conflicts in ${resolvedCount} files`);
};

main();