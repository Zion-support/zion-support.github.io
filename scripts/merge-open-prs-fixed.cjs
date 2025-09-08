const https = require('https');

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

// Make authenticated request to GitHub API
function ghRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Zion-Tech-Group/PR-Merger',
        'Accept': 'application/vnd.github.v3+json',
        ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          if (res.statusCode >= 400) {
            reject(new Error(`GitHub API error: ${res.statusCode} - ${jsonData.message || data}`));
          } else {
            resolve(jsonData);
          }
        } catch (e) {
          reject(new Error(`Failed to parse GitHub API response: ${e.message}`));
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function getOpenPRs(owner, repo) {
  try {
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
    return prs;
  } catch (error) {
    console.error('❌ Error fetching open PRs:', error.message);
    return [];
  }
}

async function mergePR(owner, repo, prNumber) {
  try {
    const mergeData = {
      commit_title: `Merge PR #${prNumber}`,
      commit_message: `Automatically merged PR #${prNumber}`,
      merge_method: 'merge'
    };

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${owner}/${repo}/pulls/${prNumber}/merge`,
      method: 'PUT',
      headers: {
        'User-Agent': 'Zion-Tech-Group/PR-Merger',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
      }
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            if (res.statusCode >= 400) {
              reject(new Error(`Failed to merge PR #${prNumber}: ${res.statusCode} - ${jsonData.message || data}`));
            } else {
              resolve(jsonData);
            }
          } catch (e) {
            reject(new Error(`Failed to parse merge response: ${e.message}`));
          }
        });
      });

      req.on('error', reject);
      req.write(JSON.stringify(mergeData));
      req.end();
    });
  } catch (error) {
    console.error(`❌ Error merging PR #${prNumber}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('🔍 Checking for open PRs...');
  
  const owner = 'Zion-Holdings';
  const repo = 'zion.app';
  
  console.log(`📂 Repository: ${owner}/${repo}`);
  
  try {
    const openPRs = await getOpenPRs(owner, repo);
    
    if (openPRs.length === 0) {
      console.log('📋 Found 0 open PRs');
      console.log('✅ No open PRs to merge');
      return;
    }
    
    console.log(`📋 Found ${openPRs.length} open PRs`);
    
    for (const pr of openPRs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Author: ${pr.user.login}`);
      console.log(`   State: ${pr.state}`);
      console.log(`   Mergeable: ${pr.mergeable === null ? 'Unknown' : pr.mergeable}`);
      
      if (pr.mergeable === false) {
        console.log(`⚠️  PR #${pr.number} has merge conflicts and cannot be merged automatically`);
        continue;
      }
      
      try {
        await mergePR(owner, repo, pr.number);
        console.log(`✅ Successfully merged PR #${pr.number}`);
      } catch (error) {
        console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
      }
    }
    
    console.log('\n🎉 PR processing complete!');
    
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { getOpenPRs, mergePR };