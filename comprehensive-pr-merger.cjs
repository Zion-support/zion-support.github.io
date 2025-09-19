#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')

console.log('🚀 Comprehensive PR Merger - Processing 15,000+ Branches')
console.log('=======================================================')

class ComprehensivePRMerger {
  constructor() {
    this.processedBranches = []
    this.mergedBranches = []
    this.failedBranches = []
    this.conflictsResolved = 0
    this.startTime = Date.now()
    this.batchSize = 50 // Process 50 branches at a time
    this.maxBatches = 100 // Limit to 5000 branches for safety
    this.currentBatch = 0
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
    
    // Also write to log file
    fs.appendFileSync('pr-merge-log.txt', logEntry + '\n')
  }

  async runCommand(command, description, timeout = 30000) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: timeout
      })
      this.log(`✅ ${description} completed`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      throw error
    }
  }

  async getAllBranches() {
    try {
      const result = await this.runCommand('git branch -r', 'Getting all remote branches')
      const branches = result.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
        .filter(branch => !branch.includes('backup'))
        .filter(branch => !branch.includes('aggressive-merge'))
        .filter(branch => !branch.includes('temp_'))
      
      this.log(`Found ${branches.length} branches to process`)
      return branches
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'error')
      return []
    }
  }

  async resolveConflicts(branchName) {
    try {
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
        encoding: 'utf8',
        timeout: 15000
      }).trim().split('\n').filter(f => f)

      this.log(`Resolving conflicts in ${conflictedFiles.length} files for ${branchName}`)

      for (const file of conflictedFiles) {
        if (file && fs.existsSync(file)) {
          try {
            // For critical files, keep main version
            if (file.includes('package.json') || file.includes('netlify.toml') || file.includes('yarn.lock')) {
              await this.runCommand(`git checkout --theirs "${file}"`, `Keeping main version of ${file}`, 10000)
            } else {
              // For most files, keep our version
              await this.runCommand(`git checkout --ours "${file}"`, `Keeping our version of ${file}`, 10000)
            }
          } catch (e) {
            // If checkout fails, remove conflict markers manually
            try {
              const content = fs.readFileSync(file, 'utf8')
              const resolvedContent = content
                .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g, '$1')
                .replace(/<<<<<<< HEAD\n/g, '')
                .replace(/=======\n/g, '')
                .replace(/>>>>>>> [^\n]*\n/g, '')
              fs.writeFileSync(file, resolvedContent)
              this.log(`✅ Manually resolved conflicts in: ${file}`)
            } catch (manualError) {
              this.log(`❌ Could not resolve conflicts in ${file}: ${manualError.message}`, 'error')
            }
          }
        }
      }

      this.conflictsResolved++
    } catch (error) {
      this.log(`Error resolving conflicts in ${branchName}: ${error.message}`, 'error')
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`)
      this.processedBranches.push(branchName)

      // Ensure we're on main and up to date
      await this.runCommand('git checkout main', 'Switching to main', 15000)
      await this.runCommand('git pull origin main', 'Pulling latest main', 30000)

      // Fetch and checkout the branch
      await this.runCommand('git fetch origin', 'Fetching latest changes', 30000)
      
      try {
        await this.runCommand(`git checkout ${branchName}`, `Checking out ${branchName}`, 15000)
      } catch (checkoutError) {
        this.log(`⚠️  Could not checkout ${branchName}, skipping...`, 'warning')
        this.failedBranches.push({ branch: branchName, error: 'Could not checkout' })
        return
      }

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge main', `Merging main into ${branchName}`, 30000)
        this.log(`✅ Successfully merged main into ${branchName}`, 'success')
      } catch (mergeError) {
        this.log(`⚠️  Merge conflicts in ${branchName}, resolving...`, 'warning')
        
        // Resolve conflicts automatically
        await this.resolveConflicts(branchName)
        
        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files', 15000)
        await this.runCommand(`git commit -m "Resolve merge conflicts with main - ${new Date().toISOString()}"`, 'Committing resolved conflicts', 15000)
      }

      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`, 30000)

      // Switch back to main and merge
      await this.runCommand('git checkout main', 'Switching back to main', 15000)
      await this.runCommand(`git merge ${branchName}`, `Merging ${branchName} into main`, 30000)
      await this.runCommand('git push origin main', 'Pushing updated main', 30000)

      this.mergedBranches.push(branchName)
      this.log(`✅ Successfully merged ${branchName} into main`, 'success')

      // Try to delete the remote branch to clean up
      try {
        await this.runCommand(`git push origin --delete ${branchName}`, `Deleting remote branch ${branchName}`, 15000)
        this.log(`✅ Deleted remote branch ${branchName}`, 'success')
      } catch (deleteError) {
        this.log(`⚠️  Could not delete remote branch ${branchName}`, 'warning')
      }

    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message })
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error')
      
      // Switch back to main
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error', 15000)
      } catch (checkoutError) {
        this.log(`Error switching back to main: ${checkoutError.message}`, 'error')
      }
    }
  }

  async processBatch(branches) {
    this.currentBatch++
    this.log(`\n🔄 Processing Batch ${this.currentBatch}/${this.maxBatches}`)
    this.log(`Batch contains ${branches.length} branches`)

    for (let i = 0; i < branches.length; i++) {
      const branch = branches[i]
      this.log(`\n[${i + 1}/${branches.length}] Processing: ${branch}`)
      
      await this.processBranch(branch)
      
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show progress every 10 branches
      if ((i + 1) % 10 === 0) {
        this.log(`\n📊 Batch Progress: ${i + 1}/${branches.length} completed`)
        this.log(`Total Success: ${this.mergedBranches.length}`)
        this.log(`Total Failed: ${this.failedBranches.length}`)
        this.log(`Conflicts Resolved: ${this.conflictsResolved}`)
      }
    }
  }

  async runAutomation() {
    try {
      this.log('Starting comprehensive PR merge automation...')
      
      // Initialize log file
      fs.writeFileSync('pr-merge-log.txt', `PR Merge Automation Started: ${new Date().toISOString()}\n`)

      // Get all branches
      const allBranches = await this.getAllBranches()
      
      if (allBranches.length === 0) {
        this.log('No branches to process', 'info')
        return
      }

      this.log(`Total branches to process: ${allBranches.length}`)
      this.log(`Processing in batches of ${this.batchSize}`)
      this.log(`Maximum batches: ${this.maxBatches} (${this.maxBatches * this.batchSize} branches)`)

      // Process branches in batches
      for (let i = 0; i < allBranches.length && this.currentBatch < this.maxBatches; i += this.batchSize) {
        const batch = allBranches.slice(i, i + this.batchSize)
        await this.processBatch(batch)
        
        // Delay between batches
        if (i + this.batchSize < allBranches.length) {
          this.log(`\n⏸️  Waiting 5 seconds before next batch...`)
          await new Promise(resolve => setTimeout(resolve, 5000))
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
        duration: `${duration} seconds`,
        batchesProcessed: this.currentBatch
      },
      processedBranches: this.processedBranches,
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
      timestamp: new Date().toISOString()
    }

    // Save detailed report
    fs.writeFileSync('comprehensive-pr-merge-report.json', JSON.stringify(report, null, 2))

    // Display summary
    console.log('\n🎉 Comprehensive PR Merge Automation Complete!')
    console.log('==============================================')
    console.log(`Total branches processed: ${this.processedBranches.length}`)
    console.log(`Successfully merged: ${this.mergedBranches.length}`)
    console.log(`Failed branches: ${this.failedBranches.length}`)
    console.log(`Conflicts resolved: ${this.conflictsResolved}`)
    console.log(`Batches processed: ${this.currentBatch}`)
    console.log(`Duration: ${Math.round(duration / 60)} minutes`)
    console.log(`Success Rate: ${Math.round((this.mergedBranches.length / this.processedBranches.length) * 100)}%`)
    
    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches (first 10):')
      this.failedBranches.slice(0, 10).forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`)
      })
      if (this.failedBranches.length > 10) {
        console.log(`  ... and ${this.failedBranches.length - 10} more`)
      }
    }

    console.log('\n📊 Detailed report saved to: comprehensive-pr-merge-report.json')
    console.log('📝 Full log saved to: pr-merge-log.txt')
  }
}

// Run the automation
const automation = new ComprehensivePRMerger()
automation.runAutomation().then(() => {
  console.log('\n🚀 Comprehensive PR merge automation completed!')
}).catch(error => {
  console.error('Automation failed:', error.message)
  process.exit(1)
})