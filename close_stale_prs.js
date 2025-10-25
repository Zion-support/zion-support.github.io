const { execSync } = require('child_process');

// Function to close a stale PR
function closeStalePR(prNumber) {
  try {
    console.log(`Closing stale PR #${prNumber}...`);
    
    // Try to close the PR
    execSync(`gh pr close ${prNumber} --comment "Closing stale PR - branch no longer exists"`, { stdio: 'inherit' });
    console.log(`✅ Closed PR #${prNumber}`);
    return true;
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to get all open PRs
function getAllOpenPRs() {
  try {
    const output = execSync('gh pr list --state open --json number', { encoding: 'utf8' });
    return JSON.parse(output);
  } catch (error) {
    console.error('Error getting PR list:', error.message);
    return [];
  }
}

// Main function
async function main() {
  console.log('🚀 Starting to close stale PRs...');
  
  const prs = getAllOpenPRs();
  console.log(`Found ${prs.length} open PRs`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const pr of prs) {
    const success = closeStalePR(pr.number);
    if (success) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Add a small delay between PRs
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\n🎉 Processing complete!`);
  console.log(`✅ Successfully closed: ${successCount} PRs`);
  console.log(`❌ Failed to close: ${errorCount} PRs`);
}

main().catch(console.error);