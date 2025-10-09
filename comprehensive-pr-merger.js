#!/usr/bin/env node

/**
 * Comprehensive PR Merger - Resolves conflicts and merges all open PRs
 * This script will systematically find, resolve conflicts, and merge all open PRs
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git reset --hard HEAD', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get all remote branches that could be PRs
// const branches = execSync('git branch -r', { encoding: 'utf8' })
  .split('\n')
  .filter(branch => branch.trim())
  .map(branch => branch.trim().replace('origin/', ''))
  .filter(branch => branch.startsWith('cursor/') && branch !== 'HEAD');

// //Step 3: Create merge strategy with conflict resolution
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

// // // // // //Step 4: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     //Check for merge conflicts
    try {
      const _status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
//         //Strategy 1: Auto-resolve with theirs for most conflicts
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'theirs' };
        } catch (theirsError) {
//           }

        //Strategy 2: Auto-resolve with ours
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'ours' };
        } catch (oursError) {
//           }

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

//           //For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                //Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });
//                 } catch (fileError) {
//                 }
            }
          }

          //Complete the merge
          execSync(
            `git commit -m "Manual conflict resolution for ${branchName}"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'manual' };
        } catch (manualError) {
//           }
      }
    } catch (statusError) {
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

//Step 5: Execute merge strategy
// const results = {
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
// for (const branch of mergeStrategy.priority) {
  const _result = resolveConflictsAndMerge(branch);
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
// for (const branch of mergeStrategy.features) {
  if (!mergeStrategy.skip.includes(branch)) {
    const _result = resolveConflictsAndMerge(branch);
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
// for (const branch of mergeStrategy.content) {
  if (!mergeStrategy.skip.includes(branch)) {
    const _result = resolveConflictsAndMerge(branch);
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
// results.timestamp = new Date().toISOString();
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
// // // // // // // // // // // if (results.failed.length > 0) {
//   //   results.failed.forEach(branch => // console.log(`  - ${branch}`));
}

// Step 8: Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 