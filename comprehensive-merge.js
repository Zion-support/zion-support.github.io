#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('Starting comprehensive PR merge process...');

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`Executing: ${description}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✓ ${description} - Success`);
    return { success: true, result };
  } catch (error) {
    console.log(`⚠ ${description} - Warning: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Ensure we're on main branch
safeGitCommand('git checkout main', 'Switch to main branch');
safeGitCommand('git pull origin main', 'Pull latest changes from main');

// List of PR branches to try merging
const prBranches = [
  'cursor/fix-web-application-console-errors-0bf5',
  'cursor/build-and-deploy-with-vite-and-netlify-8b37',
  'cursor/fix-errors-and-merge-to-main-fcbd',
  'cursor/fix-errors-and-merge-to-main-e6e1',
];

console.log('\n--- Attempting to merge PR branches ---');

let mergedCount = 0;
let conflictCount = 0;

for (const branch of prBranches) {
  console.log(`\n--- Processing branch: ${branch} ---`);

  // Check if branch exists
  const branchCheck = safeGitCommand(
    `git show-ref --verify --quiet refs/remotes/origin/${branch}`,
    `Check if ${branch} exists`,
  );

  if (!branchCheck.success) {
    console.log(`⚠ Branch ${branch} not found, skipping...`);
    continue;
  }

  // Try to merge the branch
  const mergeResult = safeGitCommand(
    `git merge origin/${branch} --no-ff -m "Merge branch ${branch}"`,
    `Merge ${branch}`,
  );

  if (mergeResult.success) {
    mergedCount++;
    console.log(`✓ Successfully merged ${branch}`);
  } else {
    conflictCount++;
    console.log(`⚠ Merge conflict or error for ${branch}`);

    // Try to abort the merge if there was a conflict
    safeGitCommand('git merge --abort', `Abort merge for ${branch}`);
  }
}

console.log(`\n--- Merge Summary ---`);
console.log(`✓ Successfully merged: ${mergedCount} branches`);
console.log(`⚠ Conflicts/Errors: ${conflictCount} branches`);

// Push changes if any were merged
if (mergedCount > 0) {
  const pushResult = safeGitCommand(
    'git push origin main',
    'Push changes to main',
  );
  if (pushResult.success) {
    console.log('✓ All changes pushed to main successfully');
  } else {
    console.log('⚠ Error pushing changes to main');
  }
}

console.log('\n--- Comprehensive merge process completed ---');

// Generate a summary report
const summary = {
  timestamp: new Date().toISOString(),
  mergedBranches: mergedCount,
  conflictedBranches: conflictCount,
  totalProcessed: prBranches.length,
  status: mergedCount > 0 ? 'success' : 'no-changes',
};

fs.writeFileSync('merge-summary.json', JSON.stringify(summary, null, 2));
console.log('✓ Merge summary saved to merge-summary.json');
