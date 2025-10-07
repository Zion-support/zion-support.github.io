#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');

// GitHub API configuration
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function makeGitHubRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json',
        ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

function makeGitHubMergeRequest(prNumber, mergeMethod = 'merge') {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      merge_method: mergeMethod,
      commit_title: `Merge PR #${prNumber}`,
      commit_message: `Automated merge of PR #${prNumber}`
    });

    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      method: 'PUT',
      headers: {
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(response);
          } else {
            reject(new Error(`GitHub API error: ${res.statusCode} - ${data}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  try {
    console.log('🔍 Fetching open pull requests...');
    
    // Get all open PRs
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    
    console.log(`📋 Found ${prs.length} open pull requests:`);
    prs.forEach(pr => {
      console.log(`  PR #${pr.number}: ${pr.title} (${pr.head.ref} -> ${pr.base.ref})`);
    });

    if (prs.length === 0) {
      console.log('✅ No open PRs to merge');
      return;
    }

    // Sort PRs by number (oldest first)
    const sortedPRs = prs.sort((a, b) => a.number - b.number);

    console.log('\n🚀 Starting merge process...');

    for (const pr of sortedPRs) {
      console.log(`\n📝 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      
      try {
        // Check if PR can be merged
        if (pr.mergeable === false) {
          console.log(`   ⚠️  PR #${pr.number} has merge conflicts. Attempting to resolve...`);
          
          // Try to merge via GitHub API first
          try {
            const mergeResult = await makeGitHubMergeRequest(pr.number, 'merge');
            console.log(`   ✅ Successfully merged PR #${pr.number}`);
            console.log(`   📝 Merge commit: ${mergeResult.sha}`);
            continue;
          } catch (mergeError) {
            console.log(`   ❌ GitHub API merge failed: ${mergeError.message}`);
            
            // If GitHub API fails, try local merge
            console.log(`   🔧 Attempting local merge resolution...`);
            
            try {
              // Fetch the branch
              execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'pipe' });
              
              // Checkout main and ensure it's up to date
              execSync(`git checkout main`, { stdio: 'pipe' });
              execSync(`git pull origin main`, { stdio: 'pipe' });
              
              // Try to merge
              try {
                execSync(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`, { stdio: 'pipe' });
                console.log(`   ✅ Successfully merged PR #${pr.number} locally`);
                
                // Push the merge
                execSync(`git push origin main`, { stdio: 'pipe' });
                console.log(`   📤 Pushed merge to origin/main`);
                
                // Close the PR via API
                try {
                  await makeGitHubMergeRequest(pr.number, 'merge');
                  console.log(`   🔒 Closed PR #${pr.number} via API`);
                } catch (closeError) {
                  console.log(`   ⚠️  Could not close PR via API: ${closeError.message}`);
                }
                
              } catch (mergeConflictError) {
                console.log(`   ⚠️  Merge conflicts detected for PR #${pr.number}`);
                console.log(`   🔧 Attempting automatic conflict resolution...`);
                
                try {
                  // Reset the merge
                  execSync(`git merge --abort`, { stdio: 'pipe' });
                  
                  // Try merge with strategy
                  execSync(`git merge origin/${pr.head.ref} -X theirs --no-ff -m "Auto-merge PR #${pr.number}: ${pr.title}"`, { stdio: 'pipe' });
                  console.log(`   ✅ Auto-resolved conflicts for PR #${pr.number}`);
                  
                  // Push the merge
                  execSync(`git push origin main`, { stdio: 'pipe' });
                  console.log(`   📤 Pushed auto-merged commit to origin/main`);
                  
                } catch (autoMergeError) {
                  console.log(`   ❌ Auto-merge failed for PR #${pr.number}: ${autoMergeError.message}`);
                  console.log(`   ⚠️  Manual intervention required for PR #${pr.number}`);
                }
              }
              
            } catch (localMergeError) {
              console.log(`   ❌ Local merge failed for PR #${pr.number}: ${localMergeError.message}`);
            }
          }
        } else if (pr.mergeable === true) {
          // PR can be merged directly
          try {
            const mergeResult = await makeGitHubMergeRequest(pr.number, 'merge');
            console.log(`   ✅ Successfully merged PR #${pr.number}`);
            console.log(`   📝 Merge commit: ${mergeResult.sha}`);
          } catch (mergeError) {
            console.log(`   ❌ Failed to merge PR #${pr.number}: ${mergeError.message}`);
          }
        } else {
          console.log(`   ⏳ PR #${pr.number} merge status is unknown, skipping...`);
        }
        
      } catch (error) {
        console.log(`   ❌ Error processing PR #${pr.number}: ${error.message}`);
      }
    }

    console.log('\n🎉 Merge process completed!');
    
    // Update local main branch
    try {
      console.log('\n🔄 Updating local main branch...');
      execSync(`git checkout main`, { stdio: 'pipe' });
      execSync(`git pull origin main`, { stdio: 'pipe' });
      console.log('✅ Local main branch updated');
    } catch (updateError) {
      console.log(`⚠️  Could not update local main branch: ${updateError.message}`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };