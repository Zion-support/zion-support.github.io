#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      scripts: [],
      tests: { passed: 0, failed: 0 },
      builds: { success: false },
      improvements: [],
      errors: []
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async runScript(scriptPath, description) {
    this.log(`\n🔄 Running: ${description}`);
    
    try {
      const result = await this.runCommand(`node ${scriptPath}`, description);
      
      this.results.scripts.push({
        name: description,
        path: scriptPath,
        success: result.success,
        error: result.error
      });
      
      if (result.success) {
        this.log(`✅ ${description} completed successfully`, 'SUCCESS');
      } else {
        this.log(`❌ ${description} failed: ${result.error}`, 'ERROR');
        this.results.errors.push(`${description}: ${result.error}`);
      }
      
      return result;
    } catch (error) {
      this.log(`❌ Error running ${description}: ${error.message}`, 'ERROR');
      this.results.errors.push(`${description}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAllAutomationScripts() {
    this.log('\n🚀 RUNNING ALL AUTOMATION SCRIPTS');
    this.log('='.repeat(60));

    const scripts = [
      { path: 'comprehensive-automation-suite.cjs', description: 'Comprehensive Automation Suite' },
      { path: 'automation-runner.cjs', description: 'Automation Runner' },
      { path: 'comprehensive-fix-script.cjs', description: 'Comprehensive Fix Script' },
      { path: 'scripts/advanced-app-improver.cjs', description: 'Advanced App Improver' },
      { path: 'scripts/comprehensive-tester.cjs', description: 'Comprehensive Tester' },
      { path: 'scripts/performance-monitor.cjs', description: 'Performance Monitor' },
      { path: 'scripts/health-checker.cjs', description: 'Health Checker' },
      { path: 'scripts/bundle-analyzer.cjs', description: 'Bundle Analyzer' },
      { path: 'scripts/performance-optimizer.cjs', description: 'Performance Optimizer' },
      { path: 'scripts/security-enhancer.cjs', description: 'Security Enhancer' },
      { path: 'scripts/accessibility-improver.cjs', description: 'Accessibility Improver' },
      { path: 'scripts/app-monitor.cjs', description: 'App Monitor' }
    ];

    for (const script of scripts) {
      if (fs.existsSync(script.path)) {
        await this.runScript(script.path, script.description);
      } else {
        this.log(`⚠️ Script not found: ${script.path}`, 'WARNING');
      }
    }
  }

  async runTests() {
    this.log('\n🧪 RUNNING TESTS');
    
    try {
      // Run type check
      const typeResult = await this.runCommand('npm run type-check', 'TypeScript type check');
      if (typeResult.success) {
        this.results.tests.passed++;
      } else {
        this.results.tests.failed++;
      }

      // Run linting
      const lintResult = await this.runCommand('npm run lint:fix', 'ESLint fix');
      if (lintResult.success) {
        this.results.tests.passed++;
      } else {
        this.results.tests.failed++;
      }

      // Run smoke tests
      const testResult = await this.runCommand('npm run test:smoke', 'Smoke tests');
      if (testResult.success) {
        this.results.tests.passed++;
      } else {
        this.results.tests.failed++;
      }

      this.log(`✅ Tests completed: ${this.results.tests.passed} passed, ${this.results.tests.failed} failed`, 'SUCCESS');
    } catch (error) {
      this.log(`❌ Test error: ${error.message}`, 'ERROR');
      this.results.errors.push(`Test error: ${error.message}`);
    }
  }

  async buildProject() {
    this.log('\n🏗️ BUILDING PROJECT');
    
    try {
      // Clean build
      await this.runCommand('npm run clean', 'Clean build');

      // Build project
      const buildResult = await this.runCommand('npm run build', 'Production build');
      
      if (buildResult.success) {
        this.results.builds.success = true;
        this.log('✅ Build successful', 'SUCCESS');
      } else {
        this.log('❌ Build failed', 'ERROR');
        this.results.errors.push('Build failed');
      }
    } catch (error) {
      this.log(`❌ Build error: ${error.message}`, 'ERROR');
      this.results.errors.push(`Build error: ${error.message}`);
    }
  }

  async commitAndPush() {
    this.log('\n📝 COMMITTING AND PUSHING CHANGES');
    
    try {
      // Add all changes
      await this.runCommand('git add .', 'Git add');

      // Commit changes
      const commitMessage = `feat: Comprehensive automation improvements and fixes - ${new Date().toISOString()}`;
      await this.runCommand(`git commit -m "${commitMessage}"`, 'Git commit');

      // Push changes
      await this.runCommand('git push origin HEAD', 'Git push');

      this.log('✅ Changes committed and pushed', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Error committing/pushing: ${error.message}`, 'ERROR');
      this.results.errors.push(`Git error: ${error.message}`);
    }
  }

  async mergeToMain() {
    this.log('\n🔄 MERGING TO MAIN BRANCH');
    
    try {
      // Check current branch
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      this.log(`Current branch: ${currentBranch}`);

      if (currentBranch !== 'main') {
        // Switch to main branch
        await this.runCommand('git checkout main', 'Switch to main branch');
        
        // Merge the current branch
        await this.runCommand(`git merge ${currentBranch}`, `Merge ${currentBranch} into main`);
        
        // Push to main
        await this.runCommand('git push origin main', 'Push to main branch');
        
        this.log('✅ Successfully merged to main branch', 'SUCCESS');
      } else {
        this.log('ℹ️ Already on main branch', 'INFO');
      }
    } catch (error) {
      this.log(`❌ Error merging to main: ${error.message}`, 'ERROR');
      this.results.errors.push(`Merge error: ${error.message}`);
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    
    this.log('\n📊 MASTER AUTOMATION ORCHESTRATOR REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${duration}ms`);
    this.log(`Scripts Run: ${this.results.scripts.length}`);
    this.log(`Tests Passed: ${this.results.tests.passed}`);
    this.log(`Tests Failed: ${this.results.tests.failed}`);
    this.log(`Build Success: ${this.results.builds.success}`);
    this.log(`Errors: ${this.results.errors.length}`);
    this.log('');

    if (this.results.scripts.length > 0) {
      this.log('✅ Scripts Executed:');
      this.results.scripts.forEach(script => {
        const status = script.success ? '✅' : '❌';
        this.log(`  ${status} ${script.name}`);
      });
    }

    if (this.results.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.results.errors.forEach(error => this.log(`  - ${error}`));
    }

    // Save comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      duration,
      results: this.results,
      summary: {
        totalScripts: this.results.scripts.length,
        successfulScripts: this.results.scripts.filter(s => s.success).length,
        failedScripts: this.results.scripts.filter(s => !s.success).length,
        testsPassed: this.results.tests.passed,
        testsFailed: this.results.tests.failed,
        buildSuccess: this.results.builds.success,
        totalErrors: this.results.errors.length
      }
    };

    fs.writeFileSync('master-automation-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Master automation report saved to master-automation-report.json');
  }

  async run() {
    this.log('🚀 Starting Master Automation Orchestrator');
    this.log('='.repeat(60));

    try {
      await this.runAllAutomationScripts();
      await this.runTests();
      await this.buildProject();
      await this.commitAndPush();
      await this.mergeToMain();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateFinalReport();
    }
  }
}

// Run the master automation orchestrator
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = MasterAutomationOrchestrator;