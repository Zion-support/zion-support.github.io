#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class CorruptedFilesCleaner {
  constructor() {
    this.projectRoot = process.cwd();
    this.corruptedFiles = [];
    this.reportFile = path.join(this.projectRoot, 'corrupted-files-report.json')}

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}

  isFileCorrupted(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common corruption patterns
      const corruptionPatterns = [
        /import.*\{[^}]*\}[^]*$/m, // Missing semicolon after import
        /export.*\{[^}]*\}[^]*$/m, // Missing semicolon after export
        /['"]\s*;\s*['"]/, // Semicolons inside strings
        /[^]\s*;\s*['"]/, // Semicolons before strings
        /import.*from.*['"][^'"]*['"]\s*[^]/, // Import without semicolon
        /export.*default.*function.*\{[^}]*$/, // Incomplete function
        /return\s*\(\s*$/, // Incomplete return statement
        /<[^>]*>\s*$/, // Incomplete JSX
        /const\s+\w+\s*=\s*\[[^\]]*$/, // Incomplete array
        /const\s+\w+\s*=\s*\{[^}]*$/, // Incomplete object
      ];

      // Check if file has multiple corruption patterns
      let corruptionCount = 0;
      for (const pattern of corruptionPatterns) {
        if (pattern.test(content)) {
          corruptionCount++}
      }

      // If more than 3 corruption patterns, consider it corrupted
      return corruptionCount > 3} catch (error) {
      return true; // If we can't read the file, it's corrupted
    }
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.getAllFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
    
    return files}

  async cleanCorruptedFiles() {
    this.log('🔍 Scanning for corrupted files...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    
    const allFiles = [
      ...this.getAllFiles(srcDir),
      ...this.getAllFiles(pagesDir)
    ];

    this.log(`📁 Found ${allFiles.length} files to check`);

    for (const file of allFiles) {
      if (this.isFileCorrupted(file)) {
        this.corruptedFiles.push(file);
        this.log(`❌ Corrupted: ${file}`)}
    }

    this.log(`🔍 Found ${this.corruptedFiles.length} corrupted files`);

    // Create backup directory
    const backupDir = path.join(this.projectRoot, 'corrupted-files-backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir { recursive: true })}

    // Move corrupted files to backup
    for (const file of this.corruptedFiles) {
      const relativePath = path.relative(this.projectRoot, file);
      const backupPath = path.join(backupDir, relativePath);
      const backupDirPath = path.dirname(backupPath);
      
      if (!fs.existsSync(backupDirPath)) {
        fs.mkdirSync(backupDirPath { recursive: true })}
      
      try {
        fs.copyFileSync(file, backupPath);
        fs.unlinkSync(file);
        this.log(`📦 Moved to backup: ${file}`)} catch (error) {
        this.log(`❌ Error moving ${file}: ${error.message}`)}
    }

    return {
      totalFiles: allFiles.length,
      corruptedFiles: this.corruptedFiles.length,
      corruptedFileList: this.corruptedFiles
    }}

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: results,
      corruptedFiles: this.corruptedFiles
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
    return report}

  async run() {
    try {
      const results = await this.cleanCorruptedFiles();
      const report = this.generateReport(results);
      
      this.log('🎉 Corrupted files cleanup completed');
      return report} catch (error) {
      this.log(`💥 Corrupted files cleanup failed: ${error.message}`);
      throw error}
  }
}

// Run the corrupted files cleaner
const cleaner = new CorruptedFilesCleaner();
cleaner.run().then(report => {
  console.log('✅ Corrupted files cleanup completed successfully');
  process.exit(0)}).catch(error => {
  console.error('❌ Corrupted files cleanup failed:', error.message);
  process.exit(1)});