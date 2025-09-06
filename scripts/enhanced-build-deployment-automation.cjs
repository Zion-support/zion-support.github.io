#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnhancedBuildDeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(
      this.reportsDir,
      'build-deployment-automation.log'
    );
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 600000, // 10 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async preBuildChecks() {
    this.log('🔍 Running Pre-Build Checks');

    const checks = [
      {
        command: 'npm run lint',
        description: 'ESLint Check',
      },
      {
        command: 'npm run type-check',
        description: 'TypeScript Type Check',
      },
      {
        command: 'npm run test',
        description: 'Test Suite',
      },
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, ...result });
    }

    return results;
  }

  async buildApplication() {
    this.log('🏗️ Building Application');

    const buildSteps = [
      {
        command: 'npm run build',
        description: 'Next.js Build',
      },
      {
        command: 'npm run analyze',
        description: 'Bundle Analysis',
      },
    ];

    const results = [];
    for (const step of buildSteps) {
      const result = await this.runCommand(step.command, step.description);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async postBuildOptimization() {
    this.log('⚡ Running Post-Build Optimization');

    const optimizations = [
      {
        command: 'npm run sitemap',
        description: 'Generate Sitemap',
      },
      {
        command: 'npm run search:index',
        description: 'Generate Search Index',
      },
    ];

    const results = [];
    for (const optimization of optimizations) {
      const result = await this.runCommand(
        optimization.command,
        optimization.description
      );
      results.push({ ...optimization, ...result });
    }

    return results;
  }

  async generateBuildReport(results) {
    this.log('📊 Generating Build Report');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSteps: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
      },
      details: results,
    };

    const reportFile = path.join(
      this.reportsDir,
      'build-deployment-report.json'
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Report saved to: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Enhanced Build & Deployment Automation');

    try {
      // Pre-build checks
      const preBuildResults = await this.preBuildChecks();

      // Check if pre-build checks passed
      const failedChecks = preBuildResults.filter(r => !r.success);
      if (failedChecks.length > 0) {
        this.log('❌ Pre-build checks failed. Stopping build process.');
        return {
          success: false,
          error: 'Pre-build checks failed',
          details: failedChecks,
        };
      }

      // Build application
      const buildResults = await this.buildApplication();

      // Check if build succeeded
      const failedBuilds = buildResults.filter(r => !r.success);
      if (failedBuilds.length > 0) {
        this.log('❌ Build failed. Stopping deployment process.');
        return { success: false, error: 'Build failed', details: failedBuilds };
      }

      // Post-build optimization
      const optimizationResults = await this.postBuildOptimization();

      // Generate report
      const allResults = [
        ...preBuildResults,
        ...buildResults,
        ...optimizationResults,
      ];
      const report = await this.generateBuildReport(allResults);

      this.log(
        '🎉 Enhanced Build & Deployment Automation completed successfully'
      );
      return { success: true, report };
    } catch (error) {
      this.log(`❌ Automation failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new EnhancedBuildDeploymentAutomation();
  automation.run().then(result => {
    if (result.success) {
      console.log('✅ Automation completed successfully');
      process.exit(0);
    } else {
      console.log('❌ Automation failed');
      process.exit(1);
    }
  });
}

module.exports = EnhancedBuildDeploymentAutomation;
