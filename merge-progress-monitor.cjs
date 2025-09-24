#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('📊 Merge Progress Monitor');

function checkProgress() {
  try {
    // Check if aggressive merge script is running
    try {
      execSync('ps aux | grep "node aggressive-merge-all.cjs" | grep -v grep', { stdio: 'pipe' });
      console.log('✅ Aggressive merge process is running');
    } catch {
      console.log('❌ Aggressive merge process has stopped');
    }
    
    // Check git status
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
      console.log('📝 Working directory has uncommitted changes');
    } else {
      console.log('✅ Working directory is clean');
    }
    
    // Count remaining branches
    const remainingBranches = execSync('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l', { encoding: 'utf8' }).trim();
    console.log(`📊 Remaining cursor branches: ${remainingBranches}`);
    
    // Count merge commits
    const mergeCommits = execSync('git log --oneline | grep -E "(Batch merge|Continue merge|Aggressive batch)" | wc -l', { encoding: 'utf8' }).trim();
    console.log(`📊 Merge operations completed: ${mergeCommits}`);
    
    // Check recent activity
    const recentCommits = execSync('git log --oneline -5', { encoding: 'utf8' });
    console.log('\n🔄 Recent commits:');
    recentCommits.split('\n').forEach(line => {
      if (line.trim()) {
        console.log(`   ${line}`);
      }
    });
    
    // Check for report files
    const reportFiles = ['aggressive-merge-report.json', 'final-merge-report.json', 'merge-streamlined-report.json'];
    reportFiles.forEach(file => {
      if (fs.existsSync(file)) {
        console.log(`📄 Found report: ${file}`);
      }
    });
    
  } catch (error) {
    console.log(`❌ Error checking progress: ${error.message}`);
  }
}

// Check progress every 30 seconds
setInterval(checkProgress, 30000);

// Initial check
checkProgress();