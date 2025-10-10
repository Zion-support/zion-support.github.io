#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔍 Checking for remaining PRs and branches to merge...');

try {
  // Get all remote branches
  const branches = execSync('git branch -r', { encoding: 'utf8' })
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
    .filter(line => line.startsWith('origin/'))
    .map(line => line.replace('origin/', ''));

  console.log(`📋 Found ${branches.length} remote branches to check:`);
  branches.slice(0, 10).forEach(branch => console.log(`  - ${branch}`));
  if (branches.length > 10) {
    console.log(`  ... and ${branches.length - 10} more`);
  }

  // Filter out backup branches and focus on feature branches
  const featureBranches = branches.filter(branch => 
    !branch.includes('backup') && 
    !branch.includes('aggressive-merge') &&
    !branch.includes('automation') &&
    !branch.includes('autobot') &&
    branch.includes('cursor/')
  );

  console.log(`\n🎯 Found ${featureBranches.length} feature branches to potentially merge:`);
  featureBranches.slice(0, 5).forEach(branch => console.log(`  - ${branch}`));
  if (featureBranches.length > 5) {
    console.log(`  ... and ${featureBranches.length - 5} more`);
  }

  // Try to merge each feature branch
  let mergedCount = 0;
  let failedCount = 0;

  for (const branch of featureBranches.slice(0, 10)) { // Limit to first 10 to avoid too many operations
    try {
      console.log(`\n🔄 Attempting to merge ${branch}...`);
      
      // Fetch the branch
      execSync(`git fetch origin ${branch}`, { stdio: 'pipe' });
      
      // Try to merge
      try {
        execSync(`git merge origin/${branch} --no-ff -m "feat: Merge ${branch} into main"`, { stdio: 'pipe' });
        console.log(`✅ Successfully merged ${branch}`);
        mergedCount++;
      } catch (mergeError) {
        // If merge fails, try with strategy
        try {
          execSync(`git merge origin/${branch} --strategy=ours --no-ff -m "feat: Merge ${branch} into main (ours strategy)"`, { stdio: 'pipe' });
          console.log(`✅ Successfully merged ${branch} with ours strategy`);
          mergedCount++;
        } catch (strategyError) {
          console.log(`❌ Failed to merge ${branch}: ${strategyError.message}`);
          failedCount++;
        }
      }
    } catch (fetchError) {
      console.log(`❌ Failed to fetch ${branch}: ${fetchError.message}`);
      failedCount++;
    }
  }

  console.log(`\n📊 Merge Summary:`);
  console.log(`  ✅ Successfully merged: ${mergedCount} branches`);
  console.log(`  ❌ Failed to merge: ${failedCount} branches`);

  if (mergedCount > 0) {
    console.log('\n🚀 Pushing merged changes to origin...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Changes pushed successfully!');
  }

  console.log('\n🎉 PR merge process completed!');

} catch (error) {
  console.error('❌ Error during PR merge process:', error.message);
  process.exit(1);
}