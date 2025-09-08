#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/**
 * Monitoring Automation
 * Sets up comprehensive monitoring for the application
 */

const fs = require('fs')
<<<<<<< HEAD
const path = require('path')
  log(message, type = 'INFO')
    console.error('Monitoring automation "failed")
const fs = require('fs')
const path = require('path')


const fs = require('fs')
const path = require('path')

const fs = require('fs');
const path = require('path');
  log(message, type = 'INFO')
=======
<<<<<<< HEAD
const path = require('path')

class MonitoringAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logDir = path.join(this.projectRoot, 'logs');
    this.alertsDir = path.join(this.projectRoot, 'alerts');
    this.metricsFile = path.join(this.logDir, 'metrics.json');
    this.alertsFile = path.join(this.alertsDir, 'alerts.json');
    
    this.thresholds = {
      cpu: 80, // CPU usage percentage
      memory: 85, // Memory usage percentage
      disk: 90, // Disk usage percentage
      responseTime: 5000, // Response time in ms
      errorRate: 5, // Error rate percentage
      uptimeMinimum: 99.5 // Minimum uptime percentage
    };
    
    // Ensure directories exist
    [this.logDir, this.alertsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir { recursive: true })}
    })}

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logDir, 'monitoring.log');
    fs.appendFileSync(logFile, logMessage + '\n')}

  async collectSystemMetrics() {
    this.log('Collecting system metrics...');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      system: {},
      application: {},
      performance: {}
    };
    
    try {
      // CPU Usage
      const cpuUsage = process.cpuUsage();
      metrics.system.cpu = {
        user: cpuUsage.user,
        system: cpuUsage.system,
        usage: Math.round((cpuUsage.user + cpuUsage.system) / 10000) // Rough percentage
      };
      
      // Memory Usage
      const memUsage = process.memoryUsage();
      const totalMem = require('os').totalmem();
      const freeMem = require('os').freemem();
      const usedMem = totalMem - freeMem;
      
      metrics.system.memory = {
        total: Math.round(totalMem / 1024 / 1024), // MB
        used: Math.round(usedMem / 1024 / 1024), // MB
        free: Math.round(freeMem / 1024 / 1024), // MB
        usage: Math.round((usedMem / totalMem) * 100), // Percentage
        heap: {
          used: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
          total: Math.round(memUsage.heapTotal / 1024 / 1024) // MB
        }
      };
      
      // Disk Usage
      try {
        const diskUsage = execSync('df -h /' { encoding: 'utf8' });
        const diskLines = diskUsage.split('\n')[1].split(/\s+/);
        metrics.system.disk = {
          total: diskLines[1],
          used: diskLines[2],
          available: diskLines[3],
          usage: parseInt(diskLines[4].replace('%', ''))
        }} catch (error) {
        this.log('Could not collect disk metrics', 'WARN')}
      
      // Load Average
      const loadAvg = require('os').loadavg();
      metrics.system.loadAverage = {
        '1min': loadAvg[0],
        '5min': loadAvg[1],
        '15min': loadAvg[2]
      };
      
      // Network connections (if possible)
      try {
        const netstat = execSync('netstat -an | grep :3000 | wc -l' { encoding: 'utf8' });
        metrics.system.connections = parseInt(netstat.trim())} catch (error) {
        metrics.system.connections = 0}
      
      return metrics} catch (error) {
      this.log(`Error collecting system metrics: ${error.message}`, 'ERROR');
      return metrics}
  }

  async collectApplicationMetrics() {
    this.log('Collecting application metrics...');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      health: {},
      performance: {},
      errors: {}
    };
    
    try {
      // Application health check
      const healthResult = await this.checkApplicationHealth();
      metrics.health = healthResult;
      
      // PM2 process metrics
      try {
        const pm2List = execSync('pm2 jlist' { encoding: 'utf8' });
        const processes = JSON.parse(pm2List);
        
        metrics.pm2 = processes.map(proc => ({
          name: proc.name,
          status: proc.pm2_env.status,
          cpu: proc.monit.cpu,
          memory: Math.round(proc.monit.memory / 1024 / 1024), // MB
          uptime: proc.pm2_env.pm_uptime,
          restarts: proc.pm2_env.restart_time
        }))} catch (error) {
        this.log('PM2 metrics not available', 'WARN')}
      
      // Error log analysis
      const errorMetrics = await this.analyzeErrorLogs();
      metrics.errors = errorMetrics;
      
      return metrics} catch (error) {
      this.log(`Error collecting application metrics: ${error.message}`, 'ERROR');
      return metrics}
  }

  async checkApplicationHealth() {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const req = http.get('http://localhost:3000/api/health', (res) => {
        const responseTime = Date.now() - startTime;
        
        resolve({
          status: res.statusCode === 200 ? 'healthy' : 'unhealthy',
          responseTime,
          statusCode: res.statusCode
        })});
      
      req.on('error', (error) => {
        resolve({
          status: 'unhealthy',
          responseTime: Date.now() - startTime,
          error: error.message
        })});
      
      req.setTimeout(5000, () => {
        req.destroy();
        resolve({
          status: 'unhealthy',
          responseTime: Date.now() - startTime,
          error: 'timeout'
        })})})}

  async analyzeErrorLogs() {
    const errorAnalysis = {
      recentErrors: 0,
      errorRate: 0,
      criticalErrors: 0,
      warnings: 0
    };
    
    try {
      // Analyze error logs from the last hour
      const logFiles = [
        path.join(this.logDir, 'error-monitor.log'),
        path.join(this.logDir, 'health-checker.log'),
        path.join(this.logDir, 'monitoring.log')
      ];
      
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      
      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach(line => {
            if (line.includes('[ERROR]')) {
              const timestamp = this.extractTimestamp(line);
              if (timestamp && timestamp > oneHourAgo) {
                errorAnalysis.recentErrors++;
                if (line.includes('CRITICAL') || line.includes('FATAL')) {
                  errorAnalysis.criticalErrors++}
              }
            } else if (line.includes('[WARN]')) {
              const timestamp = this.extractTimestamp(line);
              if (timestamp && timestamp > oneHourAgo) {
                errorAnalysis.warnings++}
            }
          })}
      }
      
      // Calculate error rate (errors per minute)
      errorAnalysis.errorRate = Math.round((errorAnalysis.recentErrors / 60) * 100) / 100} catch (error) {
      this.log(`Error analyzing logs: ${error.message}`, 'ERROR')}
    
    return errorAnalysis}

  extractTimestamp(logLine) {
    const timestampMatch = logLine.match(/\[([\d-T:.Z]+)\]/);
    if (timestampMatch) {
      try {
        return new Date(timestampMatch[1])} catch (error) {
        return null}
    }
    return null}

  async checkThresholds(metrics) {
    this.log('Checking thresholds...');
    
    const alerts = [];
    
    // CPU threshold
    if (metrics.system && metrics.system.cpu && metrics.system.cpu.usage > this.thresholds.cpu) {
      alerts.push({
        type: 'cpu',
        level: 'warning',
        message: `CPU usage is ${metrics.system.cpu.usage}% (threshold: ${this.thresholds.cpu}%)`,
        value: metrics.system.cpu.usage,
        threshold: this.thresholds.cpu
      })}
    
    // Memory threshold
    if (metrics.system && metrics.system.memory && metrics.system.memory.usage > this.thresholds.memory) {
      alerts.push({
        type: 'memory',
        level: 'warning',
        message: `Memory usage is ${metrics.system.memory.usage}% (threshold: ${this.thresholds.memory}%)`,
        value: metrics.system.memory.usage,
        threshold: this.thresholds.memory
      })}
    
    // Disk threshold
    if (metrics.system && metrics.system.disk && metrics.system.disk.usage > this.thresholds.disk) {
      alerts.push({
        type: 'disk',
        level: 'critical',
        message: `Disk usage is ${metrics.system.disk.usage}% (threshold: ${this.thresholds.disk}%)`,
        value: metrics.system.disk.usage,
        threshold: this.thresholds.disk
      })}
    
    // Response time threshold
    if (metrics.application && metrics.application.health && 
        metrics.application.health.responseTime > this.thresholds.responseTime) {
      alerts.push({
        type: 'response_time',
        level: 'warning',
        message: `Response time is ${metrics.application.health.responseTime}ms (threshold: ${this.thresholds.responseTime}ms)`,
        value: metrics.application.health.responseTime,
        threshold: this.thresholds.responseTime
      })}
    
    // Application health
    if (metrics.application && metrics.application.health && 
        metrics.application.health.status !== 'healthy') {
      alerts.push({
        type: 'health',
        level: 'critical',
        message: `Application is ${metrics.application.health.status}`,
        value: metrics.application.health.status,
        threshold: 'healthy'
      })}
    
    // Error rate threshold
    if (metrics.application && metrics.application.errors && 
        metrics.application.errors.errorRate > this.thresholds.errorRate) {
      alerts.push({
        type: 'error_rate',
        level: 'warning',
        message: `Error rate is ${metrics.application.errors.errorRate} errors/min (threshold: ${this.thresholds.errorRate})`,
        value: metrics.application.errors.errorRate,
        threshold: this.thresholds.errorRate
      })}
    
    return alerts}

  async sendAlerts(alerts) {
    if (alerts.length === 0) {
      this.log('No alerts to send');
      return}
    
    this.log(`Sending ${alerts.length} alerts...`);
    
    // Save alerts to file
    let existingAlerts = [];
    if (fs.existsSync(this.alertsFile)) {
      try {
        existingAlerts = JSON.parse(fs.readFileSync(this.alertsFile, 'utf8'))} catch (error) {
        existingAlerts = []}
    }
    
    const newAlerts = alerts.map(alert => ({
      ...alert,
      timestamp: new Date().toISOString(),
      id: `${alert.type}_${Date.now()}`
    }));
    
    existingAlerts.push(...newAlerts);
    
    // Keep only last 100 alerts
    if (existingAlerts.length > 100) {
      existingAlerts = existingAlerts.slice(-100)}
    
    fs.writeFileSync(this.alertsFile, JSON.stringify(existingAlerts, null, 2));
    
    // Log alerts
    alerts.forEach(alert => {
      this.log(`ALERT [${alert.level.toUpperCase()}]: ${alert.message}`, 'ALERT')});
    
    // In a real system, you would send these to:
    // - Slack/Discord webhooks
    // - Email notifications
    // - PagerDuty/OpsGenie
    // - SMS alerts
    
    this.log(`${alerts.length} alerts processed`)}

  async saveMetrics(systemMetrics, applicationMetrics) {
    const combinedMetrics = {
      timestamp: new Date().toISOString(),
      system: systemMetrics.system,
      application: applicationMetrics
    };
    
    // Save to metrics file
    let existingMetrics = [];
    if (fs.existsSync(this.metricsFile)) {
      try {
        existingMetrics = JSON.parse(fs.readFileSync(this.metricsFile, 'utf8'))} catch (error) {
        existingMetrics = []}
    }
    
    existingMetrics.push(combinedMetrics);
    
    // Keep only last 1000 metrics (roughly 16 hours at 1-minute intervals)
    if (existingMetrics.length > 1000) {
      existingMetrics = existingMetrics.slice(-1000)}
    
    fs.writeFileSync(this.metricsFile, JSON.stringify(existingMetrics, null, 2));
    
    this.log('Metrics saved')}

  async generateReport() {
    this.log('Generating monitoring report...');
    
    try {
      const metrics = JSON.parse(fs.readFileSync(this.metricsFile, 'utf8'));
      const alerts = JSON.parse(fs.readFileSync(this.alertsFile, 'utf8'));
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalMetrics: metrics.length,
          recentAlerts: alerts.filter(a => 
            new Date(a.timestamp) > new Date(Date.now() - 24 * 60 * 60 * 1000)
          ).length,
          criticalAlerts: alerts.filter(a => a.level === 'critical').length
        },
        latestMetrics: metrics.slice(-1)[0] || {},
        recentAlerts: alerts.slice(-10) || []
      };
      
      const reportFile = path.join(this.logDir, 'monitoring-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Monitoring report saved to: ${reportFile}`);
      return report} catch (error) {
      this.log(`Error generating report: ${error.message}`, 'ERROR');
      return null}
  }

  async run() {
    this.log('🔍 Starting monitoring automation...');
    
    try {
      // Collect metrics
      const systemMetrics = await this.collectSystemMetrics();
      const applicationMetrics = await this.collectApplicationMetrics();
      
      // Check thresholds and generate alerts
      const combinedMetrics = { system: systemMetrics.system, application: applicationMetrics };
      const alerts = await this.checkThresholds(combinedMetrics);
      
      // Send alerts if any
      await this.sendAlerts(alerts);
      
      // Save metrics
      await this.saveMetrics(systemMetrics, applicationMetrics);
      
      // Generate report
      const report = await this.generateReport();
      
      this.log('✅ Monitoring automation completed');
      
      return {
        metrics: combinedMetrics,
        alerts,
        report
      }} catch (error) {
      this.log(`❌ Monitoring automation failed: ${error.message}`, 'ERROR');
      throw error}
  }
}

// Run if this script is executed directly
if (require.main === module) {
  const monitoring = new MonitoringAutomation();
  monitoring.run()
    .then(results => {
      console.log('\n✅ Monitoring automation completed successfully');
      if (results.alerts.length > 0) {
        console.log(`⚠️ ${results.alerts.length} alerts generated`);
        process.exit(1); // Exit with error code if there are alerts
      }
      process.exit(0)})
    .catch(error => {
      console.error('\n❌ Monitoring automation failed:', error.message);
      process.exit(1)})}

module.exports = MonitoringAutomation;