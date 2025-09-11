#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs")class CodeQualityChecks { constructor() { this.results = {" timestamp: new Date().toISOString(); checks: []; score: 100;" summary: { passed: 0, failed: 0, warnings: 0 } } } async runChecks() {" console.log(" Running Code Quality Checks.") try { await this.checkCodeStyle() await this.checkComplexity() await this.checkDuplication() await this.checkSecurity() await this.checkPerformance() this.generateReport()" console.log(" Code quality checks completed")} catch (error) {" console.error(" Code quality checks failed: ", error.message)} } async checkCodeStyle() {" console.log(" Checking code style.") try {" const result = execSync("npm run lint", { encoding: "utf8" })" this.addCheck("Code Style", "passed", "No style issues found")} catch (error) {" this.addCheck("Code Style", "failed", error.message) this.results.score -= 10} } async checkComplexity() {" console.log(" Checking code complexity.") try {" const result = execSync("npx complexity-report src/", { encoding: "utf8" })" this.addCheck("Complexity", "passed", "Code complexity is acceptable")} catch (error) {" this.addCheck("Complexity", "warning", "High complexity detected") this.results.score -= 5} } async checkDuplication() {" console.log(" Checking code duplication.") try {" const result = execSync("npx jscpd src/", { encoding: "utf8" })" this.addCheck("Duplication", "passed", "No significant duplication found")} catch (error) {" this.addCheck("Duplication", "warning", "Code duplication detected") this.results.score -= 5} } async checkSecurity() {" console.log(" Checking security.") try {" const result = execSync("npm audit", { encoding: "utf8" })" this.addCheck("Security", "passed", "No security vulnerabilities found")} catch (error) {" this.addCheck("Security", "failed", "Security vulnerabilities detected") this.results.score -= 20} } async checkPerformance() {" console.log(" Checking performance.") try {" const result = execSync("npm run build", { encoding: "utf8" })" this.addCheck("Performance", "passed", "Build completed successfully")} catch (error) {" this.addCheck("Performance", "failed", "Build failed") this.results.score -= 15} } addCheck(name, status, message) {" this.results.checks.push({ name, status, message, timestamp: new Date().toISOString() }) this.results.summary[status]++} generateReport() {" const reportPath = "code-quality-report.json" fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2))" console.log("\n Code Quality Results: ")" console.log("=".repeat(50)) console.log(`Quality Score: ${this.results.score}/100`)"` console.log(`Passed: ${this.results.summary.passed}`)"` console.log(`Failed: ${this.results.summary.failed}`)"` console.log(`Warnings: ${this.results.summary.warnings}`)" console.log("=".repeat(50))"` console.log(` Report saved to: ${reportPath}`)}}/ Run the checksconst qualityChecks = new CodeQualityChecks()qualityChecks.runChecks().catch(console.error)"`"`
#!/usr/bin/env node;
const { execSync } = require("child_process")
const fs = require("fs")
class CodeQualityChecks {
  constructor() {
    this.results = {
      "timestamp": new Date().toISOString();
      checks: [];
      score: 100;
      summary: { passed: 0, "failed": 0, "warnings": 0 }
    }
  }
  async runChecks() {
    try {
      await this.checkCodeStyle()
      await this.checkComplexity()
      await this.checkDuplication()
      await this.checkSecurity()
      await this.checkPerformance()
      this.generateReport()
      } catch (error) {
      console.error("❌ Code quality checks "failed": ", error.message)}
  }
  async checkCodeStyle() {
    try {
      const result = execSync("npm run lint", { "encoding": "utf8" })
      this.addCheck("Code Style", "passed", "No style issues found")} catch (error) {
      this.addCheck("Code Style", "failed", error.message)
      this.results.score -= 10}
  }
  async checkComplexity() {
    try {
      const result = execSync("npx complexity-report src/", { "encoding": "utf8" })
      this.addCheck("Complexity", "passed", "Code complexity is acceptable")} catch (error) {
      this.addCheck("Complexity", "warning", "High complexity detected")
      this.results.score -= 5}
  }
  async checkDuplication() {
    try {
      const result = execSync("npx jscpd src/", { "encoding": "utf8" })
      this.addCheck("Duplication", "passed", "No significant duplication found")} catch (error) {
      this.addCheck("Duplication", "warning", "Code duplication detected")
      this.results.score -= 5}
  }
  async checkSecurity() {
    try {
      const result = execSync("npm audit", { "encoding": "utf8" })
      this.addCheck("Security", "passed", "No security vulnerabilities found")} catch (error) {
      this.addCheck("Security", "failed", "Security vulnerabilities detected")
      this.results.score -= 20}
  }
  async checkPerformance() {
    try {
      const result = execSync("npm run build", { "encoding": "utf8" })
      this.addCheck("Performance", "passed", "Build completed successfully")} catch (error) {
      "timestamp"
      summary: { passed: 0, "failed": 0, "warnings"}
// console.log(" Running Code Quality Checks...")
      console.log(" Code quality checks completed")
      console.error(" Code quality checks "failed": ")
    console.log("� Checking code style...")
      const result = execSync("npm run lint", { "encoding": "utf8"})
      this.addCheck("Code Style", "passed", "No style issues found")
      this.addCheck("Code Style", "failed")
    console.log("🧮 Checking code complexity...")
      const result = execSync("npx complexity-report src/", { "encoding": "utf8"})
      this.addCheck("Complexity", "passed", "Code complexity is acceptable")
      this.addCheck("Complexity", "warning", "High complexity detected")
    console.log("� Checking code duplication...")
      const result = execSync("npx jscpd src/", { "encoding": "utf8"})
      this.addCheck("Duplication", "passed", "No significant duplication found")
      this.addCheck("Duplication", "warning", "Code duplication detected")
    console.log("� Checking security...")
      const result = execSync("npm audit", { "encoding": "utf8"})
      this.addCheck("Security", "passed", "No security vulnerabilities found")
      this.addCheck("Security", "failed", "Security vulnerabilities detected")
    console.log("⚡ Checking performance...")
      const result = execSync("npm run build", { "encoding": "utf8"})
      this.addCheck("Performance", "passed", "Build completed successfully")
      this.addCheck("Performance", "failed", "Build failed")
    this.results.checks.push({ name, status, message, "timestamp"})
    const reportPath = "code-quality-report.json"
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2))
    )
    )
    }
}
// Run the checks
const qualityChecks = new CodeQualityChecks()
qualityChecks.runChecks().catch(console.error)
// console.log("\n Code Quality "Results": ")
    console.log("=")
// console.log(`"Passed"`)
    console.log(`"Failed"`)
// console.log(`"Warnings"`)
    console.log("=")
    console.log(`� Report saved "to"`)
