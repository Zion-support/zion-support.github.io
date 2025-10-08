#!/usr/bin/env node

/**
 * Comprehensive PR Merge - Handles all remaining branches and PRs
 */ import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 Starting Comprehensive PR Merge Process...\n');

//Step 1: Ensure we're on main and up to date
// console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   console.log('✅ Main branch is up to date\n');
} catch (error) {
//   console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

//Step 2: Get all branches that might need merging
// console.log('📊 Step 2: Identifying branches to merge...');

//Get recent branches (last 7 days)
const recentBranches = execSync(
  'git for-each-ref --sort=-committerdate refs/remotes/origin --format="%(committerdate:short) %(refname:short)"',
  { encoding: 'utf8' }
)
  .split('\n')
  .map(line => line.trim())
  .filter(line => line && !line.includes('HEAD'))
  .filter(line => !line.includes('backup'))
  .filter(line => !line.includes('aggressive'))
  .filter(line => !line.includes('automation'))
  .map(line => {
    const parts = line.split(' ');
    return {
      date: parts[0],
      branch: parts[1].replace('origin/', ''),
    };
  })
  .filter(item => {
//     const branchDate = new Date(item.date);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return branchDate >= sevenDaysAgo;
  })
  .map(item => item.branch)
  .filter(
    branch =>
      branch.includes('cursor') ||
      branch.includes('fix') ||
      branch.includes('merge') ||
      branch.includes('candidate') ||
      branch.includes('chore') ||
      branch.includes('add-new') ||
      branch.includes('ai-') ||
      branch.includes('codex')
  );

// console.log(`📊 Found ${recentBranches.length} recent branches to process\n`);

//Step 3: Enhanced merge function with conflict resolution
function mergeBranch(branchName) {
//   console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    //Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
//       console.log(`✅ Branch ${branchName} is already merged, skipping...`);
      return { success: true, method: 'already_merged' };
    }

    //Try to merge
    try {
      execSync(
        `git merge origin/${branchName} --no-ff -m "Merge ${branchName}: automated merge"`,
        { stdio: 'inherit' }
      );
//       console.log(`✅ Successfully merged ${branchName}`);
      return { success: true, method: 'direct' };
    } catch (mergeError) {
//       console.log(
        `⚠️  Merge conflict detected for ${branchName}, attempting resolution...`
      );

      //Try different conflict resolution strategies
      try {
        //Strategy 1: Use theirs
        execSync(
          `git merge origin/${branchName} --strategy-option=theirs --no-ff -m "Merge ${branchName}: using theirs strategy"`,
          { stdio: 'inherit' }
        );
//         console.log(
          `✅ Successfully merged ${branchName} using 'theirs' strategy`
        );
        return { success: true, method: 'theirs' };
      } catch (theirsError) {
        try {
          //Strategy 2: Use ours
          execSync(
            `git merge origin/${branchName} --strategy-option=ours --no-ff -m "Merge ${branchName}: using ours strategy"`,
            { stdio: 'inherit' }
          );
//           console.log(
            `✅ Successfully merged ${branchName} using 'ours' strategy`
          );
          return { success: true, method: 'ours' };
        } catch (oursError) {
//           console.log(
            `❌ Failed to merge ${branchName} after trying all strategies`
          );
          return { success: false, method: 'failed' };
        }
      }
    }
  } catch (error) {
//     console.log(`❌ Branch ${branchName} not found or error: ${error.message}`);
    return { success: false, method: 'not_found' };
  }
}

//Step 4: Process branches in batches
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

// console.log('🚀 Step 3: Executing merge strategy...\n');

//Process in batches of 20 to avoid overwhelming the system
// const batchSize = 20;
// const totalBatches = Math.ceil(recentBranches.length / batchSize);

for (let batch = 0; batch < totalBatches; batch++) {
//   const start = batch * batchSize;
//   const end = Math.min(start + batchSize, recentBranches.length);
  const batchBranches = recentBranches.slice(start, end);

//   console.log(
    `\n📦 Processing batch ${batch + 1}/${totalBatches} (${batchBranches.length} branches)...`
  );

  for (const branch of batchBranches) {
    const result = mergeBranch(branch);
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

  //Push changes after each batch
  if (batch % 3 === 0 || batch === totalBatches - 1) {
    try {
      execSync('git push origin main', { stdio: 'inherit' });
//       console.log(`✅ Pushed changes after batch ${batch + 1}`);
    } catch (error) {
//       console.log(
        `⚠️  Warning: Failed to push after batch ${batch + 1}:`,
        error.message
      );
    }
  }
}

//Step 5: Generate final report
// console.log('\n📊 Step 4: Generating final merge report...');
const report = {
  ...results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(
  'comprehensive-pr-merge-report.json',
  JSON.stringify(report, null, 2)
);

//Step 6: Final push
// console.log('\n🚀 Step 5: Final push...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
//   console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
//   console.log('⚠️  Warning: Failed to push final changes:', error.message);
}

// Step 7: Summary
// console.log('\n🎉 COMPREHENSIVE PR MERGE PROCESS COMPLETED!\n');
// console.log('📊 SUMMARY:');
// console.log(`  Total branches processed: ${results.summary.total}`);
// console.log(`  Successful merges: ${results.summary.successful}`);
// console.log(`  Failed merges: ${results.summary.failed}\n`);

// console.log('🔧 RESOLUTION METHODS:');
// console.log(`  Direct merges: ${results.summary.methods.direct}`);
// console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
// console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
// console.log(`  Already merged: ${results.summary.methods.already_merged}`);
// console.log(`  Not found: ${results.summary.methods.not_found}`);
// console.log(`  Failed: ${results.summary.methods.failed}\n`);

// console.log('📄 Detailed report saved to: comprehensive-pr-merge-report.json');
// console.log('🎯 Comprehensive PR merge process completed successfully!');
