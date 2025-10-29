import { execSync } from 'child_process';
import fs from 'fs';

// Function to get open PRs
function getOpenPRs() {
  try {
    const response = execSync('curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open', { encoding: 'utf8' });
    const prs = JSON.parse(response);
    return prs.map(pr => ({
      number: pr.number,
      title: pr.title,
      head: pr.head.ref,
      base: pr.base.ref,
      mergeable: pr.mergeable,
      mergeable_state: pr.mergeable_state,
      head_sha: pr.head.sha
    }));
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

// Function to merge a PR
function mergePR(prNumber) {
  try {
    console.log(`\n🔄 Attempting to merge PR #${prNumber}...`);
    
    // First, try to merge via GitHub API
    const mergeCommand = `curl -X PUT -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_7M77zj772W4JsZvwwr6IjBhY5m4nnh0h6pZL" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge -d '{"commit_title":"Merge PR #${prNumber}","commit_message":"Automated merge of PR #${prNumber}","merge_method":"merge"}'`;
    
    const result = execSync(mergeCommand, { encoding: 'utf8' });
    const mergeResult = JSON.parse(result);
    
    if (mergeResult.merged) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}: ${mergeResult.message || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to close a PR
function closePR(prNumber) {
  try {
    console.log(`\n🔒 Closing PR #${prNumber}...`);
    
    const closeCommand = `curl -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_7M77zj772W4JsZvwwr6IjBhY5m4nnh0h6pZL" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber} -d '{"state":"closed"}'`;
    
    execSync(closeCommand, { encoding: 'utf8' });
    console.log(`✅ Successfully closed PR #${prNumber}`);
    return true;
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to handle merge conflicts by merging locally
function handleMergeConflict(prNumber, headRef) {
  try {
    console.log(`\n🔧 Handling merge conflict for PR #${prNumber} (${headRef})...`);
    
    // Fetch the latest changes
    execSync('git fetch origin', { stdio: 'inherit' });
    
    // Try to merge the branch
    try {
      execSync(`git merge origin/${headRef} --no-ff -m "Merge PR #${prNumber}: ${headRef}"`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged ${headRef} locally`);
      return true;
    } catch (mergeError) {
      console.log(`⚠️  Merge conflict detected for ${headRef}, attempting to resolve...`);
      
      // Check if there are conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        console.log(`🔧 Resolving conflicts for ${headRef}...`);
        
        // Use our version for conflicts (accept incoming changes)
        execSync('git checkout --theirs .', { stdio: 'inherit' });
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}"`, { stdio: 'inherit' });
        
        console.log(`✅ Resolved conflicts for ${headRef}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error handling merge conflict for PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting PR merge process...\n');
  
  // Get all open PRs
  const prs = getOpenPRs();
  console.log(`📋 Found ${prs.length} open PRs`);
  
  if (prs.length === 0) {
    console.log('✅ No open PRs to merge');
    return;
  }
  
  let mergedCount = 0;
  let failedCount = 0;
  let closedCount = 0;
  
  // Process each PR
  for (const pr of prs) {
    console.log(`\n📝 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Head: ${pr.head} -> Base: ${pr.base}`);
    console.log(`   Mergeable: ${pr.mergeable}, State: ${pr.mergeable_state}`);
    
    if (pr.mergeable === true && pr.mergeable_state === 'clean') {
      // PR is mergeable, try to merge it
      if (mergePR(pr.number)) {
        mergedCount++;
      } else {
        failedCount++;
      }
    } else if (pr.mergeable === false || pr.mergeable_state === 'dirty') {
      // PR has conflicts, try to resolve them
      console.log(`⚠️  PR #${pr.number} has merge conflicts, attempting to resolve...`);
      
      if (handleMergeConflict(pr.number, pr.head)) {
        // If we successfully resolved conflicts locally, try to merge via API again
        if (mergePR(pr.number)) {
          mergedCount++;
        } else {
          // If API merge still fails, close the PR
          closePR(pr.number);
          closedCount++;
        }
      } else {
        // If we can't resolve conflicts, close the PR
        console.log(`❌ Could not resolve conflicts for PR #${pr.number}, closing...`);
        closePR(pr.number);
        closedCount++;
      }
    } else {
      // PR is not ready for merge, close it
      console.log(`❌ PR #${pr.number} is not ready for merge, closing...`);
      closePR(pr.number);
      closedCount++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Push any local changes
  try {
    console.log('\n📤 Pushing local changes...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed changes to main');
  } catch (error) {
    console.log('⚠️  Could not push changes:', error.message);
  }
  
  // Summary
  console.log('\n📊 Summary:');
  console.log(`   ✅ Merged: ${mergedCount} PRs`);
  console.log(`   ❌ Failed: ${failedCount} PRs`);
  console.log(`   🔒 Closed: ${closedCount} PRs`);
  console.log(`   📝 Total processed: ${prs.length} PRs`);
}

main().catch(console.error);