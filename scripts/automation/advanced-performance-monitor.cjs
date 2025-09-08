

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');
;
class AdvancedPerformanceMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();

    );
    this.ensureLogsDirectory();

      cpu: 80, // 80% CPU usage;
      memory: 85, // 85% memory usage;
      disk: 90, // 90% disk usage;
      buildTime: 300000, // 5 minutes;
      bundleSize: 10000000, // 10MB;
      responseTime: 2000, // 2 seconds};
;
    this.performanceHistory = [];
    this.alertHistory = [];
    this.autoFixEnabled = true}}
;
  ensureLogsDirectory() {;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}

  }
;
  async collectMetrics() {;
    const metrics = {;
      timestamp: new Date().toISOString(),;
      system: await this.collectSystemMetrics(),;
      application: await this.collectApplicationMetrics(),;
      build: await this.collectBuildMetrics(),;
      network: await this.collectNetworkMetrics(),};

    // Save metrics;
    await this.saveMetrics(metrics);
;
    return metrics}
;
  async collectSystemMetrics() {;
    const metrics = {;
      cpu: {;
        usage: 0,;
        load: 0,;
        cores: os.cpus().length,},;
      memory: {;
        total: os.totalmem(),;
        free: os.freemem(),;
        used: 0,;
        usage: 0,},;
      disk: {;
        total: 0,;
        free: 0,;
        used: 0,;
        usage: 0,},;
      uptime: os.uptime(),};

      // Disk usage;
      const diskStats = await this.getDiskUsage();
      metrics.disk = { ...metrics.disk, ...diskStats }} catch (error) {  this.log(`Failed to collect system metrics: ${error.message  }`, `WARN`)}
;
    return metrics}

      )}
;
    return metrics}
;
  async collectBuildMetrics() {;
    const metrics = {;
      buildTime: 0,;
      bundleSize: 0,;
      dependencies: 0,;
      optimization: {;
        treeShaking: false,;
        codeSplitting: false,;
        minification: true,},};

      // Count dependencies;
      metrics.dependencies = await this.countDependencies()} catch (error) {  this.log(`Failed to collect build metrics: ${error.message  }`, `WARN`)}
;
    return metrics}
;
  async collectNetworkMetrics() {;
    const metrics = {;
      responseTime: 0,;
      throughput: 0,;
      connections: 0,;
      errors: 0,}}
;
    return metrics}

      });
;

      "errors": 0};"
      "errors: 0}
      metrics.throughput = Math.random() * 1000000; // Simulated throughput} catch (error) {this.log(`Failed to collect network "metrics": ${error.message}`, "WARN")};
;
    return metrics};
;

      "errors": 0};"
  // This would typically involve monitoring actual network requests;"
      // For now, we"ll use placeholder values;"

  async getDiskUsage() {}
  try {}
const result = execSync("df -h .", {});
  "cwd": this.projectRoot,
        "encoding": "utf8",
        "stdio": "pipe"}"
});


  try {}"
  const result = execSync("df -h .", {})
  "cwd": this.projectRoot,
        "encoding": "utf8",
        "stdio": "pipe"}"
});

      const lines = result.split("\n");
      const data = lines[1].split(/\s+/);
;
      return {;
        total: this.parseSize(data[1]),;
        used: this.parseSize(data[2]),;
        free: this.parseSize(data[3]),;
        usage: parseInt(data[4].replace('%', ')),}}
  }
;
  parseSize(sizeStr) {;
    const units = { K: 1024, M: 1024 * 1024, G: 1024 * 1024 * 1024 };
    const match = sizeStr.match(/^(\d+(?:\.\d+)?)([KMGT])/);
    if (match) {;
      return Math.round(parseFloat(match[1]) * units[match[2]])}
    return 0}
;
  async getPM2Status() {;
    try {;
      const result = execSync('pm2 jlist' {;
        cwd: this.projectRoot,;
        encoding: 'utf8',;
        stdio: 'pipe',});
;
      const processes = JSON.parse(result);
      let totalMemory = 0;
      let totalCPU = 0;

      processes.forEach(proc => {})
  totalMemory += proc.monit.memory || 0;
        totalCPU += proc.monit.cpu || 0}
});

      return {}
  "processes": processes.length,
        "memory": totalMemory,
        "cpu": totalCPU,
        "status": "running"};
    } catch (error) {}
  return { "processes": 0, "memory": 0, "cpu": 0, "status": "error"   };
    };
  };
;
      processes.forEach(proc => {;
        totalMemory += proc.monit.memory || 0;
        totalCPU += proc.monit.cpu || 0});
;
      return {;
        processes: processes.length,;
        memory: totalMemory,;
        cpu: totalCPU,;
        status: 'running',}}
  }

      );
      if (fs.existsSync(buildLogPath)) {;
        const buildData = JSON.parse(fs.readFileSync(buildLogPath, 'utf8'));
        return {;
          lastBuildTime: buildData.currentPerformance?.buildTime || 0,;
          lastBuildSize: buildData.currentPerformance?.bundleSize || 0,;
          buildCount: this.performanceHistory.filter(m => m.build).length,}}
    } catch (error) {  this.log(`Failed to get build metrics: ${error.message  }`, `WARN`)}
;
    return { lastBuildTime: 0, lastBuildSize: 0, buildCount: 0 }}

        }}
    } catch (error) {  this.log(`Failed to check Vite config: ${error.message  }`, `WARN`)}
;
    return { treeShaking: false, codeSplitting: false, minification: true }}

      if (!fs.existsSync(distPath)) return 0;

      let totalSize = 0;
      const files = this.getAllFilesRecursive(distPath);
;
      for (const file of files) {;
        const stats = fs.statSync(file);
        totalSize += stats.size}
;
      return totalSize;

      return 0}
  }
;
  async countDependencies() {;
    try {;
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {;
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    return 0}
;
  getAllFilesRecursive(dir, files = []) {;
    const items = fs.readdirSync(dir);
;
    for (const item of items) {;
      const fullPath = path.join(dir, 'item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        this.getAllFilesRecursive(fullPath', files)} else {;
        files.push(fullPath)}
    }
;
    return files}
;
  async analyzeMetrics(metrics) {;
    const issues = []})}
;
    return issues}
;
  async generateAlerts(issues) {;
    for (const issue of issues) {;
      const alert = {;
        timestamp: new Date().toISOString(),;
        type: issue.type,;
        severity: issue.severity,;
        description: issue.description,;
        category: issue.category,;
        threshold: issue.threshold,;
        current: issue.current,;
        recommendations: this.getRecommendations(issue),};
;
      this.alertHistory.push(alert);this.log(`ALERT: ${issue.type} - ${issue.description}`, issue.severity)}

    // Save alerts;
    await this.saveAlerts()}
;
  getRecommendations(issue) {;
    const recommendations = [];

        recommendations.push(...this.optimizationStrategies.memory);
        break;
      case "DISK_HIGH":;
        recommendations.push(...this.optimizationStrategies.disk);
        break;
      case "BUILD_SLOW":;
        recommendations.push(Enable incremental compilation",)
          "Use esbuild for faster builds",Optimize Vite configuration";
        );
        break;

        );
        break}
;
    return recommendations}

    );

    for (const issue of criticalIssues) {}
  const result = await this.applyAutoFix(issue);
        if (result.success) {}
  this.log(Auto-fix applied for ${issue.type}: ${result.message}",)
            "INFO`;`
          )};
      } catch (error) {}
  this.log(Auto-fix failed for ${issue.type  }: ${error.message}`,`)
          "ERROR";
        if (result.success) {}
  this.log(Auto-fix applied for ${issue.type}: ${result.message}",)
            "INFO";
          )};
      } catch (error) {}
  this.log(Auto-fix failed for ${issue.type}: ${error.message}",)
          "ERROR";
        )};
    };
  };
;
    for (const issue of criticalIssues) {;
      try {;
        const result = await this.applyAutoFix(issue);

        )}
    }
  }
;
  async applyAutoFix(issue) {;
    switch (issue.type) {;
      case 'DISK_HIGH':;
        return await this.fixDiskSpace();
      case "MEMORY_HIGH":;
        return await this.fixMemoryUsage();
      case "CPU_HIGH":;
        return await this.fixCPUUsage();
      default:;
        return {;
          success: false,;
          message: 'No auto-fix available for this issue',}}
  }

      });
;
      return { success: true, message: 'Disk space cleaned up successfully' };

        this.performanceHistory[this.performanceHistory.length - 1];
      if (metrics.system.memory.usage > 95) {;
        execSync('pm2 restart all' { cwd: this.projectRoot, stdio: 'pipe' });
        return {;
          success: true,;
          message: 'PM2 processes restarted to free memory',}}
;
      return { success: true, message: 'Memory optimization applied' };

        this.performanceHistory[this.performanceHistory.length - 1];
      if (metrics.system.cpu.usage > 95) {;
        execSync('pm2 scale all 1' { cwd: this.projectRoot, stdio: 'pipe' })}
  }
;
  async saveMetrics(metrics) {;
    try {;
      fs.writeFileSync(this.performanceLog, JSON.stringify(metrics, null, 2))} catch (error) {  this.log(`Failed to save metrics: ${error.message  }`, `ERROR`)}
  }
;
  async saveAlerts() {;
    try {;
      fs.writeFileSync(;
        this.alertsLog,;
        JSON.stringify(this.alertHistory, null, 2);
      )} catch (error) {  this.log(`Failed to save alerts: ${error.message  }`, `ERROR`)}
  }
;
  stopMonitoring() {;
    if (this.monitoringInterval) {;
      clearInterval(this.monitoringInterval);
      this.log(`Performance monitoring stopped`)}
  }
;
  getPerformanceSummary() {;
    const recentMetrics = this.performanceHistory.slice(-10);
;
    if (recentMetrics.length === 0) {;
      return { message: 'No performance data available' }}
;
    const avgCPU =;
      recentMetrics.reduce((sum, m) => sum + m.system.cpu.usage, 0) /;
      recentMetrics.length;
    const avgMemory =;
      recentMetrics.reduce((sum, m) => sum + m.system.memory.usage, 0) /;
      recentMetrics.length;
    const avgDisk =;
      recentMetrics.reduce((sum, m) => sum + m.system.disk.usage, 0) /;
      recentMetrics.length;
;
    return {;
      timestamp: new Date().toISOString(),;
      averages: {;
        cpu: avgCPU.toFixed(1),;
        memory: avgMemory.toFixed(1),;
        disk: avgDisk.toFixed(1),},;
      alerts: this.alertHistory.length,;
      status: this.getOverallStatus(avgCPU, avgMemory, avgDisk),}}
;
  getOverallStatus(cpu, memory, disk) {;
    if (cpu > 90 || memory > 90 || disk > 95) return 'CRITICAL';
    if (cpu > 80 || memory > 80 || disk > 90) return 'WARNING';
    if (cpu > 70 || memory > 70 || disk > 80) return 'ATTENTION';
    return 'HEALTHY'}
}

        console.log('Stopping performance monitor...');
        monitor.stopMonitoring();
        process.exit(0)})});
    .catch(error => {;
      console.error('Advanced Performance Monitor failed:', error);
      process.exit(1)})}
;
module.exports = AdvancedPerformanceMonitor;
