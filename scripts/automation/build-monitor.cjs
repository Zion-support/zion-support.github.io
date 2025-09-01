#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class BuildMonitor {
  constructor() {
    this.projectRoot = '/workspace';
    this.logDir = path.join(this.projectRoot, 'logs');
    this.checkInterval = 10 * 60 * 1000; // 10 minutes
    this.isRunning = false;
    
    this.ensureDirectories();
    this.setupSignalHandlers();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  setupSignalHandlers() {
    process.on('SIGTERM', () => this.shutdown());
    process.on('SIGINT', () => this.shutdown());
  }

  log(level, ...args) {
    const timestamp = new Date().toISOString();
    const message = `[${timestamp}] [${level.toUpperCase()}] ${args.join(' ')}`;
    console.log(message);
    
    const logFile = path.join(this.logDir, 'build-monitor.log');
    fs.appendFileSync(logFile, message + '\\n');
  }

  async runBuild() {
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      exec('npm run build', { 
        cwd: this.projectRoot, 
        timeout: 300000, // 5 minutes timeout
        maxBuffer: 1024 * 1024 * 10 // 10MB buffer
      }, (error, stdout, stderr) => {
        const endTime = Date.now();
        const duration = Math.round((endTime - startTime) / 1000);
        
        resolve({
          success: error === null,
          duration,
          output: stdout,
          error: stderr,
          errorMessage: error ? error.message : null
        });
      });
    });
  }

  async runTypeCheck() {
    return new Promise((resolve) => {
      exec('npm run type-check', { cwd: this.projectRoot }, (error, stdout, stderr) => {
        const errorCount = stderr ? (stderr.match(/error TS/g) || []).length : 0;
        
        resolve({
          success: error === null,
          errorCount,
          output: stdout,
          errors: stderr
        });
      });
    });
  }

  async runLintCheck() {
    return new Promise((resolve) => {
      exec('npm run lint', { cwd: this.projectRoot }, (error, stdout, stderr) => {
        const output = stdout + stderr;
        const errorCount = output ? (output.match(/error/g) || []).length : 0;
        const warningCount = output ? (output.match(/warning/g) || []).length : 0;
        
        resolve({
          success: error === null,
          errorCount,
          warningCount,
          output
        });
      });
    });
  }

  async checkDiskSpace() {
    return new Promise((resolve) => {
      exec('df -h .', { cwd: this.projectRoot }, (error, stdout) => {
        if (error) {
          resolve({ available: 'unknown', percentage: 0 });
          return;
        }
        
        const lines = stdout.split('\\n');
        const dataLine = lines[1];
        if (dataLine) {
          const parts = dataLine.split(/\\s+/);
          const available = parts[3];
          const usage = parts[4];
          const percentage = parseInt(usage.replace('%', ''));
          
          resolve({ available, percentage });
        } else {
          resolve({ available: 'unknown', percentage: 0 });
        }
      });
    });
  }

  async measureBuildSize() {
    const distPath = path.join(this.projectRoot, 'dist');
    const buildPath = path.join(this.projectRoot, 'build');
    
    const checkPath = fs.existsSync(distPath) ? distPath : 
                     fs.existsSync(buildPath) ? buildPath : null;
    
    if (!checkPath) {
      return { size: 0, files: 0 };
    }
    
    return new Promise((resolve) => {
      exec(`du -sh ${checkPath} && find ${checkPath} -type f | wc -l`, (error, stdout) => {
        if (error) {
          resolve({ size: 'unknown', files: 0 });
          return;
        }
        
        const lines = stdout.split('\\n');
        const size = lines[0] ? lines[0].split('\\t')[0] : 'unknown';
        const files = lines[1] ? parseInt(lines[1]) : 0;
        
        resolve({ size, files });
      });
    });
  }

  analyzeErrors(lintResult, typeResult, buildResult) {
    const issues = [];
    
    if (!buildResult.success) {
      issues.push({
        severity: 'critical',
        type: 'build_failure',
        message: 'Build is failing',
        details: buildResult.errorMessage
      });
    }
    
    if (typeResult.errorCount > 0) {
      issues.push({
        severity: typeResult.errorCount > 50 ? 'high' : 'medium',
        type: 'type_errors',
        message: `${typeResult.errorCount} TypeScript errors`,
        details: typeResult.errors
      });
    }
    
    if (lintResult.errorCount > 100) {
      issues.push({
        severity: 'high',
        type: 'lint_errors',
        message: `${lintResult.errorCount} lint errors`,
        details: 'Too many lint errors affecting code quality'
      });
    }
    
    return issues;
  }

  generateRecommendations(issues, buildSize, diskSpace) {
    const recommendations = [];
    
    // Critical build issues
    const criticalIssues = issues.filter(i => i.severity === 'critical');
    if (criticalIssues.length > 0) {
      recommendations.push({
        priority: 'critical',
        action: 'fix_build_errors',
        description: 'Build is failing - immediate attention required',
        commands: ['npm run syntax-fixer', 'npm run dependency-manager']
      });
    }
    
    // Type errors
    const typeIssues = issues.filter(i => i.type === 'type_errors');
    if (typeIssues.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'fix_type_errors',
        description: `Fix TypeScript errors to improve code quality`,
        commands: ['npm run type-check']
      });
    }
    
    // Lint errors
    const lintIssues = issues.filter(i => i.type === 'lint_errors');
    if (lintIssues.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'fix_lint_errors',
        description: 'Fix lint errors to improve code quality',
        commands: ['npm run lint -- --fix']
      });
    }
    
    // Disk space issues
    if (diskSpace.percentage > 85) {
      recommendations.push({
        priority: 'high',
        action: 'clean_disk_space',
        description: `Disk usage is ${diskSpace.percentage}% - clean up space`,
        commands: ['npm run clean', 'rm -rf node_modules/.cache']
      });
    }
    
    // Build optimization
    if (buildSize.size && typeof buildSize.size === 'string' && buildSize.size.includes('M')) {
      const sizeNum = parseFloat(buildSize.size);
      if (sizeNum > 50) {
        recommendations.push({
          priority: 'low',
          action: 'optimize_build_size',
          description: `Build size is ${buildSize.size} - consider optimization`,
          commands: ['npm run analyze', 'npm run optimize']
        });
      }
    }
    
    return recommendations;
  }

  async triggerAutomaticFixes(recommendations) {
    for (const rec of recommendations) {
      if (rec.priority === 'critical' || rec.priority === 'high') {
        this.log('info', `Triggering automatic fix: ${rec.action}`);
        
        for (const command of rec.commands || []) {
          if (command.startsWith('npm run syntax-fixer')) {
            // Trigger PM2 restart
            exec('pm2 restart syntax-fixer', { cwd: this.projectRoot }, (error) => {
              if (error) {
                this.log('error', 'Failed to trigger syntax fixer:', error.message);
              } else {
                this.log('info', 'Syntax fixer triggered');
              }
            });
          } else if (command.startsWith('npm run dependency-manager')) {
            // Trigger PM2 restart
            exec('pm2 restart dependency-manager', { cwd: this.projectRoot }, (error) => {
              if (error) {
                this.log('error', 'Failed to trigger dependency manager:', error.message);
              } else {
                this.log('info', 'Dependency manager triggered');
              }
            });
          } else if (command === 'npm run lint -- --fix') {
            // Run lint fix directly
            exec(command, { cwd: this.projectRoot }, (error, stdout) => {
              if (error) {
                this.log('error', 'Lint fix failed:', error.message);
              } else {
                this.log('info', 'Lint fixes applied');
              }
            });
          }
        }
      }
    }
  }

  async performBuildCheck() {
    try {
      this.log('info', 'Starting build health check...');
      
      const [lintResult, typeResult, diskSpace] = await Promise.all([
        this.runLintCheck(),
        this.runTypeCheck(),
        this.checkDiskSpace()
      ]);
      
      this.log('info', `Lint: ${lintResult.errorCount} errors, ${lintResult.warningCount} warnings`);
      this.log('info', `TypeScript: ${typeResult.errorCount} errors`);
      this.log('info', `Disk usage: ${diskSpace.percentage}%`);
      
      // Only run build if there are no critical errors
      let buildResult = { success: false, duration: 0, output: '', error: 'Skipped due to errors' };
      if (lintResult.errorCount < 50 && typeResult.errorCount < 20) {
        this.log('info', 'Running build check...');
        buildResult = await this.runBuild();
        this.log('info', `Build ${buildResult.success ? 'succeeded' : 'failed'} in ${buildResult.duration}s`);
      } else {
        this.log('warn', 'Skipping build due to too many errors');
      }
      
      const buildSize = buildResult.success ? await this.measureBuildSize() : { size: 0, files: 0 };
      const issues = this.analyzeErrors(lintResult, typeResult, buildResult);
      const recommendations = this.generateRecommendations(issues, buildSize, diskSpace);
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          buildSuccess: buildResult.success,
          buildDuration: buildResult.duration,
          lintErrors: lintResult.errorCount,
          lintWarnings: lintResult.warningCount,
          typeErrors: typeResult.errorCount,
          diskUsage: diskSpace.percentage,
          buildSize: buildSize.size,
          totalIssues: issues.length
        },
        details: {
          lint: lintResult,
          typeCheck: typeResult,
          build: buildResult,
          buildSize,
          diskSpace,
          issues,
          recommendations
        }
      };
      
      // Save report
      const reportFile = path.join(this.projectRoot, 'build-monitor-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      // Trigger automatic fixes if needed
      await this.triggerAutomaticFixes(recommendations);
      
      return report;
      
    } catch (error) {
      this.log('error', 'Build check failed:', error.message);
      throw error;
    }
  }

  async start() {
    this.log('info', 'Build Monitor starting...');
    this.isRunning = true;
    
    // Initial build check
    await this.performBuildCheck();
    
    // Set up periodic checks
    this.buildCheckInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.performBuildCheck();
      }
    }, this.checkInterval);
    
    this.log('info', `Build Monitor started. Build checks every ${this.checkInterval / 1000 / 60} minutes.`);
  }

  shutdown() {
    this.log('info', 'Build Monitor shutting down...');
    this.isRunning = false;
    
    if (this.buildCheckInterval) {
      clearInterval(this.buildCheckInterval);
    }
    
    process.exit(0);
  }
}

// Start the monitor
const monitor = new BuildMonitor();
monitor.start().catch(error => {
  console.error('Failed to start Build Monitor:', error);
  process.exit(1);
});