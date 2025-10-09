#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// //Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    //     //     const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    //     return { success: true, result };
  } catch (error) {
    //     return { success: false, error: error.message };
  }
}

//Ensure we're on main branch
safeGitCommand('git checkout main', 'Switch to main branch');
safeGitCommand('git pull origin main', 'Pull latest changes from main');

//List of PR branches to try merging
const prBranches = [
  'cursor/fix-web-application-console-errors-0bf5',
  'cursor/build-and-deploy-with-vite-and-netlify-8b37',
  'cursor/fix-errors-and-merge-to-main-fcbd',
  'cursor/fix-errors-and-merge-to-main-e6e1',
];

// let mergedCount = 0;
let _conflictCount = 0;

for (const branch of prBranches) {
  //   //Check if branch exists
  const branchCheck = safeGitCommand(
    `git show-ref --verify --quiet refs/remotes/origin/${branch}`,
    `Check if ${branch} exists`
  );

  if (!branchCheck.success) {
    //     continue;
  }

  //Try to merge the branch
  const mergeResult = safeGitCommand(
    `git merge origin/${branch} --no-ff -m "Merge branch ${branch}"`,
    `Merge ${branch}`
  );

  if (mergeResult.success) {
    mergedCount++;
    //     } else {
    conflictCount++;
    //     //Try to abort the merge if there was a conflict
    safeGitCommand('git merge --abort', `Abort merge for ${branch}`);
  }
}

// // // //Push changes if any were merged
if (mergedCount > 0) {
  const _pushResult = safeGitCommand('git push origin main', 'Push changes to main');
  if (pushResult.success) {
    //     } else {
    //     }
}

// // Generate a summary report
const summary = {
  timestamp: new Date().toISOString(),
  mergedBranches: mergedCount,
  conflictedBranches: conflictCount,
  totalProcessed: prBranches.length,
  status: mergedCount > 0 ? 'success' : 'no-changes',
};

fs.writeFileSync('merge-summary.json', JSON.stringify(summary, null, 2));
// 
