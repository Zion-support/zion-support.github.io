#!/usr/bin/env node

/**
 * Master Automation Orchestrator
 * Coordinates all automation processes
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'master-orchestrator.log');
    this.reportFile = path.join(this.projectRoot, 'master-automation-report.json');
    this.startTime = new Date();
    this.results = {};
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
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

  async runHealthCheck() {
    this.log('Running health check...');
    try {
      const result = execSync('node automation/health-check.cjs', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.healthCheck = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
      this.results.healthCheck = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runSecurityScan() {
    this.log('Running security scan...');
    try {
      const result = execSync('node automation/security-scanner.cjs', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.securityScan = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
      this.results.securityScan = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runPerformanceOptimization() {
    this.log('Running performance optimization...');
    try {
      const result = execSync('node automation/performance-optimizer.cjs', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.performanceOptimization = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
      this.results.performanceOptimization = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runSEOOptimization() {
    this.log('Running SEO optimization...');
    try {
      const result = execSync('node automation/seo-optimizer.cjs', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.seoOptimization = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`SEO optimization failed: ${error.message}`, 'ERROR');
      this.results.seoOptimization = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runLinting() {
    this.log('Running linting...');
    try {
      const result = execSync('npm run lint:fix', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.linting = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Linting failed: ${error.message}`, 'ERROR');
      this.results.linting = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runTests() {
    this.log('Running tests...');
    try {
      const result = execSync('npm run test:comprehensive', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.tests = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'ERROR');
      this.results.tests = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runBuild() {
    this.log('Running build...');
    try {
      const result = execSync('npm run build', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      this.results.build = { success: true, output: result, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      this.results.build = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting Master Automation Orchestrator...');
    
    const automations = [
      { name: 'Health Check', fn: () => this.runHealthCheck() },
      { name: 'Security Scan', fn: () => this.runSecurityScan() },
      { name: 'Performance Optimization', fn: () => this.runPerformanceOptimization() },
      { name: 'SEO Optimization', fn: () => this.runSEOOptimization() },
      { name: 'Linting', fn: () => this.runLinting() },
      { name: 'Tests', fn: () => this.runTests() },
      { name: 'Build', fn: () => this.runBuild() }
    ];

    let successCount = 0;
    let totalCount = automations.length;

    for (const automation of automations) {
      try {
        const success = await automation.fn();
        if (success) successCount++;
      } catch (error) {
        this.log(`Error in ${automation.name}: ${error.message}`, 'ERROR');
      }
    }

    this.log(`✅ Completed ${successCount}/${totalCount} automations successfully`);
    
    // Generate final report
    await this.generateReport();
    
    return { successCount, totalCount, results: this.results };
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: duration,
      summary: {
        totalAutomations: Object.keys(this.results).length,
        successfulAutomations: Object.values(this.results).filter(r => r.success).length,
        failedAutomations: Object.values(this.results).filter(r => !r.success).length
      },
      results: this.results,
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        projectRoot: this.projectRoot
      }
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to save report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async check() {
    this.log('🔍 Checking automation status...');
    try {
      const result = execSync('node automation/check_automation_status.cjs', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      console.log(result);
      return true;
    } catch (error) {
      this.log(`Status check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async start() {
    return await this.runAllAutomations();
  }

  async stop() {
    this.log('🛑 Stopping all automations...');
    try {
      execSync('pm2 stop all', { cwd: this.projectRoot });
      this.log('✅ All PM2 processes stopped');
      return true;
    } catch (error) {
      this.log(`Failed to stop processes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async restart() {
    this.log('🔄 Restarting automations...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 2000));
    return await this.start();
  }
}

// CLI Interface
async function main() {
  const orchestrator = new MasterOrchestrator();
  const command = process.argv[2] || 'start';

  switch (command) {
    case 'check':
      await orchestrator.check();
      break;
      
    case 'start':
      await orchestrator.start();
      break;
      
    case 'stop':
      await orchestrator.stop();
      break;
      
    case 'restart':
      await orchestrator.restart();
      break;
      
    default:
      console.log('Usage: node master-orchestrator.cjs [check|start|stop|restart]');
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

module.exports = MasterOrchestrator;