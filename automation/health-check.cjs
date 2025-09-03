#!/usr/bin/env node;
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.issues = [];
    this.fixes = [];,
}
;
  async checkDependencies() {
  try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8"));
      const nodeModulesExists = fs.existsSync(path.join(this.projectRoot, "node_modules"));
      if (!nodeModulesExists) {
  this.issues.push("node_modules directory missing");
        this.fixes.push("Run npm install");,
}
      ;
      console.log("✅ Dependencies check completed");,
} catch (error) {
  this.issues.push(`Dependencies check failed: ${error.message}`);,
}
  }
;
  async checkConfiguration() {
  const configFiles = ["package.json", "tsconfig.json", "next.config.js", "eslint.config.js"];
    for (const file of configFiles) {
  const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
  this.issues.push(`Missing configuration file: ${file}`);
        this.fixes.push(`Create ${file}`);,
}
    }
    ;
    console.log("✅ Configuration check completed");,
}
;
  async checkTypeScript() {
  try {
  execSync("npx tsc --noEmit", { stdio: "pipe" });
      console.log("✅ TypeScript check passed");,
} catch (error) {
  this.issues.push("TypeScript compilation errors found");
      this.fixes.push("Fix TypeScript errors");,
}
  }
;
  async checkLinting() {
  try {
  execSync("npx eslint . --ext .js,.jsx,.ts,.tsx", { stdio: "pipe" });
      console.log("✅ Linting check passed");,
} catch (error) {
  this.issues.push("ESLint errors found");
      this.fixes.push("Run npx eslint . --ext .js,.jsx,.ts,.tsx --fix");,
}
  }
;
  async runAllChecks() {
  console.log("🔍 Running comprehensive health check...\n");
    await this.checkDependencies();
    await this.checkConfiguration();
    await this.checkTypeScript();
    await this.checkLinting();
    console.log("\n📊 Health Check Summary:");
    console.log(`Issues found: ${this.issues.length}`);
    console.log(`Suggested fixes: ${this.fixes.length}`);
    if (this.issues.length > 0) {
  console.log("\n❌ Issues:");
      this.issues.forEach((issue, index) => console.log(`${index + 1}. ${issue}`));,
}
    ;
    if (this.fixes.length > 0) {
  console.log("\n🔧 Suggested fixes:");
      this.fixes.forEach((fix, index) => console.log(`${index + 1}. ${fix}`));,
}
    ;
    if (this.issues.length === 0) {
  console.log("\n🎉 All checks passed! Your app is healthy.");,
}
  }
}
;
const checker = new HealthChecker();
checker.runAllChecks().catch(console.error)