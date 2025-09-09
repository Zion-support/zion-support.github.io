#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Smart Automation Orchestrator...');

class SmartAutomationOrchestrator {
  constructor() {
    this.processes = new Map();
    this.healthMetrics = new Map();
    this.performanceHistory = [];
    this.adaptiveSchedules = new Map();
    this.startTime = Date.now();
    this.reportDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportDirectory();
    
    // Initialize adaptive schedules based on historical performance
    this.initializeAdaptiveSchedules();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  initializeAdaptiveSchedules() {
    // Smart scheduling based on process importance and performance
    this.adaptiveSchedules.set('console-error-fixer', {
      baseInterval: 900000, // 15 minutes
      priority: 'critical',
      adaptiveFactor: 1.0,
      maxInterval: 1800000, // 30 minutes
      minInterval: 300000   // 5 minutes
    });

    this.adaptiveSchedules.set('security-audit', {
      baseInterval: 14400000, // 4 hours
      priority: 'high',
      adaptiveFactor: 1.0,
      maxInterval: 28800000, // 8 hours
      minInterval: 7200000   // 2 hours
    });

    this.adaptiveSchedules.set('performance-monitor', {
      baseInterval: 7200000, // 2 hours
      priority: 'medium',
      adaptiveFactor: 1.0,
      maxInterval: 14400000, // 4 hours
      minInterval: 3600000   // 1 hour
    });

    // Load historical performance data if available
    this.loadPerformanceHistory();
  }

  loadPerformanceHistory() {
    const historyFile = path.join(this.reportDir, 'performance-history.json');
    if (fs.existsSync(historyFile)) {
      try {
        this.performanceHistory = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        this.analyzePerformancePatterns();
      } catch (error) {
        console.log('⚠️  Could not load performance history:', error.message);
      }
    }
  }

  analyzePerformancePatterns() {
    // Analyze patterns to optimize scheduling
    const processStats = {};
    
    this.performanceHistory.forEach(entry => {
      if (!processStats[entry.process]) {
        processStats[entry.process] = { durations: [], failures: 0, successes: 0 };
      }
      
      if (entry.status === 'success') {
        processStats[entry.process].durations.push(entry.duration);
        processStats[entry.process].successes++;
      } else {
        processStats[entry.process].failures++;
      }
    });

    // Adjust schedules based on performance patterns
    Object.entries(processStats).forEach(([process, stats]) => {
      if (stats.durations.length > 0) {
        const avgDuration = stats.durations.reduce((a, b) => a + b, 0) / stats.durations.length;
        const failureRate = stats.failures / (stats.successes + stats.failures);
        
        if (failureRate > 0.1) { // More than 10% failure rate
          // Increase frequency for problematic processes
          this.adjustSchedule(process, 0.8); // 20% more frequent
        } else if (avgDuration < 5000 && failureRate < 0.05) { // Fast and reliable
          // Decrease frequency for well-performing processes
          this.adjustSchedule(process, 1.2); // 20% less frequent
        }
      }
    });
  }

  adjustSchedule(processName, factor) {
    const schedule = this.adaptiveSchedules.get(processName);
    if (schedule) {
      const newInterval = Math.max(
        schedule.minInterval,
        Math.min(schedule.maxInterval, schedule.baseInterval * factor)
      );
      
      if (Math.abs(newInterval - schedule.baseInterval) > 60000) { // Only adjust if change > 1 minute
        schedule.adaptiveFactor = factor;
        console.log(`🔄 Adjusted ${processName} schedule: ${Math.round(newInterval/1000)}s (factor: ${factor.toFixed(2)})`);
      }
    }
  }

  async monitorProcessHealth() {
    console.log('🏥 Monitoring process health...');
    
    try {
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      processes.forEach(process => {
        const processName = process.name;
        const health = {
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time,
          timestamp: Date.now()
        };
        
        this.healthMetrics.set(processName, health);
        
        // Alert on unhealthy processes
        if (health.restarts > 5) {
          console.log(`⚠️  ${processName} has restarted ${health.restarts} times - investigating...`);
          this.investigateProcessIssues(processName);
        }
        
        if (health.memory > 500 * 1024 * 1024) { // > 500MB
          console.log(`⚠️  ${processName} using high memory: ${Math.round(health.memory/1024/1024)}MB`);
        }
      });
      
      this.saveHealthReport();
      
    } catch (error) {
      console.error('❌ Failed to monitor process health:', error.message);
    }
  }

  investigateProcessIssues(processName) {
    console.log(`🔍 Investigating issues with ${processName}...`);
    
    try {
      // Check recent logs for errors
      const logs = execSync(`pm2 logs ${processName} --lines 50 --nostream`, { encoding: 'utf8' });
      const errorLines = logs.split('\n').filter(line => 
        line.includes('ERROR') || line.includes('Error') || line.includes('error')
      );
      
      if (errorLines.length > 0) {
        console.log(`📋 Found ${errorLines.length} error lines in ${processName} logs`);
        this.generateIssueReport(processName, errorLines);
      }
      
      // Check if process needs restart
      if (this.shouldRestartProcess(processName)) {
        console.log(`🔄 Restarting ${processName} due to issues...`);
        execSync(`pm2 restart ${processName}`);
      }
      
    } catch (error) {
      console.log(`⚠️  Could not investigate ${processName}:`, error.message);
    }
  }

  shouldRestartProcess(processName) {
    const health = this.healthMetrics.get(processName);
    if (!health) return false;
    
    // Restart if too many restarts or high memory usage
    return health.restarts > 10 || health.memory > 1024 * 1024 * 1024; // > 1GB
  }

  generateIssueReport(processName, errorLines) {
    const report = {
      timestamp: new Date().toISOString(),
      process: processName,
      issues: errorLines.slice(-10), // Last 10 errors
      recommendations: this.generateRecommendations(processName, errorLines),
      status: 'investigated'
    };
    
    const reportPath = path.join(this.reportDir, `${processName}-issues-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Issue report saved: ${reportPath}`);
  }

  generateRecommendations(processName, errorLines) {
    const recommendations = [];
    
    // Analyze error patterns and suggest fixes
    if (errorLines.some(line => line.includes('ENOMEM'))) {
      recommendations.push('Increase memory limit or optimize memory usage');
    }
    
    if (errorLines.some(line => line.includes('ECONNREFUSED'))) {
      recommendations.push('Check network connectivity and service availability');
    }
    
    if (errorLines.some(line => line.includes('ENOENT'))) {
      recommendations.push('Verify file paths and permissions');
    }
    
    if (errorLines.some(line => line.includes('EACCES'))) {
      recommendations.push('Check file permissions and ownership');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Monitor logs for pattern identification');
    }
    
    return recommendations;
  }

  saveHealthReport() {
    const healthReport = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime,
      processes: Object.fromEntries(this.healthMetrics),
      summary: this.generateHealthSummary(),
      recommendations: this.generateHealthRecommendations()
    };
    
    const reportPath = path.join(this.reportDir, 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
  }

  generateHealthSummary() {
    const totalProcesses = this.healthMetrics.size;
    const onlineProcesses = Array.from(this.healthMetrics.values()).filter(h => h.status === 'online').length;
    const highMemoryProcesses = Array.from(this.healthMetrics.values()).filter(h => h.memory > 500 * 1024 * 1024).length;
    
    return {
      total: totalProcesses,
      online: onlineProcesses,
      offline: totalProcesses - onlineProcesses,
      highMemory: highMemoryProcesses,
      healthScore: Math.round((onlineProcesses / totalProcesses) * 100)
    };
  }

  generateHealthRecommendations() {
    const recommendations = [];
    const summary = this.generateHealthSummary();
    
    if (summary.healthScore < 90) {
      recommendations.push('Investigate offline processes and restart if necessary');
    }
    
    if (summary.highMemory > 0) {
      recommendations.push('Monitor high memory usage processes for potential memory leaks');
    }
    
    if (summary.offline > 0) {
      recommendations.push('Check PM2 logs for offline process details');
    }
    
    return recommendations;
  }

  async runSmartOrchestration() {
    console.log('🧠 Running smart orchestration cycle...');
    
    try {
      // Monitor current health
      await this.monitorProcessHealth();
      
      // Analyze performance and adjust schedules
      this.analyzePerformancePatterns();
      
      // Generate orchestration report
      const orchestrationReport = {
        timestamp: new Date().toISOString(),
        cycle: 'smart-orchestration',
        healthSummary: this.generateHealthSummary(),
        adaptiveSchedules: Object.fromEntries(this.adaptiveSchedules),
        recommendations: this.generateHealthRecommendations(),
        status: 'completed'
      };
      
      const reportPath = path.join(this.reportDir, 'smart-orchestration-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(orchestrationReport, null, 2));
      
      console.log('✅ Smart orchestration cycle completed');
      
    } catch (error) {
      console.error('❌ Smart orchestration failed:', error.message);
    }
  }

  startContinuousMonitoring() {
    console.log('🔄 Starting continuous smart monitoring...');
    
    // Run initial orchestration
    this.runSmartOrchestration();
    
    // Set up continuous monitoring every 5 minutes
    setInterval(() => {
      this.runSmartOrchestration();
    }, 300000); // 5 minutes
    
    // Health monitoring every minute
    setInterval(() => {
      this.monitorProcessHealth();
    }, 60000); // 1 minute
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new SmartAutomationOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Smart Orchestrator...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down Smart Orchestrator...');
    process.exit(0);
  });
  
  // Start continuous monitoring
  orchestrator.startContinuousMonitoring();
}

module.exports = SmartAutomationOrchestrator;