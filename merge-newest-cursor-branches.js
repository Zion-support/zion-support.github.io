#!/usr/bin/env node

/**
 * Merge Newest Cursor Branches - Process the newest cursor branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Newest cursor branches to merge
const newestCursorBranches = [
  'cursor/fix-errors-and-merge-to-main-2639',
  'cursor/fix-errors-and-merge-to-main-7e2b',
  'cursor/fix-errors-and-merge-to-main-9758',
  'cursor/fix-errors-and-merge-to-main-dfd4',
];

// //Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
//     //     const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
//     return { success: true, result };
  } catch (error) {
//     return { success: false, error: error.message };
  }
}

//Function to check if branch exists
function branchExists(branchName) {
  try {
    execSync(
      `git show-ref --verify --quiet refs/remotes/origin/${branchName}`,
      { stdio: 'pipe' }
    );
    return true;
  } catch {
    return false;
  }
}

//Ensure we're on main branch
// safeGitCommand('git checkout main', 'Switch to main branch');
safeGitCommand('git pull origin main', 'Pull latest changes from main');

// let mergedCount = 0;

//Process each branch
for (const branch of newestCursorBranches) {
//   //Check if branch exists
  if (!branchExists(branch)) {
//     notFoundCount++;
    results.push({
      branch,
      status: 'not_found',
    });
    continue;
  }

//   //Try to merge the branch
  const mergeResult = safeGitCommand(
    `git merge origin/${branch} --no-ff -m "Merge ${branch} into main"`,
    `Merge ${branch}`
  );

  if (mergeResult.success) {
    mergedCount++;
//     results.push({
      branch,
      status: 'merged',
    });
  } else {
//     //Try to abort the merge if there was a conflict
    safeGitCommand('git merge --abort', `Abort merge for ${branch}`);

    results.push({
      branch,
      status: 'conflict',
      error: mergeResult.error,
    });
  }
}

//Run system checks
// const typeCheck = safeGitCommand(
  'pnpm run type-check',
  'TypeScript type checking'
);
const buildCheck = safeGitCommand(
  'pnpm run build:no-check',
  'Production build'
);

//Push changes if any were merged
if (mergedCount > 0) {
//   const pushResult = safeGitCommand(
    'git push origin main',
    'Push changes to main'
  );
  if (pushResult.success) {
//     } else {
//     }
}

//Generate comprehensive report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    totalBranches: newestCursorBranches.length,
    merged: mergedCount,
    notFound: notFoundCount,
    successRate: `${Math.round((mergedCount / newestCursorBranches.length) * 100)}%`,
  },
  systemChecks: {
    typeCheck: typeCheck.success,
    lintCheck: lintCheck.success,
    testCheck: testCheck.success,
    buildCheck: buildCheck.success,
    allPassed:
      typeCheck.success &&
      lintCheck.success &&
      testCheck.success &&
      buildCheck.success,
  },
  results: results,
  status: mergedCount > 0 ? 'success' : 'no-changes',
};

// Save detailed report
fs.writeFileSync(
  'newest-cursor-branches-merge-report.json',
  JSON.stringify(report, null, 2)
);

// // // // // // // // // if (report.systemChecks.allPassed) {
//   } else {
//   }

// // 