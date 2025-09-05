<<<<<<< HEAD
<<<<<<< HEAD
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
=======
#!/usr/bin/env node
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
#!/usr/bin/env node
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
const fs = // // require('fs');
class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.fixes = []}
  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      // Check for security-related scripts
      if (!packageJson.scripts.audit) {
<<<<<<< HEAD
<<<<<<< HEAD
        this.issues.push('Missing security audit script');
      }
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
        this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment'];
      vulnerablePackages.forEach(pkg => {
        if (packageJson.dependencies && packageJson.dependencies[pkg]) {
<<<<<<< HEAD
<<<<<<< HEAD
          this.issues.push(`Potentially vulnerable package: ${pkg}`);
        }
      });
    } catch (error) {
      this.issues.push(`Error reading package.json: ${error.message}`);
    }
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
      })} catch (error) {
      this.issues.push(`Error reading package."json": ${error.message}`)}
  }
  checkNextConfig() {
    try {
      if (fs.existsSync('next.config.js')) {
        const content = fs.readFileSync('next.config.js', 'utf8');
        if (!content.includes('poweredByHeader')) {
<<<<<<< HEAD
<<<<<<< HEAD
          this.issues.push('X-Powered-By header not disabled');
        }
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
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
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
      this.issues.push(`Error reading next.config."js": ${error.message}`)}
  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "issues": this.issues,
      "fixes": this.fixes,
      "summary": {
        totalIssues: this.issues.length,
        "fixesApplied": this.fixes.length
      }
<<<<<<< HEAD
<<<<<<< HEAD
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }
}
    };
=======
    };

>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
    };

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }
}
if (require.main === module) {
  const auditor = new SecurityAuditor();
<<<<<<< HEAD
<<<<<<< HEAD
  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();
}
module.exports = SecurityAuditor;
  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport();
}
module.exports = SecurityAuditor;
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
<<<<<<< HEAD
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
