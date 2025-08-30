#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LintAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'lint-automation.log');
    this.lintReportFile = path.join(this.projectRoot, 'logs', 'lint-report.json');
    this.fixedIssues = [];
    this.remainingIssues = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
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
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async runLinting() {
    this.log('🔍 Running linting checks...');
    
    // Run ESLint
    const eslintResult = await this.runCommand('npm run lint', { silent: true });
    
    if (eslintResult.success) {
      this.log('✅ No linting issues found');
      return { success: true, issues: [] };
    }
    
    // Parse linting output
    const issues = this.parseLintOutput(eslintResult.output);
    this.log(`Found ${issues.length} linting issues`);
    
    return { success: false, issues };
  }

  parseLintOutput(output) {
    const issues = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/([^:]+):(\d+):(\d+):\s*(error|warning)\s*(.+)/);
        if (match) {
          issues.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            severity: match[4],
            message: match[5],
            category: this.categorizeIssue(match[5])
          });
        }
      }
    }
    
    return issues;
  }

  categorizeIssue(message) {
    if (message.includes('React') && message.includes('never used')) {
      return 'unused-imports';
    } else if (message.includes('console statement')) {
      return 'console-statements';
    } else if (message.includes('defined but never used')) {
      return 'unused-variables';
    } else if (message.includes('JSX closing tag')) {
      return 'jsx-syntax';
    } else if (message.includes('Parsing error')) {
      return 'syntax-errors';
    } else if (message.includes('no-undef')) {
      return 'undefined-references';
    } else {
      return 'other';
    }
  }

  async fixLintIssues(issues) {
    this.log('🔧 Starting automatic linting fixes...');
    
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        if (await this.fixLintIssue(issue)) {
          fixedCount++;
          this.fixedIssues.push({
            ...issue,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.remainingIssues.push({
            ...issue,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix issue in ${issue.file}: ${error.message}`, 'ERROR');
        this.remainingIssues.push({
          ...issue,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixLintIssue(issue) {
    const filePath = path.join(this.projectRoot, issue.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    switch (issue.category) {
      case 'unused-imports':
        modified = this.fixUnusedImports(content, issue);
        break;
        
      case 'console-statements':
        modified = this.fixConsoleStatements(content, issue);
        break;
        
      case 'unused-variables':
        modified = this.fixUnusedVariables(content, issue);
        break;
        
      case 'jsx-syntax':
        modified = this.fixJSXSyntax(content, issue);
        break;
        
      case 'syntax-errors':
        modified = this.fixSyntaxErrors(content, issue);
        break;
        
      case 'undefined-references':
        modified = this.fixUndefinedReferences(content, issue);
        break;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  }

  fixUnusedImports(content, issue) {
    const lines = content.split('\n');
    const lineIndex = issue.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      
      // Remove unused React import
      if (line.includes('import React') && !line.includes('React.')) {
        lines.splice(lineIndex, 1);
        return true;
      }
      
      // Remove other unused imports
      if (line.includes('import') && line.includes('from')) {
        // Check if the import is actually used in the file
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          let allUnused = true;
          
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, ''); // Remove "as" aliases
            if (content.includes(cleanImp) && !line.includes(cleanImp)) {
              allUnused = false;
              break;
            }
          }
          
          if (allUnused) {
            lines.splice(lineIndex, 1);
            return true;
          }
        }
      }
    }
    
    return false;
  }

  fixConsoleStatements(content, issue) {
    // Remove console statements
    const originalContent = content;
    content = content.replace(/console\.(log|error|warn|info|debug)\([^)]*\);?\s*/g, '');
    
    return content !== originalContent;
  }

  fixUnusedVariables(content, issue) {
    const lines = content.split('\n');
    const lineIndex = issue.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      
      // Remove simple variable declarations
      if (line.includes('const ') || line.includes('let ') || line.includes('var ')) {
        // Check if it's a simple assignment
        if (line.includes('=') && !line.includes('function') && !line.includes('=>')) {
          lines.splice(lineIndex, 1);
          return true;
        }
      }
    }
    
    return false;
  }

  fixJSXSyntax(content, issue) {
    // This is a simplified approach - in practice, you'd need more sophisticated JSX parsing
    this.log(`JSX syntax issue detected in ${issue.file} at line ${issue.line} - requires manual review`, 'WARN');
    return false;
  }

  fixSyntaxErrors(content, issue) {
    // This is a simplified approach - in practice, you'd need more sophisticated parsing
    this.log(`Syntax error detected in ${issue.file} at line ${issue.line} - requires manual review`, 'WARN');
    return false;
  }

  fixUndefinedReferences(content, issue) {
    const lines = content.split('\n');
    const lineIndex = issue.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      
      // Check if it's a missing import
      if (line.includes('import') && line.includes('from')) {
        // Fix malformed import statements
        const fixedLine = line.replace(/import:\s*{([^}]+)},\s*from,\s*'([^']+)':\s*,/g, 
          "import { $1 } from '$2';");
        if (fixedLine !== line) {
          lines[lineIndex] = fixedLine;
          return true;
        }
      }
    }
    
    return false;
  }

  async runAutoFix() {
    this.log('🔄 Running ESLint auto-fix...');
    
    const autoFixResult = await this.runCommand('npm run fix:all', { silent: true });
    
    if (autoFixResult.success) {
      this.log('✅ Auto-fix completed successfully');
      return true;
    } else {
      this.log('⚠️ Auto-fix completed with some issues', 'WARN');
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.fixedIssues.length + this.remainingIssues.length,
        fixedIssues: this.fixedIssues.length,
        remainingIssues: this.remainingIssues.length,
        successRate: this.fixedIssues.length / (this.fixedIssues.length + this.remainingIssues.length) * 100
      },
      fixedIssues: this.fixedIssues,
      remainingIssues: this.remainingIssues,
      categories: this.analyzeCategories()
    };
    
    // Save report
    fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Lint report generated: ${this.fixedIssues.length} issues fixed, ${this.remainingIssues.length} remaining`);
    return report;
  }

  analyzeCategories() {
    const categories = {};
    
    [...this.fixedIssues, ...this.remainingIssues].forEach(issue => {
      if (!categories[issue.category]) {
        categories[issue.category] = { total: 0, fixed: 0, remaining: 0 };
      }
      categories[issue.category].total++;
      
      if (this.fixedIssues.some(fixed => fixed.file === issue.file && fixed.line === issue.line)) {
        categories[issue.category].fixed++;
      } else {
        categories[issue.category].remaining++;
      }
    });
    
    return categories;
  }

  async run() {
    this.log('🚀 Starting Lint Automation');
    
    try {
      // Run initial linting
      const lintResult = await this.runLinting();
      
      if (lintResult.success) {
        this.log('✅ No linting issues found');
        return;
      }
      
      // Fix issues automatically
      const fixedCount = await this.fixLintIssues(lintResult.issues);
      this.log(`Fixed ${fixedCount} issues automatically`);
      
      // Run auto-fix for remaining issues
      await this.runAutoFix();
      
      // Generate final report
      const report = await this.generateReport();
      
      this.log(`✅ Lint automation completed! Fixed ${fixedCount} out of ${lintResult.issues.length} issues`);
      
      // If there are still issues, log them for manual review
      if (this.remainingIssues.length > 0) {
        this.log(`⚠️ ${this.remainingIssues.length} issues require manual review:`, 'WARN');
        this.remainingIssues.forEach(issue => {
          this.log(`  - ${issue.file}:${issue.line} - ${issue.message}`, 'WARN');
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in lint automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the lint automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new LintAutomation();
  automation.run().catch(console.error);
}

export default LintAutomation;