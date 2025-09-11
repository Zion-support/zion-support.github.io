#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Starting quick PR merge process...');

try {
  // Ensure we're on main and up to date
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  
  // Create backup
  const backup = `backup-${Date.now()}`;
  execSync(`git checkout -b ${backup}`, { stdio: 'inherit' });
  execSync(`git push origin ${backup}`, { stdio: 'inherit' });
  execSync('git checkout main', { stdio: 'inherit' });
  
  // Get open PRs
  console.log('Fetching open PRs...');
  const prs = execSync('curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open"', { encoding: 'utf8' });
  const prData = JSON.parse(prs);
  const prNumbers = prData.map(pr => pr.number);
  
  console.log(`Found PRs: ${prNumbers.join(', ')}`);
  
  // Merge each PR
  for (const pr of prNumbers) {
    console.log(`Processing PR #${pr}`);
    
    try {
      // Fetch PR head
      execSync(`git fetch origin "pull/${pr}/head:pr-${pr}"`, { stdio: 'inherit' });
      
      // Try to merge
      try {
        execSync(`git merge --no-ff "pr-${pr}" -m "Merge PR #${pr}"`, { stdio: 'inherit' });
        console.log(`Successfully merged PR #${pr}`);
      } catch (mergeError) {
        console.log(`Conflict in PR #${pr}, using theirs strategy`);
        execSync('git merge --abort', { stdio: 'inherit' });
        execSync(`git merge -X theirs "pr-${pr}"`, { stdio: 'inherit' });
        execSync(`git commit -m "Merge PR #${pr} with conflict resolution"`, { stdio: 'inherit' });
      }
    } catch (error) {
      console.log(`Failed to process PR #${pr}: ${error.message}`);
    }
  }
  
  // Push changes
  console.log('Pushing to main...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('Merge process completed successfully!');
  
} catch (error) {
  console.error('Error during merge process:', error.message);
  process.exit(1);
}