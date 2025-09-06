#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomationRunner {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      totalDuration: 0,
      scriptsRun: [],
      reports: [],
      overallStatus: 'unknown',
      summary: {}
    };
    this.startTime = Date.now();
  }

  async runScript(scriptName, description) {
    console.log(`🔄 Running ${description}...`);
    const scriptStart = Date.now();
    
    try {
      const result = execSync(`node ${scriptName}`, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      const duration = Date.now() - scriptStart;
      this.results.scriptsRun.push({
        name: scriptName,
        description: description,
        status: 'success',
        duration: duration,
        output: result
      });
      
      console.log(`✅ ${description} completed in ${duration}ms`);
      return true;
    } catch (error) {
      const duration = Date.now() - scriptStart;
      this.results.scriptsRun.push({
        name: scriptName,
        description: description,
        status: 'failed',
        duration: duration,
        error: error.message
      });
      
      console.log(`❌ ${description} failed: ${error.message}`);
      return false;
    }
  }

  async collectReports() {
    const reportFiles = [
      'health-monitor-report.json',
      'performance-analysis-report.json',
      'security-audit-report.json',
      'comprehensive-automation-report.json'
    ];
    
    reportFiles.forEach(reportFile => {
      const filePath = path.join(process.cwd(), reportFile);
      if (fs.existsSync(filePath)) {
        try {
          const report = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          this.results.reports.push({
            file: reportFile,
            data: report
          });
        } catch (error) {
          console.log(`⚠️ Could not read report ${reportFile}: ${error.message}`);
        }
      }
    });
  }

  generateSummary() {
    // Health summary
    const healthReport = this.results.reports.find(r => r.file === 'health-monitor-report.json');
    if (healthReport) {
      this.results.summary.health = {
        status: healthReport.data.status,
        checks: healthReport.data.checks?.length || 0,
        recommendations: healthReport.data.recommendations?.length || 0
      };
    }
    
    // Performance summary
    const perfReport = this.results.reports.find(r => r.file === 'performance-analysis-report.json');
    if (perfReport) {
      this.results.summary.performance = {
        score: perfReport.data.score || 0,
        optimizations: perfReport.data.optimizations?.length || 0
      };
    }
    
    // Security summary
    const secReport = this.results.reports.find(r => r.file === 'security-audit-report.json');
    if (secReport) {
      this.results.summary.security = {
        score: secReport.data.securityScore || 0,
        vulnerabilities: secReport.data.vulnerabilities?.length || 0
      };
    }
    
    // Overall status
    const successfulScripts = this.results.scriptsRun.filter(s => s.status === 'success').length;
    const totalScripts = this.results.scriptsRun.length;
    
    if (successfulScripts === totalScripts) {
      this.results.overallStatus = 'success';
    } else if (successfulScripts > totalScripts / 2) {
      this.results.overallStatus = 'partial';
    } else {
      this.results.overallStatus = 'failed';
    }
  }

  async run() {
    console.log('🚀 Starting Master Automation Runner...');
    console.log('=' .repeat(60));
    
    // Run all automation scripts
    await this.runScript('health-monitor.cjs', 'Health Monitor');
    await this.runScript('performance-analyzer.cjs', 'Performance Analyzer');
    await this.runScript('security-auditor.cjs', 'Security Auditor');
    
    // Collect all reports
    await this.collectReports();
    
    // Generate summary
    this.generateSummary();
    
    // Calculate total duration
    this.results.totalDuration = Date.now() - this.startTime;
    
    // Save master report
    fs.writeFileSync('master-automation-report.json', JSON.stringify(this.results, null, 2));
    
    console.log('\n' + '=' .repeat(60));
    console.log('🎉 Master Automation Runner completed!');
    console.log(`⏱️  Total Duration: ${this.results.totalDuration}ms`);
    console.log(`📊 Overall Status: ${this.results.overallStatus}`);
    console.log(`🔧 Scripts Run: ${this.results.scriptsRun.length}`);
    console.log(`📄 Reports Generated: ${this.results.reports.length}`);
    
    if (this.results.summary.health) {
      console.log(`🏥 Health Status: ${this.results.summary.health.status}`);
    }
    if (this.results.summary.performance) {
      console.log(`⚡ Performance Score: ${this.results.summary.performance.score}/100`);
    }
    if (this.results.summary.security) {
      console.log(`🔒 Security Score: ${this.results.summary.security.score}/100`);
    }
    
    return this.results;
  }
}

// Run master automation
if (require.main === module) {
  const runner = new MasterAutomationRunner();
  runner.run().catch(console.error);
}

module.exports = MasterAutomationRunner;
