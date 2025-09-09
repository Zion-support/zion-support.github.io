#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveBranchMerger {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.mergedBranches = [];
    this.failedBranches = [];
    this.logFile = path.join(this.rootPath, 'comprehensive-branch-merge.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    console.log(message);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}: ${command}`);
    try {
      const output = execSync(command, { cwd: this.rootPath, encoding: 'utf8', stdio: 'pipe' });
      this.log(`✅ Success: ${description}`);
      return output;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      throw error;
    }
  }

  async getRemoteBranches() {
    try {
      const output = await this.runCommand('git branch -r', 'Get remote branches');
      const branches = output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD') && !line.includes('->'))
        .map(line => line.replace('origin/', ''));
      
      this.log(`📋 Found ${branches.length} remote branches`);
      return branches;
    } catch (error) {
      this.log(`❌ Failed to get remote branches: ${error.message}`);
      return [];
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`🔄 Attempting to merge branch: ${branchName}`);
      
      // Fetch the latest version of the branch
      await this.runCommand(`git fetch origin ${branchName}`, `Fetch origin/${branchName}`);
      
      // Try to merge the branch
      await this.runCommand(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, `Merge ${branchName}`);
      
      this.mergedBranches.push(branchName);
      this.log(`✅ Successfully merged: ${branchName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to merge ${branchName}: ${error.message}`);
      
      // Try to resolve conflicts automatically
      try {
        await this.resolveConflicts(branchName);
        this.mergedBranches.push(branchName);
        this.log(`✅ Successfully resolved conflicts and merged: ${branchName}`);
        return true;
      } catch (resolveError) {
        this.log(`❌ Failed to resolve conflicts for ${branchName}: ${resolveError.message}`);
        this.failedBranches.push({ branch: branchName, error: resolveError.message });
        
        // Abort the merge
        try {
          await this.runCommand('git merge --abort', `Abort merge for ${branchName}`);
        } catch (abortError) {
          this.log(`⚠️ Failed to abort merge for ${branchName}: ${abortError.message}`);
        }
        return false;
      }
    }
  }

  async resolveConflicts(branchName) {
    this.log(`🔧 Attempting to resolve conflicts for: ${branchName}`);
    
    // Get list of conflicted files
    const statusOutput = await this.runCommand('git status --porcelain', 'Get git status');
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop());
    
    this.log(`📄 Found ${conflictedFiles.length} conflicted files`);
    
    for (const file of conflictedFiles) {
      await this.resolveFileConflicts(file);
    }
    
    // Add resolved files
    await this.runCommand('git add .', 'Add resolved files');
    
    // Commit the merge
    await this.runCommand(`git commit -m "Resolve conflicts and merge ${branchName}"`, `Commit merge for ${branchName}`);
  }

  async resolveFileConflicts(filePath) {
    this.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Simple conflict resolution strategy
      let resolvedContent = content
        // Remove conflict markers and keep the HEAD version (our main branch)
        .replace(/([\s\S]*?)
        // Handle cases where there's no HEAD section
        .replace(/
        // Clean up any remaining conflict markers
        .replace(/
        .replace(/\n/g, '')
        .replace(/
      
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`✅ Resolved conflicts in: ${filePath}`);
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`);
      throw error;
    }
  }

  async mergeAllBranches() {
    this.log('🚀 Starting comprehensive branch merging process');
    
    // Ensure we're on main branch
    await this.runCommand('git checkout main', 'Switch to main branch');
    
    // Get all remote branches
    const branches = await this.getRemoteBranches();
    
    if (branches.length === 0) {
      this.log('ℹ️ No remote branches found to merge');
      return;
    }
    
    // Filter out main branch and focus on feature branches
    const featureBranches = branches.filter(branch => 
      branch !== 'main' && 
      !branch.includes('HEAD') &&
      branch.startsWith('cursor/') // Focus on cursor branches first
    );
    
    this.log(`🎯 Found ${featureBranches.length} feature branches to merge`);
    
    // Process branches in batches to avoid overwhelming the system
    const batchSize = 10;
    for (let i = 0; i < featureBranches.length; i += batchSize) {
      const batch = featureBranches.slice(i, i + batchSize);
      this.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(featureBranches.length / batchSize)}`);
      
      for (const branch of batch) {
        try {
          await this.mergeBranch(branch);
        } catch (error) {
          this.log(`❌ Critical error merging ${branch}: ${error.message}`);
          this.failedBranches.push({ branch, error: error.message });
        }
      }
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalBranches: this.mergedBranches.length + this.failedBranches.length,
        mergedBranches: this.mergedBranches.length,
        failedBranches: this.failedBranches.length,
        successRate: `${((this.mergedBranches.length / (this.mergedBranches.length + this.failedBranches.length)) * 100).toFixed(2)}%`
      },
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches
    };
    
    const reportFile = path.join(this.rootPath, 'branch-merge-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('\n📊 MERGE REPORT');
    this.log('=' .repeat(50));
    this.log(`Total branches processed: ${report.summary.totalBranches}`);
    this.log(`Successfully merged: ${report.summary.mergedBranches}`);
    this.log(`Failed to merge: ${report.summary.failedBranches}`);
    this.log(`Success rate: ${report.summary.successRate}`);
    this.log(`Report saved to: ${reportFile}`);
    
    if (this.failedBranches.length > 0) {
      this.log('\n❌ Failed branches:');
      this.failedBranches.forEach(({ branch, error }) => {
        this.log(`  - ${branch}: ${error}`);
      });
    }
  }

  async run() {
    try {
      await this.mergeAllBranches();
    } catch (error) {
      this.log(`💥 Critical error in branch merger: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the merger
const merger = new ComprehensiveBranchMerger();
merger.run().catch(console.error);