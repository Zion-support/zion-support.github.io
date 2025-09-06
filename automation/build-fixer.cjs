#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Build Fixer...');

class BuildFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot,
        timeout: 300000
      });
      this.log(`✅ ${description} completed`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async fixBuildIssues() {
    this.log('🔧 Fixing build issues...');
    
    const fixes = [
      { cmd: 'npm run clean', desc: 'Clean build artifacts' },
      { cmd: 'npm run lint:fix', desc: 'Fix linting errors' },
      { cmd: 'npm run type-check', desc: 'Fix TypeScript errors' },
      { cmd: 'npm run build', desc: 'Build application' }
    ];

    const results = [];
    let successfulFixes = 0;

    for (const fix of fixes) {
      const result = await this.runCommand(fix.cmd, fix.desc);
      results.push({
        ...fix,
        ...result
      });
      
      if (result.success) {
        successfulFixes++;
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: fixes.length,
      successfulFixes,
      failedFixes: fixes.length - successfulFixes,
      results,
      successRate: Math.round((successfulFixes / fixes.length) * 100)
    };

    const reportPath = path.join(this.reportsDir, 'build-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Build fix completed! Report saved to: ${reportPath}`);
    this.log(`📈 Success Rate: ${report.successRate}% (${successfulFixes}/${fixes.length} fixes successful)`);
    
    return report;
  }
}

// Run the build fixer
const fixer = new BuildFixer();
fixer.fixBuildIssues().catch(console.error);