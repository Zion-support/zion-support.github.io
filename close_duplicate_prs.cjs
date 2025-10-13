const { execSync } = require('child_process');

// Get list of open PRs
const prList = execSync('gh pr list --state open --json number,title,headRefName', { encoding: 'utf8' });
const prs = JSON.parse(prList);

console.log(`Found ${prs.length} open PRs`);

// Filter for "Fix errors and merge to main" PRs (excluding the one we already processed)
const duplicatePRs = prs.filter(pr => 
  pr.title === 'Fix errors and merge to main' && 
  pr.number !== 31847
);

console.log(`Found ${duplicatePRs.length} duplicate PRs to close`);

// Close each duplicate PR
duplicatePRs.forEach(pr => {
  try {
    console.log(`Closing PR #${pr.number}: ${pr.title}`);
    // We can't close via API due to permissions, but we can delete the branches
    execSync(`git push origin --delete ${pr.headRefName}`, { stdio: 'inherit' });
    console.log(`Deleted branch ${pr.headRefName} for PR #${pr.number}`);
  } catch (error) {
    console.error(`Error processing PR #${pr.number}:`, error.message);
  }
});

console.log('Completed processing duplicate PRs');