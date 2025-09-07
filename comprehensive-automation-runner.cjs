#!/usr/bin/env node

const { execSync, spawn } = require('child_process');

console.log('🚀 Starting Comprehensive Automation Runner...');

// List of automation scripts to run
const automationScripts = [
  // Core automation scripts
  'comprehensive-automation-suite.cjs',
  'enhanced-automation-suite.cjs',
  'final-automation-suite.cjs',
  'ultimate-automation-orchestrator.cjs',
  
  // Code quality and fixing scripts
  'comprehensive-code-fixer.cjs',
  'comprehensive-syntax-fixer.cjs',
  'comprehensive-syntax-fix.cjs',
  'fix-all-syntax-errors.cjs',
  'fix-all-remaining-syntax-issues.cjs',
  
  // Testing scripts
  'comprehensive-test-suite.cjs',
  'comprehensive-test-runner.cjs',
  'enhanced-test-runner.cjs',
  
  // Build and deployment scripts
  'comprehensive-build-automation.cjs',
  'comprehensive-deployment-automation.cjs',
  'enhanced-build-test-automation.cjs',
  
  // Performance and optimization scripts
  'performance-optimizer-enhanced.cjs',
  'resource-optimizer.cjs',
  'comprehensive-app-improvement.cjs',
  
  // Security scripts
  'security-audit-enhanced.cjs',
  'security-scanner.cjs',
  'comprehensive-security-audit.cjs',
  
  // Monitoring scripts
  'comprehensive-monitoring-alerting.cjs',
  'health-monitor.cjs',
  'performance-monitor.cjs',
  
  // Git and merge scripts
  'comprehensive-merge-conflict-resolver.cjs',
  'comprehensive-pr-merge-automation.cjs',
  'git-workflow-automator.cjs'
];

// Function to run a script safely
function runScript(scriptName) {
  return new Promise((resolve) => {
    const scriptPath = path.join('/workspace', scriptName);
    
    if (!fs.existsSync(scriptPath)) {
      console.log(`⚠️  Script not found: ${scriptName}`);
      resolve({ success: false, error: 'Script not found' });
      return;
    }
    
    console.log(`🔄 Running: ${scriptName}`);
    
    try {
      const result = execSync(`node "${scriptPath}"`, { 
        cwd: '/workspace',
        timeout: 300000, // 5 minutes timeout
        stdio: 'pipe'
      });
      
      console.log(`✅ Completed: ${scriptName}`);
      resolve({ success: true, output: result.toString() });
    } catch (error) {
      console.log(`❌ Failed: ${scriptName} - ${error.message}`);
      resolve({ success: false, error: error.message, output: error.stdout?.toString() });
    }
  });
}

// Function to run npm scripts
function runNpmScript(scriptName) {
  return new Promise((resolve) => {
    console.log(`🔄 Running npm script: ${scriptName}`);
    
    try {
      const result = execSync(`npm run ${scriptName}`, { 
        cwd: '/workspace',
        timeout: 300000,
        stdio: 'pipe'
      });
      
      console.log(`✅ Completed npm script: ${scriptName}`);
      resolve({ success: true, output: result.toString() });
    } catch (error) {
      console.log(`❌ Failed npm script: ${scriptName} - ${error.message}`);
      resolve({ success: false, error: error.message, output: error.stdout?.toString() });
    }
  });
}

// Main execution function
async function runAllAutomations() {
  const results = {
    successful: [],
    failed: [],
    npmScripts: {
      successful: [],
      failed: []
    }
  };
  
  console.log('📋 Running Node.js automation scripts...');
  
  // Run all automation scripts
  for (const script of automationScripts) {
    const result = await runScript(script);
    if (result.success) {
      results.successful.push(script);
    } else {
      results.failed.push({ script, error: result.error });
    }
  }
  
  console.log('\n📋 Running npm automation scripts...');
  
  // Run key npm scripts
  const npmScripts = [
    'lint:fix',
    'type-check',
    'test:smoke',
    'build',
    'quality:analyze',
    'security:scan',
    'performance:analyze',
    'system:optimize'
  ];
  
  for (const script of npmScripts) {
    const result = await runNpmScript(script);
    if (result.success) {
      results.npmScripts.successful.push(script);
    } else {
      results.npmScripts.failed.push({ script, error: result.error });
    }
  }
  
  // Generate report
  console.log('\n📊 Automation Results Summary:');
  console.log(`✅ Successful Node.js scripts: ${results.successful.length}`);
  console.log(`❌ Failed Node.js scripts: ${results.failed.length}`);
  console.log(`✅ Successful npm scripts: ${results.npmScripts.successful.length}`);
  console.log(`❌ Failed npm scripts: ${results.npmScripts.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed Node.js scripts:');
    results.failed.forEach(f => console.log(`  - ${f.script}: ${f.error}`));
  }
  
  if (results.npmScripts.failed.length > 0) {
    console.log('\n❌ Failed npm scripts:');
    results.npmScripts.failed.forEach(f => console.log(`  - ${f.script}: ${f.error}`));
  }
  
  // Save results to file
  const reportPath = '/workspace/automation-results.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Results saved to: ${reportPath}`);
  
  return results;
}

// Run the automation
runAllAutomations().catch(console.error);