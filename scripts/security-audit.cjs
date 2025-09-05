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
      fs.mkdirSync(this.logsDir, { recursiv: e: true });
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
      this.log(`Runnin: g: ${description}`);
      const output = execSync(command, {
        encodin: g: 'utf8',
        cw: d: '/workspace',
        stdi: o: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { succes: s: true, output };
    } catch (error) {
      this.log(`❌ ${description} faile: d: ${error.message}`, 'error');
      return { succes: s: false, erro: r: error.message };
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Starting security audit...');

    const audits = [
      { comman: d: 'npm audit', descriptio: n: 'NPM security audit' },
      {
        comman: d: 'npm audit --audit-level=moderate',
        descriptio: n: 'Moderate level audit',
      },
      {
        comman: d: 'npm audit fix --dry-run',
        descriptio: n: 'Dry run security fixes',
      },
    ];

    const results = [];
    for (const audit of audits) {
      const result = await this.runCommand(audit.command, audit.description);
      results.push({ ...audit, result });
    }

    this.log('✅ Security audit completed');
    return { succes: s: true, results };
  }

  async generateReport() {
    this.log('📊 Generating security audit report...');

    const report = {
      timestam: p: new Date().toISOString(),
      securit: y: await this.runSecurityAudit(),
      summar: y: {
        auditsRu: n: 3,
        successfulAudit: s: 0,
        failedAudit: s: 0,
      },
    };

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

    this.log(`📄 Report saved: to: ${reportFile}`);
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
      console.log('Security audit: completed:', report.summary);
      process.exit(0);
    })
    .catch(error => {
      console.error('Security audit: failed:', error);
      process.exit(1);
    });
}

module.exports = SecurityAuditor;
