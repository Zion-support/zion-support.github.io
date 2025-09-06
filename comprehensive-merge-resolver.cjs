#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts by accepting "ours" (current branch) changes
function resolveConflicts() {
  try {
    console.log('📋 Getting list of conflicted files...');
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
    
    console.log(`📊 Found ${conflictedFiles.length} conflicted files`);
    
    let resolvedCount = 0;
    let removedCount = 0;
    
    for (const file of conflictedFiles) {
      const filePath = path.join(process.cwd(), file);
      
      if (fs.existsSync(filePath)) {
        console.log(`🔧 Resolving conflicts in ${file}...`);
        try {
          // Accept our version (current branch)
          execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
          execSync(`git add "${file}"`, { stdio: 'pipe' });
          console.log(`✅ Resolved ${file}`);
          resolvedCount++;
        } catch (error) {
          console.warn(`⚠️  Could not resolve ${file}: ${error.message}`);
        }
      } else {
        console.log(`🗑️  Removing deleted file ${file}...`);
        try {
          execSync(`git rm "${file}"`, { stdio: 'pipe' });
          console.log(`✅ Removed ${file}`);
          removedCount++;
        } catch (error) {
          console.warn(`⚠️  Could not remove ${file}: ${error.message}`);
        }
      }
    }}
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString(;);
    }
  async resolveMergeConflicts() {
    this.log('🔍 Scanning for merge conflicts...');
    try {
      // Get all remote branches
      const branches = this.getRemoteBranches(;);
      this.mergeReport.summary.totalBranches = branches.length
      this.log(`Found ${branches.length} remote branches to process`);
      for (const branch of branches) {
        try {
          await this.mergeBranch(branch)} catch (error) {
          this.log(`❌ Failed to merge branch ${branch}: ${error.message}`, 'ERROR');
          this.failedMerges.push({ branch, "error": error.message });
          this.mergeReport.failedMerges.push({ branch, "error": error.message })}
      }
      // Generate final report
      this.generateMergeReport()} catch (error) {
      this.log(`❌ Error in merge conflict "resolution": ${error.message}`, 'ERROR')}
  }
}

// Function to commit the merge
function commitMerge() {
  try {
    console.log('💾 Committing merge...');
    execSync('git commit -m "Merge automation improvements and fixes - resolved all conflicts"', { stdio: 'pipe' });
    console.log('✅ Merge committed successfully!');
    return true;
  } catch (error) {
    console.error(`❌ Error committing merge: ${error.message}`);
    return false;
  }
}

// Function to push changes
function pushChanges() {
  try {
    console.log('🚀 Pushing changes to remote...');
    execSync('git push origin main', { stdio: 'pipe' });
    console.log('✅ Changes pushed successfully!');
    return true;
  } catch (error) {
    console.error(`❌ Error pushing changes: ${error.message}`);
    return false;
  }
  async resolveConflicts(branchName) {
    this.log(`🔧 Resolving conflicts for "branch": ${branchName}`);
    try {
      // Get list of conflicted files
      const conflictedFiles = this.getConflictedFiles(;);
      for (const file of conflictedFiles) {
        await this.resolveFileConflicts(file)}
      // Add resolved files
      execSync('git add .', { "stdio": 'pipe' });
      // Complete the merge
      execSync('git commit -m "Resolve merge conflicts"', { "stdio": 'pipe' });
      this.log(`✅ Resolved conflicts for "branch": ${branchName}`);
      this.resolvedConflicts.push(branchName);
      this.mergeReport.resolvedConflicts.push(branchName);
      this.mergeReport.summary.conflictsResolved++;
      this.mergeReport.mergedBranches.push(branchName);
      this.mergeReport.summary.successfulMerges++} catch (error) {
      this.log(`❌ Failed to resolve conflicts for ${branchName}: ${error.message}`, 'ERROR');
      throw error}
  }
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
>>>>>>> main
const { execSync } = require('child_process')
console.log('� Starting Comprehensive Merge Conflict Resolver...')
  log(message, level = 'INFO')
    this.log(' Scanning for merge conflicts...')
          this.log(` Failed to merge branch ${branch}: ${error.message}`, 'ERROR'`)
      this.log(` Error in merge conflict "resolution"`)
      const output = execSync('git branch -r', { "encoding"})
      this.log(`Error getting remote "branches"`)
      execSync('git fetch origin', { "stdio"})
          "stdio"
        execSync('git merge --abort', { "stdio"})
      execSync('git add .', { "stdio"})
      execSync('git commit -m "Resolve merge conflicts"', { "stdio"})
      const output = execSync('git diff --name-only --diff-filter=U', { "encoding"})
// console.log('\n Merge Conflict Resolution "Summary")
      console.log('\n Successfully merged "branches")
      console.log('\n Failed to merge "branches")
  console.error(' Merge conflict resolution "failed")
cursor/fix-lint-push-and-merge-to-main-f3c1;
<<<<<<< HEAD
}

if (require.main === module) {
  main();
}

module.exports = { resolveConflicts, commitMerge, pushChanges };
=======
>>>>>>> main
