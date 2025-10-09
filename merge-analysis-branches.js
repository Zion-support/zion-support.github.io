#!/usr/bin/env node

/**
 * Merge Analysis and Improvement Branches
 * This script will merge all the analysis and improvement branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get analysis and improvement branches
// const analysisBranches = [
  'cursor/analyze-improve-and-deploy-application-0472',
  'cursor/analyze-improve-and-deploy-application-05dd',
  'cursor/analyze-improve-and-deploy-application-06c2',
  'cursor/analyze-improve-and-deploy-application-08d3',
  'cursor/analyze-improve-and-deploy-application-2650',
  'cursor/analyze-improve-and-deploy-application-2fdd',
  'cursor/analyze-improve-and-deploy-application-360d',
  'cursor/analyze-improve-and-deploy-application-3647',
  'cursor/analyze-improve-and-deploy-application-3cc7',
  'cursor/analyze-improve-and-deploy-application-3db4',
];

// //Step 3: Enhanced merge function with conflict resolution
function mergeAnalysisBranch(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try direct merge first
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} - Analysis and improvement"`,
      { stdio: 'inherit' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Strategy 1: Auto-resolve with theirs (prefer incoming changes for improvements)
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
      execSync(
        `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
        { stdio: 'inherit' }
      );

//       return { success: true, method: 'theirs' };
    } catch (theirsError) {
//       try {
        execSync('git reset --hard HEAD', { stdio: 'inherit' });
        execSync(
          `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
          { stdio: 'inherit' }
        );

//         return { success: true, method: 'ours' };
      } catch (oursError) {
//         //Abort and skip
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
        } catch (resetError) {
          //Continue anyway
        }

        return { success: false, method: 'failed' };
      }
    }
  }
}

//Step 4: Process all analysis branches
// const results = {
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: { direct: 0, theirs: 0, ours: 0, failed: 0 },
  },
  branches: [],
  failed: [],
  timestamp: new Date().toISOString(),
};

for (const branch of analysisBranches) {
  const _result = mergeAnalysisBranch(branch);
  results.branches.push({ branch, ...result });
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

//Step 5: Generate report
fs.writeFileSync(
  'analysis-merge-report.json',
  JSON.stringify(results, null, 2)
);

//Step 6: Display summary
// // // // // // // // // // if (results.failed.length > 0) {
//   //   results.failed.forEach(branch => );
}

// Step 7: Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 