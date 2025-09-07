#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
console.log('🚀 Master Automation System Starting...');
const automationScripts = [;
  {
    name: 'Health Check',
    script: 'node scripts/health-check.cjs',
    critical: true
  },
  {
    name: 'Code Quality Monitor',
    script: 'node scripts/code-quality-monitor.cjs',
    critical: false
  },
  {
    name: 'Performance Monitor',
    script: 'node scripts/performance-monitor.cjs',
    critical: false
  },
  {
    name: 'Security Audit',
    script: 'node scripts/security-audit.cjs',
    critical: false
  },
  {
    name: 'Build Optimizer',
    script: 'node scripts/build-optimizer.cjs',
    critical: true
  }
];
let passed = 0;
let failed = 0;
let criticalFailed = 0;
console.log('\n📋 Running Automation Scripts...');
automationScripts.forEach(({ name, script, critical }) => {
  console.log(`\n🔧 Running: ${name}`);
  console.log(`   Command: ${script}`);
  try {
    execSync(script, { stdio: 'inherit' });
    console.log(`✅ ${name} completed successfully`);
    passed++;
  } catch (error) {
    console.log(`❌ ${name} failed`);
    failed++;
    if (critical) {
      criticalFailed++;
    }
  }
});
console.log('\n📊 Automation Summary');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`🚨 Critical Failed: ${criticalFailed}`);
if (criticalFailed > 0) {
  console.log('\n⚠️  Critical automation scripts failed. Please fix issues before proceeding.');
  process.exit(1);
} else if (failed > 0) {
  console.log('\n⚠️  Some non-critical automation scripts failed. Review issues but continuing...');
} else {
  console.log('\n🎉 All automation scripts completed successfully!');
}
console.log('\n📁 Logs and reports available in automation-reports/ directory');
console.log('🔍 Check individual script outputs for detailed information');