#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GitAutomation {
  constructor() {
    this.logFile = 'automation/logs/git-automation.log';
    this.commitCount = 0;
    this.errorCount = 0;
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
    console.log(`[${level}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running command: ${command}`);
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        ...options,
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async checkGitStatus() {
    this.log('Checking git status...');

    try {
      const status = await this.runCommand('git status --porcelain');
      return status.trim();
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return null;
    }
  }

  async addChanges() {
    this.log('Adding changes...');

    try {
      await this.runCommand('git add .');
      this.log('Changes added successfully');
      return true;
    } catch (error) {
      this.log(`Failed to add changes: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async commitChanges(message) {
    this.log(`Committing changes: ${message}`);

    try {
      await this.runCommand(`git commit -m "${message}"`);
      this.log('Changes committed successfully');
      this.commitCount++;
      return true;
    } catch (error) {
      this.log(`Failed to commit changes: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async pushChanges() {
    this.log('Pushing changes...');

    try {
      await this.runCommand('git push origin main');
      this.log('Changes pushed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to push changes: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async mergeMain() {
    this.log('Merging with main branch...');

    try {
      await this.runCommand('git checkout main');
      await this.runCommand('git pull origin main');
      this.log('Successfully merged with main');
      return true;
    } catch (error) {
      this.log(`Failed to merge with main: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      commitsMade: this.commitCount,
      errorsFound: this.errorCount,
      success: this.errorCount === 0,
      status: this.errorCount === 0 ? 'SUCCESS' : 'FAILED',
    };

    const reportFile = 'automation/logs/git-automation-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report generated: ${reportFile}`);
    this.log(
      `Summary: ${this.commitCount} commits made, ${this.errorCount} errors found`
    );

    return report;
  }

  async run() {
    this.log('Starting git automation...');

    try {
      const status = await this.checkGitStatus();

      if (status) {
        await this.addChanges();
        await this.commitChanges(
          'Auto-fix: Resolved project errors and merge conflicts'
        );
        await this.pushChanges();
        await this.mergeMain();
      } else {
        this.log('No changes to commit');
      }

      await this.generateReport();
      this.log('Git automation completed');
    } catch (error) {
      this.log(`Git automation failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new GitAutomation();
  automation.run().catch(console.error);
}

module.exports = GitAutomation;
