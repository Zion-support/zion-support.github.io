const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PRManagementAutomation {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'pr-management.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async getRemoteBranches() {
    try {
      const output = await this.runCommand('git branch -r', 'Get remote branches');
      return output.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'))
        .filter(branch => !branch.includes('main') && !branch.includes('master'));
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'error');
      return [];
    }
  }

  async checkBranchStatus(branchName) {
    try {
      const cleanBranchName = branchName.replace('origin/', '');
      this.log(`Checking status for branch: ${cleanBranchName}`);
      
      // Check if branch exists locally
      const localExists = await this.runCommand(`git show-ref --verify --quiet refs/heads/${cleanBranchName}`, 'Check local branch existence').then(() => true).catch(() => false);
      
      // Get branch info
      const branchInfo = await this.runCommand(`git log --oneline origin/${cleanBranchName} -1`, 'Get latest commit info');
      
      return {
        branch: cleanBranchName,
        localExists,
        latestCommit: branchInfo.trim(),
        status: 'ready_for_merge'
      };
    } catch (error) {
      this.log(`Error checking branch ${branchName}: ${error.message}`, 'error');
      return {
        branch: branchName.replace('origin/', ''),
        localExists: false,
        latestCommit: 'Unknown',
        status: 'error'
      };
    }
  }

  async mergeBranch(branchName) {
    try {
      const cleanBranchName = branchName.replace('origin/', '');
      this.log(`Starting merge process for branch: ${cleanBranchName}`);
      
      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetch latest changes');
      
      // Checkout the branch
      await this.runCommand(`git checkout -b ${cleanBranchName} origin/${cleanBranchName}`, `Create local branch ${cleanBranchName}`);
      
      // Switch back to main
      await this.runCommand('git checkout main', 'Switch to main branch');
      
      // Merge the branch
      await this.runCommand(`git merge ${cleanBranchName} --no-ff -m "Merge branch ${cleanBranchName} into main"`, `Merge ${cleanBranchName} into main`);
      
      // Push changes
      await this.runCommand('git push origin main', 'Push merged changes');
      
      // Clean up local branch
      await this.runCommand(`git branch -d ${cleanBranchName}`, `Delete local branch ${cleanBranchName}`);
      
      this.log(`✅ Successfully merged branch: ${cleanBranchName}`);
      return { success: true, branch: cleanBranchName };
    } catch (error) {
      this.log(`❌ Failed to merge branch ${branchName}: ${error.message}`, 'error');
      return { success: false, branch: branchName.replace('origin/', ''), error: error.message };
    }
  }

  async processAllBranches() {
    this.log('🚀 Starting comprehensive PR management process...');
    
    const branches = await this.getRemoteBranches();
    this.log(`Found ${branches.length} remote branches to process`);
    
    const results = {
      processed: 0,
      merged: 0,
      failed: 0,
      skipped: 0,
      details: []
    };

    for (const branch of branches) {
      try {
        results.processed++;
        this.log(`Processing branch: ${branch}`);
        
        const branchStatus = await this.checkBranchStatus(branch);
        
        if (branchStatus.status === 'ready_for_merge') {
          const mergeResult = await this.mergeBranch(branch);
          if (mergeResult.success) {
            results.merged++;
            results.details.push({
              branch: mergeResult.branch,
              status: 'merged',
              timestamp: new Date().toISOString()
            });
          } else {
            results.failed++;
            results.details.push({
              branch: mergeResult.branch,
              status: 'failed',
              error: mergeResult.error,
              timestamp: new Date().toISOString()
            });
          }
        } else {
          results.skipped++;
          results.details.push({
            branch: branchStatus.branch,
            status: 'skipped',
            reason: branchStatus.status,
            timestamp: new Date().toISOString()
          });
        }
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        this.log(`Error processing branch ${branch}: ${error.message}`, 'error');
        results.failed++;
        results.details.push({
          branch: branch.replace('origin/', ''),
          status: 'error',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      summary: results,
      totalBranches: branches.length
    };

    const reportFile = path.join(this.logsDir, 'pr-management-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('📊 PR Management Report:');
    this.log(`Total branches processed: ${results.processed}`);
    this.log(`Successfully merged: ${results.merged}`);
    this.log(`Failed merges: ${results.failed}`);
    this.log(`Skipped branches: ${results.skipped}`);
    this.log(`Report saved to: ${reportFile}`);
    
    return report;
  }

  async start() {
    const command = process.argv[2];
    
    switch (command) {
      case 'status':
        await this.checkAllBranches();
        break;
      case 'merge-all':
        await this.processAllBranches();
        break;
      case 'list':
        const branches = await this.getRemoteBranches();
        this.log(`Found ${branches.length} remote branches:`);
        branches.forEach(branch => this.log(`  - ${branch}`));
        break;
      default:
        this.log('Available commands:');
        this.log('  node pr-management.cjs status    - Check all branch statuses');
        this.log('  node pr-management.cjs merge-all - Merge all eligible branches');
        this.log('  node pr-management.cjs list      - List all remote branches');
    }
  }

  async checkAllBranches() {
    this.log('🔍 Checking status of all remote branches...');
    
    const branches = await this.getRemoteBranches();
    const statuses = [];
    
    for (const branch of branches.slice(0, 10)) { // Check first 10 branches
      const status = await this.checkBranchStatus(branch);
      statuses.push(status);
      this.log(`Branch: ${status.branch} - Status: ${status.status}`);
    }
    
    return statuses;
  }
}

// Run the automation
const prManager = new PRManagementAutomation();
prManager.start().catch(console.error);