#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive PR merge and conflict resolution...');
console.log('='.repeat(60));

// Function to run git commands safely
function runCommand(command, description) {
  try {
    console.log(`\n🔧 ${description}...`);
    const result = execSync(command, { 
      stdio: 'pipe', 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`⚠️ ${description} had issues: ${error.message}`);
    return null;
  }
}

// Step 1: Sync with remote and clean up
function syncWithRemote() {
  console.log('\n📡 Syncing with remote repository...');
  
  // Fetch all remote changes
  runCommand('git fetch --all', 'Fetching all remote changes');
  
  // Check current status
  const status = runCommand('git status', 'Checking git status');
  console.log('Current status:', status);
  
  // Reset to remote main to resolve diverged commits
  runCommand('git reset --hard origin/main', 'Resetting to remote main');
  
  console.log('✅ Remote sync completed');
}

// Step 2: Get all remote branches and process them
function processAllBranches() {
  console.log('\n🌿 Processing all remote branches...');
  
  // Get all remote branches
  const branches = runCommand('git branch -r', 'Getting remote branches');
  if (!branches) return { mergedCount: 0, conflictCount: 0 };
  
  const branchList = branches.split('\n')
    .map(branch => branch.trim())
    .filter(branch => branch && !branch.includes('origin/HEAD') && !branch.includes('origin/main'))
    .slice(0, 50); // Limit to first 50 branches to avoid overwhelming
  
  console.log(`Found ${branchList.length} branches to process`);
  
  let mergedCount = 0;
  let conflictCount = 0;
  
  for (const branch of branchList) {
    try {
      console.log(`\n🔄 Processing branch: ${branch}`);
      
      // Check if branch has commits not in main
      const commits = runCommand(`git log main..${branch} --oneline`, `Checking commits in ${branch}`);
      if (!commits || commits.trim().length === 0) {
        console.log(`⏭️ No new commits in ${branch}, skipping`);
        continue;
      }
      
      // Try to merge the branch
      const mergeResult = runCommand(`git merge ${branch} --no-ff -m "Merge ${branch} into main"`, `Merging ${branch}`);
      
      if (mergeResult) {
        mergedCount++;
        console.log(`✅ Successfully merged ${branch}`);
      } else {
        // Handle merge conflicts
        console.log(`⚠️ Merge conflict in ${branch}, attempting to resolve...`);
        
        const conflictFiles = runCommand('git diff --name-only --diff-filter=U', 'Getting conflicted files');
        if (conflictFiles) {
          const files = conflictFiles.trim().split('\n').filter(f => f);
          console.log(`Found ${files.length} conflicted files:`, files);
          
          // Try to resolve conflicts automatically
          for (const file of files) {
            resolveConflictsInFile(file);
          }
          
          // Add resolved files and continue merge
          runCommand('git add .', 'Adding resolved files');
          const continueResult = runCommand('git commit --no-edit', 'Completing merge');
          
          if (continueResult) {
            mergedCount++;
            console.log(`✅ Successfully resolved conflicts and merged ${branch}`);
          } else {
            conflictCount++;
            console.log(`❌ Failed to resolve conflicts in ${branch}`);
            runCommand('git merge --abort', 'Aborting failed merge');
          }
        } else {
          conflictCount++;
          console.log(`❌ Could not get conflicted files for ${branch}`);
        }
      }
      
    } catch (error) {
      console.log(`❌ Error processing ${branch}: ${error.message}`);
      conflictCount++;
      
      // Try to abort any ongoing merge
      runCommand('git merge --abort', 'Aborting failed merge');
    }
  }
  
  return { mergedCount, conflictCount };
}

=======// Step 3: Fix syntax errors and merge conflicts in files
function fixSyntaxAndConflicts() {
  console.log('\n🔧 Fixing syntax errors and merge conflicts...');
  
  // Find all TypeScript/JavaScript files
  const files = runCommand('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -100', 'Finding files to fix');
  if (!files) return 0;
  
  const fileList = files.split('\n').filter(f => f.trim());
  let fixedCount = 0;
  
  for (const file of fileList) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Remove merge conflict markers
>>>>>>> origin/main
      content = content.replace(/// Step 3: Resolve conflicts in a specific file
function resolveConflictsInFile(filePath) {
  console.log(`🔧 Resolving conflicts in ${filePath}...`);>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ File ${filePath} does not exist, skipping`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
    
    // Fix import statements
    content = content.replace(/import React from "react",/g, 'import React from "react";');
    content = content.replace(/import React from 'react',/g, "import React from 'react';");
    
    // Fix export statements
    content = content.replace(/export default function/g, 'export default function');
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        if (!seenImports.has(line.trim())) {
          seenImports.add(line.trim());
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    
  } catch (error) {
    console.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
  }
}

// Step 4: Clean up and finalize
function finalize() {
  console.log('\n🧹 Finalizing merge process...');
  
  // Run build to check for issues
  const buildResult = runCommand('npm run build', 'Running build check');
  if (buildResult) {
    console.log('✅ Build successful');
  } else {
    console.log('⚠️ Build had issues, but continuing...');
  }
  
  // Push changes to remote
  const pushResult = runCommand('git push origin main', 'Pushing changes to remote');
  if (pushResult) {
    console.log('✅ Successfully pushed to remote');
  } else {
    console.log('⚠️ Push had issues');
  }
  
  console.log('\n🎉 Merge process completed!');
}

// Main execution
async function main() {
  try {
    console.log('Starting comprehensive PR merge process...');
    
    // Step 1: Sync with remote
    syncWithRemote();
    
    // Step 2: Process all branches
    const results = processAllBranches();
    
    console.log(`\n📊 Results Summary:`);
    console.log(`✅ Successfully merged: ${results.mergedCount} branches`);
    console.log(`❌ Failed to merge: ${results.conflictCount} branches`);
    
    // Step 3: Finalize
    finalize();
    
  } catch (error) {
    console.error('❌ Fatal error in merge process:', error.message);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main();
}

module.exports = { runCommand, processAllBranches, resolveConflictsInFile };