#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AccessibilityChecker {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(line);
    fs.appendFileSync(path.join(this.logsDir, 'accessibility-checker.log'), line + '\n');
  }

  run(command, description) {
    try {
      this.log(`Running: ${description}`);
      execSync(command, { stdio: 'pipe', encoding: 'utf8' });
      this.log(`Done: ${description}`);
      return { success: true };
    } catch (e) {
      this.log(`Failed: ${description} -> ${e.message}`, 'error');
      return { success: false, error: e.message };
    }
  }

  async runAll() {
    const results = [];
    // Best-effort checks; tolerate missing scripts
    results.push(this.run('npm run -s test:accessibility', 'Accessibility tests'));
    results.push(this.run('npm run -s lint', 'ESLint (includes a11y rules)'));
    return results;
  }

  writeReport(results) {
    const summary = {
      checksRun: results.length,
      successfulChecks: results.filter(r => r.success).length,
      failedChecks: results.filter(r => !r.success).length,
    };
    const report = { timestamp: new Date().toISOString(), results, summary };
    const out = path.join(this.logsDir, `accessibility-report-${Date.now()}.json`);
    fs.writeFileSync(out, JSON.stringify(report, null, 2));
    this.log(`Report saved: ${out}`);
  }
}

(async () => {
  const checker = new AccessibilityChecker();
  const results = await checker.runAll();
  checker.writeReport(results);
})();
