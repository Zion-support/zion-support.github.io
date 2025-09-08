#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔍 Starting lint automation...");

class LintAutomation {
  constructor() {
    this.logFile = path.join(__dirname, "logs", "lint-automation.log");
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    try {
      this.log("🔍 Running ESLint...");
      const startTime = Date.now();
      
      const output = execSync("npm run lint", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      
      const duration = Date.now() - startTime;
      this.log(`✅ Linting completed in ${duration}ms`);
      
      return {
        status: "success",
        duration: duration,
        output: output
      };
    } catch (error) {
      this.log(`❌ Linting failed: ${error.message}`);
      
      // Try to fix linting issues
      try {
        this.log("🔧 Attempting to fix linting issues...");
        execSync("npm run lint:fix", {
          encoding: "utf8",
          cwd: process.cwd(),
          stdio: "pipe"
        });
        this.log("✅ Linting issues fixed");
        
        return {
          status: "fixed",
          duration: 0,
          output: "Issues were automatically fixed"
        };
      } catch (fixError) {
        this.log(`❌ Could not fix linting issues: ${fixError.message}`);
        
        return {
          status: "failure",
          duration: 0,
          error: error.message,
          output: error.stdout || error.stderr || "Unknown error"
        };
      }
    }
  }

  async runTypeCheck() {
    try {
      this.log("🔍 Running TypeScript type check...");
      const startTime = Date.now();
      
      const output = execSync("npm run type-check", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      
      const duration = Date.now() - startTime;
      this.log(`✅ Type checking completed in ${duration}ms`);
      
      return {
        status: "success",
        duration: duration,
        output: output
      };
    } catch (error) {
      this.log(`❌ Type checking failed: ${error.message}`);
      
      return {
        status: "failure",
        duration: 0,
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error"
      };
    }
  }

  async runQualityChecks() {
    try {
      this.log("📊 Running quality checks...");
      const startTime = Date.now();
      
      const output = execSync("npm run check", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      
      const duration = Date.now() - startTime;
      this.log(`✅ Quality checks completed in ${duration}ms`);
      
      return {
        status: "success",
        duration: duration,
        output: output
      };
    } catch (error) {
      this.log(`❌ Quality checks failed: ${error.message}`);
      
      return {
        status: "failure",
        duration: 0,
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error"
      };
    }
  }

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: Object.keys(results).length,
        passed: Object.values(results).filter(r => r.status === "success").length,
        failed: Object.values(results).filter(r => r.status === "failure").length,
        fixed: Object.values(results).filter(r => r.status === "fixed").length
      },
      results: results
    };

    const reportPath = path.join(process.cwd(), "lint-reports", "lint-automation-report.json");
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    try {
      this.log("🚀 Starting lint automation pipeline...");
      
      const results = {
        linting: await this.runLinting(),
        typeCheck: await this.runTypeCheck(),
        quality: await this.runQualityChecks()
      };
      
      const report = await this.generateReport(results);
      
      this.log(`\n🎯 Lint Automation Summary:`);
      this.log(`Total Checks: ${report.summary.total}`);
      this.log(`Passed: ${report.summary.passed} ✅`);
      this.log(`Failed: ${report.summary.failed} ❌`);
      this.log(`Fixed: ${report.summary.fixed} 🔧`);
      
      if (report.summary.failed > 0) {
        this.log("\n❌ Some checks failed. Review the report for details.");
        process.exit(1);
      } else {
        this.log("\n✅ All lint checks passed successfully!");
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Lint automation failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Main execution
async function main() {
  const lintAutomation = new LintAutomation();
  await lintAutomation.run();
}

// Start the lint automation
main().catch(error => {
  console.error("❌ Failed to start lint automation:", error);
  process.exit(1);
});