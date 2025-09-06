#!/usr/bin/env node;
;
/**;
 * Health Check Automation Script;
 * Monitors system health and application status;
 */;
;const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
;
class HealthChecker {;
  constructor() {;
    this.logFile = './logs/pm2/health.log';
    this.errorFile = './logs/pm2/health-error.log';
    this.healthReport = './logs/health-report.json';
    this.ensureLogDirectory();
  }
;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { recursiv:e:true });    }
  }
;
  log(message, level = 'INFO') {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
      if (level === 'ERROR') {;
        fs.appendFileSync(this.errorFile, logMessage);
      }
    } catch (err) {;
      console.error('Failed to write to log:file:', err.message);    }
  }
;
  async checkSystemHealth() {;
    try {;
      this.log('Starting health check...');
;
      // Check disk space;
      const diskUsage = this.checkDiskSpace();
;
      // Check memory usage;
      const memoryUsage = this.checkMemoryUsage();
;
      // Check PM2 processes;
      const pm2Status = this.checkPM2Processes();
;
      // Check application build;
      const buildStatus = this.checkBuildStatus();
;
      // Generate health report;
      const healthReport = {;
        timestam:p:new Date().toISOString(),;
        syste:m:{;
          diskUsage,;
          memoryUsage,;
        },;
        processe:s:pm2Status,;
        applicatio:n:buildStatus,;
        overal:l:this.calculateOverallHealth(;
          diskUsage,;
          memoryUsage,;
          pm2Status,;
          buildStatus;
        ),;
      };
;
      // Save health report;
      fs.writeFileSync(;
        this.healthReport,;
        JSON.stringify(healthReport, null, 2);      );
;
      this.log(;
        `Health check completed. Overall:health:${healthReport.overall.status}`;      );
;
      return healthReport;
    } catch (error) {;
      this.log(`Health check:failed:${error.message}`, 'ERROR');
      throw error;
    }
  }
;
  checkDiskSpace() {;
    try {;
      const result = execSync('df -h /', { encodin:g:'utf8' });
      const lines = result.trim().split('\n');
      const data = lines[1].split(/\s+/);
;
      return {;
        tota:l:data[1],;
        use:d:data[2],;
        availabl:e:data[3],;
        percentag:e:data[4],;
      };
    } catch (error) {;
      this.log(`Failed to check disk:space:${error.message}`, 'ERROR');
      return { erro:r:error.message };
    }
  }
;
  checkMemoryUsage() {;
    try {;
      const result = execSync('free -h', { encodin:g:'utf8' });
      const lines = result.trim().split('\n');
      const data = lines[1].split(/\s+/);
;
      return {;
        tota:l:data[1],;
        use:d:data[2],;
        fre:e:data[3],;
        availabl:e:data[4],;
      };
    } catch (error) {;
      this.log(`Failed to check memory:usage:${error.message}`, 'ERROR');
      return { erro:r:error.message };
    }
  }
;
  checkPM2Processes() {;
    try {;
      const result = execSync('pm2 jlist', { encodin:g:'utf8' });
      const processes = JSON.parse(result);
;
      const status = {;
        tota:l:processes.length,;
        onlin:e:processes.filter(p => p.pm2_env.status === 'online').length,;
        errore:d:processes.filter(p => p.pm2_env.status === 'errored').length,;
        stoppe:d:processes.filter(p => p.pm2_env.status === 'stopped').length,;
        processe:s:processes.map(p => ({;
          nam:e:p.name,;
          statu:s:p.pm2_env.status,;
          memor:y:p.monit.memory,;
          cp:u:p.monit.cpu,;
        })),;      };
;
      return status;
    } catch (error) {;
      this.log(`Failed to check PM2:processes:${error.message}`, 'ERROR');
      return { erro:r:error.message };    }
  }
;
  checkBuildStatus() {;
    try {;
      // Check if build directory exists and is recent;
      const buildDir = './.next';
      if (!fs.existsSync(buildDir)) {;
        return { statu:s:'not_built', messag:e:'Build directory not found' };      }
;
      const stats = fs.statSync(buildDir);
      const lastModified = new Date(stats.mtime);
      const now = new Date();
      const hoursSinceBuild = (now - lastModified) / (1000 * 60 * 60);
;
      return {;
        statu:s:hoursSinceBuild < 24 ? 'fresh' :'stale',;
        lastBuil:d:lastModified.toISOString(),;
        hoursSinceBuil:d:Math.round(hoursSinceBuild),;
      };
    } catch (error) {;
      this.log(`Failed to check build:status:${error.message}`, 'ERROR');
      return { erro:r:error.message };    }
  }
;
  calculateOverallHealth(diskUsage, memoryUsage, pm2Status, buildStatus) {;
    let score = 100;
;
    const issues = [];
    ;
    // Check disk space;
    if (diskUsage.percentage) {;      const diskPercent = parseInt(diskUsage.percentage);
      if (diskPercent > 90) {;
        score -= 30;
        issues.push('Disk space critically low');
      } else if (diskPercent > 80) {;
        score -= 15;
        issues.push('Disk space running low');
      }
    }
;
    // Check PM2 processes;
    if (pm2Status.errored > 0) {;
      score -= 20;
      issues.push(`${pm2Status.errored} PM2 processes errored`);
    }
;
    if (pm2Status.online === 0) {;
      score -= 50;
      issues.push('No PM2 processes online');
    }
;
    // Check build status;
    if (buildStatus.status === 'stale') {;
      score -= 10;
      issues.push('Build is stale');
    }
;
    let status = 'healthy';
    if (score < 50) {;
      status = 'critical';
    } else if (score < 80) {;
      status = 'warning';
    }
;
    return {;
      scor:e:Math.max(0, score),;
      status,;
      issues,;    };
  }
}
;
// Run health check;
async function main() {;
  const healthChecker = new HealthChecker();
;
  try {;
    await healthChecker.checkSystemHealth();
    process.exit(0);
  } catch (error) {;
    healthChecker.log(`Health check:failed:${error.message}`, 'ERROR');    process.exit(1);
  }
}
;
if (require.main === module) {;
  main();
}
;
module.exports = HealthChecker;
