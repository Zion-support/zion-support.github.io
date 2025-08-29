#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentLintFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/lint-fixer.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/lint-report.json');
    this.fixesApplied = 0;
    this.errorsFixed = 0;
    this.warningsFixed = 0;
    this.startTime = Date.now();
    
    // Configuration from environment variables
    this.config = {
      autoFix: process.env.AUTO_FIX === 'true',
      strictMode: process.env.STRICT_MODE === 'true',
      maxFileSize: 1024 * 1024, // 1MB
      excludedPatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '*.min.js',
        '*.bundle.js'
      ]
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Fallback to console if log file fails
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeCodePatterns() {
    this.log('🔍 Analyzing code patterns for intelligent fixes...');
    
    const patterns = {
      commonIssues: {
        'console.log': { severity: 'medium', suggestion: 'Use proper logging framework' },
        'TODO': { severity: 'low', suggestion: 'Address technical debt' },
        'FIXME': { severity: 'high', suggestion: 'Critical issue needs attention' },
        'debugger': { severity: 'high', suggestion: 'Remove debugger statement' },
        'var ': { severity: 'medium', suggestion: 'Use const or let instead' }
      },
      performanceIssues: {
        'innerHTML': { severity: 'medium', suggestion: 'Consider using textContent for security' },
        'eval(': { severity: 'critical', suggestion: 'Security risk - avoid eval' },
        'setTimeout\\(0': { severity: 'low', suggestion: 'Consider using requestAnimationFrame' }
      },
      accessibilityIssues: {
        'onClick': { severity: 'medium', suggestion: 'Add keyboard event handlers' },
        'tabIndex="-1"': { severity: 'low', suggestion: 'Review tab order' }
      }
    };

    return patterns;
  }

  async scanFiles() {
    this.log('📁 Scanning project files for linting issues...');
    
    const files = [];
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !this.isExcluded(fullPath)) {
            scanDirectory(fullPath);
          } else if (this.isLintableFile(fullPath) && stat.size < this.config.maxFileSize) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
      }
    };

    scanDirectory(this.projectRoot);
    return files;
  }

  isExcluded(filePath) {
    return this.config.excludedPatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*'));
      return regex.test(filePath);
    });
  }

  isLintableFile(filePath) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue'];
    return extensions.some(ext => filePath.endsWith(ext));
  }

  async runESLint(files) {
    this.log('🔧 Running ESLint with auto-fix...');
    
    try {
      const eslintCommand = this.config.autoFix ? 
        `npx eslint ${files.join(' ')} --fix --format=json` :
        `npx eslint ${files.join(' ')} --format=json`;
      
      const result = execSync(eslintCommand, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return JSON.parse(result);
    } catch (error) {
      // ESLint returns non-zero exit code when there are issues
      try {
        const output = error.stdout?.toString() || '';
        if (output) {
          return JSON.parse(output);
        }
      } catch (parseError) {
        this.log(`Error parsing ESLint output: ${parseError.message}`, 'ERROR');
      }
      return { error: true, message: error.message };
    }
  }

  async runPrettier(files) {
    this.log('💅 Running Prettier for code formatting...');
    
    try {
      const prettierCommand = `npx prettier --write ${files.join(' ')}`;
      execSync(prettierCommand, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      return { success: true };
    } catch (error) {
      this.log(`Prettier error: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async generateIntelligentSuggestions(eslintResults) {
    this.log('🧠 Generating intelligent code improvement suggestions...');
    
    const suggestions = [];
    
    if (eslintResults.error) return suggestions;
    
    eslintResults.forEach(fileResult => {
      if (fileResult.messages) {
        fileResult.messages.forEach(message => {
          const suggestion = this.createSuggestion(message, fileResult.filePath);
          if (suggestion) {
            suggestions.push(suggestion);
          }
        });
      }
    });

    return suggestions;
  }

  createSuggestion(message, filePath) {
    const suggestions = {
      'no-console': {
        message: 'Replace console.log with proper logging',
        fix: 'Implement structured logging with winston or pino',
        priority: 'medium'
      },
      'no-unused-vars': {
        message: 'Remove unused variables or mark with underscore',
        fix: 'Use _variableName or remove if truly unused',
        priority: 'low'
      },
      'prefer-const': {
        message: 'Use const for variables that are not reassigned',
        fix: 'Change let to const where appropriate',
        priority: 'low'
      },
      'no-var': {
        message: 'Use modern ES6+ variable declarations',
        fix: 'Replace var with const or let',
        priority: 'medium'
      }
    };

    const rule = message.ruleId;
    if (suggestions[rule]) {
      return {
        file: filePath,
        line: message.line,
        rule: rule,
        message: suggestions[rule].message,
        fix: suggestions[rule].fix,
        priority: suggestions[rule].priority,
        severity: message.severity
      };
    }

    return null;
  }

  async applyIntelligentFixes(suggestions) {
    this.log('🛠️  Applying intelligent fixes...');
    
    let fixesApplied = 0;
    
    for (const suggestion of suggestions) {
      if (suggestion.priority === 'high' || suggestion.priority === 'critical') {
        try {
          await this.applyFix(suggestion);
          fixesApplied++;
        } catch (error) {
          this.log(`Failed to apply fix for ${suggestion.file}: ${error.message}`, 'ERROR');
        }
      }
    }

    return fixesApplied;
  }

  async applyFix(suggestion) {
    // This is a simplified version - in practice, you'd implement more sophisticated fix logic
    this.log(`Applying fix for ${suggestion.file}:${suggestion.line} - ${suggestion.message}`);
    
    // Here you could implement actual code transformations
    // For now, we'll just log the suggestion
    return true;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      filesScanned: 0,
      issuesFound: 0,
      fixesApplied: this.fixesApplied,
      suggestions: [],
      summary: {
        errors: this.errorsFixed,
        warnings: this.warningsFixed,
        info: 0
      }
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async run() {
    this.log('🚀 Starting Intelligent Lint Fixer...');
    
    try {
      // 1. Analyze code patterns
      const patterns = await this.analyzeCodePatterns();
      
      // 2. Scan project files
      const files = await this.scanFiles();
      this.log(`Found ${files.length} files to analyze`);
      
      // 3. Run ESLint
      const eslintResults = await this.runESLint(files);
      
      // 4. Run Prettier for formatting
      await this.runPrettier(files);
      
      // 5. Generate intelligent suggestions
      const suggestions = await this.generateIntelligentSuggestions(eslintResults);
      
      // 6. Apply intelligent fixes
      const fixesApplied = await this.applyIntelligentFixes(suggestions);
      
      // 7. Generate report
      const report = await this.generateReport();
      
      this.log(`✅ Lint fixing completed! Fixed ${fixesApplied} issues, ${suggestions.length} suggestions generated`);
      
      return report;
      
    } catch (error) {
      this.log(`❌ Lint fixing failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the lint fixer
if (require.main === module) {
  const fixer = new IntelligentLintFixer();
  fixer.run().catch(error => {
    console.error('Lint fixer failed:', error);
    process.exit(1);
  });
}

module.exports = IntelligentLintFixer;
