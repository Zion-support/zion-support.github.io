#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DeploymentMonitoringSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = [];
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`\n🚀 ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });
      this.log(`✅ ${description} completed successfully`);
      this.results.push({ task: description, success: true, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      this.results.push({ task: description, success: false, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runDeploymentMonitoring() {
    this.log('🎯 Starting Deployment and Monitoring Suite...');

    // 1. Pre-deployment checks
    await this.runCommand('npm run build', 'Pre-deployment Build Check');
    await this.runCommand('npm run test:smoke', 'Pre-deployment Smoke Tests');
    await this.runCommand('npm run lint', 'Pre-deployment Linting');

    // 2. Security checks
    await this.runCommand('npm audit --audit-level high', 'Security Vulnerability Check');
    await this.runCommand('npm run security:scan', 'Security Scan');

    // 3. Performance checks
    await this.runCommand('npm run performance:audit', 'Performance Audit');
    await this.runCommand('npm run lighthouse', 'Lighthouse Performance Check');

    // 4. Code quality checks
    await this.runCommand('npm run quality:check', 'Code Quality Check');
    await this.runCommand('npm run test:coverage', 'Test Coverage Check');

    // 5. Bundle optimization
    await this.runCommand('npm run optimize:bundle', 'Bundle Optimization');
    await this.runCommand('npm run analyze', 'Bundle Analysis');

    // 6. SEO checks
    await this.runCommand('npm run seo:audit', 'SEO Audit');
    await this.runCommand('npm run sitemap:generate', 'Sitemap Generation');

    // 7. Accessibility checks
    await this.runCommand('npm run a11y:audit', 'Accessibility Audit');

    // 8. Health checks
    await this.runCommand('npm run health:check', 'System Health Check');
    await this.runCommand('npm run monitor:resources', 'Resource Monitoring');

    this.generateReport();
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;

    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      totalTasks: this.results.length,
      successful: this.results.filter(r => r.success).length,
      failed: this.results.filter(r => !r.success).length,
      successRate: `${Math.round((this.results.filter(r => r.success).length / this.results.length) * 100)}%`,
      results: this.results,
      deploymentReady: this.results.filter(r => r.success).length >= this.results.length * 0.8
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'deployment-monitoring-suite-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`\n📊 Deployment and Monitoring Suite completed!`);
    this.log(`📈 Success Rate: ${report.successRate}`);
    this.log(`🚀 Deployment Ready: ${report.deploymentReady ? 'YES' : 'NO'}`);
    this.log(`⏱️ Duration: ${report.duration}`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the suite
if (require.main === module) {
  const suite = new DeploymentMonitoringSuite();
  suite.runDeploymentMonitoring().catch(console.error);
}

module.exports = DeploymentMonitoringSuite;