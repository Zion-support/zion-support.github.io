#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🔒 Starting File Integrity Monitor...');

class FileIntegrityMonitor {
  constructor() {
    this.integrityLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.integrityMetrics = {
      totalFiles: 0,
      modifiedFiles: 0,
      newFiles: 0,
      deletedFiles: 0,
      corruptedFiles: 0,
      lastCheck: null
    };
    this.integrityHistory = [];
    this.maxIntegrityHistory = 20;
    this.fileHashes = new Map();
    this.criticalPaths = [
      'package.json',
      'package-lock.json',
      'next.config.js',
      'tsconfig.json',
      'tailwind.config.js',
      'src/',
      'components/',
      'pages/',
      'public/'
    ];
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.integrityLogDir)) {
      fs.mkdirSync(this.integrityLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.integrityLogDir, 'file-integrity-monitor.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async checkFileIntegrity() {
    this.log('🔒 Checking file integrity...');
    
    try {
      // Scan all files
      const fileScan = await this.scanAllFiles();
      
      // Check for file modifications
      const modificationCheck = await this.checkFileModifications();
      
      // Check for new files
      const newFileCheck = await this.checkNewFiles();
      
      // Check for deleted files
      const deletedFileCheck = await this.checkDeletedFiles();
      
      // Check for corrupted files
      const corruptionCheck = await this.checkFileCorruption();
      
      // Update integrity metrics
      this.updateIntegrityMetrics({
        totalFiles: fileScan.totalFiles,
        modifiedFiles: modificationCheck.count,
        newFiles: newFileCheck.count,
        deletedFiles: deletedFileCheck.count,
        corruptedFiles: corruptionCheck.count,
        lastCheck: new Date().toISOString()
      });
      
      // Log integrity status
      this.log(`📁 Total Files: ${fileScan.totalFiles}`);
      this.log(`✏️ Modified: ${modificationCheck.count}`);
      this.log(`🆕 New: ${newFileCheck.count}`);
      this.log(`🗑️ Deleted: ${deletedFileCheck.count}`);
      this.log(`🚨 Corrupted: ${corruptionCheck.count}`);
      
      return {
        total: fileScan.totalFiles,
        modified: modificationCheck.count,
        new: newFileCheck.count,
        deleted: deletedFileCheck.count,
        corrupted: corruptionCheck.count
      };
      
    } catch (error) {
      this.log(`❌ File integrity check failed: ${error.message}`);
      return { total: 0, modified: 0, new: 0, deleted: 0, corrupted: 0 };
    }
  }

  async scanAllFiles() {
    this.log('📁 Scanning all files...');
    
    let totalFiles = 0;
    const allFiles = [];
    
    // Scan critical paths
    for (const criticalPath of this.criticalPaths) {
      if (fs.existsSync(criticalPath)) {
        const files = this.getAllFiles(criticalPath);
        allFiles.push(...files);
        totalFiles += files.length;
      }
    }
    
    // Scan other directories
    const otherDirs = ['scripts/', 'automation/', 'docs/', 'tests/'];
    for (const dir of otherDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getAllFiles(dir);
        allFiles.push(...files);
        totalFiles += files.length;
      }
    }
    
    return { totalFiles, files: allFiles };
  }

  getAllFiles(dirPath) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files.push(...this.getAllFiles(fullPath));
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`⚠️ Error scanning directory ${dirPath}: ${error.message}`);
    }
    
    return files;
  }

  async checkFileModifications() {
    this.log('✏️ Checking for file modifications...');
    
    let modifiedCount = 0;
    const modifiedFiles = [];
    
    // Load previous hashes
    const hashFile = path.join(this.integrityLogDir, 'file-hashes.json');
    let previousHashes = {};
    
    if (fs.existsSync(hashFile)) {
      try {
        previousHashes = JSON.parse(fs.readFileSync(hashFile, 'utf8'));
      } catch (error) {
        this.log(`⚠️ Failed to load previous hashes: ${error.message}`);
      }
    }
    
    // Check current hashes
    const currentHashes = {};
    const allFiles = await this.scanAllFiles();
    
    for (const file of allFiles.files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const hash = crypto.createHash('sha256').update(content).digest('hex');
        currentHashes[file] = hash;
        
        if (previousHashes[file] && previousHashes[file] !== hash) {
          modifiedFiles.push(file);
          modifiedCount++;
        }
      } catch (error) {
        this.log(`⚠️ Failed to hash file ${file}: ${error.message}`);
      }
    }
    
    // Save current hashes
    try {
      fs.writeFileSync(hashFile, JSON.stringify(currentHashes, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save file hashes: ${error.message}`);
    }
    
    return { count: modifiedCount, files: modifiedFiles };
  }

  async checkNewFiles() {
    this.log('🆕 Checking for new files...');
    
    let newCount = 0;
    const newFiles = [];
    
    // Load previous file list
    const fileListFile = path.join(this.integrityLogDir, 'file-list.json');
    let previousFiles = [];
    
    if (fs.existsSync(fileListFile)) {
      try {
        previousFiles = JSON.parse(fs.readFileSync(fileListFile, 'utf8'));
      } catch (error) {
        this.log(`⚠️ Failed to load previous file list: ${error.message}`);
      }
    }
    
    // Get current file list
    const allFiles = await this.scanAllFiles();
    const currentFiles = allFiles.files;
    
    // Find new files
    for (const file of currentFiles) {
      if (!previousFiles.includes(file)) {
        newFiles.push(file);
        newCount++;
      }
    }
    
    // Save current file list
    try {
      fs.writeFileSync(fileListFile, JSON.stringify(currentFiles, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save file list: ${error.message}`);
    }
    
    return { count: newCount, files: newFiles };
  }

  async checkDeletedFiles() {
    this.log('🗑️ Checking for deleted files...');
    
    let deletedCount = 0;
    const deletedFiles = [];
    
    // Load previous file list
    const fileListFile = path.join(this.integrityLogDir, 'file-list.json');
    let previousFiles = [];
    
    if (fs.existsSync(fileListFile)) {
      try {
        previousFiles = JSON.parse(fs.readFileSync(fileListFile, 'utf8'));
      } catch (error) {
        this.log(`⚠️ Failed to load previous file list: ${error.message}`);
      }
    }
    
    // Get current file list
    const allFiles = await this.scanAllFiles();
    const currentFiles = allFiles.files;
    
    // Find deleted files
    for (const file of previousFiles) {
      if (!currentFiles.includes(file) && !fs.existsSync(file)) {
        deletedFiles.push(file);
        deletedCount++;
      }
    }
    
    return { count: deletedCount, files: deletedFiles };
  }

  async checkFileCorruption() {
    this.log('🚨 Checking for file corruption...');
    
    let corruptedCount = 0;
    const corruptedFiles = [];
    
    // Check critical files for corruption
    const criticalFiles = [
      'package.json',
      'next.config.js',
      'tsconfig.json',
      'tailwind.config.js'
    ];
    
    for (const file of criticalFiles) {
      if (fs.existsSync(file)) {
        try {
          // Try to read and parse the file
          const content = fs.readFileSync(file, 'utf8');
          
          if (file.endsWith('.json')) {
            JSON.parse(content); // This will throw if JSON is corrupted
          }
          
          // Check if file is empty or very small
          if (content.length < 10) {
            corruptedFiles.push({ file, reason: 'File too small' });
            corruptedCount++;
          }
          
        } catch (error) {
          corruptedFiles.push({ file, reason: error.message });
          corruptedCount++;
        }
      }
    }
    
    return { count: corruptedCount, files: corruptedFiles };
  }

  updateIntegrityMetrics(metrics) {
    this.integrityMetrics = { ...metrics };
    
    // Record integrity history
    this.integrityHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.integrityHistory.length > this.maxIntegrityHistory) {
      this.integrityHistory = this.integrityHistory.slice(-this.maxIntegrityHistory);
    }
    
    // Save integrity metrics
    const metricsFile = path.join(this.integrityLogDir, 'file-integrity-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.integrityMetrics,
      history: this.integrityHistory
    }, null, 2));
  }

  generateIntegrityReport() {
    const totalChecks = this.integrityHistory.length;
    const healthyChecks = this.integrityHistory.filter(h => h.corruptedFiles === 0 && h.modifiedFiles < 10).length;
    const warningChecks = this.integrityHistory.filter(h => h.corruptedFiles === 0 && h.modifiedFiles >= 10).length;
    const criticalChecks = this.integrityHistory.filter(h => h.corruptedFiles > 0).length;
    
    const report = {
      currentStatus: this.getIntegrityStatus(),
      summary: {
        totalChecks,
        healthy: healthyChecks,
        warning: warningChecks,
        critical: criticalChecks
      },
      recentHistory: this.integrityHistory.slice(-5),
      recommendations: this.generateIntegrityRecommendations()
    };
    
    return report;
  }

  getIntegrityStatus() {
    if (this.integrityMetrics.corruptedFiles > 0) {
      return 'critical';
    } else if (this.integrityMetrics.modifiedFiles > 20) {
      return 'warning';
    } else if (this.integrityMetrics.modifiedFiles > 10) {
      return 'attention';
    } else {
      return 'healthy';
    }
  }

  generateIntegrityRecommendations() {
    const recommendations = [];
    
    if (this.integrityMetrics.corruptedFiles > 0) {
      recommendations.push('🚨 File corruption detected. Check critical configuration files.');
    }
    
    if (this.integrityMetrics.modifiedFiles > 20) {
      recommendations.push('⚠️ Many files modified. Review recent changes for unauthorized modifications.');
    } else if (this.integrityMetrics.modifiedFiles > 10) {
      recommendations.push('📝 Several files modified. Monitor for unusual activity.');
    }
    
    if (this.integrityMetrics.newFiles > 10) {
      recommendations.push('🆕 Many new files detected. Verify they are expected additions.');
    }
    
    if (this.integrityMetrics.deletedFiles > 5) {
      recommendations.push('🗑️ Several files deleted. Confirm deletions are intentional.');
    }
    
    if (this.integrityHistory.length > 0) {
      const recentChecks = this.integrityHistory.slice(-3);
      const avgCorrupted = recentChecks.reduce((sum, h) => sum + h.corruptedFiles, 0) / recentChecks.length;
      
      if (avgCorrupted > 0) {
        recommendations.push('🚨 Persistent file corruption. Investigate root cause.');
      }
      
      if (avgCorrupted === 0 && this.integrityMetrics.modifiedFiles < 10) {
        recommendations.push('✅ File integrity is healthy. Continue regular monitoring.');
      }
    }
    
    return recommendations;
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous file integrity monitoring...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // 15 minutes default
    
    // Run initial integrity check
    await this.checkFileIntegrity();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running scheduled integrity check...');
      await this.checkFileIntegrity();
      
      // Generate and log report
      const report = this.generateIntegrityReport();
      this.log(`📊 Integrity Report: ${report.currentStatus}`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ File integrity monitoring active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const integrityMonitor = new FileIntegrityMonitor();
  
  try {
    await integrityMonitor.startContinuousMonitoring();
  } catch (error) {
    console.error('❌ File integrity monitor failed:', error);
    process.exit(1);
  }
}

// Start the integrity monitor
main().catch(console.error);
