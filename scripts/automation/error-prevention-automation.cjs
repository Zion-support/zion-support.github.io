#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class ErrorPreventionAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.fixHistory = [];
    this.errorPatterns = {
      syntaxErrors: [
        { pattern: /anykeyof/g, fix: 'keyof' },
        { pattern: /any"/g, fix: '"' },
        { pattern: /any'/g, fix: "'" },
        { pattern: /any\(/g, fix: '(' },
        { pattern: /any\)/g, fix: ')' },
        { pattern: /any:/g, fix: ':' },
        { pattern: /any;/g, fix: ';' },
        { pattern: /any,/g, fix: ',' },
        { pattern: /any\./g, fix: '.' },
        { pattern: /any\s/g, fix: ' ' }
      ],
      importErrors: [
        { pattern: /from 'lucide-react\.ts';/g, fix: "from 'lucide-react';" },
        { pattern: /from 'lucide-react\.ts'/g, fix: "from 'lucide-react'" }
      ],
      jsxErrors: [
        { pattern: /<\/>header>/g, fix: '</header>' },
        { pattern: /<\/>div>/g, fix: '</div>' },
        { pattern: /<\/>Link>/g, fix: '</Link>' }
      ]
    };
    
    this.setupDirectories();
  }

  setupDirectories() {
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
    
    const logFile = path.join(this.logsDir, 'error-prevention.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async scanForErrors() {
    this.log('Starting comprehensive error scan...');
    
    const errors = {
      typescript: [],
      linting: [],
      syntax: [],
      structural: []
    };

    try {
      // TypeScript check
      this.log('Running TypeScript type check...');
      const tsResult = execSync('npx tsc --noEmit --pretty', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
    } catch (error) {
      if (error.stdout) {
        errors.typescript = this.parseTypeScriptErrors(error.stdout);
      }
    }

    try {
      // ESLint check
      this.log('Running ESLint check...');
      const lintResult = execSync('npx eslint . --format=json', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
    } catch (error) {
      if (error.stdout) {
        errors.linting = this.parseLintingErrors(error.stdout);
      }
    }

    // File structure scan
    errors.structural = this.scanFileStructure();
    
    // Syntax scan
    errors.syntax = this.scanForSyntaxErrors();

    this.log(`Scan completed. Found ${errors.typescript.length + errors.linting.length + errors.syntax.length + errors.structural.length} total issues`);
    
    return errors;
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/src\/([^:]+):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line.trim(),
            type: 'typescript'
          });
        }
      }
    }
    
    return errors;
  }

  parseLintingErrors(output) {
    try {
      const results = JSON.parse(output);
      const errors = [];
      
      for (const file of results) {
        for (const message of file.messages) {
          errors.push({
            file: file.filePath.replace(this.projectRoot + '/', ''),
            line: message.line,
            column: message.column,
            message: message.message,
            rule: message.ruleId,
            type: 'linting'
          });
        }
      }
      
      return errors;
    } catch (e) {
      this.log('Failed to parse linting errors', 'ERROR');
      return [];
    }
  }

  scanFileStructure() {
    const errors = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcDir)) {
      errors.push({
        type: 'structural',
        message: 'src directory not found',
        severity: 'critical'
      });
      return errors;
    }

    // Check for common structural issues
    const componentsDir = path.join(srcDir, 'components');
    if (fs.existsSync(componentsDir)) {
      const files = fs.readdirSync(componentsDir, { recursive: true });
      
      for (const file of files) {
        if (file.endsWith('.js.jsx') || file.endsWith('.ts.tsx')) {
          errors.push({
            type: 'structural',
            file: `src/components/${file}`,
            message: 'File has duplicate extension',
            severity: 'high',
            fix: 'rename'
          });
        }
      }
    }

    return errors;
  }

  scanForSyntaxErrors() {
    const errors = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcDir)) return errors;

    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const syntaxErrors = this.checkFileSyntax(content, fullPath);
          errors.push(...syntaxErrors);
        }
      }
    };

    scanDirectory(srcDir);
    return errors;
  }

  checkFileSyntax(content, filePath) {
    const errors = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;
      
      // Check for common syntax patterns
      for (const pattern of this.errorPatterns.syntaxErrors) {
        if (pattern.pattern.test(line)) {
          errors.push({
            file: filePath.replace(this.projectRoot + '/', ''),
            line: lineNum,
            message: `Syntax error: ${pattern.pattern.source}`,
            type: 'syntax',
            fix: pattern.fix,
            original: line.trim()
          });
        }
      }
    }
    
    return errors;
  }

  async autoFixErrors(errors) {
    this.log('Starting automatic error fixing...');
    let fixedCount = 0;
    
    for (const error of errors) {
      if (error.fix && error.file) {
        try {
          const fixed = await this.fixError(error);
          if (fixed) {
            fixedCount++;
            this.fixHistory.push({
              timestamp: new Date().toISOString(),
              error,
              fixed: true
            });
          }
        } catch (e) {
          this.log(`Failed to fix error in ${error.file}: ${e.message}`, 'ERROR');
        }
      }
    }
    
    this.log(`Auto-fixed ${fixedCount} errors`);
    return fixedCount;
  }

  async fixError(error) {
    const filePath = path.join(this.projectRoot, error.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    if (error.type === 'syntax' && error.fix) {
      const lines = content.split('\n');
      const lineIndex = error.line - 1;
      
      if (lines[lineIndex]) {
        const originalLine = lines[lineIndex];
        const fixedLine = originalLine.replace(this.errorPatterns.syntaxErrors.find(p => p.fix === error.fix)?.pattern || /any/g, error.fix);
        
        if (fixedLine !== originalLine) {
          lines[lineIndex] = fixedLine;
          content = lines.join('\n');
          modified = true;
        }
      }
    }
    
    if (modified) {
      // Create backup
      const backupPath = filePath + '.backup';
      fs.copyFileSync(filePath, backupPath);
      
      // Write fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      
      this.log(`Fixed error in ${error.file}: ${error.message}`);
      return true;
    }
    
    return false;
  }

  generateReport(errors, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: errors.typescript.length + errors.linting.length + errors.syntax.length + errors.structural.length,
        fixedErrors: fixedCount,
        remainingErrors: (errors.typescript.length + errors.linting.length + errors.syntax.length + errors.structural.length) - fixedCount
      },
      errors: errors,
      fixHistory: this.fixHistory,
      recommendations: this.generateRecommendations(errors)
    };

    const reportPath = path.join(this.reportsDir, `error-prevention-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations(errors) {
    const recommendations = [];
    
    if (errors.typescript.length > 0) {
      recommendations.push({
        type: 'typescript',
        priority: 'high',
        message: 'Run TypeScript compiler to identify type errors',
        command: 'npm run type-check'
      });
    }
    
    if (errors.linting.length > 0) {
      recommendations.push({
        type: 'linting',
        priority: 'medium',
        message: 'Run ESLint with auto-fix to resolve linting issues',
        command: 'npm run lint --fix'
      });
    }
    
    if (errors.structural.length > 0) {
      recommendations.push({
        type: 'structural',
        priority: 'high',
        message: 'Review and fix file structure issues',
        action: 'manual_review_required'
      });
    }
    
    return recommendations;
  }

  async startWatching() {
    this.log('Starting file watcher for real-time error prevention...');
    
    const watcher = chokidar.watch([
      'src/**/*.{ts,tsx,js,jsx}',
      'package.json',
      'tsconfig.json'
    ], {
      ignored: /(node_modules|dist|\.git)/,
      persistent: true
    });

    watcher
      .on('change', async (filePath) => {
        this.log(`File changed: ${filePath}`);
        await this.handleFileChange(filePath);
      })
      .on('add', async (filePath) => {
        this.log(`File added: ${filePath}`);
        await this.handleFileChange(filePath);
      })
      .on('error', (error) => {
        this.log(`Watcher error: ${error.message}`, 'ERROR');
      });

    return watcher;
  }

  async handleFileChange(filePath) {
    try {
      // Quick syntax check
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const syntaxErrors = this.checkFileSyntax(content, filePath);
        
        if (syntaxErrors.length > 0) {
          this.log(`Found ${syntaxErrors.length} syntax errors in ${filePath}`);
          await this.autoFixErrors(syntaxErrors);
        }
      }
    } catch (error) {
      this.log(`Error handling file change for ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting Error Prevention Automation...');
    
    try {
      // Initial scan
      const errors = await this.scanForErrors();
      
      // Auto-fix what we can
      const fixedCount = await this.autoFixErrors(errors);
      
      // Generate report
      const report = this.generateReport(errors, fixedCount);
      
      // Start watching for changes
      await this.startWatching();
      
      this.log('Error Prevention Automation is now running and monitoring files...');
      
      // Keep the process alive
      process.on('SIGINT', () => {
        this.log('Shutting down Error Prevention Automation...');
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new ErrorPreventionAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'scan':
      automation.scanForErrors().then(errors => {
        console.log(JSON.stringify(errors, null, 2));
        process.exit(0);
      });
      break;
      
    case 'fix':
      automation.scanForErrors().then(errors => {
        return automation.autoFixErrors(errors);
      }).then(fixedCount => {
        console.log(`Fixed ${fixedCount} errors`);
        process.exit(0);
      });
      break;
      
    case 'watch':
      automation.run();
      break;
      
    default:
      console.log(`
Error Prevention Automation

Usage:
  node error-prevention-automation.cjs [command]

Commands:
  scan    - Scan for errors and generate report
  fix     - Scan and auto-fix errors
  watch   - Start watching files for real-time error prevention

Examples:
  node error-prevention-automation.cjs scan
  node error-prevention-automation.cjs fix
  node error-prevention-automation.cjs watch
      `);
      process.exit(1);
  }
}

module.exports = ErrorPreventionAutomation;