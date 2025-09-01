#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class ESLintErrorCleaner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.watcher = null;
    this.isRunning = false;
    this.lastCheck = null;
    this.errorCache = new Map();
    
    // Ensure directories exist
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'eslint-error-cleaner.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async checkESLintErrors() {
    this.log('Checking ESLint errors...');
    
    try {
      const result = await this.runCommand('npx eslint . --format=json', { silent: true });
      
      if (result.success) {
        this.log('No ESLint errors found');
        this.errorCache.clear();
        return [];
      }

      // Parse JSON output
      const errors = this.parseESLintErrors(result.output || '');
      this.log(`Found ${errors.length} ESLint errors`);
      
      // Cache errors for comparison
      this.errorCache.set(Date.now(), errors);
      
      return errors;
    } catch (error) {
      this.log(`Failed to check ESLint errors: ${error.message}`, 'ERROR');
      return [];
    }
  }

  parseESLintErrors(errorOutput) {
    try {
      const eslintResults = JSON.parse(errorOutput);
      const errors = [];
      
      for (const fileResult of eslintResults) {
        for (const message of fileResult.messages) {
          errors.push({
            file: fileResult.filePath,
            line: message.line,
            column: message.column,
            rule: message.ruleId,
            message: message.message,
            severity: message.severity,
            fixable: message.fix,
            timestamp: Date.now()
          });
        }
      }
      
      return errors;
    } catch (error) {
      this.log(`Failed to parse ESLint errors: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async autoFixESLintErrors() {
    this.log('Running ESLint auto-fix...');
    
    try {
      const result = await this.runCommand('npx eslint . --fix', { silent: true });
      
      if (result.success) {
        this.log('ESLint auto-fix completed successfully');
        return true;
      } else {
        this.log('ESLint auto-fix completed with some unfixable errors', 'WARN');
        return false;
      }
    } catch (error) {
      this.log(`Failed to run ESLint auto-fix: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixSpecificESLintError(error) {
    try {
      const filePath = error.file;
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Fix common ESLint errors
      if (error.rule === 'no-unused-vars') {
        return await this.fixUnusedVariableError(error, lines, filePath);
      }
      
      if (error.rule === 'no-console') {
        return await this.fixConsoleError(error, lines, filePath);
      }
      
      if (error.rule === 'prefer-const') {
        return await this.fixPreferConstError(error, lines, filePath);
      }
      
      if (error.rule === 'no-var') {
        return await this.fixNoVarError(error, lines, filePath);
      }
      
      if (error.rule === 'react-hooks/exhaustive-deps') {
        return await this.fixReactHooksError(error, lines, filePath);
      }
      
      if (error.rule === 'react/jsx-uses-react') {
        return await this.fixReactJSXError(error, lines, filePath);
      }

      return false;
    } catch (error) {
      this.log(`Failed to fix ESLint error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixUnusedVariableError(error, lines, filePath) {
    const line = lines[error.line - 1];
    
    // Remove unused variable declaration
    if (line.includes('const ') || line.includes('let ') || line.includes('var ')) {
      const variableMatch = line.match(/(const|let|var)\s+(\w+)/);
      if (variableMatch) {
        const variableName = variableMatch[2];
        
        // Check if variable is actually unused in the file
        const fileContent = lines.join('\n');
        const variableRegex = new RegExp(`\\b${variableName}\\b`, 'g');
        const matches = fileContent.match(variableRegex);
        
        if (matches && matches.length === 1) {
          // Variable is only declared, not used - remove the line
          lines.splice(error.line - 1, 1);
          fs.writeFileSync(filePath, lines.join('\n'));
          this.log(`Removed unused variable in ${error.file}:${error.line}`);
          return true;
        }
      }
    }
    
    return false;
  }

  async fixConsoleError(error, lines, filePath) {
    const line = lines[error.line - 1];
    
    if (line.includes('console.')) {
      // Comment out console statements
      const fixedLine = line.replace(/console\.(log|error|warn|info)\(/g, '// console.$1(');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Commented out console statement in ${error.file}:${error.line}`);
        return true;
      }
    }
    
    return false;
  }

  async fixPreferConstError(error, lines, filePath) {
    const line = lines[error.line - 1];
    
    if (line.includes('let ') && !line.includes('=')) {
      // Change let to const if variable is not reassigned
      const fixedLine = line.replace(/\blet\b/, 'const');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Changed let to const in ${error.file}:${error.line}`);
        return true;
      }
    }
    
    return false;
  }

  async fixNoVarError(error, lines, filePath) {
    const line = lines[error.line - 1];
    
    if (line.includes('var ')) {
      // Change var to const or let
      const fixedLine = line.replace(/\bvar\b/, 'const');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Changed var to const in ${error.file}:${error.line}`);
        return true;
      }
    }
    
    return false;
  }

  async fixReactHooksError(error, lines, filePath) {
    const line = lines[error.line - 1];
    
    if (line.includes('useEffect') || line.includes('useCallback') || line.includes('useMemo')) {
      // Add missing dependencies to dependency array
      const fixedLine = line.replace(/\[\s*\]/, '[]');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed React hooks dependency in ${error.file}:${error.line}`);
        return true;
      }
    }
    
    return false;
  }

  async fixReactJSXError(error, lines, filePath) {
    // Add React import if missing
    const fileContent = lines.join('\n');
    if (fileContent.includes('jsx') && !fileContent.includes("import React") && !fileContent.includes("import * as React")) {
      // Add React import at the top
      lines.unshift("import React from 'react';");
      fs.writeFileSync(filePath, lines.join('\n'));
      this.log(`Added React import to ${error.file}`);
      return true;
    }
    
    return false;
  }

  async fixRemainingErrors(errors) {
    let fixedCount = 0;
    
    for (const error of errors) {
      if (await this.fixSpecificESLintError(error)) {
        fixedCount++;
      }
    }
    
    if (fixedCount > 0) {
      this.log(`Fixed ${fixedCount} specific ESLint errors`);
      
      // Re-check for remaining errors
      const remainingErrors = await this.checkESLintErrors();
      if (remainingErrors.length === 0) {
        this.log('All ESLint errors have been resolved!');
      } else {
        this.log(`${remainingErrors.length} errors remain after specific fixes`);
      }
    }
    
    return fixedCount;
  }

  async generateReport(errors, autoFixed, manuallyFixed) {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: errors.length,
      autoFixed: autoFixed ? 'success' : 'partial',
      manuallyFixed: manuallyFixed,
      remainingErrors: errors.length - manuallyFixed,
      errors: errors.map(error => ({
        file: error.file,
        line: error.line,
        column: error.column,
        rule: error.rule,
        message: error.message,
        severity: error.severity,
        fixable: error.fixable
      }))
    };

    const reportPath = path.join(this.reportsDir, `eslint-error-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async startWatching() {
    this.log('Starting ESLint error monitoring...');
    
    // Initial check and fix
    const initialErrors = await this.checkESLintErrors();
    if (initialErrors.length > 0) {
      const autoFixed = await this.autoFixESLintErrors();
      const manuallyFixed = await this.fixRemainingErrors(initialErrors);
      await this.generateReport(initialErrors, autoFixed, manuallyFixed);
    }
    
    // Set up file watcher
    this.watcher = chokidar.watch([
      'src/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}'
    ], {
      ignored: /node_modules|\.git|\.next/,
      persistent: true,
      ignoreInitial: true
    });

    this.watcher
      .on('change', async (filePath) => {
        this.log(`File changed: ${filePath}`);
        await this.handleFileChange(filePath);
      })
      .on('add', async (filePath) => {
        this.log(`File added: ${filePath}`);
        await this.handleFileChange(filePath);
      })
      .on('unlink', (filePath) => {
        this.log(`File removed: ${filePath}`);
      });

    this.isRunning = true;
    this.log('ESLint error monitoring is active');
  }

  async handleFileChange(filePath) {
    // Debounce rapid changes
    if (this.lastCheck && Date.now() - this.lastCheck < 1000) {
      return;
    }
    
    this.lastCheck = Date.now();
    
    // Wait a bit for file to be written
    setTimeout(async () => {
      const errors = await this.checkESLintErrors();
      if (errors.length > 0) {
        const autoFixed = await this.autoFixESLintErrors();
        const manuallyFixed = await this.fixRemainingErrors(errors);
        await this.generateReport(errors, autoFixed, manuallyFixed);
      }
    }, 500);
  }

  async stop() {
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
    }
    this.isRunning = false;
    this.log('ESLint error monitoring stopped');
  }

  async run() {
    try {
      await this.startWatching();
      
      // Keep the process running
      process.on('SIGINT', async () => {
        this.log('Received SIGINT, shutting down...');
        await this.stop();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        this.log('Received SIGTERM, shutting down...');
        await this.stop();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`ESLint error cleaner failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the cleaner
if (require.main === module) {
  const cleaner = new ESLintErrorCleaner();
  cleaner.run().catch(error => {
    console.error('ESLint error cleaner failed:', error);
    process.exit(1);
  });
}

module.exports = ESLintErrorCleaner;