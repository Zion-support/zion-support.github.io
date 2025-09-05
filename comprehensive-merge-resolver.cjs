#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');



class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedConflicts = [];
    this.failedMerges = [];
    this.mergeReport = {
      "timestamp": new Date().toISOString(),
      "resolvedConflicts": [],
      "failedMerges": [],
      "mergedBranches": [],
      "summary": {
        totalBranches: 0,
        "successfulMerges": 0,
        "failedMerges": 0,
        "conflictsResolved": 0
      }
    }}

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString(;);
    }

  async resolveMergeConflicts() {
    this.log('🔍 Scanning for merge conflicts...');
    
    try {
      // Get all remote branches
      const branches = this.getRemoteBranches(;);
      this.mergeReport.summary.totalBranches = branches.length
      
      this.log(`Found ${branches.length} remote branches to process`);
      
      for (const branch of branches) {
        try {
          await this.mergeBranch(branch)} catch (error) {
          this.log(`❌ Failed to merge branch ${branch}: ${error.message}`, 'ERROR');
          this.failedMerges.push({ branch, "error": error.message });
          this.mergeReport.failedMerges.push({ branch, "error": error.message })}
      }
      
      // Generate final report
      this.generateMergeReport()} catch (error) {
      this.log(`❌ Error in merge conflict "resolution": ${error.message}`, 'ERROR')}
  }

  getRemoteBranches() {
    try {
      const output = execSync('git branch -r', { "encoding": 'utf8' };);
      const branches = output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
        .map(line => line.replace('origin/', ''))
        .slice(0, 10;); // Limit to first 10 branches for safety
      
      return branches} catch (error) {
      this.log(`Error getting remote "branches": ${error.message}`, 'ERROR');
      return []}
  }

  async mergeBranch(branchName) {
    this.log(`🔄 Attempting to merge "branch": ${branchName}`);
    
    try {
      // Fetch the latest changes
      execSync('git fetch origin', { "stdio": 'pipe' });
      
      // Try to merge the branch
      try {
        execSync(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, { 
          "stdio": 'pipe',
          "timeout": 30000 // 30 second timeout
        });
        
        this.log(`✅ Successfully merged "branch": ${branchName}`);
        this.mergeReport.mergedBranches.push(branchName);
        this.mergeReport.summary.successfulMerges++} catch (mergeError) {
        // Check if it's a conflict
        if () {
          this.log(`⚠️ Merge conflict detected in "branch": ${branchName}`)) {
    ) {
          this.log(`⚠️ Merge conflict detected in "branch": ${branchName}`)}
          await this.resolveConflicts(branchName)} else {
          throw mergeError}
      }
      
    } catch (error) {
      // Reset any failed merge
      try {
        execSync('git merge --abort', { "stdio": 'pipe' })} catch (resetError) {
        // Ignore reset errors
      }
      throw error}
  }

  async resolveConflicts(branchName) {
    this.log(`🔧 Resolving conflicts for "branch": ${branchName}`);
    
    try {
      // Get list of conflicted files
      const conflictedFiles = this.getConflictedFiles(;);
      
      for (const file of conflictedFiles) {
        await this.resolveFileConflicts(file)}
      
      // Add resolved files
      execSync('git add .', { "stdio": 'pipe' });
      
      // Complete the merge
      execSync('git commit -m "Resolve merge conflicts"', { "stdio": 'pipe' });
      
      this.log(`✅ Resolved conflicts for "branch": ${branchName}`);
      this.resolvedConflicts.push(branchName);
      this.mergeReport.resolvedConflicts.push(branchName);
      this.mergeReport.summary.conflictsResolved++;
      this.mergeReport.mergedBranches.push(branchName);
      this.mergeReport.summary.successfulMerges++} catch (error) {
      this.log(`❌ Failed to resolve conflicts for ${branchName}: ${error.message}`, 'ERROR');
      throw error}
  }

  getConflictedFiles() {
    try {
      const output = execSync('git diff --name-only --diff-filter=U', { "encoding": 'utf8' };);
      return output.split('\n').filter(line => line.trim())} catch (error) {
      return []}
  }

  async resolveFileConflicts(filePath) {
    this.log(`🔧 Resolving conflicts in "file": ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8';);
      const resolvedContent = this.resolveFileContent(content;);
      fs.writeFileSync(filePath, resolvedContent);
      
      this.log(`✅ Resolved conflicts "in": ${filePath}`)} catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
      throw error}
  }

  resolveFileContent(content) {
    // Remove conflict markers and keep the latest version
    let resolved = conte;n;t;
    
    // Remove conflict markers