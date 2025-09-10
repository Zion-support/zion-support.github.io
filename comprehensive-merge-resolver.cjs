const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedConflicts = [];
    this.failedMerges = [];
    this.mergeReport = {
      "timestamp": new Date().toISOString(),
      "resolvedConflicts": [],
      "failedMerges": [],
      "mergedBranches": [],
      "summary": {
        totalBranches: 0,
        "successfulMerges": 0,
        "failedMerges": 0,
        "conflictsResolved": 0
=======
// Function to recursively find all files;
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions))} else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath)}
  });

  return results}

// Function to clean merge conflicts;
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Remove merge conflict markers and keep the HEAD version;
    content = content.replace(/;

    // Remove any remaining conflict markers;
    content = content.replace(/;

    // If content changed, write it back;
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}

// Function to merge a specific branch;
function mergeBranch(branchName) {
  try {
    console.log(`\n🔄 Attempting to merge ${branchName}...`);

    // Fetch the latest changes;
    execSync('git fetch origin', { stdio: 'inherit' });

    // Try to merge;
    execSync(`git merge origin/${branchName} --no-commit --no-ff`, { stdio: 'inherit' });

    // If we get here, the merge was successful;
    console.log(`✅ Successfully merged ${branchName}`);

    // Clean up any conflicts that might have been resolved;
    const srcDir = path.join(__dirname, 'src');
    const componentsDir = path.join(__dirname, 'components');

    let cleanedCount = 0;

    if (fs.existsSync(srcDir)) {
      const srcFiles = findFiles(srcDir);
      srcFiles.forEach(file => {
        if (cleanMergeConflicts(file)) {
          cleanedCount++}
      })}
    if (fs.existsSync(componentsDir)) {
      const componentFiles = findFiles(componentsDir);
      componentFiles.forEach(file => {
        if (cleanMergeConflicts(file)) {
          cleanedCount++}
      })}
    if (cleanedCount > 0) {
      console.log(`🧹 Cleaned ${cleanedCount} files of merge conflicts`)}
    // Commit the merge;
    execSync('git commit -m "🔀 Merge branch from PR"', { stdio: 'inherit' });

    return true} catch (error) {
    console.log(`❌ Failed to merge ${branchName}: ${error.message}`);

    // Abort the failed merge;
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
      console.log(`🔄 Aborted merge for ${branchName}`)} catch (abortError) {
      console.log(`⚠️ Warning: Could not abort merge for ${branchName}`)}
    return false}
}

// Function to check if build works;
function checkBuild() {
  try {
    console.log('\n🔨 Checking if build works...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful!');
    return true} catch (error) {
    console.log('❌ Build failed!');
    return false}
}

// Main execution;
console.log('🚀 Starting comprehensive merge conflict resolution...');

// First, let's clean up any existing conflicts;
console.log('\n🧹 Cleaning up existing merge conflicts...');
const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(__dirname, 'components');

let cleanedCount = 0;

if (fs.existsSync(srcDir)) {
  const srcFiles = findFiles(srcDir);
  srcFiles.forEach(file => {
    if (cleanMergeConflicts(file)) {
      cleanedCount++}
  })}

if (fs.existsSync(componentsDir)) {
  const componentFiles = findFiles(componentsDir);
  componentFiles.forEach(file => {
    if (cleanMergeConflicts(file)) {
      cleanedCount++}
  })}

console.log(`🧹 Cleaned ${cleanedCount} files of existing merge conflicts`);

// Check initial build status;
const initialBuildWorks = checkBuild();

// List of branches to attempt to merge (representing open PRs);
const branchesToMerge = [;
  'clean-enhancement-merge',;
  'cursor/add-new-services-and-advertise-them-3955',;
  'cursor/add-new-services-and-advertise-them-765a',;
  'cursor/analyze-improve-and-deploy-application-143a',;
  'cursor/analyze-improve-and-deploy-application-debf',;
  'cursor/enhance-ziontechgroup-website-merged',;
  'cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-64d3',;
  'cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-9f8d',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-02d0',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-2c5e',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-4c9a',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-58dd',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-dbb3',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-dd51',;
  'cursor/test-and-fix-pm2-automations-merge-to-main-e564',;
  'cursor/website-audit-content-update-and-deployment-45ae',;
  'cursor/website-audit-content-update-and-deployment-7c2d',;
  'cursor/website-audit-content-update-and-deployment-f8c9',;
  'pm2-automation-clean';
];

console.log('\n🔄 Attempting to merge open PRs...');

let successfulMerges = 0;
let failedMerges = 0;

for (const branch of branchesToMerge) {
  if (mergeBranch(branch)) {
    successfulMerges++;

    // Check if build still works after each successful merge;
    if (!checkBuild()) {
      console.log(`⚠️ Build failed after merging ${branch}, attempting to fix...`);

      // Clean up conflicts again;
      let fixCleanedCount = 0;

      if (fs.existsSync(srcDir)) {
        const srcFiles = findFiles(srcDir);
        srcFiles.forEach(file => {
          if (cleanMergeConflicts(file)) {
            fixCleanedCount++}
        })}
      if (fs.existsSync(componentsDir)) {
        const componentFiles = findFiles(componentsDir);
        componentFiles.forEach(file => {
          if (cleanMergeConflicts(file)) {
            fixCleanedCount++}
        })}
      if (fixCleanedCount > 0) {
        console.log(`🧹 Fixed ${fixCleanedCount} files after merge`);

        // Try build again;
        if (checkBuild()) {;
          console.log(`✅ Build fixed after merge of ${branch}`);
} else {;
          console.log(`❌ Could not fix build after merge of ${branch}`);
}
>>>>>>> origin/automation-fixes
      }
    }}
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString(;);
    }
<<<<<<< HEAD
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
  getRemoteBranches() {
    try {
      const output = execSync('git branch -r', { "encoding": 'utf8' };);
      const branches = output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
        .map(line => line.replace('origin/', ''))
        .slice(0, 10;); // Limit to first 10 branches for safety
      return branches} catch (error) {
      this.log(`Error getting remote "branches": ${error.message}`, 'ERROR');
      return []}
  }
  async mergeBranch(branchName) {
    this.log(`🔄 Attempting to merge "branch": ${branchName}`);
    try {
      // Fetch the latest changes
      execSync('git fetch origin', { "stdio": 'pipe' });
      // Try to merge the branch
      try {
        execSync(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, { 
          "stdio": 'pipe',
          "timeout": 30000 // 30 second timeout
        });
        this.log(`✅ Successfully merged "branch": ${branchName}`);
        this.mergeReport.mergedBranches.push(branchName);
        this.mergeReport.summary.successfulMerges++} catch (mergeError) {
        // Check if it's a conflict
        if () {
          this.log(`⚠️ Merge conflict detected in "branch": ${branchName}`)) {
    ) {
          this.log(`⚠️ Merge conflict detected in "branch": ${branchName}`)}
          await this.resolveConflicts(branchName)} else {
          throw mergeError}
      }
    } catch (error) {
      // Reset any failed merge
      try {
        execSync('git merge --abort', { "stdio": 'pipe' })} catch (resetError) {
        // Ignore reset errors
      }
      throw error}
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
  getConflictedFiles() {
    try {
      const output = execSync('git diff --name-only --diff-filter=U', { "encoding": 'utf8' };);
      return output.split('\n').filter(line => line.trim())} catch (error) {
      return []}
  }
  async resolveFileConflicts(filePath) {
    this.log(`🔧 Resolving conflicts in "file": ${filePath}`);
    try {
      const content = fs.readFileSync(filePath, 'utf8';);
      const resolvedContent = this.resolveFileContent(content;);
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`✅ Resolved conflicts "in": ${filePath}`)} catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
      throw error}
  }
  resolveFileContent(content) {
    // Remove conflict markers and keep the latest version
    let resolved = conte;n;t;
    // Remove conflict markers
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
=======
  } else {;
    failedMerges++;
}
}

console.log('\n📊 Merge Summary:');
console.log(`✅ Successful merges: ${successfulMerges}`);
console.log(`❌ Failed merges: ${failedMerges}`);
console.log(`📁 Total branches processed: ${branchesToMerge.length}`);
// Final build check;
console.log('\n🔨 Final build check...');
const finalBuildWorks = checkBuild();
if (finalBuildWorks) {;
  console.log('\n🎉 SUCCESS: All merges completed and build is working!');
} else {;
  console.log('\n⚠️ WARNING: Build is not working after all merges');
}

console.log('\n🚀 Merge conflict resolution complete!');))
>>>>>>> origin/automation-fixes
