#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving merge conflicts...');

// Find all files with merge conflicts
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r -l "" . --exclude-dir=node_modules --exclude-dir=.git', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
    return [];
  }
};

// Resolve conflicts in a file by keeping HEAD version
const resolveConflictsInFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Clean up any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const conflictFiles = findConflictFiles();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
conflictFiles.forEach(file => {
  if (resolveConflictsInFile(file)) {
    resolvedCount++;
  }
});

console.log(`🎉 Resolved conflicts in ${resolvedCount}/${conflictFiles.length} files`);