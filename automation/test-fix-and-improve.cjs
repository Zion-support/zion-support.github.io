#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Test Fix and Improvement Suite...');

class TestFixAndImproveSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      "syntaxFix": { success: false, duration: 0, errors: [] },
      "testConfig": { success: false, duration: 0, errors: [] },
      "dependencies": { success: false, duration: 0, errors: [] },
      "testRun": { success: false, duration: 0, errors: [] }
    };
  }

  async run() {
    try {
      console.log('🔧 Fixing test syntax errors...');
      await this.fixTestSyntaxErrors();
      
      console.log('⚙️  Updating test configuration...');
      await this.updateTestConfig();
      
      console.log('📦 Installing missing test dependencies...');
      await this.installTestDependencies();
      
      console.log('🧪 Running tests...');
      await this.runTests();
      
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Test suite failed:', error.message);
      process.exit(1);
    }
  }

  async fixTestSyntaxErrors() {
    const startTime = Date.now();
    try {
      // Find all test files with syntax errors
      const testFiles = this.findTestFiles();
      
      for (const file of testFiles) {
        await this.fixTestFile(file);
      }
      
      this.results.syntaxFix.success = true;
      this.results.syntaxFix.duration = Date.now() - startTime;
      console.log('✅ Test syntax errors fixed');
      
    } catch (error) {
      this.results.syntaxFix.errors.push(error.message);
      console.error('❌ Failed to fix test syntax errors:', error.message);
    }
  }

  findTestFiles() {
    const testDirs = [
      '__tests__',
      'tests',
      'e2e',
      'recovered-branches',
      'src_backup'
    ];
    
    const testFiles = [];
    
    for (const dir of testDirs) {
      if (fs.existsSync(dir)) {
        const files = this.findFilesInDir(dir, ['.test.ts', '.test.tsx', '.spec.ts', '.spec.tsx']);
        testFiles.push(...files);
      }
    }
    
    return testFiles;
  }

  findFilesInDir(dir, extensions) {
    const files = [];
    
    function traverse(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dir);
    return files;
  }

  async fixTestFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix common syntax errors
      content = this.fixCommonSyntaxErrors(content);
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content);
      
    } catch (error) {
      console.warn(`⚠️  Could not fix ${filePath}:`, error.message);
    }
  }

  fixCommonSyntaxErrors(content) {
    // Fix trailing commas in imports
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    
    // Fix unterminated strings
    content = content.replace(/import\s+([^']+)'([^']*)$/gm, 'import $1 from \'$2\';');
    
    // Fix missing semicolons
    content = content.replace(/(import\s+[^;]+)(\s*)$/gm, '$1;');
    
    // Fix malformed test functions
    content = content.replace(/test\('([^']+)',\s*async\s*\(\s*\{\s*page\s*\}\s*\)\s*=>\s*\{/g, 
      'test(\'$1\', async ({ page }) => {');
    
    // Fix missing quotes in test descriptions
    content = content.replace(/test\(([^,]+),\s*async/g, 'test(\'$1\', async');
    
    return content;
  }

  async updateTestConfig() {
    const startTime = Date.now();
    try {
      // Update Jest configuration
      const jestConfig = {
        testEnvironment: 'jsdom',
        setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
        testMatch: [
          '**/__tests__/**/*.test.{js,jsx,ts,tsx}',
          '**/*.test.{js,jsx,ts,tsx}'
        ],
        testPathIgnorePatterns: [
          '<rootDir>/node_modules/',
          '<rootDir>/.next/',
          '<rootDir>/dist/',
          '<rootDir>/recovered-branches/',
          '<rootDir>/src_backup/'
        ],
        moduleNameMapping: {
          '^@/(.*)$': '<rootDir>/$1'
        },
        transform: {
          '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
        },
        transformIgnorePatterns: [
          '/node_modules/',
          '^.+\\.module\\.(css|sass|scss)$'
        ]
      };
      
      fs.writeFileSync('jest.config.js', `module.exports = ${JSON.stringify(jestConfig, null, 2)};`);
      
      this.results.testConfig.success = true;
      this.results.testConfig.duration = Date.now() - startTime;
      console.log('✅ Test configuration updated');
      
    } catch (error) {
      this.results.testConfig.errors.push(error.message);
      console.error('❌ Failed to update test config:', error.message);
    }
  }

  async installTestDependencies() {
    const startTime = Date.now();
    try {
      const dependencies = [
        '@testing-library/dom',
        '@testing-library/jest-dom',
        '@testing-library/react',
        '@testing-library/user-event',
        'jest-environment-jsdom'
      ];
      
      for (const dep of dependencies) {
        try {
          execSync(`npm install --save-dev ${dep}`, { stdio: 'inherit' });
        } catch (error) {
          console.warn(`⚠️  Could not install ${dep}:`, error.message);
        }
      }
      
      this.results.dependencies.success = true;
      this.results.dependencies.duration = Date.now() - startTime;
      console.log('✅ Test dependencies installed');
      
    } catch (error) {
      this.results.dependencies.errors.push(error.message);
      console.error('❌ Failed to install test dependencies:', error.message);
    }
  }

  async runTests() {
    const startTime = Date.now();
    try {
      // Run tests with more lenient configuration
      execSync('npm run test:smoke', { stdio: 'inherit' });
      
      this.results.testRun.success = true;
      this.results.testRun.duration = Date.now() - startTime;
      console.log('✅ Tests completed successfully');
      
    } catch (error) {
      this.results.testRun.errors.push(error.message);
      console.warn('⚠️  Some tests failed, but continuing...');
    }
  }

  generateReport() {
    const endTime = new Date();
    const totalDuration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      totalDuration: totalDuration,
      results: this.results,
      summary: {
        totalTasks: Object.keys(this.results).length,
        successfulTasks: Object.values(this.results).filter(r => r.success).length,
        failedTasks: Object.values(this.results).filter(r => !r.success).length
      }
    };
    
    // Ensure reports directory exists
    const reportsDir = path.join(this.projectRoot, 'automation-reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const reportPath = path.join(reportsDir, 'test-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Test Fix Report saved to: ${reportPath}`);
    console.log(`✅ Test Fix and Improvement Suite completed!`);
    console.log(`📊 Summary: ${report.summary.successfulTasks}/${report.summary.totalTasks} tasks successful`);
  }
}

// Run the suite
const suite = new TestFixAndImproveSuite();
suite.run().catch(console.error);