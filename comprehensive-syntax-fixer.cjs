#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.reportFile = path.join(this.projectRoot, 'syntax-fix-report.json');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      // Fix common syntax errors
      const fixes = [
        // Fix missing semicolons after import statements
        {
          pattern: /^import\s+.*from\s+['"][^'"]+['"]\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';';
},
        // Fix unterminated string literals
        {
          pattern: /(['"])([^'"]*?)(\n|$)/g,
          replacement: (match, quote, content, newline) => {
            if (content.includes('\\' + quote)) return match;
            return quote + content + quote + ';' + newline;
          }
        },
        // Fix missing commas in object literals
        {
          pattern: /(\w+):\s*([^}\n]+)(\n\s*[^}])/g,
          replacement: '$1: $2,$3';
},
        // Fix missing semicolons after variable declarations
        {
          pattern: /(const|let|var)\s+\w+\s*=\s*[^;]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';';
},
        // Fix JSX syntax issues
        {
          pattern: /<(\w+)([^>]*?)>/g,
          replacement: (match, tag, attrs) => {
            if (attrs.includes('=') && !attrs.trim().endsWith('/')) {
              return match;
            }
            return match;
          }
        }
      ]

      for (const fix of fixes) {
        const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {
          fixedContent = newContent;
          hasChanges = true;
        }
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent);
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.js', '.cjs', '.mjs']) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }

    return files;
  }

  fixStringLiterals(content) {
    // Fix malformed string literals with missing quotes
    content = content.replace(
      /console\.log\(`'([^']*)'\);/g,
      'console.log(`$1`);'
    );
    content = content.replace(
      /console\.log\(`'([^']*)'$/gm,
      'console.log(`$1`);'
    );
    content = content.replace(
      /console\.log\(`'([^']*)'$/gm,
      'console.log(`$1`);'
    );

    // Fix incomplete template literals
    content = content.replace(
      /console\.log\(`([^`]*)\n/gm,
      'console.log(`$1`);\n'
    );
    content = content.replace(
      /console\.log\(`([^`]*)\n/gm,
      'console.log(`$1`);\n'
    );

    // Fix missing closing parentheses in console.log
    content = content.replace(
      /console\.log\(`([^`]*)'$/gm,
      'console.log(`$1`);'
    );
    content = content.replace(
      /console\.log\(`([^`]*)'$/gm,
      'console.log(`$1`);'
    );

    // Fix specific patterns
    content = content.replace(
      /console\.log\(`'🔒 Starting continuous security audit automation\.\.\.'\);/g,
      'console.log(`🔒 Starting continuous security audit automation...`);'
    );
    content = content.replace(
      /console\.log\(`'🔍 Starting continuous quality checks automation\.\.\.'\);/g,
      'console.log(`🔍 Starting continuous quality checks automation...`);'
    );
    content = content.replace(
      /console\.log\(`📊 Running performance monitoring at \$\{new Date\(\)\.toISOString\(\)\}'/g,
      'console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);'
    );

    return content;
  }

  fixImportStatements(content) {
    // Fix incomplete import statements
    const importFixes = [
      { pattern: /import fs from;/g, replacement: 'import fs from "fs";' },
      {
        pattern: /import path from;/g,
        replacement: 'import path from "path";'},
      {
        pattern: /import { execSync } from;/g,
        replacement: 'import { execSync } from "child_process";'},
      {
        pattern: /import axios from;/g,
        replacement: 'import axios from "axios";'},
      {
        pattern: /import http from;/g,
        replacement: 'import http from "http";'},
      {
        pattern: /import https from;/g,
        replacement: 'import https from "https";'},
      {
        pattern: /import { fileURLToPath } from;/g,
        replacement: 'import { fileURLToPath } from "url";'},
      {
        pattern: /import { dirname } from;/g,
        replacement: 'import { dirname } from "path";'},
      { pattern: /import os from;/g, replacement: 'import os from "os";' },
      {
        pattern: /import crypto from;/g,
        replacement: 'import crypto from "crypto";'},
      { pattern: /import url from;/g, replacement: 'import url from "url";' },
      {
        pattern: /import util from;/g,
        replacement: 'import util from "util";'},
      {
        pattern: /import stream from;/g,
        replacement: 'import stream from "stream";'},
      {
        pattern: /import zlib from;/g,
        replacement: 'import zlib from "zlib";'},
      {
        pattern: /import cluster from;/g,
        replacement: 'import cluster from "cluster";'},
      {
        pattern: /import worker_threads from;/g,
        replacement: 'import worker_threads from "worker_threads";'},
      {
        pattern: /import perf_hooks from;/g,
        replacement: 'import perf_hooks from "perf_hooks";'},
      { pattern: /import v8 from;/g, replacement: 'import v8 from "v8";' },
      { pattern: /import vm from;/g, replacement: 'import vm from "vm";' },
      {
        pattern: /import readline from;/g,
        replacement: 'import readline from "readline";'},
      {
        pattern: /import repl from;/g,
        replacement: 'import repl from "repl";'},
      { pattern: /import tls from;/g, replacement: 'import tls from "tls";' },
      { pattern: /import net from;/g, replacement: 'import net from "net";' },
      {
        pattern: /import dgram from;/g,
        replacement: 'import dgram from "dgram";'},
      { pattern: /import dns from;/g, replacement: 'import dns from "dns";' },
      {
        pattern: /import querystring from;/g,
        replacement: 'import querystring from "querystring";'},
      {
        pattern: /import punycode from;/g,
        replacement: 'import punycode from "punycode";'},
      {
        pattern: /import string_decoder from;/g,
        replacement: 'import string_decoder from "string_decoder";'},
      {
        pattern: /import timers from;/g,
        replacement: 'import timers from "timers";'},
      {
        pattern: /import events from;/g,
        replacement: 'import events from "events";'},
      {
        pattern: /import assert from;/g,
        replacement: 'import assert from "assert";'},
      {
        pattern: /import buffer from;/g,
        replacement: 'import buffer from "buffer";'},
      {
        pattern: /import console from;/g,
        replacement: 'import console from "console";'},
      {
        pattern: /import process from;/g,
        replacement: 'import process from "process";'},
      {
        pattern: /import global from;/g,
        replacement: 'import global from "global";'},
      {
        pattern: /import Buffer from;/g,
        replacement: 'import { Buffer } from "buffer";'},
      {
        pattern: /import setTimeout from;/g,
        replacement: 'import { setTimeout } from "timers";'},
      {
        pattern: /import setInterval from;/g,
        replacement: 'import { setInterval } from "timers";'},
      {
        pattern: /import clearTimeout from;/g,
        replacement: 'import { clearTimeout } from "timers";'},
      {
        pattern: /import clearInterval from;/g,
        replacement: 'import { clearInterval } from "timers";'},
      {
        pattern: /import setImmediate from;/g,
        replacement: 'import { setImmediate } from "timers";'},
      {
        pattern: /import clearImmediate from;/g,
        replacement: 'import { clearImmediate } from "timers";'}];

    for (const fix of importFixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }

    return content;
  }

  fixOptionalChaining(content) {
    // Fix optional chaining syntax issues
    content = content.replace(/\?\?/g, '?.');
    content = content.replace(/\.\?\?/g, '?.');

    // Fix specific optional chaining patterns
    content = content.replace(
      /this\.metrics\.system\.process\?\?\.uptime/g,
      'this.metrics.system.process?.uptime'
    );
    content = content.replace(
      /this\.metrics\.system\.process\?\?\.memory/g,
      'this.metrics.system.process?.memory'
    );
    content = content.replace(
      /this\.metrics\.system\.process\?\?\.cpu/g,
      'this.metrics.system.process?.cpu'
    );

    return content;
  }

  fixStringLiteralsAdvanced(content) {
    // Fix malformed string literals
    const stringFixes = [
      {
        pattern: /this\.projectRoot,logs'/g,
        replacement: "this.projectRoot, 'logs'"},
      {
        pattern: /this\.projectRoot,reports'/g,
        replacement: "this.projectRoot, 'reports'"},
      {
        pattern: /this\.projectRoot,automation'/g,
        replacement: "this.projectRoot, 'automation'"},
      {
        pattern: /this\.projectRoot,dir\)/g,
        replacement: 'this.projectRoot, dir)'},
      {
        pattern: /path\.join\(this\.projectRoot,logs'/g,
        replacement: "path.join(this.projectRoot, 'logs'"},
      {
        pattern: /path\.join\(this\.projectRoot,reports'/g,
        replacement: "path.join(this.projectRoot, 'reports'"},
      {
        pattern: /path\.join\(this\.projectRoot,automation'/g,
        replacement: "path.join(this.projectRoot, 'automation'"}];

    for (const fix of stringFixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }

    return content;
  }

  fixBracketIssues(content) {
    // Fix missing brackets and parentheses
    content = content.replace(
      /fs\.mkdirSync\(dirPath', \{ recursive: true \}\);/g,
      'fs.mkdirSync(dirPath, { recursive: true });'
    );

    return content;
  }

  fixFunctionSyntax(content) {
    // Fix async function syntax issues
    content = content.replace(
      /async initializeAutomationSystems\(\) \{/g,
      'async initializeAutomationSystems() {'
    );
    content = content.replace(
      /async runAutomation\(\) \{/g,
      'async runAutomation() {'
    );
    content = content.replace(
      /async startMonitoring\(\) \{/g,
      'async startMonitoring() {'
    );

    return content;
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Apply all fixes
      content = this.fixStringLiterals(content);
      content = this.fixImportStatements(content);
      content = this.fixOptionalChaining(content);
      content = this.fixStringLiteralsAdvanced(content);
      content = this.fixBracketIssues(content);
      content = this.fixFunctionSyntax(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async fixAllFiles() {
    this.log('🔧 Starting comprehensive syntax fixing...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    
    const allFiles = [
      ...this.getAllFiles(srcDir),
      ...this.getAllFiles(pagesDir)
    ]

    this.log(`📁 Found ${allFiles.length} files to check`);

    for (const file of allFiles) {
      await this.fixFile(file);
    }

    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);

    return {
      totalFiles: allFiles.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors;
};
  }

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: results,
      fixedFiles: this.fixedFiles,
      errors: this.errors;
};

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
    return report;
  }

  async run() {
    try {
      const results = await this.fixAllFiles();
      const report = this.generateReport(results);
      
      this.log('🎉 Syntax fixing completed');
      return report;
    } catch (error) {
      this.log(`💥 Syntax fixing failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the syntax fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().then(report => {
  console.log('✅ Syntax fixing completed successfully');
  process.exit(0);
}).catch(error => {
  console.error('❌ Syntax fixing failed:', error.message);
  process.exit(1);
});
  async run() {
    this.log('🔧 Starting comprehensive syntax fixing...');

    const scriptsDir = path.join(this.projectRoot, 'scripts');
    const automationDir = path.join(this.projectRoot, 'scripts', 'automation');

    const allFiles = [];

    if (fs.existsSync(scriptsDir)) {
      allFiles.push(...this.getAllFiles(scriptsDir));
    }

    if (fs.existsSync(automationDir)) {
      allFiles.push(...this.getAllFiles(automationDir));
    }

    this.log(`📁 Found ${allFiles.length} files to check`);

    let fixedCount = 0;
    for (const file of allFiles) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log(`🎉 Fixed ${fixedCount} files`);

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: allFiles.length,
      fixedFiles: fixedCount,
      fixedFileList: this.fixedFiles};

    fs.writeFileSync(
      path.join(this.projectRoot, 'comprehensive-syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 Report saved to comprehensive-syntax-fix-report.json');
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);
