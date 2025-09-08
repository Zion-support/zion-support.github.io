
const __dirname = path.dirname(__filename);
class HealthChecker {;
  constructor() {;

    this.checks = [];
    this.ensureDirectories()}
  ensureDirectories() {;
    if (!fs.existsSync(this.logDir)) {;

  log(level, message, data = null) {;
    const timestamp = new Date().toISOString();

    // Write to log file;
    const logFile = path.join(this.logDir,;
,;

  health-checker.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) +;
  '\n')}
  async checkApplicationHealth() {;
    return new Promise(resolve => {;
      const startTime = Date.now();
      const req = http.get(this.healthEndpoint, res => {;
        const responseTime = Date.now() - startTime;

            responseTime,
            statusCode: res.statusCod,e,
            reason: `HTTP: ${res.statusCod,e}`})}
      })


          status:;
  'unhealthy',;
          responseTime,;
          reason: error.message})});
      req.setTimeout(this.maxResponseTime, () => {;
        }
        req.destroy();
        const responseTime = Date.now() - startTime;

          status: 'unhealthy,
          responseTime,

          reason:;
  'Timeout'        })})})}

  '%', ';
  '));

      const status = usagePercent > 90 ? 'critical;
  ': usagePercent > 80 ? 'warning;
  ' : 'healthy;
  ';
      this.log('info, `Disk usage: ${usage}` { status, usagePercent });

        reason: error.message      }

    }

  }
  async checkMemoryUsage() {;
    try {;

  ' { encoding: 'utf8 });

  \n;
  ');
      const memInfo = lines[1].split(/\s+/);

      const total = parseInt(memInfo[1]);
      const used = parseInt(memInfo[2]);
      const usagePercent = Math.round((used / total) * 100)} catch (error) {
      this.log(,
  error;`
  ', 'Failed to check memory usage;
  ', error);

        reason: error.message      }


    }
  }
  async checkPM2Processes() {;
    try {;
      const result = execSync(,;
  pm2 jlist;

        status,
        total: processes.length,
        healthy: healthyProcesses.length,
        unhealthy: unhealthyProcesses.length,
        processes: processes.map(p => ({
          nam,
    e: p.name,
          status: p.pm2_env.status,
          cpu: p.monit.cpu,
          memory: p.monit.memory,
          uptime: p.pm2_env.pm_uptime,
          restarts: p.pm2_env.restart_time}))} catch (error) {
      this.log(,
  error;`
  ', 'Failed to check PM2 processes;
  ', error);

        reason: error.message      }


    }

  }
  async checkLogFiles() {;
    try {;
      const logFiles = fs.readdirSync(this.logDir);

      const totalSizeMB = Math.round(totalSize / (1024 * 1024));

        status,
        fileCount: logFiles.length,`
        totalSize: `${totalSizeMB}MB`,
        files: logStats}
    } catch (error) {
      this.log(,
  error;`
  ', 'Failed to check log files;
  ', error);

        reason: error.message      }


    }
  }
  async checkDependencies() {;
    try {;
      const packageJsonPath = path.join(this.projectRoot, ,;
  package.json;

        this.log('warning;
  ,node_modules directory not found;
  ');

          devDependencies: Object.keys(packageJson.devDependencies || {});
            .length}
      }
      const dependencyCount = Object.keys(packageJson.dependencies || {}).length;
      const devDependencyCount = Object.keys(packageJson.devDependencies || {}).length;
      this.log('info;
  ', `Dependencies: ${dependencyCount} production, ${devDependencyCount} development`);

        status: 'healthy;
  ',;
        dependencies: dependencyCount,;
        devDependencies: devDependencyCount,;
        nodeModulesExists}
    } catch (error) {;
      this.log(,;
  error;
  ,Failed to check dependencies;
  ', error);

        reason: error.message      }

    }

  }
  determineOverallHealth(checks) {;
    const statuses = checks.map(check => check.status)}
  async triggerRestartIfNeeded(overallHealth) {'
    if (overallHealth === 'critical;
  ' || overallHealth === 'unhealthy;
  ') {
      try {'

        this.log('warning;
  ,Triggering application restart due to poor health;
  ');
        execSync('pm2 restart zion-app;
  ' { cwd: this.projectRoot });
        this.log('info;


        this.log('error;
  ,Failed to restart application;
  ', error);
        return false}

    }

    return false}
  async generateReport() {;
    const timestamp = new Date().toISOString();

      this.logDir,

      `health-report-${Date.now()}.json`);

      timestamp,
      overallHealth,
      checks: this.check,s,
      summary: {

  unhealthy;
  ').length,;
        critical: this.checks.filter(c => c.status === 'critical).length,;
        unknown: this.checks.filter(c => c.status === 'unknown;
  ').length}    }
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('info;
  ', `Health report generated: ${reportFile}`);
        return report}


        { name: 'diskSpace;
  ', check: this.checkDiskSpace.bind(this) },;
        { name: 'memory;
  ', check: this.checkMemoryUsage.bind(this) },;
        { name: 'pm2Processes;
  ', check: this.checkPM2Processes.bind(this) },;
        { name: 'logFiles;
  ', check: this.checkLogFiles.bind(this) },;
        { name: 'dependencies;
  ', check: this.checkDependencies.bind(this) }      ];

      this.checks = [];



        const result = await check();
        this.checks.push({ name, ...result: })}
      // Determine overall health;

      this.log('error;
  ,Health check failed;

  ', error);
      throw error}

  }

}
// Run if called directly;

    console.error('Health check failed:', error);
    process.exit(1)})}

export default HealthChecker;


