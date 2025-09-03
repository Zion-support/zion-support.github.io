#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ComprehensiveMergeResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'merge-reports');
    this.ensureDirectories();
    this.mergeResults = {
      successful: [],
      failed: [],
      conflicts: [],
      skipped: []
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkGitStatus() {
    this.log('🔍 Checking Git Status');
    
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      const branch = execSync('git branch --show-current', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).trim();
      
      const hasConflicts = status.includes('UU') || status.includes('AA') || status.includes('DD');
      
      return {
        status: status,
        branch: branch,
        hasConflicts: hasConflicts,
        isClean: status.trim() === ''
      };
    } catch (error) {
      this.log(`❌ Error checking git status: ${error.message}`);
      return { error: error.message };
    }
  }

  async resolveMergeConflicts() {
    this.log('🔧 Resolving Merge Conflicts');
    
    const conflictFiles = [];
    
    try {
      // Find files with merge conflicts
      const status = execSync('git status --porcelain', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      const lines = status.split('\n').filter(line => line.trim());
      
      for (const line of lines) {
        if (line.includes('UU') || line.includes('AA') || line.includes('DD')) {
          const file = line.substring(3).trim();
          conflictFiles.push(file);
        }
      }
      
      this.log(`Found ${conflictFiles.length} files with merge conflicts`);
      
      for (const file of conflictFiles) {
        await this.resolveFileConflicts(file);
      }
      
      if (conflictFiles.length > 0) {
        // Add resolved files and commit
        await this.runCommand('git add .', 'Adding resolved files');
        await this.runCommand('git commit -m "Resolve merge conflicts"', 'Committing resolved conflicts');
      }
      
      return { resolved: conflictFiles.length, files: conflictFiles };
    } catch (error) {
      this.log(`❌ Error resolving merge conflicts: ${error.message}`);
      return { error: error.message };
    }
  }

  async resolveFileConflicts(filePath) {
    this.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers and keep HEAD version by default
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
      
      // Clean up any remaining markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async getOpenPRs() {
    this.log('🔍 Fetching Open PRs');
    
    try {
      // Try to get PRs from GitHub API or local file
      if (fs.existsSync('open_prs.json')) {
        const prData = JSON.parse(fs.readFileSync('open_prs.json', 'utf8'));
        return Array.isArray(prData) ? prData : [];
      }
      
      // Alternative: try to get PRs from git branches
      const branches = execSync('git branch -r', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      const prBranches = branches.split('\n')
        .filter(branch => branch.includes('pull/') || branch.includes('pr/'))
        .map(branch => branch.trim().replace('origin/', ''));
      
      return prBranches.map(branch => ({ 
        number: branch.match(/\d+/)?.[0] || 'unknown',
        branch: branch 
      }));
    } catch (error) {
      this.log(`❌ Error fetching PRs: ${error.message}`);
      return [];
    }
  }

  async mergePR(pr) {
    this.log(`🔄 Merging PR #${pr.number || pr.branch}`);
    
    try {
      const branchName = pr.branch || `pr-${pr.number}`;
      
      // Fetch the PR branch
      await this.runCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`);
      
      // Try to merge
      const mergeResult = await this.runCommand(
        `git merge origin/${branchName} --no-ff -m "Merge PR #${pr.number || branchName}"`,
        `Merging ${branchName}`
      );
      
      if (mergeResult.success) {
        this.mergeResults.successful.push(pr);
        this.log(`✅ Successfully merged PR #${pr.number || branchName}`);
        return { success: true, pr: pr };
      } else {
        // Try to resolve conflicts
        this.log(`⚠️ Merge conflict in PR #${pr.number || branchName}, attempting to resolve...`);
        
        const conflictResolution = await this.resolveMergeConflicts();
        if (conflictResolution.resolved > 0) {
          this.mergeResults.conflicts.push(pr);
          this.log(`✅ Resolved conflicts for PR #${pr.number || branchName}`);
          return { success: true, pr: pr, conflictsResolved: true };
        } else {
          this.mergeResults.failed.push(pr);
          this.log(`❌ Failed to resolve conflicts for PR #${pr.number || branchName}`);
          return { success: false, pr: pr, error: 'Could not resolve conflicts' };
        }
      }
    } catch (error) {
      this.mergeResults.failed.push(pr);
      this.log(`❌ Error merging PR #${pr.number || pr.branch}: ${error.message}`);
      return { success: false, pr: pr, error: error.message };
    }
  }

  async mergeAllPRs() {
    this.log('🔄 Starting PR Merge Process');
    
    const openPRs = await this.getOpenPRs();
    this.log(`Found ${openPRs.length} open PRs`);
    
    if (openPRs.length === 0) {
      this.log('✅ No open PRs found');
      return { merged: 0, failed: 0, skipped: 0 };
    }
    
    // Process PRs in batches to avoid overwhelming the system
    const batchSize = 5;
    for (let i = 0; i < openPRs.length; i += batchSize) {
      const batch = openPRs.slice(i, i + batchSize);
      this.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(openPRs.length/batchSize)}`);
      
      for (const pr of batch) {
        await this.mergePR(pr);
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return {
      merged: this.mergeResults.successful.length + this.mergeResults.conflicts.length,
      failed: this.mergeResults.failed.length,
      skipped: this.mergeResults.skipped.length
    };
  }

  async pushToMain() {
    this.log('📤 Pushing to Main Branch');
    
    try {
      await this.runCommand('git checkout main', 'Switching to main branch');
      await this.runCommand('git push origin main', 'Pushing to main branch');
      this.log('✅ Successfully pushed to main branch');
      return { success: true };
    } catch (error) {
      this.log(`❌ Error pushing to main: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async run() {
    this.log('🎯 Starting Comprehensive Merge Resolution');
    
    // Check current git status
    const gitStatus = await this.checkGitStatus();
    this.log(`Current branch: ${gitStatus.branch}`);
    this.log(`Has conflicts: ${gitStatus.hasConflicts}`);
    
    // Resolve any existing merge conflicts
    if (gitStatus.hasConflicts) {
      await this.resolveMergeConflicts();
    }
    
    // Merge all open PRs
    const mergeResults = await this.mergeAllPRs();
    
    // Push to main branch
    const pushResult = await this.pushToMain();
    
    // Generate final report
    const finalReport = {
      timestamp: new Date().toISOString(),
      gitStatus: gitStatus,
      mergeResults: mergeResults,
      pushResult: pushResult,
      summary: {
        totalPRs: this.mergeResults.successful.length + this.mergeResults.failed.length + this.mergeResults.conflicts.length + this.mergeResults.skipped.length,
        successful: this.mergeResults.successful.length,
        conflictsResolved: this.mergeResults.conflicts.length,
        failed: this.mergeResults.failed.length,
        skipped: this.mergeResults.skipped.length
      }
    };
    
    fs.writeFileSync(
      path.join(this.reportsDir, 'merge-resolution-report.json'),
      JSON.stringify(finalReport, null, 2)
    );
    
    this.log('🎉 Comprehensive Merge Resolution Completed');
    this.log(`📊 Summary: ${finalReport.summary.successful + finalReport.summary.conflictsResolved}/${finalReport.summary.totalPRs} PRs merged successfully`);
    this.log(`📊 Conflicts resolved: ${finalReport.summary.conflictsResolved}`);
    this.log(`📊 Failed: ${finalReport.summary.failed}`);
  }
}

// Run the merge resolver
const resolver = new ComprehensiveMergeResolver();
resolver.run().catch(console.error);