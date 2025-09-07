#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveTestFixer {
  constructor() {
    this.fixedFiles = [];
    this.failedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'WARN' ? '⚠️' : '✅';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async fixTestFile(filePath) {
    if (!fs.existsSync(filePath)) {
      this.failedFiles.push(filePath);
      return;
    }

    this.log(`Fixing test file: ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix common test file issues
      content = this.fixCommonTestIssues(content);
      
      // Write the fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      
      // Verify the file is valid
      if (this.validateTestFile(filePath)) {
        this.fixedFiles.push(filePath);
        this.log(`Successfully fixed test file: ${filePath}`);
      } else {
        this.failedFiles.push(filePath);
        this.log(`Test file still has issues: ${filePath}`, 'WARN');
      }
    } catch (error) {
      this.failedFiles.push(filePath);
      this.log(`Failed to fix test file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  fixCommonTestIssues(content) {
    // Fix malformed imports
    content = content.replace(/import _React from 'react';,/g, "import React from 'react';");
    content = content.replace(/import '@testing-library\/jest-dom';';/g, "import '@testing-library/jest-dom';");
    
    // Fix malformed const declarations
    content = content.replace(/const React from "react" import/g, 'import React from "react";\nimport');
    
    // Fix malformed JSX
    content = content.replace(/<(\w+) \/ \/>/g, '<$1 />');
    
    // Fix unterminated strings
    content = content.replace(/'([^']*?)'([^']*?)'/g, "'$1$2'");
    
    // Fix malformed describe blocks
    content = content.replace(/describe\('([^']*?)'([^']*?)'/g, "describe('$1', () => {");
    
    // Fix malformed test blocks
    content = content.replace(/test\('([^']*?)'([^']*?)'/g, "test('$1', () => {");
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix malformed JSX in test files
    content = content.replace(/<h1>([^<]*)<\/h1>\s*<\/div>\s*\);/g, '');
    
    // Fix duplicate content
    content = this.removeDuplicateContent(content);
    
    return content;
  }

  removeDuplicateContent(content) {
    const lines = content.split('\n');
    const seen = new Set();
    const uniqueLines = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed);
        uniqueLines.push(line);
      }
    }
    
    return uniqueLines.join('\n');
  }

  validateTestFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Basic syntax validation
      if (content.includes('import _React from')) {
        return false;
      }
      
      if (content.includes('< / / >')) {
        return false;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }

  async findTestFiles() {
    const testFiles = [];
    
    try {
      const result = execSync('find . -name "*.test.*" -o -name "*.spec.*" | head -50', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      if (result.trim()) {
        testFiles.push(...result.trim().split('\n').filter(f => f.trim()));
      }
    } catch (error) {
      this.log('Could not find test files', 'WARN');
    }

    return testFiles;
  }

  async fixAllTestFiles() {
    this.log('Starting comprehensive test file fixing...');
    
    try {
      const testFiles = await this.findTestFiles();
      this.log(`Found ${testFiles.length} test files`);

      for (const filePath of testFiles) {
        await this.fixTestFile(filePath);
      }

      this.log(`Fixed ${this.fixedFiles.length} test files`);
      this.log(`Failed to fix ${this.failedFiles.length} test files`);

      // Generate report
      await this.generateReport();

    } catch (error) {
      this.log(`Error during test fixing: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.fixedFiles.length + this.failedFiles.length,
        fixed: this.fixedFiles.length,
        failed: this.failedFiles.length
      },
      fixedFiles: this.fixedFiles,
      failedFiles: this.failedFiles
    };

    fs.writeFileSync('test-fix-report.json', JSON.stringify(report, null, 2));
    this.log('Generated test fix report: test-fix-report.json');
  }

  async run() {
    try {
      await this.fixAllTestFiles();
      this.log('Test file fixing completed successfully!');
    } catch (error) {
      this.log(`Test file fixing failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveTestFixer();
  fixer.run();
}

module.exports = ComprehensiveTestFixer;