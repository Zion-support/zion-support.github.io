#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Running Health Check...');

class HealthChecker {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runHealthCheck() {
    const checks = [
      { name: 'Build Status', command: 'npm run build' },
      { name: 'Test Status', command: 'npm run test:smoke' },
      { name: 'Lint Status', command: 'npm run lint:check' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Security Audit', command: 'npm audit' }
    ];

    const results = [];
    let passedChecks = 0;

    for (const check of checks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        execSync(check.command, { stdio: 'pipe' });
        console.log(`✅ ${check.name} OK`);
        results.push({ name: check.name, status: 'passed', error: null });
        passedChecks++;
      } catch (error) {
        console.log(`❌ ${check.name} FAILED`);
        results.push({ name: check.name, status: 'failed', error: error.message });
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: checks.length,
      passedChecks,
      failedChecks: checks.length - passedChecks,
      results,
      overallHealth: passedChecks === checks.length ? 'healthy' : 'unhealthy'
    };

    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health check completed! Report saved to: ${reportPath}`);
    this.log(`📈 Overall Health: ${report.overallHealth} (${passedChecks}/${checks.length} checks passed)`);
    
    return report;
  }
}

// Run health check
const healthChecker = new HealthChecker();
healthChecker.runHealthCheck().catch(console.error);