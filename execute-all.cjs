#!/usr/bin/env node

// Simple execution script for all automation tasks
console.log('🚀 Starting Comprehensive Automation Execution...');

const scripts = [
  'git-resolution.cjs',
  'run-all-automations.cjs',
  'comprehensive-improvements.cjs',
  'final-automation-orchestrator.cjs',
  'final-automation-suite.cjs',
];

async function runScript(scriptPath) {
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

async function runAll() {
  console.log('🎯 Executing all automation scripts...');

  const results = [];
  for (const script of scripts) {
    const success = await runScript(script);
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
  console.log(
    '3. Run: git add . && git commit -m "feat: Comprehensive automation improvements"'
  );
  console.log('4. Run: git push origin main');
}

runAll().catch(console.error);
