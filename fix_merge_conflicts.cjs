#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Find all files with merge conflicts
const findConflictedFiles = () => {
  try {
    const result = execSync('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules') && !file.includes('.git'));
  } catch (error) {
    return [];
  }
};

// Resolve merge conflicts by choosing the newer version (after =======)
const resolveConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match merge conflicts
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g;
    
    let resolvedContent = content.replace(conflictPattern, (match, newerContent) => {
      console.log(`  ✅ Resolving conflict in ${filePath}`);
      return newerContent.trim();
    });
    
    // Also handle simple conflicts without the full pattern
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
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