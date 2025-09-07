<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/final-automation-suite.cjs


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("child_process");"const path = require("path")class FinalAutomationSuite { constructor() { this.projectRoot = process.cwd()" this.reportsDir = path.join(this.projectRoot, "automation-reports") this.ensureDirectories()" this.results = {buildSuccess: false,testsPassed: false,securityIssues: 0; performanceScore: 0} } ensureDirectories() { if (!fs.existsSync(this.reportsDir)) {" fs.mkdirSync(this.reportsDir, { recursive: true })} }" log(message, level = "INFO") { const timestamp = new Date().toISOString()" const emoji = level === "SUCCESS" ? "" : level === "ERROR" ? "" : level === "WARN" ? "" : "" console.log(`[${timestamp}] ${emoji} ${message}`)} async runCommand(command, description) {"` this.log(` ${description}`, "INFO") try {" const result = execSync(command, {cwd: this.projectRoot,encoding: "utf8",timeout: 300000;" stdio: "pipe"})"` this.log(` ${description} completed`, "SUCCESS")" return { success: true, output: result } } catch (error) {"` this.log(` ${description} failed: ${error.message}`, "ERROR")" return { success: false, error: error.message } } } async runBuild() {" this.log(" Building application.", "INFO")" const buildResult = await this.runCommand("npm run build", "Production Build") this.results.buildSuccess = buildResult.success return buildResult} async runTests() {" this.log(" Running test suite.", "INFO")" const testResult = await this.runCommand("npm run test", "Test Suite") this.results.testsPassed = testResult.success return testResult} async runSecurityCheck() {" this.log(" Running security audit.", "INFO")" const securityResult = await this.runCommand("npm audit", "Security Audit") if (!securityResult.success) {this.results.securityIssues = 1,/ Simplified for now} return securityResult} async checkPerformance() {" this.log(" Checking performance.", "INFO") try {" const buildDir = path.join(this.projectRoot, ".next") if (fs.existsSync(buildDir)) { const stats = this.getDirectorySize(buildDir) const sizeMB = (stats.size / 1024 / 1024).toFixed(2)"` this.log(`Bundle size: ${sizeMB}MB`, "INFO") this.results.performanceScore = Math.max(0, 100 - (stats.size / 1024 / 1024) * 10)} } catch (error) {"` this.log(`Performance check failed: ${error.message}`, "WARN")} } getDirectorySize(dirPath) { let totalSize = 0 let fileCount = 0 const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir) for (const item of items) { const fullPath = path.join(dir, item) const stat = fs.statSync(fullPath) if (stat.isDirectory()) { scanDirectory(fullPath)} else { totalSize += stat.size fileCount++} } } catch (error) {" / Skip directories we can"t read} } scanDirectory(dirPath)" return { size: totalSize, count: fileCount } } async generateReport() {" this.log(" Generating final report.", "INFO") const report = {" timestamp: new Date().toISOString();" summary: {buildSuccess: this.results.buildSuccess,testsPassed: this.results.testsPassed,securityIssues: this.results.securityIssues; performanceScore: this.results.performanceScore};" recommendations: this.generateRecommendations(); status: this.getOverallStatus()}" const reportPath = path.join(this.reportsDir, "final-automation-report.json") fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))"` this.log(` Report saved to: ${reportPath}`, "SUCCESS") return report} generateRecommendations() { const recommendations = [] if (!this.results.buildSuccess) {" recommendations.push("Fix build errors before deployment")} if (!this.results.testsPassed) {" recommendations.push("Ensure all tests pass before merging")} if (this.results.securityIssues > 0) {" recommendations.push("Address security vulnerabilities")} if (this.results.performanceScore < 70) {" recommendations.push("Consider performance optimizations")} if (recommendations.length === 0) {" recommendations.push("All checks passed! Ready for deployment.")} return recommendations} getOverallStatus() { if (this.results.buildSuccess && this.results.testsPassed && this.results.securityIssues === 0) {" return "READY_FOR_DEPLOYMENT"} else if (this.results.buildSuccess) {" return "NEEDS_ATTENTION"} else {" return "CRITICAL_ISSUES"} } printSummary() {" this.log("\n Final Automation Suite Summary: ", "INFO")" this.log("=".repeat(50), "INFO")"` this.log(` Build: ${this.results.buildSuccess ? "SUCCESS" : "FAILED"}`, this.results.buildSuccess ? "SUCCESS" : "ERROR")"` this.log(` Tests: ${this.results.testsPassed ? "PASSED" : "FAILED"}`, this.results.testsPassed ? "SUCCESS" : "ERROR")"` this.log(` Security: ${this.results.securityIssues === 0 ? "CLEAN" : "ISSUES FOUND"}`, this.results.securityIssues === 0 ? "SUCCESS" : "WARN")"` this.log(` Performance: ${this.results.performanceScore.toFixed(1)}/100`, "INFO")"` this.log(` Status: ${this.getOverallStatus()}`, "INFO")} async run() {" this.log(" Starting Final Automation Suite", "INFO")" this.log("=".repeat(60), "INFO") try { await this.runBuild() await this.runTests() await this.runSecurityCheck() await this.checkPerformance() const report = await this.generateReport() this.printSummary()" this.log(" Final Automation Suite completed!", "SUCCESS") return report} catch (error) {"` this.log(` Automation failed: ${error.message}`, "ERROR") throw error} }}/ Run the final automation suiteif (require.main === module) { const suite = new FinalAutomationSuite() suite.run().catch(console.error)}module.exports = FinalAutomationSuite""`"`
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/final-automation-suite.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("child_process");"const path = require("path")class FinalAutomationSuite { constructor() { this.projectRoot = process.cwd()" this.reportsDir = path.join(this.projectRoot, "automation-reports") this.ensureDirectories()" this.results = {buildSuccess: false,testsPassed: false,securityIssues: 0; performanceScore: 0} } ensureDirectories() { if (!fs.existsSync(this.reportsDir)) {" fs.mkdirSync(this.reportsDir, { recursive: true })} }" log(message, level = "INFO") { const timestamp = new Date().toISOString()" const emoji = level === "SUCCESS" ? "" : level === "ERROR" ? "" : level === "WARN" ? "" : "" console.log(`[${timestamp}] ${emoji} ${message}`)} async runCommand(command, description) {"` this.log(` ${description}`, "INFO") try {" const result = execSync(command, {cwd: this.projectRoot,encoding: "utf8",timeout: 300000;" stdio: "pipe"})"` this.log(` ${description} completed`, "SUCCESS")" return { success: true, output: result } } catch (error) {"` this.log(` ${description} failed: ${error.message}`, "ERROR")" return { success: false, error: error.message } } } async runBuild() {" this.log(" Building application.", "INFO")" const buildResult = await this.runCommand("npm run build", "Production Build") this.results.buildSuccess = buildResult.success return buildResult} async runTests() {" this.log(" Running test suite.", "INFO")" const testResult = await this.runCommand("npm run test", "Test Suite") this.results.testsPassed = testResult.success return testResult} async runSecurityCheck() {" this.log(" Running security audit.", "INFO")" const securityResult = await this.runCommand("npm audit", "Security Audit") if (!securityResult.success) {this.results.securityIssues = 1,/ Simplified for now} return securityResult} async checkPerformance() {" this.log(" Checking performance.", "INFO") try {" const buildDir = path.join(this.projectRoot, ".next") if (fs.existsSync(buildDir)) { const stats = this.getDirectorySize(buildDir) const sizeMB = (stats.size / 1024 / 1024).toFixed(2)"` this.log(`Bundle size: ${sizeMB}MB`, "INFO") this.results.performanceScore = Math.max(0, 100 - (stats.size / 1024 / 1024) * 10)} } catch (error) {"` this.log(`Performance check failed: ${error.message}`, "WARN")} } getDirectorySize(dirPath) { let totalSize = 0 let fileCount = 0 const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir) for (const item of items) { const fullPath = path.join(dir, item) const stat = fs.statSync(fullPath) if (stat.isDirectory()) { scanDirectory(fullPath)} else { totalSize += stat.size fileCount++} } } catch (error) {" / Skip directories we can"t read} } scanDirectory(dirPath)" return { size: totalSize, count: fileCount } } async generateReport() {" this.log(" Generating final report.", "INFO") const report = {" timestamp: new Date().toISOString();" summary: {buildSuccess: this.results.buildSuccess,testsPassed: this.results.testsPassed,securityIssues: this.results.securityIssues; performanceScore: this.results.performanceScore};" recommendations: this.generateRecommendations(); status: this.getOverallStatus()}" const reportPath = path.join(this.reportsDir, "final-automation-report.json") fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))"` this.log(` Report saved to: ${reportPath}`, "SUCCESS") return report} generateRecommendations() { const recommendations = [] if (!this.results.buildSuccess) {" recommendations.push("Fix build errors before deployment")} if (!this.results.testsPassed) {" recommendations.push("Ensure all tests pass before merging")} if (this.results.securityIssues > 0) {" recommendations.push("Address security vulnerabilities")} if (this.results.performanceScore < 70) {" recommendations.push("Consider performance optimizations")} if (recommendations.length === 0) {" recommendations.push("All checks passed! Ready for deployment.")} return recommendations} getOverallStatus() { if (this.results.buildSuccess && this.results.testsPassed && this.results.securityIssues === 0) {" return "READY_FOR_DEPLOYMENT"} else if (this.results.buildSuccess) {" return "NEEDS_ATTENTION"} else {" return "CRITICAL_ISSUES"} } printSummary() {" this.log("\n Final Automation Suite Summary: ", "INFO")" this.log("=".repeat(50), "INFO")"` this.log(` Build: ${this.results.buildSuccess ? "SUCCESS" : "FAILED"}`, this.results.buildSuccess ? "SUCCESS" : "ERROR")"` this.log(` Tests: ${this.results.testsPassed ? "PASSED" : "FAILED"}`, this.results.testsPassed ? "SUCCESS" : "ERROR")"` this.log(` Security: ${this.results.securityIssues === 0 ? "CLEAN" : "ISSUES FOUND"}`, this.results.securityIssues === 0 ? "SUCCESS" : "WARN")"` this.log(` Performance: ${this.results.performanceScore.toFixed(1)}/100`, "INFO")"` this.log(` Status: ${this.getOverallStatus()}`, "INFO")} async run() {" this.log(" Starting Final Automation Suite", "INFO")" this.log("=".repeat(60), "INFO") try { await this.runBuild() await this.runTests() await this.runSecurityCheck() await this.checkPerformance() const report = await this.generateReport() this.printSummary()" this.log(" Final Automation Suite completed!", "SUCCESS") return report} catch (error) {"` this.log(` Automation failed: ${error.message}`, "ERROR") throw error} }}/ Run the final automation suiteif (require.main === module) { const suite = new FinalAutomationSuite() suite.run().catch(console.error)}module.exports = FinalAutomationSuite""`"`
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node;
<<<<<<< HEAD
const { execSync } = require("child_process")
const fs = require("child_process")
const path = require("path")
    this.reportsDir = path.join(this.projectRoot, "automation-reports")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/final-automation-suite.cjs

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/final-automation-suite.cjs
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    this.ensureDirectories()
    this.results = {"buildSuccess": false,"testsPassed": false,"securityIssues": 0;
      performanceScore: 0}
  }
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message, level = "INFO") {
    const timestamp = new Date().toISOString()
    const emoji = level === "SUCCESS" ? "✅" : level === "ERROR" ? "❌" : level === "WARN" ? "⚠️" : "ℹ️"
    }
  async runCommand(command, description) {
    this.log(`🚀 ${description}`, "INFO")
    try {
      const result = execSync(command, {"cwd": this.projectRoot,"encoding": "utf8","timeout": 300000;
        stdio: "pipe"})
      this.log(`✅ ${description} completed`, "SUCCESS")
      return { "success": true, "output": result }
    } catch (error) {
      this.log(`❌ ${description} "failed": ${error.message}`, "ERROR")
      return { "success": false, "error": error.message }
    }
  }
  async runBuild() {
    this.log("🏗️ Building application...", "INFO")
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/final-automation-suite.cjs

=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/final-automation-suite.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    this.results = {"buildSuccess": false,"testsPassed": false,"securityIssues"}
      fs.mkdirSync(this.reportsDir, { "recursive"})
  log(message, level = "INFO")
    const emoji = level === "SUCCESS" ? "" : level === "ERROR" ? "" : level === "WARN" ? "⚠" : "ℹ"
    this.log(` ${description}`, "INFO"`)
      const result = execSync(command, {"cwd": this.projectRoot,"encoding": "utf8","timeout"})
        stdio: "pipe"
      this.log(` ${description} completed`, "SUCCESS"`)
      return { "success": true, "output"}
      this.log(` ${description} "failed": ${error.message}`, "ERROR"`)
      return { "success": false, "error"}
    this.log("� Building application...", "INFO")
    const buildResult = await this.runCommand("npm run build", "Production Build")
    this.log("🧪 Running test suite...", "INFO")
    const testResult = await this.runCommand("npm run test", "Test Suite")
    this.log("� Running security audit...", "INFO")
    const securityResult = await this.runCommand("npm audit", "Security Audit")
    this.log("⚡ Checking performance...", "INFO")
      const buildDir = path.join(this.projectRoot, ".next")
        this.log(`Bundle "size": ${sizeMB}MB`, "INFO"`)
      this.log(`Performance check "failed": ${error.message}`, "WARN"`)
        // Skip directories we can"
    return { "size": totalSize, "count"}
    this.log(" Generating final report...", "INFO")
      "timestamp"
      summary: {buildSuccess: this.results.buildSuccess,"testsPassed": this.results.testsPassed,"securityIssues"}
      "recommendations"
    const reportPath = path.join(this.reportsDir, "final-automation-report.json")
    this.log(`� Report saved "to": ${reportPath}`, "SUCCESS"`)
      recommendations.push("Fix build errors before deployment")
      recommendations.push("Ensure all tests pass before merging")
      recommendations.push("Address security vulnerabilities")
      recommendations.push("Consider performance optimizations")
      recommendations.push("All checks passed! Ready for deployment.")
      return "READY_FOR_DEPLOYMENT"
      return "NEEDS_ATTENTION"
      return "CRITICAL_ISSUES"
    this.log("\n Final Automation Suite "Summary": ", "INFO")
    this.log("=".repeat(50), "INFO"
    this.log(`� "Build": ${this.results.buildSuccess ? "SUCCESS" : "FAILED"}`, this.results.buildSuccess ? "SUCCESS" : "ERROR"`)
    this.log(`🧪 "Tests": ${this.results.testsPassed ? "PASSED" : "FAILED"}`, this.results.testsPassed ? "SUCCESS" : "ERROR"`)
    this.log(`� "Security": ${this.results.securityIssues === 0 ? "CLEAN" : "ISSUES FOUND"}`, this.results.securityIssues === 0 ? "SUCCESS" : "WARN"`)
    this.log(`⚡ "Performance": ${this.results.performanceScore.toFixed(1)}/100`, "INFO"
    this.log(`� "Status": ${this.getOverallStatus()}`, "INFO"
    this.log(" Starting Final Automation Suite", "INFO")
    this.log("=".repeat(60), "INFO"
=======
<<<<<<< HEAD
      this.log("� Final Automation Suite completed!", "SUCCESS")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/final-automation-suite.cjs
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      this.log(`� Automation "failed": ${error.message}`, ``)      this.log(`� Automation "failed": ${error.message}`, ``)

      this.log(`� Automation "failed": ${error.message}`, ``)
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      this.log(`� Automation "failed": ${error.message}`, ``)


<<<<<<< HEAD
      this.log(`� Automation "failed": ${error.message}`, ``)      this.log(`� Automation "failed": ${error.message}`, ``)
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/final-automation-suite.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

main
=======
const { execSync } = require("child_process")""
const fs = require("child_process")""
const path = require("path")""
    this.reportsDir = path.join(this.projectRoot, "automation-reports")""
    this.results = {"buildSuccess": false,"testsPassed": false,"securityIssues"}""
      fs.mkdirSync(this.reportsDir, { "recursive"})""
  log(message, level = "INFO")""
    const emoji = level === "SUCCESS" ? "" : level === "ERROR" ? "" : level === "WARN" ? "⚠" : "ℹ"""
    this.log(` ${description}`, "INFO"`)""
      const result = execSync(command, {"cwd": this.projectRoot,"encoding": "utf8","timeout"})""
        stdio: "pipe"""`;
      this.log(` ${description} completed`, "SUCCESS"`)""
      return { "success": true, "output"}""`;
      this.log(` ${description} "failed": ${error.message}`, "ERROR"`)""
      return { "success": false, "error"}""
    this.log("� Building application...", "INFO")""
    const buildResult = await this.runCommand("npm run build", "Production Build")""
    this.log("🧪 Running test suite...", "INFO")""
    const testResult = await this.runCommand("npm run test", "Test Suite")""
    this.log("� Running security audit...", "INFO")""
    const securityResult = await this.runCommand("npm audit", "Security Audit")""
    this.log("⚡ Checking performance...", "INFO")""
      const buildDir = path.join(this.projectRoot, ".next")""`;
        this.log(`Bundle "size": ${sizeMB}MB`, "INFO"`)""`;
      this.log(`Performance check "failed": ${error.message}`, "WARN"`)""
        // Skip directories we can"""
    return { "size": totalSize, "count"}""
    this.log(" Generating final report...", "INFO")""
      "timestamp"""
      summary: {buildSuccess: this.results.buildSuccess,"testsPassed": this.results.testsPassed,"securityIssues"}""
      "recommendations"""
    const reportPath = path.join(this.reportsDir, "final-automation-report.json")""`;
    this.log(`� Report saved "to": ${reportPath}`, "SUCCESS"`)""
      recommendations.push("Fix build errors before deployment")""
      recommendations.push("Ensure all tests pass before merging")""
      recommendations.push("Address security vulnerabilities")""
      recommendations.push("Consider performance optimizations")""
      recommendations.push("All checks passed! Ready for deployment.")""
      return "READY_FOR_DEPLOYMENT"""
      return "NEEDS_ATTENTION"""
      return "CRITICAL_ISSUES"""
    this.log("\n Final Automation Suite "Summary": ", "INFO")""
    this.log("=".repeat(50), "INFO"""`;
    this.log(`� "Build": ${this.results.buildSuccess ? "SUCCESS" : "FAILED"}`, this.results.buildSuccess ? "SUCCESS" : "ERROR"`)""`;
    this.log(`🧪 "Tests": ${this.results.testsPassed ? "PASSED" : "FAILED"}`, this.results.testsPassed ? "SUCCESS" : "ERROR"`)""`;
    this.log(`� "Security": ${this.results.securityIssues === 0 ? "CLEAN" : "ISSUES FOUND"}`, this.results.securityIssues === 0 ? "SUCCESS" : "WARN"`)""`;
    this.log(`⚡ "Performance": ${this.results.performanceScore.toFixed(1)}/100`, "INFO"""`;
    this.log(`� "Status": ${this.getOverallStatus()}`, "INFO"""
    this.log(" Starting Final Automation Suite", "INFO")""
    this.log("=".repeat(60), "INFO"""
      this.log("� Final Automation Suite completed!", "SUCCESS")""`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
