import { execSync } from 'child_process';

// Get all open PRs using gh CLI
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
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });
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
    console.log(`   Mergeable: ${pr.mergeable || 'unknown'}`);
    
    // Try to merge via GitHub API first (cleanest)
    try {
      console.log(`   Attempting to merge via GitHub API...`);
      execSync(`gh pr merge ${pr.number} --merge --delete-branch`, { stdio: 'inherit' });
      console.log(`   ✅ Successfully merged PR #${pr.number}`);
      mergedCount++;
      
      // Update local main
      execSync('git pull origin main', { stdio: 'pipe' });
      continue;
    } catch (apiError) {
      console.log(`   ⚠️  GitHub API merge failed, trying local merge...`);
    }
    
    // Fallback: local merge
    try {
      // Fetch the branch
      execSync(`git fetch origin ${pr.headRefName}`, { stdio: 'pipe' });
      
      // Try to merge
      try {
        execSync(`git merge origin/${pr.headRefName} --no-edit`, { stdio: 'inherit' });
        console.log(`   ✅ Successfully merged ${pr.headRefName} locally`);
        mergedCount++;
      } catch (mergeError) {
        // Check for conflicts
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        
        if (status.match(/^(UU|AA|DD)/m)) {
          console.log(`   ⚠️  Conflicts detected, resolving with ours strategy...`);
          
          try {
            execSync('git checkout --ours .', { stdio: 'pipe' });
            execSync('git add .', { stdio: 'pipe' });
            execSync(`git commit -m "Resolve merge conflicts: PR #${pr.number} - ${pr.headRefName}" --no-edit`, { stdio: 'inherit' });
            console.log(`   ✅ Resolved conflicts for PR #${pr.number}`);
            mergedCount++;
            conflictCount++;
          } catch (resolveError) {
            console.error(`   ❌ Failed to resolve conflicts for PR #${pr.number}`);
            execSync('git merge --abort', { stdio: 'pipe' });
            failedCount++;
          }
        } else if (mergeError.message.includes('Already up to date')) {
          console.log(`   ℹ️  Already up to date`);
          skippedCount++;
        } else {
          console.error(`   ❌ Merge failed: ${mergeError.message}`);
          execSync('git merge --abort', { stdio: 'pipe' }).catch(() => {});
          failedCount++;
        }
      }
    } catch (error) {
      console.error(`   ❌ Error processing PR #${pr.number}: ${error.message}`);
      failedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Merged successfully: ${mergedCount}`);
  console.log(`   ⚠️  Conflicts resolved: ${conflictCount}`);
  console.log(`   ⏭️  Skipped (up to date): ${skippedCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  
  // Push to main if we made any local changes
  if (mergedCount > skippedCount || conflictCount > 0) {
    console.log('\n🚀 Pushing changes to main...');
    try {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✅ Successfully pushed to main');
    } catch (error) {
      console.error('❌ Failed to push to main:', error.message);
      process.exit(1);
    }
  } else {
    console.log('\nℹ️  No local changes to push');
  }
}

mergePRs().catch(console.error);
