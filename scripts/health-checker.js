#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import http from 'http';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HealthChecker {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.logDir = path.join(this.projectRoot, 'logs');
    this.port = process.env.PORT || 3000;
    this.healthEndpoint = `http://localhost:${this.port}/health`;
    this.maxResponseTime = 5000; // 5 seconds
    this.checks = [];
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };

    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }

    // Write to log file
    const logFile = path.join(this.logDir, 'health-checker.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async checkApplicationHealth() {
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      const req = http.get(this.healthEndpoint, (res) => {
        const responseTime = Date.now() - startTime;
        
        if (res.statusCode === 200) {
          this.log('info', `Application health check passed (${responseTime}ms)`);
          resolve({
            status: 'healthy',
            responseTime,
            statusCode: res.statusCode
          });
        } else {
          this.log('warning', `Application health check failed with status ${res.statusCode}`);
          resolve({
            status: 'unhealthy',
            responseTime,
            statusCode: res.statusCode,
            reason: `HTTP ${res.statusCode}`
          });
        }
      });

      req.on('error', (error) => {
        const responseTime = Date.now() - startTime;
        this.log('error', 'Application health check failed', { error: error.message });
        resolve({
          status: 'unhealthy',
          responseTime,
          reason: error.message
        });
      });

      req.setTimeout(this.maxResponseTime, () => {
        req.destroy();
        const responseTime = Date.now() - startTime;
        this.log('error', 'Application health check timed out');
        resolve({
          status: 'unhealthy',
          responseTime,
          reason: 'Timeout'
        });
      });
    });
  }

  async checkDiskSpace() {
    try {
      const result = execSync('df -h .', { 
        cwd: this.projectRoot,
        encoding: 'utf8' 
      });
      
      const lines = result.trim().split('\n');
      const diskInfo = lines[1].split(/\s+/);
      const usage = diskInfo[4];
      const usagePercent = parseInt(usage.replace('%', ''));
      
      const status = usagePercent > 90 ? 'critical' : usagePercent > 80 ? 'warning' : 'healthy';
      
      this.log('info', `Disk usage: ${usage}`, { status, usagePercent });
      
      return {
        status,
        usage: usage,
        usagePercent,
        available: diskInfo[3],
        total: diskInfo[1]
      };
    } catch (error) {
      this.log('error', 'Failed to check disk space', error);
      return {
        status: 'unknown',
        reason: error.message
      };
    }
  }

  async checkMemoryUsage() {
    try {
      const result = execSync('free -m', { encoding: 'utf8' });
      const lines = result.trim().split('\n');
      const memInfo = lines[1].split(/\s+/);
      
      const total = parseInt(memInfo[1]);
      const used = parseInt(memInfo[2]);
      const usagePercent = Math.round((used / total) * 100);
      
      const status = usagePercent > 90 ? 'critical' : usagePercent > 80 ? 'warning' : 'healthy';
      
      this.log('info', `Memory usage: ${usagePercent}%`, { status, used, total });
      
      return {
        status,
        usagePercent,
        used: `${used}MB`,
        total: `${total}MB`,
        available: `${total - used}MB`
      };
    } catch (error) {
      this.log('error', 'Failed to check memory usage', error);
      return {
        status: 'unknown',
        reason: error.message
      };
    }
  }

  async checkPM2Processes() {
    try {
      const result = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(result);
      
      const healthyProcesses = processes.filter(p => p.pm2_env.status === 'online');
      const unhealthyProcesses = processes.filter(p => p.pm2_env.status !== 'online');
      
      const status = unhealthyProcesses.length === 0 ? 'healthy' : 
                   healthyProcesses.length > 0 ? 'warning' : 'critical';
      
      this.log('info', `PM2 processes: ${healthyProcesses.length} healthy, ${unhealthyProcesses.length} unhealthy`);
      
      return {
        status,
        total: processes.length,
        healthy: healthyProcesses.length,
        unhealthy: unhealthyProcesses.length,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          cpu: p.monit.cpu,
          memory: p.monit.memory,
          uptime: p.pm2_env.pm_uptime,
          restarts: p.pm2_env.restart_time
        }))
      };
    } catch (error) {
      this.log('error', 'Failed to check PM2 processes', error);
      return {
        status: 'unknown',
        reason: error.message
      };
    }
  }

  async checkLogFiles() {
    try {
      const logFiles = fs.readdirSync(this.logDir);
      const logStats = [];
      
      for (const file of logFiles) {
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        
        logStats.push({
          file,
          size: `${sizeKB}KB`,
          sizeBytes: stats.size,
          modified: stats.mtime
        });
      }
      
      const totalSize = logStats.reduce((sum, log) => sum + log.sizeBytes, 0);
      const totalSizeMB = Math.round(totalSize / (1024 * 1024));
      
      const status = totalSizeMB > 500 ? 'warning' : 'healthy';
      
      this.log('info', `Log files: ${logFiles.length} files, ${totalSizeMB}MB total`);
      
      return {
        status,
        fileCount: logFiles.length,
        totalSize: `${totalSizeMB}MB`,
        files: logStats
      };
    } catch (error) {
      this.log('error', 'Failed to check log files', error);
      return {
        status: 'unknown',
        reason: error.message
      };
    }
  }

  async checkDependencies() {
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check if node_modules exists
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      const nodeModulesExists = fs.existsSync(nodeModulesPath);
      
      if (!nodeModulesExists) {
        this.log('warning', 'node_modules directory not found');
        return {
          status: 'warning',
          reason: 'node_modules not found',
          dependencies: Object.keys(packageJson.dependencies || {}).length,
          devDependencies: Object.keys(packageJson.devDependencies || {}).length
        };
      }
      
      const dependencyCount = Object.keys(packageJson.dependencies || {}).length;
      const devDependencyCount = Object.keys(packageJson.devDependencies || {}).length;
      
      this.log('info', `Dependencies: ${dependencyCount} production, ${devDependencyCount} development`);
      
      return {
        status: 'healthy',
        dependencies: dependencyCount,
        devDependencies: devDependencyCount,
        nodeModulesExists
      };
    } catch (error) {
      this.log('error', 'Failed to check dependencies', error);
      return {
        status: 'unknown',
        reason: error.message
      };
    }
  }

  determineOverallHealth(checks) {
    const statuses = checks.map(check => check.status);
    
    if (statuses.includes('critical')) {
      return 'critical';
    } else if (statuses.includes('unhealthy')) {
      return 'unhealthy';
    } else if (statuses.includes('warning')) {
      return 'warning';
    } else if (statuses.every(status => status === 'healthy')) {
      return 'healthy';
    } else {
      return 'unknown';
    }
  }

  async triggerRestartIfNeeded(overallHealth) {
    if (overallHealth === 'critical' || overallHealth === 'unhealthy') {
      try {
        this.log('warning', 'Triggering application restart due to poor health');
        execSync('pm2 restart zion-app', { cwd: this.projectRoot });
        this.log('info', 'Application restarted successfully');
        return true;
      } catch (error) {
        this.log('error', 'Failed to restart application', error);
        return false;
      }
    }
    return false;
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path.join(this.logDir, `health-report-${Date.now()}.json`);
    
    const overallHealth = this.determineOverallHealth(this.checks);
    
    const report = {
      timestamp,
      overallHealth,
      checks: this.checks,
      summary: {
        healthy: this.checks.filter(c => c.status === 'healthy').length,
        warning: this.checks.filter(c => c.status === 'warning').length,
        unhealthy: this.checks.filter(c => c.status === 'unhealthy').length,
        critical: this.checks.filter(c => c.status === 'critical').length,
        unknown: this.checks.filter(c => c.status === 'unknown').length
      }
    };
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('info', `Health report generated: ${reportFile}`);
    
    return report;
  }

  async run() {
    try {
      this.log('info', 'Starting health check...');
      
      // Run all health checks
      const healthChecks = [
        { name: 'application', check: this.checkApplicationHealth.bind(this) },
        { name: 'diskSpace', check: this.checkDiskSpace.bind(this) },
        { name: 'memory', check: this.checkMemoryUsage.bind(this) },
        { name: 'pm2Processes', check: this.checkPM2Processes.bind(this) },
        { name: 'logFiles', check: this.checkLogFiles.bind(this) },
        { name: 'dependencies', check: this.checkDependencies.bind(this) }
      ];
      
      this.checks = [];
      
      for (const { name, check } of healthChecks) {
        const result = await check();
        this.checks.push({ name, ...result });
      }
      
      // Determine overall health
      const overallHealth = this.determineOverallHealth(this.checks);
      
      // Generate report
      const report = await this.generateReport();
      
      // Trigger restart if needed
      await this.triggerRestartIfNeeded(overallHealth);
      
      this.log('info', `Health check completed. Overall status: ${overallHealth}`);
      
      return report;
    } catch (error) {
      this.log('error', 'Health check failed', error);
      throw error;
    }
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const checker = new HealthChecker();
  
  checker.run().then(report => {
    console.log('Health check completed successfully');
    process.exit(0);
  }).catch(error => {
    console.error('Health check failed:', error);
    process.exit(1);
  });
}

export default HealthChecker;