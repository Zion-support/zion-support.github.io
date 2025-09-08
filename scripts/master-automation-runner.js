import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MasterAutomationRunner {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.results = {
      startTime: new Date().toISOString(),
      endTime: null,
      success: true,
      steps: [],
      errors: [],
      warnings: []
    };
  }

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
import { execSync } from 'child_process';

console.log('🧪 Running comprehensive test suite...');

const tests = [
  { name: 'Smoke Tests', command: 'npm run test:smoke' },
  { name: 'Type Check', command: 'npm run type-check' },
  { name: 'Lint Check', command: 'npm run lint' },
  { name: 'Build Test', command: 'npm run build' }
];

let passed = 0;
let failed = 0;

for (const test of tests) {
  try {
    console.log(\`Running \${test.name}...\`);
    execSync(test.command, { stdio: 'pipe' });
    console.log(\`✅ \${test.name} passed\`);
    passed++;
  } catch (error) {
    console.log(\`❌ \${test.name} failed\`);
    failed++;
  }
}

console.log(\`\\n📊 Test Results: \${passed} passed, \${failed} failed\`);
process.exit(failed > 0 ? 1 : 0);
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts/comprehensive-test-runner.js'), testRunner);
    execSync(`chmod +x ${path.join(this.projectRoot, 'scripts/comprehensive-test-runner.js')}`);

    // Create a deployment script
    const deployScript = `#!/usr/bin/env node
import { execSync } from 'child_process';

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
};

const req = http.request(options, (res) => {
  console.log(\`✅ Health check passed: \${res.statusCode}\`);
  process.exit(0);
});

req.on('error', (error) => {
  console.error(\`❌ Health check failed: \${error.message}\`);
  process.exit(1);
});

req.on('timeout', () => {
  console.error('❌ Health check timed out');
  process.exit(1);
});

req.end();
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts/health-check.js'), healthCheck);
    execSync(`chmod +x ${path.join(this.projectRoot, 'scripts/health-check.js')}`);

    this.log('SCRIPTS', 'Additional scripts created successfully');
    return true;
  }

  async generateReport() {
    this.results.endTime = new Date().toISOString();
    this.results.duration = new Date(this.results.endTime) - new Date(this.results.startTime);
    
    const reportPath = path.join(this.projectRoot, 'master-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    
    // Generate markdown report
    const markdownReport = `# Master Automation Report

**Generated:** ${this.results.endTime}
**Duration:** ${Math.round(this.results.duration / 1000)}s
**Status:** ${this.results.success ? '✅ SUCCESS' : '❌ FAILED'}

## Summary
- **Steps Completed:** ${this.results.steps.length}
- **Errors:** ${this.results.errors.length}
- **Warnings:** ${this.results.warnings.length}

## Steps
${this.results.steps.map(step => 
  `- ${step.success ? '✅' : '❌'} **${step.step}**: ${step.message}`
).join('\n')}

${this.results.errors.length > 0 ? `## Errors
${this.results.errors.map(error => `- ${error}`).join('\n')}` : ''}

${this.results.warnings.length > 0 ? `## Warnings
${this.results.warnings.map(warning => `- ${warning}`).join('\n')}` : ''}
`;

    fs.writeFileSync(path.join(this.projectRoot, 'MASTER_AUTOMATION_REPORT.md'), markdownReport);
    
    this.log('REPORT', 'Report generated successfully');
  }

  async run() {
    console.log('🚀 Starting Master Automation Runner...');
    console.log('🏢 Zion Tech Group - Comprehensive Automation System');
    
    try {
      // Step 1: Install dependencies
      await this.installDependencies();
      
      // Step 2: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Step 3: Run linting
      await this.runLinting();
      
      // Step 4: Run type checking
      await this.runTypeChecking();
      
      // Step 5: Run tests
      await this.runTests();
      
      // Step 6: Optimize build
      await this.optimizeBuild();
      
      // Step 7: Build application
      await this.buildApplication();
      
      // Step 8: Run performance check
      await this.runPerformanceCheck();
      
      // Step 9: Create additional scripts
      await this.createAdditionalScripts();
      
      // Step 10: Generate report
      await this.generateReport();
      
      console.log(`\n🎉 Master Automation completed!`);
      console.log(`📊 Results: ${this.results.steps.length} steps, ${this.results.errors.length} errors, ${this.results.warnings.length} warnings`);
      
      return this.results.success;
      
    } catch (error) {
      this.log('MASTER', `Fatal error: ${error.message}`, false);
      this.results.success = false;
      await this.generateReport();
      return false;
    }
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const runner = new MasterAutomationRunner();
  runner.run().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export default MasterAutomationRunner;
