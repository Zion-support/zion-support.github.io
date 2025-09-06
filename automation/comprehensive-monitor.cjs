#!/usr/bin/env node

<<<<<<< HEAD
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943

console.log('📊 Starting Comprehensive Monitor...');

class ComprehensiveMonitor {
  constructor() {
<<<<<<< HEAD
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
=======
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation-reports', 'comprehensive-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'automation-reports', 'comprehensive-monitor-report.json');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async monitorSystemHealth() {
    this.log('💚 Monitoring system health...');

    try {
      const healthChecks = {
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime(),
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
      };

      // Check disk space
      try {
        const diskUsage = execSync('df -h . | tail -1', { encoding: 'utf8' });
        healthChecks.diskUsage = diskUsage.trim();
      } catch (error) {
        healthChecks.diskUsage = 'Unable to check disk usage';
      }

      // Check if build exists
      healthChecks.hasBuild = fs.existsSync('.next');
      
      // Check if tests pass
      try {
        execSync('npm run test:smoke', { encoding: 'utf8' });
        healthChecks.testsPassing = true;
      } catch (error) {
        healthChecks.testsPassing = false;
      }

      return {
        success: true,
        healthChecks,
        status: healthChecks.testsPassing ? 'healthy' : 'degraded',
      };
    } catch (error) {
      this.log(`Error monitoring system health: ${error.message}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
      return { success: false, error: error.message };
    }
  }

<<<<<<< HEAD
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
=======
  async monitorPerformance() {
    this.log('⚡ Monitoring performance...');

    try {
      const performanceMetrics = {
        timestamp: new Date().toISOString(),
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
      };

      // Check build size if exists
      if (fs.existsSync('.next')) {
        try {
          const buildSize = execSync('du -sh .next 2>/dev/null | cut -f1', { encoding: 'utf8' });
          performanceMetrics.buildSize = buildSize.trim();
        } catch (error) {
          performanceMetrics.buildSize = 'Unable to check build size';
        }
      }

      // Check for performance issues
      const performanceIssues = [];
      
      if (performanceMetrics.memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
        performanceIssues.push('High memory usage detected');
      }

      return {
        success: true,
        metrics: performanceMetrics,
        issues: performanceIssues,
        status: performanceIssues.length === 0 ? 'good' : 'needs-attention',
      };
    } catch (error) {
      this.log(`Error monitoring performance: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorSecurity() {
    this.log('🔒 Monitoring security...');

    try {
      const securityChecks = {
        timestamp: new Date().toISOString(),
        vulnerabilities: [],
        recommendations: [],
      };

      // Check for security vulnerabilities
      try {
        const auditResult = execSync('npm audit --json 2>/dev/null || echo "{}"', { encoding: 'utf8' });
        const audit = JSON.parse(auditResult);
        
        if (audit.metadata?.vulnerabilities) {
          const vulns = audit.metadata.vulnerabilities;
          if (vulns.high > 0) {
            securityChecks.vulnerabilities.push(`${vulns.high} high severity vulnerabilities`);
          }
          if (vulns.moderate > 0) {
            securityChecks.vulnerabilities.push(`${vulns.moderate} moderate severity vulnerabilities`);
          }
        }
      } catch (error) {
        securityChecks.vulnerabilities.push('Unable to check for vulnerabilities');
      }

      // Check for sensitive files
      const sensitiveFiles = [
        '.env',
        '.env.local',
        '.env.production',
        'package-lock.json',
        'yarn.lock',
      ];

      for (const file of sensitiveFiles) {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          if (stats.mode & 0o777 > 0o644) {
            securityChecks.vulnerabilities.push(`${file} has overly permissive permissions`);
          }
        }
      }

      securityChecks.recommendations = [
        'Run npm audit fix to address vulnerabilities',
        'Review file permissions for sensitive files',
        'Use environment variables for secrets',
        'Implement proper authentication and authorization',
        'Regular security audits and updates',
      ];

      return {
        success: true,
        securityChecks,
        status: securityChecks.vulnerabilities.length === 0 ? 'secure' : 'needs-attention',
      };
    } catch (error) {
      this.log(`Error monitoring security: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorCodeQuality() {
    this.log('📝 Monitoring code quality...');

    try {
      const qualityChecks = {
        timestamp: new Date().toISOString(),
        issues: [],
        metrics: {},
      };

      // Check for TypeScript errors
      try {
        execSync('npx tsc --noEmit', { encoding: 'utf8' });
        qualityChecks.typescriptErrors = 0;
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        const errorCount = (errorOutput.match(/error TS/g) || []).length;
        qualityChecks.typescriptErrors = errorCount;
        if (errorCount > 0) {
          qualityChecks.issues.push(`${errorCount} TypeScript errors found`);
        }
      }

      // Check for ESLint issues
      try {
        const lintResult = execSync('npx eslint . --format json 2>/dev/null || echo "[]"', { encoding: 'utf8' });
        const lintIssues = JSON.parse(lintResult);
        qualityChecks.eslintIssues = lintIssues.length;
        if (lintIssues.length > 0) {
          qualityChecks.issues.push(`${lintIssues.length} ESLint issues found`);
        }
      } catch (error) {
        qualityChecks.eslintIssues = 'Unable to check';
      }

      // Check test coverage
      try {
        execSync('npm run test:coverage 2>/dev/null', { encoding: 'utf8' });
        qualityChecks.testCoverage = 'Available';
      } catch (error) {
        qualityChecks.testCoverage = 'Not available';
        qualityChecks.issues.push('Test coverage not available');
      }

      return {
        success: true,
        qualityChecks,
        status: qualityChecks.issues.length === 0 ? 'good' : 'needs-improvement',
      };
    } catch (error) {
      this.log(`Error monitoring code quality: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async generateMonitoringReport() {
    this.log('📊 Generating comprehensive monitoring report...');

    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: await this.monitorSystemHealth(),
      performance: await this.monitorPerformance(),
      security: await this.monitorSecurity(),
      codeQuality: await this.monitorCodeQuality(),
      summary: {
        overallStatus: 'unknown',
        criticalIssues: 0,
        warnings: 0,
        recommendations: [],
      },
    };

    // Calculate overall status
    const statuses = [
      report.systemHealth.status,
      report.performance.status,
      report.security.status,
      report.codeQuality.status,
    ];

    if (statuses.every(status => status === 'healthy' || status === 'good' || status === 'secure')) {
      report.summary.overallStatus = 'excellent';
    } else if (statuses.some(status => status === 'needs-attention' || status === 'needs-improvement')) {
      report.summary.overallStatus = 'needs-attention';
    } else {
      report.summary.overallStatus = 'degraded';
    }

    // Count issues
    if (report.systemHealth.healthChecks?.testsPassing === false) {
      report.summary.criticalIssues++;
    }
    if (report.performance.issues?.length > 0) {
      report.summary.warnings += report.performance.issues.length;
    }
    if (report.security.securityChecks?.vulnerabilities?.length > 0) {
      report.summary.criticalIssues += report.security.securityChecks.vulnerabilities.length;
    }
    if (report.codeQuality.qualityChecks?.issues?.length > 0) {
      report.summary.warnings += report.codeQuality.qualityChecks.issues.length;
    }

    // Generate recommendations
    if (report.summary.criticalIssues > 0) {
      report.summary.recommendations.push('Address critical issues immediately');
    }
    if (report.summary.warnings > 0) {
      report.summary.recommendations.push('Review and fix warnings');
    }
    if (report.performance.status === 'needs-attention') {
      report.summary.recommendations.push('Optimize performance');
    }
    if (report.security.status === 'needs-attention') {
      report.summary.recommendations.push('Address security vulnerabilities');
    }

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${this.reportFile}`);

    return report;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
  }

  async run() {
    try {
      this.log('🎯 Starting comprehensive monitoring...');

<<<<<<< HEAD
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
=======
      const report = await this.generateMonitoringReport();

      this.log(`🎉 Comprehensive monitoring completed!`);
      this.log(`📊 Overall Status: ${report.summary.overallStatus}`);
      this.log(`🚨 Critical Issues: ${report.summary.criticalIssues}`);
      this.log(`⚠️ Warnings: ${report.summary.warnings}`);
      
      if (report.summary.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.summary.recommendations.forEach(rec => this.log(`  - ${rec}`));
      }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
    } catch (error) {
      this.log(`❌ Comprehensive monitoring failed: ${error.message}`);
      process.exit(1);
    }
  }
}

<<<<<<< HEAD
// Run the comprehensive monitor
=======
// Run the monitor
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
const monitor = new ComprehensiveMonitor();
monitor.run().catch(console.error);