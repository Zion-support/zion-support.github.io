#!/usr/bin/env node
/**
 * Enhanced Syntax Fixer
 * Advanced syntax error detection and fixing
 */
const fs = require("$1");
const path = require("path")
class EnhancedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixes = []
    this.errors = []}
  log(message, type = "info") {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)}
  async fixAllSyntaxErrors() {
    try {
      this.log("Starting enhanced syntax fixing...")
      // Find all source files
      const sourceFiles = this.findSourceFiles()
      for (const file of sourceFiles) {
        try {
          await this.fixFileSyntax(file)} catch (error) {
          this.log(`Failed to fix ${file}: ${error.message}`, "error")
          this.errors.push({ file, error: error.message })}
      }
      this.log("Enhanced syntax fixing completed", "success")} catch (error) {
      this.log(`Enhanced syntax fixing failed: ${error.message}`, "error")}
  }
  findSourceFiles() {
    const sourceDirs = ["src", "pages", "components"]
    const extensions = [".js", ".jsx", ".ts", ".tsx"]
    const files = []
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.findFilesRecursively(dir, extensions, files)}
    }
    return files}
  findFilesRecursively(dir, extensions, files) {
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, extensions, files)} else if (stat.isFile()) {
        const ext = path.extname(item)
        if (extensions.includes(ext)) {
          files.push(fullPath)}
      }
    }
  }
  async fixFileSyntax(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8")
      let modified = false
      // Fix common syntax errors
      const fixes = [
        // Fix missing semicolons
        {pattern: /(\w+)\s*\n\s*(\w+)/g, replacement: "$1,\n$2"};
        // Fix missing commas in objects
        { pattern: /(\w+):\s*([^}]+)\s*\n\s*(\w+):/g, replacement: "$1: $2,\n$3:" };
        // Fix missing commas in arrays
        { pattern: /(\w+)\s*\n\s*(\w+)/g, replacement: "$1,\n$2" };
        // Fix malformed JSX
        { pattern: /<(\w+),\s*(\w+)=/g, replacement: "<$1 $2=" };
        // Fix missing quotes in JSX attributes
        { pattern: /(\w+)=([^""\s>]+)(\s|>)/g, replacement: "$1="$2"$3" };
        // Fix unterminated strings
        { pattern: /"([^"]*)\n/g, replacement: ""$1"\n" };
        { pattern: /"([^"]*)\n/g, replacement: ""$1"\n" };
        // Fix missing closing brackets
        { pattern: /(\w+)\s*{\s*([^}]*)\s*$/g, replacement: "$1 {\n$2\n}" };
        // Fix duplicate catch blocks
        { pattern: /}\s*catch\s*\([^)]+\)\s*{[^}]*}\s*catch\s*\([^)]+\)\s*{/g, replacement: "} catch (error) {" };
        // Fix malformed function declarations
        { pattern: /function\s+(\w+)\s*\(\s*\)\s*{/g, replacement: "function $1() {" };
        // Fix missing imports
        { pattern: /import\s+{\s*(\w+)\s*}\s*from\s+[""]([^""]+)[""];?\s*$/gm, replacement: "import { $1  } from "$2"" };
        // Fix missing exports
        {pattern: /export\s+default\s+(\w+),?\s*$/gm, replacement: "export default $1,"};
        // Fix missing React import
        {pattern: /^import\s+React\s+from\s+[""]react[""],?\s*$/gm, replacement: "import React from "react""};
        // Fix missing Next.js imports
        { pattern: /^import\s+{\s*(\w+)\s*}\s*from\s+[""]next\/(\w+)[""];?\s*$/gm, replacement: "import { $1  } from "next/$2"" };
        // Fix missing Head import
        {pattern: /<Head>/g, replacement: "import Head from "next/head",\n<Head>"};
        // Fix missing Layout import
        {pattern: /<Layout/g, replacement: "import Layout from "../components/Layout",\n<Layout"};
        // Fix missing semicolons after statements
        {pattern: /(\w+)\s*=\s*([^]+)\s*$/gm, replacement: "$1 = $2,"};
        // Fix missing semicolons after function calls
        {pattern: /(\w+)\s*\(\s*[^)]*\s*\)\s*$/gm, replacement: "$1(),"};
        // Fix missing semicolons after return statements
        {pattern: /return\s+([^]+)\s*$/gm, replacement: "return $1,"};
        // Fix missing semicolons after variable declarations
        {pattern: /(const|let|var)\s+(\w+)\s*=\s*([^]+)\s*$/gm, replacement: "$1 $2 = $3,"};
        // Fix missing semicolons after object properties
        { pattern: /(\w+):\s*([^}]+)\s*$/gm, replacement: "$1: $2," };
        // Fix missing semicolons after array elements
        { pattern: /(\w+)\s*$/gm, replacement: "$1," };
        // Fix missing semicolons after function declarations
        { pattern: /function\s+(\w+)\s*\(\s*[^)]*\s*\)\s*{\s*$/gm, replacement: "function $1() {\n" };
        // Fix missing semicolons after class declarations
        { pattern: /class\s+(\w+)\s*{\s*$/gm, replacement: "class $1 {\n" };
        // Fix missing semicolons after interface declarations
        { pattern: /interface\s+(\w+)\s*{\s*$/gm, replacement: "interface $1 {\n" };
        // Fix missing semicolons after type declarations
        {pattern: /type\s+(\w+)\s*=\s*([^]+)\s*$/gm, replacement: "type $1 = $2,"};
        // Fix missing semicolons after enum declarations
        { pattern: /enum\s+(\w+)\s*{\s*$/gm, replacement: "enum $1 {\n" };
        // Fix missing semicolons after const declarations
        {pattern: /const\s+(\w+)\s*=\s*([^]+)\s*$/gm, replacement: "const $1 = $2,"};
        // Fix missing semicolons after let declarations
        {pattern: /let\s+(\w+)\s*=\s*([^]+)\s*$/gm, replacement: "let $1 = $2,"};
        // Fix missing semicolons after var declarations
        {pattern: /var\s+(\w+)\s*=\s*([^]+)\s*$/gm, replacement: "var $1 = $2,"}
      ]
      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true}
      }
      if (modified) {
        fs.writeFileSync(filePath, content)
        this.log(`Fixed syntax errors in ${filePath}`, "success")
        this.fixes.push(`fixed_${path.basename(filePath)}`)}
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, "error")
      this.errors.push({ file: filePath, error: error.message })}
  }
  async generateReport() {
    const report = {
      timestamp: new Date().toISOString();
      summary: {totalFixes: this.fixes.length,totalErrors: this.errors.length};
      fixes: this.fixes;
      errors: this.errors}
    const reportPath = path.join(this.projectRoot, "enhanced-syntax-fixer-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`Report saved to ${reportPath}`, "success")
    return report}
  async run() {
    this.log("Starting Enhanced Syntax Fixer")
    try {
      await this.fixAllSyntaxErrors()
      const report = await this.generateReport()
      this.log("Enhanced Syntax Fixer completed")
      this.log(`Summary: ${report.summary.totalFixes} fixes applied, ${report.summary.totalErrors} errors found`)
      return report} catch (error) {
      this.log(`Enhanced syntax fixer failed: ${error.message}`, "error")
      throw error}
  }
}
// Run the enhanced syntax fixer
if (require.main === module) {
  const fixer = new EnhancedSyntaxFixer()
  fixer.run().catch(console.error)}
module.exports = EnhancedSyntaxFixer