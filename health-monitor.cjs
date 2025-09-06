#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthMonitor {
  constructor() {
    this.checks = [];
    this.results = {
      timestamp: new Date().toISOString(),
      status: 'unknown',
      checks: [],
      metrics: {},
      recommendations: []
    };
  }

  async checkDiskSpace() {
    try {
      const result = execSync('df -h /', { encoding: 'utf8' });
      const lines = result.split('\n');
      const data = lines[1].split(/\s+/);
      const usage = parseInt(data[4].replace('%', ''));
      
      this.results.checks.push({
        name: 'Disk Space',
        status: usage < 80 ? 'healthy' : usage < 90 ? 'warning' : 'critical',
        value: `${usage}% used`,
        threshold: '80%'
      });
      
      if (usage > 80) {
        this.results.recommendations.push('Consider cleaning up disk space or expanding storage');
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Disk Space',
        status: 'error',
        error: error.message
      });
    }
  }

  async checkMemoryUsage() {
    try {
      const result = execSync('free -m', { encoding: 'utf8' });
      const lines = result.split('\n');
      const memLine = lines[1].split(/\s+/);
      const total = parseInt(memLine[1]);
      const used = parseInt(memLine[2]);
      const usage = Math.round((used / total) * 100);
      
      this.results.checks.push({
        name: 'Memory Usage',
        status: usage < 80 ? 'healthy' : usage < 90 ? 'warning' : 'critical',
        value: `${usage}% used (${used}MB/${total}MB)`,
        threshold: '80%'
      });
      
      if (usage > 80) {
        this.results.recommendations.push('Consider optimizing memory usage or adding more RAM');
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Memory Usage',
        status: 'error',
        error: error.message
      });
    }
  }

  async checkNodeModules() {
    try {
      const nodeModulesPath = path.join(process.cwd(), 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        const stats = fs.statSync(nodeModulesPath);
        const sizeInMB = Math.round(this.getDirectorySize(nodeModulesPath) / (1024 * 1024));
        
        this.results.checks.push({
          name: 'Node Modules Size',
          status: sizeInMB < 500 ? 'healthy' : sizeInMB < 1000 ? 'warning' : 'critical',
          value: `${sizeInMB}MB`,
          threshold: '500MB'
        });
        
        if (sizeInMB > 500) {
          this.results.recommendations.push('Consider cleaning node_modules or reviewing dependencies');
        }
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Node Modules Size',
        status: 'error',
        error: error.message
      });
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    try {
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
    } catch (error) {
      // Ignore permission errors
    }
    return totalSize;
  }

  async checkBuildHealth() {
    try {
      const buildPath = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildPath)) {
        const stats = fs.statSync(buildPath);
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        
        this.results.checks.push({
          name: 'Build Freshness',
          status: ageInHours < 24 ? 'healthy' : ageInHours < 72 ? 'warning' : 'stale',
          value: `${Math.round(ageInHours)} hours old`,
          threshold: '24 hours'
        });
        
        if (ageInHours > 24) {
          this.results.recommendations.push('Consider rebuilding the application');
        }
      } else {
        this.results.checks.push({
          name: 'Build Freshness',
          status: 'missing',
          value: 'No build found',
          recommendation: 'Run npm run build'
        });
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Build Freshness',
        status: 'error',
        error: error.message
      });
    }
  }

  async checkDependencyVulnerabilities() {
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      const vulnerabilities = audit.metadata?.vulnerabilities || {};
      const total = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      
      this.results.checks.push({
        name: 'Security Vulnerabilities',
        status: total === 0 ? 'healthy' : total < 5 ? 'warning' : 'critical',
        value: `${total} vulnerabilities found`,
        details: vulnerabilities
      });
      
      if (total > 0) {
        this.results.recommendations.push('Run npm audit fix to address security vulnerabilities');
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Security Vulnerabilities',
        status: 'error',
        error: error.message
      });
    }
  }

  calculateOverallStatus() {
    const statuses = this.results.checks.map(check => check.status);
    if (statuses.includes('critical') || statuses.includes('error')) {
      this.results.status = 'critical';
    } else if (statuses.includes('warning')) {
      this.results.status = 'warning';
    } else {
      this.results.status = 'healthy';
    }
  }

  async run() {
    console.log('🏥 Starting Health Monitor...');
    
    await this.checkDiskSpace();
    await this.checkMemoryUsage();
    await this.checkNodeModules();
    await this.checkBuildHealth();
    await this.checkDependencyVulnerabilities();
    
    this.calculateOverallStatus();
    
    // Save results
    fs.writeFileSync('health-monitor-report.json', JSON.stringify(this.results, null, 2));
    
    console.log(`🏥 Health Monitor completed. Status: ${this.results.status}`);
    console.log(`📊 ${this.results.checks.length} checks performed`);
    console.log(`💡 ${this.results.recommendations.length} recommendations generated`);
    
    return this.results;
  }
}

// Run health monitor
if (require.main === module) {
  const monitor = new HealthMonitor();
  monitor.run().catch(console.error);
}

module.exports = HealthMonitor;
