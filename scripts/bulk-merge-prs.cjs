#!/usr/bin/env node
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
class BulkPRMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'bulk-merge-prs.log');
    this.ensureLogDir();
    this.conflicts = [];
    this.successful = [];
    this.failed = [];
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
  async getRemoteBranches() {
    try {
      const output = execSync('git branch -r', { encoding: 'utf8' });
      const branches = output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD'))
        .filter(line => line.startsWith('origin/cursor/'))
        .map(line => line.replace('origin/', ''));
      this.log(`Found ${branches.length} cursor branches to process`);
      return branches;
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`);
      return [];
    }
  }
  async mergeBranch(branchName) {
    try {
      this.log(`Attempting to merge branch: ${branchName}`);
      // Fetch the latest changes
      execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
      // Try to merge
      try {
        execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe' });
        this.successful.push(branchName);
        this.log(`✅ Successfully merged: ${branchName}`);
        return true;
      } catch (mergeError) {
        // Check if it's a conflict
        if (mergeError.stdout && mergeError.stdout.includes('CONFLICT')) {
          this.log(`⚠️  Merge conflict in: ${branchName}`);
          this.conflicts.push(branchName);
          // Try to resolve conflicts automatically
          if (this.autoResolveConflicts(branchName)) {
            this.successful.push(branchName);
            this.log(`✅ Auto-resolved conflicts for: ${branchName}`);
            return true;
          } else {
            this.log(`❌ Failed to auto-resolve conflicts for: ${branchName}`);
            // Abort the merge
            execSync('git merge --abort', { stdio: 'pipe' });
            this.failed.push(branchName);
            return false;
          }
        } else {
          this.log(`❌ Merge failed for: ${branchName} - ${mergeError.message}`);
          this.failed.push(branchName);
          return false;
        }
      }
    } catch (error) {
      this.log(`❌ Error processing branch ${branchName}: ${error.message}`);
      this.failed.push(branchName);
      return false;
    }
  }
  autoResolveConflicts(branchName) {
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim());
      this.log(`Auto-resolving conflicts in ${conflictedFiles.length} files for ${branchName}`);
      let allResolved = true;
      for (const file of conflictedFiles) {
        if (!file.trim()) continue;
        try {
          const filePath = path.join(this.projectRoot, file);
          if (!fs.existsSync(filePath)) {
            this.log(`File not found: ${file}`);
            continue;
          }
          const content = fs.readFileSync(filePath, 'utf8');
          // Check if file has conflict markers
        // Merge both sections, removing duplicates
        const headLines = head.split('\n').filter(line => line.trim());
        const theirLines = theirs.split('\n').filter(line => line.trim());
        // Combine and deduplicate
        const combined = [...new Set([...headLines, ...theirLines])];
        return combined.join('\n') + '\n';
      })
  }
  resolveGenericConflicts(content) {
    // For generic files, prefer incoming changes
    return content
