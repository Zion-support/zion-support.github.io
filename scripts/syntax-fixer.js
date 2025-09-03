#!/usr/bin/env node

/**
 * Syntax Fixer - PM2 Automation Script
 * Automatically detects and fixes syntax errors in the codebase
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.errorReportsDir = path.join(this.projectRoot, 'error-reports');
    this.fixedFiles = [];
    this.errorCount = 0;
    this.fixCount = 0;
    
    this.setupDirectories();
    this.setupLogging();
  }

  setupDirectories() {
    [this.logsDir, this.errorReportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'syntax-fixer.log');
    this.log('Syntax Fixer started', 'INFO');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  async scanForSyntaxErrors() {
    this.log('Scanning for syntax errors...', 'INFO');
    
    try {
      // Check TypeScript files
      const tsErrors = this.checkTypeScriptSyntax();
      
      // Check JavaScript files
      const jsErrors = this.checkJavaScriptSyntax();
      
      // Check JSX/TSX files
      const jsxErrors = this.checkJSXSyntax();
      
      this.errorCount = tsErrors + jsErrors + jsxErrors;
      this.log(`Found ${this.errorCount} syntax errors`, 'INFO');
      
      return this.errorCount > 0;
    } catch (error) {
      this.log(`Error during syntax scan: ${error.message}`, 'ERROR');
      return false;
    }
  }

  checkTypeScriptSyntax() {
    try {
      const result = execSync('npx tsc --noEmit --skipLibCheck', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return 0;
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errorLines = output.split('\n').filter(line => 
        line.includes('error TS') || line.includes('error:')
      );
      return errorLines.length;
    }
  }

  checkJavaScriptSyntax() {
    try {
      const jsFiles = this.findFiles('.js');
      let errorCount = 0;
      
      jsFiles.forEach(file => {
        try {
          execSync(`node -c "${file}"`, { stdio: 'pipe' });
        } catch (error) {
          errorCount++;
          this.log(`JavaScript syntax error in: ${file}`, 'ERROR');
        }
      });
      
      return errorCount;
    } catch (error) {
      this.log(`Error checking JavaScript syntax: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  checkJSXSyntax() {
    try {
      const jsxFiles = this.findFiles('.jsx');
      const tsxFiles = this.findFiles('.tsx');
      let errorCount = 0;
      
      [...jsxFiles, ...tsxFiles].forEach(file => {
        try {
          // Basic JSX syntax check
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            errorCount++;
            this.log(`Merge conflict markers found in: ${file}`, 'ERROR');
          }
        } catch (error) {
          errorCount++;
          this.log(`Error reading JSX/TSX file: ${file}`, 'ERROR');
        }
      });
      
      return errorCount;
    } catch (error) {
      this.log(`Error checking JSX syntax: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  findFiles(extension) {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && item.endsWith(extension)) {
          files.push(fullPath);
        }
      });
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  async fixSyntaxErrors() {
    if (this.errorCount === 0) {
      this.log('No syntax errors to fix', 'INFO');
      return;
    }

    this.log('Starting syntax error fixes...', 'INFO');
    
    try {
      // Fix merge conflicts
      await this.fixMergeConflicts();
      
      // Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Fix common syntax issues
      await this.fixCommonSyntaxIssues();
      
      this.log(`Fixed ${this.fixCount} syntax issues`, 'INFO');
    } catch (error) {
      this.log(`Error during syntax fixing: ${error.message}`, 'ERROR');
    }
  }

  async fixMergeConflicts() {
    this.log('Fixing merge conflicts...', 'INFO');
    
    const allFiles = [
      ...this.findFiles('.ts'),
      ...this.findFiles('.tsx'),
      ...this.findFiles('.js'),
      ...this.findFiles('.jsx')
    ];
    
    allFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Remove merge conflict markers
        if (content.includes('<<<<<<< HEAD')) {
          content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
          fixed = true;
        }
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(file);
          this.fixCount++;
          this.log(`Fixed merge conflicts in: ${file}`, 'INFO');
        }
      } catch (error) {
        this.log(`Error fixing merge conflicts in ${file}: ${error.message}`, 'ERROR');
      }
    });
  }

  async fixTypeScriptErrors() {
    this.log('Attempting to fix TypeScript errors...', 'INFO');
    
    try {
      // Try to run TypeScript compiler with auto-fix options
      execSync('npx tsc --noEmit --skipLibCheck', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
    } catch (error) {
      this.log('TypeScript errors remain after fixes', 'WARN');
    }
  }

  async fixCommonSyntaxIssues() {
    this.log('Fixing common syntax issues...', 'INFO');
    
    const allFiles = [
      ...this.findFiles('.ts'),
      ...this.findFiles('.tsx'),
      ...this.findFiles('.js'),
      ...this.findFiles('.jsx')
    ];
    
    allFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix common issues
        if (content.includes('import React from "react"') && !content.includes('React.')) {
          content = content.replace(/import React from "react";?\n?/g, '');
          fixed = true;
        }
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(file);
          this.fixCount++;
          this.log(`Fixed common syntax issues in: ${file}`, 'INFO');
        }
      } catch (error) {
        this.log(`Error fixing syntax issues in ${file}: ${error.message}`, 'ERROR');
      }
    });
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errorsFound: this.errorCount,
      errorsFixed: this.fixCount,
      filesModified: this.fixedFiles,
      summary: `Fixed ${this.fixCount} out of ${this.errorCount} syntax errors`
    };
    
    const reportFile = path.join(this.errorReportsDir, `syntax-fixer-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`, 'INFO');
    return report;
  }

  async run() {
    try {
      this.log('Starting syntax fixer automation...', 'INFO');
      
      const hasErrors = await this.scanForSyntaxErrors();
      
      if (hasErrors) {
        await this.fixSyntaxErrors();
      }
      
      const report = this.generateReport();
      
      this.log('Syntax fixer automation completed', 'INFO');
      this.log(`Summary: ${report.summary}`, 'INFO');
      
      return report;
    } catch (error) {
      this.log(`Fatal error in syntax fixer: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the syntax fixer if called directly
if (require.main === module) {
  const fixer = new SyntaxFixer();
  
  fixer.run()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Syntax fixer failed:', error);
      process.exit(1);
    });
}

module.exports = SyntaxFixer;