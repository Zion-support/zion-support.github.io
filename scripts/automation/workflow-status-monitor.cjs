#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting workflow status monitor automation...');

// This script runs every 2 hours to replace the GitHub Actions status workflow
const MONITOR_INTERVAL = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

async function runWorkflowStatusMonitor() {
  try {
    console.log(`📊 Running workflow status monitor at ${new Date().toISOString()}`);
    
    // Get PM2 process status
    console.log('🔍 Checking PM2 process status...');
    let pm2Status = {};
    let overallStatus = 'healthy';
    let issues = [];
    
    try {
      const statusOutput = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(statusOutput);
      
      processes.forEach(process => {
        pm2Status[process.name] = {
          status: process.pm2_env.status,
          restarts: process.pm2_env.restart_time,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime
        };
        
        if (process.pm2_env.status !== 'online') {
          overallStatus = 'issues_detected';
          issues.push(`${process.name}: ${process.pm2_env.status}`);
        }
        
        if (process.pm2_env.restart_time > 5) {
          issues.push(`${process.name}: excessive restarts (${process.pm2_env.restart_time})`);
        }
      });
      
      console.log(`✅ PM2 status check completed - ${processes.length} processes monitored`);
    } catch (error) {
      console.log('❌ Failed to get PM2 status');
      overallStatus = 'monitoring_failed';
      issues.push('PM2 status monitoring failed');
    }
    
    // Check system resources
    console.log('🔍 Checking system resources...');
    let systemResources = {};
    
    try {
      // Check disk usage
      const diskOutput = execSync('df -h .', { encoding: 'utf8' });
      const diskLines = diskOutput.split('\n')[1].split(/\s+/);
      systemResources.disk = {
        used: diskLines[2],
        available: diskLines[3],
        usage: diskLines[4]
      };
      
      // Check memory usage
      const memoryOutput = execSync('free -h', { encoding: 'utf8' });
      const memoryLines = memoryOutput.split('\n')[1].split(/\s+/);
      systemResources.memory = {
        total: memoryLines[1],
        used: memoryLines[2],
        free: memoryLines[3]
      };
      
      // Check CPU load
      const loadOutput = execSync('uptime', { encoding: 'utf8' });
      const loadMatch = loadOutput.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
      if (loadMatch) {
        systemResources.cpu = {
          load1: parseFloat(loadMatch[1]),
          load5: parseFloat(loadMatch[2]),
          load15: parseFloat(loadMatch[3])
        };
      }
      
      console.log('✅ System resource check completed');
    } catch (error) {
      console.log('⚠️  System resource check failed');
      issues.push('System resource monitoring failed');
    }
    
    // Check application health
    console.log('🔍 Checking application health...');
    let appHealth = {};
    
    try {
      // Check if main app is responding
      const appProcess = pm2Status['zion-app'];
      if (appProcess && appProcess.status === 'online') {
        appHealth.mainApp = 'healthy';
      } else {
        appHealth.mainApp = 'unhealthy';
        issues.push('Main application is not running properly');
      }
      
      // Check if backend is responding
      const backendProcess = pm2Status['zion-backend'];
      if (backendProcess && backendProcess.status === 'online') {
        appHealth.backend = 'healthy';
      } else {
        appHealth.backend = 'unhealthy';
        issues.push('Backend service is not running properly');
      }
      
      // Check automation processes
      const automationProcesses = [
        'console-error-fixer',
        'link-checker',
        'continuous-improvement',
        'daily-build-test',
        'security-audit',
        'dependency-updates'
      ];
      
      automationProcesses.forEach(processName => {
        const process = pm2Status[processName];
        if (process && process.status === 'online') {
          appHealth[processName] = 'healthy';
        } else {
          appHealth[processName] = 'unhealthy';
          issues.push(`${processName} automation is not running properly`);
        }
      });
      
      console.log('✅ Application health check completed');
    } catch (error) {
      console.log('⚠️  Application health check failed');
      issues.push('Application health monitoring failed');
    }
    
    // Generate comprehensive status report
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Workflow status monitor report',
      status: overallStatus,
      metrics: {
        totalProcesses: Object.keys(pm2Status).length,
        healthyProcesses: Object.values(pm2Status).filter(p => p.status === 'online').length,
        issuesDetected: issues.length,
        systemHealth: issues.length === 0 ? 'healthy' : 'needs_attention'
      },
      details: {
        pm2Status: pm2Status,
        systemResources: systemResources,
        appHealth: appHealth,
        issues: issues
      },
      recommendations: issues.length > 0 ? [
        'Investigate identified issues',
        'Check PM2 process logs',
        'Review system resource usage',
        'Restart failed processes if needed'
      ] : [
        'Continue monitoring',
        'Maintain current configuration',
        'Schedule regular health checks'
      ]
    };
    
    const reportPath = path.join(process.cwd(), 'workflow-status-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Status report saved to ${reportPath}`);
    
    if (issues.length === 0) {
      console.log('✅ Workflow status monitor completed - all systems healthy');
    } else {
      console.log(`⚠️  Workflow status monitor completed - ${issues.length} issues detected`);
      console.log('📋 Issues:', issues.join(', '));
    }
    
  } catch (error) {
    console.error('❌ Workflow status monitor failed:', error.message);
    
    // Generate error report
    const errorReport = {
      timestamp: new Date().toISOString(),
      summary: 'Workflow status monitor failed',
      status: 'failed',
      error: error.message,
      actions: [
        'Attempted status monitoring',
        'Encountered error during process'
      ]
    };
    
    const errorReportPath = path.join(process.cwd(), 'workflow-status-error-report.json');
    fs.writeFileSync(errorReportPath, JSON.stringify(errorReport, null, 2));
    console.log(`📊 Error report saved to ${errorReportPath}`);
  }
}

// Run the function immediately
runWorkflowStatusMonitor();

// Set up interval for monitoring
setInterval(runWorkflowStatusMonitor, MONITOR_INTERVAL);

console.log(`⏰ Workflow status monitor scheduled to run every ${MONITOR_INTERVAL / (60 * 60 * 1000)} hours`);
console.log('🔄 Process will continue running...');