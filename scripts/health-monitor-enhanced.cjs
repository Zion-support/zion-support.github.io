#!/usr/bin/env node

/**
 * Enhanced Health Monitor
 * Comprehensive application health monitoring and alerting
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Starting enhanced health monitoring...');

class EnhancedHealthMonitor {
  constructor() {
    this.logFile = path.join(
      __dirname,



    );
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async checkSystemHealth() {
    try {
      console.log('💻 Checking system health...');
      
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      this.healthMetrics.systemHealth = {
        memory: {
          rss: Math.round(memoryUsage.rss / 1024 / 1024), // MB
          heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024), // MB
          heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024), // MB
          external: Math.round(memoryUsage.external / 1024 / 1024) // MB
        },
        cpu: {
          user: cpuUsage.user,
          system: cpuUsage.system
        },
        uptime: process.uptime(),
        platform: process.platform,
        nodeVersion: process.version
      };
      
      console.log(`✅ System health check completed`);
      
    } catch (error) {
      console.warn('⚠️  System health check failed:', error.message);
    }
  }

  async checkApplicationHealth() {
    try {
      console.log('🚀 Checking application health...');
      
      // Check if build exists
      const buildDir = path.join(__dirname, '..', '.next');
      const buildExists = fs.existsSync(buildDir);
      
      // Check package.json
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check for critical files
      const criticalFiles = [
        'next.config.js',
        'tailwind.config.js',
        'tsconfig.json',
        'eslint.config.js'
      ];
      
      const missingFiles = criticalFiles.filter(file => 
        !fs.existsSync(path.join(__dirname, '..', file))
      );
      
      this.healthMetrics.applicationHealth = {
        buildExists,
        packageVersion: packageJson.version,
        missingFiles,
        dependencies: Object.keys(packageJson.dependencies || {}).length,
        devDependencies: Object.keys(packageJson.devDependencies || {}).length
      };
      
      console.log(`✅ Application health check completed`);
      
    } catch (error) {
      console.warn('⚠️  Application health check failed:', error.message);
    }
  }

  async checkPerformanceMetrics() {
    try {
      console.log('⚡ Checking performance metrics...');
      
      // Check bundle size
      const buildDir = path.join(__dirname, '..', '.next');
      let bundleSize = 0;
      
      if (fs.existsSync(buildDir)) {
        bundleSize = this.getDirectorySize(buildDir);
      }
      
      // Check for performance issues
      const performanceIssues = this.checkPerformanceIssues();
      
      this.healthMetrics.performanceMetrics = {
        bundleSize: Math.round(bundleSize / 1024 / 1024), // MB
        performanceIssues,
        recommendations: this.getPerformanceRecommendations(bundleSize, performanceIssues)
      };
      
      console.log(`✅ Performance metrics check completed`);
      
    } catch (error) {
      console.warn('⚠️  Performance metrics check failed:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (!fs.existsSync(dirPath)) {
      return 0;
    }
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        totalSize += this.getDirectorySize(fullPath);
      } else {
        const stats = fs.statSync(fullPath);
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  checkPerformanceIssues() {
    const issues = [];
    
    // Check for large images
    const publicDir = path.join(__dirname, '..', 'public');
    if (fs.existsSync(publicDir)) {
      const imageFiles = this.findImageFiles(publicDir);
      const largeImages = imageFiles.filter(file => {
        const stats = fs.statSync(file);
        return stats.size > 500 * 1024; // 500KB
      });
      
      if (largeImages.length > 0) {
        issues.push({
          type: 'Large Images',
          count: largeImages.length,
          severity: 'medium',
          recommendation: 'Optimize images for web delivery'
        });
      }
    }
    
    // Check for unused dependencies
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    
    if (dependencies.length > 50) {
      issues.push({
        type: 'Too Many Dependencies',
        count: dependencies.length,
        severity: 'low',
        recommendation: 'Review and remove unused dependencies'
      });
    }
    
    return issues;
  }

  findImageFiles(dir) {
    const imageFiles = [];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
    
    if (!fs.existsSync(dir)) {
      return imageFiles;
    }
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        imageFiles.push(...this.findImageFiles(fullPath));
      } else if (imageExtensions.some(ext => file.name.toLowerCase().endsWith(ext))) {
        imageFiles.push(fullPath);
      }
    }
    
    return imageFiles;
  }

  getPerformanceRecommendations(bundleSize, performanceIssues) {
    const recommendations = [];
    
    if (bundleSize > 10 * 1024 * 1024) { // 10MB
      recommendations.push('Bundle size is large - consider code splitting');
    }
    
    if (performanceIssues.some(issue => issue.type === 'Large Images')) {
      recommendations.push('Optimize images for better performance');
    }
    
    if (performanceIssues.some(issue => issue.type === 'Too Many Dependencies')) {
      recommendations.push('Review and remove unused dependencies');
    }
    
    recommendations.push('Implement lazy loading for images and components');
    recommendations.push('Use CDN for static assets');
    recommendations.push('Enable gzip compression');
    recommendations.push('Implement service worker for caching');
    
    return recommendations;
  }

  async checkErrorMetrics() {
    try {
      console.log('🚨 Checking error metrics...');
      
      // Check for error logs
      const logDir = path.join(__dirname, '..', 'logs');
      const errorLogs = [];
      
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir).filter(file => file.endsWith('.log'));
        
        for (const logFile of logFiles) {
          const logPath = path.join(logDir, logFile);
          const content = fs.readFileSync(logPath, 'utf8');
          const errorLines = content.split('\n').filter(line => 
            line.toLowerCase().includes('error') || 
            line.toLowerCase().includes('exception')
          );
          
          if (errorLines.length > 0) {
            errorLogs.push({
              file: logFile,
              errorCount: errorLines.length,
              lastError: errorLines[errorLines.length - 1]
            });
          }
        }
      }
      
      // Check for build errors
      const buildErrors = this.checkBuildErrors();
      
      this.healthMetrics.errorMetrics = {
        errorLogs,
        buildErrors,
        totalErrors: errorLogs.reduce((sum, log) => sum + log.errorCount, 0) + buildErrors.length
      };
      
      console.log(`✅ Error metrics check completed`);
      
    } catch (error) {
      console.warn('⚠️  Error metrics check failed:', error.message);
    }
  }

  generateHealthReport(healthCheck) {
    this.log('📊 Generating health report...');

    const report = {
      ...healthCheck,
      summary: {
        overallStatus: this.calculateOverallStatus(healthCheck),
        score: this.calculateHealthScore(healthCheck),
        recommendations: this.generateHealthRecommendations(healthCheck),
      },
    };

    const reportPath = path.join(
      __dirname,



    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);

    return report;
  }

  generateHealthScore() {
    let score = 100;
    
    // Deduct points for issues
    if (this.healthMetrics.applicationHealth.missingFiles.length > 0) {
      score -= this.healthMetrics.applicationHealth.missingFiles.length * 5;
    }
    
    if (this.healthMetrics.performanceMetrics.bundleSize > 10) {
      score -= 10;
    }
    
    if (this.healthMetrics.errorMetrics.totalErrors > 0) {
      score -= Math.min(this.healthMetrics.errorMetrics.totalErrors * 2, 30);
    }
    
    if (this.healthMetrics.systemHealth.memory.heapUsed > 100) {
      score -= 10;
    }
    
    return Math.max(0, score);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.healthMetrics.applicationHealth.missingFiles.length > 0) {
      recommendations.push('Add missing critical configuration files');
    }
    
    if (this.healthMetrics.performanceMetrics.bundleSize > 10) {
      recommendations.push('Optimize bundle size with code splitting');
    }
    
    if (this.healthMetrics.errorMetrics.totalErrors > 0) {
      recommendations.push('Address build and runtime errors');
    }
    
    if (this.healthMetrics.systemHealth.memory.heapUsed > 100) {
      recommendations.push('Optimize memory usage');
    }
    
    recommendations.push('Set up continuous monitoring and alerting');
    recommendations.push('Implement automated health checks');
    recommendations.push('Add performance monitoring');
    recommendations.push('Set up error tracking and reporting');
    
    this.healthMetrics.recommendations = recommendations;
  }

  generateReport() {
    this.generateRecommendations();
    
    const healthScore = this.generateHealthScore();
    
    const report = {
      ...this.healthMetrics,
      healthScore,
      status: healthScore > 80 ? 'healthy' : healthScore > 60 ? 'warning' : 'critical',
      summary: {
        systemHealth: this.healthMetrics.systemHealth,
        applicationHealth: this.healthMetrics.applicationHealth,
        performanceMetrics: this.healthMetrics.performanceMetrics,
        errorMetrics: this.healthMetrics.errorMetrics,
        healthScore,
        status: healthScore > 80 ? 'healthy' : healthScore > 60 ? 'warning' : 'critical'
      }
    };
    
    const reportPath = path.join(__dirname, '..', 'health-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 Health monitor report saved to health-monitor-report.json');
    return report;
  }

  async run() {
    try {
      await this.checkSystemHealth();
      await this.checkApplicationHealth();
      await this.checkPerformanceMetrics();
      await this.checkErrorMetrics();
      
      const report = this.generateReport();
      
      console.log('\n🏥 Enhanced Health Monitor Summary:');
      console.log(`Health Score: ${report.healthScore}/100`);
      console.log(`Status: ${report.status.toUpperCase()}`);
      console.log(`Memory Usage: ${report.systemHealth.memory.heapUsed}MB`);
      console.log(`Bundle Size: ${report.performanceMetrics.bundleSize}MB`);
      console.log(`Total Errors: ${report.errorMetrics.totalErrors}`);
      console.log(`Missing Files: ${report.applicationHealth.missingFiles.length}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Health Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Health monitoring failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const monitor = new EnhancedHealthMonitor();
  await monitor.run();
}

if (require.main === module) {
  main();
}

module.exports = EnhancedHealthMonitor;