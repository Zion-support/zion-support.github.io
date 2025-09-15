<<<<<<< HEAD
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class PRMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.mergedPRs = [];
    this.failedPRs = []}

  log(message) {
    .toISOString()}] ${message}`)}

  execCommand(command, description) {
    try {
      this.log(`"Executing": ${description}`);
      const result = execSync(command, { 
        "cwd": this.projectRoot, 
        "stdio": 'pipe',
        "encoding": 'utf8'
      });
      return result} catch (error) {
      this.log(`Error in ${description}: ${error.message}`);
      throw error}
  }

  async getOpenPRs() {
    try {
      const result = this.execCommand('gh pr list --state open --limit 50 --json number,title,headRefName,mergeable,mergeStateStatus', 'Get open PRs');
      return JSON.parse(result)} catch (error) {
      this.log(`Failed to get "PRs": ${error.message}`);
      return []}
  }

  async mergePR(prNumber, prTitle, branchName) {
    try {
      this.log(`Attempting to merge PR #${prNumber}: ${prTitle}`);
      
      // Try to merge directly first
      try {
        this.execCommand(`gh pr merge ${prNumber} --merge --delete-branch`, `Merge PR #${prNumber} directly`);
        this.mergedPRs.push({ "number": prNumber, "title": prTitle, "method": 'direct' });
        this.log(`✅ Successfully merged PR #${prNumber} directly`);
        return true} catch (directError) {
        this.log(`Direct merge failed for PR #${prNumber}, trying conflict resolution...`);
        
        // If direct merge fails, try to resolve conflicts
        try {
          // Checkout the PR branch
          this.execCommand(`gh pr checkout ${prNumber}`, `Checkout PR #${prNumber}`);
          
          // Fetch latest main
          this.execCommand('git fetch origin main', 'Fetch latest main');
          
          // Try to merge main into the PR branch
          try {
            this.execCommand('git merge origin/main', `Merge main into PR #${prNumber}`)} catch (mergeError) {
            this.log(`Merge conflicts detected for PR #${prNumber}, resolving...`);
            
            // Resolve conflicts by accepting main branch changes for most files
            this.execCommand('git status --porcelain', 'Check git status');
            
            // For most conflicts, accept the main branch version
            try {
              this.execCommand('git checkout --theirs .', 'Accept main branch changes');
              this.execCommand('git add .', 'Stage resolved files');
              this.execCommand('git commit -m "Resolve merge conflicts - accept main branch changes"', 'Commit resolved conflicts')} catch (resolveError) {
              this.log(`Failed to resolve conflicts for PR #${prNumber}: ${resolveError.message}`);
              this.execCommand('git merge --abort', 'Abort merge');
              this.execCommand('git checkout main', 'Return to main');
              this.failedPRs.push({ "number": prNumber, "title": prTitle, "error": resolveError.message });
              return false}
          }
          
          // Push the resolved branch
          this.execCommand(`git push origin ${branchName}`, `Push resolved PR #${prNumber}`);
          
          // Go back to main
          this.execCommand('git checkout main', 'Return to main');
          
          // Now try to merge the PR
          this.execCommand(`gh pr merge ${prNumber} --merge --delete-branch`, `Merge resolved PR #${prNumber}`);
          
          this.mergedPRs.push({ "number": prNumber, "title": prTitle, "method": 'conflict-resolved' });
          this.log(`✅ Successfully merged PR #${prNumber} after conflict resolution`);
          return true} catch (conflictError) {
          this.log(`Failed to resolve conflicts for PR #${prNumber}: ${conflictError.message}`);
          this.execCommand('git checkout main', 'Return to main');
          this.failedPRs.push({ "number": prNumber, "title": prTitle, "error": conflictError.message });
          return false}
      }
    } catch (error) {
      this.log(`Failed to merge PR #${prNumber}: ${error.message}`);
      this.failedPRs.push({ "number": prNumber, "title": prTitle, "error": error.message });
      return false}
  }

  async mergeAllPRs() {
    this.log('Starting PR merge process...');
    
    const prs = await this.getOpenPRs();
    this.log(`Found ${prs.length} open PRs`);
    
    // Sort PRs by number (newest first)
    prs.sort((a, b) => b.number - a.number);
    
    for (const pr of prs.slice(0, 20)) { // Limit to first 20 PRs
      try {
        await this.mergePR(pr.number, pr.title, pr.headRefName);
        
        // Add a small delay between merges
        await new Promise(resolve => setTimeout(resolve, 2000))} catch (error) {
        this.log(`Unexpected error processing PR #${pr.number}: ${error.message}`);
        this.failedPRs.push({ "number": pr.number, "title": pr.title, "error": error.message })}
    }
    
    this.log('\n=== MERGE SUMMARY ===');
    this.log(`Successfully "merged": ${this.mergedPRs.length} PRs`);
    this.log(`Failed to "merge": ${this.failedPRs.length} PRs`);
    
    if (this.mergedPRs.length > 0) {
      this.log('\n✅ Successfully merged "PRs": ');
      this.mergedPRs.forEach(pr => {
        this.log(`  - #${pr.number}: ${pr.title} (${pr.method})`)})}
    
    if (this.failedPRs.length > 0) {
      this.log('\n❌ Failed to merge "PRs": ');
      this.failedPRs.forEach(pr => {
        this.log(`  - #${pr.number}: ${pr.title} - ${pr.error}`)})}
    
    // Save results to file
    const results = {
      "timestamp": new Date().toISOString(),
      "merged": this.mergedPRs,
      "failed": this.failedPRs,
      "summary": {
        total: prs.length,
        "merged": this.mergedPRs.length,
        "failed": this.failedPRs.length
      }
    };
    
    fs.writeFileSync('pr-merge-results.json', JSON.stringify(results, null, 2));
    this.log('\nResults saved to pr-merge-results.json')}
}

// Run the merger
const merger = new PRMerger();
merger.mergeAllPRs().catch(error => {
  console.error('Fatal "error": ', error);
  process.exit(1)});
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");class PRMerger { constructor() { this.projectRoot = process.cwd(); this.mergedPRs = []; this.failedPRs = []} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} execCommand(command, description) { try {` this.log(`Executing: ${description}`); const result = execSync(command, { " cwd: this.projectRoot, "" stdio: "pipe","" encoding: "utf8" }); return result} catch (error) {` this.log(`Error in ${description}: ${error.message}`); throw error} } async getOpenPRs() { try {" const result = this.execCommand("gh pr list --state open --limit 50 --json number,title,headRefName,mergeable,mergeStateStatus", "Get open PRs"); return JSON.parse(result)} catch (error) {"` this.log(`Failed to get PRs: ${error.message}`); return []} } async mergePR(prNumber, prTitle, branchName) { try {` this.log(`Attempting to merge PR #${prNumber}: ${prTitle}`); / Try to merge directly first try {` this.execCommand(`gh pr merge ${prNumber} --merge --delete-branch`, `Merge PR #${prNumber} directly`);"" this.mergedPRs.push({ number: prNumber, title: prTitle, method: "direct" });` this.log(` Successfully merged PR #${prNumber} directly`); return true} catch (directError) {` this.log(`Direct merge failed for PR #${prNumber}, trying conflict resolution.`); / If direct merge fails, try to resolve conflicts try { / Checkout the PR branch` this.execCommand(`gh pr checkout ${prNumber}`, `Checkout PR #${prNumber}`); / Fetch latest main" this.execCommand("git fetch origin main", "Fetch latest main"); / Try to merge main into the PR branch try {"` this.execCommand("git merge origin/main", `Merge main into PR #${prNumber}`)} catch (mergeError) {` this.log(`Merge conflicts detected for PR #${prNumber}, resolving.`); / Resolve conflicts by accepting main branch changes for most files" this.execCommand("git status --porcelain", "Check git status"); / For most conflicts, accept the main branch version try {" this.execCommand("git checkout --theirs .", "Accept main branch changes");" this.execCommand("git add .", "Stage resolved files");"" this.execCommand("git commit -m "Resolve merge conflicts - accept main branch changes"", "Commit resolved conflicts")} catch (resolveError) {` this.log(`Failed to resolve conflicts for PR #${prNumber}: ${resolveError.message}`);" this.execCommand("git merge --abort", "Abort merge");" this.execCommand("git checkout main", "Return to main");" this.failedPRs.push({ number: prNumber, title: prTitle, error: resolveError.message }); return false} } / Push the resolved branch` this.execCommand(`git push origin ${branchName}`, `Push resolved PR #${prNumber}`); / Go back to main" this.execCommand("git checkout main", "Return to main"); / Now try to merge the PR` this.execCommand(`gh pr merge ${prNumber} --merge --delete-branch`, `Merge resolved PR #${prNumber}`); "" this.mergedPRs.push({ number: prNumber, title: prTitle, method: "conflict-resolved" });` this.log(` Successfully merged PR #${prNumber} after conflict resolution`); return true} catch (conflictError) {` this.log(`Failed to resolve conflicts for PR #${prNumber}: ${conflictError.message}`);" this.execCommand("git checkout main", "Return to main");" this.failedPRs.push({ number: prNumber, title: prTitle, error: conflictError.message }); return false} } } catch (error) {` this.log(`Failed to merge PR #${prNumber}: ${error.message}`);" this.failedPRs.push({ number: prNumber, title: prTitle, error: error.message }); return false} } async mergeAllPRs() {" this.log("Starting PR merge process."); const prs = await this.getOpenPRs();` this.log(`Found ${prs.length} open PRs`); / Sort PRs by number (newest first) prs.sort((a, b) => b.number - a.number); for (const pr of prs.slice(0, 20)) { / Limit to first 20 PRs try { await this.mergePR(pr.number, pr.title, pr.headRefName); / Add a small delay between merges await new Promise(resolve => setTimeout(resolve, 2000))} catch (error) {` this.log(`Unexpected error processing PR #${pr.number}: ${error.message}`);" this.failedPRs.push({ number: pr.number, title: pr.title, error: error.message })} } " this.log("\n=== MERGE SUMMARY ===");"` this.log(`Successfully merged: ${this.mergedPRs.length} PRs`);"` this.log(`Failed to merge: ${this.failedPRs.length} PRs`); if (this.mergedPRs.length > 0) {"" this.log("\n Successfully merged PRs: "); this.mergedPRs.forEach(pr => {` this.log(` - #${pr.number}: ${pr.title} (${pr.method})`)})} if (this.failedPRs.length > 0) {"" this.log("\n Failed to merge PRs: "); this.failedPRs.forEach(pr => {` this.log(` - #${pr.number}: ${pr.title} - ${pr.error}`)})} / Save results to file const results = {" timestamp: new Date().toISOString()," merged: this.mergedPRs," failed: this.failedPRs," summary: { total: prs.length," merged: this.mergedPRs.length," failed: this.failedPRs.length } }; " fs.writeFileSync("pr-merge-results.json", JSON.stringify(results, null, 2));" this.log("\nResults saved to pr-merge-results.json")}}/ Run the mergerconst merger = new PRMerger();merger.mergeAllPRs().catch(error => {"" console.error("Fatal error: ", error); process.exit(1)});""`"`
=======
#!/usr/bin/env node;
const { execSync } = require('child_process')
const fs = require('fs')
        "stdio"
        "encoding"
        this.mergedPRs.push({ "number": prNumber, "title": prTitle, "method"})
              this.execCommand('git commit -m "Resolve merge conflicts - accept main branch changes")
          this.mergedPRs.push({ "number": prNumber, "title": prTitle, "method"})
      this.log('\n Successfully merged "PRs")
      this.log('\n Failed to merge "PRs")
  console.error('Fatal "error")
>>>>>>> main
>>>>>>> main
