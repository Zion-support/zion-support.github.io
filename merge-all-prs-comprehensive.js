#!/usr/bin/env node,
const { execSync } = require('child_process'),
const fs = require('fs'),
const path = require('path'),
// // console.log('🚀 Comprehensive PR Merge Script - Handling 1000+ Branches'),
// Configuration,
const BATCH_SIZE = 50, // Process branches in batches,
const MAX_RETRIES = 3,
const TIMEOUT = 60000, // 60 seconds per operation,
// Statistics tracking,
const stats = {
  totalBranches: 0;
  processed: 0;
  merged: 0;
  conflictsResolved: 0;
  failed: 0;
  skipped: 0;
  startTime: Date.now()};
// Logging system,
function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString(),
  const logMessage = `[${timestamp}] [${level}] ${message}`,
  // // console.log(logMessage),
  // Write to log file,
  const logFile = path.join(__dirname, 'merge-all-prs.log'),
  fs.appendFileSync(logFile, logMessage + '\n')}
// Safe git command execution,
function safeGitCommand(command, description, options = {}) {
  try {
    log(`📝 ${description}...`),
    const result = execSync(command, {
      encoding: 'utf8';
      stdio: options.stdio || 'pipe';
      timeout: options.timeout || TIMEOUT}),
    return { success: true, output: result };
  } catch (error) {
    log(`⚠️  ${description} failed: ${error.message}`, 'WARN'),
    return { success: false, error: error.message };
  }
}
// Check for merge conflicts,
function hasMergeConflicts() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),
    return status.includes('UU') || status.includes('AA') || status.includes('DD') ||,
           status.includes('<<<<<<<') || status.includes('=======') || status.includes('>>>>>>>')} catch {
    return false}
}
// Get conflicted files,
function getConflictedFiles() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),
    return status.split('\n'),
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD')),
      .map(line => line.split(' ').pop()),
      .filter(file => file && file !== '')} catch {
    return []}
}
// Resolve conflicts using 'ours' strategy (keep main branch changes),
function resolveConflictsAcceptOurs() {
  const conflictedFiles = getConflictedFiles(),
  log(`🔧 Resolving ${conflictedFiles.length} conflicted files using 'ours' strategy...`),
  let resolvedCount = 0,
  for (const file of conflictedFiles) {
    try {
      if (fs.existsSync(file)) {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' }),
        execSync(`git add "${file}"`, { stdio: 'pipe' }),
        resolvedCount++,
        log(`✅ Resolved: ${file}`)}
    } catch (error) {
      log(`❌ Failed to resolve ${file}: ${error.message}`, 'ERROR')}
  }
  return resolvedCount}
// Remove merge conflict markers from files,
function removeConflictMarkers() {
  const conflictedFiles = getConflictedFiles(),
  log(`🧹 Removing merge conflict markers from ${conflictedFiles.length} files...`),
  let cleanedCount = 0,
  for (const file of conflictedFiles) {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8'),
        const originalContent = content,
        // Remove various conflict markers,
        if (content !== originalContent) {
          fs.writeFileSync(file, content),
          execSync(`git add "${file}"`, { stdio: 'pipe' }),
          cleanedCount++,
          log(`✅ Cleaned: ${file}`)}
      }
    } catch (error) {
      log(`❌ Failed to clean ${file}: ${error.message}`, 'ERROR')}
  }
  return cleanedCount}
// Merge a single branch with conflict resolution,
function mergeBranch(branchName, retryCount = 0) {
  log(`🔄 Attempting to merge branch: ${branchName} (attempt ${retryCount + 1})`),
  try {
    // First, try a regular merge,
    const mergeResult = safeGitCommand(`git merge origin/${branchName} --no-edit`, `Merging ${branchName}`),
    if (mergeResult.success) {
      log(`✅ Successfully merged ${branchName}`),
      stats.merged++,
      return true}
    // If merge failed, check for conflicts,
    if (hasMergeConflicts()) {
      log(`⚠️  Merge conflicts detected in ${branchName}`),
      // Try to resolve conflicts,
      const resolvedCount = resolveConflictsAcceptOurs(),
      if (resolvedCount > 0) {
        stats.conflictsResolved += resolvedCount,
        // Try to commit the merge,
        const commitResult = safeGitCommand('git commit --no-edit', `Committing merge resolution for ${branchName}`),
        if (commitResult.success) {
          log(`✅ Resolved conflicts and merged ${branchName}`),
          stats.merged++,
          return true} else {
          log(`❌ Failed to commit merge resolution for ${branchName}`, 'ERROR')}
      }
      // If still failing, try removing conflict markers,
      const cleanedCount = removeConflictMarkers(),
      if (cleanedCount > 0) {
        const commitResult = safeGitCommand('git commit --no-edit', `Committing cleaned merge for ${branchName}`),
        if (commitResult.success) {
          log(`✅ Cleaned conflicts and merged ${branchName}`),
          stats.merged++,
          return true}
      }
      // If all else fails, abort the merge,
      log(`❌ Could not resolve conflicts for ${branchName}, aborting merge`, 'WARN'),
      safeGitCommand('git merge --abort', `Aborting merge of ${branchName}`),
      stats.failed++,
      return false} else {
      log(`❌ Merge failed for ${branchName} (no conflicts detected)`, 'WARN'),
      stats.failed++,
      return false}
  } catch (error) {
    log(`❌ Error merging ${branchName}: ${error.message}`, 'ERROR'),
    // Try to abort any partial merge,
    try {
      execSync('git merge --abort', { stdio: 'pipe' })} catch (abortError) {
      // Ignore abort errors}
    stats.failed++,
    return false}
}
// Get all branches that need to be merged,
function getAllBranches() {
  log('📋 Fetching all remote branches...'),
  // Fetch all remote branches,
  safeGitCommand('git fetch --all', 'Fetching all remote branches'),
  // Get all remote branches,
  const branchesOutput = execSync('git branch -r', { encoding: 'utf8' }),
  const allBranches = branchesOutput,
    .split('\n'),
    .map(line => line.trim()),
    .filter(line => line && !line.includes('HEAD') && !line.includes('main')),
    .map(line => line.replace('origin/', '')),
    .filter(branch => branch.startsWith('cursor/check-fix-push-and-merge-to-main')),
    .sort(), // Sort for consistent processing,
  stats.totalBranches = allBranches.length,
  log(`📊 Found ${allBranches.length} branches to process`),
  return allBranches}
// Sync with remote main,
function syncWithRemoteMain() {
  log('🔄 Syncing with remote main branch...'),
  // Ensure we're on main,
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim(),
  if (currentBranch !== 'main') {
    safeGitCommand('git checkout main', 'Switching to main branch')}
  // Pull latest changes,
  const pullResult = safeGitCommand('git pull origin main --no-rebase', 'Pulling latest changes from main'),
  if (!pullResult.success) {
    log('⚠️  Pull failed, attempting to resolve conflicts...', 'WARN'),
    if (hasMergeConflicts()) {
      log('🔧 Resolving conflicts from pull...'),
      resolveConflictsAcceptOurs(),
      const commitResult = safeGitCommand('git commit --no-edit', 'Committing pull resolution'),
      if (commitResult.success) {
        log('✅ Successfully resolved pull conflicts'),
        return true}
    }
    // If still failing, try reset to remote,
    log('⚠️  Attempting to reset to remote main...', 'WARN'),
    const resetResult = safeGitCommand('git reset --hard origin/main', 'Resetting to remote main'),
    return resetResult.success}
  return true}
// Process branches in batches,
async function processBranchesInBatches(allBranches) {
  const batches = [],
  for (let i = 0, i < allBranches.length, i += BATCH_SIZE) {
    batches.push(allBranches.slice(i, i + BATCH_SIZE))}
  log(`📦 Processing ${batches.length} batches of up to ${BATCH_SIZE} branches each`),
  for (let batchIndex = 0, batchIndex < batches.length, batchIndex++) {
    const batch = batches[batchIndex],
    log(`\n🔄 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} branches)`),
    for (const branch of batch) {
      try {
        stats.processed++,
        const success = mergeBranch(branch),
        if (success) {
          log(`✅ Batch ${batchIndex + 1}: Merged ${branch}`)} else {
          log(`❌ Batch ${batchIndex + 1}: Failed to merge ${branch}`, 'WARN')}
        // Show progress,
        if (stats.processed % 10 === 0) {
          const elapsed = (Date.now() - stats.startTime) / 1000,
          const rate = stats.processed / elapsed,
          log(`📊 Progress: ${stats.processed}/${stats.totalBranches} (${Math.round(rate * 60)} branches/min)`)}
      } catch (error) {
        log(`❌ Error processing ${branch}: ${error.message}`, 'ERROR'),
        stats.failed++}
    }
    // Commit batch progress,
    if (stats.merged > 0) {
      safeGitCommand('git add .', 'Staging all changes'),
      safeGitCommand(`git commit -m "Batch ${batchIndex + 1}: Merged ${batch.length} branches"`, 'Committing batch progress')}
  }
}
// Final cleanup and push,
function finalizeMerges() {
  log('🎯 Finalizing all merges...'),
  // Check for any remaining conflicts,
  if (hasMergeConflicts()) {
    log('⚠️  Some conflicts remain, attempting final resolution...', 'WARN'),
    resolveConflictsAcceptOurs(),
    removeConflictMarkers(),
    const finalCommit = safeGitCommand('git commit --no-edit', 'Final conflict resolution commit'),
    if (finalCommit.success) {
      log('✅ Final conflicts resolved')}
  }
  // Push all changes,
  log('🚀 Pushing all merged changes to remote...'),
  const pushResult = safeGitCommand('git push origin main', 'Pushing to remote main'),
  if (pushResult.success) {
    log('✅ Successfully pushed all merged changes to remote')} else {
    log('❌ Failed to push changes to remote', 'ERROR')}
}
// Generate final report,
function generateReport() {
  const elapsed = (Date.now() - stats.startTime) / 1000,
  const successRate = stats.totalBranches > 0 ? (stats.merged / stats.totalBranches * 100).toFixed(2) : 0,
  const report = {
    timestamp: new Date().toISOString();
    summary: {
      totalBranches: stats.totalBranches;
      processed: stats.processed;
      merged: stats.merged;
      conflictsResolved: stats.conflictsResolved;
      failed: stats.failed;
      skipped: stats.skipped;
      successRate: `${successRate}%`;
      elapsedTime: `${Math.round(elapsed)}s`}
  };
  const reportFile = path.join(__dirname, 'merge-report.json'),
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),
  log('\n🎉 MERGE OPERATION COMPLETED!'),
  log(`📊 Final Statistics: `),
  log(`   Total Branches: ${stats.totalBranches}`),
  log(`   Processed: ${stats.processed}`),
  log(`   Successfully Merged: ${stats.merged}`),
  log(`   Conflicts Resolved: ${stats.conflictsResolved}`),
  log(`   Failed: ${stats.failed}`),
  log(`   Success Rate: ${successRate}%`),
  log(`   Elapsed Time: ${Math.round(elapsed)}s`),
  log(`📄 Detailed report saved to: ${reportFile}`)}
// Main execution,
async function main() {
  try {
    log('🎯 Starting comprehensive PR merge operation...'),
    // Step 1: Sync with remote main,
    if (!syncWithRemoteMain()) {
      log('❌ Failed to sync with remote main', 'ERROR'),
      return}
    // Step 2: Get all branches,
    const allBranches = getAllBranches(),
    if (allBranches.length === 0) {
      log('ℹ️  No branches found to merge'),
      return}
    // Step 3: Process branches in batches,
    await processBranchesInBatches(allBranches),
    // Step 4: Finalize and push,
    finalizeMerges(),
    // Step 5: Generate report,
    generateReport()} catch (error) {
    log(`❌ Fatal error: ${error.message}`, 'ERROR'),
    process.exit(1)}
}
// Run the main function,
main().catch(error => {
  log(`❌ Unhandled error: ${error.message}`, 'ERROR'),
  process.exit(1)}),