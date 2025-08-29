#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎛️  Starting intelligent automation dashboard...');

class IntelligentAutomationDashboard {
  constructor() {
    this.automationStatus = new Map();
    this.performanceMetrics = new Map();
    this.healthScores = new Map();
    this.logFile = path.join(process.cwd(), 'intelligent-automation-dashboard.log');
    this.reportsDirectory = path.join(process.cwd(), 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDirectory)) {
      fs.mkdirSync(this.reportsDirectory, { recursive: true });
    }
  }

  async startDashboard() {
    try {
      console.log('🎛️  Starting intelligent automation dashboard...');
      
      // Initial status check
      await this.checkAllAutomations();
      
      // Set up continuous monitoring
      setInterval(async () => {
        await this.checkAllAutomations();
        await this.generateDashboardReport();
        await this.analyzeAutomationHealth();
        await this.optimizeAutomationSchedules();
      }, 300000); // Every 5 minutes
      
      // Set up detailed reporting every hour
      setInterval(async () => {
        await this.generateDetailedReport();
      }, 3600000); // Every hour
      
      console.log('✅ Intelligent automation dashboard started successfully');
      
    } catch (error) {
      console.error('❌ Dashboard startup failed:', error.message);
      this.logError(error);
    }
  }

  async checkAllAutomations() {
    try {
      console.log('🔍 Checking all automation services...');
      
      // Get PM2 status
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      const pm2Processes = JSON.parse(pm2Status);
      
      // Filter automation processes
      const automationProcesses = pm2Processes.filter(process => 
        process.name !== 'zion-app' && process.name !== 'zion-backend'
      );
      
      for (const process of automationProcesses) {
        const status = {
          name: process.name,
          status: process.pm2_env.status,
          uptime: process.pm2_env.pm_uptime,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          restarts: process.pm2_env.restart_time,
          lastUpdate: new Date().toISOString()
        };
        
        this.automationStatus.set(process.name, status);
        
        // Calculate health score
        this.healthScores.set(process.name, this.calculateHealthScore(status));
      }
      
      console.log(`🔍 Status check complete: ${automationProcesses.length} automation services monitored`);
      
    } catch (error) {
      console.log('⚠️  Automation status check failed:', error.message);
    }
  }

  calculateHealthScore(status) {
    let score = 100;
    
    // Deduct points for restarts
    if (status.restarts > 10) score -= 30;
    else if (status.restarts > 5) score -= 20;
    else if (status.restarts > 0) score -= 10;
    
    // Deduct points for high memory usage
    if (status.memory > 500) score -= 20; // Over 500MB
    else if (status.memory > 300) score -= 10; // Over 300MB
    
    // Deduct points for high CPU usage
    if (status.cpu > 80) score -= 20; // Over 80%
    else if (status.cpu > 50) score -= 10; // Over 50%
    
    // Deduct points for offline status
    if (status.status === 'stopped') score -= 50;
    if (status.status === 'errored') score -= 40;
    
    return Math.max(0, score);
  }

  async analyzeAutomationHealth() {
    try {
      console.log('🏥 Analyzing automation health...');
      
      const healthAnalysis = {
        overallHealth: 0,
        criticalIssues: [],
        warnings: [],
        recommendations: [],
        timestamp: new Date().toISOString()
      };
      
      let totalScore = 0;
      let processCount = 0;
      
      for (const [name, score] of this.healthScores) {
        totalScore += score;
        processCount++;
        
        if (score < 30) {
          healthAnalysis.criticalIssues.push({
            service: name,
            score: score,
            issue: 'Critical health issues detected',
            action: 'Immediate attention required'
          });
        } else if (score < 70) {
          healthAnalysis.warnings.push({
            service: name,
            score: score,
            issue: 'Health issues detected',
            action: 'Review and optimize'
          });
        }
      }
      
      healthAnalysis.overallHealth = processCount > 0 ? Math.round(totalScore / processCount) : 0;
      
      // Generate recommendations
      if (healthAnalysis.criticalIssues.length > 0) {
        healthAnalysis.recommendations.push('Restart critical services and investigate root causes');
      }
      
      if (healthAnalysis.warnings.length > 0) {
        healthAnalysis.recommendations.push('Optimize services with health scores below 70');
      }
      
      if (healthAnalysis.overallHealth < 80) {
        healthAnalysis.recommendations.push('Review automation schedules and resource allocation');
      }
      
      // Save health analysis
      const healthReportPath = path.join(this.reportsDirectory, 'automation-health-analysis.json');
      fs.writeFileSync(healthReportPath, JSON.stringify(healthAnalysis, null, 2));
      
      console.log(`🏥 Health analysis complete. Overall health: ${healthAnalysis.overallHealth}/100`);
      
    } catch (error) {
      console.log('⚠️  Health analysis failed:', error.message);
    }
  }

  async optimizeAutomationSchedules() {
    try {
      console.log('⚡ Optimizing automation schedules...');
      
      const scheduleOptimizations = {
        timestamp: new Date().toISOString(),
        optimizations: [],
        schedule: {}
      };
      
      // Analyze performance patterns and suggest optimizations
      for (const [name, status] of this.automationStatus) {
        const healthScore = this.healthScores.get(name);
        
        if (healthScore < 50) {
          // Suggest restart for unhealthy services
          scheduleOptimizations.optimizations.push({
            service: name,
            action: 'restart',
            reason: 'Low health score detected',
            priority: 'high'
          });
        }
        
        if (status.restarts > 5) {
          // Suggest investigation for frequently restarting services
          scheduleOptimizations.optimizations.push({
            service: name,
            action: 'investigate',
            reason: 'High restart count',
            priority: 'medium'
          });
        }
        
        if (status.memory > 400) {
          // Suggest memory optimization
          scheduleOptimizations.optimizations.push({
            service: name,
            action: 'optimize_memory',
            reason: 'High memory usage',
            priority: 'low'
          });
        }
      }
      
      // Generate optimized schedule
      scheduleOptimizations.schedule = this.generateOptimizedSchedule();
      
      // Save schedule optimizations
      const scheduleReportPath = path.join(this.reportsDirectory, 'schedule-optimizations.json');
      fs.writeFileSync(scheduleReportPath, JSON.stringify(scheduleOptimizations, null, 2));
      
      console.log(`⚡ Schedule optimization complete. ${scheduleOptimizations.optimizations.length} optimizations suggested`);
      
    } catch (error) {
      console.log('⚠️  Schedule optimization failed:', error.message);
    }
  }

  generateOptimizedSchedule() {
    // Generate intelligent schedule based on service health and priority
    return {
      high_priority: {
        interval: '15-30 minutes',
        services: ['console-error-fixer', 'ai-code-review', 'security-audit']
      },
      medium_priority: {
        interval: '1-2 hours',
        services: ['link-checker', 'continuous-improvement', 'performance-monitor']
      },
      low_priority: {
        interval: '4-6 hours',
        services: ['dependency-updates', 'sitemap-runner', 'front-maximizer']
      }
    };
  }

  async generateDashboardReport() {
    try {
      console.log('📊 Generating dashboard report...');
      
      const dashboardReport = {
        timestamp: new Date().toISOString(),
        summary: {
          totalServices: this.automationStatus.size,
          onlineServices: 0,
          offlineServices: 0,
          averageHealth: 0,
          criticalIssues: 0
        },
        services: [],
        performance: {
          totalMemory: 0,
          totalCPU: 0,
          totalRestarts: 0
        },
        recommendations: []
      };
      
      let totalHealth = 0;
      let onlineCount = 0;
      let offlineCount = 0;
      let criticalCount = 0;
      
      for (const [name, status] of this.automationStatus) {
        const healthScore = this.healthScores.get(name);
        totalHealth += healthScore;
        
        if (status.status === 'online') {
          onlineCount++;
        } else {
          offlineCount++;
        }
        
        if (healthScore < 30) {
          criticalCount++;
        }
        
        dashboardReport.services.push({
          name: name,
          status: status.status,
          health: healthScore,
          memory: status.memory,
          cpu: status.cpu,
          restarts: status.restarts,
          uptime: status.uptime
        });
        
        dashboardReport.performance.totalMemory += status.memory;
        dashboardReport.performance.totalCPU += status.cpu;
        dashboardReport.performance.totalRestarts += status.restarts;
      }
      
      dashboardReport.summary.onlineServices = onlineCount;
      dashboardReport.summary.offlineServices = offlineCount;
      dashboardReport.summary.averageHealth = Math.round(totalHealth / this.automationStatus.size);
      dashboardReport.summary.criticalIssues = criticalCount;
      
      // Generate recommendations
      if (criticalCount > 0) {
        dashboardReport.recommendations.push('Immediate attention required for critical services');
      }
      
      if (offlineCount > 0) {
        dashboardReport.recommendations.push('Restart offline automation services');
      }
      
      if (dashboardReport.performance.totalMemory > 2000) {
        dashboardReport.recommendations.push('High memory usage detected - consider optimization');
      }
      
      // Save dashboard report
      const dashboardReportPath = path.join(this.reportsDirectory, 'dashboard-report.json');
      fs.writeFileSync(dashboardReportPath, JSON.stringify(dashboardReport, null, 2));
      
      // Display summary
      this.displayDashboardSummary(dashboardReport);
      
    } catch (error) {
      console.log('⚠️  Dashboard report generation failed:', error.message);
    }
  }

  displayDashboardSummary(report) {
    console.log('\n🎛️  INTELLIGENT AUTOMATION DASHBOARD SUMMARY');
    console.log('=' .repeat(60));
    console.log(`📊 Total Services: ${report.summary.totalServices}`);
    console.log(`🟢 Online: ${report.summary.onlineServices} | 🔴 Offline: ${report.summary.offlineServices}`);
    console.log(`🏥 Average Health: ${report.summary.averageHealth}/100`);
    console.log(`⚠️  Critical Issues: ${report.summary.criticalIssues}`);
    console.log(`💾 Total Memory: ${Math.round(report.performance.totalMemory)}MB`);
    console.log(`🔄 Total Restarts: ${report.performance.totalRestarts}`);
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      report.recommendations.forEach(rec => console.log(`   • ${rec}`));
    }
    
    console.log('=' .repeat(60));
  }

  async generateDetailedReport() {
    try {
      console.log('📋 Generating detailed automation report...');
      
      const detailedReport = {
        timestamp: new Date().toISOString(),
        automationStatus: Object.fromEntries(this.automationStatus),
        healthScores: Object.fromEntries(this.healthScores),
        performanceMetrics: this.calculatePerformanceMetrics(),
        automationHistory: await this.getAutomationHistory(),
        recommendations: this.generateDetailedRecommendations()
      };
      
      // Save detailed report
      const detailedReportPath = path.join(this.reportsDirectory, 'detailed-automation-report.json');
      fs.writeFileSync(detailedReportPath, JSON.stringify(detailedReport, null, 2));
      
      console.log('✅ Detailed report generated successfully');
      
    } catch (error) {
      console.log('⚠️  Detailed report generation failed:', error.message);
    }
  }

  calculatePerformanceMetrics() {
    const metrics = {
      memoryEfficiency: 0,
      cpuEfficiency: 0,
      restartEfficiency: 0,
      overallEfficiency: 0
    };
    
    if (this.automationStatus.size > 0) {
      const avgMemory = Array.from(this.automationStatus.values())
        .reduce((sum, status) => sum + status.memory, 0) / this.automationStatus.size;
      
      const avgCPU = Array.from(this.automationStatus.values())
        .reduce((sum, status) => sum + status.cpu, 0) / this.automationStatus.size;
      
      const avgRestarts = Array.from(this.automationStatus.values())
        .reduce((sum, status) => sum + status.restarts, 0) / this.automationStatus.size;
      
      metrics.memoryEfficiency = Math.max(0, 100 - (avgMemory / 10));
      metrics.cpuEfficiency = Math.max(0, 100 - avgCPU);
      metrics.restartEfficiency = Math.max(0, 100 - (avgRestarts * 10));
      metrics.overallEfficiency = Math.round((metrics.memoryEfficiency + metrics.cpuEfficiency + metrics.restartEfficiency) / 3);
    }
    
    return metrics;
  }

  async getAutomationHistory() {
    try {
      // This would typically read from a database or log files
      // For now, return a placeholder
      return {
        last24Hours: {
          totalRuns: 0,
          successfulRuns: 0,
          failedRuns: 0,
          averageExecutionTime: 0
        },
        last7Days: {
          totalRuns: 0,
          successfulRuns: 0,
          failedRuns: 0,
          averageExecutionTime: 0
        }
      };
    } catch (error) {
      return {};
    }
  }

  generateDetailedRecommendations() {
    const recommendations = [];
    
    // Analyze each service and generate specific recommendations
    for (const [name, status] of this.automationStatus) {
      const healthScore = this.healthScores.get(name);
      
      if (healthScore < 50) {
        recommendations.push({
          service: name,
          priority: 'high',
          recommendation: `Service ${name} has critical health issues. Consider restart and investigation.`,
          action: 'restart_and_investigate'
        });
      } else if (healthScore < 80) {
        recommendations.push({
          service: name,
          priority: 'medium',
          recommendation: `Service ${name} has moderate health issues. Monitor and optimize.`,
          action: 'monitor_and_optimize'
        });
      }
      
      if (status.restarts > 3) {
        recommendations.push({
          service: name,
          priority: 'medium',
          recommendation: `Service ${name} has restarted ${status.restarts} times. Investigate stability issues.`,
          action: 'investigate_stability'
        });
      }
    }
    
    return recommendations;
  }

  logError(error) {
    const errorLog = `[${new Date().toISOString()}] ERROR: ${error.message}\n${error.stack}\n`;
    fs.appendFileSync(this.logFile, errorLog);
  }
}

// Main execution
async function main() {
  const dashboard = new IntelligentAutomationDashboard();
  
  // Start the dashboard
  await dashboard.startDashboard();
  
  console.log('🎛️  Intelligent automation dashboard is now running');
  console.log('📊 Reports are generated every 5 minutes');
  console.log('📋 Detailed reports are generated every hour');
  console.log('📁 Reports are saved to: automation-reports/');
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🎛️  Intelligent automation dashboard shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🎛️  Intelligent automation dashboard shutting down gracefully...');
  process.exit(0);
});

// Start the dashboard
main().catch(console.error);