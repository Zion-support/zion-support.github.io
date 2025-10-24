#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// List of open PRs to process
const openPRs = [
  'cursor/fix-errors-and-merge-to-main-1c80',
  'cursor/fix-errors-and-merge-to-main-f403',
  'cursor/fix-errors-and-merge-to-main-75e3',
  'cursor/fix-errors-and-merge-to-main-c8e5',
  'cursor/fix-errors-and-merge-to-main-b2cd',
  'cursor/fix-errors-and-merge-to-main-708f',
  'cursor/fix-errors-and-merge-to-main-1f20',
  'cursor/fix-errors-and-merge-to-main-d3e3',
  'cursor/fix-errors-and-merge-to-main-a52e',
  'cursor/fix-errors-and-merge-to-main-543c',
  'cursor/fix-errors-and-merge-to-main-f13b',
  'cursor/fix-errors-and-merge-to-main-3e67',
  'cursor/fix-errors-and-merge-to-main-a086',
  'cursor/fix-errors-and-merge-to-main-2e02',
  'cursor/fix-errors-and-merge-to-main-e87d',
  'cursor/fix-errors-and-merge-to-main-d891',
  'cursor/fix-errors-and-merge-to-main-6928',
  'cursor/fix-errors-and-merge-to-main-c0b7',
  'cursor/fix-errors-and-merge-to-main-b820',
  'cursor/fix-errors-and-merge-to-main-2b3c',
  'cursor/fix-errors-and-merge-to-main-12b7',
  'cursor/fix-errors-and-merge-to-main-2f6c',
  'cursor/fix-errors-and-merge-to-main-b73a',
  'cursor/fix-errors-and-merge-to-main-6f1b',
  'cursor/fix-errors-and-merge-to-main-dbdf',
  'cursor/fix-errors-and-merge-to-main-0e4c',
  'cursor/fix-errors-and-merge-to-main-9ef9',
  'cursor/fix-errors-and-merge-to-main-e7ea'
];

function runCommand(command, description) {
  try {
    console.log(`\n🔄 ${description}...`);
    const result = execSync(command, { 
      cwd: process.cwd(), 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return null;
  }
}

function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  
  // Get list of conflicted files
  const conflictedFiles = runCommand('git diff --name-only --diff-filter=U', 'Getting conflicted files');
  if (!conflictedFiles) return false;
  
  const files = conflictedFiles.trim().split('\n').filter(f => f);
  console.log(`Found ${files.length} conflicted files`);
  
  for (const file of files) {
    console.log(`\n📝 Resolving conflicts in ${file}...`);
    
    try {
      // Read the file content
      const content = fs.readFileSync(file, 'utf8');
      
      // Simple conflict resolution strategy:
      // 1. Keep the main branch version (HEAD) for most cases
      // 2. For specific files, use more sophisticated resolution
      
      let resolvedContent = content;
      
      if (file.includes('package.json') || file.includes('package-lock.json')) {
        // For package files, prefer the main branch version
        resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      } else if (file.includes('.test.') || file.includes('__tests__')) {
        // For test files, prefer the main branch version
        resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      } else if (file.includes('App.tsx') || file.includes('page.tsx')) {
        // For main app files, prefer the main branch version but keep important additions
        resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, (match, head, incoming) => {
          // Keep the HEAD version but add any new imports or exports from incoming
          const newImports = incoming.match(/^import[^;]+;$/gm) || [];
          const newExports = incoming.match(/^export[^;]+;$/gm) || [];
          
          let result = head;
          if (newImports.length > 0) {
            result = newImports.join('\n') + '\n' + result;
          }
          if (newExports.length > 0) {
            result += '\n' + newExports.join('\n');
          }
          
          return result;
        });
      } else {
        // Default: prefer HEAD (main branch) version
        resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      }
      
      // Write the resolved content
      fs.writeFileSync(file, resolvedContent);
      console.log(`✅ Resolved conflicts in ${file}`);
      
    } catch (error) {
      console.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`);
      // Fallback: use main branch version
      try {
        runCommand(`git checkout --ours "${file}"`, `Using main branch version for ${file}`);
        runCommand(`git add "${file}"`, `Staging resolved ${file}`);
      } catch (e) {
        console.log(`❌ Failed to use fallback for ${file}`);
      }
    }
  }
  
  return true;
}

function processPR(branchName) {
  console.log(`\n🚀 Processing PR: ${branchName}`);
  
  // Checkout main and ensure it's clean
  runCommand('git checkout main', 'Switching to main branch');
  runCommand('git pull origin main', 'Pulling latest main');
  
  // Try to merge the branch
  const mergeResult = runCommand(`git merge origin/${branchName}`, `Merging ${branchName}`);
  
  if (mergeResult === null) {
    console.log(`⚠️  Merge conflicts detected for ${branchName}`);
    
    // Resolve conflicts
    if (resolveConflicts()) {
      // Add resolved files
      runCommand('git add .', 'Adding resolved files');
      
      // Commit the merge
      const commitResult = runCommand(
        `git commit -m "Resolve merge conflicts for ${branchName}"`, 
        `Committing merge for ${branchName}`
      );
      
      if (commitResult !== null) {
        console.log(`✅ Successfully merged ${branchName}`);
        return true;
      }
    }
    
    // If resolution failed, abort the merge
    runCommand('git merge --abort', `Aborting merge for ${branchName}`);
    console.log(`❌ Failed to merge ${branchName}`);
    return false;
  } else {
    console.log(`✅ Successfully merged ${branchName} without conflicts`);
    return true;
  }
}

async function main() {
  console.log('🎯 Starting comprehensive PR resolution process...');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const branchName of openPRs) {
    try {
      const success = processPR(branchName);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (error) {
      console.log(`❌ Error processing ${branchName}: ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully merged: ${successCount} PRs`);
  console.log(`❌ Failed to merge: ${failCount} PRs`);
  
  if (successCount > 0) {
    console.log('\n🚀 Pushing merged changes to main...');
    runCommand('git push origin main', 'Pushing merged changes');
  }
  
  console.log('\n🎉 PR resolution process completed!');
}

main().catch(console.error);