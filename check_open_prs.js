#!/usr/bin/env node

import https from 'https';

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

// Function to make GitHub API requests
function makeGitHubRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

// Function to get open PRs
async function getOpenPRs() {
  try {
    console.log('🔍 Checking for open PRs...');
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return [];
    }
    
    console.log(`📋 Found ${prs.length} open PR(s):`);
    console.log('=' .repeat(80));
    
    const prDetails = [];
    
    for (const pr of prs) {
      const details = {
        number: pr.number,
        title: pr.title,
        head: pr.head.ref,
        base: pr.base.ref,
        state: pr.state,
        mergeable: pr.mergeable,
        mergeable_state: pr.mergeable_state,
        created_at: pr.created_at,
        updated_at: pr.updated_at,
        user: pr.user.login,
        url: pr.html_url
      };
      
      prDetails.push(details);
      
      console.log(`PR #${details.number}: ${details.title}`);
      console.log(`  Branch: ${details.head} → ${details.base}`);
      console.log(`  Author: ${details.user}`);
      console.log(`  State: ${details.state} (${details.mergeable_state})`);
      console.log(`  Mergeable: ${details.mergeable}`);
      console.log(`  Created: ${new Date(details.created_at).toLocaleString()}`);
      console.log(`  Updated: ${new Date(details.updated_at).toLocaleString()}`);
      console.log(`  URL: ${details.url}`);
      console.log('-'.repeat(80));
    }
    
    return prDetails;
  } catch (error) {
    console.error('❌ Error fetching PRs:', error.message);
    return [];
  }
}

// Function to check PR merge conflicts
async function checkPRConflicts(prNumber) {
  try {
    const pr = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
    return {
      hasConflicts: pr.mergeable === false,
      mergeableState: pr.mergeable_state,
      status: pr.statuses_url ? await checkPRStatus(pr.statuses_url) : null
    };
  } catch (error) {
    console.error(`❌ Error checking conflicts for PR #${prNumber}:`, error.message);
    return { hasConflicts: true, mergeableState: 'unknown', status: null };
  }
}

// Function to check PR status
async function checkPRStatus(statusesUrl) {
  try {
    const statuses = await makeGitHubRequest(statusesUrl.replace('https://api.github.com', ''));
    return statuses;
  } catch (error) {
    console.error('❌ Error checking PR status:', error.message);
    return null;
  }
}

// Main function
async function main() {
  console.log('🚀 GitHub PR Checker');
  console.log(`Repository: ${REPO_OWNER}/${REPO_NAME}`);
  console.log('=' .repeat(80));
  
  const openPRs = await getOpenPRs();
  
  if (openPRs.length > 0) {
    console.log('\n🔍 Checking for merge conflicts...');
    
    for (const pr of openPRs) {
      const conflictInfo = await checkPRConflicts(pr.number);
      console.log(`PR #${pr.number}: ${conflictInfo.hasConflicts ? '❌ Has conflicts' : '✅ No conflicts'} (${conflictInfo.mergeableState})`);
    }
  }
  
  console.log('\n✨ PR check complete!');
}

// Run the script
main().catch(console.error);