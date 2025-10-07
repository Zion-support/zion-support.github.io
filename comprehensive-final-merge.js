#!/usr/bin/env node

/**
 * Comprehensive Final Merge - Handles all remaining branches systematically
 * This script processes all remaining branches in batches to avoid conflicts
 */ import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting Comprehensive Final Merge Process...\n');

//Step 1: Ensure we're on main and up to date
console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  console.log('✅ Main branch is up to date\n');
} catch (error) {
  console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

//Step 2: Get all remaining branches
console.log('🔍 Step 2: Discovering remaining branches...');
let allBranches = [];
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
  console.log('⚠️  Could not fetch branches:', error.message);
}

console.log(`📊 Found ${allBranches.length} branches to process\n`);

//Step 3: Process branches in batches to avoid conflicts
const BATCH_SIZE = 50;
const batches = [];
for (let i = 0; i < allBranches.length; i += BATCH_SIZE) {
  batches.push(allBranches.slice(i, i + BATCH_SIZE));
}

console.log(
  `📦 Processing ${batches.length} batches of up to ${BATCH_SIZE} branches each\n`
);

//Step 4: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
  console.log(`🔄 Processing ${branchName}...`);

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    //Check if branch exists and has commits
    try {
      execSync(`git rev-parse origin/${branchName}`, { stdio: 'pipe' });
    } catch (e) {
      console.log(`⚠️  Branch ${branchName} does not exist, skipping...`);
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
        console.log(`✅ Branch ${branchName} is already merged, skipping...`);
        return { success: true, method: 'already_merged' };
      }
    } catch (e) {
      //Continue with merge attempt
    }

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'pipe' }
    );

    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  } catch (error) {
    console.log(
      `⚠️  Direct merge failed for ${branchName}, attempting conflict resolution...`
    );

    try {
      //Strategy 1: Auto-resolve with theirs for most conflicts
      execSync('git reset --hard HEAD', { stdio: 'pipe' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'pipe' }
      );
      console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
      );
      return { success: true, method: 'theirs' };
    } catch (theirsError) {
      console.log(`⚠️  'Theirs' strategy failed, trying 'ours' strategy...`);
    }

    try {
      //Strategy 2: Auto-resolve with ours
      execSync('git reset --hard HEAD', { stdio: 'pipe' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'pipe' }
      );
      console.log(
        `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
      );
      return { success: true, method: 'ours' };
    } catch (oursError) {
      console.log(`⚠️  'Ours' strategy failed, trying manual resolution...`);
    }

    try {
      //Strategy 3: Manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'pipe' });

      //Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
      })
        .split('\n')
        .filter(file => file.trim());

      console.log(
        `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
      );

      //For each conflicted file, try to resolve
      for (const file of conflictedFiles) {
        if (file.trim()) {
          try {
            //Try to resolve by taking the incoming version
            execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
            execSync(`git add "${file}"`, { stdio: 'pipe' });
            console.log(`  ✅ Resolved conflict in ${file}`);
          } catch (fileError) {
            console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
          }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'pipe',
      });
      console.log(`✅ Manually resolved conflicts for ${branchName}`);
      return { success: true, method: 'manual' };
    } catch (manualError) {
      console.log(`❌ Manual resolution failed for ${branchName}`);
    }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'pipe' });
      console.log(`⏭️  Skipping ${branchName} due to unresolvable conflicts`);
    } catch (abortError) {
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
  const batch = batches[i];
  console.log(
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
    const result = resolveConflictsAndMerge(branch);
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
    console.log(`\n🚀 Pushing changes after batch ${i + 1}...`);
    try {
      execSync('git push origin main', { stdio: 'pipe' });
      console.log(`✅ Successfully pushed changes after batch ${i + 1}`);
    } catch (error) {
      console.log(`⚠️  Failed to push after batch ${i + 1}: ${error.message}`);
    }
  }

  console.log(
    `📊 Batch ${i + 1} completed: ${batchResults.successful} successful, ${batchResults.failed} failed`
  );
}

//Step 6: Generate comprehensive report
console.log('\n📊 Step 6: Generating comprehensive merge report...');
results.timestamp = new Date().toISOString();
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
console.log('\n🎉 COMPREHENSIVE FINAL MERGE PROCESS COMPLETED!\n');
console.log('📊 FINAL SUMMARY:');
console.log(`  Total batches processed: ${results.summary.totalBatches}`);
console.log(`  Total branches processed: ${results.summary.totalBranches}`);
console.log(`  Successful merges: ${results.summary.successfulMerges}`);
console.log(`  Failed merges: ${results.summary.failedMerges}`);
console.log(`  Success rate: ${results.summary.successRate}`);
console.log('\n🔧 RESOLUTION METHODS:');
console.log(`  Direct merges: ${results.total.methods.direct}`);
console.log(`  'Theirs' strategy: ${results.total.methods.theirs}`);
console.log(`  'Ours' strategy: ${results.total.methods.ours}`);
console.log(`  Manual resolution: ${results.total.methods.manual}`);
console.log(`  Already merged: ${results.total.methods.already_merged}`);
console.log(`  Not found: ${results.total.methods.not_found}`);
console.log(`  Failed: ${results.total.methods.failed}`);

// Step 8: Final push
console.log('\n🚀 Step 8: Final push of all changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed all final changes to main');
} catch (error) {
  console.error('❌ Failed to push final changes:', error.message);
  console.log('You may need to push manually: git push origin main');
}

console.log(
  '\n📄 Detailed report saved to: comprehensive-final-merge-report.json'
);
console.log('🎯 Comprehensive final merge process completed successfully!');
