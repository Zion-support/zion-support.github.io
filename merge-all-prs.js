#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

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
        'User-Agent': 'Node.js',
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
          resolve(body);
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
  // console.log('📋 Fetching all open PRs...');
  let page = 1;
  let allPRs = [];
  
  while (true) {
    const prs = await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls?state=open&per_page=100&page=${page}`);
    if (!prs || prs.length === 0) break;
    allPRs = allPRs.concat(prs);
    // console.log(`   Fetched page ${page}: ${prs.length} PRs`);
    if (prs.length < 100) break;
    page++;
  }
  
  // console.log(`✅ Total open PRs found: ${allPRs.length}`);
  return allPRs;
}

async function checkPRMergeable(prNumber) {
  const pr = await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls/${prNumber}`);
  return {
    mergeable: pr.mergeable,
    mergeable_state: pr.mergeable_state,
    draft: pr.draft
  };
}

async function mergePR(prNumber) {
  // console.log(`🔀 Attempting to merge PR #${prNumber}...`);
  
  try {
    const result = await makeGitHubRequest(
      `/repos/${OWNER}/${REPO}/pulls/${prNumber}/merge`,
      'PUT',
      {
        merge_method: 'merge',
        commit_title: `Merge PR #${prNumber}`,
        commit_message: 'Automated merge by background agent'
      }
    );
    
    if (result.merged) {
      // console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      // console.log(`❌ Failed to merge PR #${prNumber}: ${result.message}`);
      return false;
    }
  } catch (error) {
    // console.log(`❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

async function updatePRFromDraft(prNumber) {
  // console.log(`📝 Marking PR #${prNumber} as ready for review...`);
  
  try {
    await makeGitHubRequest(
      `/repos/${OWNER}/${REPO}/pulls/${prNumber}`,
      'PATCH',
      { draft: false }
    );
    // console.log(`✅ PR #${prNumber} marked as ready for review`);
    return true;
  } catch (error) {
    // console.log(`❌ Error updating PR #${prNumber}:`, error.message);
    return false;
  }
}

async function main() {
  // console.log('🚀 Starting comprehensive PR merge process...\n');
  
  // Fetch all open PRs
  const openPRs = await getAllOpenPRs();
  
  if (openPRs.length === 0) {
    // console.log('✅ No open PRs found. Nothing to merge!');
    return;
  }
  
  // console.log('\n📊 PR Summary:');
  openPRs.forEach(pr => {
    // console.log(`   PR #${pr.number}: ${pr.title} (${pr.head.ref} -> ${pr.base.ref}) ${pr.draft ? '[DRAFT]' : ''}`);
  });
  
  // console.log('\n🔍 Checking mergeable status for all PRs...\n');
  
  let mergedCount = 0;
  let conflictCount = 0;
  let draftCount = 0;
  let otherIssues = 0;
  
  for (const pr of openPRs) {
    // console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
    
    // Check if PR is draft
    if (pr.draft) {
      // console.log(`⚠️  PR #${pr.number} is in draft state`);
      draftCount++;
      
      // Try to mark as ready for review
      await updatePRFromDraft(pr.number);
      
      // Wait a bit for GitHub to process
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Check mergeable status
    const status = await checkPRMergeable(pr.number);
    // console.log(`   Mergeable: ${status.mergeable}, State: ${status.mergeable_state}`);
    
    if (status.mergeable === true && status.mergeable_state === 'clean') {
      // Try to merge
      const merged = await mergePR(pr.number);
      if (merged) {
        mergedCount++;
      }
    } else if (status.mergeable === false) {
      // console.log(`⚠️  PR #${pr.number} has merge conflicts and needs manual resolution`);
      conflictCount++;
    } else {
      // console.log(`⚠️  PR #${pr.number} has state: ${status.mergeable_state}`);
      otherIssues++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // console.log('\n\n📊 Final Summary:');
  // console.log(`   Total PRs processed: ${openPRs.length}`);
  // console.log(`   ✅ Successfully merged: ${mergedCount}`);
  // console.log(`   ⚠️  PRs with conflicts: ${conflictCount}`);
  // console.log(`   📝 Draft PRs: ${draftCount}`);
  // console.log(`   ❓ Other issues: ${otherIssues}`);
  
  if (conflictCount > 0) {
    // console.log('\n⚠️  Some PRs have merge conflicts that need manual resolution.');
    // console.log('   These PRs cannot be automatically merged and require intervention.');
  }
}

main().catch(error => {
  // console.error('❌ Fatal error:', error);
  process.exit(1);
});