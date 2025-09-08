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

=======
  async run() {
    console.log('🚀 Executing all automation scripts...');
    const scripts = [
      'comprehensive-automation-suite.cjs',
      'final-automation-suite-fixed.cjs',
      'master-automation-orchestrator.cjs'
    ];
  }

  async run() {
    console.log('🚀 Executing all automation scripts...');
    const scripts = ['comprehensive-automation-suite.cjs', 'final-automation-suite-fixed.cjs', 'ultimate-automation-orchestrator.cjs'];
=======
>>>>>>> merged-prs-20250907-203621

    for (const script of scripts) {
      try {
        console.log(`Running: ${script}`);
        execSync(`node ${script}`, { stdio: 'inherit', cwd: this.projectRoot });
        console.log(`✅ ${script} completed`);
      } catch (error) {
        console.log(`❌ ${script} failed: ${error.message}`);
      }

const executor = new ExecuteAllScripts();
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
=======
executor.run().catch(console.error);
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
