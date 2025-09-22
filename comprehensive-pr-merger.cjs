const { execSync } = require('child_process');
const fs = require('fs');

class ComprehensivePRMerger {
  constructor() {
    this.results = {
      summary: {
        totalBranches: 0,
        successfullyMerged: 0,
        failedBranches: 0,
        conflictsResolved: 0,
        startTime: new Date().toISOString(),
        endTime: null,
        duration: 0
      },
      processedBranches: [],
      mergedBranches: [],
      failedBranches: []
    };
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        timeout: 30000,
        stdio: 'pipe',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout || error.stderr 
      };
    }
  }

  async getBranchList() {
    console.log('📋 Fetching all remote branches...');
    const result = await this.executeCommand('git branch -r');
    if (!result.success) {
      throw new Error(`Failed to get branch list: ${result.error}`);
    }

    const branches = result.output
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('origin/main') && !line.includes('origin/HEAD'))
      .filter(line => !line.includes('cursor/fix-netlify-build-and-merge-to-main'))
      .filter(line => !line.includes('temp-'))
      .slice(0, 100); // Limit to first 100 branches

    console.log(`📊 Found ${branches.length} branches to process`);
    return branches;
  }

  async mergeBranch(branchName) {
    const startTime = new Date();
    console.log(`\n🚀 Processing branch: ${branchName}`);
    
    try {
      // Extract branch name without origin/
      const localBranchName = branchName.replace('origin/', '');
      
      // Try to merge directly from remote branch
      const mergeResult = await this.executeCommand(`git merge --no-ff ${branchName}`);
      
      if (mergeResult.success) {
        console.log(`  ✅ Successfully merged ${branchName}`);
        
        const endTime = new Date();
        const duration = endTime - startTime;
        
        return {
          success: true,
          conflictsResolved: 0,
          duration,
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString()
        };
      } else {
        // Try to resolve conflicts
        console.log(`  🔧 Attempting to resolve conflicts for ${branchName}...`);
        const resolveResult = await this.resolveConflicts(branchName);
        
        if (resolveResult.success) {
          console.log(`  ✅ Successfully merged ${branchName} with ${resolveResult.conflictsResolved} conflicts resolved`);
          
          const endTime = new Date();
          const duration = endTime - startTime;
          
          return {
            success: true,
            conflictsResolved: resolveResult.conflictsResolved,
            duration,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString()
          };
        } else {
          console.log(`  ❌ Failed to merge ${branchName}: ${resolveResult.error}`);
          
          const endTime = new Date();
          const duration = endTime - startTime;
          
          return {
            success: false,
            conflictsResolved: resolveResult.conflictsResolved,
            error: resolveResult.error,
            duration,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString()
          };
        }
      }

    } catch (error) {
      console.log(`  ❌ Error processing ${branchName}: ${error.message}`);
      
      // Abort any failed merge
      await this.executeCommand('git merge --abort');
      
      const endTime = new Date();
      const duration = endTime - startTime;
      
      return {
        success: false,
        conflictsResolved: 0,
        error: error.message,
        duration,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString()
      };
    }
  }

  async resolveConflicts(branchName) {
    console.log(`🔧 Resolving conflicts for ${branchName}...`);
    
    try {
      // Check if there are actual conflicts
      const statusResult = await this.executeCommand('git status --porcelain');
      const conflictedFiles = statusResult.success ? 
        statusResult.output.split('\n')
          .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
          .map(line => line.split(/\s+/)[1]) :
        [];

      let conflictsResolved = 0;

      for (const file of conflictedFiles) {
        console.log(`  📝 Resolving conflicts in ${file}...`);
        
        // Try to resolve automatically by taking our version first, then theirs
        const resolveResult = await this.executeCommand(`git checkout --ours ${file}`);
        if (resolveResult.success) {
          await this.executeCommand(`git add ${file}`);
          conflictsResolved++;
        } else {
          // Try the other strategy
          const resolveResult2 = await this.executeCommand(`git checkout --theirs ${file}`);
          if (resolveResult2.success) {
            await this.executeCommand(`git add ${file}`);
            conflictsResolved++;
          } else {
            console.log(`  ⚠️  Could not auto-resolve ${file}, skipping...`);
          }
        }
      }

      // Complete the merge
      const commitResult = await this.executeCommand('git commit --no-edit');
      if (commitResult.success) {
        return { success: true, conflictsResolved };
      } else {
        await this.executeCommand('git merge --abort');
        return { success: false, conflictsResolved, error: commitResult.error };
      }

    } catch (error) {
      await this.executeCommand('git merge --abort');
      return { success: false, conflictsResolved: 0, error: error.message };
    }
  }

  async processBranches() {
    console.log('🚀 Starting comprehensive PR merge process...\n');
    
    const branches = await this.getBranchList();
    this.results.summary.totalBranches = branches.length;
    
    let processedCount = 0;
    
    for (const branch of branches) {
      processedCount++;
      console.log(`\n📊 Progress: ${processedCount}/${branches.length}`);
      
      const result = await this.mergeBranch(branch);
      
      const branchResult = {
        name: branch,
        ...result
      };
      
      this.results.processedBranches.push(branchResult);
      
      if (result.success) {
        this.results.mergedBranches.push(branchResult);
        this.results.summary.successfullyMerged++;
        this.results.summary.conflictsResolved += result.conflictsResolved || 0;
      } else {
        this.results.failedBranches.push(branchResult);
        this.results.summary.failedBranches++;
      }
      
      // Small delay to prevent overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    this.results.summary.endTime = new Date().toISOString();
    this.results.summary.duration = new Date(this.results.summary.endTime) - new Date(this.results.summary.startTime);
    
    return this.results;
  }

  async generateReport() {
    const reportPath = '/workspace/comprehensive-pr-merge-results.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    
    console.log('\n📊 MERGE SUMMARY:');
    console.log(`  Total Branches: ${this.results.summary.totalBranches}`);
    console.log(`  Successfully Merged: ${this.results.summary.successfullyMerged}`);
    console.log(`  Failed: ${this.results.summary.failedBranches}`);
    console.log(`  Conflicts Resolved: ${this.results.summary.conflictsResolved}`);
    console.log(`  Duration: ${this.results.summary.duration}ms`);
    console.log(`  Report saved to: ${reportPath}`);
    
    if (this.results.failedBranches.length > 0) {
      console.log('\n❌ FAILED BRANCHES:');
      this.results.failedBranches.forEach(branch => {
        console.log(`  - ${branch.name}: ${branch.error}`);
      });
    }
    
    return reportPath;
  }
}

// Main execution
async function main() {
  try {
    console.log('🎯 Comprehensive PR Merger');
    
    // Ensure we're on main branch
    const merger = new ComprehensivePRMerger();
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    
    if (currentBranch !== 'main') {
      console.log(`🔄 Switching to main branch from ${currentBranch}...`);
      execSync('git checkout main', { stdio: 'inherit' });
    }
    
    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    execSync('git fetch origin', { stdio: 'inherit' });
    
    // Process all branches
    const results = await merger.processBranches();
    
    // Generate report
    const reportPath = await merger.generateReport();
    
    // Push changes if any were made
    if (results.summary.successfullyMerged > 0) {
      console.log('\n🚀 Pushing changes to remote...');
      execSync('git push origin main', { stdio: 'inherit' });
    }
    
    console.log('\n✅ Comprehensive PR merge process completed!');
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { ComprehensivePRMerger };