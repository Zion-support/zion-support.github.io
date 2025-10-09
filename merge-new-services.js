#!/usr/bin/env node

/**
 * Merge New Services Branches
 * This script will merge all the new service branches that haven't been merged yet
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get new service branches
// const newServiceBranches = [
  'cursor/add-new-services-and-deploy-updates-0c4f',
  'cursor/add-new-services-and-deploy-updates-0f78',
  'cursor/add-new-services-and-deploy-updates-1399',
  'cursor/add-new-services-and-deploy-updates-1503',
  'cursor/add-new-services-and-deploy-updates-1817',
  'cursor/add-new-services-and-deploy-updates-19c7',
  'cursor/add-new-services-and-deploy-updates-27d2',
  'cursor/add-new-services-and-deploy-updates-45bb',
  'cursor/add-new-services-and-deploy-updates-483a',
  'cursor/add-new-services-and-deploy-updates-4d5b',
  'cursor/add-new-services-and-deploy-updates-5200',
  'cursor/add-new-services-and-deploy-updates-54f2',
  'cursor/add-new-services-and-deploy-updates-591d',
  'cursor/add-new-services-and-deploy-updates-6225',
  'cursor/add-new-services-and-deploy-updates-6455',
  'cursor/add-new-services-and-deploy-updates-67cb',
  'cursor/add-new-services-and-deploy-updates-6de5',
  'cursor/add-new-services-and-deploy-updates-6e7c',
  'cursor/add-new-services-and-deploy-updates-6e90',
  'cursor/add-new-services-and-deploy-updates-6ed4',
];

// //Step 3: Enhanced merge function with conflict resolution
function mergeServiceBranch(branchName) {
//   try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try direct merge first
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} - Add new services and deploy updates"`,
      { stdio: 'inherit' }
    );

//     return { success: true, method: 'direct' };
  } catch (error) {
//     try {
      //Strategy 1: Auto-resolve with theirs (prefer incoming changes for new services)
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

//Step 4: Process all new service branches
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

for (const branch of newServiceBranches) {
  const _result = mergeServiceBranch(branch);
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
  'new-services-merge-report.json',
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