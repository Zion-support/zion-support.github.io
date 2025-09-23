#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the main branch version (after =======)
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)
    
    // Handle incomplete conflicts (missing closing markers)
    content = content.replace(/([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
    
    // Clean up multiple consecutive newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop())
      .filter(file => file && !file.includes('temp_conflicts/'));
    
    return conflictedFiles;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Function to resolve yarn.lock conflicts by regenerating it
function resolveYarnLockConflicts() {
  if (fs.existsSync('yarn.lock')) {
    console.log('🔄 Resolving yarn.lock conflicts by regenerating...');
    try {
      // Remove the conflicted yarn.lock
      fs.unlinkSync('yarn.lock');
      console.log('Removed conflicted yarn.lock');
      
      // Regenerate yarn.lock
      execSync('yarn install', { stdio: 'inherit' });
      console.log('✅ Regenerated yarn.lock');
      return true;
    } catch (error) {
      console.error('Error regenerating yarn.lock:', error.message);
      return false;
    }
  }
  return false;
}

// Main execution
async function main() {
  try {
    console.log('🔍 Finding files with merge conflicts...');
    
    // First, try to resolve yarn.lock conflicts by regenerating
    resolveYarnLockConflicts();
    
    // Find all conflicted files
    const conflictedFiles = findConflictedFiles();
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    
    let resolvedCount = 0;
    
    // Resolve conflicts in each file
    for (const file of conflictedFiles) {
      if (fs.existsSync(file)) {
        if (resolveMergeConflicts(file)) {
          resolvedCount++;
        }
      }
    }
    
    // Also check for files with conflict markers that might not be in git status
    const filesWithConflicts = [
      'resolve-all-merge-conflicts.cjs',
      'resolve-merge-conflicts-final.cjs',
      'resolve-all-conflicts.cjs',
      'resolve-merge-conflicts.cjs',
      'pages/white-papers.tsx.disabled'
    ];
    
    for (const file of filesWithConflicts) {
      if (fs.existsSync(file)) {
        if (resolveMergeConflicts(file)) {
          resolvedCount++;
        }
      }
    }
    
    console.log(`\n✅ Conflict resolution summary:`);
    console.log(`- Files processed: ${conflictedFiles.length + filesWithConflicts.length}`);
    console.log(`- Conflicts resolved: ${resolvedCount}`);
    
    // Add all resolved files to git
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ Added resolved files to git');
    } catch (error) {
      console.error('Error adding files to git:', error.message);
    }
    
    // Check if there are any remaining conflicts
    try {
      const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
      const remainingConflicts = statusOutput.split('\n').filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
      
      if (remainingConflicts.length === 0) {
        console.log('\n🎉 All conflicts resolved! Ready to commit.');
        
        // Commit the merge
        execSync('git commit -m "Resolve merge conflicts: automated resolution of all conflicts"');
        console.log('✅ Merge committed successfully!');
      } else {
        console.log(`\n⚠️  ${remainingConflicts.length} conflicts still remain:`);
        remainingConflicts.forEach(conflict => console.log(`  - ${conflict}`));
      }
    } catch (error) {
      console.error('Error checking remaining conflicts:', error.message);
    }
    
  } catch (error) {
    console.error('Error during conflict resolution:', error.message);
    process.exit(1);
  }
}

main();