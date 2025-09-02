#!/usr/bin/env node

import fs from
  'fs';
import path from
  'path';
import http from
  'http';
import { execSync } from
  'child_process';
import { fileURLToPath } from
  'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HealthChecker {
  constructor() {
    this.projectRoot = path.join(__dirname,
  '..');
    this.logDir = path.join(this.projectRoot,
  'logs');
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
      data,
    };

    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);

    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }

    // Write to log file
    const logFile = path.join(this.logDir,
,
  health-checker.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) +
  '\n');
  }

  async checkApplicationHealth() {
    return new Promise(resolve => {
      const startTime = Date.now();

      const req = http.get(this.healthEndpoint, res => {
        const responseTime = Date.now() - startTime;

        if (res.statusCode === 200) {
          this.log(
ursor/automate-test-fix-improve-and-merge-code-99d1
          resolve({            status: 'healthy,
            responseTime,
            statusCode: res.statusCode,
          });
        } else {
ursor/automate-test-fix-improve-and-merge-code-99d1
          resolve({            status: 'unhealthy,
            responseTime,
            statusCode: res.statusCode,
            reason: `HTTP ${res.statusCode}`,
          });
        }
      });

ursor/automate-test-fix-improve-and-merge-code-99d1
        resolve({          status:
  'unhealthy',
          responseTime,
          reason: error.message,
        });
      });

      req.setTimeout(this.maxResponseTime, () => {
        req.destroy();
        const responseTime = Date.now() - startTime;
        this.log(,
  error',
  'Application health check timed out');
        resolve({
          status: 'unhealthy,
          responseTime,
ursor/automate-test-fix-improve-and-merge-code-99d1
        });      });
    });
  }

  async checkDiskSpace() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      return {        status,
        usage: usage,
        usagePercent,
        available: diskInfo[3],
        total: diskInfo[1],
      };
    } catch (error) {
      this.log(,
  error
  ', 'Failed to check disk space
  ', error);
      return {
ursor/automate-test-fix-improve-and-merge-code-99d1
      };    }
  }

  async checkMemoryUsage() {
    try {
      const result = execSync(,
  free -m
  ', { encoding: 'utf8 });
      const lines = result.trim().split(,
  \n
  ');
      const memInfo = lines[1].split(/\s+/);

      const total = parseInt(memInfo[1]);
      const used = parseInt(memInfo[2]);
      const usagePercent = Math.round((used / total) * 100);
ursor/automate-test-fix-improve-and-merge-code-99d1
      return {        status,
        usagePercent,
        used: `${used}MB`,
        total: `${total}MB`,
        available: `${total - used}MB`,
      };
    } catch (error) {
      this.log(,
  error
  ', 'Failed to check memory usage
  ', error);
      return {
ursor/automate-test-fix-improve-and-merge-code-99d1
      };    }
  }

  async checkPM2Processes() {
    try {
      const result = execSync(,
  pm2 jlist
  ', { encoding: 'utf8 });
      const processes = JSON.parse(result);
ursor/automate-test-fix-improve-and-merge-code-99d1
      return {        status,
        total: processes.length,
        healthy: healthyProcesses.length,
        unhealthy: unhealthyProcesses.length,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          cpu: p.monit.cpu,
          memory: p.monit.memory,
          uptime: p.pm2_env.pm_uptime,
          restarts: p.pm2_env.restart_time,
        })),
      };
    } catch (error) {
      this.log(,
  error
  ', 'Failed to check PM2 processes
  ', error);
      return {
ursor/automate-test-fix-improve-and-merge-code-99d1
      };    }
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
          modified: stats.mtime,
        });
      }

      const totalSize = logStats.reduce((sum, log) => sum + log.sizeBytes, 0);
      const totalSizeMB = Math.round(totalSize / (1024 * 1024));
ursor/automate-test-fix-improve-and-merge-code-99d1
      return {        status,
        fileCount: logFiles.length,
        totalSize: `${totalSizeMB}MB`,
        files: logStats,
      };
    } catch (error) {
      this.log(,
  error
  ', 'Failed to check log files
  ', error);
      return {
ursor/automate-test-fix-improve-and-merge-code-99d1
      };    }
  }

  async checkDependencies() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      // Check if node_modules exists      const nodeModulesPath = path.join(this.projectRoot, 'node_modules
  ');
      const nodeModulesExists = fs.existsSync(nodeModulesPath);

      if (!nodeModulesExists) {
        this.log('warning
  ', 'node_modules directory not found
  ');
        return {
          status: 'warning,
          reason: 'node_modules not found
  ',
          dependencies: Object.keys(packageJson.dependencies || {}).length,
          devDependencies: Object.keys(packageJson.devDependencies || {})
            .length,
        };
      }
ursor/automate-test-fix-improve-and-merge-code-99d1
      return {        status: 'healthy
  ',
        dependencies: dependencyCount,
        devDependencies: devDependencyCount,
        nodeModulesExists,
      };
    } catch (error) {
      this.log(,
  error
  ', 'Failed to check dependencies
  ', error);
      return {
ursor/automate-test-fix-improve-and-merge-code-99d1
      };    }
  }

  determineOverallHealth(checks) {
    const statuses = checks.map(check => check.status);
ursor/automate-test-fix-improve-and-merge-code-99d1
    } else {      return 'unknown
  ';
    }
  }

  async triggerRestartIfNeeded(overallHealth) {
    if (overallHealth === 'critical
  ' || overallHealth === 'unhealthy
  ') {
      try {
ursor/automate-test-fix-improve-and-merge-code-99d1
        return true;      } catch (error) {
        this.log('error
  ', 'Failed to restart application
  ', error);
        return false;
      }
    }
    return false;
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path.join(
      this.logDir,
      `health-report-${Date.now()}.json`
    );

    const overallHealth = this.determineOverallHealth(this.checks);

    const report = {
      timestamp,
      overallHealth,
      checks: this.checks,
      summary: {
ursor/automate-test-fix-improve-and-merge-code-99d1
    };

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
ursor/automate-test-fix-improve-and-merge-code-99d1
    return report;  }

  async run() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
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
ursor/automate-test-fix-improve-and-merge-code-99d1
      return report;    } catch (error) {
      this.log('error
  ', 'Health check failed
  ', error);
      throw error;
    }
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const checker = new HealthChecker();
ursor/automate-test-fix-improve-and-merge-code-99d1
}
export default HealthChecker;
