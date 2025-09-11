#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')

console.log('🚀 Mass PR Processor - Handling All Remaining Branches')

class MassPRProcessor {
  constructor() {
    this.processedBranches = []
    this.mergedBranches = []
    this.failedBranches = []
    this.skippedBranches = []
    this.conflictsResolved = 0
    this.startTime = Date.now()
    this.batchSize = 5 // Process 5 branches at a time
    this.maxRetries = 2
    this.maxBranches = 100 // Limit to first 100 branches for now
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async runCommand(command, description, retries = 0) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        maxBuffer: 1024 * 1024 * 20 // 20MB buffer
      })
      this.log(`✅ ${description} completed successfully`, 'success')
      return result
    } catch (error) {
      if (retries < this.maxRetries && (error.message.includes('ENOBUFS') || error.message.includes('timeout'))) {
        this.log(`⚠️  Error, retrying (${retries + 1}/${this.maxRetries})`, 'warning')
        await new Promise(resolve => setTimeout(resolve, 5000))
        return this.runCommand(command, description, retries + 1)
      }
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      throw error
    }
  }

  async getAllRemainingBranches() {
    try {
      const result = await this.runCommand('git branch -r', 'Getting all remote branches')
      const branches = result.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
        .filter(branch => !branch.includes('backup-'))
        .filter(branch => !branch.includes('cursor/'))
        .filter(branch => branch.match(/(chore|fix|feature|codex)/i))
        .slice(0, this.maxBranches) // Limit to first 100 branches
      
      this.log(`Found ${branches.length} branches to process (limited to ${this.maxBranches})`)
      return branches
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'error')
      return []
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`)
      this.processedBranches.push(branchName)

      // Always start with a fresh pull of main
      await this.runCommand('git checkout main', 'Switching to main')
      await this.runCommand('git pull --rebase origin main', 'Pulling latest main')

      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes')

      // Checkout the branch
      await this.runCommand(`git checkout ${branchName}`, `Checking out ${branchName}`)

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge main --no-ff -m "Merge main into ' + branchName + '"', `Merging main into ${branchName}`)
      } catch (mergeError) {
        this.log(`Merge conflicts detected in ${branchName}, resolving...`, 'warning')
        
        // Resolve conflicts automatically
        await this.resolveConflicts(branchName)
        
        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files')
        await this.runCommand(`git commit -m "Resolve merge conflicts in ${branchName}"`, 'Committing resolved conflicts')
        this.conflictsResolved++
      }

      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`)

      // Switch back to main and pull latest changes
      await this.runCommand('git checkout main', 'Switching back to main')
      await this.runCommand('git pull --rebase origin main', 'Pulling latest main before merge')

      // Merge the branch into main
      await this.runCommand(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`, `Merging ${branchName} into main`)

      // Push main with force-with-lease
      await this.runCommand('git push --force-with-lease origin main', 'Pushing updated main')

      this.mergedBranches.push(branchName)
      this.log(`✅ Successfully merged ${branchName} into main`, 'success')

      // Delete the remote branch
      try {
        await this.runCommand(`git push origin --delete ${branchName}`, `Deleting remote branch ${branchName}`)
      } catch (deleteError) {
        this.log(`Warning: Could not delete remote branch ${branchName}`, 'warning')
      }

    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message })
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error')
      
      // Switch back to main on error
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error')
        await this.runCommand('git pull --rebase origin main', 'Pulling latest main after error')
      } catch (checkoutError) {
        this.log(`Error switching back to main: ${checkoutError.message}`, 'error')
      }
    }
  }

  async resolveConflicts(branchName) {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10 // 10MB buffer
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

      // Strategy: Keep our changes (HEAD) for most conflicts
      resolvedContent = resolvedContent.replace(

      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent)
      this.log(`✅ Resolved conflicts in: ${filePath}`)
    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'error')
    }
  }

  async runAutomation() {
    try {
      this.log('Starting mass PR processing automation...')

      // Get all remaining branches
      const branches = await this.getAllRemainingBranches()

      if (branches.length === 0) {
        this.log('No branches to process', 'info')
        return
      }

      // Process branches in batches
      for (let i = 0; i < branches.length; i += this.batchSize) {
        const batch = branches.slice(i, i + this.batchSize)
        this.log(`Processing batch ${Math.floor(i/this.batchSize) + 1}/${Math.ceil(branches.length/this.batchSize)} (${batch.length} branches)`)

        // Process branches in parallel within each batch
        const promises = batch.map(branch => this.processBranch(branch))
        await Promise.allSettled(promises)

        // Delay between batches
        await new Promise(resolve => setTimeout(resolve, 10000))
        
        // Pull latest changes every 5 batches
        if ((i / this.batchSize) % 5 === 0) {
          try {
            await this.runCommand('git pull --rebase origin main', 'Pulling latest changes')
          } catch (pullError) {
            this.log(`Warning: Could not pull latest changes: ${pullError.message}`, 'warning')
          }
        }
      }

      // Generate final report
      this.generateReport()
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'error')
    }
  }

  generateReport() {
    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)

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
    }

    // Save report to file
    fs.writeFileSync('mass-pr-processor-report.json', JSON.stringify(report, null, 2))

    // Display summary
    console.log('\n🎉 Mass PR Processing Complete!')
    console.log(`Total branches processed: ${this.processedBranches.length}`)
    console.log(`Successfully merged: ${this.mergedBranches.length}`)
    console.log(`Failed branches: ${this.failedBranches.length}`)
    console.log(`Conflicts resolved: ${this.conflictsResolved}`)
    console.log(`Duration: ${duration} seconds`)

    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:')
      this.failedBranches.slice(0, 10).forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`)
      })
      if (this.failedBranches.length > 10) {
        console.log(`  ... and ${this.failedBranches.length - 10} more`)
      }
    }

    console.log('\n📊 Detailed report saved to: mass-pr-processor-report.json')
  }
}

// Run the automation
const automation = new MassPRProcessor()
automation.runAutomation().then(() => {
  console.log('\n🚀 Mass PR processing automation completed!')
}).catch(error => {
  console.error('Automation failed:', error.message)
  process.exit(1)
})