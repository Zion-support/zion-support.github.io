
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
    overallStatus: 'unknown',
  };

  try {
    // Check PM2 processes
    console.log('📋 Checking PM2 processes...');
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
main

  
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
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

      const pm2Data = JSON.parse(pm2List);
      statusReport.pm2Processes = pm2Data;

      const runningProcesses = pm2Data.filter(
        proc => proc.pm2_env && proc.pm2_env.status === 'online'
      );

      
    } catch (error) {
      
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b
      
    } catch (error) {
      
main


      statusReport.pm2Processes = [];
    }

    // Check automation scripts

origin/cursor/expand-services-advertise-and-build-project-c28b
main

    
    const automationScripts = ['scripts/comprehensive-automation-suite.cjs',
      'scripts/automation-orchestrator.cjs',
      'scripts/start-all-automations.sh',
      'automation/security-scanner.cjs',
      'automation/master-orchestrator.cjs',
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

      'automation/health-check.cjs',
      'automation/security-scanner.cjs',
      'automation/code-quality-monitor.cjs',
      'automation/performance-optimizer.cjs',
    ];

    for (const script of automationScripts) {
      const scriptPath = path.join(process.cwd(), script);
      const exists = fs.existsSync(scriptPath);
      statusReport.automationScripts.push({
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
main

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
ursor/automate-test-improve-and-merge-code-2480

origin/cursor/expand-services-advertise-and-build-project-c28b
    }

    // Check system health
    
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
    try {
      const healthCheck = execSync('node automation/health-check.cjs', { encoding: 'utf8' });
      statusReport.systemHealth.healthCheck = 'passed';
      console.log('✅ Health check passed');
    } catch (error) {
      statusReport.systemHealth.healthCheck = 'failed';
      console.log('❌ Health check failed');
    }

    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);

main

    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));

    
    
    
    
    


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

    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));

    
    
    
    
    

origin/cursor/integrate-build-improve-and-re-verify-c7b5
main
    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);

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
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b


    statusReport.overallStatus = 'error';
  }

  return statusReport;
}


// Run if called directly
main
if (require.main === module) {







main

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


if (require.main === module) {
  checkAutomationStatus().then(report => {
    process.exit(report.overallStatus === 'healthy' ? 0 : 1);
  });
}
module.exports = checkAutomationStatus;

module.exports = checkAutomationStatus;
module.exports = checkAutomationStatus;
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b
main


