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
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
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

  async runLintFix() {
    try {
      this.log('🔧 Running lint fix...');
      
      execSync('npm run lint:fix', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return { success: true };
    } catch (error) {
      this.log(`Lint fix failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runTypeCheck() {
    try {
      this.log('🔍 Running type check...');
      
      execSync('npm run type-check', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return { success: true };
    } catch (error) {
      this.log(`Type check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runBuild() {
    try {
      this.log('🏗️  Running build...');
      
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return { success: true };
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async stageFiles(files) {
    try {
      this.log('📝 Staging files...');
      
      for (const file of files) {
        if (file.status !== 'D') { // Don't stage deleted files
          execSync(`git add "${file.file}"`, {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
        }
      }
      
      return { success: true };
    } catch (error) {
      this.log(`Error staging files: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async commitChanges(message) {
    try {
      this.log(`💾 Committing changes: ${message}`);
      
      execSync(`git commit -m "${message}"`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.commitsMade++;
      return { success: true };
    } catch (error) {
      this.log(`Error committing changes: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async pushChanges() {
    try {
      this.log('🚀 Pushing changes...');
      
      execSync('git push', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return { success: true };
    } catch (error) {
      this.log(`Error pushing changes: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async generateCommitMessage(files) {
    const fileTypes = files.map(f => path.extname(f.file)).filter(ext => ext);
    const uniqueTypes = [...new Set(fileTypes)];
    
    let message = 'Auto-fix: ';
    
    if (uniqueTypes.includes('.js') || uniqueTypes.includes('.jsx') || 
        uniqueTypes.includes('.ts') || uniqueTypes.includes('.tsx')) {
      message += 'Code quality improvements';
    } else if (uniqueTypes.includes('.json')) {
      message += 'Configuration updates';
    } else if (uniqueTypes.includes('.md')) {
      message += 'Documentation updates';
    } else {
      message += 'Various improvements';
    }
    
    message += ` (${files.length} files)`;
    
    return message;
  }

  async shouldAutoCommit() {
    try {
      // Check if we're on a development branch
      const branch = execSync('git branch --show-current', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      
      // Only auto-commit on development branches
      if (branch === 'main' || branch === 'master' || branch === 'production') {
        this.log(`Skipping auto-commit on ${branch} branch`);
        return false;
      }
      
      // Check if there are uncommitted changes
      const { hasChanges } = await this.checkGitStatus();
      if (!hasChanges) {
        this.log('No changes to commit');
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`Error checking auto-commit conditions: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🤖 Starting Auto Commit Fixes...');
    this.log(`Project root: ${this.projectRoot}`);
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Check if we should auto-commit
      if (!(await this.shouldAutoCommit())) {
        this.log('Skipping auto-commit');
        return;
      }
      
      // Get current git status
      const { hasChanges, files } = await this.checkGitStatus();
      
      if (!hasChanges) {
        this.log('No changes detected');
        return;
      }
      
      this.log(`Found ${files.length} changed files`);
      this.filesChanged = files.length;
      
      // Run fixes
      const lintResult = await this.runLintFix();
      const typeResult = await this.runTypeCheck();
      const buildResult = await this.runBuild();
      
      // Check if fixes created new changes
      const { hasChanges: hasNewChanges, files: newFiles } = await this.checkGitStatus();
      
      if (hasNewChanges && newFiles.length > 0) {
        this.log(`New changes detected after fixes: ${newFiles.length} files`);
        
        // Stage the files
        const stageResult = await this.stageFiles(newFiles);
        
        if (stageResult.success) {
          // Generate commit message
          const commitMessage = await this.generateCommitMessage(newFiles);
          
          // Commit changes
          const commitResult = await this.commitChanges(commitMessage);
          
          if (commitResult.success) {
            this.log('✅ Changes committed successfully');
            
            // Optionally push changes (disabled by default for safety)
            const shouldPush = process.env.AUTO_PUSH === 'true';
            if (shouldPush) {
              const pushResult = await this.pushChanges();
              if (pushResult.success) {
                this.log('✅ Changes pushed successfully');
              } else {
                this.log(`❌ Failed to push changes: ${pushResult.error}`);
              }
            } else {
              this.log('ℹ️  Auto-push is disabled. Changes are committed but not pushed.');
            }
          } else {
            this.log(`❌ Failed to commit changes: ${commitResult.error}`);
          }
        } else {
          this.log(`❌ Failed to stage files: ${stageResult.error}`);
        }
      } else {
        this.log('No new changes after fixes');
      }
      
      const duration = Date.now() - this.startTime;
      
      // Log summary
      this.log('\n📊 Auto Commit Fixes Summary:');
      this.log(`Files processed: ${this.filesChanged}`);
      this.log(`Commits made: ${this.commitsMade}`);
      this.log(`Duration: ${duration}ms`);
      
      if (this.commitsMade > 0) {
        this.log('✨ Auto-commit completed successfully!');
      } else {
        this.log('ℹ️  No commits were made');
      }
      
    } catch (error) {
      this.log(`❌ Error running auto commit fixes: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the auto commit fixes
const autoCommit = new AutoCommitFixes();
autoCommit.run().catch(error => {
  process.exit(1);
});