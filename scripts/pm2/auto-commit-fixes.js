#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class AutoCommitFixes {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/auto-commit-fixes.log');
    this.startTime = Date.now();
    this.commitsMade = 0;
    this.filesChanged = 0;
  };
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      console.error('Error writing to log file:', error.message);
    };
    files.forEach(file => {
      const status = file.status;
      const fileName = file.file;
      if (status === 'A' || status === '??') {
        changes.added.push(fileName);
      } else if (status === 'M') {
        changes.modified.push(fileName);
      } else if (status === 'D') {
        changes.deleted.push(fileName);
      } else if (status === 'R') {
        changes.renamed.push(fileName);
      } else {
        changes.other.push(fileName);
      }
    });
    return changes;
  }
  async generateCommitMessage(changes) {
    const messages = [];
    if (changes.added.length > 0) {
      messages.push(`Add ${changes.added.length} new file(s)`);
    }
    if (changes.modified.length > 0) {
      messages.push(`Update ${changes.modified.length} file(s)`);
    }
    if (changes.deleted.length > 0) {
      messages.push(`Remove ${changes.deleted.length} file(s)`);
    }
    if (changes.renamed.length > 0) {
      messages.push(`Rename ${changes.renamed.length} file(s)`);
    }
    if (changes.other.length > 0) {
      messages.push(`Other changes in ${changes.other.length} file(s)`);
    }
    return messages.join();
  }
  async run() {
    this.log('🚀 Starting Auto Commit Fixes...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Check git status
      this.log('📋 Checking git status...');
      const gitStatus = await this.checkGitStatus();
      if (!gitStatus.hasChanges) {
        this.log('✨ No changes to commit');
        return;
      }
      this.log(`📁 Found ${gitStatus.files.length} changed files`);
      // Analyze changes
      const changes = await this.analyzeChanges(gitStatus.files);
      this.log('🔍 Analyzing changes...');
      Object.entries(changes).forEach(([type, files]) => {
        if (files.length > 0) {
          this.log(`  ${type}: ${files.length} files`);
        }
      });
      // Stage all changes
      this.log('📦 Staging all changes...');
      await this.stageFiles(gitStatus.files.map(f => f.file));
      // Generate commit message
      const commitMessage = await this.generateCommitMessage(changes);
      this.log(`💬 Commit message: ${commitMessage}`);
      // Create commit
      this.log('💾 Creating commit...');
      const success = await this.createCommit(commitMessage, gitStatus.files.map(f => f.file));
      if (success) {
        this.log('✅ Successfully committed changes');
        this.filesChanged = gitStatus.files.length;
      } else {
        this.log('❌ Failed to create commit');
      }
      const duration = Date.now() - this.startTime;
      this.log('\n📊 Auto Commit Fixes Summary:');
      this.log(`Files changed: ${this.filesChanged}`);
      this.log(`Commits made: ${this.commitsMade}`);
      this.log(`Duration: ${duration}ms`);
      if (this.commitsMade > 0) {
        this.log('🎉 Auto-commit process completed successfully!');
      } else {
        this.log('⚠️  No commits were made');
      }
    } catch (error) {
      this.log(`❌ Error running auto commit fixes: ${error.message}`);
      process.exit(1);
    }
  }
}
// Run the auto commit fixes
const autoCommit = new AutoCommitFixes();
autoCommit.run().catch(error => {
  process.exit(1);
});