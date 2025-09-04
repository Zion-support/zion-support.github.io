#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Starting Comprehensive Test Runner...');

class TestRunner {
  constructor() {
    this.tests = [];
    this.results = [];
    this.startTime = Date.now();
  }

  addTest(name, testFunction, options = {}) {
    this.tests.push({
      name,
      testFunction,
      critical: options.critical || false,
      timeout: options.timeout || 30000
    });
  }

  async runTest(test) {
    const startTime = Date.now();
    
    try {
      console.log(`🧪 Running: ${test.name}`);
      
      const result = await Promise.race([
        test.testFunction(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Test timeout')), test.timeout)
        )
      ]);
      
      const duration = Date.now() - startTime;
      const success = {
        name: test.name,
        status: 'passed',
        duration,
        result,
        critical: test.critical
      };
      
      console.log(`✅ ${test.name} passed in ${duration}ms`);
      return success;
      
    } catch (error) {
      const duration = Date.now() - startTime;
      const failure = {
        name: test.name,
        status: 'failed',
        duration,
        error: error.message,
        critical: test.critical
      };
      
      const icon = test.critical ? '🚨' : '❌';
      console.log(`${icon} ${test.name} failed (${test.critical ? 'CRITICAL' : 'NON-CRITICAL'}) in ${duration}ms`);
      console.log(`   Error: ${error.message}`);
      
      return failure;
    }
  }

  async runAll() {
    console.log(`\n🚀 Running ${this.tests.length} tests...\n`);
    
    for (const test of this.tests) {
      const result = await this.runTest(test);
      this.results.push(result);
    }
    
    this.generateReport();
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    const passed = this.results.filter(r => r.status === 'passed').length;
    const failed = this.results.filter(r => r.status === 'failed').length;
    const criticalFailures = this.results.filter(r => r.status === 'failed' && r.critical).length;
    const passRate = Math.round((passed / this.results.length) * 100);

    console.log('\n📊 Test Results Summary:');
    console.log(`   - Total tests: ${this.results.length}`);
    console.log(`   - Passed: ${passed}`);
    console.log(`   - Failed: ${failed}`);
    console.log(`   - Critical failures: ${criticalFailures}`);
    console.log(`   - Pass rate: ${passRate}%`);
    console.log(`   - Total duration: ${totalDuration}ms`);

    if (failed > 0) {
      console.log('\n❌ Failed Tests:');
      this.results
        .filter(r => r.status === 'failed')
        .forEach(result => {
          console.log(`   - ${result.name} (${result.critical ? 'CRITICAL' : 'NON-CRITICAL'}): ${result.error}`);
        });
    }

    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      duration: totalDuration,
      summary: {
        total: this.results.length,
        passed,
        failed,
        criticalFailures,
        passRate
      },
      results: this.results
    };

    const reportFile = `comprehensive-test-report-${Date.now()}.json`;
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    console.log(`\n📄 Test report saved to: ${reportFile}`);

    if (criticalFailures > 0) {
      console.log('\n🚨 Test suite completed with critical failures');
      process.exit(1);
    } else if (failed > 0) {
      console.log('\n⚠️  Test suite completed with non-critical failures');
      process.exit(0);
    } else {
      console.log('\n🎉 All tests passed!');
      process.exit(0);
    }
  }
}

// Initialize test runner
const testRunner = new TestRunner();

// Add tests
testRunner.addTest('Build System Test', async () => {
  try {
    execSync('npm run build', { stdio: 'pipe' });
    return 'Build completed successfully';
  } catch (error) {
    throw new Error(`Build failed: ${error.message}`);
  }
}, { critical: true });

testRunner.addTest('Lint Check', async () => {
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    return 'Linting passed';
  } catch (error) {
    throw new Error(`Linting failed: ${error.message}`);
  }
});

testRunner.addTest('Type Check', async () => {
  try {
    execSync('npx tsc --noEmit', { stdio: 'pipe' });
    return 'Type checking passed';
  } catch (error) {
    throw new Error(`Type checking failed: ${error.message}`);
  }
});

testRunner.addTest('Package.json Validation', async () => {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (!packageJson.name) throw new Error('Missing package name');
  if (!packageJson.version) throw new Error('Missing package version');
  if (!packageJson.scripts) throw new Error('Missing scripts section');
  if (!packageJson.scripts.build) throw new Error('Missing build script');
  
  return 'Package.json is valid';
}, { critical: true });

testRunner.addTest('Dependencies Check', async () => {
  if (!fs.existsSync('node_modules')) {
    throw new Error('node_modules not found - run npm install');
  }
  
  if (!fs.existsSync('package-lock.json')) {
    throw new Error('package-lock.json not found - dependencies not locked');
  }
  
  return 'Dependencies are properly installed';
}, { critical: true });

testRunner.addTest('Source Files Check', async () => {
  const requiredDirs = ['pages', 'components'];
  const missingDirs = requiredDirs.filter(dir => !fs.existsSync(dir));
  
  if (missingDirs.length > 0) {
    throw new Error(`Missing required directories: ${missingDirs.join(', ')}`);
  }
  
  // Check for at least one page
  const pages = fs.readdirSync('pages').filter(file => 
    file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')
  );
  
  if (pages.length === 0) {
    throw new Error('No pages found in pages directory');
  }
  
  return `Found ${pages.length} pages and required directories`;
}, { critical: true });

testRunner.addTest('Next.js Configuration', async () => {
  const configFiles = ['next.config.js', 'next.config.mjs', 'next.config.ts'];
  const foundConfig = configFiles.find(file => fs.existsSync(file));
  
  if (!foundConfig) {
    throw new Error('Next.js configuration file not found');
  }
  
  return `Next.js configuration found: ${foundConfig}`;
});

testRunner.addTest('Git Repository Check', async () => {
  if (!fs.existsSync('.git')) {
    throw new Error('Not a git repository');
  }
  
  const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  return `Git repository on branch: ${branch}`;
});

testRunner.addTest('Security Headers Check', async () => {
  const filesToCheck = ['pages/_app.tsx', 'pages/_document.tsx'];
  let securityHeadersFound = false;
  
  filesToCheck.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('Content-Security-Policy') || 
          content.includes('X-Frame-Options') || 
          content.includes('X-Content-Type-Options')) {
        securityHeadersFound = true;
      }
    }
  });
  
  if (!securityHeadersFound) {
    throw new Error('Security headers not found - consider adding CSP and security headers');
  }
  
  return 'Security headers found';
});

// Run all tests
testRunner.runAll().catch(error => {
  console.error('🚨 Test runner failed:', error.message);
  process.exit(1);
});