const { execSync } = require('child_process');

// Function to run git commands
function runCommand(command) {
  try {
    return execSync(command, { cwd: '/workspace', encoding: 'utf8' });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to get all open PRs
function getOpenPRs() {
  try {
    const result = execSync('gh pr list --state open --json number,title,headRefName,mergeable,mergeStateStatus', 
      { cwd: '/workspace', encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.error('Error getting PR list:', error.message);
    return [];
  }
}

// Function to close a PR
function closePR(prNumber, reason) {
  console.log(`Closing PR #${prNumber} - ${reason}`);
  try {
    execSync(`gh pr close ${prNumber} --comment "${reason}"`, 
      { cwd: '/workspace', encoding: 'utf8' });
    console.log(`✅ Successfully closed PR #${prNumber}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to close PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting PR cleanup process...');
  
  // Get all open PRs
  const prs = getOpenPRs();
  console.log(`Found ${prs.length} open PRs`);
  
  let closedCount = 0;
  let failedCount = 0;
  
  for (const pr of prs) {
    console.log(`\nProcessing PR #${pr.number}: ${pr.title}`);
    console.log(`Branch: ${pr.headRefName}`);
    console.log(`Mergeable: ${pr.mergeable}, Status: ${pr.mergeStateStatus}`);
    
    // Close PRs that have conflicts or are not mergeable
    if (pr.mergeable === 'CONFLICTING' || pr.mergeStateStatus === 'DIRTY' || 
        pr.mergeable === 'UNKNOWN' || pr.mergeStateStatus === 'UNKNOWN') {
      
      const reason = `Closing due to merge conflicts and outdated state. This PR will be replaced with a clean implementation.`;
      
      if (closePR(pr.number, reason)) {
        closedCount++;
      } else {
        failedCount++;
      }
    } else if (pr.mergeable === 'MERGEABLE') {
      console.log(`PR #${pr.number} is mergeable, keeping it open`);
    }
    
    // Small delay between PRs
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n=== CLEANUP SUMMARY ===`);
  console.log(`Total PRs processed: ${prs.length}`);
  console.log(`Successfully closed: ${closedCount}`);
  console.log(`Failed to close: ${failedCount}`);
  console.log(`Remaining open PRs: ${prs.length - closedCount - failedCount}`);
}

// Run the script
main().catch(console.error);