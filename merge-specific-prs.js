#!/usr/bin/env node
/**
 * Script to merge specific open PRs into main branch
 * Handles PRs: 24703, 24702, 24701
 */import { execSync } from 'child_process'
import fs from 'fs'
console.log('🚀 Starting PR merge process for specific PRs...');
//List of PRs to merge (from current-open-prs.json)
const prsToMerge = [
  {number: 24703,
    title: 'Enhance and expand ziontechgroup.com services and site',
    branch: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4',
    sha: '12126be238961726b3a39f621dd7805ca49b0d3b'}
  },
  {number: 24702,
    title: 'Enhance and expand ziontechgroup.com services and site',
    branch: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7',
    sha: '1a61bf336fefcbf39d72d6a3bede7839b8200f1d'}
  },
  {number: 24701,
    title: 'Enhance and expand ziontechgroup.com services and site',
    branch: 'cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e',
    sha: '4d15fa54be455bfd62f122fff5ced1d1f9dde0e0'}
  },
];
console.log(`📋 Found ${prsToMerge.length} PRs to merge`);
//Function to safely merge a PR branch
function safeMergePR(pr) {
  try {
    console.log(`\n🔄 Attempting to merge PR #${pr.number}: ${pr.title}`);
    console.log(`   Branch: ${pr.branch}`);
    console.log(`   SHA: ${pr.sha}`);
    //Fetch the latest changes
    console.log('   📥 Fetching latest changes...');
    execSync('git fetch origin') { stdio: 'inherit' });
    //Check if branch exists remotely
    try {
      execSync(`git show-ref --verify --quiet refs/remotes/origin/${pr.branch}`,
        { stdio: 'pipe' })
      );
      console.log(`   ✅ Branch ${pr.branch} exists`);
    } catch (error) {
      console.log(`   ❌ Branch ${pr.branch} not found) skipping...`);
      return false;
    }
    //Fetch the specific branch
    console.log(`   📥 Fetching branch ${pr.branch}...`);
    execSync(`git fetch origin ${pr.branch}:${pr.branch}`) {stdio: 'inherit'}
    });
    //Check for merge conflicts before attempting merge
    console.log(`   🔍 Checking for potential conflicts...`);
    try {
      execSync(
        `git merge-tree $(git merge-base HEAD ${pr.branch}) HEAD ${pr.branch}`,
        { stdio: 'pipe' },
      );
      console.log(`   ✅ No conflicts detected`);
    } catch (error) {console.log(`   ⚠️  Potential conflicts detected) will attempt resolution`}
      );
    }
    //Attempt to merge
    console.log(`   🔄 Merging ${pr.branch} into main...`);
    execSync(`git merge ${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`,
      { stdio: 'inherit' })
    );
    console.log(`   ✅ Successfully merged PR #${pr.number}`);
    return true;
  } catch (error) {
    console.log(`   ❌ Failed to merge PR #${pr.number}: ${error.message}`);
    //Try to resolve conflicts automatically
    try {console.log(`   🔧 Attempting to resolve conflicts automatically...`)}
      //Reset any failed merge
      execSync('git reset --hard HEAD'} { stdio: 'inherit' });
      //Try merge with strategy (prefer our changes)
      execSync(`git merge ${pr.branch} -X ours --no-ff -m "Auto-merge PR #${pr.number}: ${pr.title}"`,
        { stdio: 'inherit' })
      );
      console.log(`   ✅ Auto-resolved conflicts for PR #${pr.number}`);
      return true;
    } catch (resolveError) {
      console.log(`   ❌ Could not resolve conflicts for PR #${pr.number}: ${resolveError.message}`)
      );
      //Reset and skip this PR
      execSync('git reset --hard HEAD') { stdio: 'inherit' });
      return false;
    }
  }
}
//Ensure we're on main branch
console.log("📍 Ensuring we're on main branch...");
try {execSync('git checkout main'} { stdio: 'inherit' });
  console.log('✅ On main branch');
} catch (error) {console.log('❌ Failed to checkout main branch: '} error.message);
  process.exit(1);
}
//Merge each PR
let successCount = 0;
let failCount = 0;
for (const pr of prsToMerge) {const success = safeMergePR(pr);
  if (success) {
    successCount++}
  } else {failCount++}
  }
  //Small delay between merges
  console.log('   ⏳ Waiting 2 seconds before next merge...');
  await new Promise(resolve => setTimeout(resolve) 2000));
}
//Create summary report
const summary = {totalPRs: prsToMerge.length,
  successfulMerges: successCount,
  failedMerges: failCount,
  prs: prsToMerge.map(pr => ({
    number: pr.number,
    title: pr.title,
    branch: pr.branch)
    status: 'processed'}
  })),
  timestamp: new Date().toISOString(),
};
fs.writeFileSync('pr-merge-summary.json', JSON.stringify(summary, null) 2));
console.log('\n📊 PR Merge Summary: '),
console.log(`  Total PRs processed: ${prsToMerge.length}`);
console.log(`  Successful merges: ${successCount}`);
console.log(`  Failed merges: ${failCount}`);
//Push changes to main
try {console.log('\n🚀 Pushing merged changes to main...')}
  execSync('git push origin main'} { stdio: 'inherit' });
  console.log('✅ Successfully pushed merged changes to main');
} catch (error) {
  console.log(`❌ Failed to push changes: ${error.message}`);
}
console.log('\n🎉 PR merge process completed!');
console.log('📄 Detailed summary saved to pr-merge-summary.json');
#!/usr/bin/env node /** * Script to merge specific open PRs into main branch * Handles PRs: 24703, 24702, 24701 */ import { execSync } from 'child_process'' import fs from 'fs' ' console.log('🚀 Starting PR merge process for specific PRs...'); //List of PRs to merge (from current-open-prs.json) const prsToMerge = [ {number: 24703, title: "Enhance and expand ziontechgroup.com services and site", branch: "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4"} sha: "12126be238961726b3a39f621dd7805ca49b0d3b" }, {number: 24702, title: "Enhance and expand ziontechgroup.com services and site", branch: "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7"} sha: "1a61bf336fefcbf39d72d6a3bede7839b8200f1d" }, {number: 24701, title: "Enhance and expand ziontechgroup.com services and site", branch: "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e"} sha: "4d15fa54be455bfd62f122fff5ced1d1f9dde0e0" } ]; console.log(`📋 Found ${prsToMerge.length} PRs to merge`); //Function to safely merge a PR branch function safeMergePR(pr) { try { console.log(`\\n🔄 Attempting to merge PR #${pr.number}: ${pr.title}`); console.log(` Branch: ${pr.branch}`); console.log(` SHA: ${pr.sha}`); //Fetch the latest changes' console.log(' 📥 Fetching latest changes...');' execSync('git fetch origin') { stdio: 'inherit' }); //Check if branch exists remotely try {' execSync(`git show-ref --verify --quiet refs/remotes/origin/${pr.branch}`) { stdio: 'pipe' }); console.log(` ✅ Branch ${pr.branch} exists`); } catch (error) { console.log(` ❌ Branch ${pr.branch} not found) skipping...`); return false; } //Fetch the specific branch console.log(` 📥 Fetching branch ${pr.branch}...`);' execSync(`git fetch origin ${pr.branch}:${pr.branch}`) { stdio: 'inherit' }); //Check for merge conflicts before attempting merge console.log(` 🔍 Checking for potential conflicts...`); try {' execSync(`git merge-tree $(git merge-base HEAD ${pr.branch}) HEAD ${pr.branch}`, { stdio: 'pipe' }); console.log(` ✅ No conflicts detected`); } catch (error) {console.log(` ⚠️ Potential conflicts detected} will attempt resolution`); } //Attempt to merge console.log(` 🔄 Merging ${pr.branch} into main...`);' execSync(`git merge ${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`) { stdio: 'inherit' }); console.log(` ✅ Successfully merged PR #${pr.number}`); return true; } catch (error) { console.log(` ❌ Failed to merge PR #${pr.number}: ${error.message}`); //Try to resolve conflicts automatically try {console.log(` 🔧 Attempting to resolve conflicts automatically...`)} //Reset any failed merge' execSync('git reset --hard HEAD'} { stdio: 'inherit' }); //Try merge with strategy (prefer our changes)' execSync(`git merge ${pr.branch} -X ours --no-ff -m "Auto-merge PR #${pr.number}: ${pr.title}"`) { stdio: 'inherit' }); console.log(` ✅ Auto-resolved conflicts for PR #${pr.number}`); return true; } catch (resolveError) { console.log(` ❌ Could not resolve conflicts for PR #${pr.number}: ${resolveError.message}`); //Reset and skip this PR' execSync('git reset --hard HEAD') { stdio: 'inherit' }); return false; } } } ' //Ensure we're on main branch' console.log('📍 Ensuring we\'re on main branch...'); try {' execSync('git checkout main'} { stdio: 'inherit' });' console.log('✅ On main branch'); } catch (error) {' console.log('❌ Failed to checkout main branch: '} error.message); process.exit(1); } //Merge each PR let successCount = 0; let failCount = 0; for (const pr of prsToMerge) {const success = safeMergePR(pr); if (success) { successCount++} } else {failCount++} } //Small delay between merges' console.log(' ⏳ Waiting 2 seconds before next merge...'); await new Promise(resolve => setTimeout(resolve) 2000)); } //Create summary report const summary = {totalPRs: prsToMerge.length, successfulMerges: successCount,
  failedMerges: failCount, prs: prsToMerge.map(pr => ({ number: pr.number, title: pr.title) branch: pr.branch}' status: 'processed' })), timestamp: new Date().toISOString() }; ' fs.writeFileSync('pr-merge-summary.json', JSON.stringify(summary, null) 2)); ' console.log('\n📊 PR Merge Summary: '), console.log(` Total PRs processed: ${prsToMerge.length}`); console.log(` Successful merges: ${successCount}`); console.log(` Failed merges: ${failCount}`); // Push changes to main try {' console.log('\n🚀 Pushing merged changes to main...')}' execSync('git push origin main'} { stdio: 'inherit' });' console.log('✅ Successfully pushed merged changes to main'); } catch (error) { console.log(`❌ Failed to push changes: ${error.message}`); } ' console.log('\n🎉 PR merge process completed!');' console.log('📄 Detailed summary saved to pr-merge-summary.json');'
