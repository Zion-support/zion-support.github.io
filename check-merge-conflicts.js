#!/usr/bin/env node

import { execSync } from 'child_process';

// List of recent branches to check
const branchesToCheck = [
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-37a4',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-38d9',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66a5',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66b9',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-a0c3',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-afdc',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-b39b',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d64f',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f548',
  'origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-feb4',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-2e4e',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-32a7',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f0c',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-c63e',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-db15',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-e1c1',
  'origin/cursor/enhance-app-with-new-services-and-futuristic-design-f12f'
];

console.log('Checking merge conflicts for recent branches...\n');

const mergeableBranches = [];
const conflictedBranches = [];

for (const branch of branchesToCheck) {
  try {
    console.log(`Checking ${branch}...`);
    
    // Check if branch exists
    try {
      execSync(`git show-ref --verify --quiet refs/remotes/${branch}`, { stdio: 'pipe' });
    } catch (e) {
      console.log(`  ❌ Branch ${branch} does not exist, skipping...`);
      continue;
    }
    
    // Try to merge without committing
    try {
      execSync(`git merge --no-commit --no-ff ${branch}`, { stdio: 'pipe' });
      console.log(`  ✅ ${branch} - No conflicts, can be merged`);
      mergeableBranches.push(branch);
      
      // Abort the merge
      execSync('git merge --abort', { stdio: 'pipe' });
    } catch (e) {
      console.log(`  ⚠️  ${branch} - Has conflicts or issues`);
      conflictedBranches.push(branch);
      
      // Abort the merge if it was partially completed
      try {
        execSync('git merge --abort', { stdio: 'pipe' });
      } catch (abortError) {
        // Ignore abort errors
      }
    }
  } catch (error) {
    console.log(`  ❌ Error checking ${branch}: ${error.message}`);
  }
}

console.log('\n=== SUMMARY ===');
console.log(`✅ Mergeable branches: ${mergeableBranches.length}`);
mergeableBranches.forEach(branch => console.log(`  - ${branch}`));

console.log(`\n⚠️  Branches with conflicts: ${conflictedBranches.length}`);
conflictedBranches.forEach(branch => console.log(`  - ${branch}`));

if (mergeableBranches.length > 0) {
  console.log('\n=== MERGING MERGEABLE BRANCHES ===');
  for (const branch of mergeableBranches) {
    try {
      console.log(`Merging ${branch}...`);
      execSync(`git merge --no-ff ${branch}`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged ${branch}`);
    } catch (error) {
      console.log(`❌ Failed to merge ${branch}: ${error.message}`);
    }
  }
}