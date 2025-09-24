#!/""usr/bin/env"" node;
/**;
 * Intelligent Performance Monitor - PM2 Automation;
 * Monitors application performance, identifies bottlenecks, and suggests optimizations;
 */;
#!/"usr/bin/env" node;
/**;
 * Intelligent Performance Monitor - PM2 Automation;
 * Monitors application performance, identifies bottlenecks, and suggests optimizations;
 */;
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot,logs",;
      "performance-monitor.log";
    );
    this.performanceHistory = path.join(;
      this.projectRoot,logs",;
      "performance-history.json";
    );    this.metrics = {
  buildTime: 0,;
      bundleSize: 0,;
      loadTime: 0,;
      memoryUsage: 0,;
      cpuUsage: 0,;
      errorRate: 0;,
}
    this.thresholds = {
  this.metrics = {
  buildTime: 0,;
      bundleSize: 0,;
      loadTime: 0,;
      memoryUsage: 0,;
      cpuUsage: 0,;
      errorRate: 0;,
}
    this.thresholds = {
  buildTime: 30000, // 30 seconds;
      bundleSize: 1024 * 1024, // 1MB;
      loadTime: 3000, // 3 seconds;
      memoryUsage: 512 * 1024 * 1024, // 512MB;
      cpuUsage: 80, // 80%;
      errorRate: 5 // 5%;,
}
  }
;
  async initialize() {
  console.log(`"📊 Intelligent Performance Monitor Initialized");
    this.ensureLogDirectory();
    this.loadPerformanceHistory();
        // Start continuous monitoring;
    this.startContinuousMonitoring();,
}
;
  ensureLogDirectory() {
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });,
}
  }
;
  loadPerformanceHistory() {
  try {
  if (fs.existsSync(this.performanceHistory)) {
  const data = fs.readFileSync(this.performanceHistory, "utf8");
        this.history = JSON.parse(data);,
} else {
  this.history = {
  totalMeasurements: 0,;
          averageBuildTime: 0,;
          averageBundleSize: 0,;
          averageLoadTime: 0,;
          performanceTrends: [],;
          bottlenecks: [],;
          optimizations: [];,
}
      }
    } catch (error) {
  console.error("Error loading performance history: ", error);
      this.history = {
  totalMeasurements: 0,;
        averageBuildTime: 0,;
        averageBundleSize: 0,;
        averageLoadTime: 0,;
        performanceTrends: [],;
        bottlenecks: [],;
        optimizations: [];,
}
    } catch (error) {
  console.error("Error loading performance history: ", error);
      this.history = {
  totalMeasurements: 0,;
        averageBuildTime: 0,;
        averageBundleSize: 0,;
        averageLoadTime: 0,;
        performanceTrends: [],;
        bottlenecks: [],;
        optimizations: [];,
}
    }
  }
;
  startContinuousMonitoring() {
  console.log(`"🔍 Starting continuous performance monitoring...");
    ;
    // Initial performance measurement;
    this.measurePerformance();
    ;
    // Set up periodic monitoring;
    setInterval(() => {
  this.measurePerformance();,
}, 5 * 60 * 1000); // Every 5 minutes;
    ;
    // Set up build monitoring;
    this.monitorBuilds();
    ;
    // Set up runtime monitoring;
    this.monitorRuntime();,
}
;
  async measurePerformance() {
  console.log(`"📈 Measuring application performance...");
    ;
  async measurePerformance() {
  console.log(``📈 Measuring application performance...`);
    console.log(`📈 Measuring application performance...`);
    const startTime = Date.now();
    const measurement = {
  timestamp: new Date().toISOString(),;
      buildTime: 0,;
      bundleSize: 0,;
      loadTime: 0,;
      memoryUsage: 0,;
      cpuUsage: 0,;
      errorRate: 0,;
      recommendations: [];,
}
    try {
  // Measure build performance;
      await this.measureBuildPerformance(measurement);
      // Measure bundle size;
      await this.measureBundleSize(measurement);
      // Measure runtime performance;
      await this.measureRuntimePerformance(measurement);
      // Analyze performance and generate recommendations;
      await this.analyzePerformance(measurement);
      // Update history and metrics;
      this.updatePerformanceHistory(measurement);
      // Log results;
      this.logPerformanceResults(measurement);
      ;
      console.log(✅ Performance measurement completed in ${Date.now() - startTime}ms);
      ;,
} catch (error) {
  console.error(`❌ Error during performance measurement: `, error);,
} catch (error) {
  console.error(`❌ Error during performance measurement: `, error);
      this.logError(`Performance measurement failed`, error);,
}
      ;,
} catch (error) {
  console.error("❌ Error during performance measurement: ", error);
      this.logError("Performance measurement failed", error);,
}
  }
;
  async measureBuildPerformance(measurement) {
  console.log("🔨 Measuring build performance...");
    ;
    try {
  const buildStart = Date.now();
      // Run a test build;
      const buildResult = await this.runTestBuild();
      ;
      measurement.buildTime = Date.now() - buildStart;
      measurement.buildSuccess = buildResult.success;
      measurement.buildErrors = buildResult.errors;
      // Check if build time exceeds threshold;
      if (measurement.buildTime > this.thresholds.buildTime) {
  measurement.recommendations.push({
  type: `build`,;
          severity: `warning`,message: Build time (${measurement.buildTime}ms) exceeds threshold (${this.thresholds.buildTime}ms),;
          suggestion: `Consider optimizing build configuration, using build caching, or parallel builds`;,
}`);,
}
      ;,
} catch (error) {
  console.error(`Error measuring build performance: `, error);
      ;
      // Check if build time exceeds threshold;
      if (measurement.buildTime > this.thresholds.buildTime) {
  measurement.recommendations.push({
  type: "build",;
          severity: "warning",message: Build time (${measurement.buildTime}ms) exceeds threshold (${this.thresholds.buildTime}ms),;
          suggestion: "Consider optimizing build configuration, using build caching, or parallel builds";,
}`);,
}
      ;,
} catch (error) {
  console.error("Error measuring build performance: ", error);
      measurement.buildTime = -1;,
} catch (error) {
  console.error(`Error measuring build performance: `, error);      measurement.buildTime = -1;
      measurement.buildSuccess = false;,
}
  }
;
  async runTestBuild() {
  try {
  // Check if it"s a Next.js project;
      if (fs.existsSync("next.config.js") || fs.existsSync("next.config.mjs")) {
  const buildStart = Date.now();
        // Run Next.js build;
        execSync("npm run build", {
  cwd: this.projectRoot,;
          stdio: "pipe",;
  async runTestBuild() {
  try {
  // Check if it"s a Next.js project;
      if (fs.existsSync("next.config.js") || fs.existsSync("next.config.mjs")) {
  const buildStart = Date.now();
        ;
        // Run Next.js build;
        execSync("npm run build", {
  cwd: this.projectRoot,;
          stdio: "pipe",;
          timeout: 120000 // 2 minutes timeout;,
});
        ;
        return {
  success: true,;
          duration: Date.now() - buildStart,;
          errors: [];,
}
      }
      ;
      // Check if it"s a Vite project;
      if (fs.existsSync("vite.config.js") || fs.existsSync("vite.config.ts")) {
  const buildStart = Date.now();
        // Run Vite build;
        execSync("npm run build", {
  cwd: this.projectRoot,;
          stdio: "pipe",;
