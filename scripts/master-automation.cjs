#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomation {
  constructor() {
    this.startTime = new Date();
    this.results = {};
    this.logFile = path.join(process.cwd(), 'master-automation-log.txt');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting Master Automation Suite');
    
    // 1. Install dependencies
    await this.runCommand('npm install', 'Install Dependencies');
    
    // 2. Run performance monitoring
    await this.runCommand('node scripts/performance-monitor.cjs', 'Performance Monitoring');
    
    // 3. Run security audit
    await this.runCommand('node scripts/security-audit.cjs', 'Security Audit');
    
    // 4. Run code quality check
    await this.runCommand('node scripts/code-quality-checker.cjs', 'Code Quality Check');
    
    // 5. Run tests
    await this.runCommand('npm run test:smoke', 'Smoke Tests');
    
    // 6. Run build
    await this.runCommand('npm run build', 'Production Build');
    
    // 7. Generate sitemap
    await this.runCommand('node scripts/generate-sitemap.cjs', 'Generate Sitemap');
    
    // 8. Generate search index
    await this.runCommand('node scripts/generate-search-index.cjs', 'Generate Search Index');
    
    this.log('🎉 Master Automation Suite completed');
    this.generateSummary();
  }

  generateSummary() {
    const duration = Date.now() - this.startTime;
    const summary = {
      timestamp: new Date().toISOString(),
      duration: duration,
      status: 'completed'
    };
    
    try {
      fs.writeFileSync('master-automation-report.json', JSON.stringify(summary, null, 2));
      this.log('📊 Master automation report saved');
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automation = new MasterAutomation();
  automation.runAllAutomations().catch(console.error);
}

module.exports = MasterAutomation;