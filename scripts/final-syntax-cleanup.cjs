#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

console.log('🧹 Final Syntax Cleanup')
console.log('======================')

class FinalSyntaxCleanup {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let fixedContent = content
      let hasChanges = false

      // Fix specific patterns that are still causing issues
      const patterns = [
        // Fix corrupted meta descriptions
        {
          pattern: /content="The page you"re looking for doesn"t exist."/g,
          replacement: 'content="The page you\'re looking for doesn\'t exist."'
        },
        // Fix extra closing braces
        {
          pattern: /\n}\s*$/gm,
          replacement: '\n}'
        },
        // Fix corrupted JSX attributes
        {
          pattern: /<(\w+)\s+([^>]*)\s*\/>/g,
          replacement: '<$1 $2 />'
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

      for (const { pattern, replacement } of patterns) {
        const before = fixedContent
        fixedContent = fixedContent.replace(pattern, replacement)
        if (before !== fixedContent) {
          hasChanges = true
        }

      // Additional specific fixes
      fixedContent = this.applySpecificFixes(fixedContent, filePath)

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent, 'utf8')
        this.fixedFiles.push(filePath)
        console.log(`✅ Fixed: ${filePath}`)
        return true
      }
      return false
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      console.log(`❌ Error fixing ${filePath}: ${error.message}`)
      return false
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

    if (filePath.endsWith('.ts') || filePath.endsWith('.js')) {
      // Fix missing imports
      if (fixedContent.includes('React.') && !fixedContent.includes('import React')) {
        fixedContent = 'import React from "react"\n' + fixedContent
      }

    return fixedContent
  }

  async fixDirectory(dirPath) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true })
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name)
      
      if (file.isDirectory()) {
        await this.fixDirectory(fullPath)
      } else if (file.isFile() && this.shouldFixFile(fullPath)) {
        await this.fixFile(fullPath)      }
    }

  shouldFixFile(filePath) {
    const ext = path.extname(filePath)
    return ['.tsx', '.jsx', '.ts', '.js'].includes(ext) && 
           !filePath.includes('node_modules') &&
           !filePath.includes('.next') &&
           !filePath.includes('dist')
  }

  async run() {
    console.log('🔍 Starting final syntax cleanup...')
    
    const directories = [
      'pages',
      'components',
      'src'
    ]

    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        console.log(`📁 Processing directory: ${dir}`)
        await this.fixDirectory(dir)
      }

    console.log('\n📊 Summary:')
    console.log(`✅ Files fixed: ${this.fixedFiles.length}`)
    console.log(`❌ Errors: ${this.errors.length}`)
    
    if (this.fixedFiles.length > 0) {
      console.log('\n📝 Fixed files:')
      this.fixedFiles.forEach(file => console.log(`  - ${file}`))
    }
    
    if (this.errors.length > 0) {
      console.log('\n🚨 Errors:')
      this.errors.forEach(({ file, error }) => console.log(`  - ${file}: ${error}`))
    }

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length
      }

    fs.writeFileSync('final-syntax-cleanup-report.json', JSON.stringify(report, null, 2))
    console.log('\n📄 Report saved to: final-syntax-cleanup-report.json')
  }

// Run the cleanup
const cleanup = new FinalSyntaxCleanup()
cleanup.run().catch(console.error)