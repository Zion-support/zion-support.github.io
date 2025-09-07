<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node;
ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8'))if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')}'
;
  const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg = > { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable "package": ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package."json": ${error.message}`)},`} checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8')if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config."js": ${error.message}`,`} generateReport() { const report = { "timestamp": new Date().toISOString(),"issues": this.issues,"fixes": this.fixes,"summary": { "totalIssues": this.issues.length,"fixesApplied": this.fixes.length
} fs.writeFileSync('security-report.json',JSON.stringify(report,null,2))} } if (require.main === module) {;'
  }
  const auditor = new SecurityAuditor()auditor.checkPackageJson()auditor.checkNextConfig()auditor.generateReport()} module.exports = SecurityAuditor;#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8'))if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')}'
;
} fs.writeFileSync('security-report.json',JSON.stringify(report,null,2))} } if (require.main === module) {;'
  }
;
} fs.writeFileSync('security-report.json',JSON.stringify(report,null,2))} } if (require.main === module) {;'
  }
  const auditor = new SecurityAuditor()auditor.checkPackageJson()auditor.checkNextConfig()auditor.generateReport()} module.exports = SecurityAuditor;
#!/usr/bin/env node;
=======
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621


#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
<<<<<<< HEAD
=======

#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
class SecurityAuditor {
  constructor() {
<<<<<<< HEAD
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
#!/usr/bin/env node
origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;

>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
class SecurityAuditor {
  constructor() {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
const audit = JSON.parse(result);
      if (audit.vulnerabilities) {
        }
        Object.keys(audit.vulnerabilities).forEach(pkg = > {
         ;
  }
          this.issues.push({
            }
            "package": pkg,
            "severity": vuln.severity,
            "description": vuln.description
         
});
        });
      }
      console.log(`Found ${this.issues.length} security issues`);`    } catch (error) {
      }
      console.log('No security issues found or audit failed');'
    }
  }
  async fixIssues() {
    }
    if (this.issues.length > 0) {
      }
      console.log('🔧 Attempting to fix security issues...');'
      try {
        }
        execSync('npm audit fix', { "stdio": 'inherit','
});
        this.fixes.push('Applied automatic security fixes');'
        console.log('✅ Security fixes applied');'
      } catch (error) {
        }
        console.log('❌ Could not apply automatic fixes');'
      }
    }
  }
#!/usr/bin/env node,
origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node,
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try {;
  }

  }
} fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); } } if (require.main = == module) {;'
  }

#!/usr/bin/env node,

class SecurityAuditor {
  }
  constructor() {
    }
>>>>>>> merged-prs-20250907-203621
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
=======
    this.issues = [];
    this.fixes = [];
=======
    this && this.issues = [];
    this && this.fixes = [];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (this.issues.length > 0) {
      console.log('🔧 Attempting to fix security issues...');
      try {
        execSync('npm audit fix', { stdio: 'inherit' });
        this.fixes.push('Applied automatic security fixes');
        console.log('✅ Security fixes applied');
      } catch (error) {
<<<<<<< HEAD
        console.log('❌ Could not apply automatic fixes');
=======
<<<<<<< HEAD

        console && console.log('❌ Could not apply automatic fixes');
console.log('❌ Could not apply automatic fixes');
=======
<<<<<<< HEAD
        console.log('❌ Could not apply automatic fixes');
=======
        console && console.log('❌ Could not apply automatic fixes');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      }
    }
  }

<<<<<<< HEAD
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node
=======
const fs = // // require('fs');
class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.fixes = []}
  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      // Check for security-related scripts
<<<<<<< HEAD
      if (!packageJson.scripts.audit) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
#!/usr/bin/env node
const fs = // // require('fs');
class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.fixes = []}
  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
=======
        this.issues.push('Missing security audit script');
      }

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      // Check for security-related scripts
      if (!packageJson.scripts.audit) {

        this.issues.push('Missing security audit script');
      }

        this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment'];
      vulnerablePackages.forEach(pkg => {
        if (packageJson.dependencies && packageJson.dependencies[pkg]) {

          this.issues.push(`Potentially vulnerable package: ${pkg}`);
        }
      });
<<<<<<< HEAD
    } catch (error) {
      this.issues.push(`Error reading package.json: ${error.message}`);
    }

          this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
      })} catch (error) {"`
      this.issues.push(`Error reading package."json": ${error.message}`)}
=======
    } catch (error) {}`

=======
        this.issues.push('Missing security audit script');
      }
        this.issues.push('Missing security audit script');
      }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
        this.issues.push('Missing security audit script');
      }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment'];
      vulnerablePackages.forEach(pkg => {
        if (packageJson.dependencies && packageJson.dependencies[pkg]) {

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
          this.issues.push(`Potentially vulnerable package: ${pkg}`);
        }
      });
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      this.issues.push(`Error reading package.json: ${error.message}`);
    }

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

<<<<<<< HEAD
          this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
      })} catch (error) {"`
      this.issues.push(`Error reading package."json": ${error.message}`)}
  }
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
          this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
      })} catch (error) {
      this.issues.push(`Error reading package."json": ${error.message}`)}
  }
  checkNextConfig() {
    try {
<<<<<<< HEAD
      if (fs.existsSync('next.config.js')) {
        const content = fs.readFileSync('next.config.js', 'utf8');
        if (!content.includes('poweredByHeader')) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          this.issues.push('X-Powered-By header not disabled');
        }

          this.issues.push('X-Powered-By header not disabled');
        }
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

          this.issues.push('X-Powered-By header not disabled')
          this.issues.push('X-Powered-By header not disabled')
      if (fs.existsSync('next.config.js')) {
        const content = fs.readFileSync('next.config.js', 'utf8')
        if (!content.includes('poweredByHeader')) {

          this.issues.push('X-Powered-By header not disabled');
        }

=======
          this.issues.push('X-Powered-By header not disabled');
        }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
          this.issues.push('X-Powered-By header not disabled');
        }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          this.issues.push('X-Powered-By header not disabled')}
        if (!content.includes('X-Content-Type-Options')) {
          this.issues.push('Security headers not configured');
        }
    } catch (error) {

      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }

      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }

=======
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
      this.issues.push(`Error reading next.config."js": ${error.message}`)}
  generateReport($2) {}
    const report = {"
      "timestamp": new Date().toISOString(),"
      "issues": this.issues,"
      "fixes": this.fixes,"
      "summary": {}
        totalIssues: this.issues.length,"
<<<<<<< HEAD
        "fixesApplied": this.fixes.length
=======
        "fixesApplied": this.fixes.length;
=======
      this.issues.push(`Error reading next.config."js": ${error.message}`)}
  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "issues": this.issues,
      "fixes": this.fixes,
      "summary": {
        totalIssues: this.issues.length,
        "fixesApplied": this.fixes.length
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      }
<<<<<<< HEAD
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }

    };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }

    };

    };

    };

<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    };

ursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }
}
    };
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }

if (require.main === module) {
  const auditor = new SecurityAuditor();
<<<<<<< HEAD

  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();
<<<<<<< HEAD
}
=======
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;

ursor/fix-syntax-push-and-merge-to-main-40de
  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();
    fs && fs.writeFileSync('security-report && report.json', JSON && JSON.stringify(report, null, 2));
    console && console.log('Security report generated');
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
module.exports = SecurityAuditor;
  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport();
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
if (require && require.main = == module) {
 ;
  }
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
if (require && require.main === module) {
>>>>>>> origin/chore/fix-lint-and-merge
  auditor && auditor.runAudit();
  auditor && auditor.fixIssues();
  auditor && auditor.generateReport();
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
module && module.exports = SecurityAuditor;
  auditor && auditor.checkPackageJson();
  auditor && auditor.checkNextConfig();

  auditor && auditor.generateReport()}
module && module.exports = SecurityAuditor;`;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Security report generated')} } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;`;
      execSync('npm audit', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Security audit completed', 'success');
    } catch (error) {
      this.vulnerabilities.push('Security vulnerabilities found');
      this.log('Security vulnerabilities found', 'error');
    }
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    this.recommendations.push('Keep dependencies updated');
    this.log('Dependency check completed', 'success');
  }

  async run() {
    this.log('🚀 Starting Security Auditor...');
    await this.runSecurityAudit();
    await this.checkDependencies();
    this.log('🎉 Security audit completed!', 'success');
  }
}

module && module.exports = SecurityAuditor;
  auditor && auditor.generateReport()}
module && module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Security report generated')} } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
  auditor && auditor.checkPackageJson();
  auditor && auditor.checkNextConfig();
  auditor && auditor.generateReport()}
module && module.exports = SecurityAuditor;
<<<<<<< HEAD
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try {;
  }

<<<<<<< HEAD
  }
} fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Security report generated')} } if (require && require.main = == module) {;'
  }
=======
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this && this.issues = []; this && this.fixes = []} checkPackageJson() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.audit) { this && this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages && vulnerablePackages.forEach(pkg => { if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) { this && this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this && this.issues.push(`Error reading package && package.json: ${error && error.message}`)} } checkNextConfig() { try { if (fs && fs.existsSync('next && next.config.js')) { const content = fs && fs.readFileSync('next && next.config.js','utf8'); if (!content && content.includes('poweredByHeader')) { this && this.issues.push('X-Powered-By header not disabled')} if (!content && content.includes('X-Content-Type-Options')) { this && this.issues.push('Security headers not configured')} } catch (error) { this && this.issues.push(`Error reading next && next.config.js: ${error && error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this && this.issues,fixes: this && this.fixes,summary: { totalIssues: this && this.issues.length,fixesApplied: this && this.fixes.length } fs && fs.writeFileSync('security-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Security report generated')} } if (require && require.main === module) { const auditor = new SecurityAuditor(); auditor && auditor.checkPackageJson(); auditor && auditor.checkNextConfig(); auditor && auditor.generateReport()} module && module.exports = SecurityAuditor;
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> merged-prs-20250907-203621
module.exports = SecurityAuditor;
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;

  auditor.checkPackageJson();
  auditor.checkNextConfig();
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;

<<<<<<< HEAD
=======
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;

#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
module.exports = SecurityAuditor;
  auditor.generateReport()}
module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = []; this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodash','moment']; vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.js','utf8'); if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)); console.log('Security report generated')} } if (require.main === module) { const auditor = new SecurityAuditor(); auditor.checkPackageJson(); auditor.checkNextConfig(); auditor.generateReport()} module.exports = SecurityAuditor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
