#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AppOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = './automation-reports';
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async optimizeApp() {
    this.log('🎯 Starting app optimization...');

    const optimizations = [
      { cmd: 'npm run lint:fix', desc: 'Fix linting issues' },
      { cmd: 'npm run type-check', desc: 'TypeScript type checking' },
      { cmd: 'npm run build', desc: 'Build application' },
      { cmd: 'npm run test:smoke', desc: 'Run smoke tests' }
    ];

    const results = [];
    for (const optimization of optimizations) {
      const result = await this.runCommand(optimization.cmd, optimization.desc);
      results.push({ ...optimization, result });
    }

    this.log('🎉 App optimization completed!');
    return results;
  }

  async run() {
    try {
      const results = await this.optimizeApp();
      
      const report = {
        timestamp: new Date().toISOString(),
        results: results,
        summary: {
          total: results.length,
          successful: results.filter(r => r.result.success).length,
          failed: results.filter(r => !r.result.success).length
        }
      };

      const reportPath = path.join(this.reportsDir, 'app-optimizer-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📄 Report saved to: ${reportPath}`);
    } catch (error) {
      this.log(`❌ App optimization failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the optimizer
const optimizer = new AppOptimizer();
optimizer.run().catch(console.error);
