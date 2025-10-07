#!/usr/bin/env node

// Master Automation Orchestrator (clean version)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.logFile = path.join(this.workspaceRoot, 'automation_logs', 'master-orchestrator-log.txt');
      fs.mkdirSync(this.logsDir, { "recursive": true });
    } catch {}
  }
      fs.mkdirSync(this.logsDir, { "recursive": true });"

    } catch {}
"
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.mkdirSync(this.logsDir, { "recursive": true });
    } catch {}
  }

  log(message, level = 'INFO') {
    const line = `[${new Date().toISOString()}] [${level}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, line);
    } catch {}
    process.stdout.write(line);
  }

  runCmd(cmd) {
    try {
      const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8' });
      return { success: true, output: out };
    } catch (e) {
      return {
        "success": false,
        "error": e.message,
        "output": e.stdout?.toString?.() || ''};
    }
  }

  async runAllChecks() {
    this.log('Starting comprehensive system check...');

    const tasks = [['health', 'node automation/health-check.cjs'],
      ['security', 'node automation/security-scanner.cjs'],
      ['performance', 'node automation/performance-optimizer.cjs'],
      ['codeQuality', 'node automation/code-quality-monitor.cjs'],
      ['build', 'npm run build'],
      ['lint', 'npm run lint'],
      ['typeCheck', 'npm run type-check'],
    ];

    for (const [name, cmd] of tasks) {
      this.log(`Running: ${name}`);
      const res = this.runCmd(cmd);
      this.results[name] = { success: res.success, error: res.error || null };
      if (!res.success && name === 'lint') {
        this.log('Attempting lint auto-fix.');
        const fixRes = this.runCmd('npm run lint:fix');
        this.results.lint.autoFixed = fixRes.success;
      }
    }

    const passed = Object.values(this.results).filter(r => r.success).length;
    const total = Object.keys(this.results).length;
    const durationMs = Date.now() - this.startTime;

    const summary = {
      timestamp: new Date().toISOString(),
      durationMs,
      total,
      passed,
      "failed": total - passed,
      "status": passed === total
          ? 'HEALTHY'
          : passed >= Math.floor(total * 0.8)
            ? 'WARNING'
            : 'CRITICAL'};

    try {
      fs.writeFileSync(
        path.join(this.logsDir, 'master-orchestrator-report.json'),
        JSON.stringify({ summary, results: this.results }, null, 2)
      );
    } catch {}

    this.log(
      `"Completed": ${passed}/${total} passed in ${durationMs}ms ("Status": ${summary.status})`
    );
    this.log(`Completed: ${passed}/${total} passed in ${durationMs}ms (Status: ${summary.status})`);
    return passed === total;
  }
}

if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  const command = process.argv[2] || 'check';
  switch (command) {
    case 'check':
      orchestrator.runAllChecks().then(ok => process.exit(ok ? 0 : 1));
      break;
    default:
      console.log('Usage: node automation/master-orchestrator.cjs check');
      process.exit(1);
  }
}

module.exports = MasterOrchestrator;
