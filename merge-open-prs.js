#!/usr/bin/env node

/**
 * Merge Open PRs - Focused script to merge the specific open PRs
 */ import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 Starting Open PR Merge Process...\n');

//The specific PR branches we identified
const openPRBranches = [
  'cursor/fix-web-application-console-errors-0bf5', //PR #11935
  'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4', //PR #24703
  'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7', //PR #24702
  'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e', //PR #24701
];

// console.log(`📋 Found ${openPRBranches.length} open PR branches to merge\n`);

//Function to merge a single branch
function mergeBranch(branchName) {
//   console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

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
      //Check for merge conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
//         console.log(`🔧 Resolving conflicts for ${branchName}...`);

        //Try auto-resolve with theirs strategy
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );
//           console.log(
            `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
          );
          return { success: true, method: 'theirs' };
        } catch (theirsError) {
//           console.log(
            `⚠️  'Theirs' strategy failed, trying 'ours' strategy...`
          );
        }

        //Try auto-resolve with ours strategy
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );
//           console.log(
            `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
          );
          return { success: true, method: 'ours' };
        } catch (oursError) {
//           console.log(
            `⚠️  'Ours' strategy failed, trying manual resolution...`
          );
        }

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

//           console.log(
            `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
          );

          //For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                //Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });
//                 console.log(`  ✅ Resolved conflict in ${file}`);
              } catch (fileError) {
//                 console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
              }
            }
          }

          //Complete the merge
          execSync(
            `git commit -m "Manual conflict resolution for ${branchName}"`,
            { stdio: 'inherit' }
          );
//           console.log(`✅ Manually resolved conflicts for ${branchName}`);
          return { success: true, method: 'manual' };
        } catch (manualError) {
//           console.log(`❌ Manual resolution failed for ${branchName}`);
        }
      }
    } catch (statusError) {
//       console.log(`❌ Could not check merge status for ${branchName}`);
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
for (const branch of openPRBranches) {
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

//Save report
results.timestamp = new Date().toISOString();
fs.writeFileSync(
  'open-prs-merge-report.json',
  JSON.stringify(results, null, 2)
);

// Push changes
// console.log('\n🚀 Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
//   console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
//   console.error('❌ Failed to push changes:', error.message);
//   console.log('You may need to push manually: git push origin main');
}

// console.log('\n📄 Detailed report saved to: open-prs-merge-report.json');
// console.log('🎯 Open PR merge process completed!');
