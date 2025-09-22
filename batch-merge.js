#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Starting batch branch merge process...');

// Get all remote branches except main and HEAD
const allBranches = execSync('git branch -r | grep -v "HEAD" | grep -v "main" | sed "s/origin\\///"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(branch => branch.trim() !== '');

console.log(`📋 Found ${allBranches.length} total branches`);

// Filter out branches that are likely to be problematic or already processed
const filteredBranches = allBranches.filter(branch => {
  const branchName = branch.trim();
  // Skip branches that are likely backup or temporary
  return !branchName.includes('backup') && 
         !branchName.includes('temp') &&
         !branchName.includes('cursor/') &&
         !branchName.includes('codex/') &&
         branchName.length < 50; // Skip very long branch names
});

console.log(`🎯 Processing ${filteredBranches.length} filtered branches`);

let mergedCount = 0;
let failedCount = 0;
let conflictCount = 0;
const failedBranches = [];

// Function to merge a single branch
async function mergeBranch(branchName) {
  try {
    console.log(`🔄 Processing: ${branchName}`);
    
    // Fetch the branch if it doesn't exist locally
    try {
      execSync(`git show-ref --verify --quiet refs/heads/${branchName}`, { stdio: 'ignore' });
    } catch {
      execSync(`git fetch origin ${branchName}:${branchName}`, { stdio: 'pipe' });
    }
    
    // Check if branch can be merged
    try {
      execSync(`git merge-base main ${branchName}`, { stdio: 'pipe' });
    } catch {
      failedBranches.push(branchName);
      failedCount++;
      return;
    }
    
    // Try to merge
    try {
      execSync(`git merge ${branchName} --no-edit --no-ff`, { stdio: 'pipe' });
      mergedCount++;
    } catch (error) {
      conflictCount++;
      
      // Try to resolve conflicts automatically
      try {
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        const conflictFiles = status.split('\n')
          .filter(line => line.match(/^UU|^AA|^DD/))
          .map(line => line.split(' ').pop());
        
        if (conflictFiles.length > 0) {
          for (const file of conflictFiles) {
            try {
              execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
              execSync(`git add "${file}"`, { stdio: 'pipe' });
            } catch {
              try {
                execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
                execSync(`git add "${file}"`, { stdio: 'pipe' });
              } catch {
                // Skip if can't resolve
              }
            }
          }
          
          try {
            execSync('git commit --no-edit', { stdio: 'pipe' });
            mergedCount++;
            conflictCount--;
          } catch {
            execSync('git merge --abort', { stdio: 'pipe' });
            failedBranches.push(branchName);
            failedCount++;
          }
        } else {
          execSync('git merge --abort', { stdio: 'pipe' });
          failedBranches.push(branchName);
          failedCount++;
        }
      } catch (resolveError) {
        execSync('git merge --abort', { stdio: 'pipe' });
        failedBranches.push(branchName);
        failedCount++;
      }
    }
  } catch (error) {
    failedBranches.push(branchName);
    failedCount++;
  }
}

// Process branches in smaller batches
async function processBatches() {
  const batchSize = 20;
  let totalProcessed = 0;
  
  for (let i = 0; i < filteredBranches.length; i += batchSize) {
    const batch = filteredBranches.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(filteredBranches.length / batchSize)}`);
    
    for (const branch of batch) {
      if (branch.trim()) {
        await mergeBranch(branch.trim());
        totalProcessed++;
        
        // Show progress every 50 branches
        if (totalProcessed % 50 === 0) {
          console.log(`📊 Progress: ${totalProcessed}/${filteredBranches.length} - Merged: ${mergedCount}, Failed: ${failedCount}`);
        }
      }
    }
    
    // Push changes after each batch
    try {
      console.log(`🚀 Pushing batch ${Math.floor(i / batchSize) + 1}...`);
      execSync('git push origin main', { stdio: 'pipe' });
    } catch (pushError) {
      console.log(`⚠️  Push failed for batch ${Math.floor(i / batchSize) + 1}, continuing...`);
    }
  }
}

// Main execution
async function main() {
  try {
    await processBatches();
    
    console.log('\n📊 Final Merge Summary:');
    console.log(`✅ Successfully merged: ${mergedCount} branches`);
    console.log(`❌ Failed to merge: ${failedCount} branches`);
    console.log(`🔧 Resolved conflicts: ${conflictCount} branches`);
    
    if (failedBranches.length > 0) {
      console.log(`\n❌ Failed branches (first 20):`);
      failedBranches.slice(0, 20).forEach(branch => console.log(`  - ${branch}`));
      if (failedBranches.length > 20) {
        console.log(`  ... and ${failedBranches.length - 20} more`);
      }
    }
    
    console.log('\n🎉 Batch merge process completed!');
    
  } catch (error) {
    console.error('❌ Error during batch merge process:', error.message);
    process.exit(1);
  }
}

main();