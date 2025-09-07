#!/usr/bin/env node;
// Simple execution script for all automation tasks;
console.log('🚀 Starting Comprehensive Automation Execution...');

const scripts = [

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
