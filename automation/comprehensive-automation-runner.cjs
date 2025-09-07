#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runScript(scriptPath, scriptName) {
    this.log(`\n🚀 Running ${scriptName}`);
    try {
      const result = execSync(`node ${scriptPath}`, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });
      this.log(`✅ ${scriptName} completed successfully`);
      this.results.push({ script: scriptName, success: true, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${scriptName} failed: ${error.message}`, 'ERROR');
      this.results.push({ script: scriptName, success: false, error: error.message });
      return { success: false, error: error.message };
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
console.log('🚀 Starting Comprehensive Automation Runner...');

class ComprehensiveAutomationRunner {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.logsDir = path.join(process.cwd(), 'logs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runAutomationScript(scriptName, scriptPath) {
    try {
      this.log(`🤖 Running ${scriptName}...`);
      execSync(`node ${scriptPath}`, { stdio: 'inherit' });
      this.log(`✅ ${scriptName} completed successfully`);
      return { success: true, script: scriptName };
    } catch (error) {
      this.log(`❌ ${scriptName} failed: ${error.message}`);
      return { success: false, script: scriptName, error: error.message };

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    }
  }

  async runAllAutomations() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
this.log('🎯 Starting Comprehensive Automation Runner');
    this.log('
=======
<<<<<<< HEAD
    this.log('🎯 Starting Comprehensive Automation Runner');
    this.log('==========================================');

    const scripts = [
      { path: 'automation/master-orchestrator.cjs', name: 'Master Orchestrator' },
      { path: 'enhanced-automation-suite.cjs', name: 'Enhanced Automation Suite' },
      { path: 'automation/performance-optimizer.cjs', name: 'Performance Optimizer' },
      { path: 'automation/security-enhancer.cjs', name: 'Security Enhancer' },
      { path: 'automation/accessibility-improver.cjs', name: 'Accessibility Improver' }
    ];

    for (const script of scripts) {
      if (fs.existsSync(script.path)) {
        await this.runScript(script.path, script.name);
      } else {
        this.log(`⚠️ Script not found: ${script.path}`, 'WARNING');
      }
    }
  }

  async runTests() {
    this.log('\n🧪 Running Test Suite');
    try {
      const testResult = execSync('npm run test:smoke', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });
      this.log('✅ Test suite completed successfully');
      this.results.push({ script: 'Test Suite', success: true, output: testResult });
    } catch (error) {
      this.log(`❌ Test suite failed: ${error.message}`, 'ERROR');
      this.results.push({ script: 'Test Suite', success: false, error: error.message });
    }
  }

  async generateFinalReport() {
    this.log('\n📊 Generating Final Report');
    
    const totalDuration = Date.now() - this.startTime.getTime();
    const successfulScripts = this.results.filter(r => r.success).length;
    const totalScripts = this.results.length;

    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulScripts,
      totalScripts,
      successRate: `${successfulScripts}/${totalScripts} (${Math.round((successfulScripts/totalScripts)*100)}%)`,
      results: this.results,
      summary: `Comprehensive automation completed: ${successfulScripts}/${totalScripts} scripts successful`
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'comprehensive-automation-final-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Final report saved to: ${reportPath}`);
    this.log(`🎉 Comprehensive automation completed: ${successfulScripts}/${totalScripts} scripts successful`);
  }

  async run() {
    await this.runAllAutomations();
    await this.runTests();
    await this.generateFinalReport();
  }
}

// Run the comprehensive automation
const runner = new ComprehensiveAutomationRunner();
runner.run().catch(console.error);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    const automations = [
      { name: 'Master Orchestrator', path: 'automation/master-orchestrator.cjs' },
      { name: 'Comprehensive App Improvement Suite', path: 'automation/comprehensive-app-improvement-suite.cjs' },
      { name: 'Continuous Improvement Orchestrator', path: 'automation/continuous-improvement-orchestrator.cjs' },
      { name: 'Health Check', path: 'automation/health-check.cjs' },
      { name: 'Performance Optimizer', path: 'automation/performance-optimizer.cjs' },
      { name: 'Security Scanner', path: 'automation/security-scanner.cjs' },
      { name: 'SEO Optimizer', path: 'automation/seo-optimizer.cjs' }
    ];

    const results = [];
    let successfulAutomations = 0;

    this.log('🎯 Starting comprehensive automation execution...');

    for (const automation of automations) {
      const result = await this.runAutomationScript(automation.name, automation.path);
      results.push(result);
      
      if (result.success) {
        successfulAutomations++;
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalAutomations: automations.length,
      successfulAutomations,
      failedAutomations: automations.length - successfulAutomations,
      results,
      successRate: Math.round((successfulAutomations / automations.length) * 100)
    };

    const reportPath = path.join(this.reportsDir, 'comprehensive-automation-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Comprehensive automation completed! Report saved to: ${reportPath}`);
    this.log(`📈 Success Rate: ${report.successRate}% (${successfulAutomations}/${automations.length} automations successful)`);
    
    return report;
  }
}

// Run all automations
const runner = new ComprehensiveAutomationRunner();
runner.runAllAutomations().catch(console.error);

<<<<<<< HEAD
=======
<<<<<<< HEAD

    this.log('🎯 Starting Comprehensive Automation Runner');
    this.log('📋 Running all automation scripts...');

=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    this.log('🎯 Starting Comprehensive Automation Runner');
    this.log('📋 Running all automation scripts...');

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    const scripts = [
      { path: 'automation/master-orchestrator.cjs', name: 'Master Orchestrator' },
      { path: 'automation/comprehensive-app-improvement-suite.cjs', name: 'Comprehensive App Improvement Suite' },
      { path: 'automation/performance-optimizer.cjs', name: 'Performance Optimizer' },
      { path: 'automation/security-scanner.cjs', name: 'Security Scanner' },
      { path: 'automation/seo-optimizer.cjs', name: 'SEO Optimizer' },
      { path: 'automation/health-check.cjs', name: 'Health Check' },
    ];

    for (const script of scripts) {
      await this.runScript(script.path, script.name);
    }

    this.generateReport();
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      totalScripts: this.results.length,
      successful: this.results.filter(r => r.success).length,
      failed: this.results.filter(r => !r.success).length,
      successRate: `${Math.round((this.results.filter(r => r.success).length / this.results.length) * 100)}%`,
      results: this.results
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'comprehensive-automation-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`\n📊 Comprehensive Automation Runner completed!`);
    this.log(`📈 Success Rate: ${report.successRate}`);
    this.log(`⏱️ Duration: ${report.duration}`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the automation runner
if (require.main === module) {
  const runner = new ComprehensiveAutomationRunner();
  runner.runAllAutomations().catch(console.error);
}

module.exports = ComprehensiveAutomationRunner;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
