#!/usr/bin/env node
const { execSync } = require("child_process");

class AutoDeployment {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async deploy() {
    try {
      // Build the project
      console.log("🔨 Building project...");
      execSync("npm run build", { stdio: "inherit" });
      
      // Run tests
      console.log("🧪 Running tests...");
      execSync("npm run test", { stdio: "inherit" });
      
      // Deploy to production
      console.log("🚀 Deploying to production...");
      execSync("npm run deploy", { stdio: "inherit" });
      
      console.log("✅ Deployment completed successfully!");
    } catch (error) {
      console.error("❌ Deployment failed: ", error.message);
      process.exit(1);
    }
  }
}

const deployment = new AutoDeployment();
deployment.deploy();