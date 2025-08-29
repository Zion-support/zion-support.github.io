#!/usr/bin/env node

/**
 * Console Error Fixer Automation
 * Replaces GitHub Actions for console error detection and fixing
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConsoleErrorFixer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes default
    this.reportFile = path.join(process.cwd(), 'console-error-fixer-report.json');
    this.errors = [];
    this.fixes = [];
  }

  async start() {
    console.log('🚀 Console Error Fixer Automation Started');
    console.log(`⏰ Running every ${this.interval / 1000} seconds`);
    
    // Run immediately
    await this.run();
    
    // Schedule recurring runs
    setInterval(async () => {
      await this.run();
    }, this.interval);
  }

  async run() {
    try {
      console.log('🔍 Scanning for console errors...');
      
      // Check for console.log, console.error, etc. in source files
      await this.scanSourceFiles();
      
      // Check build output for errors
      await this.checkBuildOutput();
      
      // Generate report
      await this.generateReport();
      
      // Apply fixes if any
      if (this.fixes.length > 0) {
        await this.applyFixes();
      }
      
      console.log(`✅ Scan complete. Found ${this.errors.length} issues, applied ${this.fixes.length} fixes.`);
      
    } catch (error) {
      console.error('❌ Error in console error fixer:', error);
    }
  }

  async scanSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        await this.scanDirectory(dirPath);
      }
    }
  }

  async scanDirectory(dirPath) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        await this.scanDirectory(fullPath);
      } else if (file.isFile() && this.isSourceFile(file.name)) {
        await this.scanFile(fullPath);
      }
    }
  }

  isSourceFile(filename) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  async scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineNumber = i + 1;
        
        // Check for console statements
        if (line.includes('console.log') || line.includes('console.error') || 
            line.includes('console.warn') || line.includes('console.info')) {
          
          this.errors.push({
            file: filePath,
            line: lineNumber,
            content: line.trim(),
            type: 'console-statement',
            severity: 'medium'
          });
          
          // Suggest fix
          this.fixes.push({
            file: filePath,
            line: lineNumber,
            original: line,
            replacement: line.replace(/console\.(log|error|warn|info)/g, '// console.$1'),
            description: 'Comment out console statement for production'
          });
        }
      }
    } catch (error) {
      console.error(`Error scanning file ${filePath}:`, error);
    }
  }

  async checkBuildOutput() {
    try {
      // Run build to check for errors
      const result = execSync('npm run build', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check for build errors
      if (result.includes('error') || result.includes('Error')) {
        this.errors.push({
          file: 'build-output',
          line: 0,
          content: 'Build errors detected',
          type: 'build-error',
          severity: 'high'
        });
      }
      
    } catch (error) {
      // Build failed
      this.errors.push({
        file: 'build-output',
        line: 0,
        content: error.message,
        type: 'build-failure',
        severity: 'high'
      });
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errors: this.errors,
      fixes: this.fixes,
      summary: {
        totalErrors: this.errors.length,
        totalFixes: this.fixes.length,
        byType: this.groupByType(this.errors),
        bySeverity: this.groupBySeverity(this.errors)
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportFile}`);
  }

  groupByType(errors) {
    return errors.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {});
  }

  groupBySeverity(errors) {
    return errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {});
  }

  async applyFixes() {
    console.log('🔧 Applying fixes...');
    
    for (const fix of this.fixes) {
      try {
        const content = fs.readFileSync(fix.file, 'utf8');
        const lines = content.split('\n');
        
        if (lines[fix.line - 1] === fix.original) {
          lines[fix.line - 1] = fix.replacement;
          fs.writeFileSync(fix.file, lines.join('\n'));
          console.log(`✅ Applied fix to ${fix.file}:${fix.line}`);
        }
      } catch (error) {
        console.error(`❌ Failed to apply fix to ${fix.file}:`, error);
      }
    }
  }
}

// Start the automation
const fixer = new ConsoleErrorFixer();
fixer.start().catch(console.error);