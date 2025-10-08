#!/usr/bin/env node

/**
 * Merge Additional Branches - Merges the remaining codex and cursor branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 Starting Merge of Additional Branches...\n');

//Step 1: Ensure we're on main and up to date
// console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  // console.log('✅ Main branch is up to date\n');
} catch (error) {
  // console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
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

// console.log(
  `📊 Found ${additionalBranches.length} additional branches to process\n`
);

//Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
  // console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Check if branch exists and has commits
    try {
      execSync(`git rev-parse origin/${branchName}`, { stdio: 'pipe' });
    } catch (e) {
      // console.log(`⚠️  Branch ${branchName} does not exist, skipping...`);
      return { success: false, method: 'not_found' };
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
        // console.log(`✅ Branch ${branchName} is already merged, skipping...`);
        return { success: true, method: 'already_merged' };
      }
    } catch (e) {
      //Continue with merge attempt
    }

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

    // console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  } catch (error) {
    // console.log(
      `⚠️  Direct merge failed for ${branchName}, attempting conflict resolution...`
    );

    try {
      //Strategy 1: Auto-resolve with theirs for most conflicts
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );
      // console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
      );
      return { success: true, method: 'theirs' };
    } catch (theirsError) {
      // console.log(`⚠️  'Theirs' strategy failed, trying 'ours' strategy...`);
    }

    try {
      //Strategy 2: Auto-resolve with ours
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'inherit' }
      );
      // console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
      );
      return { success: true, method: 'ours' };
    } catch (oursError) {
      // console.log(`⚠️  'Ours' strategy failed, trying manual resolution...`);
    }

    try {
      //Strategy 3: Manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'inherit' });

      //Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
      })
        .split('\n')
        .filter(file => file.trim());

      // console.log(
        `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
      );

      //For each conflicted file, try to resolve
      for (const file of conflictedFiles) {
        if (file.trim()) {
          try {
            //Try to resolve by taking the incoming version
            execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
            execSync(`git add "${file}"`, { stdio: 'inherit' });
            // console.log(`  ✅ Resolved conflict in ${file}`);
          } catch (fileError) {
            // console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
          }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'inherit',
      });
      // console.log(`✅ Manually resolved conflicts for ${branchName}`);
      return { success: true, method: 'manual' };
    } catch (manualError) {
      // console.log(`❌ Manual resolution failed for ${branchName}`);
    }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
      // console.log(`⏭️  Skipping ${branchName} due to unresolvable conflicts`);
    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Step 4: Execute merge strategy
// console.log('🚀 Step 4: Executing merge strategy...\n');

const results = {
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
  const result = resolveConflictsAndMerge(branch);
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
// console.log('\n📊 Step 5: Generating merge report...');
results.timestamp = new Date().toISOString();
results.branchCounts = {
  total: additionalBranches.length,
  processed: results.branches.length,
};

fs.writeFileSync(
  'additional-branches-merge-report.json',
  JSON.stringify(results, null, 2)
);

//Step 6: Display summary
// console.log('\n🎉 ADDITIONAL BRANCHES MERGE PROCESS COMPLETED!\n');
// console.log('📊 SUMMARY:');
// console.log(`  Total branches processed: ${results.summary.total}`);
// console.log(`  Successful merges: ${results.summary.successful}`);
// console.log(`  Failed merges: ${results.summary.failed}`);
// console.log('\n🔧 RESOLUTION METHODS:');
// console.log(`  Direct merges: ${results.summary.methods.direct}`);
// console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
// console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
// console.log(`  Manual resolution: ${results.summary.methods.manual}`);
// console.log(`  Already merged: ${results.summary.methods.already_merged}`);
// console.log(`  Not found: ${results.summary.methods.not_found}`);
// console.log(`  Failed: ${results.summary.methods.failed}`);

if (results.failed.length > 0) {
  // console.log('\n❌ FAILED BRANCHES:');
  results.failed.forEach(branch => // console.log(`  - ${branch}`));
}

// Step 7: Push changes
// console.log('\n🚀 Step 7: Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  // console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  // console.error('❌ Failed to push changes:', error.message);
  // console.log('You may need to push manually: git push origin main');
}

// console.log(
  '\n📄 Detailed report saved to: additional-branches-merge-report.json'
);
// console.log('🎯 Additional branches merge process completed successfully!');
