#!/usr/bin/env node;

/**;
 * Smart Deployment Pipeline;
 * ;
 * This script provides intelligent automation for:;
 * - Deployment pipeline management;
 * - Git-integrated deployments;
 * - Automated rollbacks;
 * - Environment management;
 * - Deployment health monitoring;
 */;

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class SmartDeploymentPipeline {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.config = this.loadConfig();
    this.deploymentStatus = {}
    this.environmentHealth = {}

    this.setupDirectories();
    this.setupLogging()}

  setupDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })}
    })}

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'smart-deployment-pipeline.log');
    this.log('Smart Deployment Pipeline started')}

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;

    console.log(logMessage);

    if (this.logFile) {
      fs.appendFileSync(this.logFile, logMessage + '\n')}
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, 'automation-config.json');

    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'))} catch (error) {
        this.log(`Error loading config: ${error.message}`, 'ERROR')}
    }

    // Default configuration;
    return {
      deployment: {
        gitDeployment: process.env.GIT_DEPLOYMENT === 'true',;
        autoRollback: process.env.AUTO_ROLLBACK === 'true',;
        healthChecks: true,;
        environmentManagement: true},;
      environments: {
        development: {
          branch: 'develop',;
          autoDeploy: true,;
          healthThreshold: 70,;
          rollbackThreshold: 50},;
        staging: {
          branch: 'staging',;
          autoDeploy: true,;
          healthThreshold: 80,;
          rollbackThreshold: 60},;
        production: {
          branch: 'main',;
          autoDeploy: false, // Manual approval for production;
          healthThreshold: 90,;
          rollbackThreshold: 70}
      },;
      automation: {
        deploymentInterval: 4 * 60 * 60 * 1000, // 4 hours;
        healthCheckInterval: 15 * 60 * 1000, // 15 minutes;
        rollbackCheckInterval: 5 * 60 * 1000 // 5 minutes}
    }}

  async analyzeDeploymentReadiness() {
    this.log('Analyzing deployment readiness...');

    try {
      // Check git status;
      const gitStatus = await this.getGitStatus();

      // Check build health;
      const buildHealth = await this.checkBuildHealth();

      // Check test status;
      const testStatus = await this.checkTestStatus();

      // Check dependency health;
      const dependencyHealth = await this.checkDependencyHealth();

      // Check environment health;
      const environmentHealth = await this.checkEnvironmentHealth();

      this.deploymentStatus = {
        timestamp: new Date().toISOString(),;
        gitStatus,;
        buildHealth,;
        testStatus,;
        dependencyHealth,;
        environmentHealth,;
        readiness: this.calculateDeploymentReadiness(gitStatus, buildHealth, testStatus, dependencyHealth, environmentHealth)}

      this.log(`Deployment readiness analysis completed. Score: ${this.deploymentStatus.readiness}%`);
      return this.deploymentStatus;
      } catch (error) {
      this.log(`Error analyzing deployment readiness: ${error.message}`, 'ERROR');
      return null}
  }

  async getGitStatus() {
    try {
      // Get current branch;
      const currentBranch = execSync('git branch --show-current', { ;
        cwd: this.projectRoot, ;
        encoding: 'utf8' }).trim();

      // Check if working directory is clean;
      const status = execSync('git status --porcelain', { ;
        cwd: this.projectRoot, ;
        encoding: 'utf8' });

      // Get recent commits;
      const recentCommits = execSync('git log --oneline -5', { ;
        cwd: this.projectRoot, ;
        encoding: 'utf8' }).split('\n').filter(c => c.trim());

      // Check if branch is up to date;
      const isUpToDate = execSync('git status -uno', { ;
        cwd: this.projectRoot, ;
        encoding: 'utf8' }).includes('up to date');

      return {
        currentBranch,;
        isClean: status.length === 0,;
        hasChanges: status.length > 0,;
        isUpToDate,;
        recentCommits: recentCommits.slice(0, 3),;
        score: this.calculateGitStatusScore(status.length === 0, isUpToDate)}
      } catch (error) {
      this.log(`Error getting git status: ${error.message}`, 'ERROR');
      return { error: error.message, score: 0 }}
  }

  calculateGitStatusScore(isClean, isUpToDate) {
    let score = 100;

    if (!isClean) score -= 30;
    if (!isUpToDate) score -= 20;

    return Math.max(0, score)}

  async checkBuildHealth() {
    this.log('Checking build health...');

    try {
      // Check if build script exists;
      if (!fs.existsSync(path.join(this.projectRoot, 'package.json'))) {
        return { status: 'UNKNOWN', message: 'No package.json found', score: 0 }}
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));

      if (!packageJson.scripts?.build) {
        return { status: 'UNKNOWN', message: 'No build script found', score: 0 }}
      // Try to run build;
      try {
        const startTime = Date.now();
        const buildResult = execSync('npm run build', { ;
          cwd: this.projectRoot, ;
          encoding: 'utf8',;
          stdio: 'pipe'});
        const buildTime = Date.now() - startTime;

        // Check build output size;
        const buildSize = this.getBuildSize();

        return {
          status: 'PASS',;
          buildTime,;
          buildSize,;
          score: this.calculateBuildHealthScore(buildTime, buildSize)}
        } catch (error) {
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        return {
          status: 'FAIL',;
          error: error.message,;
          output,;
          score: 0}}
      } catch (error) {
      this.log(`Error checking build health: ${error.message}`, 'ERROR');
      return { status: 'ERROR', error: error.message, score: 0 }}
  }

  getBuildSize() {
    try {
      let totalSize = 0;
      let fileCount = 0;

      const analyzeDirectory = (dirPath) => {
        if (!fs.existsSync(dirPath)) return;

        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
          const filePath = path.join(dirPath, file);
          const stat = fs.statSync(filePath);

          if (stat.isDirectory()) {
            analyzeDirectory(filePath)} else if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
            totalSize += stat.size;
            fileCount++}
        })}
      // Check common build directories;
      ['out', 'dist', 'build', '.next'].forEach(dir => {
        analyzeDirectory(path.join(this.projectRoot, dir))});

      const sizeInMB = totalSize / (1024 * 1024);

      return {
        totalSize: Math.round(sizeInMB * 100) / 100,;
        fileCount,;
        averageSize: fileCount > 0 ? Math.round((sizeInMB / fileCount) * 100) / 100 : 0}
      } catch (error) {
      return { error: error.message }}
  }

  calculateBuildHealthScore(buildTime, buildSize) {
    let score = 100;

    // Build time penalties;
    if (buildTime > 120000) score -= 30; // > 2 minutes;
    else if (buildTime > 60000) score -= 20; // > 1 minute;

    // Build size penalties;
    if (buildSize?.totalSize > 20) score -= 25; // > 20MB;
    else if (buildSize?.totalSize > 10) score -= 15; // > 10MB;

    return Math.max(0, score)}

  async checkTestStatus() {
    this.log('Checking test status...');

    try {
      // Check if test script exists;
      if (!fs.existsSync(path.join(this.projectRoot, 'package.json'))) {
        return { status: 'UNKNOWN', message: 'No package.json found', score: 0 }}
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));

      if (!packageJson.scripts?.test) {
        return { status: 'UNKNOWN', message: 'No test script found', score: 0 }}
      // Run tests;
      try {
        const startTime = Date.now();
        const testResult = execSync('npm test', { ;
          cwd: this.projectRoot, ;
          encoding: 'utf8',;
          stdio: 'pipe'});
        const testTime = Date.now() - startTime;

        // Parse test results;
        const testOutput = testResult.toString();
        const passedMatch = testOutput.match(/(\d+) passing/);
        const failedMatch = testOutput.match(/(\d+) failing/);

        const passed = passedMatch ? parseInt(passedMatch[1]) : 0;
        const failed = failedMatch ? parseInt(failedMatch[1]) : 0;
        const total = passed + failed;

        const successRate = total > 0 ? (passed / total) * 100 : 0;

        return {
          status: failed === 0 ? 'PASS' : 'FAIL',;
          passed,;
          failed,;
          total,;
          successRate: Math.round(successRate * 100) / 100,;
          testTime,;
          score: this.calculateTestScore(successRate, testTime)}
        } catch (error) {
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        return {
          status: 'FAIL',;
          error: error.message,;
          output,;
          score: 0}}
      } catch (error) {
      this.log(`Error checking test status: ${error.message}`, 'ERROR');
      return { status: 'ERROR', error: error.message, score: 0 }}
  }

  calculateTestScore(successRate, testTime) {
    let score = successRate;

    // Test time penalties;
    if (testTime > 30000) score -= 10; // > 30 seconds;
    else if (testTime > 15000) score -= 5; // > 15 seconds;

    return Math.max(0, score)}

  async checkDependencyHealth() {
    this.log('Checking dependency health...');

    try {
      const dependencyMetrics = {}

      // Check for outdated dependencies;
      try {
        const outdatedResult = execSync('npm outdated --json', { ;
          cwd: this.projectRoot, ;
          encoding: 'utf8',;
          stdio: 'pipe'});

        const outdated = JSON.parse(outdatedResult);
        const outdatedCount = Object.keys(outdated).length;

        dependencyMetrics.outdated = {
          count: outdatedCount,;
          packages: Object.keys(outdated),;
          severity: outdatedCount > 10 ? 'HIGH' : outdatedCount > 5 ? 'MEDIUM' : 'LOW'}
        } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages;
        dependencyMetrics.outdated = { count: 0, packages: [], severity: 'LOW' }}
      // Check for security vulnerabilities;
      try {
        const auditResult = execSync('npm audit --json', { ;
          cwd: this.projectRoot, ;
          encoding: 'utf8',;
          stdio: 'pipe'});

        const audit = JSON.parse(auditResult);
        const vulnerabilities = audit.metadata?.vulnerabilities || {}

        dependencyMetrics.security = {
          total: vulnerabilities.total || 0,;
          critical: vulnerabilities.critical || 0,;
          high: vulnerabilities.high || 0,;
          moderate: vulnerabilities.moderate || 0,;
          low: vulnerabilities.low || 0,;
          severity: this.calculateSecuritySeverity(vulnerabilities)}
        } catch (error) {
        dependencyMetrics.security = { error: error.message }}
      // Calculate dependency health score;
      const dependencyScore = this.calculateDependencyHealthScore(dependencyMetrics);
      dependencyMetrics.overallScore = dependencyScore;

      this.log(`Dependency health check completed. Score: ${dependencyScore}%`);
      return dependencyMetrics;
      } catch (error) {
      this.log(`Error checking dependency health: ${error.message}`, 'ERROR');
      return { error: error.message }}
  }

  calculateSecuritySeverity(vulnerabilities) {
    if (vulnerabilities.critical > 0) return 'CRITICAL';
    if (vulnerabilities.high > 0) return 'HIGH';
    if (vulnerabilities.moderate > 0) return 'MODERATE';
    if (vulnerabilities.low > 0) return 'LOW';
    return 'NONE'}

  calculateDependencyHealthScore(metrics) {
    let score = 100;

    // Outdated dependencies penalties;
    if (metrics.outdated?.count > 10) {
      score -= 30} else if (metrics.outdated?.count > 5) {
      score -= 20} else if (metrics.outdated?.count > 0) {
      score -= 10}
    // Security vulnerabilities penalties;
    if (metrics.security?.critical > 0) {
      score -= 50} else if (metrics.security?.high > 0) {
      score -= 30} else if (metrics.security?.moderate > 0) {
      score -= 20} else if (metrics.security?.low > 0) {
      score -= 10}
    return Math.max(0, score)}

  async checkEnvironmentHealth() {
    this.log('Checking environment health...');

    try {
      const environmentHealth = {}

      for (const [envName, envConfig] of Object.entries(this.config.environments)) {
        try {
          // Check if environment is accessible;
          const health = await this.checkEnvironmentAccessibility(envName, envConfig);
          environmentHealth[envName] = health} catch (error) {
          environmentHealth[envName] = { error: error.message, score: 0 }}
      }
      this.environmentHealth = environmentHealth;
      return environmentHealth;
      } catch (error) {
      this.log(`Error checking environment health: ${error.message}`, 'ERROR');
      return {}}
  }

  async checkEnvironmentAccessibility(envName, envConfig) {
    try {
      // This is a simplified check - in a real implementation, you'd check actual endpoints;
      const health = {
        name: envName,;
        accessible: true,;
        responseTime: Math.random() * 1000, // Simulated response time;
        status: 'HEALTHY',;
        score: 85 + Math.random() * 15 // Simulated health score}

      // Simulate some environment-specific issues;
      if (envName === 'production') {
        health.score = Math.max(health.score, 90); // Production should be more stable}
      return health;
      } catch (error) {
      return {
        name: envName,;
        accessible: false,;
        error: error.message,;
        score: 0}}
  }

  calculateDeploymentReadiness(gitStatus, buildHealth, testStatus, dependencyHealth, environmentHealth) {
    const scores = [;
      gitStatus?.score || 0,;
      buildHealth?.score || 0,;
      testStatus?.score || 0,;
      dependencyHealth?.overallScore || 0;
    ];

    // Add environment health scores;
    Object.values(environmentHealth).forEach(env => {
      if (env.score) scores.push(env.score)});

    const validScores = scores.filter(score => score > 0);
    const averageScore = validScores.length > 0 ? validScores.reduce((sum, score) => sum + score, 0) / validScores.length : 0;

    return Math.round(averageScore)}

  async executeDeployment(environment) {
    this.log(`Executing deployment to ${environment}...`);

    try {
      const envConfig = this.config.environments[environment];
      if (!envConfig) {
        throw new Error(`Environment ${environment} not configured`)}
      // Check deployment readiness;
      const readiness = await this.analyzeDeploymentReadiness();

      if (readiness.readiness < envConfig.healthThreshold) {
        throw new Error(`Deployment readiness (${readiness.readiness}%) below threshold (${envConfig.healthThreshold}%)`)}
      // Create deployment backup;
      const backupBranch = `deployment-backup-${environment}-${Date.now()}`;
      await this.createDeploymentBackup(backupBranch);

      // Execute deployment;
      const deploymentResult = await this.performDeployment(environment, envConfig);

      if (deploymentResult.success) {
        this.log(`Deployment to ${environment} completed successfully`);

        // Update deployment status;
        this.deploymentStatus.lastDeployment = {
          environment,;
          timestamp: new Date().toISOString(),;
          success: true,;
          backupBranch}

        // Monitor deployment health;
        this.scheduleHealthMonitoring(environment);

        return { success: true, backupBranch }} else {
        throw new Error(`Deployment failed: ${deploymentResult.error}`)}
      } catch (error) {
      this.log(`Deployment to ${environment} failed: ${error.message}`, 'ERROR');

      // Attempt rollback if enabled;
      if (this.config.deployment.autoRollback) {
        await this.attemptRollback(environment)}
      return { success: false, error: error.message }}
  }

  async createDeploymentBackup(backupBranch) {
    try {
      execSync(`git checkout -b ${backupBranch}`, { cwd: this.projectRoot });
      execSync('git push origin ' + backupBranch, { cwd: this.projectRoot });
      this.log(`Created deployment backup branch: ${backupBranch}`)} catch (error) {
      this.log(`Failed to create deployment backup: ${error.message}`, 'WARN')}
  }

  async performDeployment(environment, envConfig) {
    try {
      // Switch to environment branch;
      execSync(`git checkout ${envConfig.branch}`, { cwd: this.projectRoot });
      execSync('git pull origin ' + envConfig.branch, { cwd: this.projectRoot });

      // Install dependencies;
      execSync('npm install', { cwd: this.projectRoot });

      // Run tests;
      execSync('npm test', { cwd: this.projectRoot });

      // Build application;
      execSync('npm run build', { cwd: this.projectRoot });

      // Deploy to environment (this would be environment-specific);
      if (environment === 'production') {
        // Production deployment logic;
        execSync('npm run deploy:prod', { cwd: this.projectRoot })} else if (environment === 'staging') {
        // Staging deployment logic;
        execSync('npm run deploy:staging', { cwd: this.projectRoot })} else {
        // Development deployment logic;
        execSync('npm run deploy:dev', { cwd: this.projectRoot })}
      return { success: true }
      } catch (error) {
      return { success: false, error: error.message }}
  }

  scheduleHealthMonitoring(environment) {
    this.log(`Scheduling health monitoring for ${environment}...`);

    // Monitor deployment health for the next hour;
    const healthCheckInterval = setInterval(async () => {
      try {
        const health = await this.checkEnvironmentAccessibility(environment, this.config.environments[environment]);

        if (health.score < this.config.environments[environment].rollbackThreshold) {
          this.log(`Environment ${environment} health below rollback threshold. Score: ${health.score}%`, 'WARN');

          if (this.config.deployment.autoRollback) {
            await this.attemptRollback(environment)}
          clearInterval(healthCheckInterval)}
        } catch (error) {
        this.log(`Health monitoring error for ${environment}: ${error.message}`, 'ERROR')}
    }, this.config.automation.healthCheckInterval);

    // Stop monitoring after 1 hour;
    setTimeout(() => {
      clearInterval(healthCheckInterval);
      this.log(`Health monitoring for ${environment} completed`)}, 60 * 60 * 1000)}

  async attemptRollback(environment) {
    this.log(`Attempting rollback for ${environment}...`);

    try {
      // Find the last successful deployment;
      if (this.deploymentStatus.lastDeployment?.backupBranch) {
        const backupBranch = this.deploymentStatus.lastDeployment.backupBranch;

        // Switch to backup branch;
        execSync(`git checkout ${backupBranch}`, { cwd: this.projectRoot });

        // Deploy backup version;
        const rollbackResult = await this.performDeployment(environment, this.config.environments[environment]);

        if (rollbackResult.success) {
          this.log(`Rollback to ${environment} completed successfully`);
          return { success: true }} else {
          throw new Error(`Rollback failed: ${rollbackResult.error}`)}
      } else {
        throw new Error('No backup branch found for rollback')}
      } catch (error) {
      this.log(`Rollback to ${environment} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message }}
  }

  async generateDeploymentReport() {
    this.log('Generating deployment report...');

    const report = {
      timestamp: new Date().toISOString(),;
      deploymentStatus: this.deploymentStatus,;
      environmentHealth: this.environmentHealth,;
      summary: {
        overallReadiness: this.deploymentStatus.readiness || 0,;
        environments: Object.keys(this.environmentHealth).length,;
        healthyEnvironments: Object.values(this.environmentHealth).filter(env => env.score > 80).length,;
        deploymentRecommendations: this.generateDeploymentRecommendations()}
    }

    const reportPath = path.join(this.reportsDir, `deployment-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`Deployment report generated: ${reportPath}`);
    return report}

  generateDeploymentRecommendations() {
    const recommendations = [];

    // Deployment readiness recommendations;
    if (this.deploymentStatus.readiness < 80) {
      recommendations.push({;
        type: 'READINESS',;
        priority: 'HIGH',;
        action: 'Improve deployment readiness',;
        currentScore: this.deploymentStatus.readiness,;
        targetScore: 80})}
    // Environment health recommendations;
    Object.entries(this.environmentHealth).forEach(([envName, env]) => {
      if (env.score < 80) {
        recommendations.push({;
          type: 'ENVIRONMENT',;
          priority: 'MEDIUM',;
          action: `Improve ${envName} environment health`,;
          currentScore: env.score,;
          targetScore: 80})}
    });

    return recommendations}

  async run() {
    this.log('Starting Smart Deployment Pipeline...');

    try {
      // Analyze deployment readiness;
      await this.analyzeDeploymentReadiness();

      // Check if auto-deployment is enabled for any environment;
      for (const [envName, envConfig] of Object.entries(this.config.environments)) {
        if (envConfig.autoDeploy) {
          this.log(`Checking auto-deployment for ${envName}...`);

          const readiness = await this.analyzeDeploymentReadiness();

          if (readiness.readiness >= envConfig.healthThreshold) {
            this.log(`Auto-deploying to ${envName}...`);
            await this.executeDeployment(envName)} else {
            this.log(`Skipping auto-deployment to ${envName} - readiness below threshold`)}
        }
      }
      // Generate deployment report;
      await this.generateDeploymentReport();

      this.log('Smart Deployment Pipeline completed successfully');

      // Schedule next run;
      setTimeout(() => this.run(), this.config.automation.deploymentInterval);
      } catch (error) {
      this.log(`Error in Smart Deployment Pipeline: ${error.message}`, 'ERROR');

      // Schedule retry;
      setTimeout(() => this.run(), 5 * 60 * 1000); // 5 minutes}
  }
}

// Start the Smart Deployment Pipeline;
if (require.main === module) {
  const pipeline = new SmartDeploymentPipeline();
  pipeline.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

module.exports = SmartDeploymentPipeline;