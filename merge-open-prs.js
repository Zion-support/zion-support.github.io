#!/usr/bin/env node

/**
 * Merge Open PRs - Focused script to merge the specific open PRs
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //The specific PR branches we identified
const openPRBranches = [
  'cursor/fix-web-application-console-errors-0bf5', //PR #11935
  'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4', //PR #24703
  'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7', //PR #24702
  'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e', //PR #24701
];

// //Function to merge a single branch
function mergeBranch(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try direct merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Check for merge conflicts
      const _status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
//         //Try auto-resolve with theirs strategy
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'theirs' };
        } catch (theirsError) {
//           }

        //Try auto-resolve with ours strategy
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'ours' };
        } catch (oursError) {
//           }

        //Try manual conflict resolution
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });

          //Get conflicted files
          const conflictedFiles = execSync(
            'git diff --name-only --diff-filter=U',
            { encoding: 'utf8' }
          )
            .split('\n')
            .filter(file => file.trim());

//           //For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                //Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });
//                 } catch (fileError) {
//                 }
            }
          }

          //Complete the merge
          execSync(
            `git commit -m "Manual conflict resolution for ${branchName}"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'manual' };
        } catch (manualError) {
//           }
      }
    } catch (statusError) {
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
for (const branch of openPRBranches) {
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

//Save report
results.timestamp = new Date().toISOString();
fs.writeFileSync(
  'open-prs-merge-report.json',
  JSON.stringify(results, null, 2)
);

// Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 
