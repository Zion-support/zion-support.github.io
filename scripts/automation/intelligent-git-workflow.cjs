  async createPullRequest(sourceBranch, targetBranch = 'main', title = null, description = null) {
    this.log(`📝 Creating pull request from ${sourceBranch} to ${targetBranch}...`);
    
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'create_pull_request',
        sourceBranch,
        targetBranch,
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      
      this.currentWorkflow = workflow;
      
      // Generate PR title if not provided
      if (!title) {
        title = await this.generatePRTitle(sourceBranch);
      }
      
      // Generate PR description if not provided
      if (!description) {
        description = await this.generatePRDescription(sourceBranch, targetBranch);
      }
      
      // Create PR using GitHub CLI or API
      const prUrl = await this.createPRViaAPI(sourceBranch, targetBranch, title, description);
      
      workflow.steps.push({
        step: 'Create pull request',
        status: 'completed',
        title,
        url: prUrl,
        timestamp: new Date().toISOString()
      });
      
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      
      this.log(`✅ Pull request created: ${prUrl}`);
      
    } catch (error) {
      this.log(`❌ Pull request creation failed: ${error.message}`, 'ERROR');
      
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      
      throw error;
    }
  }

  async generatePRTitle(sourceBranch) {
    try {
      // Get recent commits
      const commits = await this.runGitCommand(`git log --oneline -5 ${sourceBranch}`);
      const commitLines = commits.split('\n').filter(line => line.trim());
      
      if (commitLines.length > 0) {
        const firstCommit = commitLines[0];
        return firstCommit.substring(firstCommit.indexOf(' ') + 1);
      }
      
      return `Merge ${sourceBranch}`;
      
    } catch (error) {
      return `Merge ${sourceBranch}`;
    }
  }

  async generatePRDescription(sourceBranch, targetBranch) {
    try {
      // Get changed files
      const changedFiles = await this.runGitCommand(`git diff --name-only ${targetBranch}...${sourceBranch}`);
      const fileList = changedFiles.split('\n').filter(f => f.trim());
      
      // Get commit count
      const commitCount = await this.runGitCommand(`git rev-list --count ${targetBranch}..${sourceBranch}`);
      
      let description = `## Changes\n\n`;
      description += `- **Files changed:** ${fileList.length}\n`;
      description += `- **Commits:** ${commitCount}\n\n`;
      
      if (fileList.length > 0) {
        description += `### Modified Files\n\n`;
        fileList.forEach(file => {
          description += `- ${file}\n`;
        });
      }
      
      description += `\n## Automated PR\n\nThis pull request was created automatically by the AI Git Workflow system.`;
      
      return description;
      
    } catch (error) {
      return `Automated pull request from ${sourceBranch} to ${targetBranch}`;
    }
  }

  async createPRViaAPI(sourceBranch, targetBranch, title, description) {
    // This is a simplified implementation
    // In a real scenario, you would use the GitHub API or GitHub CLI
    
    try {
      // Try using GitHub CLI if available
      const result = await this.runGitCommand(`gh pr create --title "${title}" --body "${description}" --base ${targetBranch} --head ${sourceBranch}`);
      return result;
    } catch (error) {
      // Fallback to manual creation
      this.log(`⚠️ GitHub CLI not available, manual PR creation required`, 'WARN');
      return `https://github.com/your-repo/compare/${targetBranch}...${sourceBranch}`;
    }
  }

  async cleanupBranches() {
    this.log(`🧹 Cleaning up branches...`);
    
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'cleanup_branches',
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      
      this.currentWorkflow = workflow;
      
      // Get all branches
      const allBranches = await this.runGitCommand('git branch -a');
      const branchList = allBranches.split('\n').filter(b => b.trim());
      
      // Get merged branches
      const mergedBranches = await this.runGitCommand('git branch --merged main');
      const mergedList = mergedBranches.split('\n').filter(b => b.trim());
      
      // Find branches to delete
      const branchesToDelete = branchList.filter(branch => {
        const branchName = branch.replace('*', '').trim();
        return !this.config.protectedBranches.includes(branchName) && 
               mergedList.includes(branchName) &&
               branchName !== 'main' && branchName !== 'master';
      });
      
      // Delete merged branches
      for (const branch of branchesToDelete) {
        const branchName = branch.replace('*', '').trim();
        try {
          await this.runGitCommand(`git branch -d ${branchName}`);
          workflow.steps.push({
            step: 'Delete merged branch',
            status: 'completed',
            branch: branchName,
            timestamp: new Date().toISOString()
          });
          
          this.log(`✅ Deleted merged branch: ${branchName}`);
        } catch (error) {
          this.log(`⚠️ Could not delete branch ${branchName}: ${error.message}`, 'WARN');
        }
      }
      
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      
      this.log(`✅ Branch cleanup completed`);
      
    } catch (error) {
      this.log(`❌ Branch cleanup failed: ${error.message}`, 'ERROR');
      
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      
      throw error;
    }
  }

  async runCodeQualityChecks() {
    this.log(`🔍 Running code quality checks...`);
    
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'code_quality_checks',
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      
      this.currentWorkflow = workflow;
      
      // Run linting
      try {
        await this.runGitCommand('npm run lint');
        workflow.steps.push({
          step: 'Lint check',
          status: 'passed',
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        workflow.steps.push({
          step: 'Lint check',
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
      
      // Run type checking
      try {
        await this.runGitCommand('npm run type-check');
        workflow.steps.push({
          step: 'Type check',
          status: 'passed',
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        workflow.steps.push({
          step: 'Type check',
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
      
      // Run tests
      try {
        await this.runGitCommand('npm run test:smoke');
        workflow.steps.push({
          step: 'Test run',
          status: 'passed',
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        workflow.steps.push({
          step: 'Test run',
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
      
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      
      this.log(`✅ Code quality checks completed`);
      
    } catch (error) {
      this.log(`❌ Code quality checks failed: ${error.message}`, 'ERROR');
      
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      
      throw error;
    }
  }

  generateWorkflowId() {
    return `workflow_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async getWorkflowStatus(workflowId) {
    const workflow = this.workflowHistory.find(w => w.id === workflowId);
    if (!workflow) {
      throw new Error(`Workflow ${workflowId} not found`);
    }
    return workflow;
  }

  async getWorkflowHistory(type = null) {
    if (type) {
      return this.workflowHistory.filter(w => w.type === type);
    }
    return this.workflowHistory;
  }

  async run() {
    try {
      await this.initialize();
      this.log('🎯 Intelligent Git Workflow is ready');
      
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Git Workflow...');
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the git workflow
if (require.main === module) {
  const gitWorkflow = new IntelligentGitWorkflow();
  gitWorkflow.run();
}

module.exports = IntelligentGitWorkflow;
=======
=======      await fs.mkdir(path.join(this.projectRoot, 'logs')
      console.log('Logs directory already exists')
  log(message, level = 'INFO')
    fs.appendFile(this.logFile, logMessage + '\n')
      const config = await fs.readFile(this.configFile, 'utf8')
      this.log(' Git workflow configuration loaded')
      this.log('� Using default Git workflow configuration')
      this.log(` Failed to save configuration: ${error.message}`, 'ERROR'`)
      const history = await fs.readFile(this.workflowHistoryFile, 'utf8')
      this.log('� No workflow history found, starting fresh')
      this.log(` Failed to save workflow history: ${error.message}`, 'ERROR'`)
    this.log(' Initializing Intelligent Git Workflow...')
      // Check if we'
      await this.runGitCommand('git rev-parse --git-dir')
      this.log(' Git repository detected')
      this.log(' Intelligent Git Workflow is ready')
      this.log(` Git workflow initialization failed: ${error.message}`, 'ERROR'`)
      const userName = await this.runGitCommand('git config user.name').catch(() => ''
      const userEmail = await this.runGitCommand('git config user.email').catch(() => ''
        await this.runGitCommand('git config user.name "AI Git Workflow")
        await this.runGitCommand('git config user.email "ai-workflow@example.com")
