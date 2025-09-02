#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationDir = path.join(this.projectRoot, 'scripts', 'automation');
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
  }

  async runAllAutomations() {
    console.log('🎭 Starting comprehensive automation orchestration...');
    
    const automations = [
      { name: 'Build Optimization', script: 'advanced-build-optimizer.cjs' },
      { name: 'Dependency Management', script: 'smart-dependency-manager.cjs' },
      { name: 'Error Detection', script: 'intelligent-error-detector.cjs' },
      { name: 'SEO Optimization', script: '../seo-optimizer.js' },
      { name: 'Performance Optimization', script: '../performance-optimizer.js' }
    ];

    const results = [];

    for (const automation of automations) {
      console.log(`\n🚀 Running ${automation.name}...`);
      
      try {
        const scriptPath = path.join(this.automationDir, automation.script);
        if (fs.existsSync(scriptPath)) {
          execSync(`node ${scriptPath}`, { stdio: 'inherit' });
          results.push({ name: automation.name, status: 'success' });
          console.log(`✅ ${automation.name} completed successfully`);
        } else {
          results.push({ name: automation.name, status: 'skipped', reason: 'Script not found' });
          console.log(`⏭️  ${automation.name} skipped - script not found`);
        }
      } catch (error) {
        results.push({ name: automation.name, status: 'failed', error: error.message });
        console.log(`❌ ${automation.name} failed: ${error.message}`);
      }
    }

    this.generateOrchestrationReport(results);
    console.log('\n🎉 Automation orchestration completed!');
  }

  generateOrchestrationReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      totalAutomations: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'failed').length,
      skipped: results.filter(r => r.status === 'skipped').length,
      results: results
    };

    const reportPath = path.join(this.reportsDir, 'automation-orchestration-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('📄 Orchestration report generated');
  }
}

const orchestrator = new AutomationOrchestrator();
orchestrator.runAllAutomations();