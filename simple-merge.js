#!/usr/bin/env node

/**
 * Simple Merge - Handles new branches with conflict resolution
 */ import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 Starting Simple Merge Process...\n');

//List of new branches to merge (from the fetch output)
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

// console.log(`📊 Found ${newBranches.length} new branches to process\n`);

//Function to merge a single branch
function mergeBranch(branchName) {
//   console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Try direct merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );
//     console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  } catch (error) {
//     console.log(
      `⚠️  Direct merge failed for ${branchName}, attempting conflict resolution...`
    );

    try {
      //Try auto-resolve with theirs strategy
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );
//       console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
      );
      return { success: true, method: 'theirs' };
    } catch (theirsError) {
//       console.log(`⚠️  'Theirs' strategy failed, trying 'ours' strategy...`);
    }

    try {
      //Try auto-resolve with ours strategy
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'inherit' }
      );
//       console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
      );
      return { success: true, method: 'ours' };
    } catch (oursError) {
//       console.log(`⚠️  'Ours' strategy failed, trying manual resolution...`);
    }

    try {
      //Try manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'inherit' });

      //Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
      })
        .split('\n')
        .filter(file => file.trim());

//       console.log(
        `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
      );

      //For each conflicted file, try to resolve
      for (const file of conflictedFiles) {
        if (file.trim()) {
          try {
            execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
            execSync(`git add "${file}"`, { stdio: 'inherit' });
//             console.log(`  ✅ Resolved conflict in ${file}`);
          } catch (fileError) {
//             console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
          }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'inherit',
      });
//       console.log(`✅ Manually resolved conflicts for ${branchName}`);
      return { success: true, method: 'manual' };
    } catch (manualError) {
//       console.log(`❌ Manual resolution failed for ${branchName}`);
    }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
//       console.log(`⏭️  Skipping ${branchName} due to unresolvable conflicts`);
    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Execute merge process
// console.log('🚀 Starting merge process...\n');

const results = {
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
  const result = mergeBranch(branch);
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
// console.log('\n📊 MERGE RESULTS:');
// console.log(`  Total branches processed: ${results.summary.total}`);
// console.log(`  Successful merges: ${results.summary.successful}`);
// console.log(`  Failed merges: ${results.summary.failed}`);
// console.log('\n🔧 RESOLUTION METHODS:');
// console.log(`  Direct merges: ${results.summary.methods.direct}`);
// console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
// console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
// console.log(`  Manual resolution: ${results.summary.methods.manual}`);
// console.log(`  Failed: ${results.summary.methods.failed}`);

if (results.failed.length > 0) {
//   console.log('\n❌ FAILED BRANCHES:');
//   results.failed.forEach(result => console.log(`  - ${result.branch}`));
}

// Save report
results.timestamp = new Date().toISOString();
fs.writeFileSync('simple-merge-report.json', JSON.stringify(results, null, 2));

// console.log('\n📄 Detailed report saved to: simple-merge-report.json');
// console.log('🎯 Simple merge process completed!');
