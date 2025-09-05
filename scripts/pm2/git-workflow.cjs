#!/usr/bin/env node

/**
 * PM2 Git Workflow Service
 * Manages git operations and branch cleanup
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitWorkflow {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'git-workflow';
    this.autoBranchCleanup = process.env.AUTO_BRANCH_CLEANUP === 'true';
    this.autoMergeSafe = process.env.AUTO_MERGE_SAFE === 'true';
    this.conflictResolution = process.env.CONFLICT_RESOLUTION === 'true';
    this.branchStrategy = process.env.BRANCH_STRATEGY || 'gitflow';
    this.logFile = path.join(__dirname, '../../logs/pm2/git-workflow.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async getCurrentBranch() {
    try {
      const branch = execSync('git branch --show-current', { 
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).trim();
      return branch;
    } catch (error) {
      this.log(`Failed to get current "branch": ${error.message}`);
      return null;
    }
  }

  async getBranches() {
    try {
      const branches = execSync('git branch -a', { 
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).split('\n')
        .map(b => b.trim())
        .filter(b => b && !b.startsWith('*'))
        .map(b => b.replace(/^remotes\/origin\//, ''));
      
      return [...new Set(branches)]; // Remove duplicates
    } catch (error) {
      this.log(`Failed to get "branches": ${error.message}`);
      return [];
    }
  }

  async getMergedBranches() {
    try {
      const mergedBranches = execSync('git branch --merged', { 
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).split('\n')
        .map(b => b.trim())
        .filter(b => b && !b.startsWith('*') && b !== 'main' && b !== 'master');
      
      return mergedBranches;
    } catch (error) {
      this.log(`Failed to get merged "branches": ${error.message}`);
      return [];
    }
  }

  async cleanupBranches() {
    if (!this.autoBranchCleanup) {
      this.log('Branch cleanup disabled');
      return { "cleaned": false };
    }

    try {
      this.log('Starting branch cleanup...');
      
      const mergedBranches = await this.getMergedBranches();
      const deletedBranches = [];

      for (const branch of mergedBranches) {
        try {
          // Skip protected branches
          if (['main', 'master', 'develop', 'dev'].includes(branch)) {
            continue;
          }

          this.log(`Deleting merged "branch": ${branch}`);
          execSync(`git branch -d ${branch}`, { "stdio": 'pipe' });
          deletedBranches.push(branch);
        } catch (error) {
          this.log(`Failed to delete branch ${branch}: ${error.message}`);
        }
      }

      this.log(`Cleaned up ${deletedBranches.length} branches`);
      
      return {
        "cleaned": true,
        deletedBranches,
        "totalDeleted": deletedBranches.length
      };
    } catch (error) {
      this.log(`Branch cleanup "failed": ${error.message}`);
      return { "cleaned": false, "error": error.message };
    }
  }

  async checkForConflicts() {
    try {
      this.log('Checking for merge conflicts...');
      
      // Check if there are any unmerged files
      const unmergedFiles = execSync('git diff --name-only --diff-filter=U', { 
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).trim();

      if (unmergedFiles) {
        const files = unmergedFiles.split('\n').filter(f => f.trim());
        this.log(`Found merge conflicts in ${files.length} "files": ${files.join(', ')}`);
        return { "hasConflicts": true, files };
      }

      this.log('No merge conflicts found');
      return { "hasConflicts": false, "files": [] };
    } catch (error) {
      this.log(`Conflict check "failed": ${error.message}`);
      return { "hasConflicts": false, "error": error.message };
    }
  }

  async resolveConflicts() {
    if (!this.conflictResolution) {
      this.log('Conflict resolution disabled');
      return { "resolved": false };
    }

    try {
      const conflictCheck = await this.checkForConflicts();
      
      if (!conflictCheck.hasConflicts) {
        this.log('No conflicts to resolve');
        return { "resolved": true, "message": 'No conflicts found' };
      }

      this.log(`Resolving conflicts in ${conflictCheck.files.length} files...`);
      
      // For automated conflict resolution, we'll use a simple strategy
      // In practice, you might want more sophisticated conflict resolution
      for (const file of conflictCheck.files) {
        try {
          this.log(`Resolving conflicts in ${file}...`);
          
          // Read the file and resolve conflicts (simplified approach)
          let content = fs.readFileSync(file, 'utf8');
          
          // Remove conflict markers and keep both versions (simplified)
