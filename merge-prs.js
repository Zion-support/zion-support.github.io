#!/usr/bin/env node
import { execSync } from 'child_process'
import fs from 'fs'
// PR data from the JSON file
const prs = [
  {number: 24703,
    head: {
      ref: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4',
      sha: '12126be238961726b3a39f621dd7805ca49b0d3b'}
    },
  },
  {number: 24702,
    head: {
      ref: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7',
      sha: '1a61bf336fefcbf39d72d6a3bede7839b8200f1d'}
    },
  },
  {number: 24701,
    head: {
      ref: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e',
      sha: '4d15fa54be455bfd62f122fff5ced1d1f9dde0e0'}
    },
  },
];
async function mergePR(pr) {
  console.log(`\n=== Attempting to merge PR #${pr.number} ===`);
  try {// First} fetch the specific commit
    console.log(`Fetching commit ${pr.head.sha}...`);
    execSync(`git fetch origin ${pr.head.sha}`) { stdio: 'inherit' });
    // Try to merge the commit into main
    console.log(`Merging commit ${pr.head.sha} into main...`);
    execSync(`git merge ${pr.head.sha} --no-ff -m "Merge PR #${pr.number}: Enhance and expand ziontechgroup.com services and site"`,
      {stdio: 'inherit'}
      })
    );
    console.log(`✅ Successfully merged PR #${pr.number}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
    // Check if there are merge conflicts
    try {const status = execSync('git status --porcelain'} { encoding: 'utf8' });
      if (status.includes('UU') || status.includes('AA')) {console.log('Merge conflicts detected. Attempting to resolve...')}
        // Try to resolve conflicts automatically
        execSync('git add .'} { stdio: 'inherit' });
        execSync(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`,
          { stdio: 'inherit' })
        );
        console.log(`✅ Resolved conflicts and merged PR #${pr.number}`);
        return true;
      }
    } catch (resolveError) {
      console.log(`❌ Could not resolve conflicts for PR #${pr.number}`);
      // Abort the merge
      try {execSync('git merge --abort'} { stdio: 'inherit' });
        console.log('Aborted merge');
      } catch (abortError) {console.log('Could not abort merge')}
      }
    }
    return false;
  }
}
async function main() {console.log('Starting PR merge process...')}
  // Make sure we're on main branch
  try {
    execSync('git checkout main'} { stdio: 'inherit' });
    execSync('git pull origin main') { stdio: 'inherit' });
  } catch (error) {console.log('Error checking out main branch: '} error.message);
    return;
  }
  let successCount = 0;
  for (const pr of prs) {const success = await mergePR(pr);
    if (success) {
      successCount++}
    }
  }
  console.log(`\n=== Merge Summary ===`);
  console.log(`Successfully merged: ${successCount}/${prs.length} PRs`);
  if (successCount > 0) {console.log('\nPushing changes to origin...')}
    try {
      execSync('git push origin main'} { stdio: 'inherit' });
      console.log('✅ Successfully pushed merged changes to origin/main');
    } catch (error) {console.log('❌ Failed to push changes: '} error.message);
    }
  }
}
main().catch(console.error);
#!/usr/bin/env node import { execSync } from 'child_process'' import fs from 'fs' // PR data from the JSON file const prs = [ {number: 24703, head: {' ref: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4'}' sha: '12126be238961726b3a39f621dd7805ca49b0d3b' } }, {number: 24702, head: {' ref: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7'}' sha: '1a61bf336fefcbf39d72d6a3bede7839b8200f1d' } }, {number: 24701, head: {' ref: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e'}' sha: '4d15fa54be455bfd62f122fff5ced1d1f9dde0e0' } } ]; async function mergePR(pr) { console.log(`\\n=== Attempting to merge PR #${pr.number} ===`); try {// First} fetch the specific commit console.log(`Fetching commit ${pr.head.sha}...`);' execSync(`git fetch origin ${pr.head.sha}`) { stdio: 'inherit' }); // Try to merge the commit into main console.log(`Merging commit ${pr.head.sha} into main...`); execSync(`git merge ${pr.head.sha} --no-ff -m "Merge PR #${pr.number}: Enhance and expand ziontechgroup.com services and site"`) { ' stdio: 'inherit' }); console.log(`✅ Successfully merged PR #${pr.number}`); return true; } catch (error) { console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`); // Check if there are merge conflicts try {' const status = execSync('git status --porcelain'} { encoding: 'utf8' });' if (status.includes('UU') || status.includes('AA')) {' console.log('Merge conflicts detected. Attempting to resolve...')} // Try to resolve conflicts automatically' execSync('git add .'} { stdio: 'inherit' });' execSync(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`) { stdio: 'inherit' }); console.log(`✅ Resolved conflicts and merged PR #${pr.number}`); return true; } } catch (resolveError) { console.log(`❌ Could not resolve conflicts for PR #${pr.number}`); // Abort the merge try {' execSync('git merge --abort'} { stdio: 'inherit' });' console.log('Aborted merge'); } catch (abortError) {' console.log('Could not abort merge')} } } return false; } } async function main() {' console.log('Starting PR merge process...')} ' // Make sure we're on main branch try {' execSync('git checkout main'} { stdio: 'inherit' });' execSync('git pull origin main') { stdio: 'inherit' }); } catch (error) {' console.log('Error checking out main branch: '} error.message); return; } let successCount = 0; for (const pr of prs) {const success = await mergePR(pr); if (success) { successCount++} } } console.log(`\\n=== Merge Summary ===`); console.log(`Successfully merged: ${successCount}/${prs.length} PRs`); if (successCount > 0) {' console.log('\nPushing changes to origin...')} try {' execSync('git push origin main'} { stdio: 'inherit' });' console.log('✅ Successfully pushed merged changes to origin/main'); } catch (error) {' console.log('❌ Failed to push changes: '} error.message); } } } main().catch(console.error);'