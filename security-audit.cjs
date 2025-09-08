#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Security Audit Starting...\n');

// Security audit checks
const securityChecks = [;
  {
    name: 'Dependency vulnerabilities',
    command: 'npm audit --audit-level=moderate',
    critical: true
  },
  {
    name: 'Outdated packages',
    command: 'npm outdated',
    critical: false
  },
  {
    name: 'License compliance',
    command: 'npx license-checker --summary',
    critical: false
  },
  {
    name: 'Security headers check',
    command: 'npx security-headers-check https://zion.app',
    critical: true
  }
];

// Run security checks
async function runSecurityChecks() {
  const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
    timestamp: new Date().toISOString()
  };
  
  for (const check of securityChecks) {
    console.log(`🔍 Running: ${check.name}`);
    
    try {
      const output = execSync(check.command, { encoding: 'utf8', stdio: 'pipe' });
      console.log(`✅ ${check.name}: PASSED`);
      results.passed++;
    } catch (error) {
      if (check.critical) {
        console.log(`❌ ${check.name}: FAILED`);
        console.log(error.message);
        results.failed++;
      } else {
        console.log(`⚠️  ${check.name}: WARNING`);
        console.log(error.message);
        results.warnings++;
      }
    }
  }
  
  // Save audit results
  fs.writeFileSync('security-audit-results.json', JSON.stringify(results, null, 2));
  
  console.log('\n📊 Security Audit Results:');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`⚠️  Warnings: ${results.warnings}`);
  
  if (results.failed > 0) {
    console.log('\n🚨 Critical security issues found! Please address them immediately.');
    process.exit(1);
  } else {
    console.log('\n🎉 Security audit completed successfully!');
  }
}

runSecurityChecks();
