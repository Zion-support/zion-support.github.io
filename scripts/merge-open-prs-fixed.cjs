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
<<<<<<< HEAD
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
    return prs;
=======
<<<<<<< HEAD
<<<<<<< HEAD
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open`);
=======
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
>>>>>>> origin/main
=======
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
>>>>>>> origin/main
    return prs || [];
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  } catch (error) {
    console.error('❌ Error fetching open PRs:', error.message);
    return [];
  }
}

<<<<<<< HEAD
async function mergePR(owner, repo, prNumber) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
async function readyForReview(owner, repo, number) {
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/main
async function mergePR(owner, repo, number) {
  try {
    const result = await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/merge`, 'PUT', {
      merge_method: 'merge',
      commit_title: `Merge PR #${number}`,
      commit_message: `Automated merge of PR #${number}`
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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
<<<<<<< HEAD
      console.log(`   State: ${pr.state}`);
      console.log(`   Mergeable: ${pr.mergeable === null ? 'Unknown' : pr.mergeable}`);
=======
      console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      
      if (pr.draft) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log('   ⏸️  Skipping draft PR');
        continue;
      }
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      
      if (pr.mergeable === false) {
        console.log(`⚠️  PR #${pr.number} has merge conflicts and cannot be merged automatically`);
        continue;
      }
      
<<<<<<< HEAD
      try {
        await mergePR(owner, repo, pr.number);
        console.log(`✅ Successfully merged PR #${pr.number}`);
      } catch (error) {
        console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
      }
=======
=======
        const readied = await readyForReview(owner, repo, pr.number);
        console.log(`   📝 Draft -> ready_for_review: ${readied ? 'ok' : 'not permitted'}`);
      }
      
>>>>>>> origin/main
      // Ask GitHub to update the PR branch before merging
      const updated = await updateBranch(owner, repo, pr.number);
      if (updated) {
        console.log('   🔄 Requested update-branch');
        await new Promise(r => setTimeout(r, 2500));
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/main
      }
      
      const mergeResult = await mergePR(owner, repo, pr.number);
      if (mergeResult.success) {
        console.log(`   ✅ Successfully merged PR #${pr.number}`);
      } else {
        console.log(`   ❌ Failed to merge PR #${pr.number}: ${mergeResult.error}`);
      }
      
      // Small delay between merges
      await new Promise(resolve => setTimeout(resolve, 1000));
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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