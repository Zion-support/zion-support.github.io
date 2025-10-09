#!/usr/bin/env node

/**
 * Merge Recent Branches - Merges recent cursor and other important branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get recent branches
// const recentBranches = [
  'cursor/fix-errors-and-merge-to-main-3b04',
  'cursor/fix-errors-and-merge-to-main-4800',
  'cursor/fix-errors-and-merge-to-main-9caa',
  'cursor/fix-errors-and-merge-to-main-b8f9',
  'cursor/fix-errors-and-merge-to-main-cefe',
  'cursor/fix-errors-and-merge-to-main-dc65',
  'cursor/fix-errors-and-merge-to-main-fbf8',
  'cursor/fix-errors-and-merge-to-main-fcbc',
  'cursor/fix-errors-and-merge-to-main-ffaa',
  'cursor/fix-errors-and-merge-to-main-ffab',
  'cursor/fix-errors-and-merge-to-main-ffee',
  'cursor/fix-errors-and-merge-to-main-5696',
  'cursor/fix-errors-and-merge-to-main-6ee3',
  'cursor/fix-errors-and-merge-to-main-dc0f',
  'candidate/fix-errors-and-merge-to-main-a79e',
  'candidate/fix-syntax-push-and-merge-to-main-44ce',
  'chore/a11y-reduced-motion',
  'chore/a11y-single-main',
  'chore/add-2027-content-and-homepage-promo',
];

// //Step 3: Merge function with conflict resolution
function mergeBranch(branchName) {
//   try {
    //Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    //Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
//       return { success: true, method: 'already_merged' };
    }

    //Try to merge
    try {
      execSync(
        `git merge origin/${branchName} --no-ff -m "Merge ${branchName}: automated merge"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'direct' };
    } catch (mergeError) {
//       //Try different conflict resolution strategies
      try {
        //Strategy 1: Use theirs
        execSync(
          `git merge origin/${branchName} --strategy-option=theirs --no-ff -m "Merge ${branchName}: using theirs strategy"`,
          { stdio: 'inherit' }
        );
//         return { success: true, method: 'theirs' };
      } catch (theirsError) {
        try {
          //Strategy 2: Use ours
          execSync(
            `git merge origin/${branchName} --strategy-option=ours --no-ff -m "Merge ${branchName}: using ours strategy"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'ours' };
        } catch (oursError) {
//           return { success: false, method: 'failed' };
        }
      }
    }
  } catch (error) {
//     return { success: false, method: 'not_found' };
  }
}

//Step 4: Process all branches
const results = {
  successful: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: {
      direct: 0,
      theirs: 0,
      ours: 0,
      already_merged: 0,
      not_found: 0,
      failed: 0,
    },
  },
};

// for (const branch of recentBranches) {
  results.summary.total++;

  if (result.success) {
    results.successful.push({
      branch: branch,
      success: true,
      method: result.method,
    });
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.failed.push({
      branch: branch,
      success: false,
      method: result.method,
    });
    results.summary.failed++;
    results.summary.methods[result.method]++;
  }
}

//Step 5: Generate report
// const report = {
  ...results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(
  'recent-branches-merge-report.json',
  JSON.stringify(report, null, 2)
);

//Step 6: Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   }

// Step 7: Summary
// // // // // // // // // // // // // // 