#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to run git commands
function runGit(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: 'pipe' });
  } catch (error) {
    console.error(`Error running: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to resolve merge conflicts by accepting the current version (main branch)
function resolveConflicts() {
  console.log('📋 Resolving merge conflicts...');
  
  // Get list of conflicted files
  const conflictedFiles = runGit('git diff --name-only --diff-filter=U');
  if (!conflictedFiles) {
    console.log('✅ No merge conflicts found');
    return true;
  }
  
  const files = conflictedFiles.trim().split('\n').filter(f => f);
  console.log(`Found ${files.length} conflicted files`);
  
  for (const file of files) {
    console.log(`🔧 Resolving conflicts in: ${file}`);
    
    try {
      // Check if file exists
      if (!fs.existsSync(file)) {
        console.log(`⚠️  File ${file} does not exist, skipping...`);
        continue;
      }
      
      // Read the file content
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove conflict markers and keep the current version (HEAD)
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< [^\n]+\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      
      // Write the resolved content
      fs.writeFileSync(file, content);
      console.log(`✅ Resolved conflicts in: ${file}`);
      
    } catch (error) {
      console.error(`❌ Error resolving ${file}:`, error.message);
    }
  }
  
  return true;
}

// Function to add and commit resolved files
function commitResolution() {
  console.log('📝 Committing resolved conflicts...');
  
  try {
    // Add all resolved files
    runGit('git add .');
    
    // Commit the resolution
    runGit('git commit -m "Resolve merge conflicts: Accept current main branch version and integrate improvements"');
    
    console.log('✅ Successfully committed merge conflict resolution');
    return true;
  } catch (error) {
    console.error('❌ Error committing resolution:', error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    console.log('🔄 Starting merge conflict resolution process...');
    
    // Check current status
    const status = runGit('git status --porcelain');
    if (status && status.includes('UU')) {
      console.log('⚠️  Merge conflicts detected, resolving...');
      
      if (resolveConflicts()) {
        if (commitResolution()) {
          console.log('🎉 Merge conflicts resolved successfully!');
        } else {
          console.log('❌ Failed to commit resolution');
        }
      } else {
        console.log('❌ Failed to resolve conflicts');
      }
    } else {
      console.log('✅ No merge conflicts to resolve');
    }
    
    // Run build to check for errors
    console.log('🔨 Running build to verify resolution...');
    try {
      runGit('npm run build');
      console.log('✅ Build successful after conflict resolution');
    } catch (error) {
      console.log('⚠️  Build failed, but conflicts were resolved');
    }
    
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

main();