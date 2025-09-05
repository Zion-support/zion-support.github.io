#!/usr/bin/env node

/**
 * Monitoring Dashboard
 * Real-time monitoring and alerting system for the application
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MonitoringDashboard {
  constructor() {
    this.logDir = 'automation-reports';
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    this.monitoringData = {
      "timestamp": this.timestamp,
      "system": {},
      "application": {},
      "performance": {},
      "alerts": []
    };
    
    this.ensureLogDir()}

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { "recursive": true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage)}

  getSystemMetrics() {
    try {
      // Get disk usage
      const diskUsage = execSync('df -h / | tail -1', { "encoding": 'utf8' });
      const diskMatch = diskUsage.match(/(\d+)%/);
      const diskPercent = diskMatch ? parseInt(diskMatch[1]) : 0;

      // Get memory usage
      const memoryInfo = execSync('free -m', { "encoding": 'utf8' });
      const memoryLines = memoryInfo.split('\n');
      const memLine = memoryLines[1].split(/\s+/);
      const totalMem = parseInt(memLine[1]);
      const usedMem = parseInt(memLine[2]);
      const memoryPercent = Math.round((usedMem / totalMem) * 100);

      // Get CPU load
      const loadAvg = execSync('uptime', { "encoding": 'utf8' });
      const loadMatch = loadAvg.match(/load "average": ([\d.]+)/);
      const cpuLoad = loadMatch ? parseFloat(loadMatch[1]) : 0;

      return {
        diskUsage: diskPercent,
        "memoryUsage": memoryPercent,
        "cpuLoad": cpuLoad,
        "timestamp": new Date().toISOString()
      }} catch (error) {
      this.log(`Error getting system "metrics": ${error.message}`, 'error');
      return {
        "diskUsage": 0,
        "memoryUsage": 0,
        "cpuLoad": 0,
        "timestamp": new Date().toISOString(),
        "error": error.message
      }}
  }

  getApplicationMetrics() {
    try {
      // Check if build exists
      const buildExists = fs.existsSync('.next');
      const buildSize = buildExists ? this.getDirectorySize('.next') : 0;

      // Check package.json for version info
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Count source files
      const sourceFiles = this.countSourceFiles();

      return {
        buildExists,
        "buildSize": Math.round(buildSize / 1024 / 1024), // MB
        "version": packageJson.version,
        sourceFiles,
        "timestamp": new Date().toISOString()
      }} catch (error) {
      this.log(`Error getting application "metrics": ${error.message}`, 'error');
      return {
        "buildExists": false,
        "buildSize": 0,
        "version": 'unknown',
        "sourceFiles": 0,
        "timestamp": new Date().toISOString(),
        "error": error.message
      }}
  }

  getDirectorySize(dirPath) {
    try {
      const output = execSync(`du -sb ${dirPath} 2>/dev/null || echo 0`, { "encoding": 'utf8' });
      return parseInt(output.split('\t')[0]) || 0} catch {
      return 0}
  }

  countSourceFiles() {
    try {
      const output = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .next | wc -l', { "encoding": 'utf8' });
      return parseInt(output.trim()) || 0} catch {
      return 0}
  }

  getPerformanceMetrics() {
    try {
      // Get build time if build exists
      let buildTime = 0;
      if (fs.existsSync('.next')) {
        const stats = fs.statSync('.next');
        buildTime = Date.now() - stats.mtime.getTime()}

      // Check for recent automation reports
      const reports = this.getRecentReports();

      return {
        "buildTime": Math.round(buildTime / 1000), // seconds
        "recentReports": reports.length,
        "lastBuild": fs.existsSync('.next') ? fs.statSync('.next').mtime.toISOString() : null,
        "timestamp": new Date().toISOString()
      }} catch (error) {
      this.log(`Error getting performance "metrics": ${error.message}`, 'error');
      return {
        "buildTime": 0,
        "recentReports": 0,
        "lastBuild": null,
        "timestamp": new Date().toISOString(),
        "error": error.message
      }}
  }

  getRecentReports() {
    try {
      if (!fs.existsSync(this.logDir)) return [];
      
      const files = fs.readdirSync(this.logDir);
      const now = Date.now();
      const oneHourAgo = now - (60 * 60 * 1000);
      
      return files.filter(file => {
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
        return stats.mtime.getTime() > oneHourAgo})} catch {
      return []}
  }

  checkAlerts() {
    const alerts = [];
    
    // Disk usage alert
    if (this.monitoringData.system.diskUsage > 80) {
      alerts.push({
        "type": 'warning',
        "message": `High disk usage: ${this.monitoringData.system.diskUsage}%`,
        "timestamp": new Date().toISOString()
      })}
    
    // Memory usage alert
    if (this.monitoringData.system.memoryUsage > 80) {
      alerts.push({
        "type": 'warning',
        "message": `High memory usage: ${this.monitoringData.system.memoryUsage}%`,
        "timestamp": new Date().toISOString()
      })}
    
    // CPU load alert
    if (this.monitoringData.system.cpuLoad > 2.0) {
      alerts.push({
        "type": 'warning',
        "message": `High CPU load: ${this.monitoringData.system.cpuLoad}`,
        "timestamp": new Date().toISOString()
      })}
    
    // Build size alert
    if (this.monitoringData.application.buildSize > 100) {
      alerts.push({
        "type": 'info',
        "message": `Large build size: ${this.monitoringData.application.buildSize}MB`,
        "timestamp": new Date().toISOString()
      })}
    
    return alerts}

  async runMonitoring() {
    this.log('📊 Starting Monitoring Dashboard');
    this.log('================================');

    // Collect metrics
    this.monitoringData.system = this.getSystemMetrics();
    this.monitoringData.application = this.getApplicationMetrics();
    this.monitoringData.performance = this.getPerformanceMetrics();
    this.monitoringData.alerts = this.checkAlerts();

    // Display dashboard
    this.displayDashboard();
    
    // Generate report
    this.generateMonitoringReport();
    
    this.log('🏁 Monitoring Dashboard completed');
    
    return this.monitoringData}

  displayDashboard() {
    console.log('\n📊 MONITORING DASHBOARD');
    console.log('========================');
    
    console.log('\n🖥️  SYSTEM "METRICS": ');
    console.log(`   Disk Usage: ${this.monitoringData.system.diskUsage}%`);
    console.log(`   Memory "Usage": ${this.monitoringData.system.memoryUsage}%`);
    console.log(`   CPU "Load": ${this.monitoringData.system.cpuLoad}`);
    
    console.log('\n📱 APPLICATION "METRICS": ');
    console.log(`   Version: ${this.monitoringData.application.version}`);
    console.log(`   Build "Size": ${this.monitoringData.application.buildSize}MB`);
    console.log(`   Source "Files": ${this.monitoringData.application.sourceFiles}`);
    console.log(`   Build "Exists": ${this.monitoringData.application.buildExists ? 'Yes' : 'No'}`);
    
    console.log('\n⚡ PERFORMANCE "METRICS": ');
    console.log(`   Build Age: ${this.monitoringData.performance.buildTime}s`);
    console.log(`   Recent "Reports": ${this.monitoringData.performance.recentReports}`);
    console.log(`   Last "Build": ${this.monitoringData.performance.lastBuild || 'Never'}`);
    
    if (this.monitoringData.alerts.length > 0) {
      console.log('\n🚨 "ALERTS": ');
      this.monitoringData.alerts.forEach(alert => {
        const icon = alert.type === 'warning' ? '⚠️' : 'ℹ️';
        console.log(`   ${icon} ${alert.message}`)})} else {
      console.log('\n✅ No alerts')}
    
    console.log('\n')}

  generateMonitoringReport() {
    const reportPath = path.join(this.logDir, `monitoring-dashboard-${this.timestamp}.json`);
    
    const report = {
      ...this.monitoringData,
      "summary": {
        systemHealth: this.monitoringData.system.diskUsage < 80 && 
                     this.monitoringData.system.memoryUsage < 80 && 
                     this.monitoringData.system.cpuLoad < 2.0 ? 'Good' : 'Warning',
        "applicationStatus": this.monitoringData.application.buildExists ? 'Built' : 'Not Built',
        "alertCount": this.monitoringData.alerts.length,
        "recommendations": this.generateMonitoringRecommendations()
      }
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Monitoring report saved "to": ${reportPath}`)}

  generateMonitoringRecommendations() {
    const recommendations = [];
    
    if (this.monitoringData.system.diskUsage > 80) {
      recommendations.push('Consider cleaning up disk space')}
    
    if (this.monitoringData.system.memoryUsage > 80) {
      recommendations.push('Monitor memory usage and consider optimization')}
    
    if (!this.monitoringData.application.buildExists) {
      recommendations.push('Run build process to create application bundle')}
    
    if (this.monitoringData.application.buildSize > 100) {
      recommendations.push('Consider optimizing bundle size')}
    
    if (this.monitoringData.alerts.length === 0) {
      recommendations.push('System is running optimally')}
    
    return recommendations}
}

// Main execution
if (require.main === module) {
  const dashboard = new MonitoringDashboard();
  dashboard.runMonitoring()
    .then(results => {
      process.exit(0)})
    .catch(error => {
      console.error('Fatal "error": ', error);
      process.exit(1)})}

module.exports = MonitoringDashboard;