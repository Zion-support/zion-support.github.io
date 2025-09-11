#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Simple Improvement Suite...');

class SimpleImprovementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'improvement.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runLinting() {
    this.log('🔧 Running linting improvements...');
    const commands = [
      { cmd: 'npm run lint:fix', desc: 'Fix linting errors' },
      { cmd: 'npm run lint:check', desc: 'Check linting status' }
    ];
    
    const results = [];
    for (const { cmd, desc } of commands) {
      const result = this.runCommand(cmd, desc);
      results.push({ command: cmd, result });
    }
    return results;
  }

  async runBuildOptimization() {
    this.log('🏗️ Running build optimization...');
    const commands = [
      { cmd: 'npm run build', desc: 'Production build' },
      { cmd: 'npm run build:clean', desc: 'Clean build' }
    ];
    
    const results = [];
    for (const { cmd, desc } of commands) {
      const result = this.runCommand(cmd, desc);
      results.push({ command: cmd, result });
    }
    return results;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    const commands = [
      { cmd: 'npm audit --audit-level=moderate', desc: 'Security audit' },
      { cmd: 'npm audit fix --force', desc: 'Fix security vulnerabilities' }
    ];
    
    const results = [];
    for (const { cmd, desc } of commands) {
      const result = this.runCommand(cmd, desc);
      results.push({ command: cmd, result });
    }
    return results;
  }

  async generateReport(results) {
    this.log('📊 Generating improvement report...');
    const report = {
      timestamp: new Date().toISOString(),
      linting: results.linting,
      build: results.build,
      security: results.security,
      summary: {
        totalCommands: results.linting.length + results.build.length + results.security.length,
        successfulCommands: [
          ...results.linting,
          ...results.build,
          ...results.security
        ].filter(r => r.result.success).length
      }
    };
    
    const reportFile = path.join(this.projectRoot, 'improvement-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${reportFile}`);
    return report;
  }

  async run() {
    try {
      this.log('🚀 Starting Simple Improvement Suite...');
      
      const results = {
        linting: await this.runLinting(),
        build: await this.runBuildOptimization(),
        security: await this.runSecurityAudit()
      };
      
      await this.generateReport(results);
      
      this.log('✅ Simple Improvement Suite completed successfully!');
      return results;
    } catch (error) {
      this.log(`❌ Simple Improvement Suite failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the suite
const suite = new SimpleImprovementSuite();
suite.run().catch(console.error);

module.exports = SimpleImprovementSuite;