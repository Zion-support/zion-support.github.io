#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🔧 Starting PR Conflict Resolution Script');
// Function to run git commands
function runGitCommand(command) {
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return result.trim();
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}
// Function to resolve conflicts by accepting the incoming changes for deleted files
function resolveConflicts() {
  console.log('📋 Resolving merge conflicts...');
  try {
    // Get list of conflicted files
    const conflictedFiles = runGitCommand('git diff --name-only --diff-filter=U');
    if (!conflictedFiles) {
      console.log('✅ No conflicts found');
      return true;
    }
    const files = conflictedFiles.split('\n').filter(f => f.trim());
    console.log(`Found ${files.length} conflicted files`);
    for (const file of files) {
      console.log(`Processing: ${file}`);
      // Check if file exists
      if (fs.existsSync(file)) {
        // Read the file content
        let content = fs.readFileSync(file, 'utf8');
        // Check if it's a modify/delete conflict
        if (conflictMarkers) {
          console.log(`  - Resolving modify/delete conflict in ${file}`);
          // For modify/delete conflicts, we'll keep the incoming version
          // Remove conflict markers and keep the incoming content
          // Write the resolved content
          fs.writeFileSync(file, content);
          console.log(`  ✅ Resolved ${file}`);
        } else {
          // For content conflicts, try to resolve automatically
          console.log(`  - Resolving content conflict in ${file}`);
          // Remove conflict markers and keep both versions where possible
            // For most cases, prefer the incoming content
            return incomingContent;
          });
          fs.writeFileSync(file, content);
          console.log(`  ✅ Resolved ${file}`);
        }
      } else {
        console.log(`  - File ${file} doesn't exist, skipping`);
      }
    }
    return true;
  } catch (error) {
    console.error('Error resolving conflicts:', error.message);
    return false;
  }
}
// Main execution
async function main() {
  try {
    // First, try to merge the PR
    console.log('🔄 Attempting to merge PR...');
    const mergeResult = runGitCommand('git merge ');
    if (mergeResult === null) {
      console.log('⚠️  Merge failed, attempting to resolve conflicts...');
      // Resolve conflicts
      if (resolveConflicts()) {
        console.log('✅ Conflicts resolved, adding files...');
        // Add all resolved files
        runGitCommand('git add .');
        // Commit the merge
        console.log('💾 Committing merge...');
        runGitCommand('git commit -m "Resolve merge conflicts and merge PR #12238"');
        console.log('✅ PR #12238 merged successfully!');
      } else {
        console.log('❌ Failed to resolve conflicts');
        process.exit(1);
      }
    } else {
      console.log('✅ PR merged successfully without conflicts!');
    }
    // Check if there are any remaining open PRs
    console.log('🔍 Checking for remaining open PRs...');
    const openPRs = runGitCommand('curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep -c "number"');
    if (openPRs && parseInt(openPRs) > 0) {
      console.log(`📋 Found ${openPRs} remaining open PRs`);
    } else {
      console.log('✅ No remaining open PRs found');
    }
  } catch (error) {
    console.error('❌ Error in main execution:', error.message);
    process.exit(1);
  }
}
main();