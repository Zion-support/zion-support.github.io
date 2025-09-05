#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CommitAndPush {
  constructor() {
    this.changes = [];
    this.commitMessage = this.generateCommitMessage();
  }

  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    };
    console.log(`${icons[type]} ${message}`);
  }

  generateCommitMessage() {
    const timestamp = new Date().toISOString();
    return `Automated improvements and optimizations - ${timestamp}`;
  }

  checkGitRepository() {
    if (!fs.existsSync('.git')) {
      this.log('Not in a git repository', 'WARNING');
      return false;
    }
    this.log('Git repository found', 'SUCCESS');
    return true;
  }

  createGitCommands() {
    const commands = [
      '# Git Workflow Commands',
      '# Run these commands to commit and push changes',
      '',
      'git add .',
      'git status',
      `git commit -m "${this.commitMessage}"`,
      'git push origin main',
      '',
      '# Alternative: Push to current branch',
      'git push origin HEAD',
      '',
      '# Check status after push',
      'git status',
      'git log --oneline -5'
    ];
    
    const commandsPath = path.join(process.cwd(), 'git-commands.txt');
    fs.writeFileSync(commandsPath, commands.join('\n'));
    this.log(`Git commands written to ${commandsPath}`, 'SUCCESS');
  }

  run() {
    this.log('Starting commit and push preparation...');
    
    if (!this.checkGitRepository()) {
      return;
    }

    this.createGitCommands();
    this.log('Commit and push preparation completed!', 'SUCCESS');
    
    // Show available git commands
    this.log('Available git commands:', 'INFO');
    try {
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }
});
      if (gitStatus.trim()) {
        this.log('Uncommitted changes found:', 'WARNING');
        console.log(gitStatus);
      } else {
        this.log('No uncommitted changes', 'SUCCESS');
      }
    } catch {
      this.log('Could not check git status', 'WARNING');
    }
  }
}

new CommitAndPush().run();