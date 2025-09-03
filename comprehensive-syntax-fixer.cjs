#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixedFiles = 0;    this.errors = []
  }

  log(message) {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] ${message}`)
  }

  async findProblematicFiles() {
    this.log('🔍 Finding files with syntax issues...')
    const problematicFiles = []
    const extensions = ['.tsx', '.ts', '.jsx', '.js']
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir)
      for (const file of files) {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath)
        } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
          try {
            const content = fs.readFileSync(filePath, 'utf8')
            if (this.hasSyntaxIssues(content)) {
              problematicFiles.push(filePath)
            }
          } catch (error) {
            // File might be binary or have encoding issues
          }
        }
      }
    }
    walkDir(this.projectRoot)
    return problematicFiles
  }

  hasSyntaxIssues(content) {
    // Check for common syntax issues
    const issues = [
      /import \s*[^]+;/g,  // Malformed imports
      /const: \s*[^=]+=/g,   // Malformed const declarations
      /interface: \s*[^{]+{/g, // Malformed interface declarations
      /from\s+'[^']*';'/g,  // Double quotes in imports
      /"[^]*,[^"]*"/g,    // Malformed strings
      /;+/g,               // Multiple semicolons
      /,+/g,               // Multiple commas
      /:\s*[^=,}]+:/g,      // Malformed type annotations
    ]
    return issues.some(issue => issue.test(content))
  }

  fixSyntax(content) {
    let fixed = content
    // Fix malformed imports
    fixed = fixed.replace(/import \s*([^]+);/g, 'import $1;')
    // Fix malformed const declarations
    fixed = fixed.replace(/const: \s*([^:]+):\s*([^=]+)\s*=\s*\(\)\s*=>\s*,{/g, 'const $1: $2 = () => {')
    fixed = fixed.replace(/const:\s*([^=]+)=/g, 'const $1 =')
    // Fix malformed interface declarations
    fixed = fixed.replace(/interface: \s*([^{]+){/g, 'interface $1 {')
    // Fix malformed imports with double quotes
    fixed = fixed.replace(/from\s+'([^']*)';'/g, from '$1')
    // Fix malformed strings
    fixed = fixed.replace(/"([^"]*),([^]*),/g, '"$1$2",')
    fixed = fixed.replace(/([^]*);([^"]*)";/g, '$1$2;')
    // Fix multiple semicolons and commas
    fixed = fixed.replace(/;+/g, ';')
    fixed = fixed.replace(/,+/g, ',')
    // Fix malformed type annotations
    fixed = fixed.replace(/:\s*([^=,}]+):/g, ': $1')
    // Fix malformed function parameters
    fixed = fixed.replace(/\(\)\s*=>\s*,{/g, '() => {')
    // Fix malformed array destructuring
    fixed = fixed.replace(/const: \s*\[([^\]]+)\]/g, 'const [$1]')
    // Fix malformed object properties
    fixed = fixed.replace(/(\w+):\s*([^,}]+),/g, '$1: $2,')
    // Fix malformed quotes in strings
    fixed = fixed.replace(/"([^"]*)([^]*)"([^"]*)/g, '$1$2$3"')
    // Fix malformed React component declarations
    fixed = fixed.replace(/const\s+(\w+):\s*(\w+):\s*=\s*\(\)\s*=>\s*,{/g, 'const $1: $2 = () => {')
    // Fix malformed NextPage types
    fixed = fixed.replace(/NextPage:\s*=/g, 'NextPage =')
    // Fix malformed useState declarations
    fixed = fixed.replace(/const: \s*\[([^\]]+)\]/g, 'const [$1]')
    // Fix malformed string concatenation
    fixed = fixed.replace(/"([^]*):([^]*)"/g, '"$1$2')
    // Fix malformed object keys
    fixed = fixed.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,')
    // Fix malformed array elements
    fixed = fixed.replace(/\[([^\]]+);/g, '[$1,')
    // Fix malformed function calls
    fixed = fixed.replace(/\(([^)]+);/g, '($1,')
    // Fix malformed template literals
    fixed = fixed.replace(/`([^`]*):([^`]*)`/g, '`$1$2`')
    // Fix malformed JSX attributes
    fixed = fixed.replace(/className: \s*([^"]*)"/g, 'className=$1')
    // Fix malformed export statements
    fixed = fixed.replace(/export: \s*([^]+);/g, 'export $1;')
    // Fix malformed default exports
    fixed = fixed.replace(/export: \s*default\s*([^]+);/g, 'export default $1;')
    // Clean up any remaining malformed syntax
    fixed = fixed.replace(/;\s*;/g, ';')
    fixed = fixed.replace(/,\s*,/g, ',')
    fixed = fixed.replace(/\s+/g, ' ')
    return fixed
  }

  async fixFile(filePath) {
    this.log(`🔧 Fixing syntax in: ${filePath}`)
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let fixedContent = content
      let hasChanges = false
      // Fix common syntax errors
      const fixes = [
        // Fix missing semicolons after import statements
        {
          pattern: /^import\s+.*from\s+['"][^'"]+[']\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
},
        // Fix unterminated string literals
        {
          pattern: /(['])([^'"]*?)(\n|$)/g,
          replacement: (match, quote, content, newline) => {
            if (content.includes('\\' + quote)) return match
            return quote + content + quote + ';' + newline
          }
        },
        // Fix missing commas in object literals
        {
          pattern: /(\w+):\s*([^}\n]+)(\n\s*[^}])/g,
          replacement: '$1: $2,$3'
},
        // Fix missing semicolons after variable declarations
        {
          pattern: /(const|let|var)\s+\w+\s*=\s*[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
},
        // Fix JSX syntax issues
        {
          pattern: /<(\w+)([^>]*?)>/g,
          replacement: (match, tag, attrs) => {
            if (attrs.includes('=') && !attrs.trim().endsWith('/')) {
              return match
            }
            return match
          }
        }
      ]

      for (const fix of fixes) {
        const newContent = fixedContent.replace(fix.pattern, fix.replacement)
        if (newContent !== fixedContent) {
          fixedContent = newContent
          hasChanges = true
        }
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent)
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)
  }

  getAllFiles(dir, extensions = ['.js', '.cjs', '.mjs']) {
    let files = []
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions))
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }

    return files
  }

  fixStringLiterals(content) {
    // Fix malformed string literals with missing quotes
    content = content.replace(
      /console\.log\(`'([^']*)'\);/g,
      'console.log(`$1`);'
    )
    content = content.replace(
      /console\.log\(`'([^']*)'$/gm,
      'console.log(`$1`);'
    )
    content = content.replace(
      /console\.log\(`'([^']*)'$/gm,
      'console.log(`$1`);'
    )
    // Fix incomplete template literals
    content = content.replace(
      /console\.log\(`([^`]*)\n/gm,
      'console.log(`$1`);\n'
    )
    content = content.replace(
      /console\.log\(`([^`]*)\n/gm,
      'console.log(`$1`);\n'
    )
    // Fix missing closing parentheses in console.log
    content = content.replace(
      /console\.log\(`([^`]*)'$/gm,
      'console.log(`$1`);'
    )
    content = content.replace(
      /console\.log\(`([^`]*)'$/gm,
      'console.log(`$1`);'
    )
    // Fix specific patterns
    content = content.replace(
      /console\.log\(`'🔒 Starting continuous security audit automation\.\.\.'\);/g,
      'console.log(`🔒 Starting continuous security audit automation...`);'
    )
    content = content.replace(
      /console\.log\(`'🔍 Starting continuous quality checks automation\.\.\.'\);/g,
      'console.log(`🔍 Starting continuous quality checks automation...`);'
    )
    content = content.replace(
      /console\.log\(`📊 Running performance monitoring at \$\{new Date\(\)\.toISOString\(\)\}'/g,
      'console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);'
    )
    return content
  }

  fixImportStatements(content) {
    // Fix incomplete import statements
    const importFixes = [
      { pattern: /import fs from;/g, replacement: 'import fs from "fs;' },
      {
        pattern: /import path from;/g,
        replacement: 'import path from path";'},
      {
        pattern: /import { execSync } from;/g,
        replacement: 'import { execSync } from "child_process;'},
      {
        pattern: /import axios from;/g,
        replacement: 'import axios from axios";'},
      {
        pattern: /import http from;/g,
        replacement: 'import http from "http;'},
      {
        pattern: /import https from;/g,
        replacement: 'import https from https";'},
      {
        pattern: /import { fileURLToPath } from;/g,
        replacement: 'import { fileURLToPath } from "url;'},
      {
        pattern: /import { dirname } from;/g,
        replacement: 'import { dirname } from path";'},
      { pattern: /import os from;/g, replacement: 'import os from "os;' },
      {
        pattern: /import crypto from;/g,
        replacement: 'import crypto from crypto";'},
      { pattern: /import url from;/g, replacement: 'import url from "url;' },
      {
        pattern: /import util from;/g,
        replacement: 'import util from util";'},
      {
        pattern: /import stream from;/g,
        replacement: 'import stream from "stream;'},
      {
        pattern: /import zlib from;/g,
        replacement: 'import zlib from zlib";'},
      {
        pattern: /import cluster from;/g,
        replacement: 'import cluster from "cluster;'},
      {
        pattern: /import worker_threads from;/g,
        replacement: 'import worker_threads from worker_threads";'},
      {
        pattern: /import perf_hooks from;/g,
        replacement: 'import perf_hooks from "perf_hooks;'},
      { pattern: /import v8 from;/g, replacement: 'import v8 from v8";' },
      { pattern: /import vm from;/g, replacement: 'import vm from "vm;' },
      {
        pattern: /import readline from;/g,
        replacement: 'import readline from readline";'},
      {
        pattern: /import repl from;/g,
        replacement: 'import repl from "repl;'},
      { pattern: /import tls from;/g, replacement: 'import tls from tls";' },
      { pattern: /import net from;/g, replacement: 'import net from "net;' },
      {
        pattern: /import dgram from;/g,
        replacement: 'import dgram from dgram";'},
      { pattern: /import dns from;/g, replacement: 'import dns from "dns;' },
      {
        pattern: /import querystring from;/g,
        replacement: 'import querystring from querystring";'},
      {
        pattern: /import punycode from;/g,
        replacement: 'import punycode from "punycode;'},
      {
        pattern: /import string_decoder from;/g,
        replacement: 'import string_decoder from string_decoder";'},
      {
        pattern: /import timers from;/g,
        replacement: 'import timers from "timers;'},
      {
        pattern: /import events from;/g,
        replacement: 'import events from events";'},
      {
        pattern: /import assert from;/g,
        replacement: 'import assert from "assert;'},
      {
        pattern: /import buffer from;/g,
        replacement: 'import buffer from buffer";'},
      {
        pattern: /import console from;/g,
        replacement: 'import console from "console;'},
      {
        pattern: /import process from;/g,
        replacement: 'import process from process";'},
      {
        pattern: /import global from;/g,
        replacement: 'import global from "global;'},
      {
        pattern: /import Buffer from;/g,
        replacement: 'import { Buffer } from buffer";'},
      {
        pattern: /import setTimeout from;/g,
        replacement: 'import { setTimeout } from "timers;'},
      {
        pattern: /import setInterval from;/g,
        replacement: 'import { setInterval } from timers";'},
      {
        pattern: /import clearTimeout from;/g,
        replacement: 'import { clearTimeout } from "timers;'},
      {
        pattern: /import clearInterval from;/g,
        replacement: 'import { clearInterval } from timers";'},
      {
        pattern: /import setImmediate from;/g,
        replacement: 'import { setImmediate } from "timers;'},
      {
        pattern: /import clearImmediate from;/g,
        replacement: 'import { clearImmediate } from timers";'}]
    for (const fix of importFixes) {
      content = content.replace(fix.pattern, fix.replacement)
    }

    return content
  }

  fixOptionalChaining(content) {
    // Fix optional chaining syntax issues
    content = content.replace(/\?\?/g, '?.')
    content = content.replace(/\.\?\?/g, '?.')
    // Fix specific optional chaining patterns
    content = content.replace(
      /this\.metrics\.system\.process\?\?\.uptime/g,
      'this.metrics.system.process?.uptime'
    )
    content = content.replace(
      /this\.metrics\.system\.process\?\?\.memory/g,
      'this.metrics.system.process?.memory'
    )
    content = content.replace(
      /this\.metrics\.system\.process\?\?\.cpu/g,
      'this.metrics.system.process?.cpu'
    )
    return content
  }

  fixStringLiteralsAdvanced(content) {
    // Fix malformed string literals
    const stringFixes = [
      {
        pattern: /this\.projectRoot,logs'/g,
        replacement: "this.projectRoot, 'logs'},
      {
        pattern: /this\.projectRoot,reports'/g,
        replacement: this.projectRoot, 'reports'"},
      {
        pattern: /this\.projectRoot,automation'/g,
        replacement: "this.projectRoot, 'automation'},
      {
        pattern: /this\.projectRoot,dir\)/g,
        replacement: 'this.projectRoot, dir)'},
      {
        pattern: /path\.join\(this\.projectRoot,logs'/g,
        replacement: path.join(this.projectRoot, 'logs'"},
      {
        pattern: /path\.join\(this\.projectRoot,reports'/g,
        replacement: "path.join(this.projectRoot, 'reports'},
      {
        pattern: /path\.join\(this\.projectRoot,automation'/g,
        replacement: path.join(this.projectRoot, 'automation'"}]
    for (const fix of stringFixes) {
      content = content.replace(fix.pattern, fix.replacement)
    }

    return content
  }

  fixBracketIssues(content) {
    // Fix missing brackets and parentheses
    content = content.replace(
      /fs\.mkdirSync\(dirPath', \{ recursive: true \}\);/g,
      'fs.mkdirSync(dirPath, { recursive: true });'
    )
    return content
  }

  fixFunctionSyntax(content) {
    // Fix async function syntax issues
    content = content.replace(
      /async initializeAutomationSystems\(\) \{/g,
      'async initializeAutomationSystems() {'
    )
    content = content.replace(
      /async runAutomation\(\) \{/g,
      'async runAutomation() {'
    )
    content = content.replace(
      /async startMonitoring\(\) \{/g,
      'async startMonitoring() {'
    )
    return content
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8')
      const originalContent = content
      // Apply all fixes
      content = this.fixStringLiterals(content)
      content = this.fixImportStatements(content)
      content = this.fixOptionalChaining(content)
      content = this.fixStringLiteralsAdvanced(content)
      content = this.fixBracketIssues(content)
      content = this.fixFunctionSyntax(content)
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8')
        this.fixedFiles.push(filePath)
        this.log(`✅ Fixed: ${filePath}`)
        return true
      }

      return false
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)
      return false
    }
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
    const files = []
    if (!fs.existsSync(dir)) return files
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      // Create backup
      const backupPath = `${filePath}.backup.${Date.now()}`
      fs.writeFileSync(backupPath, content)
      // Fix syntax
      const fixedContent = this.fixSyntax(content)
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent)
        this.log(`✅ Fixed syntax in: ${filePath}`)
        return { fixed: true, backup: backupPath }
      } else {
        // Remove backup if no changes
        fs.unlinkSync(backupPath)
        return { fixed: false, reason: 'No changes needed' }
      }
      
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)
      this.errors.push({ file: filePath, error: error.message })
      return { fixed: false, error: error.message }
    }
  }

  async fixAllFiles() {
    this.log('🚀 Starting comprehensive syntax fixing...')
    const problematicFiles = await this.findProblematicFiles()
    const allFiles = [
      ...this.getAllFiles(srcDir),
      ...this.getAllFiles(pagesDir)
    ]

    this.log(`📁 Found ${allFiles.length} files to check`)
    for (const file of allFiles) {
      await this.fixFile(file)
    if (problematicFiles.length === 0) {
      this.log('✅ No files with syntax issues found')
      return { fixed: 0, errors: [] }
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
    }

    this.log(`📋 Found ${problematicFiles.length} files with syntax issues`)
    for (const file of problematicFiles) {
      const result = await this.fixFile(file)
      if (result.fixed) {
        this.fixedFiles++
      }
    }

    this.log(`🎉 Fixed syntax in ${this.fixedFiles} files`)
    if (this.errors.length > 0) {
      this.log(`⚠️  ${this.errors.length} errors occurred:`)
      this.errors.forEach(error => {
        this.log(`   - ${error.file}: ${error.error}`)
      })
    }

    return {
      totalFiles: allFiles.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
}
  }

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: results,
      fixedFiles: this.fixedFiles,
      errors: this.errors
}
      fixed: this.fixedFiles,
      errors: this.errors,
      totalFiles: problematicFiles.length
    }
  }

  async createCleanESLintConfig() {
    this.log('🔧 Creating clean ESLint configuration...')
    const eslintConfig = `module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint: recommended',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/']
};`
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259

    try {
      fs.writeFileSync('.eslintrc.js', eslintConfig)
      this.log('✅ Created clean ESLint configuration')
    } catch (error) {
      this.log(`❌ Error creating ESLint config: ${error.message}`)
    }
  }

  async run() {
    try {
      // Fix syntax issues
      const fixResult = await this.fixAllFiles()
      // Create clean ESLint config
      await this.createCleanESLintConfig()
      this.log('🎉 Comprehensive syntax fixing completed successfully')
      return fixResult
    } catch (error) {
      this.log(`💥 Syntax fixing failed: ${error.message}`)
      throw error
    }
  }
}

// Run the syntax fixer if this file is executed directly
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer()
  fixer.run()
    .then((result) => {
      console.log('✅ Syntax fixing completed')
      console.log(`📊 Fixed ${result.fixed} files`)
      if (result.errors.length > 0) {
        console.log(`⚠️  ${result.errors.length} errors occurred`)
      }
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Syntax fixing failed: ', error.message)
      process.exit(1)
    })
}

module.exports = ComprehensiveSyntaxFixer