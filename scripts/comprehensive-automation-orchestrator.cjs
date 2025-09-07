#!/usr/bin/env node
/**
 * Comprehensive Automation Orchestrator
 * Orchestrates all automation scripts for maximum efficiency
 */
const fs = require("fs")
const path = require("path")
const { execSync, spawn } = require("child_process")

class ComprehensiveAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.results = {
      success: [],
      errors: [],
      warnings: [],
      metrics: {}
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = "info") {
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`${prefix} ${message}`);
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
    this.startTime = Date.now();
    this.log("🚀 Starting Comprehensive Automation Orchestration...");
    this.log("🏢 Zion Tech Group - Advanced Automation System");
    
    try {
      await this.runPreAutomationChecks();
      await this.runErrorFixing();
      await this.runBuildOptimization();
      await this.runPerformanceMonitoring();
      await this.runQualityChecks();
      
      const report = this.generateReport();
      
      this.log("🎉 Comprehensive automation completed successfully!", "success");
      this.log(`⏱️ Total orchestration time: ${report.duration}ms`);
      
      return report;
    } catch (error) {
      this.log(`❌ Orchestration failed: ${error.message}`, "error");
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