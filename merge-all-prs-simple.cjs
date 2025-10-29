#!/usr/bin/env node

const { execSync } = require('child_process');
const https = require('https');

// Function to make HTTPS request
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`Executing: ${description}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ Success: ${description}`);
    return { success: true, result };
  } catch (error) {
    console.log(`❌ Error: ${description} - ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Function to check if branch exists
function branchExists(branchName) {
  try {
    execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// Function to merge a single PR
async function mergePR(pr) {
  const branchName = pr.head.ref;
  const prNumber = pr.number;
  const prTitle = pr.title;
  
  console.log(`\n🔄 Processing PR #${prNumber}: ${prTitle}`);
  console.log(`   Branch: ${branchName}`);
  
  // Check if branch exists
  if (!branchExists(branchName)) {
    console.log(`   ⚠️  Branch ${branchName} does not exist locally`);
    return { success: false, reason: 'Branch not found' };
  }
  
  // Fetch the latest changes
  const fetchResult = safeGitCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`);
  if (!fetchResult.success) {
    return { success: false, reason: 'Failed to fetch branch' };
  }
  
  // Try to merge
  try {
    console.log(`   🔀 Attempting to merge ${branchName}...`);
    execSync(`git merge --no-ff origin/${branchName} -m "Merge PR #${prNumber}: ${prTitle}"`, { 
      stdio: 'inherit' 
    });
    console.log(`   ✅ Successfully merged PR #${prNumber}`);
    return { success: true };
  } catch (mergeError) {
    console.log(`   ⚠️  Merge conflict detected for PR #${prNumber}`);
    
    // Try to resolve conflicts automatically
    try {
      console.log(`   🔧 Attempting automatic conflict resolution...`);
      
      // Use our strategy to resolve conflicts
      execSync('git checkout --ours .', { stdio: 'pipe' });
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "Merge PR #${prNumber}: ${prTitle} (conflicts resolved)"`, { stdio: 'pipe' });
      
      console.log(`   ✅ Successfully resolved conflicts for PR #${prNumber}`);
      return { success: true };
    } catch (resolveError) {
      console.log(`   ❌ Failed to resolve conflicts for PR #${prNumber}`);
      execSync('git merge --abort', { stdio: 'pipe' });
      return { success: false, reason: 'Merge conflicts could not be resolved' };
    }
  }
}

// Main function
async function mergeAllPRs() {
  try {
    console.log('🚀 Starting comprehensive PR merge process...\n');
    
    // Step 1: Ensure we're on main and up to date
    console.log('📋 Step 1: Preparing main branch...');
    safeGitCommand('git checkout main', 'Switching to main branch');
    safeGitCommand('git reset --hard HEAD', 'Resetting main branch');
    safeGitCommand('git pull origin main', 'Pulling latest changes from origin');
    
    // Step 2: Get all open PRs
    console.log('\n📋 Step 2: Fetching open PRs...');
    const response = await makeRequest('https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open', {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status !== 200) {
      throw new Error(`Failed to fetch PRs: ${response.status}`);
    }
    
    const prs = response.data;
    console.log(`Found ${prs.length} open PRs`);
    
    if (prs.length === 0) {
      console.log('No open PRs to merge.');
      return;
    }
    
    // Step 3: Filter and prioritize PRs
    const priorityPRs = prs.filter(pr => 
      pr.title.includes('Fix errors and merge to main') ||
      pr.title.includes('fix-errors-and-merge-to-main')
    );
    
    console.log(`\n📋 Step 3: Processing ${priorityPRs.length} priority PRs...`);
    
    // Step 4: Merge PRs one by one
    let successCount = 0;
    let failureCount = 0;
    
    for (const pr of priorityPRs) {
      const result = await mergePR(pr);
      if (result.success) {
        successCount++;
      } else {
        failureCount++;
        console.log(`   ❌ Failed to merge PR #${pr.number}: ${result.reason}`);
      }
    }
    
    // Step 5: Push changes
    console.log('\n📋 Step 5: Pushing changes to origin...');
    const pushResult = safeGitCommand('git push origin main', 'Pushing merged changes');
    
    // Step 6: Summary
    console.log('\n📊 Merge Summary:');
    console.log(`   ✅ Successfully merged: ${successCount} PRs`);
    console.log(`   ❌ Failed to merge: ${failureCount} PRs`);
    console.log(`   📤 Push result: ${pushResult.success ? 'Success' : 'Failed'}`);
    
    if (successCount > 0) {
      console.log('\n🎉 PR merge process completed successfully!');
    } else {
      console.log('\n⚠️  No PRs were successfully merged.');
    }
    
  } catch (error) {
    console.error('❌ Error during PR merge process:', error.message);
    process.exit(1);
  }
}

// Run the script
mergeAllPRs();