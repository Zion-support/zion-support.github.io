#!/usr/bin/env node

/**
 * Comprehensive PR Merger - Resolves conflicts and merges all open PRs
 * This script will systematically find, resolve conflicts, and merge all open PRs
 */ import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 Starting Comprehensive PR Merge Process...\n');

//Step 1: Ensure we're on main and up to date
// console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git reset --hard HEAD', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  // console.log('✅ Main branch is up to date\n');
} catch (error) {
  // console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

//Step 2: Get all remote branches that could be PRs
// console.log('🔍 Step 2: Finding all potential PR branches...');
const branches = execSync('git branch -r', { encoding: 'utf8' })
  .split('\n')
  .filter(branch => branch.trim())
  .map(branch => branch.trim().replace('origin/', ''))
  .filter(branch => branch.startsWith('cursor/') && branch !== 'HEAD');

// console.log(`📊 Found ${branches.length} cursor branches to process\n`);

//Step 3: Create merge strategy with conflict resolution
const mergeStrategy = {
  //Branches that should be merged first (foundational)
  priority: branches.filter(
    branch =>
      branch.includes('build-fixes') ||
      branch.includes('error-fixing') ||
      branch.includes('merge-to-main')
  ),

  //Feature branches
  features: branches.filter(
    branch =>
      branch.includes('build-') ||
      branch.includes('enhance-') ||
      branch.includes('add-new-services')
  ),

  //Content branches
  content: branches.filter(
    branch =>
      branch.includes('content-') ||
      branch.includes('blog-') ||
      branch.includes('update-')
  ),

  //Skip problematic branches
  skip: branches.filter(
    branch =>
      branch.includes('disabled') ||
      branch.includes('backup') ||
      branch.includes('old')
  ),
};

// console.log('📋 Merge Strategy:');
// console.log(`  Priority branches: ${mergeStrategy.priority.length}`);
// console.log(`  Feature branches: ${mergeStrategy.features.length}`);
// console.log(`  Content branches: ${mergeStrategy.content.length}`);
// console.log(`  Branches to skip: ${mergeStrategy.skip.length}\n`);

//Step 4: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
  // console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

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

    //Check for merge conflicts
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
        // console.log(`🔧 Resolving conflicts for ${branchName}...`);

        //Strategy 1: Auto-resolve with theirs for most conflicts
        try {
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
          // console.log(
            `⚠️  'Theirs' strategy failed, trying 'ours' strategy...`
          );
        }

        //Strategy 2: Auto-resolve with ours
        try {
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
          // console.log(
            `⚠️  'Ours' strategy failed, trying manual resolution...`
          );
        }

        //Strategy 3: Manual conflict resolution
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });

          //Get conflicted files
          const conflictedFiles = execSync(
            'git diff --name-only --diff-filter=U',
            { encoding: 'utf8' }
          )
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
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });
                // console.log(`  ✅ Resolved conflict in ${file}`);
              } catch (fileError) {
                // console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
              }
            }
          }

          //Complete the merge
          execSync(
            `git commit -m "Manual conflict resolution for ${branchName}"`,
            { stdio: 'inherit' }
          );
          // console.log(`✅ Manually resolved conflicts for ${branchName}`);
          return { success: true, method: 'manual' };
        } catch (manualError) {
          // console.log(`❌ Manual resolution failed for ${branchName}`);
        }
      }
    } catch (statusError) {
      // console.log(`❌ Could not check merge status for ${branchName}`);
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

//Step 5: Execute merge strategy
// console.log('🚀 Step 5: Executing merge strategy...\n');

const results = {
  priority: [],
  features: [],
  content: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: { direct: 0, theirs: 0, ours: 0, manual: 0, failed: 0 },
  },
};

//Merge priority branches first
// console.log('🎯 Merging priority branches...');
for (const branch of mergeStrategy.priority) {
  const result = resolveConflictsAndMerge(branch);
  results.priority.push({ branch, ...result });
  results.summary.total++;
  if (result.success) {
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.summary.failed++;
    results.summary.methods.failed++;
    results.failed.push(branch);
  }
}

//Merge feature branches
// console.log('\n🚀 Merging feature branches...');
for (const branch of mergeStrategy.features) {
  if (!mergeStrategy.skip.includes(branch)) {
    const result = resolveConflictsAndMerge(branch);
    results.features.push({ branch, ...result });
    results.summary.total++;
    if (result.success) {
      results.summary.successful++;
      results.summary.methods[result.method]++;
    } else {
      results.summary.failed++;
      results.summary.methods.failed++;
      results.failed.push(branch);
    }
  }
}

//Merge content branches
// console.log('\n📝 Merging content branches...');
for (const branch of mergeStrategy.content) {
  if (!mergeStrategy.skip.includes(branch)) {
    const result = resolveConflictsAndMerge(branch);
    results.content.push({ branch, ...result });
    results.summary.total++;
    if (result.success) {
      results.summary.successful++;
      results.summary.methods[result.method]++;
    } else {
      results.summary.failed++;
      results.summary.methods.failed++;
      results.failed.push(branch);
    }
  }
}

//Step 6: Generate comprehensive report
// console.log('\n📊 Step 6: Generating merge report...');
results.timestamp = new Date().toISOString();
results.branchCounts = {
  priority: mergeStrategy.priority.length,
  features: mergeStrategy.features.length,
  content: mergeStrategy.content.length,
  skipped: mergeStrategy.skip.length,
};

fs.writeFileSync(
  'comprehensive-merge-report.json',
  JSON.stringify(results, null, 2)
);

//Step 7: Display summary
// console.log('\n🎉 MERGE PROCESS COMPLETED!\n');
// console.log('📊 SUMMARY:');
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
  // console.log('\n❌ FAILED BRANCHES:');
  results.failed.forEach(branch => // console.log(`  - ${branch}`));
}

// Step 8: Push changes
// console.log('\n🚀 Step 8: Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  // console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  // console.error('❌ Failed to push changes:', error.message);
  // console.log('You may need to push manually: git push origin main');
}

// console.log('\n📄 Detailed report saved to: comprehensive-merge-report.json');
// console.log('🎯 Merge process completed successfully!');
