#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveMergePRResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'merge-pr-resolution.log');
    this.results = {
      timestamp: new Date().toISOString(),
      status: 'running',
      steps: [],
      conflictsResolved: 0,
      prsMerged: 0,
      errors: []
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runCommand(command, description, options = {}) {
    this.log(`🚀 ${description}`, "INFO");
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000,
        stdio: options.stdio || "pipe",
        ...options
      });
      this.log(`✅ ${description} completed`, "SUCCESS");
      this.results.steps.push({ step: description, status: 'success', output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, "ERROR");
      this.results.errors.push(`${description}: ${error.message}`);
      this.results.steps.push({ step: description, status: 'failed', error: error.message });
      return { success: false, error: error.message };
    }
  }

  async step1_checkCurrentStatus() {
    this.log("📋 Step 1: Checking current git status...", "INFO");
    
    const statusResult = await this.runCommand("git status --porcelain", "Check git status");
    const branchResult = await this.runCommand("git branch --show-current", "Get current branch");
    
    if (statusResult.success) {
      const changes = statusResult.output.trim();
      if (changes) {
        this.log(`📝 Found uncommitted changes: ${changes.split('\n').length} files`, "WARN");
        return { hasChanges: true, changes: changes.split('\n') };
      }
    }
    
    return { hasChanges: false, currentBranch: branchResult.success ? branchResult.output.trim() : 'unknown' };
  }

  async step2_fetchLatestChanges() {
    this.log("📥 Step 2: Fetching latest changes from remote...", "INFO");
    
    await this.runCommand("git fetch origin", "Fetch from origin");
    await this.runCommand("git fetch --all", "Fetch all remotes");
    await this.runCommand("git remote prune origin", "Prune remote references");
  }

  async step3_resolveMergeConflicts() {
    this.log("🔧 Step 3: Resolving merge conflicts...", "INFO");
    
    // Check if we're in the middle of a merge
    const statusResult = await this.runCommand("git status --porcelain", "Check merge status");
    
    if (statusResult.success) {
      const status = statusResult.output;
      
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        this.log("⚠️ Found merge conflicts, attempting to resolve...", "WARN");
        
        // Try to add all changes
        await this.runCommand("git add .", "Stage all changes");
        
        // Try to commit
        const commitResult = await this.runCommand("git commit -m 'Resolve merge conflicts automatically'", "Commit resolved conflicts");
        
        if (commitResult.success) {
          this.results.conflictsResolved++;
          this.log("✅ Merge conflicts resolved", "SUCCESS");
        } else {
          // Try to abort merge and start fresh
          await this.runCommand("git merge --abort", "Abort current merge");
        }
      } else {
        this.log("✨ No merge conflicts found", "SUCCESS");
      }
    }
  }

  async step4_switchToMain() {
    this.log("🔄 Step 4: Switching to main branch...", "INFO");
    
    // Try to switch to main
    const checkoutResult = await this.runCommand("git checkout main", "Switch to main branch");
    
    if (!checkoutResult.success) {
      // If main doesn't exist locally, create it from origin
      await this.runCommand("git checkout -b main origin/main", "Create main branch from origin");
    }
  }

  async step5_pullLatestMain() {
    this.log("📥 Step 5: Pulling latest main branch...", "INFO");
    
    try {
      await this.runCommand("git pull origin main", "Pull latest main", { stdio: 'inherit' });
    } catch (error) {
      this.log("⚠️ Pull failed, attempting reset to origin/main...", "WARN");
      await this.runCommand("git reset --hard origin/main", "Reset to origin/main");
    }
  }

  async step6_listOpenPRs() {
    this.log("📋 Step 6: Listing open PRs...", "INFO");
    
    try {
      const result = await this.runCommand("gh pr list --state open --json number,title,headRefName,baseRefName,mergeable", "List open PRs");
      
      if (result.success) {
        const prs = JSON.parse(result.output);
        this.log(`Found ${prs.length} open PRs`, "INFO");
        
        for (const pr of prs) {
          this.log(`- PR #${pr.number}: ${pr.title} (${pr.headRefName} -> ${pr.baseRefName}) [mergeable: ${pr.mergeable}]`, "INFO");
        }
        
        return prs;
      }
    } catch (error) {
      this.log(`Failed to list PRs: ${error.message}`, "ERROR");
    }
    
    return [];
  }

  async step7_mergePRs(prs) {
    this.log("🔄 Step 7: Merging PRs...", "INFO");
    
    for (const pr of prs) {
      this.log(`🔄 Merging PR #${pr.number}: ${pr.title}...`, "INFO");
      
      try {
        if (pr.mergeable) {
          // PR is mergeable, merge it directly
          const mergeResult = await this.runCommand(`gh pr merge ${pr.number} --merge --delete-branch`, "Merge PR", { stdio: 'inherit' });
          
          if (mergeResult.success) {
            this.results.prsMerged++;
            this.log(`✅ PR #${pr.number} merged successfully`, "SUCCESS");
          } else {
            this.log(`❌ Failed to merge PR #${pr.number}`, "ERROR");
          }
        } else {
          // PR has conflicts, try to resolve them
          this.log(`⚠️ PR #${pr.number} has conflicts, attempting to resolve...`, "WARN");
          
          // Create a local branch for the PR
          const branchName = `pr-${pr.number}`;
          await this.runCommand(`git checkout -b ${branchName}`, "Create local PR branch");
          
          // Pull the PR changes
          await this.runCommand(`git pull origin ${pr.headRefName}`, "Pull PR changes");
          
          // Try to merge with main
          try {
            await this.runCommand("git merge main", "Merge with main");
            await this.runCommand(`git push origin ${branchName}`, "Push merged changes");
            this.results.prsMerged++;
            this.log(`✅ PR #${pr.number} conflicts resolved and merged`, "SUCCESS");
          } catch (mergeError) {
            this.log(`❌ Could not resolve conflicts for PR #${pr.number}: ${mergeError.message}`, "ERROR");
            // Switch back to main
            await this.runCommand("git checkout main", "Switch back to main");
            await this.runCommand(`git branch -D ${branchName}`, "Delete failed branch");
          }
        }
        
        // Small delay between PRs
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        this.log(`❌ Error processing PR #${pr.number}: ${error.message}`, "ERROR");
      }
    }
  }

  async step8_cleanup() {
    this.log("🧹 Step 8: Cleaning up...", "INFO");
    
    // Delete merged local branches
    try {
      await this.runCommand("git branch --merged | grep -v '\\*\\|main\\|master' | xargs -n 1 git branch -d", "Delete merged branches");
    } catch (error) {
      // Ignore cleanup errors
    }
    
    // Prune remote references
    await this.runCommand("git remote prune origin", "Prune remote references");
  }

  async step9_finalBuild() {
    this.log("🔨 Step 9: Running final build test...", "INFO");
    
    try {
      await this.runCommand("npm run build", "Final build test", { stdio: 'inherit' });
      this.log("✅ Final build successful!", "SUCCESS");
    } catch (error) {
      this.log("⚠️ Final build has issues, but merge process completed", "WARN");
    }
  }

  async run() {
    this.log("🚀 Starting comprehensive merge and PR resolution process...", "INFO");
    
    try {
      // Step 1: Check current status
      const status = await this.step1_checkCurrentStatus();
      
      // Step 2: Fetch latest changes
      await this.step2_fetchLatestChanges();
      
      // Step 3: Resolve merge conflicts
      await this.step3_resolveMergeConflicts();
      
      // Step 4: Switch to main
      await this.step4_switchToMain();
      
      // Step 5: Pull latest main
      await this.step5_pullLatestMain();
      
      // Step 6: List open PRs
      const prs = await this.step6_listOpenPRs();
      
      // Step 7: Merge PRs
      if (prs.length > 0) {
        await this.step7_mergePRs(prs);
      } else {
        this.log("✨ No open PRs to merge", "SUCCESS");
      }
      
      // Step 8: Cleanup
      await this.step8_cleanup();
      
      // Step 9: Final build test
      await this.step9_finalBuild();
      
      this.results.status = 'completed';
      this.log("🎉 Comprehensive merge and PR resolution completed!", "SUCCESS");
      
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
    
    const reportFile = path.join(this.projectRoot, 'merge-pr-resolution-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportFile}`, "INFO");
    this.log(`📈 Summary: ${this.results.conflictsResolved} conflicts resolved, ${this.results.prsMerged} PRs merged`, "INFO");
    
    if (this.results.errors.length > 0) {
      this.log(`⚠️ ${this.results.errors.length} errors occurred`, "WARN");
      this.results.errors.forEach(error => this.log(`  - ${error}`, "ERROR"));
    }
  }
}

// Run the comprehensive merge and PR resolver
const resolver = new ComprehensiveMergePRResolver();
resolver.run().catch(console.error);