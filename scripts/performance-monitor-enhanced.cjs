#!/usr/bin/env node
/**
 * Enhanced Performance Monitor
 * Monitors application performance and provides detailed analytics
 */
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
class EnhancedPerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      errorCount: 0,
      warningCount: 0,
}
    this.startTime = Date.now(),
}

  log(message, type = "info") {
    const timestamp = new Date().toISOString()
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️"
    console.log(`[${timestamp}] ${prefix} ${message}`),
}

  async monitorPerformance() {
    this.log("🔍 Starting Enhanced Performance Monitoring...")
    try {
      await this.measureBuildPerformance()
      await this.analyzeBundleSize()
      await this.checkCodeQuality()
      await this.monitorSystemResources()
      await this.generatePerformanceReport()
      this.log("🎉 Performance monitoring completed!", "success")
      ,
} catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, "error")
      process.exit(1),
}
  }

  async measureBuildPerformance() {
    this.log("⏱️ Measuring build performance...")
    const buildStart = Date.now()
    try {
      // Run build command
      execSync("npm run build", { stdio: "pipe" })
      this.metrics.buildTime = Date.now() - buildStart
      this.log(`Build completed in ${this.metrics.buildTime}ms`, "success"),
} catch (error) {
      this.log("Build failed - skipping build performance metrics", "error")
      this.metrics.errorCount++,
}
  }

  async analyzeBundleSize() {
    this.log("📦 Analyzing bundle size...")
    const nextDir = path.join(process.cwd(), ".next")
    if (fs.existsSync(nextDir)) {
      const analyzeDir = (dir) => {
        let totalSize = 0
        const files = fs.readdirSync(dir)
        files.forEach(file => {
          const filePath = path.join(dir, file)
          const stat = fs.statSync(filePath)
          if (stat.isDirectory()) {
            totalSize += analyzeDir(filePath),
} else {
            totalSize += stat.size,
}
        })
        return totalSize,
}
      this.metrics.bundleSize = analyzeDir(nextDir)
      this.log(`Bundle size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)} MB`),
}
  }

  async checkCodeQuality() {
    this.log("🔍 Checking code quality...")
    try {
      // Run ESLint
      execSync("npm run lint", { stdio: "pipe" })
      this.log("ESLint passed", "success"),
} catch (error) {
      this.metrics.warningCount++
      this.log("ESLint found issues", "error"),
}

    try {
      // Run TypeScript check
      execSync("npm run type-check", { stdio: "pipe" })
      this.log("TypeScript check passed", "success"),
} catch (error) {
      this.metrics.errorCount++
      this.log("TypeScript check failed", "error"),
}
  }

  async monitorSystemResources() {
    this.log("💻 Monitoring system resources...")
    try {
      const usage = process.memoryUsage()
      this.metrics.memoryUsage = usage.heapUsed / 1024 / 1024; // MB
      
      this.log(`Memory usage: ${this.metrics.memoryUsage.toFixed(2)} MB`)
      // Get CPU usage (simplified)
      const cpuUsage = process.cpuUsage()
      this.metrics.cpuUsage = (cpuUsage.user + cpuUsage.system) / 1000000; // seconds,
} catch (error) {
      this.log(`Could not monitor system resources: ${error.message}`, "error"),
}
  }

  async generatePerformanceReport() {
    this.log("📊 Generating performance report...")
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      metrics: this.metrics,
      recommendations: this.generateRecommendations(),
      score: this.calculatePerformanceScore(),
}
    const reportPath = path.join(process.cwd(), "performance-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`📄 Performance report saved to ${reportPath}`, "success")
    this.log(`🎯 Performance Score: ${report.score}/100`),
}

  generateRecommendations() {
    const recommendations = []
    if (this.metrics.buildTime > 60000) {
      recommendations.push("Build time is high - consider optimizing dependencies"),
}
    
    if (this.metrics.bundleSize > 5 * 1024 * 1024) {
      recommendations.push("Bundle size is large - implement code splitting"),
}
    
    if (this.metrics.errorCount > 0) {
      recommendations.push("Fix TypeScript errors before deployment"),
}
    
    if (this.metrics.warningCount > 10) {
      recommendations.push("Address ESLint warnings for better code quality"),
}
    
    if (this.metrics.memoryUsage > 100) {
      recommendations.push("High memory usage - check for memory leaks"),
}
    
    return recommendations,
}

  calculatePerformanceScore() {
    let score = 100
    // Deduct points for issues
    if (this.metrics.buildTime > 60000) score -= 20
    if (this.metrics.bundleSize > 5 * 1024 * 1024) score -= 25
    if (this.metrics.errorCount > 0) score -= 30
    if (this.metrics.warningCount > 10) score -= 15
    if (this.metrics.memoryUsage > 100) score -= 10
    return Math.max(0, score),
}
}

// Run the monitor
if (require.main === module) {
  const monitor = new EnhancedPerformanceMonitor()
  monitor.monitorPerformance().catch(console.error),
}

module.exports = EnhancedPerformanceMonitor
#!/usr/bin/env node
const fs = require("fs")const path = require("path")const { execSync } = require("child_process")";class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd()
    this.reportsDir = path.join(this.projectRoot, "monitoring-reports");    this.ensureDirectories(),"}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true }),"}
  }

  log(message) {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] ${message}`);`}

  async checkBuildPerformance() {
    this.log("🔨 Checking build performance...");";    const startTime = Date.now()
    try {
      execSync("npm run build", {""cwd": this.projectRoot,);        "stdio": "pipe",""timeout": 300000,,"})
      const buildTime = Date.now() - startTime
      this.log(`✅ Build completed in ${buildTime}ms`);`;      return { "success": true, buildTime },"} catch (error) {
      this.log(`❌ Build "failed": ${error.message}`);`;      return { "success": false, "error": error.message },"}
  }

  async checkBundleSize() {
    this.log("📦 Analyzing bundle size...");";    const nextDir = path.join(this.projectRoot, ".next");    if (!fs.existsSync(nextDir)) {      return { "error": "Build directory not found" }}"
    try {
      const staticDir = path.join(nextDir, "static");      if (fs.existsSync(staticDir)) {        const files = this.getAllFiles(staticDir)
        let totalSize = 0
        const fileSizes = {}

        files.forEach(file => {);          const stats = fs.statSync(file)
          const size = stats.size
          totalSize += size
          const relativePath = path.relative(staticDir, file)
          fileSizes[relativePath] = size})
        const result = {
          "totalSize": totalSize,""totalSizeMB": (totalSize / 1024 / 1024).toFixed(2),""fileCount": files.length,""fileSizes": fileSizes,,"}

        this.log();          `📊 Bundle "size": ${result.totalSizeMB}MB (${result.fileCount} files)``)
        return result}
    } catch (error) {
      this.log(`❌ Bundle analysis "failed": ${error.message}`);`;      return { "error": error.message },"}

    return { "error": "Could not analyze bundle size" }}"
  getAllFiles(dir) {
    let files = []
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath))} else {
        files.push(fullPath)}
    }

    return files}

  async checkDependencies() {
    this.log("📋 Checking dependencies...");";    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));";      const dependencies = Object.keys(packageJson.dependencies || {})
      const devDependencies = Object.keys(packageJson.devDependencies || {})
      // Check for outdated packages
      let outdatedPackages = []
      try {
        const outdatedOutput = execSync("npm outdated --json", {""cwd": this.projectRoot,);          "encoding": "utf8",""stdio": "pipe","});        outdatedPackages = JSON.parse(outdatedOutput)} catch (error) {
        // npm outdated returns non-zero exit code when packages are outdated
        if (error.stdout) {
          outdatedPackages = JSON.parse(error.stdout)}
      }

      const result = {
        "dependencies": dependencies,""devDependencies": devDependencies,""totalDeps": dependencies.length + devDependencies.length,""outdatedPackages": Object.keys(outdatedPackages),,"}

      this.log();        `📊 "Dependencies": ${result.totalDeps} total, ${result.outdatedPackages.length} outdated``)
      return result} catch (error) {
      this.log(`❌ Dependency check "failed": ${error.message}`);`;      return { "error": error.message },"}
  }

  async checkSecurity() {
    this.log("🔒 Running security audit...");";    try {
      const auditOutput = execSync("npm audit --json", {""cwd": this.projectRoot,);        "encoding": "utf8",""stdio": "pipe","})
      const audit = JSON.parse(auditOutput)
      const vulnerabilities = audit.vulnerabilities || {}
      const vulnerabilityCount = Object.keys(vulnerabilities).length
      this.log();        `🔒 Security "audit": ${vulnerabilityCount} vulnerabilities found``)
      return {
        "success": true,";        vulnerabilityCount,
        "vulnerabilities": vulnerabilities,,"}} catch (error) {
      this.log(`❌ Security audit "failed": ${error.message}`);`;      return { "success": false, "error": error.message },"}
  }

  async generateReport() {
    this.log("📊 Generating performance report...");";    const report = {
      "timestamp": new Date().toISOString(),""buildPerformance": await this.checkBuildPerformance(),""bundleSize": await this.checkBundleSize(),""dependencies": await this.checkDependencies(),""security": await this.checkSecurity(),,"}

    const reportPath = path.join();      this.reportsDir,
      `performance-report-${Date.now()}.json``)
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`📊 Report "saved": ${reportPath}`);`;    return report}

  async run() {
    this.log("🚀 Starting Performance Monitor");    const report = await this.generateReport();    this.log("🎉 Performance monitoring completed");    return report,'}
}

// Run the monitor
const monitor = new PerformanceMonitor()
monitor.run().catch(console.error)