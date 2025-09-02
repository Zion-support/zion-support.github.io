#!/usr/bin/env node

import fs from
  'fs';
import path from
  'path';
import { execSync } from
  'child_process';
import { fileURLToPath } from
  'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LogCleaner {
  constructor() {
    this.projectRoot = path.join(__dirname,
  '..');
    this.logDir = path.join(this.projectRoot,
  'logs');
    this.errorReportDir = path.join(this.projectRoot,
  'error-reports');
    this.maxLogAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    this.maxLogSize = 100 * 1024 * 1024; // 100MB
    this.maxTotalSize = 500 * 1024 * 1024; // 500MB total
    this.cleanedFiles = [];
    this.archivedFiles = [];
    this.errors = [];
  }

  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };

    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);

    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }

    // Write to cleanup log (don
  't clean this one)
    const logFile = path.join(this.logDir, 'log-cleaner.log
  ');
    if (fs.existsSync(logFile)) {
      fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n
  ');
    }
  }

  async cleanOldLogs() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      if (!fs.existsSync(this.logDir)) {        this.log('info
  ', 'Log directory does not exist
  ');
        return;
      }

      const files = fs.readdirSync(this.logDir);
      const now = Date.now();

      for (const file of files) {
        // Don't clean the log-cleaner
  's own log
        if (file === 'log-cleaner.log
  ') {
          continue;
        }

        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);

        // Check if file is older than maxLogAge
        if (now - stats.mtime.getTime() > this.maxLogAge) {
          try {
            fs.unlinkSync(filePath);
            this.cleanedFiles.push({
              file,
              size: stats.size,
ursor/automate-test-fix-improve-and-merge-code-99d1
          } catch (error) {            this.log('error
  ', `Failed to delete old log file: ${file}`, error);
            this.errors.push(`Failed to delete ${file}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      this.log('error
  ', 'Failed to clean old logs
  ', error);
      this.errors.push(`Failed to clean old logs: ${error.message}`);
    }
  }

  async cleanLargeLogs() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      if (!fs.existsSync(this.logDir)) {        return;
      }

      const files = fs.readdirSync(this.logDir);

      for (const file of files) {
        // Don't clean the log-cleaner
  's own log
        if (file === 'log-cleaner.log
  ') {
          continue;
        }

        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);

        // Check if file is larger than maxLogSize
        if (stats.size > this.maxLogSize) {
          try {
            // Archive large files instead of deleting
            await this.archiveLogFile(filePath, file, stats.size);
          } catch (error) {
ursor/automate-test-fix-improve-and-merge-code-99d1
            this.errors.push(`Failed to archive ${file}: ${error.message}`);          }
        }
      }
    } catch (error) {
      this.log('error
  ', 'Failed to clean large logs
  ', error);
      this.errors.push(`Failed to clean large logs: ${error.message}`);
    }
  }

  async archiveLogFile(filePath, fileName, fileSize) {
ursor/automate-test-fix-improve-and-merge-code-99d1
    // Create archive directory if it doesn't exist    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir, { recursive: true });
    }

    const archivePath = path.join(archiveDir, `${fileName}.${timestamp}.gz`);

    try {
      // Compress and move to archive
      execSync(`gzip -c "${filePath}" > "${archivePath}"`, { timeout: 60000 });

      // Remove original file
      fs.unlinkSync(filePath);

      this.archivedFiles.push({
        originalFile: fileName,
        archiveFile: path.basename(archivePath),
        originalSize: fileSize,
ursor/automate-test-fix-improve-and-merge-code-99d1
    } catch (error) {      this.log(
  'error', `Failed to archive log file: ${fileName}`, error);
      throw error;
    }
  }

  async manageTotalLogSize() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      if (!fs.existsSync(this.logDir)) {        return;
      }

      // Calculate total size
      let totalSize = 0;
      const files = [];

      const calculateDirSize = dir => {
        const dirFiles = fs.readdirSync(dir);
        for (const file of dirFiles) {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);

          if (stats.isDirectory()) {
            calculateDirSize(filePath);
          } else {
            totalSize += stats.size;
            files.push({
              path: filePath,
              size: stats.size,
              mtime: stats.mtime,
              name: file,
            });
          }
        }
      };

      calculateDirSize(this.logDir);
ursor/automate-test-fix-improve-and-merge-code-99d1
      // If total size exceeds limit, delete oldest files      if (totalSize > this.maxTotalSize) {
        // Sort files by modification time (oldest first)
        files.sort((a, b) => a.mtime - b.mtime);

        let sizeToRemove = totalSize - this.maxTotalSize;

        for (const file of files) {
          // Don
  't delete the log-cleaner's own log
          if (file.name ===
  'log-cleaner.log') {
            continue;
          }

          if (sizeToRemove <= 0) {
            break;
          }

          try {
            fs.unlinkSync(file.path);
            sizeToRemove -= file.size;

            this.cleanedFiles.push({
              file: file.name,
              size: file.size,
ursor/automate-test-fix-improve-and-merge-code-99d1
            this.errors.push(`Failed to delete ${file.name}: ${error.message}`);          }
        }
      }
    } catch (error) {
      this.log(
  'error',
  'Failed to manage total log size', error);
      this.errors.push(`Failed to manage total log size: ${error.message}`);
    }
  }

  async cleanErrorReports() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      if (!fs.existsSync(this.errorReportDir)) {        this.log(
  'info',
  'Error reports directory does not exist');
        return;
      }

      const files = fs.readdirSync(this.errorReportDir);
      const now = Date.now();

      for (const file of files) {
        const filePath = path.join(this.errorReportDir, file);
        const stats = fs.statSync(filePath);

        // Keep error reports for 14 days (longer than logs)
        const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000;

        if (now - stats.mtime.getTime() > maxErrorReportAge) {
          try {
            fs.unlinkSync(filePath);
            this.cleanedFiles.push({
              file,
              size: stats.size,
ursor/automate-test-fix-improve-and-merge-code-99d1
            });            this.log(
  'info', `Deleted old error report: ${file}`);
          } catch (error) {
            this.log(
ursor/automate-test-fix-improve-and-merge-code-99d1
          }        }
      }
    } catch (error) {
      this.log(
  'error',
  'Failed to clean error reports', error);
      this.errors.push(`Failed to clean error reports: ${error.message}`);
    }
  }

  async rotatePM2Logs() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
    } catch (error) {      this.log('error
  ', 'Failed to rotate PM2 logs
  ', error);
      this.errors.push(`Failed to rotate PM2 logs: ${error.message}`);
    }
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path.join(
      this.logDir,
      `log-cleaner-report-${Date.now()}.json`
    );

    const report = {
      timestamp,
      summary: {
        cleanedFiles: this.cleanedFiles.length,
        archivedFiles: this.archivedFiles.length,
        errors: this.errors.length,
        totalSpaceReclaimed: this.cleanedFiles.reduce(
          (sum, file) => sum + (file.size || 0),
          0
        ),
      },
      cleanedFiles: this.cleanedFiles,
      archivedFiles: this.archivedFiles,
      errors: this.errors,
ursor/automate-test-fix-improve-and-merge-code-99d1
    };

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
ursor/automate-test-fix-improve-and-merge-code-99d1
    return report;  }

  async run() {
    try {
ursor/automate-test-fix-improve-and-merge-code-99d1
      // Ensure log directory exists      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
      }

      // Run cleanup tasks
      await this.cleanOldLogs();
      await this.cleanLargeLogs();
      await this.manageTotalLogSize();
      await this.cleanErrorReports();
      await this.rotatePM2Logs();

      // Generate report
      const report = await this.generateReport();
ursor/automate-test-fix-improve-and-merge-code-99d1
      return report;    } catch (error) {
      this.log('error
  ', 'Log cleanup failed
  ', error);
      throw error;
    }
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const cleaner = new LogCleaner();
ursor/automate-test-fix-improve-and-merge-code-99d1
}
export default LogCleaner;
