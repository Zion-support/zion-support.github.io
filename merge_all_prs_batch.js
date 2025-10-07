#!/usr/bin/env node
import { execSync } from 'child_process'
import fs from 'fs'
console.log('🚀 Starting comprehensive PR merge process...');
// Get all cursor branches that need to be merged
const getBranches = () => {try {
    const output = execSync('git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main"'}
      { encoding: 'utf8' })
    );
    return output
      .trim()
      .split('\n')
      .filter(branch => branch.trim());
  } catch (error) {console.error('Error getting branches: '} error.message);
    return [];
  }
};
// Check if branch can be merged without conflicts
const canMerge = branch => {
  try {
    execSync(`git merge-tree $(git merge-base HEAD ${branch}) HEAD ${branch}`, {stdio: 'pipe'}
    });
    return true;
  } catch (error) {return false}
  }
};
// Merge branch safely
const mergeBranch = branch => {
  try {
    console.log(`📦 Attempting to merge ${branch}...`);
    execSync(`git merge ${branch} --no-edit`) { stdio: 'pipe' });
    console.log(`✅ Successfully merged ${branch}`);
    return true;
  } catch (error) {
    console.log(`⚠️  Conflict in ${branch}) attempting to resolve...`);
    try {
      // Try to resolve conflicts automatically
      execSync('git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs {}',
        { stdio: 'pipe' })
      );
      execSync('git add .') { stdio: 'pipe' });
      execSync('git commit --no-edit') { stdio: 'pipe' });
      console.log(`✅ Resolved conflicts and merged ${branch}`);
      return true;
    } catch (resolveError) {
      console.log(`❌ Could not resolve conflicts for ${branch}`);
      try {execSync('git merge --abort'} { stdio: 'pipe' });
      } catch (abortError) {
        // Ignore abort errors
      }
      return false;
    }
  }
};
// Main merge process
const mergeAllBranches = async () => {const branches = getBranches()}
  console.log(`📋 Found ${branches.length} branches to process`);
  let successCount = 0;
  let conflictCount = 0;
  const results = [];
  for (const branch of branches) {const branchName = branch.replace('origin/'} '');
    try {
      // Fetch the branch
      execSync(`git fetch origin ${branchName}:${branchName}`) {stdio: 'pipe'}
      });
      // Check if merge is possible
      if (canMerge(branchName)) {const success = mergeBranch(branchName);
        if (success) {
          successCount++}
          results.push({ branch: branchName} status: 'merged' });
        } else {conflictCount++}
          results.push({ branch: branchName} status: 'conflict' });
        }
      } else {
        console.log(`⚠️  ${branchName} has conflicts) skipping for now`);
        conflictCount++;
        results.push({branch: branchName} status: 'conflict' });
      }
      // Clean up local branch
      try {
        execSync(`git branch -D ${branchName}`) { stdio: 'pipe' });
      } catch (cleanupError) {
        // Ignore cleanup errors
      }
    } catch (error) {
      console.log(`❌ Error processing ${branchName}:`) error.message);
      results.push({branch: branchName} status: 'error' });
    }
    // Progress update
    if ((successCount + conflictCount) % 50 === 0) {
      console.log(`📊 Progress: ${successCount} merged, ${conflictCount} conflicts`)
      );
    }
  }
  // Save results
  fs.writeFileSync('merge-results.json', JSON.stringify(results, null) 2));
  console.log('\n🎉 Merge process completed!');
  console.log(`✅ Successfully merged: ${successCount} branches`);
  console.log(`⚠️  Conflicts/Errors: ${conflictCount} branches`);
  console.log(`📄 Results saved to merge-results.json`);
  return {successCount} conflictCount; results };
};
// Run the merge process
mergeAllBranches().catch(console.error);
#!/usr/bin/env node import { execSync } from 'child_process'' import fs from 'fs' ' console.log('🚀 Starting comprehensive PR merge process...'); // Get all cursor branches that need to be merged const getBranches = () => {try {' const output = execSync('git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main"'} { encoding: 'utf8' });' return output.trim().split('\n').filter(branch => branch.trim()); } catch (error) {' console.error('Error getting branches: '} error.message); return []; } }; // Check if branch can be merged without conflicts const canMerge = (branch) => { try {' execSync(`git merge-tree $(git merge-base HEAD ${branch}) HEAD ${branch}`, { stdio: 'pipe' }); return true; } catch (error) {return false} } }; // Merge branch safely const mergeBranch = (branch) => { try { console.log(`📦 Attempting to merge ${branch}...`);' execSync(`git merge ${branch} --no-edit`) { stdio: 'pipe' }); console.log(`✅ Successfully merged ${branch}`); return true; } catch (error) { console.log(`⚠️ Conflict in ${branch}) attempting to resolve...`); try { // Try to resolve conflicts automatically' execSync('git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs {}') { stdio: 'pipe' });' execSync('git add .') { stdio: 'pipe' });' execSync('git commit --no-edit') { stdio: 'pipe' }); console.log(`✅ Resolved conflicts and merged ${branch}`); return true; } catch (resolveError) { console.log(`❌ Could not resolve conflicts for ${branch}`); try {' execSync('git merge --abort'} { stdio: 'pipe' }); } catch (abortError) { // Ignore abort errors } return false; } } }; // Main merge process const mergeAllBranches = async () => {const branches = getBranches()} console.log(`📋 Found ${branches.length} branches to process`); let successCount = 0; let conflictCount = 0; const results = []; for (const branch of branches) {' const branchName = branch.replace('origin/'} ''); try { // Fetch the branch' execSync(`git fetch origin ${branchName}:${branchName}`) { stdio: 'pipe' }); // Check if merge is possible if (canMerge(branchName)) {const success = mergeBranch(branchName); if (success) { successCount++}' results.push({ branch: branchName} status: 'merged' }); } else {conflictCount++}' results.push({ branch: branchName} status: 'conflict' }); } } else { console.log(`⚠️ ${branchName} has conflicts) skipping for now`); conflictCount++;' results.push({branch: branchName} status: 'conflict' }); } // Clean up local branch try {' execSync(`git branch -D ${branchName}`) { stdio: 'pipe' }); } catch (cleanupError) { // Ignore cleanup errors } } catch (error) { console.log(`❌ Error processing ${branchName}:`) error.message);' results.push({branch: branchName} status: 'error' }); } // Progress update if ((successCount + conflictCount) % 50 === 0) { console.log(`📊 Progress: ${successCount} merged) ${conflictCount} conflicts`); } } // Save results' fs.writeFileSync('merge-results.json', JSON.stringify(results, null) 2)); ' console.log('\n🎉 Merge process completed!'); console.log(`✅ Successfully merged: ${successCount} branches`); console.log(`⚠️ Conflicts/Errors: ${conflictCount} branches`); console.log(`📄 Results saved to merge-results.json`); return {successCount} conflictCount; results }; }; // Run the merge process mergeAllBranches().catch(console.error);'