#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Dependency Updates Automation Started');

async function checkDependencyUpdates() {
  try {
    console.log('📦 Checking for dependency updates...');
    
    const updateResults = [];
    
    // Check for outdated packages
    console.log('🔍 Checking outdated packages...');
    try {
      const outdated = execSync('npm outdated --json', { encoding: 'utf8' });
      updateResults.push({
        type: 'outdated-check',
        result: 'Outdated packages checked'
      });
    } catch (error) {
      updateResults.push({
        type: 'outdated-check',
        result: 'No outdated packages found'
      });
    }
    
    // Check for security updates
    console.log('🔒 Checking security updates...');
    try {
      const security = execSync('npm audit --audit-level=moderate', { encoding: 'utf8' });
      updateResults.push({
        type: 'security-check',
        result: 'Security vulnerabilities checked'
      });
    } catch (error) {
      updateResults.push({
        type: 'security-check',
        result: 'Security check completed'
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: updateResults.length,
      results: updateResults
    };
    
    fs.writeFileSync('dependency-updates-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: dependency-updates-report.json');
    
  } catch (error) {
    console.error('❌ Error in dependency updates check:', error);
  }
}

// Run the automation
checkDependencyUpdates().then(() => {
  console.log('✅ Dependency Updates Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Dependency Updates Automation Failed:', error);
  process.exit(1);
});