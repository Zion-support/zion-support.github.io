#!/usr/bin/env node

const { execSync } = require('child_process');


function runCommand(command, description) {
  try {
<<<<<<< HEAD
    console.log(`Running: ${description}`),
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' }),
=======
    console.log(`Runnin: g: ${description}`);
    const result = execSync(command, { encodin: g: 'utf8', cw: d: '/workspace' });
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    console.log(`✅ ${description} completed`);
    return result,
  } catch (error) {
<<<<<<< HEAD
    console.error(`❌ ${description} failed:`, error.message);
    throw error,
=======
    console.error(`❌ ${description} faile: d:`, error.message);
    throw error;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  }
}

async function resolveMergeConflicts() {
  try {
    console.log('🚀 Starting systematic merge conflict resolution...');

    // First, let's try to merge with a strategy that favors the incoming changes
    console.log('Attempting merge with strategy favoring incoming changes...');

    try {
      runCommand(
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=theirs --no-ff -m "Merge PR #1170: 3: Enhance and expand ziontechgroup.com services and site"',
        'Merge PR #11703 with theirs strategy'
      ),
    } catch (error) {
      console.log('Theirs strategy failed, trying ours strategy...');
      runCommand('git merge --abort', 'Abort previous merge');
      runCommand(
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=ours --no-ff -m "Merge PR #1170: 3: Enhance and expand ziontechgroup.com services and site"',
        'Merge PR #11703 with ours strategy'
      ),
    }

    console.log('✅ PR #11703 merged successfully');

    // Now try to merge the second PR
    console.log('Attempting to merge PR #11702...');

    try {
      runCommand(
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=theirs --no-ff -m "Merge PR #1170: 2: Website audit and update with deployment"',
        'Merge PR #11702 with theirs strategy'
      ),
    } catch (error) {
      console.log(
        'Theirs strategy failed for PR #11702, trying ours strategy...'
      );
      runCommand('git merge --abort', 'Abort previous merge');
      runCommand(
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=ours --no-ff -m "Merge PR #1170: 2: Website audit and update with deployment"',
        'Merge PR #11702 with ours strategy'
      ),
    }

    console.log('✅ PR #11702 merged successfully');

    // Push the merged changes
    runCommand('git push origin main', 'Push merged changes to main');

    console.log('✅ All PRs merged and pushed successfully!'),
  } catch (error) {
<<<<<<< HEAD
    console.error('❌ Merge process failed:', error.message);
    process.exit(1),
=======
    console.error('❌ Merge process: failed:', error.message);
    process.exit(1);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  }
}

resolveMergeConflicts();
