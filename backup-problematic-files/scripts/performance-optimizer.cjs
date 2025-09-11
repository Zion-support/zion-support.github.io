#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
class PerformanceMonitor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), "performance-reports")
    this.ensureDirectories(),,
}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true }),,
}
  }
  async runLighthouse() {
    console.log("🔍 Running Lighthouse audit...")
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        encoding: "utf8",
        stdio: "pipe",,
})
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`✅ Build completed in ${this.metrics.buildTime}ms`, "SUCCESS")
      const command = "npx lighthouse http: //localhost:3000 --output=html --output-path=./performance-reports/lighthouse-report.html --chrome-flags="--headless;
      execSync(command, { stdio: "inherit" })
      console.log("✅ Lighthouse audit completed")

} catch (error) {
      console.log("❌ Lighthouse audit failed: ", error.message),,
}
  }
  async runBundleAnalysis() {
    console.log("📦 Running bundle analysis...")
    try {
      const command = "ANALYZE=true npm run build";
      execSync(command, { stdio: "inherit" })
      console.log("✅ Bundle analysis completed"),,
} catch (error) {
      console.log("❌ Bundle analysis failed: ", error.message),,
}
  }
}
const monitor = new PerformanceMonitor()
monitor.runLighthouse()
monitor.runBundleAnalysis()
`;
      fs.writeFileSync(
        path.join(this.projectRoot, "scripts", "performance-monitor.cjs"),
        performanceScript)
      this.optimizations.push("Performance monitoring scripts created")
      this.log("✅ Performance monitoring scripts created"),,
} catch (error) {
      this.log(`❌ Error analyzing dependencies: ${error.message}`, "ERROR"),,
}
  }
  checkImageOptimization() {
    this.log("🖼️ Checking image optimization...", "INFO")
    const publicDir = path.join(this.projectRoot, "public")
    if (!fs.existsSync(publicDir)) {
      this.log("⚠️ Public directory not found", "WARN")
      return,,
}
}
  }
  async run() {
    this.log("🚀 Starting performance optimization...")
    await this.optimizeImages()
    await this.optimizeBundle()
    await this.createPerformanceScripts()
    this.log(`🎉 Performance optimization completed with ${this.optimizations.length} optimizations`)
    this.optimizations.forEach(opt => this.log(`  - ${opt}`)),,
}
}
const optimizer = new PerformanceOptimizer()
optimizer.run().catch(console.error)
