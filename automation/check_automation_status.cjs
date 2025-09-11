#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
async function checkAutomationStatus() {
  console.log('🔍 Checking Automation Status...');

  const statusReport = {
    timestamp: new Date().toISOString(),
    pm2Processes: [],
    automationScripts: [],
    systemHealth: {},

  try {
    // Check PM2 processes
    console.log('📋 Checking PM2 processes...');
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });

async function checkAutomationStatus() {
  console.log('🔍 Checking Automation Status...');
  
  const statusReport = {
    "timestamp": new Date().toISOString(),
    "pm2Processes": [],
    "automationScripts": [],
    "systemHealth": {},
    "overallStatus": 'unknown'};
  try {
    // Check PM2 processes
    timestamp: new Date().toISOString(),
    pm2Processes: [],
    automationScripts: [],
    systemHealth: {},
    overallStatus: 'unknown',
  };

  try {
    // Check PM2 processes
    console.log('📋 Checking PM2 processes...');
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
  
  const statusReport = {
    "timestamp": new Date().toISOString(),
    "pm2Processes": [],
    "automationScripts": [],
    "systemHealth": {},
    "overallStatus": 'unknown'};
  try {
    // Check PM2 processes
    try {
      const pm2List = execSync('pm2 jlist', { "encoding": 'utf8' });
      const pm2Data = JSON.parse(pm2List);
      statusReport.pm2Processes = pm2Data;
      const runningProcesses = pm2Data.filter(
        proc => proc.pm2_env && proc.pm2_env.status === 'online'
      );
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
    } catch (error) {
      
    } catch (error) {
      
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
      statusReport.pm2Processes = [];
    }
    // Check automation scripts
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'scripts/comprehensive-automation-suite.cjs',
    
    const automationScripts = ['scripts/comprehensive-automation-suite.cjs',
      'scripts/automation-orchestrator.cjs',
      'scripts/start-all-automations.sh',
      'automation/security-scanner.cjs',
      'automation/master-orchestrator.cjs',
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
      'automation/health-check.cjs',
      'automation/security-scanner.cjs',
      'automation/code-quality-monitor.cjs',
      'automation/performance-optimizer.cjs',
    ];
    for (const script of automationScripts) {
      const scriptPath = path.join(process.cwd(), script);
      const exists = fs.existsSync(scriptPath);
      statusReport.automationScripts.push({
        name: script,
        exists,
        isExecutable,
        status: exists
          ? isExecutable
            ? 'ready'
            : 'not_executable'
          : 'missing',
      });
    }
    // Check system health
    console.log('📋 Checking system health...');
    const systemHealth = {
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      nodeVersion: process.version,
      platform: process.platform,
    };
        "name": script,
        name: script,
        exists,
        path: scriptPath
      });
      
      if (exists) {
        console.log(`✅ ${script} - Available`);
      } else {
        console.log(`❌ ${script} - Missing`);
      }
    }
    // Check system health
    console.log('📋 Checking system health...');
    try {
      const healthCheck = execSync('node automation/health-check.cjs', { encoding: 'utf8' });
      statusReport.systemHealth.healthCheck = 'passed';
      console.log('✅ Health check passed');
    } catch (error) {
      statusReport.systemHealth.healthCheck = 'failed';
      console.log('❌ Health check failed');
    const systemHealth = {
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      nodeVersion: process.version,
      platform: process.platform,
    };
        "name": script,
        exists,
        isExecutable,
        "status": exists
          ? isExecutable
            ? 'ready'
            : 'not_executable'
          : 'missing'});
    try {
      const healthCheck = execSync('node automation/health-check.cjs', { encoding: 'utf8' });
      statusReport.systemHealth.healthCheck = 'passed';
      console.log('✅ Health check passed');
    } catch (error) {
      statusReport.systemHealth.healthCheck = 'failed';
      console.log('❌ Health check failed');
    }

    const systemHealth = {
      "memoryUsage": process.memoryUsage(),
      "uptime": process.uptime(),
      "nodeVersion": process.version,
      "platform": process.platform};
    statusReport.systemHealth = systemHealth;
    // Determine overall status
    const runningProcesses = statusReport.pm2Processes.filter(
      proc => proc.pm2_env && proc.pm2_env.status === 'online'
    );
    const availableScripts = statusReport.automationScripts.filter(
      script => script.exists && script.isExecutable
    );
    if (runningProcesses.length > 0 && availableScripts.length > 0) {
      statusReport.overallStatus = 'healthy';
    } else if (availableScripts.length > 0) {
      statusReport.overallStatus = 'ready';
    } else {
      statusReport.overallStatus = 'needs_attention';
    }
    // Save report
    const reportPath = path.join(process.cwd(), 'logs', 'automation-status-report.json');
    try {
      fs.mkdirSync(path.dirname(reportPath), { recursive: true });
      fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
      console.log(`\n💾 Report saved to: ${reportPath}`);
    } catch (error) {
      console.log('⚠️  Could not save report file');
    }

  } catch (error) {
    console.error('❌ Error checking automation status:', error.message);
    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
    console.log('📊 Status Report:');
    console.log(`   Overall Status: ${statusReport.overallStatus}`);
    console.log(`   PM2 Processes: ${runningProcesses.length} running`);
    console.log(
      `   Available Scripts: ${availableScripts.length}/${automationScripts.length}`
    );
    console.log(`   Report saved to: ${reportPath}`);
    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation status:', error.message);

    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);
    console.log('📋 Checking system health...');
    try {
      const healthCheck = execSync('node automation/health-check.cjs', { encoding: 'utf8' });
      statusReport.systemHealth.healthCheck = 'passed';
      console.log('✅ Health check passed');
    } catch (error) {
      statusReport.systemHealth.healthCheck = 'failed';
      console.log('❌ Health check failed');
    }

    // Determine overall status
    const availableScripts = statusReport.automationScripts.filter(s => s.exists).length;
    const totalScripts = statusReport.automationScripts.length;
    const runningProcesses = statusReport.pm2Processes.filter(
      proc => proc.pm2_env && proc.pm2_env.status === 'online'
    ).length;

    if (availableScripts === totalScripts && statusReport.systemHealth.healthCheck === 'passed') {
      statusReport.overallStatus = 'healthy';
    } else if (availableScripts >= totalScripts * 0.8) {
      statusReport.overallStatus = 'warning';
    } else {
      statusReport.overallStatus = 'critical';
    }

    console.log(`\n📊 Status Summary:`);
    console.log(`   Scripts Available: ${availableScripts}/${totalScripts}`);
    console.log(`   PM2 Processes: ${runningProcesses}`);
    console.log(`   Health Check: ${statusReport.systemHealth.healthCheck}`);
    console.log(`   Overall Status: ${statusReport.overallStatus.toUpperCase()}`);

    // Save report
    const reportPath = path.join(process.cwd(), 'logs', 'automation-status-report.json');
    try {
      fs.mkdirSync(path.dirname(reportPath), { recursive: true });
      fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
      console.log(`\n💾 Report saved to: ${reportPath}`);
    } catch (error) {
      console.log('⚠️  Could not save report file');
    }

  } catch (error) {
    console.error('❌ Error checking automation status:', error.message);
    statusReport.overallStatus = 'error';
  }

  return statusReport;
}
// Run if called directly
if (require.main === module) {
  checkAutomationStatus().then(report => {
    process.exit(report.overallStatus === 'healthy' ? 0 : 1);
  });
}

module.exports = checkAutomationStatus;
  checkAutomationStatus()
    .then(() => {
      process.exit(0);
    })
    .catch(error => {
      console.error('Fatal error:', error);
      console.error('Fatal "error": ', error);
      process.exit(1);
    });
}
module.exports = { checkAutomationStatus };
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");async function checkAutomationStatus() {" console.log(" Checking Automation Status."); const statusReport = { timestamp: new Date().toISOString()," pm2Processes: []," automationScripts: []," systemHealth: {},"" overallStatus: "unknown"}; try { / Check PM2 processes" console.log(" Checking PM2 processes."); try {"" const pm2List = execSync("pm2 jlist", { encoding: "utf8" }); const pm2Data = JSON.parse(pm2List); statusReport.pm2Processes = pm2Data; const runningProcesses = pm2Data.filter(" proc => proc.pm2_env && proc.pm2_env.status === "online" ); console.log(` Found ${runningProcesses.length} running PM2 processes`); } catch (error) {" console.log(" PM2 not available or no processes running"); statusReport.pm2Processes = []; } / Check automation scripts" console.log(" Checking automation scripts.");" const automationScripts = ["scripts/comprehensive-automation-suite.cjs"," "scripts/automation-orchestrator.cjs"," "scripts/start-all-automations.sh"," "automation/security-scanner.cjs"," "automation/health-check.cjs", ]; for (const script of automationScripts) { const exists = fs.existsSync(script); const isExecutable = exists" ? fs.statSync(script).mode & parseInt("111", 8) : false; statusReport.automationScripts.push({" name: script, exists, isExecutable," status: exists ? isExecutable" ? "ready"" : "not_executable"" : "missing"}); } / Check system health" console.log(" Checking system health."); const systemHealth = {" memoryUsage: process.memoryUsage()," uptime: process.uptime()," nodeVersion: process.version," platform: process.platform}; statusReport.systemHealth = systemHealth; / Determine overall status const runningProcesses = statusReport.pm2Processes.filter(" proc => proc.pm2_env && proc.pm2_env.status === "online" ); const availableScripts = statusReport.automationScripts.filter( script => script.exists && script.isExecutable ); if (runningProcesses.length > 0 && availableScripts.length > 0) {" statusReport.overallStatus = "healthy"; } else if (availableScripts.length > 0) {" statusReport.overallStatus = "ready"; } else {" statusReport.overallStatus = "needs_attention"; } / Save report const reportPath = path.join( process.cwd()," "automation-status-report.json" ); fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));"" console.log(" Status Report: ");` console.log(` Overall Status: ${statusReport.overallStatus}`);"` console.log(` PM2 Processes: ${runningProcesses.length} running`); console.log("` ` Available Scripts: ${availableScripts.length}/${automationScripts.length}` );"` console.log(` Report saved to: ${reportPath}`); return statusReport; } catch (error) {"" console.error(" Error checking automation status: ", error.message);" statusReport.overallStatus = "error"; statusReport.error = error.message; return statusReport; }}/ Run if called directlyif (require.main === module) { checkAutomationStatus() .then(() => { process.exit(0); }) .catch(error => {"" console.error("Fatal error: ", error); process.exit(1); });}module.exports = { checkAutomationStatus };'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  console.log(' Checking Automation Status...')
    "overallStatus"
      const pm2List = execSync('pm2 jlist', { "encoding"})
    console.log(' Status "Report")
    console.error(' Error checking automation "status")
      console.error('Fatal "error")
      console.error('Fatal "error")

if (require.main === module) {
  checkAutomationStatus().then(report => {
    process.exit(report.overallStatus === 'healthy' ? 0 : 1);
  });
}

module.exports = checkAutomationStatus;
module.exports = checkAutomationStatus;
