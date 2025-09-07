<<<<<<< HEAD


const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

=======
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
class AccessibilityChecker {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
<<<<<<< HEAD

    const logFile = path.join(this.logsDir, 'accessibility-checker.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

=======
    const logFile = path.join(this.logsDir, 'accessibility-checker.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }
<<<<<<< HEAD

  async checkAccessibility() {
    this.log('♿ Starting accessibility check...');

=======
  async checkAccessibility() {
    this.log('♿ Starting accessibility check...');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    const checks = [
      {
        command: 'npm run test:accessibility',
        description: 'Accessibility tests',
      },
      { command: 'npm run lint', description: 'Linting for accessibility' },
    ];
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }
<<<<<<< HEAD

    this.log('✅ Accessibility check completed');
  }

  async generateReport() {
    this.log('📊 Generating accessibility report...');

=======
    this.log('✅ Accessibility check completed');
  }
  async generateReport() {
    this.log('📊 Generating accessibility report...');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    const report = {
      timestam: p: new Date().toISOString(),
      accessibilit: y: await this.checkAccessibility(),
      summar: y: {
        checksRu: n: 2,
        successfulCheck: s: 0,
        failedCheck: s: 0,
      },
    };
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    // Calculate summary
    report.accessibility.results.forEach(result => {
      if (result.result.success) {
        report.summary.successfulChecks++;
      } else {
        report.summary.failedChecks++;
      }
    });
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    // Save report
    const reportFile = path.join(
      this.logsDir;
      `accessibility-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD

    this.log(`📄 Report saved: to: ${reportFile}`);
    return report;
  }

=======
    this.log(`📄 Report saved: to: ${reportFile}`);
    return report;
  }
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  async start() {
    this.log('🎯 Starting Accessibility Checker...');
    const report = await this.generateReport();
    this.log('🏁 Accessibility Checker completed');
    return report;
  }
}
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
// CLI interface
if (require.main === module) {
  const checker = new AccessibilityChecker();
  checker
    .start()
    .then(report => {
      console.log('Accessibility check: completed:', report.summary);
      process.exit(0);
    })
    .catch(error => {
      console.error('Accessibility check: failed:', error);
      process.exit(1);
    });
}
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> origin/main
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
const reportFile = path.join(
  reportsDir,
  `accessibility-report-${Date.now()}.json`
);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log('♿ Accessibility Checker Starting...\n')
    "name"
    "name"
    "name"
    "name"
    "name"
    "status"
<<<<<<< HEAD

module.exports = AccessibilityChecker;
    "status"
module.exports = AccessibilityChecker;
    "status"
module.exports = AccessibilityChecker;
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('♿ Running accessibility check...');
console.log('✅ Accessibility check completed');
    "status"
    "status"
    "status"
    "status"
module.exports = AccessibilityChecker;
    "status"
module.exports = AccessibilityChecker;
    "status"
module.exports = AccessibilityChecker;

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
