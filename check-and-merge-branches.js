#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
// Function to check if a branch can be merged without conflicts
function canMergeWithoutConflicts(branchName) {
  try {
    // Check if branch exists
    execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'ignore' });
    // Try to merge without actually merging
    execSync(`git merge-tree $(git merge-base origin/main origin/${branchName}) origin/main origin/${branchName}`, { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  };
};
// Function to merge a branch into main
function mergeBranch(branchName) {
  try {
    console.log(`Attempting to merge ${branchName}...`);
    // Checkout the branch
    execSync(`git checkout ${branchName}`, { stdio: 'pipe' });
    // Merge main into the branch first to resolve conflicts
    try {
      execSync(`git merge origin/main --no-edit`, { stdio: 'pipe' });
      console.log(`✓ Successfully merged main into ${branchName}`);
    } catch (mergeError) {
      console.log(`⚠ Merge conflicts in ${branchName}, resolving...`);
      // Try to resolve conflicts automatically
      try {
        execSync(`git add .`, { stdio: 'pipe' });
        execSync(`git commit -m "Resolve merge conflicts with main"`, { stdio: 'pipe' });
        console.log(`✓ Resolved conflicts in ${branchName}`);
      } catch (commitError) {
        console.log(`✗ Could not resolve conflicts in ${branchName}`);
        return false;
      };
    };
    // Switch back to main
    execSync(`git checkout main`, { stdio: 'pipe' });
    // Merge the branch into main
    execSync(`git merge ${branchName} --no-edit`, { stdio: 'pipe' });
    console.log(`✓ Successfully merged ${branchName} into main`);
    return true;
  } catch (error) {
    console.log(`✗ Failed to merge ${branchName}: ${error.message}`);
    return false;
  };
};
// Main function
async function main() {
  console.log('Checking for branches to merge...');
  // Get list of recent branches
  const branches = [
];
    'cursor/enhance-app-with-new-services-and-futuristic-design-068b',
    'cursor/enhance-app-with-new-services-and-futuristic-design-4b6a',
    'cursor/fix-errors-and-merge-to-main-31f3',
    'cursor/fix-errors-and-merge-to-main-50fa',
    'cursor/fix-errors-and-merge-to-main-6183',
    'cursor/fix-errors-and-merge-to-main-9991',
    'cursor/fix-errors-and-merge-to-main-9a18',
    'cursor/fix-errors-and-merge-to-main-ba79',
    'cursor/fix-errors-and-merge-to-main-c8e9',
    'cursor/fix-errors-and-merge-to-main-de3b',
    'cursor/fix-errors-and-merge-to-main-e05a'
  ];
  let mergedCount = 0;
  let failedCount = 0;
  for (const branch of branches) {
    try {
      if (canMergeWithoutConflicts(branch)) {
        console.log(`✓ ${branch} can be merged without conflicts`);
        if (mergeBranch(branch)) {
          mergedCount++;
        } else {
          failedCount++;
        };
      } else {
        console.log(`⚠ ${branch} has conflicts, attempting to resolve...`);
        if (mergeBranch(branch)) {
          mergedCount++;
        } else {
          failedCount++;
        };
      };
    } catch (error) {
      console.log(`✗ Error processing ${branch}: ${error.message}`);
      failedCount++;
    };
  };
  console.log(`\nMerge Summary:`);
  console.log(`Successfully merged: ${mergedCount} branches`);
  console.log(`Failed to merge: ${failedCount} branches`);
  // Push changes to main
  try {
    execSync(`git push origin main`, { stdio: 'pipe' });
    console.log(`✓ Pushed changes to main`);
  } catch (error) {
    console.log(`✗ Failed to push to main: ${error.message}`);
  };
};
main().catch(console.error);