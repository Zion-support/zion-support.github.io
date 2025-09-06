#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔧 Closing outdated PRs...');

const prNumbers = [12068, 12066];

for (const prNumber of prNumbers) {
  console.log(`📝 Closing PR #${prNumber}...`);
  try {
    // Try using gh CLI first
    execSync(`gh pr close ${prNumber} --comment "This PR has been superseded by the latest automation improvements that have been merged into main."`, { stdio: 'pipe' });
    console.log(`✅ Closed PR #${prNumber} using gh CLI`);
  } catch (error) {
    console.log(`⚠️  gh CLI not available, trying GitHub API...`);
    try {
      // Fallback to GitHub API
      const response = execSync(`curl -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${process.env.GITHUB_TOKEN || 'your-token'}" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}" -d '{"state":"closed"}'`, { stdio: 'pipe' });
      console.log(`✅ Closed PR #${prNumber} using GitHub API`);
    } catch (apiError) {
      console.warn(`⚠️  Could not close PR #${prNumber}: ${apiError.message}`);
    }
  }
}

console.log('🎉 Finished closing outdated PRs!');