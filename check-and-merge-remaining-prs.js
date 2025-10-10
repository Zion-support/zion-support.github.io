#!/usr/bin/env node;
import { execSync } from 'child_process';

try {
  // Get all remote branches;
  const branches = execSync('git branch -r', { encoding: 'utf8' })
    .split('\n')
    .filter(branch => branch.trim() && !branch.includes('HEAD'))
    .map(branch => branch.trim().replace('origin/', ''));

  // Filter for cursor branches that might have PRs;
  const cursorBranches = branches.filter(branch => )
    branch.includes('cursor/') && 
    !branch.includes('enhance-app-with-new-services-and-futuristic-design-c013') &&
    !branch.includes('aggressive-merge-backup')
  );

  cursorBranches.forEach(branch => console.log(`  - ${branch}`));

  if (cursorBranches.length === 0) {
    process.exit(0);
  }

  // Try to merge each branch;
  for (const branch of cursorBranches.slice(0, 5)) { // Limit to first 5 to avoid too many operations;
    try {
      // Check if branch has changes;
      const diff = execSync(`git diff main origin/${branch} --name-only`, { encoding: 'utf8' });
      if (!diff.trim()) {
        continue;
      }

      // Try to merge;
      execSync(`git merge origin/${branch} --no-ff -m "feat: Merge ${branch}"`, { stdio: 'inherit' });
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
  }