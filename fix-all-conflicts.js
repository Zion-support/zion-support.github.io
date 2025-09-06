#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('([\s\S]*?)
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const findConflicts = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" | xargs grep -l "" 2>/dev/null || true', { encoding: 'utf8' });
const conflictFiles = findConflicts.split('\n').filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Process all conflict files
let resolvedCount = 0;
let errorCount = 0;

for (const file of conflictFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\n📊 Conflict Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Add all files to git
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added all files to git');
} catch (error) {
  console.error('❌ Error adding files to git:', error.message);
}

// Commit the changes
try {
  execSync('git commit -m "Resolve all merge conflicts and fix corrupted files"', { stdio: 'inherit' });
  console.log('✅ Committed changes');
} catch (error) {
  console.error('❌ Error committing changes:', error.message);
}

console.log('🎉 Merge conflict resolution completed!');