#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Master Improvement Orchestrator
 * Coordinates all improvement suites and provides comprehensive reporting
 */
class MasterImprovementOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.suites = [
      {
        name: 'Enhanced Automation Suite',
        script: 'enhanced-automation-suite.cjs',
        description: 'Comprehensive automation with improved error handling'
      },
      {
        name: 'App Performance Optimizer',
        script: 'app-performance-optimizer.cjs',
        description: 'Bundle analysis, image optimization, and caching'
      },
      {
        name: 'Security Enhancement Suite',
        script: 'security-enhancement-suite.cjs',
        description: 'Security audits, headers, and environment setup'
      },
      {
        name: 'Accessibility Improvement Suite',
        script: 'accessibility-improvement-suite.cjs',
        description: 'Accessibility components, testing, and guidelines'
      }
    ];
    this.results = {
      timestamp: new Date().toISOString(),
      totalDuration: 0,
      suitesRun: [],
      overallStatus: 'unknown',
      summary: {}
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
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runSuite(suite) {
    this.log(`\n🚀 Running ${suite.name}...`);
    this.log(`📝 Description: ${suite.description}`);
    
    const suiteStart = Date.now();
    
    try {
      const result = execSync(`node ${suite.script}`, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10,
      });
      
      const duration = Date.now() - suiteStart;
      
      this.results.suitesRun.push({
        name: suite.name,
        script: suite.script,
        status: 'success',
        duration: duration,
        output: result
      });
      
      this.log(`✅ ${suite.name} completed successfully in ${duration}ms`);
      return true;
    } catch (error) {
      const duration = Date.now() - suiteStart;
      
      this.results.suitesRun.push({
        name: suite.name,
        script: suite.script,
        status: 'failed',
        duration: duration,
        error: error.message,
        output: error.stdout || error.stderr
      });
      
      this.log(`❌ ${suite.name} failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async collectReports() {
    this.log('\n📊 COLLECTING REPORTS');
    
    const reportFiles = [
      'enhanced-automation-report.json',
      'performance-optimization-report.json',
      'security-enhancement-report.json',
      'accessibility-improvement-report.json'
    ];
    
    const reports = [];
    
    reportFiles.forEach(reportFile => {
      const filePath = path.join(this.projectRoot, reportFile);
      if (fs.existsSync(filePath)) {
        try {
          const report = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          reports.push({
            file: reportFile,
            data: report
          });
          this.log(`✅ Collected report: ${reportFile}`);
        } catch (error) {
          this.log(`⚠️ Could not read report ${reportFile}: ${error.message}`, 'WARNING');
        }
      } else {
        this.log(`⚠️ Report not found: ${reportFile}`, 'WARNING');
      }
    });
    
    this.results.reports = reports;
    return reports;
  }

  generateSummary() {
    this.log('\n📈 GENERATING SUMMARY');
    
    // Calculate overall status
    const successfulSuites = this.results.suitesRun.filter(s => s.status === 'success').length;
    const totalSuites = this.results.suitesRun.length;
    
    if (successfulSuites === totalSuites) {
      this.results.overallStatus = 'success';
    } else if (successfulSuites > totalSuites / 2) {
      this.results.overallStatus = 'partial';
    } else {
      this.results.overallStatus = 'failed';
    }
    
    // Generate summary from reports
    this.results.summary = {
      totalSuites: totalSuites,
      successfulSuites: successfulSuites,
      failedSuites: totalSuites - successfulSuites,
      overallStatus: this.results.overallStatus,
      reports: this.results.reports.length
    };
    
    // Add specific metrics from each report
    this.results.reports.forEach(report => {
      const data = report.data;
      if (data.improvements) {
        this.results.summary.improvements = (this.results.summary.improvements || 0) + data.improvements.length;
      }
      if (data.optimizations) {
        this.results.summary.optimizations = (this.results.summary.optimizations || 0) + data.optimizations.length;
      }
      if (data.checks) {
        this.results.summary.securityChecks = (this.results.summary.securityChecks || 0) + data.checks.length;
      }
    });
  }

  async generateMasterReport() {
    this.log('\n📊 GENERATING MASTER REPORT');
    
    const totalDuration = Date.now() - this.startTime;
    this.results.totalDuration = totalDuration;
    
    // Create comprehensive report
    const masterReport = {
      ...this.results,
      summary: {
        ...this.results.summary,
        totalDuration: totalDuration,
        timestamp: new Date().toISOString()
      }
    };
    
    // Save master report
    const reportPath = path.join(this.projectRoot, 'master-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(masterReport, null, 2));
    
    // Create human-readable summary
    const summaryReport = `# Master Improvement Report

## Overview
- **Total Duration**: ${totalDuration}ms (${(totalDuration / 1000).toFixed(2)}s)
- **Overall Status**: ${this.results.overallStatus.toUpperCase()}
- **Suites Run**: ${this.results.summary.totalSuites}
- **Successful**: ${this.results.summary.successfulSuites}
- **Failed**: ${this.results.summary.failedSuites}

## Suite Results

${this.results.suitesRun.map(suite => `
### ${suite.name}
- **Status**: ${suite.status === 'success' ? '✅ Success' : '❌ Failed'}
- **Duration**: ${suite.duration}ms
- **Script**: ${suite.script}
${suite.error ? `- **Error**: ${suite.error}` : ''}
`).join('')}

## Summary Metrics
${this.results.summary.improvements ? `- **Improvements Applied**: ${this.results.summary.improvements}` : ''}
${this.results.summary.optimizations ? `- **Optimizations Applied**: ${this.results.summary.optimizations}` : ''}
${this.results.summary.securityChecks ? `- **Security Checks**: ${this.results.summary.securityChecks}` : ''}
- **Reports Generated**: ${this.results.summary.reports}

## Next Steps
1. Review individual suite reports for detailed information
2. Address any failed suites
3. Implement recommendations from successful suites
4. Run regular maintenance using these automation scripts

## Files Generated
${this.results.reports.map(report => `- ${report.file}`).join('\n')}
- master-improvement-report.json
- master-improvement-summary.md
`;
    
    fs.writeFileSync(path.join(this.projectRoot, 'master-improvement-summary.md'), summaryReport);
    
    this.log(`📊 Master report saved to: ${reportPath}`);
    this.log(`📄 Summary report saved to: master-improvement-summary.md`);
  }

  async displayResults() {
    this.log('\n🎉 MASTER IMPROVEMENT ORCHESTRATOR COMPLETED');
    this.log('='.repeat(60));
    
    const totalDuration = Date.now() - this.startTime;
    this.log(`⏱️  Total Duration: ${totalDuration}ms (${(totalDuration / 1000).toFixed(2)}s)`);
    this.log(`📊 Overall Status: ${this.results.overallStatus.toUpperCase()}`);
    this.log(`🔧 Suites Run: ${this.results.summary.totalSuites}`);
    this.log(`✅ Successful: ${this.results.summary.successfulSuites}`);
    this.log(`❌ Failed: ${this.results.summary.failedSuites}`);
    this.log(`📄 Reports Generated: ${this.results.summary.reports}`);
    
    if (this.results.summary.improvements) {
      this.log(`🔧 Improvements Applied: ${this.results.summary.improvements}`);
    }
    if (this.results.summary.optimizations) {
      this.log(`⚡ Optimizations Applied: ${this.results.summary.optimizations}`);
    }
    if (this.results.summary.securityChecks) {
      this.log(`🔒 Security Checks: ${this.results.summary.securityChecks}`);
    }
    
    this.log('\n📋 Suite Results:');
    this.results.suitesRun.forEach(suite => {
      const status = suite.status === 'success' ? '✅' : '❌';
      this.log(`  ${status} ${suite.name}: ${suite.duration}ms`);
    });
    
    this.log('\n📁 Generated Files:');
    this.results.reports.forEach(report => {
      this.log(`  📄 ${report.file}`);
    });
    this.log('  📄 master-improvement-report.json');
    this.log('  📄 master-improvement-summary.md');
  }

  async run() {
    this.log('🚀 Starting Master Improvement Orchestrator');
    this.log('='.repeat(60));
    this.log(`📋 Running ${this.suites.length} improvement suites...`);
    
    try {
      // Run all suites
      for (const suite of this.suites) {
        await this.runSuite(suite);
      }
      
      // Collect reports
      await this.collectReports();
      
      // Generate summary
      this.generateSummary();
      
      // Generate master report
      await this.generateMasterReport();
      
      // Display results
      await this.displayResults();
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      this.generateSummary();
      await this.generateMasterReport();
    }
  }
}

// Run the orchestrator
const orchestrator = new MasterImprovementOrchestrator();
orchestrator.run().catch(console.error);

module.exports = MasterImprovementOrchestrator;