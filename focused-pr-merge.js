#!/usr/bin/env node

/**
 * Focused PR Merger - Merges specific recent branches that are likely open PRs
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting Focused PR Merge Process...\n');

// Step 1: Ensure we're on main and up to date
console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  console.log('✅ Main branch is up to date\n');
} catch (error) {
  console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

// Step 2: Define specific branches to merge (most recent and relevant)
const branchesToMerge = [
  // Recent error fixing branches
  'cursor/build-and-fix-errors-008f',
  'cursor/build-and-fix-errors-079c',
  'cursor/build-and-fix-errors-0ebf',
  'cursor/build-and-fix-errors-0ec8',
  'cursor/build-and-fix-errors-0f78',
  // Enhancement branches
  'cursor/automate-futuristic-front-page-enhancements-738d',
  'cursor/automate-futuristic-front-page-enhancements-aafa',
  'cursor/automate-project-enhancement-and-merge-cac0',
  'cursor/automate-site-navigation-enhancement-285c',
  // Build improvement branches
  'cursor/automate-automation-redundancy-and-build-improvement-e3e4',
  'cursor/automate-automation-redundancy-and-build-improvement-ea74',
  'cursor/automate-netlify-build-fixes-and-monitoring-43ee',
  'cursor/automate-netlify-build-fixing-and-monitoring-f10e',
  // AI-powered features
  'cursor/build-ai-powered-project-teams-dcf8',
  'cursor/build-ai-powered-smart-contract-generator-b22e',
  'cursor/build-ai-pricing-suggestion-engine-ea4e',
  'cursor/build-ai-resume-and-portfolio-builder-workflow-2029',
];

console.log(`📊 Found ${branchesToMerge.length} branches to process\n`);

// Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
  console.log(`\n🔄 Processing ${branchName}...`);

  try {
    // Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    // Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
      console.log(`✅ Branch ${branchName} is already merged, skipping...`);
      return { success: true, method: 'already_merged' };
    }

    // Try direct merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );
    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  } catch (error) {
    console.log(
      `⚠️  Direct merge failed for ${branchName}, attempting conflict resolution...`
    );

    try {
      // Check for merge conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
        console.log(`🔧 Resolving conflicts for ${branchName}...`);

        // Strategy 1: Auto-resolve with theirs
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );
          console.log(
            `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
          );
          return { success: true, method: 'theirs' };
        } catch (theirsError) {
          console.log(
            `⚠️  'Theirs' strategy failed, trying 'ours' strategy...`
          );
        }

        // Strategy 2: Auto-resolve with ours
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );
          console.log(
            `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
          );
          return { success: true, method: 'ours' };
        } catch (oursError) {
          console.log(
            `⚠️  'Ours' strategy failed, trying manual resolution...`
          );
        }

        // Strategy 3: Manual conflict resolution
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });

          // Get conflicted files
          const conflictedFiles = execSync(
            'git diff --name-only --diff-filter=U',
            { encoding: 'utf8' }
          )
            .split('\n')
            .filter(file => file.trim());

          console.log(
            `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
          );

          // For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                // Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });
                console.log(`  ✅ Resolved conflict in ${file}`);
              } catch (fileError) {
                console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
              }
            }
          }

          // Complete the merge
          execSync(
            `git commit -m "Manual conflict resolution for ${branchName}"`,
            { stdio: 'inherit' }
          );
          console.log(`✅ Manually resolved conflicts for ${branchName}`);
          return { success: true, method: 'manual' };
        } catch (manualError) {
          console.log(`❌ Manual resolution failed for ${branchName}`);
        }
      }
    } catch (statusError) {
      console.log(`❌ Could not check merge status for ${branchName}`);
    }

    // If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
      console.log(`⏭️  Skipping ${branchName} due to unresolvable conflicts`);
    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

// Step 4: Execute merge process
console.log('🚀 Step 3: Executing merge strategy...\n');

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
      manual: 0,
      already_merged: 0,
      failed: 0,
    },
  },
};

// Process each branch
for (const branch of branchesToMerge) {
  const result = resolveConflictsAndMerge(branch);
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

// Step 5: Generate report
console.log('\n📊 MERGE RESULTS:');
console.log(`  Total branches processed: ${results.summary.total}`);
console.log(`  Successful merges: ${results.summary.successful}`);
console.log(`  Failed merges: ${results.summary.failed}`);
console.log('\n🔧 RESOLUTION METHODS:');
console.log(`  Direct merges: ${results.summary.methods.direct}`);
console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
console.log(`  Manual resolution: ${results.summary.methods.manual}`);
console.log(`  Already merged: ${results.summary.methods.already_merged}`);
console.log(`  Failed: ${results.summary.methods.failed}`);

if (results.failed.length > 0) {
  console.log('\n❌ FAILED BRANCHES:');
  results.failed.forEach(result => console.log(`  - ${result.branch}`));
}

// Save report
results.timestamp = new Date().toISOString();
fs.writeFileSync(
  'focused-pr-merge-report.json',
  JSON.stringify(results, null, 2)
);

// Push changes
console.log('\n🚀 Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  console.error('❌ Failed to push changes:', error.message);
  console.log('You may need to push manually: git push origin main');
}

console.log('\n📄 Detailed report saved to: focused-pr-merge-report.json');
console.log('🎯 Focused PR merge process completed!');
