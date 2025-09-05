#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/code-quality-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/code-quality-report.json');
    this.lastReport = null;
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      
      const analysis = {
        file: filePath,
        size: stats.size,
        lines: content.split('\n').length,
        issues: []
      };

      // Check for common code quality issues
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        const lineNum = index + 1;
        
        // Trailing spaces
        if (line.match(/[ \t]+$/)) {
          analysis.issues.push({
            line: lineNum,
            type: 'trailing-whitespace',
            severity: 'warning',
            message: 'Trailing whitespace detected'
          });
        }
        
        // Long lines (over 120 characters)
        if (line.length > 120) {
          analysis.issues.push({
            line: lineNum,
            type: 'line-length',
            severity: 'warning',
            message: `Line too long (${line.length} characters)`
          });
        }
        
        // TODO comments
        if (line.match(/\/\/\s*TODO/i)) {
          analysis.issues.push({
            line: lineNum,
            type: 'todo',
            severity: 'info',
            message: 'TODO comment found'
          });
        }
        
        // FIXME comments
        if (line.match(/\/\/\s*FIXME/i)) {
          analysis.issues.push({
            line: lineNum,
            type: 'fixme',
            severity: 'warning',
            message: 'FIXME comment found'
          });
        }
      });

      return analysis;
    } catch (error) {
      this.log(`Error analyzing file ${filePath}: ${error.message}`);
      return null;
    }
  }

  async scanProject() {
    const results = {
      timestamp: new Date().toISOString(),
      totalFiles: 0,
      totalIssues: 0,
      issuesByType: {},
      files: []
    };

    try {
      // Scan common source directories
      const scanDirs = ['src', 'scripts', 'pages', 'components'];
      
      for (const dir of scanDirs) {
        if (fs.existsSync(dir)) {
          const files = this.getFilesRecursively(dir, ['.js', '.jsx', '.ts', '.tsx']);
          
          for (const file of files) {
            results.totalFiles++;
            const analysis = await this.analyzeFile(file);
            
            if (analysis) {
              results.files.push(analysis);
              results.totalIssues += analysis.issues.length;
              
              // Count issues by type
              analysis.issues.forEach(issue => {
                if (!results.issuesByType[issue.type]) {
                  results.issuesByType[issue.type] = 0;
                }
                results.issuesByType[issue.type]++;
              });
            }
          }
        }
      }

      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(results, null, 2));
      
      this.log(`Code quality scan completed: ${results.totalFiles} files, ${results.totalIssues} issues found`);
      
      return results;
    } catch (error) {
      this.log(`Error during project scan: ${error.message}`);
      throw error;
    }
  }

  getFilesRecursively(dir, extensions) {
    let files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files = files.concat(this.getFilesRecursively(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dir}: ${error.message}`);
    }
    
    return files;
  }

  async runLinting() {
    try {
      this.log('Running ESLint...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('ESLint completed successfully');
      return true;
    } catch (error) {
      this.log(`ESLint failed: ${error.message}`);
      return false;
    }
  }

  async runTypeChecking() {
    try {
      this.log('Running TypeScript type checking...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('Type checking completed successfully');
      return true;
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`);
      return false;
    }
  }

  async runTests() {
    try {
      this.log('Running tests...');
      execSync('npm test', { stdio: 'pipe' });
      this.log('Tests completed successfully');
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      quality: {
        linting: await this.runLinting(),
        typeChecking: await this.runTypeChecking(),
        testing: await this.runTests()
      },
      scan: await this.scanProject()
    };

    const reportPath = path.join(this.projectRoot, 'logs/pm2/quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Quality report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('Code Quality Monitor started');
    
    try {
      const report = await this.generateReport();
      
      // Check if quality threshold is met
      const qualityThreshold = parseInt(process.env.QUALITY_THRESHOLD || '80');
      const qualityScore = this.calculateQualityScore(report);
      
      if (qualityScore < qualityThreshold) {
        this.log(`Quality score ${qualityScore}% is below threshold ${qualityThreshold}%`);
        
        if (process.env.AUTO_FIX_CRITICAL === 'true') {
          this.log('Attempting to fix critical issues...');
          await this.attemptAutoFix();
        }
      } else {
        this.log(`Quality score ${qualityScore}% meets threshold ${qualityThreshold}%`);
      }
      
    } catch (error) {
      this.log(`Code Quality Monitor error: ${error.message}`);
      process.exit(1);
    }
  }

  calculateQualityScore(report) {
    let score = 100;
    
    // Deduct points for failed checks
    if (!report.quality.linting) score -= 20;
    if (!report.quality.typeChecking) score -= 30;
    if (!report.quality.testing) score -= 20;
    
    // Deduct points for issues
    const issuePenalty = Math.min(report.scan.totalIssues * 2, 30);
    score -= issuePenalty;
    
    return Math.max(0, score);
  }

  async attemptAutoFix() {
    try {
      this.log('Running auto-fix commands...');
      
      // Try to fix linting issues
      try {
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.log('Lint fixes applied');
      } catch (error) {
        this.log('Lint auto-fix failed');
      }
      
      // Try to fix TypeScript issues
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        this.log('TypeScript issues resolved');
      } catch (error) {
        this.log('TypeScript auto-fix failed');
      }
      
    } catch (error) {
      this.log(`Auto-fix attempt failed: ${error.message}`);
    }
  }
}

// Start the monitor if this script is run directly
if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.start().catch(error => {
    console.error('Code Quality Monitor failed:', error.message);
    process.exit(1);
  });
}

module.exports = CodeQualityMonitor;