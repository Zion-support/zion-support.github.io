#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Simple PR Resolver - Starting...');

try {
  // Check if we're in a git repository
  execSync('git rev-parse --git-dir', { stdio: 'pipe' });
  console.log('✅ Git repository detected');

  // Get current branch
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`📍 Current branch: ${currentBranch}`);

  // Switch to main branch
  if (currentBranch !== 'main') {
    console.log('🔄 Switching to main branch...');
    execSync('git checkout main');
  }

  // Pull latest changes
  console.log('📥 Pulling latest changes...');
  execSync('git pull origin main');

  // Get all remote branches
  console.log('📋 Getting remote branches...');
  const remoteBranches = execSync('git branch -r', { encoding: 'utf8' })
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'))
    .slice(0, 10); // Limit to first 10 branches

  console.log(`Found ${remoteBranches.length} remote branches to process`);

  let mergedCount = 0;
  let conflictCount = 0;

  for (const branch of remoteBranches) {
    try {
      console.log(`\n🔄 Processing branch: ${branch}`);
      
      // Checkout the branch
      execSync(`git checkout ${branch}`);
      
      // Try to merge main into the branch
      try {
        execSync('git merge main --no-ff -m "Merge main into ' + branch + '"');
        console.log(`✅ Successfully merged main into ${branch}`);
      } catch (mergeError) {
        console.log(`⚠️  Merge conflicts in ${branch}, resolving...`);
        conflictCount++;
        
        // Resolve conflicts by keeping our changes
        try {
          execSync('git checkout --ours .');
          execSync('git add .');
          execSync(`git commit -m "Resolve merge conflicts in ${branch}"`);
          console.log(`✅ Resolved conflicts in ${branch}`);
        } catch (resolveError) {
          console.log(`❌ Could not resolve conflicts in ${branch}: ${resolveError.message}`);
          execSync('git merge --abort');
          continue;
        }
      }

      // Push the updated branch
      execSync(`git push origin ${branch}`);

      // Switch back to main and merge
      execSync('git checkout main');
      execSync(`git merge ${branch} --no-ff -m "Merge ${branch} into main"`);
      execSync('git push origin main');

      mergedCount++;
      console.log(`✅ Successfully merged ${branch} into main`);

      // Delete the remote branch
      try {
        execSync(`git push origin --delete ${branch}`);
        console.log(`🗑️  Deleted remote branch ${branch}`);
      } catch (deleteError) {
        console.log(`⚠️  Could not delete remote branch ${branch}`);
      }

    } catch (error) {
      console.log(`❌ Failed to process ${branch}: ${error.message}`);
      
      // Switch back to main on error
      try {
        execSync('git checkout main');
      } catch (checkoutError) {
        console.log(`❌ Error switching back to main: ${checkoutError.message}`);
      }
    }
  }

  console.log(`\n🎉 Process completed!`);
  console.log(`✅ Successfully merged: ${mergedCount} branches`);
  console.log(`⚠️  Conflicts resolved: ${conflictCount} branches`);

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}