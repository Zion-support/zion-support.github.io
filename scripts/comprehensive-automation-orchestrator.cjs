#!/usr/bin/env node
/**
 * Comprehensive Automation Orchestrator
 * Orchestrates all automation scripts for maximum efficiency
 */
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.results = {
      success: [],
      errors: [],
      warnings: [],
      metrics: {}
    };
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async runScript(scriptName, category) {
    try {
      this.log(`Running ${scriptName} (${category})...`);
      const scriptPath = path.join("scripts", scriptName);
      
      if (!fs.existsSync(scriptPath)) {
        this.log(`Script ${scriptName} not found, skipping...`, "warning");
        this.results.warnings.push(`Script ${scriptName} not found`);
        return;
      }

      execSync(`node ${scriptPath}`, { 
        stdio: "pipe",
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000 // 5 minutes timeout
      });
      
      this.log(`${scriptName} completed successfully`, "success");
      this.results.success.push(`${scriptName} (${category}) completed`);
    } catch (error) {
      this.results.errors.push(`${scriptName} failed: ${error.message}`);
      this.log(`${scriptName} failed: ${error.message}`, "error");
    }
  }

  async runCommand(cmd, name) {
    try {
      this.log(`Running ${name}...`);
      execSync(cmd, { 
        stdio: "pipe",
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000
      });
      this.log(`${name} completed successfully`, "success");
      this.results.success.push(`${name} completed`);
    } catch (error) {
      this.results.warnings.push(`${name} had issues: ${error.message}`);
      this.log(`${name} had issues: ${error.message}`, "warning");
    }
  }

  async preAutomationChecks() {
    this.log("Running pre-automation checks...");
    
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
      "comprehensive-error-fixer.cjs",
      "auto-fixer.js",
      "syntax-fixer.cjs",
      "fix-all-syntax-errors.cjs"
    ];
    
    for (const script of errorFixingScripts) {
      await this.runScript(script, "error-fixing");
    }
  }

  async runBuildOptimization() {
    this.log("⚡ Running build optimization...");
    
    const buildScripts = [
      "advanced-build-optimizer.js",
      "build-optimizer.cjs",
      "optimize-performance.js"
    ];
    
    for (const script of buildScripts) {
      await this.runScript(script, "build-optimization");
    }
  }

  async runPerformanceMonitoring() {
    this.log("📊 Running performance monitoring...");
    
    const performanceScripts = [
      "performance-monitor-enhanced.js",
      "performance-optimizer.js",
      "performance-monitor.cjs"
    ];
    
    for (const script of performanceScripts) {
      await this.runScript(script, "performance-monitoring");
    }
  }

  async runQualityChecks() {
    this.log("🔍 Running quality checks...");
    
    const qualityCommands = [
      { cmd: "npm run lint", name: "ESLint" },
      { cmd: "npm run type-check", name: "TypeScript" },
      { cmd: "npm run test:smoke", name: "Smoke Tests" }
    ];
    
    for (const { cmd, name } of qualityCommands) {
      await this.runCommand(cmd, name);
    }
  }

  async runSecurityAudit() {
    this.log("🔒 Running security audit...");
    
    const securityScripts = [
      "security-audit.cjs",
      "security-auditor.js",
      "security-enhancer.js"
    ];
    
    for (const script of securityScripts) {
      await this.runScript(script, "security-audit");
    }
  }

  async runSEOOptimization() {
    this.log("🔍 Running SEO optimization...");
    
    const seoScripts = [
      "seo-optimizer.js",
      "seo-enhancer.js",
      "generate-dynamic-sitemap.js"
    ];
    
    for (const script of seoScripts) {
      await this.runScript(script, "seo-optimization");
    }
  }

  generateReport() {
    this.log("📋 Generating comprehensive automation report...");
    
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
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
    this.log(`📊 Comprehensive report saved to ${reportPath}`, "success");
    
    // Generate markdown summary
    this.generateMarkdownReport(report);
  }

  generateMarkdownReport(report) {
    const markdown = `# Comprehensive Automation Report

## Summary
- **Timestamp**: ${report.timestamp}
- **Duration**: ${report.duration}
- **Successful**: ${report.summary.successful}
- **Errors**: ${report.summary.errors}
- **Warnings**: ${report.summary.warnings}

## Results

### Successful Operations
${report.results.success.map(item => `- ${item}`).join("\n")}

### Errors
${report.results.errors.map(item => `- ${item}`).join("\n")}

### Warnings
${report.results.warnings.map(item => `- ${item}`).join("\n")}

## Recommendations
${report.recommendations.map(item => `- ${item}`).join("\n")}

## Next Steps
${report.nextSteps.map(item => `- ${item}`).join("\n")}
`;
    
    const markdownPath = path.join(process.cwd(), "AUTOMATION_REPORT.md");
    fs.writeFileSync(markdownPath, markdown);
    this.log(`📝 Markdown summary saved to ${markdownPath}`, "success");
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

  async orchestrate() {
    try {
      this.log("🚀 Starting Comprehensive Automation Orchestration...");
      this.log("🏢 Zion Tech Group - Advanced Automation System");
      
      await this.preAutomationChecks();
      await this.runErrorFixing();
      await this.runBuildOptimization();
      await this.runPerformanceMonitoring();
      await this.runSecurityAudit();
      await this.runSEOOptimization();
      await this.runQualityChecks();
      
      this.generateReport();
      
      this.log("🎉 Comprehensive automation completed successfully!", "success");
      this.log(`⏱️ Total orchestration time: ${Date.now() - this.startTime}ms`);
      
    } catch (error) {
      this.log(`❌ Orchestration failed: ${error.message}`, "error");
      process.exit(1);
    }
  }
}

// Run the orchestrator
const orchestrator = new AutomationOrchestrator();
orchestrator.orchestrate().catch(console.error);