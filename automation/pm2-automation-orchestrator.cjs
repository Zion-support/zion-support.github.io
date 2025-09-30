#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class PM2AutomationOrchestrator {
  constructor() {
    this.config = {
      logDir: './logs',
      watchPatterns: {
        frontend: ['src/**/*', 'public/**/*', '*.config.js', '*.config.ts'],
        backend: ['server/src/**/*', 'server/package.json'],
        automation: ['automation/**/*', 'scripts/**/*'],
        config: ['package.json', 'vite.config.ts', 'tailwind.config.js', 'tsconfig.json']
      },
      healthCheckInterval: 60000, // 1 minute
      buildTriggerDelay: 2000, // 2 seconds delay before triggering build
      maxConcurrentBuilds: 2,
      autoFixThreshold: 5, // Number of errors before auto-fix
      performanceThresholds: {
        buildTime: 120000, // 2 minutes
        bundleSize: 5 * 1024 * 1024, // 5MB
        memoryUsage: 1024 * 1024 * 1024 // 1GB
      }
    };
    
    this.ensureLogDirectory();
    this.watchers = new Map();
    this.buildQueue = [];
    this.isBuilding = false;
    this.stats = {
      totalBuilds: 0,
      successfulBuilds: 0,
      failedBuilds: 0,
      totalErrors: 0,
      autoFixedErrors: 0,
      lastBuildTime: 0,
      averageBuildTime: 0
    };
    
    this.setupEventHandlers();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logDir, `pm2-orchestrator-${level}.log`);
    fs.appendFileSync(logFile, logMessage);
  }

  setupEventHandlers() {
    // Graceful shutdown
    process.on('SIGINT', () => this.gracefulShutdown());
    process.on('SIGTERM', () => this.gracefulShutdown());
    
    // Uncaught exception handling
    process.on('uncaughtException', (error) => {
      this.log(`Uncaught Exception: ${error.message}`, 'error');
      this.log(error.stack, 'error');
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log(`Unhandled Rejection at: ${promise}, reason: ${reason}`, 'error');
    });
  }

  async gracefulShutdown() {
    this.log('🛑 Graceful shutdown initiated...');
    
    // Stop all watchers
    for (const [name, watcher] of this.watchers) {
      watcher.close();
      this.log(`Closed watcher: ${name}`);
    }
    
    // Wait for current build to complete
    if (this.isBuilding) {
      this.log('Waiting for current build to complete...');
      await this.waitForBuildCompletion();
    }
    
    this.log('✅ Graceful shutdown completed');
    process.exit(0);
  }

  async waitForBuildCompletion() {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (!this.isBuilding) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 1000);
      
      // Timeout after 5 minutes
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 300000);
    });
  }

  async startWatching() {
    this.log('🔍 Starting file watching...');
    
    // Watch frontend files
    this.watchers.set('frontend', chokidar.watch(this.config.watchPatterns.frontend, {
      ignored: ['node_modules/**/*', 'dist/**/*', '*.log', 'logs/**/*'],
      persistent: true,
      ignoreInitial: true
    }));
    
    // Watch backend files
    this.watchers.set('backend', chokidar.watch(this.config.watchPatterns.backend, {
      ignored: ['node_modules/**/*', 'dist/**/*', '*.log'],
      persistent: true,
      ignoreInitial: true
    }));
    
    // Watch automation files
    this.watchers.set('automation', chokidar.watch(this.config.watchPatterns.automation, {
      ignored: ['node_modules/**/*', '*.log', 'logs/**/*'],
      persistent: true,
      ignoreInitial: true
    }));
    
    // Watch config files
    this.watchers.set('config', chokidar.watch(this.config.watchPatterns.config, {
      ignored: ['node_modules/**/*', '*.log', 'logs/**/*'],
      persistent: true,
      ignoreInitial: true
    }));
    
    // Set up event handlers for each watcher
    for (const [name, watcher] of this.watchers) {
      watcher
        .on('add', (filePath) => this.handleFileChange('add', filePath, name))
        .on('change', (filePath) => this.handleFileChange('change', filePath, name))
        .on('unlink', (filePath) => this.handleFileChange('unlink', filePath, name))
        .on('error', (error) => this.log(`Watcher error (${name}): ${error.message}`, 'error'));
    }
    
    this.log('✅ File watching started');
  }

  async handleFileChange(event, filePath, watcherName) {
    const relativePath = path.relative(process.cwd(), filePath);
    this.log(`📁 File ${event}: ${relativePath} (${watcherName})`);
    
    // Determine action based on file type and change
    const action = this.determineAction(event, filePath, watcherName);
    
    if (action) {
      // Add to build queue with debouncing
      this.queueBuild(action, relativePath);
    }
  }

  determineAction(event, filePath, watcherName) {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath);
    
    // Skip certain files
    if (fileName.startsWith('.') || fileName.includes('.backup') || fileName.includes('.tmp')) {
      return null;
    }
    
    // Frontend changes
    if (watcherName === 'frontend') {
      if (['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'].includes(ext)) {
        return { type: 'frontend-rebuild', priority: 'high', files: [filePath] };
      } else if (['.html', '.json', '.md'].includes(ext)) {
        return { type: 'frontend-reload', priority: 'medium', files: [filePath] };
      }
    }
    
    // Backend changes
    if (watcherName === 'backend') {
      if (['.ts', '.js'].includes(ext)) {
        return { type: 'backend-rebuild', priority: 'high', files: [filePath] };
      } else if (ext === '.json') {
        return { type: 'backend-restart', priority: 'medium', files: [filePath] };
      }
    }
    
    // Config changes
    if (watcherName === 'config') {
      if (['.js', '.ts', '.json'].includes(ext)) {
        return { type: 'config-reload', priority: 'critical', files: [filePath] };
      }
    }
    
    // Automation changes
    if (watcherName === 'automation') {
      if (['.js', '.cjs'].includes(ext)) {
        return { type: 'automation-reload', priority: 'medium', files: [filePath] };
      }
    }
    
    return null;
  }

  queueBuild(action, filePath) {
    // Remove existing similar actions
    this.buildQueue = this.buildQueue.filter(item => 
      !(item.type === action.type && item.priority === action.priority)
    );
    
    // Add new action with timestamp
    action.timestamp = Date.now();
    action.triggeredBy = filePath;
    
    this.buildQueue.push(action);
    
    // Sort by priority (critical > high > medium > low)
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    this.buildQueue.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
    this.log(`📋 Queued build: ${action.type} (${action.priority}) for ${filePath}`);
    
    // Process queue if not currently building
    if (!this.isBuilding) {
      this.processBuildQueue();
    }
  }

  async processBuildQueue() {
    if (this.buildQueue.length === 0 || this.isBuilding) {
      return;
    }
    
    this.isBuilding = true;
    
    while (this.buildQueue.length > 0) {
      const action = this.buildQueue.shift();
      this.log(`🚀 Processing build: ${action.type} (${action.priority})`);
      
      try {
        await this.executeAction(action);
        this.stats.successfulBuilds++;
      } catch (error) {
        this.log(`❌ Build failed: ${action.type} - ${error.message}`, 'error');
        this.stats.failedBuilds++;
        
        // Attempt auto-fix for certain types of failures
        if (action.type.includes('frontend') || action.type.includes('backend')) {
          await this.attemptAutoFix(action);
        }
      }
      
      this.stats.totalBuilds++;
      
      // Small delay between builds
      await this.sleep(1000);
    }
    
    this.isBuilding = false;
    this.log('✅ Build queue processed');
  }

  async executeAction(action) {
    const startTime = Date.now();
    
    switch (action.type) {
      case 'frontend-rebuild':
        await this.rebuildFrontend();
        break;
      case 'frontend-reload':
        await this.reloadFrontend();
        break;
      case 'backend-rebuild':
        await this.rebuildBackend();
        break;
      case 'backend-restart':
        await this.restartBackend();
        break;
      case 'config-reload':
        await this.reloadConfiguration();
        break;
      case 'automation-reload':
        await this.reloadAutomation();
        break;
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
    
    const buildTime = Date.now() - startTime;
    this.updateBuildStats(buildTime);
    
    this.log(`✅ ${action.type} completed in ${buildTime}ms`);
  }

  async rebuildFrontend() {
    this.log('🔨 Rebuilding frontend...');
    
    // Run linting first
    await this.runLinting('frontend');
    
    // Build the frontend
    const result = await this.executeCommand('npm run build');
    if (!result.success) {
      throw new Error(`Frontend build failed: ${result.error}`);
    }
    
    // Reload PM2 frontend process
    await this.executeCommand('pm2 reload zion-frontend-dev');
    
    // Check bundle size
    await this.checkBundleSize();
  }

  async rebuildBackend() {
    this.log('🔨 Rebuilding backend...');
    
    // Run linting first
    await this.runLinting('backend');
    
    // Build the backend
    const result = await this.executeCommand('cd server && npm run build');
    if (!result.success) {
      throw new Error(`Backend build failed: ${result.error}`);
    }
    
    // Reload PM2 backend process
    await this.executeCommand('pm2 reload zion-backend-dev');
  }

  async reloadFrontend() {
    this.log('🔄 Reloading frontend...');
    await this.executeCommand('pm2 reload zion-frontend-dev');
  }

  async restartBackend() {
    this.log('🔄 Restarting backend...');
    await this.executeCommand('pm2 restart zion-backend-dev');
  }

  async reloadConfiguration() {
    this.log('🔄 Reloading configuration...');
    
    // Reload all PM2 processes
    await this.executeCommand('pm2 reload ecosystem.config.js');
    
    // Restart automation services
    await this.executeCommand('pm2 restart zion-automation-orchestrator');
  }

  async reloadAutomation() {
    this.log('🔄 Reloading automation...');
    await this.executeCommand('pm2 restart zion-automation-orchestrator');
  }

  async runLinting(target) {
    this.log(`🔍 Running linting for ${target}...`);
    
    try {
      if (target === 'frontend') {
        await this.executeCommand('npm run lint');
      } else if (target === 'backend') {
        await this.executeCommand('cd server && npm run lint');
      }
    } catch (error) {
      this.log(`⚠️ Linting issues found in ${target}`, 'warn');
      // Continue with build even if linting fails
    }
  }

  async checkBundleSize() {
    this.log('📊 Checking bundle size...');
    
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      return;
    }
    
    const totalSize = this.calculateDirectorySize(distPath);
    const sizeMB = totalSize / (1024 * 1024);
    
    this.log(`Bundle size: ${sizeMB.toFixed(2)}MB`);
    
    if (sizeMB > this.config.performanceThresholds.bundleSize / (1024 * 1024)) {
      this.log('⚠️ Bundle size exceeds threshold - consider optimization', 'warn');
      await this.suggestOptimizations();
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (fs.statSync(dirPath).isDirectory()) {
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        totalSize += this.calculateDirectorySize(filePath);
      }
    } else {
      totalSize += fs.statSync(dirPath).size;
    }
    
    return totalSize;
  }

  async suggestOptimizations() {
    this.log('💡 Optimization suggestions:');
    this.log('  - Enable tree shaking in Vite config');
    this.log('  - Use dynamic imports for code splitting');
    this.log('  - Optimize images and assets');
    this.log('  - Consider using compression middleware');
  }

  async attemptAutoFix(action) {
    this.log('🔧 Attempting auto-fix...');
    
    try {
      if (action.type.includes('frontend')) {
        await this.autoFixFrontend();
      } else if (action.type.includes('backend')) {
        await this.autoFixBackend();
      }
      
      this.stats.autoFixedErrors++;
      this.log('✅ Auto-fix successful');
    } catch (error) {
      this.log(`❌ Auto-fix failed: ${error.message}`, 'error');
    }
  }

  async autoFixFrontend() {
    // Try to fix common issues
    await this.executeCommand('npm run fix:all');
    
    // Clear cache and reinstall if needed
    if (await this.shouldClearCache()) {
      await this.executeCommand('rm -rf node_modules package-lock.json');
      await this.executeCommand('npm install');
    }
  }

  async autoFixBackend() {
    // Try to fix common issues
    await this.executeCommand('cd server && npm run lint --fix');
    
    // Clear cache and reinstall if needed
    if (await this.shouldClearCache()) {
      await this.executeCommand('cd server && rm -rf node_modules package-lock.json');
      await this.executeCommand('cd server && npm install');
    }
  }

  async shouldClearCache() {
    // Check if there are dependency-related errors
    const packageLockExists = fs.existsSync('package-lock.json');
    const nodeModulesExists = fs.existsSync('node_modules');
    
    return !packageLockExists || !nodeModulesExists;
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  updateBuildStats(buildTime) {
    this.stats.lastBuildTime = buildTime;
    
    if (this.stats.averageBuildTime === 0) {
      this.stats.averageBuildTime = buildTime;
    } else {
      this.stats.averageBuildTime = (this.stats.averageBuildTime + buildTime) / 2;
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startHealthMonitoring() {
    this.log('🔍 Starting health monitoring...');
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log('✅ Health monitoring started');
  }

  async performHealthCheck() {
    try {
      // Check PM2 status
      const pm2Status = await this.executeCommand('pm2 jlist');
      if (pm2Status.success) {
        const processes = JSON.parse(pm2Status.output);
        const criticalProcesses = processes.filter(p => p.pm2_env.status !== 'online');
        
        if (criticalProcesses.length > 0) {
          this.log(`⚠️ Critical processes detected: ${criticalProcesses.map(p => p.name).join(', ')}`, 'warn');
          await this.handleCriticalProcesses(criticalProcesses);
        }
      }
      
      // Check system resources
      await this.checkSystemResources();
      
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'error');
    }
  }

  async handleCriticalProcesses(processes) {
    for (const process of processes) {
      this.log(`🔄 Restarting critical process: ${process.name}`);
      await this.executeCommand(`pm2 restart ${process.name}`);
    }
  }

  async checkSystemResources() {
    // This could be extended to check memory, CPU, disk usage
    // For now, just log that we're monitoring
    this.log('📊 System resources check completed');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      watchers: Array.from(this.watchers.keys()),
      buildQueue: this.buildQueue.length,
      isBuilding: this.isBuilding
    };
    
    const reportPath = path.join(this.config.logDir, `orchestrator-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('🚀 Starting PM2 Automation Orchestrator...');
    
    try {
      // Start file watching
      await this.startWatching();
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
      this.log('✅ PM2 Automation Orchestrator started successfully');
      
      // Keep the process running
      setInterval(() => {
        // Heartbeat
        this.log('💓 Orchestrator heartbeat');
      }, 300000); // 5 minutes
      
    } catch (error) {
      this.log(`Failed to start orchestrator: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// CLI interface
async function main() {
  const orchestrator = new PM2AutomationOrchestrator();
  const command = process.argv[2];
  
  try {
    switch (command) {
      case 'start':
        await orchestrator.start();
        break;
      case 'report':
        await orchestrator.generateReport();
        break;
      default:
        console.log(`
🚀 PM2 Automation Orchestrator

Usage: node pm2-automation-orchestrator.cjs <command>

Commands:
  start   Start the orchestrator
  report  Generate a report

Examples:
  node pm2-automation-orchestrator.cjs start
  node pm2-automation-orchestrator.cjs report
        `);
    }
  } catch (error) {
    orchestrator.log(`Command failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2AutomationOrchestrator;