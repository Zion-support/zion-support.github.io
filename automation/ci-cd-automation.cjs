#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Starting CI/CD automation...");

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
    console.log("📦 Installing dependencies...");
    try {
      const startTime = Date.now();
      const output = execSync("npm install", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      const duration = Date.now() - startTime;
      this.ciResults.dependencies.status = "success";
      this.ciResults.dependencies.result = {
        duration: `${duration}ms`,
        output: "Dependencies installed successfully"
      };
      console.log(`✅ Dependencies installed in ${duration}ms`);
    } catch (error) {
      this.ciResults.dependencies.status = "failure";
      this.ciResults.dependencies.result = {
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error"
      };
      console.log(`❌ Dependency installation failed: ${error.message}`);
      throw error;
    }
  }

  async runLinting() {
    console.log("🔍 Running linting checks...");
    try {
      const startTime = Date.now();
      const output = execSync("npm run lint", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      const duration = Date.now() - startTime;
      this.ciResults.linting.status = "success";
      this.ciResults.linting.result = {
        duration: `${duration}ms`,
        output: output,
        issues: this.parseLintOutput(output)
      };
      console.log(`✅ Linting completed in ${duration}ms`);
    } catch (error) {
      this.ciResults.linting.status = "failure";
      this.ciResults.linting.result = {
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error",
        issues: this.parseLintOutput(error.stdout || error.stderr || "")
      };
      console.log(`❌ Linting failed: ${error.message}`);
    }
  }

  parseLintOutput(output) {
    try {
      const lines = output.split("\n");
      const errorMatches = output.match(/error/g) || [];
      const warningMatches = output.match(/warning/g) || [];
      return {
        total: errorMatches.length + warningMatches.length,
        errors: errorMatches.length,
        warnings: warningMatches.length
      };
    } catch (error) {
      return { total: 0, errors: 0, warnings: 0 };
    }
  }

  async runTypeCheck() {
    console.log("🔍 Running TypeScript type checking...");
    try {
      const startTime = Date.now();
      const output = execSync("npm run type-check", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      const duration = Date.now() - startTime;
      this.ciResults.typeCheck.status = "success";
      this.ciResults.typeCheck.result = {
        duration: `${duration}ms`,
        output: output,
        issues: this.parseTypeCheckOutput(output)
      };
      console.log(`✅ Type checking completed in ${duration}ms`);
    } catch (error) {
      this.ciResults.typeCheck.status = "failure";
      this.ciResults.typeCheck.result = {
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error",
        issues: this.parseTypeCheckOutput(error.stdout || error.stderr || "")
      };
      console.log(`❌ Type checking failed: ${error.message}`);
    }
  }

  parseTypeCheckOutput(output) {
    try {
      const lines = output.split("\n");
      const errorLines = lines.filter(line => line.includes("error TS"));
      const warningLines = lines.filter(line => line.includes("warning TS"));
      return {
        total: errorLines.length + warningLines.length,
        errors: errorLines.length,
        warnings: warningLines.length
      };
    } catch (error) {
      return { total: 0, errors: 0, warnings: 0 };
    }
  }

  async runBuild() {
    console.log("🏗️ Building project...");
    try {
      const startTime = Date.now();
      const output = execSync("npm run build", {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });
      const duration = Date.now() - startTime;
      this.ciResults.build.status = "success";
      this.ciResults.build.result = {
        duration: `${duration}ms`,
        output: "Build completed successfully",
        buildSize: this.calculateBuildSize()
      };
      console.log(`✅ Build completed in ${duration}ms`);
    } catch (error) {
      this.ciResults.build.status = "failure";
      this.ciResults.build.result = {
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error"
      };
      console.log(`❌ Build failed: ${error.message}`);
      throw error;
    }
  }

  calculateBuildSize() {
    try {
      const distDir = path.join(process.cwd(), "dist");
      if (!fs.existsSync(distDir)) return "0 B";

      let totalSize = 0;
      const walkDir = dir => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            walkDir(filePath);
          } else {
            totalSize += stat.size;
          }
        });
      };
      walkDir(distDir);
      
      const units = ["B", "KB", "MB", "GB"];
      let size = totalSize;
      let unitIndex = 0;
      while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
      }
      return `${size.toFixed(2)} ${units[unitIndex]}`;
    } catch (error) {
      return "Unknown";
    }
  }

  async runTests() {
    console.log("🧪 Running tests...");
    try {
      const startTime = Date.now();
      const packagePath = path.join(process.cwd(), "package.json");
      const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
      const scripts = packageData.scripts || {};
      
      let testCommand = "";
      if (scripts.test) {
        testCommand = "npm test";
      } else if (scripts["test:unit"]) {
        testCommand = "npm run test:unit";
      } else {
        console.log("⚠️ No test scripts found, skipping tests");
        this.ciResults.testing.status = "skipped";
        this.ciResults.testing.result = {
          reason: "No test scripts configured",
          output: "Tests skipped"
        };
        return;
      }

      const output = execSync(testCommand, {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: "pipe"
      });

      const duration = Date.now() - startTime;
      this.ciResults.testing.status = "success";
      this.ciResults.testing.result = {
        duration: `${duration}ms`,
        output: output,
        summary: this.parseTestOutput(output)
      };
      console.log(`✅ Tests completed in ${duration}ms`);
    } catch (error) {
      this.ciResults.testing.status = "failure";
      this.ciResults.testing.result = {
        error: error.message,
        output: error.stdout || error.stderr || "Unknown error"
      };
      console.log(`❌ Tests failed: ${error.message}`);
    }
  }

  parseTestOutput(output) {
    try {
      const passedMatches = output.match(/(\d+)\s+"passed/g) || [];
      const failedMatches = output.match(/(\d+)\s+"failed/g) || [];
      const skippedMatches = output.match(/(\d+)\s+"skipped/g) || [];
      
      const passed = passedMatches.length > 0 ? parseInt(passedMatches[0].match(/\d+/)[0]) : 0;
      const failed = failedMatches.length > 0 ? parseInt(failedMatches[0].match(/\d+/)[0]) : 0;
      const skipped = skippedMatches.length > 0 ? parseInt(skippedMatches[0].match(/\d+/)[0]) : 0;
      
      return { passed, failed, skipped, total: passed + failed + skipped };
    } catch (error) {
      return { passed: 0, failed: 0, skipped: 0, total: 0 };
    }
  }

  async runQualityChecks() {
    console.log("📊 Running quality checks...");
    try {
      const qualityResults = {
        buildSuccess: this.ciResults.build.status === "success",
        lintingPassed: this.ciResults.linting.status === "success",
        typeCheckPassed: this.ciResults.typeCheck.status === "success",
        testsPassed: this.ciResults.testing.status === "success",
        dependenciesInstalled: this.ciResults.dependencies.status === "success"
      };
      
      const totalChecks = Object.keys(qualityResults).length;
      const passedChecks = Object.values(qualityResults).filter(Boolean).length;
      const qualityScore = ((passedChecks / totalChecks) * 100).toFixed(2);
      
      this.ciResults.quality.status = passedChecks === totalChecks ? "success" : "failure";
      this.ciResults.quality.result = {
        score: qualityScore,
        passed: passedChecks,
        total: totalChecks,
        details: qualityResults
      };
      console.log(`✅ Quality checks completed. Score: ${qualityScore}%`);
    } catch (error) {
      this.ciResults.quality.status = "failure";
      this.ciResults.quality.result = {
        error: error.message,
        score: 0,
        passed: 0,
        total: 0
      };
      console.log(`❌ Quality checks failed: ${error.message}`);
    }
  }

  async generateCIReport() {
    console.log("📋 Generating CI/CD report...");
    const totalDuration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${totalDuration}ms`,
      summary: {
        total: Object.keys(this.ciResults).length,
        passed: Object.values(this.ciResults).filter(r => r.status === "success").length,
        failed: Object.values(this.ciResults).filter(r => r.status === "failure").length,
        skipped: Object.values(this.ciResults).filter(r => r.status === "skipped").length
      },
      results: this.ciResults,
      quality: this.ciResults.quality.result
    };

    fs.writeFileSync(
      path.join(this.reportDir, "ci-cd-report.json"),
      JSON.stringify(report, null, 2)
    );

    console.log("📋 CI/CD report generated successfully");
    return report;
  }

  async runPipeline() {
    try {
      await this.installDependencies();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runBuild();
      await this.runTests();
      await this.runQualityChecks();

      const report = await this.generateCIReport();
      console.log(`\n🎯 Pipeline Summary:`);
      console.log(`Duration: ${report.duration}`);
      console.log(`Total Checks: ${report.summary.total}`);
      console.log(`Passed: ${report.summary.passed} ✅`);
      console.log(`Failed: ${report.summary.failed} ❌`);
      console.log(`Quality Score: ${report.quality.score}%`);

      if (report.summary.failed > 0) {
        console.log("\n❌ Pipeline failed. Review failed checks above.");
        process.exit(1);
      } else {
        console.log("\n✅ Pipeline passed successfully! Ready for deployment.");
      }

      return report;
    } catch (error) {
      console.error("❌ Pipeline failed:", error);
      process.exit(1);
    }
  }
}

// Main execution
async function main() {
  const ci = new CICDAutomation();
  await ci.runPipeline();
}

// Start the CI/CD pipeline
main().catch(console.error);