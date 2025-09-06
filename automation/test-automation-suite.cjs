#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TestAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.testResults = {
      unit: { passed: 0, failed: 0, errors: [] },
      integration: { passed: 0, failed: 0, errors: [] },
      e2e: { passed: 0, failed: 0, errors: [] },
      smoke: { passed: 0, failed: 0, errors: [] }
    };
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: timeout
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runSmokeTests() {
    this.log('🧪 Running Smoke Tests');
    
    const smokeTests = [
      { cmd: 'npm run build', desc: 'Build Test' },
      { cmd: 'npm run type-check', desc: 'Type Check Test' },
      { cmd: 'npm run lint', desc: 'Lint Test' }
    ];

    for (const test of smokeTests) {
      const result = await this.runCommand(test.cmd, test.desc);
      if (result.success) {
        this.testResults.smoke.passed++;
      } else {
        this.testResults.smoke.failed++;
        this.testResults.smoke.errors.push({
          test: test.desc,
          error: result.error
        });
      }
    }
  }

  async runUnitTests() {
    this.log('🧪 Running Unit Tests');
    
    try {
      const result = await this.runCommand('npm test -- --passWithNoTests', 'Unit Tests');
      if (result.success) {
        this.testResults.unit.passed++;
      } else {
        this.testResults.unit.failed++;
        this.testResults.unit.errors.push({
          test: 'Unit Tests',
          error: result.error
        });
      }
    } catch (error) {
      this.log('Unit tests not available', 'WARNING');
    }
  }

  async runIntegrationTests() {
    this.log('🧪 Running Integration Tests');
    
    try {
      const result = await this.runCommand('npm run test:integration', 'Integration Tests');
      if (result.success) {
        this.testResults.integration.passed++;
      } else {
        this.testResults.integration.failed++;
        this.testResults.integration.errors.push({
          test: 'Integration Tests',
          error: result.error
        });
      }
    } catch (error) {
      this.log('Integration tests not available', 'WARNING');
    }
  }

  async runE2ETests() {
    this.log('🧪 Running E2E Tests');
    
    try {
      const result = await this.runCommand('npm run test:e2e', 'E2E Tests');
      if (result.success) {
        this.testResults.e2e.passed++;
      } else {
        this.testResults.e2e.failed++;
        this.testResults.e2e.errors.push({
          test: 'E2E Tests',
          error: result.error
        });
      }
    } catch (error) {
      this.log('E2E tests not available', 'WARNING');
    }
  }

  createTestUtilities() {
    this.log('🛠️ Creating Test Utilities');
    
    const testUtils = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class TestUtilities {
  constructor() {
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  createTestFile(componentName, testType = 'unit') {
    const testContent = \`import React from 'react';
import { render, screen } from '@testing-library/react';
import \${componentName} from '../\${componentName}';

describe('\${componentName}', () => {
  it('renders without crashing', () => {
    render(<\${componentName} />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<\${componentName} />);
    // Add specific test assertions here
  });
});
\`;

    const testDir = path.join(this.projectRoot, '__tests__', testType);
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    const testFilePath = path.join(testDir, \`\${componentName}.test.tsx\`);
    fs.writeFileSync(testFilePath, testContent);
    this.log(\`Test file created: \${testFilePath}\`);
  }

  generateTestReport() {
    const report = {
      timestamp: new Date().toISOString(),
      testFiles: this.findTestFiles(),
      coverage: this.calculateCoverage()
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'test-utilities-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('Test utilities report generated');
  }

  findTestFiles() {
    const testFiles = [];
    const testDir = path.join(this.projectRoot, '__tests__');
    
    if (fs.existsSync(testDir)) {
      this.scanDirectory(testDir, testFiles);
    }
    
    return testFiles;
  }

  scanDirectory(dir, testFiles) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.scanDirectory(filePath, testFiles);
      } else if (file.endsWith('.test.tsx') || file.endsWith('.test.ts') || file.endsWith('.test.jsx') || file.endsWith('.test.js')) {
        testFiles.push(filePath);
      }
    });
  }

  calculateCoverage() {
    // Simple coverage calculation based on test files vs source files
    const testFiles = this.findTestFiles();
    const srcFiles = this.findSourceFiles();
    
    return {
      testFiles: testFiles.length,
      sourceFiles: srcFiles.length,
      coverage: srcFiles.length > 0 ? Math.round((testFiles.length / srcFiles.length) * 100) : 0
    };
  }

  findSourceFiles() {
    const srcFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(srcDir)) {
      this.scanDirectory(srcDir, srcFiles);
    }
    
    return srcFiles.filter(file => 
      file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')
    );
  }
}

const utils = new TestUtilities();
utils.generateTestReport();
\`;

    fs.writeFileSync(path.join(this.projectRoot, 'test-utilities.cjs'), testUtils);
    fs.chmodSync(path.join(this.projectRoot, 'test-utilities.cjs'), '755');
    this.log('Test utilities created', 'SUCCESS');
  }

  async runAllTests() {
    this.log('🚀 Starting Test Automation Suite');
    
    try {
      await this.runSmokeTests();
      await this.runUnitTests();
      await this.runIntegrationTests();
      await this.runE2ETests();
      this.createTestUtilities();
      
      // Run test utilities
      await this.runCommand('node test-utilities.cjs', 'Test Utilities');
      
      this.generateFinalReport();
    } catch (error) {
      this.log(`Test automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    const totalPassed = Object.values(this.testResults).reduce((sum, result) => sum + result.passed, 0);
    const totalFailed = Object.values(this.testResults).reduce((sum, result) => sum + result.failed, 0);
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      summary: {
        totalPassed,
        totalFailed,
        totalTests: totalPassed + totalFailed,
        successRate: totalPassed + totalFailed > 0 ? Math.round((totalPassed / (totalPassed + totalFailed)) * 100) : 0
      },
      results: this.testResults
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'test-automation-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('📊 Final Test Report Generated', 'SUCCESS');
    this.log(`✅ Total Passed: ${totalPassed}`);
    this.log(`❌ Total Failed: ${totalFailed}`);
    this.log(`📈 Success Rate: ${report.summary.successRate}%`);
    this.log(`🧪 Smoke Tests: ${this.testResults.smoke.passed}/${this.testResults.smoke.passed + this.testResults.smoke.failed}`);
    this.log(`🔬 Unit Tests: ${this.testResults.unit.passed}/${this.testResults.unit.passed + this.testResults.unit.failed}`);
    this.log(`🔗 Integration Tests: ${this.testResults.integration.passed}/${this.testResults.integration.passed + this.testResults.integration.failed}`);
    this.log(`🌐 E2E Tests: ${this.testResults.e2e.passed}/${this.testResults.e2e.passed + this.testResults.e2e.failed}`);
  }
}

// Run if called directly
if (require.main === module) {
  const suite = new TestAutomationSuite();
  suite.runAllTests().catch(error => {
    console.error('Test automation suite failed:', error);
    process.exit(1);
  });
}

module.exports = TestAutomationSuite;