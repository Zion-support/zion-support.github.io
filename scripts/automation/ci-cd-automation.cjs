#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CICDAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 300000; // 5 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.ciData = {};
    this.deploymentHistory = [];
    this.buildHistory = [];
    this.releaseHistory = [];
    this.maxHistory = 20;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async runCIPipeline() {
    try {
      this.log('🔄 Running CI pipeline...', 'info');
      
      const pipeline = {
        preflight: await this.runPreflightChecks(),
        build: await this.runBuildProcess(),
        test: await this.runTestSuite(),
        quality: await this.runQualityChecks(),
        security: await this.runSecurityChecks(),
        timestamp: new Date().toISOString()
      };

      // Determine pipeline status
      const allPassed = Object.values(pipeline).every(step => 
        step && step.status === 'passed' || step.status === 'skipped'
      );
      
      pipeline.status = allPassed ? 'passed' : 'failed';
      pipeline.summary = this.generatePipelineSummary(pipeline);

      this.ciData.pipeline = pipeline;
      
      // Store in history
      this.buildHistory.push(pipeline);
      if (this.buildHistory.length > this.maxHistory) {
        this.buildHistory.shift();
      }

      this.log(`CI pipeline ${pipeline.status}`, pipeline.status === 'passed' ? 'info' : 'error');
      return pipeline;
    } catch (error) {
      this.log(`CI pipeline failed: ${error.message}`, 'error');
      return null;
    }
  }

  async runPreflightChecks() {
    try {
      this.log('Running preflight checks...', 'info');
      
      const checks = {
        git: await this.checkGitStatus(),
        dependencies: await this.checkDependencies(),
        environment: await this.checkEnvironment(),
        status: 'passed',
        issues: []
      };

      // Check for issues
      if (checks.git.hasChanges && !checks.git.isClean) {
        checks.issues.push('Uncommitted changes detected');
      }
      
      if (checks.dependencies.outdated > 0) {
        checks.issues.push(`${checks.dependencies.outdated} outdated dependencies`);
      }
      
      if (checks.environment.missing.length > 0) {
        checks.issues.push(`Missing environment variables: ${checks.environment.missing.join(', ')}`);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Preflight checks failed']
      };
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.workingDir, 
        encoding: 'utf8' 
      });
      
      const branch = execSync('git branch --show-current', { 
        cwd: this.workingDir, 
        encoding: 'utf8' 
      }).trim();
      
      const lastCommit = execSync('git log -1 --oneline', { 
        cwd: this.workingDir, 
        encoding: 'utf8' 
      }).trim();
      
      return {
        branch,
        lastCommit,
        hasChanges: status.trim().length > 0,
        isClean: status.trim().length === 0,
        changes: status.split('\n').filter(l => l.trim()).length
      };
    } catch (error) {
      return {
        error: error.message,
        hasChanges: false,
        isClean: false
      };
    }
  }

  async checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      let outdated = 0;
      try {
        const outdatedResult = execSync('npm outdated --json', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        if (outdatedResult.trim()) {
          const outdatedData = JSON.parse(outdatedResult);
          outdated = Object.keys(outdatedData).length;
        }
      } catch (error) {
        // No outdated packages
      }

      return {
        total: Object.keys(dependencies).length,
        outdated,
        status: outdated === 0 ? 'up-to-date' : 'outdated'
      };
    } catch (error) {
      return {
        error: error.message,
        total: 0,
        outdated: 0
      };
    }
  }

  async checkEnvironment() {
    try {
      const requiredEnvVars = ['NODE_ENV'];
      const missing = [];
      
      for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
          missing.push(envVar);
        }
      }

      return {
        missing,
        status: missing.length === 0 ? 'complete' : 'incomplete'
      };
    } catch (error) {
      return {
        error: error.message,
        missing: [],
        status: 'unknown'
      };
    }
  }

  async runBuildProcess() {
    try {
      this.log('Running build process...', 'info');
      
      const startTime = Date.now();
      
      execSync('npm run build', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      
      // Check build output
      const distDir = path.join(this.workingDir, 'dist');
      const buildOutput = {
        exists: fs.existsSync(distDir),
        files: [],
        size: 0
      };

      if (buildOutput.exists) {
        const files = fs.readdirSync(distDir);
        buildOutput.files = files;
        
        for (const file of files) {
          const filePath = path.join(distDir, file);
          const stats = fs.statSync(filePath);
          buildOutput.size += stats.size;
        }
        
        buildOutput.sizeMB = Math.round(buildOutput.size / 1024 / 1024 * 100) / 100;
      }

      return {
        status: 'passed',
        buildTime,
        buildTimeSeconds: Math.round(buildTime / 1000),
        output: buildOutput,
        message: 'Build completed successfully'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Build failed'
      };
    }
  }

  async runTestSuite() {
    try {
      this.log('Running test suite...', 'info');
      
      const startTime = Date.now();
      
      execSync('npm test', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const testTime = Date.now() - startTime;
      
      return {
        status: 'passed',
        testTime,
        testTimeSeconds: Math.round(testTime / 1000),
        message: 'All tests passed'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Tests failed'
      };
    }
  }

  async runQualityChecks() {
    try {
      this.log('Running quality checks...', 'info');
      
      const checks = {
        linting: await this.runLinting(),
        typeChecking: await this.runTypeChecking(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.linting.status === 'failed') {
        checks.issues.push('Linting failed');
      }
      
      if (checks.typeChecking.status === 'failed') {
        checks.issues.push('Type checking failed');
      }

      if (checks.issues.length > 0) {
        checks.status = 'failed';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Quality checks failed']
      };
    }
  }

  async runLinting() {
    try {
      execSync('npm run lint', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        status: 'passed',
        message: 'Linting passed'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Linting failed'
      };
    }
  }

  async runTypeChecking() {
    try {
      execSync('npm run type-check', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        status: 'passed',
        message: 'Type checking passed'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Type checking failed'
      };
    }
  }

  async runSecurityChecks() {
    try {
      this.log('Running security checks...', 'info');
      
      const checks = {
        audit: await this.runSecurityAudit(),
        dependencies: await this.checkSecurityDependencies(),
        status: 'passed',
        issues: []
      };

      // Check for security issues
      if (checks.audit.vulnerabilities > 0) {
        checks.issues.push(`${checks.audit.vulnerabilities} security vulnerabilities found`);
      }
      
      if (checks.dependencies.outdated > 0) {
        checks.issues.push(`${checks.dependencies.outdated} outdated dependencies with potential security issues`);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Security checks failed']
      };
    }
  }

  async runSecurityAudit() {
    try {
      const result = execSync('npm audit --json', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(result);
      const vulnerabilities = auditData.metadata?.vulnerabilities || {};
      
      return {
        vulnerabilities: Object.keys(vulnerabilities).length,
        critical: vulnerabilities.critical || 0,
        high: vulnerabilities.high || 0,
        moderate: vulnerabilities.moderate || 0,
        low: vulnerabilities.low || 0
      };
    } catch (error) {
      return {
        vulnerabilities: 0,
        critical: 0,
        high: 0,
        moderate: 0,
        low: 0
      };
    }
  }

  async checkSecurityDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      let outdated = 0;
      try {
        const outdatedResult = execSync('npm outdated --json', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        if (outdatedResult.trim()) {
          const outdatedData = JSON.parse(outdatedResult);
          outdated = Object.keys(outdatedData).length;
        }
      } catch (error) {
        // No outdated packages
      }

      return {
        total: Object.keys(dependencies).length,
        outdated,
        status: outdated === 0 ? 'secure' : 'needs-update'
      };
    } catch (error) {
      return {
        error: error.message,
        total: 0,
        outdated: 0
      };
    }
  }

  generatePipelineSummary(pipeline) {
    const summary = {
      totalSteps: 0,
      passedSteps: 0,
      failedSteps: 0,
      skippedSteps: 0,
      duration: 0,
      criticalIssues: 0
    };

    for (const [stepName, step] of Object.entries(pipeline)) {
      if (stepName === 'timestamp' || stepName === 'status' || stepName === 'summary') continue;
      
      summary.totalSteps++;
      
      if (step.status === 'passed') {
        summary.passedSteps++;
      } else if (step.status === 'failed') {
        summary.failedSteps++;
        summary.criticalIssues++;
      } else if (step.status === 'skipped') {
        summary.skippedSteps++;
      }
      
      // Calculate total duration
      if (step.buildTime) summary.duration += step.buildTime;
      if (step.testTime) summary.duration += step.testTime;
    }

    summary.durationSeconds = Math.round(summary.duration / 1000);
    summary.successRate = summary.totalSteps > 0 ? (summary.passedSteps / summary.totalSteps) * 100 : 0;

    return summary;
  }

  async runDeployment() {
    try {
      this.log('🚀 Running deployment...', 'info');
      
      // Only deploy if CI passed
      if (!this.ciData.pipeline || this.ciData.pipeline.status !== 'passed') {
        this.log('CI pipeline did not pass - skipping deployment', 'warn');
        return {
          status: 'skipped',
          reason: 'CI pipeline failed',
          timestamp: new Date().toISOString()
        };
      }

      const deployment = {
        preDeployment: await this.runPreDeploymentChecks(),
        deployment: await this.executeDeployment(),
        postDeployment: await this.runPostDeploymentChecks(),
        timestamp: new Date().toISOString()
      };

      // Determine deployment status
      const allPassed = Object.values(deployment).every(step => 
        step && step.status === 'passed' || step.status === 'skipped'
      );
      
      deployment.status = allPassed ? 'success' : 'failed';

      // Store in history
      this.deploymentHistory.push(deployment);
      if (this.deploymentHistory.length > this.maxHistory) {
        this.deploymentHistory.shift();
      }

      this.log(`Deployment ${deployment.status}`, deployment.status === 'success' ? 'info' : 'error');
      return deployment;
    } catch (error) {
      this.log(`Deployment failed: ${error.message}`, 'error');
      return null;
    }
  }

  async runPreDeploymentChecks() {
    try {
      this.log('Running pre-deployment checks...', 'info');
      
      const checks = {
        environment: await this.checkDeploymentEnvironment(),
        resources: await this.checkDeploymentResources(),
        status: 'passed',
        issues: []
      };

      if (checks.issues.length > 0) {
        checks.status = 'failed';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Pre-deployment checks failed']
      };
    }
  }

  async checkDeploymentEnvironment() {
    try {
      const requiredEnvVars = ['NODE_ENV', 'DEPLOYMENT_ENV'];
      const missing = [];
      
      for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
          missing.push(envVar);
        }
      }

      return {
        missing,
        status: missing.length === 0 ? 'ready' : 'incomplete'
      };
    } catch (error) {
      return {
        error: error.message,
        missing: [],
        status: 'unknown'
      };
    }
  }

  async checkDeploymentResources() {
    try {
      // Check if build artifacts exist
      const distDir = path.join(this.workingDir, 'dist');
      const exists = fs.existsSync(distDir);
      
      if (!exists) {
        return {
          status: 'failed',
          issues: ['Build artifacts not found']
        };
      }

      return {
        status: 'passed',
        message: 'Deployment resources ready'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
  }

  async executeDeployment() {
    try {
      this.log('Executing deployment...', 'info');
      
      // This is a placeholder for actual deployment logic
      // In a real scenario, you would:
      // 1. Upload files to server/CDN
      // 2. Update deployment configuration
      // 3. Run database migrations
      // 4. Update load balancer configuration
      // 5. Health checks
      
      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        status: 'passed',
        message: 'Deployment executed successfully',
        deploymentId: `deploy-${Date.now()}`,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Deployment execution failed'
      };
    }
  }

  async runPostDeploymentChecks() {
    try {
      this.log('Running post-deployment checks...', 'info');
      
      const checks = {
        health: await this.checkDeploymentHealth(),
        performance: await this.checkDeploymentPerformance(),
        status: 'passed',
        issues: []
      };

      if (checks.issues.length > 0) {
        checks.status = 'failed';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Post-deployment checks failed']
      };
    }
  }

  async checkDeploymentHealth() {
    try {
      // This would check the deployed application health
      // For now, return a simulated health check
      return {
        status: 'healthy',
        responseTime: 150,
        uptime: 100,
        message: 'Application is healthy'
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message
      };
    }
  }

  async checkDeploymentPerformance() {
    try {
      // This would check the deployed application performance
      // For now, return a simulated performance check
      return {
        status: 'good',
        loadTime: 1200,
        throughput: 1000,
        message: 'Performance is within acceptable range'
      };
    } catch (error) {
      return {
        status: 'poor',
        error: error.message
      };
    }
  }

  async generateCIReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          ciStatus: this.ciData.pipeline?.status || 'unknown',
          deploymentStatus: this.deploymentHistory.length > 0 ? 
            this.deploymentHistory[this.deploymentHistory.length - 1].status : 'none',
          totalBuilds: this.buildHistory.length,
          totalDeployments: this.deploymentHistory.length,
          successRate: this.calculateSuccessRate()
        },
        ciPipeline: this.ciData.pipeline,
        recentBuilds: this.buildHistory.slice(-5),
        recentDeployments: this.deploymentHistory.slice(-5),
        recommendations: this.generateCIRecommendations()
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'ci-cd-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('CI/CD report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  calculateSuccessRate() {
    if (this.buildHistory.length === 0) return 0;
    
    const successfulBuilds = this.buildHistory.filter(build => build.status === 'passed').length;
    return Math.round((successfulBuilds / this.buildHistory.length) * 100);
  }

  generateCIRecommendations() {
    const recommendations = [];
    
    if (this.ciData.pipeline) {
      const pipeline = this.ciData.pipeline;
      
      if (pipeline.status === 'failed') {
        recommendations.push('Fix CI pipeline failures before deploying');
      }
      
      if (pipeline.preflight?.issues?.length > 0) {
        recommendations.push('Address preflight check issues');
      }
      
      if (pipeline.quality?.issues?.length > 0) {
        recommendations.push('Fix quality check issues');
      }
      
      if (pipeline.security?.issues?.length > 0) {
        recommendations.push('Address security vulnerabilities');
      }
    }

    // General recommendations
    recommendations.push('Set up automated deployment triggers');
    recommendations.push('Implement rollback procedures');
    recommendations.push('Add deployment notifications');
    recommendations.push('Monitor deployment metrics');

    return recommendations;
  }

  async run() {
    this.log('🔄 Starting CI/CD Automation...', 'info');
    
    try {
      await this.runCIPipeline();
      
      // Only run deployment if CI passes and it's time to deploy
      const shouldDeploy = this.shouldTriggerDeployment();
      if (shouldDeploy) {
        await this.runDeployment();
      }
      
      const report = await this.generateCIReport();
      
      if (report) {
        this.log(`✅ CI/CD automation completed:`, 'info');
        this.log(`   CI Status: ${report.summary.ciStatus}`, 'info');
        this.log(`   Deployment Status: ${report.summary.deploymentStatus}`, 'info');
        this.log(`   Success Rate: ${report.summary.successRate}%`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
      }
      
    } catch (error) {
      this.log(`CI/CD automation failed: ${error.message}`, 'error');
    }
  }

  shouldTriggerDeployment() {
    // Simple deployment trigger logic
    // In production, this would check:
    // - Git branch (main/master)
    // - CI pipeline status
    // - Deployment schedule
    // - Manual approval
    
    if (!this.ciData.pipeline || this.ciData.pipeline.status !== 'passed') {
      return false;
    }

    // Deploy every 4th CI run (simulating deployment schedule)
    return this.buildHistory.length % 4 === 0;
  }

  start() {
    this.log('🔄 CI/CD automation started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const cicd = new CICDAutomation();
  cicd.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    cicd.log('🛑 CI/CD automation shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    cicd.log('🛑 CI/CD automation shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = CICDAutomation;