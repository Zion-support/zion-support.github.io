#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = [];
    this.alerts = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async checkBundleSize() {
    this.log('📦 Checking bundle size...');
    
    try {
      // Run build to get bundle information
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Check if .next directory exists and analyze
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        const buildManifest = path.join(nextDir, 'build-manifest.json');
        if (fs.existsSync(buildManifest)) {
          const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
          this.metrics.push({
            type: 'bundle_size',
            timestamp: new Date().toISOString(),
            data: manifest
          });
        }
      }
      
      this.log('✅ Bundle size checked');
    } catch (error) {
      this.log(`❌ Bundle size check failed: ${error.message}`, 'error');
      this.alerts.push({
        type: 'bundle_size_error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async checkDependencies() {
    this.log('📚 Checking dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      this.metrics.push({
        type: 'dependencies',
        timestamp: new Date().toISOString(),
        data: {
          total: dependencies.length + devDependencies.length,
          production: dependencies.length,
          development: devDependencies.length
        }
      });
      
      this.log(`📊 Dependencies: ${dependencies.length} prod, ${devDependencies.length} dev`);
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`, 'error');
    }
  }

  async checkCodeQuality() {
    this.log('🔍 Checking code quality...');
    
    try {
      // Run TypeScript check
      execSync('npm run type-check', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.metrics.push({
        type: 'code_quality',
        timestamp: new Date().toISOString(),
        data: { typescript: 'passed' }
      });
      
      this.log('✅ TypeScript check passed');
    } catch (error) {
      this.log(`❌ TypeScript check failed: ${error.message}`, 'error');
      this.alerts.push({
        type: 'typescript_error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async checkSecurity() {
    this.log('🔒 Checking security...');
    
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditOutput);
      const vulnerabilities = auditData.metadata?.vulnerabilities || {};
      
      this.metrics.push({
        type: 'security',
        timestamp: new Date().toISOString(),
        data: vulnerabilities
      });
      
      if (vulnerabilities.total > 0) {
        this.alerts.push({
          type: 'security_vulnerability',
          message: `${vulnerabilities.total} vulnerabilities found`,
          timestamp: new Date().toISOString(),
          severity: vulnerabilities.critical > 0 ? 'critical' : 'moderate'
        });
      }
      
      this.log(`🔒 Security check: ${vulnerabilities.total} vulnerabilities`);
    } catch (error) {
      this.log(`❌ Security check failed: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      alerts: this.alerts,
      summary: {
        totalMetrics: this.metrics.length,
        totalAlerts: this.alerts.length,
        criticalAlerts: this.alerts.filter(a => a.severity === 'critical').length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance report saved to: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('🚀 Performance Monitor starting...');
    
    await this.checkBundleSize();
    await this.checkDependencies();
    await this.checkCodeQuality();
    await this.checkSecurity();
    
    const report = await this.generateReport();
    
    this.log('✅ Performance Monitor completed!');
    this.log(`📈 Metrics collected: ${report.summary.totalMetrics}`);
    this.log(`⚠️ Alerts: ${report.summary.totalAlerts}`);
    this.log(`🚨 Critical alerts: ${report.summary.criticalAlerts}`);
  }
}

// Run the monitor
const monitor = new PerformanceMonitor();
monitor.start().catch(console.error);