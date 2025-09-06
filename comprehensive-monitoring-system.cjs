#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Monitoring System
 * Monitors app health, performance, and provides maintenance
 */
class ComprehensiveMonitoringSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.monitoringData = {
      health: { status: 'unknown', checks: [] },
      performance: { status: 'unknown', metrics: {} },
      security: { status: 'unknown', vulnerabilities: [] },
      dependencies: { status: 'unknown', outdated: [] },
      build: { status: 'unknown', errors: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async checkHealth() {
    this.log('\n🏥 CHECKING APP HEALTH');
    
    const checks = [];
    
    // Check if build works
    const buildCheck = await this.runCommand('npm run build', 'Build Health Check');
    checks.push({
      name: 'Build Status',
      status: buildCheck.success ? 'healthy' : 'unhealthy',
      details: buildCheck.success ? 'Build successful' : buildCheck.error
    });

    // Check if tests pass
    const testCheck = await this.runCommand('npm run test:smoke', 'Test Health Check');
    checks.push({
      name: 'Test Status',
      status: testCheck.success ? 'healthy' : 'unhealthy',
      details: testCheck.success ? 'Tests passing' : 'Tests failing'
    });

    // Check if linting passes
    const lintCheck = await this.runCommand('npm run lint:check', 'Lint Health Check');
    checks.push({
      name: 'Lint Status',
      status: lintCheck.success ? 'healthy' : 'unhealthy',
      details: lintCheck.success ? 'Linting passed' : 'Linting issues found'
    });

    this.monitoringData.health = {
      status: checks.every(c => c.status === 'healthy') ? 'healthy' : 'unhealthy',
      checks
    };

    this.log(`Health Status: ${this.monitoringData.health.status.toUpperCase()}`);
  }

  async checkPerformance() {
    this.log('\n⚡ CHECKING PERFORMANCE');
    
    const metrics = {};
    
    // Check bundle size
    const bundleCheck = await this.runCommand('npm run build', 'Bundle Size Check');
    if (bundleCheck.success) {
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = fs.readdirSync(distPath);
        const jsFiles = files.filter(f => f.endsWith('.js'));
        const cssFiles = files.filter(f => f.endsWith('.css'));
        
        metrics.bundleSize = {
          jsFiles: jsFiles.length,
          cssFiles: cssFiles.length,
          totalFiles: files.length
        };
      }
    }

    // Check build time
    metrics.buildTime = Date.now() - this.startTime;

    this.monitoringData.performance = {
      status: 'monitored',
      metrics
    };

    this.log(`Performance metrics collected: ${Object.keys(metrics).length} metrics`);
  }

  async checkSecurity() {
    this.log('\n🔒 CHECKING SECURITY');
    
    const vulnerabilities = [];
    
    // Run security audit
    const auditResult = await this.runCommand('npm audit --json', 'Security Audit');
    if (auditResult.success) {
      try {
        const auditData = JSON.parse(auditResult.output);
        if (auditData.vulnerabilities) {
          Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
            vulnerabilities.push({
              name,
              severity: vuln.severity,
              title: vuln.title,
              recommendation: vuln.recommendation
            });
          });
        }
      } catch (e) {
        this.log('Could not parse audit results', 'WARNING');
      }
    }

    this.monitoringData.security = {
      status: vulnerabilities.length === 0 ? 'secure' : 'vulnerable',
      vulnerabilities
    };

    this.log(`Security Status: ${this.monitoringData.security.status.toUpperCase()}`);
    this.log(`Vulnerabilities found: ${vulnerabilities.length}`);
  }

  async checkDependencies() {
    this.log('\n📦 CHECKING DEPENDENCIES');
    
    const outdated = [];
    
    // Check for outdated packages
    const outdatedResult = await this.runCommand('npm outdated --json', 'Dependency Check');
    if (outdatedResult.success) {
      try {
        const outdatedData = JSON.parse(outdatedResult.output);
        Object.entries(outdatedData).forEach(([name, info]) => {
          outdated.push({
            name,
            current: info.current,
            wanted: info.wanted,
            latest: info.latest
          });
        });
      } catch (e) {
        this.log('Could not parse outdated packages', 'WARNING');
      }
    }

    this.monitoringData.dependencies = {
      status: outdated.length === 0 ? 'up-to-date' : 'outdated',
      outdated
    };

    this.log(`Dependencies Status: ${this.monitoringData.dependencies.status.toUpperCase()}`);
    this.log(`Outdated packages: ${outdated.length}`);
  }

  async checkBuild() {
    this.log('\n🏗️ CHECKING BUILD STATUS');
    
    const errors = [];
    
    // Check build errors
    const buildResult = await this.runCommand('npm run build', 'Build Check');
    if (!buildResult.success) {
      errors.push({
        type: 'build',
        message: buildResult.error,
        timestamp: new Date().toISOString()
      });
    }

    // Check for TypeScript errors
    const typeCheckResult = await this.runCommand('npm run type-check', 'TypeScript Check');
    if (!typeCheckResult.success) {
      errors.push({
        type: 'typescript',
        message: typeCheckResult.error,
        timestamp: new Date().toISOString()
      });
    }

    this.monitoringData.build = {
      status: errors.length === 0 ? 'success' : 'failed',
      errors
    };

    this.log(`Build Status: ${this.monitoringData.build.status.toUpperCase()}`);
    this.log(`Build errors: ${errors.length}`);
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 COMPREHENSIVE MONITORING REPORT');
    this.log('='.repeat(60));
    this.log(`Monitoring Duration: ${totalDuration}ms`);
    this.log('');

    // Health Summary
    this.log(`🏥 HEALTH: ${this.monitoringData.health.status.toUpperCase()}`);
    this.monitoringData.health.checks.forEach(check => {
      const status = check.status === 'healthy' ? '✅' : '❌';
      this.log(`  ${status} ${check.name}: ${check.details}`);
    });

    // Performance Summary
    this.log(`\n⚡ PERFORMANCE: ${this.monitoringData.performance.status.toUpperCase()}`);
    Object.entries(this.monitoringData.performance.metrics).forEach(([key, value]) => {
      this.log(`  - ${key}: ${JSON.stringify(value)}`);
    });

    // Security Summary
    this.log(`\n🔒 SECURITY: ${this.monitoringData.security.status.toUpperCase()}`);
    this.log(`  Vulnerabilities: ${this.monitoringData.security.vulnerabilities.length}`);
    this.monitoringData.security.vulnerabilities.forEach(vuln => {
      this.log(`    - ${vuln.name} (${vuln.severity}): ${vuln.title}`);
    });

    // Dependencies Summary
    this.log(`\n📦 DEPENDENCIES: ${this.monitoringData.dependencies.status.toUpperCase()}`);
    this.log(`  Outdated packages: ${this.monitoringData.dependencies.outdated.length}`);
    this.monitoringData.dependencies.outdated.forEach(pkg => {
      this.log(`    - ${pkg.name}: ${pkg.current} → ${pkg.latest}`);
    });

    // Build Summary
    this.log(`\n🏗️ BUILD: ${this.monitoringData.build.status.toUpperCase()}`);
    this.log(`  Errors: ${this.monitoringData.build.errors.length}`);
    this.monitoringData.build.errors.forEach(error => {
      this.log(`    - ${error.type}: ${error.message}`);
    });

    // Save detailed report
    const reportData = {
      timestamp: new Date().toISOString(),
      totalDuration,
      monitoringData: this.monitoringData
    };

    const reportPath = path.join(this.projectRoot, 'comprehensive-monitoring-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    this.log(`\n📊 Detailed report saved to: ${reportPath}`);

    return reportData;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Monitoring System');
    this.log('='.repeat(60));

    try {
      await this.checkHealth();
      await this.checkPerformance();
      await this.checkSecurity();
      await this.checkDependencies();
      await this.checkBuild();

      this.generateReport();
      this.log('\n🎉 Comprehensive monitoring completed!');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      this.generateReport();
    }
  }
}

// Run the monitoring system
const monitor = new ComprehensiveMonitoringSystem();
monitor.run().catch(console.error);

module.exports = ComprehensiveMonitoringSystem;