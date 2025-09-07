const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts by taking the remote version
function resolveMergeConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    // For each conflicted file, resolve by taking the remote version
    conflictedFiles.forEach(file => {
      try {
        console.log(`Resolving conflicts in: ${file}`);
        
        // Use git checkout --theirs to take the remote version
        execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
        
        // Add the resolved file
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        
        console.log(`✅ Resolved: ${file}`);
      } catch (error) {
        console.log(`⚠️  Could not resolve ${file}: ${error.message}`);
      }
    });

    console.log('🎉 All merge conflicts resolved!');
    
    // Commit the resolved changes
    try {
      execSync('git commit -m "Resolve merge conflicts by taking remote version"', { stdio: 'pipe' });
      console.log('✅ Changes committed successfully');
    } catch (error) {
      console.log('⚠️  Could not commit changes:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Error resolving merge conflicts:', error.message);
  }
}

resolveMergeConflicts();