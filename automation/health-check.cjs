#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");

console.log("🔍 Starting Health Check...");

const healthCheck = {
  timestamp: new Date().toISOString(),
  checks: {},
  status: "healthy"
};

// Check package.json
try {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  healthCheck.checks.packageJson = {
    status: "ok",
    version: pkg.version || null
  };
} catch (error) {
  healthCheck.checks.packageJson = {
    status: "error",
    message: "package.json not readable"
  };
  healthCheck.status = "unhealthy";
}

// Check dependencies
try {
  const hasNodeModules = fs.existsSync("node_modules");
  healthCheck.checks.dependencies = {
    status: hasNodeModules ? "ok" : "warning",
    message: hasNodeModules ? "Dependencies installed" : "node_modules missing"
  };
} catch (error) {
  healthCheck.checks.dependencies = {
    status: "error",
    message: "Failed to check dependencies"
  };
}

// Check disk space
try {
  const stats = execSync("df -h .", { encoding: "utf8" });
  healthCheck.checks.disk = { 
    status: "ok", 
    details: stats.split("\n")[1] 
  };
} catch (error) {
  healthCheck.checks.disk = {
    status: "warning",
    message: "Unable to get disk info"
  };
}

// Check memory
try {
  const mem = execSync("free -h", { encoding: "utf8" });
  healthCheck.checks.memory = { 
    status: "ok", 
    details: mem.split("\n")[1] 
  };
} catch (error) {
  healthCheck.checks.memory = {
    status: "warning",
    message: "Unable to get memory info"
  };
}

// Check build directory
try {
  const hasBuild = fs.existsSync(".next") || fs.existsSync("dist") || fs.existsSync("build");
  healthCheck.checks.build = { 
    status: hasBuild ? "ok" : "info",
    message: hasBuild ? "Build directory exists" : "No build directory found"
  };
} catch (error) {
  healthCheck.checks.build = {
    status: "warning",
    message: "Unable to check build dir"
  };
}

// Save report
const reportPath = `health-check-report-${Date.now()}.json`;
fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));

console.log("✅ Health check completed");
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const totalChecks = Object.keys(healthCheck.checks).length;
const okChecks = Object.values(healthCheck.checks).filter(check => check.status === "ok").length;
const errorChecks = Object.values(healthCheck.checks).filter(check => check.status === "error").length;

console.log("\n📊 Health Check Summary:");
console.log(`   - Total checks: ${totalChecks}`);
console.log(`   - OK: ${okChecks}`);
console.log(`   - Errors: ${errorChecks}`);
console.log(`   - Status: ${healthCheck.status.toUpperCase()}`);

if (healthCheck.status === "healthy") {
  console.log("🎉 System is healthy!");
  process.exit(0);
} else {
  console.log("⚠️  System has issues that need attention");
  process.exit(1);
}