#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ExecuteAllScripts {
  constructor() {
    this.projectRoot = process.cwd();
    this.candidateScripts = [
      'comprehensive-automation-suite.cjs',
      'automation-runner.cjs',
      'final-automation-suite-fixed.cjs',
      'final-automation-suite.cjs',
      'comprehensive-improvements.cjs',
      'comprehensive-test-and-build.cjs'
    ];
  }

  getExistingScripts() {
    return this.candidateScripts
      .map((rel) => ({ rel, abs: path.join(this.projectRoot, rel) }))
      .filter(({ abs }) => fs.existsSync(abs))
      .map(({ rel }) => rel);
  }

  runOne(script) {
    console.log(`\n📝 Running: ${script}`);
    try {
      execSync(`node ${script}`, { stdio: 'inherit', cwd: this.projectRoot });
      console.log(`✅ Completed: ${script}`);
      return true;
    } catch (error) {
      console.log(`❌ Failed: ${script} - ${error.message}`);
      return false;
    }
  }

  async run() {
    console.log('🚀 Executing automation scripts...');
    const scripts = this.getExistingScripts();
    if (scripts.length === 0) {
      console.log('ℹ️ No known automation scripts found.');
      return;
    }

    const results = scripts.map((s) => ({ script: s, success: this.runOne(s) }));
    const successful = results.filter((r) => r.success).length;
    const total = results.length;
    console.log(`\n📊 Results: ${successful}/${total} successful`);
    if (successful < total) {
      console.log('\n⚠️ Failed scripts:');
      results.filter((r) => !r.success).forEach((r) => console.log(`  - ${r.script}`));
    }
  }
}

const executor = new ExecuteAllScripts();
executor.run().catch((e) => {
  console.error(e);
  process.exit(1);
});