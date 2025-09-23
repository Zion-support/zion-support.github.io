#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class BulkPRMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'bulk-merge-prs.log');
    this.ensureLogDir();
    this.conflicts = [];
    this.successful = [];
    this.failed = [];
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

  async getRemoteBranches() {
    try {
      const output = execSync('git branch -r', { encoding: 'utf8' });
      const branches = output
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD'))
        .filter(line => line.startsWith('origin/cursor/'))
        .map(line => line.replace('origin/', ''));
      
      this.log(`Found ${branches.length} cursor branches to process`);
      return branches;
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`);
      return [];
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`Attempting to merge branch: ${branchName}`);
      
      // Fetch the latest changes
      execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
      
      // Try to merge
      try {
        execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe' });
        this.successful.push(branchName);
        this.log(`✅ Successfully merged: ${branchName}`);
        return true;
      } catch (mergeError) {
        // Check if it's a conflict
        if (mergeError.stdout && mergeError.stdout.includes('CONFLICT')) {
          this.log(`⚠️  Merge conflict in: ${branchName}`);
          this.conflicts.push(branchName);
          
          // Try to resolve conflicts automatically
          if (this.autoResolveConflicts(branchName)) {
            this.successful.push(branchName);
            this.log(`✅ Auto-resolved conflicts for: ${branchName}`);
            return true;
          } else {
            this.log(`❌ Failed to auto-resolve conflicts for: ${branchName}`);
            // Abort the merge
            execSync('git merge --abort', { stdio: 'pipe' });
            this.failed.push(branchName);
            return false;
          }
        } else {
          this.log(`❌ Merge failed for: ${branchName} - ${mergeError.message}`);
          this.failed.push(branchName);
          return false;
        }
      }
    } catch (error) {
      this.log(`❌ Error processing branch ${branchName}: ${error.message}`);
      this.failed.push(branchName);
      return false;
    }
  }

  autoResolveConflicts(branchName) {
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim());
      
      this.log(`Auto-resolving conflicts in ${conflictedFiles.length} files for ${branchName}`);
      
      let allResolved = true;
      
      for (const file of conflictedFiles) {
        if (!file.trim()) continue;
        
        try {
          const filePath = path.join(this.projectRoot, file);
          
          if (!fs.existsSync(filePath)) {
            this.log(`File not found: ${file}`);
            continue;
          }
          
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Check if file has conflict markers
          if (content.includes('<<<<<<< HEAD')) {
            this.log(`Resolving conflicts in: ${file}`);
            
            // Simple conflict resolution strategy:
            // 1. For content/index.yaml, merge both sides
            // 2. For app/page.tsx, include both components
            // 3. For other files, prefer the incoming changes (theirs)
            
            let resolvedContent = content;
            
            if (file.includes('content/index.yaml')) {
              resolvedContent = this.resolveYAMLConflicts(content);
            } else if (file.includes('app/page.tsx')) {
              resolvedContent = this.resolvePageConflicts(content);
            } else {
              // For other files, prefer incoming changes
              resolvedContent = this.resolveGenericConflicts(content);
            }
            
            fs.writeFileSync(filePath, resolvedContent);
            
            // Mark as resolved
            execSync(`git add "${file}"`, { stdio: 'pipe' });
          }
        } catch (fileError) {
          this.log(`Error resolving conflicts in ${file}: ${fileError.message}`);
          allResolved = false;
        }
      }
      
      if (allResolved) {
        // Complete the merge
        execSync('git commit --no-edit', { stdio: 'pipe' });
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error in auto-resolve conflicts: ${error.message}`);
      return false;
    }
  }

  resolveYAMLConflicts(content) {
    // Remove conflict markers and merge both sides
    return content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, (match, head, theirs) => {
        // Merge both sections, removing duplicates
        const headLines = head.split('\n').filter(line => line.trim());
        const theirLines = theirs.split('\n').filter(line => line.trim());
        
        // Combine and deduplicate
        const combined = [...new Set([...headLines, ...theirLines])];
        return combined.join('\n') + '\n';
      })
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1$2');
  }

  resolvePageConflicts(content) {
    // For page.tsx, include both components
    return content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1\n$2');
  }

  resolveGenericConflicts(content) {
    // For generic files, prefer incoming changes
    return content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$2');
  }

  async processAllBranches() {
    const branches = await this.getRemoteBranches();
    
    if (branches.length === 0) {
      this.log('No branches found to process');
      return;
    }

    this.log(`Processing ${branches.length} branches...`);
    
    // Process branches in batches to avoid overwhelming the system
    const batchSize = 10;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      this.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);
      
      for (const branch of batch) {
        await this.mergeBranch(branch);
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.successful.length + this.failed.length,
        successful: this.successful.length,
        failed: this.failed.length,
        conflicts: this.conflicts.length
      },
      successful: this.successful,
      failed: this.failed,
      conflicts: this.conflicts
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'bulk-merge-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== BULK MERGE REPORT ===');
    this.log(`Total branches processed: ${report.summary.total}`);
    this.log(`Successfully merged: ${report.summary.successful}`);
    this.log(`Failed to merge: ${report.summary.failed}`);
    this.log(`Had conflicts: ${report.summary.conflicts}`);
    
    if (this.failed.length > 0) {
      this.log('\nFailed branches:');
      this.failed.forEach(branch => this.log(`  - ${branch}`));
    }
    
    if (this.conflicts.length > 0) {
      this.log('\nBranches with conflicts (resolved):');
      this.conflicts.forEach(branch => this.log(`  - ${branch}`));
    }
  }
}

// Main execution
async function main() {
  const merger = new BulkPRMerger();
  
  try {
    await merger.processAllBranches();
    
    // Push all changes to main
    merger.log('Pushing all changes to main branch...');
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

module.exports = BulkPRMerger;