#!/usr/bin/env node

const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN is not set. Set it in your environment before running this script.');
  process.exit(1);
}
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Node.js'
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(body);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function getOpenPRs() {
  console.log('🔍 Fetching open PRs...');
  const response = await makeRequest(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=20`);
  
  if (response.status !== 200) {
    throw new Error(`Failed to fetch PRs: ${response.status}`);
  }

  return response.data;
}

async function getPRDetails(prNumber) {
  const response = await makeRequest(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
  
  if (response.status !== 200) {
    throw new Error(`Failed to fetch PR ${prNumber}: ${response.status}`);
  }

  return response.data;
}

async function mergePR(prNumber, title, headRef) {
  console.log(`🔄 Attempting to merge PR #${prNumber}: ${title}`);
  
  const mergeData = {
    commit_title: `Merge PR #${prNumber}: ${title}`,
    commit_message: `Automated merge of PR #${prNumber}`,
    merge_method: 'merge'
  };

  const response = await makeRequest(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
    'PUT',
    mergeData
  );

  if (response.status === 200) {
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } else {
    console.log(`❌ Failed to merge PR #${prNumber}: ${response.status} - ${JSON.stringify(response.data)}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🚀 Starting batch PR merge process...\n');

    // Get all open PRs
    const prs = await getOpenPRs();
    console.log(`Found ${prs.length} open PRs\n`);

    const results = {
      successful: [],
      failed: []
    };

    // Process each PR
    for (const pr of prs) {
      try {
        console.log(`\n📋 Processing PR #${pr.number}: ${pr.title}`);
        console.log(`   Head: ${pr.head.ref}`);
        console.log(`   Mergeable: ${pr.mergeable}`);
        console.log(`   State: ${pr.mergeable_state}`);

        // Try to merge the PR
        const success = await mergePR(pr.number, pr.title, pr.head.ref);
        
        if (success) {
          results.successful.push(pr.number);
        } else {
          results.failed.push(pr.number);
        }

        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error) {
        console.error(`❌ Error processing PR #${pr.number}:`, error.message);
        results.failed.push(pr.number);
      }
    }

    // Summary
    console.log('\n📊 MERGE SUMMARY:');
    console.log(`✅ Successfully merged: ${results.successful.length} PRs`);
    console.log(`❌ Failed to merge: ${results.failed.length} PRs`);
    
    if (results.successful.length > 0) {
      console.log(`\n✅ Successfully merged PRs: ${results.successful.join(', ')}`);
    }
    
    if (results.failed.length > 0) {
      console.log(`\n❌ Failed to merge PRs: ${results.failed.join(', ')}`);
    }

    console.log('\n🎉 Batch merge process completed!');

  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

main();