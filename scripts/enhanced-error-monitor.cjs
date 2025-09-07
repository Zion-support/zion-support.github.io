#!/usr/bin/env node
/**
 * Enhanced Error Monitor
 * Monitors and analyzes errors across the application
 * Provides real-time error tracking and intelligent error categorization
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class EnhancedErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, "logs");
    this.errorReportsDir = path.join(this.projectRoot, "error-reports");
    this.errorPatterns = {
      syntax: /SyntaxError|ParseError|Unexpected token/gi,
      type: /TypeError|Cannot read property|is not a function/gi,
      reference: /ReferenceError|is not defined/gi,
      network: /ENOTFOUND|ECONNREFUSED|ETIMEDOUT/gi,
      build: /Module not found|Cannot resolve module/gi,
      test: /Test failed|AssertionError/gi,
      memory: /out of memory|heap out of memory/gi,
      permission: /EACCES|EPERM|permission denied/gi
    };
    
    this.errorStats = {
      total: 0,
      byType: {},
      byFile: {},
      bySeverity: { critical: 0, high: 0, medium: 0, low: 0 },
      trends: []
    };
    
    // Ensure directories exist
    [this.logsDir, this.errorReportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  categorizeError(errorMessage) {
    for (const [category, pattern] of Object.entries(this.errorPatterns)) {
      if (pattern.test(errorMessage)) {
        return category;
      }
    }
    return "unknown";
  }

  determineSeverity(errorMessage, category) {
    if (category === "syntax" || category === "build") {
      return "critical";
    } else if (category === "type" || category === "reference") {
      return "high";
    } else if (category === "network" || category === "permission") {
      return "medium";
    } else {
      return "low";
    }
  }

  async scanLogFiles() {
    this.log("🔍 Scanning log files for errors...");
    
    const logFiles = this.findLogFiles();
    const errors = [];
    
    for (const logFile of logFiles) {
      try {
        const content = fs.readFileSync(logFile, "utf8");
        const lines = content.split("\n");
        
        lines.forEach((line, index) => {
          if (this.isErrorLine(line)) {
            const error = this.parseErrorLine(line, logFile, index + 1);
            if (error) {
              errors.push(error);
            }
          }
        });
      } catch (error) {
        this.log(`Failed to read ${logFile}: ${error.message}`, "error");
      }
    }
    
    return errors;
  }

  findLogFiles() {
    const logFiles = [];
    const extensions = [".log", ".err", ".out"];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.endsWith(ext))) {
            logFiles.push(fullPath);
          }
        }
      } catch (error) {
        // Ignore permission errors
      }
    };
    
    scanDirectory(this.projectRoot);
    return logFiles;
  }

  isErrorLine(line) {
    const errorKeywords = [
      "error", "Error", "ERROR",
      "exception", "Exception", "EXCEPTION",
      "failed", "Failed", "FAILED",
      "fatal", "Fatal", "FATAL"
    ];
    
    return errorKeywords.some(keyword => line.includes(keyword));
  }

  parseErrorLine(line, file, lineNumber) {
    try {
      const timestamp = this.extractTimestamp(line);
      const message = line.trim();
      const category = this.categorizeError(message);
      const severity = this.determineSeverity(message, category);
      
      return {
        timestamp,
        message,
        file,
        lineNumber,
        category,
        severity
      };
    } catch (error) {
      return null;
    }
  }

  extractTimestamp(line) {
    const timestampRegex = /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)/;
    const match = line.match(timestampRegex);
    return match ? match[1] : new Date().toISOString();
  }

  async runBuildChecks() {
    this.log("🔨 Running build checks...");
    
    const checks = [
      { cmd: "npm run build", name: "Production Build" },
      { cmd: "npm run type-check", name: "TypeScript Check" },
      { cmd: "npm run lint", name: "ESLint Check" }
    ];
    
    const results = [];
    
    for (const check of checks) {
      try {
        const output = execSync(check.cmd, { 
          cwd: this.projectRoot,
          encoding: "utf8",
          timeout: 300000
        });
        this.log(`${check.name} completed successfully`, "success");
        results.push({ check: check.name, status: "success", output });
      } catch (error) {
        this.log(`${check.name} failed: ${error.message}`, "error");
        results.push({ 
          check: check.name, 
          status: "error", 
          error: error.message,
          output: error.stdout || error.stderr
        });
      }
    }
    
    return results;
  }

  async runTestChecks() {
    this.log("🧪 Running test checks...");
    
    try {
      const output = execSync("npm test", { 
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000
      });
      this.log("Tests completed successfully", "success");
      return { status: "success", output };
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, "error");
      return { 
        status: "error", 
        error: error.message,
        output: error.stdout || error.stderr
      };
    }
  }

  analyzeErrors(errors) {
    this.log("📊 Analyzing error patterns...");
    
    this.errorStats.total = errors.length;
    
    errors.forEach(error => {
      // Count by type
      this.errorStats.byType[error.category] = 
        (this.errorStats.byType[error.category] || 0) + 1;
      
      // Count by file
      const relativeFile = path.relative(this.projectRoot, error.file);
      this.errorStats.byFile[relativeFile] = 
        (this.errorStats.byFile[relativeFile] || 0) + 1;
      
      // Count by severity
      this.errorStats.bySeverity[error.severity]++;
    });
    
    // Calculate trends (simplified)
    this.errorStats.trends = this.calculateTrends(errors);
  }

  calculateTrends(errors) {
    const now = new Date();
    const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const last7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const recent24h = errors.filter(e => new Date(e.timestamp) > last24h).length;
    const recent7d = errors.filter(e => new Date(e.timestamp) > last7d).length;
    
    return {
      last24h,
      last7d,
      trend: recent24h > recent7d / 7 ? "increasing" : "decreasing"
    };
  }

  generateReport() {
    this.log("📊 Generating error analysis report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: this.errorStats,
      recommendations: this.generateRecommendations(),
      actionItems: this.generateActionItems()
    };
    
    const reportPath = path.join(this.errorReportsDir, `error-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = path.join(this.errorReportsDir, "ERROR_ANALYSIS.md");
    fs.writeFileSync(markdownPath, markdownReport);
    
    this.log(`📊 Error analysis report saved to ${reportPath}`, "success");
    this.log(`📄 Markdown report saved to ${markdownPath}`, "success");
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.errorStats.byType.syntax > 0) {
      recommendations.push("Fix syntax errors immediately - they prevent builds");
    }
    
    if (this.errorStats.byType.build > 0) {
      recommendations.push("Resolve module resolution issues");
    }
    
    if (this.errorStats.byType.type > 0) {
      recommendations.push("Add proper TypeScript types and null checks");
    }
    
    if (this.errorStats.bySeverity.critical > 0) {
      recommendations.push("Address critical errors before deployment");
    }
    
    if (this.errorStats.trends.trend === "increasing") {
      recommendations.push("Error trend is increasing - investigate root causes");
    }
    
    return recommendations;
  }

  generateActionItems() {
    const actionItems = [];
    
    // Top error types
    const topErrorTypes = Object.entries(this.errorStats.byType)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
    
    topErrorTypes.forEach(([type, count]) => {
      actionItems.push(`Fix ${count} ${type} errors`);
    });
    
    // Top error files
    const topErrorFiles = Object.entries(this.errorStats.byFile)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
    
    topErrorFiles.forEach(([file, count]) => {
      actionItems.push(`Review ${file} (${count} errors)`);
    });
    
    return actionItems;
  }

  generateMarkdownReport(report) {
    return `# Error Analysis Report

**Generated:** ${report.timestamp}

## Summary
- **Total Errors:** ${report.summary.total}
- **Critical:** ${report.summary.bySeverity.critical}
- **High:** ${report.summary.bySeverity.high}
- **Medium:** ${report.summary.bySeverity.medium}
- **Low:** ${report.summary.bySeverity.low}

## Error Types
${Object.entries(report.summary.byType)
  .map(([type, count]) => `- **${type}:** ${count}`)
  .join('\n')}

## Top Error Files
${Object.entries(report.summary.byFile)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 10)
  .map(([file, count]) => `- **${file}:** ${count}`)
  .join('\n')}

## Trends
- **Last 24h:** ${report.summary.trends.last24h} errors
- **Last 7d:** ${report.summary.trends.last7d} errors
- **Trend:** ${report.summary.trends.trend}

## Recommendations
${report.recommendations.map(item => `- ${item}`).join('\n')}

## Action Items
${report.actionItems.map(item => `- ${item}`).join('\n')}
`;
  }

  async run() {
    this.log("🚀 Starting Enhanced Error Monitoring...");
    
    try {
      // Scan for errors in log files
      const errors = await this.scanLogFiles();
      this.log(`Found ${errors.length} errors in log files`);
      
      // Run build and test checks
      const buildResults = await this.runBuildChecks();
      const testResults = await this.runTestChecks();
      
      // Analyze errors
      this.analyzeErrors(errors);
      
      // Generate report
      const report = this.generateReport();
      
      this.log("🎉 Error monitoring completed successfully!", "success");
      this.log(`📊 Analyzed ${this.errorStats.total} errors`);
      
      return report;
    } catch (error) {
      this.log(`❌ Error monitoring failed: ${error.message}`, "error");
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const monitor = new EnhancedErrorMonitor();
  monitor.run().catch(error => {
    console.error("Error monitoring failed:", error);
    process.exit(1);
  });
}

module.exports = EnhancedErrorMonitor;