#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔧 Closing outdated PRs...');

const prNumbers = [12077, 12076, 12075, 12074, 12073, 12072, 12071, 12070, 12069, 12068, 12067, 12066, 12065, 12063];

for (const prNumber of prNumbers) {
  try {
    console.log(`📝 Closing PR #${prNumber}...`);
    execSync(`gh pr close ${prNumber} --comment "This PR has been superseded by the latest automation improvements that have been merged into main."`, { stdio: 'pipe' });
    console.log(`✅ Closed PR #${prNumber}`);
  } catch (error) {
    console.log(`⚠️  Could not close PR #${prNumber}: ${error.message}`);
  }
}

console.log('🎉 Finished closing outdated PRs!');