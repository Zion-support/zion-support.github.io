

#!/usr/bin/env node;
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.fixes = []
    this.errors = [],
}
  log(message, type = "INFO") {
  const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] [${type}] ${message}`),
}
  async fixPackageJson() {
  this.log("🔧 Fixing package.json dependencies...")
    try {
  const packageJsonPath = path.join(this.projectRoot, "package.json")
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
      // Fix React version conflicts;
      if (packageJson.dependencies.react === "^17.0.2") {
  packageJson.dependencies.react = "^18.3.1";
        this.fixes.push("Updated React to v18.3.1"),
}
      if (packageJson.dependencies["react-dom"] === "^17.0.2") {
  packageJson.dependencies["react-dom"] = "^18.3.1";
        this.fixes.push("Updated React DOM to v18.3.1"),
}
      // Fix TypeScript types;
      if (packageJson.devDependencies["@types/react"] === "^17.0.87") {
  packageJson.devDependencies["@types/react"] = "^18.3.1";
        this.fixes.push("Updated @types/react to v18.3.1"),
}
      if (packageJson.devDependencies["@types/react-dom"] === "^17.0.26") {
  packageJson.devDependencies["@types/react-dom"] = "^18.3.1";
        this.fixes.push("Updated @types/react-dom to v18.3.1"),
}
      // Update TypeScript;
      if (packageJson.devDependencies.typescript === "^4.9.5") {
  packageJson.devDependencies.typescript = "^5.0.0";
        this.fixes.push("Updated TypeScript to v5.0.0"),
}
      // Fix ESLint version;
      if (packageJson.devDependencies.eslint === "^9.32.0") {
  packageJson.devDependencies.eslint = "^8.57.0";
        this.fixes.push("Updated ESLint to v8.57.0 for compatibility"),
}
      // Remove problematic dependencies;
      if (packageJson.dependencies["@magneticwatermelon/mcp-toolkit"]) {
  delete packageJson.dependencies["@magneticwatermelon/mcp-toolkit"]
        this.fixes.push("Removed problematic MCP toolkit dependency"),
}
      // Write back the fixed package.json;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
      this.log("✅ Package.json fixed successfully")

} catch (error) {
  this.log(`❌ Failed to fix package.json: ${error.message}`, "ERROR")
      this.errors.push(error.message),
}
  }
  async cleanNodeModules() {
  this.log("🧹 Cleaning node_modules...")