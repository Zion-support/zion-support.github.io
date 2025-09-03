#!/usr/bin/env node;
/**;
 * Performance Monitor;
 * Monitors and optimizes application performance;
 */;
const fs = require("$1");
const path = require("$1");
const { execSync } = require("child_process");
class PerformanceMonitor {
  constructor($2) {
    this.projectRoot = process.cwd();
    this.metrics = {
      bundleSize: 0,;
      buildTime: 0,;
      pageLoadTime: 0,;
      memoryUsage: 0,, }
    this.optimizations = [],, }

  log($2) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry),, }

  async measureBundleSize($2) {
    try {
      this.log("Measuring bundle size...");
      // Check if .next directory exists;
      if (fs.existsSync(".next")) {
        const { execSync } = require("$1");
const result = execSync("du -sh .next", { encoding: "utf8" });
        const size = result.split("\t")[0];
        this.metrics.bundleSize = size;
        this.log(`Bundle size: ${size}`, "success"),, } else {
        this.log("No build found, running build first...");
        execSync("npm run build", { cwd: this.projectRoot, stdio: "pipe" });
        const result = execSync("du -sh .next", { encoding: "utf8" });
        const size = result.split("\t")[0];
        this.metrics.bundleSize = size;
        this.log(`Bundle size: ${size}`, "success"),, }
    } catch($2) {
      this.log(`Bundle size measurement failed: ${error.message}`, "error"),, }
  }

  async measureBuildTime($2) {
    try {
      this.log("Measuring build time...");
      const startTime = Date.now();
      execSync("npm run build", { cwd: this.projectRoot, stdio: "pipe" });
      const endTime = Date.now();
      this.metrics.buildTime = endTime - startTime;
      this.log(`Build time: ${this.metrics.buildTime}ms`, "success"),, } catch($2) {
      this.log(`Build time measurement failed: ${error.message}`, "error"),, }
  }

  async analyzePerformance($2) {
    try {
      this.log("Analyzing performance...");
      // Check for large files;
      const largeFiles = this.findLargeFiles();
      if($2) {
        this.optimizations.push({
          type: "large_files",;
          files: largeFiles,;
          recommendation: "Consider code splitting or lazy loading for large files",, }),, }

      // Check for unused dependencies;
      const unusedDeps = await this.findUnusedDependencies();
      if($2) {
        this.optimizations.push({
          type: "unused_dependencies",;
          dependencies: unusedDeps,;
          recommendation: "Remove unused dependencies to reduce bundle size",, }),, }

      // Check for performance anti-patterns;
      const antiPatterns = this.findPerformanceAntiPatterns();
      if($2) {
        this.optimizations.push({
          type: "anti_patterns",;
          patterns: antiPatterns,;
          recommendation: "Optimize performance anti-patterns",, }),, }

      this.log("Performance analysis completed", "success"),, } catch($2) {
      this.log(`Performance analysis failed: ${error.message}`, "error"),, }
  }

  findLargeFiles($2) {
    const largeFiles = [];
    const sourceDirs = ["src", "pages", "components"];
    for($2) {
      if (fs.existsSync(dir)) {
        this.findLargeFilesRecursively(dir, largeFiles),, }
    }

    return largeFiles.filter(file => file.size > 100000); // Files larger than 100KB,, }

  findLargeFilesRecursively($2) {
    const items = fs.readdirSync(dir);
    for($2) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        this.findLargeFilesRecursively(fullPath, largeFiles),, } else if (stat.isFile()) {
        largeFiles.push({
          path: fullPath,;
          size: stat.size,, }),, }
    }
  }

  async findUnusedDependencies($2) {
    try {
      // This is a simplified check - in a real scenario, you"d use tools like depcheck;
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
      const dependencies = Object.keys(packageJson.dependencies || {});
      // Check if dependencies are actually used in the codebase;
      const unusedDeps = [];
      for($2) {
        if (!this.isDependencyUsed(dep)) {
          unusedDeps.push(dep),, }
      }

      return unusedDeps,, } catch($2) {
      this.log(`Unused dependencies check failed: ${error.message}`, "error");
      return [],, }
  }

  isDependencyUsed($2) {
    try {
      const sourceDirs = ["src", "pages", "components"];
      for($2) {
        if (fs.existsSync(dir)) {
          const result = execSync(`grep -r "${dependency}" ${dir}`, { encoding: "utf8" });
          if (result.trim()) {
            return true,, }
        }
      }
      return false,, } catch($2) {
      return false,, }
  }

  findPerformanceAntiPatterns($2) {
    const antiPatterns = [];
    const sourceDirs = ["src", "pages", "components"];
    for($2) {
      if (fs.existsSync(dir)) {
        this.findAntiPatternsRecursively(dir, antiPatterns),, }
    }

    return antiPatterns,, }

  findAntiPatternsRecursively($2) {
    const items = fs.readdirSync(dir);
    for($2) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        this.findAntiPatternsRecursively(fullPath, antiPatterns),, } else if (stat.isFile() && (item.endsWith(".tsx") || item.endsWith(".jsx"))) {
        const content = fs.readFileSync(fullPath, "utf8");
        // Check for common performance anti-patterns;
        if (content.includes("useEffect(() => {}, [])") && content.includes("fetch")) {
          antiPatterns.push({
            file: fullPath,;
            pattern: "useEffect with empty dependency array and fetch",;
            line: content.split("\n").findIndex(line => line.includes("useEffect(() => {}, [])")),, }),, }

        if (content.includes("console.log") && !fullPath.includes("test")) {
          antiPatterns.push({
            file: fullPath,;
            pattern: "console.log in production code",;
            line: content.split("\n").findIndex(line => line.includes("console.log")),, }),, }
      }
    }
  }

  async generatePerformanceReport($2) {
    const report = {
      timestamp: new Date().toISOString(),;
      metrics: this.metrics,;
      optimizations: this.optimizations,;
      recommendations: [
        "Implement code splitting for large components",;
        "Use lazy loading for non-critical components",;
        "Optimize images and assets",;
        "Remove unused dependencies",;
        "Implement proper caching strategies",;
        "Use React.memo for expensive components",;
        "Optimize bundle size with webpack analysis"],, }
    const reportPath = path.join(this.projectRoot, "performance-monitor-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Performance report saved to ${reportPath}`, "success");
    return report,, }

  async run($2) {
    this.log("Starting Performance Monitor");
    try {
      await this.measureBundleSize();
      await this.measureBuildTime();
      await this.analyzePerformance();
      const report = await this.generatePerformanceReport();
      this.log("Performance Monitor completed");
      this.log(`Summary: ${report.optimizations.length} optimizations found`);
      return report,, } catch($2) {
      this.log(`Performance monitor failed: ${error.message}`, "error');
      throw error,, }
  }
}

// Run the performance monitor;
if($2) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error),, }

module.exports = PerformanceMonitor