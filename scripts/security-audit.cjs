#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Security Audit Starting...');

const securityChecks = [
  {
    name: 'NPM Audit',
    command: 'npm audit --audit-level moderate',
    critical: true
  },
  {
    name: 'Dependency Check',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for known vulnerable packages
      const vulnerablePackages = [
        'lodash',
        'moment',
        'jquery'
      ];
      
      const foundVulnerable = vulnerablePackages.filter(pkg => deps[pkg]);
      if (foundVulnerable.length > 0) {
        console.log(`⚠️  Potentially vulnerable packages found: ${foundVulnerable.join(', ')}`);
        return false;
      }
      return true;
    }
  },
  {
    name: 'Environment Variables Check',
    check: () => {
      const envFile = '.env.local';
      if (fs.existsSync(envFile)) {
        const content = fs.readFileSync(envFile, 'utf8');
        const hasSecrets = content.includes('SECRET') || content.includes('KEY') || content.includes('PASSWORD');
        if (hasSecrets) {
          console.log('⚠️  Environment file contains potential secrets');
          return false;
        }
      }
      return true;
    }
  },
  {
    name: 'File Permissions Check',
    check: () => {
      const sensitiveFiles = [
        'package.json',
        'package-lock.json',
        'tsconfig.json'
      ];
      
      let allSecure = true;
      sensitiveFiles.forEach(file => {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          const mode = stats.mode & parseInt('777', 8);
          if (mode > parseInt('644', 8)) {
            console.log(`⚠️  File ${file} has overly permissive permissions`);
            allSecure = false;
          }
        }
      });
      return allSecure;
    }
  }
];

let passed = 0;
let failed = 0;
let criticalFailed = 0;

securityChecks.forEach(check => {
  try {
    if (check.command) {
      console.log(`\n🔄 Running ${check.name}...`);
      execSync(check.command, { stdio: 'pipe' });
      console.log(`✅ ${check.name} passed`);
      passed++;
    } else if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
      if (check.critical) {
        criticalFailed++;
      }
    }
  } catch (error) {
    console.log(`❌ ${check.name} failed`);
    failed++;
    if (check.critical) {
      criticalFailed++;
    }
  }
});

console.log(`\n📊 Security Results:`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`🚨 Critical Failed: ${criticalFailed}`);

if (criticalFailed > 0) {
  console.log('\n⚠️  Critical security issues found. Please fix before proceeding.');
  process.exit(1);
} else if (failed > 0) {
  console.log('\n⚠️  Some security issues found, but none are critical.');
  process.exit(0);
} else {
  console.log('\n🎉 All security checks passed!');
  process.exit(0);
}