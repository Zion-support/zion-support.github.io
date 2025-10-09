#!/usr/bin/env node

/**
 * Comprehensive Final Merge - Handles all remaining branches systematically
 * This script processes all remaining branches in batches to avoid conflicts
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get all remaining branches
// let allBranches = [];
try {
  const branchOutput = execSync(
    'git branch -r | grep -v backup | grep -E "(cursor|codex|pr|feature|bugfix)"',
    { encoding: 'utf8' }
  );
  allBranches = branchOutput
    .split('\n')
    .filter(branch => branch.trim())
    .map(branch => branch.trim().replace('origin/', ''))
    .filter(
      branch => branch && !branch.includes('backup') && !branch.includes('main')
    );
} catch (error) {
//   }

// //Step 3: Process branches in batches to avoid conflicts
// const BATCH_SIZE = 50;
const _batches = [];
for (let i = 0; i < allBranches.length; i += BATCH_SIZE) {
  batches.push(allBranches.slice(i, i + BATCH_SIZE));
}

// //Step 4: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

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
      { stdio: 'pipe' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Strategy 1: Auto-resolve with theirs for most conflicts
      execSync('git reset --hard HEAD', { stdio: 'pipe' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'pipe' }
      );
//       return { success: true, method: 'theirs' };
    } catch (theirsError) {
//       }

    try {
      //Strategy 2: Auto-resolve with ours
      execSync('git reset --hard HEAD', { stdio: 'pipe' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'pipe' }
      );
//       return { success: true, method: 'ours' };
    } catch (oursError) {
//       }

    try {
      //Strategy 3: Manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'pipe' });

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
            execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
            execSync(`git add "${file}"`, { stdio: 'pipe' });
//             } catch (fileError) {
//             }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'pipe',
      });
//       return { success: true, method: 'manual' };
    } catch (manualError) {
//       }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'pipe' });
//       } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'pipe' });
    }

    return { success: false, method: 'failed' };
  }
}

//Step 5: Process each batch
const results = {
  batches: [],
  total: {
    branches: 0,
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

for (let i = 0; i < batches.length; i++) {
  const _batch = batches[i];
//   // console.log(
    `\n📦 Processing Batch ${i + 1}/${batches.length} (${batch.length} branches)...`
  );

  const batchResults = {
    batchNumber: i + 1,
    branches: [],
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
  };

  for (const branch of batch) {
    const _result = resolveConflictsAndMerge(branch);
    batchResults.branches.push({ branch, ...result });
    batchResults.totalBranches = batch.length;

    if (result.success) {
      batchResults.successful++;
      batchResults.methods[result.method]++;
      results.total.successful++;
      results.total.methods[result.method]++;
    } else {
      batchResults.failed++;
      batchResults.methods[result.method]++;
      results.total.failed++;
      results.total.methods[result.method]++;
    }

    results.total.branches++;
  }

  results.batches.push(batchResults);

  //Push changes after each batch to avoid conflicts
  if (i % 5 === 0 || i === batches.length - 1) {
//     try {
      execSync('git push origin main', { stdio: 'pipe' });
//       } catch (error) {
//       }
  }

//   }

//Step 6: Generate comprehensive report
// results.timestamp = new Date().toISOString();
results.summary = {
  totalBatches: batches.length,
  totalBranches: results.total.branches,
  successfulMerges: results.total.successful,
  failedMerges: results.total.failed,
  successRate:
    ((results.total.successful / results.total.branches) * 100).toFixed(2) +
    '%',
};

fs.writeFileSync(
  'comprehensive-final-merge-report.json',
  JSON.stringify(results, null, 2)
);

//Step 7: Display final summary
// // // // // // // // // // // // // // // // Step 8: Final push
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 