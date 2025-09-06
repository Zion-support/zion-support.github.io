#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Starting Comprehensive Monitor...');

class ComprehensiveMonitor {
  constructor() {
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
      return { success: false, error: error.message };
    }
  }

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
  }

  async run() {
    try {
      this.log('🎯 Starting comprehensive monitoring...');

      const report = await this.generateMonitoringReport();

      this.log(`🎉 Comprehensive monitoring completed!`);
      this.log(`📊 Overall Status: ${report.summary.overallStatus}`);
      this.log(`🚨 Critical Issues: ${report.summary.criticalIssues}`);
      this.log(`⚠️ Warnings: ${report.summary.warnings}`);
      
      if (report.summary.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.summary.recommendations.forEach(rec => this.log(`  - ${rec}`));
      }
    } catch (error) {
      this.log(`❌ Comprehensive monitoring failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the monitor
const monitor = new ComprehensiveMonitor();
monitor.run().catch(console.error);