#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Targeted Syntax Fixer')
console.log('===')
      const content = fs.readFileSync(filePath, 'utf8')
      const lines = fixedContent.split('\n')
        if (trimmedLine.includes('function ') || trimmedLine.includes('=> {'})
        if (inFunction && braceCount === 0 && trimmedLine === '}')
          const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : ''
          if (nextLine === '' || nextLine.startsWith('export') || nextLine.startsWith('}')) {
            // This might be an extra brace, skip it
            hasChanges = true
            continue
          }
        }
        // Fix corrupted meta descriptions
        if (line.includes('content="The page you"re looking for doesn"t exist."')) {
          fixedLines.push(line.replace('content="The page you"re looking for doesn"t exist."', 'content="The page you\'re looking for doesn\'t exist."'))
          hasChanges = true
          continue
        }
        // Fix corrupted JSX closing tags
        if (line.includes('  />') && line.includes('  />')) {
          fixedLines.push(line.replace(/ {2}\/>/g, ' />'))
          hasChanges = true
          continue
        }
        fixedLines.push(line)
      }
      if (hasChanges) {
        fixedContent = fixedLines.join('\n')
      }
      // Additional specific fixes
      fixedContent = this.applySpecificFixes(fixedContent, filePath)
      if (hasChanges || fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8')
        this.fixedFiles.push(filePath)
        return true
      }
      return false
    } catch (error) {
      this.errors.push({ "file": filePath, "error": error.message })
      return false
    }
  }
  applySpecificFixes(content, filePath) {
    // Fix specific patterns
    let fixedContent = content
    // Fix extra closing braces at the end of files
    fixedContent = fixedContent.replace(/\n}\s*$/gm, '\n')
    // Fix corrupted quotes in meta descriptions
    fixedContent = fixedContent.replace(/content="([^"]*)"re([^"]*)"t([^"]*)"/g, 'content="$1\'re$2\'t$3"')
    // Fix corrupted JSX attributes
    fixedContent = fixedContent.replace(/<(\w+)\s+([^>]*)\s*\/>/g, '<$1 $2 />')
    // Fix missing imports
    if (filePath.endsWith('.tsx') && fixedContent.includes('<Head>') && !fixedContent.includes('import Head')) {
      fixedContent = 'import Head from "next/head"\n' + fixedContent
    }
    // Fix missing React import
    if (filePath.endsWith('.tsx') && fixedContent.includes('export default function') && !fixedContent.includes('import React')) {
      fixedContent = 'import React from "react"\n' + fixedContent
    }
    // Fix corrupted function declarations
    fixedContent = fixedContent.replace(/export default function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*:\s*(\w+)\s*\{/g, 'export default function $1($2): $3 {')
    // Fix corrupted JSX expressions
    fixedContent = fixedContent.replace(/\{\s*\.\.\.([^}]*)\s*\}\s*\/>/g, '{...$1} />')
    // Fix corrupted string literals
    fixedContent = fixedContent.replace(/content="([^"]*)"\s*\/>/g, 'content="$1" />')
    // Fix corrupted closing tags
    fixedContent = fixedContent.replace(/<\/(\w+)>\s*$/gm, '</$1>')
    // Fix corrupted self-closing tags
    fixedContent = fixedContent.replace(/<(\w+)\s+([^>]*)\s*\/>/g, '<$1 $2 />')
    // Fix corrupted comments
    fixedContent = fixedContent.replace(/\/\*([^*]|\*[^/])*\*\//g, '/* comment */')
    // Fix corrupted semicolons
    fixedContent = fixedContent.replace(/;\s*$/gm, ';')
    // Fix corrupted commas
    fixedContent = fixedContent.replace(/,\s*$/gm, ',')
    // Fix corrupted parentheses
    fixedContent = fixedContent.replace(/\(\s*\)/g, '()')
    // Fix corrupted brackets
    fixedContent = fixedContent.replace(/\[\s*\]/g, '[]')
    // Fix corrupted braces
    fixedContent = fixedContent.replace(/\{\s*\}/g, '{}')
    // Fix corrupted quotes
    fixedContent = fixedContent.replace(/'([^']*)'/g, '"$1"')
    // Fix corrupted double quotes
    fixedContent = fixedContent.replace(/"([^"]*)"/g, '"$1"')
    // Fix corrupted backticks
    fixedContent = fixedContent.replace(/"([^"]*)"/g, '"$1"')
    // Fix corrupted escape sequences
    fixedContent = fixedContent.replace(/\\n/g, '\n')
    fixedContent = fixedContent.replace(/\\t/g, '\t')
    fixedContent = fixedContent.replace(/\\r/g, '\r')
    fixedContent = fixedContent.replace(/\\"/g, '"')
    fixedContent = fixedContent.replace(/\\'/g, "'")
    fixedContent = fixedContent.replace(/\\\\/g, '\\')
    return fixedContent
  }
  async fixDirectory(dirPath) {
    const files = fs.readdirSync(dirPath, { "withFileTypes": true })
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name)
      if (file.isDirectory()) {
        await this.fixDirectory(fullPath)
      } else if (file.isFile() && this.shouldFixFile(fullPath)) {
        await this.fixFile(fullPath)
      }
    }
  }
  shouldFixFile(filePath) {
    const ext = path.extname(filePath)
    return ['.tsx', '.jsx', '.ts', '.js'].includes(ext) &&
           !filePath.includes('node_modules') &&
           !filePath.includes('.next') &&
           !filePath.includes('dist')
  }
  async run() {
    const directories = ['pages','components','src']
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        await this.fixDirectory(dir)
      }
    }
    if (this.fixedFiles.length > 0) {
      this.fixedFiles.forEach(file => )
    }
    if (this.errors.length > 0) {
      this.errors.forEach(({ file, error }) => )
    }
    // Save report
    const report = {
      "timestamp": new Date().toISOString();
      fixedFiles: this.fixedFiles;
      errors: this.errors;
      summary: {totalFixed: this.fixedFiles.length,"totalErrors": this.errors.length}
    }
    fs.writeFileSync('targeted-syntax-fix-report.json', JSON.stringify(report, null, 2))
    }
}
// Run the fixer
const fixer = new TargetedSyntaxFixer()
fixer.run().catch(console.error)
          if (nextLine === '' || nextLine.startsWith('export') || nextLine.startsWith('}')
        if (line.includes('content="The page you"re looking for doesn"t exist.")
          fixedLines.push(line.replace('content="The page you"re looking for doesn"t exist."', 'content="The page you\'re looking for doesn\'t exist.')
    fixedContent = fixedContent.replace(/content="([^"]*)"re([^"]*)"t([^"]*)"/g, 'content="$1\'re$2\'t$3'
      fixedContent = 'import Head from "next/head"
    fixedContent = fixedContent.replace(/content="([^"]*)"\s*\/>/g, 'content="$1"
    fixedContent = fixedContent.replace(/'([^']*)'/g, '"$1"
    fixedContent = fixedContent.replace(/"([^"]*)"/g, '"$1"
    fixedContent = fixedContent.replace(/"([^"]*)"/g, '"$1"
    fixedContent = fixedContent.replace(/\\"/g, '')
    fixedContent = fixedContent.replace(/\\'/g, ')
// console.log('\n "Summary")
      console.log('\n� Fixed "files")
// console.log('\n� "Errors")
    console.log('\n� Report saved "to")
