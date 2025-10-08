#!/usr/bin/env node

/**
 * Latest Comprehensive Merge - Handles all new branches and PRs
 * This script will systematically merge all new branches found
 */ import { execSync } from 'child_process';
import fs from 'fs';

//Step 1: Ensure we're on main and up to date

try {
  execSync('git checkout main', { stdio: 'inherit' });

} catch (error) {

  process.exit(1);
}

//Step 2: Get all new branches that need merging

const branches = execSync('git branch -r', { encoding: 'utf8' })
  .split('\n')
  .filter(branch => branch.trim())
  .map(branch => branch.trim().replace('origin/', ''))
  .filter(branch => branch.startsWith('cursor/fix-errors-and-merge-to-main-') && branch !== 'HEAD')
  .filter(branch => !branch.includes('disabled') && !branch.includes('backup'));

//Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try initial merge
    execSync(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`, {
      stdio: 'inherit',
    });

    return { success: true, method: 'direct' };
  } catch (error) {

    try {
      //Check for merge conflicts
      const _status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {

        //Strategy 1: Auto-resolve with theirs for most conflicts
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );

          return { success: true, method: 'theirs' };
        } catch (theirsError) {

        }

        //Strategy 2: Auto-resolve with ours
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );

          return { success: true, method: 'ours' };
        } catch (oursError) {

        }

        //Strategy 3: Manual conflict resolution
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });

          //Get conflicted files
          const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
            encoding: 'utf8',
          })
            .split('\n')
            .filter(file => file.trim());

          //For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                //Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });

              } catch (fileError) {

              }
            }
          }

          //Complete the merge
          execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
            stdio: 'inherit',
          });

          return { success: true, method: 'manual' };
        } catch (manualError) {

        }
      }
    } catch (statusError) {

    }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });

    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Step 4: Execute merge process

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

//Process branches in batches to avoid overwhelming the system
// const batchSize = 5;
const _batches = [];
for (let i = 0; i < branches.length; i += batchSize) {
  batches.push(branches.slice(i, i + batchSize));
}

for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
  const _batch = batches[batchIndex];
  console.log(
    `\n🔄 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} branches)...`
  );

  for (const branch of batch) {
    const _result = resolveConflictsAndMerge(branch);
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

  //Small delay between batches
  if (batchIndex < batches.length - 1) {

    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

//Step 5: Generate comprehensive report

results.timestamp = new Date().toISOString();
results.branchCounts = {
  total: branches.length,
  processed: results.summary.total,
  successful: results.summary.successful,
  failed: results.summary.failed,
};

fs.writeFileSync('latest-comprehensive-merge-report.json', JSON.stringify(results, null, 2));

//Step 6: Display summary











if (results.failed.length > 0) {

  results.failed.forEach(result => console.log(`  - ${result.branch}`));
}

// Step 7: Push changes

try {
  execSync('git push origin main', { stdio: 'inherit' });

} catch (error) {


}

