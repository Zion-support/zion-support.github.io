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
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);=======
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);    return prs || [];
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  } catch (error) {
    console.error('❌ Error fetching open PRs:', error.message);
    return [];
  }
}

=======async function readyForReview(owner, repo, number) {  try {
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

        const readied = await readyForReview(owner, repo, pr.number);
        console.log(`   📝 Draft -> ready_for_review: ${readied ? 'ok' : 'not permitted'}`);
      }
            // Ask GitHub to update the PR branch before merging
      const updated = await updateBranch(owner, repo, pr.number);
      if (updated) {
        console.log('   🔄 Requested update-branch');
        await new Promise(r => setTimeout(r, 2500));      }
      
      const mergeResult = await mergePR(owner, repo, pr.number);
      if (mergeResult.success) {
        console.log(`   ✅ Successfully merged PR #${pr.number}`);
      } else {
        console.log(`   ❌ Failed to merge PR #${pr.number}: ${mergeResult.error}`);
      }
      
      // Small delay between merges
      await new Promise(resolve => setTimeout(resolve, 1000));    }
    
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