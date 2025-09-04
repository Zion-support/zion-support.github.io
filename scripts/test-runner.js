#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TestRunner {
  constructor() {
    this.results = {
      unit: { passed: 0, failed: 0 },
      integration: { passed: 0, failed: 0 },
      e2e: { passed: 0, failed: 0 }
    };
  }

  checkTestFiles() {
    const testDirs = ['__tests__', 'src/__tests__', 'tests'];
    let testFilesFound = 0;

    for (const dir of testDirs) {
      try {
        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir);
          const testFiles = files.filter(
            (file) => file.includes('.test.') || file.includes('.spec.')
          );
          testFilesFound += testFiles.length;
        }
      } catch {}
    }

    if (testFilesFound === 0) {
      console.log('⚠️  No test files found');
    } else {
      console.log(`✅ Found ${testFilesFound} test files`);
    }

    return testFilesFound;
  }

  checkPackageJsonScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const hasTestScript = Boolean(packageJson.scripts && packageJson.scripts.test);
      if (!hasTestScript) {
        console.log('⚠️  No test script found in package.json');
        return false;
      }
      console.log('✅ Test script found in package.json');
      return true;
    } catch (error) {
      console.log('❌ Error reading package.json:', error.message);
      return false;
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        testFilesFound: this.checkTestFiles(),
        testScriptExists: this.checkPackageJsonScripts()
      }
    };

    fs.writeFileSync('test-report.json', JSON.stringify(report, null, 2));
    console.log('Test report generated');
  }
}

if (require.main === module) {
  const runner = new TestRunner();
  runner.generateReport();
}

module.exports = TestRunner;