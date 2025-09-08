#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  logsDir: path.join(__dirname, '..', 'logs'),
  rootDir: path.join(__dirname, '..'),
  maxLogEntries: 1000,
  retentionDays: 30,
  criticalKeywords: [
    'ECONNRESET',
    'TIMEOUT',
    'MEMORY',
    'CRASH',
    'FATAL',
    'CRITICAL',
    'SECURITY',
    'UNAUTHORIZED',
    'PERMISSION DENIED',
    'DATABASE ERROR',
    'COMPILATION ERROR'
  ],
  performanceThresholds: {
    responseTime: 5000, // 5 seconds
    memoryUsage: 512 * 1024 * 1024, // 512MB
    errorRate: 0.05 // 5%
  }
};

class ErrorMonitor {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.performance = [];
    this.summary = {
      totalEntries: 0,
      errorCount: 0,
      warningCount: 0,
      criticalCount: 0,
      timeRange: null
    };
  }

  /**
   * Initialize monitoring by ensuring logs directory exists
   */
  init() {
    try {
      if (!fs.existsSync(CONFIG.logsDir)) {
        fs.mkdirSync(CONFIG.logsDir, { recursive: true });
        console.log('📁 Created logs directory');
      }
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize error monitor:', error.message);
      return false;
    }
  }

  /**
   * Read and parse all log files
   */
  async readLogs() {
    try {
      const files = fs.readdirSync(CONFIG.logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));

      // Also include root-level .log files for completeness
      const rootFiles = fs
        .readdirSync(CONFIG.rootDir)
        .filter(
          file => file.endsWith('.log') && !logFiles.includes(file)
        );

      const allLogFiles = [...logFiles, ...rootFiles];

      console.log(`📋 Found ${allLogFiles.length} log files`);

      for (const file of allLogFiles) {
        const filePath = fs.existsSync(path.join(CONFIG.logsDir, file))
          ? path.join(CONFIG.logsDir, file)
          : path.join(CONFIG.rootDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          try {
            const entry = JSON.parse(line);
            this.processLogEntry(entry);
          } catch (parseError) {
            // Handle non-JSON log entries
            this.processPlainTextLog(line, file);
          }
        }
      }
      
      // Sort by timestamp
      this.errors.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
      this.warnings.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
      
    } catch (error) {
      console.error('❌ Error reading logs:', error.message);
    }
  }

  /**
   * Process a structured log entry
   */
  processLogEntry(entry) {
    this.summary.totalEntries++;
    
    // Update time range
    if (entry.timestamp) {
      const timestamp = new Date(entry.timestamp);
      if (!this.summary.timeRange) {
        this.summary.timeRange = { start: timestamp, end: timestamp };
      } else {
        if (timestamp < this.summary.timeRange.start) {
          this.summary.timeRange.start = timestamp;
        }
        if (timestamp > this.summary.timeRange.end) {
          this.summary.timeRange.end = timestamp;
        }
      }
    }

    // Categorize by level
    if (entry.level === 'error' || entry.level === 'critical') {
      this.errors.push(entry);
      this.summary.errorCount++;
      
      if (entry.level === 'critical') {
        this.summary.criticalCount++;
      }
    } else if (entry.level === 'warn') {
      this.warnings.push(entry);
      this.summary.warningCount++;
    }

    // Check for critical keywords
    if (this.containsCriticalKeyword(entry.message)) {
      this.summary.criticalCount++;
    }

    // Track performance metrics
    if (entry.performance) {
      this.performance.push({
        timestamp: entry.timestamp,
        memory: entry.performance.memory,
        timing: entry.performance.timing,
        category: entry.category
      });
    }
  }

  /**
   * Process plain text log entries (fallback)
   */
  processPlainTextLog(line, filename) {
    this.summary.totalEntries++;
    
    const entry = {
      message: line,
      timestamp: new Date().toISOString(),
      source: filename,
      level: this.detectLogLevel(line)
    };

    if (entry.level === 'error') {
      this.errors.push(entry);
      this.summary.errorCount++;
    } else if (entry.level === 'warn') {
      this.warnings.push(entry);
      this.summary.warningCount++;
    }
  }

  /**
   * Detect log level from plain text
   */
  detectLogLevel(text) {
    const upperText = text.toUpperCase();

    // Treat recommendation lines as informational only
    if (upperText.includes('CONSIDER SETTING UP AUTOMATED ALERTS') || upperText.startsWith('[ALERT]')) {
      return 'info';
    }
    
    return foundErrors}

// Run if called directly;
if (require.main === module) {}
  const monitor = new ErrorMonitor();
  // Run once immediately, then every 5 minutes;
  monitor.run();
  setInterval(() => monitor.run(), 5 * 60 * 1000);
;
  // Keep process alive}
;
module.exports = ErrorMonitor;

