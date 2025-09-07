#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Ultimate Automation Runner\n');

const automationScripts = [
  'comprehensive-automation-runner.cjs',
  'performance-monitor.cjs',
  'security-scanner.cjs',
  'code-quality-checker.cjs'
];

const results = {
  startTime: new Date().toISOString(),
  scripts: [],
  totalDuration: 0,
  success: 0,
  failed: 0
};

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function runScript(scriptPath) {
  const startTime = Date.now();
  const scriptName = path.basename(scriptPath);
  
  log(`Running ${scriptName}...`);
  
  try {
    execSync(`node ${scriptPath}`, { 
      stdio: 'inherit',
      timeout: 300000 // 5 minutes
    });
    
    const duration = Date.now() - startTime;
    results.scripts.push({
      name: scriptName,
      status: 'success',
      duration: duration,
      error: null
    });
    
    results.success++;
    log(`${scriptName} completed successfully in ${duration}ms`);
    
  } catch (error) {
    const duration = Date.now() - startTime;
    results.scripts.push({
      name: scriptName,
      status: 'failed',
      duration: duration,
      error: error.message
    });
    
    results.failed++;
    log(`${scriptName} failed after ${duration}ms: ${error.message}`, 'error');
  }
}

function runBuildAndTest() {
  log('Running build and test...');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    log('Build completed successfully');
    
    execSync('npm test -- --watchAll=false', { stdio: 'inherit' });
    log('Tests completed successfully');
    
  } catch (error) {
    log(`Build or test failed: ${error.message}`, 'error');
    throw error;
  }
}

function generateFinalReport() {
  log('Generating final automation report...');
  
  results.endTime = new Date().toISOString();
  results.totalDuration = Date.now() - new Date(results.startTime).getTime();
  
  const report = {
    ...results,
    summary: {
      totalScripts: results.scripts.length,
      successful: results.success,
      failed: results.failed,
      successRate: `${((results.success / results.scripts.length) * 100).toFixed(1)}%`,
      totalDuration: `${(results.totalDuration / 1000).toFixed(1)}s`
    }
  };
  
  fs.writeFileSync('automation-final-report.json', JSON.stringify(report, null, 2));
  log('Final report saved to automation-final-report.json');
  
  console.log('\n🎯 Ultimate Automation Summary:');
  console.log(`Total Scripts: ${results.scripts.length}`);
  console.log(`Successful: ${results.success}`);
  console.log(`Failed: ${results.failed}`);
  console.log(`Success Rate: ${report.summary.successRate}`);
  console.log(`Total Duration: ${report.summary.totalDuration}`);
  
  if (results.failed > 0) {
    console.log('\n❌ Failed Scripts:');
    results.scripts
      .filter(script => script.status === 'failed')
      .forEach(script => {
        console.log(`  ${script.name}: ${script.error}`);
      });
  }
  
  return report;
}

async function main() {
  try {
    log('Starting ultimate automation runner...');
    
    // Run build and test first
    runBuildAndTest();
    
    // Run all automation scripts
    for (const script of automationScripts) {
      if (fs.existsSync(script)) {
        runScript(script);
      } else {
        log(`Script ${script} not found`, 'warning');
      }
    }
    
    // Generate final report
    const report = generateFinalReport();
    
    if (results.failed === 0) {
      log('All automation scripts completed successfully!');
      process.exit(0);
    } else {
      log(`${results.failed} automation scripts failed`, 'warning');
      process.exit(1);
    }
    
  } catch (error) {
    log(`Ultimate automation runner failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, results };