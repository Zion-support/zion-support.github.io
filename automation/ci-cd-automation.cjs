#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Starting CI/CD Automation...");

class CICDAutomation {
  constructor() {
    this.ciResults = {
      dependencies: { status: "pending", result: null },
      linting: { status: "pending", result: null },
      typeCheck: { status: "pending", result: null },
      build: { status: "pending", result: null },
      testing: { status: "pending", result: null },
      quality: { status: "pending", result: null }
    };
    this.reportDir = path.join(process.cwd(), "ci-cd-reports");
    this.ensureReportDirectory();
    this.startTime = Date.now();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async installDependencies() {
    try {
      console.log("📦 Installing dependencies...");
      execSync("npm install", { stdio: "inherit" });
      this.ciResults.dependencies = { status: "success", result: "Dependencies installed successfully" };
    } catch (error) {
      this.ciResults.dependencies = { status: "error", result: error.message };
      throw error;
    }
  }

  async runLinting() {
    try {
      console.log("🔍 Running linting...");
      execSync("npm run lint", { stdio: "inherit" });
      this.ciResults.linting = { status: "success", result: "Linting passed" };
    } catch (error) {
      this.ciResults.linting = { status: "error", result: error.message };
      console.log("⚠️ Linting failed, attempting to fix...");
      try {
        execSync("npm run lint:fix", { stdio: "inherit" });
        this.ciResults.linting = { status: "success", result: "Linting issues auto-fixed" };
      } catch (fixError) {
        this.ciResults.linting = { status: "error", result: `Linting failed: ${fixError.message}` };
      }
    }
  }

  async runTypeCheck() {
    try {
      console.log("🔧 Running type check...");
      execSync("npm run type-check", { stdio: "inherit" });
      this.ciResults.typeCheck = { status: "success", result: "Type check passed" };
    } catch (error) {
      this.ciResults.typeCheck = { status: "error", result: error.message };
    }
  }

  async runBuild() {
    try {
      console.log("🏗️ Running build...");
      execSync("npm run build", { stdio: "inherit" });
      this.ciResults.build = { status: "success", result: "Build completed successfully" };
    } catch (error) {
      this.ciResults.build = { status: "error", result: error.message };
      throw error;
    }
  }

  async runTests() {
    try {
      console.log("🧪 Running tests...");
      execSync("npm run test:smoke", { stdio: "inherit" });
      this.ciResults.testing = { status: "success", result: "Tests passed" };
    } catch (error) {
      this.ciResults.testing = { status: "error", result: error.message };
    }
  }

  async runQualityChecks() {
    try {
      console.log("✅ Running quality checks...");
      execSync("npm run check", { stdio: "inherit" });
      this.ciResults.quality = { status: "success", result: "Quality checks passed" };
    } catch (error) {
      this.ciResults.quality = { status: "error", result: error.message };
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      results: this.ciResults,
      summary: {
        total: Object.keys(this.ciResults).length,
        passed: Object.values(this.ciResults).filter(r => r.status === "success").length,
        failed: Object.values(this.ciResults).filter(r => r.status === "error").length
      }
    };

    const reportFile = path.join(this.reportDir, `ci-cd-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 CI/CD Report generated: ${reportFile}`);
    console.log(`✅ Passed: ${report.summary.passed}/${report.summary.total}`);
    console.log(`❌ Failed: ${report.summary.failed}/${report.summary.total}`);
    
    return report;
  }

  async run() {
    try {
      console.log("🚀 Starting CI/CD Pipeline...");
      
      await this.installDependencies();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runBuild();
      await this.runTests();
      await this.runQualityChecks();
      
      const report = this.generateReport();
      
      if (report.summary.failed === 0) {
        console.log("🎉 CI/CD Pipeline completed successfully!");
      } else {
        console.log("⚠️ CI/CD Pipeline completed with some failures");
      }
      
    } catch (error) {
      console.error("❌ CI/CD Pipeline failed:", error.message);
      this.generateReport();
      process.exit(1);
    }
  }
}

// Run the automation
const automation = new CICDAutomation();
automation.run().catch(console.error);