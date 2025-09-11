#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧠 Starting smart merge strategy...\n');

// Get recent branches (last 30 days)
function getRecentBranches() {
  try {
    const output = execSync(
      'git for-each-ref --sort=-committerdate refs/remotes/origin --format="%(refname:short) %(committerdate:iso)"',
      { encoding: 'utf8' }
    );
    const branches = output
      .split('\n')
      .filter(line => line.trim() && !line.includes('origin/main'))
      .map(line => {
        const [branch, date] = line.split(' ');
        return { branch: branch.replace('origin/', ''), date: new Date(date) };
      })
      .filter(({ date }) => {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return date > thirtyDaysAgo;
      })
      .sort((a, b) => b.date - a.date);

    return branches;
  } catch (error) {
    console.error('Error getting recent branches:', error.message);
    return [];
  }
}

// Check if branch has conflicts with main
function checkConflicts(branch) {
  try {
    execSync(
      `git merge-tree $(git merge-base main origin/${branch}) main origin/${branch}`,
      { stdio: 'pipe' }
    );
    return { hasConflicts: false };
  } catch (error) {
    return { hasConflicts: true, error: error.message };
  }
}

// Safe merge with conflict resolution
function safeMerge(branch) {
  try {
    console.log(`\n🔄 Processing branch: ${branch}`);

    // Create a backup of current main
    const backupBranch = `backup-main-${Date.now()}`;
    execSync(`git branch ${backupBranch}`, { stdio: 'pipe' });

    // Checkout the branch to merge
    execSync(`git checkout -b temp-merge-${branch} origin/${branch}`, {
      stdio: 'pipe',
    });

    // Try to merge with main
    execSync(`git checkout main`, { stdio: 'pipe' });

    try {
      execSync(
        `git merge temp-merge-${branch} --no-ff -m "Merge branch ${branch} into main"`,
        { stdio: 'pipe' }
      );
      console.log(`✅ Successfully merged: ${branch}`);

      // Clean up
      execSync(`git branch -D temp-merge-${branch}`, { stdio: 'pipe' });
      execSync(`git branch -D ${backupBranch}`, { stdio: 'pipe' });

      return { success: true, branch };
    } catch (mergeError) {
      console.log(`⚠️  Merge conflict detected for: ${branch}`);

      // Restore from backup
      execSync(`git reset --hard ${backupBranch}`, { stdio: 'pipe' });
      execSync(`git branch -D temp-merge-${branch}`, { stdio: 'pipe' });
      execSync(`git branch -D ${backupBranch}`, { stdio: 'pipe' });

      return {
        success: false,
        branch,
        error: 'Merge conflict',
        conflict: true,
      };
    }
  } catch (error) {
    console.log(`❌ Error processing ${branch}: ${error.message}`);
    return { success: false, branch, error: error.message };
  }
}

// Main execution
async function main() {
  console.log('📊 Analyzing recent branches...\n');

  const recentBranches = getRecentBranches();
  console.log(
    `Found ${recentBranches.length} recent branches (last 30 days)\n`
  );

  if (recentBranches.length === 0) {
    console.log('No recent branches found. Checking all branches...\n');
    // Fallback to all branches if no recent ones
    const allBranches = execSync('git branch -r', { encoding: 'utf8' })
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
      .map(line => line.replace('origin/', ''))
      .slice(0, 20); // Limit to first 20 branches

    recentBranches.push(
      ...allBranches.map(branch => ({ branch, date: new Date() }))
    );
  }

  const results = {
    successful: [],
    failed: [],
    conflicts: [],
    total: recentBranches.length,
  };

  // Process branches one by one
  for (const { branch } of recentBranches.slice(0, 10)) {
    // Limit to 10 most recent
    const result = safeMerge(branch);

    if (result.success) {
      results.successful.push(result.branch);
    } else if (result.conflict) {
      results.conflicts.push({ branch: result.branch, error: result.error });
    } else {
      results.failed.push({ branch: result.branch, error: result.error });
    }

    // Small delay between merges
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Generate report
  console.log('\n📊 SMART MERGE SUMMARY');
  console.log('======================');
  console.log(`Total branches processed: ${results.total}`);
  console.log(`Successfully merged: ${results.successful.length}`);
  console.log(`Conflicts detected: ${results.conflicts.length}`);
  console.log(`Failed to merge: ${results.failed.length}`);

  if (results.successful.length > 0) {
    console.log('\n✅ Successfully merged branches:');
    results.successful.forEach(branch => console.log(`  - ${branch}`));
  }

  if (results.conflicts.length > 0) {
    console.log('\n⚠️  Branches with conflicts (need manual resolution):');
    results.conflicts.forEach(({ branch }) => console.log(`  - ${branch}`));
  }

  if (results.failed.length > 0) {
    console.log('\n❌ Failed to merge branches:');
    results.failed.forEach(({ branch, error }) =>
      console.log(`  - ${branch}: ${error}`)
    );
  }

  // Save results
  fs.writeFileSync(
    'smart-merge-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n💾 Results saved to smart-merge-results.json');

  // Push changes if we have successful merges
  if (results.successful.length > 0) {
    try {
      console.log('\n🚀 Pushing changes to remote...');
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✅ Successfully pushed to remote');
    } catch (error) {
      console.log('❌ Failed to push to remote:', error.message);
    }
  }
}

main().catch(console.error);
