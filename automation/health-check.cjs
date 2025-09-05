#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.checks = [];
    this.errors = [];
  }

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async checkNodeVersion() {
    this.log("🔍 Checking Node.js version...");
    try {
      const version = process.version;
      const majorVersion = parseInt(version.slice(1).split('.')[0]);
      
      if (majorVersion >= 18) {
        this.checks.push(`Node.js version ${version} is compatible`);
        this.log(`✅ Node.js version ${version} is compatible`);
      } else {
        this.errors.push(`Node.js version ${version} is too old. Required: >=18.0.0`);
        this.log(`❌ Node.js version ${version} is too old`, "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check Node.js version: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkPackageJson() {
    this.log("📦 Checking package.json...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        
        // Check required dependencies
        const requiredDeps = ["react", "react-dom", "next"];
        const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
        
        if (missingDeps.length === 0) {
          this.checks.push("All required dependencies are present");
          this.log("✅ All required dependencies are present");
        } else {
          this.errors.push(`Missing dependencies: ${missingDeps.join(", ")}`);
          this.log(`❌ Missing dependencies: ${missingDeps.join(", ")}`, "ERROR");
        }
      } else {
        this.errors.push("package.json not found");
        this.log("❌ package.json not found", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check package.json: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkTypeScriptConfig() {
    this.log("🔧 Checking TypeScript configuration...");
    try {
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));
        
        if (tsConfig.compilerOptions && tsConfig.compilerOptions.target) {
          this.checks.push("TypeScript configuration is present");
          this.log("✅ TypeScript configuration is present");
        } else {
          this.errors.push("TypeScript configuration is incomplete");
          this.log("❌ TypeScript configuration is incomplete", "ERROR");
        }
      } else {
        this.errors.push("tsconfig.json not found");
        this.log("❌ tsconfig.json not found", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check TypeScript config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkNextConfig() {
    this.log("⚙️ Checking Next.js configuration...");
    try {
      const nextConfigPath = path.join(this.projectRoot, "next.config.js");
      const nextConfigMjsPath = path.join(this.projectRoot, "next.config.mjs");
      
      if (fs.existsSync(nextConfigPath) || fs.existsSync(nextConfigMjsPath)) {
        this.checks.push("Next.js configuration is present");
        this.log("✅ Next.js configuration is present");
      } else {
        this.checks.push("No Next.js configuration found (using defaults)");
        this.log("ℹ️ No Next.js configuration found (using defaults)");
      }
    } catch (error) {
      this.log(`❌ Failed to check Next.js config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkDependencies() {
    this.log("📚 Checking dependencies installation...");
    try {
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
        this.checks.push("Dependencies are installed");
        this.log("✅ Dependencies are installed");
      } else {
        this.errors.push("Dependencies not installed");
        this.log("❌ Dependencies not installed", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkBuildCapability() {
    this.log("🏗️ Checking build capability...");
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        stdio: "pipe",
        timeout: 60000
      });
      this.checks.push("Build test successful");
      this.log("✅ Build test successful");
    } catch (error) {
      this.errors.push(`Build failed: ${error.message}`);
      this.log(`❌ Build failed: ${error.message}`, "ERROR");
    }
  }

  async run() {
    this.log("🎯 Starting Health Check Process...");
    this.log("===================================");
    try {
      await this.checkNodeVersion();
      await this.checkPackageJson();
      await this.checkTypeScriptConfig();
      await this.checkNextConfig();
      await this.checkDependencies();
      await this.checkBuildCapability();
      
      this.log("\n📊 HEALTH CHECK REPORT");
      this.log("======================");
      this.log(`Checks Passed: ${this.checks.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      
      if (this.checks.length > 0) {
        this.log("\n✅ Checks Passed:");
        this.checks.forEach((check, index) => {
          this.log(`  ${index + 1}. ${check}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      const healthScore = this.checks.length / (this.checks.length + this.errors.length) * 100;
      this.log(`\n🏥 Health Score: ${healthScore.toFixed(1)}%`);
      
      if (healthScore >= 80) {
        this.log("🎉 System is healthy!");
      } else if (healthScore >= 60) {
        this.log("⚠️ System has some issues but is functional");
      } else {
        this.log("🚨 System has critical issues that need attention");
      }
      
      this.log("\n🎉 Health check completed!");
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

const checker = new HealthChecker();
checker.run().catch(console.error);