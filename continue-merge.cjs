#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Continue Merging Remaining Branches');

function safeMerge(branchName) {
  try {
    console.log(`Merging: ${branchName}`);
    execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'inherit', timeout: 5000 });
    console.log(`✅ Merged: ${branchName}`);
    return true;
  } catch (error) {
    try {
      console.log(`⚠️  Auto-resolving conflicts for: ${branchName}`);
      execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD" | cut -c4- | xargs -I {} git checkout --ours "{}" 2>/dev/null || true', { stdio: 'pipe' });
      execSync('git add .', { stdio: 'pipe' });
      execSync('git commit --no-edit -m "Auto-resolve conflicts"', { stdio: 'pipe' });
      console.log(`✅ Auto-resolved: ${branchName}`);
      return true;
    } catch (resolveError) {
      try {
        execSync('git merge --abort', { stdio: 'pipe' });
        console.log(`❌ Failed: ${branchName}`);
        return false;
      } catch (abortError) {
        execSync('git reset --hard HEAD', { stdio: 'pipe' });
        console.log(`❌ Failed (reset): ${branchName}`);
        return false;
      }
    }
  }
}

function main() {
  try {
    // Get next batch of branches
    const output = execSync('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -50', { encoding: 'utf8' });
    const branches = output.trim().split('\n').map(branch => branch.replace('origin/', '').trim()).filter(Boolean);
    
    console.log(`Found ${branches.length} branches to merge`);
    
    let merged = 0;
    for (const branch of branches) {
      if (safeMerge(branch)) {
        merged++;
      }
    }
    
    console.log(`\n✅ Merged ${merged}/${branches.length} branches`);
    
    // Push changes
    if (merged > 0) {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('🚀 Pushed to main');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();