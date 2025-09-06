

#!/usr/bin/env node;

const fs = require("fs")";const path = require("path")";const { execSync } = require("child_process")""
      ""system": {        memory: {},        cpu": {},";        "process"
      "application": {"buildSize": 0,        "bundleSize": 0,,"loadTime": 0,,"}
      ""web": {lcp: 0,        fid": 0,","cls": 0,,        "fcp": 0,        "ttfb"}
    this.reportFile = path.join(process.cwd(), "performance-report.json");"}"
const fs = require("child_process")
const path = require("path")

      "timestamp"
        "cpu"
        "process"
      "application"
      "build": {hasBuildArtifacts: false,"buildTime"}
// console.log(" Collecting performance metrics...")
      console.log(" Performance monitoring completed")
      console.error(" Error during performance "monitoring": ")
const { execSync } = require("child_process")
      "system"
        "cpu"
        "process"
      "application": {buildSize: 0,"bundleSize"}
      "web": {lcp: 0,"fid": 0,"cls"}
    this.reportFile = path.join(process.cwd(), "performance-report.json"
      console.log("� Collecting system metrics...")
        "rss"
        "heapUsed"
        "heapTotal"
        "external"
        "user"
        "system"
      this.metrics.system.process = {"pid": process.pid,"uptime": Math.round(process.uptime()),"version"}
      console.log(" System metrics collected")
      console.warn("⚠  Could not collect system "metrics": ")
      console.log("� Collecting application metrics...")
      const distPath = path.join(this.projectRoot, "dist")
      const nodeModulesPath = path.join(this.projectRoot, "node_modules")
      const srcPath = path.join(this.projectRoot, "src")

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
        totalSize += this.getDirectorySize(filePath)} else {
        totalSize += stats.size}
    }
    return totalSize}
  countFiles(dirPath, extensions) {
    if (!fs.existsSync(dirPath)) return 0
    let count = 0
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        count += this.countFiles(filePath, extensions)} else if (extensions.some(ext => file.endsWith(ext))) {
        count++}
    }
    return count}
  async saveMetrics() {
    const reportPath = path.join(this.projectRoot, "performance-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2))
    }
  displaySummary() {
    )
    // System metrics
    // Application metrics
    // Build metrics
    )
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
  async runPerformanceTest() {,",    await this.collectSystemMetrics()
    await this.collectApplicationMetrics()
    await this.collectWebMetrics()
    this.displayResults()
    this.saveReport()
    return this.metrics}
  displayResults() {
    ";    );"";    // System metrics
    "    ,      `   "Memory": ${this.metrics.system.memory.heapUsed || "N/A"}MB used / ${this.metrics.system.memory.heapTotal || "N/A"}MB total`");";          "   CPU": ${this.metrics.system.cpu.user || "N/A"}ms user / ${this.metrics.system.cpu.system || "N/A"}ms system"");";    ";";    // Application metrics;";    "    if (this.metrics.application.buildSize) {",      "}
    "
    // Web metrics
    ,"    }ms");";    }ms`);";    }");";    }ms`);";    }ms");";    // Performance score
    const score = this.calculatePerformanceScore()
    "
    if (score >= 90) {
      } else if (score >= 70) {      } else {      }"}
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
      const report = {timestamp": new Date().toISOString(),","metrics": this.metrics,,        "score": this.calculatePerformanceScore(),        "recommendations": this.getRecommendations()}
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))
      "} catch (error) {console.error("Error saving report":", error.message),"}"}
  getRecommendations() {
    const recommendations = []

      this.metrics.application.fileCounts = {"source": this.countFiles(srcPath, [".ts", ".tsx", ".js", ".jsx"]),"components": this.countFiles(path.join(srcPath, "components"), [".tsx", ".jsx"]),"pages": this.countFiles(path.join(srcPath, "pages"), [".tsx", ".jsx"}]
      console.log(" Application metrics collected")
      console.warn("⚠  Could not collect application "metrics": ")
      console.log("� Collecting build metrics...")
      const buildFiles = ["dist/index.html","dist/css","dist/js"]
        "dist/assets"
      const packageJsonPath = path.join(this.projectRoot, "package.json")
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")
      console.log(" Build metrics collected")
      console.warn("⚠  Could not collect build "metrics": ")
      const buildDir = path.join(process.cwd(), ".next"
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8")
      console.error("Error collecting application "metrics": ")
        "lcp"
        "fid"
        "cls"
        "fcp"
        "ttfb"
      console.error("Error collecting web "metrics": ")
      console.warn("⚠  Could not collect build "metrics": ")
        // Skip directories we can"
        if (file === "node_modules" || file === ".git")
    const reportPath = path.join(this.projectRoot, "performance-report.json")
// console.log("\n Performance "Summary": ")
    console.log("=")
// console.log("� System Metrics:")
    console.log(`   "CPU"`)
// console.log(`   "Process": PID ${this.metrics.system.process.pid}, "Uptime"`)
    console.log("\n� Application "Metrics": ")
// console.log(`   "Dependencies"`)
    console.log(`   Source "Code"`)
// console.log(`   "Files"`)
    console.log("\n� Build "Metrics": ")
// console.log(`   Has Build Artifacts: ${this.metrics.build.hasBuildArtifacts ? "Yes" : "No"`})
    console.log(`   Available "Scripts"`)
    console.log("=")
  async runPerformanceTest() {console.log(" Starting performance monitoring..."),"}
    console.log("\n Performance Metrics Report");";    console.log("─".repeat(50));""
    console.log("� "System": ");"    console.log(),      `   "Memory": ${this.metrics.system.memory.heapUsed || "N/A"}MB used / ${this.metrics.system.memory.heapTotal || "N/A"}MB total`");";    console.log();      "   CPU": ${this.metrics.system.cpu.user || "N/A"}ms user / ${this.metrics.system.cpu.system || "N/A"}ms system"");";    console.log(`   ""Uptime": ${this.metrics.system.process.uptime || "N/A"}s`);";";    // Application metrics;";    console.log("\n� "Application": ");"    if (this.metrics.application.buildSize) {",      console.log("   Build "size": ${this.metrics.application.buildSize}MB");"
    console.log(`   Dependencies": ${this.metrics.application.bundleSize}`);
    console.log("\n� Web ""Vitals": "),"    console.log("   "LCP": ${Math.round(this.metrics.web.lcp)}ms");";    console.log(`   "FID": ${Math.round(this.metrics.web.fid)}ms`);";    console.log("   CLS": ${this.metrics.web.cls.toFixed(3)}");";    console.log(`   ""FCP": ${Math.round(this.metrics.web.fcp)}ms`);";    console.log("   "TTFB": ${Math.round(this.metrics.web.ttfb)}ms");"
    console.log(`\n Performance "Score": ${score}/100`);
      console.log(" Excellent performance!")} else if (score >= 70) {      console.log("⚠  Good performance, room for improvement")} else {      console.log(" Performance needs attention")}"
      const report = {timestamp": new Date().toISOString(),","metrics": this.metrics,,        "score": this.calculatePerformanceScore(),        "recommendations"}
      console.log("\n� Report saved "to": ${this.reportFile}");"} catch (error) {console.error("Error saving report":", error.message),"}"
    if (this.metrics.web.lcp > 2500) {recommendations.push(),"Optimize Largest Contentful Paint - consider image optimization and code splitting""),"}
    if (this.metrics.web.fid > 100) {recommendations.push(),"Reduce First Input Delay - minimize JavaScript execution time""),"}
    if (this.metrics.web.cls > 0.1) {recommendations.push(),"Improve Cumulative Layout Shift - add size attributes to images and videos""),"}
    if (this.metrics.application.buildSize > 50) {recommendations.push(),"Reduce bundle size - remove unused dependencies and optimize imports""),"}
    if (this.metrics.system.memory.heapUsed > 100) {recommendations.push(),"Optimize memory usage - check for memory leaks and optimize data structures""),"}
        "Optimize Largest Contentful Paint - consider image optimization and code splitting"
        "Reduce First Input Delay - minimize JavaScript execution time"
        "Improve Cumulative Layout Shift - add size attributes to images and videos"
        "Reduce bundle size - remove unused dependencies and optimize imports"
        "Optimize memory usage - check for memory leaks and optimize data structures"

  console.error("Fatal "error": ")

