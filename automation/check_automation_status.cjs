<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

  const statusReport = {

=======
=======
>>>>>>> main
  
  const statusReport = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    "timestamp": new Date().toISOString(),
    "pm2Processes": [],
    "automationScripts": [],
    "systemHealth": {},
    "overallStatus": 'unknown'};
  try {
    // Check PM2 processes
    try {
      const pm2List = execSync('pm2 jlist', { "encoding": 'utf8' });
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const pm2Data = JSON.parse(pm2List);
      statusReport.pm2Processes = pm2Data;
      const runningProcesses = pm2Data.filter(
        proc => proc.pm2_env && proc.pm2_env.status === 'online'
      );
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {
      
    } catch (error) {
      
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
=======
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
=======
<<<<<<< HEAD
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
<<<<<<< HEAD
    } catch (error) {
=======
      
    } catch (error) {
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      
    } catch (error) {
      
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      statusReport.pm2Processes = [];
    }
    // Check automation scripts
<<<<<<< HEAD

      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
      statusReport.pm2Processes = [];
    }
    // Check automation scripts
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
<<<<<<< HEAD
      'automation/master-orchestrator.cjs',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
      'scripts/comprehensive-automation-suite.cjs',
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const automationScripts = ['scripts/comprehensive-automation-suite.cjs',
      'scripts/automation-orchestrator.cjs',
      'scripts/start-all-automations.sh',
      'automation/security-scanner.cjs',
<<<<<<< HEAD

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
      'automation/master-orchestrator.cjs',
      'automation/master-orchestrator.cjs',
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
      'automation/master-orchestrator.cjs',
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
      'automation/master-orchestrator.cjs',
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      'automation/health-check.cjs',
      'automation/security-scanner.cjs',
      'automation/code-quality-monitor.cjs',
      'automation/performance-optimizer.cjs',
    ];
    for (const script of automationScripts) {
      const scriptPath = path.join(process.cwd(), script);
      const exists = fs.existsSync(scriptPath);
      statusReport.automationScripts.push({
<<<<<<< HEAD

=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    console.log('📋 Checking system health...');

=======
    try {
      const healthCheck = execSync('node automation/health-check.cjs', { encoding: 'utf8' });
      statusReport.systemHealth.healthCheck = 'passed';
      console.log('✅ Health check passed');
    } catch (error) {
      statusReport.systemHealth.healthCheck = 'failed';
      console.log('❌ Health check failed');
<<<<<<< HEAD
=======
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const systemHealth = {
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      nodeVersion: process.version,
      platform: process.platform,
    };
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "name": script,
        exists,
        isExecutable,
        "status": exists
          ? isExecutable
            ? 'ready'
            : 'not_executable'
          : 'missing'});

=======
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      const healthCheck = execSync('node automation/health-check.cjs', { encoding: 'utf8' });
      statusReport.systemHealth.healthCheck = 'passed';
      console.log('✅ Health check passed');
    } catch (error) {
      statusReport.systemHealth.healthCheck = 'failed';
      console.log('❌ Health check failed');

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    }

<<<<<<< HEAD
    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);
=======
    // Check system health
    
    const systemHealth = {
      "memoryUsage": process.memoryUsage(),
      "uptime": process.uptime(),
      "nodeVersion": process.version,
      "platform": process.platform};
    statusReport.systemHealth = systemHealth;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Determine overall status
    const runningProcesses = statusReport.pm2Processes.filter(
      proc => proc.pm2_env && proc.pm2_env.status === 'online'
<<<<<<< HEAD
    ).length;
=======
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
>>>>>>> main
    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));

    
    
    
    
    

<<<<<<< HEAD
    return statusReport;
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (availableScripts === totalScripts && statusReport.systemHealth.healthCheck === 'passed') {
      statusReport.overallStatus = 'healthy';
    } else if (availableScripts >= totalScripts * 0.8) {
      statusReport.overallStatus = 'warning';
    } else {
      statusReport.overallStatus = 'critical';
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.log(`\n📊 Status Summary:`);
    console.log(`   Scripts Available: ${availableScripts}/${totalScripts}`);
    console.log(`   PM2 Processes: ${runningProcesses}`);
    console.log(`   Health Check: ${statusReport.systemHealth.healthCheck}`);
    console.log(`   Overall Status: ${statusReport.overallStatus.toUpperCase()}`);
<<<<<<< HEAD
    // Save report
=======
=======

    // Save report
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const reportPath = path.join(process.cwd(), 'logs', 'automation-status-report.json');
    try {
      fs.mkdirSync(path.dirname(reportPath), { recursive: true });
      fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
      console.log(`\n💾 Report saved to: ${reportPath}`);
    } catch (error) {
      console.log('⚠️  Could not save report file');
    }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
=======
  } catch (error) {
    console.error('❌ Error checking automation status:', error.message);
<<<<<<< HEAD
=======
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======

    
    
    
    
    

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    statusReport.overallStatus = 'error';
  }

  return statusReport;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

// Run if called directly
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
if (require.main === module) {

<<<<<<< HEAD
=======
module.exports = checkAutomationStatus;
=======
=======
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  checkAutomationStatus()
    .then(() => {
      process.exit(0);
    })
    .catch(error => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      console.error('Fatal "error": ', error);
      process.exit(1);
    });
}
module.exports = { checkAutomationStatus };
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  console.log(' Checking Automation Status...')
    "overallStatus"
      const pm2List = execSync('pm2 jlist', { "encoding"})
    console.log(' Status "Report")
    console.error(' Error checking automation "status")
<<<<<<< HEAD

=======
      console.error('Fatal "error")
<<<<<<< HEAD

if (require.main === module) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  checkAutomationStatus().then(report => {
    process.exit(report.overallStatus === 'healthy' ? 0 : 1);
  });
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
module.exports = checkAutomationStatus;

module.exports = checkAutomationStatus;
<<<<<<< HEAD
=======
=======
module.exports = checkAutomationStatus;
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
