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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
