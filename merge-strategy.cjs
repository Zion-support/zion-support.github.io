#!/usr/bin/env node;
;
const { execSync } = require('child_process');
const fs = require('fs');
<<<<<<< HEAD
;
function runCommand(command, description) {;
  try {;
    console.log(`Runnin:g:${description}`);
    const result = execSync(command, { encodin:g:'utf8', cw:d:'/workspace' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {;
    console.error(`❌ ${description} faile:d:`, error.message);
=======

function runCommand(command, description) {
  try {
    console.log(`Running: ${description}`);
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    throw error;
  }
}
;
async function resolveMergeConflicts() {;
  try {;
    console.log('🚀 Starting systematic merge conflict resolution...');
;
    // First, let's try to merge with a strategy that favors the incoming changes;
    console.log('Attempting merge with strategy favoring incoming changes...');
<<<<<<< HEAD
;
    try {;
      runCommand(;
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=theirs --no-ff -m "Merge PR #1170:3:Enhance and expand ziontechgroup.com services and site"',;
        'Merge PR #11703 with theirs strategy';
=======

    try {
      runCommand(
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=theirs --no-ff -m "Merge PR #11703: Enhance and expand ziontechgroup.com services and site"',
        'Merge PR #11703 with theirs strategy'
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      );
    } catch (error) {;
      console.log('Theirs strategy failed, trying ours strategy...');
      runCommand('git merge --abort', 'Abort previous merge');
<<<<<<< HEAD
      runCommand(;
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=ours --no-ff -m "Merge PR #1170:3:Enhance and expand ziontechgroup.com services and site"',;
        'Merge PR #11703 with ours strategy';
=======
      runCommand(
        'git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-affd --strategy-option=ours --no-ff -m "Merge PR #11703: Enhance and expand ziontechgroup.com services and site"',
        'Merge PR #11703 with ours strategy'
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      );
    }
;
    console.log('✅ PR #11703 merged successfully');
;
    // Now try to merge the second PR;
    console.log('Attempting to merge PR #11702...');
<<<<<<< HEAD
;
    try {;
      runCommand(;
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=theirs --no-ff -m "Merge PR #1170:2:Website audit and update with deployment"',;
        'Merge PR #11702 with theirs strategy';
=======

    try {
      runCommand(
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=theirs --no-ff -m "Merge PR #11702: Website audit and update with deployment"',
        'Merge PR #11702 with theirs strategy'
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      );
    } catch (error) {;
      console.log(;
        'Theirs strategy failed for PR #11702, trying ours strategy...';
      );
      runCommand('git merge --abort', 'Abort previous merge');
<<<<<<< HEAD
      runCommand(;
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=ours --no-ff -m "Merge PR #1170:2:Website audit and update with deployment"',;
        'Merge PR #11702 with ours strategy';
=======
      runCommand(
        'git merge origin/cursor/website-audit-and-update-with-deployment-58b1 --strategy-option=ours --no-ff -m "Merge PR #11702: Website audit and update with deployment"',
        'Merge PR #11702 with ours strategy'
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      );
    }
;
    console.log('✅ PR #11702 merged successfully');
;
    // Push the merged changes;
    runCommand('git push origin main', 'Push merged changes to main');
;
    console.log('✅ All PRs merged and pushed successfully!');
<<<<<<< HEAD
  } catch (error) {;
    console.error('❌ Merge process:failed:', error.message);
=======
  } catch (error) {
    console.error('❌ Merge process failed:', error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    process.exit(1);
  }
}
;
resolveMergeConflicts();
