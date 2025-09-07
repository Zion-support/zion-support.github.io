#!/usr/bin/env node

/**
 * Comprehensive Automation Orchestrator
 * Orchestrates all automation scripts for maximum efficiency
 */

const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

class ComprehensiveAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "reports");
    this.results = {
      success: [],
      errors: [],
      warnings: [],
      metrics: []
    };
  }

  async init() {
    // Create reports directory
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async run() {
    try {
      this.log("🚀 Starting Comprehensive Automation Orchestration...");
      this.log("🏢 Zion Tech Group - Advanced Automation System");
      
      await this.init();
      await this.preAutomationChecks();
      await this.runErrorFixing();
      await this.runBuildOptimization();
      await this.runPerformanceMonitoring();
      await this.runQualityChecks();
      await this.generateReport();
      
      this.log("🎉 Comprehensive automation completed successfully!", "success");
      this.log(`⏱️ Total orchestration time: ${Date.now() - this.startTime}ms`);
      
    } catch (error) {
      this.log(`Orchestration failed: ${error.message}`, "error");
      process.exit(1);
    }
  }

  async preAutomationChecks() {
    this.log("🔍 Running pre-automation checks...");
    
    // Check if we're in a Node.js project
    if (!fs.existsSync("package.json")) {
      throw new Error("Not in a Node.js project directory");
    }
    
    if (!fs.existsSync("scripts")) {
      this.log("Creating scripts directory...")
      fs.mkdirSync("scripts", { recursive: true })
    // Check Node.js version
    const nodeVersion = process.version
    this.log(`Node.js version: ${nodeVersion}`)
    this.results.success.push("Pre-automation checks passed")
  async runErrorFixing() {
    this.log("🔧 Running error fixing automation...")
    const errorFixingScripts = [
      "comprehensive-error-fixer.cjs",
      "auto-fixer.js"
    ];
    
    for (const script of errorFixingScripts) {
      await this.runScript(script, "error-fixing");
    }
  }

  async runBuildOptimization() {
    this.log("⚡ Running build optimization...")
    const buildScripts = [
      "advanced-build-optimizer.js",
      "optimize-build.js"
    ];
    
    for (const script of buildScripts) {
      await this.runScript(script, "build-optimization");
    }
  }

  async runPerformanceMonitoring() {
    this.log("📊 Running performance monitoring...")
    const performanceScripts = [
      "performance-monitor-enhanced.js",
      "performance-optimizer.js"
    ];
    
    for (const script of performanceScripts) {
      await this.runScript(script, "performance-monitoring");
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
        execSync(check.cmd, { stdio: "pipe" });
        this.log(`${check.name} completed successfully`, "success");
        this.results.success.push(`${check.name} check passed`);
      } catch (error) {
        this.results.warnings.push(`${check.name} had issues`);
        this.log(`${check.name} had issues`, "error");
      }
    }
  }

  async runScript(scriptName, category) {
    const scriptPath = path.join("scripts", scriptName);
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`⚠️ Script not found: ${scriptName}`);
      return;
    }
    
    try {
      execSync(`node ${scriptPath}`, { stdio: "pipe" });
      this.log(`${scriptName} completed successfully`, "success");
      this.results.success.push(`${scriptName} (${category}) completed`);
    } catch (error) {
      this.results.errors.push(`${scriptName} failed`);
      this.log(`${scriptName} failed: ${error.message}`, "error");
    }
  }

  async generateReport() {
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
    
    const reportPath = path.join(process.cwd(), "comprehensive-automation-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Comprehensive report saved to ${reportPath}`, "success");
    
    // Generate markdown summary
    const markdown = `# Comprehensive Automation Report

## Summary
- ✅ Successful: ${report.results.success.length}
- ❌ Errors: ${report.results.errors.length}
- ⚠️ Warnings: ${report.results.warnings.length}

## Successful Operations
${report.results.success.map(item => `- ${item}`).join("\n")}

## Errors
${report.results.errors.map(item => `- ${item}`).join("\n")}

## Warnings
${report.results.warnings.map(item => `- ${item}`).join("\n")}

## Recommendations
${report.recommendations.map(item => `- ${item}`).join("\n")}

## Next Steps
${report.nextSteps.map(item => `- ${item}`).join("\n")}

*Generated on ${report.timestamp}*
`;
    
    const markdownPath = path.join(process.cwd(), "AUTOMATION_REPORT.md");
    fs.writeFileSync(markdownPath, markdown);
    this.log(`📄 Markdown summary saved to ${markdownPath}`, "success");
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
      "Document any custom automation workflows"];
    return nextSteps;
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.ensureDirectories(),}
;
  ensureDirectories() {;
    if (!fs.existsSync(this.reportsDir)) {;
      fs.mkdirSync(this.reportsDir, { "recursive": true }),}
  }
}

// Run the orchestrator
const orchestrator = new ComprehensiveAutomationOrchestrator();
orchestrator.startTime = Date.now();
orchestrator.run().catch(console.error);