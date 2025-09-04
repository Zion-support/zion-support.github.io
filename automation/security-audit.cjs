#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Security Audit Starting...\n');

// Security checks
const securityChecks = [
  {
    name: 'Dependency Vulnerability Scan',
    action: () => {
      console.log('🔍 Scanning for vulnerable dependencies...');
      try {
        execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
        console.log('✅ No high-severity vulnerabilities found');
      } catch (error) {
        console.log('⚠️ Some vulnerabilities found - check npm audit output');
      }
    },
  },
  {
    name: 'Environment Variables Check',
    action: () => {
      console.log('🔐 Checking environment variables...');
      const envFiles = ['.env', '.env.local', '.env.production'];
      let foundEnvFiles = 0;

      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          foundEnvFiles++;
          console.log(`Found ${envFile}`);
        }
      });

      console.log(`Found ${foundEnvFiles} environment files`);
    },
  },
  {
    name: 'API Security Check',
    action: () => {
      console.log('🛡️ Checking API security...');
      const apiDir = path.join(process.cwd(), 'pages', 'api');
      if (fs.existsSync(apiDir)) {
        const apiFiles = fs
          .readdirSync(apiDir)
          .filter(file => file.endsWith('.ts') || file.endsWith('.js'));
        let securityIssues = 0;

        apiFiles.forEach(file => {
          const content = fs.readFileSync(path.join(apiDir, file), 'utf8');
          if (
            content.includes('process.env') &&
            !content.includes('// Security: ')
          ) {
            securityIssues++;
          }
        });

        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`
        );
      }
    },
  },
  {
    name: 'Content Security Policy Check',
    action: () => {
      console.log('📋 Checking Content Security Policy...');
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs
          .readdirSync(pagesDir)
          .filter(file => file.endsWith('.tsx'));
        let cspFound = 0;

        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          if (
            content.includes('Content-Security-Policy') ||
            content.includes('CSP')
          ) {
            cspFound++;
          }
        });

        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },
  {
    name: 'HTTPS Enforcement Check',
    action: () => {
      console.log('🔐 Checking HTTPS enforcement...');
      const nextConfigPath = path.join(process.cwd(), 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        if (content.includes('https') || content.includes('secure')) {
          console.log('✅ HTTPS configuration found');
        } else {
          console.log('⚠️ No HTTPS enforcement found');
        }
      } else {
        console.log('⚠️ No Next.js config found');
      }
    },
  },
];

// Run security checks
let successCount = 0;
let totalCount = securityChecks.length;

for (const check of securityChecks) {
  try {
    console.log(`\n🔄 ${check.name}...`);
    check.action();
    console.log(`✅ ${check.name} completed`);
    successCount++;
  } catch (error) {
    console.log(`❌ ${check.name} failed: ${error.message}`);
  }
}

console.log(`\n🎉 Security Audit Complete!`);
console.log(`✅ Successfully completed: ${successCount}/${totalCount} checks`);

// Generate security report
const report = {
  timestamp: new Date().toISOString(),
  checks: securityChecks.map(check => ({
    name: check.name,
    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};

const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
console.log(`📄 Security report saved to: ${reportFile}`);
