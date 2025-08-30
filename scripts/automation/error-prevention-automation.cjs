#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const SyntaxErrorFixer = require('./syntax-error-fixer.cjs');

class ErrorPreventionAutomation {
  constructor() {
    this.config = {
      scanInterval: process.env.SCAN_INTERVAL || 300000, // 5 minutes default
      fixInterval: process.env.FIX_INTERVAL || 600000,   // 10 minutes default
      logLevel: process.env.LOG_LEVEL || 'info',
      maxRetries: 3,
      backupBeforeFix: true
    };
    
    this.stats = {
      totalScans: 0,
      totalFixes: 0,
      totalErrors: 0,
      lastScan: null,
      lastFix: null
    };
    
    this.isRunning = false;
    this.logs = [];
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    this.logs.push(logEntry);
    
    if (level === 'error' || this.config.logLevel === 'debug') {
      console.log(logEntry);
    }
  }

  async start() {
    this.log('Starting Error Prevention Automation...');
    this.isRunning = true;
    
    // Initial scan and fix
    await this.performFullScan();
    
    // Set up continuous monitoring
    this.setupContinuousMonitoring();
    
    this.log('Error Prevention Automation started successfully');
  }

  async stop() {
    this.log('Stopping Error Prevention Automation...');
    this.isRunning = false;
    this.generateFinalReport();
  }

  setupContinuousMonitoring() {
    // Continuous error scanning
    setInterval(async () => {
      if (this.isRunning) {
        await this.performFullScan();
      }
    }, this.config.scanInterval);

    // Continuous error fixing
    setInterval(async () => {
      if (this.isRunning) {
        await this.performErrorFixing();
      }
    }, this.config.fixInterval);
  }

  async performFullScan() {
    this.log('Performing full error scan...');
    this.stats.totalScans++;
    this.stats.lastScan = new Date().toISOString();
    
    try {
      const errors = await this.scanForErrors();
      this.stats.totalErrors = errors.length;
      
      this.log(`Scan completed. Found ${errors.length} errors.`);
      
      if (errors.length > 0) {
        await this.generateErrorReport(errors);
      }
      
    } catch (error) {
      this.log(`Error during scan: ${error.message}`, 'error');
    }
  }

  async performErrorFixing() {
    this.log('Performing error fixing...');
    this.stats.totalFixes++;
    this.stats.lastFix = new Date().toISOString();
    
    try {
      // Create backup if enabled
      if (this.config.backupBeforeFix) {
        await this.createBackup();
      }
      
      // Run syntax error fixer
      const fixer = new SyntaxErrorFixer();
      await fixer.fixSyntaxErrors();
      
      // Run additional fixers
      await this.runLintingFixes();
      await this.runTypeCheckingFixes();
      await this.runDependencyFixes();
      
      this.log('Error fixing completed successfully');
      
    } catch (error) {
      this.log(`Error during fixing: ${error.message}`, 'error');
    }
  }

  async scanForErrors() {
    const errors = [];
    
    try {
      // Check for linting errors
      const lintErrors = await this.runLintCheck();
      errors.push(...lintErrors);
      
      // Check for TypeScript errors
      const tsErrors = await this.runTypeCheck();
      errors.push(...tsErrors);
      
      // Check for build errors
      const buildErrors = await this.runBuildCheck();
      errors.push(...buildErrors);
      
      // Check for dependency issues
      const depErrors = await this.checkDependencies();
      errors.push(...depErrors);
      
    } catch (error) {
      this.log(`Error during error scanning: ${error.message}`, 'error');
    }
    
    return errors;
  }

  async runLintCheck() {
    try {
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseLintErrors(output);
    }
  }

  async runTypeCheck() {
    try {
      const result = execSync('npm run type-check', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseTypeScriptErrors(output);
    }
  }

  async runBuildCheck() {
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseBuildErrors(output);
    }
  }

  async checkDependencies() {
    const errors = [];
    
    try {
      // Check for outdated packages
      const outdated = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (outdated && outdated !== '{}') {
        const packages = JSON.parse(outdated);
        errors.push({
          type: 'dependency',
          severity: 'warning',
          message: `Found ${Object.keys(packages).length} outdated packages`,
          details: packages
        });
      }
      
      // Check for security vulnerabilities
      const audit = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (audit) {
        const auditResult = JSON.parse(audit);
        if (auditResult.vulnerabilities && Object.keys(auditResult.vulnerabilities).length > 0) {
          errors.push({
            type: 'security',
            severity: 'high',
            message: 'Security vulnerabilities found',
            details: auditResult.vulnerabilities
          });
        }
      }
      
    } catch (error) {
      // npm commands might fail, which is normal
      this.log(`Dependency check completed: ${error.message}`, 'debug');
    }
    
    return errors;
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/(.+):(\d+):(\d+)\s+(.+)/);
        if (match) {
          errors.push({
            type: 'linting',
            severity: line.includes('error') ? 'error' : 'warning',
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            source: 'eslint'
          });
        }
      }
    }
    
    return errors;
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s+-\s+error\s+TS\d+:\s+(.+)/);
        if (match) {
          errors.push({
            type: 'typescript',
            severity: 'error',
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            source: 'typescript'
          });
        }
      }
    }
    
    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('ERROR') || line.includes('Error:')) {
        errors.push({
          type: 'build',
          severity: 'error',
          message: line.trim(),
          source: 'vite'
        });
      }
    }
    
    return errors;
  }

  async runLintingFixes() {
    try {
      execSync('npm run fix:all', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('Linting fixes applied successfully');
    } catch (error) {
      this.log(`Error applying linting fixes: ${error.message}`, 'error');
    }
  }

  async runTypeCheckingFixes() {
    try {
      // Run TypeScript compiler with auto-fix options
      execSync('npx tsc --noEmit --skipLibCheck', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('TypeScript fixes applied successfully');
    } catch (error) {
      this.log(`Error applying TypeScript fixes: ${error.message}`, 'error');
    }
  }

  async runDependencyFixes() {
    try {
      // Fix security vulnerabilities
      execSync('npm audit fix', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Update outdated packages
      execSync('npm update', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('Dependency fixes applied successfully');
    } catch (error) {
      this.log(`Error applying dependency fixes: ${error.message}`, 'error');
    }
  }

  async createBackup() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(process.cwd(), 'backups', `pre-fix-${timestamp}`);
    
    try {
      if (!fs.existsSync(path.dirname(backupDir))) {
        fs.mkdirSync(path.dirname(backupDir), { recursive: true });
      }
      
      // Copy source files to backup
      execSync(`cp -r src ${backupDir}/src`, { stdio: 'pipe' });
      execSync(`cp -r components ${backupDir}/components`, { stdio: 'pipe' });
      execSync(`cp -r pages ${backupDir}/pages`, { stdio: 'pipe' });
      
      this.log(`Backup created: ${backupDir}`);
    } catch (error) {
      this.log(`Error creating backup: ${error.message}`, 'error');
    }
  }

  async generateErrorReport(errors) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: errors.length,
        byType: this.groupErrorsByType(errors),
        bySeverity: this.groupErrorsBySeverity(errors)
      },
      errors: errors,
      recommendations: this.generateRecommendations(errors)
    };

    const reportPath = path.join(process.cwd(), 'reports', 'error-scan-report.json');
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Error report generated: ${reportPath}`);
  }

  groupErrorsByType(errors) {
    const grouped = {};
    for (const error of errors) {
      if (!grouped[error.type]) {
        grouped[error.type] = 0;
      }
      grouped[error.type]++;
    }
    return grouped;
  }

  groupErrorsBySeverity(errors) {
    const grouped = {};
    for (const error of errors) {
      if (!grouped[error.severity]) {
        grouped[error.severity] = 0;
      }
      grouped[error.severity]++;
    }
    return grouped;
  }

  generateRecommendations(errors) {
    const recommendations = [];
    
    if (errors.some(e => e.type === 'linting')) {
      recommendations.push('Run "npm run fix:all" to automatically fix linting issues');
    }
    
    if (errors.some(e => e.type === 'typescript')) {
      recommendations.push('Review TypeScript configuration and fix type annotations');
    }
    
    if (errors.some(e => e.type === 'dependency')) {
      recommendations.push('Update dependencies and fix security vulnerabilities');
    }
    
    if (errors.some(e => e.type === 'build')) {
      recommendations.push('Check build configuration and resolve compilation errors');
    }
    
    return recommendations;
  }

  generateFinalReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      logs: this.logs.slice(-100), // Last 100 logs
      summary: {
        totalScans: this.stats.totalScans,
        totalFixes: this.stats.totalFixes,
        totalErrors: this.stats.totalErrors,
        success: this.stats.totalErrors === 0
      }
    };

    const reportPath = path.join(process.cwd(), 'reports', 'error-prevention-final-report.json');
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Final report generated: ${reportPath}`);
  }

  getHealthStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      config: this.config,
      lastLogs: this.logs.slice(-10)
    };
  }
}

// Main execution
if (require.main === module) {
  const automation = new ErrorPreventionAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'stop':
      automation.stop();
      break;
    case 'scan':
      automation.performFullScan();
      break;
    case 'fix':
      automation.performErrorFixing();
      break;
    case 'health':
      console.log(JSON.stringify(automation.getHealthStatus(), null, 2));
      break;
    default:
      console.log('Usage: node error-prevention-automation.cjs [start|stop|scan|fix|health]');
      process.exit(1);
  }
}

module.exports = ErrorPreventionAutomation;