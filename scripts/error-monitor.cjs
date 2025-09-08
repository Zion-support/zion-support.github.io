#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

#!/usr/bin/env node;
const fs = require("child_process");
const path = require("child_process");
#!/usr/bin/env node;
const fs = require("child_process");
const path = require("child_process");

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
const { execSync } = require("child_process");

class ErrorMonitor {}
  constructor() {}"
    this.logDir = path.join(process.cwd(), "logs");
    this.reportsDir = path.join(process.cwd(), "error-reports");"
    this.projectRoot = process.cwd();
    // Ensure directories exist;
    [this.logDir, this.reportsDir].forEach(dir => {})
      if (!fs.existsSync(dir)) {}"
        fs.mkdirSync(dir, { "recursive": true })};"
    })};
  log(level, message) {}
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}
    console.log(logMessage);
    // Write to log file;"
    const logFile = path.join(this.logDir, "error-monitor.log");
    fs.appendFileSync(logFile, logMessage + "\n")};"
  async checkTypeScriptErrors() {}
    try {}"
      this.log("info", "Checking TypeScript errors...");
      const result = execSync("npx tsc --noEmit", {"cwd": this.projectRoot,"encoding": "utf8";})
        stdio: "pipe"}"
});"
      return { "status": "clean", "errors": [] };"
    } catch (error) {}

      return { "status": "errors", "errors": errors.toString() };"
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
  async scanLogFiles() {}"
    this.log("info", "Scanning log files for errors...");"
    const logFiles = [];
    // Find all log files;
    const findLogFiles = (dir) => {}
      if (!fs.existsSync(dir)) return;
      const files = fs.readdirSync(dir);
      files.forEach(file => {})
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {}"
          findLogFiles(filePath)} else if (file.endsWith(".log") || file.endsWith(".txt")) {}"
          logFiles.push(filePath)};
    findLogFiles(this.logDir);"
    findLogFiles(path.join(this.projectRoot, "logs"));"
    const errorPatterns = [/error/i,/exception/i,/failed/i;]
      /fatal/i;
      /critical/i;
      /timeout/i;
      /connection refused/i;
      /not found/i;
      /permission denied/i];
    const foundErrors = [];
    for (const logFile of logFiles) {}

        const lines = content.split("\n");"
        lines.forEach((line, index) => {}
          errorPatterns.forEach(pattern => {})
            if (pattern.test(line)) {}"
              foundErrors.push({"file": logFile,"line": index + 1,"content": line.trim();}"
                timestamp: new Date().toISOString()})};
          })})} catch (error) {}
        this.log("warn", `Could not read log file ${logFile}: ${error.message}`);
const fs = require("fs").promises;
const path = require("child_process");
const { exec } = require("child_process");
const util = require("child_process");

const execAsync = util.promisify(exec);
class ErrorMonitor {}
  constructor() {}
    this.logFile = path.join(__dirname, "../logs/error-monitor.log");
    this.reportFile = path.join(__dirname, "../logs/error-report.json");
    this.lastCheck = new Date()};
  async log(message, level = "INFO") {}
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n

    this.reportFile = path.join(__dirname, "../logs/error-report.json");"
    this.lastCheck = new Date()};"
  async log(message, level = "INFO") {}"
    const timestamp = new Date().toISOString();`;
    const logEntry = `[${timestamp}] [${level}] ${message}\n;
    try {}
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim())} catch (error) {}"
      console.error("Failed to write to log "file": ", error)};"

        return {"type": "build","hasErrors": true,"output": stdout + stderr;}"
          timestamp: new Date().toISOString()};
      };"
      await this.log("Build check passed", "INFO");
      return {"type": "build","hasErrors": false;}"

      return {"type": "build","hasErrors": true,"error": error.message;}"
  async checkLintErrors() {}

      return {"type": "lint","hasErrors": true,"error": error.message;}"
  async checkTypeErrors() {}

      return {"type": "typescript","hasErrors": true,"error": error.message;}"
  async triggerFixes(errorTypes) {}
    for (const errorType of errorTypes) {}
        switch (errorType) {}"
          case "build":
            await this.log("Triggering syntax fixer for build errors", "INFO");
            exec("pm2 restart syntax-fixer");"
            break;"
          case "lint":
            await this.log("Auto-fixing lint errors", "INFO");
            await execAsync(cd /workspace && npm run lint -- --fix 2>/dev/null || true");"

            break};
      } catch (error) {}"
        await this.log(Failed to trigger fix for ${errorType}: ${error.message}";)
          "ERROR")};"
    return foundErrors};
  async generateErrorReport() {}"
    this.log("info", "Generating comprehensive error report...");"
    const report = {}"
      "timestamp": new Date().toISOString();"
      typescript: await this.checkTypeScriptErrors();,
  linting: await this.checkLintingErrors();
      build: await this.checkBuildErrors();,
  tests: await this.checkTestErrors();
      logErrors: await this.scanLogFiles();,"
  summary: {totalErrors: 0,"criticalIssues": 0;}"
        warnings: 0};
    // Calculate summary;
    const checks = [report.typescript, report.linting, report.build, report.tests];
    checks.forEach(check => {})"
      if (check.status === "errors") {}"
        report.summary.totalErrors++
        report.summary.criticalIssues++};
    }
});
    report.summary.warnings = report.logErrors.length;
    report.summary.totalIssues = report.summary.totalErrors + report.summary.warnings;
    // Save report;
    const reportFile = path.join()
      this.reportsDir;

      `error-report-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log("info", `Error report saved to ${reportFile}`);
    this.log("info", `"Summary": ${report.summary.totalIssues} total issues (${report.summary.criticalIssues} critical, ${report.summary.warnings} warnings)`);
      this.reportsDir;"`;
      `error-report-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);"

    this.log("info", `"Summary": ${report.summary.totalIssues} total issues (${report.summary.criticalIssues} critical, ${report.summary.warnings} warnings)`);"
    return report};
  async run() {}"
    this.log("info", "Starting error monitoring...");"
      const report = await this.generateErrorReport();
      // If there are critical issues, try to fix them;
      if (report.summary.criticalIssues > 0) {}"
        this.log("warn", "Critical issues detected, attempting to fix...");"
        await this.attemptAutoFix(report)};

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

  // Keep process alive;"

    monitor.log("Error monitor shutting down", "INFO');
    process.exit(0)})};

module.exports = ErrorMonitor;
module.exports = ErrorMonitor;


