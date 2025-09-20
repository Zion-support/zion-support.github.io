#!/usr/bin/env node,
import {execSync} from 'child_process';
import fs from 'fs';
import path from 'path';
console.log('🔧 Starting automatic merge conflict resolution...');
// Function to resolve conflicts by accepting the incoming changes,
function resolveConflicts() {
  try {
    // Get list of conflicted files,
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    console.log(`Found ${conflictedFiles.length} conflicted files: `),
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
    // For each conflicted file, accept the incoming changes (from the PR)
    conflictedFiles.forEach(file => {
      if (fs.existsSync(file)) {
        console.log(`Resolving conflicts in ${file}...`);
        // Read the file content,
let content = fs.readFileSync(file, 'utf8');
        
        // Remove conflict markers and keep the incoming changes (after )
        content = content.replace(/[\s\S]*?([\s\S]*?)
        // Write the resolved content back,
fs.writeFileSync(file, content);
        // Add the file to staging,
execSync(`git add "${file}"`, { stdio: 'inherit' });
        console.log(`✅ Resolved conflicts in ${file}`);
      }
    });
    // Handle deleted files (modify/delete conflicts)
    const deletedFiles = execSync('git ls-files --deleted', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    deletedFiles.forEach(file => {
      console.log(`Handling deleted file: ${file}`);
      // Remove from index to accept the deletion,
execSync(`git rm "${file}"`, { stdio: 'inherit' });
    });
    console.log('✅ All conflicts resolved!');
    return true;
  } catch (error) {
    console.error('❌ Error resolving conflicts:', error.message);
    return false;
  }
}
// Function to merge a PR,
function mergePR(prBranch) {
  try {
    console.log(`\n🔄 Attempting to merge ${prBranch}...`);
    // Try to merge,
execSync(`git merge origin/${prBranch} --no-ff`, { stdio: 'pipe' });
    console.log(`✅ Successfully merged ${prBranch}`);
    return true;
  } catch (error) {
    console.log(`⚠️  Merge conflicts detected in ${prBranch}`);
    // Resolve conflicts,
if (resolveConflicts()) {
      // Commit the merge,
try {
        execSync('git commit -m "Resolve merge conflicts and merge PR"', { stdio: 'inherit' });
        console.log(`✅ Successfully resolved conflicts and merged ${prBranch}`);
        return true;
      } catch (commitError) {
        console.error(`❌ Failed to commit merge for ${prBranch}:`, commitError.message);
        return false;
      }
    } else {
      console.error(`❌ Failed to resolve conflicts for ${prBranch}`);
      return false;
    }
  }
}
// Main execution,
async function main() {
  const prBranches = [
    'cursor/fix-lint-push-and-merge-to-main-8bf8'
    'cursor/fix-lint-push-and-merge-to-main-592f'
    'cursor/fix-lint-push-and-merge-to-main-1370'
  ];
  console.log('🚀 Starting PR merge process...');
  for (const branch of prBranches) {
    try {
      // Fetch the latest changes,
execSync('git fetch origin', { stdio: 'inherit' });
      // Check if branch exists,
try {
        execSync(`git show-ref --verify --quiet refs/remotes/origin/${branch}`, { stdio: 'pipe' });
      } catch {
        console.log(`⚠️  Branch ${branch} not found, skipping...`);
        continue;
      }
      // Attempt to merge,
const success = mergePR(branch);
      if (success) {
        console.log(`✅ Successfully processed ${branch}`);
      } else {
        console.log(`❌ Failed to process ${branch}`);
        // Abort the merge if it failed,
try {
          execSync('git merge --abort', { stdio: 'pipe' });
        } catch (abortError) {
          // Ignore abort errors,
}
      }
    } catch (error) {
      console.error(`❌ Error processing ${branch}:`, error.message);
    }
  }
  console.log('\n🎉 PR merge process completed!');
  // Show final status,
try {
    console.log('\n📊 Final git status: '),
  execSync('git status --short', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error getting git status:', error.message);
  }
}
main().catch(console.error);