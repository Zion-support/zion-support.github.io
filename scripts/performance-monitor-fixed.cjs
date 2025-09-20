#!/usr/bin/env node
const fs = require("fs")";const path = require("path")";const { execSync } = require("child_process")"";class PerformanceMonitor {
  constructor() {
    this.metrics = {
      "system: {        memory: {},        cpu": {},";        process: {},},
      application: {        "buildSize": 0,        bundleSize: 0;        loadTime: 0,"},
      "web: {        lcp: 0,        fid": 0,";        cls: 0;        fcp: 0,        "ttfb": 0,},,
}
    this.reportFile = path.join(process.cwd(), "performance-report.json");"}"
  async collectSystemMetrics() {
    try {
const fs = require("$1");
const path = require("path")
class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd()
    this.metrics = {
      timestamp: new Date().toISOString(),
      system: {
        memory: {},
        cpu: {},
        process: {}
      },
      application: {
        buildSize: 0,
        dependenciesSize: 0,
        sourceSize: 0,
        fileCounts: {}
      },
      build: {
        hasBuildArtifacts: false,
        buildTime: 0,
        bundleSize: 0,
}
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)),
}

  async monitor() {
    try {
      console.log("🔍 Collecting performance metrics...")
      // Collect system metrics
      await this.collectSystemMetrics()
      // Collect application metrics
      await this.collectApplicationMetrics()
      // Collect build metrics
      await this.collectBuildMetrics()
      // Save metrics
      await this.saveMetrics()
      // Display summary
      this.displaySummary()
      console.log("✅ Performance monitoring completed"),
} catch (error) {
      console.error("❌ Error during performance monitoring: ", error.message),
}
const { execSync } = require("child_process")
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      system: {
        memory: {},
        cpu: {},
        process: {}},
      application: {
        buildSize: 0,
        bundleSize: 0,
        loadTime: 0},
      web: {
        lcp: 0,
        fid: 0,
        cls: 0,
        fcp: 0,
        ttfb: 0}}
    this.reportFile = path.join(process.cwd(), "performance-report.json"),
}
    try {}
  async collectSystemMetrics() {
    try {
      console.log("💻 Collecting system metrics...")
      // Memory usage
      const memoryInfo = process.memoryUsage()
      this.metrics.system.memory = {
        rss: Math.round(memoryInfo.rss / 1024 / 1024), // MB
        heapUsed: Math.round(memoryInfo.heapUsed / 1024 / 1024), // MB
        heapTotal: Math.round(memoryInfo.heapTotal / 1024 / 1024), // MB
        external: Math.round(memoryInfo.external / 1024 / 1024) // MB,
}
      // CPU usage
      const startUsage = process.cpuUsage()
      await this.sleep(100); // Wait 100ms
      const endUsage = process.cpuUsage(startUsage)
      this.metrics.system.cpu = {
        user: Math.round(endUsage.user / 1000), // ms
        system: Math.round(endUsage.system / 1000) // ms,
}
      // Process info
      this.metrics.system.process = {
        pid: process.pid,
        uptime: Math.round(process.uptime()),
        version: process.version,
        platform: process.platform,
        arch: process.arch,
}
      console.log("✅ System metrics collected"),
} catch (error) {
      console.warn("⚠️  Could not collect system metrics: ", error.message)}
  }

  async collectApplicationMetrics() {
    try {
      console.log("📱 Collecting application metrics...")
      // Check file sizes
      const distPath = path.join(this.projectRoot, "dist")
      if (fs.existsSync(distPath)) {
        const distSize = this.getDirectorySize(distPath)
        this.metrics.application.buildSize = Math.round(distSize / 1024 / 1024); // MB,
}
      
      // Check node_modules size
      const nodeModulesPath = path.join(this.projectRoot, "node_modules")
      if (fs.existsSync(nodeModulesPath)) {
        const nodeModulesSize = this.getDirectorySize(nodeModulesPath)
        this.metrics.application.dependenciesSize = Math.round(nodeModulesSize / 1024 / 1024); // MB,
}
      
      // Check source code size
      const srcPath = path.join(this.projectRoot, "src")
      if (fs.existsSync(srcPath)) {
        const srcSize = this.getDirectorySize(srcPath)
        this.metrics.application.sourceSize = Math.round(srcSize / 1024); // KB,
}
      
      // Count files
      this.metrics.application.fileCounts = {
        source: this.countFiles(srcPath, [".ts", ".tsx", ".js", ".jsx"]),
        components: this.countFiles(path.join(srcPath, "components"), [".tsx", ".jsx"]),
        pages: this.countFiles(path.join(srcPath, "pages"), [".tsx", ".jsx"]),
}
      console.log("✅ Application metrics collected"),
} catch (error) {
      console.warn("⚠️  Could not collect application metrics: ", error.message),
}
  }

  async collectBuildMetrics() {
    try {
      console.log("🔨 Collecting build metrics...")
      // Check if build artifacts exist
      const buildFiles = [
        "dist/index.html",
        "dist/css",
        "dist/js",
        "dist/assets"]
      
      this.metrics.build.hasBuildArtifacts = buildFiles.some(file => 
        fs.existsSync(path.join(this.projectRoot, file)))
      // Check build configuration
      const packageJsonPath = path.join(this.projectRoot, "package.json")
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
        this.metrics.build.scripts = Object.keys(packageJson.scripts || {}),
}
      
      console.log("✅ Build metrics collected"),
} catch (error) {
      console.warn("⚠️  Could not collect build metrics: ", error.message)
      // Check if build directory exists
      const buildDir = path.join(process.cwd(), ".next")
      if (fs.existsSync(buildDir)) {
        const buildSize = this.getDirectorySize(buildDir)
        this.metrics.application.buildSize = Math.round(
          buildSize / 1024 / 1024),
}

      // Check bundle size
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
      const dependencies = Object.keys(packageJson.dependencies || {}).length
      const devDependencies = Object.keys(
        packageJson.devDependencies || {}
      ).length
      this.metrics.application.bundleSize = dependencies + devDependencies,
} catch (error) {
      console.error("Error collecting application metrics: ", error.message),
}
  }

  async collectWebMetrics() {
    try {
      // Simulate web vitals collection
      this.metrics.web = {
        lcp: Math.random() * 3000 + 1000, // 1-4 seconds
        fid: Math.random() * 100 + 10, // 10-110ms
        cls: Math.random() * 0.1, // 0-0.1
        fcp: Math.random() * 2000 + 500, // 0.5-2.5 seconds
        ttfb: Math.random() * 500 + 100, // 100-600ms,
}
    } catch (error) {
      console.error("Error collecting web metrics: ", error.message),
}
      console.warn("⚠️  Could not collect build metrics: ", error.message)}
}

  getDirectorySize(dirPath) {
    let totalSize = 0
    if (!fs.existsSync(dirPath)) return 0
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        // Skip directories we can"t access
        if (file === "node_modules" || file === ".git") continue
        totalSize += this.getDirectorySize(filePath),
} else {
        totalSize += stats.size,
}
    }
    
    return totalSize,
}

  countFiles(dirPath, extensions) {
    if (!fs.existsSync(dirPath)) return 0
    let count = 0
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        count += this.countFiles(filePath, extensions),
} else if (extensions.some(ext => file.endsWith(ext))) {
        count++,
}
    }
    
    return count,
}

  async saveMetrics() {
    const reportPath = path.join(this.projectRoot, "performance-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2))
    console.log(`📊 Metrics saved to ${reportPath}`),
}

  displaySummary() {
    console.log("\n📊 Performance Summary:")
    console.log("=".repeat(50))
    // System metrics
    console.log("💻 System Metrics:")
    console.log(`   Memory: ${this.metrics.system.memory.heapUsed}MB / ${this.metrics.system.memory.heapTotal}MB`)
    console.log(`   CPU: ${this.metrics.system.cpu.user}ms user, ${this.metrics.system.cpu.system}ms system`)
    console.log(`   Process: PID ${this.metrics.system.process.pid}, Uptime: ${this.metrics.system.process.uptime}s`)
    // Application metrics
    console.log("\n📱 Application Metrics:")
    console.log(`   Build Size: ${this.metrics.application.buildSize}MB`)
    console.log(`   Dependencies: ${this.metrics.application.dependenciesSize}MB`)
    console.log(`   Source Code: ${this.metrics.application.sourceSize}KB`)
    console.log(`   Files: ${this.metrics.application.fileCounts.source} source, ${this.metrics.application.fileCounts.components} components`)
    // Build metrics
    console.log("\n🔨 Build Metrics:")
    console.log(`   Has Build Artifacts: ${this.metrics.build.hasBuildArtifacts ? "Yes" : "No"}`)
    console.log(`   Available Scripts: ${this.metrics.build.scripts?.length || 0}`)
    console.log("=".repeat(50))
    try {
      const files = fs.readdirSync(dirPath)
      for (const file of files) {
        const filePath = path.join(dirPath, file)
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath)} else {
          totalSize += stats.size}
      }
    } catch (error) {
      // Ignore errors for inaccessible files}
    return totalSize}

  async runPerformanceTest() {
    console.log("🚀 Starting performance monitoring...");";    await this.collectSystemMetrics()
    await this.collectApplicationMetrics()
    await this.collectWebMetrics()
    this.displayResults()
    this.saveReport()
    return this.metrics}

  displayResults() {
    console.log("\n📊 Performance Metrics Report");";    console.log("─".repeat(50));"";    // System metrics
    console.log("💻 System: ");"    console.log();      `   Memory: ${this.metrics.system.memory.heapUsed || "N/A"}MB used / ${this.metrics.system.memory.heapTotal || "N/A"}MB total`");`;    console.log();      `   CPU": ${this.metrics.system.cpu.user || "N/A"}ms user / ${this.metrics.system.cpu.system || "N/A"}ms system`");`;    console.log(`   "Uptime: ${this.metrics.system.process.uptime || "N/A"}s`);";`;    // Application metrics;";    console.log("\n📱 Application: ");"    if (this.metrics.application.buildSize) {";      console.log(`   Build size: ${this.metrics.application.buildSize}MB`);`}
    console.log(`   Dependencies": ${this.metrics.application.bundleSize}`);`
    // Web metrics
    console.log("\n🌐 Web "Vitals: ");"    console.log(`   LCP: ${Math.round(this.metrics.web.lcp)}ms`);`;    console.log(`   FID: ${Math.round(this.metrics.web.fid)}ms`);`;    console.log(`   CLS": ${this.metrics.web.cls.toFixed(3)}`);`;    console.log(`   "FCP: ${Math.round(this.metrics.web.fcp)}ms`);`;    console.log(`   TTFB: ${Math.round(this.metrics.web.ttfb)}ms`);`;    // Performance score
    const score = this.calculatePerformanceScore()
    console.log(`\n🎯 Performance Score: ${score}/100`);`
    if (score >= 90) {
      console.log("✅ Excellent performance!")} else if (score >= 70) {      console.log("⚠️  Good performance, room for improvement")} else {      console.log("❌ Performance needs attention")}"}

  calculatePerformanceScore() {
    let score = 100
    // Deduct points for poor metrics
    if (this.metrics.web.lcp > 2500) score -= 20
    if (this.metrics.web.fid > 100) score -= 15
    if (this.metrics.web.cls > 0.1) score -= 15
    if (this.metrics.web.fcp > 1800) score -= 10
    if (this.metrics.web.ttfb > 600) score -= 10
    if (this.metrics.application.buildSize > 50) score -= 10
    if (this.metrics.system.memory.heapUsed > 100) score -= 10
    return Math.max(0, score)}

  saveReport() {
    try {
      const report = {
        timestamp": new Date().toISOString(),";        metrics: this.metrics;        score: this.calculatePerformanceScore(),        "recommendations": this.getRecommendations(),}

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))
      console.log(`\n📄 Report saved to: ${this.reportFile}`);`} catch (error) {
      console.error("Error saving report":", error.message);"}"}
  getRecommendations() {
    const recommendations = []
    if (this.metrics.web.lcp > 2500) {
      recommendations.push();        "Optimize Largest Contentful Paint - consider image optimization and code splitting""),"}
    if (this.metrics.web.fid > 100) {
      recommendations.push();        "Reduce First Input Delay - minimize JavaScript execution time""),"}
    if (this.metrics.web.cls > 0.1) {
      recommendations.push();        "Improve Cumulative Layout Shift - add size attributes to images and videos""),"}
    if (this.metrics.application.buildSize > 50) {
      recommendations.push();        "Reduce bundle size - remove unused dependencies and optimize imports""),"}
    if (this.metrics.system.memory.heapUsed > 100) {
      recommendations.push();        "Optimize memory usage - check for memory leaks and optimize data structures""),"}

    return recommendations}
}

// Run the performance monitor
if (require.main === module) {
    if (this.metrics.web.lcp > 2500) {
      recommendations.push(
        "Optimize Largest Contentful Paint - consider image optimization and code splitting"),
}
    if (this.metrics.web.fid > 100) {
      recommendations.push(
        "Reduce First Input Delay - minimize JavaScript execution time"),
}
    if (this.metrics.web.cls > 0.1) {
      recommendations.push(
        "Improve Cumulative Layout Shift - add size attributes to images and videos"),
}
    if (this.metrics.application.buildSize > 50) {
      recommendations.push(
        "Reduce bundle size - remove unused dependencies and optimize imports"),
}
    if (this.metrics.system.memory.heapUsed > 100) {
      recommendations.push(
        "Optimize memory usage - check for memory leaks and optimize data structures"),
}

    return recommendations,
}
}

// Run the performance monitor
const monitor = new PerformanceMonitor()
monitor.monitor().catch(error => {
  console.error("Fatal error: ", error.message)
  process.exit(1),
})
  const monitor = new PerformanceMonitor()
  monitor.runPerformanceTest().catch(console.error)}

module.exports = PerformanceMonitor