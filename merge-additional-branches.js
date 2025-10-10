#!/usr/bin/env node

/**
 * Merge Additional Branches - Merges the remaining codex and cursor branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get additional branches to merge
const additionalBranches = [
  'y7v6qh-codex/implement-eprivacy-directive-consent-banner',
  'y8b6t3-codex/fix-type-errors-in-typescript-files',
  'y8pqmi-codex/fix-services-fetch-and-fallback-logic',
  'ybn8hb-codex/fix-npm-eio-error-during-install',
  'ye4cs2-codex/add-i18n-support-with-next-i18next',
  'ye7hs1-codex/fix-npm-eio-error-during-install',
  'yggxu4-codex/implement-checkout-flow-with-auth-redirect',
  'yjjjqb-codex/check-logs-and-fix-errors',
  'ypnv26-codex/fix-talent-profile-rendering-issues',
  'yuysa9-codex/fix-errors-and-improve-project',
  'yvyz2j-codex/add-i18n-support-with-next-i18next',
  'yw5tz2-codex/implement-instant-messaging-for-negotiations',
  'yxewy6-codex/fix-toggle-icon-layout-issue',
  'z4gpnj-codex/implement-axios-interceptor-for-api-failures',
  'z5t0go-codex/fix-login-form-submission',
  'zdh03e-codex/fix-link-under-register-form',
  'zhnryo-codex/implement-eprivacy-directive-consent-banner',
  'zjqw50-codex/fix-ui-and-functional-bugs',
  'zreeup-codex/check-logs-and-fix-errors',
  'zzdg1a-codex/add-i18n-support-with-next-i18next',
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

//Merge all additional branches
for (const branch of additionalBranches) {
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
  total: additionalBranches.length,
  processed: results.branches.length,
};

fs.writeFileSync(
  'additional-branches-merge-report.json',
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