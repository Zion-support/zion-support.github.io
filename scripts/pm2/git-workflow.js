#!/usr/bin/env node

/**
 * PM2 Git Workflow Script
 * Manages git operations and branch workflows
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class GitWorkflow {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'git-workflow';
    this.autoBranchCleanup = process.env.AUTO_BRANCH_CLEANUP === 'true';
    this.autoMergeSafe = process.env.AUTO_MERGE_SAFE === 'true';
    this.conflictResolution = process.env.CONFLICT_RESOLUTION === 'true';
    this.branchStrategy = process.env.BRANCH_STRATEGY || 'gitflow';
    this.logFile = `logs/pm2/git-workflow.log`;
    this.errorFile = `logs/pm2/git-workflow-error.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async getGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      const lastCommit = execSync('git log -1 --oneline', { encoding: 'utf8' }).trim();
      
      return {
        success: true,
        branch,
        lastCommit,
        changes: status.split('\n').filter(line => line.trim())
      };
    } catch (error) {
      this.error(`Git status check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async cleanupBranches() {
    this.log('Cleaning up merged branches...');
    
    try {
      // Get list of merged branches
      const mergedBranches = execSync('git branch --merged main', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('main') && !branch.includes('master'));
      
      if (mergedBranches.length === 0) {
        this.log('No merged branches to clean up');
        return { success: true, cleaned: 0 };
      }
      
      this.log(`Found ${mergedBranches.length} merged branches to clean up`);
      
      let cleaned = 0;
      for (const branch of mergedBranches) {
        try {
          execSync(`git branch -d ${branch}`, { stdio: 'pipe' });
          this.log(`Deleted merged branch: ${branch}`);
          cleaned++;
        } catch (err) {
          this.log(`Could not delete branch ${branch}: ${err.message}`, 'WARNING');
        }
      }
      
      return { success: true, cleaned, branches: mergedBranches };
      
    } catch (error) {
      this.error(`Branch cleanup failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkForConflicts() {
    this.log('Checking for merge conflicts...');
    
    try {
      const status = await this.getGitStatus();
      if (!status.success) {
        return status;
      }
      
      // Check for conflict markers in files
      const conflictFiles = [];
      const sourceFiles = this.getSourceFiles();
      
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            conflictFiles.push(file);
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
      
      if (conflictFiles.length > 0) {
        this.log(`Found ${conflictFiles.length} files with merge conflicts`, 'WARNING');
        return {
          success: true,
          hasConflicts: true,
          conflictFiles
        };
      }
      
      this.log('No merge conflicts found');
      return { success: true, hasConflicts: false };
      
    } catch (error) {
      this.error(`Conflict check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async safeMerge() {
    this.log('Attempting safe merge...');
    
    try {
      // Check current status
      const status = await this.getGitStatus();
      if (!status.success) {
        return status;
      }
      
      // Check for conflicts first
      const conflictCheck = await this.checkForConflicts();
      if (conflictCheck.hasConflicts) {
        this.log('Cannot merge due to conflicts', 'WARNING');
        return { success: false, reason: 'conflicts_detected', conflicts: conflictCheck.conflictFiles };
      }
      
      // Check if there are uncommitted changes
      if (status.changes.length > 0) {
        this.log('Cannot merge due to uncommitted changes', 'WARNING');
        return { success: false, reason: 'uncommitted_changes', changes: status.changes };
      }
      
      // Try to merge
      try {
        execSync('git merge --no-ff --no-edit', { stdio: 'pipe' });
        this.log('Merge completed successfully');
        return { success: true, message: 'Merge completed' };
      } catch (mergeError) {
        this.log(`Merge failed: ${mergeError.message}`, 'WARNING');
        return { success: false, reason: 'merge_failed', error: mergeError.message };
      }
      
    } catch (error) {
      this.error(`Safe merge failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  getSourceFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.md'];
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory('.');
    return files;
  }

  async generateWorkflowReport() {
    this.log('Generating git workflow report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      gitStatus: {},
      operations: {},
      summary: {}
    };
    
    try {
      // Get git status
      report.gitStatus = await this.getGitStatus();
      
      // Run operations
      if (this.autoBranchCleanup) {
        report.operations.branchCleanup = await this.cleanupBranches();
      }
      
      if (this.autoMergeSafe) {
        report.operations.safeMerge = await this.safeMerge();
      }
      
      report.operations.conflictCheck = await this.checkForConflicts();
      
      // Generate summary
      const hasConflicts = report.operations.conflictCheck?.hasConflicts || false;
      const mergeSuccess = report.operations.safeMerge?.success || false;
      const branchesCleaned = report.operations.branchCleanup?.cleaned || 0;
      
      report.summary = {
        hasConflicts,
        mergeSuccessful: mergeSuccess,
        branchesCleaned,
        overallStatus: hasConflicts ? 'CONFLICTS' : mergeSuccess ? 'HEALTHY' : 'NEEDS_ATTENTION'
      };
      
      // Save report
      const reportFile = `reports/git-workflow-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Git workflow report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate workflow report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Git workflow service started');
    
    // Ensure directories exist
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    
    // Run initial workflow check
    await this.generateWorkflowReport();
    
    // Set up periodic workflow management
    setInterval(async () => {
      this.log('Running scheduled git workflow...');
      await this.generateWorkflowReport();
    }, 6 * 60 * 60 * 1000); // Every 6 hours
    
    this.log('Git workflow service is running');
  }
}

// Start the service
if (require.main === module) {
  const gitWorkflow = new GitWorkflow();
  gitWorkflow.start().catch(error => {
    console.error('Git workflow failed to start:', error);
    process.exit(1);
  });
}

export default GitWorkflow;