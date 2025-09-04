#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🏥 Health Monitor - Zion Tech Group');
console.log('====================================');

const healthChecks = {
  buildStatus: () => {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      return fs.existsSync(buildDir) ? 'healthy' : 'needs-build';
    } catch (error) {
      return 'error';
    }
  },
  
  dependenciesStatus: () => {
    try {
      const packageLock = path.join(process.cwd(), 'package-lock.json');
      const nodeModules = path.join(process.cwd(), 'node_modules');
      return fs.existsSync(packageLock) && fs.existsSync(nodeModules) ? 'healthy' : 'needs-install';
    } catch (error) {
      return 'error';
    }
  },
  
  pm2Status: () => {
    try {
      const { execSync } = require('child_process');
      const output = execSync('pm2 status --no-color', { encoding: 'utf8' });
      const lines = output.split('\n');
      const runningProcesses = lines.filter(line => line.includes('online')).length;
      return runningProcesses > 0 ? 'healthy' : 'no-processes';
    } catch (error) {
      return 'pm2-not-available';
    }
  },
  
  automationScripts: () => {
    try {
      const scriptsDir = path.join(process.cwd(), 'scripts');
      const files = fs.readdirSync(scriptsDir);
      const automationFiles = files.filter(file => 
        file.includes('automation') || 
        file.includes('monitor') || 
        file.includes('health')
      );
      return automationFiles.length > 0 ? 'healthy' : 'no-scripts';
    } catch (error) {
      return 'error';
    }
  }
};

const results = {};
let overallStatus = 'healthy';

console.log('\n🔍 Running Health Checks...\n');

for (const [checkName, checkFunction] of Object.entries(healthChecks)) {
  try {
    const result = checkFunction();
    results[checkName] = result;
    
    const status = result === 'healthy' ? '✅' : 
                   result === 'error' ? '❌' : '⚠️';
    
    console.log(`${status} ${checkName}: ${result}`);
    
    if (result !== 'healthy') {
      overallStatus = 'needs-attention';
    }
  } catch (error) {
    results[checkName] = 'error';
    console.log(`❌ ${checkName}: error - ${error.message}`);
    overallStatus = 'error';
  }
}

console.log(`\n📊 Overall Status: ${overallStatus === 'healthy' ? '✅ Healthy' : '⚠️ Needs Attention'}`);

// Generate health report
const report = {
  timestamp: new Date().toISOString(),
  overallStatus,
  checks: results,
  recommendations: []
};

if (results.buildStatus !== 'healthy') {
  report.recommendations.push('Run npm run build to create production build');
}

if (results.dependenciesStatus !== 'healthy') {
  report.recommendations.push('Run npm install to install dependencies');
}

if (results.pm2Status === 'no-processes') {
  report.recommendations.push('Start PM2 processes with ./scripts/start-all-automations.sh');
}

if (results.automationScripts === 'no-scripts') {
  report.recommendations.push('Check scripts directory for automation files');
}

// Save report
const reportPath = path.join(process.cwd(), 'health-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log(`\n📄 Health report saved to: ${reportPath}`);

if (report.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  report.recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
}

console.log('\n🎯 Health check completed!');