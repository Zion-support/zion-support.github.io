#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveMergeResolver {
  constructor() {
    this.mergeResults = [];
    this.conflictsResolved = 0;
    this.successfulMerges = 0;
    this.failedMerges = 0;
    this.branchesToMerge = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = {
      info: '📋',
      success: '✅',
      error: '❌',
      warning: '⚠️',
      progress: '🔄'
    }[type] || '📋';
    
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        cwd: '/workspace',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async getBranchesToMerge() {
    this.log('🔍 Identifying branches to merge...', 'progress');
    
    try {
      // Get all cursor branches that need merging
      const result = await this.executeCommand('git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | head -50');
      
      if (result.success) {
        this.branchesToMerge = result.output
          .split('\n')
          .filter(line => line.trim())
          .map(line => line.trim().replace('origin/', ''));
        
        this.log(`Found ${this.branchesToMerge.length} branches to merge`, 'info');
        return this.branchesToMerge;
      }
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'error');
    }
    
    return [];
  }

  async resolveMergeConflicts(branchName) {
    this.log(`🔧 Resolving conflicts for branch: ${branchName}`, 'progress');
    
    try {
      // Check if there are any conflicted files
      const statusResult = await this.executeCommand('git status --porcelain');
      
      if (statusResult.success && statusResult.output.includes('UU')) {
        this.log(`Found merge conflicts in ${branchName}`, 'warning');
        
        // List conflicted files
        const conflictFiles = statusResult.output
          .split('\n')
          .filter(line => line.startsWith('UU'))
          .map(line => line.split(' ')[1]);
        
        this.log(`Conflicted files: ${conflictFiles.join(', ')}`, 'info');
        
        // Auto-resolve common conflicts
        for (const file of conflictFiles) {
          await this.resolveFileConflicts(file);
        }
        
        // Add resolved files
        await this.executeCommand('git add .');
        
        this.conflictsResolved++;
        return true;
      }
      
      return true;
    } catch (error) {
      this.log(`Error resolving conflicts for ${branchName}: ${error.message}`, 'error');
      return false;
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Common conflict resolution patterns
      let resolvedContent = content;
      
      // Remove conflict markers and keep both versions when appropriate
      resolvedContent = resolvedContent.replace(
        /\n([\s\S]*?)\n\n([\s\S]*?)\n        (match, headContent, incomingContent) => {
          // If contents are similar, merge them
          if (headContent.trim() === incomingContent.trim()) {
            return headContent;
          }
          
          // For JSX/TSX files, try to merge components
          if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
            return this.mergeJsxContent(headContent, incomingContent);
          }
          
          // For package files, prefer incoming version
          if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
            return incomingContent;
          }
          
          // Default: prefer incoming content
          return incomingContent;
        }
      );
      
      // Clean up any remaining conflict markers
      resolvedContent = resolvedContent.replace(/||      
      // Remove duplicate lines
      const lines = resolvedContent.split('\n');
      const uniqueLines = [...new Set(lines)];
      resolvedContent = uniqueLines.join('\n');
      
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`Resolved conflicts in ${filePath}`, 'success');
      
    } catch (error) {
      this.log(`Error resolving conflicts in ${filePath}: ${error.message}`, 'error');
    }
  }

  mergeJsxContent(headContent, incomingContent) {
    // Simple JSX merge strategy
    try {
      // If both are React components, try to merge props and content
      if (headContent.includes('export default') && incomingContent.includes('export default')) {
        // Prefer the more complete version
        return headContent.length > incomingContent.length ? headContent : incomingContent;
      }
      
      // If one is clearly a component and other is not, prefer component
      if (headContent.includes('<') && !incomingContent.includes('<')) {
        return headContent;
      }
      
      if (incomingContent.includes('<') && !headContent.includes('<')) {
        return incomingContent;
      }
      
      // Default to incoming content
      return incomingContent;
    } catch (error) {
      return incomingContent;
    }
  }

  async mergeBranch(branchName) {
    this.log(`🔄 Attempting to merge branch: ${branchName}`, 'progress');
    
    try {
      // Ensure we're on main
      await this.executeCommand('git checkout main');
      
      // Fetch the latest
      await this.executeCommand('git pull origin main');
      
      // Try to merge the branch
      const mergeResult = await this.executeCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
      
      if (mergeResult.success) {
        this.log(`Successfully merged ${branchName}`, 'success');
        this.successfulMerges++;
        
        // Push the changes
        const pushResult = await this.executeCommand('git push origin main');
        if (pushResult.success) {
          this.log(`Successfully pushed merge for ${branchName}`, 'success');
        } else {
          this.log(`Failed to push merge for ${branchName}: ${pushResult.error}`, 'warning');
        }
        
        return { success: true, branch: branchName };
      } else {
        // Handle merge conflicts
        this.log(`Merge conflicts in ${branchName}, attempting to resolve...`, 'warning');
        
        const conflictResolved = await this.resolveMergeConflicts(branchName);
        
        if (conflictResolved) {
          // Try to complete the merge
          const commitResult = await this.executeCommand('git commit --no-edit');
          
          if (commitResult.success) {
            this.log(`Successfully resolved conflicts and merged ${branchName}`, 'success');
            this.successfulMerges++;
            
            // Push the changes
            await this.executeCommand('git push origin main');
            return { success: true, branch: branchName, conflictsResolved: true };
          } else {
            this.log(`Failed to commit merge for ${branchName}: ${commitResult.error}`, 'error');
            await this.executeCommand('git merge --abort');
          }
        } else {
          this.log(`Failed to resolve conflicts for ${branchName}`, 'error');
          await this.executeCommand('git merge --abort');
        }
        
        this.failedMerges++;
        return { success: false, branch: branchName, error: 'Merge conflicts could not be resolved' };
      }
    } catch (error) {
      this.log(`Error merging ${branchName}: ${error.message}`, 'error');
      this.failedMerges++;
      return { success: false, branch: branchName, error: error.message };
    }
  }

  async mergeAllBranches() {
    this.log('🚀 Starting comprehensive merge process...', 'info');
    
    const branches = await this.getBranchesToMerge();
    
    if (branches.length === 0) {
      this.log('No branches found to merge', 'info');
      return;
    }
    
    this.log(`Processing ${branches.length} branches...`, 'info');
    
    // Process branches in batches to avoid overwhelming the system
    const batchSize = 5;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      
      this.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(branches.length / batchSize)}`, 'progress');
      
      for (const branch of batch) {
        const result = await this.mergeBranch(branch);
        this.mergeResults.push(result);
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    this.generateReport();
  }

  generateReport() {
    this.log('📊 Generating merge report...', 'info');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalBranches: this.branchesToMerge.length,
        successfulMerges: this.successfulMerges,
        failedMerges: this.failedMerges,
        conflictsResolved: this.conflictsResolved,
        successRate: this.branchesToMerge.length > 0 ? 
          (this.successfulMerges / this.branchesToMerge.length * 100).toFixed(2) + '%' : '0%'
      },
      results: this.mergeResults,
      branches: this.branchesToMerge
    };
    
    // Save report
    fs.writeFileSync('/workspace/merge-report.json', JSON.stringify(report, null, 2));
    
    // Display summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 MERGE SUMMARY REPORT');
    console.log('='.repeat(50));
    console.log(`Total Branches Processed: ${report.summary.totalBranches}`);
    console.log(`Successful Merges: ${report.summary.successfulMerges}`);
    console.log(`Failed Merges: ${report.summary.failedMerges}`);
    console.log(`Conflicts Resolved: ${report.summary.conflictsResolved}`);
    console.log(`Success Rate: ${report.summary.successRate}`);
    console.log('='.repeat(50));
    
    if (this.failedMerges > 0) {
      console.log('\n❌ Failed Merges:');
      this.mergeResults
        .filter(r => !r.success)
        .forEach(r => console.log(`  - ${r.branch}: ${r.error}`));
    }
    
    this.log('Report saved to /workspace/merge-report.json', 'success');
  }
}

// Main execution
async function main() {
  const resolver = new ComprehensiveMergeResolver();
  
  try {
    await resolver.mergeAllBranches();
  } catch (error) {
    resolver.log(`Fatal error: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ComprehensiveMergeResolver;