#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveDeploymentAutomator {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'deployment-automator.log');
    this.ensureLogDir();
    this.deploymentResults = {
      build: { success: false, duration: 0 },
      test: { success: false, duration: 0 },
      lint: { success: false, duration: 0 },
      typeCheck: { success: false, duration: 0 },
      security: { success: false, duration: 0 },
      performance: { success: false, duration: 0 },
      deployment: { success: false, duration: 0 },
    };
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runStep(stepName, command, timeout = 300000) {
    this.log(`🔄 Running ${stepName}...`);
    const startTime = Date.now();

    try {
      execSync(command, {
        stdio: 'pipe',
        timeout,
        cwd: process.cwd(),
      });

      const duration = Date.now() - startTime;
      this.log(`✅ ${stepName} completed successfully (${duration}ms)`);
      return { success: true, duration };
    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`❌ ${stepName} failed: ${error.message} (${duration}ms)`);
      return { success: false, duration, error: error.message };
    }
  }

  async runBuild() {
    this.log('🏗️ Starting build process...');
    const result = await this.runStep('Build', 'npm run build');
    this.deploymentResults.build = result;
    return result.success;
  }

  async runTests() {
    this.log('🧪 Running test suite...');
    const result = await this.runStep('Tests', 'npm run test:smoke');
    this.deploymentResults.test = result;
    return result.success;
  }

  async runLinting() {
    this.log('🔍 Running linting...');
    const result = await this.runStep('Linting', 'npm run lint:fix');
    this.deploymentResults.lint = result;
    return result.success;
  }

  async runTypeCheck() {
    this.log('📝 Running type checking...');
    const result = await this.runStep('Type Check', 'npm run type-check');
    this.deploymentResults.typeCheck = result;
    return result.success;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    const result = await this.runStep(
      'Security Audit',
      'npm run security:audit'
    );
    this.deploymentResults.security = result;
    return result.success;
  }

  async runPerformanceCheck() {
    this.log('⚡ Running performance check...');
    const result = await this.runStep(
      'Performance Check',
      'npm run perf:audit'
    );
    this.deploymentResults.performance = result;
    return result.success;
  }

  async deployToStaging() {
    this.log('🚀 Deploying to staging...');
    const result = await this.runStep(
      'Staging Deployment',
      'npm run deploy:staging'
    );
    this.deploymentResults.deployment = result;
    return result.success;
  }

  async deployToProduction() {
    this.log('🌟 Deploying to production...');
    const result = await this.runStep(
      'Production Deployment',
      'npm run deploy:production'
    );
    this.deploymentResults.deployment = result;
    return result.success;
  }

  async generateDeploymentReport() {
    this.log('📊 Generating deployment report...');

    const report = {
      timestamp: new Date().toISOString(),
      deploymentResults: this.deploymentResults,
      summary: {
        totalSteps: Object.keys(this.deploymentResults).length,
        successfulSteps: 0,
        failedSteps: 0,
        totalDuration: 0,
        successRate: 0,
      },
      recommendations: [],
    };

    // Calculate summary
    Object.values(this.deploymentResults).forEach(step => {
      if (step.success) {
        report.summary.successfulSteps++;
      } else {
        report.summary.failedSteps++;
      }
      report.summary.totalDuration += step.duration;
    });

    if (report.summary.totalSteps > 0) {
      report.summary.successRate =
        (report.summary.successfulSteps / report.summary.totalSteps) * 100;
    }

    // Generate recommendations
    if (!this.deploymentResults.build.success) {
      report.recommendations.push('Fix build errors before deployment');
    }
    if (!this.deploymentResults.test.success) {
      report.recommendations.push('Fix failing tests before deployment');
    }
    if (!this.deploymentResults.lint.success) {
      report.recommendations.push('Fix linting issues before deployment');
    }
    if (!this.deploymentResults.typeCheck.success) {
      report.recommendations.push('Fix TypeScript errors before deployment');
    }
    if (!this.deploymentResults.security.success) {
      report.recommendations.push(
        'Address security vulnerabilities before deployment'
      );
    }
    if (!this.deploymentResults.performance.success) {
      report.recommendations.push('Optimize performance before deployment');
    }

    const reportPath = path.join(
      __dirname,
      'reports',
      'deployment-report.json'
    );
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Deployment report saved to: ${reportPath}`);

    return report;
  }

  async runStagingDeployment() {
    this.log('🚀 Starting staging deployment...');

    try {
      // Pre-deployment checks
      await this.runBuild();
      await this.runTests();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runSecurityAudit();
      await this.runPerformanceCheck();

      // Deploy to staging
      await this.deployToStaging();

      // Generate report
      const report = await this.generateDeploymentReport();

      this.log('🏁 Staging deployment completed');
      this.log(`📊 Success rate: ${report.summary.successRate.toFixed(2)}%`);
      this.log(`⏱️ Total duration: ${report.summary.totalDuration}ms`);

      return report;
    } catch (error) {
      this.log(`💥 Staging deployment failed: ${error.message}`);
      throw error;
    }
  }

  async runProductionDeployment() {
    this.log('🌟 Starting production deployment...');

    try {
      // Pre-deployment checks
      await this.runBuild();
      await this.runTests();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runSecurityAudit();
      await this.runPerformanceCheck();

      // Deploy to production
      await this.deployToProduction();

      // Generate report
      const report = await this.generateDeploymentReport();

      this.log('🏁 Production deployment completed');
      this.log(`📊 Success rate: ${report.summary.successRate.toFixed(2)}%`);
      this.log(`⏱️ Total duration: ${report.summary.totalDuration}ms`);

      return report;
    } catch (error) {
      this.log(`💥 Production deployment failed: ${error.message}`);
      throw error;
    }
  }

  async run() {
    const args = process.argv.slice(2);
    const environment = args[0] || 'staging';

    this.log(
      `🚀 Starting Comprehensive Deployment Automator for ${environment}...`
    );

    try {
      let report;
      if (environment === 'production') {
        report = await this.runProductionDeployment();
      } else {
        report = await this.runStagingDeployment();
      }

      return report;
    } catch (error) {
      this.log(`💥 Deployment automator failed: ${error.message}`);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automator = new ComprehensiveDeploymentAutomator();
  automator.run().catch(console.error);
}

module.exports = ComprehensiveDeploymentAutomator;
