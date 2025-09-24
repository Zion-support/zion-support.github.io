#!/usr/bin/env node,
const fs = require('fs'),
const { execSync } = require('child_process'),
// // console.log('📊 Merge Progress Monitor'),
function checkProgress() {
  try {
    // Check if log file exists,
    if (!fs.existsSync('merge-all-prs.log')) {
      // // console.log('❌ Log file not found'),
      return}
,
    // Read the log file,
    const logContent = fs.readFileSync('merge-all-prs.log', 'utf8'),
    const lines = logContent.split('\n'),
    // Count different types of operations,
    const totalBranches = (logContent.match(/Found (\d+) branches to process/g) || []).pop()?.match(/(\d+)/)?.[1] || 'Unknown',
    const processed = (logContent.match(/Progress: (\d+)\/(\d+)/g) || []).pop()?.match(/(\d+)\/(\d+)/) || ['0', '0'],
    const merged = (logContent.match(/Successfully merged/g) || []).length,
    const conflictsResolved = (logContent.match(/Resolved conflicts/g) || []).length,
    const failed = (logContent.match(/Failed to merge/g) || []).length,
    // Get recent activity,
    const recentLines = lines.slice(-10).filter(line => line.trim()),
    // // console.log('\n📈 Current Status: '),
    // // console.log(`   Total Branches: ${totalBranches}`),
    // // console.log(`   Processed: ${processed[0]}/${processed[1]}`),
    // // console.log(`   Successfully Merged: ${merged}`),
    // // console.log(`   Conflicts Resolved: ${conflictsResolved}`),
    // // console.log(`   Failed: ${failed}`),
    if (recentLines.length > 0) {
      // // console.log('\n🔄 Recent Activity: '),
      recentLines.forEach(line => {
        const timestamp = line.match(/[([^]]+)]/)?.[1] || '',
        const message = line.replace(/[[^]]+] [[^]]+] /, ''),
        // // console.log(`   ${timestamp}: ${message}`)})}
,
    // Check if process is still running,
    try {
      execSync('ps aux | grep "node merge-all-prs-comprehensive.js" | grep -v grep', { stdio: 'pipe' }),
      // // console.log('\n✅ Merge process is still running')} catch {
      // // console.log('\n❌ Merge process has stopped')}
} catch (error) {
    // // console.log(`❌ Error checking progress: ${error.message}`)}
}
,
// Check progress every 30 seconds,
setInterval(checkProgress, 30000),
// Initial check,
checkProgress(),