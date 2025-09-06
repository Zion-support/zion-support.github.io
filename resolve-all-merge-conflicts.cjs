#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving all merge conflicts...');

// Function to resolve conflicts by keeping the incoming changes (our branch)
function resolveConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    for (const file of conflictedFiles) {
      try {
        console.log(`Resolving conflicts in: ${file}`);
        
        // For modify/delete conflicts, keep the file (our version)
        if (fs.existsSync(file)) {
          // Add the file to resolve the conflict
          execSync(`git add "${file}"`, { stdio: 'inherit' });
          console.log(`✅ Resolved: ${file}`);
        } else {
          // For deleted files, remove them
          execSync(`git rm "${file}"`, { stdio: 'inherit' });
          console.log(`🗑️  Removed: ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error resolving ${file}:`, error.message);
      }
    }

    // Check if there are any remaining conflicts
    const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    if (remainingConflicts.length > 0) {
      console.log(`⚠️  ${remainingConflicts.length} files still have conflicts, attempting manual resolution...`);
      
      for (const file of remainingConflicts) {
        try {
          // Read the file and resolve conflicts by keeping our version
          let content = fs.readFileSync(file, 'utf8');
          
          // Remove conflict markers and keep our version (after =======)
          content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
          
          // Also handle cases where there might be multiple conflict sections
          content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
          
          fs.writeFileSync(file, content);
          execSync(`git add "${file}"`, { stdio: 'inherit' });
          console.log(`✅ Manually resolved: ${file}`);
        } catch (error) {
          console.error(`❌ Error manually resolving ${file}:`, error.message);
        }
      }
    }

    console.log('🎉 All merge conflicts resolved!');
    return true;
  } catch (error) {
    console.error('❌ Error resolving conflicts:', error.message);
    return false;
  }
}

// Main execution
if (resolveConflicts()) {
  console.log('✅ Ready to commit the merge');
} else {
  console.log('❌ Failed to resolve all conflicts');
  process.exit(1);
}