#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class PM2DevWorkflow {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      logDirectory: './automation/logs',
      watchPatterns: [
        'src/**/*',
        'server/src/**/*',
        '*.config.*',
        'package.json',
        'server/package.json'
      ],
      ignorePatterns: [
        'node_modules/**',
        'dist/**',
        '*.log',
        'automation/logs/**',
        'automation/backups/**'
      ],
      qualityThresholds: {
        lintErrors: 0,
        typeErrors: 0,
        testCoverage: 80,
        buildTime: 30000
      },
      autoActions: {
        lintOnSave: true,
        typeCheckOnSave: true,
        testOnChange: false,
        buildOnMajorChange: true,
        restartOnConfigChange: true
      }
    };
    
    this.watchers = new Map();
    this.fileChangeQueue = [];
    this.isProcessing = false;
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.logDirectory, './automation/backups'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    
    const logFile = path.join(this.config.logDirectory, 'pm2-dev-workflow.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: this.config.projectRoot,
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getPM2Status() {
    const result = await this.executeCommand('pm2 jlist');
    if (result.success) {
      try {
        return JSON.parse(result.output);
      } catch (error) {
        this.log(`Failed to parse PM2 status: ${error.message}`, 'error');
        return [];
      }
    }
    return [];
  }

  async startDevelopmentEnvironment() {
    this.log('🚀 Starting development environment...');
    
    try {
      // Start all development processes
      await this.executeCommand('pm2 start ecosystem.config.js');
      this.log('✅ Development environment started');
      
      // Start file watching
      await this.startFileWatching();
      
      // Perform initial quality checks
      await this.performQualityChecks();
      
      // Start monitoring
      this.startMonitoring();
      
    } catch (error) {
      this.log(`Failed to start development environment: ${error.message}`, 'error');
    }
  }

  async startFileWatching() {
    this.log('👀 Starting file watching...');
    
    const watcher = chokidar.watch(this.config.watchPatterns, {
      ignored: this.config.ignorePatterns,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100
      }
    });

    watcher
      .on('add', (filePath) => this.handleFileChange('add', filePath))
      .on('change', (filePath) => this.handleFileChange('change', filePath))
      .on('unlink', (filePath) => this.handleFileChange('unlink', filePath))
      .on('error', (error) => this.log(`File watcher error: ${error.message}`, 'error'));

    this.watchers.set('main', watcher);
    this.log('✅ File watching started');
  }

  async handleFileChange(event, filePath) {
    const relativePath = path.relative(this.config.projectRoot, filePath);
    this.log(`📁 File ${event}: ${relativePath}`);
    
    // Add to processing queue
    this.fileChangeQueue.push({ event, filePath, timestamp: Date.now() });
    
    // Process queue if not already processing
    if (!this.isProcessing) {
      this.processFileChangeQueue();
    }
  }

  async processFileChangeQueue() {
    if (this.isProcessing || this.fileChangeQueue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.fileChangeQueue.length > 0) {
      const change = this.fileChangeQueue.shift();
      await this.processFileChange(change);
      
      // Small delay between processing
      await this.sleep(100);
    }
    
    this.isProcessing = false;
  }

  async processFileChange(change) {
    const { event, filePath, timestamp } = change;
    const relativePath = path.relative(this.config.projectRoot, filePath);
    
    // Determine action based on file type and change
    if (this.shouldLintFile(filePath)) {
      await this.runLintCheck(filePath);
    }
    
    if (this.shouldTypeCheckFile(filePath)) {
      await this.runTypeCheck(filePath);
    }
    
    if (this.shouldRestartProcess(filePath)) {
      await this.restartRelatedProcesses(filePath);
    }
    
    if (this.shouldRunTests(filePath)) {
      await this.runRelatedTests(filePath);
    }
    
    // Log processing completion
    const processingTime = Date.now() - timestamp;
    this.log(`✅ Processed ${relativePath} in ${processingTime}ms`);
  }

  shouldLintFile(filePath) {
    if (!this.config.autoActions.lintOnSave) return false;
    
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    return extensions.some(ext => filePath.endsWith(ext));
  }

  shouldTypeCheckFile(filePath) {
    if (!this.config.autoActions.typeCheckOnSave) return false;
    
    const extensions = ['.ts', '.tsx'];
    return extensions.some(ext => filePath.endsWith(ext));
  }

  shouldRestartProcess(filePath) {
    if (!this.config.autoActions.restartOnConfigChange) return false;
    
    const configFiles = [
      'ecosystem.config.js',
      'vite.config.ts',
      'tailwind.config.ts',
      'tsconfig.json',
      'package.json'
    ];
    
    return configFiles.some(configFile => filePath.endsWith(configFile));
  }

  shouldRunTests(filePath) {
    if (!this.config.autoActions.testOnChange) return false;
    
    const testPatterns = [
      /\.test\.(js|jsx|ts|tsx)$/,
      /\.spec\.(js|jsx|ts|tsx)$/,
      /__tests__\//
    ];
    
    return testPatterns.some(pattern => pattern.test(filePath));
  }

  async runLintCheck(filePath) {
    try {
      this.log(`🔍 Running lint check for ${path.basename(filePath)}`);
      
      const result = await this.executeCommand(`npx eslint "${filePath}" --fix`);
      
      if (result.success) {
        this.log(`✅ Lint check passed for ${path.basename(filePath)}`);
      } else {
        this.log(`⚠️ Lint issues found in ${path.basename(filePath)}`, 'warn');
        await this.notifyQualityIssue('lint', filePath, result.error);
      }
    } catch (error) {
      this.log(`Failed to run lint check: ${error.message}`, 'error');
    }
  }

  async runTypeCheck(filePath) {
    try {
      this.log(`🔍 Running type check for ${path.basename(filePath)}`);
      
      const result = await this.executeCommand('npx tsc --noEmit');
      
      if (result.success) {
        this.log(`✅ Type check passed for ${path.basename(filePath)}`);
      } else {
        this.log(`⚠️ Type errors found`, 'warn');
        await this.notifyQualityIssue('type', filePath, result.error);
      }
    } catch (error) {
      this.log(`Failed to run type check: ${error.message}`, 'error');
    }
  }

  async restartRelatedProcesses(filePath) {
    try {
      const fileName = path.basename(filePath);
      
      if (fileName === 'ecosystem.config.js') {
        this.log('🔄 Restarting all PM2 processes due to ecosystem config change');
        await this.executeCommand('pm2 reload ecosystem.config.js');
      } else if (fileName === 'vite.config.ts' || fileName === 'tailwind.config.ts') {
        this.log('🔄 Restarting frontend process due to config change');
        await this.executeCommand('pm2 restart zion-frontend-dev');
      } else if (fileName === 'tsconfig.json') {
        this.log('🔄 Restarting backend process due to TypeScript config change');
        await this.executeCommand('pm2 restart zion-backend-dev');
      } else if (fileName === 'package.json') {
        this.log('🔄 Restarting processes due to package.json change');
        await this.executeCommand('pm2 restart all');
      }
      
      this.log('✅ Processes restarted successfully');
    } catch (error) {
      this.log(`Failed to restart processes: ${error.message}`, 'error');
    }
  }

  async runRelatedTests(filePath) {
    try {
      this.log(`🧪 Running tests related to ${path.basename(filePath)}`);
      
      // Extract component/function name from file path
      const fileName = path.basename(filePath, path.extname(filePath));
      const testPattern = `**/*${fileName}*.test.*`;
      
      const result = await this.executeCommand(`npx vitest run --pattern "${testPattern}"`);
      
      if (result.success) {
        this.log(`✅ Tests passed for ${fileName}`);
      } else {
        this.log(`❌ Tests failed for ${fileName}`, 'error');
        await this.notifyQualityIssue('test', filePath, result.error);
      }
    } catch (error) {
      this.log(`Failed to run tests: ${error.message}`, 'error');
    }
  }

  async performQualityChecks() {
    this.log('🔍 Performing comprehensive quality checks...');
    
    const checks = [
      { name: 'Lint Check', action: () => this.executeCommand('npm run lint') },
      { name: 'Type Check', action: () => this.executeCommand('npm run type-check') },
      { name: 'Build Check', action: () => this.executeCommand('npm run build') },
      { name: 'Test Check', action: () => this.executeCommand('npm test') }
    ];
    
    const results = [];
    
    for (const check of checks) {
      try {
        this.log(`Running ${check.name}...`);
        const result = await check.action();
        results.push({
          name: check.name,
          success: result.success,
          error: result.error
        });
        
        if (result.success) {
          this.log(`✅ ${check.name} passed`);
        } else {
          this.log(`❌ ${check.name} failed: ${result.error}`, 'error');
        }
      } catch (error) {
        this.log(`Failed to run ${check.name}: ${error.message}`, 'error');
        results.push({
          name: check.name,
          success: false,
          error: error.message
        });
      }
    }
    
    // Generate quality report
    await this.generateQualityReport(results);
    
    return results;
  }

  async generateQualityReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      checks: results,
      summary: {
        total: results.length,
        passed: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
        successRate: (results.filter(r => r.success).length / results.length) * 100
      }
    };
    
    const reportPath = path.join(this.config.logDirectory, 'quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Quality report generated: ${reportPath}`);
    return report;
  }

  async notifyQualityIssue(type, filePath, error) {
    // This can be extended to send notifications via Slack, email, etc.
    const message = `Quality issue detected: ${type} error in ${path.basename(filePath)}`;
    this.log(message, 'warn');
    
    // Log to dedicated quality issues file
    const issuesFile = path.join(this.config.logDirectory, 'quality-issues.log');
    const timestamp = new Date().toISOString();
    const issueLog = `[${timestamp}] ${type.toUpperCase()}: ${filePath} - ${error}\n`;
    fs.appendFileSync(issuesFile, issueLog);
  }

  async startMonitoring() {
    this.log('📊 Starting development workflow monitoring...');
    
    // Monitor PM2 processes
    setInterval(async () => {
      await this.monitorPM2Processes();
    }, 30000);
    
    // Monitor system resources
    setInterval(async () => {
      await this.monitorSystemResources();
    }, 60000);
    
    // Generate periodic reports
    setInterval(async () => {
      await this.generatePeriodicReport();
    }, 300000); // 5 minutes
    
    this.log('✅ Monitoring started');
  }

  async monitorPM2Processes() {
    try {
      const processes = await this.getPM2Status();
      
      for (const process of processes) {
        if (process.pm2_env.status !== 'online') {
          this.log(`⚠️ Process ${process.name} is not online (${process.pm2_env.status})`, 'warn');
          
          // Auto-restart if needed
          if (process.pm2_env.restart_time > 5) {
            this.log(`🔄 Auto-restarting ${process.name} due to multiple failures`);
            await this.executeCommand(`pm2 restart ${process.name}`);
          }
        }
      }
    } catch (error) {
      this.log(`Failed to monitor PM2 processes: ${error.message}`, 'error');
    }
  }

  async monitorSystemResources() {
    try {
      // Check disk space
      const diskResult = await this.executeCommand('df -h / | tail -1');
      if (diskResult.success) {
        const diskMatch = diskResult.output.match(/(\d+)%/);
        if (diskMatch && parseInt(diskMatch[1]) > 90) {
          this.log('⚠️ Disk usage is critical (>90%)', 'warn');
          await this.cleanupLogs();
        }
      }
      
      // Check memory usage
      const memoryResult = await this.executeCommand('free -m | grep Mem');
      if (memoryResult.success) {
        const memMatch = memoryResult.output.match(/(\d+)\s+(\d+)/);
        if (memMatch) {
          const total = parseInt(memMatch[1]);
          const used = parseInt(memMatch[2]);
          const usage = (used / total) * 100;
          
          if (usage > 90) {
            this.log('⚠️ Memory usage is critical (>90%)', 'warn');
            await this.optimizeMemoryUsage();
          }
        }
      }
    } catch (error) {
      this.log(`Failed to monitor system resources: ${error.message}`, 'error');
    }
  }

  async cleanupLogs() {
    try {
      this.log('🧹 Cleaning up old logs...');
      
      // Clear PM2 logs
      await this.executeCommand('pm2 flush');
      
      // Clear old automation logs
      const logDir = this.config.logDirectory;
      const logFiles = fs.readdirSync(logDir).filter(file => file.endsWith('.log'));
      
      for (const logFile of logFiles) {
        const logPath = path.join(logDir, logFile);
        const stats = fs.statSync(logPath);
        const fileAge = Date.now() - stats.mtime.getTime();
        
        // Delete logs older than 7 days
        if (fileAge > 7 * 24 * 60 * 60 * 1000) {
          fs.unlinkSync(logPath);
          this.log(`Deleted old log: ${logFile}`);
        }
      }
      
      this.log('✅ Log cleanup completed');
    } catch (error) {
      this.log(`Failed to cleanup logs: ${error.message}`, 'error');
    }
  }

  async optimizeMemoryUsage() {
    try {
      this.log('🔧 Optimizing memory usage...');
      
      // Restart memory-intensive processes
      const memoryIntensive = ['zion-performance-optimizer', 'zion-content-generator'];
      
      for (const processName of memoryIntensive) {
        try {
          await this.executeCommand(`pm2 restart ${processName}`);
          this.log(`Restarted ${processName} to free memory`);
        } catch (error) {
          this.log(`Failed to restart ${processName}: ${error.message}`, 'warn');
        }
      }
      
      // Clear Node.js cache if possible
      await this.executeCommand('pm2 flush');
      
      this.log('✅ Memory optimization completed');
    } catch (error) {
      this.log(`Failed to optimize memory: ${error.message}`, 'error');
    }
  }

  async generatePeriodicReport() {
    try {
      const processes = await this.getPM2Status();
      const qualityReport = await this.performQualityChecks();
      
      const report = {
        timestamp: new Date().toISOString(),
        pm2Status: {
          totalProcesses: processes.length,
          onlineProcesses: processes.filter(p => p.pm2_env.status === 'online').length,
          offlineProcesses: processes.filter(p => p.pm2_env.status !== 'online').length
        },
        quality: qualityReport,
        systemHealth: 'healthy'
      };
      
      const reportPath = path.join(this.config.logDirectory, 'periodic-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('📊 Periodic report generated');
    } catch (error) {
      this.log(`Failed to generate periodic report: ${error.message}`, 'error');
    }
  }

  async stopDevelopmentEnvironment() {
    this.log('🛑 Stopping development environment...');
    
    // Stop file watchers
    for (const [name, watcher] of this.watchers) {
      watcher.close();
      this.log(`Stopped watcher: ${name}`);
    }
    
    // Stop PM2 processes
    await this.executeCommand('pm2 stop all');
    
    this.log('✅ Development environment stopped');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI handling
const workflow = new PM2DevWorkflow();
const command = process.argv[2];

async function main() {
  try {
    switch (command) {
      case 'start':
        await workflow.startDevelopmentEnvironment();
        break;
      case 'stop':
        await workflow.stopDevelopmentEnvironment();
        break;
      case 'quality':
        await workflow.performQualityChecks();
        break;
      case 'monitor':
        await workflow.startMonitoring();
        break;
      case 'cleanup':
        await workflow.cleanupLogs();
        break;
      default:
        console.log('PM2 Development Workflow - Intelligent Development Environment');
        console.log('\nUsage: node pm2-dev-workflow.js [command]');
        console.log('\nCommands:');
        console.log('  start     - Start development environment');
        console.log('  stop      - Stop development environment');
        console.log('  quality   - Run quality checks');
        console.log('  monitor   - Start monitoring');
        console.log('  cleanup   - Clean up old logs');
        process.exit(1);
    }
  } catch (error) {
    workflow.log(`Command failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  workflow.log('Shutting down development workflow...', 'info');
  await workflow.stopDevelopmentEnvironment();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  workflow.log('Shutting down development workflow...', 'info');
  await workflow.stopDevelopmentEnvironment();
  process.exit(0);
});

if (require.main === module) {
  main();
}

module.exports = PM2DevWorkflow;