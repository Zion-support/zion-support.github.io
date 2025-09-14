#!/usr/bin/env node

/**
 * Advanced Deployment Orchestrator
 * 
 * This system provides intelligent deployment management including:
 * - Multi-environment deployment orchestration
 * - Health checks and monitoring
 * - Automatic rollback on failures
 * - Deployment strategy optimization
 * - Environment-specific configurations
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AdvancedDeploymentOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(this.projectRoot, 'logs', 'advanced-deployment-orchestrator.log');
    this.ensureLogDirectory();
    this.deploymentHistory = [];
    this.currentDeployments = new Map();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, 'automation-config.json');
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        this.log('Error loading config, using defaults', 'ERROR');
      }
    }
    
    return {
      deployment: {
        environments: {
          development: {
            branch: 'develop',
            autoDeploy: true,
            healthThreshold: 70,
            rollbackThreshold: 50,
            maxDeploymentTime: 300000, // 5 minutes
            healthCheckInterval: 30000, // 30 seconds
            rollbackCheckInterval: 60000 // 1 minute
          },
          staging: {
            branch: 'staging',
            autoDeploy: true,
            healthThreshold: 80,
            rollbackThreshold: 60,
            maxDeploymentTime: 600000, // 10 minutes
            healthCheckInterval: 30000,
            rollbackCheckInterval: 60000
          },
          production: {
            branch: 'main',
            autoDeploy: false,
            healthThreshold: 90,
            rollbackThreshold: 70,
            maxDeploymentTime: 900000, // 15 minutes
            healthCheckInterval: 15000,
            rollbackCheckInterval: 30000
          }
        },
        strategies: {
          blueGreen: true,
          canary: true,
          rolling: true,
          progressive: true
        },
        healthChecks: {
          endpoints: [
            '/api/health',
            '/api/status',
            '/health',
            '/status'
          ],
          timeout: 10000,
          retries: 3
        },
        rollback: {
          automatic: true,
          maxRollbacks: 3,
          rollbackWindow: 3600000 // 1 hour
        }
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn('bash', ['-c', command], {
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });

      let stdout = '';
      let stderr = '';

      if (options.silent) {
        child.stdout.on('data', (data) => {
          stdout += data.toString();
        });
        child.stderr.on('data', (data) => {
          stderr += data.toString();
        });
      }

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code });
        } else {
          reject({ success: false, stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }

  async deployToEnvironment(environment, options = {}) {
    try {
      this.log(`Starting deployment to ${environment} environment`);
      
      const envConfig = this.config.deployment.environments[environment];
      if (!envConfig) {
        throw new Error(`Environment ${environment} not configured`);
      }

      const deploymentId = this.generateDeploymentId();
      const deployment = {
        id: deploymentId,
        environment,
        startTime: new Date(),
        status: 'in_progress',
        branch: envConfig.branch,
        options
      };

      this.currentDeployments.set(deploymentId, deployment);
      this.log(`Deployment ${deploymentId} started for ${environment}`);

      // Pre-deployment checks
      const preDeploymentChecks = await this.runPreDeploymentChecks(environment, envConfig);
      if (!preDeploymentChecks.success) {
        throw new Error(`Pre-deployment checks failed: ${preDeploymentChecks.reason}`);
      }

      // Build and test
      const buildResult = await this.buildApplication(environment);
      if (!buildResult.success) {
        throw new Error(`Build failed: ${buildResult.error}`);
      }

      // Deploy using appropriate strategy
      const deployResult = await this.executeDeploymentStrategy(environment, envConfig, options);
      if (!deployResult.success) {
        throw new Error(`Deployment failed: ${deployResult.error}`);
      }

      // Post-deployment health checks
      const healthCheckResult = await this.runHealthChecks(environment, envConfig);
      if (!healthCheckResult.success) {
        this.log(`Health checks failed for ${environment}, initiating rollback`, 'WARN');
        await this.rollbackDeployment(deploymentId, environment);
        throw new Error(`Health checks failed: ${healthCheckResult.reason}`);
      }

      // Update deployment status
      deployment.status = 'completed';
      deployment.endTime = new Date();
      deployment.duration = deployment.endTime - deployment.startTime;
      deployment.healthScore = healthCheckResult.healthScore;

      this.deploymentHistory.push(deployment);
      this.currentDeployments.delete(deploymentId);

      this.log(`Deployment ${deploymentId} to ${environment} completed successfully`, 'INFO');
      return { success: true, deploymentId, healthScore: healthCheckResult.healthScore };

    } catch (error) {
      this.log(`Deployment to ${environment} failed: ${error.message}`, 'ERROR');
      
      // Update deployment status
      if (deployment) {
        deployment.status = 'failed';
        deployment.endTime = new Date();
        deployment.duration = deployment.endTime - deployment.startTime;
        deployment.error = error.message;
        
        this.deploymentHistory.push(deployment);
        this.currentDeployments.delete(deploymentId);
      }

      return { success: false, error: error.message };
    }
  }

  async runPreDeploymentChecks(environment, envConfig) {
    try {
      this.log(`Running pre-deployment checks for ${environment}`);

      // Check if target branch exists and is up to date
      const branchCheck = await this.executeCommand(`git fetch origin ${envConfig.branch}`, { silent: true });
      if (!branchCheck.success) {
        return { success: false, reason: 'Failed to fetch target branch' };
      }

      // Check for uncommitted changes
      const statusCheck = await this.executeCommand('git status --porcelain', { silent: true });
      if (statusCheck.stdout.trim() !== '') {
        return { success: false, reason: 'Working directory has uncommitted changes' };
      }

      // Check if we're on the correct branch
      const currentBranch = await this.executeCommand('git branch --show-current', { silent: true });
      if (currentBranch.stdout.trim() !== envConfig.branch) {
        await this.executeCommand(`git checkout ${envConfig.branch}`, { silent: true });
        await this.executeCommand(`git pull origin ${envConfig.branch}`, { silent: true });
      }

      // Run tests if configured
      if (envConfig.runTests !== false) {
        const testResult = await this.runTests(environment);
        if (!testResult.success) {
          return { success: false, reason: `Tests failed: ${testResult.error}` };
        }
      }

      return { success: true };
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async buildApplication(environment) {
    try {
      this.log(`Building application for ${environment}`);

      // Install dependencies
      const installResult = await this.executeCommand('npm install', { silent: true });
      if (!installResult.success) {
        return { success: false, error: 'Failed to install dependencies' };
      }

      // Build application
      const buildCommand = environment === 'production' ? 'npm run build' : 'npm run build:dev';
      const buildResult = await this.executeCommand(buildCommand, { silent: true });
      if (!buildResult.success) {
        return { success: false, error: 'Build failed' };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async executeDeploymentStrategy(environment, envConfig, options) {
    try {
      const strategy = options.strategy || this.selectOptimalStrategy(environment, envConfig);
      this.log(`Executing deployment strategy: ${strategy}`);

      switch (strategy) {
        case 'blueGreen':
          return await this.executeBlueGreenDeployment(environment, envConfig);
        case 'canary':
          return await this.executeCanaryDeployment(environment, envConfig, options);
        case 'rolling':
          return await this.executeRollingDeployment(environment, envConfig);
        case 'progressive':
          return await this.executeProgressiveDeployment(environment, envConfig, options);
        default:
          return await this.executeStandardDeployment(environment, envConfig);
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  selectOptimalStrategy(environment, envConfig) {
    // Select strategy based on environment and configuration
    if (environment === 'production') {
      return envConfig.strategies?.blueGreen ? 'blueGreen' : 'rolling';
    } else if (environment === 'staging') {
      return envConfig.strategies?.canary ? 'canary' : 'rolling';
    } else {
      return 'standard';
    }
  }

  async executeBlueGreenDeployment(environment, envConfig) {
    try {
      this.log('Executing Blue-Green deployment strategy');

      // Create new deployment instance
      const newInstance = await this.createDeploymentInstance(environment, 'green');
      
      // Deploy to new instance
      const deployResult = await this.deployToInstance(newInstance, environment);
      if (!deployResult.success) {
        throw new Error(`Failed to deploy to green instance: ${deployResult.error}`);
      }

      // Run health checks on new instance
      const healthCheck = await this.runHealthChecks(environment, envConfig, newInstance);
      if (!healthCheck.success) {
        throw new Error(`Health checks failed on green instance: ${healthCheck.reason}`);
      }

      // Switch traffic to new instance
      await this.switchTraffic(environment, 'green');
      
      // Terminate old instance
      await this.terminateOldInstance(environment, 'blue');

      return { success: true, strategy: 'blueGreen' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async executeCanaryDeployment(environment, envConfig, options) {
    try {
      this.log('Executing Canary deployment strategy');

      const canaryPercentage = options.canaryPercentage || 10;
      
      // Deploy to canary instance
      const canaryInstance = await this.createDeploymentInstance(environment, 'canary');
      const deployResult = await this.deployToInstance(canaryInstance, environment);
      if (!deployResult.success) {
        throw new Error(`Failed to deploy to canary instance: ${deployResult.error}`);
      }

      // Route small percentage of traffic to canary
      await this.routeTraffic(environment, 'canary', canaryPercentage);

      // Monitor canary performance
      const canaryHealth = await this.monitorCanaryHealth(environment, canaryInstance, envConfig);
      if (!canaryHealth.success) {
        // Rollback canary if health checks fail
        await this.rollbackCanary(environment, canaryInstance);
        throw new Error(`Canary health checks failed: ${canaryHealth.reason}`);
      }

      // Gradually increase traffic to canary
      await this.graduallyIncreaseTraffic(environment, 'canary', canaryPercentage, 100);

      // Full deployment if canary is successful
      return await this.executeStandardDeployment(environment, envConfig);

    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async executeRollingDeployment(environment, envConfig) {
    try {
      this.log('Executing Rolling deployment strategy');

      // Get current instances
      const instances = await this.getDeploymentInstances(environment);
      
      for (const instance of instances) {
        // Deploy to one instance at a time
        const deployResult = await this.deployToInstance(instance, environment);
        if (!deployResult.success) {
          throw new Error(`Failed to deploy to instance ${instance.id}: ${deployResult.error}`);
        }

        // Health check before moving to next instance
        const healthCheck = await this.runHealthChecks(environment, envConfig, instance);
        if (!healthCheck.success) {
          throw new Error(`Health checks failed on instance ${instance.id}: ${healthCheck.reason}`);
        }
      }

      return { success: true, strategy: 'rolling' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async executeProgressiveDeployment(environment, envConfig, options) {
    try {
      this.log('Executing Progressive deployment strategy');

      const stages = options.stages || [25, 50, 75, 100];
      
      for (const percentage of stages) {
        // Deploy to percentage of instances
        const instances = await this.getDeploymentInstances(environment);
        const targetInstances = Math.ceil((instances.length * percentage) / 100);
        
        for (let i = 0; i < targetInstances; i++) {
          const instance = instances[i];
          const deployResult = await this.deployToInstance(instance, environment);
          if (!deployResult.success) {
            throw new Error(`Failed to deploy to instance ${instance.id}: ${deployResult.error}`);
          }
        }

        // Health check at this stage
        const healthCheck = await this.runHealthChecks(environment, envConfig);
        if (!healthCheck.success) {
          throw new Error(`Health checks failed at ${percentage}% deployment: ${healthCheck.reason}`);
        }

        // Wait before next stage
        if (percentage < 100) {
          await this.sleep(30000); // 30 seconds
        }
      }

      return { success: true, strategy: 'progressive' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async executeStandardDeployment(environment, envConfig) {
    try {
      this.log('Executing standard deployment');

      // Simple deployment to all instances
      const instances = await this.getDeploymentInstances(environment);
      
      for (const instance of instances) {
        const deployResult = await this.deployToInstance(instance, environment);
        if (!deployResult.success) {
          throw new Error(`Failed to deploy to instance ${instance.id}: ${deployResult.error}`);
        }
      }

      return { success: true, strategy: 'standard' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runHealthChecks(environment, envConfig, instance = null) {
    try {
      this.log(`Running health checks for ${environment}${instance ? ` instance ${instance.id}` : ''}`);

      const healthChecks = this.config.deployment.healthChecks;
      let overallHealth = 0;
      let successfulChecks = 0;

      for (const endpoint of healthChecks.endpoints) {
        const healthResult = await this.checkEndpointHealth(endpoint, healthChecks.timeout);
        if (healthResult.success) {
          overallHealth += healthResult.healthScore;
          successfulChecks++;
        }
      }

      if (successfulChecks === 0) {
        return { success: false, reason: 'All health checks failed' };
      }

      const averageHealth = overallHealth / successfulChecks;
      const isHealthy = averageHealth >= envConfig.healthThreshold;

      return {
        success: isHealthy,
        healthScore: averageHealth,
        reason: isHealthy ? 'Health checks passed' : `Health score ${averageHealth} below threshold ${envConfig.healthThreshold}`
      };

    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async checkEndpointHealth(endpoint, timeout) {
    try {
      // Simple HTTP health check
      const response = await fetch(endpoint, {
        method: 'GET',
        timeout: timeout
      });

      if (response.ok) {
        return { success: true, healthScore: 100 };
      } else {
        return { success: false, healthScore: 50 };
      }
    } catch (error) {
      return { success: false, healthScore: 0 };
    }
  }

  async rollbackDeployment(deploymentId, environment) {
    try {
      this.log(`Initiating rollback for deployment ${deploymentId} in ${environment}`);

      const deployment = this.deploymentHistory.find(d => d.id === deploymentId);
      if (!deployment) {
        throw new Error(`Deployment ${deploymentId} not found`);
      }

      // Get previous successful deployment
      const previousDeployment = this.deploymentHistory
        .filter(d => d.environment === environment && d.status === 'completed')
        .sort((a, b) => b.startTime - a.startTime)[1];

      if (!previousDeployment) {
        throw new Error('No previous deployment found for rollback');
      }

      // Rollback to previous version
      const rollbackResult = await this.executeRollback(environment, previousDeployment);
      if (!rollbackResult.success) {
        throw new Error(`Rollback failed: ${rollbackResult.error}`);
      }

      this.log(`Rollback completed successfully for deployment ${deploymentId}`, 'INFO');
      return { success: true };

    } catch (error) {
      this.log(`Rollback failed for deployment ${deploymentId}: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async executeRollback(environment, targetDeployment) {
    try {
      this.log(`Executing rollback to deployment ${targetDeployment.id}`);

      // Checkout target branch/commit
      await this.executeCommand(`git checkout ${targetDeployment.branch}`, { silent: true });
      
      // Rebuild and redeploy
      const buildResult = await this.buildApplication(environment);
      if (!buildResult.success) {
        throw new Error(`Build failed during rollback: ${buildResult.error}`);
      }

      const deployResult = await this.executeStandardDeployment(environment, this.config.deployment.environments[environment]);
      if (!deployResult.success) {
        throw new Error(`Deployment failed during rollback: ${deployResult.error}`);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runTests(environment) {
    try {
      this.log(`Running tests for ${environment}`);

      const testCommand = environment === 'production' ? 'npm test' : 'npm run test:dev';
      const testResult = await this.executeCommand(testCommand, { silent: true });
      
      return { success: testResult.success, error: testResult.success ? null : 'Tests failed' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async createDeploymentInstance(environment, type) {
    // Mock implementation - in real scenario, this would create cloud instances
    return {
      id: `${environment}-${type}-${Date.now()}`,
      type,
      environment,
      status: 'creating'
    };
  }

  async deployToInstance(instance, environment) {
    // Mock implementation - in real scenario, this would deploy to the instance
    await this.sleep(5000); // Simulate deployment time
    return { success: true };
  }

  async getDeploymentInstances(environment) {
    // Mock implementation - in real scenario, this would get actual instances
    return [
      { id: `${environment}-instance-1`, status: 'running' },
      { id: `${environment}-instance-2`, status: 'running' }
    ];
  }

  async switchTraffic(environment, instanceType) {
    // Mock implementation - in real scenario, this would switch load balancer traffic
    this.log(`Switching traffic to ${instanceType} instance in ${environment}`);
    await this.sleep(2000);
  }

  async routeTraffic(environment, instanceType, percentage) {
    // Mock implementation - in real scenario, this would route traffic
    this.log(`Routing ${percentage}% of traffic to ${instanceType} instance in ${environment}`);
  }

  async terminateOldInstance(environment, instanceType) {
    // Mock implementation - in real scenario, this would terminate the instance
    this.log(`Terminating ${instanceType} instance in ${environment}`);
  }

  async monitorCanaryHealth(environment, instance, envConfig) {
    // Mock implementation - in real scenario, this would monitor actual health
    await this.sleep(10000);
    return { success: true, healthScore: 95 };
  }

  async rollbackCanary(environment, instance) {
    // Mock implementation - in real scenario, this would rollback the canary
    this.log(`Rolling back canary instance ${instance.id} in ${environment}`);
  }

  async graduallyIncreaseTraffic(environment, instanceType, fromPercentage, toPercentage) {
    // Mock implementation - in real scenario, this would gradually increase traffic
    this.log(`Gradually increasing traffic to ${instanceType} from ${fromPercentage}% to ${toPercentage}%`);
    await this.sleep(5000);
  }

  generateDeploymentId() {
    return `deploy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async generateDeploymentReport() {
    try {
      this.log('Generating comprehensive deployment report');

      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalDeployments: this.deploymentHistory.length,
          successfulDeployments: this.deploymentHistory.filter(d => d.status === 'completed').length,
          failedDeployments: this.deploymentHistory.filter(d => d.status === 'failed').length,
          activeDeployments: this.currentDeployments.size
        },
        currentDeployments: Array.from(this.currentDeployments.values()),
        recentDeployments: this.deploymentHistory
          .sort((a, b) => b.startTime - a.startTime)
          .slice(0, 10),
        environmentStatus: await this.getEnvironmentStatus(),
        recommendations: this.generateDeploymentRecommendations()
      };

      // Save report
      const reportPath = path.join(this.projectRoot, 'reports', 'deployment-report.json');
      const reportDir = path.dirname(reportPath);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }

      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Deployment report saved to: ${reportPath}`, 'INFO');

      return report;
    } catch (error) {
      this.log(`Error generating deployment report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getEnvironmentStatus() {
    const status = {};
    
    for (const [envName, envConfig] of Object.entries(this.config.deployment.environments)) {
      try {
        const healthCheck = await this.runHealthChecks(envName, envConfig);
        status[envName] = {
          health: healthCheck.success,
          healthScore: healthCheck.healthScore,
          lastCheck: new Date().toISOString()
        };
      } catch (error) {
        status[envName] = {
          health: false,
          healthScore: 0,
          error: error.message,
          lastCheck: new Date().toISOString()
        };
      }
    }
    
    return status;
  }

  generateDeploymentRecommendations() {
    const recommendations = [];
    
    const failedDeployments = this.deploymentHistory.filter(d => d.status === 'failed');
    if (failedDeployments.length > 0) {
      recommendations.push(`Review ${failedDeployments.length} failed deployments for patterns`);
    }
    
    const longDeployments = this.deploymentHistory.filter(d => d.duration > 600000); // > 10 minutes
    if (longDeployments.length > 0) {
      recommendations.push(`Optimize deployment process - ${longDeployments.length} deployments took >10 minutes`);
    }
    
    const lowHealthEnvironments = Object.entries(this.config.deployment.environments)
      .filter(([env, config]) => config.healthThreshold > 80);
    if (lowHealthEnvironments.length > 0) {
      recommendations.push(`Improve health monitoring for ${lowHealthEnvironments.length} environments`);
    }
    
    return recommendations;
  }

  async run() {
    this.log('Advanced Deployment Orchestrator starting...', 'INFO');

    try {
      // Check for pending deployments
      const pendingDeployments = await this.checkPendingDeployments();
      
      if (pendingDeployments.length > 0) {
        this.log(`Found ${pendingDeployments.length} pending deployments`, 'INFO');
        
        for (const deployment of pendingDeployments) {
          await this.deployToEnvironment(deployment.environment, deployment.options);
        }
      }

      // Generate deployment report
      const report = await this.generateDeploymentReport();
      
      if (!report) {
        this.log('Failed to generate deployment report', 'ERROR');
        return;
      }

      this.log('Advanced Deployment Orchestrator completed successfully', 'INFO');
      
    } catch (error) {
      this.log(`Error in Advanced Deployment Orchestrator: ${error.message}`, 'ERROR');
    }
  }

  async checkPendingDeployments() {
    // Mock implementation - in real scenario, this would check for actual pending deployments
    return [];
  }
}

// Run the system if called directly
if (require.main === module) {
  const orchestrator = new AdvancedDeploymentOrchestrator();
  orchestrator.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = AdvancedDeploymentOrchestrator;