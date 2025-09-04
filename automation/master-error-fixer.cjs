#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterErrorFixer {
  constructor() {
    this.logFile = 'automation/logs/master-error-fixer.log';
    this.startTime = Date.now();
    this.processes = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
    console.log(`[${level}] ${message}`);
  }

  async runAutomation(script, name) {
    return new Promise((resolve, reject) => {
      this.log(`Starting ${name}...`);

      const process = spawn('node', [script], {
        cwd: '/workspace',
        stdio: 'pipe',
      });

      this.processes.push(process);

      process.stdout.on('data', data => {
        this.log(`${name}: ${data.toString().trim()}`);
      });

      process.stderr.on('data', data => {
        this.log(`${name} ERROR: ${data.toString().trim()}`, 'ERROR');
      });

      process.on('close', code => {
        if (code === 0) {
          this.log(`${name} completed successfully`);
          resolve(true);
        } else {
          this.log(`${name} failed with code ${code}`, 'ERROR');
          resolve(false);
        }
      });

      process.on('error', error => {
        this.log(`${name} error: ${error.message}`, 'ERROR');
        resolve(false);
      });
    });
  }

  async runAllAutomations() {
    this.log('Starting master error fixer...');

    const automations = [
      {
        script: 'automation/syntax-fixer-automation.cjs',
        name: 'Syntax Fixer',
      },
      { script: 'automation/lint-fixer-automation.cjs', name: 'Lint Fixer' },
      { script: 'automation/error-fixer-automation.cjs', name: 'Error Fixer' },
      {
        script: 'automation/build-monitor-automation.cjs',
        name: 'Build Monitor',
      },
      { script: 'automation/git-automation.cjs', name: 'Git Automation' },
    ];

    const results = [];

    for (const automation of automations) {
      const success = await this.runAutomation(
        automation.script,
        automation.name
      );
      results.push({ name: automation.name, success });
    }

    return results;
  }

  async generateMasterReport(results) {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      totalAutomations: results.length,
      successful: successful,
      failed: failed,
      success: failed === 0,
      status: failed === 0 ? 'SUCCESS' : 'PARTIAL_SUCCESS',
      results: results,
    };

    const reportFile = 'automation/logs/master-error-fixer-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Master report generated: ${reportFile}`);
    this.log(`Summary: ${successful}/${results.length} automations successful`);

    return report;
  }

  async run() {
    try {
      const results = await this.runAllAutomations();
      await this.generateMasterReport(results);
      this.log('Master error fixer completed');
    } catch (error) {
      this.log(`Master error fixer failed: ${error.message}`, 'ERROR');
    }
  }
}

// Run the master automation
if (require.main === module) {
  const master = new MasterErrorFixer();
  master.run().catch(console.error);
}

module.exports = MasterErrorFixer;
