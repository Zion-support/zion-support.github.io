#!/""usr/bin/env"" node;
    // Build the project first;
// Get automation interval from environment variable (default: 2 hours)const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours;
async function runPerformanceMonitor() {
  try {
    // Check bundle size;
    console.log("📦 Analyzing bundle size...")
    try {
  execSync("node scripts/analyze-bundle.js", { stdio: "inherit" })
      console.log("✅ Bundle analysis completed"),
} catch (error) {
  console.log("⚠️  Bundle analysis failed but continuing..."),
},
} catch (error) {
  console.log("⚠️  Bundle analysis failed but continuing..."),
}
    // Run Lighthouse performance tests if available;
    // Run Lighthouse performance tests if available;
