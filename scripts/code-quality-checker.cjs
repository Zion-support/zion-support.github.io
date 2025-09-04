#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityChecker {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      checks: []
    };
  }

  async checkCodeQuality() {
    console.log('🔍 Running code quality checks...');
    
    const checks = [
      { name: 'ESLint', cmd: 'npm run lint' },
      { name: 'Prettier', cmd: 'npm run format:check' },
      { name: 'TypeScript', cmd: 'npx tsc --noEmit' }
    ];

    for (const check of checks) {
      try {
        execSync(check.cmd, { stdio: 'pipe' });
        this.results.checks.push({
          name: check.name,
          status: 'passed'
        });
        console.log(`✅ ${check.name}: Passed`);
      } catch (error) {
        this.results.checks.push({
          name: check.name,
          status: 'failed',
          error: error.message
        });
        console.log(`❌ ${check.name}: Failed`);
      }
    }

    const reportPath = path.join(process.cwd(), 'code-quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log('📄 Code quality report saved');
  }
}

if (require.main === module) {
  const checker = new CodeQualityChecker();
  checker.checkCodeQuality().catch(console.error);
}

module.exports = CodeQualityChecker;