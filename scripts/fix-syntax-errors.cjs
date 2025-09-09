#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let originalContent = content;

      // Fix merge conflicts;
      content = content.replace(/;
      content = content.replace(/;

      // Fix unterminated strings;
      content = content.replace(/&apos;s\s*""\s*>/gm, "&apos;s>");
      content = content.replace(/&apos;s\s*"\s*,/gm, "&apos;s\", ");
      ;
      // Fix unterminated strings in general;
      content = content.replace(/""\s*$/gm, "");
      content = content.replace(/"\s*>/gm, "\">");
      content = content.replace(/""\s*,/gm, "\", ");
      ;
      // Fix missing semicolons;
      content = content.replace(/([^;}])\n/g, "$1;\n");

      // Fix missing commas in objects;
      content = content.replace(/([^}])\n\s*}/g, "$1,\n}");

      // Fix missing closing braces;
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      if (openBraces > closeBraces) {
        content += "}".repeat(openBraces - closeBraces)}
      // Fix missing closing parentheses;
      const openParens = (content.match(/\(/g) || []).length;
      const closeParens = (content.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        content += ")".repeat(openParens - closeParens)}
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8");
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax errors in: ${filePath}`);
        return true}
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  async fixAllFiles() {
    this.log("Starting syntax error fixing...");

    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const files = this.getAllFiles(this.projectRoot, extensions);

    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++}
    }
    this.log(`Fixed ${fixedCount} files out of ${files.length} total files`);
    this.log(`Errors encountered: ${this.errors.length}`);

    return {
      totalFiles: files.length,;
      fixedFiles: fixedCount,;
      errors: this.errors}}

  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip node_modules and other common directories;
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            files = files.concat(this.getAllFiles(fullPath, extensions))}
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath)}
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dir}: ${error.message}`)}
    return files}
}

// Run the fixer if this script is executed directly;
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles().then(result => {
    console.log("Syntax fixing completed:", result);
    process.exit(result.errors.length > 0 ? 1 : 0)}).catch(error => {
    console.error("Syntax fixing failed:", error);
    process.exit(1)})}

module.exports = SyntaxErrorFixer;)