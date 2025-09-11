#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentGitWorkflow {
  constructor() {
    this.workflowResults = {
      timestamp: new Date().toISOString(),
      gitStatus: {},
      branchInfo: {},
      commitHistory: {},
      recommendations: [],
    };
    this.logFile = path.join(__dirname, 'logs', 'git-workflow.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runGitWorkflow() {
    this.log('🔄 Starting Intelligent Git Workflow...');

    try {
      // Check git status
      await this.checkGitStatus();

      // Analyze branch information
      await this.analyzeBranches();

      // Analyze commit history
      await this.analyzeCommitHistory();

      // Generate recommendations
      this.generateRecommendations();

      // Save results
      await this.saveResults();

      this.log('Git Workflow completed successfully');
      return this.workflowResults;
    } catch (error) {
      this.log(`Git Workflow failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async checkGitStatus() {
    this.log('Checking git status...');

    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const branch = execSync('git branch --show-current', {
        encoding: 'utf8',
      }).trim();
      const remote = execSync('git remote -v', { encoding: 'utf8' });

      this.workflowResults.gitStatus = {
        hasChanges: status.trim().length > 0,
        changes: status
          .trim()
          .split('\n')
          .filter(line => line.trim()),
        currentBranch: branch,
        remotes: remote
          .trim()
          .split('\n')
          .filter(line => line.trim()),
      };
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBranches() {
    this.log('Analyzing branches...');

    try {
      const localBranches = execSync('git branch', { encoding: 'utf8' });
      const remoteBranches = execSync('git branch -r', { encoding: 'utf8' });
      const mergedBranches = execSync('git branch --merged', {
        encoding: 'utf8',
      });

      this.workflowResults.branchInfo = {
        local: localBranches
          .trim()
          .split('\n')
          .map(b => b.trim().replace('* ', '')),
        remote: remoteBranches
          .trim()
          .split('\n')
          .filter(b => b.trim()),
        merged: mergedBranches
          .trim()
          .split('\n')
          .map(b => b.trim().replace('* ', '')),
      };
    } catch (error) {
      this.log(`Branch analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeCommitHistory() {
    this.log('Analyzing commit history...');

    try {
      const recentCommits = execSync('git log --oneline -10', {
        encoding: 'utf8',
      });
      const commitStats = execSync('git log --stat --oneline -5', {
        encoding: 'utf8',
      });

      this.workflowResults.commitHistory = {
        recent: recentCommits.trim().split('\n'),
        stats: commitStats.trim().split('\n'),
      };
    } catch (error) {
      this.log(`Commit history analysis failed: ${error.message}`, 'ERROR');
    }
  }

  generateRecommendations() {
    const recommendations = [];

    // Check for uncommitted changes
    if (this.workflowResults.gitStatus.hasChanges) {
      recommendations.push(
        'You have uncommitted changes. Consider committing them.'
      );
    }

    // Check for merged branches that can be deleted
    const mergedBranches = this.workflowResults.branchInfo.merged.filter(
      b => b !== 'main' && b !== 'master'
    );
    if (mergedBranches.length > 0) {
      recommendations.push(
        `Consider deleting merged branches: ${mergedBranches.join(', ')}`
      );
    }

    // Check for large number of local branches
    if (this.workflowResults.branchInfo.local.length > 10) {
      recommendations.push(
        'You have many local branches. Consider cleaning up unused ones.'
      );
    }

    this.workflowResults.recommendations = recommendations;
  }

  async saveResults() {
    const resultsFile = path.join(
      __dirname,
      'reports',
      'git-workflow-results.json'
    );
    fs.mkdirSync(path.dirname(resultsFile), { recursive: true });
    fs.writeFileSync(
      resultsFile,
      JSON.stringify(this.workflowResults, null, 2)
    );
    this.log(`Git workflow results saved to: ${resultsFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const workflow = new IntelligentGitWorkflow();
  workflow.runGitWorkflow().catch(console.error);
}

module.exports = IntelligentGitWorkflow;
