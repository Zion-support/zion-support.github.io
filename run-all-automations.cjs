#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting All Automations Runner...');

class AllAutomationsRunner {
  constructor() {
    this.logFile = path.join(__dirname, 'automation-reports', 'all-automations.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: __dirname
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runNpmScripts() {
    this.log('📦 Running NPM automation scripts...');
    
    const scripts = [
      'automation:factory',
      'automation:orchestrator',
      'automation:improvement',
      'automation:coordinator',
      'ai:all',
      'quality:analyze',
      'security:scan',
      'performance:analyze',
      'monitor:health',
      'system:optimize'
    ];

    const results = [];
    for (const script of scripts) {
      const result = await this.runCommand(`npm run ${script}`, `Running ${script}`);
      results.push({ script, ...result });
    }

    return results;
  }

  async runCustomScripts() {
    this.log('🔧 Running custom automation scripts...');
    
    const scripts = [
      'enhanced-automation-suite.cjs',
      'app-optimizer.js',
      'complete-improvement-suite.cjs',
      'automation/master-orchestrator.cjs'
    ];

    const results = [];
    for (const script of scripts) {
      const scriptPath = path.join(__dirname, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(`node ${script}`, `Running ${script}`);
        results.push({ script, ...result });
      } else {
        this.log(`⚠️ Script not found: ${script}`);
        results.push({ script, success: false, error: 'Script not found' });
      }
    }

    return results;
  }

  async generateReport(npmResults, customResults) {
    this.log('📊 Generating comprehensive automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      status: 'completed',
      summary: {
        totalScripts: npmResults.length + customResults.length,
        successful: [...npmResults, ...customResults].filter(r => r.success).length,
        failed: [...npmResults, ...customResults].filter(r => !r.success).length
      },
      npmScripts: npmResults,
      customScripts: customResults,
      recommendations: this.generateRecommendations(npmResults, customResults)
    };

    const reportPath = path.join(__dirname, 'automation-reports', 'all-automations-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
  }

  generateRecommendations(npmResults, customResults) {
    const recommendations = [];
    
    const failedScripts = [...npmResults, ...customResults].filter(r => !r.success);
    
    if (failedScripts.length > 0) {
      recommendations.push('Review and fix failed scripts');
      recommendations.push('Check dependencies and configuration');
    }
    
    if (npmResults.filter(r => r.success).length < npmResults.length * 0.8) {
      recommendations.push('Consider updating NPM scripts configuration');
    }
    
    recommendations.push('Run regular automation health checks');
    recommendations.push('Monitor automation performance metrics');
    
    return recommendations;
  }

  async run() {
    try {
      this.log('🎯 Starting all automations runner...');
      
      const npmResults = await this.runNpmScripts();
      const customResults = await this.runCustomScripts();
      
      await this.generateReport(npmResults, customResults);
      
      const totalSuccessful = [...npmResults, ...customResults].filter(r => r.success).length;
      const totalScripts = npmResults.length + customResults.length;
      
      this.log(`🎉 All automations completed! Success: ${totalSuccessful}/${totalScripts}`);
    } catch (error) {
      this.log(`❌ All automations runner failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the automation runner
const runner = new AllAutomationsRunner();
runner.run().catch(console.error);