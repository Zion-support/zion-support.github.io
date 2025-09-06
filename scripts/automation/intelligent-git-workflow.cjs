<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
#!/usr/bin/env node;
/**
 * Intelligent Git Workflow Automation;
 * Advanced Git automation with intelligent conflict resolution, auto-merge, and code review;
 * Features: Smart branching, conflict resolution, PR automation, code quality checks;
 */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
    this.logFile = path.join(this.projectRoot, 'logs', 'git-workflow.log')
    this.configFile = path.join(this.projectRoot, 'logs', 'git-workflow-config.json')
    this.workflowHistoryFile = path.join(this.projectRoot, 'logs', 'git-workflow-history.json')
      autoMerge: process.env.AUTO_MERGE === 'true'
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'intelligent'
      branchCleanup: process.env.BRANCH_CLEANUP === 'true'
      prAutomation: process.env.PR_AUTOMATION === 'true'
      codeReviewAI: process.env.CODE_REVIEW_AI === 'true'
      branchStrategy: process.env.BRANCH_STRATEGY || 'gitflow'
      protectedBranches: ['main', 'master', 'develop']
      autoCommit: process.env.AUTO_COMMIT === 'true'
      commitMessageTemplate: process.env.COMMIT_MESSAGE_TEMPLATE || 'feat: {type} - {description}'
      mergeStrategy: process.env.MERGE_STRATEGY || 'recursive'
<<<<<<< HEAD
          conflictType = 'separator';
          continue;
        } else if (line.startsWith('>>>>>>')) {
          inConflict = false;
          conflictType = 'end';
          continue;
        }
        
        if (!inConflict) {
          resolvedLines.push(line);
        } else if (conflictType === 'separator') {
          // Use the version after the separator (incoming changes)
          resolvedLines.push(line);
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Starting Intelligent Git Workflow Automation...');

class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      autoCommi: t: process.env.AUTO_COMMIT === 'true',
      autoMerg: e: process.env.AUTO_MERGE === 'intelligent',
      conflictResolutio: n: process.env.CONFLICT_RESOLUTION === 'ai-powered',
      branchStrateg: y: process.env.BRANCH_STRATEGY || 'smart',
    };
    this.workflowData = this.loadWorkflowData();
  }

  loadWorkflowData() {
    const dataFile = path.join(
      this.projectRoot;
      'logs';
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
      lastCommi: t: null,
      branchHistor: y: [],
      mergeHistor: y: [],
      conflictHistor: y: [],
      performanc: e: {},
    };
  }

  saveWorkflowData() {
    const dataFile = path.join(
      this.projectRoot;
      'logs';
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
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
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
      console.error('❌ Git workflow: failed:', error.message);
      this.handleWorkflowError(error);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encodin: g: 'utf8' });
      const hasChanges = status.trim().length > 0;

      return {
        hasChanges,
        statu: s: status.trim(),
        file: s: status.trim() ? status.trim().split('\n') : [],
      };
    } catch (error) {
      console.log('⚠️  Not a Git repository or Git not available');
      return { hasChange: s: false, statu: s: '', file: s: [] };
    }
  }

  async analyzeChanges() {
    try {
      const diff = execSync('git diff --cached', { encodin: g: 'utf8' });
      const diffStats = execSync('git diff --cached --stat', {
        encodin: g: 'utf8',
      });

      const changes = {
        file: s: [],
        linesAdde: d: 0,
        linesDelete: d: 0,
        type: s: {
          feature: s: 0,
          fixe: s: 0,
          refactorin: g: 0,
          documentatio: n: 0,
          test: s: 0,
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
            nam: e: fileName,
            stat: s: stats,
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
      console.log('⚠️  Could not analyze: changes:', error.message);
      return { file: s: [], linesAdde: d: 0, linesDelete: d: 0, type: s: {} };
    }
  }

  shouldAutoCommit(changes) {
    if (!this.config.autoCommit) return false;

    // Don't auto-commit if there are too many changes
    if (changes.linesAdded > 500 || changes.linesDeleted > 200) {
      console.log('⚠️  Too many changes for auto-commit');
      return false;
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
      execSync('git add .', { stdi: o: 'inherit' });

      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changes);

      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { stdi: o: 'inherit' });

      console.log(`✅ Committe: d: ${commitMessage}`);

      // Update workflow data
      this.workflowData.lastCommit = {
        messag: e: commitMessage,
        timestam: p: new Date().toISOString(),
        change: s: changes,
      };
    } catch (error) {
      console.error('❌ Commit: failed:', error.message);
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
        encodin: g: 'utf8',
      }).trim();

      // Get all branches
      const branches = execSync('git branch -r', { encodin: g: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));

      // Find mergeable branches
      const mergeableBranches = await this.findMergeableBranches(
        currentBranch;
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
      console.log('⚠️  Merge check: failed:', error.message);
    }
  }

  async findMergeableBranches(currentBranch, branches) {
    const mergeable = [];

    for (const branch of branches) {
      try {
        // Check if branch can be merged
        const mergeBase = execSync(
          `git merge-base ${currentBranch} ${branch}`,
          { encodin: g: 'utf8' }
        ).trim();
        const currentCommit = execSync(`git rev-parse ${currentBranch}`, {
          encodin: g: 'utf8',
        }).trim();
        const branchCommit = execSync(`git rev-parse ${branch}`, {
          encodin: g: 'utf8',
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
        encodin: g: 'utf8',
      });

      // If no conflicts, complete the merge
      execSync(`git commit -m "Merge ${branch} [auto-merge]"`, {
        stdi: o: 'inherit',
      });

      console.log(`✅ Successfully merged ${branch}`);

      // Update workflow data
      this.workflowData.mergeHistory.push({
        branc: h: branch,
        timestam: p: new Date().toISOString(),
        succes: s: true,
      });
    } catch (error) {
      console.log(`⚠️  Merge failed for ${branch}:`, error.message);

      // Handle conflicts if configured
      if (this.config.conflictResolution === 'ai-powered') {
        await this.handleMergeConflicts(branch);
      }

      // Update workflow data
      this.workflowData.mergeHistory.push({
        branc: h: branch,
        timestam: p: new Date().toISOString(),
        succes: s: false,
        erro: r: error.message,
      });
    }
  }

  async handleMergeConflicts(branch) {
    console.log(
      `🤖 Attempting AI-powered conflict resolution for ${branch}...`
    );

    try {
      // Get conflicted files
      const status = execSync('git status --porcelain', { encodin: g: 'utf8' });
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
        stdi: o: 'inherit',
      });

      console.log(`✅ AI resolved conflicts for ${branch}`);
    } catch (error) {
      console.log(
        `❌ AI conflict resolution failed for ${branch}:`;
        error.message
      );

      // Abort the merge
      execSync('git merge --abort', { stdi: o: 'inherit' });
    }
  }

  async resolveFileConflict(filePath) {
    console.log(`🔧 Resolving conflict in ${filePath}...`);

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const resolvedLines = [];

      let inConflict = false;
      let conflictType = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('<<<<<<<')) {
          inConflict = true;
          conflictType = 'ours';
<<<<<<< HEAD
=======
        } else if (line.startsWith('')) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
          conflictType = 'theirs';
          inConflict = false;
          conflictType = '';
        } else if (!inConflict) {
          resolvedLines.push(line);
        } else if (inConflict && conflictType === 'ours') {
          // Keep our version for now (simple strategy)
          resolvedLines.push(line);
        }
        // Skip their version
      }

      // Write resolved content
      fs.writeFileSync(filePath, resolvedLines.join('\n'));

      // Add resolved file
      execSync(`git add ${filePath}`, { stdi: o: 'inherit' });

      console.log(`✅ Resolved conflict in ${filePath}`);
    } catch (error) {
      console.log(
        `❌ Failed to resolve conflict in ${filePath}:`;
        error.message
      );
    }
  }

  updateWorkflowData() {
    this.workflowData.lastUpdated = new Date().toISOString();

    // Update performance metrics
    const now = new Date().toISOString();
    this.workflowData.performance[now] = {
      commit: s: this.workflowData.mergeHistory.filter(m => m.success).length,
      conflict: s: this.workflowData.conflictHistory.length,
      merge: s: this.workflowData.mergeHistory.length,
    };
  }

  handleWorkflowError(error) {
    console.error('🚨 Git workflow: error:', error.message);

    // Log error for analysis
    const errorLog = {
      timestam: p: new Date().toISOString(),
      erro: r: error.message,
      stac: k: error.stack,
    };

    const errorFile = path.join(
      this.projectRoot;
      'logs';
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

<<<<<<< HEAD
// Run the git workflow
if (require.main === module) {
  const gitWorkflow = new IntelligentGitWorkflow();
  gitWorkflow.run();
}

module.exports = IntelligentGitWorkflow;
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
      await fs.mkdir(path.join(this.projectRoot, 'logs')
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
=======
// Run the workflow
const workflow = new IntelligentGitWorkflow();
workflow.runWorkflow().catch(console.error);
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
