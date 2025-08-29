#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting comprehensive automation dashboard...');

// Get dashboard refresh interval from environment variable (default: 30 seconds)
const DASHBOARD_INTERVAL = parseInt(process.env.DASHBOARD_INTERVAL) || 30000; // 30 seconds

class AutomationDashboard {
  constructor() {
    this.dashboardData = {
      timestamp: new Date().toISOString(),
      systemStatus: {},
      performanceMetrics: {},
      recentReports: [],
      alerts: [],
      recommendations: []
    };
    this.logFile = path.join(__dirname, '..', 'logs', 'automation-dashboard.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async updateDashboard() {
    try {
      this.log(`📊 Updating automation dashboard at ${new Date().toISOString()}`);
      
      // Update system status
      await this.updateSystemStatus();
      
      // Update performance metrics
      await this.updatePerformanceMetrics();
      
      // Update recent reports
      await this.updateRecentReports();
      
      // Check for alerts
      await this.checkForAlerts();
      
      // Generate recommendations
      await this.generateRecommendations();
      
      // Generate dashboard report
      await this.generateDashboardReport();
      
      this.log('✅ Dashboard updated successfully');
      
    } catch (error) {
      this.log(`❌ Dashboard update failed: ${error.message}`);
    }
  }

  async updateSystemStatus() {
    try {
      this.log('🔍 Updating system status...');
      
      // Get PM2 process list
      const pm2Processes = this.getPM2Processes();
      
      // Update system status for each automation system
      for (const process of pm2Processes) {
        if (process.name.includes('-')) { // Automation processes
          this.dashboardData.systemStatus[process.name] = {
            status: process.pm2_env.status,
            memory: process.monit.memory,
            cpu: process.monit.cpu,
            uptime: process.pm2_env.pm_uptime,
            restarts: process.pm2_env.restart_time,
            lastUpdate: new Date().toISOString()
          };
        }
      }
      
      this.log(`📊 Updated status for ${Object.keys(this.dashboardData.systemStatus).length} systems`);
      
    } catch (error) {
      this.log(`⚠️  System status update failed: ${error.message}`);
    }
  }

  async updatePerformanceMetrics() {
    try {
      this.log('🔍 Updating performance metrics...');
      
      // Load performance data from various sources
      const metrics = await this.loadPerformanceMetrics();
      
      // Calculate aggregate metrics
      const aggregateMetrics = this.calculateAggregateMetrics(metrics);
      
      this.dashboardData.performanceMetrics = {
        ...metrics,
        aggregate: aggregateMetrics,
        lastUpdate: new Date().toISOString()
      };
      
      this.log('📊 Performance metrics updated');
      
    } catch (error) {
      this.log(`⚠️  Performance metrics update failed: ${error.message}`);
    }
  }

  async updateRecentReports() {
    try {
      this.log('🔍 Updating recent reports...');
      
      const reportFiles = this.findReportFiles();
      const reports = [];
      
      for (const file of reportFiles) {
        try {
          const reportData = JSON.parse(fs.readFileSync(file, 'utf8'));
          reports.push({
            name: path.basename(file, '.json'),
            timestamp: reportData.timestamp,
            summary: reportData.summary,
            status: reportData.status,
            type: this.determineReportType(file)
          });
        } catch (error) {
          // Skip invalid report files
        }
      }
      
      // Sort by timestamp (newest first) and take last 20
      this.dashboardData.recentReports = reports
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 20);
      
      this.log(`📊 Updated ${this.dashboardData.recentReports.length} recent reports`);
      
    } catch (error) {
      this.log(`⚠️  Recent reports update failed: ${error.message}`);
    }
  }

  async checkForAlerts() {
    try {
      this.log('🔍 Checking for alerts...');
      
      const alerts = [];
      
      // Check system health alerts
      const healthAlerts = this.checkHealthAlerts();
      alerts.push(...healthAlerts);
      
      // Check performance alerts
      const performanceAlerts = this.checkPerformanceAlerts();
      alerts.push(...performanceAlerts);
      
      // Check error alerts
      const errorAlerts = this.checkErrorAlerts();
      alerts.push(...errorAlerts);
      
      this.dashboardData.alerts = alerts;
      
      if (alerts.length > 0) {
        this.log(`⚠️  Found ${alerts.length} alerts`);
      } else {
        this.log('✅ No alerts found');
      }
      
    } catch (error) {
      this.log(`⚠️  Alert check failed: ${error.message}`);
    }
  }

  async generateRecommendations() {
    try {
      this.log('🔍 Generating recommendations...');
      
      const recommendations = [];
      
      // Generate system recommendations
      const systemRecommendations = this.generateSystemRecommendations();
      recommendations.push(...systemRecommendations);
      
      // Generate performance recommendations
      const performanceRecommendations = this.generatePerformanceRecommendations();
      recommendations.push(...performanceRecommendations);
      
      // Generate maintenance recommendations
      const maintenanceRecommendations = this.generateMaintenanceRecommendations();
      recommendations.push(...maintenanceRecommendations);
      
      this.dashboardData.recommendations = recommendations;
      
      this.log(`📊 Generated ${recommendations.length} recommendations`);
      
    } catch (error) {
      this.log(`⚠️  Recommendation generation failed: ${error.message}`);
    }
  }

  // Helper methods
  getPM2Processes() {
    try {
      const result = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(result);
    } catch (error) {
      this.log('⚠️  Could not get PM2 processes');
      return [];
    }
  }

  async loadPerformanceMetrics() {
    const metrics = {};
    
    try {
      // Load automation history if available
      const historyPath = path.join(process.cwd(), 'automation-history.json');
      if (fs.existsSync(historyPath)) {
        const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
        metrics.history = history;
      }
      
      // Load recent report metrics
      const reportMetrics = this.loadReportMetrics();
      metrics.reports = reportMetrics;
      
      // Calculate system performance
      const systemPerformance = this.calculateSystemPerformance();
      metrics.system = systemPerformance;
      
    } catch (error) {
      this.log(`⚠️  Could not load performance metrics: ${error.message}`);
    }
    
    return metrics;
  }

  calculateAggregateMetrics(metrics) {
    const aggregate = {
      totalSystems: Object.keys(this.dashboardData.systemStatus).length,
      activeSystems: 0,
      healthySystems: 0,
      averageMemory: 0,
      averageCPU: 0,
      totalAlerts: this.dashboardData.alerts.length,
      totalRecommendations: this.dashboardData.recommendations.length
    };
    
    // Calculate system metrics
    const systems = Object.values(this.dashboardData.systemStatus);
    aggregate.activeSystems = systems.filter(s => s.status === 'online').length;
    aggregate.healthySystems = systems.filter(s => s.memory < 100 * 1024 * 1024).length; // < 100MB
    
    if (systems.length > 0) {
      aggregate.averageMemory = systems.reduce((sum, s) => sum + s.memory, 0) / systems.length;
      aggregate.averageCPU = systems.reduce((sum, s) => sum + s.cpu, 0) / systems.length;
    }
    
    return aggregate;
  }

  findReportFiles() {
    try {
      const reportPatterns = [
        '*-report.json',
        '*-analysis-report.json',
        '*-optimization-report.json',
        '*-health-report.json'
      ];
      
      const reports = [];
      
      for (const pattern of reportPatterns) {
        const files = fs.readdirSync(process.cwd())
          .filter(file => file.includes('-report.json') || file.includes('-analysis.json'))
          .map(file => path.join(process.cwd(), file));
        
        reports.push(...files);
      }
      
      return reports;
    } catch (error) {
      return [];
    }
  }

  determineReportType(filename) {
    if (filename.includes('ai-code-quality')) return 'AI Analysis';
    if (filename.includes('intelligent-test')) return 'Test Analysis';
    if (filename.includes('smart-dependency')) return 'Dependency Health';
    if (filename.includes('enhanced-performance')) return 'Performance';
    if (filename.includes('console-error')) return 'Error Fixing';
    if (filename.includes('link-checker')) return 'Link Checking';
    if (filename.includes('security')) return 'Security';
    if (filename.includes('quality')) return 'Quality';
    return 'General';
  }

  checkHealthAlerts() {
    const alerts = [];
    
    for (const [name, status] of Object.entries(this.dashboardData.systemStatus)) {
      if (status.status !== 'online') {
        alerts.push({
          type: 'health',
          severity: 'high',
          message: `System ${name} is not online (status: ${status.status})`,
          system: name,
          timestamp: new Date().toISOString()
        });
      }
      
      if (status.memory > 200 * 1024 * 1024) { // > 200MB
        alerts.push({
          type: 'health',
          severity: 'medium',
          message: `System ${name} is using high memory: ${(status.memory / 1024 / 1024).toFixed(1)}MB`,
          system: name,
          timestamp: new Date().toISOString()
        });
      }
      
      if (status.restarts > 5) {
        alerts.push({
          type: 'health',
          severity: 'medium',
          message: `System ${name} has restarted ${status.restarts} times`,
          system: name,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return alerts;
  }

  checkPerformanceAlerts() {
    const alerts = [];
    
    // Check for systems with high CPU usage
    for (const [name, status] of Object.entries(this.dashboardData.systemStatus)) {
      if (status.cpu > 80) {
        alerts.push({
          type: 'performance',
          severity: 'medium',
          message: `System ${name} has high CPU usage: ${status.cpu.toFixed(1)}%`,
          system: name,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return alerts;
  }

  checkErrorAlerts() {
    const alerts = [];
    
    // Check for recent error reports
    const errorReports = this.dashboardData.recentReports.filter(r => 
      r.status === 'failed' || r.status === 'error'
    );
    
    for (const report of errorReports) {
      alerts.push({
        type: 'error',
        severity: 'high',
        message: `Report ${report.name} failed: ${report.summary}`,
        system: report.name,
        timestamp: report.timestamp
      });
    }
    
    return alerts;
  }

  generateSystemRecommendations() {
    const recommendations = [];
    
    // Check for offline systems
    const offlineSystems = Object.entries(this.dashboardData.systemStatus)
      .filter(([name, status]) => status.status !== 'online');
    
    if (offlineSystems.length > 0) {
      recommendations.push({
        priority: 'high',
        action: `Restart ${offlineSystems.length} offline systems`,
        systems: offlineSystems.map(([name]) => name),
        reason: 'Systems are not responding'
      });
    }
    
    // Check for high memory usage
    const highMemorySystems = Object.entries(this.dashboardData.systemStatus)
      .filter(([name, status]) => status.memory > 150 * 1024 * 1024); // > 150MB
    
    if (highMemorySystems.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: `Investigate high memory usage in ${highMemorySystems.length} systems`,
        systems: highMemorySystems.map(([name]) => name),
        reason: 'High memory usage may indicate memory leaks'
      });
    }
    
    return recommendations;
  }

  generatePerformanceRecommendations() {
    const recommendations = [];
    
    // Check for systems with high restart counts
    const highRestartSystems = Object.entries(this.dashboardData.systemStatus)
      .filter(([name, status]) => status.restarts > 3);
    
    if (highRestartSystems.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: `Investigate frequent restarts in ${highRestartSystems.length} systems`,
        systems: highRestartSystems.map(([name]) => name),
        reason: 'Frequent restarts may indicate stability issues'
      });
    }
    
    return recommendations;
  }

  generateMaintenanceRecommendations() {
    const recommendations = [];
    
    // Check for old reports
    const oldReports = this.dashboardData.recentReports.filter(r => {
      const reportAge = Date.now() - new Date(r.timestamp).getTime();
      return reportAge > 24 * 60 * 60 * 1000; // > 24 hours
    });
    
    if (oldReports.length > 0) {
      recommendations.push({
        priority: 'low',
        action: `Clean up ${oldReports.length} old reports`,
        systems: [],
        reason: 'Old reports may be consuming disk space'
      });
    }
    
    return recommendations;
  }

  loadReportMetrics() {
    const metrics = {};
    
    try {
      for (const report of this.dashboardData.recentReports) {
        const reportPath = path.join(process.cwd(), `${report.name}.json`);
        if (fs.existsSync(reportPath)) {
          const reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
          
          // Extract key metrics based on report type
          if (reportData.qualityMetrics) {
            metrics[report.name] = {
              type: 'quality',
              metrics: reportData.qualityMetrics,
              score: this.calculateQualityScore(reportData.qualityMetrics)
            };
          } else if (reportData.performanceMetrics) {
            metrics[report.name] = {
              type: 'performance',
              metrics: reportData.performanceMetrics,
              score: this.calculatePerformanceScore(reportData.performanceMetrics)
            };
          }
        }
      }
    } catch (error) {
      this.log(`⚠️  Could not load report metrics: ${error.message}`);
    }
    
    return metrics;
  }

  calculateSystemPerformance() {
    const performance = {
      overall: 0,
      systems: {}
    };
    
    let totalScore = 0;
    let systemCount = 0;
    
    for (const [name, status] of Object.entries(this.dashboardData.systemStatus)) {
      let score = 100;
      
      // Deduct points for offline status
      if (status.status !== 'online') score -= 50;
      
      // Deduct points for high memory usage
      if (status.memory > 100 * 1024 * 1024) score -= 20;
      
      // Deduct points for high CPU usage
      if (status.cpu > 80) score -= 15;
      
      // Deduct points for frequent restarts
      if (status.restarts > 3) score -= 25;
      
      performance.systems[name] = Math.max(0, score);
      totalScore += score;
      systemCount++;
    }
    
    performance.overall = systemCount > 0 ? Math.floor(totalScore / systemCount) : 0;
    
    return performance;
  }

  calculateQualityScore(qualityMetrics) {
    if (!qualityMetrics) return 0;
    
    const scores = Object.values(qualityMetrics).filter(v => typeof v === 'number');
    return scores.length > 0 ? Math.floor(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  calculatePerformanceScore(performanceMetrics) {
    if (!performanceMetrics) return 0;
    
    const scores = Object.values(performanceMetrics).filter(v => typeof v === 'number');
    return scores.length > 0 ? Math.floor(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  async generateDashboardReport() {
    try {
      this.log('📊 Generating dashboard report...');
      
      // Update timestamp
      this.dashboardData.timestamp = new Date().toISOString();
      
      const report = {
        ...this.dashboardData,
        summary: 'Comprehensive automation dashboard report',
        generatedAt: new Date().toISOString()
      };
      
      const reportPath = path.join(process.cwd(), 'automation-dashboard-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      // Also save to logs directory for historical tracking
      const logPath = path.join(__dirname, '..', 'logs', `dashboard-${Date.now()}.json`);
      fs.writeFileSync(logPath, JSON.stringify(report, null, 2));
      
      this.log(`✅ Dashboard report saved to ${reportPath}`);
      
    } catch (error) {
      this.log(`⚠️  Dashboard report generation failed: ${error.message}`);
    }
  }

  displayDashboard() {
    console.log('\n' + '='.repeat(80));
    console.log('🎯 COMPREHENSIVE AUTOMATION DASHBOARD');
    console.log('='.repeat(80));
    
    // System Status
    console.log('\n📊 SYSTEM STATUS:');
    console.log('-'.repeat(40));
    for (const [name, status] of Object.entries(this.dashboardData.systemStatus)) {
      const statusIcon = status.status === 'online' ? '🟢' : '🔴';
      const memoryMB = (status.memory / 1024 / 1024).toFixed(1);
      console.log(`${statusIcon} ${name}: ${status.status} | Memory: ${memoryMB}MB | CPU: ${status.cpu.toFixed(1)}% | Restarts: ${status.restarts}`);
    }
    
    // Performance Metrics
    if (this.dashboardData.performanceMetrics.aggregate) {
      const agg = this.dashboardData.performanceMetrics.aggregate;
      console.log('\n📈 PERFORMANCE OVERVIEW:');
      console.log('-'.repeat(40));
      console.log(`Total Systems: ${agg.totalSystems} | Active: ${agg.activeSystems} | Healthy: ${agg.healthySystems}`);
      console.log(`Average Memory: ${(agg.averageMemory / 1024 / 1024).toFixed(1)}MB | Average CPU: ${agg.averageCPU.toFixed(1)}%`);
    }
    
    // Alerts
    if (this.dashboardData.alerts.length > 0) {
      console.log('\n⚠️  ALERTS:');
      console.log('-'.repeat(40));
      for (const alert of this.dashboardData.alerts.slice(0, 5)) { // Show first 5
        const severityIcon = alert.severity === 'high' ? '🔴' : alert.severity === 'medium' ? '🟡' : '🟢';
        console.log(`${severityIcon} ${alert.message}`);
      }
      if (this.dashboardData.alerts.length > 5) {
        console.log(`... and ${this.dashboardData.alerts.length - 5} more alerts`);
      }
    }
    
    // Recommendations
    if (this.dashboardData.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      console.log('-'.repeat(40));
      for (const rec of this.dashboardData.recommendations.slice(0, 3)) { // Show first 3
        const priorityIcon = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        console.log(`${priorityIcon} ${rec.action}`);
      }
      if (this.dashboardData.recommendations.length > 3) {
        console.log(`... and ${this.dashboardData.recommendations.length - 3} more recommendations`);
      }
    }
    
    console.log('\n' + '='.repeat(80));
    console.log(`Last Updated: ${this.dashboardData.timestamp}`);
    console.log('='.repeat(80) + '\n');
  }
}

// Main execution
async function runAutomationDashboard() {
  const dashboard = new AutomationDashboard();
  await dashboard.updateDashboard();
  dashboard.displayDashboard();
}

// Run the dashboard
runAutomationDashboard();

// Set up continuous dashboard updates
setInterval(runAutomationDashboard, DASHBOARD_INTERVAL);

console.log(`📊 Automation dashboard will refresh every ${DASHBOARD_INTERVAL / 1000} seconds`);