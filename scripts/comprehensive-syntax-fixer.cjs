#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixedFiles = []
    this.errors = []
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8')
      let originalContent = content;

      // Fix common syntax errors
      const fixes = [
        // Remove extra semicolons after braces
        { pattern: /{\s*;/g, replacement: '{' },
        { pattern: /}\s*;/g, replacement: '}' },
        { pattern: /\[\s*;/g, replacement: '[' },
        { pattern: /\]\s*;/g, replacement: ']' },
        { pattern: /\(\s*;/g, replacement: '(' },
        { pattern: /\)\s*;/g, replacement: ')' },
        
        // Fix trailing commas and semicolons
        { pattern: /,\s*;/g, replacement: ',' },
        { pattern: /;\s*,/g, replacement: ';' },
        
        // Fix merge conflict markers
        { pattern: /^<<<<<<< .*$/gm, replacement: '' },
        { pattern: /^=======.*$/gm, replacement: '' },
        { pattern: /^>>>>>>> .*$/gm, replacement: '' },
        
        // Fix malformed object literals
        { pattern: /{\s*;\s*name:/g, replacement: '{ name:' },
        { pattern: /{\s*;\s*script:/g, replacement: '{ script:' },
        { pattern: /{\s*;\s*args:/g, replacement: '{ args:' },
        
        // Fix malformed arrays
        { pattern: /\[\s*;\s*"/g, replacement: '[ "' },
        { pattern: /"\s*;\s*\]/g, replacement: '" ]' },
        
        // Fix function declarations
        { pattern: /function\s*\(\s*\)\s*{\s*;/g, replacement: 'function() {' },
        { pattern: /constructor\s*\(\s*\)\s*{\s*;/g, replacement: 'constructor() {' },
        
        // Fix class declarations
        { pattern: /class\s+\w+\s*{\s*;/g, replacement: (match) => match.replace('{', '{') },
        
        // Fix variable declarations
        { pattern: /this\.\w+\s*=\s*{\s*;/g, replacement: (match) => match.replace('{', '{') },
        { pattern: /this\.\w+\s*=\s*\[\s*;/g, replacement: (match) => match.replace('[', '[') },
        
        // Fix method declarations
        { pattern: /\w+\s*\(\s*[^)]*\)\s*{\s*;/g, replacement: (match) => match.replace('{', '{') },
        
        // Fix require statements
        { pattern: /require\s*\(\s*"\$1"\s*\)/g, replacement: 'require("fs")' },
        
        // Fix malformed strings
        { pattern: /&apos;s\s*""\s*>/g, replacement: "&apos;s>" },
        
        // Fix trailing semicolons in object properties
        { pattern: /:\s*'[^']*',\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*"[^"]*",\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*\d+,\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*(true|false),\s*;/g, replacement: (match) => match.replace(',', ',') },
        
        // Fix malformed module.exports
        { pattern: /module\.exports\s*=\s*{\s*;\s*apps:/g, replacement: 'module.exports = {\n  apps:' },
        
        // Clean up extra whitespace and newlines
        { pattern: /\n\s*\n\s*\n/g, replacement: '\n\n' },
        { pattern: /^\s*;\s*$/gm, replacement: '' },
      ]

      // Apply all fixes
      fixes.forEach(fix => {
        if (typeof fix.replacement === 'function') {
          content = content.replace(fix.pattern, fix.replacement)
        } else {
          content = content.replace(fix.pattern, fix.replacement)
        }
      })

      // Additional specific fixes for common patterns
      content = this.fixSpecificPatterns(content)

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8')
        this.fixedFiles.push(filePath)
        this.log(`✅ Fixed syntax errors in: ${filePath}`)
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)
      return false;
    }
  }

  fixSpecificPatterns(content) {
    // Fix specific malformed patterns
    const specificFixes = [
      // Fix ecosystem.config.cjs structure
      {
        pattern: /module\.exports\s*=\s*{\s*apps:\s*\[\s*{\s*name:\s*'[^']*',\s*script:\s*'[^']*',\s*args:\s*'[^']*',\s*cwd:\s*'[^']*',\s*instances:\s*\d+,\s*autorestart:\s*(true|false),\s*watch:\s*(true|false),\s*max_memory_restart:\s*'[^']*',\s*env:\s*{\s*NODE_ENV:\s*'[^']*',\s*PORT:\s*\d+\s*}\s*}\s*}/s,
        replacement: (match) => {
          return match
            .replace(/,\s*;/g, ',')
            .replace(/{\s*;/g, '{')
            .replace(/}\s*;/g, '}')
            .replace(/\[\s*;/g, '[')
            .replace(/\]\s*;/g, ']')
        }
      }
    ]

    specificFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement)
    })

    return content;
  }

  async fixAllScripts() {
    this.log('🔧 Starting comprehensive syntax fixing...')
    
    const scriptDirs = ['scripts', 'automation']
    const extensions = ['.js', '.cjs', '.mjs', '.ts']
    
    for (const dir of scriptDirs) {
      const dirPath = path.join(this.projectRoot, dir)
      if (fs.existsSync(dirPath)) {
        await this.fixDirectory(dirPath, extensions)
      }
    }

    // Fix root config files
    const configFiles = ['ecosystem.config.cjs', 'package.json']
    for (const file of configFiles) {
      const filePath = path.join(this.projectRoot, file)
      if (fs.existsSync(filePath)) {
        this.fixFile(filePath)
      }
    }

    this.log(`✅ Fixed ${this.fixedFiles.length} files`)
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered`)
      this.errors.forEach(error => {
        this.log(`  - ${error.file}: ${error.error}`)
      })
    }

    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors
    }
  }

  async fixDirectory(dirPath, extensions) {
    const files = fs.readdirSync(dirPath)
    
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        await this.fixDirectory(filePath, extensions)
      } else if (stat.isFile()) {
        const ext = path.extname(file)
        if (extensions.includes(ext)) {
          this.fixFile(filePath)
        }
      }
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer()
  fixer.fixAllScripts()
    .then(result => {
      console.log('\n📊 Summary:')
      console.log(`Fixed files: ${result.fixedFiles.length}`)
      console.log(`Errors: ${result.errors.length}`)
      process.exit(result.errors.length > 0 ? 1 : 0)
    })
    .catch(error => {
      console.error('❌ Fatal error:', error)
      process.exit(1)
    })
}

module.exports = ComprehensiveSyntaxFixer;