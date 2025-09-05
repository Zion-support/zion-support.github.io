#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async runNpmAudit() {
    this.log("🔍 Running npm audit...");
    try {
      const result = execSync("npm audit --json", {
        cwd: this.projectRoot,
        encoding: "utf8"
      });
      
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        if (vulnCount > 0) {
          this.vulnerabilities.push(`Found ${vulnCount} vulnerabilities in dependencies`);
          this.log(`⚠️ Found ${vulnCount} vulnerabilities in dependencies`, "WARN");
        } else {
          this.fixes.push("No vulnerabilities found in dependencies");
          this.log("✅ No vulnerabilities found in dependencies");
        }
      }
    } catch (error) {
      this.log(`❌ NPM audit failed: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");
    try {
      const sensitiveFiles = [
        ".env",
        ".env.local",
        ".env.production",
        ".env.development",
        "config.json",
        "secrets.json",
        "private.key",
        "id_rsa",
        "id_dsa"
      ];
      
      let foundSensitive = false;
      
      for (const file of sensitiveFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          this.vulnerabilities.push(`Sensitive file found: ${file}`);
          this.log(`⚠️ Sensitive file found: ${file}`, "WARN");
          foundSensitive = true;
        }
      }
      
      if (!foundSensitive) {
        this.fixes.push("No sensitive files found in root directory");
        this.log("✅ No sensitive files found in root directory");
      }
    } catch (error) {
      this.log(`❌ Failed to check sensitive files: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkPackageJsonSecurity() {
    this.log("📦 Checking package.json for security issues...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        
        // Check for scripts that might be dangerous
        if (packageJson.scripts) {
          const dangerousScripts = ["rm -rf", "sudo", "chmod 777"];
          let foundDangerous = false;
          
          for (const [scriptName, script] of Object.entries(packageJson.scripts)) {
            for (const dangerous of dangerousScripts) {
              if (script.includes(dangerous)) {
                this.vulnerabilities.push(`Dangerous script found: ${scriptName}`);
                this.log(`⚠️ Dangerous script found: ${scriptName}`, "WARN");
                foundDangerous = true;
              }
            }
          }
          
          if (!foundDangerous) {
            this.fixes.push("No dangerous scripts found in package.json");
            this.log("✅ No dangerous scripts found in package.json");
          }
        }
      }
    } catch (error) {
      this.log(`❌ Failed to check package.json: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkDependenciesSecurity() {
    this.log("🔍 Checking dependencies for security issues...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        
        // Check for known vulnerable packages
        const vulnerablePackages = [
          "lodash@4.17.0",
          "moment@2.19.0",
          "handlebars@4.0.0"
        ];
        
        let foundVulnerable = false;
        
        for (const vulnPackage of vulnerablePackages) {
          const [name, version] = vulnPackage.split("@");
          if (packageJson.dependencies && packageJson.dependencies[name]) {
            this.vulnerabilities.push(`Potentially vulnerable package: ${name}@${packageJson.dependencies[name]}`);
            this.log(`⚠️ Potentially vulnerable package: ${name}@${packageJson.dependencies[name]}`, "WARN");
            foundVulnerable = true;
          }
        }
        
        if (!foundVulnerable) {
          this.fixes.push("No known vulnerable packages found");
          this.log("✅ No known vulnerable packages found");
        }
      }
    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkFilePermissions() {
    this.log("🔒 Checking file permissions...");
    try {
      const importantFiles = [
        "package.json",
        "tsconfig.json",
        "next.config.js"
      ];
      
      let permissionIssues = false;
      
      for (const file of importantFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const mode = stats.mode & parseInt("777", 8);
          
          // Check if file is world-writable (dangerous)
          if (mode & 0o002) {
            this.vulnerabilities.push(`File ${file} is world-writable`);
            this.log(`⚠️ File ${file} is world-writable`, "WARN");
            permissionIssues = true;
          }
        }
      }
      
      if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }
    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async runSecurityFix() {
    this.log("🔧 Running security fixes...");
    try {
      execSync("npm audit fix", {
        cwd: this.projectRoot,
        stdio: "inherit"
      });
      this.fixes.push("Security vulnerabilities fixed");
      this.log("✅ Security vulnerabilities fixed");
    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }
  }

  async run() {
    this.log("🎯 Starting Security Scan Process...");
    this.log("====================================");
    try {
      await this.runNpmAudit();
      await this.checkSensitiveFiles();
      await this.checkPackageJsonSecurity();
      await this.checkDependenciesSecurity();
      await this.checkFilePermissions();
      await this.runSecurityFix();
      
      this.log("\n📊 SECURITY SCAN REPORT");
      this.log("=======================");
      this.log(`Vulnerabilities Found: ${this.vulnerabilities.length}`);
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.vulnerabilities.length > 0) {
        this.log("\n⚠️ Vulnerabilities Found:");
        this.vulnerabilities.forEach((vuln, index) => {
          this.log(`  ${index + 1}. ${vuln}`);
        });
      }
      
      if (this.fixes.length > 0) {
        this.log("\n✅ Fixes Applied:");
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      const securityScore = this.fixes.length / (this.fixes.length + this.vulnerabilities.length) * 100;
      this.log(`\n🛡️ Security Score: ${securityScore.toFixed(1)}%`);
      
      if (securityScore >= 80) {
        this.log("🎉 System is secure!");
      } else if (securityScore >= 60) {
        this.log("⚠️ System has some security issues");
      } else {
        this.log("🚨 System has critical security issues");
      }
      
      this.log("\n🎉 Security scan completed!");
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

const scanner = new SecurityScanner();
scanner.run().catch(console.error);