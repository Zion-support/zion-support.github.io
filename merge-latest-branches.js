#!/usr/bin/env node;
import { execSync } from 'child_process';

try {
  // List of recent branches to check and potentially merge;
  const branchesToCheck = [
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fcae',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd25',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd44',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd72',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd86',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fe75',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-feb1',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-feb6',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fee1',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-ff2 c'
  ];

  let mergedCount = 0;
  let skippedCount = 0;

  for (const branch of branchesToCheck) {
    try {

      // Check if branch has unique commits;
      const uniqueCommits = execSync(`git log --oneline main..${branch}`, { encoding: 'utf8' });
      
      if (!uniqueCommits.trim()) {

        skippedCount++;
        continue;
      }

      console.log(uniqueCommits.split('\n').slice(0, 3).join('\n'));

      // Try to merge the branch;

      execSync(`git merge ${branch} --no-ff -m "feat: Merge enhancements from ${branch}"`, { stdio: 'inherit' });

      mergedCount++;

    } catch (error) {

      // Try to abort the merge if it failed;
      try {
        execSync('git merge --abort', { stdio: 'pipe' });
      } catch (abortError) {
        // Ignore abort errors;
      }
    }
  }



  // Push all changes;

  execSync('git push origin main', { stdio: 'inherit' });

} catch (error) {

  process.exit(1);
}