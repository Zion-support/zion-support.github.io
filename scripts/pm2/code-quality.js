#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQuality {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/code-quality.log');
    this.ensureLogDirectory();
    this.issues = [];
    this.metrics = {};
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async runESLint() {
    this.log('🔍 Running ESLint...');
    
    try {
      const result = await this.runCommand('npm run lint', 'ESLint check');
      
      if (result) {
        // Parse ESLint output for issues
        const lines = result.split('\n');
        let errorCount = 0;
        let warningCount = 0;
        
        for (const line of lines) {
          if (line.includes('error')) errorCount++;
          if (line.includes('warning')) warningCount++;
        }
        
        this.metrics.eslint = { errors: errorCount, warnings: warningCount };
        this.log(`📊 ESLint results: ${errorCount} errors, ${warningCount} warnings`);
        
        if (errorCount > 0) {
          this.issues.push(`ESLint: ${errorCount} errors found`);
        }
      }
      
      return result;
    } catch (error) {
      this.log(`❌ ESLint failed: ${error.message}`);
      this.issues.push(`ESLint: Failed to run`);
      return null;
    }
  }

  async runTypeScriptCheck() {
    this.log('🔍 Running TypeScript type checking...');
    
    try {
      const result = await this.runCommand('npm run type-check', 'TypeScript type checking');
      
      if (result) {
        this.metrics.typescript = { status: 'passed' };
        this.log('✅ TypeScript type checking passed');
      } else {
        this.metrics.typescript = { status: 'failed' };
        this.issues.push('TypeScript: Type checking failed');
      }
      
      return result;
    } catch (error) {
      this.log(`❌ TypeScript check failed: ${error.message}`);
      this.metrics.typescript = { status: 'failed' };
      this.issues.push(`TypeScript: ${error.message}`);
      return null;
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    
    try {
      const result = await this.runCommand('npm audit --audit-level moderate', 'Security audit');
      
      if (result) {
        // Check for vulnerabilities
        try {
          const auditJson = execSync('npm audit --json', { 
            encoding: 'utf8',
            stdio: 'pipe',
            cwd: path.join(__dirname, '../../')
          });
          
          const audit = JSON.parse(auditJson);
          const vulnerabilityCount = audit.metadata?.vulnerabilities?.total || 0;
          
          this.metrics.security = { vulnerabilities: vulnerabilityCount };
          this.log(`🔒 Security audit completed. Vulnerabilities found: ${vulnerabilityCount}`);
          
          if (vulnerabilityCount > 0) {
            this.issues.push(`Security: ${vulnerabilityCount} vulnerabilities found`);
          }
        } catch (parseError) {
          this.log('⚠️ Could not parse security audit results');
          this.metrics.security = { vulnerabilities: 0 };
        }
      }
      
      return result;
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`);
      this.metrics.security = { vulnerabilities: 0 };
      this.issues.push(`Security: Audit failed`);
      return null;
    }
  }

  async analyzeCodeComplexity() {
    this.log('📊 Analyzing code complexity...');
    
    try {
      const srcPath = path.join(__dirname, '../../src');
      if (!fs.existsSync(srcPath)) {
        this.log('⚠️ Source directory not found');
        return;
      }
      
      const files = this.findFiles(srcPath, ['.js', '.ts', '.tsx']);
      this.log(`📁 Found ${files.length} source files to analyze`);
      
      let totalLines = 0;
      let largeFiles = 0;
      let complexFiles = 0;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          const lineCount = lines.length;
          totalLines += lineCount;
          
          // Check for large files
          if (lineCount > 500) {
            largeFiles++;
            this.log(`⚠️ Large file detected: ${path.relative(srcPath, file)} (${lineCount} lines)`);
          }
          
          // Check for complex files (high cyclomatic complexity indicators)
          const complexityIndicators = [
            /if\s*\(/g,
            /for\s*\(/g,
            /while\s*\(/g,
            /switch\s*\(/g,
            /catch\s*\(/g,
            /\?\s*:/g, // ternary operators
            /\|\||&&/g // logical operators
          ];
          
          let complexityScore = 0;
          for (const pattern of complexityIndicators) {
            const matches = content.match(pattern);
            if (matches) {
              complexityScore += matches.length;
            }
          }
          
          if (complexityScore > 20) {
            complexFiles++;
            this.log(`⚠️ Complex file detected: ${path.relative(srcPath, file)} (complexity score: ${complexityScore})`);
          }
          
        } catch (error) {
          this.log(`⚠️ Error analyzing file ${file}: ${error.message}`);
        }
      }
      
      this.metrics.complexity = {
        totalFiles: files.length,
        totalLines,
        largeFiles,
        complexFiles,
        averageLinesPerFile: Math.round(totalLines / files.length)
      };
      
      this.log(`📊 Code complexity analysis completed`);
      this.log(`  - Total files: ${files.length}`);
      this.log(`  - Total lines: ${totalLines}`);
      this.log(`  - Large files: ${largeFiles}`);
      this.log(`  - Complex files: ${complexFiles}`);
      this.log(`  - Average lines per file: ${Math.round(totalLines / files.length)}`);
      
      if (largeFiles > 0) {
        this.issues.push(`Complexity: ${largeFiles} large files detected`);
      }
      if (complexFiles > 0) {
        this.issues.push(`Complexity: ${complexFiles} complex files detected`);
      }
      
    } catch (error) {
      this.log(`❌ Code complexity analysis failed: ${error.message}`);
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              scanDirectory(fullPath);
            } else if (extensions.some(ext => item.endsWith(ext))) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files we can't access
          }
        }
      } catch (error) {
        // Skip directories we can't access
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  async checkBuildHealth() {
    this.log('🏗️ Checking build health...');
    
    try {
      const result = await this.runCommand('npm run build', 'Build check');
      
      if (result) {
        // Analyze build output
        const distPath = path.join(__dirname, '../../dist');
        if (fs.existsSync(distPath)) {
          const files = fs.readdirSync(distPath, { recursive: true });
          const jsFiles = files.filter(file => file.endsWith('.js'));
          const cssFiles = files.filter(file => file.endsWith('.css'));
          const htmlFiles = files.filter(file => file.endsWith('.html'));
          
          let totalSize = 0;
          for (const file of files) {
            try {
              const filePath = path.join(distPath, file);
              const stats = fs.statSync(filePath);
              totalSize += stats.size;
            } catch (error) {
              // Skip files we can't access
            }
          }
          
          this.metrics.build = {
            status: 'success',
            totalFiles: files.length,
            jsFiles: jsFiles.length,
            cssFiles: cssFiles.length,
            htmlFiles: htmlFiles.length,
            totalSize: Math.round(totalSize / (1024 * 1024) * 100) / 100 // MB
          };
          
          this.log(`📦 Build analysis: ${files.length} files, ${(totalSize / (1024 * 1024)).toFixed(2)} MB total`);
          
          if (totalSize > 10 * 1024 * 1024) { // 10MB
            this.issues.push(`Build: Large build size (${(totalSize / (1024 * 1024)).toFixed(2)} MB)`);
          }
        }
      } else {
        this.metrics.build = { status: 'failed' };
        this.issues.push('Build: Build failed');
      }
      
    } catch (error) {
      this.log(`❌ Build health check failed: ${error.message}`);
      this.metrics.build = { status: 'failed' };
      this.issues.push(`Build: ${error.message}`);
    }
  }

  async generateQualityReport() {
    this.log('📊 Generating code quality report...');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/code-quality-report.md');
      const timestamp = new Date().toISOString();
      
      let report = `# Code Quality Report - ${timestamp}

## Summary
This report was generated automatically by the PM2 Code Quality automation.

## Quality Metrics
`;

      // ESLint metrics
      if (this.metrics.eslint) {
        report += `- **ESLint**: ${this.metrics.eslint.errors} errors, ${this.metrics.eslint.warnings} warnings\n`;
      }
      
      // TypeScript metrics
      if (this.metrics.typescript) {
        report += `- **TypeScript**: ${this.metrics.typescript.status}\n`;
      }
      
      // Security metrics
      if (this.metrics.security) {
        report += `- **Security**: ${this.metrics.security.vulnerabilities} vulnerabilities\n`;
      }
      
      // Complexity metrics
      if (this.metrics.complexity) {
        report += `- **Complexity**: ${this.metrics.complexity.totalFiles} files, ${this.metrics.complexity.totalLines} lines\n`;
        report += `  - Large files: ${this.metrics.complexity.largeFiles}\n`;
        report += `  - Complex files: ${this.metrics.complexity.complexFiles}\n`;
        report += `  - Average lines per file: ${this.metrics.complexity.averageLinesPerFile}\n`;
      }
      
      // Build metrics
      if (this.metrics.build) {
        report += `- **Build**: ${this.metrics.build.status}\n`;
        if (this.metrics.build.status === 'success') {
          report += `  - Total files: ${this.metrics.build.totalFiles}\n`;
          report += `  - JavaScript: ${this.metrics.build.jsFiles}\n`;
          report += `  - CSS: ${this.metrics.build.cssFiles}\n`;
          report += `  - HTML: ${this.metrics.build.htmlFiles}\n`;
          report += `  - Total size: ${this.metrics.build.totalSize} MB\n`;
        }
      }

      report += `
## Issues Found
`;

      if (this.issues.length > 0) {
        for (const issue of this.issues) {
          report += `- ❌ ${issue}\n`;
        }
      } else {
        report += `- ✅ No issues found\n`;
      }

      report += `
## Recommendations
`;

      if (this.issues.length > 0) {
        report += `1. Address all issues listed above
2. Review large and complex files for refactoring opportunities
3. Fix any security vulnerabilities immediately
4. Consider implementing stricter linting rules
`;
      } else {
        report += `1. Code quality is excellent
2. Continue monitoring quality metrics
3. Consider implementing additional quality checks
`;
      }

      report += `
## Next Steps
- Run this automation every 4 hours
- Review and fix any issues found
- Monitor quality metrics over time
- Update automation scripts as needed

---
Generated by PM2 Code Quality Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
      // Also generate JSON report
      const jsonReportPath = path.join(__dirname, '../../logs/code-quality-report.json');
      const jsonReport = {
        timestamp,
        metrics: this.metrics,
        issues: this.issues,
        summary: {
          totalIssues: this.issues.length,
          hasIssues: this.issues.length > 0
        }
      };
      
      fs.writeFileSync(jsonReportPath, JSON.stringify(jsonReport, null, 2));
      this.log(`📄 JSON report generated: ${jsonReportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  async run() {
    this.log('🚀 Starting Code Quality Process');
    
    try {
      // Run all quality checks
      await this.runESLint();
      await this.runTypeScriptCheck();
      await this.runSecurityAudit();
      await this.analyzeCodeComplexity();
      await this.checkBuildHealth();
      
      // Generate report
      await this.generateQualityReport();
      
      // Summary
      this.log(`🎉 Code Quality Process completed`);
      this.log(`📊 Issues found: ${this.issues.length}`);
      
      if (this.issues.length > 0) {
        this.log('⚠️ Some quality issues were found. Please review the report.');
        process.exit(1);
      } else {
        this.log('✅ All quality checks passed!');
      }
      
    } catch (error) {
      this.log(`💥 Code Quality Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const quality = new CodeQuality();
  quality.run();
}

module.exports = CodeQuality;