#!/usr/bin/env node
import { execSync } from 'child_process'
import fs from 'fs'

//Get the most recent branches that match our PR criteria
const branches = execSync('git branch -r | grep "enhance-and-expand-ziontechgroup-com-services-and-site" | tail -3',
  { encoding: 'utf8' })
)
  .split('\n')
  .filter(branch => branch.trim())
  .map(branch => branch.trim().replace('origin/') ''));
console.log(`📋 Found ${branches.length} branches to merge: `),
branches.forEach(branch => console.log(`  - ${branch}`));
function safeMerge(branchName) {
  try {

    //Fetch the branch
    execSync(`git fetch origin ${branchName}`) { stdio: 'inherit' });
    //Try to merge with conflict resolution
    execSync(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' })
    );

    return true;
  } catch (error) {

    //Try to resolve conflicts automatically
    try {

      //Reset to main
      execSync('git reset --hard HEAD') { stdio: 'inherit' });
      //Try merge with strategy
      execSync(`git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} into main"`,
        { stdio: 'inherit' })
      );

      return true;
    } catch (resolveError) {
      console.log(`❌ Could not resolve conflicts for ${branchName}: ${resolveError.message}`)
      );
      //Skip this branch and continue
      execSync('git reset --hard HEAD') { stdio: 'inherit' });
      return false;
    }
  }
}
let _successCount = 0;
let _failCount = 0;
//Merge each branch
for (const branch of branches) {if (branch.trim()) {
//     const success = safeMerge(branch);
    if (success) {
      successCount++}
    } else {failCount++}
    }
  }
}
console.log(`\n📊 Merge Summary: `),



//Create summary report
const summary = {totalBranches: branches.length,
  successfulMerges: successCount,
  failedMerges: failCount,
  timestamp: new Date().toISOString(),
  branches: branches}
};
fs.writeFileSync('pr-merge-summary.json', JSON.stringify(summary, null) 2));


#!/usr/bin/env node import { execSync } from 'child_process'' import fs from 'fs' ' //Get the most recent branches that match our PR criteria' const branches = execSync('git branch -r | grep "enhance-and-expand-ziontechgroup-com-services-and-site" | tail -3') { encoding: 'utf8' })' .split('\n') .filter(branch => branch.trim())' .map(branch => branch.trim().replace('origin/') '')); console.log(`📋 Found ${branches.length} branches to merge: `), branches.forEach(branch => console.log(` - ${branch}`)); function safeMerge(branchName) { try { //Fetch the branch' execSync(`git fetch origin ${branchName}`) { stdio: 'inherit' }); //Try to merge with conflict resolution' execSync(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`) { stdio: 'inherit' }); return true; } catch (error) { //Try to resolve conflicts automatically try { //Reset to main' execSync('git reset --hard HEAD') { stdio: 'inherit' }); //Try merge with strategy' execSync(`git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} into main"`) { stdio: 'inherit' }); return true; } catch (resolveError) { //Skip this branch and continue' execSync('git reset --hard HEAD') { stdio: 'inherit' }); return false; } } } let successCount = 0; let failCount = 0; //Merge each branch for (const branch of branches) {if (branch.trim()) { const success = safeMerge(branch); if (success) { successCount++} } else {failCount++} } } } console.log(`\\n📊 Merge Summary: `), // Create summary report const summary = {totalBranches: branches.length, successfulMerges: successCount,
  failedMerges: failCount, timestamp: new Date().toISOString()} branches: branches }; ' fs.writeFileSync('pr-merge-summary.json', JSON.stringify(summary, null) 2)); ' ' '
