#!/usr/bin/env node

const https = require('https');

const GITHUB_TOKEN = 'ghs_wpYWdr6QOJGeogZHgxhlHkPQFozQY54Sp8Cn';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

// Function to make GitHub API requests
function makeGitHubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'PR-Merger'
      }
    };

    if (data) {
      const jsonData = JSON.stringify(data);
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = Buffer.byteLength(jsonData);
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(response);
          } else {
            reject(new Error(`API Error: ${res.statusCode} - ${JSON.stringify(response)}`));
          }
        } catch (e) {
          reject(new Error(`Parse Error: ${e.message}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Get open PRs
async function getOpenPRs() {
  try {
    console.log('📋 Fetching open PRs...');
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    console.log(`📊 Found ${prs.length} open PRs`);
    return prs;
  } catch (error) {
    console.error('❌ Error fetching PRs:', error.message);
    return [];
  }
}

// Merge a PR
async function mergePR(prNumber, title) {
  try {
    console.log(`🔄 Merging PR #${prNumber}: ${title}`);
    
    // First, try to merge with merge strategy
    const mergeData = {
      commit_title: `Merge PR #${prNumber}: ${title}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    };
    
    const result = await makeGitHubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      'PUT',
      mergeData
    );
    
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return { success: true, result };
  } catch (error) {
    console.log(`⚠️  Merge failed for PR #${prNumber}, trying squash merge...`);
    
    try {
      // Try squash merge
      const squashData = {
        commit_title: `Merge PR #${prNumber}: ${title}`,
        commit_message: `Automated squash merge of PR #${prNumber}`,
        merge_method: 'squash'
      };
      
      const result = await makeGitHubRequest(
        `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
        'PUT',
        squashData
      );
      
      console.log(`✅ Successfully squash merged PR #${prNumber}`);
      return { success: true, result };
    } catch (squashError) {
      console.log(`❌ Failed to merge PR #${prNumber}: ${squashError.message}`);
      return { success: false, error: squashError.message };
    }
  }
}

// Main function
async function main() {
  console.log('🚀 Starting automated PR merge process...');
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  console.log('---');
  
  const prs = await getOpenPRs();
  
  if (prs.length === 0) {
    console.log('📭 No open PRs found');
    return;
  }
  
  let successfulMerges = 0;
  let failedMerges = 0;
  
  for (const pr of prs) {
    console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Head: ${pr.head.ref} (${pr.head.sha})`);
    console.log(`   Base: ${pr.base.ref} (${pr.base.sha})`);
    
    const result = await mergePR(pr.number, pr.title);
    
    if (result.success) {
      successfulMerges++;
    } else {
      failedMerges++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n🎉 PR merge process completed!');
  console.log('📊 Final Summary:');
  console.log(`   ✅ Successful merges: ${successfulMerges}`);
  console.log(`   ❌ Failed merges: ${failedMerges}`);
  console.log(`   📋 Total processed: ${prs.length}`);
  console.log(`⏰ Completed at: ${new Date().toISOString()}`);
}

// Run the script
main().catch(console.error);