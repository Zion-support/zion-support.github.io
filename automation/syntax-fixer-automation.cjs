#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixerAutomation {
  constructor() {
    this.logFile = 'automation/logs/syntax-fixer.log';
    this.fixedCount = 0;
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

  async fixCorruptedFiles() {
    this.log('Fixing corrupted files...');

    const corruptedFiles = await this.findCorruptedFiles();

    for (const file of corruptedFiles) {
      await this.fixFile(file);
    }

    this.log(`Fixed ${corruptedFiles.length} corrupted files`);
    this.fixedCount += corruptedFiles.length;
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

      const corruptionPatterns = [
      return corruptionPatterns.some(pattern => pattern.test(content));
    } catch (error) {
      return true;
    }
  }

  async fixFile(filePath) {
    try {
      this.log(`Fixing file: ${filePath}`);

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

  async generateReport() {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      filesFixed: this.fixedCount,
      errorsRemaining: this.errorCount,
      success: this.errorCount === 0,
      status: this.errorCount === 0 ? 'SUCCESS' : 'PARTIAL_SUCCESS',
    };

    const reportFile = 'automation/logs/syntax-fixer-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report generated: ${reportFile}`);
    this.log(
      `Summary: ${this.fixedCount} files fixed, ${this.errorCount} errors remaining`
    );

    return report;
  }

  async run() {
    this.log('Starting syntax fixer automation...');

    try {
      await this.fixCorruptedFiles();
      await this.generateReport();
      this.log('Syntax fixer automation completed');
    } catch (error) {
      this.log(`Syntax fixer automation failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new SyntaxFixerAutomation();
  automation.run().catch(console.error);
}

module.exports = SyntaxFixerAutomation;
