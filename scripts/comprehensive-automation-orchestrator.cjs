#!/usr/bin/env node
/**
 * Comprehensive Automation Orchestrator
 * Orchestrates all automation scripts for maximum efficiency
 * Enhanced with parallel execution, better error handling, and comprehensive monitoring
 */
const fs = require("fs")
const path = require("path")
const { execSync, spawn } = require("child_process")
const os = require("os")

class ComprehensiveAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logsDir = path.join(this.projectRoot, "logs");
    this.results = {
      success: [],
      errors: [],
      warnings: [],
      metrics: {
        startTime: null,
        endTime: null,
        duration: 0,
        memoryUsage: {},
        systemInfo: {}
      }
    };
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    // Initialize system info
    this.results.metrics.systemInfo = {
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      cpus: os.cpus().length,
      totalMemory: os.totalmem(),
      freeMemory: os.freemem()
    };
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    const logMessage = `[${timestamp}] ${prefix} ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, "automation-orchestrator.log");
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async runScriptsInParallel(scripts, category, maxConcurrency = 3) {
    this.log(`Running ${scripts.length} ${category} scripts in parallel (max ${maxConcurrency} concurrent)...`);
    
    const results = [];
    const executing = [];
    
    for (const script of scripts) {
      if (!fs.existsSync(script)) {
        this.log(`⚠️ Script not found: ${script}`);
        continue;
      }
      
      const promise = this.runScript(script, category);
      results.push(promise);
      
      if (results.length >= maxConcurrency) {
        await Promise.allSettled(results.splice(0, maxConcurrency));
      }
    }
    
    // Wait for remaining scripts
    if (results.length > 0) {
      await Promise.allSettled(results);
    }
    
    this.log(`Completed ${category} scripts execution`);
  }

  async runScript(scriptPath, category) {
    try {
      this.log(`Running ${scriptPath}...`);
      const result = execSync(`node ${scriptPath}`, { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      this.log(`${scriptPath} completed successfully`, "success");
      this.results.success.push({ script: scriptPath, category, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`${scriptPath} failed: ${error.message}`, "error");
      this.results.errors.push({ script: scriptPath, category, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runCommand(cmd, name) {
    try {
      this.log(`Running ${name}...`);
      const result = execSync(cmd, { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      this.log(`${name} completed successfully`, "success");
      this.results.success.push({ command: cmd, name, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`${name} had issues: ${error.message}`, "error");
      this.results.errors.push({ command: cmd, name, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runPreAutomationChecks() {
    this.log("🔍 Running pre-automation checks...");
    
    // Check if we're in a Node.js project
    if (!fs.existsSync("package.json")) {
      throw new Error("Not in a Node.js project directory");
    }
    
    // Ensure scripts directory exists
    if (!fs.existsSync("scripts")) {
      this.log("Creating scripts directory...");
      fs.mkdirSync("scripts", { recursive: true });
    }
    
    // Check Node.js version
    const nodeVersion = process.version;
    this.log(`Node.js version: ${nodeVersion}`);
    
    this.results.success.push("Pre-automation checks passed");
  }

  async runErrorFixing() {
    this.log("🔧 Running error fixing automation...");
    const errorFixingScripts = [
      "scripts/comprehensive-error-fixer.cjs",
      "scripts/auto-fixer.js"
    ];
    
    for (const script of errorFixingScripts) {
      if (fs.existsSync(script)) {
        await this.runScript(script, "error-fixing");
      } else {
        this.log(`⚠️ Script not found: ${script}`);
      }
    }
  }

  async runBuildOptimization() {
    this.log("⚡ Running build optimization...");
    const buildScripts = [
      "scripts/advanced-build-optimizer.js",
      "scripts/optimize-build.js"
    ];
    
    for (const script of buildScripts) {
      if (fs.existsSync(script)) {
        await this.runScript(script, "build-optimization");
      } else {
        this.log(`⚠️ Script not found: ${script}`);
      }
    }
  }

  async runPerformanceMonitoring() {
    this.log("📊 Running performance monitoring...");
    const perfScripts = [
      "scripts/performance-monitor-enhanced.js",
      "scripts/performance-optimizer.js"
    ];
    
    for (const script of perfScripts) {
      if (fs.existsSync(script)) {
        await this.runScript(script, "performance-monitoring");
      } else {
        this.log(`⚠️ Script not found: ${script}`);
      }
    }
  }

  async runQualityChecks() {
    this.log("🔍 Running quality checks...");
    const qualityChecks = [
      { cmd: "npm run lint", name: "ESLint" },
      { cmd: "npm run type-check", name: "TypeScript" },
      { cmd: "npm run build", name: "Build" }
    ];
    
    for (const check of qualityChecks) {
      try {
        const result = execSync(check.cmd, { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 300000
        });
        this.log(`${check.name} completed successfully`, "success");
        this.results.success.push({ check: check.name, output: result });
      } catch (error) {
        this.log(`${check.name} had issues: ${error.message}`, "error");
        this.results.errors.push({ check: check.name, error: error.message });
      }
    }
  }

  generateReport() {
    this.log("📊 Generating comprehensive automation report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      summary: {
        successful: this.results.success.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length
      },
      results: this.results,
      recommendations: this.generateRecommendations(),
      nextSteps: this.generateNextSteps()
    };
    
    const reportPath = path.join(this.projectRoot, "comprehensive-automation-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Comprehensive report saved to ${reportPath}`, "success");
    
    // Generate markdown summary
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = path.join(this.projectRoot, "AUTOMATION_REPORT.md");
    fs.writeFileSync(markdownPath, markdownReport);
    this.log(`📄 Markdown summary saved to ${markdownPath}`, "success");
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.results.errors.length > 0) {
      recommendations.push("Address all errors before deployment");
    }
    
    if (this.results.warnings.length > 0) {
      recommendations.push("Review and address warnings for better code quality");
    }
    
    recommendations.push("Implement continuous integration for automated testing");
    recommendations.push("Set up automated deployment pipeline");
    recommendations.push("Monitor performance metrics in production");
    recommendations.push("Regular security audits and dependency updates");
    
    return recommendations;
  }

  generateNextSteps() {
    return [
      "Review the comprehensive automation report",
      "Address any critical errors identified",
      "Implement recommended optimizations",
      "Set up monitoring for production environment",
      "Schedule regular automation runs",
      "Document any custom automation workflows"
    ];
  }

  generateMarkdownReport(report) {
    return `# Automation Report

**Timestamp:** ${report.timestamp}
**Duration:** ${report.duration}ms

## Summary
- ✅ Successful: ${report.summary.successful}
- ❌ Errors: ${report.summary.errors}
- ⚠️ Warnings: ${report.summary.warnings}

## Successful Operations
${report.results.success.map(item => `- ${item.script || item.command || item.check || 'Operation'}`).join('\n')}

## Errors
${report.results.errors.map(item => `- ${item.script || item.command || item.check || 'Operation'}: ${item.error}`).join('\n')}

## Warnings
${report.results.warnings.map(item => `- ${item}`).join('\n')}

## Recommendations
${report.recommendations.map(item => `- ${item}`).join('\n')}

## Next Steps
${report.nextSteps.map(item => `- ${item}`).join('\n')}
`;
  }

  async run() {
    this.results.metrics.startTime = Date.now();
    this.log("🚀 Starting Comprehensive Automation Orchestration...");
    this.log("🏢 Zion Tech Group - Advanced Automation System");
    
    try {
      // Track memory usage
      this.results.metrics.memoryUsage.start = process.memoryUsage();
      
      await this.runPreAutomationChecks();
      
      // Run automation phases in parallel where possible
      const automationPhases = [
        this.runErrorFixing(),
        this.runBuildOptimization(),
        this.runPerformanceMonitoring()
      ];
      
      await Promise.allSettled(automationPhases);
      
      // Run quality checks after automation
      await this.runQualityChecks();
      
      // Track final metrics
      this.results.metrics.endTime = Date.now();
      this.results.metrics.duration = this.results.metrics.endTime - this.results.metrics.startTime;
      this.results.metrics.memoryUsage.end = process.memoryUsage();
      
      const report = this.generateReport();
      
      this.log("🎉 Comprehensive automation completed successfully!", "success");
      this.log(`⏱️ Total orchestration time: ${(report.duration / 1000).toFixed(2)}s`);
      this.log(`💾 Memory usage: ${(this.results.metrics.memoryUsage.end.heapUsed / 1024 / 1024).toFixed(2)}MB`);
      
      return report;
    } catch (error) {
      this.log(`❌ Orchestration failed: ${error.message}`, "error");
      this.results.metrics.endTime = Date.now();
      this.results.metrics.duration = this.results.metrics.endTime - this.results.metrics.startTime;
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new ComprehensiveAutomationOrchestrator();
  orchestrator.run().catch(error => {
    console.error("Automation orchestration failed:", error);
    process.exit(1);
  });
}

module.exports = ComprehensiveAutomationOrchestrator;