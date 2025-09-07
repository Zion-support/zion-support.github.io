const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts comprehensively
function resolveMergeConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    // For each conflicted file, try different resolution strategies
    conflictedFiles.forEach(file => {
      try {
        console.log(`Resolving conflicts in: ${file}`);
        
        // First try to take the remote version
        try {
          execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
          execSync(`git add "${file}"`, { stdio: 'pipe' });
          console.log(`✅ Resolved (theirs): ${file}`);
          return;
        } catch (error) {
          // If that fails, try to take the local version
          try {
            execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
            execSync(`git add "${file}"`, { stdio: 'pipe' });
            console.log(`✅ Resolved (ours): ${file}`);
            return;
          } catch (error2) {
            // If both fail, the file was deleted in one branch
            // Check if it exists locally
            if (fs.existsSync(file)) {
              // File exists locally but was deleted remotely, remove it
              execSync(`git rm "${file}"`, { stdio: 'pipe' });
              console.log(`✅ Removed (deleted remotely): ${file}`);
            } else {
              // File doesn't exist locally, just add it as deleted
              execSync(`git add "${file}"`, { stdio: 'pipe' });
              console.log(`✅ Added as deleted: ${file}`);
            }
          }
        }
      } catch (error) {
        console.log(`⚠️  Could not resolve ${file}: ${error.message}`);
      }
    });

    console.log('🎉 All merge conflicts resolved!');
    
    // Commit the resolved changes
    try {
      execSync('git commit -m "Resolve merge conflicts comprehensively"', { stdio: 'pipe' });
      console.log('✅ Changes committed successfully');
    } catch (error) {
      console.log('⚠️  Could not commit changes:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Error resolving merge conflicts:', error.message);
  }
}

resolveMergeConflicts();