#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TargetedMergeResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.ensureDirectories();
    this.mergeStats = {
      branchesProcessed: 0,
      conflictsResolved: 0,
      mergesSuccessful: 0,
      errors: 0
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.logsDir, 'targeted-merge.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async run() {
    this.log('🚀 Starting Targeted Merge Conflict Resolver...');
    
    try {
      // Step 1: Ensure we're on main branch
      await this.ensureMainBranch();
      
      // Step 2: Get priority branches (focus on the most important ones first)
      const priorityBranches = await this.getPriorityBranches();
      this.log(`Found ${priorityBranches.length} priority branches to process`);
      
      // Step 3: Process priority branches
      for (const branch of priorityBranches) {
        await this.processBranch(branch);
      }
      
      // Step 4: Final cleanup
      await this.finalizeMerges();
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      this.mergeStats.errors++;
    }
    
    this.generateReport();
  }

  async ensureMainBranch() {
    this.log('📋 Ensuring we are on main branch...');
    
    try {
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      
      if (currentBranch !== 'main') {
        this.log(`Switching from ${currentBranch} to main...`);
        execSync('git checkout main', { stdio: 'inherit' });
      }
      
      this.log('Pulling latest changes from main...');
      execSync('git pull origin main', { stdio: 'inherit' });
      
    } catch (error) {
      throw new Error(`Failed to ensure main branch: ${error.message}`);
    }
  }

  async getPriorityBranches() {
    this.log('🔍 Identifying priority branches...');
    
    try {
      // Fetch all remote branches
      execSync('git fetch --all', { stdio: 'inherit' });
      
      // Get list of remote branches
      const branchesOutput = execSync('git branch -r', { encoding: 'utf8' });
      const allBranches = branchesOutput
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
        .map(line => line.replace('origin/', ''));
      
      // Filter for priority branches (focus on feature branches and fixes)
      const priorityBranches = allBranches.filter(branch => {
        return branch.includes('fix-') || 
               branch.includes('feature-') || 
               branch.includes('enhance-') ||
               branch.includes('implement-') ||
               branch.includes('update-') ||
               branch.includes('add-') ||
               branch.includes('improve-');
      });
      
      // Limit to first 50 branches to avoid overwhelming the system
      const limitedBranches = priorityBranches.slice(0, 50);
      
      this.log(`Found ${limitedBranches.length} priority branches out of ${allBranches.length} total`);
      return limitedBranches;
      
    } catch (error) {
      throw new Error(`Failed to get priority branches: ${error.message}`);
    }
  }

  async processBranch(branchName) {
    this.log(`🔄 Processing branch: ${branchName}`);
    this.mergeStats.branchesProcessed++;
    
    try {
      // Attempt to merge the branch
      const mergeResult = await this.attemptMerge(branchName);
      
      if (mergeResult.success) {
        this.mergeStats.mergesSuccessful++;
        this.log(`✅ Successfully merged ${branchName}`);
      } else {
        this.log(`⚠️ Merge failed for ${branchName}: ${mergeResult.error}`);
      }
      
    } catch (error) {
      this.log(`❌ Error processing branch ${branchName}: ${error.message}`, 'ERROR');
      this.mergeStats.errors++;
    }
  }

  async attemptMerge(branchName) {
    try {
      this.log(`🔄 Attempting to merge ${branchName} into main...`);
      
      // Try to merge the branch
      execSync(`git merge origin/${branchName} --no-edit`, { 
        stdio: 'pipe',
        timeout: 60000 // 1 minute timeout
      });
      
      return { success: true };
      
    } catch (error) {
      // Check if there are merge conflicts
      if (error.status === 1) {
        this.log(`⚠️ Merge conflicts detected in ${branchName}, attempting to resolve...`);
        return await this.resolveMergeConflicts(branchName);
      } else {
        return { success: false, error: error.message };
      }
    }
  }

  async resolveMergeConflicts(branchName) {
    try {
      // Get list of conflicted files
      const conflictedFiles = this.getConflictedFiles();
      this.log(`Found ${conflictedFiles.length} conflicted files in ${branchName}`);
      
      if (conflictedFiles.length === 0) {
        // No conflicts, try to continue merge
        execSync('git merge --continue', { stdio: 'pipe' });
        return { success: true };
      }
      
      // Resolve conflicts in each file
      for (const file of conflictedFiles) {
        await this.resolveFileConflicts(file);
      }
      
      // Add resolved files
      execSync('git add .', { stdio: 'pipe' });
      
      // Continue merge
      execSync('git merge --continue', { stdio: 'pipe' });
      
      this.mergeStats.conflictsResolved += conflictedFiles.length;
      return { success: true };
      
    } catch (error) {
      // If resolution fails, abort the merge
      try {
        execSync('git merge --abort', { stdio: 'pipe' });
      } catch (abortError) {
        this.log(`⚠️ Failed to abort merge: ${abortError.message}`, 'WARN');
      }
      
      return { success: false, error: `Failed to resolve conflicts: ${error.message}` };
    }
  }

  getConflictedFiles() {
    try {
      const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
      return statusOutput
        .split('\n')
        .filter(line => line.startsWith('UU ') || line.startsWith('AA ') || line.startsWith('DD '))
        .map(line => line.substring(3));
    } catch (error) {
      return [];
    }
  }

  async resolveFileConflicts(filePath) {
    this.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflict markers
      if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
        return; // No conflicts in this file
      }
      
      // Apply automatic conflict resolution
      const resolvedContent = this.applyConflictResolution(content, filePath);
      
      // Write resolved content
      fs.writeFileSync(filePath, resolvedContent);
      
      this.log(`✅ Resolved conflicts in: ${filePath}`);
      
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  applyConflictResolution(content, filePath) {
    let resolvedContent = content;
    
    // Strategy: Keep incoming changes (after =======) and remove conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // For specific file types, apply additional cleanup
    const fileExt = path.extname(filePath).toLowerCase();
    
    if (fileExt === '.json') {
      resolvedContent = this.cleanupJson(resolvedContent);
    } else if (['.js', '.jsx', '.ts', '.tsx'].includes(fileExt)) {
      resolvedContent = this.cleanupCode(resolvedContent);
    }
    
    return resolvedContent;
  }

  cleanupJson(content) {
    try {
      // Try to parse as JSON to validate
      JSON.parse(content);
      return content;
    } catch (error) {
      // If invalid, try to fix common issues
      let fixed = content;
      
      // Remove trailing commas
      fixed = fixed.replace(/,(\s*[}\]])/g, '$1');
      
      // Try parsing again
      try {
        JSON.parse(fixed);
        return fixed;
      } catch (e) {
        // If still invalid, return original content
        return content;
      }
    }
  }

  cleanupCode(content) {
    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('import ') || trimmedLine.startsWith('export ')) {
        if (!seenImports.has(trimmedLine)) {
          seenImports.add(trimmedLine);
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    return cleanedLines.join('\n');
  }

  async finalizeMerges() {
    this.log('🎯 Finalizing merges...');
    
    try {
      // Commit any remaining changes
      try {
        execSync('git commit -m "Auto-resolve merge conflicts"', { stdio: 'pipe' });
      } catch (error) {
        // No changes to commit
      }
      
      // Push changes to remote
      execSync('git push origin main', { stdio: 'inherit' });
      this.log('✅ Successfully pushed merged changes to remote');
      
    } catch (error) {
      this.log(`❌ Failed to push changes: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    this.log('📊 Generating merge resolution report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        branchesProcessed: this.mergeStats.branchesProcessed,
        conflictsResolved: this.mergeStats.conflictsResolved,
        mergesSuccessful: this.mergeStats.mergesSuccessful,
        errors: this.mergeStats.errors
      },
      successRate: this.mergeStats.branchesProcessed > 0 
        ? (this.mergeStats.mergesSuccessful / this.mergeStats.branchesProcessed * 100).toFixed(2)
        : 0
    };
    
    // Write report to file
    const reportPath = path.join(this.logsDir, 'targeted-merge-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📋 Targeted Merge Resolution Summary:');
    this.log(`   Branches Processed: ${report.summary.branchesProcessed}`);
    this.log(`   Conflicts Resolved: ${report.summary.conflictsResolved}`);
    this.log(`   Successful Merges: ${report.summary.mergesSuccessful}`);
    this.log(`   Errors: ${report.summary.errors}`);
    this.log(`   Success Rate: ${report.successRate}%`);
    
    this.log(`📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the targeted merge resolver
if (require.main === module) {
  const resolver = new TargetedMergeResolver();
  resolver.run().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = TargetedMergeResolver;