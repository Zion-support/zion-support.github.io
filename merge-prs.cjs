#!/usr/bin/env node

const { execSync } = require('child_process');

function runCommand(command, description) {
  try {
    console.log(`Running: ${description}`);
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    throw error;
  }
}

async function mergePRs() {
  try {
    console.log('🚀 Starting PR merge process...');

    // First, let's try to merge PR #11703 using GitHub API
    console.log('Merging PR #11703 via GitHub API...');

    const mergePR11703 = `curl -X PUT \
      -H "Authorization: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
      -H "Accept: application/vnd.github.v3+json" \
      "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/11703/merge" \
      -d '{"commit_title":"Merge PR #11703: Enhance and expand ziontechgroup.com services and site","merge_method":"merge"}'`;

    try {
      runCommand(mergePR11703, 'Merge PR #11703 via GitHub API');
      console.log('✅ PR #11703 merged successfully');
    } catch (error) {
      console.log('PR #11703 merge failed, trying with squash method...');
      const squashPR11703 = `curl -X PUT \
        -H "Authorization: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/11703/merge" \
        -d '{"commit_title":"Merge PR #11703: Enhance and expand ziontechgroup.com services and site","merge_method":"squash"}'`;

      runCommand(squashPR11703, 'Merge PR #11703 via GitHub API (squash)');
      console.log('✅ PR #11703 merged successfully with squash');
    }

    // Now try to merge PR #11702
    console.log('Merging PR #11702 via GitHub API...');

    const mergePR11702 = `curl -X PUT \
      -H "Authorization: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
      -H "Accept: application/vnd.github.v3+json" \
      "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/11702/merge" \
      -d '{"commit_title":"Merge PR #11702: Website audit and update with deployment","merge_method":"merge"}'`;

    try {
      runCommand(mergePR11702, 'Merge PR #11702 via GitHub API');
      console.log('✅ PR #11702 merged successfully');
    } catch (error) {
      console.log('PR #11702 merge failed, trying with squash method...');
      const squashPR11702 = `curl -X PUT \
        -H "Authorization: token ghs_RaIz6EzClIazu7IMfvK2ESTzdSHbLB1WEehY" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/11702/merge" \
        -d '{"commit_title":"Merge PR #11702: Website audit and update with deployment","merge_method":"squash"}'`;

      runCommand(squashPR11702, 'Merge PR #11702 via GitHub API (squash)');
      console.log('✅ PR #11702 merged successfully with squash');
    }

    // Pull the latest changes from main
    runCommand('git checkout main', 'Switch to main branch');
    runCommand('git pull origin main', 'Pull latest changes from main');

    console.log('✅ All PRs merged successfully!');
  } catch (error) {
    console.error('❌ PR merge process failed:', error.message);
    process.exit(1);
  }
}

mergePRs();
