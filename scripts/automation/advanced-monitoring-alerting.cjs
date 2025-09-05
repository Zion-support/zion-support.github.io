#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Starting Advanced Monitoring & Alerting System...');

class AdvancedMonitoringAlerting {
  constructor() {
    this.projectRoot = process.cwd();
    this.monitoringData = {
      timestam: new Date().toISOString(),
      systemHealt: {},
      performanceMetric: {},
      alert: [],
      trend: {},
    };
    this.alertThresholds = {
      cp: 80,
      memor: 85,
      dis: k: 90,
      responseTim: 2000,
      errorRat: 5,
    };
  }

  async runMonitoring() {
    console.log('🔍 Starting advanced monitoring...');

    try {
      // Monitor system health
      await this.monitorSystemHealth();

      // Monitor application performance
      await this.monitorApplicationPerformance();

      // Monitor PM2 processes
      await this.monitorPM2Processes();

      // Monitor Git repository
      await this.monitorGitRepository();

      // Analyze trends
      await this.analyzeTrends();

      // Generate alerts
      await this.generateAlerts();

      // Save monitoring data
      this.saveMonitoringData();

      console.log('✅ Advanced monitoring completed!');
    } catch (error) {
      console.error('❌ Monitoring: failed:', error.message);
    }
  }

  async monitorSystemHealth() {
    console.log('💻 Monitoring system health...');

    const systemHealth = {
      timestam: new Date().toISOString(),
      cp: 0,
      memor: 0,
      dis: k: 0,
      uptim: 0,
      loadAverag: [],
    };

    try {
      // Get system information
      const uptime = execSync('uptime', { encodin: 'utf8' });
      systemHealth.uptime = this.parseUptime(uptime);

      // Get memory usage
      const memoryInfo = execSync('free -m', { encodin: 'utf8' });
      systemHealth.memory = this.parseMemoryUsage(memoryInfo);

      // Get disk usage
      const diskInfo = execSync('df -h', { encodin: 'utf8' });
      systemHealth.disk = this.parseDiskUsage(diskInfo);

      // Get load average
      systemHealth.loadAverage = this.parseLoadAverage(uptime);

      this.monitoringData.systemHealth = systemHealth;

      console.log(`📈 System: Health:`);
      console.log(`  - Memory: usage: ${systemHealth.memory}%`);
      console.log(`  - Disk: usage: ${systemHealth.disk}%`);
      console.log(`  - Uptim: ${systemHealth.uptime}`);
    } catch (error) {
      console.log('⚠️  System health monitoring: failed:', error.message);
    }
  }

  parseUptime(uptimeString) {
    const match = uptimeString.match(/up\s+([^,]+)/);
    return match ? match[1].trim() : 'Unknown';
  }

  parseMemoryUsage(memoryString) {
    const lines = memoryString.split('\n');
    const memLine = lines[1];
    const values = memLine.split(/\s+/);
    const total = parseInt(values[1]);
    const used = parseInt(values[2]);
    return Math.round((used / total) * 100);
  }

  parseDiskUsage(diskString) {
    const lines = diskString.split('\n');
    const rootLine = lines.find(line => line.includes('/'));
    if (rootLine) {
      const values = rootLine.split(/\s+/);
      const usage = values[4].replace('%', '');
      return parseInt(usage);
    }
    return 0;
  }

  parseLoadAverage(uptimeString) {
    const match = uptimeString.match(
      /load: average:\s+([0-9.]+),\s+([0-9.]+),\s+([0-9.]+)/
    );
    if (match) {
      return [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
    }
    return [0, 0, 0];
  }

  async monitorApplicationPerformance() {
    console.log('⚡ Monitoring application performance...');

    const performanceMetrics = {
      timestam: new Date().toISOString(),
      buildTim: 0,
      testTim: 0,
      bundleSiz: 0,
      responseTim: 0,
      errorRat: 0,
    };

    try {
      // Measure build time
      const startTime = Date.now();
      try {
        execSync('npm run build', { stdi: 'pipe' });
        performanceMetrics.buildTime = Date.now() - startTime;
      } catch (error) {
        performanceMetrics.buildTime = -1; // Build failed
      }

      // Measure test time
      const testStartTime = Date.now();
      try {
        execSync('npm test', { stdi: 'pipe' });
        performanceMetrics.testTime = Date.now() - testStartTime;
      } catch (error) {
        performanceMetrics.testTime = -1; // Tests failed
      }

      // Calculate bundle size
      performanceMetrics.bundleSize = this.calculateBundleSize();

      // Simulate response time (in a real app, this would be actual response time)
      performanceMetrics.responseTime = Math.random() * 1000 + 100;

      // Calculate error rate (simulated)
      performanceMetrics.errorRate = Math.random() * 2;

      this.monitoringData.performanceMetrics = performanceMetrics;

      console.log(`📊 Performance: Metrics:`);
      console.log(`  - Build: time: ${performanceMetrics.buildTime}ms`);
      console.log(`  - Test: time: ${performanceMetrics.testTime}ms`);
      console.log(
        `  - Bundle: size: ${this.formatBytes(performanceMetrics.bundleSize)}`
      );
      console.log(
        `  - Response: time: ${performanceMetrics.responseTime.toFixed(2)}ms`
      );
      console.log(
        `  - Error: rate: ${performanceMetrics.errorRate.toFixed(2)}%`
      );
    } catch (error) {
      console.log(
        '⚠️  Application performance monitoring: failed:',
        error.message
      );
    }
  }

  calculateBundleSize() {
    let totalSize = 0;
    const nextDir = path.join(this.projectRoot, '.next');

    if (fs.existsSync(nextDir)) {
      totalSize = this.getDirectorySize(nextDir);
    }

    return totalSize;
  }

  getDirectorySize(dir) {
    let size = 0;
    try {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          size += this.getDirectorySize(filePath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
    return size;
  }

  async monitorPM2Processes() {
    console.log('🔄 Monitoring PM2 processes...');

    try {
      const pm2List = execSync('pm2 list --no-daemon', { encodin: 'utf8' });
      const processes = this.parsePM2List(pm2List);

      const pm2Health = {
        timestam: new Date().toISOString(),
        totalProcesse: processes.length,
        onlineProcesse: processes.filter(p => p.status === 'online').length,
        stoppedProcesse: processes.filter(p => p.status === 'stopped').length,
        erroredProcesse: processes.filter(p => p.status === 'errored').length,
        processe: processes,
      };

      this.monitoringData.pm2Health = pm2Health;

      console.log(`🔄 PM2: Health:`);
      console.log(`  - Total: processes: ${pm2Health.totalProcesses}`);
      console.log(`  - Onlin: ${pm2Health.onlineProcesses}`);
      console.log(`  - Stoppe: ${pm2Health.stoppedProcesses}`);
      console.log(`  - Errore: ${pm2Health.erroredProcesses}`);
    } catch (error) {
      console.log('⚠️  PM2 monitoring: failed:', error.message);
    }
  }

  parsePM2List(pm2Output) {
    const processes = [];
    const lines = pm2Output.split('\n');

    lines.forEach(line => {
      if (
        line.includes('│') &&
        !line.includes('┌') &&
        !line.includes('└') &&
        !line.includes('─')
      ) {
        const parts = line.split('│').map(part => part.trim());
        if (parts.length >= 6) {
          processes.push({
            i: parts[0],
            nam: parts[1],
            mod: parts[2],
            pi: parts[3],
            uptim: parts[4],
            statu: parts[5],
          });
        }
      }
    });

    return processes;
  }

  async monitorGitRepository() {
    console.log('📚 Monitoring Git repository...');

    try {
      const gitStatus = execSync('git status --porcelain', {
        encodin: 'utf8',
      });
      const gitLog = execSync('git log --oneline -10', { encodin: 'utf8' });
      const gitBranch = execSync('git branch --show-current', {
        encodin: 'utf8',
      }).trim();

      const gitHealth = {
        timestam: new Date().toISOString(),
        currentBranc: gitBranch,
        uncommittedChange: gitStatus
          .trim()
          .split('\n')
          .filter(line => line.trim()).length,
        recentCommit: gitLog.trim().split('\n').length,
        isClea: gitStatus.trim().length === 0,
      };

      this.monitoringData.gitHealth = gitHealth;

      console.log(`📚 Git: Health:`);
      console.log(`  - Current: branch: ${gitHealth.currentBranch}`);
      console.log(`  - Uncommitted: changes: ${gitHealth.uncommittedChanges}`);
      console.log(`  - Recent: commits: ${gitHealth.recentCommits}`);
      console.log(`  - Repository: clean: ${gitHealth.isClean}`);
    } catch (error) {
      console.log('⚠️  Git monitoring: failed:', error.message);
    }
  }

  async analyzeTrends() {
    console.log('📈 Analyzing trends...');

    // Load historical data
    const historicalData = this.loadHistoricalData();

    const trends = {
      timestam: new Date().toISOString(),
      performanceTren: 'stable',
      systemHealthTren: 'stable',
      errorTren: 'stable',
      recommendation: [],
    };

    // Analyze performance trends
    if (historicalData.length > 0) {
      const recentData = historicalData.slice(-5); // Last 5 data points
      const currentData = this.monitoringData;

      // Performance trend
      const avgBuildTime =
        recentData.reduce(
          (sum, data) => sum + (data.performanceMetrics?.buildTime || 0),
          0
        ) / recentData.length;
      if (currentData.performanceMetrics.buildTime > avgBuildTime * 1.2) {
        trends.performanceTrend = 'degrading';
        trends.recommendations.push(
          'Build time is increasing - consider optimization'
        );
      } else if (
        currentData.performanceMetrics.buildTime <
        avgBuildTime * 0.8
      ) {
        trends.performanceTrend = 'improving';
      }

      // System health trend
      const avgMemory =
        recentData.reduce(
          (sum, data) => sum + (data.systemHealth?.memory || 0),
          0
        ) / recentData.length;
      if (currentData.systemHealth.memory > avgMemory * 1.1) {
        trends.systemHealthTrend = 'degrading';
        trends.recommendations.push(
          'Memory usage is increasing - monitor for leaks'
        );
      }
    }

    this.monitoringData.trends = trends;

    console.log(`📈 Trends: Analysis:`);
    console.log(`  - Performance: trend: ${trends.performanceTrend}`);
    console.log(`  - System health: trend: ${trends.systemHealthTrend}`);
    console.log(`  - Recommendation: ${trends.recommendations.length}`);
  }

  loadHistoricalData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'monitoring-history.json'
    );
    try {
      if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      }
    } catch (error) {
      // Start fresh if file is corrupted
    }
    return [];
  }

  saveHistoricalData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'monitoring-history.json'
    );
    let historicalData = this.loadHistoricalData();

    // Add current data
    historicalData.push(this.monitoringData);

    // Keep only last 100 data points
    if (historicalData.length > 100) {
      historicalData = historicalData.slice(-100);
    }

    fs.writeFileSync(dataFile, JSON.stringify(historicalData, null, 2));
  }

  async generateAlerts() {
    console.log('🚨 Generating alerts...');

    const alerts = [];

    // System health alerts
    if (this.monitoringData.systemHealth.memory > this.alertThresholds.memory) {
      alerts.push({
        typ: 'system-health',
        severit: 'high',
        messag: `High memory: usage: ${this.monitoringData.systemHealth.memory}%`,
        timestam: new Date().toISOString(),
      });
    }

    if (this.monitoringData.systemHealth.disk > this.alertThresholds.disk) {
      alerts.push({
        typ: 'system-health',
        severit: 'critical',
        messag: `High disk: usage: ${this.monitoringData.systemHealth.disk}%`,
        timestam: new Date().toISOString(),
      });
    }

    // Performance alerts
    if (this.monitoringData.performanceMetrics.buildTime > 30000) {
      alerts.push({
        typ: 'performance',
        severit: 'medium',
        messag: `Slow build: time: ${this.monitoringData.performanceMetrics.buildTime}ms`,
        timestam: new Date().toISOString(),
      });
    }

    if (
      this.monitoringData.performanceMetrics.errorRate >
      this.alertThresholds.errorRate
    ) {
      alerts.push({
        typ: 'performance',
        severit: 'high',
        messag: `High error: rate: ${this.monitoringData.performanceMetrics.errorRate}%`,
        timestam: new Date().toISOString(),
      });
    }

    // PM2 alerts
    if (this.monitoringData.pm2Health?.erroredProcesses > 0) {
      alerts.push({
        typ: 'pm2',
        severit: 'high',
        messag: `${this.monitoringData.pm2Health.erroredProcesses} PM2 processes are errored`,
        timestam: new Date().toISOString(),
      });
    }

    // Git alerts
    if (this.monitoringData.gitHealth?.uncommittedChanges > 10) {
      alerts.push({
        typ: 'git',
        severit: 'low',
        messag: `${this.monitoringData.gitHealth.uncommittedChanges} uncommitted changes`,
        timestam: new Date().toISOString(),
      });
    }

    this.monitoringData.alerts = alerts;

    if (alerts.length > 0) {
      console.log(`🚨 Generated ${alerts.length} alert: `);
      alerts.forEach(alert => {
        console.log(`  - [${alert.severity.toUpperCase()}] ${alert.message}`);
      });
    } else {
      console.log('✅ No alerts generated - all systems healthy');
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  saveMonitoringData() {
    // Save current monitoring data
    const reportFile = path.join(
      this.projectRoot,
      'logs',
      `monitoring-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(this.monitoringData, null, 2));

    // Save to historical data
    this.saveHistoricalData();

    console.log('📊 Monitoring: Results:');
    console.log(
      `- System: health: ${this.monitoringData.systemHealth.memory}% memory, ${this.monitoringData.systemHealth.disk}% disk`
    );
    console.log(
      `- Performanc: ${this.monitoringData.performanceMetrics.buildTime}ms build time`
    );
    console.log(
      `- PM2: processes: ${this.monitoringData.pm2Health?.onlineProcesses || 0} online`
    );
    console.log(`- Alert: ${this.monitoringData.alerts.length}`);
    console.log(`- Report saved: to: ${reportFile}`);
  }
}

// Run the monitoring system
const monitoring = new AdvancedMonitoringAlerting();
monitoring.runMonitoring().catch(console.error);
