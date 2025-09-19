#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AggressiveBulkMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'aggressive-bulk-merge.log');
    this.ensureLogDir();
    this.successful = [];
    this.failed = [];
    this.skipped = [];
    this.totalProcessed = 0;
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
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
      this.totalProcessed++;
      
      if (this.totalProcessed % 100 === 0) {
        this.log(`Progress: ${this.totalProcessed} branches processed`);
      }
      
      // Try to merge with aggressive strategy
      try {
        execSync(`git merge origin/${branchName} --no-edit --strategy=recursive -X ours`, { 
          stdio: 'pipe',
          timeout: 10000 
        });
        this.successful.push(branchName);
        return true;
      } catch (mergeError) {
        if (mergeError.stdout && mergeError.stdout.includes('CONFLICT')) {
          // Try to resolve conflicts automatically
          try {
            this.autoResolveConflicts();
            execSync('git commit --no-edit', { stdio: 'pipe' });
            this.successful.push(branchName);
            this.log(`✅ Auto-resolved conflicts for: ${branchName}`);
            return true;
          } catch (resolveError) {
            // Abort merge if can't resolve
            execSync('git merge --abort', { stdio: 'pipe' });
            this.failed.push(branchName);
            return false;
          }
        } else if (mergeError.stdout && mergeError.stdout.includes('Already up to date')) {
          this.skipped.push(branchName);
          return true;
        } else {
          // Abort merge on other errors
          try {
            execSync('git merge --abort', { stdio: 'pipe' });
          } catch (abortError) {
            // Ignore abort errors
          }
          this.failed.push(branchName);
          return false;
        }
      }
    } catch (error) {
      this.failed.push(branchName);
      return false;
    }
  }

  autoResolveConflicts() {
    try {
      // Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim());
      
      for (const file of conflictedFiles) {
        if (!file.trim()) continue;
        
        try {
          const filePath = path.join(this.projectRoot, file);
          
          if (!fs.existsSync(filePath)) continue;
          
          const content = fs.readFileSync(filePath, 'utf8');
          
          if (content.includes('<<<<<<< HEAD')) {
            // Simple resolution: prefer incoming changes (theirs)
            let resolvedContent = content
              .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$2')
              .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$2');
            
            fs.writeFileSync(filePath, resolvedContent);
            execSync(`git add "${file}"`, { stdio: 'pipe' });
          }
        } catch (fileError) {
          // Continue with other files
        }
      }
    } catch (error) {
      // Ignore resolution errors
    }
  }

  async processBranchesAggressively() {
    const branches = await this.getCursorBranches();
    this.log(`Found ${branches.length} cursor branches to process aggressively`);

    if (branches.length === 0) {
      this.log('No branches found to process');
      return;
    }

    // Process branches in large batches for speed
    const batchSize = 50;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      this.log(`\nProcessing aggressive batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);
      
      for (const branch of batch) {
        await this.tryMergeBranch(branch);
        
        // Minimal delay for performance
        if (this.totalProcessed % 10 === 0) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }

    this.generateFinalReport();
  }

  generateFinalReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.successful.length + this.failed.length + this.skipped.length,
        successful: this.successful.length,
        failed: this.failed.length,
        skipped: this.skipped.length
      },
      successful: this.successful.slice(0, 100), // First 100 successful
      failed: this.failed.slice(0, 100), // First 100 failed
      skipped: this.skipped.slice(0, 100) // First 100 skipped
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'aggressive-bulk-merge-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== AGGRESSIVE BULK MERGE FINAL REPORT ===');
    this.log(`Total branches processed: ${report.summary.total}`);
    this.log(`Successfully merged: ${report.summary.successful}`);
    this.log(`Failed to merge: ${report.summary.failed}`);
    this.log(`Skipped (already up to date): ${report.summary.skipped}`);
    this.log(`Success rate: ${((report.summary.successful / report.summary.total) * 100).toFixed(2)}%`);
  }
}

// Main execution
async function main() {
  const merger = new AggressiveBulkMerger();
  
  try {
    merger.log('🚀 Starting aggressive bulk merge of all cursor branches...');
    await merger.processBranchesAggressively();
    
    // Push all changes to main
    merger.log('\n📤 Pushing all changes to main branch...');
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

module.exports = AggressiveBulkMerger;