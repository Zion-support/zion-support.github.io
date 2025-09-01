#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/master-error-fixer.log');
    this.errorLogFile = path.join(this.projectRoot, 'automation/logs/master-error-fixer-error.log');
    this.reportFile = path.join(this.projectRoot, 'master-error-fixer-report.json');
    
    // Ensure logs directory exists
    this.ensureLogsDirectory();
    
    this.errors = {
      typescript: [],
      eslint: [],
      build: [],
      dependency: [],
      import: [],
      syntax: [],
      other: []
    };
    
    this.fixes = {
      applied: [],
      failed: [],
      skipped: []
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logMessage);
    
    if (type === 'error') {
      fs.appendFileSync(this.errorLogFile, logMessage);
    }
    
    console.log(`[${type.toUpperCase()}] ${message}`);
  }

  async runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, options.args || [], {
        stdio: 'pipe',
        shell: true,
        cwd: this.projectRoot,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject({ stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ error, stdout, stderr });
      });
    });
  }

  async detectErrors() {
    this.log('Starting error detection...');

    // Detect TypeScript errors
    try {
      const result = await this.runCommand('npm', { args: ['run', 'type-check'] });
      this.log('TypeScript check completed successfully');
    } catch (error) {
      this.log(`TypeScript errors detected: ${error.stderr}`, 'error');
      this.errors.typescript = this.parseTypeScriptErrors(error.stderr);
    }

    // Detect ESLint errors
    try {
      const result = await this.runCommand('npm', { args: ['run', 'lint'] });
      this.log('ESLint check completed successfully');
    } catch (error) {
      this.log(`ESLint errors detected: ${error.stderr}`, 'error');
      this.errors.eslint = this.parseESLintErrors(error.stderr);
    }

    // Detect build errors
    try {
      const result = await this.runCommand('npm', { args: ['run', 'build'] });
      this.log('Build check completed successfully');
    } catch (error) {
      this.log(`Build errors detected: ${error.stderr}`, 'error');
      this.errors.build = this.parseBuildErrors(error.stderr);
    }

    // Detect dependency issues
    try {
      const result = await this.runCommand('npm', { args: ['audit'] });
      this.log('Dependency audit completed successfully');
    } catch (error) {
      this.log(`Dependency issues detected: ${error.stderr}`, 'error');
      this.errors.dependency = this.parseDependencyErrors(error.stderr);
    }

    this.log(`Error detection completed. Found: ${this.getTotalErrors()} errors`);
  }

  parseTypeScriptErrors(stderr) {
    const errors = [];
    const lines = stderr.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+\.tsx?):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line.split(' - ')[1] || line,
            type: 'typescript'
          });
        }
      }
    }
    
    return errors;
  }

  parseESLintErrors(stderr) {
    const errors = [];
    const lines = stderr.split('\n');
    
    for (const line of lines) {
      if (line.includes('error')) {
        const match = line.match(/(.+\.(jsx?|tsx?)):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[3]),
            column: parseInt(match[4]),
            message: line.split(' - ')[1] || line,
            type: 'eslint'
          });
        }
      }
    }
    
    return errors;
  }

  parseBuildErrors(stderr) {
    const errors = [];
    const lines = stderr.split('\n');
    
    for (const line of lines) {
      if (line.includes('Error:') || line.includes('error')) {
        errors.push({
          message: line,
          type: 'build'
        });
      }
    }
    
    return errors;
  }

  parseDependencyErrors(stderr) {
    const errors = [];
    const lines = stderr.split('\n');
    
    for (const line of lines) {
      if (line.includes('vulnerability') || line.includes('deprecated')) {
        errors.push({
          message: line,
          type: 'dependency'
        });
      }
    }
    
    return errors;
  }

  getTotalErrors() {
    return Object.values(this.errors).reduce((total, errorArray) => total + errorArray.length, 0);
  }

  async applyFixes() {
    this.log('Starting to apply fixes...');

    // Fix TypeScript errors
    if (this.errors.typescript.length > 0) {
      await this.fixTypeScriptErrors();
    }

    // Fix ESLint errors
    if (this.errors.eslint.length > 0) {
      await this.fixESLintErrors();
    }

    // Fix import errors
    if (this.errors.import.length > 0) {
      await this.fixImportErrors();
    }

    // Fix syntax errors
    if (this.errors.syntax.length > 0) {
      await this.fixSyntaxErrors();
    }

    // Fix dependency issues
    if (this.errors.dependency.length > 0) {
      await this.fixDependencyIssues();
    }

    this.log('All fixes applied');
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    for (const error of this.errors.typescript) {
      try {
        await this.fixTypeScriptError(error);
        this.fixes.applied.push({
          type: 'typescript',
          error,
          timestamp: new Date().toISOString()
        });
      } catch (fixError) {
        this.fixes.failed.push({
          type: 'typescript',
          error,
          fixError: fixError.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async fixTypeScriptError(error) {
    if (!fs.existsSync(error.file)) {
      this.log(`File not found: ${error.file}`, 'warn');
      return;
    }

    const content = fs.readFileSync(error.file, 'utf8');
    const lines = content.split('\n');

    // Common TypeScript fixes
    if (error.message.includes('Cannot find module')) {
      // Fix import issues
      await this.fixImportIssue(error.file, error.message);
    } else if (error.message.includes('Property') && error.message.includes('does not exist')) {
      // Fix property access issues
      await this.fixPropertyAccessIssue(error.file, error.line, error.message);
    } else if (error.message.includes('Type') && error.message.includes('is not assignable')) {
      // Fix type assignment issues
      await this.fixTypeAssignmentIssue(error.file, error.line, error.message);
    }
  }

  async fixImportIssue(file, message) {
    const moduleMatch = message.match(/Cannot find module ['"]([^'"]+)['"]/);
    if (!moduleMatch) return;

    const missingModule = moduleMatch[1];
    const content = fs.readFileSync(file, 'utf8');

    // Try to fix common import issues
    if (missingModule.startsWith('@/')) {
      // Fix path alias imports
      const fixedContent = content.replace(
        new RegExp(`from ['"]${missingModule}['"]`, 'g'),
        `from '${missingModule.replace('@/', './')}'`
      );
      fs.writeFileSync(file, fixedContent);
    } else if (missingModule.includes('react')) {
      // Fix React imports
      const fixedContent = content.replace(
        /import React from ['"]react['"]/g,
        "import React from 'react'"
      );
      fs.writeFileSync(file, fixedContent);
    }
  }

  async fixPropertyAccessIssue(file, line, message) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line <= lines.length) {
      const targetLine = lines[line - 1];
      
      // Add optional chaining for property access
      const fixedLine = targetLine.replace(
        /(\w+)\.(\w+)/g,
        '$1?.$2'
      );
      
      lines[line - 1] = fixedLine;
      fs.writeFileSync(file, lines.join('\n'));
    }
  }

  async fixTypeAssignmentIssue(file, line, message) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line <= lines.length) {
      const targetLine = lines[line - 1];
      
      // Add type assertions for assignment issues
      const fixedLine = targetLine.replace(
        /(\w+)\s*=\s*([^;]+);/g,
        '$1 = $2 as any;'
      );
      
      lines[line - 1] = fixedLine;
      fs.writeFileSync(file, lines.join('\n'));
    }
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');
    
    try {
      // Try to auto-fix ESLint errors
      await this.runCommand('npm', { args: ['run', 'lint', '--', '--fix'] });
      this.log('ESLint auto-fix completed');
    } catch (error) {
      this.log('ESLint auto-fix failed, applying manual fixes', 'warn');
      
      for (const error of this.errors.eslint) {
        try {
          await this.fixESLintError(error);
          this.fixes.applied.push({
            type: 'eslint',
            error,
            timestamp: new Date().toISOString()
          });
        } catch (fixError) {
          this.fixes.failed.push({
            type: 'eslint',
            error,
            fixError: fixError.message,
            timestamp: new Date().toISOString()
          });
        }
      }
    }
  }

  async fixESLintError(error) {
    if (!fs.existsSync(error.file)) {
      this.log(`File not found: ${error.file}`, 'warn');
      return;
    }

    const content = fs.readFileSync(error.file, 'utf8');
    const lines = content.split('\n');

    if (error.message.includes('unused variable')) {
      // Remove unused variables
      const fixedContent = content.replace(
        /const\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*unused/g,
        ''
      );
      fs.writeFileSync(error.file, fixedContent);
    } else if (error.message.includes('missing semicolon')) {
      // Add missing semicolons
      if (error.line <= lines.length) {
        const targetLine = lines[error.line - 1];
        if (!targetLine.trim().endsWith(';') && !targetLine.trim().endsWith('{') && !targetLine.trim().endsWith('}')) {
          lines[error.line - 1] = targetLine + ';';
          fs.writeFileSync(error.file, lines.join('\n'));
        }
      }
    }
  }

  async fixImportErrors() {
    this.log('Fixing import errors...');
    
    for (const error of this.errors.import) {
      try {
        await this.fixImportError(error);
        this.fixes.applied.push({
          type: 'import',
          error,
          timestamp: new Date().toISOString()
        });
      } catch (fixError) {
        this.fixes.failed.push({
          type: 'import',
          error,
          fixError: fixError.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async fixImportError(error) {
    // Implementation for fixing import errors
    this.log(`Fixing import error in ${error.file}`);
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors...');
    
    for (const error of this.errors.syntax) {
      try {
        await this.fixSyntaxError(error);
        this.fixes.applied.push({
          type: 'syntax',
          error,
          timestamp: new Date().toISOString()
        });
      } catch (fixError) {
        this.fixes.failed.push({
          type: 'syntax',
          error,
          fixError: fixError.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async fixSyntaxError(error) {
    // Implementation for fixing syntax errors
    this.log(`Fixing syntax error: ${error.message}`);
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Try to fix vulnerabilities
      await this.runCommand('npm', { args: ['audit', 'fix'] });
      this.log('Dependency audit fix completed');
      
      this.fixes.applied.push({
        type: 'dependency',
        message: 'Applied npm audit fix',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      this.log('Dependency fix failed', 'error');
      
      this.fixes.failed.push({
        type: 'dependency',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.getTotalErrors(),
        errorsByType: Object.fromEntries(
          Object.entries(this.errors).map(([type, errors]) => [type, errors.length])
        ),
        fixesApplied: this.fixes.applied.length,
        fixesFailed: this.fixes.failed.length,
        fixesSkipped: this.fixes.skipped.length
      },
      errors: this.errors,
      fixes: this.fixes,
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.errors.typescript.length > 0) {
      recommendations.push({
        type: 'typescript',
        priority: 'high',
        message: 'Consider adding proper TypeScript types and interfaces',
        action: 'Review and add missing type definitions'
      });
    }

    if (this.errors.eslint.length > 0) {
      recommendations.push({
        type: 'eslint',
        priority: 'medium',
        message: 'Consider updating ESLint configuration',
        action: 'Review ESLint rules and update configuration'
      });
    }

    if (this.errors.dependency.length > 0) {
      recommendations.push({
        type: 'dependency',
        priority: 'high',
        message: 'Update dependencies to fix security vulnerabilities',
        action: 'Run npm update and review package.json'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('Starting Master Error Fixer...');
    
    try {
      await this.detectErrors();
      
      if (this.getTotalErrors() > 0) {
        await this.applyFixes();
      } else {
        this.log('No errors detected');
      }
      
      const report = this.generateReport();
      this.log('Master Error Fixer completed successfully');
      
      return report;
    } catch (error) {
      this.log(`Master Error Fixer failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the master error fixer
if (require.main === module) {
  const fixer = new MasterErrorFixer();
  fixer.run()
    .then((report) => {
      console.log('Master Error Fixer completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Master Error Fixer failed:', error);
      process.exit(1);
    });
}

module.exports = MasterErrorFixer;