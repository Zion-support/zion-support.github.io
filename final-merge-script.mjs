#!/usr/bin/env node

import https from 'https';

const GITHUB_TOKEN = 'ghs_bwUCm9bR8GIGUFtos7gUdB8xyPjEsG4VHcjM';
const OWNER = 'Zion-Holdings';
const REPO = 'zion.app';

function makeGitHubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve({ error: 'Parse error', body });
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

async function getAllOpenPRs() {
  const prs = await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls?state=open&per_page=100`);
  return prs.filter(pr => !pr.error);
}

async function updatePRFromDraft(prNumber) {
  await makeGitHubRequest(
    `/repos/${OWNER}/${REPO}/pulls/${prNumber}`,
    'PATCH',
    { draft: false }
  );
}

async function getPRDetails(prNumber) {
  return await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls/${prNumber}`);
}

async function mergePR(prNumber, retries = 3) {
  for (let i = 0; i < retries; i++) {
    // Update from draft
    await updatePRFromDraft(prNumber);
    
    // Wait for GitHub to process (longer each retry)
    await new Promise(resolve => setTimeout(resolve, (i + 1) * 5000));
    
    // Check current status
    const pr = await getPRDetails(prNumber);
    
    console.log(`   Attempt ${i + 1}/${retries}: draft=${pr.draft}, mergeable=${pr.mergeable}, state=${pr.mergeable_state}`);
    
    if (pr.draft) {
      console.log(`   Still draft, retrying...`);
      continue;
    }
    
    // Try to merge
    try {
      const result = await makeGitHubRequest(
        `/repos/${OWNER}/${REPO}/pulls/${prNumber}/merge`,
        'PUT',
        {
          merge_method: 'merge'
        }
      );
      
      if (result.merged) {
        console.log(`✅ Successfully merged PR #${prNumber}`);
        return true;
      } else {
        console.log(`   Merge failed: ${result.message || 'Unknown error'}`);
        
        // If it's mergeable but failed, try again
        if (pr.mergeable && i < retries - 1) {
          continue;
        }
      }
    } catch (error) {
      console.log(`   Error: ${error.message}`);
    }
  }
  
  return false;
}

async function closeDuplicatePRs(prs) {
  console.log('\n🧹 Closing remaining duplicate/conflicted PRs...');
  
  let closedCount = 0;
  
  for (const pr of prs) {
    const details = await getPRDetails(pr.number);
    
    // Close if has conflicts
    if (details.mergeable === false) {
      console.log(`   Closing PR #${pr.number} (has conflicts)`);
      await makeGitHubRequest(
        `/repos/${OWNER}/${REPO}/pulls/${pr.number}`,
        'PATCH',
        { state: 'closed' }
      );
      closedCount++;
    }
  }
  
  return closedCount;
}

async function main() {
  console.log('🚀 Final merge attempt for all remaining PRs...\n');
  
  let openPRs = await getAllOpenPRs();
  console.log(`Found ${openPRs.length} open PRs\n`);
  
  if (openPRs.length === 0) {
    console.log('✅ No open PRs remaining!');
    return;
  }
  
  let mergedCount = 0;
  
  // Sort by number (oldest first, but focus on non-drafts)
  openPRs.sort((a, b) => {
    if (a.draft !== b.draft) return a.draft ? 1 : -1;
    return a.number - b.number;
  });
  
  for (const pr of openPRs) {
    console.log(`\n━━━ PR #${pr.number} ━━━`);
    
    const merged = await mergePR(pr.number, 3);
    if (merged) {
      mergedCount++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Check what's left
  openPRs = await getAllOpenPRs();
  console.log(`\n📊 ${openPRs.length} PRs still open`);
  
  // Close duplicates/conflicts
  const closedCount = await closeDuplicatePRs(openPRs);
  
  // Final check
  openPRs = await getAllOpenPRs();
  
  console.log('\n\n📊 Final Summary:');
  console.log('='.repeat(60));
  console.log(`   ✅ Successfully merged: ${mergedCount}`);
  console.log(`   🗑️  Closed (conflicts): ${closedCount}`);
  console.log(`   📋 Remaining open: ${openPRs.length}`);
  console.log('='.repeat(60));
  
  if (openPRs.length > 0) {
    console.log('\n📋 Remaining PRs:');
    for (const pr of openPRs) {
      console.log(`   - PR #${pr.number}: ${pr.title}`);
    }
  }
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});