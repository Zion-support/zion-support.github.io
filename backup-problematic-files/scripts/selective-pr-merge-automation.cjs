<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/selective-pr-merge-automation.cjs
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process")"const fs = require("fs")"const path = require("path")"console.log(" Selective PR Merge Automation System")"console.log("===")class SelectivePRMergeAutomation { constructor() { this.processedBranches = [] this.mergedBranches = [] this.failedBranches = [] this.conflictsResolved = 0 this.startTime = Date.now() }" log(message, type = "info") { const timestamp = new Date().toISOString() const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}` console.log(logEntry) } async runCommand(command, description) { try {` this.log(`Running: ${description}`)"" const result = execSync(command, {encoding: "utf8",stdio: "pipe"; cwd: process.cwd()})"` this.log(` ${description} completed successfully`, "success") return result } catch (error) {""` this.log(` ${description} failed: ${error.message}`, "error") throw error } } async getPriorityBranches() { / Get a smaller set of priority branches to process first try {" const result = await this.runCommand("git branch -r", "Getting remote branches")" const branches = result.split("\n") .map(branch => branch.trim())" .filter(branch => branch && !branch.includes("HEAD") && branch.startsWith("origin/"))" .map(branch => branch.replace("origin/", ""))" .filter(branch => branch !== "main") / Prioritize branches with specific keywords" const priorityKeywords = ["enhance-app-clean-merge","enhance-app-services-and-website-with-futuristic-design","enhance-app-with-micro-saas";" "enhance-app-with-new-services";" "deploy-autonomous-cloud-automations";" "develop-autonomous-cloud-agents"] const priorityBranches = branches.filter(branch => priorityKeywords.some(keyword => branch.includes(keyword)) ).slice(0, 10) / Take first 10 priority branches` this.log(`Found ${priorityBranches.length} priority branches to process`) return priorityBranches } catch (error) {""` this.log(`Error getting priority branches: ${error.message}`, "error") return [] } } async processBranch(branchName) { try {"` this.log(`Processing branch: ${branchName}`) this.processedBranches.push(branchName) / Fetch the latest changes" await this.runCommand("git fetch origin", "Fetching latest changes") / Check if branch exists locally, if not create it try {` await this.runCommand(`git checkout -b ${branchName} origin/${branchName}`, `Creating and checking out branch ${branchName}`) } catch (error) {` await this.runCommand(`git checkout ${branchName}`, `Checking out existing branch ${branchName}`) } / Try to merge main into the branch try {"` await this.runCommand("git merge origin/main", `Merging main into ${branchName}`)"` this.log(` Successfully merged main into ${branchName}`, "success") } catch (mergeError) {"` this.log(`Merge conflicts detected in ${branchName}, resolving.`, "warning") / Resolve conflicts automatically await this.resolveConflicts(branchName) / Commit the resolved conflicts" await this.runCommand("git add .", "Adding resolved files")"" await this.runCommand("git commit -m "Resolve merge conflicts with main branch"", "Committing resolved conflicts") this.conflictsResolved+ } / Push the updated branch` await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`) / Switch back to main" await this.runCommand("git checkout main", "Switching back to main") / Merge the branch into main` await this.runCommand(`git merge ${branchName}`, `Merging ${branchName} into main`) / Push main" await this.runCommand("git push origin main", "Pushing updated main") this.mergedBranches.push(branchName)"` this.log(` Successfully merged ${branchName} into main`, "success") / Delete the remote branch try {` await this.runCommand(`git push origin --delete ${branchName}`, `Deleting remote branch ${branchName}`)"` this.log(` Deleted remote branch ${branchName}`, "success") } catch (deleteError) {""` this.log(`Warning: Could not delete remote branch ${branchName}`, "warning") } } catch (error) {" this.failedBranches.push({ branch: branchName, error: error.message })"` this.log(` Failed to process ${branchName}: ${error.message}`, "error")" / Switch back to main if we"re not already there try {" await this.runCommand("git checkout main", "Switching back to main after error") } catch (checkoutError) {""` this.log(`Error switching back to main: ${checkoutError.message}`, "error") } } } async resolveConflicts(branchName) { try { / Get list of files with conflicts" const conflictFiles = execSync("git diff --name-only --diff-filter=U", {"" encoding: "utf8"" }).trim().split("\n").filter(f => f)` this.log(`Resolving conflicts in ${conflictFiles.length} files for ${branchName}`) for (const file of conflictFiles) { if (file) { await this.resolveFileConflicts(file) } } } catch (error) {"` this.log(`Error resolving conflicts in ${branchName}: ${error.message}`, "error") } } async resolveFileConflicts(filePath) { try {" const content = fs.readFileSync(filePath, "utf8") let resolvedContent = content" / Strategy: Keep our changes (HEAD) for most conflicts / Remove conflict markers and keep the HEAD version resolvedContent = resolvedContent.replace(""`"`
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/selective-pr-merge-automation.cjs
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
#!/usr/bin/env node;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
class SelectivePRMergeAutomation {
  constructor() {
    this.processedBranches = []
    this.mergedBranches = []
    this.failedBranches = []
    this.conflictsResolved = 0
    this.startTime = Date.now()
  }
  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    }
  async runCommand(command, description) {
    try {
      this.log(`"Running": ${description}`)
      const result = execSync(command, {"encoding": 'utf8',"stdio": 'pipe';
        cwd: process.cwd()})
      this.log(`✅ ${description} completed successfully`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} "failed": ${error.message}`, 'error')
      throw error
    }
  }
  async getPriorityBranches() {
    // Get a smaller set of priority branches to process first
    try {
      const result = await this.runCommand('git branch -r', 'Getting remote branches')
      const branches = result.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
      // Prioritize branches with specific keywords
      const priorityKeywords = ['enhance-app-clean-merge','enhance-app-services-and-website-with-futuristic-design','enhance-app-with-micro-saas';
        'enhance-app-with-new-services';
        'deploy-autonomous-cloud-automations';
        'develop-autonomous-cloud-agents']
      const priorityBranches = branches.filter(branch =>
        priorityKeywords.some(keyword => branch.includes(keyword))
      ).slice(0, 10) // Take first 10 priority branches
      this.log(`Found ${priorityBranches.length} priority branches to process`)
      return priorityBranches
    } catch (error) {
      this.log(`Error getting priority "branches": ${error.message}`, 'error')
      return []
    }
  }
  async processBranch(branchName) {
    try {
      this.log(`Processing "branch": ${branchName}`)
      this.processedBranches.push(branchName)
      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes')
      // Check if branch exists locally, if not create it
      try {
        await this.runCommand(`git checkout -b ${branchName} origin/${branchName}`, `Creating and checking out branch ${branchName}`)
      } catch (error) {
        await this.runCommand(`git checkout ${branchName}`, `Checking out existing branch ${branchName}`)
      }
      // Try to merge main into the branch
      try {
        await this.runCommand('git merge origin/main', `Merging main into ${branchName}`)
        this.log(`✅ Successfully merged main into ${branchName}`, 'success')
      } catch (mergeError) {
        this.log(`Merge conflicts detected in ${branchName}, resolving...`, 'warning')
        // Resolve conflicts automatically
        await this.resolveConflicts(branchName)
        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files')
        await this.runCommand("git commit -m "Resolve merge conflicts with main branch"", 'Committing resolved conflicts')
        this.conflictsResolved++
      }
      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`)
      // Switch back to main
      await this.runCommand('git checkout main', 'Switching back to main')
      // Merge the branch into main
      await this.runCommand(`git merge ${branchName}`, `Merging ${branchName} into main`)
      // Push main
      await this.runCommand('git push origin main', 'Pushing updated main')
      this.mergedBranches.push(branchName)
      this.log(`✅ Successfully merged ${branchName} into main`, 'success')
      // Delete the remote branch
      try {
        await this.runCommand(`git push origin --delete ${branchName}`, `Deleting remote branch ${branchName}`)
        this.log(`✅ Deleted remote branch ${branchName}`, 'success')
      } catch (deleteError) {
        this.log(`"Warning": Could not delete remote branch ${branchName}`, 'warning')
      }
    } catch (error) {
      this.failedBranches.push({ "branch": branchName, "error": error.message })
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error')
      // Switch back to main if we're not already there
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error')
      } catch (checkoutError) {
        this.log(`Error switching back to "main": ${checkoutError.message}`, 'error')
      }
    }
  }
  async resolveConflicts(branchName) {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', {
        "encoding": 'utf8'
      }).trim().split('\n').filter(f => f)
      this.log(`Resolving conflicts in ${conflictFiles.length} files for ${branchName}`)
      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file)
        }
      }
    } catch (error) {
      this.log(`Error resolving conflicts in ${branchName}: ${error.message}`, 'error')
    }
  }
  async resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let resolvedContent = content
      // "Strategy": Keep our changes (HEAD) for most conflicts
      // Remove conflict markers and keep the HEAD version
      resolvedContent = resolvedContent.replace(
        '$1'
      )
      // Handle any remaining conflict markers
      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent)
      this.log(`✅ Resolved conflicts "in": ${filePath}`)
    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'error')
    }
  }
  async runAutomation() {
    try {
      this.log('Starting selective PR merge automation...')
      // Get priority branches
      const branches = await this.getPriorityBranches()
      if (branches.length === 0) {
        this.log('No priority branches to process', 'info')
        return
      }
      // Process branches one by one
      for (const branch of branches) {
        await this.processBranch(branch)
        // Small delay between branches
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      // Generate final report
      this.generateReport()
    } catch (error) {
      this.log(`Automation "failed": ${error.message}`, 'error')
    }
  }
  generateReport() {
    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)
    const report = {
      "summary": {
        totalBranches: this.processedBranches.length;
        successfullyMerged: this.mergedBranches.length;
        failedBranches: this.failedBranches.length;
        conflictsResolved: this.conflictsResolved;
        duration: `${duration} seconds`
      };
      "processedBranches": this.processedBranches;
      mergedBranches: this.mergedBranches;
      failedBranches: this.failedBranches;
      timestamp: new Date().toISOString()
    }
    // Save report to file
    fs.writeFileSync('selective-pr-merge-report.json', JSON.stringify(report, null, 2))
    // Display summary
    if (this.failedBranches.length > 0) {
      this.failedBranches.forEach(failure => {
        })
    }
    }
}
// Run the automation
const automation = new SelectivePRMergeAutomation()
automation.runAutomation().then(() => {
  }).catch(error => {
  console.error('Automation "failed": ', error.message)
  process.exit(1)
})
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// console.log(' Selective PR Merge Automation System')
<<<<<<< HEAD
console.log('===')
  log(message, type = 'info')
      const result = execSync(command, {"encoding": 'utf8',"stdio"})
      this.log(` ${description} "failed"`)
      this.log(`Error getting priority "branches"`)
        await this.runCommand("git commit -m "Resolve merge conflicts with main branch"")
        this.log(`"Warning"`)
        this.log(`Error switching back to "main"`)
        "encoding"
      this.log(`Automation "failed"`)
// console.log('\n Failed "branches")
    console.log('\n Detailed report saved "to")
  console.error('Automation "failed")
<<<<<<< HEAD
<<<<<<< HEAD
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  console.error('Automation "failed")"
cursor/fix-lint-push-and-merge-to-main-f3c1;
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
