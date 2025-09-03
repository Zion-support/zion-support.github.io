#!/usr/bin/env node
const { execSync } = require("child_process")
const fs = require("fs")
class AutomatedTesting {
  constructor() {
    this.projectRoot = process.cwd()
    this.testResults = [],
}

  async runAllTests() {
    console.log("🧪 Running automated test suite...")
    const tests = [
      { name: "Type Check", command: "NODE_OPTIONS="--max-old-space-size=8192" npm run type-check" },
      { name: "Lint Check", command: "npm run lint" },
      { name: "Build Test", command: "NODE_OPTIONS="--max-old-space-size=8192" npm run build" }
    ]
    
    for (const test of tests) {
      try {
        console.log(`Running ${test.name}...`)
        execSync(test.command, { cwd: this.projectRoot, stdio: "inherit" })
        this.testResults.push({ name: test.name, status: "PASSED" })
        console.log(`✅ ${test.name} passed`),
} catch (error) {
        this.testResults.push({ name: test.name, status: "FAILED", error: error.message })
        console.log(`❌ ${test.name} failed: ${error.message}`),
}
    }
    
    this.saveResults(),
}

  saveResults() {
    const reportPath = path.join(this.projectRoot, "automation-reports", "test-results.json")
    fs.writeFileSync(reportPath, JSON.stringify(this.testResults, null, 2))
    console.log("📊 Test results saved to automation-reports/test-results.json"),
}
}

if (require.main === module) {
  const tester = new AutomatedTesting()
  tester.runAllTests(),
}

module.exports = AutomatedTesting