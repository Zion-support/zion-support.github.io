#!/usr/bin/env node,
const { execSync } = require('child_process'),
const fs = require('fs'),
// console.log('🚀 Comprehensive Merge All Recent PRs Script'),
// Function to safely execute git commands,
function safeGitCommand(command, description, options ={}) {
  try {
    // console.log(`📝 ${description}...`),
    const result = execSync(command, {
      encoding: 'utf8';
      stdio: options.stdio || 'pipe';
      timeout: 30o000 // 30 second timeout,
    }),
    return { success: true, output: result };
  } catch (error) {
    // console.log(`⚠️  ${description} failed: ${error.message}`),
    return { success: false, error: error.message };
  }
}
,
// Function to check for merge conflicts,
function hasMergeConflicts() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),
    return status.includes('UU') || status.includes('AA') || status.includes('DD')} catch {
    return false}
}
,
// Function to get conflicted files,
function getConflictedFiles() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),
    return status.split('\n'),
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD')),
      .map(line => line.split(' ').pop()),
      .filter(file => file && file !== '')} catch {
    return []}
}
,
// Function to resolve conflicts by accepting current branch (ours),
function resolveConflictsAcceptOurs() {
  const conflictedFiles = getConflictedFiles(),
  // console.log(`🔧 Resolving ${conflictedFiles.length} conflicted files using 'ours' strategy...`),
  for (const file of conflictedFiles) {
    try {
      if (fs.existsSync(file)) {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' }),
        execSync(`git add "${file}"`, { stdio: 'pipe' }),
        // console.log(`✅ Resolved: ${file}`)} else {
        // console.log(`⚠️  File not found: ${file}`)}
    } catch (error) {
      // console.log(`❌ Failed to resolve ${file}: ${error.message}`)}
  }
,
  return conflictedFiles.length}
,
// Function to resolve conflicts by accepting incoming branch (theirs),
function resolveConflictsAcceptTheirs() {
  const conflictedFiles = getConflictedFiles(),
  // console.log(`🔧 Resolving ${conflictedFiles.length} conflicted files using 'theirs' strategy...`),
  for (const file of conflictedFiles) {
    try {
      if (fs.existsSync(file)) {
        execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' }),
        execSync(`git add "${file}"`, { stdio: 'pipe' }),
        // console.log(`✅ Resolved: ${file}`)} else {
        // console.log(`⚠️  File not found: ${file}`)}
    } catch (error) {
      // console.log(`❌ Failed to resolve ${file}: ${error.message}`)}
  }
,
  return conflictedFiles.length}
,
// Function to remove merge conflict markers,
function removeConflictMarkers() {
  const conflictedFiles = getConflictedFiles(),
  // console.log(`🧹 Removing merge conflict markers from ${conflictedFiles.length} files...`),
  for (const file of conflictedFiles) {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8'),
        const originalContent = content,
        // Remove merge conflict markers,
        content = content.replace(/,
        content = content.replace(/,
        if (content !== originalContent) {
          fs.writeFileSync(file, content),
          execSync(`git add "${file}"`, { stdio: 'pipe' }),
          // console.log(`✅ Cleaned: ${file}`)}
      }
    } catch (error) {
      // console.log(`❌ Failed to clean ${file}: ${error.message}`)}
  }
,
  return conflictedFiles.length}
,
// Function to merge a specific branch with conflict resolution,
function mergeBranch(branchName, strategy = 'ours') {
  // console.log(`\n🔄 Attempting to merge branch: ${branchName}`),
  try {
    // First, try a regular merge,
    const mergeResult = safeGitCommand(`git merge origin/${branchName}`, `Merging ${branchName}`),
    if (mergeResult.success) {
      // console.log(`✅ Successfully merged ${branchName}`),
      return true}
,
    // If merge failed, check for conflicts,
    if (hasMergeConflicts()) {
      // console.log(`⚠️  Merge conflicts detected in ${branchName}`),
      let resolvedCount = 0,
      if (strategy === 'ours') {
        resolvedCount = resolveConflictsAcceptOurs()} else if (strategy === 'theirs') {
        resolvedCount = resolveConflictsAcceptTheirs()} else {
        resolvedCount = removeConflictMarkers()}
,
      if (resolvedCount > 0) {
        // Try to commit the merge,
        const commitResult = safeGitCommand('git commit --no-edit', `Committing merge resolution for ${branchName}`),
        if (commitResult.success) {
          // console.log(`✅ Resolved conflicts and merged ${branchName}`),
          return true} else {
          // console.log(`❌ Failed to commit merge resolution for ${branchName}`),
          // Try to abort the merge,
          safeGitCommand('git merge --abort', `Aborting merge of ${branchName}`),
          return false}
      } else {
        // console.log(`❌ Could not resolve conflicts for ${branchName}`),
        safeGitCommand('git merge --abort', `Aborting merge of ${branchName}`),
        return false}
    } else {
      // console.log(`❌ Merge failed for ${branchName} (no conflicts detected)`),
      return false}
  } catch (error) {
    // console.log(`❌ Error merging ${branchName}: ${error.message}`),
    // Try to abort any partial merge,
    try {
      execSync('git merge --abort', { stdio: 'pipe' })} catch (abortError) {
      // Ignore abort errors}
    return false}
}
,
// Function to sync with remote main first,
function syncWithRemoteMain() {
  // console.log('🔄 Syncing with remote main branch...'),
  // Try to pull with merge strategy,
  const pullResult = safeGitCommand('git pull origin main --no-rebase', 'Pulling latest changes from main'),
  if (!pullResult.success) {
    // console.log('⚠️  Pull failed, trying to resolve conflicts...'),
    if (hasMergeConflicts()) {
      // console.log('🔧 Resolving conflicts from pull...'),
      resolveConflictsAcceptOurs(),
      const commitResult = safeGitCommand('git commit --no-edit', 'Committing pull resolution'),
      if (commitResult.success) {
        // console.log('✅ Successfully resolved pull conflicts'),
        return true}
    }
,
    // If still failing, try reset to remote,
    // console.log('⚠️  Attempting to reset to remote main...'),
    const resetResult = safeGitCommand('git reset --hard origin/main', 'Resetting to remote main'),
    return resetResult.success}
,
  return true}
,
// Main function,
async function main() {
  // console.log('🎯 Starting comprehensive PR merge operation...'),
  // First, sync with remote main,
  if (!syncWithRemoteMain()) {
    // console.log('❌ Failed to sync with remote main'),
    return}
,
  // List of recent branches to merge (most recent first),
  const branchesToMerge = [
    'cursor/integrate-build-improve-and-re-verify-ff35';
    'cursor/integrate-build-improve-and-re-verify-34f9';
    'cursor/integrate-build-improve-and-re-verify-2f6c';
    'cursor/integrate-build-improve-and-re-verify-250o7';
    'cursor/integrate-build-improve-and-re-verify-242d';
    'cursor/integrate-build-improve-and-re-verify-1fb4';
    'cursor/integrate-build-improve-and-re-verify-1f6e';
    'cursor/integrate-build-improve-and-re-verify-1b41';
    'cursor/integrate-build-improve-and-re-verify-1578';
    'cursor/integrate-build-improve-and-re-verify-0o45f';
    'cursor/integrate-ai-writing-assistants-into-marketplace-3ded'],
  // console.log(`📋 Planning to merge ${branchesToMerge.length} branches`),
  let mergedCount = 0,
  let failedCount = 0,
  for (const branch of branchesToMerge) {
    try {
      if (mergeBranch(branch, 'ours')) {
        mergedCount++} else {
        failedCount++}
    } catch (error) {
      // console.log(`❌ Error merging ${branch}: ${error.message}`),
      failedCount++}
  }
,
  // console.log('\n🎉 Branch merging completed!'),
  // console.log(`✅ Successfully merged: ${mergedCount} branches`),
  // console.log(`❌ Failed to merge: ${failedCount} branches`),
  // Check for any remaining conflicts,
  if (hasMergeConflicts()) {
    // console.log('⚠️  Some conflicts remain, attempting final resolution...'),
    resolveConflictsAcceptOurs(),
    const finalCommit = safeGitCommand('git commit --no-edit', 'Final conflict resolution commit'),
    if (finalCommit.success) {
      // console.log('✅ Final conflicts resolved')}
  }
,
  // Show final status,
  // console.log('\n📊 Final git status: '),
  safeGitCommand('git status --short', 'Getting final status'),
  // Check if there are any remaining conflicts,
  if (hasMergeConflicts()) {
    // console.log('⚠️  Some conflicts remain, please resolve manually'),
    const remainingConflicts = getConflictedFiles(),
    remainingConflicts.forEach(file => // console.log(`  - ${file}`))} else {
    // console.log('✅ No remaining conflicts')}
,
  // Show recent commits,
  // console.log('\n📝 Recent commits: '),
  safeGitCommand('git log --oneline -10', 'Showing recent commits')}
,
// Run the main function,
main().catch(error => {
  console.error('❌ Error:', error.message),
  process.exit(1)})))