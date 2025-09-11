#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");

console.log("🚀 Starting Performance Optimization...");

const performanceReport = {
  timestamp: new Date().toISOString(),
  optimizations: [],
  metrics: {},
  status: "completed"
};

// Check bundle size
try {
  console.log("📦 Analyzing bundle size...");
  const buildOutput = execSync("npm run build", { encoding: "utf8" });
  
  // Extract bundle size information from build output
  const bundleSizeMatch = buildOutput.match(/dist\/assets\/index-[\w]+\.js\s+(\d+\.?\d*)\s+kB/);
  if (bundleSizeMatch) {
    const bundleSize = parseFloat(bundleSizeMatch[1]);
    performanceReport.metrics.bundleSize = bundleSize;
    
    if (bundleSize > 500) {
      performanceReport.optimizations.push({
        type: "bundle_size",
        severity: "warning",
        message: `Bundle size is ${bundleSize}kB, consider code splitting`,
        recommendation: "Implement lazy loading and code splitting"
      });
    } else {
      performanceReport.optimizations.push({
        type: "bundle_size",
        severity: "info",
        message: `Bundle size is ${bundleSize}kB - good`,
        recommendation: "Bundle size is within acceptable limits"
      });
    }
  }
} catch (error) {
  performanceReport.optimizations.push({
    type: "bundle_analysis",
    severity: "error",
    message: `Failed to analyze bundle: ${error.message}`,
    recommendation: "Check build configuration"
  });
}

// Check build performance
try {
  console.log("⏱️ Measuring build performance...");
  const startTime = Date.now();
  execSync("npm run build", { stdio: "pipe" });
  const buildTime = Date.now() - startTime;
  
  performanceReport.metrics.buildTime = buildTime;
  
  if (buildTime > 30000) { // More than 30 seconds
    performanceReport.optimizations.push({
      type: "build_performance",
      severity: "warning",
      message: `Build time is ${buildTime}ms (${Math.round(buildTime/1000)}s)`,
      recommendation: "Consider optimizing build configuration"
    });
  } else {
    performanceReport.optimizations.push({
      type: "build_performance",
      severity: "info",
      message: `Build time is ${buildTime}ms (${Math.round(buildTime/1000)}s) - good`,
      recommendation: "Build performance is acceptable"
    });
  }
} catch (error) {
  performanceReport.optimizations.push({
    type: "build_performance",
    severity: "error",
    message: `Failed to measure build performance: ${error.message}`,
    recommendation: "Check build configuration"
  });
}

// Save report
const reportPath = `performance-optimization-report-${Date.now()}.json`;
fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

console.log("✅ Performance optimization analysis completed");
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const warnings = performanceReport.optimizations.filter(opt => opt.severity === "warning").length;
const errors = performanceReport.optimizations.filter(opt => opt.severity === "error").length;
const infos = performanceReport.optimizations.filter(opt => opt.severity === "info").length;

console.log("\n📊 Performance Optimization Summary:");
console.log(`   - Total optimizations: ${performanceReport.optimizations.length}`);
console.log(`   - Warnings: ${warnings}`);
console.log(`   - Errors: ${errors}`);
console.log(`   - Info: ${infos}`);

if (warnings > 0 || errors > 0) {
  console.log("\n⚠️  Performance optimizations recommended:");
  performanceReport.optimizations
    .filter(opt => opt.severity === "warning" || opt.severity === "error")
    .forEach(opt => {
      console.log(`   - ${opt.message}`);
      console.log(`     💡 ${opt.recommendation}`);
    });
} else {
  console.log("🎉 No performance issues found!");
}

process.exit(errors > 0 ? 1 : 0);