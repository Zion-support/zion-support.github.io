#!/usr/bin/env node
import https from 'https';
import fs from 'fs';

const makeGitHubRequest = (path, method = 'GET', data = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: method,
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      options.headers['Content-Length'] = Buffer.byteLength(data);
    }

    const req = https.request(options, res => {
      let responseData = '';
      res.on('data', chunk => {
        responseData += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = responseData ? JSON.parse(responseData) : {};
          resolve({ status: res.statusCode, data: jsonData });
        } catch (error) {
          resolve({ status: res.statusCode, data: responseData });
        }
      });
    });

    req.on('error', error => reject(error));
    
    if (data) {
      req.write(data);
    }
    req.end();
  });
};

async function mergePR(prNumber) {
  try {
    console.log(`🔄 Attempting to merge PR #${prNumber}...`);
    
    // First, check if PR is mergeable
    const prDetails = await makeGitHubRequest(`/repos/Zion-Holdings/zion.app/pulls/${prNumber}`);
    
    if (prDetails.status !== 200) {
      console.log(`❌ Failed to fetch PR #${prNumber} details`);
      return false;
    }

    const pr = prDetails.data;
    
    if (pr.draft) {
      console.log(`⏭️  Skipping PR #${prNumber} - it's a draft`);
      return false;
    }

    if (pr.base.ref !== 'main') {
      console.log(`⏭️  Skipping PR #${prNumber} - targets ${pr.base.ref}, not main`);
      return false;
    }

    // Try to merge the PR
    const mergeData = JSON.stringify({
      commit_title: `Merge PR #${prNumber}: ${pr.title}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    });

    const mergeResult = await makeGitHubRequest(
      `/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge`,
      'PUT',
      mergeData
    );

    if (mergeResult.status === 200) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else if (mergeResult.status === 405) {
      console.log(`❌ PR #${prNumber} cannot be merged (${mergeResult.data.message || 'Unknown reason'})`);
      return false;
    } else if (mergeResult.status === 409) {
      console.log(`⚠️  PR #${prNumber} has merge conflicts`);
      return false;
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}: ${mergeResult.status} - ${JSON.stringify(mergeResult.data)}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error merging PR #${prNumber}: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🔍 Loading open PRs data...');
    const prsData = JSON.parse(fs.readFileSync('open_prs_data.json', 'utf8'));
    
    // Filter PRs that target main branch and are not drafts
    const relevantPRs = prsData.filter(pr => 
      pr.base.ref === 'main' && 
      !pr.draft &&
      pr.title.toLowerCase().includes('fix errors')
    );

    console.log(`📋 Found ${relevantPRs.length} relevant PRs targeting main branch:`);
    relevantPRs.forEach(pr => {
      console.log(`  - PR #${pr.number}: ${pr.title}`);
    });

    if (relevantPRs.length === 0) {
      console.log('✅ No relevant PRs to merge');
      return;
    }

    console.log('\n🚀 Starting merge process...');
    let successCount = 0;
    let conflictCount = 0;
    let errorCount = 0;

    for (const pr of relevantPRs) {
      const result = await mergePR(pr.number);
      if (result === true) {
        successCount++;
      } else if (result === false) {
        conflictCount++;
      } else {
        errorCount++;
      }
      
      // Add a small delay between merges
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('\n📊 Merge Summary:');
    console.log(`  ✅ Successfully merged: ${successCount}`);
    console.log(`  ⚠️  Conflicts/Issues: ${conflictCount}`);
    console.log(`  ❌ Errors: ${errorCount}`);

  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

main().catch(console.error);