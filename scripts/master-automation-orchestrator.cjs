#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'master-automation.log');
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

  async runAutomationScript(scriptPath, description) {
    this.log(`🎯 Running: ${description}`);
    try {
      const result = execSync(`node ${scriptPath}`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 900000, // 15 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runErrorFixing() {
    this.log('🔧 Running Error Fixing Automation');

    const errorFixingScripts = [
      {
        script: 'scripts/comprehensive-error-fixer.cjs',
        description: 'Comprehensive Error Fixer',
      },
    ];

    const results = [];
    for (const script of errorFixingScripts) {
      const result = await this.runAutomationScript(
        script.script,
        script.description
      );
      results.push({ ...script, ...result });
    }

    return results;
  }

  async runTesting() {
    this.log('🧪 Running Testing Automation');

    const testingScripts = [
      {
        script: 'scripts/comprehensive-testing-automation.cjs',
        description: 'Comprehensive Testing',
      },
    ];

    const results = [];
    for (const script of testingScripts) {
      const result = await this.runAutomationScript(
        script.script,
        script.description
      );
      results.push({ ...script, ...result });
    }

    return results;
  }

  async runPerformanceOptimization() {
    this.log('⚡ Running Performance Optimization');

    const performanceScripts = [
      {
        script: 'scripts/performance-optimization-automation.cjs',
        description: 'Performance Optimization',
      },
    ];

    const results = [];
    for (const script of performanceScripts) {
      const result = await this.runAutomationScript(
        script.script,
        script.description
      );
      results.push({ ...script, ...result });
    }

    return results;
  }

  async runBuildAndDeployment() {
    this.log('🏗️ Running Build and Deployment');

    const buildScripts = [
      {
        script: 'scripts/enhanced-build-deployment-automation.cjs',
        description: 'Enhanced Build and Deployment',
      },
    ];

    const results = [];
    for (const script of buildScripts) {
      const result = await this.runAutomationScript(
        script.script,
        script.description
      );
      results.push({ ...script, ...result });
    }

    return results;
  }

  async runAdditionalAutomations() {
    this.log('🔧 Running Additional Automations');

    const additionalScripts = [
      {
        command: 'npm run lint:fix',
        description: 'ESLint Auto-Fix',
      },
      {
        command: 'npm run format',
        description: 'Code Formatting',
      },
      {
        command: 'npm run sitemap',
        description: 'Sitemap Generation',
      },
      {
        command: 'npm run search:index',
        description: 'Search Index Generation',
      },
    ];

    const results = [];
    for (const script of additionalScripts) {
      const result = await this.runCommand(script.command, script.description);
      results.push({ ...script, ...result });
    }

    return results;
  }

  async generateMasterReport(allResults) {
    this.log('📊 Generating Master Automation Report');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalAutomations: allResults.length,
        successful: allResults.filter(r => r.success).length,
        failed: allResults.filter(r => !r.success).length,
        successRate:
          (
            (allResults.filter(r => r.success).length / allResults.length) *
            100
          ).toFixed(2) + '%',
      },
      automationCategories: {
        errorFixing: allResults.filter(r =>
          r.description.includes('Error Fixer')
        ),
        testing: allResults.filter(r => r.description.includes('Testing')),
        performance: allResults.filter(r =>
          r.description.includes('Performance')
        ),
        build: allResults.filter(
          r =>
            r.description.includes('Build') ||
            r.description.includes('Deployment')
        ),
        additional: allResults.filter(
          r =>
            r.description.includes('ESLint') ||
            r.description.includes('Format') ||
            r.description.includes('Sitemap') ||
            r.description.includes('Search')
        ),
      },
      details: allResults,
    };

    const reportFile = path.join(
      this.reportsDir,
      'master-automation-report.json'
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Master report saved to: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Master Automation Orchestrator');

    try {
      const allResults = [];

      // Run all automation categories
      const errorFixingResults = await this.runErrorFixing();
      allResults.push(...errorFixingResults);

      const testingResults = await this.runTesting();
      allResults.push(...testingResults);

      const performanceResults = await this.runPerformanceOptimization();
      allResults.push(...performanceResults);

      const buildResults = await this.runBuildAndDeployment();
      allResults.push(...buildResults);

      const additionalResults = await this.runAdditionalAutomations();
      allResults.push(...additionalResults);

      // Generate comprehensive report
      const report = await this.generateMasterReport(allResults);

      // Check overall success
      const failedAutomations = allResults.filter(r => !r.success);
      const success = failedAutomations.length === 0;

      if (success) {
        this.log('🎉 Master automation orchestration completed successfully');
      } else {
        this.log(`❌ ${failedAutomations.length} automations failed`);
      }

      return { success, report, failedAutomations };
    } catch (error) {
      this.log(`❌ Master automation orchestration failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new MasterAutomationOrchestrator();
  automation.run().then(result => {
    if (result.success) {
      console.log('✅ Master automation orchestration completed successfully');
      process.exit(0);
    } else {
      console.log('❌ Master automation orchestration failed');
      process.exit(1);
    }
  });
}

module.exports = MasterAutomationOrchestrator;
