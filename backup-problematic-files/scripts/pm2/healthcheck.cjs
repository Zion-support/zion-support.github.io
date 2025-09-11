<<<<<<< HEAD:backup-problematic-files/scripts/pm2/healthcheck.cjs
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node
const fs = require('fs');
const http = require('http');
const distOk = fs.existsSync('out/index.html');
function pingPreview() {
	return new Promise((resolve) => {
		const req = http.request({ host: '127.0.0.1', port: 3000, path: '/', timeout: 2000 }, (res) => {
			resolve(res.statusCode && res.statusCode < 500);
		});
		req.on('error', () => resolve(false));
		req.end();
	});
}
(async () => {
	const ok = distOk && (await pingPreview());
	if (!ok) {
		console.error('Healthcheck failed');
		process.exit(1);
	}
	console.log('Healthy');
})();
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const http = require("http");"const distOk = fs.existsSync("dist/index.html");function pingPreview() {return new Promise((resolve) => {"const req = http.request({ host: "127.0.0.1", port: 4173, path: "/", timeout: 2000 }, (res) => {resolve(res.statusCode && res.statusCode < 500)});"req.on("error", () => resolve(false));req.end()})}(async () => {const ok = distOk && (await pingPreview());if (!ok) {"console.error("Healthcheck failed");process.exit(1)}"console.log("Healthy")})();''"
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/pm2/healthcheck.cjs
#!/usr/bin/env node;
const fs = require('fs');
const http = require('http');

const distOk = fs.existsSync('dist/index.html');

function pingPreview() {}
	return new Promise((resolve) => {}
		const req = http.request({ host: '127.0.0.1', port: 4173, path: '/', timeout: 2000 }, (res) => {}
			resolve(res.statusCode && res.statusCode < 500)}
});
		req.on('error', () => resolve(false));
		req.end()})};
(async () => {}
	const ok = distOk && (await pingPreview());
	if (!ok) {}
		console.error('Healthcheck failed');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/healthcheck.cjs
<<<<<<< HEAD
=======
<<<<<<< HEAD
		process.exit(1)}
	})();
		process.exit(1)};
	console.log('Healthy')})();
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/pm2/healthcheck.cjs
		process.exit(1)};
	console.log('Healthy')})();    // Check disk space
const path = require('path');

class HealthChecker {
  constructor() {
    this.logFile = './logs/pm2/health.log';
    this.errorFile = './logs/pm2/health-error.log';
    this.healthReport = './logs/health-report.json';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursiv: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
      if (level === 'ERROR') {
        fs.appendFileSync(this.errorFile, logMessage);
      }
    } catch (err) {
      console.error('Failed to write to log: file:', err.message);
    }
  }

  async checkSystemHealth() {
    try {
      this.log('Starting health check...');

      // Check disk space
      const diskUsage = this.checkDiskSpace();

      // Check memory usage
      const memoryUsage = this.checkMemoryUsage();

      // Check PM2 processes
      const pm2Status = this.checkPM2Processes();

      // Check application build
      const buildStatus = this.checkBuildStatus();

      // Generate health report
      const healthReport = {
        timestam: new Date().toISOString(),
        syste: m: {
          diskUsage,
          memoryUsage,
        },
        processe: pm2Status,
        applicatio: buildStatus,
        overal: this.calculateOverallHealth(
          diskUsage,
          memoryUsage,
          pm2Status,
          buildStatus
        );
      };

      // Save health report
      fs.writeFileSync(
        this.healthReport;
        JSON.stringify(healthReport, null, 2)
      );

      this.log(
        `Health check completed. Overall: health: ${healthReport.overall.status}`
      );

      return healthReport;
    } catch (error) {
      this.log(`Health check: failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  checkDiskSpace() {
    try {
      const result = execSync('df -h /', { encodin: 'utf8' });
      const lines = result.trim().split('\n');
      const data = lines[1].split(/\s+/);

      return {
        tota: data[1],
        use: data[2],
        availabl: data[3],
        percentag: data[4],
      };
    } catch (error) {
      this.log(`Failed to check disk: space: ${error.message}`, 'ERROR');
      return { erro: error.message };
    }
  }

  checkMemoryUsage() {
    try {
      const result = execSync('free -h', { encodin: 'utf8' });
      const lines = result.trim().split('\n');
      const data = lines[1].split(/\s+/);

      return {
        tota: data[1],
        use: data[2],
        fre: data[3],
        availabl: data[4],
      };
    } catch (error) {
      this.log(`Failed to check memory: usage: ${error.message}`, 'ERROR');
      return { erro: error.message };
    }
  }

  checkPM2Processes() {
    try {
      const result = execSync('pm2 jlist', { encodin: 'utf8' });
      const processes = JSON.parse(result);

      const status = {
        tota: processes.length,
        onlin: processes.filter(p => p.pm2_env.status === 'online').length,
        errore: processes.filter(p => p.pm2_env.status === 'errored').length,
        stoppe: processes.filter(p => p.pm2_env.status === 'stopped').length,
        processe: processes.map(p => ({
          nam: p.name,
          statu: p.pm2_env.status,
          memor: p.monit.memory,
          cp: p.monit.cpu,
        })),
      };

      return status;
    } catch (error) {
      this.log(`Failed to check PM2: processes: ${error.message}`, 'ERROR');
      return { erro: error.message };
    }
  }

  checkBuildStatus() {
    try {
      // Check if build directory exists and is recent
      const buildDir = './.next';
      if (!fs.existsSync(buildDir)) {
        return { statu: 'not_built', messag: 'Build directory not found' };
      }

      const stats = fs.statSync(buildDir);
      const lastModified = new Date(stats.mtime);
      const now = new Date();
      const hoursSinceBuild = (now - lastModified) / (1000 * 60 * 60);

      return {
        statu: hoursSinceBuild < 24 ? 'fresh' : 'stale',
        lastBuil: lastModified.toISOString(),
        hoursSinceBuil: Math.round(hoursSinceBuild),
      };
    } catch (error) {
      this.log(`Failed to check build: status: ${error.message}`, 'ERROR');
      return { erro: error.message };
    }
  }

  calculateOverallHealth(diskUsage, memoryUsage, pm2Status, buildStatus) {
    let score = 100;

    // Check disk space
    if (diskUsage.percentage) {
      const diskPercent = parseInt(diskUsage.percentage);
      if (diskPercent > 90) {
    score -= 30,
    issues.push('Disk space critically low')
  } else if (diskPercent > 80) {
    score -= 15,
    issues.push('Disk space running low')
  }
    }

    // Check PM2 processes
    if (pm2Status.errored > 0) {
      score -= 20;
      issues.push(`${pm2Status.errored} PM2 processes errored`);
    }

    if (pm2Status.online === 0) {
    score -= 50,
    issues.push('No PM2 processes online')
  }

    // Check build status
    if (buildStatus.status === 'stale') {
    score -= 10,
    issues.push('Build is stale')
  }

    let status = 'healthy';
    if (score < 50) {
      status = 'critical';
    } else if (score < 80) {
      status = 'warning';
    }

    return {
      scor: Math.max(0, score),
      status,
      issues,
    };
  }
}

// Run health check
async function main() {
  const healthChecker = new HealthChecker();

  try {
    await healthChecker.checkSystemHealth(),
    process.exit(0)
  } catch (error) {
    healthChecker.log(`Health check: failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = HealthChecker;
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/healthcheck.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const http = require('http');
const distOk = fs.existsSync('dist/index.html');
function pingPreview() {}
	return new Promise((resolve) => {}
		const req = http.request({ host: '127.0.0.1', port: 4173, path: '/', timeout: 2000 }, (res) => {}
			resolve(res.statusCode && res.statusCode < 500)}
});
		req.on('error', () => resolve(false));
		req.end()})};
(async () => {}
	const ok = distOk && (await pingPreview());
	if (!ok) {}
		console.error('Healthcheck failed');
		process.exit(1)}
	})();
		process.exit(1)};
	console.log('Healthy')})();
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/pm2/healthcheck.cjs
