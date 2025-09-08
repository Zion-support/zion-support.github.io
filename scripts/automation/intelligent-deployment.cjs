#!/usr/bin/env node

/**
 * Intelligent Deployment Automation - PM2 Automation
 * Automatically deploys with health checks, rollbacks, and performance monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentDeployment {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-deployment.log');
    this.deploymentHistoryFile = path.join(this.projectRoot, 'logs', 'deployment-history.json');
    this.healthChecksFile = path.join(this.projectRoot, 'logs', 'deployment-health.json');
    this.ensureLogsDirectory();
    this.loadDeploymentHistory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  loadDeploymentHistory() {
    try {
      if (fs.existsSync(this.deploymentHistoryFile)) {
        this.deploymentHistory = JSON.parse(fs.readFileSync(this.deploymentHistoryFile, 'utf8'));
      } else {
        this.deploymentHistory = [];
      }
    } catch (error) {
      this.log(`Failed to load deployment history: ${error.message}`, 'WARN');
      this.deploymentHistory = [];
    }
  }

  saveDeploymentHistory() {
    try {
      fs.writeFileSync(this.deploymentHistoryFile, JSON.stringify(this.deploymentHistory, null, 2));
    } catch (error) {
      this.log(`Failed to save deployment history: ${error.message}`, 'ERROR');
    }
  }

  async runIntelligentDeployment(options = {}) {
    const deploymentId = this.generateDeploymentId();
    const startTime = Date.now();
    
    this.log(`Starting intelligent deployment ${deploymentId}...`);
    
    const deployment = {
      id: deploymentId,
      startTime: new Date().toISOString(),
      status: 'IN_PROGRESS',
      options,
      stages: [],
      healthChecks: [],
      rollback: null
    };

    try {
      // 1. Pre-deployment health check
      await this.runStage(deployment, 'PRE_DEPLOYMENT_HEALTH_CHECK', () => 
        this.preDeploymentHealthCheck()
      );

      // 2. Build and test
      await this.runStage(deployment, 'BUILD_AND_TEST', () => 
        this.buildAndTest()
      );

      // 3. Backup current deployment
      await this.runStage(deployment, 'BACKUP_CURRENT', () => 
        this.backupCurrentDeployment()
      );

      // 4. Deploy new version
      await this.runStage(deployment, 'DEPLOY_NEW_VERSION', () => 
        this.deployNewVersion()
      );

      // 5. Post-deployment health check
      await this.runStage(deployment, 'POST_DEPLOYMENT_HEALTH_CHECK', () => 
        this.postDeploymentHealthCheck()
      );

      // 6. Performance monitoring
      await this.runStage(deployment, 'PERFORMANCE_MONITORING', () => 
        this.monitorPerformance()
      );

      // 7. Final validation
      await this.runStage(deployment, 'FINAL_VALIDATION', () => 
        this.finalValidation()
      );

      deployment.status = 'SUCCESS';
      deployment.endTime = new Date().toISOString();
      deployment.duration = Date.now() - startTime;

      this.log(`Deployment ${deploymentId} completed successfully in ${deployment.duration}ms`);
      
      // Save deployment history
      this.deploymentHistory.unshift(deployment);
      if (this.deploymentHistory.length > 50) { // Keep last 50 deployments
        this.deploymentHistory = this.deploymentHistory.slice(0, 50);
      }
      this.saveDeploymentHistory();

      return deployment;

    } catch (error) {
      this.log(`Deployment ${deploymentId} failed: ${error.message}`, 'ERROR');
      
      deployment.status = 'FAILED';
      deployment.error = error.message;
      deployment.endTime = new Date().toISOString();
      deployment.duration = Date.now() - startTime;

      // Attempt automatic rollback
      try {
        await this.runStage(deployment, 'AUTOMATIC_ROLLBACK', () => 
          this.automaticRollback()
        );
        deployment.rollback = { status: 'SUCCESS', timestamp: new Date().toISOString() };
      } catch (rollbackError) {
        deployment.rollback = { status: 'FAILED', error: rollbackError.message, timestamp: new Date().toISOString() };
        this.log(`Automatic rollback failed: ${rollbackError.message}`, 'CRITICAL');
      }

      // Save deployment history
      this.deploymentHistory.unshift(deployment);
      this.saveDeploymentHistory();

      throw error;
    }
  }

  async runStage(deployment, stageName, stageFunction) {
    const stageStartTime = Date.now();
    this.log(`Running stage: ${stageName}`);
    
    try {
      const result = await stageFunction();
      
      const stage = {
        name: stageName,
        status: 'SUCCESS',
        startTime: new Date(stageStartTime).toISOString(),
        endTime: new Date().toISOString(),
        duration: Date.now() - stageStartTime,
        result
      };
      
      deployment.stages.push(stage);
      this.log(`Stage ${stageName} completed successfully in ${stage.duration}ms`);
      
      return result;
      
    } catch (error) {
      const stage = {
        name: stageName,
        status: 'FAILED',
        startTime: new Date(stageStartTime).toISOString(),
        endTime: new Date().toISOString(),
        duration: Date.now() - stageStartTime,
        error: error.message
      };
      
      deployment.stages.push(stage);
      this.log(`Stage ${stageName} failed: ${error.message}`, 'ERROR');
      
      throw error;
    }
  }

  async preDeploymentHealthCheck() {
    this.log('Running pre-deployment health check...');
    
    const healthChecks = [];
    
    // Check system resources
    const systemHealth = await this.checkSystemHealth();
    healthChecks.push(systemHealth);
    
    // Check current application health
    const appHealth = await this.checkApplicationHealth();
    healthChecks.push(appHealth);
    
    // Check dependencies
    const dependencyHealth = await this.checkDependencyHealth();
    healthChecks.push(dependencyHealth);
    
    // Check build environment
    const buildHealth = await this.checkBuildEnvironment();
    healthChecks.push(buildHealth);
    
    // Fail if any critical health checks fail
    const criticalFailures = healthChecks.filter(check => 
      check.status === 'FAILED' && check.critical
    );
    
    if (criticalFailures.length > 0) {
      throw new Error(`Pre-deployment health check failed: ${criticalFailures.map(f => f.message).join(', ')}`);
    }
    
    return { healthChecks, status: 'HEALTHY' };
  }

  async checkSystemHealth() {
    try {
      // Check disk space
      const diskSpace = execSync('df -h .', { encoding: 'utf8' });
      const availableSpace = parseInt(diskSpace.split('\n')[1].split(/\s+/)[3].replace('G', ''));
      
      if (availableSpace < 5) {
        return {
          type: 'DISK_SPACE',
          status: 'FAILED',
          critical: true,
          message: `Insufficient disk space: ${availableSpace}G available`,
          details: { availableSpace }
        };
      }
      
      // Check memory
      const memory = execSync('free -m', { encoding: 'utf8' });
      const availableMemory = parseInt(memory.split('\n')[1].split(/\s+/)[6]);
      
      if (availableMemory < 1000) {
        return {
          type: 'MEMORY',
          status: 'WARNING',
          critical: false,
          message: `Low memory: ${availableMemory}MB available`,
          details: { availableMemory }
        };
      }
      
      return {
        type: 'SYSTEM',
        status: 'HEALTHY',
        critical: false,
        message: 'System resources are sufficient',
        details: { diskSpace: availableSpace, memory: availableMemory }
      };
      
    } catch (error) {
      return {
        type: 'SYSTEM',
        status: 'FAILED',
        critical: true,
        message: `System health check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  async checkApplicationHealth() {
    try {
      // Check if PM2 processes are running
      const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      
      if (pm2Status.includes('errored') || pm2Status.includes('stopped')) {
        return {
          type: 'PM2_STATUS',
          status: 'FAILED',
          critical: true,
          message: 'Some PM2 processes are not running properly',
          details: { pm2Status }
        };
      }
      
      return {
        type: 'APPLICATION',
        status: 'HEALTHY',
        critical: false,
        message: 'All PM2 processes are running',
        details: { pm2Status }
      };
      
    } catch (error) {
      return {
        type: 'APPLICATION',
        status: 'FAILED',
        critical: true,
        message: `Application health check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  async checkDependencyHealth() {
    try {
      // Check if all dependencies are installed
      const nodeModules = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModules)) {
        return {
          type: 'DEPENDENCIES',
          status: 'FAILED',
          critical: true,
          message: 'Dependencies not installed',
          details: { nodeModulesExists: false }
        };
      }
      
      // Check package-lock.json integrity
      const packageLock = path.join(this.projectRoot, 'package-lock.json');
      if (!fs.existsSync(packageLock)) {
        return {
          type: 'DEPENDENCIES',
          status: 'WARNING',
          critical: false,
          message: 'package-lock.json not found',
          details: { packageLockExists: false }
        };
      }
      
      return {
        type: 'DEPENDENCIES',
        status: 'HEALTHY',
        critical: false,
        message: 'Dependencies are properly installed',
        details: { nodeModulesExists: true, packageLockExists: true }
      };
      
    } catch (error) {
      return {
        type: 'DEPENDENCIES',
        status: 'FAILED',
        critical: true,
        message: `Dependency health check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  async checkBuildEnvironment() {
    try {
      // Check Node.js version
      const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
      const nodeMajor = parseInt(nodeVersion.replace('v', '').split('.')[0]);
      
      if (nodeMajor < 16) {
        return {
          type: 'BUILD_ENVIRONMENT',
          status: 'FAILED',
          critical: true,
          message: `Node.js version ${nodeVersion} is too old. Required: 16+`,
          details: { nodeVersion, nodeMajor }
        };
      }
      
      // Check npm version
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      const npmMajor = parseInt(npmVersion.split('.')[0]);
      
      if (npmMajor < 8) {
        return {
          type: 'BUILD_ENVIRONMENT',
          status: 'WARNING',
          critical: false,
          message: `npm version ${npmVersion} is old. Recommended: 8+`,
          details: { npmVersion, npmMajor }
        };
      }
      
      return {
        type: 'BUILD_ENVIRONMENT',
        status: 'HEALTHY',
        critical: false,
        message: 'Build environment is ready',
        details: { nodeVersion, npmVersion }
      };
      
    } catch (error) {
      return {
        type: 'BUILD_ENVIRONMENT',
        status: 'FAILED',
        critical: true,
        message: `Build environment check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  async buildAndTest() {
    this.log('Building and testing application...');
    
    try {
      // Install dependencies if needed
      if (!fs.existsSync(path.join(this.projectRoot, 'node_modules'))) {
        this.log('Installing dependencies...');
        execSync('npm install', { cwd: this.projectRoot, stdio: 'inherit' });
      }
      
      // Run tests
      this.log('Running tests...');
      execSync('npm test', { cwd: this.projectRoot, stdio: 'inherit' });
      
      // Build application
      this.log('Building application...');
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'inherit' });
      
      // Verify build output
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        throw new Error('Build output not found');
      }
      
      const buildFiles = fs.readdirSync(distPath);
      if (buildFiles.length === 0) {
        throw new Error('Build output is empty');
      }
      
      return {
        status: 'SUCCESS',
        buildOutput: distPath,
        buildFiles: buildFiles.length,
        details: { distPath, buildFiles }
      };
      
    } catch (error) {
      throw new Error(`Build and test failed: ${error.message}`);
    }
  }

  async backupCurrentDeployment() {
    this.log('Backing up current deployment...');
    
    try {
      const backupDir = path.join(this.projectRoot, 'backups', `deployment-${Date.now()}`);
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Backup current dist folder
      const currentDist = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(currentDist)) {
        const backupDist = path.join(backupDir, 'dist');
        fs.mkdirSync(backupDist, { recursive: true });
        
        // Simple file copy (in production, use rsync or similar)
        this.copyDirectory(currentDist, backupDist);
      }
      
      // Backup PM2 ecosystem config
      const ecosystemConfig = path.join(this.projectRoot, 'ecosystem.config.cjs');
      if (fs.existsSync(ecosystemConfig)) {
        const backupConfig = path.join(backupDir, 'ecosystem.config.cjs');
        fs.copyFileSync(ecosystemConfig, backupConfig);
      }
      
      return {
        status: 'SUCCESS',
        backupPath: backupDir,
        details: { backupDir }
      };
      
    } catch (error) {
      throw new Error(`Backup failed: ${error.message}`);
    }
  }

  copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const items = fs.readdirSync(src);
    
    for (const item of items) {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        this.copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  async deployNewVersion() {
    this.log('Deploying new version...');
    
    try {
      // Reload PM2 processes with new build
      execSync('pm2 reload ecosystem.config.cjs', { 
        cwd: this.projectRoot, 
        stdio: 'inherit' 
      });
      
      // Wait for processes to start
      await this.sleep(5000);
      
      // Verify PM2 processes are running
      const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      
      if (pm2Status.includes('errored') || pm2Status.includes('stopped')) {
        throw new Error('PM2 processes failed to start properly');
      }
      
      return {
        status: 'SUCCESS',
        pm2Status,
        details: { deploymentTime: new Date().toISOString() }
      };
      
    } catch (error) {
      throw new Error(`Deployment failed: ${error.message}`);
    }
  }

  async postDeploymentHealthCheck() {
    this.log('Running post-deployment health check...');
    
    const healthChecks = [];
    
    // Check PM2 status
    const pm2Health = await this.checkPM2Health();
    healthChecks.push(pm2Health);
    
    // Check application endpoints
    const endpointHealth = await this.checkEndpointHealth();
    healthChecks.push(endpointHealth);
    
    // Check performance metrics
    const performanceHealth = await this.checkPerformanceHealth();
    healthChecks.push(performanceHealth);
    
    // Fail if any critical health checks fail
    const criticalFailures = healthChecks.filter(check => 
      check.status === 'FAILED' && check.critical
    );
    
    if (criticalFailures.length > 0) {
      throw new Error(`Post-deployment health check failed: ${criticalFailures.map(f => f.message).join(', ')}`);
    }
    
    return { healthChecks, status: 'HEALTHY' };
  }

  async checkPM2Health() {
    try {
      const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      
      if (pm2Status.includes('errored')) {
        return {
          type: 'PM2_HEALTH',
          status: 'FAILED',
          critical: true,
          message: 'PM2 processes have errors',
          details: { pm2Status }
        };
      }
      
      if (pm2Status.includes('stopped')) {
        return {
          type: 'PM2_HEALTH',
          status: 'FAILED',
          critical: true,
          message: 'Some PM2 processes are stopped',
          details: { pm2Status }
        };
      }
      
      return {
        type: 'PM2_HEALTH',
        status: 'HEALTHY',
        critical: false,
        message: 'All PM2 processes are running',
        details: { pm2Status }
      };
      
    } catch (error) {
      return {
        type: 'PM2_HEALTH',
        status: 'FAILED',
        critical: true,
        message: `PM2 health check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  async checkEndpointHealth() {
    try {
      // Check if the application is responding
      const port = process.env.PORT || 3000;
      const response = await this.httpGet(`http://localhost:${port}/health`);
      
      if (response.status === 200) {
        return {
          type: 'ENDPOINT_HEALTH',
          status: 'HEALTHY',
          critical: false,
          message: 'Application endpoints are responding',
          details: { port, status: response.status }
        };
      } else {
        return {
          type: 'ENDPOINT_HEALTH',
          status: 'FAILED',
          critical: true,
          message: `Application endpoint returned status ${response.status}`,
          details: { port, status: response.status }
        };
      }
      
    } catch (error) {
      return {
        type: 'ENDPOINT_HEALTH',
        status: 'FAILED',
        critical: true,
        message: `Endpoint health check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  async checkPerformanceHealth() {
    try {
      // Check memory usage
      const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      const memoryUsage = this.parsePM2MemoryUsage(pm2Status);
      
      if (memoryUsage > 80) { // 80% memory usage threshold
        return {
          type: 'PERFORMANCE_HEALTH',
          status: 'WARNING',
          critical: false,
          message: `High memory usage: ${memoryUsage}%`,
          details: { memoryUsage }
        };
      }
      
      return {
        type: 'PERFORMANCE_HEALTH',
        status: 'HEALTHY',
        critical: false,
        message: 'Performance metrics are normal',
        details: { memoryUsage }
      };
      
    } catch (error) {
      return {
        type: 'PERFORMANCE_HEALTH',
        status: 'FAILED',
        critical: false,
        message: `Performance health check failed: ${error.message}`,
        details: { error: error.message }
      };
    }
  }

  parsePM2MemoryUsage(pm2Status) {
    // Simple parsing of PM2 status output
    const lines = pm2Status.split('\n');
    let totalMemory = 0;
    let processCount = 0;
    
    for (const line of lines) {
      if (line.includes('MB') && line.includes('│')) {
        const parts = line.split('│');
        if (parts.length > 3) {
          const memoryStr = parts[3].trim();
          const memory = parseInt(memoryStr);
          if (!isNaN(memory)) {
            totalMemory += memory;
            processCount++;
          }
        }
      }
    }
    
    return processCount > 0 ? Math.round(totalMemory / processCount) : 0;
  }

  async monitorPerformance() {
    this.log('Monitoring performance...');
    
    try {
      // Collect performance metrics
      const metrics = await this.collectPerformanceMetrics();
      
      // Store metrics for analysis
      await this.storePerformanceMetrics(metrics);
      
      return {
        status: 'SUCCESS',
        metrics,
        details: { monitoringTime: new Date().toISOString() }
      };
      
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, 'WARN');
      return {
        status: 'WARNING',
        error: error.message,
        details: { monitoringTime: new Date().toISOString() }
      };
    }
  }

  async collectPerformanceMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      system: {},
      pm2: {},
      application: {}
    };
    
    try {
      // System metrics
      const uptime = execSync('uptime', { encoding: 'utf8' }).trim();
      const memory = execSync('free -m', { encoding: 'utf8' });
      const disk = execSync('df -h .', { encoding: 'utf8' });
      
      metrics.system = { uptime, memory, disk };
      
      // PM2 metrics
      const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      metrics.pm2 = { status: pm2Status };
      
      // Application metrics (if available)
      try {
        const port = process.env.PORT || 3000;
        const response = await this.httpGet(`http://localhost:${port}/metrics`);
        if (response.status === 200) {
          metrics.application = response.data;
        }
      } catch (error) {
        // Application metrics endpoint not available
      }
      
    } catch (error) {
      this.log(`Failed to collect performance metrics: ${error.message}`, 'WARN');
    }
    
    return metrics;
  }

  async storePerformanceMetrics(metrics) {
    try {
      const metricsFile = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
      let existingMetrics = [];
      
      if (fs.existsSync(metricsFile)) {
        existingMetrics = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
      }
      
      existingMetrics.push(metrics);
      
      // Keep only last 1000 metrics
      if (existingMetrics.length > 1000) {
        existingMetrics = existingMetrics.slice(-1000);
      }
      
      fs.writeFileSync(metricsFile, JSON.stringify(existingMetrics, null, 2));
      
    } catch (error) {
      this.log(`Failed to store performance metrics: ${error.message}`, 'WARN');
    }
  }

  async finalValidation() {
    this.log('Running final validation...');
    
    try {
      // Final health check
      const healthCheck = await this.postDeploymentHealthCheck();
      
      // Check deployment metrics
      const deploymentMetrics = await this.getDeploymentMetrics();
      
      // Generate deployment summary
      const summary = await this.generateDeploymentSummary(deploymentMetrics);
      
      return {
        status: 'SUCCESS',
        healthCheck,
        deploymentMetrics,
        summary,
        details: { validationTime: new Date().toISOString() }
      };
      
    } catch (error) {
      throw new Error(`Final validation failed: ${error.message}`);
    }
  }

  async getDeploymentMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        pm2Processes: 0,
        memoryUsage: 0,
        uptime: 0
      };
      
      const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      const lines = pm2Status.split('\n');
      
      for (const line of lines) {
        if (line.includes('online')) {
          metrics.pm2Processes++;
        }
      }
      
      const uptime = execSync('uptime', { encoding: 'utf8' }).trim();
      metrics.uptime = uptime;
      
      return metrics;
      
    } catch (error) {
      this.log(`Failed to get deployment metrics: ${error.message}`, 'WARN');
      return { timestamp: new Date().toISOString(), error: error.message };
    }
  }

  async generateDeploymentSummary(metrics) {
    const summary = {
      timestamp: new Date().toISOString(),
      status: 'SUCCESS',
      metrics,
      recommendations: []
    };
    
    // Generate recommendations based on metrics
    if (metrics.pm2Processes < 3) {
      summary.recommendations.push({
        priority: 'MEDIUM',
        action: 'Consider adding more PM2 processes for better reliability',
        impact: 'Improved application availability and performance'
      });
    }
    
    if (metrics.memoryUsage > 70) {
      summary.recommendations.push({
        priority: 'HIGH',
        action: 'Monitor memory usage closely',
        impact: 'Prevent potential memory issues'
      });
    }
    
    return summary;
  }

  async automaticRollback() {
    this.log('Initiating automatic rollback...');
    
    try {
      // Find the last successful deployment
      const lastSuccessful = this.deploymentHistory.find(d => d.status === 'SUCCESS');
      
      if (!lastSuccessful) {
        throw new Error('No successful deployment found for rollback');
      }
      
      // Restore from backup
      const backupDir = path.join(this.projectRoot, 'backups');
      const backups = fs.readdirSync(backupDir)
        .filter(dir => dir.startsWith('deployment-'))
        .sort()
        .reverse();
      
      if (backups.length === 0) {
        throw new Error('No backup found for rollback');
      }
      
      const latestBackup = path.join(backupDir, backups[0]);
      const backupDist = path.join(latestBackup, 'dist');
      
      if (fs.existsSync(backupDist)) {
        // Restore dist folder
        const currentDist = path.join(this.projectRoot, 'dist');
        if (fs.existsSync(currentDist)) {
          fs.rmSync(currentDist, { recursive: true });
        }
        this.copyDirectory(backupDist, currentDist);
        
        // Reload PM2 processes
        execSync('pm2 reload ecosystem.config.cjs', { 
          cwd: this.projectRoot, 
          stdio: 'inherit' 
        });
        
        this.log('Automatic rollback completed successfully');
        return { status: 'SUCCESS', backupUsed: latestBackup };
      } else {
        throw new Error('Backup dist folder not found');
      }
      
    } catch (error) {
      throw new Error(`Automatic rollback failed: ${error.message}`);
    }
  }

  async httpGet(url) {
    return new Promise((resolve, reject) => {
      const http = require('http');
      const https = require('https');
      
      const client = url.startsWith('https') ? https : http;
      
      const req = client.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            data: data,
            headers: res.headers
          });
        });
      });
      
      req.on('error', (error) => {
        reject(error);
      });
      
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  generateDeploymentId() {
    return `deploy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  async getDeploymentStatus(deploymentId) {
    const deployment = this.deploymentHistory.find(d => d.id === deploymentId);
    return deployment || null;
  }

  async getDeploymentHistory(limit = 10) {
    return this.deploymentHistory.slice(0, limit);
  }
}

// Run the deployment if called directly
if (require.main === module) {
  const deployment = new IntelligentDeployment();
  deployment.runIntelligentDeployment()
    .then(result => {
      console.log('Deployment completed successfully:', result.id);
      process.exit(0);
    })
    .catch(error => {
      console.error('Deployment failed:', error.message);
      process.exit(1);
    });
}

module.exports = IntelligentDeployment;