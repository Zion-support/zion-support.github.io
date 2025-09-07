const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MonitoringMaintenanceSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      healthCheck: { success: false, duration: 0, errors: [], warnings: [] },
      performanceMonitoring: { success: false, duration: 0, errors: [], warnings: [] },
      errorTracking: { success: false, duration: 0, errors: [], warnings: [] },
      logAnalysis: { success: false, duration: 0, errors: [], warnings: [] },
      resourceMonitoring: { success: false, duration: 0, errors: [], warnings: [] },
      backupVerification: { success: false, duration: 0, errors: [], warnings: [] },
      dependencyHealth: { success: false, duration: 0, errors: [], warnings: [] },
      securityMonitoring: { success: false, duration: 0, errors: [], warnings: [] },
      uptimeCheck: { success: false, duration: 0, errors: [], warnings: [] },
      maintenanceTasks: { success: false, duration: 0, errors: [], warnings: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runHealthCheck() {
    const startTime = Date.now();
    this.log('🏥 Running application health check...');

    try {
      // Check if application builds successfully
      execSync('npm run build', { stdio: 'pipe' });
      
      // Check if tests pass
      execSync('npm test', { stdio: 'pipe' });
      
      // Check if linting passes
      execSync('npm run lint', { stdio: 'pipe' });

      this.results.healthCheck = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Application health check passed', 'SUCCESS');
    } catch (error) {
      this.results.healthCheck = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
    }
  }

  async runPerformanceMonitoring() {
    const startTime = Date.now();
    this.log('📊 Running performance monitoring...');

    try {
      // Monitor bundle size
      const bundleSize = this.getBundleSize();
      
      // Monitor build time
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - buildStart;
      
      // Monitor test execution time
      const testStart = Date.now();
      execSync('npm test', { stdio: 'pipe' });
      const testTime = Date.now() - testStart;

      const performanceData = {
        bundleSize,
        buildTime,
        testTime,
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceData, null, 2));

      this.results.performanceMonitoring = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Performance monitoring completed', 'SUCCESS');
    } catch (error) {
      this.results.performanceMonitoring = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  getBundleSize() {
    try {
      const stats = fs.statSync('dist');
      return this.formatBytes(this.getDirectorySize('dist'));
    } catch (error) {
      return 'N/A';
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async runErrorTracking() {
    const startTime = Date.now();
    this.log('🐛 Running error tracking analysis...');

    try {
      // Check for console errors in build
      const buildOutput = execSync('npm run build 2>&1', { encoding: 'utf8' });
      const errors = this.extractErrors(buildOutput);
      
      // Check for TypeScript errors
      const tsOutput = execSync('npx tsc --noEmit 2>&1', { encoding: 'utf8' });
      const tsErrors = this.extractErrors(tsOutput);

      const errorReport = {
        buildErrors: errors,
        typescriptErrors: tsErrors,
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('error-report.json', JSON.stringify(errorReport, null, 2));

      this.results.errorTracking = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Error tracking completed', 'SUCCESS');
    } catch (error) {
      this.results.errorTracking = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Error tracking failed: ${error.message}`, 'ERROR');
    }
  }

  extractErrors(output) {
    const errorRegex = /error|Error|ERROR/g;
    const matches = output.match(errorRegex);
    return matches ? matches.length : 0;
  }

  async runLogAnalysis() {
    const startTime = Date.now();
    this.log('📋 Running log analysis...');

    try {
      // Analyze build logs
      const buildLogs = this.analyzeLogs('build.log');
      
      // Analyze test logs
      const testLogs = this.analyzeLogs('test.log');
      
      // Analyze error logs
      const errorLogs = this.analyzeLogs('error.log');

      const logAnalysis = {
        buildLogs,
        testLogs,
        errorLogs,
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('log-analysis.json', JSON.stringify(logAnalysis, null, 2));

      this.results.logAnalysis = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Log analysis completed', 'SUCCESS');
    } catch (error) {
      this.results.logAnalysis = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Log analysis failed: ${error.message}`, 'ERROR');
    }
  }

  analyzeLogs(logFile) {
    try {
      if (fs.existsSync(logFile)) {
        const content = fs.readFileSync(logFile, 'utf8');
        return {
          size: content.length,
          lines: content.split('\n').length,
          errors: this.extractErrors(content),
          warnings: (content.match(/warning|Warning|WARNING/g) || []).length
        };
      }
      return { size: 0, lines: 0, errors: 0, warnings: 0 };
    } catch (error) {
      return { size: 0, lines: 0, errors: 0, warnings: 0, error: error.message };
    }
  }

  async runResourceMonitoring() {
    const startTime = Date.now();
    this.log('💾 Running resource monitoring...');

    try {
      // Monitor disk usage
      const diskUsage = this.getDiskUsage();
      
      // Monitor memory usage
      const memoryUsage = process.memoryUsage();
      
      // Monitor CPU usage
      const cpuUsage = process.cpuUsage();

      const resourceData = {
        diskUsage,
        memoryUsage,
        cpuUsage,
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('resource-monitoring.json', JSON.stringify(resourceData, null, 2));

      this.results.resourceMonitoring = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Resource monitoring completed', 'SUCCESS');
    } catch (error) {
      this.results.resourceMonitoring = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Resource monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  getDiskUsage() {
    try {
      const stats = fs.statSync('.');
      return {
        total: this.getDirectorySize('.'),
        nodeModules: this.getDirectorySize('node_modules'),
        dist: this.getDirectorySize('dist')
      };
    } catch (error) {
      return { total: 0, nodeModules: 0, dist: 0, error: error.message };
    }
  }

  async runBackupVerification() {
    const startTime = Date.now();
    this.log('💾 Running backup verification...');

    try {
      // Check if backup directories exist
      const backupDirs = ['backup', 'backup-problematic-files', 'corrupted-files-backup'];
      const backupStatus = {};
      
      for (const dir of backupDirs) {
        backupStatus[dir] = fs.existsSync(dir);
      }
      
      // Verify backup integrity
      const backupIntegrity = this.verifyBackupIntegrity();

      const backupReport = {
        backupStatus,
        backupIntegrity,
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('backup-verification.json', JSON.stringify(backupReport, null, 2));

      this.results.backupVerification = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Backup verification completed', 'SUCCESS');
    } catch (error) {
      this.results.backupVerification = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Backup verification failed: ${error.message}`, 'ERROR');
    }
  }

  verifyBackupIntegrity() {
    // Simple integrity check - verify that backup files are not empty
    const backupFiles = this.findBackupFiles();
    const integrity = {};
    
    for (const file of backupFiles) {
      try {
        const stats = fs.statSync(file);
        integrity[file] = {
          exists: true,
          size: stats.size,
          modified: stats.mtime
        };
      } catch (error) {
        integrity[file] = {
          exists: false,
          error: error.message
        };
      }
    }
    
    return integrity;
  }

  findBackupFiles() {
    const backupFiles = [];
    const searchDirs = ['backup', 'backup-problematic-files', 'corrupted-files-backup'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getAllFiles(dir);
        backupFiles.push(...files);
      }
    }
    
    return backupFiles;
  }

  getAllFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        files.push(...this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async runDependencyHealth() {
    const startTime = Date.now();
    this.log('📦 Running dependency health check...');

    try {
      // Check for outdated dependencies
      const outdated = execSync('npm outdated --json', { encoding: 'utf8' });
      
      // Check for security vulnerabilities
      const audit = execSync('npm audit --json', { encoding: 'utf8' });
      
      // Check for unused dependencies
      const unused = execSync('npx depcheck --json', { encoding: 'utf8' });

      const dependencyHealth = {
        outdated: JSON.parse(outdated),
        audit: JSON.parse(audit),
        unused: JSON.parse(unused),
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('dependency-health.json', JSON.stringify(dependencyHealth, null, 2));

      this.results.dependencyHealth = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Dependency health check completed', 'SUCCESS');
    } catch (error) {
      this.results.dependencyHealth = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Dependency health check failed: ${error.message}`, 'ERROR');
    }
  }

  async runSecurityMonitoring() {
    const startTime = Date.now();
    this.log('🔒 Running security monitoring...');

    try {
      // Check for security vulnerabilities
      execSync('npm audit --audit-level moderate', { stdio: 'pipe' });
      
      // Check for exposed secrets
      execSync('npx detect-secrets scan', { stdio: 'pipe' });
      
      // Check for insecure dependencies
      execSync('npx audit-ci --config audit-ci.json', { stdio: 'pipe' });

      this.results.securityMonitoring = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Security monitoring completed', 'SUCCESS');
    } catch (error) {
      this.results.securityMonitoring = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Security monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async runUptimeCheck() {
    const startTime = Date.now();
    this.log('⏱️ Running uptime check...');

    try {
      // Start the application
      const devProcess = execSync('npm run dev', { stdio: 'pipe', detached: true });
      
      // Wait for application to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Check if application is responding
      const response = execSync('curl -f http://localhost:3000', { stdio: 'pipe' });
      
      const uptimeData = {
        status: 'online',
        responseTime: Date.now() - startTime,
        timestamp: new Date().toISOString()
      };

      fs.writeFileSync('uptime-check.json', JSON.stringify(uptimeData, null, 2));

      this.results.uptimeCheck = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Uptime check completed', 'SUCCESS');
    } catch (error) {
      this.results.uptimeCheck = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Uptime check failed: ${error.message}`, 'ERROR');
    }
  }

  async runMaintenanceTasks() {
    const startTime = Date.now();
    this.log('🔧 Running maintenance tasks...');

    try {
      // Clean up temporary files
      execSync('find . -name "*.tmp" -delete', { stdio: 'pipe' });
      
      // Clean up node_modules cache
      execSync('npm cache clean --force', { stdio: 'pipe' });
      
      // Clean up build artifacts
      execSync('rm -rf dist build .next', { stdio: 'pipe' });
      
      // Update package-lock.json
      execSync('npm install --package-lock-only', { stdio: 'pipe' });

      this.results.maintenanceTasks = { success: true, duration: Date.now() - startTime, errors: [], warnings: [] };
      this.log('✅ Maintenance tasks completed', 'SUCCESS');
    } catch (error) {
      this.results.maintenanceTasks = { success: false, duration: Date.now() - startTime, errors: [error.message], warnings: [] };
      this.log(`❌ Maintenance tasks failed: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    const endTime = new Date();
    const totalDuration = endTime - this.startTime;
    
    const successfulTasks = Object.values(this.results).filter(result => result.success).length;
    const totalTasks = Object.keys(this.results).length;

    const report = {
      suite: 'Monitoring & Maintenance Suite',
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulTasks,
      totalTasks,
      successRate: `${Math.round((successfulTasks / totalTasks) * 100)}%`,
      results: this.results,
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync('monitoring-maintenance-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Monitoring & maintenance report saved to monitoring-maintenance-report.json');
  }

  generateRecommendations() {
    const recommendations = [];

    if (!this.results.healthCheck.success) {
      recommendations.push('Fix application health issues');
    }
    if (!this.results.performanceMonitoring.success) {
      recommendations.push('Optimize application performance');
    }
    if (!this.results.errorTracking.success) {
      recommendations.push('Address application errors');
    }
    if (!this.results.logAnalysis.success) {
      recommendations.push('Review and clean up logs');
    }
    if (!this.results.resourceMonitoring.success) {
      recommendations.push('Optimize resource usage');
    }
    if (!this.results.backupVerification.success) {
      recommendations.push('Verify backup integrity');
    }
    if (!this.results.dependencyHealth.success) {
      recommendations.push('Update and secure dependencies');
    }
    if (!this.results.securityMonitoring.success) {
      recommendations.push('Address security issues');
    }
    if (!this.results.uptimeCheck.success) {
      recommendations.push('Improve application reliability');
    }
    if (!this.results.maintenanceTasks.success) {
      recommendations.push('Complete maintenance tasks');
    }

    return recommendations;
  }

  async run() {
    console.log('🚀 Running Monitoring & Maintenance Suite...');
    
    try {
      await this.runHealthCheck();
      await this.runPerformanceMonitoring();
      await this.runErrorTracking();
      await this.runLogAnalysis();
      await this.runResourceMonitoring();
      await this.runBackupVerification();
      await this.runDependencyHealth();
      await this.runSecurityMonitoring();
      await this.runUptimeCheck();
      await this.runMaintenanceTasks();
      
      this.generateReport();
    } catch (error) {
      this.log(`Monitoring & maintenance suite failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the monitoring & maintenance suite
if (require.main === module) {
  const suite = new MonitoringMaintenanceSuite();
  suite.run().catch(error => {
    console.error('Monitoring & maintenance suite failed:', error);
    process.exit(1);
  });
}

module.exports = MonitoringMaintenanceSuite;