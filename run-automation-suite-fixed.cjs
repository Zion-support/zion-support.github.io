#!/usr/bin/env node;

const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

class AutomationSuiteRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "automation-suite.log");
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + "\n")}
  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        encoding: 'utf8',;
        stdio: 'pipe',;
        cwd: this.projectRoot});
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }
  async runAutomationScripts() {
    this.log("🎯 Starting comprehensive automation suite...");

    const scripts = [;
      {
        command: "node scripts/comprehensive-automation-orchestrator.cjs",;
        description: "Comprehensive Automation Orchestrator"},;
      {
        command: "node scripts/error-prevention-automation.cjs",;
        description: "Error Prevention Automation"},;
      {
        command: "node scripts/performance-monitor.cjs",;
        description: "Performance Monitor"},;
      {
        command: "node scripts/security-audit.cjs",;
        description: "Security Audit"},;
      {
        command: "node scripts/syntax-fixer.cjs",;
        description: "Syntax Fixer"},;
      {
        command: "node scripts/build-optimizer.cjs",;
        description: "Build Optimizer"},;
      {
        command: "node scripts/dependency-manager.cjs",;
        description: "Dependency Manager"}
    ];

    const results = [];

    for (const script of scripts) {
      const result = await this.runCommand(script.command, script.description);
      results.push({;
        script: script.description,;
        ...result})}
    return results}
  async runTests() {
    this.log("🧪 Running comprehensive tests...");

    const testCommands = [;
      {
        command: "npm run lint",;
        description: "Linting Tests"},;
      {
        command: "npm run type-check",;
        description: "TypeScript Type Checking"},;
      {
        command: "npm test",;
        description: "Unit Tests"}
    ];

    const results = [];

    for (const test of testCommands) {
      const result = await this.runCommand(test.command, test.description);
      results.push({;
        test: test.description,;
        ...result})}
    return results}
  generateReport(automationResults, testResults) {
    const report = {
      timestamp: new Date().toISOString(),;
      summary: {
        totalAutomationScripts: automationResults.length,;
        successfulAutomationScripts: automationResults.filter(r => r.success).length,;
        failedAutomationScripts: automationResults.filter(r => !r.success).length,;
        totalTests: testResults.length,;
        successfulTests: testResults.filter(r => r.success).length,;
        failedTests: testResults.filter(r => !r.success).length},;
      automationResults,;
      testResults}

    const reportFile = path.join(this.reportsDir, `automation-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Report generated: ${reportFile}`);
    return report}
  async run() {
    try {
      this.log("🚀 Starting Automation Suite Runner");

      // Run automation scripts;
      const automationResults = await this.runAutomationScripts();

      // Run tests;
      const testResults = await this.runTests();

      // Generate report;
      const report = this.generateReport(automationResults, testResults);

      // Print summary;
      console.log("\n📊 AUTOMATION SUITE SUMMARY");
      console.log("=" * 50);
      console.log(`Automation Scripts: ${report.summary.successfulAutomationScripts}/${report.summary.totalAutomationScripts} successful`);
      console.log(`Tests: ${report.summary.successfulTests}/${report.summary.totalTests} successful`);
      console.log(`Report saved to: ${this.reportsDir}`);

      if (report.summary.failedAutomationScripts > 0 || report.summary.failedTests > 0) {
        console.log("\n⚠️  Some scripts or tests failed. Check the report for details.");
        process.exit(1)} else {
        console.log("\n✅ All automation scripts and tests completed successfully!");
        process.exit(0)}
      } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`);
      console.error("Fatal error:", error);
      process.exit(1)}
  }
}

// Run the automation suite;
if (require.main === module) {
  const runner = new AutomationSuiteRunner();
  runner.run()}

module.exports = AutomationSuiteRunner;