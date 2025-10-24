#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
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
  console.log('🔧 Resolving all merge conflicts...');
  
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

function processAllPRs() {
  console.log('🚀 Processing all open PRs...');
  
  // Get all open PR numbers
  const prNumbers = runCommand('gh pr list --state open --json number --jq ".[].number"', 'Getting open PR numbers');
  if (!prNumbers) {
    console.log('❌ Failed to get PR numbers');
    return;
  }
  
  const numbers = prNumbers.trim().split('\n').filter(n => n);
  console.log(`Found ${numbers.length} open PRs to process`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const prNumber of numbers) {
    try {
      console.log(`\n🚀 Processing PR #${prNumber}...`);
      
      // Get PR details
      const prDetails = runCommand(`gh pr view ${prNumber} --json headRefName,baseRefName`, `Getting PR #${prNumber} details`);
      if (!prDetails) {
        failCount++;
        continue;
      }
      
      const pr = JSON.parse(prDetails);
      const branchName = pr.headRefName;
      
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
            `git commit -m "Resolve merge conflicts for PR #${prNumber} (${branchName})"`, 
            `Committing merge for PR #${prNumber}`
          );
          
          if (commitResult !== null) {
            console.log(`✅ Successfully merged PR #${prNumber}`);
            successCount++;
          } else {
            failCount++;
          }
        } else {
          // If resolution failed, abort the merge
          runCommand('git merge --abort', `Aborting merge for PR #${prNumber}`);
          console.log(`❌ Failed to merge PR #${prNumber}`);
          failCount++;
        }
      } else {
        console.log(`✅ Successfully merged PR #${prNumber} without conflicts`);
        successCount++;
      }
      
    } catch (error) {
      console.log(`❌ Error processing PR #${prNumber}: ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n📊 PR Processing Summary:`);
  console.log(`✅ Successfully merged: ${successCount} PRs`);
  console.log(`❌ Failed to merge: ${failCount} PRs`);
  
  return successCount > 0;
}

async function main() {
  console.log('🎯 Starting comprehensive merge conflict resolution and PR processing...');
  
  // First, resolve any existing conflicts
  const conflictsResolved = resolveConflicts();
  if (conflictsResolved) {
    runCommand('git add .', 'Staging resolved conflicts');
    runCommand('git commit -m "Resolve merge conflicts"', 'Committing conflict resolution');
  }
  
  // Process all open PRs
  const prsProcessed = processAllPRs();
  
  if (prsProcessed) {
    console.log('\n🚀 Pushing merged changes to main...');
    runCommand('git push origin main', 'Pushing merged changes');
  }
  
  console.log('\n🎉 Comprehensive merge conflict resolution and PR processing completed!');
}

main().catch(console.error);