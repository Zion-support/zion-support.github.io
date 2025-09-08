#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class MergeConflictCleaner {
  constructor() {
    this.reportsDir = path.join(__dirname, '..', 'merge-cleanup-reports');
    this.logFile = path.join(this.reportsDir, 'merge-cleanup.log');
    this.cleanedFiles = [];
    this.errors = [];
    // Create reports directory
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    const logMessage = `[${timestamp}] ${prefix} ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }
  async findFilesWithMergeConflicts() {
    this.log('🔍 Scanning for files with merge conflicts...');
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const files = [];
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            // Skip node_modules, .git, and other common directories
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'error');
      }
    };
    scanDirectory(process.cwd());
    return files;
  }
  cleanMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let cleanedContent = content;
      // Remove merge conflict markers and keep HEAD version by default
      const lines = cleanedContent.split('\n');
      const cleanedLines = [];
      let inConflict = false;
      let keepCurrent = true;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
          inConflict = true;
          keepCurrent = true;
          continue;
        }
          inConflict = false;
          keepCurrent = true;
          continue;
        }
        if (inConflict) {
          if (keepCurrent) {
            cleanedLines.push(line);
          }
        } else {
          cleanedLines.push(line);
        }
      }
      cleanedContent = cleanedLines.join('\n');
      // Additional cleanup for common issues
      cleanedContent = cleanedContent
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
        .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
        .replace(/,\s*]/g, ']') // Remove trailing commas before closing brackets
        .replace(/\s+$/gm, '') // Remove trailing whitespace
        .replace(/\n{3}/g, '\n\n'); // Limit consecutive newlines to 2
      if (cleanedContent !== content) {
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        this.cleanedFiles.push(filePath);
        this.log(`Cleaned merge conflicts in ${filePath}`, 'success');
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error cleaning file ${filePath}: ${error.message}`, 'error');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }
  async run() {
    this.log('🚀 Starting Merge Conflict Cleaner...');
    this.log('Zion Tech Group - Merge Conflict Resolution');
    try {
      const files = await this.findFilesWithMergeConflicts();
      this.log(`Found ${files.length} files with merge conflicts`);
      let totalCleaned = 0;
      for (const file of files) {
        this.log(`Processing ${file}...`);
        const cleaned = this.cleanMergeConflicts(file);
        if (cleaned) {
          totalCleaned++;
        }
      }
      this.log(`✅ Merge conflict cleanup completed!`);
      this.log(`📊 Summary:`);
      this.log(`   - Files checked: ${files.length}`);
      this.log(`   - Files cleaned: ${totalCleaned}`);
      this.log(`   - Errors encountered: ${this.errors.length}`);
      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        filesChecked: files.length,
        filesCleaned: totalCleaned,
        cleanedFiles: this.cleanedFiles,
        errors: this.errors
      };
      fs.writeFileSync(
        path.join(this.reportsDir, 'merge-cleanup-report.json'),
        JSON.stringify(report, null, 2)
      );
      this.log(`📄 Report saved to ${this.reportsDir}/merge-cleanup-report.json`);
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}
// Run the cleaner
const cleaner = new MergeConflictCleaner();
cleaner.run().catch(console.error);