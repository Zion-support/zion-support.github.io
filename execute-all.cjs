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
class ExecuteAllScripts {
  constructor() {
    this.projectRoot = process.cwd();
    this.scripts = [
      'comprehensive-automation-suite.cjs',
      'automation-runner.cjs',
      'comprehensive-improvements.cjs',
      'final-automation-suite.cjs'
    ];
  }

  async runScript(scriptPath) {
    console.log(`\n📝 Running: ${scriptPath}`);
    try {
      require(`./${scriptPath}`);
      console.log(`✅ Completed: ${scriptPath}`);
      return true;
    } catch (error) {
      console.log(`❌ Failed: ${scriptPath} - ${error.message}`);
      return false;
    }
  }

  async run() {
    console.log('🎯 Executing all automation scripts...');

    const results = [];
    for (const script of this.scripts) {
      const success = await this.runScript(script);
      results.push({ script, success });
    }

    const successful = results.filter(r => r.success).length;
    const total = results.length;

    console.log(`\n🎉 Execution completed!`);
    console.log(`📊 Results: ${successful}/${total} scripts successful`);

    if (successful < total) {
      console.log('\n⚠️ Failed scripts:');
      results
        .filter(r => !r.success)
        .forEach(r => {
          console.log(`  - ${r.script}`);
        });
    }

    console.log('\n📋 Next steps:');
    console.log('1. Check the generated reports');
    console.log('2. Review any error messages');
    console.log('3. Run: git add . && git commit -m "feat: Comprehensive automation improvements"');
    console.log('4. Run: git push origin main');
  }
}

// Run the executor
if (require.main === module) {
  const executor = new ExecuteAllScripts();
  executor.run().catch(console.error);
}

module.exports = ExecuteAllScripts;

const executor = new ExecuteAllScripts();
executor.run().catch(console.error);
