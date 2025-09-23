
    };
  };
,
  async checkSystemResources() {,
    try {,
      this.log('💻 Checking system resources...'),
,
      const memInfo = execSync('free -m', { encoding: 'utf8' }),
      const diskInfo = execSync('df -h', { encoding: 'utf8' }),
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' }),
,
      // Parse memory info,
      const memLines = memInfo.split('\n'),
      const memTotal = memLines[1].split(/\s+/)[1],
      const memUsed = memLines[1].split(/\s+/)[2],
      const memFree = memLines[1].split(/\s+/)[3],
,
      // Parse disk info,
      const diskLines = diskInfo.split('\n'),
      const rootDisk = diskLines.find(line => line.includes('/')),
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', '') : '0',
,
      // Parse CPU info,
      const cpuUsage = cpuInfo.includes('id') ?,
        (100 - parseFloat(cpuInfo.split('id')[0].split()[3].replace('%id', '').trim())) : 0,
,
      return {,
        success: true,
        memory: {,
          total: parseInt(memTotal),
          used: parseInt(memUsed),
          free: parseInt(memFree),
          usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)
        },
        disk: {,
          usagePercent: parseInt(diskUsage)
        },
        cpu: {,
          usagePercent: Math.round(cpuUsage)
        };
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        memory: null,
        disk: null,
        cpu: null
      };
    };
  };
,
  async checkProcessHealth() {,
    try {,
      this.log('🔄 Checking process health...'),
,
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }),
      const processes = JSON.parse(pm2List),
,
      const processHealth = {,
        total: processes.length,
        online: 0,
        stopped: 0,
        errored: 0,
        processes: []
      };
,
      processes.forEach(proc => {,
        const status = proc.pm2_env?.status || 'unknown',
        processHealth.processes.push({,
          name: proc.name,
          status: status,
          memory: proc.monit?.memory || 0,
          cpu: proc.monit?.cpu || 0,
          uptime: proc.pm2_env?.uptime || 0
        }),
,
        if (status === 'online') processHealth.online++,
        else if (status === 'stopped') processHealth.stopped++,
        else if (status === 'errored') processHealth.errored++
      }),
,
      return {,
        success: true,
        health: processHealth
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        health: null
      };
    };
  };
,
  async checkApplicationHealth() {,
    try {,
      this.log('🌐 Checking application health...'),
,
      const healthChecks = [],
,
      // Check if the application is running,
      try {,
        const pm2List = execSync('pm2 list', { encoding: 'utf8' }),
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'),
,
        healthChecks.push({,
          name: 'PM2 App Status',
          status: hasRunningApp ? 'healthy' : 'unhealthy',
          message: hasRunningApp ? 'Application is running' : 'Application is not running'
        })
      } catch (error) {,
        healthChecks.push({,
          name: 'PM2 App Status',
          status: 'error',
          message: 'Could not check PM2 status'
        })
      };
,
      // Check if build files exist,
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next'),
      healthChecks.push({,
        name: 'Build Files',
        status: buildExists ? 'healthy' : 'unhealthy',
        message: buildExists ? 'Build files exist' : 'Build files missing'
      }),
,
      // Check if package.json exists and is valid,
      try {,
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
        healthChecks.push({,
          name: 'Package.json',
          status: 'healthy',
          message: 'Package.json is valid'
        })
      } catch (error) {,
        healthChecks.push({,
          name: 'Package.json',
          status: 'unhealthy',
          message: 'Package.json is invalid or missing'
        })
      };
,
      return {,
        success: true,
        checks: healthChecks
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        checks: []
      };
    };
  };
,
  async checkLogHealth() {,
    try {,
      this.log('📝 Checking log health...'),
,
      const logsDir = path.join(this.projectRoot, 'logs/pm2'),
      const logFiles = [],
,
      if (fs.existsSync(logsDir)) {,
        const files = fs.readdirSync(logsDir),
        files.forEach(file => {,
          if (file.endsWith('.log')) {,
            const filePath = path.join(logsDir, file),
            const stats = fs.statSync(filePath),
            logFiles.push({,
              name: file,
              size: stats.size,
              sizeMB: Math.round(stats.size / (1024 * 1024) * 100) / 100,
              lastModified: stats.mtime
            })
          };
        })
      };
,
      return {,
        success: true,
        logFiles: logFiles,
        totalSize: logFiles.reduce((sum, file) => sum + file.size, 0)
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        logFiles: [],
        totalSize: 0
      };
    };
  };
,
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        systemHealth: 'unknown',
        processHealth: 'unknown',
        applicationHealth: 'unknown',
        logHealth: 'unknown',
        overallHealth: 'unknown',
        healthScore: 0
      },
      details: {,
        system: systemInfo,
        processes: processInfo,
        application: appInfo,
        logs: logInfo
      },
      recommendations: []
    };
,
    // Calculate health scores,
    let totalScore = 0,
    let maxScore = 0,
,
    // System health,
    if (systemInfo.success) {,
      const memUsage = systemInfo.memory?.usagePercent || 0,
      const diskUsage = systemInfo.disk?.usagePercent || 0,
      const cpuUsage = systemInfo.cpu?.usagePercent || 0,
,
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {,
        report.summary.systemHealth = 'healthy',
        totalScore += 25
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {,
        report.summary.systemHealth = 'warning',
        totalScore += 15
      } else {,
        report.summary.systemHealth = 'unhealthy',
        totalScore += 5
      };
    };
    maxScore += 25,
,
    // Process health,
    if (processInfo.success && processInfo.health) {,
      const health = processInfo.health,
      if (health.errored === 0 && health.stopped === 0) {,
        report.summary.processHealth = 'healthy',
        totalScore += 25
      } else if (health.errored === 0) {,
        report.summary.processHealth = 'warning',
        totalScore += 15
      } else {,
        report.summary.processHealth = 'unhealthy',
        totalScore += 5
      };
    };
    maxScore += 25,
,
    // Application health,
    if (appInfo.success) {,
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length,
      const totalChecks = appInfo.checks.length,
,
      if (healthyChecks === totalChecks) {,
        report.summary.applicationHealth = 'healthy',
        totalScore += 25
      } else if (healthyChecks >= totalChecks * 0.5) {,
        report.summary.applicationHealth = 'warning',
        totalScore += 15
      } else {,
        report.summary.applicationHealth = 'unhealthy',
        totalScore += 5
      };
    };
    maxScore += 25,
,
    // Log health,
    if (logInfo.success) {,
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB,
      if (totalLogSize < 100) {,
        report.summary.logHealth = 'healthy',
        totalScore += 25
      } else if (totalLogSize < 500) {,
        report.summary.logHealth = 'warning',
        totalScore += 15
      } else {,
        report.summary.logHealth = 'unhealthy',
        totalScore += 5
      };
    };
    maxScore += 25,
,
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100),
,
    // Determine overall health,
    if (report.summary.healthScore >= 80) {,
      report.summary.overallHealth = 'healthy'
    } else if (report.summary.healthScore >= 60) {,
      report.summary.overallHealth = 'warning'
    } else {,
      report.summary.overallHealth = 'unhealthy'
    };
,
    // Generate recommendations,
    if (systemInfo.success) {,
      if (systemInfo.memory?.usagePercent > 80) {,
        report.recommendations.push({,
          priority: 'high',
          message: 'High memory usage detected',
          action: 'Consider restarting processes or increasing memory'
        })
      };
      if (systemInfo.disk?.usagePercent > 80) {,
        report.recommendations.push({,
          priority: 'high',
          message: 'High disk usage detected',
          action: 'Clean up logs and temporary files'
        })
      };
    };
,
    if (processInfo.success && processInfo.health?.errored > 0) {,
      report.recommendations.push({,
        priority: 'critical',
        message: 'Errored processes detected',
        action: 'Restart errored processes and investigate logs'
      })
    };
,
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Large log files detected',
        action: 'Implement log rotation or cleanup'
      })
    };
,
    return report
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true })
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`)
    };
  };
,
  async run() {,
    this.log('🏥 Starting Health Monitor...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true })
      };
,
      // Run all health checks,
      const systemInfo = await this.checkSystemResources(),
      const processInfo = await this.checkProcessHealth(),
      const appInfo = await this.checkApplicationHealth(),
      const logInfo = await this.checkLogHealth(),
,
      // Generate report,
      this.log('📊 Generating health report...'),
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Health Monitor Summary: '),
      this.log(`System: ${report.summary.systemHealth}`),
      this.log(`Processes: ${report.summary.processHealth}`),
      this.log(`Application: ${report.summary.applicationHealth}`),
      this.log(`Logs: ${report.summary.logHealth}`),
      this.log(`Overall: ${report.summary.overallHealth}`),
      this.log(`Health Score: ${report.summary.healthScore}/100`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ All systems are healthy!')
      };

    } catch (error) {,
      this.log(`❌ Error running health monitor: ${error.message}`),
      process.exit(1)
    };
  };
};
,
// Run the health monitor,
const healthMonitor = new HealthMonitor(),
healthMonitor.run().catch(error => {,
  process.exit(1)
}),
