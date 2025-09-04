#!/usr/bin/env node

/**
 * Master Automation Script
 * Runs all automation, testing, and git operations
 */

const fs = require('fs');
const path = require('path');

class MasterAutomation {
  constructor() {
    this.startTime = Date.now();
    this.results = {
      automation: { success: false, errors: [] },
      testing: { success: false, errors: [] },
      git: { success: false, errors: [] }
    };
  }

  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    };
    
    const timestamp = new Date().toISOString();
    console.log(`${icons[type]} [${timestamp}] ${message}`);
  }

  async runModule(moduleName, modulePath) {
    this.log(`Running ${moduleName}...`, 'PROGRESS');
    
    try {
      const module = require(modulePath);
      if (typeof module === 'function') {
        await module();
      } else if (module && typeof module.run === 'function') {
        await module.run();
      } else {
        this.log(`${moduleName} completed`, 'SUCCESS');
      }
      return { success: true };
    } catch (error) {
      this.log(`${moduleName} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runComprehensiveAutomation() {
    this.log('🚀 Phase 1: Running Comprehensive Automation...', 'PROGRESS');
    
    const result = await this.runModule('Comprehensive Automation', './comprehensive-automation.js');
    this.results.automation = result;
    
    if (result.success) {
      this.log('✅ Comprehensive Automation completed successfully', 'SUCCESS');
    } else {
      this.log('❌ Comprehensive Automation failed', 'ERROR');
    }
  }

  async runTestSuite() {
    this.log('🧪 Phase 2: Running Test Suite...', 'PROGRESS');
    
    const result = await this.runModule('Test Suite', './test-suite.js');
    this.results.testing = result;
    
    if (result.success) {
      this.log('✅ Test Suite completed successfully', 'SUCCESS');
    } else {
      this.log('❌ Test Suite failed', 'ERROR');
    }
  }

  async runGitWorkflow() {
    this.log('🔄 Phase 3: Running Git Workflow...', 'PROGRESS');
    
    const result = await this.runModule('Git Workflow', './git-workflow.js');
    this.results.git = result;
    
    if (result.success) {
      this.log('✅ Git Workflow completed successfully', 'SUCCESS');
    } else {
      this.log('❌ Git Workflow failed', 'ERROR');
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      results: this.results,
      summary: {
        automationSuccess: this.results.automation.success,
        testingSuccess: this.results.testing.success,
        gitSuccess: this.results.git.success,
        overallSuccess: this.results.automation.success && this.results.testing.success && this.results.git.success
      }
    };

    fs.writeFileSync('master-automation-report.json', JSON.stringify(report, null, 2));
    
    this.log('📊 Master Automation Report Generated', 'SUCCESS');
    this.log(`⏱️ Total Duration: ${report.duration}`, 'INFO');
    this.log(`🚀 Automation: ${report.summary.automationSuccess ? 'SUCCESS' : 'FAILED'}`, report.summary.automationSuccess ? 'SUCCESS' : 'ERROR');
    this.log(`🧪 Testing: ${report.summary.testingSuccess ? 'SUCCESS' : 'FAILED'}`, report.summary.testingSuccess ? 'SUCCESS' : 'ERROR');
    this.log(`🔄 Git: ${report.summary.gitSuccess ? 'SUCCESS' : 'FAILED'}`, report.summary.gitSuccess ? 'SUCCESS' : 'ERROR');
    
    if (report.summary.overallSuccess) {
      this.log('🎉 All phases completed successfully!', 'SUCCESS');
    } else {
      this.log('⚠️ Some phases failed - check individual reports', 'WARNING');
    }
  }

  async run() {
    this.log('🚀 Starting Master Automation System...', 'PROGRESS');
    
    try {
      await this.runComprehensiveAutomation();
      await this.runTestSuite();
      await this.runGitWorkflow();
      
      this.generateFinalReport();
      
      if (this.results.automation.success && this.results.testing.success && this.results.git.success) {
        this.log('🎉 Master Automation completed successfully!', 'SUCCESS');
        return true;
      } else {
        this.log('⚠️ Master Automation completed with some failures', 'WARNING');
        return false;
      }
    } catch (error) {
      this.log(`Master Automation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run the master automation
if (require.main === module) {
  const master = new MasterAutomation();
  master.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error('Master automation failed:', error);
    process.exit(1);
  });
}

module.exports = MasterAutomation;