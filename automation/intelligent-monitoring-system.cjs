#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentMonitoringSystem {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'intelligent-monitoring.log');
    this.reportsDir = path.join(__dirname, 'reports');
    this.metricsFile = path.join(this.reportsDir, 'monitoring-metrics.json');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [path.dirname(this.logFile), this.reportsDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        stdio: 'pipe', 
        cwd: process.cwd(),
        timeout: 300000
      });
      this.log(`✓ ${description} completed successfully`);
      return { success: true, output: result.toString() };
    } catch (error) {
      this.log(`✗ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    const healthChecks = [
      { cmd: 'npm run system:health', desc: 'System health check' },
      { cmd: 'npm run monitor:health', desc: 'Health monitoring' },
      { cmd: 'pm2 status', desc: 'PM2 process status' }
    ];

    const results = {};
    for (const check of healthChecks) {
      results[check.desc] = await this.runCommand(check.cmd, check.desc);
    }
    
    return results;
  }

  async monitorPerformance() {
    this.log('📈 Monitoring performance...');
    
    const perfChecks = [
      { cmd: 'npm run perf:monitor', desc: 'Performance monitoring' },
      { cmd: 'npm run monitor:continuous', desc: 'Continuous monitoring' }
    ];

    const results = {};
    for (const check of perfChecks) {
      results[check.desc] = await this.runCommand(check.cmd, check.desc);
    }
    
    return results;
  }

  async checkSecurity() {
    this.log('🔒 Checking security...');
    
    const securityChecks = [
      { cmd: 'npm audit', desc: 'Security audit' },
      { cmd: 'npm run automation:security', desc: 'Security automation' }
    ];

    const results = {};
    for (const check of securityChecks) {
      results[check.desc] = await this.runCommand(check.cmd, check.desc);
    }
    
    return results;
  }

  async checkCodeQuality() {
    this.log('🔍 Checking code quality...');
    
    const qualityChecks = [
      { cmd: 'npm run lint', desc: 'Linting check' },
      { cmd: 'npm run type-check', desc: 'TypeScript check' },
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' }
    ];

    const results = {};
    for (const check of qualityChecks) {
      results[check.desc] = await this.runCommand(check.cmd, check.desc);
    }
    
    return results;
  }

  async generateMonitoringReport(healthResults, perfResults, securityResults, qualityResults) {
    this.log('📊 Generating monitoring report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: healthResults,
      performance: perfResults,
      security: securityResults,
      codeQuality: qualityResults,
      overallStatus: this.calculateOverallStatus(healthResults, perfResults, securityResults, qualityResults),
      recommendations: this.generateRecommendations(healthResults, perfResults, securityResults, qualityResults),
      alerts: this.generateAlerts(healthResults, perfResults, securityResults, qualityResults)
    };

    fs.writeFileSync(this.metricsFile, JSON.stringify(report, null, 2));
    this.log(`📊 Monitoring report saved to: ${this.metricsFile}`);
  }

  calculateOverallStatus(health, perf, security, quality) {
    const allResults = [...Object.values(health), ...Object.values(perf), ...Object.values(security), ...Object.values(quality)];
    const successCount = allResults.filter(r => r.success).length;
    const totalCount = allResults.length;
    const successRate = (successCount / totalCount) * 100;
    
    if (successRate >= 90) return 'excellent';
    if (successRate >= 75) return 'good';
    if (successRate >= 50) return 'fair';
    return 'poor';
  }

  generateRecommendations(health, perf, security, quality) {
    const recommendations = [];
    
    // Health recommendations
    Object.entries(health).forEach(([check, result]) => {
      if (!result.success) {
        recommendations.push(`Fix health issue: ${check}`);
      }
    });
    
    // Performance recommendations
    Object.entries(perf).forEach(([check, result]) => {
      if (!result.success) {
        recommendations.push(`Optimize performance: ${check}`);
      }
    });
    
    // Security recommendations
    Object.entries(security).forEach(([check, result]) => {
      if (!result.success) {
        recommendations.push(`Address security: ${check}`);
      }
    });
    
    // Quality recommendations
    Object.entries(quality).forEach(([check, result]) => {
      if (!result.success) {
        recommendations.push(`Improve code quality: ${check}`);
      }
    });
    
    return recommendations;
  }

  generateAlerts(health, perf, security, quality) {
    const alerts = [];
    
    // Critical alerts
    Object.entries(security).forEach(([check, result]) => {
      if (!result.success) {
        alerts.push({ level: 'critical', message: `Security issue: ${check}`, timestamp: new Date().toISOString() });
      }
    });
    
    // Warning alerts
    Object.entries(health).forEach(([check, result]) => {
      if (!result.success) {
        alerts.push({ level: 'warning', message: `Health issue: ${check}`, timestamp: new Date().toISOString() });
      }
    });
    
    return alerts;
  }

  async run() {
    try {
      this.log('🚀 Starting Intelligent Monitoring System...');
      
      const healthResults = await this.checkSystemHealth();
      const perfResults = await this.monitorPerformance();
      const securityResults = await this.checkSecurity();
      const qualityResults = await this.checkCodeQuality();
      
      await this.generateMonitoringReport(healthResults, perfResults, securityResults, qualityResults);
      
      this.log('🎉 Intelligent Monitoring System completed successfully!');
    } catch (error) {
      this.log(`❌ Intelligent Monitoring System failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the monitoring system
const monitoringSystem = new IntelligentMonitoringSystem();
monitoringSystem.run().catch(console.error);