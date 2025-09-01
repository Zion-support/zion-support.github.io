#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🛡️ Starting error prevention monitor...');

class ErrorPreventionMonitor {
  constructor() {
    this.preventions = [];
    this.stats = {
      totalIssues: 0,
      preventedIssues: 0,
      failedPreventions: 0,
      filesProcessed: 0
    };
  }

  async run() {
    try {
      console.log('🔍 Monitoring for potential errors...');
      
      // Monitor for potential issues
      const issues = await this.monitorForIssues();
      this.stats.totalIssues = issues.length;
      
      console.log(`📊 Found ${issues.length} potential issues`);
      
      // Apply preventions for each issue
      for (const issue of issues) {
        try {
          const preventionResult = await this.applyPrevention(issue);
          if (preventionResult.success) {
            this.preventions.push(preventionResult);
            this.stats.preventedIssues++;
            console.log(`✅ Prevented: ${issue.message}`);
          } else {
            this.stats.failedPreventions++;
            console.log(`⚠️ Could not prevent: ${issue.message}`);
          }
        } catch (error) {
          console.error(`❌ Error applying prevention: ${error.message}`);
          this.stats.failedPreventions++;
        }
      }
      
      // Generate report
      this.generateReport();
      
      console.log(`✅ Error prevention monitor completed. Prevented ${this.stats.preventedIssues}/${this.stats.totalIssues} issues`);
      
    } catch (error) {
      console.error('❌ Error prevention monitor failed:', error.message);
    }
  }

  async monitorForIssues() {
    const issues = [];
    
    // Check for common potential issues
    issues.push(...await this.checkForUnusedImports());
    issues.push(...await this.checkForConsoleStatements());
    issues.push(...await this.checkForHardcodedValues());
    issues.push(...await this.checkForMissingErrorHandling());
    
    return issues;
  }

  async checkForUnusedImports() {
    const issues = [];
    const filePatterns = ['src/**/*.{js,jsx,ts,tsx}'];
    
    for (const pattern of filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (line.includes('import ') && !this.isImportUsed(line, content)) {
              issues.push({
                file: file,
                line: index + 1,
                column: 0,
                message: 'Unused import detected',
                type: 'unused-import'
              });
            }
          });
        } catch (error) {
          console.warn(`⚠️ Could not read file: ${file}`);
        }
      }
    }
    
    return issues;
  }

  isImportUsed(importLine, content) {
    const match = importLine.match(/import\s+.*?from\s+['"]([^'"]+)['"]/);
    if (match) {
      const moduleName = match[1];
      // Check if the module is used in the content
      return content.includes(moduleName);
    }
    return true; // Assume it's used if we can't determine
  }

  async checkForConsoleStatements() {
    const issues = [];
    const filePatterns = ['src/**/*.{js,jsx,ts,tsx}'];
    
    for (const pattern of filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (line.includes('console.') && !line.includes('//')) {
              issues.push({
                file: file,
                line: index + 1,
                column: 0,
                message: 'Console statement detected in production code',
                type: 'console-statement'
              });
            }
          });
        } catch (error) {
          console.warn(`⚠️ Could not read file: ${file}`);
        }
      }
    }
    
    return issues;
  }

  async checkForHardcodedValues() {
    const issues = [];
    const filePatterns = ['src/**/*.{js,jsx,ts,tsx}'];
    
    for (const pattern of filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (this.hasHardcodedValue(line)) {
              issues.push({
                file: file,
                line: index + 1,
                column: 0,
                message: 'Hardcoded value detected',
                type: 'hardcoded-value'
              });
            }
          });
        } catch (error) {
          console.warn(`⚠️ Could not read file: ${file}`);
        }
      }
    }
    
    return issues;
  }

  hasHardcodedValue(line) {
    // Check for common hardcoded values
    const hardcodedPatterns = [
      /localhost:\d+/,
      /127\.0\.0\.1/,
      /api\.example\.com/,
      /password.*=.*['"][^'"]{8,}['"]/,
      /secret.*=.*['"][^'"]{8,}['"]/
    ];
    
    return hardcodedPatterns.some(pattern => pattern.test(line));
  }

  async checkForMissingErrorHandling() {
    const issues = [];
    const filePatterns = ['src/**/*.{js,jsx,ts,tsx}'];
    
    for (const pattern of filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (this.hasAsyncOperationWithoutErrorHandling(line, content)) {
              issues.push({
                file: file,
                line: index + 1,
                column: 0,
                message: 'Async operation without error handling detected',
                type: 'missing-error-handling'
              });
            }
          });
        } catch (error) {
          console.warn(`⚠️ Could not read file: ${file}`);
        }
      }
    }
    
    return issues;
  }

  hasAsyncOperationWithoutErrorHandling(line, content) {
    // Check for async operations without try-catch
    const asyncPatterns = [
      /fetch\(/,
      /axios\./,
      /\.then\(/,
      /await\s+/
    ];
    
    const hasAsyncOp = asyncPatterns.some(pattern => pattern.test(line));
    const hasErrorHandling = content.includes('try {') || content.includes('.catch(');
    
    return hasAsyncOp && !hasErrorHandling;
  }

  async applyPrevention(issue) {
    const { file, line, column, message, type } = issue;
    
    try {
      switch (type) {
        case 'unused-import':
          return await this.preventUnusedImport(issue);
        case 'console-statement':
          return await this.preventConsoleStatement(issue);
        case 'hardcoded-value':
          return await this.preventHardcodedValue(issue);
        case 'missing-error-handling':
          return await this.preventMissingErrorHandling(issue);
        default:
          return { success: false, reason: 'Unknown issue type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async preventUnusedImport(issue) {
    const { file, line } = issue;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('import ') && !this.isImportUsed(currentLine, content)) {
        // Comment out unused import
        lines[line - 1] = '// ' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unused-import', 
          action: 'Commented out unused import',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not prevent unused import' };
  }

  async preventConsoleStatement(issue) {
    const { file, line } = issue;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('console.') && !currentLine.includes('//')) {
        // Comment out console statement
        lines[line - 1] = '// ' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'console-statement', 
          action: 'Commented out console statement',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not prevent console statement' };
  }

  async preventHardcodedValue(issue) {
    const { file, line } = issue;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (this.hasHardcodedValue(currentLine)) {
        // Add TODO comment
        lines[line - 1] = currentLine + ' // TODO: Replace with environment variable';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'hardcoded-value', 
          action: 'Added TODO comment for hardcoded value',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not prevent hardcoded value' };
  }

  async preventMissingErrorHandling(issue) {
    const { file, line } = issue;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (this.hasAsyncOperationWithoutErrorHandling(currentLine, content)) {
        // Add TODO comment
        lines[line - 1] = currentLine + ' // TODO: Add error handling';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'missing-error-handling', 
          action: 'Added TODO comment for error handling',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not prevent missing error handling' };
  }

  glob(pattern) {
    const glob = require('glob');
    return glob.sync(pattern, { 
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
      absolute: true 
    });
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      preventions: this.preventions,
      summary: {
        totalIssues: this.stats.totalIssues,
        preventedIssues: this.stats.preventedIssues,
        failedPreventions: this.stats.failedPreventions,
        successRate: this.stats.totalIssues > 0 ? 
          (this.stats.preventedIssues / this.stats.totalIssues * 100).toFixed(2) + '%' : '0%'
      }
    };

    const reportPath = path.join(process.cwd(), 'error-prevention-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Error prevention monitor report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const monitor = new ErrorPreventionMonitor();
  
  try {
    await monitor.run();
    
    // Exit with appropriate code
    process.exit(monitor.stats.failedPreventions > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Error prevention monitor failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { ErrorPreventionMonitor };