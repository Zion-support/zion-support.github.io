const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MegaPRMerger {
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
    
    const logFile = path.join(this.logsDir, 'mega-pr-merger.log');
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

  async getPriorityBranches() {
    // Get branches that are most likely to merge successfully
    const priorityPatterns = [
      'fix-',
      'improve-',
      'update-',
      'enhance-',
      'add-',
      'implement-'
    ];
    
    try {
      const output = await this.runCommand('git branch -r', 'Get remote branches');
      const allBranches = output.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'))
        .filter(branch => !branch.includes('main') && !branch.includes('master'));
      
      // Prioritize branches by pattern
      const priorityBranches = [];
      const otherBranches = [];
      
      for (const branch of allBranches) {
        const branchName = branch.replace('origin/', '');
        const isPriority = priorityPatterns.some(pattern => branchName.includes(pattern));
        
        if (isPriority) {
          priorityBranches.push(branch);
        } else {
          otherBranches.push(branch);
        }
      }
      
      // Return priority branches first, then others (limit to 20 for efficiency)
      return [...priorityBranches.slice(0, 15), ...otherBranches.slice(0, 5)];
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'error');
      return [];
    }
  }

  async mergeBranchSafely(branchName) {
    try {
      const cleanBranchName = branchName.replace('origin/', '');
      this.log(`🔄 Attempting to merge: ${cleanBranchName}`);
      
      // Ensure we're on main and clean
      await this.runCommand('git checkout main', 'Switch to main branch');
      await this.runCommand('git reset --hard HEAD', 'Reset to clean state');
      
      // Fetch the specific branch
      await this.runCommand(`git fetch origin ${cleanBranchName}`, `Fetch branch ${cleanBranchName}`);
      
      // Try to merge using cherry-pick for safer merging
      try {
        await this.runCommand(`git cherry-pick origin/${cleanBranchName}`, `Cherry-pick ${cleanBranchName}`);
        
        // Push changes
        await this.runCommand('git push origin main', 'Push merged changes');
        
        this.mergedBranches.push(cleanBranchName);
        this.log(`✅ Successfully merged: ${cleanBranchName}`);
        return { success: true, branch: cleanBranchName, method: 'cherry-pick' };
        
      } catch (cherryPickError) {
        // If cherry-pick fails, try regular merge
        try {
          await this.runCommand(`git merge origin/${cleanBranchName} --no-ff -m "Merge ${cleanBranchName}"`, `Merge ${cleanBranchName}`);
          await this.runCommand('git push origin main', 'Push merged changes');
          
          this.mergedBranches.push(cleanBranchName);
          this.log(`✅ Successfully merged: ${cleanBranchName}`);
          return { success: true, branch: cleanBranchName, method: 'merge' };
          
        } catch (mergeError) {
          // If merge fails, abort and skip
          await this.runCommand('git merge --abort', 'Abort failed merge');
          this.failedBranches.push({ branch: cleanBranchName, error: mergeError.message });
          this.log(`❌ Failed to merge: ${cleanBranchName}`, 'error');
          return { success: false, branch: cleanBranchName, error: mergeError.message };
        }
      }
      
    } catch (error) {
      this.failedBranches.push({ branch: branchName.replace('origin/', ''), error: error.message });
      this.log(`❌ Error processing branch ${branchName}: ${error.message}`, 'error');
      return { success: false, branch: branchName.replace('origin/', ''), error: error.message };
    }
  }

  async processAllBranches() {
    this.log('🚀 Starting mega PR merger process...');
    
    const branches = await this.getPriorityBranches();
    this.log(`Found ${branches.length} priority branches to process`);
    
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
        
        const mergeResult = await this.mergeBranchSafely(branch);
        
        if (mergeResult.success) {
          results.merged++;
          results.mergedBranches.push({
            branch: mergeResult.branch,
            method: mergeResult.method,
            timestamp: new Date().toISOString()
          });
        } else {
          results.failed++;
          results.failedBranches.push({
            branch: mergeResult.branch,
            error: mergeResult.error,
            timestamp: new Date().toISOString()
          });
        }
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 1000));
        
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

    const reportFile = path.join(this.logsDir, 'mega-pr-merger-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    
    this.log('📊 Mega PR Merger Report:');
    this.log(`Total branches processed: ${results.processed}`);
    this.log(`Successfully merged: ${results.merged}`);
    this.log(`Failed merges: ${results.failed}`);
    this.log(`Success rate: ${results.summary.successRate}`);
    this.log(`Report saved to: ${reportFile}`);
    
    return results;
  }

  async start() {
    const command = process.argv[2];
    
    switch (command) {
      case 'merge':
        await this.processAllBranches();
        break;
      default:
        this.log('Available commands:');
        this.log('  node mega-pr-merger.cjs merge - Merge priority branches');
    }
  }
}

const merger = new MegaPRMerger();
merger.start().catch(console.error);