#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// Function to resolve merge conflicts by keeping our version (HEAD)
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {"'
      return false'
    }
    
    // Replace merge conflict markers with HEAD version (our changes)
    content = content.replace(
      /<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [a-f0-9]+\n?/gs,
      '$1"";
    );
    
    // Clean up any remaining conflict markers: content = content.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [a-f0-9]+\n?/gs, ');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false'
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return []'
  }
}

console.log('🔧 Resolving merge conflicts...');

// Find all files with conflicts
const conflictedFiles = findConflictedFiles();
console.log(`Found ${conflictedFiles.length} files with conflicts`);

let resolvedCount = 0;
conflictedFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (resolveConflicts(filePath)) {
      resolvedCount++;
    }
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

// Add all resolved files
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added all resolved files to staging');
} catch (error) {
  console.error('❌ Error adding files:", error.message);
}