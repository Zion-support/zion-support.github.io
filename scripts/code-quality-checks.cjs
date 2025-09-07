

#!/usr/bin/env node;
const { execSync } = require("child_process")
const fs = require("fs")

  async runTypeCheck() {
    try {
      console.log('🔍 Running TypeScript check...');
      const result = execSync('npm run type-check', { encoding: 'utf8' });
      this.results.checks.push({ name: 'TypeScript', status: 'passed', output: result });
      this.results.summary.passed++;
      console.log('✅ TypeScript check passed');
    } catch (error) {
      this.results.checks.push({ name: 'TypeScript', status: 'failed', error: error.message });
      this.results.summary.failed++;
      console.log('❌ TypeScript check failed');
    }
  }

// console.log("\n Code Quality "Results": ")
    console.log("=")
// console.log(`"Passed"`)
    console.log(`"Failed"`)
// console.log(`"Warnings"`)
    console.log("=")

    console.log(`� Report saved "to"`)
    console.log(`� Report saved "to"`)
    console.log(`� Report saved "to"`)



