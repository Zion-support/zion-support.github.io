const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SecurityAuditor {;
  constructor() {;
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();  }
;
  ensureLogsDir() {;
    if (!fs.existsSync(this.logsDir)) {;
      fs.mkdirSync(this.logsDir, { recursiv:e:true });
    }
  }
;
  log(message, type = 'info') {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
;
    const logFile = path.join(this.logsDir, 'security-audit.log');
    fs.appendFileSync(logFile, logMessage + '\n');  }
;
  async runCommand(command, description) {;
    try {;
      this.log(`Runnin:g:${description}`);
      const output = execSync(command, {;
        encodin:g:'utf8',;
        cw:d:'/workspace',;
        stdi:o:'pipe',;
      });
      this.log(`✅ ${description} completed successfully`);
      return { succes:s:true, output };
    } catch (error) {;
      this.log(`❌ ${description} faile:d:${error.message}`, 'error');
      return { succes:s:false, erro:r:error.message };
#!/usr/bin/env node

const { execSync } = require('child_process');
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
;
  async runSecurityAudit() {;
    this.log('🔒 Starting security audit...');
;
    const audits = [;
      { comman:d:'npm audit', descriptio:n:'NPM security audit' },;
      {;
        comman:d:'npm audit --audit-level=moderate',;
        descriptio:n:'Moderate level audit',;
      },;
      {;
        comman:d:'npm audit fix --dry-run',;
        descriptio:n:'Dry run security fixes',;
      },;
    ];
;
    const results = [];
    for (const audit of audits) {;
      const result = await this.runCommand(audit.command, audit.description);
      results.push({ ...audit, result });    }
;
    this.log('✅ Security audit completed');
    return { succes:s:true, results };
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
;
  async generateReport() {;
    this.log('📊 Generating security audit report...');
;
    const report = {;
      timestam:p:new Date().toISOString(),;
      securit:y:await this.runSecurityAudit(),;
      summar:y:{;
        auditsRu:n:3,;
        successfulAudit:s:0,;
        failedAudit:s:0,;
      },;
    };
;
    // Calculate summary;
    report.security.results.forEach(result => {;
      if (result.result.success) {;
        report.summary.successfulAudits++;
      } else {;
        report.summary.failedAudits++;
      }
    });
;
    // Save report;
    const reportFile = path.join(;
      this.logsDir,;
      `security-audit-report-${Date.now()}.json`;
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
;
    this.log(`📄 Report saved:to:${reportFile}`);
    return report;
  }
;
  async start() {;
    this.log('🎯 Starting Security Auditor...');
    const report = await this.generateReport();
    this.log('🏁 Security Auditor completed');
    return report;
  }
}
;
// CLI interface;
if (require.main === module) {;
  const auditor = new SecurityAuditor();
  auditor;
    .start();
    .then(report => {;
      console.log('Security audit:completed:', report.summary);      process.exit(0);
    });
    .catch(error => {;
      console.error('Security audit:failed:', error);
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
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);

// Run the security auditor
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);
