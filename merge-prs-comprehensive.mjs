#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';

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
          const parsed = JSON.parse(body);
          resolve(parsed);
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
  console.log('📋 Fetching all open PRs...');
  let page = 1;
  let allPRs = [];
  
  while (page <= 10) {  // Limit to 10 pages (1000 PRs) to avoid infinite loop
    try {
      const prs = await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls?state=open&per_page=100&page=${page}`);
      if (!prs || prs.length === 0 || prs.error) break;
      allPRs = allPRs.concat(prs);
      console.log(`   Fetched page ${page}: ${prs.length} PRs`);
      if (prs.length < 100) break;
      page++;
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error.message);
      break;
    }
  }
  
  console.log(`✅ Total open PRs found: ${allPRs.length}`);
  return allPRs;
}

async function checkPRMergeable(prNumber) {
  try {
    const pr = await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls/${prNumber}`);
    return {
      mergeable: pr.mergeable,
      mergeable_state: pr.mergeable_state,
      draft: pr.draft,
      title: pr.title
    };
  } catch (error) {
    console.error(`Error checking PR #${prNumber}:`, error.message);
    return { mergeable: null, mergeable_state: 'unknown', draft: false };
  }
}

async function mergePR(prNumber) {
  console.log(`🔀 Attempting to merge PR #${prNumber}...`);
  
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
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}: ${result.message || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

async function updatePRFromDraft(prNumber) {
  console.log(`📝 Marking PR #${prNumber} as ready for review...`);
  
  try {
    const result = await makeGitHubRequest(
      `/repos/${OWNER}/${REPO}/pulls/${prNumber}`,
      'PATCH',
      { draft: false }
    );
    
    if (!result.error) {
      console.log(`✅ PR #${prNumber} marked as ready for review`);
      return true;
    } else {
      console.log(`❌ Error updating PR #${prNumber}: ${result.message || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error updating PR #${prNumber}:`, error.message);
    return false;
  }
}

async function closePR(prNumber, reason = '') {
  console.log(`🗑️  Closing PR #${prNumber}${reason ? `: ${reason}` : ''}...`);
  
  try {
    const result = await makeGitHubRequest(
      `/repos/${OWNER}/${REPO}/pulls/${prNumber}`,
      'PATCH',
      { state: 'closed' }
    );
    
    if (!result.error) {
      console.log(`✅ Successfully closed PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Error closing PR #${prNumber}: ${result.message || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting comprehensive PR merge process...\n');
  console.log(`Repository: ${OWNER}/${REPO}\n`);
  
  // Fetch all open PRs
  const openPRs = await getAllOpenPRs();
  
  if (openPRs.length === 0) {
    console.log('✅ No open PRs found. Nothing to merge!');
    return;
  }
  
  console.log('\n📊 PR Summary:');
  const prsByTitle = {};
  openPRs.forEach(pr => {
    const key = pr.title.toLowerCase().trim();
    if (!prsByTitle[key]) {
      prsByTitle[key] = [];
    }
    prsByTitle[key].push(pr);
    console.log(`   PR #${pr.number}: ${pr.title} (${pr.head.ref}) ${pr.draft ? '[DRAFT]' : ''}`);
  });
  
  // Identify duplicates
  console.log('\n🔍 Analyzing for duplicates...');
  let duplicateCount = 0;
  for (const [title, prs] of Object.entries(prsByTitle)) {
    if (prs.length > 1) {
      console.log(`   Found ${prs.length} PRs with similar title: "${prs[0].title}"`);
      duplicateCount += prs.length - 1;
    }
  }
  
  console.log(`\n📊 Stats:`);
  console.log(`   Total PRs: ${openPRs.length}`);
  console.log(`   Potential duplicates: ${duplicateCount}`);
  
  console.log('\n🔍 Checking mergeable status for all PRs...\n');
  
  let mergedCount = 0;
  let conflictCount = 0;
  let draftCount = 0;
  let closedDuplicates = 0;
  let otherIssues = 0;
  
  // Sort PRs by number (oldest first)
  const sortedPRs = openPRs.sort((a, b) => a.number - b.number);
  
  for (const pr of sortedPRs) {
    console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
    
    // Check if PR is draft
    if (pr.draft) {
      console.log(`⚠️  PR #${pr.number} is in draft state`);
      draftCount++;
      
      // Try to mark as ready for review
      await updatePRFromDraft(pr.number);
      
      // Wait for GitHub to process
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Check mergeable status
    const status = await checkPRMergeable(pr.number);
    console.log(`   Mergeable: ${status.mergeable}, State: ${status.mergeable_state}`);
    
    if (status.mergeable === true && (status.mergeable_state === 'clean' || status.mergeable_state === 'unstable')) {
      // Try to merge
      const merged = await mergePR(pr.number);
      if (merged) {
        mergedCount++;
      } else {
        otherIssues++;
      }
    } else if (status.mergeable === false) {
      console.log(`⚠️  PR #${pr.number} has merge conflicts`);
      conflictCount++;
      
      // Check if this is a duplicate that can be closed
      const prsWithSameTitle = prsByTitle[pr.title.toLowerCase().trim()];
      if (prsWithSameTitle && prsWithSameTitle.length > 1) {
        // Close older duplicates with conflicts
        const newestPR = prsWithSameTitle.reduce((max, current) => 
          current.number > max.number ? current : max, prsWithSameTitle[0]);
        
        if (pr.number !== newestPR.number) {
          console.log(`   Closing duplicate PR #${pr.number} (keeping #${newestPR.number})`);
          await closePR(pr.number, 'Duplicate PR with merge conflicts');
          closedDuplicates++;
        }
      }
    } else {
      console.log(`⚠️  PR #${pr.number} has state: ${status.mergeable_state}`);
      otherIssues++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  
  console.log('\n\n📊 Final Summary:');
  console.log('='.repeat(60));
  console.log(`   Total PRs processed: ${openPRs.length}`);
  console.log(`   ✅ Successfully merged: ${mergedCount}`);
  console.log(`   ⚠️  PRs with conflicts: ${conflictCount}`);
  console.log(`   🗑️  Closed duplicates: ${closedDuplicates}`);
  console.log(`   📝 Draft PRs processed: ${draftCount}`);
  console.log(`   ❓ Other issues: ${otherIssues}`);
  console.log('='.repeat(60));
  
  if (conflictCount > 0) {
    console.log('\n⚠️  Some PRs have merge conflicts that need manual resolution.');
    console.log('   These PRs cannot be automatically merged.');
  }
  
  if (mergedCount > 0) {
    console.log('\n✅ Merge process completed successfully!');
  }
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});