#!/usr/bin/env node

const { execSync } = require('child_process');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

function githubAPI(endpoint, method = 'GET', data = null) {
  if (!GITHUB_TOKEN) {
    throw new Error('Missing GITHUB_TOKEN');
  }
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint}`;

  let curlCommand = `curl -s -X ${method} \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Content-Type: application/json" \
    "${url}"`;

  if (data) {
    curlCommand += ` -d '${JSON.stringify(data)}'`;
  }

  try {
    const result = execSync(curlCommand, { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log(`❌ API Error: ${error.message}`);
    return null;
  }
}

function listOpenPRs() {
  console.log('\n🔍 Fetching open pull requests...');
  const prs = githubAPI('/pulls?state=open&per_page=100');

  if (prs && Array.isArray(prs)) {
    console.log(`✅ Found ${prs.length} open pull requests`);
    return prs;
  } else {
    console.log('❌ Failed to fetch pull requests');
    return [];
  }
}

function mergePR(prNumber, title) {
  console.log(`\n🔄 Merging PR #${prNumber}: ${title}`);

  const mergeData = {
    commit_title: `Merge PR #${prNumber}: ${title}`,
    merge_method: 'merge',
  };

  const result = githubAPI(`/pulls/${prNumber}/merge`, 'PUT', mergeData);

  if (result && result.merged) {
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } else {
    console.log(
      `❌ Failed to merge PR #${prNumber}: ${result?.message || 'Unknown error'}`
    );
    return false;
  }
}

function processOpenPRs() {
  const openPRs = listOpenPRs();

  if (openPRs.length === 0) {
    console.log('🎉 No open pull requests found!');
    return;
  }

  let mergedCount = 0;
  let failedCount = 0;

  for (const pr of openPRs) {
    console.log(`\n📋 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Author: ${pr.user.login}`);
    console.log(`   State: ${pr.state}`);
    console.log(`   Head: ${pr.head.ref} -> Base: ${pr.base.ref}`);

    if (mergePR(pr.number, pr.title)) {
      mergedCount++;
    } else {
      failedCount++;
    }
  }

  console.log(`\n📊 PR Processing Summary:`);
  console.log(`✅ Successfully merged: ${mergedCount} PRs`);
  console.log(`❌ Failed to process: ${failedCount} PRs`);
}

processOpenPRs();
