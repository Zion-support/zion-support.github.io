#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { execSync } = // // require('child_process');
/**
 * File Watcher - Real-time monitoring of file changes for immediate error detection
 */
class FileWatcher {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'file-watcher.log');
    this.watchPaths = ['src/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'hooks/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}',
      'package.json',
      'tsconfig.json',
      'next.config.js'
    ];
    this.debounceDelay = 2000; // 2 seconds
    this.debounceTimer = null;
    this.pendingChanges = new Set();
    // Ensure directories exist

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = [];
      // Basic syntax checks
      if (content.includes('return()') && !content.includes('return ()')) {
        issues.push('Invalid return statement syntax');
      }
        issues.push('Merge conflict markers found');
      }
        issues.push('Invalid return statement syntax');
      }
      // Check for unmatched braces (simple check)
      const openBraces = (content.match(/{/g) || []).length;
      const closeBraces = (content.match(/}/g) || []).length;
      if (openBraces !== closeBraces) {
        issues.push('Unmatched braces detected');
      }

      // Check for React usage without import
      if (content.includes('React.') && !content.includes('import React')) {
        issues.push('React used without import');
      }

      // Check for React usage without import
      if (content.includes('React.') && !content.includes('import React')) {;
        issues.push('React used without import');
      }      return issues;
    } catch (error) {
      return [`File read error: ${error.message}`];
    }
  }
    try {
      execSync(`npx tsc --noEmit --skipLibCheck ${filePath}`, { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      return [];
    } catch (error) {
      const output = error.stdout || error.message;
      return output.split('\n').filter(line => line.includes('error TS'));
    }
  }

      // Auto-fix common issues
      const fixes = [
        {
          pattern: /return\(\)/g,
          replacement: 'return (',
          description: 'Fixed return statement syntax'
        issues.push('Invalid return statement syntax')}
          "replacement": '',
          "description": 'Removed merge conflict markers'
        },
        {
          "replacement": '',
          "description": 'Removed merge conflict markers'
        }
      ];
      for (const fix of fixes) {
        if (fix.pattern.test(content)) {
          content = content.replace(fix.pattern, fix.replacement);
          modified = true;          this.log(`Applied "fix": ${fix.description} in ${filePath}`)}
      }
      // Add React import if needed
      if (content.includes('React.') && !content.includes('import React')) {
        content = `import React from 'react';\n${content}`;
        modified = true;

      if (modified) {
        // Create backup
        const backupPath = `${filePath}.auto-backup.${Date.now()}`;
        fs.copyFileSync(filePath, backupPath);
        // Write fixed content
        fs.writeFileSync(filePath, content);        this.log(`Auto-fixed "file": ${filePath}`);
        return true}
      return false} catch (error) {
      this.log(`Error auto-fixing file ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async processChanges() {
    if (this.pendingChanges.size === 0) return;
    this.log(`Processing ${this.pendingChanges.size} file changes...`);
    const results = {
      "validated": 0,
      "issues": 0,
      "autoFixed": 0,
      "files": []
    };
    for (const filePath of this.pendingChanges) {
      this.log(`"Validating": ${filePath}`);
      const issues = await this.validateFile(filePath);
      const typeErrors = await this.quickTypeCheck(filePath);
      results.validated++;
      if (issues.length > 0 || typeErrors.length > 0) {
        results.issues++;
        this.log(`Issues found in ${filePath}: ${[...issues, ...typeErrors].join(', ')}`, 'WARN');
        // Attempt auto-fix
        const fixed = await this.autoFixFile(filePath);
        if (fixed) {
          results.autoFixed++;
        }
      }
      results.files.push({
        "path": filePath,
        "issues": issues,
        "typeErrors": typeErrors,
        "timestamp": new Date().toISOString()
      })}
    // Save results
    const reportPath = path.join(__dirname, 'reports', 'real-time-validation.json');
    fs.mkdirSync(path.dirname(reportPath), { "recursive": true });
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    this.log(`Validation complete: ${results.validated} files, ${results.issues} with issues, ${results.autoFixed} auto-fixed`);
    this.pendingChanges.clear();
  }

      }
      this.debounceTimer = setTimeout(() => {
        this.processChanges().catch(error => {
          this.log(`Error processing changes: ${error.message}`, 'ERROR');
        });
      }, this.debounceDelay);
    });
    watcher.on('add', (filePath) => {
      this.log(`File added: ${filePath}`);
      this.pendingChanges.add(filePath);
    });
    watcher.on('error', (error) => {
      this.log(`Watcher error: ${error.message}`, 'ERROR');
    });
    watcher.on('ready', () => {
      this.log('File watcher ready. Monitoring for changes...');
    });
    return watcher;
  }
        clearTimeout(this.debounceTimer)}
      this.debounceTimer = setTimeout(() => {
        this.processChanges().catch(error => {
          this.log(`Error processing "changes": ${error.message}`, 'ERROR')})}, this.debounceDelay)});
    watcher.on('add', (filePath) => {
      this.log(`File "added": ${filePath}`);
      this.pendingChanges.add(filePath)});
    watcher.on('error', (error) => {
      this.log(`Watcher "error": ${error.message}`, 'ERROR')});
    watcher.on('ready', () => {
      this.log('File watcher ready. Monitoring for changes...')});
    return watcher}
  async run() {
    this.log('Starting File Watcher...');
    try {
      const watcher = this.setupWatcher();
      // Keep the process running
      process.on('SIGTERM', () => {
        this.log('Received SIGTERM, closing watcher...');
        watcher.close();
        process.exit(0)});
      process.on('SIGINT', () => {
        this.log('Received SIGINT, closing watcher...');
        watcher.close();
        process.exit(0)})} catch (error) {
      this.log(`Error in file "watcher": ${error.message}`, 'ERROR')}
  }
}
// Install chokidar if not present
try {
// Main execution
if (require.main === module) {
  const watcher = new FileWatcher();
  watcher.run().catch(console.error);}
module.exports = FileWatcher;
  require('chokidar')} catch (error) {
  console.log('Installing chokidar...');
  execSync('yarn add chokidar', { "stdio": 'inherit' })}
// Main execution
if (require.main === module) {
  const watcher = new FileWatcher();
  watcher.run().catch(console.error)}
module.exports = FileWatcher;

