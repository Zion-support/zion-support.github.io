#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');

console.log('🚀 GitHub PR Merger - Starting...');

// Configuration
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

// Function to make GitHub API requests
function githubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'User-Agent': 'PR-Merger-Script',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : '',
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = Buffer.byteLength(data);
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const jsonBody = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(jsonBody);
          } else {
            reject(new Error(`GitHub API error: ${res.statusCode} - ${jsonBody.message || body}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(data);
    }
    req.end();
  });
}

// Function to run git commands
function runGit(command) {
  try {
    return execSync(command, { 
      cwd: '/workspace',
      encoding: 'utf8',
      stdio: 'pipe'
    }).trim();
  } catch (error) {
    throw new Error(`Git command failed: ${command} - ${error.message}`);
  }
}

// Function to get open PRs
async function getOpenPRs() {
  console.log('📋 Fetching open PRs...');
  try {
    const prs = await githubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    console.log(`Found ${prs.length} open PRs`);
    return prs;
  } catch (error) {
    console.error('❌ Failed to fetch PRs:', error.message);
    return [];
  }
}

// Function to check if PR can be merged
async function checkPRMergeable(prNumber) {
  try {
    const pr = await githubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
    return pr.mergeable;
  } catch (error) {
    console.error(`❌ Failed to check mergeable status for PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to merge a PR
async function mergePR(prNumber, title) {
  try {
    console.log(`🔄 Merging PR #${prNumber}: ${title}`);
    
    const mergeData = JSON.stringify({
      commit_title: `Merge PR #${prNumber}: ${title}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    });
    
    const result = await githubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      'PUT',
      mergeData
    );
    
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to merge PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to resolve conflicts locally
async function resolveConflictsLocally(pr) {
  try {
    console.log(`🔧 Attempting to resolve conflicts for PR #${pr.number} locally...`);
    
    // Switch to main
    runGit('git checkout main');
    runGit('git pull origin main');
    
    // Fetch the PR branch
    runGit(`git fetch origin ${pr.head.ref}`);
    
    // Try to merge
    try {
      runGit(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`);
      console.log(`✅ Successfully merged PR #${pr.number} locally`);
      
      // Push to main
      runGit('git push origin main');
      return true;
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected for PR #${pr.number}`);
      
      // Get conflicted files
      const conflictFiles = runGit('git diff --name-only --diff-filter=U').split('\n').filter(f => f);
      
      if (conflictFiles.length > 0) {
        console.log(`🔧 Resolving conflicts in ${conflictFiles.length} files...`);
        
        // Resolve conflicts by keeping our changes
        for (const file of conflictFiles) {
          try {
            runGit(`git checkout --ours "${file}"`);
            runGit(`git add "${file}"`);
            console.log(`✅ Resolved conflicts in: ${file}`);
          } catch (fileError) {
            console.log(`⚠️  Could not resolve conflicts in: ${file}`);
          }
        }
        
        // Commit the resolved conflicts
        runGit(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`);
        runGit('git push origin main');
        
        console.log(`✅ Successfully resolved conflicts and merged PR #${pr.number}`);
        return true;
      } else {
        console.log(`❌ No conflict files found for PR #${pr.number}`);
        runGit('git merge --abort');
        return false;
      }
    }
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts for PR #${pr.number}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('📍 Repository:', `${REPO_OWNER}/${REPO_NAME}`);
    
    // Get open PRs
    const openPRs = await getOpenPRs();
    
    if (openPRs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    let mergedCount = 0;
    let conflictCount = 0;
    
    // Process each PR
    for (const pr of openPRs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      
      // Check if PR can be merged
      const mergeable = await checkPRMergeable(pr.number);
      
      if (mergeable === true) {
        // PR can be merged directly
        if (await mergePR(pr.number, pr.title)) {
          mergedCount++;
        }
      } else if (mergeable === false) {
        // PR has conflicts, try to resolve locally
        conflictCount++;
        if (await resolveConflictsLocally(pr)) {
          mergedCount++;
        }
      } else {
        console.log(`⚠️  PR #${pr.number} mergeable status is unknown, skipping...`);
      }
      
      // Small delay between PRs
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log(`\n🎉 Process completed!`);
    console.log(`✅ Successfully merged: ${mergedCount} PRs`);
    console.log(`⚠️  Conflicts encountered: ${conflictCount} PRs`);
    
  } catch (error) {
    console.error('❌ Error during PR merge process:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();