const { execSync } = require('child_process');
const fs = require('fs');

// Function to run git commands
function runGitCommand(command) {
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

// Function to resolve merge conflicts automatically
function resolveConflicts() {
  console.log('Resolving merge conflicts...');
  
  // Find all files with conflict markers
  const conflictFiles = runGitCommand('git diff --name-only --diff-filter=U');
  if (!conflictFiles) return;
  
  const files = conflictFiles.trim().split('\n').filter(f => f);
  
  for (const file of files) {
    console.log(`Resolving conflicts in ${file}`);
    
    try {
      // Read the file
      const content = fs.readFileSync(`/workspace/${file}`, 'utf8');
      
      // Simple conflict resolution: prefer the incoming changes (after =======)
      let resolved = content
        .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
        .replace(/<<<<<<< [^\n]+\n([\s\S]*?)=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '$1');
      
      // Write the resolved content
      fs.writeFileSync(`/workspace/${file}`, resolved);
      
      // Add the resolved file
      runGitCommand(`git add ${file}`);
      
    } catch (error) {
      console.error(`Error resolving conflicts in ${file}:`, error.message);
    }
  }
}

// Function to merge a PR
function mergePR(prNumber) {
  console.log(`\nAttempting to merge PR #${prNumber}...`);
  
  try {
    // Try to merge the PR
    const result = execSync(`gh pr merge ${prNumber} --merge`, 
      { cwd: '/workspace', encoding: 'utf8' });
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to merge PR #${prNumber}: ${error.message}`);
    
    // If merge failed due to conflicts, try to resolve them
    if (error.message.includes('not mergeable') || error.message.includes('conflicts')) {
      console.log(`Attempting to resolve conflicts for PR #${prNumber}...`);
      
      try {
        // Checkout the PR branch
        execSync(`gh pr checkout ${prNumber}`, { cwd: '/workspace' });
        
        // Fetch latest main
        runGitCommand('git fetch origin main');
        
        // Try to merge main into the PR branch
        try {
          runGitCommand('git merge origin/main');
        } catch (mergeError) {
          console.log('Merge conflicts detected, resolving...');
          resolveConflicts();
          
          // Commit the resolved conflicts
          runGitCommand('git add .');
          runGitCommand('git commit -m "Resolve merge conflicts"');
        }
        
        // Push the resolved changes
        runGitCommand('git push origin HEAD');
        
        // Try to merge again
        try {
          execSync(`gh pr merge ${prNumber} --merge`, { cwd: '/workspace' });
          console.log(`✅ Successfully merged PR #${prNumber} after conflict resolution`);
          return true;
        } catch (retryError) {
          console.log(`❌ Still failed to merge PR #${prNumber} after conflict resolution`);
        }
        
      } catch (checkoutError) {
        console.log(`❌ Could not checkout PR #${prNumber}: ${checkoutError.message}`);
      }
    }
    
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting PR merge process...');
  
  // Get all open PRs
  const prs = getOpenPRs();
  console.log(`Found ${prs.length} open PRs`);
  
  // Sort PRs by number (newest first)
  prs.sort((a, b) => b.number - a.number);
  
  let mergedCount = 0;
  let failedCount = 0;
  
  for (const pr of prs) {
    console.log(`\nProcessing PR #${pr.number}: ${pr.title}`);
    console.log(`Branch: ${pr.headRefName}`);
    console.log(`Mergeable: ${pr.mergeable}, Status: ${pr.mergeStateStatus}`);
    
    if (pr.mergeable === 'MERGEABLE') {
      if (mergePR(pr.number)) {
        mergedCount++;
      } else {
        failedCount++;
      }
    } else {
      console.log(`PR #${pr.number} has conflicts, attempting to resolve...`);
      if (mergePR(pr.number)) {
        mergedCount++;
      } else {
        failedCount++;
      }
    }
    
    // Small delay between PRs
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\n=== MERGE SUMMARY ===`);
  console.log(`Total PRs processed: ${prs.length}`);
  console.log(`Successfully merged: ${mergedCount}`);
  console.log(`Failed to merge: ${failedCount}`);
}

// Run the script
main().catch(console.error);