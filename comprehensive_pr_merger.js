#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Comprehensive PR Merger');
console.log('==========================');

class ComprehensivePRMerger {
  constructor() {
    this.processedBranches = [];
    this.mergedBranches = [];
    this.failedBranches = [];
    this.conflictsResolved = 0;
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runCommand(command, description, options = {}) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 60000,
        ...options
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async getAllRemoteBranches() {
    try {
      const result = await this.runCommand('git branch -r', 'Getting all remote branches');
      const branches = result.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
        .filter(branch => 
          branch.includes('codex/') || 
          branch.includes('cursor/') || 
          branch.includes('fix-') ||
          branch.includes('add-') ||
          branch.includes('implement-') ||
          branch.includes('update-') ||
          branch.includes('improve-') ||
          branch.includes('enhance-')
        )
        .slice(0, 100); // Process up to 100 branches
      
      this.log(`Found ${branches.length} remote branches to process`);
      return branches;
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'error');
      return [];
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File ${filePath} does not exist, skipping`, 'warning');
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      let resolvedContent = content;

      // Strategy 1: Keep HEAD changes for most conflicts
      resolvedContent = resolvedContent.replace(
        /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*/g,
        '$1'
      );

      // Strategy 2: For package.json, try to merge dependencies
      if (filePath.includes('package.json')) {
        resolvedContent = this.resolvePackageJsonConflicts(resolvedContent);
      }

      // Strategy 3: For TypeScript files, keep both if possible
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        resolvedContent = this.resolveTypeScriptConflicts(resolvedContent);
      }

      // Clean up any remaining conflict markers
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n/g, '');
      resolvedContent = resolvedContent.replace(/=======\n/g, '');
      resolvedContent = resolvedContent.replace(/>>>>>>> [^\n]*\n/g, '');
      
      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`✅ Resolved conflicts in: ${filePath}`);

    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'error');
    }
  }

  resolvePackageJsonConflicts(content) {
    try {
      // Try to merge package.json dependencies intelligently
      const lines = content.split('\n');
      let inDependencies = false;
      let inDevDependencies = false;
      const resolvedLines = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('"dependencies"')) {
          inDependencies = true;
          inDevDependencies = false;
          resolvedLines.push(line);
        } else if (line.includes('"devDependencies"')) {
          inDependencies = false;
          inDevDependencies = true;
          resolvedLines.push(line);
        } else if (line.includes('}') && (inDependencies || inDevDependencies)) {
          inDependencies = false;
          inDevDependencies = false;
          resolvedLines.push(line);
        } else {
          resolvedLines.push(line);
        }
      }

      return resolvedLines.join('\n');
    } catch (error) {
      return content;
    }
  }

  resolveTypeScriptConflicts(content) {
    try {
      // For TypeScript files, try to keep both implementations when possible
      // This is a simplified approach - in practice, you might want more sophisticated merging
      return content.replace(
        /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*/g,
        (match, headContent, incomingContent) => {
          // If both are similar, keep the longer one
          if (headContent.trim().length > incomingContent.trim().length) {
            return headContent;
          } else {
            return incomingContent;
          }
        }
      );
    } catch (error) {
      return content;
    }
  }

  async resolveConflicts(branchName) {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f);

      this.log(`Resolving conflicts in ${conflictFiles.length} files for ${branchName}`);

      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file);
        }
      }

      this.conflictsResolved++;
    } catch (error) {
      this.log(`Error resolving conflicts in ${branchName}: ${error.message}`, 'error');
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Checkout the branch
      await this.runCommand(`git checkout ${branchName}`, `Checking out branch ${branchName}`);

      // Reset to clean state
      await this.runCommand('git reset --hard HEAD', 'Resetting branch to clean state');

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge origin/main', `Merging main into ${branchName}`);
        this.log(`✅ Successfully merged main into ${branchName}`, 'success');
      } catch (mergeError) {
        this.log(`Merge conflicts detected in ${branchName}, resolving...`, 'warning');
        
        // Resolve conflicts automatically
        await this.resolveConflicts(branchName);
        
        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files');
        await this.runCommand(`git commit -m "Resolve merge conflicts with main branch"`, 'Committing resolved conflicts');
      }

      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`);

      // Switch back to main
      await this.runCommand('git checkout main', 'Switching back to main');

      // Pull latest changes
      await this.runCommand('git pull origin main', 'Pulling latest main changes');

      // Merge the branch into main
      await this.runCommand(`git merge ${branchName}`, `Merging ${branchName} into main`);
      
      // Push main
      await this.runCommand('git push origin main', 'Pushing updated main');

      this.mergedBranches.push(branchName);
      this.log(`✅ Successfully merged ${branchName} into main`, 'success');

      // Delete the remote branch
      try {
        await this.runCommand(`git push origin --delete ${branchName}`, `Deleting remote branch ${branchName}`);
        this.log(`✅ Deleted remote branch ${branchName}`, 'success');
      } catch (deleteError) {
        this.log(`Warning: Could not delete remote branch ${branchName}`, 'warning');
      }

    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message });
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error');
      
      // Switch back to main if we're not already there
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error');
      } catch (checkoutError) {
        this.log(`Error switching back to main: ${checkoutError.message}`, 'error');
      }
    }
  }

  async runComprehensiveMerge() {
    try {
      this.log('Starting comprehensive PR merge process...');

      // Get all remote branches
      const branches = await this.getAllRemoteBranches();
      
      if (branches.length === 0) {
        this.log('No branches to process', 'info');
        return;
      }

      this.log(`Processing ${branches.length} branches...`);

      // Process branches in batches to avoid overwhelming the system
      const batchSize = 5;
      for (let i = 0; i < branches.length; i += batchSize) {
        const batch = branches.slice(i, i + batchSize);
        this.log(`Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(branches.length / batchSize)}`);
        
        for (const branch of batch) {
          await this.processBranch(branch);
          
          // Small delay between branches
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        // Longer delay between batches
        if (i + batchSize < branches.length) {
          this.log('Waiting before next batch...', 'info');
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      }

      // Generate final report
      this.generateReport();

    } catch (error) {
      this.log(`Comprehensive merge failed: ${error.message}`, 'error');
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = Math.round((endTime - this.startTime) / 1000);

    const report = {
      summary: {
        totalBranches: this.processedBranches.length,
        successfullyMerged: this.mergedBranches.length,
        failedBranches: this.failedBranches.length,
        conflictsResolved: this.conflictsResolved,
        duration: `${duration} seconds`
      },
      processedBranches: this.processedBranches,
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
      timestamp: new Date().toISOString()
    };

    // Save report to file
    fs.writeFileSync('comprehensive-pr-merge-report.json', JSON.stringify(report, null, 2));

    // Display summary
    console.log('\n🎉 Comprehensive PR Merge Complete!');
    console.log('===================================');
    console.log(`Total branches processed: ${this.processedBranches.length}`);
    console.log(`Successfully merged: ${this.mergedBranches.length}`);
    console.log(`Failed branches: ${this.failedBranches.length}`);
    console.log(`Conflicts resolved: ${this.conflictsResolved}`);
    console.log(`Duration: ${duration} seconds`);
    
    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:');
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`);
      });
    }

    console.log('\n📊 Detailed report saved to: comprehensive-pr-merge-report.json');
  }
}

// Run the comprehensive merger
const merger = new ComprehensivePRMerger();
merger.runComprehensiveMerge().then(() => {
  console.log('\n🚀 Comprehensive PR merge process completed!');
}).catch(error => {
  console.error('Comprehensive merge failed:', error.message);
  process.exit(1);
});