#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'merge-conflict-fixer.log');
    this.reportFile = path.join(this.projectRoot, 'error-reports', `merge-conflict-fixer-report-${Date.now()}.json`);
    this.fixesApplied = [];
    this.startTime = Date.now()}
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { "recursive": true })}
    fs.appendFileSync(this.logFile, logMessage + '\n')}
  findFilesWithMergeConflicts() {
    const files = [];
    try {
      // Use git to find files with merge conflict markers
      const gitStatus = execSync('git status --porcelain', { "encoding": 'utf8' });
      const modifiedFiles = gitStatus.split('\n')
        .filter(line => line.trim())
        .map(line => line.substring(3)); // Remove status prefix
      for (const file of modifiedFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          if (this.hasMergeConflictMarkers(content)) {
            files.push(file)}
        }
      }
    } catch (error) {
      this.log(`Error checking git "status": ${error.message}`)}
    // Also scan all files in the project for merge conflict markers
    this.scanDirectoryForMergeConflicts(this.projectRoot, files);
    return files}
  hasMergeConflictMarkers(content) {
    const markers = [];
    return markers.some(marker => content.includes(marker))}
  scanDirectoryForMergeConflicts(dir, files, depth = 0) {
    if (depth > 10) return; // Prevent infinite recursion
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other large directories
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'logs', 'error-reports'].includes(item)) {
            this.scanDirectoryForMergeConflicts(fullPath, files, depth + 1)}
        } else if (stat.isFile()) {
          // Check only text files
          const ext = path.extname(item).toLowerCase();
          if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.txt', '.yml', '.yaml', '.css', '.scss', '.html'].includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.hasMergeConflictMarkers(content)) {
                const relativePath = path.relative(this.projectRoot, fullPath);
                if (!files.includes(relativePath)) {
                  files.push(relativePath)}
              }
            } catch (error) {
              // Skip files that can't be read as text
            }
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`)}
  }
  resolveMergeConflict(filePath) {
    try {
      const fullPath = path.resolve(filePath);
      if (!fs.existsSync(fullPath)) {
        this.log(`File not "found": ${filePath}`);
        return false}
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      // Remove merge conflict markers and keep the HEAD version
      content = this.removeMergeConflictMarkers(content);
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        this.fixesApplied.push({
          "type": 'merge_conflict',
          "file": filePath,
          "description": 'Removed merge conflict markers',
          "timestamp": new Date().toISOString()
        });
        this.log(`Fixed merge conflict "in": ${filePath}`);
        return true}
      return false} catch (error) {
      this.log(`Error resolving merge conflict in ${filePath}: ${error.message}`);
      return false}
  }
  removeMergeConflictMarkers(content) {
    // Remove all merge conflict markers and keep HEAD version
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let keepLines = true;
    for (const line of lines) {
        inConflict = true;
        keepLines = true; // Keep HEAD version by default
        continue}
        inConflict = false;
        keepLines = true;
        continue}
      if (!inConflict || keepLines) {
        result.push(line)}
    }
    return result.join('\n')}
  async run() {
    this.log('🚀 Starting Merge Conflict Fixer...');
    try {
      // Find files with merge conflicts
      const conflictedFiles = this.findFilesWithMergeConflicts();
      if (conflictedFiles.length === 0) {
        this.log('✅ No merge conflicts found');
        return}
      this.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
      // Fix each merge conflict
      let fixedCount = 0;
      for (const file of conflictedFiles) {
        if (this.resolveMergeConflict(file)) {
          fixedCount++}
      }
      this.log(`✅ Fixed ${fixedCount} merge conflicts`);
      // Generate report
      this.generateReport(fixedCount, conflictedFiles.length)} catch (error) {
      this.log(`❌ Error in merge conflict "fixer": ${error.message}`)}
  }
  generateReport(fixedCount, totalCount) {
    const duration = Date.now() - this.startTime;
    const report = {
      "timestamp": new Date().toISOString(),
      "duration": `${duration}ms`,
      "summary": {
        totalConflictsFound: totalCount,
        "conflictsFixed": fixedCount,
        "successRate": totalCount > 0 ? ((fixedCount / totalCount) * 100).toFixed(2) + '%' : '0%'
      },
      "fixesApplied": this.fixesApplied,
      "metadata": {
        script: 'merge-conflict-fixer',
        "version": '1.0.0',
        "nodeVersion": process.version,
        "platform": process.platform
      }
    };
    // Ensure error-reports directory exists
    const reportsDir = path.dirname(this.reportFile);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { "recursive": true })}
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report "generated": ${this.reportFile}`)}
}
// Run the fixer
const fixer = new MergeConflictFixer();
fixer.run().catch(error => {
  console.error('Fatal "error": ', error);
  process.exit(1)});
// Handle graceful shutdown
process.on('SIGINT', () => {
  process.exit(0)});
process.on('SIGTERM', () => {
  process.exit(0)});
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class MergeConflictFixer { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "merge-conflict-fixer.log");" this.reportFile = path.join(this.projectRoot, "error-reports", `merge-conflict-fixer-report-${Date.now()}.json`); this.fixesApplied = []; this.startTime = Date.now()} log(message) { const timestamp = new Date().toISOString();` const logMessage = `[${timestamp}] ${message}`; console.log(logMessage); / Ensure logs directory exists const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) { fs.mkdirSync(logsDir, { recursive: true })} " fs.appendFileSync(this.logFile, logMessage + "\n")} findFilesWithMergeConflicts() { const files = []; try { / Use git to find files with merge conflict markers"" const gitStatus = execSync("git status --porcelain", { encoding: "utf8" });" const modifiedFiles = gitStatus.split("\n") .filter(line => line.trim()) .map(line => line.substring(3)); / Remove status prefix for (const file of modifiedFiles) { if (fs.existsSync(file)) {" const content = fs.readFileSync(file, "utf8"); if (this.hasMergeConflictMarkers(content)) { files.push(file)} } } } catch (error) {"` this.log(`Error checking git status: ${error.message}`)} / Also scan all files in the project for merge conflict markers this.scanDirectoryForMergeConflicts(this.projectRoot, files); return files} hasMergeConflictMarkers(content) { const markers = []; return markers.some(marker => content.includes(marker))} scanDirectoryForMergeConflicts(dir, files, depth = 0) { if (depth > 10) return; / Prevent infinite recursion try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { / Skip node_modules, .git, and other large directories" if (!["node_modules", ".git", "dist", "build", "out", "logs", "error-reports"].includes(item)) { this.scanDirectoryForMergeConflicts(fullPath, files, depth + 1)} } else if (stat.isFile()) { / Check only text files const ext = path.extname(item).toLowerCase();" if ([".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".txt", ".yml", ".yaml", ".css", ".scss", ".html"].includes(ext)) { try {" const content = fs.readFileSync(fullPath, "utf8"); if (this.hasMergeConflictMarkers(content)) { const relativePath = path.relative(this.projectRoot, fullPath); if (!files.includes(relativePath)) { files.push(relativePath)} } } catch (error) {" / Skip files that can"t be read as text } } } } } catch (error) {` this.log(`Error scanning directory ${dir}: ${error.message}`)} } resolveMergeConflict(filePath) { try { const fullPath = path.resolve(filePath); if (!fs.existsSync(fullPath)) {"` this.log(`File not found: ${filePath}`); return false}" let content = fs.readFileSync(fullPath, "utf8"); const originalContent = content; / Remove merge conflict markers and keep the HEAD version content = this.removeMergeConflictMarkers(content); if (content !== originalContent) {" fs.writeFileSync(fullPath, content, "utf8"); this.fixesApplied.push({"" type: "merge_conflict"," file: filePath,"" description: "Removed merge conflict markers"," timestamp: new Date().toISOString() });"` this.log(`Fixed merge conflict in: ${filePath}`); return true} return false} catch (error) {` this.log(`Error resolving merge conflict in ${filePath}: ${error.message}`); return false} } removeMergeConflictMarkers(content) { / Remove all merge conflict markers and keep HEAD version" const lines = content.split("\n"); const result = []; let inConflict = false; let keepLines = true; for (const line of lines) { inConflict = true; keepLines = true; / Keep HEAD version by default continue} inConflict = false; keepLines = true; continue} if (!inConflict | keepLines) { result.push(line)} }" return result.join("\n")} async run() {" this.log(" Starting Merge Conflict Fixer."); try { / Find files with merge conflicts const conflictedFiles = this.findFilesWithMergeConflicts(); if (conflictedFiles.length === 0) {" this.log(" No merge conflicts found"); return}` this.log(` Found ${conflictedFiles.length} files with merge conflicts`); / Fix each merge conflict let fixedCount = 0; for (const file of conflictedFiles) { if (this.resolveMergeConflict(file)) { fixedCount++} }` this.log(` Fixed ${fixedCount} merge conflicts`); / Generate report this.generateReport(fixedCount, conflictedFiles.length)} catch (error) {"` this.log(` Error in merge conflict fixer: ${error.message}`)} } generateReport(fixedCount, totalCount) { const duration = Date.now() - this.startTime; const report = {" timestamp: new Date().toISOString(),"` duration: `${duration}ms`," summary: { totalConflictsFound: totalCount," conflictsFixed: fixedCount,"" successRate: totalCount > 0 ? ((fixedCount / totalCount) * 100).toFixed(2) + "%" : "0%" }," fixesApplied: this.fixesApplied," metadata: {" script: "merge-conflict-fixer","" version: "1.0.0"," nodeVersion: process.version," platform: process.platform } }; / Ensure error-reports directory exists const reportsDir = path.dirname(this.reportFile); if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true })} fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));"` this.log(` Report generated: ${this.reportFile}`)}}/ Run the fixerconst fixer = new MergeConflictFixer();fixer.run().catch(error => {"" console.error("Fatal error: ", error); process.exit(1)});/ Handle graceful shutdown"process.on("SIGINT", () => {" console.log("\n Merge Conflict Fixer stopped by user"); process.exit(0)});"process.on("SIGTERM", () => {" console.log("\n Merge Conflict Fixer stopped by system"); process.exit(0)});""`"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.logFile = path.join(this.projectRoot, 'logs', 'merge-conflict-fixer.log')
    this.reportFile = path.join(this.projectRoot, 'error-reports')
    fs.appendFileSync(this.logFile, logMessage + '\n')
      const gitStatus = execSync('git status --porcelain', { "encoding"})
          "type"
          "description"
        "successRate"
        "version"
  console.error('Fatal "error")
  console.error('Fatal "error")
