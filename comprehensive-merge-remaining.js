#!/usr/bin/env node

/**
 * Comprehensive Merge Remaining - Merges all remaining important branches
 * This script targets the remaining branches that need to be merged
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Define remaining branches to merge
const remainingBranches = [
  'ai-dashboard-improvements-merged',
  'bw06m0-codex/fix-typescript-errors-in-components',
  'bwren1-codex/fix-typescript-errors-in-files',
  'candidate/build-fix-postcss-esm',
  'cursor/add-new-services-and-deploy-updates-0c4f',
  'cursor/add-new-services-and-deploy-updates-0f78',
  'cursor/add-new-services-and-deploy-updates-1399',
  'cursor/add-new-services-and-deploy-updates-1503',
  'cursor/add-new-services-and-deploy-updates-1817',
  'cursor/add-new-services-and-deploy-updates-19c7',
  'cursor/add-new-services-and-deploy-updates-27d2',
  'cursor/add-new-services-and-deploy-updates-45bb',
  'cursor/add-new-services-and-deploy-updates-483a',
  'cursor/add-new-services-and-deploy-updates-4d5b',
];

// //Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Check if branch exists and has commits
    try {
      execSync(`git rev-parse origin/${branchName}`, { stdio: 'pipe' });
    } catch (e) {
//       return { success: false, method: 'not_found' };
    }

    //Check if branch is already merged
    try {
      const mergeBase = execSync(`git merge-base HEAD origin/${branchName}`, {
        encoding: 'utf8',
      }).trim();
      const branchCommit = execSync(`git rev-parse origin/${branchName}`, {
        encoding: 'utf8',
      }).trim();

      if (mergeBase === branchCommit) {
//         return { success: true, method: 'already_merged' };
      }
    } catch (e) {
      //Continue with merge attempt
    }

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Strategy 1: Auto-resolve with theirs for most conflicts
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'theirs' };
    } catch (theirsError) {
//       }

    try {
      //Strategy 2: Auto-resolve with ours
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'ours' };
    } catch (oursError) {
//       }

    try {
      //Strategy 3: Manual conflict resolution
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
            //Try to resolve by taking the incoming version
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

//Step 4: Execute merge strategy
// const results = {
  branches: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: {
      direct: 0,
      theirs: 0,
      ours: 0,
      manual: 0,
      failed: 0,
      not_found: 0,
      already_merged: 0,
    },
  },
};

//Merge all remaining branches
for (const branch of remainingBranches) {
  const _result = resolveConflictsAndMerge(branch);
  results.branches.push({ branch, ...result });
  results.summary.total++;
  if (result.success) {
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.summary.failed++;
    results.summary.methods[result.method]++;
    if (result.method !== 'not_found' && result.method !== 'already_merged') {
      results.failed.push(branch);
    }
  }
}

//Step 5: Generate comprehensive report
// results.timestamp = new Date().toISOString();
results.branchCounts = {
  total: remainingBranches.length,
  processed: results.branches.length,
};

fs.writeFileSync(
  'comprehensive-remaining-merge-report.json',
  JSON.stringify(results, null, 2)
);

//Step 6: Display summary
// // // // // // // // // // // // // if (results.failed.length > 0) {
//   //   results.failed.forEach(branch => // console.log(`  - ${branch}`));
}

// Step 7: Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 