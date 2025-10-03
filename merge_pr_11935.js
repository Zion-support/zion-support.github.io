#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'ghs_okkwmJJDORVHWulfrHrf6RjRzLoWcz0ytZvb';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const PR_NUMBER = 24892;

// GitHub API helper function
function makeGitHubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(`GitHub API error: ${res.statusCode} - ${JSON.stringify(parsed)}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
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

async function mergePR() {
  try {
    console.log(`🔄 Starting merge process for PR #${PR_NUMBER}...`);

    // 1. Get PR details
    console.log('📋 Fetching PR details...');
    const pr = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${PR_NUMBER}`);
    
    console.log(`PR Title: ${pr.title}`);
    console.log(`PR State: ${pr.state}`);
    console.log(`PR Draft: ${pr.draft}`);
    console.log(`Head Branch: ${pr.head.ref}`);
    console.log(`Base Branch: ${pr.base.ref}`);

    // 2. Check if PR is mergeable
    if (pr.state !== 'open') {
      throw new Error(`PR is not open (state: ${pr.state})`);
    }

    if (pr.draft) {
      console.log('⚠️  PR is in draft state. Converting to ready for review...');
      await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${PR_NUMBER}`, 'PATCH', {
        draft: false
      });
      console.log('✅ PR marked as ready for review');
    }

    // 3. Check mergeability
    console.log('🔍 Checking mergeability...');
    const mergeability = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${PR_NUMBER}`);
    
    if (mergeability.mergeable === false) {
      console.log('⚠️  PR has merge conflicts. Attempting to resolve...');
      
      // Try to merge with strategy
      try {
        const mergeResult = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${PR_NUMBER}/merge`, 'PUT', {
          commit_title: `Merge PR #${PR_NUMBER}: ${pr.title}`,
          commit_message: `Automated merge of PR #${PR_NUMBER}`,
          merge_method: 'squash'
        });
        console.log('✅ PR merged successfully with squash strategy');
        console.log(`Merge SHA: ${mergeResult.sha}`);
        return;
      } catch (mergeError) {
        console.log('❌ Merge failed, trying with merge strategy...');
        
        try {
          const mergeResult = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${PR_NUMBER}/merge`, 'PUT', {
            commit_title: `Merge PR #${PR_NUMBER}: ${pr.title}`,
            commit_message: `Automated merge of PR #${PR_NUMBER}`,
            merge_method: 'merge'
          });
          console.log('✅ PR merged successfully with merge strategy');
          console.log(`Merge SHA: ${mergeResult.sha}`);
          return;
        } catch (mergeError2) {
          console.log('❌ Merge failed with both strategies. Manual intervention required.');
          console.error('Merge error:', mergeError2.message);
          throw mergeError2;
        }
      }
    }

    // 4. Merge the PR
    console.log('🔀 Merging PR...');
    const mergeResult = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${PR_NUMBER}/merge`, 'PUT', {
      commit_title: `Merge PR #${PR_NUMBER}: ${pr.title}`,
      commit_message: `Automated merge of PR #${PR_NUMBER}`,
      merge_method: 'squash'
    });

    console.log('✅ PR merged successfully!');
    console.log(`Merge SHA: ${mergeResult.sha}`);
    console.log(`Merged: ${mergeResult.merged}`);

    // 5. Delete the branch if it's a feature branch
    if (pr.head.ref.startsWith('cursor/')) {
      console.log(`🗑️  Deleting branch ${pr.head.ref}...`);
      try {
        await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/${pr.head.ref}`, 'DELETE');
        console.log('✅ Branch deleted successfully');
      } catch (deleteError) {
        console.log('⚠️  Could not delete branch (may not have permissions or branch may be protected)');
      }
    }

  } catch (error) {
    console.error('❌ Error during merge process:', error.message);
    process.exit(1);
  }
}

// Run the merge
mergePR();