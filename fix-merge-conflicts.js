#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    // Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
      // Extract only the HEAD part (before =======)
      const headMatch = match.match(/<<<<<<< HEAD([\s\S]*?)=======/);
      return headMatch ? headMatch[1].trim() : '';
    });
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD|=======|>>>>>>> [^\n]+/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files with merge conflicts
let conflictedFiles = [];

try {
  const output = execSync('grep -r "<<<<<<< HEAD" app/ --include="*.tsx" --include="*.ts" | cut -d: -f1 | sort | uniq', { encoding: 'utf8' });
  conflictedFiles = output.trim().split('\n').filter(f => f);
} catch (error) {
  console.log('No merge conflicts found or error searching:', error.message);
}

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
conflictedFiles.forEach(file => {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);