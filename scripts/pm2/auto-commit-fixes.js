#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutoCommitFixes {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/auto-commit-fixes.log');
    this.startTime = Date.now();
    this.commitsMade = 0;
    this.filesChanged = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // console.log(message);

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // console.error('Failed to write to log file:', error.message);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      if (!status.trim()) {
        return { hasChanges: false, files: [] };
      }

      const files = status.split('\n')
        .filter(line => line.trim())
        .map(line => {
          const parts = line.trim().split(/\s+/);
          return {
            status: parts[0],
            file: parts.slice(1).join(' ')
          };
        });

      return { hasChanges: true, files };
    } catch (error) {
      this.log(`Error checking git status: ${error.message}`);
      return { hasChanges: false, files: [] };
    }
  }

  async getStagedFiles() {
    try {
      const staged = execSync('git diff --cached --name-only', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      return staged.split('\n').filter(line => line.trim());
    } catch (error) {
      this.log(`Error getting staged files: ${error.message}`);
      return [];
    }
  }

  async getUnstagedFiles() {
    try {
      const unstaged = execSync('git diff --name-only', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      return unstaged.split('\n').filter(line => line.trim());
    } catch (error) {
      this.log(`Error getting unstaged files: ${error.message}`);
      return [];
    }
  }

  async stageFiles(files) {
    try {
      if (files.length === 0) return;

      execSync(`git add ${files.join(' ')}`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.log(`Staged ${files.length} files`);
    } catch (error) {
      this.log(`Error staging files: ${error.message}`);
    }
  }

  async createCommit(message, files) {
    try {
      const commitMessage = `🔧 ${message}\n\nFiles changed:\n${files.map(f => `- ${f}`).join('\n')}`;

      execSync(`git commit -m "${commitMessage}"`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.commitsMade++;
      this.log(`✅ Created commit: ${message}`);
      return true;
    } catch (error) {
      this.log(`Error creating commit: ${error.message}`);
      return false;
    }
  }

  async analyzeChanges(files) {
    const changes = {
      lint: [],
      formatting: [],
      dependencies: [],
      config: [],
      source: [],
      other: []
    };

    files.forEach(file => {
      if (file.includes('package.json') || file.includes('package-lock.json') || file.includes('yarn.lock')) {
        changes.dependencies.push(file);
      } else if (file.includes('.eslintrc') || file.includes('eslint.config') || file.includes('.prettierrc')) {
        changes.config.push(file);
      } else if (file.includes('src/') || file.includes('components/') || file.includes('pages/')) {
        changes.source.push(file);
      } else if (file.includes('.js') || file.includes('.jsx') || file.includes('.ts') || file.includes('.tsx')) {
        changes.lint.push(file);
      } else if (file.includes('.md') || file.includes('.txt') || file.includes('.json')) {
        changes.formatting.push(file);
      } else {
        changes.other.push(file);
      }
    });

    return changes;
  }

  generateCommitMessage(changes) {
    const messages = [];

    if (changes.lint.length > 0) {
      messages.push(`Fix lint issues in ${changes.lint.length} files`);
    }

    if (changes.formatting.length > 0) {
      messages.push(`Improve formatting in ${changes.formatting.length} files`);
    }

    if (changes.dependencies.length > 0) {
      messages.push(`Update dependencies`);
    }

    if (changes.config.length > 0) {
      messages.push(`Update configuration files`);
    }

    if (changes.source.length > 0) {
      messages.push(`Update source code in ${changes.source.length} files`);
    }

    if (changes.other.length > 0) {
      messages.push(`Update ${changes.other.length} other files`);
    }

    return messages.join(', ');
  }

  async shouldAutoCommit(changes) {
    // Auto-commit for lint and formatting changes
    if (changes.lint.length > 0 || changes.formatting.length > 0) {
      return true;
    }

    // Auto-commit for small source changes (less than 10 files)
    if (changes.source.length > 0 && changes.source.length < 10) {
      return true;
    }

    // Don't auto-commit for dependency updates or large changes
    if (changes.dependencies.length > 0 || changes.source.length >= 10) {
      return false;
    }

    return true;
  }

  async run() {
    this.log('🚀 Starting Auto-Commit Fixes...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Check git status
      const { hasChanges, files } = await this.checkGitStatus();

      if (!hasChanges) {
        this.log('✨ No changes to commit');
        return;
      }

      this.log(`📁 Found ${files.length} changed files`);

      // Analyze changes
      const changes = await this.analyzeChanges(files.map(f => f.file));

      // Log change summary
      this.log('\n📊 Change Summary:');
      Object.entries(changes).forEach(([type, fileList]) => {
        if (fileList.length > 0) {
          this.log(`  ${type}: ${fileList.length} files`);
        }
      });

      // Check if we should auto-commit
      const shouldCommit = await this.shouldAutoCommit(changes);

      if (!shouldCommit) {
        this.log('\n⚠️  Changes are too significant for auto-commit');
        this.log('Please review and commit manually');
        return;
      }

      // Stage all changes
      this.log('\n📦 Staging files...');
      await this.stageFiles(files.map(f => f.file));

      // Create commit
      const commitMessage = this.generateCommitMessage(changes);
      this.log(`\n💾 Creating commit: ${commitMessage}`);

      const success = await this.createCommit(commitMessage, files.map(f => f.file));

      if (success) {
        this.filesChanged = files.length;

        // Try to push if we're on a branch
        try {
          const currentBranch = execSync('git branch --show-current', {
            cwd: this.projectRoot,
            encoding: 'utf8'
          }).trim();

          if (currentBranch && currentBranch !== 'main' && currentBranch !== 'master') {
            this.log(`🔄 Pushing to origin/${currentBranch}...`);
            execSync(`git push origin ${currentBranch}`, {
              cwd: this.projectRoot,
              stdio: 'pipe'
            });
            this.log('✅ Changes pushed successfully');
          }
        } catch (error) {
          this.log(`⚠️  Could not push changes: ${error.message}`);
        }
      }

      const duration = Date.now() - this.startTime;

      this.log('\n📊 Auto-Commit Summary:');
      this.log(`Files changed: ${this.filesChanged}`);
      this.log(`Commits made: ${this.commitsMade}`);
      this.log(`Duration: ${duration}ms`);

      if (this.commitsMade > 0) {
        this.log('✅ Auto-commit completed successfully!');
      } else {
        this.log('⚠️  No commits were made');
      }

    } catch (error) {
      this.log(`❌ Error running auto-commit: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the auto-commit fixes
const autoCommit = new AutoCommitFixes();
autoCommit.run().catch(error => {
  // console.error('Fatal error:', error);
  process.exit(1);
});
