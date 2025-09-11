#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.results = { steps: [], errors: [] };
  }

  runCommand(cmd, label) {
    try {
      console.log(`🔄 ${label}...`);
      const out = execSync(cmd, { cwd: this.projectRoot, stdio: 'pipe', encoding: 'utf8' });
      console.log(`✅ ${label}`);
      this.results.steps.push({ label, success: true });
      return { success: true, out };
    } catch (e) {
      console.log(`❌ ${label}: ${e.message}`);
      this.results.steps.push({ label, success: false, error: e.message });
      this.results.errors.push(`${label}: ${e.message}`);
      return { success: false, error: e.message };
    }
  }

  run() {
    // Lightweight orchestrator: verify build, tests, and selected scripts
    this.runCommand('npm run build', 'Build');
    this.runCommand('npx vitest run --reporter=dot --passWithNoTests', 'Tests');
    if (fs.existsSync(path.join(this.projectRoot, 'scripts', 'security-audit.cjs'))) {
      this.runCommand('node scripts/security-audit.cjs', 'Security Audit');
    }
    if (fs.existsSync(path.join(this.projectRoot, 'scripts', 'performance-optimizer.cjs'))) {
      this.runCommand('node scripts/performance-optimizer.cjs', 'Performance Optimizer');
    }
    fs.writeFileSync(path.join(this.projectRoot, 'master-automation-report.json'), JSON.stringify(this.results, null, 2));
    console.log('📄 master-automation-report.json written');
    if (this.results.errors.length > 0) process.exitCode = 1;
  }
}

new MasterAutomationOrchestrator().run();

