#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')

console.log('🚀 Merging Remaining PRs')
console.log('========================')

class RemainingPRsMerger {
  constructor() {
    this.processedBranches = []
    this.mergedBranches = []
    this.failedBranches = []
    this.startTime = Date.now()
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`)
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 30000
      })
      this.log(`✅ ${description} completed`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      throw error
    }
  }

  async getRemainingBranches() {
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
          branch.includes('cursor/create-and-deploy') ||
          branch.includes('chore/clean-netlify') ||
          branch.includes('candidate/netlify')
        )
      
      this.log(`Found ${branches.length} remaining branches to process`)
      return branches.slice(0, 10) // Process only first 10 to avoid overwhelming
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'error')
      return []
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`)
      this.processedBranches.push(branchName)

      // Ensure we're on main and up to date
      await this.runCommand('git checkout main', 'Switching to main')
      await this.runCommand('git pull origin main', 'Pulling latest main')

      // Fetch and checkout the branch
      await this.runCommand('git fetch origin', 'Fetching latest changes')
      await this.runCommand(`git checkout ${branchName}`, `Checking out ${branchName}`)

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge main', `Merging main into ${branchName}`)
        this.log(`✅ Successfully merged main into ${branchName}`, 'success')
      } catch (mergeError) {
        this.log(`⚠️  Merge conflicts in ${branchName}, resolving...`, 'warning')
        
        // Resolve conflicts by keeping our version
        const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
          encoding: 'utf8' 
        }).trim().split('\n').filter(f => f)

        for (const file of conflictedFiles) {
          if (file && fs.existsSync(file)) {
            try {
              await this.runCommand(`git checkout --ours "${file}"`, `Resolving conflicts in ${file}`)
            } catch (e) {
              // If checkout fails, remove conflict markers manually
              const content = fs.readFileSync(file, 'utf8')
              const resolvedContent = content
                .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g, '$1')
                .replace(/<<<<<<< HEAD\n/g, '')
                .replace(/=======\n/g, '')
                .replace(/>>>>>>> [^\n]*\n/g, '')
              fs.writeFileSync(file, resolvedContent)
            }
          }
        }
        
        await this.runCommand('git add .', 'Adding resolved files')
        await this.runCommand(`git commit -m "Resolve merge conflicts with main"`, 'Committing resolved conflicts')
      }

      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`)

      // Switch back to main and merge
      await this.runCommand('git checkout main', 'Switching back to main')
      await this.runCommand(`git merge ${branchName}`, `Merging ${branchName} into main`)
      await this.runCommand('git push origin main', 'Pushing updated main')

      this.mergedBranches.push(branchName)
      this.log(`✅ Successfully merged ${branchName} into main`, 'success')

    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message })
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error')
      
      // Switch back to main
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error')
      } catch (checkoutError) {
        this.log(`Error switching back to main: ${checkoutError.message}`, 'error')
      }
    }
  }

  async runAutomation() {
    try {
      this.log('Starting remaining PRs merge automation...')

      const branches = await this.getRemainingBranches()
      
      if (branches.length === 0) {
        this.log('No remaining branches to process', 'info')
        return
      }

      this.log(`Processing ${branches.length} remaining branches`)

      for (const branch of branches) {
        await this.processBranch(branch)
        await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
      }

      this.generateReport()

    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'error')
    }
  }

  generateReport() {
    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)

    console.log('\n🎉 Remaining PRs Merge Complete!')
    console.log('=================================')
    console.log(`Total branches processed: ${this.processedBranches.length}`)
    console.log(`Successfully merged: ${this.mergedBranches.length}`)
    console.log(`Failed branches: ${this.failedBranches.length}`)
    console.log(`Duration: ${duration} seconds`)
    
    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:')
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`)
      })
    }

    const report = {
      summary: {
        totalBranches: this.processedBranches.length,
        successfullyMerged: this.mergedBranches.length,
        failedBranches: this.failedBranches.length,
        duration: `${duration} seconds`
      },
      processedBranches: this.processedBranches,
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
      timestamp: new Date().toISOString()
    }

    fs.writeFileSync('remaining-prs-merge-report.json', JSON.stringify(report, null, 2))
    console.log('\n📊 Detailed report saved to: remaining-prs-merge-report.json')
  }
}

// Run the automation
const automation = new RemainingPRsMerger()
automation.runAutomation().then(() => {
  console.log('\n🚀 Remaining PRs merge automation completed!')
}).catch(error => {
  console.error('Automation failed:', error.message)
  process.exit(1)
})