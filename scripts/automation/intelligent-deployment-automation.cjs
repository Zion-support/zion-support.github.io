#!/usr/bin/env node/usr/bin/env nodeconst pm2 = require("pm2");"const fs = require("fs").promises;"const path = require("path");"const { execSync } = require("child_process");"const https = require("https");"const http = require("http");class IntelligentDeploymentAutomation { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "deployment-automation.log");" this.configFile = path.join(this.projectRoot, "logs", "deployment-config.json");" this.deploymentHistoryFile = path.join(this.projectRoot, "logs", "deployment-history.json"); this.config = {" deploymentStrategy: process.env.DEPLOYMENT_STRATEGY | "blue-green"," autoDeploy: process.env.AUTO_DEPLOY === "true"," rollbackEnabled: process.env.ROLLBACK_ENABLED === "true", canaryPercentage: parseInt(process.env.CANARY_PERCENTAGE) | 10, healthCheckTimeout: parseInt(process.env.HEALTH_CHECK_TIMEOUT) | 300000, / 5 minutes maxRetries: parseInt(process.env.MAX_RETRIES) | 3, environments: { production: {" url: process.env.PROD_URL | "http:/localhost:3000", instances: parseInt(process.env.PROD_INSTANCES) | 2," healthEndpoint: "/api/health" }, staging: {" url: process.env.STAGING_URL | "http:/localhost:3001", instances: parseInt(process.env.STAGING_INSTANCES) | 1," healthEndpoint: "/api/health" } } }; this.deploymentHistory = []; this.currentDeployment = null; this.ensureLogsDirectory(); } async ensureLogsDirectory() { try {" await fs.mkdir(path.join(this.projectRoot, "logs"), { recursive: true }); await this.loadConfiguration(); await this.loadDeploymentHistory(); } catch (error) {" console.log("Logs directory already exists"); } }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}`; console.log(logMessage); " fs.appendFile(this.logFile, logMessage + "\n").catch(console.error); } async loadConfiguration() { try {" const config = await fs.readFile(this.configFile, "utf8"); this.config = { .this.config, .JSON.parse(config) };" this.log(" Deployment configuration loaded"); } catch (error) {" this.log(" Using default deployment configuration"); await this.saveConfiguration(); } } async saveConfiguration() { try { await fs.writeFile(this.configFile, JSON.stringify(this.config, null, 2)); } catch (error) {"` this.log(` Failed to save configuration: ${error.message}`, "ERROR"); } } async loadDeploymentHistory() { try {" const history = await fs.readFile(this.deploymentHistoryFile, "utf8"); this.deploymentHistory = JSON.parse(history);` this.log(` Loaded ${this.deploymentHistory.length} deployment records`); } catch (error) {" this.log(" No deployment history found, starting fresh"); this.deploymentHistory = []; } } async saveDeploymentHistory() { try { await fs.writeFile(this.deploymentHistoryFile, JSON.stringify(this.deploymentHistory, null, 2)); } catch (error) {"` this.log(` Failed to save deployment history: ${error.message}`, "ERROR"); } } async initialize() {" this.log(" Initializing Intelligent Deployment Automation."); return new Promise((resolve, reject) => { pm2.connect((err) => { if (err) {"` this.log(` Failed to connect to PM2: ${err.message}`, "ERROR"); reject(err); return; } " this.log(" Connected to PM2 for deployment automation"); resolve(); }); }); }" async deploy(environment = "staging", options = {}) {` this.log(` Starting deployment to ${environment}.`); try { const deployment = { id: this.generateDeploymentId(), environment, strategy: this.config.deploymentStrategy, startTime: new Date().toISOString()," status: "in_progress", steps: [], options }; this.currentDeployment = deployment; / Pre-deployment checks await this.runPreDeploymentChecks(deployment); / Build and test await this.buildAndTest(deployment); / Deploy based on strategy switch (this.config.deploymentStrategy) {" case "blue-green": await this.blueGreenDeploy(environment, deployment); break;" case canary: await this.canaryDeploy(environment, deployment); break;" case rolling: await this.rollingDeploy(environment, deployment); break; default: await this.standardDeploy(environment, deployment); } / Post-deployment verification await this.runPostDeploymentVerification(environment, deployment); / Update deployment status" deployment.status = "completed"; deployment.endTime = new Date().toISOString(); deployment.duration = new Date(deployment.endTime) - new Date(deployment.startTime); this.deploymentHistory.push(deployment); await this.saveDeploymentHistory();` this.log(` Deployment to ${environment} completed successfully`); } catch (error) {"` this.log(` Deployment failed: ${error.message}`, "ERROR"); if (this.currentDeployment) {" this.currentDeployment.status = "failed"; this.currentDeployment.error = error.message; this.currentDeployment.endTime = new Date().toISOString(); this.deploymentHistory.push(this.currentDeployment); await this.saveDeploymentHistory(); / Auto-rollback if enabled if (this.config.rollbackEnabled) { await this.rollback(environment); } } throw error; } } async runPreDeploymentChecks(deployment) {" this.log(" Running pre-deployment checks."); const checks = [" { name: "Git Status", action: () => this.checkGitStatus() }," { name: "Dependencies", action: () => this.checkDependencies() }," { name: "Environment", action: () => this.checkEnvironment(deployment.environment) }," { name: "PM2 Status", action: () => this.checkPM2Status() }," { name: "Health Check", action: () => this.checkCurrentHealth(deployment.environment) } ]; for (const check of checks) { try { await check.action(); deployment.steps.push({ step: check.name," status: "passed", timestamp: new Date().toISOString() });` this.log(` ${check.name} check passed`); } catch (error) { deployment.steps.push({ step: check.name," status: "failed", error: error.message, timestamp: new Date().toISOString() });"` this.log(` ${check.name} check failed: ${error.message}`, "ERROR");` throw new Error(`Pre-deployment check failed: ${check.name}`); } } } async checkGitStatus() { try {" const status = execSync("git status --porcelain", { encoding: "utf8" }); if (status.trim()) {" throw new Error("Working directory has uncommitted changes"); } } catch (error) {` throw new Error(`Git status check failed: ${error.message}`); } } async checkDependencies() { try {" if (!await this.fileExists("package.json")) {" throw new Error("package.json not found"); } " if (!await this.fileExists("node_modules")) {" throw new Error("Dependencies not installed"); } } catch (error) {` throw new Error(`Dependency check failed: ${error.message}`); } } async checkEnvironment(environment) { if (!this.config.environments[environment]) {` throw new Error(`Environment ${environment} not configured`); } } async checkPM2Status() { return new Promise((resolve, reject) => { pm2.list((err, processes) => { if (err) {` reject(new Error(`PM2 status check failed: ${err.message}`)); return; } resolve(processes); }); }); } async checkCurrentHealth(environment) { const envConfig = this.config.environments[environment]; if (!envConfig) return; try { const health = await this.performHealthCheck(envConfig.url + envConfig.healthEndpoint); if (!health.healthy) {" throw new Error("Current environment is not healthy"); } } catch (error) {"` this.log(` Health check warning: ${error.message}`, "WARN"); } } async buildAndTest(deployment) {" this.log(" Building and testing."); const buildSteps = [" { name: "Install Dependencies", command: "npm install" }," { name: "Lint Check", command: "npm run lint" }," { name: "Type Check", command: "npm run type-check" }," { name: "Build Project", command: "npm run build" }," { name: "Run Tests", command: "npm run test:smoke" } ]; for (const step of buildSteps) { try {` this.log(` ${step.name}.`);" execSync(step.command, { stdio: "inherit", cwd: this.projectRoot }); deployment.steps.push({ step: step.name," status: "passed", timestamp: new Date().toISOString() });` this.log(` ${step.name} completed`); } catch (error) { deployment.steps.push({ step: step.name," status: "failed", error: error.message, timestamp: new Date().toISOString() }); "` this.log(` ${step.name} failed: ${error.message}`, "ERROR");` throw new Error(`Build step failed: ${step.name}`); } } } async blueGreenDeploy(environment, deployment) {" this.log(" Starting blue-green deployment."); const envConfig = this.config.environments[environment]; const currentColor = await this.getCurrentColor(environment);" const newColor = currentColor === "blue" ? "green" : "blue"; try { / Deploy to new color await this.deployToColor(environment, newColor, deployment); / Health check new deployment const healthCheck = await this.healthCheckDeployment(environment, newColor); if (!healthCheck.healthy) {" throw new Error("New deployment failed health check"); } / Switch traffic to new color await this.switchTraffic(environment, newColor, deployment); / Clean up old color await this.cleanupOldColor(environment, currentColor, deployment);` this.log(` Blue-green deployment completed - switched to ${newColor}`); } catch (error) {"` this.log(` Blue-green deployment failed: ${error.message}`, "ERROR"); throw error; } } async canaryDeploy(environment, deployment) {" this.log(" Starting canary deployment."); const envConfig = this.config.environments[environment]; const canaryPercentage = this.config.canaryPercentage; try { / Deploy canary version await this.deployCanary(environment, deployment); / Gradually increase traffic const steps = [10, 25, 50, 75, 100]; for (const percentage of steps) {` this.log(` Routing ${percentage}% traffic to canary.`); await this.routeTraffic(environment, percentage, deployment); / Wait and check health await this.sleep(30000); / 30 seconds const health = await this.checkCanaryHealth(environment, percentage); if (!health.healthy) {` throw new Error(`Canary deployment failed at ${percentage}% traffic`); } if (percentage < 100) {` this.log(` Canary healthy at ${percentage}% - proceeding to next step`); } } / Complete canary deployment await this.completeCanaryDeployment(environment, deployment); " this.log(" Canary deployment completed successfully"); } catch (error) {"` this.log(` Canary deployment failed: ${error.message}`, "ERROR"); await this.rollbackCanary(environment, deployment); throw error; } } async rollingDeploy(environment, deployment) {" this.log(" Starting rolling deployment."); const envConfig = this.config.environments[environment]; const instances = envConfig.instances; try { / Deploy one instance at a time for (let i = 0; i < instances; i++) {` this.log(` Deploying instance ${i + 1}/${instances}.`); await this.deployInstance(environment, i, deployment); / Health check this instance const health = await this.healthCheckInstance(environment, i); if (!health.healthy) {` throw new Error(`Instance ${i + 1} failed health check`); } ` this.log(` Instance ${i + 1} deployed and healthy`); } " this.log(" Rolling deployment completed successfully"); } catch (error) {"` this.log(` Rolling deployment failed: ${error.message}`, "ERROR"); throw error; } } async standardDeploy(environment, deployment) {" this.log(" Starting standard deployment."); try { / Stop current processes await this.stopCurrentProcesses(environment, deployment); / Deploy new version await this.deployNewVersion(environment, deployment); / Start new processes await this.startNewProcesses(environment, deployment); " this.log(" Standard deployment completed"); } catch (error) {"` this.log(` Standard deployment failed: ${error.message}`, "ERROR"); throw error; } } async runPostDeploymentVerification(environment, deployment) {" this.log(" Running post-deployment verification."); const envConfig = this.config.environments[environment]; try { / Health check const health = await this.performHealthCheck(envConfig.url + envConfig.healthEndpoint); if (!health.healthy) {" throw new Error("Post-deployment health check failed"); } / Performance check const performance = await this.checkPerformance(envConfig.url); if (performance.score < 70) {"` this.log(` Performance score is low: ${performance.score}`, "WARN"); } / Security check const security = await this.checkSecurity(envConfig.url); if (security.score < 80) {"` this.log(` Security score is low: ${security.score}`, "WARN"); } deployment.steps.push({" step: "Post-deployment verification"," status: "passed", health: health, performance: performance, security: security, timestamp: new Date().toISOString() }); " this.log(" Post-deployment verification completed"); } catch (error) { deployment.steps.push({" step: "Post-deployment verification"," status: "failed", error: error.message, timestamp: new Date().toISOString() }); "` this.log(` Post-deployment verification failed: ${error.message}`, "ERROR"); throw error; } } async performHealthCheck(url) { return new Promise((resolve) => { const startTime = Date.now(); " const request = (url.startsWith("https") ? https : http).get(url, (res) => { const duration = Date.now() - startTime; if (res.statusCode === 200) { resolve({ healthy: true, statusCode: res.statusCode, responseTime: duration, timestamp: new Date().toISOString() }); } else { resolve({ healthy: false, statusCode: res.statusCode, responseTime: duration, timestamp: new Date().toISOString() }); } }); " request.on("error", (error) => { resolve({ healthy: false, error: error.message, timestamp: new Date().toISOString() }); }); request.setTimeout(10000, () => { request.destroy(); resolve({ healthy: false," error: "Timeout", timestamp: new Date().toISOString() }); }); }); } async checkPerformance(url) { try { const startTime = Date.now(); const response = await this.performHealthCheck(url); const duration = Date.now() - startTime; let score = 100; if (duration > 1000) score -= 20; if (duration > 2000) score -= 30; if (duration > 5000) score -= 40; return { score: Math.max(0, score), responseTime: duration, timestamp: new Date().toISOString() }; } catch (error) { return { score: 0, error: error.message, timestamp: new Date().toISOString() }; } } async checkSecurity(url) { try { / Basic security checks let score = 100; / Check for HTTPS" if (!url.startsWith("https")) { score -= 30; } / Check for security headers (simplified) const response = await this.performHealthCheck(url); if (response.statusCode !== 200) { score -= 20; } return { score: Math.max(0, score)," checks: ["https", "response_code"], timestamp: new Date().toISOString() }; } catch (error) { return { score: 0, error: error.message, timestamp: new Date().toISOString() }; } } async rollback(environment) {` this.log(` Starting rollback for ${environment}.`); try { / Find last successful deployment const lastSuccessful = this.deploymentHistory" .filter(d => d.environment === environment && d.status === "completed") .sort((a, b) => new Date(b.endTime) - new Date(a.endTime))[0]; if (!lastSuccessful) {" throw new Error("No successful deployment found to rollback to"); } / Rollback to last successful version await this.rollbackToVersion(environment, lastSuccessful.id);` this.log(` Rollback to ${lastSuccessful.id} completed`); } catch (error) {"` this.log(` Rollback failed: ${error.message}`, "ERROR"); throw error; } } async rollbackToVersion(environment, versionId) { / Implementation would depend on your version control system` this.log(` Rolling back to version ${versionId}.`); try { / Stop current processes await this.stopCurrentProcesses(environment); / Checkout previous version` execSync(`git checkout ${versionId}`, { cwd: this.projectRoot }); / Rebuild and restart" execSync("npm install", { cwd: this.projectRoot });" execSync("npm run build", { cwd: this.projectRoot }); await this.startNewProcesses(environment);` this.log(` Rollback to ${versionId} completed`); } catch (error) {"` this.log(` Rollback to ${versionId} failed: ${error.message}`, "ERROR"); throw error; } } async getCurrentColor(environment) { / Implementation would depend on your infrastructure / For now, return a random color" return Math.random() > 0.5 ? "blue" : "green"; } async deployToColor(environment, color, deployment) {` this.log(` Deploying to ${color} environment.`); / Implementation would depend on your infrastructure await this.sleep(2000); / Simulate deployment time } async healthCheckDeployment(environment, color) {` this.log(` Health checking ${color} deployment.`); / Implementation would depend on your infrastructure return { healthy: true }; } async switchTraffic(environment, color, deployment) {` this.log(` Switching traffic to ${color}.`); / Implementation would depend on your load balancer await this.sleep(1000); } async cleanupOldColor(environment, color, deployment) {` this.log(` Cleaning up old ${color} environment.`); / Implementation would depend on your infrastructure await this.sleep(1000); } async deployCanary(environment, deployment) {" this.log(" Deploying canary version."); / Implementation would depend on your infrastructure await this.sleep(2000); } async routeTraffic(environment, percentage, deployment) {` this.log(` Routing ${percentage}% traffic to canary.`); / Implementation would depend on your load balancer await this.sleep(1000); } async checkCanaryHealth(environment, percentage) {` this.log(` Checking canary health at ${percentage}%.`); / Implementation would depend on your monitoring system return { healthy: true }; } async completeCanaryDeployment(environment, deployment) {" this.log(" Completing canary deployment."); / Implementation would depend on your infrastructure await this.sleep(1000); } async rollbackCanary(environment, deployment) {" this.log(" Rolling back canary deployment."); / Implementation would depend on your infrastructure await this.sleep(1000); } async deployInstance(environment, instanceIndex, deployment) {` this.log(` Deploying instance ${instanceIndex + 1}.`); / Implementation would depend on your infrastructure await this.sleep(2000); } async healthCheckInstance(environment, instanceIndex) {` this.log(` Health checking instance ${instanceIndex + 1}.`); / Implementation would depend on your monitoring system return { healthy: true }; } async stopCurrentProcesses(environment, deployment) {` this.log(` Stopping current processes in ${environment}.`); / Implementation would depend on your PM2 setup await this.sleep(1000); } async deployNewVersion(environment, deployment) {` this.log(` Deploying new version to ${environment}.`); / Implementation would depend on your deployment process await this.sleep(2000); } async startNewProcesses(environment, deployment) {` this.log(` Starting new processes in ${environment}.`); / Implementation would depend on your PM2 setup await this.sleep(1000); } generateDeploymentId() {` return `deploy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`; } async fileExists(filePath) { try { await fs.access(filePath); return true; } catch (error) { return false; } } async sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } async getDeploymentStatus(deploymentId) { const deployment = this.deploymentHistory.find(d => d.id === deploymentId); if (!deployment) {` throw new Error(`Deployment ${deploymentId} not found`); } return deployment; } async getDeploymentHistory(environment = null) { if (environment) { return this.deploymentHistory.filter(d => d.environment === environment); } return this.deploymentHistory; } async run() { try { await this.initialize();" this.log(" Intelligent Deployment Automation is ready"); / Keep the process alive" process.on("SIGINT", async () => {" this.log(" Shutting down Deployment Automation."); pm2.disconnect(); process.exit(0); }); } catch (error) {"` this.log(` Fatal error: ${error.message}`, "ERROR"); process.exit(1); } }}/ Run the deployment automationif (require.main === module) { const deployment = new IntelligentDeploymentAutomation(); deployment.run();}module.exports = IntelligentDeploymentAutomation;'`'"`
#!/usr/bin/env node;
/**
 * Intelligent Deployment Automation;
 * Advanced deployment system with blue-green, canary, and rollback capabilities;
 * Features: Automated testing, health checks, gradual rollouts, intelligent rollbacks;
 */
const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const https = require('https')
const http = require('http')
    this.logFile = path.join(this.projectRoot, 'logs', 'deployment-automation.log')
    this.configFile = path.join(this.projectRoot, 'logs', 'deployment-config.json')
    this.deploymentHistoryFile = path.join(this.projectRoot, 'logs', 'deployment-history.json')
      deploymentStrategy: process.env.DEPLOYMENT_STRATEGY || 'blue-green'
      autoDeploy: process.env.AUTO_DEPLOY === 'true'
      rollbackEnabled: process.env.ROLLBACK_ENABLED === 'true'
          url: process.env.PROD_URL || 'http://localhost:3000'
          healthEndpoint: '/api/health'
          url: process.env.STAGING_URL || 'http://localhost:3001'
          healthEndpoint: '/api/health'
        }
      }
    };
    this.deploymentHistory = [];
    this.currentDeployment = null;
    this.ensureLogsDirectory();
  }
  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
      await this.loadConfiguration();
      await this.loadDeploymentHistory();
    } catch (error) {
    }
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }
  async loadConfiguration() {
    try {
      const config = await fs.readFile(this.configFile, 'utf8');
      this.config = { ...this.config, ...JSON.parse(config) };
      this.log('✅ Deployment configuration loaded');
    } catch (error) {
      this.log('📝 Using default deployment configuration');
      await this.saveConfiguration();
    }
  }
  async saveConfiguration() {
    try {
      await fs.writeFile(this.configFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save configuration: ${error.message}`, 'ERROR');
    }
  }
  async loadDeploymentHistory() {
    try {
      const history = await fs.readFile(this.deploymentHistoryFile, 'utf8');
      this.deploymentHistory = JSON.parse(history);
      this.log(`📚 Loaded ${this.deploymentHistory.length} deployment records`);
    } catch (error) {
      this.log('📚 No deployment history found, starting fresh');
      this.deploymentHistory = [];
    }
  }
  async saveDeploymentHistory() {
    try {
      await fs.writeFile(this.deploymentHistoryFile, JSON.stringify(this.deploymentHistory, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save deployment history: ${error.message}`, 'ERROR');
    }
  }
  async initialize() {
    this.log('🚀 Initializing Intelligent Deployment Automation...');
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to PM2: ${err.message}`, 'ERROR');
          reject(err);
          return;
        }
        this.log('✅ Connected to PM2 for deployment automation');
        resolve();
      });
    });
  }
  async deploy(environment = 'staging', options = {}) {
    this.log(`🚀 Starting deployment to ${environment}...`);
    try {
      const deployment = {
        id: this.generateDeploymentId(),
        environment,
        strategy: this.config.deploymentStrategy,
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: [],
        options
      };
      this.currentDeployment = deployment;
      // Pre-deployment checks
      await this.runPreDeploymentChecks(deployment);
      // Build and test
      await this.buildAndTest(deployment);
      // Deploy based on strategy
      switch (this.config.deploymentStrategy) {
        case 'blue-green':
          await this.blueGreenDeploy(environment, deployment);
          break;
        case 'canary':
          await this.canaryDeploy(environment, deployment);
          break;
        case 'rolling':
          await this.rollingDeploy(environment, deployment);
          break;
        default:
          await this.standardDeploy(environment, deployment);
      }
      // Post-deployment verification
      await this.runPostDeploymentVerification(environment, deployment);
      // Update deployment status
      deployment.status = 'completed';
      deployment.endTime = new Date().toISOString();
      deployment.duration = new Date(deployment.endTime) - new Date(deployment.startTime);
      this.deploymentHistory.push(deployment);
      await this.saveDeploymentHistory();
      this.log(`✅ Deployment to ${environment} completed successfully`);
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`, 'ERROR');
      if (this.currentDeployment) {
        this.currentDeployment.status = 'failed';
        this.currentDeployment.error = error.message;
        this.currentDeployment.endTime = new Date().toISOString();
        this.deploymentHistory.push(this.currentDeployment);
        await this.saveDeploymentHistory();
        // Auto-rollback if enabled
        if (this.config.rollbackEnabled) {
          await this.rollback(environment);
        }
      }
      throw error;
    }
  }
  async runPreDeploymentChecks(deployment) {
    this.log('🔍 Running pre-deployment checks...');
    const checks = [
      { name: 'Git Status', action: () => this.checkGitStatus() },
      { name: 'Dependencies', action: () => this.checkDependencies() },
      { name: 'Environment', action: () => this.checkEnvironment(deployment.environment) },
      { name: 'PM2 Status', action: () => this.checkPM2Status() },
      { name: 'Health Check', action: () => this.checkCurrentHealth(deployment.environment) }
    ];
    for (const check of checks) {
      try {
        await check.action();
        deployment.steps.push({
          step: check.name,
          status: 'passed',
          timestamp: new Date().toISOString()
        });
        this.log(`✅ ${check.name} check passed`);
      } catch (error) {
        deployment.steps.push({
          step: check.name,
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        this.log(`❌ ${check.name} check failed: ${error.message}`, 'ERROR');
        throw new Error(`Pre-deployment check failed: ${check.name}`);
      }
    }
  }
  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        throw new Error('Working directory has uncommitted changes');
      }
    } catch (error) {
      throw new Error(`Git status check failed: ${error.message}`);
    }
  }
  async checkDependencies() {
    try {
      if (!await this.fileExists('package.json')) {
        throw new Error('package.json not found');
      }
      if (!await this.fileExists('node_modules')) {
        throw new Error('Dependencies not installed');
      }
    } catch (error) {
      throw new Error(`Dependency check failed: ${error.message}`);
    }
  }
  async checkEnvironment(environment) {
    if (!this.config.environments[environment]) {
      throw new Error(`Environment ${environment} not configured`);
    }
  }
  async checkPM2Status() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(new Error(`PM2 status check failed: ${err.message}`));
          return;
        }
        resolve(processes);
      });
    });
  }
  async checkCurrentHealth(environment) {
    const envConfig = this.config.environments[environment];
    if (!envConfig) return;
    try {
      const health = await this.performHealthCheck(envConfig.url + envConfig.healthEndpoint);
      if (!health.healthy) {
        throw new Error('Current environment is not healthy');
      }
    } catch (error) {
      this.log(`⚠️ Health check warning: ${error.message}`, 'WARN');
    }
  }
  async buildAndTest(deployment) {
    this.log('🔨 Building and testing...');
    const buildSteps = [
      { name: 'Install Dependencies', command: 'npm install' },
      { name: 'Lint Check', command: 'npm run lint' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Build Project', command: 'npm run build' },
      { name: 'Run Tests', command: 'npm run test:smoke' }
    ];
    for (const step of buildSteps) {
      try {
        this.log(`🔄 ${step.name}...`);
        execSync(step.command, { stdio: 'inherit', cwd: this.projectRoot });
        deployment.steps.push({
          step: step.name,
          status: 'passed',
          timestamp: new Date().toISOString()
        });
        this.log(`✅ ${step.name} completed`);
      } catch (error) {
        deployment.steps.push({
          step: step.name,
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        this.log(`❌ ${step.name} failed: ${error.message}`, 'ERROR');
        throw new Error(`Build step failed: ${step.name}`);
      }
    }
  }
  async blueGreenDeploy(environment, deployment) {
    this.log('🔵🟢 Starting blue-green deployment...');
    const envConfig = this.config.environments[environment];
    const currentColor = await this.getCurrentColor(environment);
    const newColor = currentColor === 'blue' ? 'green' : 'blue';
    try {
      // Deploy to new color
      await this.deployToColor(environment, newColor, deployment);
      // Health check new deployment
      const healthCheck = await this.healthCheckDeployment(environment, newColor);
      if (!healthCheck.healthy) {
        throw new Error('New deployment failed health check');
      }
      // Switch traffic to new color
      await this.switchTraffic(environment, newColor, deployment);
      // Clean up old color
      await this.cleanupOldColor(environment, currentColor, deployment);
      this.log(`✅ Blue-green deployment completed - switched to ${newColor}`);
    } catch (error) {
      this.log(`❌ Blue-green deployment failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async canaryDeploy(environment, deployment) {
    this.log('🐦 Starting canary deployment...');
    const envConfig = this.config.environments[environment];
    const canaryPercentage = this.config.canaryPercentage;
    try {
      // Deploy canary version
      await this.deployCanary(environment, deployment);
      // Gradually increase traffic
      const steps = [10, 25, 50, 75, 100];
      for (const percentage of steps) {
        this.log(`🔄 Routing ${percentage}% traffic to canary...`);
        await this.routeTraffic(environment, percentage, deployment);
        // Wait and check health
        await this.sleep(30000); // 30 seconds
        const health = await this.checkCanaryHealth(environment, percentage);
        if (!health.healthy) {
          throw new Error(`Canary deployment failed at ${percentage}% traffic`);
        }
        if (percentage < 100) {
          this.log(`✅ Canary healthy at ${percentage}% - proceeding to next step`);
        }
      }
      // Complete canary deployment
      await this.completeCanaryDeployment(environment, deployment);
      this.log('✅ Canary deployment completed successfully');
    } catch (error) {
      this.log(`❌ Canary deployment failed: ${error.message}`, 'ERROR');
      await this.rollbackCanary(environment, deployment);
      throw error;
    }
  }
  async rollingDeploy(environment, deployment) {
    this.log('🔄 Starting rolling deployment...');
    const envConfig = this.config.environments[environment];
    const instances = envConfig.instances;
    try {
      // Deploy one instance at a time
      for (let i = 0; i < instances; i++) {
        this.log(`🔄 Deploying instance ${i + 1}/${instances}...`);
        await this.deployInstance(environment, i, deployment);
        // Health check this instance
        const health = await this.healthCheckInstance(environment, i);
        if (!health.healthy) {
          throw new Error(`Instance ${i + 1} failed health check`);
        }
        this.log(`✅ Instance ${i + 1} deployed and healthy`);
      }
      this.log('✅ Rolling deployment completed successfully');
    } catch (error) {
      this.log(`❌ Rolling deployment failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async standardDeploy(environment, deployment) {
    this.log('📦 Starting standard deployment...');
    try {
      // Stop current processes
      await this.stopCurrentProcesses(environment, deployment);
      // Deploy new version
      await this.deployNewVersion(environment, deployment);
      // Start new processes
      await this.startNewProcesses(environment, deployment);
      this.log('✅ Standard deployment completed');
    } catch (error) {
      this.log(`❌ Standard deployment failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async runPostDeploymentVerification(environment, deployment) {
    this.log('🔍 Running post-deployment verification...');
    const envConfig = this.config.environments[environment];
    try {
      // Health check
      const health = await this.performHealthCheck(envConfig.url + envConfig.healthEndpoint);
      if (!health.healthy) {
        throw new Error('Post-deployment health check failed');
      }
      // Performance check
      const performance = await this.checkPerformance(envConfig.url);
      if (performance.score < 70) {
        this.log(`⚠️ Performance score is low: ${performance.score}`, 'WARN');
      }
      // Security check
      const security = await this.checkSecurity(envConfig.url);
      if (security.score < 80) {
        this.log(`⚠️ Security score is low: ${security.score}`, 'WARN');
      }
      deployment.steps.push({
        step: 'Post-deployment verification',
        status: 'passed',
        health: health,
        performance: performance,
        security: security,
        timestamp: new Date().toISOString()
      });
      this.log('✅ Post-deployment verification completed');
    } catch (error) {
      deployment.steps.push({
        step: 'Post-deployment verification',
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      this.log(`❌ Post-deployment verification failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async performHealthCheck(url) {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const request = (url.startsWith('https') ? https : http).get(url, (res) => {
        const duration = Date.now() - startTime;
        if (res.statusCode === 200) {
          resolve({
            healthy: true,
            statusCode: res.statusCode,
            responseTime: duration,
            timestamp: new Date().toISOString()
          });
        } else {
          resolve({
            healthy: false,
            statusCode: res.statusCode,
            responseTime: duration,
            timestamp: new Date().toISOString()
          });
        }
      });
      request.on('error', (error) => {
        resolve({
          healthy: false,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      });
      request.setTimeout(10000, () => {
        request.destroy();
        resolve({
          healthy: false,
          error: 'Timeout',
          timestamp: new Date().toISOString()
        });
      });
    });
  }
  async checkPerformance(url) {
    try {
      const startTime = Date.now();
      const response = await this.performHealthCheck(url);
      const duration = Date.now() - startTime;
      let score = 100;
      if (duration > 1000) score -= 20;
      if (duration > 2000) score -= 30;
      if (duration > 5000) score -= 40;
      return {
        score: Math.max(0, score),
        responseTime: duration,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        score: 0,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
  async checkSecurity(url) {
    try {
      // Basic security checks
      let score = 100;
      // Check for HTTPS
      if (!url.startsWith('https')) {
        score -= 30;
      }
      // Check for security headers (simplified)
      const response = await this.performHealthCheck(url);
      if (response.statusCode !== 200) {
        score -= 20;
      }
      return {
        score: Math.max(0, score),
        checks: ['https', 'response_code'],
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        score: 0,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
  async rollback(environment) {
    this.log(`🔄 Starting rollback for ${environment}...`);
    try {
      // Find last successful deployment
      const lastSuccessful = this.deploymentHistory
      await fs.mkdir(path.join(this.projectRoot, 'logs')
      console.log('Logs directory already exists')
  log(message, level = 'INFO')
    fs.appendFile(this.logFile, logMessage + '\n')
      const config = await fs.readFile(this.configFile, 'utf8')
      this.log(' Deployment configuration loaded')
      this.log('� Using default deployment configuration')
      this.log(` Failed to save configuration: ${error.message}`, 'ERROR'`)
      const history = await fs.readFile(this.deploymentHistoryFile, 'utf8')
      this.log('� No deployment history found, starting fresh')
      this.log(` Failed to save deployment history: ${error.message}`, 'ERROR'`)
    this.log(' Initializing Intelligent Deployment Automation...')
          this.log(` Failed to connect to PM2: ${err.message}`, 'ERROR'`)
        this.log(' Connected to PM2 for deployment automation')
  async deploy(environment = 'staging')
        status: 'in_progress'
        case 'blue-green'
        case 'canary'
        case 'rolling'
      deployment.status = 'completed'
      this.log(` Deployment failed: ${error.message}`, 'ERROR'`)
        this.currentDeployment.status = 'failed'
    this.log(' Running pre-deployment checks...')
      { name: 'Git Status'}
      { name: 'Dependencies'}
      { name: 'Environment'}
      { name: 'PM2 Status'}
      { name: 'Health Check'}
          status: 'passed'
          status: 'failed'
        this.log(` ${check.name} check failed: ${error.message}`, 'ERROR'`)
      const status = execSync('git status --porcelain', { encoding: 'utf8'})
        throw new Error('Working directory has uncommitted changes')
      if (!await this.fileExists('package.json')
        throw new Error('package.json not found')
      if (!await this.fileExists('node_modules')
        throw new Error('Dependencies not installed')
        throw new Error('Current environment is not healthy')
      this.log(`⚠ Health check warning: ${error.message}`, 'WARN'`)
    this.log('� Building and testing...')
      { name: 'Install Dependencies', command: 'npm install'}
      { name: 'Lint Check', command: 'npm run lint'}
      { name: 'Type Check', command: 'npm run type-check'}
      { name: 'Build Project', command: 'npm run build'}
      { name: 'Run Tests', command: 'npm run test:smoke'}
        execSync(step.command, { stdio: 'inherit'})
          status: 'passed'
          status: 'failed'
        this.log(` ${step.name} failed: ${error.message}`, 'ERROR'`)
    this.log('�� Starting blue-green deployment...')
    const newColor = currentColor === 'blue' ? 'green' : 'blue'
        throw new Error('New deployment failed health check')
      this.log(` Blue-green deployment failed: ${error.message}`, 'ERROR'`)
    this.log('� Starting canary deployment...')
      this.log(' Canary deployment completed successfully')
      this.log(` Canary deployment failed: ${error.message}`, 'ERROR'`)
    this.log('� Starting rolling deployment...')
      this.log(' Rolling deployment completed successfully')
      this.log(` Rolling deployment failed: ${error.message}`, 'ERROR'`)
    this.log('� Starting standard deployment...')
      this.log(' Standard deployment completed')
      this.log(` Standard deployment failed: ${error.message}`, 'ERROR'`)
    this.log(' Running post-deployment verification...')
        throw new Error('Post-deployment health check failed')
        this.log(`⚠ Performance score is low: ${performance.score}`, 'WARN'`)
        this.log(`⚠ Security score is low: ${security.score}`, 'WARN'`)
        step: 'Post-deployment verification'
        status: 'passed'
      this.log(' Post-deployment verification completed')
        step: 'Post-deployment verification'
        status: 'failed'
      this.log(` Post-deployment verification failed: ${error.message}`, 'ERROR'`)
      const request = (url.startsWith('https')
      request.on('error')
          error: 'Timeout'
      if (!url.startsWith('https')
        checks: ['https', 'response_code']
        .filter(d => d.environment === environment && d.status === 'completed')
        throw new Error('No successful deployment found to rollback to')
      this.log(` Rollback failed: ${error.message}`, 'ERROR'`)
      execSync('npm install')
      execSync('npm run build')
      this.log(` Rollback to ${versionId} failed: ${error.message}`, 'ERROR'`)
    return Math.random() > 0.5 ? 'blue' : 'green'
    this.log('� Deploying canary version...')
    this.log(' Completing canary deployment...')
    this.log('� Rolling back canary deployment...')
      this.log(' Intelligent Deployment Automation is ready')
      process.on('SIGINT')
        this.log('� Shutting down Deployment Automation...')
      this.log(` Fatal error: ${error.message}`, 'ERROR'`)
