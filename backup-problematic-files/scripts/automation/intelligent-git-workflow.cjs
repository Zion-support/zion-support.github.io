    try {
      const config = await fs.readFile(this.configFile, 'utf8');
      this.config = { ...this.config, ...JSON.parse(config) };
      this.log('✅ Git workflow configuration loaded');
console.log('🔄 Starting Intelligent Git Workflow Automation...');

class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      autoCommit: process.env.AUTO_COMMIT === 'true',
      autoMerge: process.env.AUTO_MERGE === 'intelligent',
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'ai-powered',
      branchStrategy: process.env.BRANCH_STRATEGY || 'smart',
    };
    this.workflowData = this.loadWorkflowData();
  }

  loadWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    try {
      if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      }
    } catch (error) {
      console.log('📚 Creating new workflow data file...');
    }
    return {
      lastCommit: null,
      branchHistory: [],
      mergeHistory: [],
      conflictHistory: [],
      performance: {},
    };
  }

  saveWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    fs.writeFileSync(dataFile, JSON.stringify(this.workflowData, null, 2));
  }

  async runWorkflow() {
    console.log('🚀 Starting intelligent Git workflow...');

    try {
      // Check Git status
      const status = await this.checkGitStatus();

      if (status.hasChanges) {
        console.log('📝 Changes detected, analyzing...');

        // Analyze changes
        const changes = await this.analyzeChanges();

        // Determine if auto-commit should happen
        if (this.shouldAutoCommit(changes)) {
          await this.intelligentCommit(changes);
        }
      }

      // Check for merge opportunities
      if (this.config.autoMerge) {
        await this.intelligentMerge();
      }

      // Update workflow data
      this.updateWorkflowData();
      this.saveWorkflowData();

      console.log('✅ Git workflow completed successfully!');
    } catch (error) {
      console.error('❌ Git workflow failed:', error.message);
      this.handleWorkflowError(error);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;

      return {
        hasChanges,
        status: status.trim(),
        files: status.trim() ? status.trim().split('\n') : [],
      };
    } catch (error) {
      console.log('⚠️  Not a Git repository or Git not available');
      return { hasChanges: false, status: '', files: [] };
    }
  }

  async analyzeChanges() {
    try {
      const diff = execSync('git diff --cached', { encoding: 'utf8' });
      const diffStats = execSync('git diff --cached --stat', {
        encoding: 'utf8',
      });

      const changes = {
        files: [],
        linesAdded: 0,
        linesDeleted: 0,
        types: {
          features: 0,
          fixes: 0,
          refactoring: 0,
          documentation: 0,
          tests: 0,
        },
      };

      // Parse diff stats
      const statLines = diffStats.split('\n');
      statLines.forEach(line => {
        if (line.includes('|')) {
          const parts = line.split('|');
          const fileName = parts[0].trim();
          const stats = parts[1].trim();

          changes.files.push({
            name: fileName,
            stats: stats,
          });

          // Count lines
          const match = stats.match(/(\d+)\s+(\+|\-)/);
          if (match) {
            if (match[2] === '+') {
              changes.linesAdded += parseInt(match[1]);
            } else {
              changes.linesDeleted += parseInt(match[1]);
            }
          }
        }
      });

      // Analyze change types
      changes.files.forEach(file => {
        const fileName = file.name.toLowerCase();
        if (fileName.includes('test') || fileName.includes('spec')) {
          changes.types.tests++;
        } else if (fileName.includes('readme') || fileName.includes('doc')) {
          changes.types.documentation++;
        } else if (fileName.includes('fix') || fileName.includes('bug')) {
          changes.types.fixes++;
        } else if (fileName.includes('refactor')) {
          changes.types.refactoring++;
        } else {
          changes.types.features++;
        }
      });

      return changes;
    } catch (error) {
      console.log('⚠️  Could not analyze changes:', error.message);
      return { files: [], linesAdded: 0, linesDeleted: 0, types: {} };
    }
  }

  shouldAutoCommit(changes) {
    if (!this.config.autoCommit) return false;

    // Don't auto-commit if there are too many changes
    if (changes.linesAdded > 500 || changes.linesDeleted > 200) {
    console.log('⚠️  Too many changes for auto-commit'),
    return false
  }

    // Don't auto-commit if there are test failures
    if (changes.types.tests > 0) {
      console.log('🧪 Test changes detected, skipping auto-commit');
      return false;
    }

    // Auto-commit for small fixes and documentation
    if (changes.types.fixes > 0 || changes.types.documentation > 0) {
      return true;
    }

    // Auto-commit for small feature additions
    if (changes.types.features > 0 && changes.linesAdded < 100) {
      return true;
    }

    return false;
  }

  async intelligentCommit(changes) {
    console.log('💾 Performing intelligent commit...');

    try {
      // Stage all changes
      execSync('git add .', { stdio: 'inherit' });

      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changes);

      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

      console.log(`✅ Committed: ${commitMessage}`);

      // Update workflow data
      this.workflowData.lastCommit = {
        message: commitMessage,
        timestamp: new Date().toISOString(),
        changes: changes,
      };
    } catch (error) {
      console.error('❌ Commit failed:', error.message);
      throw error;
    }
  }

  generateCommitMessage(changes) {
    const timestamp = new Date().toISOString().split('T')[0];

    // Determine commit type
    let type = 'feat';
    if (changes.types.fixes > 0) type = 'fix';
    else if (changes.types.refactoring > 0) type = 'refactor';
    else if (changes.types.documentation > 0) type = 'docs';
    else if (changes.types.tests > 0) type = 'test';

    // Generate description
    let description = '';
    if (changes.types.fixes > 0) {
      description = 'Fix issues and improve stability';
    } else if (changes.types.features > 0) {
      description = 'Add new features and enhancements';
    } else if (changes.types.refactoring > 0) {
      description = 'Refactor code for better maintainability';
    } else if (changes.types.documentation > 0) {
      description = 'Update documentation and comments';
    } else {
      description = 'Update codebase';
    }

    // Add file count
    const fileCount = changes.files.length;
    if (fileCount > 0) {
      description += ` (${fileCount} files)`;
    }

    return `${type}: ${description} [${timestamp}]`;
  }

  async intelligentMerge() {
    console.log('🔀 Checking for merge opportunities...');

    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', {
        encoding: 'utf8',
      }).trim();

      // Get all branches
      const branches = execSync('git branch -r', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));

      // Find mergeable branches
      const mergeableBranches = await this.findMergeableBranches(
        currentBranch,
        branches
      );

      if (mergeableBranches.length > 0) {
        console.log(`🔀 Found ${mergeableBranches.length} mergeable branches`);

        for (const branch of mergeableBranches) {
          await this.performIntelligentMerge(branch);
        }
      } else {
        console.log('✅ No merge opportunities found');
      }
    } catch (error) {
      console.log('⚠️  Merge check failed:', error.message);
    }
  }

  async findMergeableBranches(currentBranch, branches) {
    const mergeable = [];

    for (const branch of branches) {
      try {
        // Check if branch can be merged
        const mergeBase = execSync(
          `git merge-base ${currentBranch} ${branch}`,
          { encoding: 'utf8' }
        ).trim();
        const currentCommit = execSync(`git rev-parse ${currentBranch}`, {
          encoding: 'utf8',
        }).trim();
        const branchCommit = execSync(`git rev-parse ${branch}`, {
          encoding: 'utf8',
        }).trim();

        // If branch is ahead of current branch
        if (branchCommit !== currentCommit && mergeBase === currentCommit) {
          mergeable.push(branch);
        }
      } catch (error) {
        // Skip branches that can't be checked
      }
    }
  }
  async resolveConflictsIntelligently(conflicts, workflow) {
    this.log(`🧠 Resolving conflicts intelligently...`);
    try {
      for (const file of conflicts) {
        this.log(`🔧 Resolving conflicts in ${file}...`);
        // Try to resolve conflicts automatically
        const resolution = await this.autoResolveConflicts(file);
        if (resolution.resolved) {
          workflow.steps.push({
            step: 'Resolve conflicts',
            status: 'completed',
            file,
            method: resolution.method,
            timestamp: new Date().toISOString()
          });
          this.log(`✅ Conflicts in ${file} resolved using ${resolution.method}`);
        } else {
          workflow.steps.push({
            step: 'Resolve conflicts',
            status: 'failed',
            file,
            error: resolution.error,
            timestamp: new Date().toISOString()
          });
          this.log(`❌ Failed to resolve conflicts in ${file}: ${resolution.error}`, 'ERROR');
          throw new Error(`Conflict resolution failed for ${file}`);
        }
      }
    } catch (error) {
      this.log(`❌ Intelligent conflict resolution failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async autoResolveConflicts(file) {
    try {
      // Read the conflicted file
      const content = await fs.readFile(file, 'utf8');
      // Check if file has conflict markers
      if (!content.includes('const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Starting Intelligent Git Workflow Automation...');

class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      autoCommit: process.env.AUTO_COMMIT === 'true',
      autoMerge: process.env.AUTO_MERGE === 'intelligent',
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'ai-powered',
      branchStrategy: process.env.BRANCH_STRATEGY || 'smart',
    };
    this.workflowData = this.loadWorkflowData();
  }

  loadWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    try {
      if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      }
    } catch (error) {
      console.log('📚 Creating new workflow data file...');
    }
    return {
      lastCommit: null,
      branchHistory: [],
      mergeHistory: [],
      conflictHistory: [],
      performance: {},
    };
  }

  saveWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    fs.writeFileSync(dataFile, JSON.stringify(this.workflowData, null, 2));
  }

  async runWorkflow() {
    console.log('🚀 Starting intelligent Git workflow...');

    try {
      // Check Git status
      const status = await this.checkGitStatus();

      if (status.hasChanges) {
        console.log('📝 Changes detected, analyzing...');

        // Analyze changes
        const changes = await this.analyzeChanges();

        // Determine if auto-commit should happen
        if (this.shouldAutoCommit(changes)) {
          await this.intelligentCommit(changes);
        }
      }

      // Check for merge opportunities
      if (this.config.autoMerge) {
        await this.intelligentMerge();
      }

      // Update workflow data
      this.updateWorkflowData();
      this.saveWorkflowData();

      console.log('✅ Git workflow completed successfully!');
    } catch (error) {
      console.error('❌ Git workflow failed:', error.message);
      this.handleWorkflowError(error);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;

      return {
        hasChanges,
        status: status.trim(),
        files: status.trim() ? status.trim().split('\n') : [],
      };
    } catch (error) {
      console.log('⚠️  Not a Git repository or Git not available');
      return { hasChanges: false, status: '', files: [] };
    }
  }

  async analyzeChanges() {
    try {
      const diff = execSync('git diff --cached', { encoding: 'utf8' });
      const diffStats = execSync('git diff --cached --stat', {
        encoding: 'utf8',
      });

      const changes = {
        files: [],
        linesAdded: 0,
        linesDeleted: 0,
        types: {
          features: 0,
          fixes: 0,
          refactoring: 0,
          documentation: 0,
          tests: 0,
        },
      };

      // Parse diff stats
      const statLines = diffStats.split('\n');
      statLines.forEach(line => {
        if (line.includes('|')) {
          const parts = line.split('|');
          const fileName = parts[0].trim();
          const stats = parts[1].trim();

          changes.files.push({
            name: fileName,
            stats: stats,
          });

          // Count lines
          const match = stats.match(/(\d+)\s+(\+|\-)/);
          if (match) {
            if (match[2] === '+') {
              changes.linesAdded += parseInt(match[1]);
            } else {
              changes.linesDeleted += parseInt(match[1]);
            }
          }
        }
      });

      // Analyze change types
      changes.files.forEach(file => {
        const fileName = file.name.toLowerCase();
        if (fileName.includes('test') || fileName.includes('spec')) {
          changes.types.tests++;
        } else if (fileName.includes('readme') || fileName.includes('doc')) {
          changes.types.documentation++;
        } else if (fileName.includes('fix') || fileName.includes('bug')) {
          changes.types.fixes++;
        } else if (fileName.includes('refactor')) {
          changes.types.refactoring++;
        } else {
          changes.types.features++;
        }
      });

      return changes;
    } catch (error) {
      console.log('⚠️  Could not analyze changes:', error.message);
      return { files: [], linesAdded: 0, linesDeleted: 0, types: {} };
    }
  }

  shouldAutoCommit(changes) {
    if (!this.config.autoCommit) return false;

    // Don't auto-commit if there are too many changes
    if (changes.linesAdded > 500 || changes.linesDeleted > 200) {
    console.log('⚠️  Too many changes for auto-commit'),
    return false
  }

    // Don't auto-commit if there are test failures
    if (changes.types.tests > 0) {
      console.log('🧪 Test changes detected, skipping auto-commit');
      return false;
    }

    // Auto-commit for small fixes and documentation
    if (changes.types.fixes > 0 || changes.types.documentation > 0) {
      return true;
    }

    // Auto-commit for small feature additions
    if (changes.types.features > 0 && changes.linesAdded < 100) {
      return true;
    }

    return false;
  }

  async intelligentCommit(changes) {
    console.log('💾 Performing intelligent commit...');

    try {
      // Stage all changes
      execSync('git add .', { stdio: 'inherit' });

      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changes);

      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

      console.log(`✅ Committed: ${commitMessage}`);

      // Update workflow data
      this.workflowData.lastCommit = {
        message: commitMessage,
        timestamp: new Date().toISOString(),
        changes: changes,
      };
    } catch (error) {
      console.error('❌ Commit failed:', error.message);
      throw error;
    }
  }

  generateCommitMessage(changes) {
    const timestamp = new Date().toISOString().split('T')[0];

    // Determine commit type
    let type = 'feat';
    if (changes.types.fixes > 0) type = 'fix';
    else if (changes.types.refactoring > 0) type = 'refactor';
    else if (changes.types.documentation > 0) type = 'docs';
    else if (changes.types.tests > 0) type = 'test';

    // Generate description
    let description = '';
    if (changes.types.fixes > 0) {
      description = 'Fix issues and improve stability';
    } else if (changes.types.features > 0) {
      description = 'Add new features and enhancements';
    } else if (changes.types.refactoring > 0) {
      description = 'Refactor code for better maintainability';
    } else if (changes.types.documentation > 0) {
      description = 'Update documentation and comments';
    } else {
      description = 'Update codebase';
    }

    // Add file count
    const fileCount = changes.files.length;
    if (fileCount > 0) {
      description += ` (${fileCount} files)`;
    }

    return `${type}: ${description} [${timestamp}]`;
  }

  async intelligentMerge() {
    console.log('🔀 Checking for merge opportunities...');

    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', {
        encoding: 'utf8',
      }).trim();

      // Get all branches
      const branches = execSync('git branch -r', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));

      // Find mergeable branches
      const mergeableBranches = await this.findMergeableBranches(
        currentBranch,
        branches
      );

      if (mergeableBranches.length > 0) {
        console.log(`🔀 Found ${mergeableBranches.length} mergeable branches`);

        for (const branch of mergeableBranches) {
          await this.performIntelligentMerge(branch);
        }
      } else {
        console.log('✅ No merge opportunities found');
      }
    } catch (error) {
      console.log('⚠️  Merge check failed:', error.message);
    }
  }

  async findMergeableBranches(currentBranch, branches) {
    const mergeable = [];

    for (const branch of branches) {
      try {
        // Check if branch can be merged
        const mergeBase = execSync(
          `git merge-base ${currentBranch} ${branch}`,
          { encoding: 'utf8' }
        ).trim();
        const currentCommit = execSync(`git rev-parse ${currentBranch}`, {
          encoding: 'utf8',
        }).trim();
        const branchCommit = execSync(`git rev-parse ${branch}`, {
          encoding: 'utf8',
        }).trim();

        // If branch is ahead of current branch
        if (branchCommit !== currentCommit && mergeBase === currentCommit) {
          mergeable.push(branch);
        }
      } catch (error) {
        // Skip branches that can't be checked
      }
    }

    return mergeable;
  }
  async performIntelligentMerge(branch) {
    console.log(`🔀 Attempting to merge ${branch}...`);
    try {
      // Check for conflicts first
      const mergeCheck = execSync(`git merge --no-commit --no-ff ${branch}`, {
        encoding: 'utf8',
      });
      // If no conflicts, complete the merge
      execSync(`git commit -m "Merge ${branch} [auto-merge]"`, {
        stdio: 'inherit',
      });
      console.log(`✅ Successfully merged ${branch}`);
      // Update workflow data
      this.workflowData.mergeHistory.push({
        branch: branch,
        timestamp: new Date().toISOString(),
        success: true,
      });
    } catch (error) {
      console.log(`⚠️  Merge failed for ${branch}:`, error.message);
      // Handle conflicts if configured
      if (this.config.conflictResolution === 'ai-powered') {
        await this.handleMergeConflicts(branch);
      }
      // Update workflow data
      this.workflowData.mergeHistory.push({
        branch: branch,
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
      });
    }
  }
  async handleMergeConflicts(branch) {
    console.log(
      `🤖 Attempting AI-powered conflict resolution for ${branch}...`
    );
    try {
      // Get conflicted files
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = status
        .split('\n')
        .filter(
          line =>
            line.includes('UU') || line.includes('AA') || line.includes('DD')
        )
        .map(line => line.split(' ').pop());
      for (const file of conflictedFiles) {
        await this.resolveFileConflict(file);
      }
      // Complete the merge
      execSync(`git commit -m "Merge ${branch} [ai-resolved conflicts]"`, {
        stdio: 'inherit',
      });
      console.log(`✅ AI resolved conflicts for ${branch}`);
  async resolveFileConflict(filePath) {
    console.log(`🔧 Resolving conflict in ${filePath}...`);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
        if (line.startsWith('    } catch (e) {
      // Start fresh if file is corrupted
    }

    errors.push(errorLog);
    fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));
  }
}
  updateWorkflowData() {
    this.workflowData.lastUpdated = new Date().toISOString();

    // Update performance metrics
    const now = new Date().toISOString();
    this.workflowData.performance[now] = {
      commits: this.workflowData.mergeHistory.filter(m => m.success).length,
      conflicts: this.workflowData.conflictHistory.length,
      merges: this.workflowData.mergeHistory.length,
    };
  }

  handleWorkflowError(error) {
    console.error('🚨 Git workflow error:', error.message);

    // Log error for analysis
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
    };

    const errorFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-errors.json'
    );
    let errors = [];
    try {
      if (fs.existsSync(errorFile)) {
        errors = JSON.parse(fs.readFileSync(errorFile, 'utf8'));
      }
    } catch (e) {
      // Start fresh if file is corrupted
    }
    errors.push(errorLog);
    fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));
  }
}
// Run the workflow
const workflow = new IntelligentGitWorkflow();
workflow.runWorkflow().catch(console.error);
// Run the workflow
const workflow = new IntelligentGitWorkflow();
workflow.runWorkflow().catch(console.error);>>>>>>> origin/automation-improvements-final
