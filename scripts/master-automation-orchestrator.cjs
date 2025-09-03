#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Master Automation Orchestrator')
console.log('==================================')

class MasterAutomationOrchestrator {
  constructor() {
    this.results = {
      syntaxFixes: 0,
      buildSuccess: false,
      testsPassed: 0,
      optimizations: 0,
      errors: []    }
    this.startTime = Date.now()
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      })
      this.log(`✅ ${description} completed successfully`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      this.results.errors.push({ command, description, error: error.message })
      throw error    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Starting comprehensive syntax error fixing...')
    
    const patterns = [
      // Fix corrupted imports
      {
        pattern: /import Layout from "\.\.\/components\/Layout"\s*interface LayoutProps/g,
        replacement: 'interface LayoutProps'
      },
      // Fix corrupted meta tags
      {
        pattern: /<meta name = "description" content="([^"]*)"\s*\/>"\s*$/gm,
        replacement: '<meta name="description" content="$1" />'
      },
      // Fix corrupted viewport meta
      {
        pattern: /<meta name="viewport" content="width="device-width," initial-scale=1"\s*\/>/g,
        replacement: '<meta name="viewport" content="width=device-width, initial-scale=1" />'
      },
      // Fix corrupted JSX attributes
      {
        pattern: /<(\w+)\s+([^>]*)\s*\/>/g,
        replacement: '<$1 $2 />'
      },
      // Fix missing closing braces
      {
        pattern: /\)\s*$/gm,
        replacement: ')\n}'
      },
      // Fix corrupted Head imports
      {
        pattern: /import Head from "next\/head"\s*import React from "react"\s*import { Html, Head, Main, NextScript } from "next\/document"/g,
        replacement: 'import React from "react"\nimport { Html, Head, Main, NextScript } from "next/document"'
      },
      // Fix corrupted string literals
      {
        pattern: /content="([^"]*)"\s*\/>/g,
        replacement: 'content="$1" />'
      },
      // Fix corrupted quotes
      {
        pattern: /"([^"]*)"\s*\/>/g,
        replacement: '"$1" />'
      },
      // Fix corrupted closing tags
      {
        pattern: /<\/(\w+)>\s*$/gm,
        replacement: '</$1>'
      },
      // Fix corrupted self-closing tags
      {
        pattern: /<(\w+)\s+([^>]*)\s*\/>/g,
        replacement: '<$1 $2 />'
      },
      // Fix corrupted comments
      {
        pattern: /\/\*([^*]|\*[^/])*\*\//g,
        replacement: '/* comment */'
      },
      // Fix corrupted semicolons
      {
        pattern: /;\s*$/gm,
        replacement: ';'
      },
      // Fix corrupted commas
      {
        pattern: /,\s*$/gm,
        replacement: ','
      },
      // Fix corrupted parentheses
      {
        pattern: /\(\s*\)/g,
        replacement: '()'
      },
      // Fix corrupted brackets
      {
        pattern: /\[\s*\]/g,
        replacement: '[]'
      },
      // Fix corrupted braces
      {
        pattern: /\{\s*\}/g,
        replacement: '{}'
      },
      // Fix corrupted quotes
      {
        pattern: /'([^']*)'/g,
        replacement: '"$1"'
      },
      // Fix corrupted double quotes
      {
        pattern: /"([^"]*)"/g,
        replacement: '"$1"'
      },
      // Fix corrupted backticks
      {
        pattern: /`([^`]*)`/g,
        replacement: '"$1"'
      },
      // Fix corrupted escape sequences
      {
        pattern: /\\n/g,
        replacement: '\n'
      },
      {
        pattern: /\\t/g,
        replacement: '\t'
      },
      {
        pattern: /\\r/g,
        replacement: '\r'
      },
      {
        pattern: /\\"/g,
        replacement: '"'
      },
      {
        pattern: /\\'/g,
        replacement: "'"
      },
      {
        pattern: /\\\\/g,
        replacement: '\\'
      }
    ]

    const directories = ['pages', 'components', 'src']
    let totalFixed = 0

    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        const files = this.getAllFiles(dir)
        for (const file of files) {
          if (this.shouldFixFile(file)) {
            try {
              const content = fs.readFileSync(file, 'utf8')
              let fixedContent = content
              let hasChanges = false

              for (const { pattern, replacement } of patterns) {
                const before = fixedContent
                fixedContent = fixedContent.replace(pattern, replacement)
                if (before !== fixedContent) {
                  hasChanges = true
                }
              }

              // Additional specific fixes
              fixedContent = this.applySpecificFixes(fixedContent, file)

              if (hasChanges) {
                fs.writeFileSync(file, fixedContent, 'utf8')
                totalFixed++
                this.log(`Fixed: ${file}`)
              }
            } catch (error) {
              this.log(`Error fixing ${file}: ${error.message}`, 'error')
            }
          }
        }
      }
    }

    this.results.syntaxFixes = totalFixed
    this.log(`✅ Fixed ${totalFixed} files`, 'success')
  }

  applySpecificFixes(content, filePath) {
    let fixedContent = content

    // Fix specific file types
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      // Fix React component structure
      if (!fixedContent.includes('import React') && fixedContent.includes('return (')) {
        fixedContent = 'import React from "react"\n' + fixedContent
      }
      
      // Fix missing export default
      if (fixedContent.includes('return (') && !fixedContent.includes('export default')) {
        fixedContent += '\n\nexport default Component'
      }
      
      // Fix missing function declaration
      if (fixedContent.includes('return (') && !fixedContent.includes('const ') && !fixedContent.includes('function ')) {
        fixedContent = 'const Component = () => {\n' + fixedContent
      }
    }

    if (filePath.endsWith('.ts') || filePath.endsWith('.js')) {
      // Fix missing imports
      if (fixedContent.includes('React.') && !fixedContent.includes('import React')) {
        fixedContent = 'import React from "react"\n' + fixedContent
      }
    }

    return fixedContent
  }

  getAllFiles(dir) {
    const files = []
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name)
      if (item.isDirectory()) {
        files.push(...this.getAllFiles(fullPath))
      } else if (item.isFile()) {
        files.push(fullPath)
      }
    }
    
    return files
  }

  shouldFixFile(filePath) {
    const ext = path.extname(filePath)
    return ['.tsx', '.jsx', '.ts', '.js'].includes(ext) && 
           !filePath.includes('node_modules') &&
           !filePath.includes('.next') &&
           !filePath.includes('dist')
  }

  async runBuild() {
    this.log('🏗️ Running build...')
    try {
      await this.runCommand('npm run build', 'Build')
      this.results.buildSuccess = true
      this.log('✅ Build successful!', 'success')
    } catch (error) {
      this.log('❌ Build failed', 'error')
      this.results.buildSuccess = false
    }
  }

  async runTests() {
    this.log('🧪 Running tests...')
    try {
      const result = await this.runCommand('npm test', 'Tests')
      this.results.testsPassed = 1
      this.log('✅ Tests passed!', 'success')
    } catch (error) {
      this.log('❌ Tests failed', 'error')
      this.results.testsPassed = 0
    }
  }

  async runLinting() {
    this.log('🔍 Running linting...')
    try {
      await this.runCommand('npm run lint:fix', 'Linting')
      this.log('✅ Linting completed!', 'success')
    } catch (error) {
      this.log('❌ Linting failed', 'error')
    }
  }

  async runPerformanceOptimization() {
    this.log('⚡ Running performance optimization...')
    try {
      await this.runCommand('node scripts/performance-monitor.cjs', 'Performance Monitor')
      this.results.optimizations++
      this.log('✅ Performance optimization completed!', 'success')
    } catch (error) {
      this.log('❌ Performance optimization failed', 'error')
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...')
    try {
      await this.runCommand('npm audit --audit-level=moderate', 'Security Audit')
      this.log('✅ Security audit completed!', 'success')
    } catch (error) {
      this.log('❌ Security audit failed', 'error')
    }
  }

  async generateReport() {
    const endTime = Date.now()
    const duration = endTime - this.startTime
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      results: this.results,
      summary: {
        totalFilesFixed: this.results.syntaxFixes,
        buildSuccess: this.results.buildSuccess,
        testsPassed: this.results.testsPassed,
        optimizations: this.results.optimizations,
        totalErrors: this.results.errors.length
      }
    }

    fs.writeFileSync('master-automation-report.json', JSON.stringify(report, null, 2))
    this.log('📄 Report saved to: master-automation-report.json')
  }

  async run() {
    this.log('🚀 Starting Master Automation Orchestrator...')
    
    try {
      // Step 1: Fix syntax errors
      await this.fixSyntaxErrors()
      
      // Step 2: Run linting
      await this.runLinting()
      
      // Step 3: Run build
      await this.runBuild()
      
      // Step 4: Run tests
      await this.runTests()
      
      // Step 5: Performance optimization
      await this.runPerformanceOptimization()
      
      // Step 6: Security audit
      await this.runSecurityAudit()
      
      // Step 7: Generate report
      await this.generateReport()
      
      this.log('🎉 Master Automation Orchestrator completed!', 'success')
      
    } catch (error) {
      this.log(`💥 Master Automation Orchestrator failed: ${error.message}`, 'error')
      await this.generateReport()
    }
  }
}

// Run the orchestrator
const orchestrator = new MasterAutomationOrchestrator()
orchestrator.run().catch(console.error)