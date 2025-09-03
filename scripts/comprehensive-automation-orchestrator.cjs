#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ComprehensiveAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runScript(scriptPath, description) {
    this.log(`🚀 Running: ${description}`);
    try {
      const result = execSync(`node ${scriptPath}`, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 300000 // 5 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAutomationScripts() {
    this.log('🎯 Running Comprehensive Automation Scripts');
    
    const scripts = [
      {
        path: 'scripts/comprehensive-error-fixer.cjs',
        description: 'Comprehensive Error Fixer'
      },
      {
        path: 'scripts/advanced-app-optimizer.cjs',
        description: 'Advanced App Optimizer'
      },
      {
        path: 'scripts/security-enhancer.cjs',
        description: 'Security Enhancer'
      },
      {
        path: 'scripts/performance-monitor.js',
        description: 'Performance Monitor'
      },
      {
        path: 'scripts/health-checker.js',
        description: 'Health Checker'
      }
    ];

    const results = [];
    
    for (const script of scripts) {
      if (fs.existsSync(path.join(this.projectRoot, script.path))) {
        const result = await this.runScript(script.path, script.description);
        results.push({ ...script, ...result });
      } else {
        this.log(`⚠️ Script not found: ${script.path}`);
        results.push({ ...script, success: false, error: 'Script not found' });
      }
    }

    return results;
  }

  async runQualityChecks() {
    this.log('🔍 Running Quality Checks');
    
    const qualityChecks = [
      {
        command: 'npm run lint:fix',
        description: 'ESLint Fix'
      },
      {
        command: 'npm run type-check',
        description: 'TypeScript Check'
      },
      {
        command: 'npm run build',
        description: 'Build Test'
      }
    ];

    const results = [];
    
    for (const check of qualityChecks) {
      this.log(`🔍 Running: ${check.description}`);
      try {
        const result = execSync(check.command, { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          timeout: 300000
        });
        results.push({ ...check, success: true, output: result });
        this.log(`✅ Completed: ${check.description}`);
      } catch (error) {
        results.push({ ...check, success: false, error: error.message });
        this.log(`❌ Failed: ${check.description} - ${error.message}`);
      }
    }

    return results;
  }

  async generateComprehensiveReport(results) {
    this.log('📊 Generating Comprehensive Report');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalScripts: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length
      },
      results: results,
      recommendations: [
        'Review failed scripts and fix issues',
        'Run automation scripts regularly',
        'Monitor performance metrics',
        'Keep dependencies updated',
        'Implement continuous integration',
        'Set up automated testing',
        'Monitor security vulnerabilities',
        'Optimize bundle size regularly'
      ],
      nextSteps: [
        'Commit changes to version control',
        'Deploy to staging environment',
        'Run end-to-end tests',
        'Deploy to production',
        'Monitor application performance'
      ]
    };
    
    const reportPath = path.join(this.reportsDir, 'comprehensive-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`✅ Comprehensive report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🎯 Starting Comprehensive Automation Orchestrator');
    
    try {
      const automationResults = await this.runAutomationScripts();
      const qualityResults = await this.runQualityChecks();
      
      const allResults = [...automationResults, ...qualityResults];
      const report = await this.generateComprehensiveReport(allResults);
      
      this.log('🎉 Comprehensive Automation Orchestrator completed');
      this.log(`📊 Summary: ${report.summary.successful}/${report.summary.totalScripts} successful`);
      
      if (report.summary.failed > 0) {
        this.log(`⚠️ ${report.summary.failed} scripts failed - check the report for details`);
      }
      
    } catch (error) {
      this.log(`❌ Orchestrator failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the orchestrator
const orchestrator = new ComprehensiveAutomationOrchestrator();
orchestrator.run();