#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Find all files with merge conflicts
const findConflictedFiles = () => {
  try {
    const result = execSync('grep -r ")
const resolveConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match merge conflicts
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)
    
    let resolvedContent = content.replace(conflictPattern, (match, newerContent) => {
      console.log(`  ✅ Resolving conflict in ${filePath}`);
      return newerContent.trim();
    });
    
    // Also handle simple conflicts without the full pattern
    resolvedContent = resolvedContent.replace(/([\s\S]*?)
    
    if (resolvedContent !== content) {
      fs.writeFileSync(filePath, resolvedContent);
      console.log(`  ✅ Fixed conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const conflictedFiles = findConflictedFiles();
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
conflictedFiles.forEach(file => {
  if (resolveConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\n🎉 Resolved conflicts in ${fixedCount} files`);
console.log('✅ Merge conflict resolution complete!');