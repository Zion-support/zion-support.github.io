#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting Comprehensive Monitor...');

class ComprehensiveMonitor {
  constructor() {
    this.monitoringData = {
      systemHealth: {},
      performance: {},
      security: {},
      errors: [],
      recommendations: []
    };
    this.reportPath = path.join(__dirname, '..', 'automation-reports', 'monitoring-report.json');
    this.ensureReportDir();
  }

  ensureReportDir() {
    const reportDir = path.dirname(this.reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '..'),
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    const healthChecks = [
      { cmd: 'npm run build', desc: 'Build health' },
      { cmd: 'npm run test:smoke', desc: 'Test health' },
      { cmd: 'npm run lint:check', desc: 'Code quality health' },
      { cmd: 'npm run type-check', desc: 'Type safety health' }
    ];

    let healthyChecks = 0;
    for (const check of healthChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      if (result.success) {
        healthyChecks++;
      } else {
        this.monitoringData.errors.push({
          type: 'health_check',
          check: check.desc,
          error: result.error
        });
      }
    }

    this.monitoringData.systemHealth = {
      totalChecks: healthChecks.length,
      healthyChecks: healthyChecks,
      healthScore: (healthyChecks / healthChecks.length) * 100
    };
  }

  async checkPerformance() {
    this.log('⚡ Checking performance...');
    
    const performanceChecks = [
      { cmd: 'npm run build:analyze', desc: 'Bundle analysis' },
      { cmd: 'npm run optimize:images', desc: 'Image optimization' },
      { cmd: 'npm run perf:monitor', desc: 'Performance monitoring' }
    ];

    let performanceScore = 0;
    for (const check of performanceChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      if (result.success) {
        performanceScore += 33.33;
      }
    }

    this.monitoringData.performance = {
      score: Math.round(performanceScore),
      checks: performanceChecks.length,
      status: performanceScore > 66 ? 'good' : performanceScore > 33 ? 'warning' : 'critical'
    };
  }

  async checkSecurity() {
    this.log('🔒 Checking security...');
    
    const securityChecks = [
      { cmd: 'npm audit', desc: 'Dependency security' },
      { cmd: 'npm run security:audit', desc: 'Security audit' },
      { cmd: 'npm run security:scan', desc: 'Security scan' }
    ];

    let securityScore = 0;
    for (const check of securityChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      if (result.success) {
        securityScore += 33.33;
      }
    }

    this.monitoringData.security = {
      score: Math.round(securityScore),
      checks: securityChecks.length,
      status: securityScore > 66 ? 'secure' : securityScore > 33 ? 'warning' : 'vulnerable'
    };
  }

  generateRecommendations() {
    this.log('💡 Generating recommendations...');
    
    const recommendations = [];

    // System health recommendations
    if (this.monitoringData.systemHealth.healthScore < 80) {
      recommendations.push({
        category: 'system_health',
        priority: 'high',
        message: 'System health is below 80%. Consider running comprehensive tests and fixing issues.'
      });
    }

    // Performance recommendations
    if (this.monitoringData.performance.score < 70) {
      recommendations.push({
        category: 'performance',
        priority: 'medium',
        message: 'Performance score is below 70%. Consider optimizing assets and bundle size.'
      });
    }

    // Security recommendations
    if (this.monitoringData.security.score < 80) {
      recommendations.push({
        category: 'security',
        priority: 'high',
        message: 'Security score is below 80%. Consider updating dependencies and running security audits.'
      });
    }

    // Error-based recommendations
    if (this.monitoringData.errors.length > 0) {
      recommendations.push({
        category: 'errors',
        priority: 'high',
        message: `Found ${this.monitoringData.errors.length} errors. Review and fix critical issues.`
      });
    }

    this.monitoringData.recommendations = recommendations;
  }

  async generateReport() {
    this.log('📊 Generating monitoring report...');

    const report = {
      timestamp: new Date().toISOString(),
      monitoringData: this.monitoringData,
      summary: {
        overallHealth: Math.round((
          this.monitoringData.systemHealth.healthScore +
          this.monitoringData.performance.score +
          this.monitoringData.security.score
        ) / 3),
        totalErrors: this.monitoringData.errors.length,
        totalRecommendations: this.monitoringData.recommendations.length,
        criticalIssues: this.monitoringData.recommendations.filter(r => r.priority === 'high').length
      }
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Monitoring report saved to: ${this.reportPath}`);
  }

  async run() {
    try {
      this.log('🎯 Starting comprehensive monitoring...');

      await this.checkSystemHealth();
      await this.checkPerformance();
      await this.checkSecurity();
      this.generateRecommendations();
      await this.generateReport();

      this.log(`🎉 Comprehensive monitoring completed!`);
      this.log(`📊 Overall Health: ${Math.round((
        this.monitoringData.systemHealth.healthScore +
        this.monitoringData.performance.score +
        this.monitoringData.security.score
      ) / 3)}%`);
      this.log(`❌ Errors: ${this.monitoringData.errors.length}`);
      this.log(`💡 Recommendations: ${this.monitoringData.recommendations.length}`);
    } catch (error) {
      this.log(`❌ Comprehensive monitoring failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the comprehensive monitor
const monitor = new ComprehensiveMonitor();
monitor.run().catch(console.error);