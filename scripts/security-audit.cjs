const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);

    const logFile = path.join(this.logsDir, 'security-audit.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe'});
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Starting security audit...');

    const audits = [
      { command: 'npm audit', description: 'NPM security audit' },
      {
        command: 'npm audit --audit-level=moderate',
        description: 'Moderate level audit'},
      {
        command: 'npm audit fix --dry-run',
        description: 'Dry run security fixes'}];

    const results = [];
    for (const audit of audits) {
      const result = await this.runCommand(audit.command, audit.description);
      results.push({ ...audit, result });
    }

    this.log('✅ Security audit completed');
    return { success: true, results };
  }

  async generateReport() {
    this.log('📊 Generating security audit report...');

    const report = {
      timestamp: new Date().toISOString(),
      security: await this.runSecurityAudit(),
      summary: {
        auditsRun: 3,
        successfulAudits: 0,
        failedAudits: 0}};

    // Calculate summary
    report.security.results.forEach(result => {
      if (result.result.success) {
        report.summary.successfulAudits++;
      } else {
        report.summary.failedAudits++;
      }
    });

    // Save report
    const reportFile = path.join(
      this.logsDir,
      `security-audit-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Report saved to: ${reportFile}`);
    return report;
  }

  async start() {
    this.log('🎯 Starting Security Auditor...');
    const report = await this.generateReport();
    this.log('🏁 Security Auditor completed');
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor
    .start()
    .then(report => {
      console.log('Security audit completed:', report.summary);
      process.exit(0);
    })
    .catch(error => {
      console.error('Security audit failed:', error);
      process.exit(1);
    });
}

module.exports = SecurityAuditor;
