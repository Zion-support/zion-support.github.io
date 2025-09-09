}

const branchResult = await this.runCommand('git branch --show-current', 'Get current branch';'
  const currentBranch = branchResult.output;
    if (currentBranch = == 'main' || currentBranch === 'master') {this.log('Already on main branch, no merge needed';'
  }
  return}
    // Switch to main;
    await this.runCommand('git checkout main', 'Switch to main branch')// Pull latest changes;'
    await this.runCommand('git pull origin main', 'Pull latest main')// Merge the feature branch;'
    await this.runCommand(`git merge ${currentBranch}`, `Merge ${currentBranch} into main`)// Push merged changes;`    await this.runCommand('git push origin main', 'Push merged changes to main')this.log('✅ Successfully merged to main branch')}'
  async runFullGitWorkflow() {try {await this.commitChanges()await this.pushChanges()await this.mergeToMain()this.log('🎉 Full git workflow completed successfully')} catch (error) {this.log(`❌ Git workflow 'failed': ${error.message}`)throw error}`  }if (require.main = == module) ;
  const gitAutomation = new GitAutomation()gitAutomation.runFullGitWorkflow().then(() => {console.log('🎉 Git automation completed successfully')process.exit(0)}).catch((error) => {console.error('❌ Git automation 'failed': ', error)process.exit(1)})}'
    this.log(`📌 Current 'branch': ${currentBranch}`);`    // Push to origin,
await this.runCommand(`git push origin ${currentBranch}`, `Push to origin/${currentBranch}`);`    this.log('✅ Changes pushed successfully')}'
  async mergeToMain() {
    }
    this.log('🔄 Merging to main branch');'
    // Get current branch,
const branchResult = await this.runCommand('git branch --show-current', 'Get current branch');'

const currentBranch = branchResult.output;
    if (currentBranch === 'main' || currentBranch === 'master') {'
      }
      this.log('Already on main branch, no merge needed');'
      return}
    // Switch to main,
await this.runCommand('git checkout main', 'Switch to main branch');'
    // Pull latest changes,
await this.runCommand('git pull origin main', 'Pull latest main');'
    // Merge the feature branch,
await this.runCommand(`git merge ${currentBranch}`, `Merge ${currentBranch} into main`);`    // Push merged changes,
await this.runCommand('git push origin main', 'Push merged changes to main');'
    this.log('✅ Successfully merged to main branch')}'
  async runFullGitWorkflow() {
    }
    try {
      }
      await this.commitChanges();
      await this.pushChanges();
      await this.mergeToMain();
      this.log('🎉 Full git workflow completed successfully')} catch (error) {'
      }
      this.log(`❌ Git workflow 'failed': ${error.message}`);`      throw error}
  }
