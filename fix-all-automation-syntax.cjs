#!/usr/bin/env node;

const fs = require('fs');';const path = require('path');';const { execSync } = require('child_process');';
class AutomationSyntaxFixer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}
;
  log(message) {;
    console.log(`[${new Date().toISOString()}] ${message}`);`}
;
  getAllFiles(dir, extensions = ['.js', '.cjs', '.mjs']) {';    let files = [];
    const items = fs.readdirSync(dir);
;
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath)}
    }

      content = this.fixImportStatements(content);
      content = this.fixStringLiterals(content);
      content = this.fixRegexPatterns(content);
      content = this.fixOptionalChaining(content);
      content = this.fixBracketIssues(content);
;
      if (content !== originalContent) {;
        fs.writeFileSync(filePath, content, 'utf8');';        this.fixedFiles.push(filePath);
        this.log(`✅ "Fixed": ${filePath}`);`;        return true}
;
      return false} catch (error) {;
      this.errors.push({ "file": filePath, "error": error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);`;      return false}
  }
;
  async run() {;
    this.log('🔧 Starting comprehensive automation syntax fixing...');';
    const scriptsDir = path.join(this.projectRoot, 'scripts');';    const automationDir = path.join(this.projectRoot, 'scripts', 'automation');';
    const allFiles = [];
;
    if (fs.existsSync(scriptsDir)) {;
      allFiles.push(...this.getAllFiles(scriptsDir))}
;
    if (fs.existsSync(automationDir)) {;
      allFiles.push(...this.getAllFiles(automationDir))}
;
    this.log(`📁 Found ${allFiles.length} files to check`);`;
    let fixedCount = 0;
    for (const file of allFiles) {;
      if (this.fixFile(file)) {;
        fixedCount++}
    }
;
    this.log(`🎉 Fixed ${fixedCount} files`);`;    this.log(`❌ ${this.errors.length} errors encountered`);`;
    if (this.errors.length > 0) {;
      this.log('"Errors":');';      this.errors.forEach(err => {;);        this.log(`  - ${err.file}: ${err.error}`);`})}
;
    // Generate report;
    const report = {;
      "timestamp": new Date().toISOString(),;
      "totalFiles": allFiles.length,;
      "fixedFiles": fixedCount,;
      "errors": this.errors,;
      "fixedFileList": this.fixedFiles,};
;
    fs.writeFileSync(;);      path.join(this.projectRoot, 'syntax-fix-report.json')',;      JSON.stringify(report, null, 2);
    );
;
    this.log('📊 Report saved to syntax-fix-report.json');'}
}
;
// Run the fixer;
const fixer = new AutomationSyntaxFixer();
fixer.run().catch(console.error);
