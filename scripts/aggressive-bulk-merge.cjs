#!/usr/bin/env node
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
class AggressiveBulkMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'aggressive-bulk-merge.log');
    this.ensureLogDir();
    this.successful = [];
    this.failed = [];
    this.skipped = [];
    this.totalProcessed = 0;
  }
  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }
  async getCursorBranches() {
    try {
      const output = execSync('git branch -r | grep "origin/cursor/"', { encoding: 'utf8' });
      return output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && line.startsWith('origin/cursor/'))
        .map(line => line.replace('origin/', ''));
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`);
      return [];
    }
  }
  async tryMergeBranch(branchName) {
    try {
      this.totalProcessed++;
      if (this.totalProcessed % 100 === 0) {
        this.log(`Progress: ${this.totalProcessed} branches processed`);
      }
      // Try to merge with aggressive strategy
      try {
        execSync(`git merge origin/${branchName} --no-edit --strategy=recursive -X ours`, { 
          stdio: 'pipe',
          timeout: 10000 
        });
        this.successful.push(branchName);
        return true;
      } catch (mergeError) {
        if (mergeError.stdout && mergeError.stdout.includes('CONFLICT')) {
          // Try to resolve conflicts automatically
          try {
            this.autoResolveConflicts();
            execSync('git commit --no-edit', { stdio: 'pipe' });
            this.successful.push(branchName);
            this.log(`✅ Auto-resolved conflicts for: ${branchName}`);
            return true;
          } catch (resolveError) {
            // Abort merge if can't resolve
            execSync('git merge --abort', { stdio: 'pipe' });
            this.failed.push(branchName);
            return false;
          }
        } else if (mergeError.stdout && mergeError.stdout.includes('Already up to date')) {
          this.skipped.push(branchName);
          return true;
        } else {
          // Abort merge on other errors
          try {
            execSync('git merge --abort', { stdio: 'pipe' });
          } catch (abortError) {
            // Ignore abort errors
          }
          this.failed.push(branchName);
          return false;
        }
      }
    } catch (error) {
      this.failed.push(branchName);
      return false;
    }
  }
  autoResolveConflicts() {
    try {
      // Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim());
      for (const file of conflictedFiles) {
        if (!file.trim()) continue;
        try {
          const filePath = path.join(this.projectRoot, file);
          if (!fs.existsSync(filePath)) continue;
          const content = fs.readFileSync(filePath, 'utf8');
