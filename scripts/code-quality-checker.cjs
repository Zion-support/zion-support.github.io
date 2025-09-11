const fs = require('fs');
const path = require('path');
class CodeQualityChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.issues = [];
    this.fixes = [];
    this.stats = {
      filesProcessed: 0,
      totalLines: 0,
      issuesFound: 0,
      fixesApplied: 0
    };
  }
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const emoji = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'FIX': '🔧'
    }[type] || 'ℹ️';
  }
  async checkFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    this.stats.filesProcessed++;
    this.stats.totalLines += lines.length;
    let modified = false;
    let fileIssues = 0;
    let fileFixes = 0;
    // Check for common issues
    const issues = this.analyzeCode(content, filePath);
    issues.forEach(issue => {
      this.issues.push(issue);
      fileIssues++;
      if (issue.fixable) {
        // Apply fix
        const fix = this.applyFix(content, issue);
        if (fix) {
          this.fixes.push(fix);
          fileFixes++;
          modified = true;
        }
      }
    });
    this.stats.issuesFound += fileIssues;
    this.stats.fixesApplied += fileFixes;
    if (modified) {
      fs.writeFileSync(filePath, content);
      this.log(`Fixed ${fileFixes} issues in ${path.relative(this.projectRoot, filePath)}`, 'FIX');
    }
    if (fileIssues > 0) {
      this.log(`Found ${fileIssues} issues in ${path.relative(this.projectRoot, filePath)}`, 'WARNING');
    }
  }
  analyzeCode(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      // Check for console.log statements
      if (line.includes('console.log') && !line.includes('//')) {
        issues.push({
          type: 'console.log',
          file: filePath,
          line: lineNumber,
          message: 'Console.log statement found',
          fixable: true,
const fs = require("fs");"const path = require("path");class CodeQualityChecker { constructor() { this.projectRoot = process.cwd(); this.issues = []; this.fixes = []; this.stats = { filesProcessed: 0, totalLines: 0, issuesFound: 0, fixesApplied: 0 }; }" log(message, type = "INFO") { const timestamp = new Date().toISOString(); const emoji = {" INFO: ""," SUCCESS: ""," ERROR: ""," WARNING: ""," FIX: """ }[type] | ""; console.log(`[${timestamp}] [${type}] ${emoji} ${message}`); } async checkFile(filePath) { if (!fs.existsSync(filePath)) return; " const content = fs.readFileSync(filePath, "utf8");" const lines = content.split("\n"); this.stats.filesProcessed++; this.stats.totalLines += lines.length; let modified = false; let fileIssues = 0; let fileFixes = 0; / Check for common issues const issues = this.analyzeCode(content, filePath); issues.forEach(issue => { this.issues.push(issue); fileIssues++; if (issue.fixable) { / Apply fix const fix = this.applyFix(content, issue); if (fix) { this.fixes.push(fix); fileFixes++; modified = true; } } }); this.stats.issuesFound += fileIssues; this.stats.fixesApplied += fileFixes; if (modified) { fs.writeFileSync(filePath, content);"` this.log(`Fixed ${fileFixes} issues in ${path.relative(this.projectRoot, filePath)}`, "FIX"); } if (fileIssues > 0) {"` this.log(`Found ${fileIssues} issues in ${path.relative(this.projectRoot, filePath)}`, "WARNING"); } } analyzeCode(content, filePath) { const issues = [];" const lines = content.split("\n"); lines.forEach((line, index) => { const lineNumber = index + 1; / Check for console.log statements" if (line.includes("console.log") && !line.includes("/")) { issues.push({" type: "console.log", file: filePath, line: lineNumber," message: "Console.log statement found", fixable: true," severity: "warning" }); } / Check for TODO comments" if (line.includes("TODO") | line.includes("FIXME")) { issues.push({" type: "todo", file: filePath, line: lineNumber," message: "TODO/FIXME comment found", fixable: false," severity: "info" }); } / Check for unused imports" if (line.includes("import") && !line.includes("from")) { issues.push({" type: "unused_import", file: filePath, line: lineNumber," message: "Potential unused import", fixable: false," severity: "warning" }); } / Check for long lines if (line.length > 120) { issues.push({" type: "long_line", file: filePath, line: lineNumber,` message: `Line too long (${line.length} characters)`, fixable: false," severity: "warning" }); } / Check for missing semicolons" if (line.trim() && !line.trim().endsWith(";") && !line.trim().endsWith("{") && !line.trim().endsWith("}") && !line.trim().startsWith("/")) { issues.push({" type: "missing_semicolon", file: filePath, line: lineNumber," message: "Missing semicolon", fixable: true," severity: "error" }); } }); return issues; } applyFix(content, issue) {" const lines = content.split("\n"); const lineIndex = issue.line - 1; switch (issue.type) {" case "console.log": / Remove console.log statements" lines[lineIndex] = lines[lineIndex].replace(/console\.log\([^)]*\);?/g, ""); break; " case missing_semicolon: / Add semicolon if missing" if (!lines[lineIndex].trim().endsWith(";")) {" lines[lineIndex] = lines[lineIndex].trim() + ";"; } break; default: return null; } " return lines.join("\n"); } async checkDirectory(dirPath) { const items = fs.readdirSync(dirPath); for (const item of items) { const fullPath = path.join(dirPath, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { / Skip node_modules and .next directories" if (item !== "node_modules" && item !== ".next" && item !== ".git") { await this.checkDirectory(fullPath); } } else if (stat.isFile()) { / Check only relevant file types const ext = path.extname(item);" if ([".js", ".jsx", ".ts", ".tsx", ".cjs", ".mjs"].includes(ext)) { await this.checkFile(fullPath); } } } } generateReport() {" this.log("\n Code Quality Report", "INFO");" this.log("=" .repeat(50));` console.log(`\n Files Processed: ${this.stats.filesProcessed}`);` console.log(` Total Lines: ${this.stats.totalLines}`);` console.log(` Issues Found: ${this.stats.issuesFound}`);` console.log(` Fixes Applied: ${this.stats.fixesApplied}`); / Group issues by type const issuesByType = {}; this.issues.forEach(issue => { if (!issuesByType[issue.type]) { issuesByType[issue.type] = []; } issuesByType[issue.type].push(issue); }); " console.log("\n Issues by Type:"); Object.entries(issuesByType).forEach(([type, issues]) => {` console.log(` ${type}: ${issues.length} issues`); }); / Show top files with issues const filesWithIssues = {}; this.issues.forEach(issue => { if (!filesWithIssues[issue.file]) { filesWithIssues[issue.file] = 0; } filesWithIssues[issue.file]++; }); const topFiles = Object.entries(filesWithIssues) .sort(([,a], [,b]) => b - a) .slice(0, 5); if (topFiles.length > 0) {" console.log("\n Top Files with Issues:"); topFiles.forEach(([file, count]) => {` console.log(` ${path.relative(this.projectRoot, file)}: ${count} issues`); }); } if (this.stats.fixesApplied > 0) {"` this.log(`\n Applied ${this.stats.fixesApplied} fixes automatically`, "SUCCESS"); } if (this.stats.issuesFound > 0) {"` this.log(`\n ${this.stats.issuesFound} issues remain (some may require manual attention)`, "WARNING"); } } async run() {" this.log(" Starting Code Quality Check", "INFO");` this.log(`Project Root: ${this.projectRoot}`); try { await this.checkDirectory(this.projectRoot); this.generateReport(); if (this.stats.issuesFound === 0) {" this.log(" No code quality issues found!", "SUCCESS"); } } catch (error) {"` this.log(`Error during code quality check: ${error.message}`, "ERROR"); process.exit(1); } }}/ Run the checkerif (require.main === module) { const checker = new CodeQualityChecker(); checker.run().catch(console.error);}module.exports = CodeQualityChecker;"`"`
const fs = require('fs')
const path = require('path')
  log(message, type = 'INFO')
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'FIX': ''
    }[type] || 'ℹ'
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')
      this.log(`Fixed ${fileFixes} issues in ${path.relative(this.projectRoot, filePath)}`, 'FIX'
      this.log(`Found ${fileIssues} issues in ${path.relative(this.projectRoot, filePath)}`, 'WARNING'
    const lines = content.split('\n')
      if (line.includes('console.log') && !line.includes('//')
          type: 'console.log'
          message: 'Console.log statement found'
          severity: 'warning'
      if (line.includes('TODO') || line.includes('FIXME')
          type: 'todo'
          message: 'TODO/FIXME comment found'
          severity: 'info'
      if (line.includes('import') && !line.includes('from')
          type: 'unused_import'
          message: 'Potential unused import'
          severity: 'warning'
          type: 'long_line'
          severity: 'warning'
      if (line.trim() && !line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}') && !line.trim().startsWith('//')
          type: 'missing_semicolon'
          message: 'Missing semicolon'
          severity: 'error'
        });
      }
    });
    return issues;
  }
  applyFix(content, issue) {
    const lines = content.split('\n');
    const lineIndex = issue.line - 1;
    switch (issue.type) {
      case 'console.log':
        // Remove console.log statements
        lines[lineIndex] = lines[lineIndex].replace(/console\.log\([^)]*\);?/g, '');
        break;
      case 'missing_semicolon':
        // Add semicolon if missing
        if (!lines[lineIndex].trim().endsWith(';')) {
          lines[lineIndex] = lines[lineIndex].trim() + ';';
        }
        break;
      default:
        return null;
    }
    return lines.join('\n');
  }
  async checkDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and .next directories
        if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
          await this.checkDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check only relevant file types
        const ext = path.extname(item);
        if (['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'].includes(ext)) {
          await this.checkFile(fullPath);
        }
      }
    }
  }
  generateReport() {
    this.log('\n📊 Code Quality Report', 'INFO');
    this.log('=' .repeat(50));
    // Group issues by type
    const issuesByType = {};
    this.issues.forEach(issue => {
      if (!issuesByType[issue.type]) {
        issuesByType[issue.type] = [];
      }
      issuesByType[issue.type].push(issue);
    });
    Object.entries(issuesByType).forEach(([type, issues]) => {
    });
    // Show top files with issues
    const filesWithIssues = {};
    this.issues.forEach(issue => {
      if (!filesWithIssues[issue.file]) {
        filesWithIssues[issue.file] = 0;
      }
      filesWithIssues[issue.file]++;
    });
    const topFiles = Object.entries(filesWithIssues)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
    if (topFiles.length > 0) {
      topFiles.forEach(([file, count]) => {
        }: ${count} issues`);
      });
    }
    if (this.stats.fixesApplied > 0) {
      this.log(`\n✅ Applied ${this.stats.fixesApplied} fixes automatically`, 'SUCCESS');
    }
    if (this.stats.issuesFound > 0) {
      this.log(`\n⚠️  ${this.stats.issuesFound} issues remain (some may require manual attention)`, 'WARNING');
    }
  }
  async run() {
    this.log('🔍 Starting Code Quality Check', 'INFO');
    this.log(`Project Root: ${this.projectRoot}`);
    try {
      await this.checkDirectory(this.projectRoot);
      this.generateReport();
      if (this.stats.issuesFound === 0) {
        this.log('🎉 No code quality issues found!', 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error during code quality check: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}
// Run the checker
if (require.main === module) {
  const checker = new CodeQualityChecker();
  checker.run().catch(console.error);
}
module.exports = CodeQualityChecker;
    const lines = content.split('\n')
      case 'console.log'
        lines[lineIndex] = lines[lineIndex].replace(/console\.log\([^)]*\);?/g, ''
      case 'missing_semicolon'
        if (!lines[lineIndex].trim().endsWith(';')
          lines[lineIndex] = lines[lineIndex].trim() + ';'
    return lines.join('\n')
        if (item !== 'node_modules' && item !== '.next' && item !== '.git')
        if (['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs')]
    this.log('\n Code Quality Report', 'INFO')
    this.log('=')
// console.log('\n� Issues by Type:')
      console.log('\n Top Files with Issues:')
      this.log(`\n Applied ${this.stats.fixesApplied} fixes automatically`, 'SUCCESS'`)
      this.log(`\n⚠  ${this.stats.issuesFound} issues remain (some may require manual attention)`, 'WARNING'
    this.log(' Starting Code Quality Check', 'INFO')
        this.log('� No code quality issues found!', 'SUCCESS')
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
