#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const http = require('http');
const https = require('https');

class SmartDeployment {
  constructor() {
    this.deploymentHistory = [];
    this.currentDeployment = null;
    this.healthCheckResults = new Map();
    this.performanceMetrics = new Map();
    this.logFile = path.join(__dirname, 'logs', 'smart-deployment.log');
    this.ensureLogDirectory();
    this.loadConfiguration();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadConfiguration() {
    this.config = {
      deploymentCheckInterval: parseInt(process.env.DEPLOYMENT_CHECK_INTERVAL) || 300000, // 5 minutes
      autoRollback: process.env.AUTO_ROLLBACK === 'true',
      healthCheckEndpoints: (process.env.HEALTH_CHECK_ENDPOINTS || '/api/health,/health').split(','),
      performanceThreshold: parseFloat(process.env.PERFORMANCE_THRESHOLD) || 0.9,
      maxDeploymentTime: 300000, // 5 minutes
      rollbackThreshold: 3 // Number of failed health checks before rollback
    };
    
    this.log('Smart Deployment configuration loaded:', this.config);
  }

  async startDeployment(deploymentConfig) {
    this.log('🚀 Starting smart deployment...');
    
    const deployment = {
      id: this.generateDeploymentId(),
      timestamp: new Date().toISOString(),
      config: deploymentConfig,
      status: 'starting',
      stages: [],
      healthChecks: [],
      performanceMetrics: [],
      rollbackTriggered: false
    };

    this.currentDeployment = deployment;
    this.deploymentHistory.push(deployment);

    try {
      // Stage 1: Pre-deployment checks
      await this.runPreDeploymentChecks(deployment);
      
      // Stage 2: Build and deploy
      await this.runBuildAndDeploy(deployment);
      
      // Stage 3: Post-deployment verification
      await this.runPostDeploymentVerification(deployment);
      
      // Stage 4: Continuous monitoring
      this.startDeploymentMonitoring(deployment);
      
      this.log('✅ Deployment started successfully');
      return deployment;
      
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`, 'error');
      deployment.status = 'failed';
      deployment.error = error.message;
      
      if (this.config.autoRollback) {
        await this.triggerRollback(deployment);
      }
      
      throw error;
    }
  }

  async runPreDeploymentChecks(deployment) {
    this.log('🔍 Running pre-deployment checks...');
    
    const stage = {
      name: 'pre-deployment-checks',
      startTime: Date.now(),
      status: 'running'
    };
    
    deployment.stages.push(stage);

    // Check system resources
    const systemCheck = await this.checkSystemResources();
    if (!systemCheck.healthy) {
      throw new Error(`System resources insufficient: ${systemCheck.message}`);
    }

    // Check dependencies
    const dependencyCheck = await this.checkDependencies();
    if (!dependencyCheck.healthy) {
      throw new Error(`Dependency check failed: ${dependencyCheck.message}`);
    }

    // Check current application health
    const currentHealth = await this.performHealthChecks();
    if (!currentHealth.healthy) {
      throw new Error(`Current application unhealthy: ${currentHealth.message}`);
    }

    stage.status = 'completed';
    stage.endTime = Date.now();
    stage.duration = stage.endTime - stage.startTime;
    
    this.log('✅ Pre-deployment checks completed');
  }

  async runBuildAndDeploy(deployment) {
    this.log('🏗️ Running build and deploy...');
    
    const stage = {
      name: 'build-and-deploy',
      startTime: Date.now(),
      status: 'running'
    };
    
    deployment.stages.push(stage);

    try {
      // Build the application
      this.log('📦 Building application...');
      execSync('npm run build', { stdio: 'pipe' });
      
      // Deploy to target environment
      this.log('🚀 Deploying application...');
      execSync('npm run deploy', { stdio: 'pipe' });
      
      stage.status = 'completed';
      stage.endTime = Date.now();
      stage.duration = stage.endTime - stage.startTime;
      
      this.log('✅ Build and deploy completed');
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = Date.now();
      stage.duration = stage.endTime - stage.startTime;
      
      throw new Error(`Build and deploy failed: ${error.message}`);
    }
  }

  async runPostDeploymentVerification(deployment) {
    this.log('✅ Running post-deployment verification...');
    
    const stage = {
      name: 'post-deployment-verification',
      startTime: Date.now(),
      status: 'running'
    };
    
    deployment.stages.push(stage);

    // Wait for application to be ready
    await this.waitForApplicationReady();
    
    // Perform initial health checks
    const healthCheck = await this.performHealthChecks();
    if (!healthCheck.healthy) {
      throw new Error(`Post-deployment health check failed: ${healthCheck.message}`);
    }

    // Check performance metrics
    const performanceCheck = await this.checkPerformanceMetrics();
    if (!performanceCheck.healthy) {
      throw new Error(`Performance check failed: ${performanceCheck.message}`);
    }

    stage.status = 'completed';
    stage.endTime = Date.now();
    stage.duration = stage.endTime - stage.startTime;
    
    deployment.status = 'deployed';
    this.log('✅ Post-deployment verification completed');
  }

  startDeploymentMonitoring(deployment) {
    this.log('👀 Starting deployment monitoring...');
    
    const monitoringInterval = setInterval(async () => {
      try {
        // Perform health checks
        const healthCheck = await this.performHealthChecks();
        deployment.healthChecks.push({
          timestamp: new Date().toISOString(),
          result: healthCheck
        });

        // Check performance
        const performance = await this.checkPerformanceMetrics();
        deployment.performanceMetrics.push({
          timestamp: new Date().toISOString(),
          metrics: performance
        });

        // Check if rollback is needed
        if (this.shouldTriggerRollback(deployment)) {
          this.log('⚠️ Rollback conditions met, triggering rollback...', 'warn');
          await this.triggerRollback(deployment);
          clearInterval(monitoringInterval);
          return;
        }

        // Check if monitoring should stop (deployment stable)
        if (this.isDeploymentStable(deployment)) {
          this.log('✅ Deployment is stable, reducing monitoring frequency');
          clearInterval(monitoringInterval);
          this.startReducedMonitoring(deployment);
        }

      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, 'error');
        deployment.healthChecks.push({
          timestamp: new Date().toISOString(),
          result: { healthy: false, error: error.message }
        });
      }
    }, 30000); // Check every 30 seconds initially
  }

  startReducedMonitoring(deployment) {
    // Switch to reduced monitoring frequency
    setInterval(async () => {
      try {
        const healthCheck = await this.performHealthChecks();
        deployment.healthChecks.push({
          timestamp: new Date().toISOString(),
          result: healthCheck
        });

        if (!healthCheck.healthy) {
          this.log('⚠️ Health check failed during reduced monitoring', 'warn');
          await this.triggerRollback(deployment);
        }
      } catch (error) {
        this.log(`❌ Reduced monitoring error: ${error.message}`, 'error');
      }
    }, 300000); // Check every 5 minutes
  }

  async performHealthChecks() {
    const results = [];
    
    for (const endpoint of this.config.healthCheckEndpoints) {
      try {
        const result = await this.checkEndpoint(endpoint);
        results.push({ endpoint, ...result });
      } catch (error) {
        results.push({ endpoint, healthy: false, error: error.message });
      }
    }

    const healthyEndpoints = results.filter(r => r.healthy).length;
    const totalEndpoints = results.length;
    const healthPercentage = healthyEndpoints / totalEndpoints;

    return {
      healthy: healthPercentage >= this.config.performanceThreshold,
      percentage: healthPercentage,
      results,
      message: `${healthyEndpoints}/${totalEndpoints} endpoints healthy`
    };
  }

  async checkEndpoint(endpoint) {
    return new Promise((resolve) => {
      const url = endpoint.startsWith('http') ? endpoint : `http://localhost:3000${endpoint}`;
      const client = url.startsWith('https') ? https : http;
      
      const req = client.get(url, { timeout: 10000 }, (res) => {
        const healthy = res.statusCode >= 200 && res.statusCode < 300;
        resolve({
          healthy,
          statusCode: res.statusCode,
          responseTime: Date.now() - startTime
        });
      });

      const startTime = Date.now();
      
      req.on('error', (error) => {
        resolve({
          healthy: false,
          error: error.message,
          responseTime: Date.now() - startTime
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          healthy: false,
          error: 'Request timeout',
          responseTime: Date.now() - startTime
        });
      });
    });
  }

  async checkPerformanceMetrics() {
    try {
      // Simulate performance metrics collection
      const metrics = {
        responseTime: Math.random() * 100 + 50, // 50-150ms
        throughput: Math.random() * 1000 + 500, // 500-1500 req/s
        errorRate: Math.random() * 0.05, // 0-5%
        memoryUsage: Math.random() * 0.3 + 0.4, // 40-70%
        cpuUsage: Math.random() * 0.4 + 0.3 // 30-70%
      };

      const healthy = metrics.responseTime < 200 && 
                     metrics.errorRate < 0.02 && 
                     metrics.memoryUsage < 0.8 && 
                     metrics.cpuUsage < 0.8;

      return {
        healthy,
        metrics,
        message: healthy ? 'Performance metrics within acceptable range' : 'Performance metrics below threshold'
      };
    } catch (error) {
      return {
        healthy: false,
        error: error.message,
        message: 'Failed to collect performance metrics'
      };
    }
  }

  async checkSystemResources() {
    try {
      // Check available disk space
      const diskSpace = execSync('df -h . | tail -1 | awk \'{print $4}\'').toString().trim();
      
      // Check available memory
      const memory = execSync('free -m | grep Mem | awk \'{print $7}\'').toString().trim();
      
      const healthy = parseInt(memory) > 512; // At least 512MB available
      
      return {
        healthy,
        diskSpace,
        availableMemory: `${memory}MB`,
        message: healthy ? 'System resources sufficient' : 'Insufficient system resources'
      };
    } catch (error) {
      return {
        healthy: false,
        error: error.message,
        message: 'Failed to check system resources'
      };
    }
  }

  async checkDependencies() {
    try {
      // Check if all required packages are installed
      execSync('npm list --depth=0', { stdio: 'pipe' });
      
      return {
        healthy: true,
        message: 'All dependencies are properly installed'
      };
    } catch (error) {
      return {
        healthy: false,
        error: error.message,
        message: 'Dependency check failed'
      };
    }
  }

  async waitForApplicationReady() {
    this.log('⏳ Waiting for application to be ready...');
    
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds
    
    while (attempts < maxAttempts) {
      try {
        const healthCheck = await this.performHealthChecks();
        if (healthCheck.healthy) {
          this.log('✅ Application is ready');
          return;
        }
      } catch (error) {
        // Continue waiting
      }
      
      attempts++;
      await this.sleep(1000);
    }
    
    throw new Error('Application failed to become ready within timeout');
  }

  shouldTriggerRollback(deployment) {
    if (deployment.rollbackTriggered) return false;
    
    // Check recent health checks
    const recentHealthChecks = deployment.healthChecks.slice(-this.config.rollbackThreshold);
    const failedChecks = recentHealthChecks.filter(check => !check.result.healthy).length;
    
    if (failedChecks >= this.config.rollbackThreshold) {
      return true;
    }

    // Check deployment time
    const deploymentTime = Date.now() - new Date(deployment.timestamp).getTime();
    if (deploymentTime > this.config.maxDeploymentTime) {
      return true;
    }

    return false;
  }

  isDeploymentStable(deployment) {
    // Consider deployment stable after 5 consecutive successful health checks
    const recentChecks = deployment.healthChecks.slice(-5);
    if (recentChecks.length < 5) return false;
    
    return recentChecks.every(check => check.result.healthy);
  }

  async triggerRollback(deployment) {
    this.log('🔄 Triggering rollback...', 'warn');
    
    deployment.rollbackTriggered = true;
    deployment.status = 'rolling-back';
    
    try {
      // Execute rollback command
      execSync('npm run rollback', { stdio: 'pipe' });
      
      deployment.status = 'rolled-back';
      this.log('✅ Rollback completed successfully');
      
    } catch (error) {
      deployment.status = 'rollback-failed';
      deployment.rollbackError = error.message;
      this.log(`❌ Rollback failed: ${error.message}`, 'error');
    }
  }

  generateDeploymentId() {
    return `deployment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getDeploymentStatus(deploymentId) {
    if (deploymentId) {
      return this.deploymentHistory.find(d => d.id === deploymentId);
    }
    return this.currentDeployment;
  }

  getDeploymentHistory() {
    return this.deploymentHistory;
  }

  generateDeploymentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalDeployments: this.deploymentHistory.length,
      successfulDeployments: this.deploymentHistory.filter(d => d.status === 'deployed').length,
      failedDeployments: this.deploymentHistory.filter(d => d.status === 'failed').length,
      rollbacks: this.deploymentHistory.filter(d => d.rollbackTriggered).length,
      currentDeployment: this.currentDeployment,
      recentDeployments: this.deploymentHistory.slice(-10)
    };

    const reportPath = path.join(__dirname, 'logs', 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Deployment report generated: ${reportPath}`);
    return report;
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous deployment monitoring...');
    
    setInterval(async () => {
      if (this.currentDeployment) {
        this.log('🔍 Checking deployment status...');
        const status = this.getDeploymentStatus();
        this.log(`📊 Current deployment status: ${status.status}`);
      }
    }, this.config.deploymentCheckInterval);
  }
}

// CLI handling
const smartDeployment = new SmartDeployment();
const command = process.argv[2];

switch (command) {
  case 'start':
    const configPath = process.argv[3];
    let config = {};
    
    if (configPath && fs.existsSync(configPath)) {
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    
    smartDeployment.startDeployment(config).then(() => {
      process.exit(0);
    }).catch((error) => {
      console.error('Deployment failed:', error.message);
      process.exit(1);
    });
    break;
  case 'monitor':
    smartDeployment.startContinuousMonitoring();
    break;
  case 'status':
    const deploymentId = process.argv[3];
    const status = smartDeployment.getDeploymentStatus(deploymentId);
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
    break;
  case 'history':
    const history = smartDeployment.getDeploymentHistory();
    console.log(JSON.stringify(history, null, 2));
    process.exit(0);
    break;
  case 'report':
    const report = smartDeployment.generateDeploymentReport();
    console.log(JSON.stringify(report, null, 2));
    process.exit(0);
    break;
  default:
    console.log('Usage: node smart-deployment.cjs [start|monitor|status|history|report] [config-path|deployment-id]');
    console.log('\nCommands:');
    console.log('  start     - Start a new deployment');
    console.log('  monitor   - Start continuous monitoring');
    console.log('  status    - Get deployment status');
    console.log('  history   - Get deployment history');
    console.log('  report    - Generate deployment report');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Smart Deployment...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Smart Deployment...');
  process.exit(0);
});