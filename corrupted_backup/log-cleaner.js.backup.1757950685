<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD:scripts/log-cleaner.js
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class LogCleaner { constructor() { this.projectRoot = path.join(__dirname,'..'); this.logDir = path.join(this.projectRoot,'logs'); this.errorReportDir = path.join(this.projectRoot,'error-reports'); this.maxLogAge = 7 * 24 * 60 * 60 * 1000; this.maxLogSize = 100 * 1024 * 1024; this.maxTotalSize = 500 * 1024 * 1024; this.cleanedFiles = []; this.archivedFiles = []; this.errors = []} log(level,message,data = null) { const timestamp = new Date().toISOString(); const logEntry = { timestamp,level,message,data }; }: ${message}`); if (data) { )} const logFile = path.join(this.logDir,'log-cleaner.log'); if (fs.existsSync(logFile)) { fs.appendFileSync(logFile,JSON.stringify(logEntry) + '\n')} } async cleanOldLogs() { try { this.log('info','Cleaning old log files...'); if (!fs.existsSync(this.logDir)) { this.log('info','Log directory does not exist'); return} const files = fs.readdirSync(this.logDir); const now = Date.now(); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > this.maxLogAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_age' }); this.log('info',`Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`)} catch (error) { this.log('error',`Failed to delete old log file: ${file}`,error); this.errors.push(`Failed to delete ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean old logs',error); this.errors.push(`Failed to clean old logs: ${error.message}`)} } async cleanLargeLogs() { try { this.log('info','Cleaning large log files...'); if (!fs.existsSync(this.logDir)) { return} const files = fs.readdirSync(this.logDir); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (stats.size > this.maxLogSize) { try { await this.archiveLogFile(filePath,file,stats.size)} catch (error) { this.log('error',`Failed to archive large log file: ${file}`,error); this.errors.push(`Failed to archive ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean large logs',error); this.errors.push(`Failed to clean large logs: ${error.message}`)} } async archiveLogFile(filePath,fileName,fileSize) { const timestamp = new Date().toISOString().replace(/[:.]/g,'-'); const archiveDir = path.join(this.logDir,'archive'); if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir,{ recursive: true })} const archivePath = path.join(archiveDir,`${fileName}.${timestamp}.gz`); try { execSync(`gzip -c "${filePath}" > "${archivePath}"`,{ timeout: 60000 }); fs.unlinkSync(filePath); this.archivedFiles.push({ originalFile: fileName,archiveFile: path.basename(archivePath),originalSize: fileSize,reason: 'large_size' }); this.log('info',`Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`)} catch (error) { this.log('error',`Failed to archive log file: ${fileName}`,error); throw error} } async manageTotalLogSize() { try { this.log('info','Managing total log directory size...'); if (!fs.existsSync(this.logDir)) { return} let totalSize = 0; const files = []; const calculateDirSize = dir => { const dirFiles = fs.readdirSync(dir); for (const file of dirFiles) { const filePath = path.join(dir,file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { calculateDirSize(filePath)} else { totalSize += stats.size; files.push({ path: filePath,size: stats.size,mtime: stats.mtime,name: file })} } }; calculateDirSize(this.logDir); this.log('info',`Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`); if (totalSize > this.maxTotalSize) { files.sort((a,b) => a.mtime - b.mtime); let sizeToRemove = totalSize - this.maxTotalSize; for (const file of files) { if (file.name === 'log-cleaner.log') { continue} if (sizeToRemove <= 0) { break} try { fs.unlinkSync(file.path); sizeToRemove -= file.size; this.cleanedFiles.push({ file: file.name,size: file.size,reason: 'total_size_limit' }); this.log('info',`Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`)} catch (error) { this.log('error',`Failed to delete log file for size management: ${file.name}`,error); this.errors.push(`Failed to delete ${file.name}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to manage total log size',error); this.errors.push(`Failed to manage total log size: ${error.message}`)} } async cleanErrorReports() { try { this.log('info','Cleaning old error reports...'); if (!fs.existsSync(this.errorReportDir)) { this.log('info','Error reports directory does not exist'); return} const files = fs.readdirSync(this.errorReportDir); const now = Date.now(); for (const file of files) { const filePath = path.join(this.errorReportDir,file); const stats = fs.statSync(filePath); const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000; if (now - stats.mtime.getTime() > maxErrorReportAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_error_report' }); this.log('info',`Deleted old error report: ${file}`)} catch (error) { this.log('error',`Failed to delete old error report: ${file}`,error); this.errors.push(`Failed to delete error report ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean error reports',error); this.errors.push(`Failed to clean error reports: ${error.message}`)} } async rotatePM2Logs() { try { this.log('info','Rotating PM2 logs...'); execSync('pm2 flush',{ timeout: 30000 }); this.log('info','PM2 logs rotated successfully')} catch (error) { this.log('error','Failed to rotate PM2 logs',error); this.errors.push(`Failed to rotate PM2 logs: ${error.message}`)} } async generateReport() { const timestamp = new Date().toISOString(); const reportFile = path.join( this.logDir,`log-cleaner-report-${Date.now()}.json` ); const report = { timestamp,summary: { cleanedFiles: this.cleanedFiles.length,archivedFiles: this.archivedFiles.length,errors: this.errors.length,totalSpaceReclaimed: this.cleanedFiles.reduce( (sum,file) => sum + (file.size || 0),0 ) },cleanedFiles: this.cleanedFiles,archivedFiles: this.archivedFiles,errors: this.errors }; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('info',`Report generated: ${reportFile}`); return report} async run() { try { if (!fs.existsSync(this.logDir)) { fs.mkdirSync(this.logDir,{ recursive: true })} await this.cleanOldLogs(); await this.cleanLargeLogs(); await this.manageTotalLogSize(); await this.cleanErrorReports(); await this.rotatePM2Logs(); const report = await this.generateReport(); this.log('info','Log cleanup completed successfully',report.summary); return report} catch (error) { this.log('error','Log cleanup failed',error); throw error} } } const isMainModule = import.meta.url === `file: if (isMainModule) { const cleaner = new LogCleaner(); cleaner.run().catch(console.error)} export default LogCleaner;
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class LogCleaner { constructor() { this.projectRoot = path.join(__dirname,'..'); this.logDir = path.join(this.projectRoot,'logs'); this.errorReportDir = path.join(this.projectRoot,'error-reports'); this.maxLogAge = 7 * 24 * 60 * 60 * 1000; this.maxLogSize = 100 * 1024 * 1024; this.maxTotalSize = 500 * 1024 * 1024; this.cleanedFiles = []; this.archivedFiles = []; this.errors = []} log(level,message,data = null) { const timestamp = new Date().toISOString(); const logEntry = { timestamp,level,message,data }; }: ${message}`); if (data) { )} const logFile = path.join(this.logDir,'log-cleaner.log'); if (fs.existsSync(logFile)) { fs.appendFileSync(logFile,JSON.stringify(logEntry) + '\n')} } async cleanOldLogs() { try { this.log('info','Cleaning old log files...'); if (!fs.existsSync(this.logDir)) { this.log('info','Log directory does not exist'); return} const files = fs.readdirSync(this.logDir); const now = Date.now(); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > this.maxLogAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_age' }); this.log('info',`Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`)} catch (error) { this.log('error',`Failed to delete old log file: ${file}`,error); this.errors.push(`Failed to delete ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean old logs',error); this.errors.push(`Failed to clean old logs: ${error.message}`)} } async cleanLargeLogs() { try { this.log('info','Cleaning large log files...'); if (!fs.existsSync(this.logDir)) { return} const files = fs.readdirSync(this.logDir); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (stats.size > this.maxLogSize) { try { await this.archiveLogFile(filePath,file,stats.size)} catch (error) { this.log('error',`Failed to archive large log file: ${file}`,error); this.errors.push(`Failed to archive ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean large logs',error); this.errors.push(`Failed to clean large logs: ${error.message}`)} } async archiveLogFile(filePath,fileName,fileSize) { const timestamp = new Date().toISOString().replace(/[:.]/g,'-'); const archiveDir = path.join(this.logDir,'archive'); if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir,{ recursive: true })} const archivePath = path.join(archiveDir,`${fileName}.${timestamp}.gz`); try { execSync(`gzip -c "${filePath}" > "${archivePath}"`,{ timeout: 60000 }); fs.unlinkSync(filePath); this.archivedFiles.push({ originalFile: fileName,archiveFile: path.basename(archivePath),originalSize: fileSize,reason: 'large_size' }); this.log('info',`Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`)} catch (error) { this.log('error',`Failed to archive log file: ${fileName}`,error); throw error} } async manageTotalLogSize() { try { this.log('info','Managing total log directory size...'); if (!fs.existsSync(this.logDir)) { return} let totalSize = 0; const files = []; const calculateDirSize = dir => { const dirFiles = fs.readdirSync(dir); for (const file of dirFiles) { const filePath = path.join(dir,file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { calculateDirSize(filePath)} else { totalSize += stats.size; files.push({ path: filePath,size: stats.size,mtime: stats.mtime,name: file })} } }; calculateDirSize(this.logDir); this.log('info',`Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`); if (totalSize > this.maxTotalSize) { files.sort((a,b) => a.mtime - b.mtime); let sizeToRemove = totalSize - this.maxTotalSize; for (const file of files) { if (file.name === 'log-cleaner.log') { continue} if (sizeToRemove <= 0) { break} try { fs.unlinkSync(file.path); sizeToRemove -= file.size; this.cleanedFiles.push({ file: file.name,size: file.size,reason: 'total_size_limit' }); this.log('info',`Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`)} catch (error) { this.log('error',`Failed to delete log file for size management: ${file.name}`,error); this.errors.push(`Failed to delete ${file.name}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to manage total log size',error); this.errors.push(`Failed to manage total log size: ${error.message}`)} } async cleanErrorReports() { try { this.log('info','Cleaning old error reports...'); if (!fs.existsSync(this.errorReportDir)) { this.log('info','Error reports directory does not exist'); return} const files = fs.readdirSync(this.errorReportDir); const now = Date.now(); for (const file of files) { const filePath = path.join(this.errorReportDir,file); const stats = fs.statSync(filePath); const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000; if (now - stats.mtime.getTime() > maxErrorReportAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_error_report' }); this.log('info',`Deleted old error report: ${file}`)} catch (error) { this.log('error',`Failed to delete old error report: ${file}`,error); this.errors.push(`Failed to delete error report ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean error reports',error); this.errors.push(`Failed to clean error reports: ${error.message}`)} } async rotatePM2Logs() { try { this.log('info','Rotating PM2 logs...'); execSync('pm2 flush',{ timeout: 30000 }); this.log('info','PM2 logs rotated successfully')} catch (error) { this.log('error','Failed to rotate PM2 logs',error); this.errors.push(`Failed to rotate PM2 logs: ${error.message}`)} } async generateReport() { const timestamp = new Date().toISOString(); const reportFile = path.join( this.logDir,`log-cleaner-report-${Date.now()}.json` ); const report = { timestamp,summary: { cleanedFiles: this.cleanedFiles.length,archivedFiles: this.archivedFiles.length,errors: this.errors.length,totalSpaceReclaimed: this.cleanedFiles.reduce( (sum,file) => sum + (file.size || 0),0 ) },cleanedFiles: this.cleanedFiles,archivedFiles: this.archivedFiles,errors: this.errors }; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('info',`Report generated: ${reportFile}`); return report} async run() { try { if (!fs.existsSync(this.logDir)) { fs.mkdirSync(this.logDir,{ recursive: true })} await this.cleanOldLogs(); await this.cleanLargeLogs(); await this.manageTotalLogSize(); await this.cleanErrorReports(); await this.rotatePM2Logs(); const report = await this.generateReport(); this.log('info','Log cleanup completed successfully',report.summary); return report} catch (error) { this.log('error','Log cleanup failed',error); throw error} } } const isMainModule = import.meta.url === `file: if (isMainModule) { const cleaner = new LogCleaner(); cleaner.run().catch(console.error)} export default LogCleaner;
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class LogCleaner { constructor() { this.projectRoot = path.join(__dirname,'..'); this.logDir = path.join(this.projectRoot,'logs'); this.errorReportDir = path.join(this.projectRoot,'error-reports'); this.maxLogAge = 7 * 24 * 60 * 60 * 1000; this.maxLogSize = 100 * 1024 * 1024; this.maxTotalSize = 500 * 1024 * 1024; this.cleanedFiles = []; this.archivedFiles = []; this.errors = []} log(level,message,data = null) { const timestamp = new Date().toISOString(); const logEntry = { timestamp,level,message,data }; }: ${message}`); if (data) { )} const logFile = path.join(this.logDir,'log-cleaner.log'); if (fs.existsSync(logFile)) { fs.appendFileSync(logFile,JSON.stringify(logEntry) + '\n')} } async cleanOldLogs() { try { this.log('info','Cleaning old log files...'); if (!fs.existsSync(this.logDir)) { this.log('info','Log directory does not exist'); return} const files = fs.readdirSync(this.logDir); const now = Date.now(); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > this.maxLogAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_age' }); this.log('info',`Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`)} catch (error) { this.log('error',`Failed to delete old log file: ${file}`,error); this.errors.push(`Failed to delete ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean old logs',error); this.errors.push(`Failed to clean old logs: ${error.message}`)} } async cleanLargeLogs() { try { this.log('info','Cleaning large log files...'); if (!fs.existsSync(this.logDir)) { return} const files = fs.readdirSync(this.logDir); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (stats.size > this.maxLogSize) { try { await this.archiveLogFile(filePath,file,stats.size)} catch (error) { this.log('error',`Failed to archive large log file: ${file}`,error); this.errors.push(`Failed to archive ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean large logs',error); this.errors.push(`Failed to clean large logs: ${error.message}`)} } async archiveLogFile(filePath,fileName,fileSize) { const timestamp = new Date().toISOString().replace(/[:.]/g,'-'); const archiveDir = path.join(this.logDir,'archive'); if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir,{ recursive: true })} const archivePath = path.join(archiveDir,`${fileName}.${timestamp}.gz`); try { execSync(`gzip -c "${filePath}" > "${archivePath}"`,{ timeout: 60000 }); fs.unlinkSync(filePath); this.archivedFiles.push({ originalFile: fileName,archiveFile: path.basename(archivePath),originalSize: fileSize,reason: 'large_size' }); this.log('info',`Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`)} catch (error) { this.log('error',`Failed to archive log file: ${fileName}`,error); throw error} } async manageTotalLogSize() { try { this.log('info','Managing total log directory size...'); if (!fs.existsSync(this.logDir)) { return} let totalSize = 0; const files = []; const calculateDirSize = dir => { const dirFiles = fs.readdirSync(dir); for (const file of dirFiles) { const filePath = path.join(dir,file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { calculateDirSize(filePath)} else { totalSize += stats.size; files.push({ path: filePath,size: stats.size,mtime: stats.mtime,name: file })} } }; calculateDirSize(this.logDir); this.log('info',`Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`); if (totalSize > this.maxTotalSize) { files.sort((a,b) => a.mtime - b.mtime); let sizeToRemove = totalSize - this.maxTotalSize; for (const file of files) { if (file.name === 'log-cleaner.log') { continue} if (sizeToRemove <= 0) { break} try { fs.unlinkSync(file.path); sizeToRemove -= file.size; this.cleanedFiles.push({ file: file.name,size: file.size,reason: 'total_size_limit' }); this.log('info',`Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`)} catch (error) { this.log('error',`Failed to delete log file for size management: ${file.name}`,error); this.errors.push(`Failed to delete ${file.name}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to manage total log size',error); this.errors.push(`Failed to manage total log size: ${error.message}`)} } async cleanErrorReports() { try { this.log('info','Cleaning old error reports...'); if (!fs.existsSync(this.errorReportDir)) { this.log('info','Error reports directory does not exist'); return} const files = fs.readdirSync(this.errorReportDir); const now = Date.now(); for (const file of files) { const filePath = path.join(this.errorReportDir,file); const stats = fs.statSync(filePath); const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000; if (now - stats.mtime.getTime() > maxErrorReportAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_error_report' }); this.log('info',`Deleted old error report: ${file}`)} catch (error) { this.log('error',`Failed to delete old error report: ${file}`,error); this.errors.push(`Failed to delete error report ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean error reports',error); this.errors.push(`Failed to clean error reports: ${error.message}`)} } async rotatePM2Logs() { try { this.log('info','Rotating PM2 logs...'); execSync('pm2 flush',{ timeout: 30000 }); this.log('info','PM2 logs rotated successfully')} catch (error) { this.log('error','Failed to rotate PM2 logs',error); this.errors.push(`Failed to rotate PM2 logs: ${error.message}`)} } async generateReport() { const timestamp = new Date().toISOString(); const reportFile = path.join( this.logDir,`log-cleaner-report-${Date.now()}.json` ); const report = { timestamp,summary: { cleanedFiles: this.cleanedFiles.length,archivedFiles: this.archivedFiles.length,errors: this.errors.length,totalSpaceReclaimed: this.cleanedFiles.reduce( (sum,file) => sum + (file.size || 0),0 ) },cleanedFiles: this.cleanedFiles,archivedFiles: this.archivedFiles,errors: this.errors }; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('info',`Report generated: ${reportFile}`); return report} async run() { try { if (!fs.existsSync(this.logDir)) { fs.mkdirSync(this.logDir,{ recursive: true })} await this.cleanOldLogs(); await this.cleanLargeLogs(); await this.manageTotalLogSize(); await this.cleanErrorReports(); await this.rotatePM2Logs(); const report = await this.generateReport(); this.log('info','Log cleanup completed successfully',report.summary); return report} catch (error) { this.log('error','Log cleanup failed',error); throw error} } } const isMainModule = import.meta.url === `file: if (isMainModule) { const cleaner = new LogCleaner(); cleaner.run().catch(console.error)} export default LogCleaner;
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/log-cleaner.js
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
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
              "size": stats && stats.size,
              "age": Math && Math.round((now - stats && stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),
              "reason": 'old_age'
            });
            this && this.log('info', `Deleted old log "file": ${file} (${Math && Math.round((now - stats && stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`);
          } catch (error) {
            this && this.log('error', `Failed to delete old log "file": ${file}`, error);
            this && this.errors.push(`Failed to delete ${file}: ${error && error.message}`);
=======
              size: stats.size,
              age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),
              reason: 'old_age'
            });
            this.log('info', `Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`);
          } catch (error) {
            this.log('error', `Failed to delete old log file: ${file}`, error);
            this.errors.push(`Failed to delete ${file}: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
          }
        }
      }
    } catch (error) {
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      this && this.log('error', 'Failed to clean old logs', error);
      this && this.errors.push(`Failed to clean old "logs": ${error && error.message}`);
=======
      this.log('error', 'Failed to clean old logs', error);
      this.errors.push(`Failed to clean old logs: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
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
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
            this && this.log('error', `Failed to archive large log "file": ${file}`, error);
            this && this.errors.push(`Failed to archive ${file}: ${error && error.message}`);
=======
            this.log('error', `Failed to archive large log file: ${file}`, error);
            this.errors.push(`Failed to archive ${file}: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
          }
        }
      }
    } catch (error) {
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      this && this.log('error', 'Failed to clean large logs', error);
      this && this.errors.push(`Failed to clean large "logs": ${error && error.message}`);
=======
      this.log('error', 'Failed to clean large logs', error);
      this.errors.push(`Failed to clean large logs: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
    }
  }

  async archiveLogFile(filePath, fileName, fileSize) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const archiveDir = path && path.join(this && this.logDir, 'archive');
    // Create archive directory if it doesn't exist
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
    if (!fs && fs.existsSync(archiveDir)) {
      fs && fs.mkdirSync(archiveDir, { "recursive": true });
=======
    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir, { recursive: true });
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
    }
    const archivePath = path && path.join(archiveDir, `${fileName}.${timestamp}.gz`);
    try {
      // Compress and move to archive
      execSync(`gzip -c "${filePath}" > "${archivePath}"`, { timeout: 60000 });
      // Remove original file
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      fs && fs.unlinkSync(filePath);
      this && this.archivedFiles.push({
        "originalFile": fileName,
        "archiveFile": path && path.basename(archivePath),
        "originalSize": fileSize,
        "reason": 'large_size'
      });
      this && this.log('info', `Archived large log "file": ${fileName} -> ${path && path.basename(archivePath)} (${Math && Math.round(fileSize / 1024 / 1024)}MB)`);
    } catch (error) {
      this && this.log('error', `Failed to archive log "file": ${fileName}`, error);
=======
      fs.unlinkSync(filePath);
      this.archivedFiles.push({
        originalFile: fileName,
        archiveFile: path.basename(archivePath),
        originalSize: fileSize,
        reason: 'large_size'
      });
      this.log('info', `Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`);
    } catch (error) {
      this.log('error', `Failed to archive log file: ${fileName}`, error);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
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
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
              "path": filePath,
              "size": stats && stats.size,
              "mtime": stats && stats.mtime,
              "name": file
=======
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
              name: file
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
            });
          }
        }
      };
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      calculateDirSize(this && this.logDir);
      this && this.log('info', `Total log directory "size": ${Math && Math.round(totalSize / 1024 / 1024)}MB`);
=======
      calculateDirSize(this.logDir);
      this.log('info', `Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
      // If total size exceeds limit, delete oldest files
      if (totalSize > this && this.maxTotalSize) {
        // Sort files by modification time (oldest first)
            continue;
          }
          if (sizeToRemove <= 0) {
            break;
          }
          try {
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
            fs && fs.unlinkSync(file && file.path);
            sizeToRemove -= file && file.size;
            this && this.cleanedFiles.push({
              "file": file && file.name,
              "size": file && file.size,
              "reason": 'total_size_limit'
            });
            this && this.log('info', `Deleted log file to manage total "size": ${file && file.name} (${Math && Math.round(file && file.size / 1024)}KB)`);
          } catch (error) {
            this && this.log('error', `Failed to delete log file for size "management": ${file && file.name}`, error);
            this && this.errors.push(`Failed to delete ${file && file.name}: ${error && error.message}`);
=======
            fs.unlinkSync(file.path);
            sizeToRemove -= file.size;
            this.cleanedFiles.push({
              file: file.name,
              size: file.size,
              reason: 'total_size_limit'
            });
            this.log('info', `Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`);
          } catch (error) {
            this.log('error', `Failed to delete log file for size management: ${file.name}`, error);
            this.errors.push(`Failed to delete ${file.name}: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
          }
        }
      }
    } catch (error) {
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      this && this.log('error', 'Failed to manage total log size', error);
      this && this.errors.push(`Failed to manage total log "size": ${error && error.message}`);
=======
      this.log('error', 'Failed to manage total log size', error);
      this.errors.push(`Failed to manage total log size: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
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
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
              "size": stats && stats.size,
              "age": Math && Math.round((now - stats && stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),
              "reason": 'old_error_report'
            });
            this.log('info', `Deleted old error "report": ${file}`);
            this && this.log('info', `Deleted old error "report": ${file}`);
          } catch (error) {
            this && this.log('error', `Failed to delete old error "report": ${file}`, error);
            this && this.errors.push(`Failed to delete error report ${file}: ${error && error.message}`);
=======
              size: stats.size,
              age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),
              reason: 'old_error_report'
            });
            this.log('info', `Deleted old error report: ${file}`);
          } catch (error) {
            this.log('error', `Failed to delete old error report: ${file}`, error);
            this.errors.push(`Failed to delete error report ${file}: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
          }
        }
      }
    } catch (error) {
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      this && this.log('error', 'Failed to clean error reports', error);
      this && this.errors.push(`Failed to clean error "reports": ${error && error.message}`);
=======
      this.log('error', 'Failed to clean error reports', error);
      this.errors.push(`Failed to clean error reports: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
    }
  }

  async rotatePM2Logs() {
    try {
      this && this.log('info', 'Rotating PM2 logs...');
      // Use PM2's built-in log rotation
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      execSync('pm2 flush', { "timeout": 30000 });
      this && this.log('info', 'PM2 logs rotated successfully');
    } catch (error) {
      this && this.log('error', 'Failed to rotate PM2 logs', error);
      this && this.errors.push(`Failed to rotate PM2 "logs": ${error && error.message}`);
=======
      execSync('pm2 flush', { timeout: 30000 });
      this.log('info', 'PM2 logs rotated successfully');
    } catch (error) {
      this.log('error', 'Failed to rotate PM2 logs', error);
      this.errors.push(`Failed to rotate PM2 logs: ${error.message}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
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
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      "summary": {
        cleanedFiles: this && this.cleanedFiles.length,
        "archivedFiles": this && this.archivedFiles.length,
        "errors": this && this.errors.length,
        "totalSpaceReclaimed": this && this.cleanedFiles.reduce(
          (sum, file) => sum + (file && file.size || 0),
          0
        )
      },
      "cleanedFiles": this && this.cleanedFiles,
      "archivedFiles": this && this.archivedFiles,
      "errors": this && this.errors
    };
    fs && fs.writeFileSync(reportFile, JSON && JSON.stringify(report, null, 2));
    this && this.log('info', `Report "generated": ${reportFile}`);
=======
      summary: {
        cleanedFiles: this.cleanedFiles.length,
        archivedFiles: this.archivedFiles.length,
        errors: this.errors.length,
        totalSpaceReclaimed: this.cleanedFiles.reduce(
          (sum, file) => sum + (file.size || 0),
          0
        )
      },
      cleanedFiles: this.cleanedFiles,
      archivedFiles: this.archivedFiles,
      errors: this.errors
    };
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('info', `Report generated: ${reportFile}`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
    return report;
  }

  async run() {
    try {
      // Ensure log directory exists
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
      if (!fs && fs.existsSync(this && this.logDir)) {
        fs && fs.mkdirSync(this && this.logDir, { "recursive": true });
=======
      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
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
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
// Run if called directly
const isMainModule = import && import.meta.url === `"file": //${process ;
=======
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
if (isMainModule) {
  const cleaner = new LogCleaner();
  cleaner.run().catch(console.error);
}

export default LogCleaner;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD:scripts/log-cleaner.js
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class LogCleaner { constructor() { this.projectRoot = path.join(__dirname,'..'); this.logDir = path.join(this.projectRoot,'logs'); this.errorReportDir = path.join(this.projectRoot,'error-reports'); this.maxLogAge = 7 * 24 * 60 * 60 * 1000; this.maxLogSize = 100 * 1024 * 1024; this.maxTotalSize = 500 * 1024 * 1024; this.cleanedFiles = []; this.archivedFiles = []; this.errors = []} log(level,message,data = null) { const timestamp = new Date().toISOString(); const logEntry = { timestamp,level,message,data }; console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`); if (data) { console.log(JSON.stringify(data,null,2))} const logFile = path.join(this.logDir,'log-cleaner.log'); if (fs.existsSync(logFile)) { fs.appendFileSync(logFile,JSON.stringify(logEntry) + '\n')} } async cleanOldLogs() { try { this.log('info','Cleaning old log files...'); if (!fs.existsSync(this.logDir)) { this.log('info','Log directory does not exist'); return} const files = fs.readdirSync(this.logDir); const now = Date.now(); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > this.maxLogAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_age' }); this.log('info',`Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`)} catch (error) { this.log('error',`Failed to delete old log file: ${file}`,error); this.errors.push(`Failed to delete ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean old logs',error); this.errors.push(`Failed to clean old logs: ${error.message}`)} } async cleanLargeLogs() { try { this.log('info','Cleaning large log files...'); if (!fs.existsSync(this.logDir)) { return} const files = fs.readdirSync(this.logDir); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (stats.size > this.maxLogSize) { try { await this.archiveLogFile(filePath,file,stats.size)} catch (error) { this.log('error',`Failed to archive large log file: ${file}`,error); this.errors.push(`Failed to archive ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean large logs',error); this.errors.push(`Failed to clean large logs: ${error.message}`)} } async archiveLogFile(filePath,fileName,fileSize) { const timestamp = new Date().toISOString().replace(/[:.]/g,'-'); const archiveDir = path.join(this.logDir,'archive'); if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir,{ recursive: true })} const archivePath = path.join(archiveDir,`${fileName}.${timestamp}.gz`); try { execSync(`gzip -c "${filePath}" > "${archivePath}"`,{ timeout: 60000 }); fs.unlinkSync(filePath); this.archivedFiles.push({ originalFile: fileName,archiveFile: path.basename(archivePath),originalSize: fileSize,reason: 'large_size' }); this.log('info',`Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`)} catch (error) { this.log('error',`Failed to archive log file: ${fileName}`,error); throw error} } async manageTotalLogSize() { try { this.log('info','Managing total log directory size...'); if (!fs.existsSync(this.logDir)) { return} let totalSize = 0; const files = []; const calculateDirSize = dir => { const dirFiles = fs.readdirSync(dir); for (const file of dirFiles) { const filePath = path.join(dir,file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { calculateDirSize(filePath)} else { totalSize += stats.size; files.push({ path: filePath,size: stats.size,mtime: stats.mtime,name: file })} } }; calculateDirSize(this.logDir); this.log('info',`Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`); if (totalSize > this.maxTotalSize) { files.sort((a,b) => a.mtime - b.mtime); let sizeToRemove = totalSize - this.maxTotalSize; for (const file of files) { if (file.name === 'log-cleaner.log') { continue} if (sizeToRemove <= 0) { break} try { fs.unlinkSync(file.path); sizeToRemove -= file.size; this.cleanedFiles.push({ file: file.name,size: file.size,reason: 'total_size_limit' }); this.log('info',`Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`)} catch (error) { this.log('error',`Failed to delete log file for size management: ${file.name}`,error); this.errors.push(`Failed to delete ${file.name}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to manage total log size',error); this.errors.push(`Failed to manage total log size: ${error.message}`)} } async cleanErrorReports() { try { this.log('info','Cleaning old error reports...'); if (!fs.existsSync(this.errorReportDir)) { this.log('info','Error reports directory does not exist'); return} const files = fs.readdirSync(this.errorReportDir); const now = Date.now(); for (const file of files) { const filePath = path.join(this.errorReportDir,file); const stats = fs.statSync(filePath); const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000; if (now - stats.mtime.getTime() > maxErrorReportAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_error_report' }); this.log('info',`Deleted old error report: ${file}`)} catch (error) { this.log('error',`Failed to delete old error report: ${file}`,error); this.errors.push(`Failed to delete error report ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean error reports',error); this.errors.push(`Failed to clean error reports: ${error.message}`)} } async rotatePM2Logs() { try { this.log('info','Rotating PM2 logs...'); execSync('pm2 flush',{ timeout: 30000 }); this.log('info','PM2 logs rotated successfully')} catch (error) { this.log('error','Failed to rotate PM2 logs',error); this.errors.push(`Failed to rotate PM2 logs: ${error.message}`)} } async generateReport() { const timestamp = new Date().toISOString(); const reportFile = path.join( this.logDir,`log-cleaner-report-${Date.now()}.json` ); const report = { timestamp,summary: { cleanedFiles: this.cleanedFiles.length,archivedFiles: this.archivedFiles.length,errors: this.errors.length,totalSpaceReclaimed: this.cleanedFiles.reduce( (sum,file) => sum + (file.size || 0),0 ) },cleanedFiles: this.cleanedFiles,archivedFiles: this.archivedFiles,errors: this.errors }; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('info',`Report generated: ${reportFile}`); return report} async run() { try { if (!fs.existsSync(this.logDir)) { fs.mkdirSync(this.logDir,{ recursive: true })} await this.cleanOldLogs(); await this.cleanLargeLogs(); await this.manageTotalLogSize(); await this.cleanErrorReports(); await this.rotatePM2Logs(); const report = await this.generateReport(); this.log('info','Log cleanup completed successfully',report.summary); return report} catch (error) { this.log('error','Log cleanup failed',error); throw error} } } const isMainModule = import.meta.url === `file: if (isMainModule) { const cleaner = new LogCleaner(); cleaner.run().catch(console.error)} export default LogCleaner;
<<<<<<< HEAD:backup-problematic-files/scripts/log-cleaner.js
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class LogCleaner { constructor() { this.projectRoot = path.join(__dirname,'..'); this.logDir = path.join(this.projectRoot,'logs'); this.errorReportDir = path.join(this.projectRoot,'error-reports'); this.maxLogAge = 7 * 24 * 60 * 60 * 1000; this.maxLogSize = 100 * 1024 * 1024; this.maxTotalSize = 500 * 1024 * 1024; this.cleanedFiles = []; this.archivedFiles = []; this.errors = []} log(level,message,data = null) { const timestamp = new Date().toISOString(); const logEntry = { timestamp,level,message,data }; console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`); if (data) { console.log(JSON.stringify(data,null,2))} const logFile = path.join(this.logDir,'log-cleaner.log'); if (fs.existsSync(logFile)) { fs.appendFileSync(logFile,JSON.stringify(logEntry) + '\n')} } async cleanOldLogs() { try { this.log('info','Cleaning old log files...'); if (!fs.existsSync(this.logDir)) { this.log('info','Log directory does not exist'); return} const files = fs.readdirSync(this.logDir); const now = Date.now(); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > this.maxLogAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_age' }); this.log('info',`Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`)} catch (error) { this.log('error',`Failed to delete old log file: ${file}`,error); this.errors.push(`Failed to delete ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean old logs',error); this.errors.push(`Failed to clean old logs: ${error.message}`)} } async cleanLargeLogs() { try { this.log('info','Cleaning large log files...'); if (!fs.existsSync(this.logDir)) { return} const files = fs.readdirSync(this.logDir); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (stats.size > this.maxLogSize) { try { await this.archiveLogFile(filePath,file,stats.size)} catch (error) { this.log('error',`Failed to archive large log file: ${file}`,error); this.errors.push(`Failed to archive ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean large logs',error); this.errors.push(`Failed to clean large logs: ${error.message}`)} } async archiveLogFile(filePath,fileName,fileSize) { const timestamp = new Date().toISOString().replace(/[:.]/g,'-'); const archiveDir = path.join(this.logDir,'archive'); if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir,{ recursive: true })} const archivePath = path.join(archiveDir,`${fileName}.${timestamp}.gz`); try { execSync(`gzip -c "${filePath}" > "${archivePath}"`,{ timeout: 60000 }); fs.unlinkSync(filePath); this.archivedFiles.push({ originalFile: fileName,archiveFile: path.basename(archivePath),originalSize: fileSize,reason: 'large_size' }); this.log('info',`Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`)} catch (error) { this.log('error',`Failed to archive log file: ${fileName}`,error); throw error} } async manageTotalLogSize() { try { this.log('info','Managing total log directory size...'); if (!fs.existsSync(this.logDir)) { return} let totalSize = 0; const files = []; const calculateDirSize = dir => { const dirFiles = fs.readdirSync(dir); for (const file of dirFiles) { const filePath = path.join(dir,file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { calculateDirSize(filePath)} else { totalSize += stats.size; files.push({ path: filePath,size: stats.size,mtime: stats.mtime,name: file })} } }; calculateDirSize(this.logDir); this.log('info',`Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`); if (totalSize > this.maxTotalSize) { files.sort((a,b) => a.mtime - b.mtime); let sizeToRemove = totalSize - this.maxTotalSize; for (const file of files) { if (file.name === 'log-cleaner.log') { continue} if (sizeToRemove <= 0) { break} try { fs.unlinkSync(file.path); sizeToRemove -= file.size; this.cleanedFiles.push({ file: file.name,size: file.size,reason: 'total_size_limit' }); this.log('info',`Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`)} catch (error) { this.log('error',`Failed to delete log file for size management: ${file.name}`,error); this.errors.push(`Failed to delete ${file.name}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to manage total log size',error); this.errors.push(`Failed to manage total log size: ${error.message}`)} } async cleanErrorReports() { try { this.log('info','Cleaning old error reports...'); if (!fs.existsSync(this.errorReportDir)) { this.log('info','Error reports directory does not exist'); return} const files = fs.readdirSync(this.errorReportDir); const now = Date.now(); for (const file of files) { const filePath = path.join(this.errorReportDir,file); const stats = fs.statSync(filePath); const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000; if (now - stats.mtime.getTime() > maxErrorReportAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_error_report' }); this.log('info',`Deleted old error report: ${file}`)} catch (error) { this.log('error',`Failed to delete old error report: ${file}`,error); this.errors.push(`Failed to delete error report ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean error reports',error); this.errors.push(`Failed to clean error reports: ${error.message}`)} } async rotatePM2Logs() { try { this.log('info','Rotating PM2 logs...'); execSync('pm2 flush',{ timeout: 30000 }); this.log('info','PM2 logs rotated successfully')} catch (error) { this.log('error','Failed to rotate PM2 logs',error); this.errors.push(`Failed to rotate PM2 logs: ${error.message}`)} } async generateReport() { const timestamp = new Date().toISOString(); const reportFile = path.join( this.logDir,`log-cleaner-report-${Date.now()}.json` ); const report = { timestamp,summary: { cleanedFiles: this.cleanedFiles.length,archivedFiles: this.archivedFiles.length,errors: this.errors.length,totalSpaceReclaimed: this.cleanedFiles.reduce( (sum,file) => sum + (file.size || 0),0 ) },cleanedFiles: this.cleanedFiles,archivedFiles: this.archivedFiles,errors: this.errors }; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('info',`Report generated: ${reportFile}`); return report} async run() { try { if (!fs.existsSync(this.logDir)) { fs.mkdirSync(this.logDir,{ recursive: true })} await this.cleanOldLogs(); await this.cleanLargeLogs(); await this.manageTotalLogSize(); await this.cleanErrorReports(); await this.rotatePM2Logs(); const report = await this.generateReport(); this.log('info','Log cleanup completed successfully',report.summary); return report} catch (error) { this.log('error','Log cleanup failed',error); throw error} } } const isMainModule = import.meta.url === `file: if (isMainModule) { const cleaner = new LogCleaner(); cleaner.run().catch(console.error)} export default LogCleaner;
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class LogCleaner { constructor() { this.projectRoot = path.join(__dirname,'..'); this.logDir = path.join(this.projectRoot,'logs'); this.errorReportDir = path.join(this.projectRoot,'error-reports'); this.maxLogAge = 7 * 24 * 60 * 60 * 1000; this.maxLogSize = 100 * 1024 * 1024; this.maxTotalSize = 500 * 1024 * 1024; this.cleanedFiles = []; this.archivedFiles = []; this.errors = []} log(level,message,data = null) { const timestamp = new Date().toISOString(); const logEntry = { timestamp,level,message,data }; console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`); if (data) { console.log(JSON.stringify(data,null,2))} const logFile = path.join(this.logDir,'log-cleaner.log'); if (fs.existsSync(logFile)) { fs.appendFileSync(logFile,JSON.stringify(logEntry) + '\n')} } async cleanOldLogs() { try { this.log('info','Cleaning old log files...'); if (!fs.existsSync(this.logDir)) { this.log('info','Log directory does not exist'); return} const files = fs.readdirSync(this.logDir); const now = Date.now(); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (now - stats.mtime.getTime() > this.maxLogAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_age' }); this.log('info',`Deleted old log file: ${file} (${Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000))} days old)`)} catch (error) { this.log('error',`Failed to delete old log file: ${file}`,error); this.errors.push(`Failed to delete ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean old logs',error); this.errors.push(`Failed to clean old logs: ${error.message}`)} } async cleanLargeLogs() { try { this.log('info','Cleaning large log files...'); if (!fs.existsSync(this.logDir)) { return} const files = fs.readdirSync(this.logDir); for (const file of files) { if (file === 'log-cleaner.log') { continue} const filePath = path.join(this.logDir,file); const stats = fs.statSync(filePath); if (stats.size > this.maxLogSize) { try { await this.archiveLogFile(filePath,file,stats.size)} catch (error) { this.log('error',`Failed to archive large log file: ${file}`,error); this.errors.push(`Failed to archive ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean large logs',error); this.errors.push(`Failed to clean large logs: ${error.message}`)} } async archiveLogFile(filePath,fileName,fileSize) { const timestamp = new Date().toISOString().replace(/[:.]/g,'-'); const archiveDir = path.join(this.logDir,'archive'); if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir,{ recursive: true })} const archivePath = path.join(archiveDir,`${fileName}.${timestamp}.gz`); try { execSync(`gzip -c "${filePath}" > "${archivePath}"`,{ timeout: 60000 }); fs.unlinkSync(filePath); this.archivedFiles.push({ originalFile: fileName,archiveFile: path.basename(archivePath),originalSize: fileSize,reason: 'large_size' }); this.log('info',`Archived large log file: ${fileName} -> ${path.basename(archivePath)} (${Math.round(fileSize / 1024 / 1024)}MB)`)} catch (error) { this.log('error',`Failed to archive log file: ${fileName}`,error); throw error} } async manageTotalLogSize() { try { this.log('info','Managing total log directory size...'); if (!fs.existsSync(this.logDir)) { return} let totalSize = 0; const files = []; const calculateDirSize = dir => { const dirFiles = fs.readdirSync(dir); for (const file of dirFiles) { const filePath = path.join(dir,file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { calculateDirSize(filePath)} else { totalSize += stats.size; files.push({ path: filePath,size: stats.size,mtime: stats.mtime,name: file })} } }; calculateDirSize(this.logDir); this.log('info',`Total log directory size: ${Math.round(totalSize / 1024 / 1024)}MB`); if (totalSize > this.maxTotalSize) { files.sort((a,b) => a.mtime - b.mtime); let sizeToRemove = totalSize - this.maxTotalSize; for (const file of files) { if (file.name === 'log-cleaner.log') { continue} if (sizeToRemove <= 0) { break} try { fs.unlinkSync(file.path); sizeToRemove -= file.size; this.cleanedFiles.push({ file: file.name,size: file.size,reason: 'total_size_limit' }); this.log('info',`Deleted log file to manage total size: ${file.name} (${Math.round(file.size / 1024)}KB)`)} catch (error) { this.log('error',`Failed to delete log file for size management: ${file.name}`,error); this.errors.push(`Failed to delete ${file.name}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to manage total log size',error); this.errors.push(`Failed to manage total log size: ${error.message}`)} } async cleanErrorReports() { try { this.log('info','Cleaning old error reports...'); if (!fs.existsSync(this.errorReportDir)) { this.log('info','Error reports directory does not exist'); return} const files = fs.readdirSync(this.errorReportDir); const now = Date.now(); for (const file of files) { const filePath = path.join(this.errorReportDir,file); const stats = fs.statSync(filePath); const maxErrorReportAge = 14 * 24 * 60 * 60 * 1000; if (now - stats.mtime.getTime() > maxErrorReportAge) { try { fs.unlinkSync(filePath); this.cleanedFiles.push({ file,size: stats.size,age: Math.round((now - stats.mtime.getTime()) / (24 * 60 * 60 * 1000)),reason: 'old_error_report' }); this.log('info',`Deleted old error report: ${file}`)} catch (error) { this.log('error',`Failed to delete old error report: ${file}`,error); this.errors.push(`Failed to delete error report ${file}: ${error.message}`)} } } } catch (error) { this.log('error','Failed to clean error reports',error); this.errors.push(`Failed to clean error reports: ${error.message}`)} } async rotatePM2Logs() { try { this.log('info','Rotating PM2 logs...'); execSync('pm2 flush',{ timeout: 30000 }); this.log('info','PM2 logs rotated successfully')} catch (error) { this.log('error','Failed to rotate PM2 logs',error); this.errors.push(`Failed to rotate PM2 logs: ${error.message}`)} } async generateReport() { const timestamp = new Date().toISOString(); const reportFile = path.join( this.logDir,`log-cleaner-report-${Date.now()}.json` ); const report = { timestamp,summary: { cleanedFiles: this.cleanedFiles.length,archivedFiles: this.archivedFiles.length,errors: this.errors.length,totalSpaceReclaimed: this.cleanedFiles.reduce( (sum,file) => sum + (file.size || 0),0 ) },cleanedFiles: this.cleanedFiles,archivedFiles: this.archivedFiles,errors: this.errors }; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('info',`Report generated: ${reportFile}`); return report} async run() { try { if (!fs.existsSync(this.logDir)) { fs.mkdirSync(this.logDir,{ recursive: true })} await this.cleanOldLogs(); await this.cleanLargeLogs(); await this.manageTotalLogSize(); await this.cleanErrorReports(); await this.rotatePM2Logs(); const report = await this.generateReport(); this.log('info','Log cleanup completed successfully',report.summary); return report} catch (error) { this.log('error','Log cleanup failed',error); throw error} } } const isMainModule = import.meta.url === `file: if (isMainModule) { const cleaner = new LogCleaner(); cleaner.run().catch(console.error)} export default LogCleaner;
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/log-cleaner.js
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/log-cleaner.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
