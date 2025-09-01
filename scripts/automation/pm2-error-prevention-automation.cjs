#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const EnhancedErrorFixer = require('./enhanced-error-fixer.cjs');

class PM2ErrorPreventionAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes default
    this.isRunning = false;
    this.stats = {
      totalRuns: 0,
      totalErrorsFixed: 0,
      lastRun: null,
      startTime: new Date().toISOString()
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [PM2-ERROR-PREVENTION] [${type.toUpperCase()}] ${message}`);
  }

  async start() {
    this.log('Starting PM2 Error Prevention Automation...', 'info');
    
    // Create logs directory if it doesn't exist
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Run initial error fixing
    await this.runErrorPreventionCycle();

    // Set up continuous execution
    setInterval(async () => {
      await this.runErrorPreventionCycle();
    }, this.automationInterval);

    this.log(`PM2 Error Prevention Automation started. Running every ${this.automationInterval / 1000 / 60} minutes.`, 'success');
  }

  async runErrorPreventionCycle() {
    if (this.isRunning) {
      this.log('Previous cycle still running, skipping...', 'warning');
      return;
    }

    this.isRunning = true;
    this.stats.totalRuns++;
    this.stats.lastRun = new Date().toISOString();

    try {
      this.log(`Starting error prevention cycle #${this.stats.totalRuns}`, 'info');

      // 1. Run enhanced error fixer
      await this.runEnhancedErrorFixer();

      // 2. Run TypeScript error monitoring
      await this.runTypeScriptErrorMonitoring();

      // 3. Run ESLint error monitoring
      await this.runESLintErrorMonitoring();

      // 4. Run build error monitoring
      await this.runBuildErrorMonitoring();

      // 5. Run dependency health check
      await this.runDependencyHealthCheck();

      // 6. Run file system health check
      await this.runFileSystemHealthCheck();

      // 7. Generate automation report
      await this.generateAutomationReport();

      this.log(`Error prevention cycle #${this.stats.totalRuns} completed successfully`, 'success');

    } catch (error) {
      this.log(`Error prevention cycle #${this.stats.totalRuns} failed: ${error.message}`, 'error');
      await this.logError(error);
    } finally {
      this.isRunning = false;
    }
  }

  async runEnhancedErrorFixer() {
    this.log('Running enhanced error fixer...', 'info');
    
    try {
      const fixer = new EnhancedErrorFixer();
      await fixer.run();
      
      // Read the report to update stats
      const reportPath = path.join(this.projectRoot, 'enhanced-error-fixer-report.json');
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.stats.totalErrorsFixed += report.errorsFixed || 0;
      }
      
      this.log('Enhanced error fixer completed', 'success');
    } catch (error) {
      this.log(`Enhanced error fixer failed: ${error.message}`, 'error');
    }
  }

  async runTypeScriptErrorMonitoring() {
    this.log('Running TypeScript error monitoring...', 'info');
    
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      if (result.includes('error TS')) {
        const errorCount = (result.match(/error TS/g) || []).length;
        this.log(`TypeScript monitoring found ${errorCount} errors`, 'warning');
        
        // Log errors to file for tracking
        const logPath = path.join(this.projectRoot, 'automation', 'logs', 'typescript-errors.log');
        fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${errorCount} TypeScript errors found\n`);
      } else {
        this.log('TypeScript monitoring: No errors found', 'success');
      }
    } catch (error) {
      if (error.stdout) {
        const output = error.stdout.toString();
        const errorCount = (output.match(/error TS/g) || []).length;
        this.log(`TypeScript monitoring found ${errorCount} errors`, 'warning');
      }
    }
  }

  async runESLintErrorMonitoring() {
    this.log('Running ESLint error monitoring...', 'info');
    
    try {
      const result = execSync('npm run lint', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      this.log('ESLint monitoring: No errors found', 'success');
    } catch (error) {
      if (error.stdout) {
        const output = error.stdout.toString();
        const errorCount = (output.match(/error/g) || []).length;
        this.log(`ESLint monitoring found ${errorCount} errors`, 'warning');
        
        // Log errors to file for tracking
        const logPath = path.join(this.projectRoot, 'automation', 'logs', 'eslint-errors.log');
        fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${errorCount} ESLint errors found\n`);
      }
    }
  }

  async runBuildErrorMonitoring() {
    this.log('Running build error monitoring...', 'info');
    
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      this.log('Build monitoring: No errors found', 'success');
    } catch (error) {
      if (error.stdout) {
        const output = error.stdout.toString();
        const errorCount = (output.match(/error/g) || []).length;
        this.log(`Build monitoring found ${errorCount} errors`, 'warning');
        
        // Log errors to file for tracking
        const logPath = path.join(this.projectRoot, 'automation', 'logs', 'build-errors.log');
        fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${errorCount} build errors found\n`);
      }
    }
  }

  async runDependencyHealthCheck() {
    this.log('Running dependency health check...', 'info');
    
    try {
      // Check for outdated packages
      const result = execSync('npm outdated --json', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      const outdated = JSON.parse(result);
      const outdatedCount = Object.keys(outdated).length;
      
      if (outdatedCount > 0) {
        this.log(`Dependency health check: ${outdatedCount} outdated packages found`, 'warning');
        
        // Log outdated packages
        const logPath = path.join(this.projectRoot, 'automation', 'logs', 'dependency-health.log');
        fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${outdatedCount} outdated packages: ${Object.keys(outdated).join(', ')}\n`);
      } else {
        this.log('Dependency health check: All packages up to date', 'success');
      }
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      if (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout.toString());
          const outdatedCount = Object.keys(outdated).length;
          this.log(`Dependency health check: ${outdatedCount} outdated packages found`, 'warning');
        } catch (parseError) {
          this.log('Dependency health check: Could not parse outdated packages', 'warning');
        }
      }
    }
  }

  async runFileSystemHealthCheck() {
    this.log('Running file system health check...', 'info');
    
    try {
      const issues = [];
      
      // Check for orphaned files
      const orphanedFiles = this.findOrphanedFiles();
      if (orphanedFiles.length > 0) {
        issues.push(`${orphanedFiles.length} orphaned files found`);
      }
      
      // Check for duplicate files
      const duplicateFiles = this.findDuplicateFiles();
      if (duplicateFiles.length > 0) {
        issues.push(`${duplicateFiles.length} duplicate files found`);
      }
      
      // Check for large files
      const largeFiles = this.findLargeFiles();
      if (largeFiles.length > 0) {
        issues.push(`${largeFiles.length} large files found (>1MB)`);
      }
      
      if (issues.length > 0) {
        this.log(`File system health check: ${issues.join(', ')}`, 'warning');
        
        // Log issues
        const logPath = path.join(this.projectRoot, 'automation', 'logs', 'filesystem-health.log');
        fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${issues.join(', ')}\n`);
      } else {
        this.log('File system health check: No issues found', 'success');
      }
    } catch (error) {
      this.log(`File system health check failed: ${error.message}`, 'error');
    }
  }

  findOrphanedFiles() {
    const orphaned = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(srcDir)) {
      this.walkDirectory(srcDir, (filePath) => {
        const relativePath = path.relative(srcDir, filePath);
        if (relativePath.endsWith('.tsx') || relativePath.endsWith('.ts')) {
          // Check if this file is imported anywhere
          if (!this.isFileImported(relativePath)) {
            orphaned.push(relativePath);
          }
        }
      });
    }
    
    return orphaned;
  }

  findDuplicateFiles() {
    const duplicates = [];
    const fileHashes = new Map();
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(srcDir)) {
      this.walkDirectory(srcDir, (filePath) => {
        const content = fs.readFileSync(filePath, 'utf8');
        const hash = this.simpleHash(content);
        
        if (fileHashes.has(hash)) {
          duplicates.push(path.relative(srcDir, filePath));
        } else {
          fileHashes.set(hash, filePath);
        }
      });
    }
    
    return duplicates;
  }

  findLargeFiles() {
    const largeFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(srcDir)) {
      this.walkDirectory(srcDir, (filePath) => {
        const stats = fs.statSync(filePath);
        if (stats.size > 1024 * 1024) { // > 1MB
          largeFiles.push(path.relative(srcDir, filePath));
        }
      });
    }
    
    return largeFiles;
  }

  walkDirectory(dir, callback) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          this.walkDirectory(filePath, callback);
        } else {
          callback(filePath);
        }
      }
    }
  }

  isFileImported(filePath) {
    // Simple check - look for import statements containing the file name
    const fileName = path.basename(filePath, path.extname(filePath));
    const srcDir = path.join(this.projectRoot, 'src');
    
    let isImported = false;
    this.walkDirectory(srcDir, (checkPath) => {
      if (checkPath.endsWith('.tsx') || checkPath.endsWith('.ts')) {
        const content = fs.readFileSync(checkPath, 'utf8');
        if (content.includes(`import.*${fileName}`) || content.includes(`from.*${fileName}`)) {
          isImported = true;
        }
      }
    });
    
    return isImported;
  }

  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }

  async generateAutomationReport() {
    const report = {
      timestamp: new Date().toISOString(),
      automation: 'PM2 Error Prevention',
      stats: this.stats,
      status: 'running',
      nextRun: new Date(Date.now() + this.automationInterval).toISOString()
    };

    const reportPath = path.join(this.projectRoot, 'automation', 'logs', 'pm2-error-prevention-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Also create a summary
    const summaryPath = path.join(this.projectRoot, 'automation', 'logs', 'pm2-error-prevention-summary.md');
    const summary = `# PM2 Error Prevention Automation Report

**Generated:** ${report.timestamp}

## Automation Status
- **Status:** ${report.status}
- **Total Runs:** ${this.stats.totalRuns}
- **Total Errors Fixed:** ${this.stats.totalErrorsFixed}
- **Last Run:** ${this.stats.lastRun}
- **Next Run:** ${report.nextRun}

## Performance
- **Uptime:** ${this.getUptime()}
- **Average Errors Fixed per Run:** ${this.stats.totalRuns > 0 ? (this.stats.totalErrorsFixed / this.stats.totalRuns).toFixed(2) : 0}

## Recent Activity
${this.getRecentActivity()}
`;

    fs.writeFileSync(summaryPath, summary);
  }

  getUptime() {
    const startTime = new Date(this.stats.startTime);
    const now = new Date();
    const diff = now - startTime;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }

  getRecentActivity() {
    // Read recent log files to show activity
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
    const activities = [];
    
    if (fs.existsSync(logsDir)) {
      const logFiles = fs.readdirSync(logsDir).filter(f => f.endsWith('.log'));
      
      for (const logFile of logFiles.slice(-5)) { // Last 5 log files
        const logPath = path.join(logsDir, logFile);
        const content = fs.readFileSync(logPath, 'utf8');
        const lines = content.split('\n').slice(-3); // Last 3 lines
        activities.push(`### ${logFile}\n${lines.join('\n')}`);
      }
    }
    
    return activities.join('\n\n') || 'No recent activity logged';
  }

  async logError(error) {
    const errorLogPath = path.join(this.projectRoot, 'automation', 'logs', 'pm2-error-prevention-errors.log');
    const errorEntry = `[${new Date().toISOString()}] ${error.message}\n${error.stack}\n\n`;
    fs.appendFileSync(errorLogPath, errorEntry);
  }
}

// Run the automation
if (require.main === module) {
  const automation = new PM2ErrorPreventionAutomation();
  automation.start().catch(console.error);
}

module.exports = PM2ErrorPreventionAutomation;