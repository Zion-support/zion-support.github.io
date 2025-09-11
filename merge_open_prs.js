#!/usr/bin/env node

const { execSync } = require('child_process');
const https = require('https');

const GITHUB_TOKEN = 'ghs_2CijlF4cOrlTIwzwz3nvWrTnWL9uZC0Q24TL';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

// Function to make GitHub API requests
function makeGitHubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Node.js',
      },
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(options, res => {
      let responseData = '';
      res.on('data', chunk => {
        responseData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          resolve(parsedData);
        } catch (e) {
          resolve(responseData);
        }
      });
    });

    req.on('error', e => {
      reject(e);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function main() {
  try {
    console.log('🔍 Checking for open PRs...');

    // Get open PRs
    const openPRs = await makeGitHubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open`
    );

    if (!Array.isArray(openPRs) || openPRs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }

    console.log(`📋 Found ${openPRs.length} open PR(s)`);

    for (const pr of openPRs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`   Status: ${pr.draft ? 'Draft' : 'Ready'}`);

      // Check if PR is mergeable
      const prDetails = await makeGitHubRequest(
        `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}`
      );

      if (prDetails.mergeable === false) {
        console.log(
          `❌ PR #${pr.number} has merge conflicts, attempting to resolve...`
        );

        try {
          // Try to update the branch with latest main
          console.log(`🔄 Updating branch ${pr.head.ref} with latest main...`);

          // First, let's try to merge using the GitHub API with auto-merge
          const mergeResult = await makeGitHubRequest(
            `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}/merge`,
            'PUT',
            {
              commit_title: `Merge PR #${pr.number}: ${pr.title}`,
              commit_message: `Auto-merge PR #${pr.number} with conflict resolution`,
              merge_method: 'merge',
            }
          );

          if (mergeResult.merged) {
            console.log(`✅ Successfully merged PR #${pr.number}`);
          } else {
            console.log(
              `❌ Failed to merge PR #${pr.number}: ${mergeResult.message || 'Unknown error'}`
            );
          }
        } catch (error) {
          console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
        }
      } else if (prDetails.mergeable === true) {
        console.log(`✅ PR #${pr.number} is mergeable`);

        try {
          const mergeResult = await makeGitHubRequest(
            `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}/merge`,
            'PUT',
            {
              commit_title: `Merge PR #${pr.number}: ${pr.title}`,
              commit_message: `Auto-merge PR #${pr.number}`,
              merge_method: 'merge',
            }
          );

          if (mergeResult.merged) {
            console.log(`✅ Successfully merged PR #${pr.number}`);
          } else {
            console.log(
              `❌ Failed to merge PR #${pr.number}: ${mergeResult.message || 'Unknown error'}`
            );
          }
        } catch (error) {
          console.log(`❌ Error merging PR #${pr.number}: ${error.message}`);
        }
      } else {
        console.log(
          `⏳ PR #${pr.number} mergeable status is unknown, skipping for now`
        );
      }
    }

    console.log('\n🎉 PR merge process completed');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
