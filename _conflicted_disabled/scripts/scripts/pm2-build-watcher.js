#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import crypto from 'crypto';

const execAsync = promisify(exec);

class ZionBuildWatcher {
  constructor() {
    this.config = {
      buildWatchInterval: parseInt(process.env.BUILD_WATCH_INTERVAL) || 60000,
      autoBuild: process.env.AUTO_BUILD === 'true',
      autoDeploy: process.env.AUTO_DEPLOY === 'true',
      logDir: './logs',
      configFiles: [
        'package.json',
        'vite.config.ts',
        'tailwind.config.ts',
        'tsconfig.json',
        'server/package.json',
        'server/tsconfig.json'
      ],
      buildTriggers: {
        'package.json': ['dependencies', 'devDependencies', 'scripts'],
        'vite.config.ts': ['*'],
        'tailwind.config.ts': ['*'],
        'tsconfig.json': ['compilerOptions', 'include', 'exclude']
      },
      lastChecksums: new Map(),
      buildQueue: [],
      isBuilding: false
    };
    
    this.init();
  }

  async init() {
    console.log('🔍 Zion Build Watcher Starting...');
    this.ensureLogDirectory();
    this.initializeChecksums();
    this.startWatching();
    this.startBuildProcessor();
    this.startHealthCheck();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  initializeChecksums() {
    this.config.configFiles.forEach(file => {
      if (fs.existsSync(file)) {
        this.config.lastChecksums.set(file, this.calculateFileChecksum(file));
      }
    });
    
    console.log('📋 Initialized file checksums for monitoring');
  }

  calculateFileChecksum(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return crypto.createHash('md5').update(content).digest('hex');
    } catch (error) {
      console.error(`❌ Error calculating checksum for ${filePath}:`, error.message);
      return null;
    }
  }

  startWatching() {
    setInterval(() => {
      this.checkForChanges();
    }, this.config.buildWatchInterval);
    
    console.log(`👀 Watching for changes every ${this.config.buildWatchInterval / 1000}s`);
  }

  startBuildProcessor() {
    setInterval(async () => {
      if (this.config.buildQueue.length > 0 && !this.config.isBuilding) {
        await this.processBuildQueue();
      }
    }, 10000); // Check every 10 seconds
  }

  startHealthCheck() {
    setInterval(() => {
      this.checkBuildHealth();
    }, 300000); // Every 5 minutes
  }

  checkForChanges() {
    const changedFiles = [];
    
    this.config.configFiles.forEach(file => {
      if (!fs.existsSync(file)) return;
      
      const currentChecksum = this.calculateFileChecksum(file);
      const lastChecksum = this.config.lastChecksums.get(file);
      
      if (currentChecksum && currentChecksum !== lastChecksum) {
        changedFiles.push(file);
        this.config.lastChecksums.set(file, currentChecksum);
        console.log(`🔄 Configuration change detected: ${file}`);
      }
    });
    
    if (changedFiles.length > 0) {
      this.handleConfigurationChanges(changedFiles);
    }
  }

  handleConfigurationChanges(changedFiles) {
    const buildType = this.determineBuildType(changedFiles);
    
    if (this.config.autoBuild) {
      this.queueBuild(buildType, changedFiles);
    } else {
      console.log(`📝 Configuration changes detected but auto-build is disabled. Files: ${changedFiles.join(', ')}`);
    }
  }

  determineBuildType(changedFiles) {
    const hasFrontendChanges = changedFiles.some(file => 
      !file.startsWith('server/') && file !== 'package.json'
    );
    
    const hasBackendChanges = changedFiles.some(file => 
      file.startsWith('server/')
    );
    
    const hasDependencyChanges = changedFiles.includes('package.json');
    
    if (hasFrontendChanges && hasBackendChanges) {
      return 'full';
    } else if (hasFrontendChanges) {
      return 'frontend';
    } else if (hasBackendChanges) {
      return 'backend';
    } else if (hasDependencyChanges) {
      return 'dependencies';
    }
    
    return 'unknown';
  }

  queueBuild(buildType, changedFiles) {
    const buildJob = {
      id: Date.now(),
      type: buildType,
      files: changedFiles,
      timestamp: new Date(),
      priority: this.getBuildPriority(buildType)
    };
    
    this.config.buildQueue.push(buildJob);
    
    // Sort by priority (higher priority first)
    this.config.buildQueue.sort((a, b) => b.priority - a.priority);
    
    console.log(`📦 Queued ${buildType} build (Priority: ${buildJob.priority})`);
    console.log(`📋 Build queue length: ${this.config.buildQueue.length}`);
  }

  getBuildPriority(buildType) {
    const priorities = {
      'full': 100,
      'frontend': 80,
      'backend': 80,
      'dependencies': 60,
      'unknown': 10
    };
    
    return priorities[buildType] || 10;
  }

  async processBuildQueue() {
    if (this.config.buildQueue.length === 0) return;
    
    this.config.isBuilding = true;
    const buildJob = this.config.buildQueue.shift();
    
    console.log(`🚀 Starting ${buildJob.type} build...`);
    
    try {
      await this.executeBuild(buildJob);
      console.log(`✅ ${buildJob.type} build completed successfully`);
      
      if (this.config.autoDeploy) {
        await this.executeDeploy(buildJob);
      }
      
    } catch (error) {
      console.error(`❌ ${buildJob.type} build failed:`, error.message);
      this.handleBuildFailure(buildJob, error);
    } finally {
      this.config.isBuilding = false;
    }
  }

  async executeBuild(buildJob) {
    const startTime = Date.now();
    
    switch (buildJob.type) {
      case 'full':
        await this.runFullBuild();
        break;
      case 'frontend':
        await this.runFrontendBuild();
        break;
      case 'backend':
        await this.runBackendBuild();
        break;
      case 'dependencies':
        await this.runDependencyInstall();
        break;
      default:
        throw new Error(`Unknown build type: ${buildJob.type}`);
    }
    
    const buildTime = Date.now() - startTime;
    console.log(`⏱️  Build completed in ${buildTime}ms`);
    
    this.logBuildSuccess(buildJob, buildTime);
  }

  async runFullBuild() {
    console.log('🔨 Running full build (frontend + backend)...');
    
    // Install dependencies first
    await execAsync('npm run install:all');
    
    // Build both frontend and backend
    await execAsync('npm run build:hybrid');
  }

  async runFrontendBuild() {
    console.log('🎨 Building frontend...');
    await execAsync('npm run build');
  }

  async runBackendBuild() {
    console.log('⚙️  Building backend...');
    await execAsync('cd server && npm run build');
  }

  async runDependencyInstall() {
    console.log('📦 Installing dependencies...');
    await execAsync('npm run install:all');
  }

  async executeDeploy(buildJob) {
    if (!this.config.autoDeploy) return;
    
    console.log('🚀 Auto-deploying after successful build...');
    
    try {
      // Reload PM2 processes
      await execAsync('pm2 reload ecosystem.config.cjs');
      console.log('✅ PM2 processes reloaded successfully');
      
      // Generate deployment report
      this.generateDeploymentReport(buildJob);
      
    } catch (error) {
      console.error('❌ Auto-deploy failed:', error.message);
    }
  }

  handleBuildFailure(buildJob, error) {
    const failureReport = {
      buildJob,
      error: error.message,
      timestamp: new Date(),
      retryCount: (buildJob.retryCount || 0) + 1
    };
    
    // Log failure
    const failurePath = path.join(this.config.logDir, `build-failure-${Date.now()}.json`);
    fs.writeFileSync(failurePath, JSON.stringify(failureReport, null, 2));
    
    // Retry logic
    if (failureReport.retryCount < 3) {
      buildJob.retryCount = failureReport.retryCount;
      buildJob.priority = Math.min(buildJob.priority + 20, 100); // Increase priority for retry
      this.config.buildQueue.unshift(buildJob);
      console.log(`🔄 Queuing retry attempt ${failureReport.retryCount} for ${buildJob.type} build`);
    } else {
      console.error(`💥 Build ${buildJob.type} failed after 3 attempts. Manual intervention required.`);
      this.createBuildAlert(buildJob, error);
    }
  }

  createBuildAlert(buildJob, error) {
    const alert = {
      type: 'BUILD_FAILURE',
      severity: 'CRITICAL',
      message: `${buildJob.type} build failed after 3 attempts: ${error.message}`,
      buildJob,
      timestamp: new Date()
    };
    
    const alertPath = path.join(this.config.logDir, `build-alert-${Date.now()}.json`);
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));
    
    console.error(`🚨 BUILD ALERT: ${alert.message}`);
  }

  logBuildSuccess(buildJob, buildTime) {
    const successReport = {
      buildJob,
      buildTime,
      timestamp: new Date(),
      status: 'success'
    };
    
    const reportPath = path.join(this.config.logDir, `build-success-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(successReport, null, 2));
  }

  generateDeploymentReport(buildJob) {
    const deploymentReport = {
      buildJob,
      deploymentTime: new Date(),
      pm2Status: 'reloaded',
      environment: process.env.NODE_ENV || 'development'
    };
    
    const reportPath = path.join(this.config.logDir, `deployment-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2));
  }

  checkBuildHealth() {
    const healthReport = {
      timestamp: new Date().toISOString(),
      buildQueueLength: this.config.buildQueue.length,
      isBuilding: this.config.isBuilding,
      lastBuildJob: this.config.buildQueue[0] || null,
      systemStatus: 'healthy'
    };
    
    // Check for stuck builds
    if (this.config.isBuilding) {
      const buildStartTime = Date.now();
      const maxBuildTime = 10 * 60 * 1000; // 10 minutes
      
      if (buildStartTime - Date.now() > maxBuildTime) {
        healthReport.systemStatus = 'warning';
        healthReport.warnings = ['Build process appears to be stuck'];
      }
    }
    
    // Check queue health
    if (this.config.buildQueue.length > 10) {
      healthReport.systemStatus = 'warning';
      healthReport.warnings = ['Build queue is getting long'];
    }
    
    const healthPath = path.join(this.config.logDir, `build-health-${Date.now()}.json`);
    fs.writeFileSync(healthPath, JSON.stringify(healthReport, null, 2));
    
    console.log(`📊 Build health check: ${healthReport.systemStatus}`);
  }

  getStatus() {
    return {
      isWatching: true,
      buildQueueLength: this.config.buildQueue.length,
      isBuilding: this.config.isBuilding,
      autoBuild: this.config.autoBuild,
      autoDeploy: this.config.autoDeploy,
      watchedFiles: this.config.configFiles,
      lastChecksums: Object.fromEntries(this.config.lastChecksums)
    };
  }
}

// Start the build watcher
const buildWatcher = new ZionBuildWatcher();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Zion Build Watcher...');
  buildWatcher.checkBuildHealth();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Zion Build Watcher...');
  buildWatcher.checkBuildHealth();
  process.exit(0);
});

// Export for potential external use
export default buildWatcher;