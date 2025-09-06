#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts from git status`);

// Also find files with conflict markers
const findConflicts = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' });
const conflictMarkerFiles = findConflicts.split('\n').filter(file => file && file !== '');

console.log(`Found ${conflictMarkerFiles.length} files with conflict markers`);

const allConflictFiles = [...new Set([...conflictFiles, ...conflictMarkerFiles])];
console.log(`Total files to process: ${allConflictFiles.length}`);

// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with incoming changes
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Process all conflict files
let resolvedCount = 0;
let errorCount = 0;

for (const file of allConflictFiles) {
  if (fs.existsSync(file)) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
}

console.log(`\n📊 Conflict Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Add all resolved files to git
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added all resolved files to git');
} catch (error) {
  console.error('❌ Error adding files to git:', error.message);
}

// Commit the merge
try {
  execSync('git commit -m "Resolve all merge conflicts automatically"', { stdio: 'inherit' });
  console.log('✅ Committed merge resolution');
} catch (error) {
  console.error('❌ Error committing merge:', error.message);
}

console.log('🎉 Merge conflict resolution completed!');