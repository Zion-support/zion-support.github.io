#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Zion Tech Group - Master Automation Runner');
console.log('==============================================');

<<<<<<< HEAD
  log(step, message, success = true, details = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      step,
      message,
      success,
      details
    };
    
    this.results.steps.push(logEntry);
    
    const status = success ? '✅' : '❌';
    console.log(`${status} [${step}] ${message}`);
    
    if (details) {
      console.log(`   Details: ${details}`);
    }
  }

  async runCommand(command, step, timeout = 300000) {
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout,
        stdio: 'pipe'
      });
      this.log(step, `Command executed successfully`, true, result.trim());
      return { success: true, output: result };
    } catch (error) {
      this.log(step, `Command failed: ${error.message}`, false, error.stderr);
      this.results.errors.push(`${step}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async installDependencies() {
    this.log('INSTALL', 'Installing dependencies...');
    const result = await this.runCommand('npm install', 'INSTALL');
    if (!result.success) {
      this.results.success = false;
    }
    return result.success;
  }

  async fixSyntaxErrors() {
    this.log('SYNTAX', 'Fixing syntax errors...');
    const result = await this.runCommand('node scripts/auto-fixer.js', 'SYNTAX');
    if (!result.success) {
      this.results.warnings.push('Some syntax fixes failed');
    }
    return true; // Continue even if some fixes fail
  }

  async runLinting() {
    this.log('LINT', 'Running linting...');
    const result = await this.runCommand('npm run lint:fix', 'LINT');
    if (!result.success) {
      this.results.warnings.push('Linting had issues');
    }
    return true;
  }

  async runTypeChecking() {
    this.log('TYPES', 'Running type checking...');
    const result = await this.runCommand('npm run type-check', 'TYPES');
    if (!result.success) {
      this.results.warnings.push('Type checking had issues');
    }
    return true;
  }

  async runTests() {
    this.log('TESTS', 'Running tests...');
    const result = await this.runCommand('npm run test:smoke', 'TESTS');
    if (!result.success) {
      this.results.warnings.push('Some tests failed');
    }
    return true;
  }

  async buildApplication() {
    this.log('BUILD', 'Building application...');
    const result = await this.runCommand('npm run build', 'BUILD');
    if (!result.success) {
      this.results.success = false;
      this.results.errors.push('Build failed');
    }
    return result.success;
  }

  async optimizeBuild() {
    this.log('OPTIMIZE', 'Optimizing build...');
    const result = await this.runCommand('node scripts/advanced-build-optimizer.js', 'OPTIMIZE');
    if (!result.success) {
      this.results.warnings.push('Build optimization had issues');
    }
    return true;
  }

  async runPerformanceCheck() {
    this.log('PERFORMANCE', 'Running performance check...');
    const result = await this.runCommand('node scripts/performance-monitor-enhanced.js', 'PERFORMANCE');
    if (!result.success) {
      this.results.warnings.push('Performance check had issues');
    }
    return true;
  }

  async createAdditionalScripts() {
    this.log('SCRIPTS', 'Creating additional automation scripts...');
    
    // Create a comprehensive test runner
    const testRunner = `#!/usr/bin/env node

console.log('🧪 Running comprehensive test suite...');

const tests = [
  { name: 'Smoke Tests', command: 'npm run test:smoke' },
  { name: 'Type Check', command: 'npm run type-check' },
  { name: 'Lint Check', command: 'npm run lint' },
  { name: 'Build Test', command: 'npm run build' }
=======
const automationScripts = [
  { name: 'Health Check', script: 'scripts/quick-health-check.js' },
  { name: 'Performance Optimization', script: 'scripts/performance-optimizer.js' },
  { name: 'Security Check', script: 'scripts/security-check.js' }
>>>>>>> origin/chore/fix-lint-and-merge
];

const results = {
  timestamp: new Date().toISOString(),
  scripts: [],
  summary: {
    total: 0,
    passed: 0,
    failed: 0
  }
<<<<<<< HEAD
}

console.log(\`\\n📊 Test Results: \${passed} passed, \${failed} failed\`);
process.exit(failed > 0 ? 1 : 0);
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts/comprehensive-test-runner.js'), testRunner);
    execSync(`chmod +x ${path.join(this.projectRoot, 'scripts/comprehensive-test-runner.js')}`);

    // Create a deployment script
    const deployScript = `#!/usr/bin/env node

console.log('🚀 Starting deployment process...');

try {
  console.log('1. Installing dependencies...');
  execSync('npm ci --production', { stdio: 'inherit' });
  
  console.log('2. Running tests...');
  execSync('npm run test:smoke', { stdio: 'inherit' });
  
  console.log('3. Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('4. Starting application...');
  execSync('npm start', { stdio: 'inherit' });
  
  console.log('✅ Deployment completed successfully!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts/deploy.js'), deployScript);
    execSync(`chmod +x ${path.join(this.projectRoot, 'scripts/deploy.js')}`);

    // Create a health check script
    const healthCheck = `#!/usr/bin/env node
import http from 'http';

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  timeout: 5000
=======
>>>>>>> origin/chore/fix-lint-and-merge
};

async function runAutomation() {
  console.log('\n🔧 Running automation scripts...\n');
  
  for (const { name, script } of automationScripts) {
    console.log(`📋 Running ${name}...`);
    results.summary.total++;
    
    try {
      execSync(`node ${script}`, { stdio: 'inherit' });
      console.log(`✅ ${name} completed successfully\n`);
      results.scripts.push({ name, status: 'success', timestamp: new Date().toISOString() });
      results.summary.passed++;
    } catch (error) {
      console.log(`❌ ${name} failed: ${error.message}\n`);
      results.scripts.push({ name, status: 'failed', error: error.message, timestamp: new Date().toISOString() });
      results.summary.failed++;
    }
  }
  
  // Generate final report
  generateFinalReport();
}

function generateFinalReport() {
  console.log('📊 Automation Summary');
  console.log('====================');
  console.log(`Total Scripts: ${results.summary.total}`);
  console.log(`Passed: ${results.summary.passed}`);
  console.log(`Failed: ${results.summary.failed}`);
  console.log(`Success Rate: ${((results.summary.passed / results.summary.total) * 100).toFixed(1)}%`);
  
  // Save detailed report
  fs.writeFileSync('master-automation-report.json', JSON.stringify(results, null, 2));
  console.log('\n📄 Detailed report saved to master-automation-report.json');
  
  // Generate markdown summary
  const markdown = `# Master Automation Report

## Summary
- **Total Scripts**: ${results.summary.total}
- **Passed**: ${results.summary.passed}
- **Failed**: ${results.summary.failed}
- **Success Rate**: ${((results.summary.passed / results.summary.total) * 100).toFixed(1)}%

## Script Results
${results.scripts.map(script => `- **${script.name}**: ${script.status === 'success' ? '✅' : '❌'} ${script.status}`).join('\n')}

## Timestamp
${results.timestamp}
`;
  
  fs.writeFileSync('MASTER_AUTOMATION_REPORT.md', markdown);
  console.log('📄 Markdown report saved to MASTER_AUTOMATION_REPORT.md');
  
  console.log('\n🎉 Master automation completed!');
}

// Run the automation
runAutomation().catch(console.error);