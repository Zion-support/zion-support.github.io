=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LogCleaner {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.logDir = path.join(this.projectRoot, 'logs');
    this.errorReportDir = path.join(this.projectRoot, 'error-reports');
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
      data
    };
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
    // Write to cleanup log (don't clean this one)
    const logFile = path.join(this.logDir, 'log-cleaner.log');
    if (fs.existsSync(logFile)) {
      fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    }
  }

  async cleanOldLogs() {
    try {
      this.log('info', 'Cleaning old log files...');
      if (!fs.existsSync(this.logDir)) {
        this.log('info', 'Log directory does not exist');
        return;
      }
      const files = fs.readdirSync(this.logDir);
      const now = Date.now();
      for (const file of files) {
        // Don't clean the log-cleaner's own log
        if (file === 'log-cleaner.log') {
          continue;
        }
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
        // Check if file is older than maxLogAge
        if (now - stats && stats.mtime.getTime() > this && this.maxLogAge) {
          try {
            fs && fs.unlinkSync(filePath);
            this && this.cleanedFiles.push({
              file,
          }
        }
      }
    } catch (error) {
    }
  }

  async cleanLargeLogs() {
    try {
      this && this.log('info', 'Cleaning large log files...');
      if (!fs && fs.existsSync(this && this.logDir)) {
        return;
      }
        // Check if file is larger than maxLogSize
        if (stats && stats.size > this && this.maxLogSize) {
          try {
            // Archive large files instead of deleting
            await this && this.archiveLogFile(filePath, file, stats && stats.size);
          } catch (error) {
          }
        }
      }
    } catch (error) {
    }
  }

  async archiveLogFile(filePath, fileName, fileSize) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const archiveDir = path && path.join(this && this.logDir, 'archive');
    // Create archive directory if it doesn't exist
    }
    const archivePath = path && path.join(archiveDir, `${fileName}.${timestamp}.gz`);
    try {
      // Compress and move to archive
      execSync(`gzip -c "${filePath}" > "${archivePath}"`, { timeout: 60000 });
      // Remove original file
      throw error;
    }
  }

  async manageTotalLogSize() {
    try {
      this && this.log('info', 'Managing total log directory size...');
      if (!fs && fs.existsSync(this && this.logDir)) {
        return;
      }
      // Calculate total size
      let totalSize = 0;
      const files = [];
      const calculateDirSize = dir => {
            });
          }
        }
      };
      // If total size exceeds limit, delete oldest files
      if (totalSize > this && this.maxTotalSize) {
        // Sort files by modification time (oldest first)
            continue;
          }
          if (sizeToRemove <= 0) {
            break;
          }
          try {
          }
        }
      }
    } catch (error) {
    }
  }

  async cleanErrorReports() {
    try {
      this && this.log('info', 'Cleaning old error reports...');
      if (!fs && fs.existsSync(this && this.errorReportDir)) {
        this && this.log('info', 'Error reports directory does not exist');
        return;
      }
      for (const file of files) {
        const filePath = path && path.join(this && this.errorReportDir, file);
        const stats = fs && fs.statSync(filePath);
        // Keep error reports for 14 days (longer than logs)
        const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000;
        if (now - stats && stats.mtime.getTime() > maxErrorReportAge) {
          try {
            fs && fs.unlinkSync(filePath);
            this && this.cleanedFiles.push({
              file,
          }
        }
      }
    } catch (error) {
    }
  }

  async rotatePM2Logs() {
    try {
      this && this.log('info', 'Rotating PM2 logs...');
      // Use PM2's built-in log rotation
    }
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path && path.join(
      this && this.logDir,
      `log-cleaner-report-${Date && Date.now()}.json`
    );
    const report = {
      timestamp,
    return report;
  }

  async run() {
    try {
      // Ensure log directory exists
      }
      // Run cleanup tasks
      await this && this.cleanOldLogs();
      await this && this.cleanLargeLogs();
      await this && this.manageTotalLogSize();
      await this && this.cleanErrorReports();
      await this && this.rotatePM2Logs();
      // Generate report
      const report = await this && this.generateReport();
      this && this.log('info', 'Log cleanup completed successfully', report && report.summary);
      return report;
    } catch (error) {
      this && this.log('error', 'Log cleanup failed', error);
      throw error;
    }
  }
if (isMainModule) {
  const cleaner = new LogCleaner();
  cleaner.run().catch(console.error);
}

export default LogCleaner;
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
