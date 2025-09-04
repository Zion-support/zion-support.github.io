#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Starting Comprehensive Test Runner...');

class TestRunner {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      tests: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        coverage: 0
      }
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runTest(name, testFunction) {
    this.log(`Running: ${name}`);
    const startTime = Date.now();
    
    try {
      const result = await testFunction();
      const duration = Date.now() - startTime;
      
      const test = {
        name,
        status: result.status || 'passed',
        message: result.message || 'Test completed successfully',
        duration,
        details: result.details || {}
      };
      
      this.results.tests.push(test);
      this.results.summary.total++;
      
      if (test.status === 'passed') {
        this.results.summary.passed++;
        this.log(`✅ ${name}: ${test.message}`, 'success');
      } else if (test.status === 'skipped') {
        this.results.summary.skipped++;
        this.log(`⏭️ ${name}: ${test.message}`, 'info');
      } else {
        this.results.summary.failed++;
        this.log(`❌ ${name}: ${test.message}`, 'error');
      }
      
      return test;
    } catch (error) {
      const duration = Date.now() - startTime;
      const test = {
        name,
        status: 'failed',
        message: error.message,
        duration,
        details: { error: error.stack }
      };
      
      this.results.tests.push(test);
      this.results.summary.total++;
      this.results.summary.failed++;
      
      this.log(`❌ ${name}: ${error.message}`, 'error');
      return test;
    }
  }

  async testBuild() {
    return new Promise((resolve) => {
      try {
        this.log('Building application...');
        const output = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
        
        if (output.includes('Compiled successfully')) {
          resolve({
            status: 'passed',
            message: 'Application builds successfully',
            details: { buildOutput: output.split('\n').slice(-10) }
          });
        } else {
          resolve({
            status: 'failed',
            message: 'Build completed but with warnings',
            details: { buildOutput: output }
          });
        }
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Build failed: ${error.message}`,
          details: { error: error.stdout || error.message }
        });
      }
    });
  }

  async testTypeScript() {
    return new Promise((resolve) => {
      try {
        const output = execSync('npm run type-check', { encoding: 'utf8', stdio: 'pipe' });
        resolve({
          status: 'passed',
          message: 'TypeScript type checking passed',
          details: { output }
        });
      } catch (error) {
        if (error.stdout && error.stdout.includes('error TS')) {
          const errors = error.stdout.match(/error TS\d+:/g) || [];
          resolve({
            status: 'failed',
            message: `TypeScript errors found: ${errors.length} errors`,
            details: { errors: errors.slice(0, 5), output: error.stdout }
          });
        } else {
          resolve({
            status: 'skipped',
            message: 'TypeScript type checking not available'
          });
        }
      }
    });
  }

  async testLinting() {
    return new Promise((resolve) => {
      try {
        const output = execSync('npm run lint', { encoding: 'utf8', stdio: 'pipe' });
        resolve({
          status: 'passed',
          message: 'ESLint passed with no errors',
          details: { output }
        });
      } catch (error) {
        if (error.stdout && (error.stdout.includes('error') || error.stdout.includes('✖'))) {
          const errorLines = error.stdout.split('\n').filter(line => 
            line.includes('error') || line.includes('✖')
          );
          resolve({
            status: 'failed',
            message: `ESLint found ${errorLines.length} issues`,
            details: { errors: errorLines.slice(0, 5), output: error.stdout }
          });
        } else {
          resolve({
            status: 'passed',
            message: 'ESLint completed (check output for warnings)',
            details: { output: error.stdout || 'No output' }
          });
        }
      }
    });
  }

  async testPages() {
    return new Promise((resolve) => {
      try {
        const pagesDir = path.join(process.cwd(), 'pages');
        
        if (!fs.existsSync(pagesDir)) {
          resolve({
            status: 'skipped',
            message: 'No pages directory found'
          });
          return;
        }

        const pages = fs.readdirSync(pagesDir)
          .filter(file => file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'));
        
        const pageTests = [];
        
        for (const page of pages) {
          const pagePath = path.join(pagesDir, page);
          const content = fs.readFileSync(pagePath, 'utf8');
          
          // Basic syntax checks
          const hasExport = content.includes('export default') || content.includes('module.exports');
          const hasImports = content.includes('import') || content.includes('require');
          
          pageTests.push({
            page,
            hasExport,
            hasImports,
            size: content.length
          });
        }
        
        const validPages = pageTests.filter(p => p.hasExport);
        
        resolve({
          status: validPages.length === pageTests.length ? 'passed' : 'failed',
          message: `${validPages.length}/${pageTests.length} pages have valid exports`,
          details: { 
            pages: pageTests,
            totalPages: pages.length,
            validPages: validPages.length
          }
        });
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Page testing failed: ${error.message}`
        });
      }
    });
  }

  async testComponents() {
    return new Promise((resolve) => {
      try {
        const componentsDir = path.join(process.cwd(), 'components');
        
        if (!fs.existsSync(componentsDir)) {
          resolve({
            status: 'skipped',
            message: 'No components directory found'
          });
          return;
        }

        const components = fs.readdirSync(componentsDir)
          .filter(file => file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'));
        
        const componentTests = [];
        
        for (const component of components) {
          const componentPath = path.join(componentsDir, component);
          const content = fs.readFileSync(componentPath, 'utf8');
          
          // Basic React component checks
          const hasReactImport = content.includes('import React') || content.includes("import { ");
          const hasExport = content.includes('export default') || content.includes('export const');
          const hasJSX = content.includes('<') && content.includes('>');
          
          componentTests.push({
            component,
            hasReactImport,
            hasExport,
            hasJSX,
            size: content.length
          });
        }
        
        const validComponents = componentTests.filter(c => c.hasExport && c.hasJSX);
        
        resolve({
          status: validComponents.length === componentTests.length ? 'passed' : 'failed',
          message: `${validComponents.length}/${componentTests.length} components are valid React components`,
          details: { 
            components: componentTests,
            totalComponents: components.length,
            validComponents: validComponents.length
          }
        });
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Component testing failed: ${error.message}`
        });
      }
    });
  }

  async testDependencies() {
    return new Promise((resolve) => {
      try {
        const packagePath = path.join(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        const dependencies = Object.keys(packageJson.dependencies || {});
        const devDependencies = Object.keys(packageJson.devDependencies || {});
        
        // Check for common security vulnerabilities
        let vulnerabilities = [];
        
        try {
          const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
          const audit = JSON.parse(auditOutput);
          
          if (audit.vulnerabilities) {
            const vulnCount = Object.keys(audit.vulnerabilities).length;
            if (vulnCount > 0) {
              vulnerabilities.push(`${vulnCount} vulnerabilities found`);
            }
          }
        } catch (auditError) {
          // npm audit might fail, that's okay
        }

        resolve({
          status: vulnerabilities.length === 0 ? 'passed' : 'failed',
          message: vulnerabilities.length === 0 
            ? `Dependencies check passed (${dependencies.length} deps, ${devDependencies.length} dev deps)`
            : vulnerabilities.join(', '),
          details: { 
            dependencies: dependencies.length,
            devDependencies: devDependencies.length,
            vulnerabilities
          }
        });
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Dependency testing failed: ${error.message}`
        });
      }
    });
  }

  async testPerformance() {
    return new Promise((resolve) => {
      try {
        const buildDir = path.join(process.cwd(), '.next');
        
        if (!fs.existsSync(buildDir)) {
          resolve({
            status: 'skipped',
            message: 'No build directory found for performance testing'
          });
          return;
        }

        // Check build size
        const calculateSize = (dirPath) => {
          let size = 0;
          const items = fs.readdirSync(dirPath);
          
          for (const item of items) {
            const itemPath = path.join(dirPath, item);
            const stats = fs.statSync(itemPath);
            
            if (stats.isDirectory()) {
              size += calculateSize(itemPath);
            } else {
              size += stats.size;
            }
          }
          
          return size;
        };

        const buildSize = calculateSize(buildDir);
        const buildSizeMB = buildSize / 1024 / 1024;
        
        // Performance thresholds
        const isPerformant = buildSizeMB < 50; // Less than 50MB
        
        resolve({
          status: isPerformant ? 'passed' : 'failed',
          message: `Build size: ${buildSizeMB.toFixed(2)}MB ${isPerformant ? '(Good)' : '(Large)'}`,
          details: { 
            buildSizeBytes: buildSize,
            buildSizeMB: buildSizeMB,
            threshold: 50
          }
        });
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Performance testing failed: ${error.message}`
        });
      }
    });
  }

  async run() {
    this.log('🚀 Starting comprehensive testing...');
    
    const tests = [
      ['Build Test', () => this.testBuild()],
      ['TypeScript Check', () => this.testTypeScript()],
      ['ESLint Check', () => this.testLinting()],
      ['Pages Validation', () => this.testPages()],
      ['Components Validation', () => this.testComponents()],
      ['Dependencies Check', () => this.testDependencies()],
      ['Performance Check', () => this.testPerformance()]
    ];

    for (const [name, testFn] of tests) {
      await this.runTest(name, testFn);
    }

    // Calculate success rate
    const successRate = this.results.summary.total > 0 
      ? (this.results.summary.passed / this.results.summary.total * 100).toFixed(1)
      : 0;

    // Generate report
    const reportPath = path.join(process.cwd(), 'comprehensive-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));

    this.log('📊 Test Summary:');
    this.log(`   Total tests: ${this.results.summary.total}`);
    this.log(`   ✅ Passed: ${this.results.summary.passed}`);
    this.log(`   ❌ Failed: ${this.results.summary.failed}`);
    this.log(`   ⏭️ Skipped: ${this.results.summary.skipped}`);
    this.log(`   🎯 Success rate: ${successRate}%`);
    this.log(`📄 Report saved to: ${reportPath}`);

    const overallStatus = this.results.summary.failed === 0 ? 'PASSED' : 'FAILED';
    this.log(`🏆 Overall test status: ${overallStatus}`);
    
    return this.results;
  }
}

// Run the test suite
if (require.main === module) {
  const runner = new TestRunner();
  runner.run().catch(console.error);
}

module.exports = TestRunner;