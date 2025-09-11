#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ErrorFixerAutomation {
  constructor() {
    this.logFile = 'automation/logs/error-fixer.log';
    this.errorCount = 0;
    this.fixedCount = 0;
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    // Ensure log directory exists
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

  async checkProjectHealth() {
    this.log('Checking project health...');

    try {
      // Check if package.json is valid
      const packageJson = JSON.parse(
        fs.readFileSync('/workspace/package.json', 'utf8')
      );
      this.log('Package.json is valid');

      // Check if node_modules exists
      if (!fs.existsSync('/workspace/node_modules')) {
        this.log('Node modules missing, installing dependencies...');
        await this.runCommand('npm install');
      }

      return true;
    } catch (error) {
      this.log(`Project health check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixLintErrors() {
    this.log('Fixing lint errors...');

    try {
      // Run lint with fix flag
      await this.runCommand('npm run lint:fix');
      this.log('Lint errors fixed successfully');
      this.fixedCount++;
    } catch (error) {
      this.log(`Failed to fix lint errors: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors...');

    try {
      // Check for corrupted files and fix them
      const corruptedFiles = await this.findCorruptedFiles();

      for (const file of corruptedFiles) {
        await this.fixCorruptedFile(file);
      }

      this.log(`Fixed ${corruptedFiles.length} corrupted files`);
      this.fixedCount += corruptedFiles.length;
    } catch (error) {
      this.log(`Failed to fix syntax errors: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  async findCorruptedFiles() {
    const corruptedFiles = [];
    const srcDir = '/workspace/src';

    if (!fs.existsSync(srcDir)) {
      return corruptedFiles;
    }

    const files = this.getAllFiles(srcDir);

    for (const file of files) {
      if (this.isCorruptedFile(file)) {
        corruptedFiles.push(file);
      }
    }

    return corruptedFiles;
  }

  getAllFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath));
      } else if (
        item.endsWith('.js') ||
        item.endsWith('.jsx') ||
        item.endsWith('.ts') ||
        item.endsWith('.tsx')
      ) {
        files.push(fullPath);
      }
    }

    return files;
  }

  isCorruptedFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      // Check for common corruption patterns
      const corruptionPatterns = [
      return corruptionPatterns.some(pattern => pattern.test(content));
    } catch (error) {
      return true;
    }
  }

  async fixCorruptedFile(filePath) {
    try {
      this.log(`Fixing corrupted file: ${filePath}`);

      let content = fs.readFileSync(filePath, 'utf8');

      // Remove merge conflict markers
      content = content.replace(
        /[\s\S]*?[\s\S]*?        ''
      );
      content = content.replace(
        /[\s\S]*?[\s\S]*?        ''      );

      // Fix common corruption patterns
      content = content.replace(/""',';';'/g, '');
      content = content.replace(/';';';'/g, '');
      content = content.replace(/""';';';'/g, '');
      content = content.replace(/""',';';'/g, '');
      content = content.replace(/';';';'/g, '');

      // Fix trailing commas and braces
      content = content.replace(/,\s*$/gm, '');
      content = content.replace(/}\s*$/gm, '}');
      content = content.replace(/{\s*$/gm, '{');

      // Fix function declarations
      content = content.replace(/\(\s*\)\s*{/g, '() {');

      // Clean up multiple newlines
      content = content.replace(/\n{3,}/g, '\n\n');

      // Write the cleaned content back
      fs.writeFileSync(filePath, content);

      this.log(`Fixed file: ${filePath}`);
    } catch (error) {
      this.log(`Failed to fix file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async runBuildCheck() {
    this.log('Running build check...');

    try {
      await this.runCommand('npm run build');
      this.log('Build successful');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async runTypeCheck() {
    this.log('Running type check...');

    try {
      await this.runCommand('npm run type-check');
      this.log('Type check successful');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async commitChanges() {
    try {
      // Check if there are changes to commit
      const gitStatus = await this.runCommand('git status --porcelain');

      if (gitStatus.trim()) {
        this.log('Committing changes...');
        await this.runCommand('git add .');
        await this.runCommand(
          'git commit -m "Auto-fix: Resolved project errors and merge conflicts"'
        );
        this.log('Changes committed successfully');
        return true;
      } else {
        this.log('No changes to commit');
        return false;
      }
    } catch (error) {
      this.log(`Failed to commit changes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async pushChanges() {
    try {
      this.log('Pushing changes...');
      await this.runCommand('git push origin main');
      this.log('Changes pushed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to push changes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      errorsFound: this.errorCount,
      errorsFixed: this.fixedCount,
      success: this.errorCount === 0,
      status: this.errorCount === 0 ? 'SUCCESS' : 'PARTIAL_SUCCESS',
    };

    const reportFile = 'automation/logs/error-fixer-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report generated: ${reportFile}`);
    this.log(
      `Summary: ${this.fixedCount} errors fixed, ${this.errorCount} errors remaining`
    );

    return report;
  }

  async run() {
    this.log('Starting error fixer automation...');

    try {
      // Check project health
      const isHealthy = await this.checkProjectHealth();
      if (!isHealthy) {
        this.log('Project health check failed, aborting', 'ERROR');
        return;
      }

      // Fix syntax errors first
      await this.fixSyntaxErrors();

      // Fix lint errors
      await this.fixLintErrors();

      // Run type check
      await this.runTypeCheck();

      // Run build check
      await this.runBuildCheck();

      // Commit changes if any
      await this.commitChanges();

      // Generate report
      await this.generateReport();

      this.log('Error fixer automation completed');
    } catch (error) {
      this.log(`Error fixer automation failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new ErrorFixerAutomation();
  automation.run().catch(console.error);
}

module.exports = ErrorFixerAutomation;
