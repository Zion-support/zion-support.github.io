const { execSync } = require('child_process');

// Function to process a single PR
function processPR(prNumber, branchName) {
  try {
    console.log(`\n=== Processing PR #${prNumber} (${branchName}) ===`);
    
    // Checkout the PR
    console.log(`Checking out PR #${prNumber}...`);
    execSync(`gh pr checkout ${prNumber}`, { stdio: 'inherit' });
    
    // Try to merge with main
    console.log(`Attempting to merge with main...`);
    try {
      execSync('git fetch origin main && git merge origin/main', { stdio: 'inherit' });
      console.log(`✅ No conflicts for PR #${prNumber}`);
    } catch (error) {
      console.log(`⚠️  Conflicts detected for PR #${prNumber}, resolving...`);
      
      // Resolve conflicts using our script
      execSync('node resolve_conflicts.js', { stdio: 'inherit' });
      
      // Push the resolved conflicts
      execSync(`git push origin ${branchName}`, { stdio: 'inherit' });
    }
    
    // Mark as ready if it's a draft
    try {
      execSync(`gh pr ready ${prNumber}`, { stdio: 'inherit' });
    } catch (e) {
      // Already ready, ignore
    }
    
    // Merge the PR
    console.log(`Merging PR #${prNumber}...`);
    execSync(`gh pr merge ${prNumber} --merge`, { stdio: 'inherit' });
    
    console.log(`✅ Successfully merged PR #${prNumber}`);
    
    // Switch back to main and pull latest
    execSync('git checkout main && git pull origin main', { stdio: 'inherit' });
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to get all open PRs
function getAllOpenPRs() {
  try {
    const output = execSync('gh pr list --state open --json number,headRefName', { encoding: 'utf8' });
    return JSON.parse(output);
  } catch (error) {
    console.error('Error getting PR list:', error.message);
    return [];
  }
}

// Main function
async function main() {
  console.log('🚀 Starting to process all open PRs...');
  
  const prs = getAllOpenPRs();
  console.log(`Found ${prs.length} open PRs`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const pr of prs) {
    const success = processPR(pr.number, pr.headRefName);
    if (success) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Add a small delay between PRs
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`\n🎉 Processing complete!`);
  console.log(`✅ Successfully processed: ${successCount} PRs`);
  console.log(`❌ Failed to process: ${errorCount} PRs`);
}

main().catch(console.error);