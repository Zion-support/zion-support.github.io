#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')

console.log('🚀 Netlify PR Merge Automation System')
console.log('=====================================')

class NetlifyPRMergeAutomation {
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
    console.log(logEntry)
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 60000 // 60 second timeout
      })
      this.log(`✅ ${description} completed successfully`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      throw error
    }
  }

  async getNetlifyBranches() {
    try {
      const result = await this.runCommand('git branch -r', 'Getting remote branches')
      const branches = result.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
        .filter(branch => 
          branch.includes('netlify') || 
          branch.includes('cursor/fix-netlify') ||
          branch.includes('chore/fix-netlify') ||
          branch.includes('chore/netlify') ||
          branch.includes('fix/netlify') ||
          branch.includes('cursor/create-and-deploy')
        )
      
      this.log(`Found ${branches.length} Netlify-related branches to process`)
      return branches
    } catch (error) {
      this.log(`Error getting Netlify branches: ${error.message}`, 'error')
      return []
    }
  }

  async resolveConflicts(branchName) {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { 
        encoding: 'utf8',
        timeout: 30000
      }).trim().split('\n').filter(f => f)

      this.log(`Resolving conflicts in ${conflictFiles.length} files for ${branchName}`)

      for (const file of conflictFiles) {
        if (file && fs.existsSync(file)) {
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
      // Remove conflict markers and keep the HEAD version
      resolvedContent = resolvedContent.replace(
        /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g,
        '$1'
      )

      // Handle any remaining conflict markers
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n/g, '')
      resolvedContent = resolvedContent.replace(/=======\n/g, '')
      resolvedContent = resolvedContent.replace(/>>>>>>> [^\n]*\n/g, '')
      
      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent)
      this.log(`✅ Resolved conflicts in: ${filePath}`)

    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'error')
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`)
      this.processedBranches.push(branchName)

      // Ensure we're on main first
      await this.runCommand('git checkout main', 'Switching to main')
      await this.runCommand('git pull origin main', 'Pulling latest main')

      // Fetch the branch
      await this.runCommand('git fetch origin', 'Fetching latest changes')
      await this.runCommand(`git checkout ${branchName}`, `Checking out branch ${branchName}`)

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge main', `Merging main into ${branchName}`)
        this.log(`✅ Successfully merged main into ${branchName}`, 'success')
      } catch (mergeError) {
        this.log(`Merge conflicts detected in ${branchName}, resolving...`, 'warning')
        
        // Resolve conflicts automatically
        await this.resolveConflicts(branchName)
        
        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files')
        await this.runCommand(`git commit -m "Resolve merge conflicts with main branch - ${new Date().toISOString()}"`, 'Committing resolved conflicts')
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

    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message })
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error')
      
      // Switch back to main if we're not already there
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error')
      } catch (checkoutError) {
        this.log(`Error switching back to main: ${checkoutError.message}`, 'error')
      }
    }
  }

  async runAutomation() {
    try {
      this.log('Starting Netlify PR merge automation...')

      // Get Netlify-related branches
      const branches = await this.getNetlifyBranches()
      
      if (branches.length === 0) {
        this.log('No Netlify branches to process', 'info')
        return
      }

      this.log(`Processing ${branches.length} Netlify-related branches`)

      // Process branches one by one to avoid overwhelming the system
      for (const branch of branches) {
        await this.processBranch(branch)
        
        // Small delay between branches
        await new Promise(resolve => setTimeout(resolve, 1000))
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
    fs.writeFileSync('netlify-pr-merge-report.json', JSON.stringify(report, null, 2))

    // Display summary
    console.log('\n🎉 Netlify PR Merge Automation Complete!')
    console.log('========================================')
    console.log(`Total branches processed: ${this.processedBranches.length}`)
    console.log(`Successfully merged: ${this.mergedBranches.length}`)
    console.log(`Failed branches: ${this.failedBranches.length}`)
    console.log(`Conflicts resolved: ${this.conflictsResolved}`)
    console.log(`Duration: ${duration} seconds`)
    
    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:')
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`)
      })
    }

    console.log('\n📊 Detailed report saved to: netlify-pr-merge-report.json')
  }
}

// Run the automation
const automation = new NetlifyPRMergeAutomation()
automation.runAutomation().then(() => {
  console.log('\n🚀 Netlify PR merge automation completed!')
}).catch(error => {
  console.error('Automation failed:', error.message)
  process.exit(1)
})