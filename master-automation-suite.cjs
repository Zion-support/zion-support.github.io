#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require('fs');
const path = require('path');

class MasterAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      suites: [],
      totalDuration: 0,
      successCount: 0,
      errorCount: 0,
      reports: []
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
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 600000, // 10 minutes timeout
        maxBuffer: 1024 * 1024 * 10,
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runSuite(suiteName, command) {
    this.log(`🚀 Starting ${suiteName}...`, 'PROGRESS');
    const suiteStartTime = Date.now();
    
    try {
      const result = await this.runCommand(command, suiteName);
      const suiteDuration = Date.now() - suiteStartTime;
      
      const suiteResult = {
        name: suiteName,
        success: result.success,
        duration: suiteDuration,
        error: result.error || null
      };
      
      this.results.suites.push(suiteResult);
      
      if (result.success) {
        this.results.successCount++;
        this.log(`✅ ${suiteName} completed successfully in ${suiteDuration}ms`, 'SUCCESS');
      } else {
        this.results.errorCount++;
        this.log(`❌ ${suiteName} failed: ${result.error}`, 'ERROR');
      }
      
      return suiteResult;
    } catch (error) {
      this.results.errorCount++;
      this.log(`❌ ${suiteName} failed with exception: ${error.message}`, 'ERROR');
      
        name: suiteName,
        success: false,
        duration: suiteDuration,
        error: error.message
      };
      
      this.results.suites.push(suiteResult);
      return suiteResult;
    }
  }

  async runAllSuites() {
    this.log("🎯 Starting Master Automation Suite...", 'PROGRESS');
    
    const suites = [
      {
        name: "Comprehensive Automation Suite",
        command: "node comprehensive-automation-suite.cjs"
      },
      {
        name: "Performance Optimization Suite",
        command: "node performance-optimization-suite.cjs"
      },
      {
        name: "Security Enhancement Suite",
        command: "node security-enhancement-suite.cjs"
      },
      {
        name: "SEO Optimization Suite",
        command: "node seo-optimization-suite.cjs"
      },
      {
        name: "Accessibility Enhancement Suite",
        command: "node accessibility-enhancement-suite.cjs"
      },
      {
        name: "Final Automation Suite",
        command: "node final-automation-suite-fixed.cjs"
      }
    ];

    for (const suite of suites) {
      await this.runSuite(suite.name, suite.command);
    }
  }

  async collectReports() {
    this.log("📊 Collecting all reports...", 'PROGRESS');
    
    const reportFiles = [
      'automation-report.json',
      'performance-optimization-report.json',
      'security-enhancement-report.json',
      'seo-optimization-report.json',
      'accessibility-enhancement-report.json'
    ];

    for (const reportFile of reportFiles) {
      if (fs.existsSync(reportFile)) {
        try {
          const reportContent = fs.readFileSync(reportFile, 'utf8');
          const report = JSON.parse(reportContent);
          this.results.reports.push({
            file: reportFile,
            data: report
          });
          this.log(`✅ Collected report: ${reportFile}`, 'SUCCESS');
        } catch (error) {
          this.log(`❌ Failed to collect report ${reportFile}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async generateMasterReport() {
    this.log("📊 Generating master report...", 'PROGRESS');
    
    this.results.totalDuration = Date.now() - this.startTime;
    
    const masterReport = {
      timestamp: new Date().toISOString(),
      totalDuration: `${this.results.totalDuration}ms`,
      summary: {
        totalSuites: this.results.suites.length,
        successfulSuites: this.results.successCount,
        failedSuites: this.results.errorCount,
        successRate: this.results.suites.length > 0 ? 
          ((this.results.successCount / this.results.suites.length) * 100).toFixed(2) + '%' : '0%'
      },
      suites: this.results.suites,
      reports: this.results.reports,
      recommendations: [
        "All automation suites have been executed",
        "Review individual reports for detailed insights",
        "Address any failed suites before deployment",
        "Monitor performance metrics regularly",
        "Keep security configurations up to date",
        "Maintain SEO optimizations",
        "Ensure accessibility compliance",
        "Schedule regular automation runs"
      ]
    };
    
    fs.writeFileSync('master-automation-report.json', JSON.stringify(masterReport, null, 2));
    this.log("📊 Master report saved to master-automation-report.json", 'SUCCESS');
  }

  async run() {
    try {
      await this.runAllSuites();
      await this.collectReports();
      await this.generateMasterReport();
      
      this.log("🎉 Master Automation Suite completed successfully!", 'SUCCESS');
      this.log(`📊 Summary: ${this.results.successCount}/${this.results.suites.length} suites successful`, 'INFO');
      
      if (this.results.errorCount > 0) {
        this.log(`⚠️ ${this.results.errorCount} suites failed - check individual reports for details`, 'WARNING');
      }
      
    } catch (error) {
      this.log(`❌ Master Automation Suite failed: ${error.message}`, 'ERROR');
      await this.generateMasterReport();
      process.exit(1);
    }
  }
}

if (require.main === module) {
  const suite = new MasterAutomationSuite();
  suite.run().catch(console.error);
}

module.exports = MasterAutomationSuite;