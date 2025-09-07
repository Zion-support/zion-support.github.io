#!/usr/bin/env node
const { execSync } = require('child_process');

class ExecuteAllScripts {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async run() {
    console.log('🚀 Executing all automation scripts...');
    const scripts = [
      'comprehensive-automation-suite.cjs',
      'final-automation-suite-fixed.cjs',
      'ultimate-automation-orchestrator.cjs'
    ];

    for (const script of scripts) {
      try {
        console.log(`Running: ${script}`);
        execSync(`node ${script}`, { stdio: 'inherit', cwd: this.projectRoot });
        console.log(`✅ ${script} completed`);
      } catch (error) {
        console.log(`❌ ${script} failed: ${error.message}`);
      }
    }
  }
}

const executor = new ExecuteAllScripts();
executor.run().catch(console.error);