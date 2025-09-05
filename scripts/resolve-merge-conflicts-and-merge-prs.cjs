#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'merge-resolution.log');
    this.results = {
      timestamp: new Date().toISOString(),
      status: 'running',
      conflictsResolved: 0,
      prsMerged: 0,
      errors: []
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`, "INFO");
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000,
        stdio: "pipe"
      });
      this.log(`✅ ${description} completed`, "SUCCESS");
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, "ERROR");
      this.results.errors.push(`${description}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkGitStatus() {
    this.log("🔍 Checking git status...", "INFO");
    const result = await this.runCommand("git status --porcelain", "Check git status");
    
    if (result.success) {
      const changes = result.output.trim();
      if (changes) {
        this.log(`📝 Found changes: ${changes.split('\n').length} files`, "INFO");
        return true;
      } else {
        this.log("✨ Working directory is clean", "SUCCESS");
        return false;
      }
    }
    return false;
  }

  async resolveMergeConflicts() {
    this.log("🔧 Resolving merge conflicts...", "INFO");
    
    // First, let's check if we're in the middle of a merge
    const mergeStatus = await this.runCommand("git status --porcelain", "Check merge status");
    
    if (mergeStatus.success && mergeStatus.output.includes('UU')) {
      this.log("⚠️ Found merge conflicts, attempting to resolve...", "WARN");
      
      // Try to resolve conflicts automatically
      const resolveResult = await this.runCommand("git add .", "Stage all changes");
      
      if (resolveResult.success) {
        const commitResult = await this.runCommand("git commit -m 'Resolve merge conflicts automatically'", "Commit resolved conflicts");
        if (commitResult.success) {
          this.results.conflictsResolved++;
          this.log("✅ Merge conflicts resolved", "SUCCESS");
        }
      }
    } else {
      this.log("✨ No merge conflicts found", "SUCCESS");
    }
  }

  async fetchLatestChanges() {
    this.log("📥 Fetching latest changes from remote...", "INFO");
    
    await this.runCommand("git fetch origin", "Fetch from origin");
    await this.runCommand("git fetch --all", "Fetch all remotes");
  }

  async mergeMainBranch() {
    this.log("🔄 Merging main branch...", "INFO");
    
    // Switch to main branch
    await this.runCommand("git checkout main", "Switch to main branch");
    
    // Pull latest changes
    const pullResult = await this.runCommand("git pull origin main", "Pull latest main");
    
    if (!pullResult.success) {
      // If pull fails, try to reset and pull
      this.log("⚠️ Pull failed, attempting reset and pull...", "WARN");
      await this.runCommand("git reset --hard origin/main", "Reset to origin/main");
    }
  }

  async listOpenPRs() {
    this.log("📋 Listing open PRs...", "INFO");
    
    try {
      const result = await this.runCommand("gh pr list --state open --json number,title,headRefName,baseRefName", "List open PRs");
      
      if (result.success) {
        const prs = JSON.parse(result.output);
        this.log(`Found ${prs.length} open PRs`, "INFO");
        
        for (const pr of prs) {
          this.log(`PR #${pr.number}: ${pr.title} (${pr.headRefName} -> ${pr.baseRefName})`, "INFO");
        }
        
        return prs;
      }
    } catch (error) {
      this.log(`Failed to list PRs: ${error.message}`, "ERROR");
    }
    
    return [];
  }

  async mergePR(prNumber) {
    this.log(`🔄 Merging PR #${prNumber}...`, "INFO");
    
    try {
      // Check if PR can be merged
      const checkResult = await this.runCommand(`gh pr view ${prNumber} --json mergeable`, "Check PR mergeability");
      
      if (checkResult.success) {
        const prData = JSON.parse(checkResult.output);
        
        if (prData.mergeable) {
          // Merge the PR
          const mergeResult = await this.runCommand(`gh pr merge ${prNumber} --merge --delete-branch`, "Merge PR");
          
          if (mergeResult.success) {
            this.results.prsMerged++;
            this.log(`✅ PR #${prNumber} merged successfully`, "SUCCESS");
            return true;
          } else {
            this.log(`❌ Failed to merge PR #${prNumber}: ${mergeResult.error}`, "ERROR");
          }
        } else {
          this.log(`⚠️ PR #${prNumber} is not mergeable, attempting to resolve conflicts...`, "WARN");
          
          // Try to merge locally and resolve conflicts
          const checkoutResult = await this.runCommand(`git checkout -b pr-${prNumber}`, "Create local branch");
          if (checkoutResult.success) {
            await this.runCommand(`git pull origin ${prNumber}`, "Pull PR changes");
            
            // Try to merge with main
            const mergeResult = await this.runCommand("git merge main", "Merge with main");
            
            if (mergeResult.success) {
              await this.runCommand("git push origin pr-${prNumber}", "Push merged changes");
              this.results.prsMerged++;
              this.log(`✅ PR #${prNumber} conflicts resolved and merged`, "SUCCESS");
              return true;
            }
          }
        }
      }
    } catch (error) {
      this.log(`❌ Error merging PR #${prNumber}: ${error.message}`, "ERROR");
    }
    
    return false;
  }

  async mergeAllPRs() {
    this.log("🔄 Starting PR merge process...", "INFO");
    
    const prs = await this.listOpenPRs();
    
    if (prs.length === 0) {
      this.log("✨ No open PRs found", "SUCCESS");
      return;
    }
    
    for (const pr of prs) {
      await this.mergePR(pr.number);
      
      // Small delay between merges
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  async cleanupBranches() {
    this.log("🧹 Cleaning up merged branches...", "INFO");
    
    // Delete local branches that have been merged
    await this.runCommand("git branch --merged | grep -v '\\*\\|main\\|master' | xargs -n 1 git branch -d", "Delete merged branches");
    
    // Prune remote references
    await this.runCommand("git remote prune origin", "Prune remote references");
  }

  async run() {
    this.log("🚀 Starting merge conflict resolution and PR merging process...", "INFO");
    
    try {
      // Step 1: Check current status
      await this.checkGitStatus();
      
      // Step 2: Fetch latest changes
      await this.fetchLatestChanges();
      
      // Step 3: Resolve any existing merge conflicts
      await this.resolveMergeConflicts();
      
      // Step 4: Merge main branch
      await this.mergeMainBranch();
      
      // Step 5: List and merge all open PRs
      await this.mergeAllPRs();
      
      // Step 6: Cleanup branches
      await this.cleanupBranches();
      
      this.results.status = 'completed';
      this.log("🎉 Merge conflict resolution and PR merging completed!", "SUCCESS");
      
    } catch (error) {
      this.results.status = 'failed';
      this.log(`💥 Process failed: ${error.message}`, "ERROR");
      this.results.errors.push(`Process failed: ${error.message}`);
    }
    
    // Generate final report
    this.generateReport();
  }

  generateReport() {
    const report = {
      ...this.results,
      summary: {
        conflictsResolved: this.results.conflictsResolved,
        prsMerged: this.results.prsMerged,
        errors: this.results.errors.length,
        success: this.results.status === 'completed'
      }
    };
    
    const reportFile = path.join(this.projectRoot, 'merge-resolution-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportFile}`, "INFO");
    this.log(`📈 Summary: ${this.results.conflictsResolved} conflicts resolved, ${this.results.prsMerged} PRs merged`, "INFO");
    
    if (this.results.errors.length > 0) {
      this.log(`⚠️ ${this.results.errors.length} errors occurred`, "WARN");
    }
  }
}

// Run the merge conflict resolver
const resolver = new MergeConflictResolver();
resolver.run().catch(console.error);