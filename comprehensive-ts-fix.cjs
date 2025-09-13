#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔧 Comprehensive TypeScript Fixer - Advanced Error Resolution')
console.log('============================================================')

class ComprehensiveTSFixer {
  constructor() {
    this.fixedFiles = []
    this.failedFiles = []
    this.startTime = Date.now()
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`)
      
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`, 'warning')
        return false
      }

      let content = fs.readFileSync(filePath, 'utf8')
      let originalContent = content

      // Fix specific patterns
      content = this.fixBrokenJSX(content)
      content = this.fixTypeScriptSyntax(content)
      content = this.fixGenericTypes(content)
      content = this.fixEventHandlers(content)
      content = this.fixStringLiterals(content)
      content = this.fixMissingBraces(content)
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content)
        this.fixedFiles.push(filePath)
        this.log(`✅ Fixed: ${filePath}`, 'success')
        return true
      } else {
        this.log(`No changes needed: ${filePath}`, 'info')
        return false
      }
    } catch (error) {
      this.log(`❌ Failed to fix ${filePath}: ${error.message}`, 'error')
      this.failedFiles.push({ file: filePath, error: error.message })
      return false
    }
  }

  fixBrokenJSX(content) {
    // Fix broken JSX tags like </input>, </Button>, </select>
    content = content.replace(/<\/input>/g, '')
    content = content.replace(/<\/Button>/g, '')
    content = content.replace(/<\/select>/g, '')
    content = content.replace(/<\/motion>/g, '')
    
    // Fix broken self-closing tags
    content = content.replace(/<input([^>]*?)><\/input>/g, '<input$1 />')
    content = content.replace(/<Button([^>]*?)><\/Button>/g, '<Button$1 />')
    content = content.replace(/<select([^>]*?)><\/select>/g, '<select$1></select>')
    
    return content
  }

  fixTypeScriptSyntax(content) {
    // Fix broken generic type syntax
    content = content.replace(/<string\[\]><\/string>/g, '<string[]>')
    content = content.replace(/<number \| null><\/number>/g, '<number | null>')
    content = content.replace(/<TokenTransaction\[\]><\/TokenTransaction>/g, '<TokenTransaction[]>')
    
    // Fix broken function syntax
    content = content.replace(/onChange=\{\(e\) =><\/input>/g, 'onChange={(e) =>')
    content = content.replace(/onChange=\{\(e\) =><\/Button>/g, 'onChange={(e) =>')
    content = content.replace(/onChange=\{\(e\) =><\/select>/g, 'onChange={(e) =>')
    content = content.replace(/onClick=\{\(\) =><\/Button>/g, 'onClick={() =>')
    
    return content
  }

  fixGenericTypes(content) {
    // Fix broken generic type declarations
    content = content.replace(/useState<string\[\]><\/string>\(\[\]\)/g, 'useState<string[]>([])')
    content = content.replace(/useState<number \| null><\/number>\(null\)/g, 'useState<number | null>(null)')
    content = content.replace(/useState<TokenTransaction\[\]><\/TokenTransaction>\(\[\]\)/g, 'useState<TokenTransaction[]>([])')
    
    return content
  }

  fixEventHandlers(content) {
    // Fix broken event handler syntax
    content = content.replace(/onChange=\{e =><\/Input>/g, 'onChange={e =>')
    content = content.replace(/onChange=\{e =><\/Button>/g, 'onChange={e =>')
    content = content.replace(/onChange=\{e =><\/select>/g, 'onChange={e =>')
    content = content.replace(/onClick=\{\(\) =><\/Button>/g, 'onClick={() =>')
    
    return content
  }

  fixStringLiterals(content) {
    // Fix broken string literals with emojis
    content = content.replace(/🎉 You've explored all available products!/g, "'🎉 You've explored all available products!'")
    content = content.replace(/Showing \{products\.length\} AI-powered solutions/g, "'Showing {products.length} AI-powered solutions'")
    
    return content
  }

  fixMissingBraces(content) {
    // Fix missing closing braces and parentheses
    const lines = content.split('\n')
    let braceCount = 0
    let parenCount = 0
    let inJSX = false
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // Count braces and parentheses
      for (const char of line) {
        if (char === '{') {
          if (inJSX) braceCount++
          else if (line.includes('{') && !line.includes('}')) parenCount++
        } else if (char === '}') {
          if (inJSX) braceCount--
          else if (line.includes('}') && !line.includes('{')) parenCount--
        } else if (char === '(') {
          parenCount++
        } else if (char === ')') {
          parenCount--
        }
      }
      
      // Check for JSX
      if (line.includes('<') && !line.includes('</')) {
        inJSX = true
      } else if (line.includes('</') || line.includes('/>')) {
        inJSX = false
      }
      
      // Fix common issues
      if (line.includes('onChange={(e) =>') && !line.includes('}')) {
        lines[i] = line.replace('onChange={(e) =>', 'onChange={(e) => {')
        braceCount++
      }
      
      if (line.includes('onClick={() =>') && !line.includes('}')) {
        lines[i] = line.replace('onClick={() =>', 'onClick={() => {')
        braceCount++
      }
    }
    
    return lines.join('\n')
  }

  async run() {
    try {
      this.log('Starting comprehensive TypeScript error fixing...')

      // List of files with errors
      const filesToFix = [
        'src/components/ProductListingCard.tsx',
        'src/components/talent/TalentCard.tsx',
        'src/hooks/useAISearch.ts',
        'src/hooks/useTalentProfile.ts',
        'src/i18n/index.ts',
        'src/integrations/supabase/client.ts',
        'src/lib/axios.ts',
        'src/pages/Marketplace.tsx',
        'src/pages/admin/TokenManager.tsx',
        'src/services/apiClient.ts'
      ]

      for (const file of filesToFix) {
        await this.fixFile(file)
        // Small delay between files
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      // Generate report
      this.generateReport()
    } catch (error) {
      this.log(`Script failed: ${error.message}`, 'error')
    }
  }

  generateReport() {
    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)

    const report = {
      summary: {
        filesProcessed: this.fixedFiles.length + this.failedFiles.length,
        successfullyFixed: this.fixedFiles.length,
        failedFiles: this.failedFiles.length,
        duration: `${duration} seconds`
      },
      fixedFiles: this.fixedFiles,
      failedFiles: this.failedFiles,
      timestamp: new Date().toISOString()
    }

    // Save report to file
    fs.writeFileSync('comprehensive-ts-fix-report.json', JSON.stringify(report, null, 2))

    // Display summary
    console.log('\n🎉 Comprehensive TypeScript Fix Complete!')
    console.log('==========================================')
    console.log(`Files processed: ${this.fixedFiles.length + this.failedFiles.length}`)
    console.log(`Successfully fixed: ${this.fixedFiles.length}`)
    console.log(`Failed files: ${this.failedFiles.length}`)
    console.log(`Duration: ${duration} seconds`)

    if (this.fixedFiles.length > 0) {
      console.log('\n✅ Successfully fixed files:')
      this.fixedFiles.forEach(file => {
        console.log(`  - ${file}`)
      })
    }

    if (this.failedFiles.length > 0) {
      console.log('\n❌ Failed files:')
      this.failedFiles.forEach(failure => {
        console.log(`  - ${failure.file}: ${failure.error}`)
      })
    }

    console.log('\n📊 Detailed report saved to: comprehensive-ts-fix-report.json')
  }
}

// Run the script
const fixer = new ComprehensiveTSFixer()
fixer.run().then(() => {
  console.log('\n🚀 Comprehensive TypeScript fixing completed!')
}).catch(error => {
  console.error('Script failed:', error.message)
  process.exit(1)
})