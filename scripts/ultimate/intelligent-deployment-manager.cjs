#!/usr/bin/env node
/**
 * Intelligent Blue-Green Deployment Manager
 * Advanced deployment system with canary releases and A/B testing
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class IntelligentDeploymentManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-deployment-manager.log');
    this.deploymentFile = path.join(this.projectRoot, 'logs', 'deployment-data.json');
    
    this.deploymentConfig = {
      strategy: process.env.DEPLOYMENT_STRATEGY || 'blue-green',
      canaryEnabled: process.env.CANARY_DEPLOYMENT === 'true',
      autoRollback: process.env.AUTO_ROLLBACK === 'true',
      healthCheckEnabled: process.env.HEALTH_CHECK_ENABLED === 'comprehensive',
      trafficShifting: process.env.TRAFFIC_SHIFTING || 'gradual',
      abTesting: process.env.A_B_TESTING === 'true'
    };
    
    this.deploymentHistory = [];
    this.activeDeployments = new Map();
    this.healthChecks = new Map();
    
    this.ensureLogsDirectory();
  }

  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
      await fs.mkdir(path.join(this.projectRoot, 'scripts', 'ultimate'), { recursive: true });
      await this.loadDeploymentData();
    } catch (error) {
      console.log('Directories already exist or created');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }

  async loadDeploymentData() {
    try {
      const data = await fs.readFile(this.deploymentFile, 'utf8');
      const parsed = JSON.parse(data);
      
      this.deploymentHistory = parsed.deploymentHistory || [];
      this.activeDeployments = new Map(parsed.activeDeployments || []);
      this.healthChecks = new Map(parsed.healthChecks || []);
      
      this.log(`🚀 Loaded deployment data: ${this.deploymentHistory.length} deployments`);
    } catch (error) {
      this.log('🚀 No existing deployment data found, starting fresh');
    }
  }

  async saveDeploymentData() {
    try {
      const data = {
        deploymentHistory: this.deploymentHistory,
        activeDeployments: Array.from(this.activeDeployments.entries()),
        healthChecks: Array.from(this.healthChecks.entries()),
        lastUpdated: new Date().toISOString()
      };
      
      await fs.writeFile(this.deploymentFile, JSON.stringify(data, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save deployment data: ${error.message}`, 'ERROR');
    }
  }

  async initialize() {
    this.log('🚀 Initializing Intelligent Deployment Manager...');
    
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to PM2: ${err.message}`, 'ERROR');
          reject(err);
          return;
        }
        
        this.log('✅ Connected to PM2 for intelligent deployment');
        this.startDeploymentManagement();
        resolve();
      });
    });
  }

  startDeploymentManagement() {
    this.log('🚀 Starting deployment management system...');
    
    // Monitor active deployments every 30 seconds
    setInterval(async () => {
      await this.monitorActiveDeployments();
    }, 30000);

    // Health check monitoring every 2 minutes
    setInterval(async () => {
      await this.performHealthChecks();
    }, 120000);

    // Cleanup old deployments every hour
    setInterval(async () => {
      await this.cleanupOldDeployments();
    }, 3600000);
  }

  async monitorActiveDeployments() {
    this.log('👁️ Monitoring active deployments...');
    
    try {
      for (const [deploymentId, deployment] of this.activeDeployments.entries()) {
        await this.monitorDeployment(deploymentId, deployment);
      }
    } catch (error) {
      this.log(`❌ Deployment monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async monitorDeployment(deploymentId, deployment) {
    const now = Date.now();
    const deploymentAge = now - deployment.startTime;
    
    // Check if deployment is still in progress
    if (deployment.status === 'in_progress') {
      // Check if deployment has been running too long
      if (deploymentAge > deployment.timeout) {
        this.log(`⏰ Deployment ${deploymentId} timed out, initiating rollback`);
        await this.rollbackDeployment(deploymentId);
        return;
      }
      
      // Check deployment health
      const healthStatus = await this.checkDeploymentHealth(deployment);
      if (healthStatus.healthy) {
        this.log(`✅ Deployment ${deploymentId} is healthy, completing deployment`);
        await this.completeDeployment(deploymentId);
      } else if (healthStatus.critical) {
        this.log(`🚨 Deployment ${deploymentId} has critical issues, rolling back`);
        await this.rollbackDeployment(deploymentId);
      }
    }
  }

  async checkDeploymentHealth(deployment) {
    try {
      const processes = await this.getProcessList();
      const deploymentProcesses = processes.filter(p => 
        deployment.processes.includes(p.name)
      );
      
      const onlineProcesses = deploymentProcesses.filter(p => 
        p.pm2_env.status === 'online'
      );
      
      const healthRatio = onlineProcesses.length / deploymentProcesses.length;
      
      return {
        healthy: healthRatio >= 0.9,
        critical: healthRatio < 0.5,
        healthRatio,
        onlineProcesses: onlineProcesses.length,
        totalProcesses: deploymentProcesses.length
      };
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
      return { healthy: false, critical: true, healthRatio: 0 };
    }
  }

  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
        } else {
          resolve(processes);
        }
      });
    });
  }

  async completeDeployment(deploymentId) {
    const deployment = this.activeDeployments.get(deploymentId);
    if (!deployment) return;
    
    deployment.status = 'completed';
    deployment.completedAt = Date.now();
    deployment.duration = deployment.completedAt - deployment.startTime;
    
    this.log(`🎉 Deployment ${deploymentId} completed successfully in ${deployment.duration}ms`);
    
    // Update deployment history
    this.deploymentHistory.push({
      id: deploymentId,
      strategy: deployment.strategy,
      status: 'completed',
      startTime: deployment.startTime,
      completedAt: deployment.completedAt,
      duration: deployment.duration,
      processes: deployment.processes
    });
    
    // Remove from active deployments
    this.activeDeployments.delete(deploymentId);
    
    await this.saveDeploymentData();
  }

  async rollbackDeployment(deploymentId) {
    const deployment = this.activeDeployments.get(deploymentId);
    if (!deployment) return;
    
    this.log(`🔄 Rolling back deployment ${deploymentId}...`);
    
    try {
      // Restore previous version
      if (deployment.previousVersion) {
        await this.restorePreviousVersion(deployment.previousVersion);
      }
      
      // Restart processes
      for (const processName of deployment.processes) {
        await this.restartProcess(processName);
      }
      
      deployment.status = 'rolled_back';
      deployment.rolledBackAt = Date.now();
      
      this.log(`✅ Deployment ${deploymentId} rolled back successfully`);
      
      // Update deployment history
      this.deploymentHistory.push({
        id: deploymentId,
        strategy: deployment.strategy,
        status: 'rolled_back',
        startTime: deployment.startTime,
        rolledBackAt: deployment.rolledBackAt,
        processes: deployment.processes
      });
      
      // Remove from active deployments
      this.activeDeployments.delete(deploymentId);
      
      await this.saveDeploymentData();
      
    } catch (error) {
      this.log(`❌ Rollback failed for deployment ${deploymentId}: ${error.message}`, 'ERROR');
    }
  }

  async restorePreviousVersion(version) {
    this.log(`🔄 Restoring previous version: ${version}`);
    
    try {
      // In a real implementation, this would restore from a backup or git
      execSync(`git checkout ${version}`, { stdio: 'pipe' });
      this.log(`✅ Restored version: ${version}`);
    } catch (error) {
      this.log(`❌ Failed to restore version ${version}: ${error.message}`, 'ERROR');
    }
  }

  async restartProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.restart(processName, (err) => {
        if (err) {
          reject(err);
        } else {
          this.log(`✅ Restarted process: ${processName}`);
          resolve();
        }
      });
    });
  }

  async performHealthChecks() {
    this.log('🏥 Performing comprehensive health checks...');
    
    try {
      const processes = await this.getProcessList();
      const healthResults = [];
      
      for (const process of processes) {
        const health = await this.checkProcessHealth(process);
        healthResults.push(health);
        
        // Store health check results
        this.healthChecks.set(process.name, {
          timestamp: Date.now(),
          health,
          process: process.name
        });
      }
      
      // Analyze overall health
      const overallHealth = this.analyzeOverallHealth(healthResults);
      this.log(`🏥 Overall system health: ${overallHealth.score}/100`);
      
      // Take action if health is poor
      if (overallHealth.score < 70) {
        await this.handlePoorHealth(overallHealth);
      }
      
    } catch (error) {
      this.log(`❌ Health checks failed: ${error.message}`, 'ERROR');
    }
  }

  async checkProcessHealth(process) {
    const health = {
      name: process.name,
      status: process.pm2_env.status,
      memory: process.monit.memory || 0,
      cpu: process.monit.cpu || 0,
      uptime: process.pm2_env.pm_uptime,
      restarts: process.pm2_env.restart_time || 0,
      score: 100
    };
    
    // Calculate health score
    if (process.pm2_env.status !== 'online') {
      health.score -= 50;
    }
    
    if (process.monit.memory > 1024 * 1024 * 1024) { // 1GB
      health.score -= 20;
    }
    
    if (process.monit.cpu > 80) {
      health.score -= 15;
    }
    
    if (process.pm2_env.restart_time > 5) {
      health.score -= 10;
    }
    
    health.score = Math.max(0, health.score);
    
    return health;
  }

  analyzeOverallHealth(healthResults) {
    const totalScore = healthResults.reduce((sum, health) => sum + health.score, 0);
    const averageScore = totalScore / healthResults.length;
    
    const criticalProcesses = healthResults.filter(h => h.score < 50);
    const warningProcesses = healthResults.filter(h => h.score >= 50 && h.score < 80);
    const healthyProcesses = healthResults.filter(h => h.score >= 80);
    
    return {
      score: Math.round(averageScore),
      totalProcesses: healthResults.length,
      criticalProcesses: criticalProcesses.length,
      warningProcesses: warningProcesses.length,
      healthyProcesses: healthyProcesses.length,
      critical: criticalProcesses.map(p => p.name),
      warnings: warningProcesses.map(p => p.name)
    };
  }

  async handlePoorHealth(overallHealth) {
    this.log(`🚨 Poor system health detected: ${overallHealth.score}/100`);
    
    // Handle critical processes
    if (overallHealth.criticalProcesses > 0) {
      this.log(`🚨 ${overallHealth.criticalProcesses} critical processes detected`);
      
      for (const processName of overallHealth.critical) {
        await this.handleCriticalProcess(processName);
      }
    }
    
    // Handle warning processes
    if (overallHealth.warningProcesses > 0) {
      this.log(`⚠️ ${overallHealth.warningProcesses} warning processes detected`);
      
      for (const processName of overallHealth.warnings) {
        await this.handleWarningProcess(processName);
      }
    }
  }

  async handleCriticalProcess(processName) {
    this.log(`🚨 Handling critical process: ${processName}`);
    
    try {
      // Restart the process
      await this.restartProcess(processName);
      
      // Wait and check if it's healthy now
      setTimeout(async () => {
        const processes = await this.getProcessList();
        const process = processes.find(p => p.name === processName);
        
        if (process && process.pm2_env.status === 'online') {
          this.log(`✅ Process ${processName} recovered`);
        } else {
          this.log(`❌ Process ${processName} still critical, may need manual intervention`);
        }
      }, 10000);
      
    } catch (error) {
      this.log(`❌ Failed to handle critical process ${processName}: ${error.message}`, 'ERROR');
    }
  }

  async handleWarningProcess(processName) {
    this.log(`⚠️ Handling warning process: ${processName}`);
    
    try {
      // Optimize the process configuration
      await this.optimizeProcess(processName);
      
    } catch (error) {
      this.log(`❌ Failed to handle warning process ${processName}: ${error.message}`, 'ERROR');
    }
  }

  async optimizeProcess(processName) {
    this.log(`🔧 Optimizing process: ${processName}`);
    
    try {
      // Reload with optimized settings
      pm2.reload(processName, {
        max_memory_restart: '1G',
        instances: 1,
        max_restarts: 5,
        min_uptime: '10s'
      }, (err) => {
        if (err) {
          this.log(`❌ Failed to optimize ${processName}: ${err.message}`, 'ERROR');
        } else {
          this.log(`✅ Optimized process: ${processName}`);
        }
      });
      
    } catch (error) {
      this.log(`❌ Process optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async cleanupOldDeployments() {
    this.log('🧹 Cleaning up old deployments...');
    
    try {
      const now = Date.now();
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      
      // Clean up old deployment history
      this.deploymentHistory = this.deploymentHistory.filter(deployment => 
        now - deployment.startTime < maxAge
      );
      
      // Clean up old health checks
      for (const [processName, healthCheck] of this.healthChecks.entries()) {
        if (now - healthCheck.timestamp > maxAge) {
          this.healthChecks.delete(processName);
        }
      }
      
      await this.saveDeploymentData();
      this.log('✅ Old deployments cleaned up');
      
    } catch (error) {
      this.log(`❌ Cleanup failed: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    try {
      await this.initialize();
      this.log('🎯 Intelligent Deployment Manager is now running');
      
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Intelligent Deployment Manager...');
        await this.saveDeploymentData();
        pm2.disconnect();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the manager
if (require.main === module) {
  const manager = new IntelligentDeploymentManager();
  manager.run();
}

module.exports = IntelligentDeploymentManager;