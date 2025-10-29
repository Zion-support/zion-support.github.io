import { execSync } from 'child_process';

// Get all open PRs
function getOpenPRs() {
  try {
    const output = execSync('gh pr list --state open --json number,headRefName,title,mergeable --limit 100', { encoding: 'utf8' });
    return JSON.parse(output);
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

async function mergePRs() {
  console.log('🔍 Fetching open PRs...\n');
  const prs = getOpenPRs();
  
  console.log(`Found ${prs.length} open PRs\n`);
  
  // Ensure we're on main and up to date
  try {
    execSync('git checkout main', { stdio: 'pipe' });
    execSync('git pull origin main', { stdio: 'pipe' });
  } catch (error) {
    console.error('Error updating main:', error.message);
    process.exit(1);
  }
  
  let mergedCount = 0;
  let conflictCount = 0;
  let failedCount = 0;
  let skippedCount = 0;
  
  for (const pr of prs) {
    console.log(`\n📋 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Branch: ${pr.headRefName}`);
    
    // Use gh pr checkout to get the PR branch
    try {
      console.log(`   Checking out PR branch...`);
      execSync(`gh pr checkout ${pr.number}`, { stdio: 'pipe' });
      
      // Update main and merge
      execSync('git fetch origin main', { stdio: 'pipe' });
      
      // Try to merge with main
      try {
        execSync('git merge origin/main --no-edit', { stdio: 'inherit' });
        console.log(`   ✅ Successfully merged with main`);
        
        // Push the updated PR branch
        execSync('git push origin HEAD', { stdio: 'pipe' });
        console.log(`   ✅ Pushed updated branch`);
        
        // Go back to main and merge the PR
        execSync('git checkout main', { stdio: 'pipe' });
        execSync(`git merge ${pr.headRefName} --no-edit`, { stdio: 'pipe' });
        console.log(`   ✅ Merged into main`);
        
        mergedCount++;
      } catch (mergeError) {
        // Check for conflicts
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        
        if (status.match(/^(UU|AA|DD)/m)) {
          console.log(`   ⚠️  Conflicts detected, resolving with ours strategy (keep PR changes)...`);
          
          try {
            // Keep the PR branch changes
            execSync('git checkout --theirs .', { stdio: 'pipe' });
            execSync('git add .', { stdio: 'pipe' });
            execSync(`git commit -m "Resolve merge conflicts: PR #${pr.number}" --no-edit`, { stdio: 'pipe' });
            
            // Push the resolved branch
            execSync('git push origin HEAD', { stdio: 'pipe' });
            
            // Go back to main and merge
            execSync('git checkout main', { stdio: 'pipe' });
            execSync(`git merge ${pr.headRefName} --no-edit`, { stdio: 'pipe' });
            
            console.log(`   ✅ Resolved conflicts and merged PR #${pr.number}`);
            mergedCount++;
            conflictCount++;
          } catch (resolveError) {
            console.error(`   ❌ Failed to resolve conflicts: ${resolveError.message}`);
            execSync('git merge --abort', { stdio: 'pipe' }).catch(() => {});
            execSync('git checkout main', { stdio: 'pipe' });
            failedCount++;
          }
        } else {
          console.error(`   ❌ Merge failed: ${mergeError.message}`);
          execSync('git merge --abort', { stdio: 'pipe' }).catch(() => {});
          execSync('git checkout main', { stdio: 'pipe' });
          failedCount++;
        }
      }
    } catch (error) {
      console.error(`   ❌ Error processing PR #${pr.number}: ${error.message}`);
      // Make sure we're back on main
      execSync('git checkout main', { stdio: 'pipe' }).catch(() => {});
      failedCount++;
    }
  }
  
  // Ensure we're on main
  execSync('git checkout main', { stdio: 'pipe' });
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Merged successfully: ${mergedCount}`);
  console.log(`   ⚠️  Conflicts resolved: ${conflictCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  
  // Push to main
  console.log('\n🚀 Pushing changes to main...');
  try {
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed to main');
  } catch (error) {
    console.error('❌ Failed to push to main:', error.message);
    // Don't exit, just report
  }
}

mergePRs().catch(console.error);
