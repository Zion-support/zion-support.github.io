#!/usr/bin/env node
/**
 * Final Syntax Cleanup
 * Final cleanup of syntax issues before deployment
 */
const fs = require("fs");
const path = require("path");
class FinalSyntaxCleanup {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixes = []
    this.errors = [],
}

  log(message, type = "info") {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry),
}

  async cleanupSyntaxIssues() {
    try {
      this.log("Starting final syntax cleanup...")
      // Find all source files
      const sourceFiles = this.findSourceFiles()
      for (const file of sourceFiles) {
        try {
          await this.cleanupFile(file),
} catch (error) {
          this.log(`Failed to cleanup ${file}: ${error.message}`, "error")
          this.errors.push({ file, error: error.message }),
}
      }
      
      this.log("Final syntax cleanup completed", "success"),
} catch (error) {
      this.log(`Final syntax cleanup failed: ${error.message}`, "error"),
}
  }

  findSourceFiles() {
    const sourceDirs = ["pages", "src"]
    const extensions = [".js", ".jsx", ".ts", ".tsx"]
    const files = []
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.findFilesRecursively(dir, extensions, files),
}
    }
    return files,
}

  findFilesRecursively(dir, extensions, files) {
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, extensions, files),
} else if (stat.isFile()) {
        const ext = path.extname(item)
        if (extensions.includes(ext)) {
          files.push(fullPath),
}
      }
    }
  }

  async cleanupFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8")
      let modified = false
      // Fix unterminated strings
      const fixes = [
        // Fix unterminated strings with single quotes
        { pattern: /";$/gm, replacement: "" },
        // Fix unterminated strings with double quotes
        { pattern: /";$/gm, replacement: """ },
        // Fix malformed imports
        { pattern: /import\s+(\w+)\s+from\s+[""]([^""]+)[""];"/g, replacement: "import $1 from "$2"" },
        // Fix malformed exports
        { pattern: /export\s+default\s+(\w+);"/g, replacement: "export default $1;" },
        // Fix malformed function declarations
        { pattern: /function\s+(\w+)\s*\(\s*\)\s*{"/g, replacement: "function $1() {" },
        // Fix malformed return statements
        { pattern: /return\s+([^]+);"/g, replacement: "return $1;" },
        // Fix malformed JSX
        { pattern: /<(\w+)\s*,\s*(\w+)=/g, replacement: "<$1 $2=" },
        // Fix malformed object properties
        { pattern: /(\w+):\s*([^,}]+);"/g, replacement: "$1: $2," },
        // Fix malformed array elements
        { pattern: /(\w+);"/g, replacement: "$1," },
        // Fix malformed variable declarations
        { pattern: /(const|let|var)\s+(\w+)\s*=\s*([^]+);"/g, replacement: "$1 $2 = $3;" },
        // Fix malformed function calls
        { pattern: /(\w+)\s*\(\s*[^)]*\s*\);"/g, replacement: "$1();" },
        // Fix malformed class declarations
        { pattern: /class\s+(\w+)\s*{"/g, replacement: "class $1 {" },
        // Fix malformed interface declarations
        { pattern: /interface\s+(\w+)\s*{"/g, replacement: "interface $1 {" },
        // Fix malformed type declarations
        { pattern: /type\s+(\w+)\s*=\s*([^]+);"/g, replacement: "type $1 = $2;" },
        // Fix malformed enum declarations
        { pattern: /enum\s+(\w+)\s*{"/g, replacement: "enum $1 {" },
        // Fix malformed const declarations
        { pattern: /const\s+(\w+)\s*=\s*([^]+);"/g, replacement: "const $1 = $2;" },
        // Fix malformed let declarations
        { pattern: /let\s+(\w+)\s*=\s*([^]+);"/g, replacement: "let $1 = $2;" },
        // Fix malformed var declarations
        { pattern: /var\s+(\w+)\s*=\s*([^]+);"/g, replacement: "var $1 = $2;" },
        // Fix malformed JSX attributes
        { pattern: /(\w+)=\s*([^""\s>]+)(\s|>)/g, replacement: "$1="$2"$3" },
        // Fix malformed JSX closing tags
        { pattern: /<\/(\w+)>/g, replacement: "</$1>" },
        // Fix malformed JSX self-closing tags
        { pattern: /<(\w+)\s*\/>/g, replacement: "<$1 />" },
        // Fix malformed JSX opening tags
        { pattern: /<(\w+)\s*>/g, replacement: "<$1>" },
        // Fix malformed JSX fragments
        { pattern: /<>/g, replacement: "<>" },
        { pattern: /<\/>/g, replacement: "</>" },
        // Fix malformed JSX comments
        { pattern: /{\/\*([^*]|\*[^/])*\*\/}/g, replacement: "{/* $1 */}" },
        // Fix malformed JSX expressions
        { pattern: /{([^}]+)}/g, replacement: "{$1}" },
        // Fix malformed JSX strings
        { pattern: /"([^"]*)""/g, replacement: ""$1"" },
        { pattern: /"([^"]*)""/g, replacement: ""$1"" },
        // Fix malformed JSX numbers
        { pattern: /(\d+);"/g, replacement: "$1," },
        // Fix malformed JSX booleans
        { pattern: /(true|false);"/g, replacement: "$1," },
        // Fix malformed JSX null/undefined
        { pattern: /(null|undefined);"/g, replacement: "$1," },
        // Fix malformed JSX arrays
        { pattern: /\[([^\]]*)\];"/g, replacement: "[$1]," },
        // Fix malformed JSX objects
        { pattern: /{([^}]*)}"/g, replacement: "{$1}," },
        // Fix malformed JSX functions
        { pattern: /function\s*\(\s*\)\s*{"/g, replacement: "function() {" },
        // Fix malformed JSX arrow functions
        { pattern: /\(\s*\)\s*=>\s*{"/g, replacement: "() => {" },
        // Fix malformed JSX ternary operators
        { pattern: /(\w+)\s*\?\s*([^:]+)\s*:\s*([^]+);"/g, replacement: "$1 ? $2 : $3," },
        // Fix malformed JSX logical operators
        { pattern: /(\w+)\s*&&\s*([^]+);"/g, replacement: "$1 && $2," },
        { pattern: /(\w+)\s*\|\|\s*([^]+);"/g, replacement: "$1 || $2," },
        // Fix malformed JSX comparison operators
        { pattern: /(\w+)\s*==\s*([^]+);"/g, replacement: "$1 == $2," },
        { pattern: /(\w+)\s*!=\s*([^]+);"/g, replacement: "$1 != $2," },
        { pattern: /(\w+)\s*===\s*([^]+);"/g, replacement: "$1 === $2," },
        { pattern: /(\w+)\s*!==\s*([^]+);"/g, replacement: "$1 !== $2," },
        // Fix malformed JSX arithmetic operators
        { pattern: /(\w+)\s*\+\s*([^]+);"/g, replacement: "$1 + $2," },
        { pattern: /(\w+)\s*-\s*([^]+);"/g, replacement: "$1 - $2," },
        { pattern: /(\w+)\s*\*\s*([^]+);"/g, replacement: "$1 * $2," },
        { pattern: /(\w+)\s*\/\s*([^]+);"/g, replacement: "$1 / $2," },
        // Fix malformed JSX assignment operators
        { pattern: /(\w+)\s*=\s*([^]+);"/g, replacement: "$1 = $2," },
        { pattern: /(\w+)\s*\+=\s*([^]+);"/g, replacement: "$1 += $2," },
        { pattern: /(\w+)\s*-=\s*([^]+);"/g, replacement: "$1 -= $2," },
        { pattern: /(\w+)\s*\*=\s*([^]+);"/g, replacement: "$1 *= $2," },
        { pattern: /(\w+)\s*\/=\s*([^]+);"/g, replacement: "$1 /= $2," }
      ]
      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true,
}
      }

      if (modified) {
        fs.writeFileSync(filePath, content)
        this.log(`Cleaned up syntax issues in ${filePath}`, "success")
        this.fixes.push(`cleaned_${path.basename(filePath)}`),
}
    } catch (error) {
      this.log(`Error cleaning up ${filePath}: ${error.message}`, "error")
      this.errors.push({ file: filePath, error: error.message }),
}
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFixes: this.fixes.length,
        totalErrors: this.errors.length,
},
      fixes: this.fixes,
      errors: this.errors,
}
    const reportPath = path.join(this.projectRoot, "final-syntax-cleanup-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`Report saved to ${reportPath}`, "success")
    return report,
}

  async run() {
    this.log("Starting Final Syntax Cleanup")
    try {
      await this.cleanupSyntaxIssues()
      const report = await this.generateReport()
      this.log("Final Syntax Cleanup completed")
      this.log(`Summary: ${report.summary.totalFixes} fixes applied, ${report.summary.totalErrors} errors found`)
      return report,
} catch (error) {
      this.log(`Final syntax cleanup failed: ${error.message}`, "error')
      throw error,
}
  }
}

// Run the final syntax cleanup
if (require.main === module) {
  const cleanup = new FinalSyntaxCleanup()
  cleanup.run().catch(console.error),
}

module.exports = FinalSyntaxCleanup