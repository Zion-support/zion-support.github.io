#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileCleanupAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'file-cleanup-automation.log');
    this.cleanupReportFile = path.join(this.projectRoot, 'logs', 'file-cleanup-report.json');
    this.cleanedFiles = [];
    this.failedCleanups = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async runCleanup() {
    this.log('🧹 Starting comprehensive file cleanup...');
    
    const cleanupResults = {
      backupFiles: await this.cleanupBackupFiles(),
      temporaryFiles: await this.cleanupTemporaryFiles(),
      buildArtifacts: await this.cleanupBuildArtifacts(),
      duplicateFiles: await this.cleanupDuplicateFiles(),
      unusedFiles: await this.cleanupUnusedFiles(),
      largeFiles: await this.cleanupLargeFiles()
    };
    
    return cleanupResults;
  }

  async cleanupBackupFiles() {
    this.log('Cleaning up backup files...');
    
    const backupPatterns = [
      '*.backup.*',
      '*.backup',
      '*_backup.*',
      '*_backup',
      '*.bak',
      '*.old',
      '*.orig'
    ];
    
    let cleanedCount = 0;
    const cleanedFiles = [];
    
    for (const pattern of backupPatterns) {
      try {
        const files = this.findFilesByPattern(pattern);
        
        for (const file of files) {
          if (await this.safeDeleteFile(file)) {
            cleanedCount++;
            cleanedFiles.push({
              path: file,
              type: 'backup',
              size: this.getFileSize(file),
              reason: 'Backup file cleanup'
            });
          }
        }
      } catch (error) {
        this.log(`Error cleaning up backup files with pattern ${pattern}: ${error.message}`, 'WARN');
      }
    }
    
    this.log(`Cleaned up ${cleanedCount} backup files`);
    return { cleanedCount, cleanedFiles };
  }

  async cleanupTemporaryFiles() {
    this.log('Cleaning up temporary files...');
    
    const tempPatterns = [
      '*.tmp',
      '*.temp',
      'temp_*',
      'tmp_*',
      '.DS_Store',
      'Thumbs.db',
      '*.log.tmp',
      '*.cache'
    ];
    
    let cleanedCount = 0;
    const cleanedFiles = [];
    
    for (const pattern of tempPatterns) {
      try {
        const files = this.findFilesByPattern(pattern);
        
        for (const file of files) {
          if (await this.safeDeleteFile(file)) {
            cleanedCount++;
            cleanedFiles.push({
              path: file,
              type: 'temporary',
              size: this.getFileSize(file),
              reason: 'Temporary file cleanup'
            });
          }
        }
      } catch (error) {
        this.log(`Error cleaning up temporary files with pattern ${pattern}: ${error.message}`, 'WARN');
      }
    }
    
    this.log(`Cleaned up ${cleanedCount} temporary files`);
    return { cleanedCount, cleanedFiles };
  }

  async cleanupBuildArtifacts() {
    this.log('Cleaning up build artifacts...');
    
    const buildDirs = [
      'dist',
      'build',
      'out',
      '.next',
      '.nuxt',
      'coverage',
      '.nyc_output'
    ];
    
    let cleanedCount = 0;
    const cleanedFiles = [];
    
    for (const dir of buildDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      
      if (fs.existsSync(dirPath)) {
        try {
          const dirSize = this.getDirectorySize(dirPath);
          
          if (await this.safeDeleteDirectory(dirPath)) {
            cleanedCount++;
            cleanedFiles.push({
              path: dir,
              type: 'build-artifact',
              size: dirSize,
              reason: 'Build artifact cleanup'
            });
          }
        } catch (error) {
          this.log(`Error cleaning up build directory ${dir}: ${error.message}`, 'WARN');
        }
      }
    }
    
    this.log(`Cleaned up ${cleanedCount} build artifact directories`);
    return { cleanedCount, cleanedFiles };
  }

  async cleanupDuplicateFiles() {
    this.log('Cleaning up duplicate files...');
    
    const duplicateGroups = this.findDuplicateFiles();
    let cleanedCount = 0;
    const cleanedFiles = [];
    
    for (const group of duplicateGroups) {
      if (group.files.length > 1) {
        // Keep the first file, delete the rest
        const filesToDelete = group.files.slice(1);
        
        for (const file of filesToDelete) {
          if (await this.safeDeleteFile(file)) {
            cleanedCount++;
            cleanedFiles.push({
              path: file,
              type: 'duplicate',
              size: this.getFileSize(file),
              reason: 'Duplicate file cleanup'
            });
          }
        }
      }
    }
    
    this.log(`Cleaned up ${cleanedCount} duplicate files`);
    return { cleanedCount, cleanedFiles };
  }

  async cleanupUnusedFiles() {
    this.log('Cleaning up unused files...');
    
    const unusedFiles = this.findUnusedFiles();
    let cleanedCount = 0;
    const cleanedFiles = [];
    
    for (const file of unusedFiles) {
      if (await this.safeDeleteFile(file)) {
        cleanedCount++;
        cleanedFiles.push({
          path: file,
          type: 'unused',
          size: this.getFileSize(file),
          reason: 'Unused file cleanup'
        });
      }
    }
    
    this.log(`Cleaned up ${cleanedCount} unused files`);
    return { cleanedCount, cleanedFiles };
  }

  async cleanupLargeFiles() {
    this.log('Cleaning up large files...');
    
    const largeFiles = this.findLargeFiles();
    let cleanedCount = 0;
    const cleanedFiles = [];
    
    for (const file of largeFiles) {
      // Only delete files larger than 10MB that are not essential
      if (file.size > 10 * 1024 * 1024 && this.isSafeToDelete(file.path)) {
        if (await this.safeDeleteFile(file.path)) {
          cleanedCount++;
          cleanedFiles.push({
            path: file.path,
            type: 'large',
            size: file.size,
            reason: 'Large file cleanup'
          });
        }
      }
    }
    
    this.log(`Cleaned up ${cleanedCount} large files`);
    return { cleanedCount, cleanedFiles };
  }

  findFilesByPattern(pattern) {
    const files = [];
    
    try {
      // Simple pattern matching - in practice, you'd use glob or similar
      if (pattern.includes('*')) {
        const basePattern = pattern.replace(/\*/g, '');
        this.searchFilesRecursively(this.projectRoot, basePattern, files);
      }
    } catch (error) {
      this.log(`Error finding files with pattern ${pattern}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  searchFilesRecursively(dir, pattern, files) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.searchFilesRecursively(itemPath, pattern, files);
        } else if (item.includes(pattern)) {
          files.push(itemPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  findDuplicateFiles() {
    const fileHashes = new Map();
    const duplicateGroups = [];
    
    try {
      this.scanForDuplicates(this.projectRoot, fileHashes);
      
      // Group files by hash
      for (const [hash, files] of fileHashes.entries()) {
        if (files.length > 1) {
          duplicateGroups.push({
            hash,
            files,
            size: this.getFileSize(files[0])
          });
        }
      }
    } catch (error) {
      this.log(`Error finding duplicate files: ${error.message}`, 'WARN');
    }
    
    return duplicateGroups;
  }

  scanForDuplicates(dir, fileHashes) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.scanForDuplicates(itemPath, fileHashes);
        } else if (stat.size > 0) {
          // Simple hash based on file size and first few bytes
          const hash = this.getSimpleFileHash(itemPath);
          if (!fileHashes.has(hash)) {
            fileHashes.set(hash, []);
          }
          fileHashes.get(hash).push(itemPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  getSimpleFileHash(filePath) {
    try {
      const stat = fs.statSync(filePath);
      const buffer = fs.readFileSync(filePath, { start: 0, end: Math.min(1024, stat.size) });
      return `${stat.size}-${buffer.toString('hex').substring(0, 16)}`;
    } catch (error) {
      return `error-${Date.now()}`;
    }
  }

  findUnusedFiles() {
    const unusedFiles = [];
    
    // Check for common unused file patterns
    const unusedPatterns = [
      '*.test.js.bak',
      '*.spec.js.bak',
      '*.min.js.map',
      '*.css.map',
      '*.ts.map',
      '*.js.map'
    ];
    
    for (const pattern of unusedPatterns) {
      const files = this.findFilesByPattern(pattern);
      unusedFiles.push(...files);
    }
    
    return unusedFiles;
  }

  findLargeFiles() {
    const largeFiles = [];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    try {
      this.scanForLargeFiles(this.projectRoot, largeFiles, maxSize);
      
      // Sort by size (largest first)
      largeFiles.sort((a, b) => b.size - a.size);
    } catch (error) {
      this.log(`Error finding large files: ${error.message}`, 'WARN');
    }
    
    return largeFiles;
  }

  scanForLargeFiles(dir, largeFiles, maxSize) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.scanForLargeFiles(itemPath, largeFiles, maxSize);
        } else if (stat.size > maxSize) {
          largeFiles.push({
            path: itemPath,
            size: stat.size
          });
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  isSafeToDelete(filePath) {
    // Define safe patterns for deletion
    const safePatterns = [
      /\.log$/,
      /\.tmp$/,
      /\.cache$/,
      /\.bak$/,
      /\.backup$/,
      /\.old$/,
      /\.orig$/,
      /\.map$/,
      /\.min\.js$/,
      /\.min\.css$/
    ];
    
    // Define unsafe patterns (never delete)
    const unsafePatterns = [
      /package\.json$/,
      /package-lock\.json$/,
      /yarn\.lock$/,
      /tsconfig\.json$/,
      /\.gitignore$/,
      /README\.md$/,
      /\.env$/,
      /\.env\.local$/,
      /\.env\.production$/
    ];
    
    const fileName = path.basename(filePath);
    
    // Check unsafe patterns first
    for (const pattern of unsafePatterns) {
      if (pattern.test(fileName)) {
        return false;
      }
    }
    
    // Check safe patterns
    for (const pattern of safePatterns) {
      if (pattern.test(fileName)) {
        return true;
      }
    }
    
    // Default to unsafe
    return false;
  }

  async safeDeleteFile(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        
        if (stats.isFile()) {
          fs.unlinkSync(filePath);
          this.log(`Deleted file: ${filePath}`);
          return true;
        }
      }
      return false;
    } catch (error) {
      this.log(`Failed to delete file ${filePath}: ${error.message}`, 'ERROR');
      this.failedCleanups.push({
        path: filePath,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async safeDeleteDirectory(dirPath) {
    try {
      if (fs.existsSync(dirPath)) {
        const stats = fs.statSync(dirPath);
        
        if (stats.isDirectory()) {
          fs.rmSync(dirPath, { recursive: true, force: true });
          this.log(`Deleted directory: ${dirPath}`);
          return true;
        }
      }
      return false;
    } catch (error) {
      this.log(`Failed to delete directory ${dirPath}: ${error.message}`, 'ERROR');
      this.failedCleanups.push({
        path: dirPath,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  getFileSize(filePath) {
    try {
      const stats = fs.statSync(filePath);
      return stats.size;
    } catch (error) {
      return 0;
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      this.log(`Error calculating directory size: ${error.message}`, 'WARN');
    }
    
    return totalSize;
  }

  async generateReport(cleanupResults) {
    const totalCleaned = Object.values(cleanupResults).reduce((sum, result) => sum + result.cleanedCount, 0);
    const totalSize = Object.values(cleanupResults).reduce((sum, result) => {
      return sum + result.cleanedFiles.reduce((fileSum, file) => fileSum + file.size, 0);
    }, 0);
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesCleaned: totalCleaned,
        totalSizeCleaned: totalSize,
        totalSizeCleanedMB: Math.round(totalSize / (1024 * 1024) * 100) / 100,
        failedCleanups: this.failedCleanups.length
      },
      cleanupResults,
      cleanedFiles: this.cleanedFiles,
      failedCleanups: this.failedCleanups,
      recommendations: this.generateCleanupRecommendations(cleanupResults)
    };
    
    // Save report
    fs.writeFileSync(this.cleanupReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Cleanup report generated: ${totalCleaned} files cleaned, ${report.summary.totalSizeCleanedMB}MB freed`);
    return report;
  }

  generateCleanupRecommendations(cleanupResults) {
    const recommendations = [];
    
    // Backup file recommendations
    if (cleanupResults.backupFiles.cleanedCount > 0) {
      recommendations.push({
        category: 'backup-files',
        priority: 'low',
        message: `${cleanupResults.backupFiles.cleanedCount} backup files were cleaned up`,
        action: 'Consider using version control instead of backup files'
      });
    }
    
    // Temporary file recommendations
    if (cleanupResults.temporaryFiles.cleanedCount > 0) {
      recommendations.push({
        category: 'temporary-files',
        priority: 'medium',
        message: `${cleanupResults.temporaryFiles.cleanedCount} temporary files were cleaned up`,
        action: 'Review build processes to avoid creating unnecessary temp files'
      });
    }
    
    // Build artifact recommendations
    if (cleanupResults.buildArtifacts.cleanedCount > 0) {
      recommendations.push({
        category: 'build-artifacts',
        priority: 'medium',
        message: `${cleanupResults.buildArtifacts.cleanedCount} build artifact directories were cleaned up`,
        action: 'Add build directories to .gitignore to prevent accidental commits'
      });
    }
    
    // Duplicate file recommendations
    if (cleanupResults.duplicateFiles.cleanedCount > 0) {
      recommendations.push({
        category: 'duplicate-files',
        priority: 'high',
        message: `${cleanupResults.duplicateFiles.cleanedCount} duplicate files were cleaned up`,
        action: 'Review development workflow to prevent duplicate file creation'
      });
    }
    
    // Large file recommendations
    if (cleanupResults.largeFiles.cleanedCount > 0) {
      recommendations.push({
        category: 'large-files',
        priority: 'medium',
        message: `${cleanupResults.largeFiles.cleanedCount} large files were cleaned up`,
        action: 'Use .git-lfs for large files and optimize asset sizes'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting File Cleanup Automation');
    
    try {
      // Run cleanup
      const cleanupResults = await this.runCleanup();
      
      // Log summary
      const totalCleaned = Object.values(cleanupResults).reduce((sum, result) => sum + result.cleanedCount, 0);
      const totalSize = Object.values(cleanupResults).reduce((sum, result) => {
        return sum + result.cleanedFiles.reduce((fileSum, file) => fileSum + file.size, 0);
      }, 0);
      
      this.log(`📊 Cleanup summary:`);
      this.log(`  - Total files cleaned: ${totalCleaned}`);
      this.log(`  - Total size freed: ${Math.round(totalSize / (1024 * 1024) * 100) / 100}MB`);
      this.log(`  - Failed cleanups: ${this.failedCleanups.length}`);
      
      if (totalCleaned === 0) {
        this.log('✅ No files needed cleanup');
        return;
      }
      
      // Generate final report
      const report = await this.generateReport(cleanupResults);
      
      this.log(`✅ File cleanup completed! Freed ${report.summary.totalSizeCleanedMB}MB of disk space`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} cleanup recommendations:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in file cleanup automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the file cleanup automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new FileCleanupAutomation();
  automation.run().catch(console.error);
}

export default FileCleanupAutomation;