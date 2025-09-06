<<<<<<< HEAD:scripts/security-auditor.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
=======
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); } } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
class SecurityAuditor {
  constructor() {
    this && this.issues = [],
    this && this.fixes = []
  }
  async runAudit() {
    console && console.log('🔒 Running security audit...');
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON && JSON.parse(result);
      if (audit && audit.vulnerabilities) {
        Object && Object.keys(audit && audit.vulnerabilities).forEach(pkg => {
          const vuln = audit && audit.vulnerabilities[pkg];
          this && this.issues.push({
            package: pkg,
            severity: vuln && vuln.severity,
            description: vuln && vuln.description
          });
        });
      }
      console && console.log(`Found ${this && this.issues.length} security issues`);
    } catch (error) {
      console && console.log('No security issues found or audit failed');
    }
  }
  async fixIssues() {
    if (this && this.issues.length > 0) {
      console && console.log('🔧 Attempting to fix security issues...');
      try {
        execSync('npm audit fix', { stdio: 'inherit' });
        this && this.fixes.push('Applied automatic security fixes');
        console && console.log('✅ Security fixes applied');
      } catch (error) {
        console && console.log('❌ Could not apply automatic fixes');
      }
    }
  }
#!/usr/bin/env node
#!/usr/bin/env node
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); } } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
class SecurityAuditor {
  constructor() {
    this && this.issues = [];
    this && this.fixes = [];
  }
  async runAudit() {
    console && console.log('🔒 Running security audit...');
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON && JSON.parse(result);
      if (audit && audit.vulnerabilities) {
        Object && Object.keys(audit && audit.vulnerabilities).forEach(pkg => {
          const vuln = audit && audit.vulnerabilities[pkg];
          this && this.issues.push({
            package: pkg,
            severity: vuln && vuln.severity,
            description: vuln && vuln.description
          });
        });
      }
      console && console.log(`Found ${this && this.issues.length} security issues`);
    } catch (error) {
      console && console.log('No security issues found or audit failed');
    }
  }
  async fixIssues() {
    if (this && this.issues.length > 0) {
      console && console.log('🔧 Attempting to fix security issues...');
      try {
        execSync('npm audit fix', { stdio: 'inherit' });
        this && this.fixes.push('Applied automatic security fixes');
        console && console.log('✅ Security fixes applied');
      } catch (error) {
        console && console.log('❌ Could not apply automatic fixes');
      }
    }
  }
#!/usr/bin/env node
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.fixes = [];
  }
  async runAudit() {
    console.log('🔒 Running security audit...');
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      if (audit.vulnerabilities) {
        Object.keys(audit.vulnerabilities).forEach(pkg => {
          const vuln = audit.vulnerabilities[pkg];
          this.issues.push({
            package: pkg,
            severity: vuln.severity,
            description: vuln.description
          });
        });
      }
      console.log(`Found ${this.issues.length} security issues`);
    } catch (error) {
      console.log('No security issues found or audit failed');
    }
  }
  async fixIssues() {
    if (this.issues.length > 0) {
      console.log('🔧 Attempting to fix security issues...');
      try {
        execSync('npm audit fix', { stdio: 'inherit' });
        this.fixes.push('Applied automatic security fixes');
        console.log('✅ Security fixes applied');
      } catch (error) {
        console.log('❌ Could not apply automatic fixes');
      }
    }
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
const fs = // // require('fs');
class SecurityAuditor {
  constructor() {
    this && this.issues = [];
    this && this.fixes = []}
  checkPackageJson() {
    try {
      const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json', 'utf8'));
      // Check for security-related scripts
<<<<<<< HEAD:scripts/security-auditor.js
      if (!packageJson.scripts.audit) {
<<<<<<< HEAD
<<<<<<< HEAD
        this.issues.push('Missing security audit script');
      }
=======
<<<<<<< HEAD
=======
        this.issues.push('Missing security audit script');
      }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
        this.issues.push('Missing security audit script');
      }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment'];
      vulnerablePackages.forEach(pkg => {
        if (packageJson.dependencies && packageJson.dependencies[pkg]) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
          this.issues.push(`Potentially vulnerable package: ${pkg}`);
=======
      if (!packageJson && packageJson.scripts.audit) {
        this && this.issues.push('Missing security audit script');
      }
        this && this.issues.push('Missing security audit script');
      }
        this && this.issues.push('Missing security audit script');
      }
        this && this.issues.push('Missing security audit script');
      }
        this && this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment'];
      vulnerablePackages && vulnerablePackages.forEach(pkg => {
        if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) {
          this && this.issues.push(`Potentially vulnerable package: ${pkg}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
        }
      });
    } catch (error) {
      this && this.issues.push(`Error reading package && package.json: ${error && error.message}`);
    }
<<<<<<< HEAD:scripts/security-auditor.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
          this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
=======
          this && this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
      })} catch (error) {
      this && this.issues.push(`Error reading package."json": ${error && error.message}`)}
  }
  checkNextConfig() {
    try {
<<<<<<< HEAD:scripts/security-auditor.js
      if (fs.existsSync('next.config.js')) {
        const content = fs.readFileSync('next.config.js', 'utf8');
        if (!content.includes('poweredByHeader')) {
<<<<<<< HEAD
<<<<<<< HEAD
          this.issues.push('X-Powered-By header not disabled');
        }
=======
<<<<<<< HEAD
=======
          this.issues.push('X-Powered-By header not disabled');
        }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
          this.issues.push('X-Powered-By header not disabled');
        }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
          this.issues.push('X-Powered-By header not disabled')}
        if (!content.includes('X-Content-Type-Options')) {
          this.issues.push('Security headers not configured');
        }
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
=======
<<<<<<< HEAD
=======
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      this.issues.push(`Error reading next.config."js": ${error.message}`)}
=======
      if (fs && fs.existsSync('next && next.config.js')) {
        const content = fs && fs.readFileSync('next && next.config.js', 'utf8');
        if (!content && content.includes('poweredByHeader')) {
          this && this.issues.push('X-Powered-By header not disabled');
        }
          this && this.issues.push('X-Powered-By header not disabled');
        }
          this && this.issues.push('X-Powered-By header not disabled');
        }
          this && this.issues.push('X-Powered-By header not disabled');
        }
          this && this.issues.push('X-Powered-By header not disabled')}
        if (!content && content.includes('X-Content-Type-Options')) {
          this && this.issues.push('Security headers not configured');
        }
    } catch (error) {
      this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`);
    }
      this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`);
    }
      this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`);
    }
      this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`);
    }
      this && this.issues.push(`Error reading next && next.config."js": ${error && error.message}`)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "issues": this && this.issues,
      "fixes": this && this.fixes,
      "summary": {
        totalIssues: this && this.issues.length,
        "fixesApplied": this && this.fixes.length
      }
<<<<<<< HEAD:scripts/security-auditor.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
=======
    fs && fs.writeFileSync('security-report && report.json', JSON && JSON.stringify(report, null, 2));
    console && console.log('Security report generated');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
  }

    };
    };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    };

<<<<<<< HEAD:scripts/security-auditor.js
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }
}
    };
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }

if (require.main === module) {
  const auditor = new SecurityAuditor();
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();

module.exports = SecurityAuditor;
  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport();

module.exports = SecurityAuditor;
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();
=======
    fs && fs.writeFileSync('security-report && report.json', JSON && JSON.stringify(report, null, 2));
    console && console.log('Security report generated');
  }
}
    };
    fs && fs.writeFileSync('security-report && report.json', JSON && JSON.stringify(report, null, 2));
    console && console.log('Security report generated');
  }
}
if (require && require.main === module) {
  const auditor = new SecurityAuditor();
  auditor && auditor.runAudit();
  auditor && auditor.fixIssues();
  auditor && auditor.generateReport();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
}
module && module.exports = SecurityAuditor;
  auditor && auditor.checkPackageJson();
  auditor && auditor.checkNextConfig();
  auditor && auditor.generateReport();
}
<<<<<<< HEAD:scripts/security-auditor.js
module.exports = SecurityAuditor;
  auditor.generateReport()}
module.exports = SecurityAuditor;
<<<<<<< HEAD
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
=======
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
module && module.exports = SecurityAuditor;
  auditor && auditor.generateReport()}
module && module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Security report generated')} } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
  auditor && auditor.checkPackageJson();
  auditor && auditor.checkNextConfig();
  auditor && auditor.generateReport()}
module && module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Security report generated')} } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/security-auditor.js
