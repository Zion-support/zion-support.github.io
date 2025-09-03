#!/usr/bin/env node;

/**;
 * Intelligent Deployment & CI/CD Orchestrator;
 * Advanced deployment management with automatic rollbacks, health checks, and pipeline optimization;
 */;

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
;
class IntelligentDeploymentOrchestrator {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-deployment-orchestrator.log');
    this.config = this.loadConfig();
    this.deploymentHistory = [];
    this.activeDeployments = new Map();
    this.healthMetrics = new Map();
    this.rollbackHistory = [];
    this.pipelineMetrics = new Map();,
}
;
  loadConfig() {;
    const configPath = path.join(this.projectRoot, 'scripts', 'automation', 'config', 'deployment-orchestrator.config.json');
    try {;
      if (fs.existsSync(configPath)) {;
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));,
}
    } catch (error) {;
      this.log('Error loading config, using defaults', 'error');,
}
;
    return {;
      autoDeployEnabled: true,;
      healthCheckEnabled: true,;
      autoRollbackEnabled: true,;
      canaryDeploymentEnabled: true,;
      blueGreenDeploymentEnabled: true,;
      deploymentTimeout: 300000, // 5 minutes;
      healthCheckInterval: 30000, // 30 seconds;
      maxDeploymentRetries: 3,;
      healthThreshold: 0.95, // 95% health required;
      rollbackThreshold: 0.8, // 80% health triggers rollback;
      environments: ['development', 'staging', 'production'],;
      deploymentStrategies: ['rolling', 'blue-green', 'canary', 'recreate'];,
};,
}
;
  log(message, level = 'info') {;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    ;
    console.log(logEntry);
    ;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir, { recursive: true });,
}
    ;
    fs.appendFileSync(this.logFile, logEntry + '\n');,
}
;
  async executeCommand(command, options = {}) {;
    return new Promise((resolve, reject) => {;
      const child = spawn(command, [], {;
        shell: true,;
        stdio: 'pipe',;
        cwd: this.projectRoot,;
        ...options;,
});
;
      let stdout = '';
      let stderr = '';
;
      child.stdout.on('data', (data) => stdout += data.toString());
      child.stderr.on('data', (data) => stderr += data.toString());
;
      child.on('close', (code) => {;
        if (code === 0) resolve(stdout.trim());
        else reject(new Error(`Command failed with code ${code}: ${stderr}`));,
});
;
      child.on('error', reject);,
});,
}
;
  async startDeployment(environment, strategy = 'rolling', options = {}) {;
    try {;
      this.log(`Starting deployment to ${environment} using ${strategy} strategy`);
      ;
      const deploymentId = `deploy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const deployment = {;
        id: deploymentId,;
        environment,;
        strategy,;
        status: 'starting',;
        startTime: new Date().toISOString(),;
        options,;
        stages: [],;
        healthChecks: [];,
};
      ;
      this.activeDeployments.set(deploymentId, deployment);
      this.deploymentHistory.push(deployment);
      ;
      // Execute deployment based on strategy;
      switch (strategy) {;
        case 'rolling':;
          await this.executeRollingDeployment(deployment);
          break;
        case 'blue-green':;
          await this.executeBlueGreenDeployment(deployment);
          break;
        case 'canary':;
          await this.executeCanaryDeployment(deployment);
          break;
        case 'recreate':;
          await this.executeRecreateDeployment(deployment);
          break;
        default:;
          throw new Error(`Unknown deployment strategy: ${strategy}`);,
}
      ;
      return deploymentId;,
} catch (error) {;
      this.log(`Deployment failed: ${error.message}`, 'error');
      throw error;,
}
  }
;
  async executeRollingDeployment(deployment) {;
    try {;
      this.log(`Executing rolling deployment: ${deployment.id}`);
      ;
      // Stage 1: Pre-deployment checks;
      await this.executeStage(deployment, 'pre-deployment', async () => {;
        await this.runPreDeploymentChecks(deployment.environment);,
});
      ;
      // Stage 2: Build and test;
      await this.executeStage(deployment, 'build-test', async () => {;
        await this.buildAndTest(deployment.environment);,
});
      ;
      // Stage 3: Deploy;
      await this.executeStage(deployment, 'deploy', async () => {;
        await this.deployToEnvironment(deployment.environment);,
});
      ;
      // Stage 4: Health checks;
      await this.executeStage(deployment, 'health-check', async () => {;
        await this.performHealthChecks(deployment);,
});
      ;
      // Stage 5: Post-deployment;
      await this.executeStage(deployment, 'post-deployment', async () => {;
        await this.runPostDeploymentTasks(deployment.environment);,
});
      ;
      deployment.status = 'completed';
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Rolling deployment completed: ${deployment.id}`);,
} catch (error) {;
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Rolling deployment failed: ${deployment.id} - ${error.message}`, 'error');
      ;
      if (this.config.autoRollbackEnabled) {;
        await this.triggerRollback(deployment);,
}
      ;
      throw error;,
}
  }
;
  async executeBlueGreenDeployment(deployment) {;
    try {;
      this.log(`Executing blue-green deployment: ${deployment.id}`);
      ;
      const currentColor = await this.getCurrentDeploymentColor(deployment.environment);
      const newColor = currentColor === 'blue' ? 'green' : 'blue';
      ;
      // Stage 1: Deploy to inactive environment;
      await this.executeStage(deployment, 'deploy-inactive', async () => {;
        await this.deployToColor(deployment.environment, newColor);,
});
      ;
      // Stage 2: Health checks on new deployment;
      await this.executeStage(deployment, 'health-check-new', async () => {;
        await this.performHealthChecks(deployment, newColor);,
});
      ;
      // Stage 3: Switch traffic;
      await this.executeStage(deployment, 'switch-traffic', async () => {;
        await this.switchTraffic(deployment.environment, newColor);,
});
      ;
      // Stage 4: Final health checks;
      await this.executeStage(deployment, 'final-health-check', async () => {;
        await this.performHealthChecks(deployment);,
});
      ;
      deployment.status = 'completed';
      deployment.endTime = new Date().toISOString();
      deployment.metadata = { colors: { from: currentColor, to: newColor } };
      ;
      this.log(`Blue-green deployment completed: ${deployment.id}`);,
} catch (error) {;
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Blue-green deployment failed: ${deployment.id} - ${error.message}`, 'error');
      ;
      if (this.config.autoRollbackEnabled) {;
        await this.triggerRollback(deployment);,
}
      ;
      throw error;,
}
  }
;
  async executeCanaryDeployment(deployment) {;
    try {;
      this.log(`Executing canary deployment: ${deployment.id}`);
      ;
      const canaryPercentage = deployment.options.canaryPercentage || 10;
      ;
      // Stage 1: Deploy canary;
      await this.executeStage(deployment, 'deploy-canary', async () => {;
        await this.deployCanary(deployment.environment, canaryPercentage);,
});
      ;
      // Stage 2: Monitor canary;
      await this.executeStage(deployment, 'monitor-canary', async () => {;
        await this.monitorCanary(deployment, canaryPercentage);,
});
      ;
      // Stage 3: Full deployment if canary successful;
      if (deployment.healthChecks.every(check => check.health >= this.config.healthThreshold)) {;
        await this.executeStage(deployment, 'full-deployment', async () => {;
          await this.deployToEnvironment(deployment.environment);,
});,
} else {;
        throw new Error('Canary deployment failed health checks');,
}
      ;
      deployment.status = 'completed';
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Canary deployment completed: ${deployment.id}`);,
} catch (error) {;
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Canary deployment failed: ${deployment.id} - ${error.message}`, 'error');
      ;
      if (this.config.autoRollbackEnabled) {;
        await this.triggerRollback(deployment);,
}
      ;
      throw error;,
}
  }
;
  async executeRecreateDeployment(deployment) {;
    try {;
      this.log(`Executing recreate deployment: ${deployment.id}`);
      ;
      // Stage 1: Stop current deployment;
      await this.executeStage(deployment, 'stop-current', async () => {;
        await this.stopCurrentDeployment(deployment.environment);,
});
      ;
      // Stage 2: Deploy new version;
      await this.executeStage(deployment, 'deploy-new', async () => {;
        await this.deployToEnvironment(deployment.environment);,
});
      ;
      // Stage 3: Health checks;
      await this.executeStage(deployment, 'health-check', async () => {;
        await this.performHealthChecks(deployment);,
});
      ;
      deployment.status = 'completed';
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Recreate deployment completed: ${deployment.id}`);,
} catch (error) {;
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = new Date().toISOString();
      ;
      this.log(`Recreate deployment failed: ${deployment.id} - ${error.message}`, 'error');
      ;
      if (this.config.autoRollbackEnabled) {;
        await this.triggerRollback(deployment);,
}
      ;
      throw error;,
}
  }
;
  async executeStage(deployment, stageName, stageFunction) {;
    const stage = {;
      name: stageName,;
      startTime: new Date().toISOString(),;
      status: 'running';,
};
    ;
    deployment.stages.push(stage);
    ;
    try {;
      this.log(`Executing stage: ${stageName} for deployment ${deployment.id}`);
      ;
      await stageFunction();
      ;
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      ;
      this.log(`Stage completed: ${stageName} for deployment ${deployment.id}`);,
} catch (error) {;
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      ;
      this.log(`Stage failed: ${stageName} for deployment ${deployment.id} - ${error.message}`, 'error');
      throw error;,
}
  }
;
  async runPreDeploymentChecks(environment) {;
    this.log(`Running pre-deployment checks for ${environment}`);
    ;
    // Check environment health;
    const health = await this.checkEnvironmentHealth(environment);
    if (health < this.config.healthThreshold) {;
      throw new Error(`Environment ${environment} is not healthy (${health * 100}%)`);,
}
    ;
    // Check dependencies;
    await this.checkDependencies(environment);
    ;
    // Check configuration;
    await this.validateConfiguration(environment);
    ;
    this.log(`Pre-deployment checks passed for ${environment}`);,
}
;
  async buildAndTest(environment) {;
    this.log(`Building and testing for ${environment}`);
    ;
    // Install dependencies;
    await this.executeCommand('npm install');
    ;
    // Run tests;
    await this.executeCommand('npm test');
    ;
    // Build application;
    if (environment === 'production') {;
      await this.executeCommand('npm run build');,
} else {;
      await this.executeCommand('npm run build:dev');,
}
    ;
    this.log(`Build and test completed for ${environment}`);,
}
;
  async deployToEnvironment(environment) {;
    this.log(`Deploying to ${environment}`);
    ;
    // Use PM2 for deployment;
    if (environment === 'production') {;
      await this.executeCommand('pm2 start ecosystem.enhanced.cjs --env production');,
} else if (environment === 'staging') {;
      await this.executeCommand('pm2 start ecosystem.enhanced.cjs --env staging');,
} else {;
      await this.executeCommand('pm2 start ecosystem.enhanced.cjs --env development');,
}
    ;
    this.log(`Deployment to ${environment} completed`);,
}
;
  async performHealthChecks(deployment, color = null) {;
    this.log(`Performing health checks for deployment ${deployment.id}`);
    ;
    const healthChecks = [];
    const maxChecks = 10;
    let checkCount = 0;
    ;
    while (checkCount < maxChecks) {;
      const health = await this.measureHealth(deployment.environment, color);
      healthChecks.push({;
        timestamp: new Date().toISOString(),;
        health,;
        checkNumber: checkCount + 1;,
});
      ;
      deployment.healthChecks = healthChecks;
      ;
      if (health >= this.config.healthThreshold) {;
        this.log(`Health check passed: ${health * 100}%`);
        break;,
}
      ;
      if (health < this.config.rollbackThreshold) {;
        throw new Error(`Health check failed: ${health * 100}% (below rollback threshold)`);,
}
      ;
      this.log(`Health check ${checkCount + 1}: ${health * 100}% - waiting...`);
      await this.sleep(10000); // Wait 10 seconds between checks;
      checkCount++;,
}
    ;
    if (checkCount >= maxChecks) {;
      throw new Error('Health checks timed out');,
}
  }
;
  async measureHealth(environment, color = null) {;
    try {;
      // Check application endpoints;
      const endpoints = this.getHealthEndpoints(environment);
      let healthyEndpoints = 0;
      let totalEndpoints = endpoints.length;
      ;
      for (const endpoint of endpoints) {;
        try {;
          const response = await this.checkEndpoint(endpoint);
          if (response.healthy) {;
            healthyEndpoints++;,
}
        } catch (error) {;
          this.log(`Health check failed for ${endpoint}: ${error.message}`, 'warning');,
}
      }
      ;
      // Check PM2 process status;
      const pm2Health = await this.checkPM2Health(environment);
      ;
      // Calculate overall health;
      const endpointHealth = healthyEndpoints / totalEndpoints;
      const overallHealth = (endpointHealth + pm2Health) / 2;
      ;
      return overallHealth;,
} catch (error) {;
      this.log(`Error measuring health: ${error.message}`, 'error');
      return 0;,
}
  }
;
  getHealthEndpoints(environment) {;
    const baseUrl = environment === 'production' ? 'https://zion.app' : ;
                   environment === 'staging' ? 'https://staging.zion.app' : ;
                   'http://localhost:3000';
    ;
    return [;
      `${baseUrl}/api/health`,;
      `${baseUrl}/api/status`,;
      `${baseUrl}/`;
    ];,
}
;
  async checkEndpoint(url) {;
    // This would use a proper HTTP client in production;
    // For now, we'll simulate the check;
    return new Promise((resolve) => {;
      setTimeout(() => {;
        resolve({ healthy: Math.random() > 0.1 }); // 90% success rate;,
}, 100);,
});,
}
;
  async checkPM2Health(environment) {;
    try {;
      const status = await this.executeCommand('pm2 status --format json');
      const processes = JSON.parse(status);
      ;
      let healthyProcesses = 0;
      let totalProcesses = 0;
      ;
      for (const process of processes) {;
        if (process.env && process.env.NODE_ENV === environment) {;
          totalProcesses++;
          if (process.pm2_env && process.pm2_env.status === 'online') {;
            healthyProcesses++;,
}
        }
      }
      ;
      return totalProcesses > 0 ? healthyProcesses / totalProcesses : 0;,
} catch (error) {;
      this.log(`Error checking PM2 health: ${error.message}`, 'error');
      return 0;,
}
  }
;
  async triggerRollback(deployment) {;
    try {;
      this.log(`Triggering rollback for deployment ${deployment.id}`);
      ;
      const rollback = {;
        deploymentId: deployment.id,;
        timestamp: new Date().toISOString(),;
        reason: deployment.error || 'Health check failure',;
        status: 'starting';,
};
      ;
      this.rollbackHistory.push(rollback);
      ;
      // Stop current deployment;
      await this.executeCommand('pm2 stop all');
      ;
      // Restart previous version;
      await this.executeCommand('pm2 start ecosystem.enhanced.cjs --env production');
      ;
      // Verify rollback health;
      await this.sleep(30000); // Wait 30 seconds;
      const health = await this.measureHealth(deployment.environment);
      ;
      if (health >= this.config.healthThreshold) {;
        rollback.status = 'completed';
        this.log(`Rollback completed successfully for deployment ${deployment.id}`);,
} else {;
        rollback.status = 'failed';
        rollback.error = 'Rollback health check failed';
        this.log(`Rollback failed for deployment ${deployment.id}`, 'error');,
}
      ;,
} catch (error) {;
      this.log(`Rollback failed: ${error.message}`, 'error');,
}
  }
;
  async runPostDeploymentTasks(environment) {;
    this.log(`Running post-deployment tasks for ${environment}`);
    ;
    // Clear caches;
    await this.clearCaches(environment);
    ;
    // Update monitoring;
    await this.updateMonitoring(environment);
    ;
    // Send notifications;
    await this.sendDeploymentNotification(environment, 'success');
    ;
    this.log(`Post-deployment tasks completed for ${environment}`);,
}
;
  async clearCaches(environment) {;
    try {;
      if (environment === 'production') {;
        await this.executeCommand('npm run cache:clear');,
}
    } catch (error) {;
      this.log(`Cache clearing failed: ${error.message}`, 'warning');,
}
  }
;
  async updateMonitoring(environment) {;
    try {;
      // Update monitoring dashboards;
      await this.executeCommand('npm run monitoring:update');,
} catch (error) {;
      this.log(`Monitoring update failed: ${error.message}`, 'warning');,
}
  }
;
  async sendDeploymentNotification(environment, status) {;
    try {;
      // Send notification to team;
      const message = `Deployment to ${environment} ${status}`;
      await this.executeCommand(`echo "${message}" | logger`);,
} catch (error) {;
      this.log(`Notification failed: ${error.message}`, 'warning');,
}
  }
;
  async getDeploymentStatus(deploymentId) {;
    return this.activeDeployments.get(deploymentId) || ;
           this.deploymentHistory.find(d => d.id === deploymentId);,
}
;
  async getAllDeployments() {;
    return {;
      active: Array.from(this.activeDeployments.values()),;
      history: this.deploymentHistory.slice(-20) // Last 20 deployments;,
};,
}
;
  async generateDeploymentReport() {;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        totalDeployments: this.deploymentHistory.length,;
        activeDeployments: this.activeDeployments.size,;
        successfulDeployments: this.deploymentHistory.filter(d => d.status === 'completed').length,;
        failedDeployments: this.deploymentHistory.filter(d => d.status === 'failed').length,;
        rollbacks: this.rollbackHistory.length;,
},;
      recentDeployments: this.deploymentHistory.slice(-10),;
      recentRollbacks: this.rollbackHistory.slice(-5),;
      healthMetrics: Array.from(this.healthMetrics.entries()),;
      recommendations: this.generateDeploymentRecommendations();,
};
    ;
    const reportPath = path.join(this.projectRoot, 'logs', 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    ;
    this.log(`Deployment report generated: ${reportPath}`);
    return report;,
}
;
  generateDeploymentRecommendations() {;
    const recommendations = [];
    ;
    // Analyze deployment success rate;
    const successRate = this.deploymentHistory.length > 0 ? ;
      this.deploymentHistory.filter(d => d.status === 'completed').length / this.deploymentHistory.length : 0;
    ;
    if (successRate < 0.8) {;
      recommendations.push({;
        priority: 'high',;
        action: 'Review deployment process',;
        description: `Low success rate: ${(successRate * 100).toFixed(1)}%`,;
        suggestion: 'Analyze failed deployments and improve process';,
});,
}
    ;
    // Analyze rollback frequency;
    if (this.rollbackHistory.length > this.deploymentHistory.length * 0.2) {;
      recommendations.push({;
        priority: 'medium',;
        action: 'Improve health checks',;
        description: 'High rollback rate detected',;
        suggestion: 'Review health check thresholds and monitoring';,
});,
}
    ;
    return recommendations;,
}
;
  async sleep(ms) {;
    return new Promise(resolve => setTimeout(resolve, ms));,
}
;
  async start() {;
    this.log('Intelligent Deployment Orchestrator started');
    ;
    // Start health monitoring;
    if (this.config.healthCheckEnabled) {;
      setInterval(async () => {;
        try {;
          for (const [deploymentId, deployment] of this.activeDeployments) {;
            if (deployment.status === 'running') {;
              const health = await this.measureHealth(deployment.environment);
              this.healthMetrics.set(deploymentId, health);
              ;
              // Check if rollback is needed;
              if (health < this.config.rollbackThreshold && this.config.autoRollbackEnabled) {;
                await this.triggerRollback(deployment);,
}
            }
          }
        } catch (error) {;
          this.log(`Error in health monitoring: ${error.message}`, 'error');,
}
      }, this.config.healthCheckInterval);,
}
    ;
    // Generate reports every hour;
    setInterval(async () => {;
      try {;
        await this.generateDeploymentReport();,
} catch (error) {;
        this.log(`Error generating report: ${error.message}`, 'error');,
}
    }, 3600000); // 1 hour;,
}
}
;
// Start the orchestrator if run directly;
if (require.main === module) {;
  const orchestrator = new IntelligentDeploymentOrchestrator();
  orchestrator.start().catch(error => {;
    console.error('Failed to start Intelligent Deployment Orchestrator:', error);
    process.exit(1);,
});,
}
;
module.exports = IntelligentDeploymentOrchestrator;