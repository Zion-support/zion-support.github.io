#!/usr/bin/env node

/**
 * Focused PR Merger - Merges specific recent branches that are likely open PRs
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Define specific branches to merge (most recent and relevant)
const branchesToMerge = [
  //Recent error fixing branches
  'cursor/build-and-fix-errors-008f',
  'cursor/build-and-fix-errors-079c',
  'cursor/build-and-fix-errors-0ebf',
  'cursor/build-and-fix-errors-0ec8',
  'cursor/build-and-fix-errors-0f78',
  //Enhancement branches
  'cursor/automate-futuristic-front-page-enhancements-738d',
  'cursor/automate-futuristic-front-page-enhancements-aafa',
  'cursor/automate-project-enhancement-and-merge-cac0',
  'cursor/automate-site-navigation-enhancement-285c',
  //Build improvement branches
  'cursor/automate-automation-redundancy-and-build-improvement-e3e4',
  'cursor/automate-automation-redundancy-and-build-improvement-ea74',
  'cursor/automate-netlify-build-fixes-and-monitoring-43ee',
  'cursor/automate-netlify-build-fixing-and-monitoring-f10e',
  //AI-powered features
  'cursor/build-ai-powered-project-teams-dcf8',
  'cursor/build-ai-powered-smart-contract-generator-b22e',
  'cursor/build-ai-pricing-suggestion-engine-ea4e',
  'cursor/build-ai-resume-and-portfolio-builder-workflow-2029',
];

// //Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
//   try {
    //Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    //Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
//       return { success: true, method: 'already_merged' };
    }

    //Try direct merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );
//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Check for merge conflicts
      const _status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
//         //Strategy 1: Auto-resolve with theirs
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

//Step 4: Execute merge process
// const results = {
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

//Process each branch
for (const branch of branchesToMerge) {
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

//Step 5: Generate report
// // // // // // // // // // // if (results.failed.length > 0) {
//   //   results.failed.forEach(result => // console.log(`  - ${result.branch}`));
}

//Save report
results.timestamp = new Date().toISOString();
fs.writeFileSync(
  'focused-pr-merge-report.json',
  JSON.stringify(results, null, 2)
);

// Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   //   }

// // 