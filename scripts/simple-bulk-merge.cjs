#!/usr/bin/env node

const { execSync } = require('child_process');

class SimpleBulkMerger {
  constructor() {
    this.successful = [];
    this.failed = [];
    this.skipped = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async getCursorBranches() {
    try {
      const output = execSync('git branch -r | grep "origin/cursor/"', { encoding: 'utf8' });
      return output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && line.startsWith('origin/cursor/'))
        .map(line => line.replace('origin/', ''));
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`);
      return [];
    }
  }

  async tryMergeBranch(branchName) {
    try {
      this.log(`Trying to merge: ${branchName}`);
      
      // Try to merge
      execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe' });
      this.successful.push(branchName);
      this.log(`✅ Successfully merged: ${branchName}`);
      return true;
    } catch (error) {
      if (error.stdout && error.stdout.includes('CONFLICT')) {
        this.log(`⚠️  Conflict in: ${branchName} - aborting merge`);
        try {
          execSync('git merge --abort', { stdio: 'pipe' });
        } catch (abortError) {
          this.log(`Error aborting merge: ${abortError.message}`);
        }
        this.failed.push(branchName);
        return false;
      } else if (error.stdout && error.stdout.includes('Already up to date')) {
        this.log(`⏭️  Already up to date: ${branchName}`);
        this.skipped.push(branchName);
        return true;
      } else {
        this.log(`❌ Error merging ${branchName}: ${error.message}`);
        try {
          execSync('git merge --abort', { stdio: 'pipe' });
        } catch (abortError) {
          this.log(`Error aborting merge: ${abortError.message}`);
        }
        this.failed.push(branchName);
        return false;
      }
    }
  }

  async processBranches() {
    const branches = await this.getCursorBranches();
    this.log(`Found ${branches.length} cursor branches to process`);

    if (branches.length === 0) {
      this.log('No branches found to process');
      return;
    }

    // Process branches in smaller batches
    const batchSize = 5;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      this.log(`\nProcessing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);
      
      for (const branch of batch) {
        await this.tryMergeBranch(branch);
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    this.generateReport();
  }

  generateReport() {
    this.log('\n=== MERGE REPORT ===');
    this.log(`Total branches processed: ${this.successful.length + this.failed.length + this.skipped.length}`);
    this.log(`Successfully merged: ${this.successful.length}`);
    this.log(`Failed (conflicts): ${this.failed.length}`);
    this.log(`Skipped (already up to date): ${this.skipped.length}`);
    
    if (this.failed.length > 0) {
      this.log('\nBranches with conflicts (need manual resolution):');
      this.failed.forEach(branch => this.log(`  - ${branch}`));
    }
  }
}

// Main execution
async function main() {
  const merger = new SimpleBulkMerger();
  
  try {
    await merger.processBranches();
    
    // Push all changes to main
    merger.log('\nPushing all changes to main branch...');
    execSync('git push origin main', { stdio: 'inherit' });
    merger.log('✅ Successfully pushed all changes to main');
    
  } catch (error) {
    merger.log(`❌ Fatal error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}