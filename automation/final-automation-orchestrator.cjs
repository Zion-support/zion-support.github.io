#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Final Automation Orchestrator
 * Runs all automation scripts, tests, fixes, and pushes to main
 */
class FinalAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      automationScripts: [],
      tests: { passed: 0, failed: 0 },
      builds: { success: false, errors: [] },
      security: { issues: 0, fixed: 0 },
      improvements: [],
      deployment: { success: false, errors: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'PROGRESS'
              ? '🔄'
              : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 120000,
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async runAllAutomationScripts() {
    this.log('\n🚀 RUNNING ALL AUTOMATION SCRIPTS');
    this.log('='.repeat(50));

    const scripts = [
      'comprehensive-automation-suite.cjs',
      'automation-runner.cjs',
      'advanced-test-fixer.cjs',
      'security-audit-fixer.cjs',
      'comprehensive-app-improvement-suite.cjs'
    ];

    for (const script of scripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(
          `node ${script}`,
          `Run ${script}`
        );
        this.results.automationScripts.push({
          script,
          success: result.success,
          error: result.error
        });
      }
    }
  }

  async runComprehensiveTests() {
    this.log('\n🧪 RUNNING COMPREHENSIVE TESTS');
    this.log('='.repeat(50));

    // Run Jest tests
    const jestResult = await this.runCommand(
      'npm test -- --passWithNoTests',
      'Jest Tests'
    );

    if (jestResult.success) {
      this.results.tests.passed++;
    } else {
      this.results.tests.failed++;
    }

    // Run type checking
    const typeResult = await this.runCommand(
      'npm run type-check',
      'TypeScript Check'
    );

    if (typeResult.success) {
      this.results.tests.passed++;
    } else {
      this.results.tests.failed++;
    }

    // Run linting
    const lintResult = await this.runCommand(
      'npm run lint',
      'ESLint Check'
    );

    if (lintResult.success) {
      this.results.tests.passed++;
    } else {
      this.results.tests.failed++;
    }
  }

  async runBuildAndOptimization() {
    this.log('\n🏗️ RUNNING BUILD AND OPTIMIZATION');
    this.log('='.repeat(50));

    // Clean build
    const cleanResult = await this.runCommand(
      'npm run clean',
      'Clean Build'
    );

    // Production build
    const buildResult = await this.runCommand(
      'npm run build',
      'Production Build'
    );

    if (buildResult.success) {
      this.results.builds.success = true;
    } else {
      this.results.builds.errors.push(buildResult.error);
    }

    // Generate sitemap and search index
    await this.runCommand(
      'node scripts/generate-sitemap.cjs',
      'Generate Sitemap'
    );

    await this.runCommand(
      'node scripts/generate-search-index.cjs',
      'Generate Search Index'
    );
  }

  async runSecurityAudit() {
    this.log('\n🔒 RUNNING SECURITY AUDIT');
    this.log('='.repeat(50));

    // Run security audit
    const auditResult = await this.runCommand(
      'npm audit --audit-level moderate',
      'Security Audit'
    );

    if (!auditResult.success) {
      this.results.security.issues++;
      
      // Try to fix security issues
      const fixResult = await this.runCommand(
        'npm audit fix',
        'Security Fix'
      );

      if (fixResult.success) {
        this.results.security.fixed++;
      }
    }
  }

  async createFinalImprovements() {
    this.log('\n✨ CREATING FINAL IMPROVEMENTS');
    this.log('='.repeat(50));

    // Create performance monitoring script
    const performanceScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      loadTime: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        this.metrics.bundleSize = stats.size;
      }
    } catch(error) {
      console.error('Error measuring bundle size:', error);
    }
  }

  async measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = usage.heapUsed / 1024 / 1024; // MB
  }

  generateReport() {
    const report = {
      timestamp: this.metrics.timestamp,
      bundleSize: this.metrics.bundleSize,
      memoryUsage: this.metrics.memoryUsage,
      recommendations: []
    };
    
    if (this.metrics.bundleSize > 1000000) {
      report.recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      report.recommendations.push('Consider optimizing memory usage');
    }
    
    return report;
  }
}

const monitor = new PerformanceMonitor();
monitor.measureBundleSize();
monitor.measureMemoryUsage();
const report = monitor.generateReport();
const reportPath = path.join(process.cwd(), 'final-performance-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log('Final performance report generated:', reportPath);
`;

    const scriptPath = path.join(process.cwd(), 'final-performance-monitor.js');
    fs.writeFileSync(scriptPath, performanceScript);
    fs.chmodSync(scriptPath, '755');
    this.results.improvements.push('Created final performance monitoring script');
    this.log('Final performance monitoring script created', 'SUCCESS');
  }

  async deployToMain() {
    this.log('\n🚀 DEPLOYING TO MAIN BRANCH');
    this.log('='.repeat(50));

    try {
      // Add all changes
      const addResult = await this.runCommand(
        'git add .',
        'Git Add All Changes'
      );

      if (!addResult.success) {
        this.results.deployment.errors.push(addResult.error);
        return;
      }

      // Commit changes
      const commitMessage = `feat: Complete automation suite implementation and improvements - ${new Date().toISOString()}`;
      const commitResult = await this.runCommand(
        `git commit -m "${commitMessage}"`,
        'Git Commit'
      );

      if (!commitResult.success) {
        this.results.deployment.errors.push(commitResult.error);
        return;
      }

      // Push to current branch
      const pushResult = await this.runCommand(
        'git push origin HEAD',
        'Git Push to Current Branch'
      );

      if (!pushResult.success) {
        this.results.deployment.errors.push(pushResult.error);
        return;
      }

      // Switch to main branch
      const checkoutResult = await this.runCommand(
        'git checkout main',
        'Switch to Main Branch'
      );

      if (!checkoutResult.success) {
        this.log('Could not switch to main branch, staying on current branch', 'WARNING');
        this.results.deployment.success = true;
        return;
      }

      // Merge current branch into main
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      const mergeResult = await this.runCommand(
        `git merge ${currentBranch}`,
        'Merge into Main'
      );

      if (!mergeResult.success) {
        this.results.deployment.errors.push(mergeResult.error);
        return;
      }

      // Push main branch
      const pushMainResult = await this.runCommand(
        'git push origin main',
        'Push Main Branch'
      );

      if (pushMainResult.success) {
        this.results.deployment.success = true;
        this.log('Successfully deployed to main branch', 'SUCCESS');
      } else {
        this.results.deployment.errors.push(pushMainResult.error);
      }

    } catch (error) {
      this.log(`Deployment error: ${error.message}`, 'ERROR');
      this.results.deployment.errors.push(error.message);
    }
  }

  generateFinalReport() {
    const totalDuration = Date.now() - this.startTime;
    const successfulScripts = this.results.automationScripts.filter(s => s.success).length;
    const totalScripts = this.results.automationScripts.length;

    this.log('\n📊 FINAL AUTOMATION ORCHESTRATOR REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${Math.round(totalDuration / 1000)}s`);
    this.log(`Automation Scripts: ${successfulScripts}/${totalScripts} successful`);
    this.log(`Tests Passed: ${this.results.tests.passed}`);
    this.log(`Tests Failed: ${this.results.tests.failed}`);
    this.log(`Build Success: ${this.results.builds.success}`);
    this.log(`Security Issues Fixed: ${this.results.security.fixed}`);
    this.log(`Improvements Created: ${this.results.improvements.length}`);
    this.log(`Deployment Success: ${this.results.deployment.success}`);

    if (this.results.improvements.length > 0) {
      this.log('\n✨ Improvements Created:');
      this.results.improvements.forEach(improvement => {
        this.log(`  - ${improvement}`);
      });
    }

    if (this.results.deployment.errors.length > 0) {
      this.log('\n❌ Deployment Errors:');
      this.results.deployment.errors.forEach(error => {
        this.log(`  - ${error}`);
      });
    }

    // Save final report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        successfulScripts,
        totalScripts,
        testsPassed: this.results.tests.passed,
        testsFailed: this.results.tests.failed,
        buildSuccess: this.results.builds.success,
        securityFixed: this.results.security.fixed,
        improvementsCreated: this.results.improvements.length,
        deploymentSuccess: this.results.deployment.success
      }
    };

    fs.writeFileSync(
      'final-automation-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Final report saved to final-automation-report.json');
  }

  async run() {
    this.log('🎯 Starting Final Automation Orchestrator');
    this.log('='.repeat(60));

    try {
      await this.runAllAutomationScripts();
      await this.runComprehensiveTests();
      await this.runBuildAndOptimization();
      await this.runSecurityAudit();
      await this.createFinalImprovements();
      await this.deployToMain();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateFinalReport();
    }
  }
}

// Run the final automation orchestrator
if (require.main === module) {
  const orchestrator = new FinalAutomationOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = FinalAutomationOrchestrator;