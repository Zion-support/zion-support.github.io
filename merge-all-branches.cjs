#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive branch merge process...\n');

// Get all remote branches
function getAllBranches() {
  try {
    const output = execSync('git branch -r', { encoding: 'utf8' });
    return output
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
      .map(line => line.replace('origin/', ''));
  } catch (error) {
    console.error('Error getting branches:', error.message);
    return [];
  }
}

// Check if branch can be merged without conflicts
function canMergeWithoutConflicts(branch) {
  try {
    execSync(`git merge-base main origin/${branch}`, { stdio: 'pipe' });
    execSync(`git merge-tree $(git merge-base main origin/${branch}) main origin/${branch}`, { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}

// Merge a single branch
function mergeBranch(branch) {
  try {
    console.log(`📦 Merging branch: ${branch}`);
    
    // Checkout the branch
    execSync(`git checkout -b temp-merge-${branch} origin/${branch}`, { stdio: 'pipe' });
    
    // Try to merge into main
    execSync(`git checkout main`, { stdio: 'pipe' });
    execSync(`git merge temp-merge-${branch} --no-ff -m "Merge branch ${branch} into main"`, { stdio: 'pipe' });
    
    // Clean up
    execSync(`git branch -D temp-merge-${branch}`, { stdio: 'pipe' });
    
    console.log(`✅ Successfully merged: ${branch}`);
    return { success: true, branch };
  } catch (error) {
    console.log(`❌ Failed to merge: ${branch} - ${error.message}`);
    
    // Clean up on failure
    try {
      execSync(`git checkout main`, { stdio: 'pipe' });
      execSync(`git branch -D temp-merge-${branch}`, { stdio: 'pipe' });
    } catch (cleanupError) {
      // Ignore cleanup errors
    }
    
    return { success: false, branch, error: error.message };
  }
}

// Main execution
async function main() {
  const branches = getAllBranches();
  console.log(`Found ${branches.length} branches to process\n`);
  
  const results = {
    successful: [],
    failed: [],
    total: branches.length
  };
  
  // Process branches in batches to avoid overwhelming the system
  const batchSize = 10;
  for (let i = 0; i < branches.length; i += batchSize) {
    const batch = branches.slice(i, i + batchSize);
    console.log(`\n🔄 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);
    
    for (const branch of batch) {
      const result = mergeBranch(branch);
      if (result.success) {
        results.successful.push(result.branch);
      } else {
        results.failed.push({ branch: result.branch, error: result.error });
      }
    }
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Generate report
  console.log('\n📊 MERGE SUMMARY');
  console.log('================');
  console.log(`Total branches processed: ${results.total}`);
  console.log(`Successfully merged: ${results.successful.length}`);
  console.log(`Failed to merge: ${results.failed.length}`);
  
  if (results.successful.length > 0) {
    console.log('\n✅ Successfully merged branches:');
    results.successful.forEach(branch => console.log(`  - ${branch}`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed to merge branches:');
    results.failed.forEach(({ branch, error }) => console.log(`  - ${branch}: ${error}`));
  }
  
  // Save results to file
  fs.writeFileSync('merge-results.json', JSON.stringify(results, null, 2));
  console.log('\n💾 Results saved to merge-results.json');
  
  // Push changes
  try {
    console.log('\n🚀 Pushing changes to remote...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed to remote');
  } catch (error) {
    console.log('❌ Failed to push to remote:', error.message);
  }
}

main().catch(console.error);