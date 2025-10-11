#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Pattern to match merge conflict markers
    const conflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    
    let hasConflicts = false;
    let resolvedContent = content.replace(conflictPattern, (match, headContent, otherContent) => {
      hasConflicts = true;
      
      // Strategy: Choose the longer, more complete content
      // If lengths are similar, prefer HEAD content
      const headLines = headContent.trim().split('\n').length;
      const otherLines = otherContent.trim().split('\n').length;
      
      // If other content is significantly longer and more complete, use it
      if (otherLines > headLines * 1.5 && otherContent.trim().length > headContent.trim().length * 1.2) {
        console.log(`  - Choosing other content (${otherLines} lines vs ${headLines} lines)`);
        return otherContent.trim();
      } else {
        console.log(`  - Choosing HEAD content (${headLines} lines vs ${otherLines} lines)`);
        return headContent.trim();
      }
    });
    
    // Additional cleanup for common merge conflict artifacts
    resolvedContent = resolvedContent.replace(/^<<<<<<< HEAD\n/gm, '');
    resolvedContent = resolvedContent.replace(/^=======\n/gm, '');
    resolvedContent = resolvedContent.replace(/^>>>>>>> [^\n]+\n/gm, '');
    
    // Clean up empty lines and whitespace
    resolvedContent = resolvedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (hasConflicts) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('🔧 Starting merge conflict resolution...\n');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts:\n`);

let resolvedCount = 0;
let totalFiles = filesWithConflicts.length;

filesWithConflicts.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalFiles}] Processing ${filePath}`);
  
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  }
});

console.log(`\n✅ Resolution complete!`);
console.log(`📊 Resolved conflicts in ${resolvedCount} out of ${totalFiles} files`);

// Verify no conflicts remain
console.log('\n🔍 Verifying no conflicts remain...');
const remainingConflicts = findFilesWithConflicts();
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}