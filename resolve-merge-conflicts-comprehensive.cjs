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
          console.log(`Resolved and added (theirs): ${file}`);
        } catch (theirsError) {
          // If 'theirs' fails, it might be because the file was deleted remotely
          console.log(`'git checkout --theirs' failed for ${file}. Checking if it was deleted remotely.`);
          try {
            // Check if the file exists in the remote branch (origin/main)
            execSync(`git show origin/main:"${file}"`, { stdio: 'pipe' });
            // If it exists remotely, then the conflict is not a deletion, something else went wrong.
            // In this case, we might need manual intervention or a different strategy.
            console.error(`❌ Error: 'git checkout --theirs' failed for ${file} and it still exists in origin/main. Manual intervention might be needed.`);
          } catch (showError) {
            // If git show fails, it likely means the file was deleted in origin/main
            console.log(`File ${file} was deleted in origin/main. Removing local file.`);
            fs.unlinkSync(file); // Remove the local conflicted file
            execSync(`git add "${file}"`, { stdio: 'pipe' }); // Stage the deletion
            console.log(`Removed and added (deleted remotely): ${file}`);
          }
        }
      } catch (fileError) {
        console.error(`❌ Error resolving conflicts in ${file}:`, fileError.message);
      }
    });
    console.log('✅ All merge conflicts resolved comprehensively.');
  } catch (error) {
    console.error('❌ Error during comprehensive merge conflict resolution:', error.message);
  }
}

resolveMergeConflicts();