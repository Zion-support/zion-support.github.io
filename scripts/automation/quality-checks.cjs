#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Quality Checks Automation Started');

async function runQualityChecks() {
  try {
    console.log('🔍 Running quality checks...');
    
    const qualityResults = [];
    
    // Run linting
    console.log('🧹 Running linting...');
    try {
      execSync('npm run lint', { encoding: 'utf8' });
      qualityResults.push({
        type: 'linting',
        result: 'Linting passed'
      });
    } catch (error) {
      qualityResults.push({
        type: 'linting',
        result: 'Linting failed'
      });
    }
    
    // Run type checking
    console.log('🔍 Running type checking...');
    try {
      execSync('npm run type-check', { encoding: 'utf8' });
      qualityResults.push({
        type: 'type-check',
        result: 'Type checking passed'
      });
    } catch (error) {
      qualityResults.push({
        type: 'type-check',
        result: 'Type checking failed or not configured'
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: qualityResults.length,
      results: qualityResults
    };
    
    fs.writeFileSync('quality-checks-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: quality-checks-report.json');
    
  } catch (error) {
    console.error('❌ Error in quality checks:', error);
  }
}

// Run the automation
runQualityChecks().then(() => {
  console.log('✅ Quality Checks Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Quality Checks Automation Failed:', error);
  process.exit(1);
});