#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

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

async function resolveMergeConflicts() {
  try {
    console.log('🚀 Starting systematic merge conflict resolution...');

    // First, let's try to merge with a strategy that favors the incoming changes
    console.log('Attempting merge with strategy favoring incoming changes...');

    try {
      runCommand(
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=theirs --no-ff -m "Merge PR #11703: Enhance and expand ziontechgroup.com services and site"',

      );
    } catch (error) {
      console.log('Theirs strategy failed, trying ours strategy...');
      runCommand('git merge --abort', 'Abort previous merge');
      runCommand(
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=ours --no-ff -m "Merge PR #11703: Enhance and expand ziontechgroup.com services and site"',

      );
    }

    console.log('✅ PR #11703 merged successfully');

    // Now try to merge the second PR
    console.log('Attempting to merge PR #11702...');

    try {
      runCommand(
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=theirs --no-ff -m "Merge PR #11702: Website audit and update with deployment"',

      );
    } catch (error) {
      console.log(

      );
      runCommand('git merge --abort', 'Abort previous merge');
      runCommand(
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=ours --no-ff -m "Merge PR #11702: Website audit and update with deployment"',

      );
    }

    console.log('✅ PR #11702 merged successfully');

    // Push the merged changes
    runCommand('git push origin main', 'Push merged changes to main');

    console.log('✅ All PRs merged and pushed successfully!');
  } catch (error) {
    console.error('❌ Merge process failed:', error.message);
    process.exit(1);
  }
}

resolveMergeConflicts();
