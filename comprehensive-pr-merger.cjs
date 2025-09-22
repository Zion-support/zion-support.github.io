#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Comprehensive PR Merger...\n');

// Configuration
const GITHUB_REPO = 'Zion-Holdings/zion.app';
const MAX_RETRIES = 3;
const CONFLICT_RESOLUTION_STRATEGY = 'ours'; // 'ours', 'theirs', or 'manual'

// Utility functions
function execCommand(command, options = {}) {
  try {
    console.log(`📝 Executing: ${command}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(`Error: ${error.message}`);
    return null;
  }
}

function logStep(step, message) {
  console.log(`\n🔄 Step ${step}: ${message}`);
  console.log('=' .repeat(50));
}

// Get all open PRs
async function getOpenPRs() {
  logStep(1, 'Fetching open PRs from GitHub');
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/pulls?state=open&per_page=100`);
    const prs = await response.json();
    console.log(`📊 Found ${prs.length} open PRs`);
    return prs.map(pr => ({
      number: pr.number,
      title: pr.title,
      headRef: pr.head.ref,
      headSha: pr.head.sha,
      baseRef: pr.base.ref,
      mergeable: pr.mergeable,
      mergeable_state: pr.mergeable_state,
      url: pr.html_url
    }));
  } catch (error) {
    console.error('❌ Failed to fetch PRs:', error.message);
    return [];
  }
}

// Check if branch exists locally
function branchExists(branchName) {
  try {
    execCommand(`git show-ref --verify --quiet refs/heads/${branchName}`);
    return true;
  } catch {
    return false;
  }
}

// Fetch and checkout PR branch
function fetchAndCheckoutPR(pr) {
  logStep(2, `Processing PR #${pr.number}: ${pr.title}`);
  const branchName = pr.headRef;
  const remoteBranch = `origin/${branchName}`;
  console.log(`🔍 Checking out branch: ${branchName}`);
  // Fetch the branch
  const fetchResult = execCommand(`git fetch origin ${branchName}`);
  if (!fetchResult) {
    console.error(`❌ Failed to fetch branch ${branchName}`);
    return false;
  }
  // Checkout the branch
  const checkoutResult = execCommand(`git checkout ${branchName}`);
  if (!checkoutResult) {
    console.error(`❌ Failed to checkout branch ${branchName}`);
    return false;
  }
  return true;
}

// Resolve merge conflicts automatically
function resolveConflicts() {
  logStep(3, 'Resolving merge conflicts automatically');
  try {
    // Get list of conflicted files
    const conflictedFiles = execCommand('git diff --name-only --diff-filter=U');
    if (!conflictedFiles) {
      console.log('✅ No merge conflicts found');
      return true;
    }
    const files = conflictedFiles.split('\n').filter(f => f.trim());
    console.log(`🔧 Found ${files.length} conflicted files`);
    for (const file of files) {
      console.log(`🔧 Resolving conflicts in: ${file}`);
      if (fs.existsSync(file)) {
        // Read the file
        let content = fs.readFileSync(file, 'utf8');
        // Apply conflict resolution strategy
        if (CONFLICT_RESOLUTION_STRATEGY === 'ours') {
          // Keep our version (main branch)
          content = content.replace(/
        } else if (CONFLICT_RESOLUTION_STRATEGY === 'theirs') {
          // Keep their version (PR branch)
          content = content.replace(/
        } else {
          // Manual resolution - keep both and add comments
          content = content.replace(/
            '// CONFLICT RESOLVED: Keeping both versions\n$1\n// END CONFLICT\n$2\n// END CONFLICT\n');
        }
        // Write the resolved content
        fs.writeFileSync(file, content);
        console.log(`✅ Resolved conflicts in: ${file}`);
      }
    }
    // Add resolved files
    execCommand('git add .');
    return true;
  } catch (error) {
    console.error('❌ Failed to resolve conflicts:', error.message);
    return false;
  }
}

// Merge PR into main
function mergePR(pr) {
  logStep(4, `Merging PR #${pr.number} into main`);
  try {
    // Switch to main branch
    execCommand('git checkout main');
    // Pull latest main
    execCommand('git pull origin main');
    // Merge the PR branch
    const mergeResult = execCommand(`git merge ${pr.headRef} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`);
    if (mergeResult) {
      console.log(`✅ Successfully merged PR #${pr.number}`);
      // Push to main
      const pushResult = execCommand('git push origin main');
      if (pushResult) {
        console.log(`✅ Successfully pushed PR #${pr.number} to main`);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`❌ Failed to merge PR #${pr.number}:`, error.message);
    return false;
  }
}

// Clean up merged branch
function cleanupBranch(pr) {
  logStep(5, `Cleaning up branch for PR #${pr.number}`);
  try {
    // Delete local branch
    execCommand(`git branch -D ${pr.headRef}`);
    // Delete remote branch
    execCommand(`git push origin --delete ${pr.headRef}`);
    console.log(`✅ Cleaned up branch: ${pr.headRef}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to cleanup branch:`, error.message);
    return false;
  }
}

// Main execution function
async function main() {
  try {
    // Get all open PRs
    const prs = await getOpenPRs();
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    // Sort PRs by number (oldest first)
    prs.sort((a, b) => a.number - b.number);
    console.log(`\n📋 Processing ${prs.length} PRs:`);
    prs.forEach(pr => {
      console.log(`  - PR #${pr.number}: ${pr.title} (${pr.headRef})`);
    });
    let successCount = 0;
    let failureCount = 0;
    // Process each PR
    for (const pr of prs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      try {
        // Fetch and checkout PR
        if (!fetchAndCheckoutPR(pr)) {
          failureCount++;
          continue;
        }
        // Switch to main and attempt merge
        execCommand('git checkout main');
        // Try to merge
        const mergeResult = execCommand(`git merge ${pr.headRef} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`);
        if (mergeResult) {
          // Check for conflicts
          const status = execCommand('git status --porcelain');
          if (status && status.includes('UU')) {
            console.log(`⚠️  Merge conflicts detected for PR #${pr.number}`);
            // Resolve conflicts
            if (resolveConflicts()) {
              // Commit the resolution
              execCommand(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`);
              // Push to main
              const pushResult = execCommand('git push origin main');
              if (pushResult) {
                console.log(`✅ Successfully merged PR #${pr.number} with conflict resolution`);
                successCount++;
                // Cleanup
                cleanupBranch(pr);
              } else {
                console.error(`❌ Failed to push PR #${pr.number}`);
                failureCount++;
              }
            } else {
              console.error(`❌ Failed to resolve conflicts for PR #${pr.number}`);
              failureCount++;
            }
          } else {
            // No conflicts, push directly
            const pushResult = execCommand('git push origin main');
            if (pushResult) {
              console.log(`✅ Successfully merged PR #${pr.number}`);
              successCount++;
              // Cleanup
              cleanupBranch(pr);
            } else {
              console.error(`❌ Failed to push PR #${pr.number}`);
              failureCount++;
            }
          }
        } else {
          console.error(`❌ Failed to merge PR #${pr.number}`);
          failureCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing PR #${pr.number}:`, error.message);
        failureCount++;
      }
    }
    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 MERGE SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully merged: ${successCount} PRs`);
    console.log(`❌ Failed to merge: ${failureCount} PRs`);
    console.log(`📊 Total processed: ${prs.length} PRs`);
    if (successCount > 0) {
      console.log('\n🎉 Some PRs were successfully merged!');
    }
    if (failureCount > 0) {
      console.log('\n⚠️  Some PRs failed to merge. Check the logs above for details.');
    }
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, getOpenPRs, fetchAndCheckoutPR, resolveConflicts, mergePR, cleanupBranch };