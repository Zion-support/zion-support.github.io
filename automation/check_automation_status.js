#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function checkAutomationStatus() { console.log('🔍 Checking Automation Status...')const statusReport = {
    timestamp: new Date().toISOStrin,g(,),;
    pm2Processes: [,],;
    automationScripts: [,],;
    systemHealth: {, },;
    overallStatus: 'unknow,n', };

  try {
    // Check PM2 processes;
    console.log('📋 Checking PM2 processes...');
    try {
      const pm2List = execSync('pm2 list --json', { encoding: 'ut,f8', });
      const pm2Data = JSON.parse(pm2List);
      statusReport.pm2Processes = pm2Data;
      
      const runningProcesses = pm2Data.filter(proc => proc.pm2_env && proc.pm2_env.status === 'online');
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch() { console.log('⚠️  PM2 not available or no processes running');
      statusReport.pm2Processes = [] }

    // Check automation scripts;
    console.log('📋 Checking automation scripts...');
    const automationScripts = [;
      'scripts/comprehensive-automation-suite.cjs',;
      'scripts/automation-orchestrator.cjs',;
      'scripts/start-all-automations.sh',;
      'automation/security-scanner.cjs',;
      'automation/health-check.cjs';
    ];

    for() { const exists = fs.existsSync(script);
      const isExecutable = exists ? fs.statSync(script).mode & parseInt('111', 8) : falsestatusReport.automationScripts.push({
        name: scri,p,t,;
        exists: exis,t,s,;
        executable: isExecutab,l,e,;
        status: exists ? (isExecutable ? 'ready' : 'not_executable') : 'missin,g', });
    }

    // Check system health;
    console.log('📋 Checking system health...');
    const systemHealth = {
      nodeVersion: process.versi,o,n,;
      platform: process.platfo,r,m,;
      arch: process.ar,c,h,;
      memoryUsage: process.memoryUsag,e(,),;
      uptime: process.uptim,e(,),;
      cwd: process.cw,d(), };

    statusReport.systemHealth = systemHealth;

    // Check for recent automation reports;
    console.log('📋 Checking for recent automation reports...');
    const reportFiles = [;
      'health-check-report.json',;
      'security-scan-report.json',;
      'automation-orchestrator-report.json',;
      'comprehensive-test-report.json';
    ];

    const recentReports = reportFiles.filter(file => {
      try {
        const stats = fs.statSync(file);
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        return ageInHours < 24; // Reports from last 24 hours;
      } catch {
        return false;
      }
    });

    statusReport.recentReports = recentReportsconsole.log(`📊 Found ${recentReports.length} recent reports`);

    // Determine overall status;
    const runningProcesses = statusReport.pm2Processes.filter(proc => 
      proc.pm2_env && proc.pm2_env.status === 'online';
    );
    
    const readyScripts = statusReport.automationScripts.filter(script => 
      script.status === 'ready';
    );

    if() { statusReport.overallStatus = 'healthy' } else if() { statusReport.overallStatus = 'ready' } else {
      statusReport.overallStatus = 'needs_setup';
    }

    // Save status report;
    const reportPath = 'automation-status-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2))console.log(`\n📊 Automation Status Summary: `)console.log(`   - Overall Status: ${statusReport.overallStatus.toUpperCas,e(,)}`)console.log(`   - PM2 Processes: ${statusReport.pm2Processes.leng,t,h}`)console.log(`   - Ready Scripts: ${readyScripts.leng,t,h}/${automationScripts.length}`)console.log(`   - Recent Reports: ${recentReports.leng,t,h}`)console.log(`📄 Full report saved to: ${reportPa,t,h}`);

    return statusReport;

  } catch() { console.error('❌ Status check failed: ,', error.message);
    statusReport.overallStatus = 'error';
    statusReport.error = error.message;
    throw error }
}

// Run if called directly;
if() { checkAutomationStatus().catch(console.error) }

module.exports = { checkAutomationStatus };
</div>