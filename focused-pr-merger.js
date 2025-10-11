#!/usr/bin/env node

/**
 * Focused PR Merger - Targets specific important branches for merging
 * This script focuses on merging the most important branches while avoiding conflicts
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Define priority branches to merge
const priorityBranches = [
  'add-new-2026-content',
  'add-revolutionary-content-2026',
  'ai-2027-content-integration',
  'ai-dashboard-improvements',
  '0nylrk-codex-fix-footer-contact-link-resolved',
  '0parff-codex-centralize-api-error-handling-resolved',
  '0smfo8-codex-fix-404-error-resolved',
];

//Step 3: Get cursor branches (limit to most recent)
// let cursorBranches = [];
try {
  const branchOutput = execSync('git branch -r | grep "cursor/" | tail -20', {
    encoding: 'utf8',
  });
  cursorBranches = branchOutput
    .split('\n')
    .filter(branch => branch.trim())
    .map(branch => branch.trim().replace('origin/', ''))
    .filter(
      branch => branch.startsWith('cursor/') && !branch.includes('backup')
    );
} catch (error) {
//   }

// //Step 4: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Check if branch exists and has commits
    try {
      execSync(`git rev-parse origin/${branchName}`, { stdio: 'pipe' });
    } catch (e) {
//       return { success: false, method: 'not_found' };
    }

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Strategy 1: Auto-resolve with theirs for most conflicts
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'theirs' };
    } catch (theirsError) {
//       }

    try {
      //Strategy 2: Auto-resolve with ours
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'ours' };
    } catch (oursError) {
//       }

    try {
      //Strategy 3: Manual conflict resolution
      execSync('git reset --hard HEAD', { stdio: 'inherit' });

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
            execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
            execSync(`git add "${file}"`, { stdio: 'inherit' });
//             } catch (fileError) {
//             }
        }
      }

      //Complete the merge
      execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
        stdio: 'inherit',
      });
//       return { success: true, method: 'manual' };
    } catch (manualError) {
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
  cursor: [],
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
    },
  },
};

//Merge priority branches first
// for (const branch of priorityBranches) {
  const _result = resolveConflictsAndMerge(branch);
  results.priority.push({ branch, ...result });
  results.summary.total++;
  if (result.success) {
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.summary.failed++;
    results.summary.methods[result.method]++;
    if (result.method !== 'not_found') {
      results.failed.push(branch);
    }
  }
}

//Merge cursor branches (limit to 10 most recent)
// const recentCursorBranches = cursorBranches.slice(0, 10);
for (const branch of recentCursorBranches) {
  const _result = resolveConflictsAndMerge(branch);
  results.cursor.push({ branch, ...result });
  results.summary.total++;
  if (result.success) {
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.summary.failed++;
    results.summary.methods[result.method]++;
    if (result.method !== 'not_found') {
      results.failed.push(branch);
    }
  }
}

//Step 6: Generate comprehensive report
// results.timestamp = new Date().toISOString();
results.branchCounts = {
  priority: priorityBranches.length,
  cursor: recentCursorBranches.length,
  total: priorityBranches.length + recentCursorBranches.length,
};

fs.writeFileSync('focused-merge-report.json', JSON.stringify(results, null, 2));

//Step 7: Display summary
// // // // // // // // // // // // if (results.failed.length > 0) {
//   //   results.failed.forEach(branch => console.log(`  - ${branch}`));
}

// Step 8: Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 