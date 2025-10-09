#!/usr/bin/env node

/**
 * Simple Merge - Handles new branches with conflict resolution
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //List of new branches to merge (from the fetch output)
const newBranches = [
  'cursor/fix-errors-and-merge-to-main-214f',
  'cursor/fix-errors-and-merge-to-main-25ca',
  'cursor/fix-errors-and-merge-to-main-277a',
  'cursor/fix-errors-and-merge-to-main-2bbe',
  'cursor/fix-errors-and-merge-to-main-3bb0',
  'cursor/fix-errors-and-merge-to-main-4415',
  'cursor/fix-errors-and-merge-to-main-451b',
  'cursor/fix-errors-and-merge-to-main-4c51',
  'cursor/fix-errors-and-merge-to-main-4dbc',
  'cursor/fix-errors-and-merge-to-main-4feb',
  'cursor/fix-errors-and-merge-to-main-6b3f',
  'cursor/fix-errors-and-merge-to-main-7795',
  'cursor/fix-errors-and-merge-to-main-7f81',
  'cursor/fix-errors-and-merge-to-main-85b7',
  'cursor/fix-errors-and-merge-to-main-8f2f',
  'cursor/fix-errors-and-merge-to-main-90a6',
  'cursor/fix-errors-and-merge-to-main-921e',
  'cursor/fix-errors-and-merge-to-main-9ff4',
  'cursor/fix-errors-and-merge-to-main-b024',
  'cursor/fix-errors-and-merge-to-main-b122',
  'cursor/fix-errors-and-merge-to-main-bba2',
  'cursor/fix-errors-and-merge-to-main-d4d4',
  'cursor/fix-errors-and-merge-to-main-e1bd',
  'cursor/fix-errors-and-merge-to-main-e6b7',
  'cursor/fix-errors-and-merge-to-main-fcbc',
];

// //Function to merge a single branch
function mergeBranch(branchName) {
//   try {
    //Try direct merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );
//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Try auto-resolve with theirs strategy
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'theirs' };
    } catch (theirsError) {
//       }

    try {
      //Try auto-resolve with ours strategy
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'ours' };
    } catch (oursError) {
//       }

    try {
      //Try manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'inherit' });

      //Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
      })
        .split('\n')
        .filter(file => file.trim());

//       //For each conflicted file, try to resolve
      for (const file of conflictedFiles) {
        if (file.trim()) {
          try {
            execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
            execSync(`git add "${file}"`, { stdio: 'inherit' });
//             } catch (fileError) {
//             }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'inherit',
      });
//       return { success: true, method: 'manual' };
    } catch (manualError) {
//       }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
//       } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Execute merge process
// const results = {
  successful: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: { direct: 0, theirs: 0, ours: 0, manual: 0, failed: 0 },
  },
};

//Merge each branch
for (const branch of newBranches) {
  const _result = mergeBranch(branch);
  results.summary.total++;

  if (result.success) {
    results.successful.push({ branch, ...result });
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.failed.push({ branch, ...result });
    results.summary.failed++;
    results.summary.methods.failed++;
  }
}

//Generate report
// // // // // // // // // // if (results.failed.length > 0) {
//   //   results.failed.forEach(result => // console.log(`  - ${result.branch}`));
}

// Save report
results.timestamp = new Date().toISOString();
fs.writeFileSync('simple-merge-report.json', JSON.stringify(results, null, 2));

// // 