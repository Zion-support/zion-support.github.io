#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'error-monitor.log');
    this.statusFile = path.join(this.projectRoot, 'error-reports', 'current-error-status.json');
    this.startTime = Date.now();
    this.errorCounts = {
      mergeConflicts: 0,
      typescriptErrors: 0,
      eslintErrors: 0,
      buildErrors: 0,
      dependencyIssues: 0,
      totalErrors: 0
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async checkMergeConflicts() {
    try {
      const conflictedFiles = [];
      this.scanDirectoryForMergeConflicts(this.projectRoot, conflictedFiles);
      this.errorCounts.mergeConflicts = conflictedFiles.length;
      return conflictedFiles;
    } catch (error) {
      this.log(`Error checking merge conflicts: ${error.message}`);
      return [];
    }
  }

  hasMergeConflictMarkers(content) {
    const markers = [
    ];
    
    return markers.some(marker => content.includes(marker));
  }

  scanDirectoryForMergeConflicts(dir, files, depth = 0) {
    if (depth > 10) return;
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'logs', 'error-reports'].includes(item)) {
            this.scanDirectoryForMergeConflicts(fullPath, files, depth + 1);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.txt', '.yml', '.yaml', '.css', '.scss', '.html'].includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.hasMergeConflictMarkers(content)) {
                const relativePath = path.relative(this.projectRoot, fullPath);
                if (!files.includes(relativePath)) {
                  files.push(relativePath);
                }
              }
            } catch (error) {
              // Skip files that can't be read as text
            }
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`);
    }
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      const errors = this.parseTypeScriptOutput(result);
      this.errorCounts.typescriptErrors = errors.length;
      return errors;
    } catch (error) {
      const stderr = error.stderr || '';
      const errors = this.parseTypeScriptOutput(stderr);
      this.errorCounts.typescriptErrors = errors.length;
      return errors;
    }
  }

  parseTypeScriptOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS(\d+): (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            code: match[4],
            message: match[5].trim()
          });
        }
      }
    }
    
    return errors;
  }

  async checkESLintErrors() {
    try {
      const result = execSync('npx eslint . --format=json --ext .js,.jsx,.ts,.tsx', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      const eslintResults = JSON.parse(result);
      let totalErrors = 0;
      
      for (const fileResult of eslintResults) {
        totalErrors += (fileResult.messages || []).length;
      }
      
      this.errorCounts.eslintErrors = totalErrors;
      return eslintResults;
    } catch (error) {
      try {
        const eslintResults = JSON.parse(error.stdout || '[]');
        let totalErrors = 0;
        
        for (const fileResult of eslintResults) {
          totalErrors += (fileResult.messages || []).length;
        }
        
        this.errorCounts.eslintErrors = totalErrors;
        return eslintResults;
      } catch (parseError) {
        this.log(`Error parsing ESLint output: ${parseError.message}`);
        return [];
      }
    }
  }

  async checkBuildStatus() {
    try {
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.errorCounts.buildErrors = 0;
      return { status: 'success' };
    } catch (error) {
      this.errorCounts.buildErrors = 1;
      return { status: 'failed', error: error.message };
    }
  }

  async checkDependencies() {
    try {
      const result = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      const audit = JSON.parse(result);
      const vulnerabilities = audit.metadata?.vulnerabilities || {};
      const totalVulnerabilities = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      
      this.errorCounts.dependencyIssues = totalVulnerabilities;
      return audit;
    } catch (error) {
      this.log(`Error checking dependencies: ${error.message}`);
      return {};
    }
  }

  updateErrorCounts() {
    this.errorCounts.totalErrors = 
      this.errorCounts.mergeConflicts +
      this.errorCounts.typescriptErrors +
      this.errorCounts.eslintErrors +
      this.errorCounts.buildErrors +
      this.errorCounts.dependencyIssues;
  }

  generateStatusReport() {
    const duration = Date.now() - this.startTime;
    
    const status = {
      timestamp: new Date().toISOString(),
      uptime: `${Math.floor(duration / 1000)}s`,
      errorCounts: this.errorCounts,
      status: this.errorCounts.totalErrors === 0 ? 'CLEAN' : 'HAS_ERRORS',
      severity: this.getSeverityLevel(),
      recommendations: this.getRecommendations()
    };

    const reportsDir = path.dirname(this.statusFile);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));
    return status;
  }

  getSeverityLevel() {
    const total = this.errorCounts.totalErrors;
    
    if (total === 0) return 'NONE';
    if (total <= 10) return 'LOW';
    if (total <= 50) return 'MEDIUM';
    if (total <= 100) return 'HIGH';
    return 'CRITICAL';
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.errorCounts.mergeConflicts > 0) {
      recommendations.push('Resolve merge conflicts immediately');
    }
    
    if (this.errorCounts.typescriptErrors > 0) {
      recommendations.push('Fix TypeScript compilation errors');
    }
    
    if (this.errorCounts.eslintErrors > 0) {
      recommendations.push('Address ESLint violations');
    }
    
    if (this.errorCounts.buildErrors > 0) {
      recommendations.push('Fix build failures');
    }
    
    if (this.errorCounts.dependencyIssues > 0) {
      recommendations.push('Update vulnerable dependencies');
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Error Monitor...');
    
    try {
      // Check all error types
      await this.checkMergeConflicts();
      await this.checkTypeScriptErrors();
      await this.checkESLintErrors();
      await this.checkBuildStatus();
      await this.checkDependencies();
      
      // Update total error count
      this.updateErrorCounts();
      
      // Generate status report
      const status = this.generateStatusReport();
      
      // Log current status
      this.log(`📊 Current Error Status:`);
      this.log(`   Merge Conflicts: ${this.errorCounts.mergeConflicts}`);
      this.log(`   TypeScript Errors: ${this.errorCounts.typescriptErrors}`);
      this.log(`   ESLint Errors: ${this.errorCounts.eslintErrors}`);
      this.log(`   Build Errors: ${this.errorCounts.buildErrors}`);
      this.log(`   Dependency Issues: ${this.errorCounts.dependencyIssues}`);
      this.log(`   Total Errors: ${this.errorCounts.totalErrors}`);
      this.log(`   Severity: ${status.severity}`);
      
      if (status.recommendations.length > 0) {
        this.log(`💡 Recommendations:`);
        status.recommendations.forEach(rec => this.log(`   - ${rec}`));
      }
      
      this.log(`📊 Status report saved to: ${this.statusFile}`);
      
    } catch (error) {
      this.log(`❌ Error in error monitor: ${error.message}`);
    }
  }
}

// Run the monitor
const monitor = new ErrorMonitor();
monitor.run().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Error Monitor stopped by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Error Monitor stopped by system');
  process.exit(0);
});