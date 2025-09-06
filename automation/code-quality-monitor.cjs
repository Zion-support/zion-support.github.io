#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Starting code quality monitoring...');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      checks: [],
      issues: [],
      overallStatus: 'healthy'
    };
  }

  async checkCodeStyle() {
    console.log('🔍 Checking code style...');
    try {
      execSync('npm run lint:check', { stdio: 'pipe' });
      this.results.checks.push({
        name: 'code style',
        status: 'pass',
        summary: 'No style issues found'
      });
    } catch (error) {
      this.results.checks.push({
        name: 'code style',
        status: 'warning',
        summary: 'Style issues detected'
      });
      this.results.overallStatus = 'warning';
    }
  }

  async checkTypeScript() {
    console.log('🔍 Checking TypeScript...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.results.checks.push({
        name: 'typescript',
        status: 'pass',
        summary: 'No type errors found'
      });
    } catch (error) {
      this.results.checks.push({
        name: 'typescript',
        status: 'warning',
        summary: 'Type errors detected'
      });
      this.results.overallStatus = 'warning';
    }
  }

  async checkTestFiles() {
    console.log('🔍 Checking test files...');
    const testFiles = this.findFiles('.', ['.test.js', '.test.ts', '.test.jsx', '.test.tsx', '.spec.js', '.spec.ts']);
    
    this.results.checks.push({
      name: 'test files',
      status: testFiles.length > 0 ? 'pass' : 'warning',
      summary: `${testFiles.length} test files found`
    });
    
    if (testFiles.length === 0) {
      this.results.overallStatus = 'warning';
    }
  }

  async checkDocumentation() {
    console.log('🔍 Checking documentation...');
    const docFiles = this.findFiles('.', ['.md', '.txt']);
    
    this.results.checks.push({
      name: 'documentation',
      status: docFiles.length > 0 ? 'pass' : 'warning',
      summary: `${docFiles.length} documentation files found`
    });
  }

  findFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        if (item === 'node_modules' || item === '.git') continue;
        
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(this.findFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Ignore errors
    }
    return files;
  }

  async generateReport() {
    const reportPath = `code-quality-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Code quality report generated: ${reportPath}`);
    console.log(`🔍 Overall status: ${this.results.overallStatus}`);
  }

  async run() {
    await this.checkCodeStyle();
    await this.checkTypeScript();
    await this.checkTestFiles();
    await this.checkDocumentation();
    await this.generateReport();
  }
}

if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.run().catch(console.error);
}

module.exports = CodeQualityMonitor;