#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting selective branch merge process...');

// Priority branches to merge first
const priorityBranches = [
  'clean-merge-with-main',
  'clean-merge-with-improvements', 
  'comprehensive-improvements',
  'comprehensive-services-clean',
  'content-update-2025',
  'content-updates-2025-09-16',
  'clean-website-enhancement',
  'clean-services-integration'
];

// Get all remote branches
const allBranches = execSync('git branch -r | grep -v "HEAD" | grep -v "main" | sed "s/origin\\///"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(branch => branch.trim() !== '');

console.log(`📋 Found ${allBranches.length} total branches`);

// Filter branches that exist in remote
const availableBranches = priorityBranches.filter(branch => 
  allBranches.some(remoteBranch => remoteBranch.trim() === branch)
);

console.log(`🎯 Processing ${availableBranches.length} priority branches:`, availableBranches);

let mergedCount = 0;
let failedCount = 0;
let conflictCount = 0;
const failedBranches = [];

// Function to merge a single branch
async function mergeBranch(branchName) {
  try {
    console.log(`\n🔄 Processing branch: ${branchName}`);
    
    // Fetch the branch if it doesn't exist locally
    try {
      execSync(`git show-ref --verify --quiet refs/heads/${branchName}`, { stdio: 'ignore' });
    } catch {
      console.log(`📥 Fetching branch ${branchName}...`);
      execSync(`git fetch origin ${branchName}:${branchName}`, { stdio: 'pipe' });
    }
    
    // Check if branch can be merged
    try {
      execSync(`git merge-base main ${branchName}`, { stdio: 'pipe' });
    } catch {
      console.log(`⚠️  Branch ${branchName} cannot be merged (no common ancestor)`);
      failedBranches.push(branchName);
      failedCount++;
      return;
    }
    
    // Try to merge
    try {
      execSync(`git merge ${branchName} --no-edit --no-ff`, { stdio: 'pipe' });
      console.log(`✅ Successfully merged ${branchName}`);
      mergedCount++;
    } catch (error) {
      console.log(`❌ Merge conflict in ${branchName}`);
      conflictCount++;
      
      // Try to resolve conflicts automatically
      console.log(`🔧 Attempting to resolve conflicts...`);
      
      try {
        // Check for conflict files
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        const conflictFiles = status.split('\n')
          .filter(line => line.match(/^UU|^AA|^DD/))
          .map(line => line.split(' ').pop());
        
        if (conflictFiles.length > 0) {
          console.log(`🔍 Found conflicts in: ${conflictFiles.join(', ')}`);
          
          // Try to resolve conflicts by taking the main branch version
          for (const file of conflictFiles) {
            try {
              execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
              execSync(`git add "${file}"`, { stdio: 'pipe' });
              console.log(`✅ Resolved conflict in ${file} using ours`);
            } catch {
              try {
                execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
                execSync(`git add "${file}"`, { stdio: 'pipe' });
                console.log(`✅ Resolved conflict in ${file} using theirs`);
              } catch {
                console.log(`⚠️  Could not auto-resolve ${file}`);
              }
            }
          }
          
          // Try to commit the merge
          try {
            execSync('git commit --no-edit', { stdio: 'pipe' });
            console.log(`✅ Successfully resolved and merged ${branchName}`);
            mergedCount++;
            conflictCount--;
          } catch {
            console.log(`❌ Could not resolve conflicts in ${branchName}, aborting merge`);
            execSync('git merge --abort', { stdio: 'pipe' });
            failedBranches.push(branchName);
            failedCount++;
          }
        } else {
          console.log(`❌ Could not resolve conflicts in ${branchName}, aborting merge`);
          execSync('git merge --abort', { stdio: 'pipe' });
          failedBranches.push(branchName);
          failedCount++;
        }
      } catch (resolveError) {
        console.log(`❌ Error resolving conflicts in ${branchName}, aborting merge`);
        execSync('git merge --abort', { stdio: 'pipe' });
        failedBranches.push(branchName);
        failedCount++;
      }
    }
  } catch (error) {
    console.log(`❌ Error processing ${branchName}: ${error.message}`);
    failedBranches.push(branchName);
    failedCount++;
  }
}

// Main execution
async function main() {
  try {
    // Process priority branches first
    for (const branch of availableBranches) {
      if (branch.trim()) {
        await mergeBranch(branch.trim());
      }
    }
    
    console.log('\n📊 Merge Summary:');
    console.log(`✅ Successfully merged: ${mergedCount} branches`);
    console.log(`❌ Failed to merge: ${failedCount} branches`);
    console.log(`🔧 Resolved conflicts: ${conflictCount} branches`);
    
    if (failedBranches.length > 0) {
      console.log('\n❌ Failed branches:');
      failedBranches.forEach(branch => console.log(`  - ${branch}`));
    }
    
    // Push all changes
    console.log('\n🚀 Pushing all changes to origin...');
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log('🎉 Selective merge process completed!');
    
  } catch (error) {
    console.error('❌ Error during selective merge process:', error.message);
    process.exit(1);
  }
}

main();