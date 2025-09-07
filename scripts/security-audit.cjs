<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');

#!/usr/bin/env node

const { execSync } = require('child_process');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Audit...');

class SecurityAuditor {
  constructor() {
    this.reportFile = path.join(__dirname, '..', 'security-audit-report.json');
    this.results = {
      timestamp: new Date().toISOString(),
      npmAudit: null,
      dependencyCheck: null,
      filePermissions: null,
      environmentVariables: null,
      overall: { status: 'unknown', score: 0 }
    };
  }

  async runCommand(command, description) {
    try {
      console.log(`🔍 ${description}...`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
      console.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      console.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runNpmAudit() {
    const result = await this.runCommand('npm audit --json', 'NPM Security Audit');
    this.results.npmAudit = result;
  }

  async checkDependencies() {
    const result = await this.runCommand('npm ls --depth=0', 'Dependency Check');
    this.results.dependencyCheck = result;
  }

  async checkFilePermissions() {
    try {
      const criticalFiles = [
        'package.json',
        'next.config.js',
        'middleware.ts',
        '.env.local',
        '.env.production'
      ];
      
      const permissions = {};
      for (const file of criticalFiles) {
        try {
          const stats = fs.statSync(file);
          permissions[file] = {
            exists: true,
            mode: stats.mode.toString(8),
            readable: true,
            writable: true
          };
        } catch (error) {
          permissions[file] = {
            exists: false,
            error: error.message
          };
        }
      }
      
      this.results.filePermissions = { success: true, permissions };
      console.log('✅ File Permissions Check - Success');
    } catch (error) {
      this.results.filePermissions = { success: false, error: error.message };
      console.log(`❌ File Permissions Check - Failed: ${error.message}`);
    }
  }

  async checkEnvironmentVariables() {
    const envVars = {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      SUPABASE_URL: process.env.SUPABASE_URL,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? '***HIDDEN***' : undefined
    };
    
    this.results.environmentVariables = {
      success: true,
      variables: envVars,
      count: Object.keys(envVars).length
    };
    console.log('✅ Environment Variables Check - Success');
  }

  calculateOverallScore() {
    let totalScore = 0;
    let maxScore = 0;

    // NPM Audit (40% weight)
    if (this.results.npmAudit?.success) {
      totalScore += 100 * 0.4;
    }
    maxScore += 100 * 0.4;

    // Dependency Check (20% weight)
    if (this.results.dependencyCheck?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    // File Permissions (20% weight)
    if (this.results.filePermissions?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    // Environment Variables (20% weight)
    if (this.results.environmentVariables?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    const finalScore = Math.round((totalScore / maxScore) * 100);
    this.results.overall.score = finalScore;
    this.results.overall.status = finalScore >= 80 ? 'excellent' : 
                                 finalScore >= 60 ? 'good' : 
                                 finalScore >= 40 ? 'fair' : 'poor';
    
    return finalScore;
  }

  async generateReport() {
    const score = this.calculateOverallScore();
    
    fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
    console.log(`📊 Security audit report saved to: ${this.reportFile}`);
    console.log(`🎯 Overall Security Score: ${score}/100 (${this.results.overall.status})`);
  }

  async run() {
    try {
      console.log('🚀 Starting comprehensive security audit...');
      
      await this.runNpmAudit();
      await this.checkDependencies();
      await this.checkFilePermissions();
      await this.checkEnvironmentVariables();
      await this.generateReport();
      
      console.log('🎉 Security audit completed successfully!');
    } catch (error) {
      console.log(`❌ Security audit failed: ${error.message}`);
      process.exit(1);
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
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
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Run the security auditor
const auditor = new SecurityAuditor();
<<<<<<< HEAD
auditor.checkDependencies();
auditor.checkEnvironmentVariables();
const report = auditor.generateReport();

fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
console.log('Security audit completed');
=======
auditor.run().catch(console.error);
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======

<<<<<<< HEAD
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// Run the auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


=======
];
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

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

<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
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
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
