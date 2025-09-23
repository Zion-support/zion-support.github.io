#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

class BackupManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/backup-manager.log');
    this.backupFile = path.join(this.projectRoot, 'logs/pm2/backup-status.json');
    this.configFile = path.join(this.projectRoot, '.backup-config.json');
    this.startTime = Date.now();
    this.config = this.loadConfig();
    this.backupStatus = {
      timestamp: new Date().toISOString(),
      lastBackup: null,
      totalBackups: 0,
      backupSize: 0,
      status: 'idle',
      backups: []
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports', 'backups'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        return JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading config: ${error.message}`);
    }

    // Default configuration
    return {
      enabled: true,
      frequency: 'daily', // daily, weekly, monthly
      retention: 30, // days
      compression: true,
      encryption: false,
      includeNodeModules: false,
      includeLogs: true,
      includeDist: true,
      maxBackupSize: 1024 * 1024 * 1024, // 1GB
      backupPaths: [
        'src',
        'public',
        'package.json',
        'package-lock.json',
        'ecosystem.config.js',
        'next.config.js',
        'vite.config.js'
      ],
      excludePaths: [
        'node_modules',
        '.git',
        'dist',
        'build',
        'coverage',
        '.next',
        'logs'
      ]
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async createBackup() {
    this.log('💾 Starting backup creation...');
    
    try {
      const backupId = `backup-${Date.now()}`;
      const backupDir = path.join(this.projectRoot, 'backups', backupId);
      
      // Create backup directory
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Get current git commit
      const currentCommit = this.getCurrentCommit();
      
      // Create backup info
      const backupInfo = {
        id: backupId,
        timestamp: new Date().toISOString(),
        commit: currentCommit,
        size: 0,
        files: 0,
        status: 'creating',
        type: 'full'
      };
      
      // Copy files
      const copyResult = await this.copyFiles(backupDir, backupInfo);
      backupInfo.size = copyResult.size;
      backupInfo.files = copyResult.files;
      backupInfo.status = 'completed';
      
      // Compress if enabled
      if (this.config.compression) {
        await this.compressBackup(backupDir, backupInfo);
      }
      
      // Encrypt if enabled
      if (this.config.encryption) {
        await this.encryptBackup(backupDir, backupInfo);
      }
      
      // Save backup info
      fs.writeFileSync(
        path.join(backupDir, 'backup-info.json'),
        JSON.stringify(backupInfo, null, 2)
      );
      
      // Update backup status
      this.backupStatus.lastBackup = backupInfo.timestamp;
      this.backupStatus.totalBackups++;
      this.backupStatus.backupSize += backupInfo.size;
      this.backupStatus.backups.push(backupInfo);
      
      this.log(`✅ Backup created: ${backupId} (${this.formatBytes(backupInfo.size)})`);
      return backupInfo;
    } catch (error) {
      this.log(`❌ Backup creation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  getCurrentCommit() {
    try {
      return execSync('git rev-parse HEAD', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async copyFiles(backupDir, backupInfo) {
    let totalSize = 0;
    let fileCount = 0;
    
    for (const backupPath of this.config.backupPaths) {
      const sourcePath = path.join(this.projectRoot, backupPath);
      
      if (fs.existsSync(sourcePath)) {
        const stat = fs.statSync(sourcePath);
        const destPath = path.join(backupDir, backupPath);
        
        if (stat.isDirectory()) {
          const result = await this.copyDirectory(sourcePath, destPath);
          totalSize += result.size;
          fileCount += result.files;
        } else {
          fs.copyFileSync(sourcePath, destPath);
          totalSize += stat.size;
          fileCount++;
        }
      }
    }
    
    return { size: totalSize, files: fileCount };
  }

  async copyDirectory(sourceDir, destDir) {
    let totalSize = 0;
    let fileCount = 0;
    
    try {
      fs.mkdirSync(destDir, { recursive: true });
      const items = fs.readdirSync(sourceDir);
      
      for (const item of items) {
        const sourcePath = path.join(sourceDir, item);
        const destPath = path.join(destDir, item);
        const stat = fs.statSync(sourcePath);
        
        // Check if path should be excluded
        if (this.shouldExcludePath(sourcePath)) {
          continue;
        }
        
        if (stat.isDirectory()) {
          const result = await this.copyDirectory(sourcePath, destPath);
          totalSize += result.size;
          fileCount += result.files;
        } else {
          fs.copyFileSync(sourcePath, destPath);
          totalSize += stat.size;
          fileCount++;
        }
      }
    } catch (error) {
      this.log(`Warning: Could not copy directory ${sourceDir}: ${error.message}`, 'WARN');
    }
    
    return { size: totalSize, files: fileCount };
  }

  shouldExcludePath(filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    return this.config.excludePaths.some(excludePath => 
      relativePath.startsWith(excludePath) || relativePath.includes(`/${excludePath}/`)
    );
  }

  async compressBackup(backupDir, backupInfo) {
    try {
      this.log('🗜️ Compressing backup...');
      
      const archivePath = `${backupDir}.tar.gz`;
      execSync(`tar -czf "${archivePath}" -C "${path.dirname(backupDir)}" "${path.basename(backupDir)}"`, {
        stdio: 'pipe'
      });
      
      // Remove original directory
      execSync(`rm -rf "${backupDir}"`, { stdio: 'pipe' });
      
      // Update backup info
      const compressedSize = fs.statSync(archivePath).size;
      backupInfo.compressed = true;
      backupInfo.compressedSize = compressedSize;
      backupInfo.compressionRatio = ((backupInfo.size - compressedSize) / backupInfo.size * 100).toFixed(2);
      
      this.log(`✅ Backup compressed: ${this.formatBytes(compressedSize)} (${backupInfo.compressionRatio}% reduction)`);
    } catch (error) {
      this.log(`❌ Backup compression failed: ${error.message}`, 'ERROR');
    }
  }

  async encryptBackup(backupDir, backupInfo) {
    try {
      this.log('🔐 Encrypting backup...');
      
      const key = this.generateEncryptionKey();
      const encryptedPath = `${backupDir}.enc`;
      
      // Simple encryption using Node.js crypto
      const cipher = crypto.createCipher('aes192', key);
      const input = fs.createReadStream(backupDir);
      const output = fs.createWriteStream(encryptedPath);
      
      input.pipe(cipher).pipe(output);
      
      // Remove original
      execSync(`rm -rf "${backupDir}"`, { stdio: 'pipe' });
      
      // Save encryption key (in production, store securely)
      fs.writeFileSync(`${encryptedPath}.key`, key);
      
      backupInfo.encrypted = true;
      backupInfo.encryptedSize = fs.statSync(encryptedPath).size;
      
      this.log(`✅ Backup encrypted: ${this.formatBytes(backupInfo.encryptedSize)}`);
    } catch (error) {
      this.log(`❌ Backup encryption failed: ${error.message}`, 'ERROR');
    }
  }

  generateEncryptionKey() {
    return crypto.randomBytes(32).toString('hex');
  }

  async cleanupOldBackups() {
    this.log('🧹 Cleaning up old backups...');
    
    try {
      const backupsDir = path.join(this.projectRoot, 'backups');
      if (!fs.existsSync(backupsDir)) {
        return;
      }
      
      const backups = fs.readdirSync(backupsDir)
        .filter(item => item.startsWith('backup-'))
        .map(item => {
          const itemPath = path.join(backupsDir, item);
          const stat = fs.statSync(itemPath);
          return {
            name: item,
            path: itemPath,
            mtime: stat.mtime,
            size: stat.isDirectory() ? this.getDirectorySize(itemPath) : stat.size
          };
        })
        .sort((a, b) => b.mtime - a.mtime);
      
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - this.config.retention);
      
      let deletedCount = 0;
      let deletedSize = 0;
      
      for (const backup of backups) {
        if (backup.mtime < cutoffDate) {
          try {
            execSync(`rm -rf "${backup.path}"`, { stdio: 'pipe' });
            deletedCount++;
            deletedSize += backup.size;
            this.log(`🗑️ Deleted old backup: ${backup.name}`);
          } catch (error) {
            this.log(`Warning: Could not delete backup ${backup.name}: ${error.message}`, 'WARN');
          }
        }
      }
      
      this.log(`✅ Cleanup completed - ${deletedCount} backups deleted (${this.formatBytes(deletedSize)})`);
      return { deletedCount, deletedSize };
    } catch (error) {
      this.log(`❌ Cleanup failed: ${error.message}`, 'ERROR');
      return { deletedCount: 0, deletedSize: 0 };
    }
  }

  getDirectorySize(dir) {
    let size = 0;
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
          size += this.getDirectorySize(itemPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      // Silent fail
    }
    return size;
  }

  async restoreBackup(backupId) {
    this.log(`🔄 Starting restore from backup: ${backupId}...`);
    
    try {
      const backupDir = path.join(this.projectRoot, 'backups', backupId);
      const backupInfoPath = path.join(backupDir, 'backup-info.json');
      
      if (!fs.existsSync(backupInfoPath)) {
        throw new Error('Backup info not found');
      }
      
      const backupInfo = JSON.parse(fs.readFileSync(backupInfoPath, 'utf8'));
      
      // Create restore directory
      const restoreDir = path.join(this.projectRoot, 'restore', backupId);
      fs.mkdirSync(restoreDir, { recursive: true });
      
      // Copy backup files to restore directory
      execSync(`cp -r "${backupDir}"/* "${restoreDir}/"`, { stdio: 'pipe' });
      
      this.log(`✅ Backup restored to: ${restoreDir}`);
      return {
        success: true,
        restoreDir,
        backupInfo
      };
    } catch (error) {
      this.log(`❌ Restore failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async listBackups() {
    try {
      const backupsDir = path.join(this.projectRoot, 'backups');
      if (!fs.existsSync(backupsDir)) {
        return [];
      }
      
      const backups = fs.readdirSync(backupsDir)
        .filter(item => item.startsWith('backup-'))
        .map(item => {
          const itemPath = path.join(backupsDir, item);
          const stat = fs.statSync(itemPath);
          const infoPath = path.join(itemPath, 'backup-info.json');
          
          let info = null;
          if (fs.existsSync(infoPath)) {
            try {
              info = JSON.parse(fs.readFileSync(infoPath, 'utf8'));
            } catch (error) {
              // Silent fail
            }
          }
          
          return {
            id: item,
            path: itemPath,
            mtime: stat.mtime,
            size: stat.isDirectory() ? this.getDirectorySize(itemPath) : stat.size,
            info
          };
        })
        .sort((a, b) => b.mtime - a.mtime);
      
      return backups;
    } catch (error) {
      this.log(`Error listing backups: ${error.message}`, 'ERROR');
      return [];
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async saveBackupStatus() {
    try {
      fs.writeFileSync(this.backupFile, JSON.stringify(this.backupStatus, null, 2));
      this.log(`💾 Backup status saved: ${this.backupFile}`);
    } catch (error) {
      this.log(`❌ Error saving backup status: ${error.message}`, 'ERROR');
    }
  }

  displaySummary() {
    console.log('\n💾 BACKUP MANAGER SUMMARY');
    console.log('=========================');
    
    const status = this.backupStatus;
    const config = this.config;
    
    console.log(`📊 Status: ${status.status.toUpperCase()}`);
    console.log(`📅 Last Backup: ${status.lastBackup || 'Never'}`);
    console.log(`📦 Total Backups: ${status.totalBackups}`);
    console.log(`💾 Total Size: ${this.formatBytes(status.backupSize)}`);
    console.log(`⚙️ Configuration:`);
    console.log(`   Frequency: ${config.frequency}`);
    console.log(`   Retention: ${config.retention} days`);
    console.log(`   Compression: ${config.compression ? 'Enabled' : 'Disabled'}`);
    console.log(`   Encryption: ${config.encryption ? 'Enabled' : 'Disabled'}`);
    console.log(`   Max Size: ${this.formatBytes(config.maxBackupSize)}`);
    
    console.log(`\n📄 Backup status saved to: ${this.backupFile}`);
  }

  async run() {
    this.log('🚀 Starting Backup Manager...');
    
    try {
      this.backupStatus.status = 'running';
      
      // Create backup
      await this.createBackup();
      
      // Cleanup old backups
      await this.cleanupOldBackups();
      
      // Update status
      this.backupStatus.status = 'completed';
      
      // Save status
      await this.saveBackupStatus();
      
      // Display summary
      this.displaySummary();
      
      this.log('✅ Backup Manager completed successfully');
    } catch (error) {
      this.log(`❌ Backup Manager failed: ${error.message}`, 'ERROR');
      this.backupStatus.status = 'failed';
      await this.saveBackupStatus();
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new BackupManager();
  manager.run();
}

module.exports = BackupManager;