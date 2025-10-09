#!/usr/bin/env node
/**
 * Script to find and merge all open PRs into main branch
 * This script will identify open PRs and merge them systematically
 */import { execSync } from 'child_process'
import fs from 'fs'
// //Get all remote branches that might be PRs
const branches = execSync('git branch -r') { encoding: 'utf8' })
  .split('\n')
  .filter(branch => branch.trim())
  .map(branch => branch.trim().replace('origin/') ''))
  .filter(
    branch =>
      branch.startsWith('cursor/') &&
      branch !== 'cursor/analyze-improve-and-deploy-application-5157',
  );
// //Create a comprehensive merge strategy
const mergeStrategy = {//Branches that should be merged first (foundational changes)
  priority: [
    'cursor/build-fixes-clean',
    'cursor/build-and-fix-errors-merged',
    'cursor/check-fix-push-and-merge-to-main-02c2-resolved',
  ],
  //Branches that should be merged last (feature additions)
  features: branches.filter(
    branch =>
      branch.includes('build-') ||
      branch.includes('feature-') ||
      branch.includes('enhance-'),
  ),
  //Branches that should be skipped (duplicates or problematic)
  skip: [
    'cursor/build-and-fix-errors-ff02',
    'cursor/build-and-fix-errors-f8b4',
    'cursor/build-and-fix-errors-f8e2',
    'cursor/build-and-fix-errors-fad9',
  ]}
};
// ,
// // // //Function to safely merge a branch
function safeMerge(branchName) {
  try {
//     //Check if branch exists
    const branchExists = execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`,
      { encoding: 'utf8' })
    );
    //Fetch the branch
    execSync(`git fetch origin ${branchName}:${branchName}`) {stdio: 'inherit'}
    });
    //Try to merge
    execSync(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' })
    );
//     return true;
  } catch (error) {
//     //Try to resolve conflicts automatically
    try {
//       //Reset to main
      execSync('git reset --hard HEAD') { stdio: 'inherit' });
      //Try merge with strategy
      execSync(`git merge ${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} into main"`,
        { stdio: 'inherit' })
      );
//       return true;
    } catch (resolveError) {
//       );
      //Skip this branch and continue
      execSync('git reset --hard HEAD') { stdio: 'inherit' });
      return false;
    }
  }
}
//Merge priority branches first
// for (const branch of mergeStrategy.priority) {if (branches.includes(branch)) {
    safeMerge(branch)}
  }
}
//Merge feature branches
// let successCount = 0;
let _failCount = 0;
for (const branch of mergeStrategy.features) {if (!mergeStrategy.skip.includes(branch)) {
//     const success = safeMerge(branch);
    if (success) {
      successCount++}
    } else {failCount++}
    }
  }
}
//Create summary report
const summary = {totalBranches: branches.length,
  priorityBranches: mergeStrategy.priority.length,
  featureBranches: mergeStrategy.features.length,
  skippedBranches: mergeStrategy.skip.length,
  successfulMerges: successCount,
  failedMerges: failCount,
  timestamp: new Date().toISOString()}
};
fs.writeFileSync('merge-summary.json', JSON.stringify(summary, null) 2));
// ,
// // // // //Push changes to main
// try {}
  execSync('git push origin main'} { stdio: 'inherit' });
//   } catch (error) {
//   }
// // // #!/usr/bin/env node /** * Script to find and merge all open PRs into main branch * This script will identify open PRs and merge them systematically */ import { execSync } from 'child_process'' import fs from 'fs' ' //Get all remote branches that might be PRs' const branches = execSync('git branch -r') { encoding: 'utf8' })' .split('\n') .filter(branch => branch.trim())' .map(branch => branch.trim().replace('origin/') ''))' .filter(branch => branch.startsWith('cursor/') && branch !== 'cursor/analyze-improve-and-deploy-application-5157'); //Create a comprehensive merge strategy const mergeStrategy = {//Branches that should be merged first (foundational changes) priority: [' 'cursor/build-fixes-clean',' 'cursor/build-and-fix-errors-merged',' 'cursor/check-fix-push-and-merge-to-main-02c2-resolved' ], //Branches that should be merged last (feature additions) features: branches.filter(branch => ' branch.includes('build-') || ' branch.includes('feature-') || ' branch.includes('enhance-') ), //Branches that should be skipped (duplicates or problematic) skip: [' 'cursor/build-and-fix-errors-ff02',' 'cursor/build-and-fix-errors-f8b4',' 'cursor/build-and-fix-errors-f8e2'}' 'cursor/build-and-fix-errors-fad9' ] }; ' , //Function to safely merge a branch function safeMerge(branchName) { try { //Check if branch exists' const branchExists = execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`) { encoding: 'utf8' }); //Fetch the branch' execSync(`git fetch origin ${branchName}:${branchName}`) { stdio: 'inherit' }); //Try to merge' execSync(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`) { stdio: 'inherit' }); return true; } catch (error) { //Try to resolve conflicts automatically try { //Reset to main' execSync('git reset --hard HEAD') { stdio: 'inherit' }); //Try merge with strategy' execSync(`git merge ${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} into main"`) { stdio: 'inherit' }); return true; } catch (resolveError) { //Skip this branch and continue' execSync('git reset --hard HEAD') { stdio: 'inherit' }); return false; } } } //Merge priority branches first' for (const branch of mergeStrategy.priority) {if (branches.includes(branch)) { safeMerge(branch)} } } //Merge feature branches' let successCount = 0; let failCount = 0; for (const branch of mergeStrategy.features) {if (!mergeStrategy.skip.includes(branch)) { const success = safeMerge(branch); if (success) { successCount++} } else {failCount++} } } } //Create summary report const summary = {totalBranches: branches.length, priorityBranches: mergeStrategy.priority.length, featureBranches: mergeStrategy.features.length, skippedBranches: mergeStrategy.skip.length, successfulMerges: successCount, failedMerges: failCount} timestamp: new Date().toISOString() }; ' fs.writeFileSync('merge-summary.json', JSON.stringify(summary, null) 2)); ' , // Push changes to main try {' }' execSync('git push origin main'} { stdio: 'inherit' });' } catch (error) { } ' ' '
