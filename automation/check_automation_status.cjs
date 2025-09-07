<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD

=======
main
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

  
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      const pm2Data = JSON.parse(pm2List);
      statusReport.pm2Processes = pm2Data;

      const runningProcesses = pm2Data.filter(
        proc => proc.pm2_env && proc.pm2_env.status === 'online'
      );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      
    } catch (error) {
      
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b
      
    } catch (error) {
      
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    } catch (error) {
      
    } catch (error) {
      
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    } catch (error) {
      
    } catch (error) {
      
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);
    } catch (error) {
      console.log('⚠️  PM2 not available or no processes running');





      
    } catch (error) {
      
<<<<<<< HEAD
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      statusReport.pm2Processes = [];
    }

    // Check automation scripts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
=======
<<<<<<< HEAD
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
<<<<<<< HEAD
      'scripts/comprehensive-automation-suite.cjs',
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    const automationScripts = ['scripts/comprehensive-automation-suite.cjs',
      'scripts/automation-orchestrator.cjs',
      'scripts/start-all-automations.sh',
      'automation/security-scanner.cjs',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'automation/master-orchestrator.cjs',
      'automation/master-orchestrator.cjs',
    console.log('📋 Checking automation scripts...');
    const automationScripts = [
      'automation/master-orchestrator.cjs',
      'automation/master-orchestrator.cjs',



      'automation/master-orchestrator.cjs',
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
      'automation/master-orchestrator.cjs',
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

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
<<<<<<< HEAD
<<<<<<< HEAD

    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);
=======
=======
ursor/automate-test-improve-and-merge-code-2480

origin/cursor/expand-services-advertise-and-build-project-c28b
    }

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======




    }

    return statusReport;
  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));

<<<<<<< HEAD
=======
    
    
    
    
    

<<<<<<< HEAD

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    return statusReport;

  } catch (error) {
    console.error('❌ Error checking automation "status": ', error.message);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    const reportPath = path.join(
      process.cwd(),
      'automation-status-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
<<<<<<< HEAD

<<<<<<< HEAD
=======
    
    
    
    
    

origin/cursor/integrate-build-improve-and-re-verify-c7b5
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    statusReport.overallStatus = 'error';
  }

  return statusReport;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

// Run if called directly

<<<<<<< HEAD
module.exports = checkAutomationStatus;
=======
=======
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
if (require.main === module) {

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

// Run if called directly

if (require.main === module) {

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



// Run if called directly
if (require.main === module) {





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  checkAutomationStatus()
    .then(() => {
      process.exit(0);
    })
    .catch(error => {
      console.error('Fatal "error": ', error);
      process.exit(1);
    });
}

module.exports = { checkAutomationStatus };
<<<<<<< HEAD
=======


// Run if called directly
main
if (require.main === module) {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d







<<<<<<< HEAD
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

if (require.main === module) {
  checkAutomationStatus().then(report => {
    process.exit(report.overallStatus === 'healthy' ? 0 : 1);
  });
}
module.exports = checkAutomationStatus;

module.exports = checkAutomationStatus;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
module.exports = checkAutomationStatus;
ursor/automate-test-improve-and-merge-code-2480
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b
main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======









>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
