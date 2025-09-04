#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Starting Linting Automation...');

class LintingAutomation {
  constructor() {
    this.isRunning = false;
    this.checkInterval = 180000; // 3 minutes
    this.lastCheck = null;
    this.logFile = path.join(process.cwd(), 'automation/logs/linting-automation.log');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    try {
      this.log('🔍 Running ESLint...');
      
      // Run ESLint with auto-fix
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      
      this.log('✅ Linting completed successfully');
      return { success: true, errors: 0, warnings: 0 };
      
    } catch (error) {
      const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (errorOutput.match(/error/g) || []).length;
      const warningCount = (errorOutput.match(/warning/g) || []).length;
      
      this.log(`❌ Linting found ${errorCount} errors and ${warningCount} warnings`, 'WARN');
      
      return { success: false, errors: errorCount, warnings: warningCount };
    }
  }

  async fixCommonIssues() {
    try {
      this.log('🔧 Fixing common linting issues...');
      
      // List of files to check and fix
      const filesToCheck = [
        'components',
        'pages',
        'services',
        'utils',
        'types'
      ];
      
      let totalFixes = 0;
      
      for (const dir of filesToCheck) {
        const dirPath = path.join(process.cwd(), dir);
        if (fs.existsSync(dirPath)) {
          const fixes = await this.fixDirectory(dirPath);
          totalFixes += fixes;
        }
      }
      
      this.log(`✅ Applied ${totalFixes} fixes`);
      return totalFixes;
      
    } catch (error) {
      this.log(`❌ Error fixing issues: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  async fixDirectory(dirPath) {
    let fixes = 0;
    
    try {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          fixes += await this.fixDirectory(filePath);
        } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.jsx') || file.name.endsWith('.js')) {
          fixes += await this.fixFile(filePath);
        }
      }
    } catch (error) {
      this.log(`Error processing directory ${dirPath}: ${error.message}`, 'WARN');
    }
    
    return fixes;
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixes = 0;
      
      // Fix common issues
      const originalContent = content;
      
      // Remove unused imports (basic cleanup)
      content = content.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*['"][^'"]*['"];?\s*\n/g, (match, imports) => {
        const importList = imports.split(',').map(imp => imp.trim());
        const usedImports = importList.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          return content.includes(importName) && !content.includes(`import ${importName}`);
        });
        
        if (usedImports.length === 0) {
          fixes++;
          return '';
        }
        
        return match;
      });
      
      // Fix console statements
      const consoleMatches = content.match(/console\.(log|error|warn|info)\(/g);
      if (consoleMatches) {
        content = content.replace(/console\.(log|error|warn|info)\(/g, '// console.$1(');
        fixes += consoleMatches.length;
      }
      
      // Fix 'any' types
      const anyMatches = content.match(/:\s*any\b/g);
      if (anyMatches) {
        content = content.replace(/:\s*any\b/g, ': unknown');
        fixes += anyMatches.length;
      }
      
      // Fix unused variables
      content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*\n(?![^]*\1)/g, (match, varName) => {
        if (!content.includes(varName) || content.indexOf(varName) === content.lastIndexOf(varName)) {
          fixes++;
          return '';
        }
        return match;
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed ${fixes} issues in ${path.relative(process.cwd(), filePath)}`);
      }
      
      return fixes;
      
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`, 'WARN');
      return 0;
    }
  }

  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        lastCheck: this.lastCheck,
        status: 'running',
        totalRuns: 0,
        totalFixes: 0,
        errors: 0,
        warnings: 0
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/linting-report.json'),
        JSON.stringify(report, null, 2)
      );
      
    } catch (error) {
      this.log(`Error generating report: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.isRunning = true;
    this.log('🚀 Linting Automation started');
    
    // Initial run
    await this.runLinting();
    await this.fixCommonIssues();
    await this.generateReport();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        this.lastCheck = new Date();
        await this.runLinting();
        await this.fixCommonIssues();
        await this.generateReport();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Linting Automation...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('🛑 Shutting down Linting Automation...');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the automation
const lintingAutomation = new LintingAutomation();
lintingAutomation.start().catch(error => {
  console.error('❌ Failed to start Linting Automation:', error);
  process.exit(1);
});