#!/usr/bin/env node
<<<<<<< HEAD

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

console.log('🔧 Resolving PR merge conflicts automatically...');

=======
console.log('🔧 Starting PR Conflict Resolution Script');
// Function to run git commands
function runGitCommand(command) {
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🔧 Resolving PR merge conflicts automatically...');
>>>>>>> merged-prs-20250907-203621
// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);
<<<<<<< HEAD

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Resolve conflicts by accepting our changes (HEAD)
for (const file of conflictedFiles) {
=======
console.log(`Found ${conflictedFiles.length} conflicted files`);
// Resolve conflicts by accepting our changes (HEAD)
for (const file of conflictedFiles) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  try {
    console.log(`Resolving conflicts in: ${file}`);
    // Check if file exists
    if (!fs.existsSync(file)) {
      console.log(`  ⚠️  File ${file} doesn't exist, skipping...`);
      continue;
    }
    // Read the file content
    let content = fs.readFileSync(file, 'utf8');
    // Remove conflict markers and keep our changes (HEAD)
<<<<<<< HEAD
    content = content.replace(/    // Write the resolved content
=======
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)
    // Write the resolved content
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    fs.writeFileSync(file, content);
    console.log(`  ✅ Resolved: ${file}`);
  } catch (error) {
    console.log(`  ❌ Error resolving ${file}: ${error.message}`);
  }
}
<<<<<<< HEAD

// Add all resolved files
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ All conflicts resolved and staged');
} catch (error) {
  console.log('❌ Error staging files:', error.message);
}

console.log('🎉 PR conflict resolution complete!');
=======
<<<<<<< HEAD
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

console.log('🎉 PR conflict resolution complete!');
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
// Add all resolved files
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ All conflicts resolved and staged');
} catch (error) {
  console.log('❌ Error staging files:', error.message);
}
console.log('🎉 PR conflict resolution complete!');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
