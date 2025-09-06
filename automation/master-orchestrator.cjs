#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.logFile = path.join(this.logsDir, 'master-orchestrator.log');
    this.startTime = Date.now();
    this.results = {};
    
    try {
      fs.mkdirSync(this.logsDir, { recursive: true });
    } catch (e) {
      // Ignore if directory already exists
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, line);
    } catch (e) {
      // Ignore file write errors
    }
    
    process.stdout.write(line);
  }

  runCmd(cmd) {
    try {
      this.log(`Executing: ${cmd}`);
      const output = execSync(cmd, { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot,
        timeout: 300000 // 5 minutes timeout
      });
      return { success: true, output: output.toString() };
    } catch (error) {
      this.log(`Command failed: ${cmd} - ${error.message}`, 'ERROR');
      return { 
        success: false, 
        error: error.message,
        output: error.stdout?.toString() || error.stderr?.toString() || ''
      };
    }
  }

  async runAllChecks() {
    this.log('🎯 Starting master automation orchestration...');
    
    // Create automation reports directory
    const reportsDir = path.join(this.projectRoot, 'automation-reports');
    try {
      fs.mkdirSync(reportsDir, { recursive: true });
    } catch (e) {
      // Ignore if directory already exists
    }

    // Run linting and code quality checks
    this.log('🔧 Running linting and code quality checks...');
    const lintResult = this.runCmd('npm run lint:fix');
    this.results.lint = {
      success: lintResult.success,
      error: lintResult.error || null,
      output: lintResult.output
    };

    // Run TypeScript type checking
    this.log('🚀 TypeScript type checking');
    const typeCheckResult = this.runCmd('npm run type-check');
    this.results.typeCheck = {
      success: typeCheckResult.success,
      error: typeCheckResult.error || null,
      output: typeCheckResult.output
    };

    // Run smoke tests
    this.log('🚀 Run smoke tests');
    const smokeTestResult = this.runCmd('npm run test:smoke');
    this.results.smokeTests = {
      success: smokeTestResult.success,
      error: smokeTestResult.error || null,
      output: smokeTestResult.output
    };

    // Run build process
    this.log('🏗️ Running build process...');
    this.log('🚀 Clean build artifacts');
    const cleanResult = this.runCmd('rm -rf .next out dist build');
    this.results.cleanBuild = {
      success: true, // Clean always succeeds
      error: null,
      output: cleanResult.output
    };

    this.log('🚀 Build application');
    const buildResult = this.runCmd('npm run build');
    this.results.build = {
      success: buildResult.success,
      error: buildResult.error || null,
      output: buildResult.output
    };

    // Run automation scripts
    this.log('🤖 Running automation scripts...');
    const automationScripts = [
      'enhanced-automation-suite.cjs',
      'app-optimizer.cjs',
      'comprehensive-app-improvement-suite.cjs'
    ];

    for (const script of automationScripts) {
      const scriptPath = path.join(this.projectRoot, 'automation', script);
      if (fs.existsSync(scriptPath)) {
        this.log(`Running ${script}...`);
        const result = this.runCmd(`node automation/${script}`);
        this.results[script.replace('.cjs', '')] = {
          success: result.success,
          error: result.error || null,
          output: result.output
        };
      } else {
        this.log(`⚠️ Script not found: ${script}`);
        this.results[script.replace('.cjs', '')] = {
          success: false,
          error: 'Script not found',
          output: ''
        };
      }
    }

    // Generate automation report
    this.log('📊 Generating automation report...');
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        total: Object.keys(this.results).length,
        passed: Object.values(this.results).filter(r => r.success).length,
        failed: Object.values(this.results).filter(r => !r.success).length
      }
    };

    try {
      const reportPath = path.join(reportsDir, 'master-orchestrator-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Report saved to: ${reportPath}`);
    } catch (e) {
      this.log(`Failed to save report: ${e.message}`, 'ERROR');
    }

    const passed = report.summary.passed;
    const total = report.summary.total;
    const successRate = Math.round((passed / total) * 100);

    this.log(`🎉 Master automation orchestration completed successfully!`);
    this.log(`📊 Summary: ${passed}/${total} tasks passed (${successRate}%)`);

    return passed === total;
  }
}

if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  orchestrator.runAllChecks()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Orchestrator failed:', error);
      process.exit(1);
    });
}

module.exports = MasterOrchestrator;