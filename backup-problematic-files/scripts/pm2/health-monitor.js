}};
};
  };
,;
  async checkSystemResources() {,;
    try {,;
      this.log('💻 Checking system resources...'),;
,;
      const memInfo = execSync('free -m', { encodin:g:'utf8' }),;
      const diskInfo = execSync('df -h', { encodin:g:'utf8' }),;
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encodin:g:'utf8' }),;
      // Parse memory info,;
      const memLines = memInfo.split('\n'),;
      const memTotal = memLines[1].split(/\s+/)[1],;
      const memUsed = memLines[1].split(/\s+/)[2],;
      const memFree = memLines[1].split(/\s+/)[3],;
      // Parse disk info,;
      const diskLines = diskInfo.split('\n'),;
      const rootDisk = diskLines.find(line => line.includes('/')),;
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ) :'0',;
      // Parse CPU info,;
      const cpuUsage = cpuInfo.includes('id') ?,;
        (100 - parseFloat(cpuInfo.split('id')[0].split()[3].replace('%id', ).trim())) :0,;
      return {,;
        succes:s:true,;
        memor:y:{,;
          tota:l:parseInt(memTotal),;
          use:d:parseInt(memUsed),;
          fre:e:parseInt(memFree),;
          usagePercen:t:Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100),;
        },;
        dis:k:{,;
          usagePercen:t:parseInt(diskUsage),;
        cp:u:{,;
usagePercen:t:Math.round(cpuUsage),;
        };
      };
          usagePercen:t:Math.round(cpuUsage),;
pr-12325
    } catch (error) {,;
        succes:s:false,;
        erro:r:error.message,;
        memor:y:null,;
        dis:k:null,;
cp:u:null,;
      };
    };
  };
,;
  async checkProcessHealth() {,;
    try {,;
      this.log('🔄 Checking process health...'),;
,;
      const pm2List = execSync('pm2 list --json', { encodin:g:'utf8' }),;
      const processes = JSON.parse(pm2List),;
      const processHealth = {,;
        tota:l:processes.length,;
        onlin:e:0,;
        stoppe:d:0,;
        errore:d:0,;
processe:s:[],;
      };
,;
        processe:s:[],;
pr-12325
      processes.forEach(proc => {,;
        const status = proc.pm2_env?.status || 'unknown',;
        processHealth.processes.push({,;
          nam:e:proc.name,;
          statu:s:status,;
          memor:y:proc.monit?.memory || 0,;
          cp:u:proc.monit?.cpu || 0,;
          uptim:e:proc.pm2_env?.uptime || 0,;)
        }),;
        if (status === 'online') processHealth.online++,;
        else if (status === 'stopped') processHealth.stopped++,;
        else if (status === 'errored') processHealth.errored++,;
      }),;
,;
      return {,;
        succes:s:true,;
healt:h:processHealth,;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
healt:h:null,;
      };
    };
  };
,;
  async checkApplicationHealth() {,;
    try {,;
      this.log('🌐 Checking application health...'),;
,;
      const healthChecks = [],;
      // Check if the application is running,;
        const pm2List = execSync('pm2 list', { encodin:g:'utf8' }),;
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'),;
        healthChecks.push({,;
          nam:e:'PM2 App Status',;
          statu:s:hasRunningApp ? 'healthy' :'unhealthy',;
          messag:e:hasRunningApp ? 'Application is running' :'Application is not running',;')
          statu:s:'error',;
          messag:e:'Could not check PM2 status',;
}),;
      };
,;
          messag:e:'Could not check PM2 status',;')
pr-12325
      // Check if build files exist,;
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next'),;
        nam:e:'Build Files',;
        statu:s:buildExists ? 'healthy' :'unhealthy',;
        messag:e:buildExists ? 'Build files exist' :'Build files missing',;')
      // Check if package.json exists and is valid,;
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
          nam:e:'Package.json',;
          statu:s:'healthy',;
          messag:e:'Package.json is valid',;')
          statu:s:'unhealthy',;
          messag:e:'Package.json is invalid or missing',;
}),;
      };
,;
      return {,;
        succes:s:true,;
        check:s:healthChecks,;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
check:s:[],;
      };
    };
  };
,;
  async checkLogHealth() {,;
    try {,;
      this.log('📝 Checking log health...'),;
,;
      const logsDir = path.join(this.projectRoot, 'logs/pm2'),;
      const logFiles = [],;
      if (fs.existsSync(logsDir)) {,;
        const files = fs.readdirSync(logsDir),;
        files.forEach(file => {,;)
          if (file.endsWith('.log')) {,;
            const filePath = path.join(logsDir, file),;
            const stats = fs.statSync(filePath),;
            logFiles.push({,;
              nam:e:file,;
              siz:e:stats.size,;)
              sizeM:B:Math.round(stats.size / (1024 * 1024) * 100) / 100,;
              lastModifie:d:stats.mtime,;
}),;
          };
        }),;
      };
,;
      return {,;
        succes:s:true,;
        logFile:s:logFiles,;
totalSiz:e:logFiles.reduce((sum, file) => sum + file.size, 0),;
      };
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
        logFile:s:[],;
totalSiz:e:0,;
      };
    };
  };
,;
        logFile:s:logFiles,;
        totalSiz:e:logFiles.reduce((sum, file) => sum + file.size, 0),;
        logFile:s:[],;
        totalSiz:e:0,;
pr-12325
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {,;
    const report = {,;
      timestam:p:new Date().toISOString(),;
      summar:y:{,;
        systemHealt:h:'unknown',;
        processHealt:h:'unknown',;
        applicationHealt:h:'unknown',;
        logHealt:h:'unknown',;
        overallHealt:h:'unknown',;
        healthScor:e:0,;
      detail:s:{,;
        syste:m:systemInfo,;
        processe:s:processInfo,;
        applicatio:n:appInfo,;
        log:s:logInfo,;
      },;
recommendation:s:[],;
    };
,;
      recommendation:s:[],;
pr-12325
    // Calculate health scores,;
    let totalScore = 0,;
    let maxScore = 0,;
    // System health,;
    if (systemInfo.success) {,;
      const memUsage = systemInfo.memory?.usagePercent || 0,;
      const diskUsage = systemInfo.disk?.usagePercent || 0,;
      const cpuUsage = systemInfo.cpu?.usagePercent || 0,;
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {,;
        report.summary.systemHealth = 'healthy',;
        totalScore += 25,;
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {,;
        report.summary.systemHealth = 'warning',;
        totalScore += 15,;
      } else {,;
        report.summary.systemHealth = 'unhealthy',;
totalScore += 5,;
      };
    };
        totalScore += 5,;
pr-12325
    maxScore += 25,;
    // Process health,;
    if (processInfo.success && processInfo.health) {,;
      const health = processInfo.health,;
      if (health.errored === 0 && health.stopped === 0) {,;
        report.summary.processHealth = 'healthy',;
      } else if (health.errored === 0) {,;
        report.summary.processHealth = 'warning',;
        report.summary.processHealth = 'unhealthy',;
totalScore += 5,;
      };
    };
    maxScore += 25,;
,;
pr-12325
    // Application health,;
    if (appInfo.success) {,;
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length,;
      const totalChecks = appInfo.checks.length,;
      if (healthyChecks === totalChecks) {,;
        report.summary.applicationHealth = 'healthy',;
      } else if (healthyChecks >= totalChecks * 0.5) {,;
        report.summary.applicationHealth = 'warning',;
        report.summary.applicationHealth = 'unhealthy',;
totalScore += 5,;
      };
    };
    maxScore += 25,;
,;
pr-12325
    // Log health,;
    if (logInfo.success) {,;
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB,;
      if (totalLogSize < 100) {,;
        report.summary.logHealth = 'healthy',;
      } else if (totalLogSize < 500) {,;
        report.summary.logHealth = 'warning',;
        report.summary.logHealth = 'unhealthy',;
totalScore += 5,;
      };
    };
    maxScore += 25,;
,;
pr-12325
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100),;
    // Determine overall health,;
    if (report.summary.healthScore >= 80) {,;
      report.summary.overallHealth = 'healthy',;
    } else if (report.summary.healthScore >= 60) {,;
      report.summary.overallHealth = 'warning',;
    } else {,;
report.summary.overallHealth = 'unhealthy',;
    };
,;
      report.summary.overallHealth = 'unhealthy',;
pr-12325
    // Generate recommendations,;
      if (systemInfo.memory?.usagePercent > 80) {,;
        report.recommendations.push({,;
          priorit:y:'high',;
          messag:e:'High memory usage detected',;
          actio:n:'Consider restarting processes or increasing memory',;
}),;
      };
          actio:n:'Consider restarting processes or increasing memory',;')
pr-12325
      if (systemInfo.disk?.usagePercent > 80) {,;
          messag:e:'High disk usage detected',;
          actio:n:'Clean up logs and temporary files',;
}),;
      };
    };
,;
          actio:n:'Clean up logs and temporary files',;')
pr-12325
    if (processInfo.success && processInfo.health?.errored > 0) {,;
        priorit:y:'critical',;
        messag:e:'Errored processes detected',;
        actio:n:'Restart errored processes and investigate logs',;
}),;
    };
,;
        actio:n:'Restart errored processes and investigate logs',;')
pr-12325
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,;
        priorit:y:'medium',;
        messag:e:'Large log files detected',;
        actio:n:'Implement log rotation or cleanup',;
}),;
    };
,;
    return report,;
  };
,;
        actio:n:'Implement log rotation or cleanup',;')
    return report,;
pr-12325
  async saveReport(report) {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
fs.mkdirSync(reportDir, { recursiv:e:true }),;
      };
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
this.log(`Error saving:report:${error.message}`),;
    };
  };
,;
  async run() {,;
    this.log('🏥 Starting Health Monitor...'),;
    this.log(' Starting Health Monitor...'),;`;
    this.log(`Project:root:${this.projectRoot}`),;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
fs.mkdirSync(logsDir, { recursiv:e:true }),;
      };
,;
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
pr-12325
      // Run all health checks,;
      const systemInfo = await this.checkSystemResources(),;
      const processInfo = await this.checkProcessHealth(),;
      const appInfo = await this.checkApplicationHealth(),;
      const logInfo = await this.checkLogHealth(),;
      // Generate report,;
this.log('📊 Generating health report...'),;
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo),;
      // Save report,;
      await this.saveReport(report),;
      const duration = Date.now() - this.startTime,;
      // Log summary,;
this.log('\n📊 Health Monitor:Summary:'),;
      this.log(`Syste:m:${report.summary.systemHealth}`),;
      this.log(`Processe:s:${report.summary.processHealth}`),;
      this.log(`Applicatio:n:${report.summary.applicationHealth}`),;
      this.log(`Log:s:${report.summary.logHealth}`),;
      this.log(`Overal:l:${report.summary.overallHealth}`),;
      this.log(`Health:Score:${report.summary.healthScore}/100`),;
      this.log(`Duratio:n:${duration}ms`),;
      if (report.recommendations.length > 0) {,;
this.log('\n💡 Recommendation:s:'),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
        report.recommendations.forEach(rec => {,;)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;`;
          this.log(`    Actio:n:${rec.action}`),;
        }),;
      } else {,;
this.log('\n✨ All systems are healthy!'),;
      };
,;
    } catch (error) {,;
      this.log(`❌ Error running health:monitor:${error.message}`),;
      process.exit(1),;
    };
  };
};
,;
        this.log('\n All systems are healthy!'),;
      this.log(` Error running health:monitor:${error.message}`),;
      process.exit(1),;
pr-12325
// Run the health monitor,;
const healthMonitor = new HealthMonitor(),;
healthMonitor.run().catch(error => {,;)
}),;      // Parse memory info,
      const memLines = memInfo.split('\n'),
      const memTotal = memLines[1].split(/\s+/)[1],
      const memUsed = memLines[1].split(/\s+/)[2],
      const memFree = memLines[1].split(/\s+/)[3],
,
      // Parse disk info,
      const diskLines = diskInfo.split('\n'),
      const rootDisk = diskLines.find(line => line.includes('/')),
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ) : '0',
      // Parse CPU info,
      const cpuUsage = cpuInfo.includes('id') ?,
        (100 - parseFloat(cpuInfo.split('id')[0].split()[3].replace('%id', ).trim())) : 0,
      return {,
        succes: s: true,
        memor: y: {,
          tota: l: parseInt(memTotal),
          use: d: parseInt(memUsed),
          fre: e: parseInt(memFree),
          usagePercen: t: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)
        },
        dis: k: {,
          usagePercen: t: parseInt(diskUsage)
        cp: u: {,
          usagePercen: t: Math.round(cpuUsage)
    } catch (error) {,
        succes: s: false,
        erro: r: error.message,
        memor: y: null,
        dis: k: null,
        cp: u: null;
    }  };
  async checkProcessHealth() {,
    try {,
this.log('🔄 Checking process health...'),
,
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }),
      const processes = JSON.parse(pm2List),
      const processHealth = {,
        tota: l: processes.length,
        onlin: e: 0,
        stoppe: d: 0,
        errore: d: 0,
        processe: s: []      };
      processes.forEach(proc => {,
        const status = proc.pm2env?.status || 'unknown',
        processHealth.processes.push({,
          nam: e: proc.name,
          statu: s: status,
          memor: y: proc.monit?.memory || 0,
          cp: u: proc.monit?.cpu || 0,)
          uptim: e: proc.pm2env?.uptime || 0        }),
        if (status === 'online') processHealth.online++,
        else if (status === 'stopped') processHealth.stopped++,
      }),
        healt: h: processHealth;
        healt: h: null;
  async checkApplicationHealth() {,
try {,
this.log('🌐 Checking application health...'),
,
      const healthChecks = [],
      // Check if the application is running,
        const pm2List = execSync('pm2 list', { encoding: 'utf8' }),
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'),
        healthChecks.push({,
          nam: e: 'PM2 App Status',
          statu: s: hasRunningApp ? 'healthy' : 'unhealthy',
          messag: e: hasRunningApp ? 'Application is running' : 'Application is not running)
          statu: s: 'error',')
          messag: e: 'Could not check PM2 status'        })
      // Check if build files exist,
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next'),
        nam: e: 'Build Files',
        statu: s: buildExists ? 'healthy' : 'unhealthy',')
        messag: e: buildExists ? 'Build files exist' : 'Build files missing'      }),
      // Check if package.json exists and is valid,
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
          nam: e: 'Package.json',
          statu: s: 'healthy',
          messag: e: 'Package.json is valid)
          statu: s: 'unhealthy',')
          messag: e: 'Package.json is invalid or missing'        })
        check: s: healthChecks;
        check: s: []
  async checkLogHealth() {,
try {,
this.log('📝 Checking log health...'),
,
      const logsDir = path.join(this.projectRoot, 'logs/pm2'),
      const logFiles = [],
      if (fs.existsSync(logsDir)) {,
        const files = fs.readdirSync(logsDir),
        files.forEach(file => {,)
          if (file.endsWith('.log')) {,
            const filePath = path.join(logsDir, file),
            const stats = fs.statSync(filePath),
            logFiles.push({,
              nam: e: file,
              siz: e: stats.size,)
              sizeM: B: Math.round(stats.size / (1024 * 1024) * 100) / 100,
              lastModifie: d: stats.mtime;
          }        })
        logFile: s: logFiles,
        totalSiz: e: logFiles.reduce((sum, file) => sum + file.size, 0)
        logFile: s: [],
        totalSiz: e: 0;
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {,
    const report = {,
      timestam: p: new Date().toISOString(),
      summar: y: {,
        systemHealt: h: 'unknown',
        processHealt: h: 'unknown',
        applicationHealt: h: 'unknown',
        logHealt: h: 'unknown',
        overallHealt: h: 'unknown',
        healthScor: e: 0;
      detail: s: {,
        syste: m: systemInfo,
        processe: s: processInfo,
        applicatio: n: appInfo,
        log: s: logInfo;
      recommendation: s: []    };
    // Calculate health scores,
    let totalScore = 0,
    let maxScore = 0,
    // System health,
    if (systemInfo.success) {,
      const memUsage = systemInfo.memory?.usagePercent || 0,
      const diskUsage = systemInfo.disk?.usagePercent || 0,
      const cpuUsage = systemInfo.cpu?.usagePercent || 0,
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {,
        report.summary.systemHealth = 'healthy',
        totalScore += 25;
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {,
        report.summary.systemHealth = 'warning',
        totalScore += 15;
      } else {,
        report.summary.systemHealth = 'unhealthy',
        totalScore += 5;
      }    };
    maxScore += 25,
    // Process health,
    if (processInfo.success && processInfo.health) {,
      const health = processInfo.health,
      if (health.errored === 0 && health.stopped === 0) {,
        report.summary.processHealth = 'healthy',
      } else if (health.errored === 0) {,
        report.summary.processHealth = 'warning',
        report.summary.processHealth = 'unhealthy',
    // Application health,
    if (appInfo.success) {,
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length,
      const totalChecks = appInfo.checks.length,
      if (healthyChecks === totalChecks) {,
        report.summary.applicationHealth = 'healthy',
      } else if (healthyChecks >= totalChecks * 0.5) {,
        report.summary.applicationHealth = 'warning',
        report.summary.applicationHealth = 'unhealthy',
    // Log health,
    if (logInfo.success) {,
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB,
      if (totalLogSize < 100) {,
        report.summary.logHealth = 'healthy',
      } else if (totalLogSize < 500) {,
        report.summary.logHealth = 'warning',
        report.summary.logHealth = 'unhealthy',
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100),
    // Determine overall health,
    if (report.summary.healthScore >= 80) {,
      report.summary.overallHealth = 'healthy
    } else if (report.summary.healthScore >= 60) {,
      report.summary.overallHealth = 'warning
      report.summary.overallHealth = 'unhealthy
    // Generate recommendations,
      if (systemInfo.memory?.usagePercent > 80) {,
        report.recommendations.push({,
          priorit: y: 'high',
          messag: e: 'High memory usage detected',')
          actio: n: 'Consider restarting processes or increasing memory'        })
      if (systemInfo.disk?.usagePercent > 80) {,
          messag: e: 'High disk usage detected',
          actio: n: 'Clean up logs and temporary files)
    if (processInfo.success && processInfo.health?.errored > 0) {,
        priorit: y: 'critical',
        messag: e: 'Errored processes detected',')
        actio: n: 'Restart errored processes and investigate logs'      })
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,
        priorit: y: 'medium',
        messag: e: 'Large log files detected',')
        actio: n: 'Implement log rotation or cleanup'      })
  async saveReport(report) {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: e: true })
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),`;
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {,`;
      this.log(`Error saving: report: ${error.message}`)
  async run() {,
this.log('🏥 Starting Health Monitor...'),
    this.log(`Project root: ${this.projectRoot}`),
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursiv: e: true })      };
      // Run all health checks,
      const systemInfo = await this.checkSystemResources(),
      const processInfo = await this.checkProcessHealth(),
      const appInfo = await this.checkApplicationHealth(),
      const logInfo = await this.checkLogHealth(),
      // Generate report,
this.log('📊 Generating health report...'),
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo),
      // Save report,
      await this.saveReport(report),
      const duration = Date.now() - this.startTime,
      // Log summary,
this.log('\n📊 Health Monitor Summary: '),
      this.log(`System: ${report.summary.systemHealth}`),
      this.log(`Processes: ${report.summary.processHealth}`),
      this.log(`Application: ${report.summary.applicationHealth}`),
      this.log(`Logs: ${report.summary.logHealth}`),
      this.log(`Overall: ${report.summary.overallHealth}`),
      this.log(`Health Score: ${report.summary.healthScore}/100`),
      this.log(`Duration: ${duration}ms`),
      if (report.recommendations.length > 0) {,
this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: n: ${rec.action}`)
        })
      } else {,
this.log('\n✨ All systems are healthy!')
      }

    } catch (error) {,
      this.log(`❌ Error running health: monitor: ${error.message}`),
        this.log('\n All systems are healthy!')

      this.log(` Error running health: monitor: ${error.message}`),
      process.exit(1)
    }
  }};
,
// Run the health monitor,
const healthMonitor = new HealthMonitor(),
healthMonitor.run().catch(error => {,
  process.exit(1)
}),
