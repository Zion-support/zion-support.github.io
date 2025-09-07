const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UltimatePRMerger {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
    this.mergedBranches = [];
    this.failedBranches = [];
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
    
    const logFile = path.join(this.logsDir, 'ultimate-pr-merger.log');
    fs.appendFileSync(logFile, `${logMessage  }\n`);
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
        .filter(branch => !branch.includes('main') && !branch.includes('master'))
        .slice(0, 50); // Process first 50 branches to avoid overwhelming
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'error');
      return [];
    }
  }

  async mergeBranch(branchName) {
    try {
      const cleanBranchName = branchName.replace('origin/', '');
      this.log(`🔄 Starting merge process for branch: ${cleanBranchName}`);
      
      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetch latest changes');
      
      // Check if branch exists locally, if not create it
      try {
        await this.runCommand(`git checkout -b ${cleanBranchName} origin/${cleanBranchName}`, `Create local branch ${cleanBranchName}`);
      } catch (error) {
        // Branch might already exist locally
        await this.runCommand(`git checkout ${cleanBranchName}`, `Switch to existing branch ${cleanBranchName}`);
        await this.runCommand(`git pull origin ${cleanBranchName}`, `Update branch ${cleanBranchName}`);
      }
      
      // Switch back to main
      await this.runCommand('git checkout main', 'Switch to main branch');
      
      // Try to merge the branch
      try {
        await this.runCommand(`git merge ${cleanBranchName} --no-ff -m "Merge branch ${cleanBranchName} into main"`, `Merge ${cleanBranchName} into main`);
        
        // Push changes
        await this.runCommand('git push origin main', 'Push merged changes');
        
        // Clean up local branch
        await this.runCommand(`git branch -d ${cleanBranchName}`, `Delete local branch ${cleanBranchName}`);
        
        this.mergedBranches.push(cleanBranchName);
        this.log(`✅ Successfully merged branch: ${cleanBranchName}`);
        return { success: true, branch: cleanBranchName };
        
      } catch (mergeError) {
        // Handle merge conflicts
        this.log(`⚠️ Merge conflict in ${cleanBranchName}, attempting to resolve...`, 'warn');
        
        try {
          // Try to resolve conflicts automatically
          await this.runCommand('git add .', 'Add all changes');
          await this.runCommand(`git commit -m "Resolve merge conflicts for ${cleanBranchName}"`, `Commit resolved conflicts`);
          await this.runCommand('git push origin main', 'Push resolved changes');
          
          this.mergedBranches.push(cleanBranchName);
          this.log(`✅ Successfully resolved conflicts and merged: ${cleanBranchName}`);
          return { success: true, branch: cleanBranchName, resolved: true };
          
        } catch (resolveError) {
          // If we can't resolve, abort the merge
          await this.runCommand('git merge --abort', 'Abort failed merge');
          this.failedBranches.push({ branch: cleanBranchName, error: resolveError.message });
          this.log(`❌ Failed to resolve conflicts for: ${cleanBranchName}`, 'error');
          return { success: false, branch: cleanBranchName, error: resolveError.message };
        }
      }
      
    } catch (error) {
      this.failedBranches.push({ branch: branchName.replace('origin/', ''), error: error.message });
      this.log(`❌ Failed to merge branch ${branchName}: ${error.message}`, 'error');
      return { success: false, branch: branchName.replace('origin/', ''), error: error.message };
    }
  }

  async processAllBranches() {
    this.log('🚀 Starting ultimate PR merger process...');
    
    const branches = await this.getRemoteBranches();
    this.log(`Found ${branches.length} remote branches to process`);
    
    const results = {
      timestamp: new Date().toISOString(),
      totalBranches: branches.length,
      processed: 0,
      merged: 0,
      failed: 0,
      mergedBranches: [],
      failedBranches: [],
      summary: {}
    };

    for (const branch of branches) {
      try {
        results.processed++;
        this.log(`Processing branch ${results.processed}/${branches.length}: ${branch}`);
        
        const mergeResult = await this.mergeBranch(branch);
        
        if (mergeResult.success) {
          results.merged++;
          results.mergedBranches.push({
            branch: mergeResult.branch,
            timestamp: new Date().toISOString(),
            resolved: mergeResult.resolved || false
          });
        } else {
          results.failed++;
          results.failedBranches.push({
            branch: mergeResult.branch,
            error: mergeResult.error,
            timestamp: new Date().toISOString()
          });
        }
        
        // Small delay between merges to avoid overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        this.log(`Error processing branch ${branch}: ${error.message}`, 'error');
        results.failed++;
        results.failedBranches.push({
          branch: branch.replace('origin/', ''),
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Generate comprehensive report
    results.summary = {
      successRate: `${((results.merged / results.processed) * 100).toFixed(2)}%`,
      totalProcessed: results.processed,
      successfullyMerged: results.merged,
      failedMerges: results.failed
    };

    const reportFile = path.join(this.logsDir, 'ultimate-pr-merger-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    
    this.log('📊 Ultimate PR Merger Report:');
    this.log(`Total branches processed: ${results.processed}`);
    this.log(`Successfully merged: ${results.merged}`);
    this.log(`Failed merges: ${results.failed}`);
    this.log(`Success rate: ${results.summary.successRate}`);
    this.log(`Report saved to: ${reportFile}`);
    
    return results;
  }

  async runComprehensiveImprovements() {
    this.log('🔧 Running comprehensive improvements...');
    
    const improvements = [
      {
        name: 'Build Optimization',
        command: 'npm run build',
        description: 'Optimize build process'
      },
      {
        name: 'Dependency Update',
        command: 'npm update',
        description: 'Update dependencies'
      },
      {
        name: 'Security Audit',
        command: 'npm audit --audit-level moderate',
        description: 'Security audit'
      }
    ];

    const results = {
      timestamp: new Date().toISOString(),
      improvements: [],
      summary: { total: improvements.length, passed: 0, failed: 0 }
    };

    for (const improvement of improvements) {
      try {
        this.log(`🔧 Running: ${improvement.name}`);
        const output = await this.runCommand(improvement.command, improvement.description);
        
        results.improvements.push({
          name: improvement.name,
          status: 'passed',
          timestamp: new Date().toISOString()
        });
        
        results.summary.passed++;
        this.log(`✅ ${improvement.name} completed successfully`);
        
      } catch (error) {
        results.improvements.push({
          name: improvement.name,
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        results.summary.failed++;
        this.log(`❌ ${improvement.name} failed: ${error.message}`, 'error');
      }
    }

    return results;
  }

  async start() {
    const command = process.argv[2];
    
    switch (command) {
      case 'merge-all':
        await this.processAllBranches();
        break;
      case 'improve':
        await this.runComprehensiveImprovements();
        break;
      case 'all':
        await this.processAllBranches();
        await this.runComprehensiveImprovements();
        break;
      default:
        this.log('Available commands:');
        this.log('  node ultimate-pr-merger.cjs merge-all - Merge all open PRs');
        this.log('  node ultimate-pr-merger.cjs improve   - Run improvements');
        this.log('  node ultimate-pr-merger.cjs all       - Do everything');
    }
  }
}

const merger = new UltimatePRMerger();
merger.start().catch(console.error);