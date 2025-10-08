#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// // Read the open PRs data
let _openPRs = [];
try {
//   const prData = fs.readFileSync('open_prs_current.json', 'utf8');
  openPRs = JSON.parse(prData);
//   } catch (error) {
//   process.exit(1);
}

// Function to safely merge a PR branch
function mergePR(pr) {
//   const branchName = pr.head.ref;
//   const prNumber = pr.number;
//   const prTitle = pr.title;

//   //   try {
    // Check if branch exists
    try {
      execSync(
        `git show-ref --verify --quiet refs/remotes/origin/${branchName}`,
        { stdio: 'pipe' }
      );
    } catch (error) {
//       return false;
    }

    // Fetch the latest changes
//     execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    // Check for merge conflicts
//     try {
      execSync(`git merge --no-commit --no-ff origin/${branchName}`, {
        stdio: 'pipe',
      });
//       // Complete the merge
      execSync(
        `git merge --no-ff origin/${branchName} -m "Merge PR #${prNumber}: ${prTitle}"`,
        { stdio: 'inherit' }
      );
//       return true;
    } catch (mergeError) {
//       // Reset the merge attempt
      execSync('git merge --abort', { stdio: 'pipe' });

      // Try to resolve conflicts automatically
      try {
//         execSync(
          `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge PR #${prNumber}: ${prTitle}"`,
          { stdio: 'inherit' }
        );
//         return true;
      } catch (resolveError) {
//         //         // Reset to clean state
        execSync('git reset --hard HEAD', { stdio: 'pipe' });
        return false;
      }
    }
  } catch (error) {
//     return false;
  }
}

// Process each PR
let _successCount = 0;
let _failCount = 0;
const _results = [];

for (const pr of openPRs) {
//   const success = mergePR(pr);
  results.push({
    prNumber: pr.number,
    title: pr.title,
    branch: pr.head.ref,
    success: success,
  });

  if (success) {
    successCount++;
  } else {
    failCount++;
  }
}

// Create summary report
const summary = {
  totalPRs: openPRs.length,
  successfulMerges: successCount,
  failedMerges: failCount,
  results: results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync('pr-merge-results.json', JSON.stringify(summary, null, 2));

// // // // // Push changes to main if there were successful merges
if (successCount > 0) {
  try {
//     execSync('git push origin main', { stdio: 'inherit' });
//     } catch (error) {
//     }
}

// // 