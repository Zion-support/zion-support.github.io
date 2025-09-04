#!/usr/bin/env node

/**
 * Build Monitor Automation Script
 * Monitors build processes and performance
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.logFile = './logs/performance-monitor.log';
    this.errorFile = './logs/performance-monitor-error.log';
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] [ERROR] ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error log:', err.message);
    }
  }

  async runCommand(command, description) {
    this.log(`Starting: ${description}`);
    
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.error(`Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorBuildPerformance() {
    this.log('Monitoring build performance...');
    
    const buildStart = Date.now();
    const buildResult = await this.runCommand('npm run build', 'Build application');
    const buildDuration = Date.now() - buildStart;

    return {
      success: buildResult.success,
      duration: buildDuration,
      output: buildResult.output
    };
  }

  async checkBuildArtifacts() {
    this.log('Checking build artifacts...');
    
    const artifacts = [
      '.next/static',
      '.next/server',
      'out'
    ];

    const results = [];
    for (const artifact of artifacts) {
      try {
        const stats = fs.statSync(artifact);
        results.push({
          path: artifact,
          exists: true,
          isDirectory: stats.isDirectory(),
          size: stats.size
        });
      } catch (error) {
        results.push({
          path: artifact,
          exists: false,
          error: error.message
        });
      }
    }

    return results;
  }

  async generateBuildReport() {
    this.log('Generating build report...');
    
    const buildPerformance = await this.monitorBuildPerformance();
    const artifacts = await this.checkBuildArtifacts();

    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime.getTime(),
      build: buildPerformance,
      artifacts: artifacts
    };

    const reportFile = `./logs/build-report-${Date.now()}.json`;
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Build report saved to: ${reportFile}`);
    } catch (error) {
      this.error(`Failed to save build report: ${error.message}`);
    }

    return report;
  }

  async runBuildMonitoring() {
    this.log('Starting Build Monitoring');
    this.log('='.repeat(50));

    try {
      const report = await this.generateBuildReport();

      // Summary
      this.log('Build Monitoring Summary:');
      this.log(`- Build Status: ${report.build.success ? '✅ SUCCESS' : '❌ FAILED'}`);
      this.log(`- Build Duration: ${report.build.duration}ms`);
      this.log(`- Artifacts Checked: ${report.artifacts.length}`);
      
      const existingArtifacts = report.artifacts.filter(a => a.exists).length;
      this.log(`- Existing Artifacts: ${existingArtifacts}/${report.artifacts.length}`);

      this.log('Build monitoring completed');

    } catch (error) {
      this.error(`Build monitoring failed: ${error.message}`);
      throw error;
    }
  }
}

// Main execution
async function main() {
  const monitor = new BuildMonitor();
  
  try {
    await monitor.runBuildMonitoring();
  } catch (error) {
    monitor.error(`Unexpected error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = BuildMonitor;