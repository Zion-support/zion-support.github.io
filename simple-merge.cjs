#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')

console.log('🔧 Simple Merge Script - Handle Conflicts Systematically')
console.log('=======================================================')

class SimpleMerger {
  constructor() {
    this.mergedBranches = []
    this.failedBranches = []
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
        maxBuffer: 1024 * 1024 * 10
      })
      this.log(`✅ ${description} completed successfully`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      throw error
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`Attempting to merge: ${branchName}`)
      
      // Try to merge the branch
      await this.runCommand(
        `git merge origin/${branchName} --no-ff -m "Merge: ${branchName}"`,
        `Merging ${branchName} into main`
      )
      
      this.mergedBranches.push(branchName)
      this.log(`✅ Successfully merged ${branchName}`, 'success')
      
    } catch (error) {
      this.log(`❌ Failed to merge ${branchName}: ${error.message}`, 'error')
      this.failedBranches.push({ branch: branchName, error: error.message })
      
      // Reset to clean state
      try {
        await this.runCommand('git merge --abort', 'Aborting failed merge')
      } catch (abortError) {
        this.log(`Warning: Could not abort merge: ${abortError.message}`, 'warning')
      }
    }
  }

  async run() {
    try {
      // Get priority branches
      const priorityBranches = [
        '0t8m4m-codex/update-project-color-palette',
        '0une71-codex/fix-unsupported-shell-syntax-in-setup.sh',
        '14gqd5-codex/implement-checkout-flow-with-auth-redirect',
        '1dcwqi-codex/implement-global-pricing-with-currency-selection',
        '1fjs4s-codex/implement-instant-messaging-for-negotiations',
        '1m9jcs-codex/fix-client-side-rendering-and-javascript-errors',
        '1nc0kn-codex/fix-blank-screen-on-app-load',
        '1nq1ky-codex/render-talent-profiles-with-error-states',
        '1ry69n-codex/fix-npm-eio-error-during-install',
        '1sqc9r-codex/implement-light/dark-theme-with-persistence'
      ]

      this.log(`Starting merge process for ${priorityBranches.length} priority branches`)

      for (const branch of priorityBranches) {
        try {
          await this.mergeBranch(branch)
          // Small delay between merges
          await new Promise(resolve => setTimeout(resolve, 2000))
        } catch (error) {
          this.log(`Error processing ${branch}: ${error.message}`, 'error')
        }
      }

      // Generate report
      this.generateReport()
    } catch (error) {
      this.log(`Script failed: ${error.message}`, 'error')
    }
  }

  generateReport() {
    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)

    const report = {
      summary: {
        successfullyMerged: this.mergedBranches.length,
        failedBranches: this.failedBranches.length,
        duration: `${duration} seconds`
      },
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
      timestamp: new Date().toISOString()
    }

    // Save report to file
    fs.writeFileSync('simple-merge-report.json', JSON.stringify(report, null, 2))

    // Display summary
    console.log('\n🎉 Simple Merge Complete!')
    console.log('=========================')
    console.log(`Successfully merged: ${this.mergedBranches.length}`)
    console.log(`Failed branches: ${this.failedBranches.length}`)
    console.log(`Duration: ${duration} seconds`)

    if (this.mergedBranches.length > 0) {
      console.log('\n✅ Successfully merged branches:')
      this.mergedBranches.forEach(branch => {
        console.log(`  - ${branch}`)
      })
    }

    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:')
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`)
      })
    }

    console.log('\n📊 Detailed report saved to: simple-merge-report.json')
  }
}

// Run the script
const merger = new SimpleMerger()
merger.run().then(() => {
  console.log('\n🚀 Simple merge script completed!')
}).catch(error => {
  console.error('Script failed:', error.message)
  process.exit(1)
})