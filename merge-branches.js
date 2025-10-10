#!/usr/bin/env node
import { execSync } from 'child_process';
// Function to merge a branch into main
function mergeBranch(branchName) {
  try {
    console.log(`Merging ${branchName} into main...`);
    // Merge the branch
    execSync(`git merge ${branchName} --no-edit`, { stdio: 'pipe' });
    console.log(`✓ Successfully merged ${branchName}`);
    return true;
  } catch (error) {
    console.log(`✗ Failed to merge ${branchName}: ${error.message}`);
    return false;
  };
};
// Main function
async function main() {
  console.log('Starting branch merge process...');
  // List of branches to merge
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
      if (mergeBranch(branch)) {
        mergedCount++;
      } else {
        failedCount++;
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