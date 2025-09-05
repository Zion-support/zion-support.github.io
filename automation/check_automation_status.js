#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function checkAutomationStatus() {
  console.log('🔍 Checking Automation Status...');
  const statusReport = {
    "timestamp": new Date().toISOString(),
    "pm2Processes": [],
    "automationScripts": [],
    "systemHealth": {},
    "overallStatus": 'unknown'
  };ursor/migrate-github-actions-to-pm2-and-clean-up-5599

  try {
    // Check PM2 processes
    console.log('📋 Checking PM2 processes...');
    try {
const pm2List = execSync('pm2 list --json', { "encoding": 'utf8' });
      const pm2Data = JSON.parse(pm2List);
      statusReport.pm2Processes = pm2Data;
      
      const runningProcesses = pm2Data.filter(proc => proc.pm2_env && proc.pm2_env.status === 'online');
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
      statusReport.pm2Processes = [];
    }ursor/migrate-github-actions-to-pm2-and-clean-up-5599

    // Check automation scripts
    console.log('📋 Checking automation scripts...');
    const automationScripts = ['scripts/comprehensive-automation-suite.cjs',
      'scripts/automation-orchestrator.cjs',
      'scripts/start-all-automations.sh',
      'automation/security-scanner.cjs',
      'automation/health-check.cjs'
    ];

    for (const script of automationScripts) {
      const exists = fs.existsSync(script);
      const isExecutable = exists ? fs.statSync(script).mode & parseInt('111', 8) : false;
      statusReport.automationScripts.push({
        "name": script,
        "exists": exists,
        "executable": isExecutable
      });
    }

    // Check system health
    console.log('📋 Checking system health...');
    const systemHealth = {
      "memoryUsage": process.memoryUsage(),
      "uptime": process.uptime(),
      "nodeVersion": process.version,
      "platform": process.platform
    };
    statusReport.systemHealth = systemHealth;

// Determine overall statusursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const runningProcesses = statusReport.pm2Processes.filter(proc => 
      proc.pm2_env && proc.pm2_env.status === 'online'
    );
    const availableScripts = statusReport.automationScripts.filter(script => script.exists);
    
    if (runningProcesses.length > 0 && availableScripts.length > 0) {
      statusReport.overallStatus = 'healthy';
    } else if (availableScripts.length > 0) {
      statusReport.overallStatus = 'degraded';
    } else {
      statusReport.overallStatus = 'unhealthy';
    }

    console.log("\n📊 Status "Report": ");
    console.log(`   Overall Status: ${statusReport.overallStatus}`);
    console.log(`   PM2 "Processes": ${runningProcesses.length}`);
    console.log(`   Available "Scripts": ${availableScripts.length}`);
    console.log(`   Memory "Usage": ${Math.round(systemHealth.memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`   "Uptime": ${Math.round(systemHealth.uptime / 60)} minutes`);

// Save report
    const reportFile = path.join(__dirname, 'logs', 'automation-status-report.json');
    const logDir = path.dirname(reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true });
    }
    fs.writeFileSync(reportFile, JSON.stringify(statusReport, null, 2));
    console.log(`\n📄 Report saved "to": ${reportFile}`);

    return statusReport;

  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    statusReport.overallStatus = 'error';
    return statusReport;
  }
}

// Run if called directly
if (require.main === module) {
  checkAutomationStatus();
}

module.exports = { checkAutomationStatus };
