#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

//PR information from the JSON files
const prs = [
  {
    number: 11935,
    title: 'Fix web application console errors',
    branch: 'cursor/fix-web-application-console-errors-0bf5',
    sha: 'd4e66d09ceb2c6c48f1f522df7030a5261c4c661',
  },
  {
    number: 25063,
    title: 'Build and deploy with vite and netlify',
    branch: 'cursor/build-and-deploy-with-vite-and-netlify-8b37',
    sha: 'd2deed6f7d4ef805058d58bdadeb11ca5a746580',
  },
  {
    number: 25062,
    title: 'Fix errors and merge to main',
    branch: 'cursor/fix-errors-and-merge-to-main-fcbd',
    sha: 'a5f35d4a9ddcf46941c797da316bb3a2b7b05b56',
  },
  {
    number: 25061,
    title: 'Fix errors and merge to main',
    branch: 'cursor/fix-errors-and-merge-to-main-e6e1',
    sha: '29f97d68b44ddf467a8bada29cb68cb2100d59db',
  },
];

// //Ensure we're on main branch
try {
  execSync('git checkout main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Pull latest changes
try {
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Process each PR
for (const pr of prs) {
//   try {
    //Check if branch exists
    try {
      execSync(
        `git show-ref --verify --quiet refs/remotes/origin/${pr.branch}`,
        { stdio: 'pipe' }
      );
//       } catch (error) {
//       continue;
    }

    //Try to merge the branch
    try {
      execSync(
        `git merge origin/${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`,
        { stdio: 'inherit' }
      );
//       } catch (error) {
//       //Try to resolve conflicts automatically
      try {
        execSync('git status --porcelain', { stdio: 'pipe' });
//         //If there are conflicts, try to resolve them
        const _status = execSync('git status --porcelain', { encoding: 'utf8' });
        if (status.includes('UU') || status.includes('AA')) {
//           //Reset the merge
          execSync('git merge --abort', { stdio: 'inherit' });
//           }
      } catch (resolveError) {
//         }
    }
  } catch (error) {
//     }
}

// Push changes
try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   }

// 