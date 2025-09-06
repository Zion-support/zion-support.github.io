#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Find all files with merge conflicts
function findMergeConflictFiles() {
  try {
    const result = execSync('find /workspace -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.log('No merge conflicts found or error occurred');
    return [];
  }
}

// Resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Main execution
const conflictFiles = findMergeConflictFiles();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictFiles) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed merge conflicts in ${fixedCount} files`);

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  totalFiles: conflictFiles.length,
  fixedFiles: fixedCount,
  files: conflictFiles
};

fs.writeFileSync('merge-conflict-fix-report.json', JSON.stringify(report, null, 2));
console.log('📊 Merge conflict fix report saved to: merge-conflict-fix-report.json');