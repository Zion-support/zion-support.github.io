#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Zion Tech Group - Master Automation Runner');
console.log('==============================================');

const automationScripts = [
  { name: 'Health Check', script: 'scripts/quick-health-check.js' },
  { name: 'Performance Optimization', script: 'scripts/performance-optimizer.js' },
  { name: 'Security Check', script: 'scripts/security-check.js' }
];

const results = {
  timestamp: new Date().toISOString(),
  scripts: [],
  summary: {
    total: 0,
    passed: 0,
    failed: 0
  }
};

async function runAutomation() {
  console.log('\n🔧 Running automation scripts...\n');
  
  for (const { name, script } of automationScripts) {
    console.log(`📋 Running ${name}...`);
    results.summary.total++;
    
    try {
      execSync(`node ${script}`, { stdio: 'inherit' });
      console.log(`✅ ${name} completed successfully\n`);
      results.scripts.push({ name, status: 'success', timestamp: new Date().toISOString() });
      results.summary.passed++;
    } catch (error) {
      console.log(`❌ ${name} failed: ${error.message}\n`);
      results.scripts.push({ name, status: 'failed', error: error.message, timestamp: new Date().toISOString() });
      results.summary.failed++;
    }
  }
  
  // Generate final report
  generateFinalReport();
}

function generateFinalReport() {
  console.log('📊 Automation Summary');
  console.log('====================');
  console.log(`Total Scripts: ${results.summary.total}`);
  console.log(`Passed: ${results.summary.passed}`);
  console.log(`Failed: ${results.summary.failed}`);
  console.log(`Success Rate: ${((results.summary.passed / results.summary.total) * 100).toFixed(1)}%`);
  
  // Save detailed report
  fs.writeFileSync('master-automation-report.json', JSON.stringify(results, null, 2));
  console.log('\n📄 Detailed report saved to master-automation-report.json');
  
  // Generate markdown summary
  const markdown = `# Master Automation Report

## Summary
- **Total Scripts**: ${results.summary.total}
- **Passed**: ${results.summary.passed}
- **Failed**: ${results.summary.failed}
- **Success Rate**: ${((results.summary.passed / results.summary.total) * 100).toFixed(1)}%

## Script Results
${results.scripts.map(script => `- **${script.name}**: ${script.status === 'success' ? '✅' : '❌'} ${script.status}`).join('\n')}

## Timestamp
${results.timestamp}
`;
  
  fs.writeFileSync('MASTER_AUTOMATION_REPORT.md', markdown);
  console.log('📄 Markdown report saved to MASTER_AUTOMATION_REPORT.md');
  
  console.log('\n🎉 Master automation completed!');
}

// Run the automation
runAutomation().catch(console.error);