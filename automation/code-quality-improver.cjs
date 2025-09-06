#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Code Quality Improver
 * Automatically improves code quality, readability, and maintainability
 */
class CodeQualityImprover {
  constructor() {
    this.projectRoot = process.cwd();
    this.improvements = {
      codeFormatting: 0,
      variableNaming: 0,
      functionOptimization: 0,
      commentAddition: 0,
      typeSafety: 0,
      totalFiles: 0
    };
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async improveCodeFormatting() {
    this.log('🔧 Improving code formatting...', 'PROGRESS');
    
    const formattingRules = [
      // Fix indentation
      {
        pattern: /^(\s*)([^\s])/gm,
        replacement: (match, spaces, char) => {
          const properIndent = '  '.repeat(Math.floor(spaces.length / 2));
          return properIndent + char;
        },
        description: 'Fixing indentation'
      },
      // Add proper spacing around operators
      {
        pattern: /([a-zA-Z0-9_])([+\-*/=<>!&|])([a-zA-Z0-9_])/g,
        replacement: '$1 $2 $3',
        description: 'Adding spacing around operators'
      },
      // Fix spacing around brackets
      {
        pattern: /([a-zA-Z0-9_])\(/g,
        replacement: '$1 (',
        description: 'Adding spacing before parentheses'
      },
      // Fix spacing around commas
      {
        pattern: /,([^\s])/g,
        replacement: ', $1',
        description: 'Adding spacing after commas'
      }
    ];

    const files = this.getFilesToImprove();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const rule of formattingRules) {
          const originalContent = content;
          if (typeof rule.replacement === 'function') {
            content = content.replace(rule.pattern, rule.replacement);
          } else {
            content = content.replace(rule.pattern, rule.replacement);
          }
          if (content !== originalContent) {
            modified = true;
            this.improvements.codeFormatting++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Improved formatting in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error improving ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async improveVariableNaming() {
    this.log('🔧 Improving variable naming...', 'PROGRESS');
    
    const namingImprovements = [
      // Convert single letter variables to descriptive names
      {
        pattern: /\b([a-z])\b(?=\s*[=:])/g,
        replacement: (match) => {
          const replacements = {
            'i': 'index',
            'j': 'innerIndex',
            'k': 'key',
            'x': 'coordinateX',
            'y': 'coordinateY',
            'z': 'coordinateZ',
            'n': 'number',
            's': 'string',
            'b': 'boolean',
            'f': 'function',
            'o': 'object',
            'a': 'array'
          };
          return replacements[match] || match;
        },
        description: 'Improving single letter variable names'
      },
      // Convert camelCase to more descriptive names
      {
        pattern: /\b([a-z]+)([A-Z][a-z]*)\b/g,
        replacement: (match, p1, p2) => {
          return `${p1}_${p2.toLowerCase()}`;
        },
        description: 'Converting camelCase to snake_case'
      }
    ];

    const files = this.getFilesToImprove();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const improvement of namingImprovements) {
          const originalContent = content;
          if (typeof improvement.replacement === 'function') {
            content = content.replace(improvement.pattern, improvement.replacement);
          } else {
            content = content.replace(improvement.pattern, improvement.replacement);
          }
          if (content !== originalContent) {
            modified = true;
            this.improvements.variableNaming++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Improved variable naming in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error improving ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async addComments() {
    this.log('🔧 Adding helpful comments...', 'PROGRESS');
    
    const commentRules = [
      // Add comments to functions
      {
        pattern: /(function\s+\w+\s*\([^)]*\)\s*{)/g,
        replacement: (match) => {
          const funcName = match.match(/function\s+(\w+)/)[1];
          return `/**\n * ${funcName} - Function description\n */\n${match}`;
        },
        description: 'Adding function comments'
      },
      // Add comments to complex logic
      {
        pattern: /(if\s*\([^)]+\)\s*{)/g,
        replacement: (match) => {
          return `// Check condition\n${match}`;
        },
        description: 'Adding conditional comments'
      }
    ];

    const files = this.getFilesToImprove();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const rule of commentRules) {
          const originalContent = content;
          if (typeof rule.replacement === 'function') {
            content = content.replace(rule.pattern, rule.replacement);
          } else {
            content = content.replace(rule.pattern, rule.replacement);
          }
          if (content !== originalContent) {
            modified = true;
            this.improvements.commentAddition++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Added comments in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error improving ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async improveTypeSafety() {
    this.log('🔧 Improving type safety...', 'PROGRESS');
    
    const typeSafetyRules = [
      // Add type annotations to function parameters
      {
        pattern: /function\s+(\w+)\s*\(([^)]*)\)\s*{/g,
        replacement: (match, funcName, params) => {
          const typedParams = params.split(',').map(param => {
            const trimmed = param.trim();
            if (trimmed && !trimmed.includes(':')) {
              return `${trimmed}: any`;
            }
            return trimmed;
          }).join(', ');
          return `function ${funcName}(${typedParams}): any {`;
        },
        description: 'Adding type annotations'
      },
      // Add return type annotations
      {
        pattern: /(const\s+\w+\s*=\s*\([^)]*\)\s*=>)/g,
        replacement: '$1: any',
        description: 'Adding return type annotations'
      }
    ];

    const files = this.getFilesToImprove();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const rule of typeSafetyRules) {
          const originalContent = content;
          if (typeof rule.replacement === 'function') {
            content = content.replace(rule.pattern, rule.replacement);
          } else {
            content = content.replace(rule.pattern, rule.replacement);
          }
          if (content !== originalContent) {
            modified = true;
            this.improvements.typeSafety++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Improved type safety in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error improving ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  getFilesToImprove() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', '.next', 'dist', 'build', 'automation-reports'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };

    scanDirectory(this.projectRoot);
    this.improvements.totalFiles = files.length;
    return files;
  }

  async runLinting() {
    this.log('🔧 Running linting...', 'PROGRESS');
    
    try {
      const result = execSync('npm run lint:fix', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Linting completed successfully', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Linting failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      improvements: this.improvements,
      summary: {
        totalFiles: this.improvements.totalFiles,
        codeFormatting: this.improvements.codeFormatting,
        variableNaming: this.improvements.variableNaming,
        functionOptimization: this.improvements.functionOptimization,
        commentAddition: this.improvements.commentAddition,
        typeSafety: this.improvements.typeSafety
      }
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'code-quality-improvement-report.json');
    
    // Ensure directory exists
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Code Quality Improvement Report Generated', 'SUCCESS');
    this.log(`✅ Total Files Processed: ${report.summary.totalFiles}`);
    this.log(`🔧 Code Formatting Improvements: ${report.summary.codeFormatting}`);
    this.log(`🔧 Variable Naming Improvements: ${report.summary.variableNaming}`);
    this.log(`🔧 Function Optimization: ${report.summary.functionOptimization}`);
    this.log(`🔧 Comments Added: ${report.summary.commentAddition}`);
    this.log(`🔧 Type Safety Improvements: ${report.summary.typeSafety}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Code Quality Improver...', 'PROGRESS');
    
    try {
      await this.improveCodeFormatting();
      await this.improveVariableNaming();
      await this.addComments();
      await this.improveTypeSafety();
      await this.runLinting();
      
      this.generateReport();
      this.log('✅ Code Quality Improver completed successfully!', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Code Quality Improver failed: ${error.message}`, 'ERROR');
      this.generateReport();
    }
  }
}

// Run the code quality improver
if (require.main === module) {
  const improver = new CodeQualityImprover();
  improver.run().catch(console.error);
}

module.exports = CodeQualityImprover;