#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Merge Remaining PRs Process...');

function runCommand(command, description) {
  try {
    console.log(`\n🔄 ${description}...`);
    const result = execSync(command, { 
      cwd: '/workspace',
      encoding: 'utf8',
      timeout: 30000
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`⚠️ ${description} had issues: ${error.message}`);
    return null;
  }
}

function main() {
  console.log('📋 Step 1: Checking current status...');
  
  // Check git status
  const status = runCommand('git status --porcelain', 'Checking git status');
  if (status && status.trim()) {
    console.log('⚠️ Working directory has uncommitted changes');
    runCommand('git status --short', 'Showing git status');
  } else {
    console.log('✅ Working directory is clean');
  }
  
  // Ensure we're on main branch
  runCommand('git checkout main', 'Switching to main branch');
  runCommand('git pull origin main', 'Pulling latest main');
  
  console.log('\n📋 Step 2: Fetching all branches...');
  runCommand('git fetch --all', 'Fetching all remote branches');
  
  console.log('\n📋 Step 3: Getting list of remote branches...');
  const branches = runCommand('git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed "s/origin\\///" | tr -d " "', 'Getting remote branches');
  
  if (!branches || !branches.trim()) {
    console.log('✅ No remote branches found to merge. All PRs are already merged!');
    return;
  }
  
  const branchList = branches.trim().split('\n').filter(b => b.trim());
  console.log(`📊 Found ${branchList.length} branches to process`);
  
  if (branchList.length > 20) {
    console.log('📋 First 20 branches:');
    branchList.slice(0, 20).forEach(branch => console.log(`   - ${branch}`));
    console.log(`   ... and ${branchList.length - 20} more`);
  } else {
    console.log('📋 Branches to process:');
    branchList.forEach(branch => console.log(`   - ${branch}`));
  }
  
  console.log('\n📋 Step 4: Processing branches...');
  
  let successful = 0;
  let failed = 0;
  let skipped = 0;
  
  for (let i = 0; i < branchList.length; i++) {
    const branch = branchList[i].trim();
    if (!branch) continue;
    
    console.log(`\n[${i + 1}/${branchList.length}] Processing branch: ${branch}`);
    
    // Check if branch is already merged
    const mergedBranches = runCommand('git branch --merged main', 'Checking merged branches');
    if (mergedBranches && mergedBranches.includes(branch)) {
      console.log(`⏭️ Branch ${branch} is already merged, skipping`);
      skipped++;
      continue;
    }
    
    // Try to merge the branch
    const mergeResult = runCommand(`git merge --no-commit --no-ff "origin/${branch}"`, `Merging ${branch}`);
    
    if (mergeResult !== null) {
      console.log(`✅ Successfully merged ${branch}`);
      runCommand(`git commit -m "Merge ${branch} into main - $(date)"`, `Committing merge of ${branch}`);
      successful++;
    } else {
      console.log(`⚠️ Merge conflicts detected in ${branch}`);
      
      // Try to resolve conflicts automatically
      const conflictFiles = runCommand('git diff --name-only --diff-filter=U', 'Getting conflict files');
      
      if (conflictFiles && conflictFiles.trim()) {
        console.log(`🔧 Resolving conflicts in: ${conflictFiles.trim()}`);
        
        // Resolve conflicts by taking incoming changes
        const files = conflictFiles.trim().split('\n');
        for (const file of files) {
          if (file.trim()) {
            runCommand(`git checkout --theirs "${file.trim()}"`, `Resolving conflicts in ${file}`);
            runCommand(`git add "${file.trim()}"`, `Adding resolved file ${file}`);
          }
        }
        
        // Commit resolved conflicts
        const commitResult = runCommand(`git commit -m "Resolve merge conflicts for ${branch} - $(date)"`, `Committing resolved conflicts for ${branch}`);
        
        if (commitResult !== null) {
          console.log(`✅ Successfully resolved conflicts and merged ${branch}`);
          successful++;
        } else {
          console.log(`❌ Failed to commit resolved conflicts for ${branch}`);
          runCommand('git merge --abort', `Aborting merge of ${branch}`);
          failed++;
        }
      } else {
        console.log(`❌ No conflict files found but merge failed for ${branch}`);
        runCommand('git merge --abort', `Aborting merge of ${branch}`);
        failed++;
      }
    }
    
    // Progress update
    if ((i + 1) % 10 === 0) {
      console.log(`📊 Progress: ${successful} successful, ${failed} failed, ${skipped} skipped`);
    }
  }
  
  // Final summary
  console.log('\n🎉 Merge process completed!');
  console.log('📊 Final Summary:');
  console.log(`   ✅ Successful merges: ${successful}`);
  console.log(`   ❌ Failed merges: ${failed}`);
  console.log(`   ⏭️ Skipped branches: ${skipped}`);
  console.log(`   📈 Total processed: ${branchList.length}`);
  
  // Final status
  console.log('\n📋 Final repository status:');
  runCommand('git status --porcelain', 'Final git status');
  
  console.log('\n🎯 All PRs have been processed!');
}

main();