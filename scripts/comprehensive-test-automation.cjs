#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveTestAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'test-automation-logs.txt');
    this.results = {
      startTime: new Date().toISOString(),
      endTime: null,
      tests: {
        unit: { passed: 0, failed: 0, total: 0 },
        integration: { passed: 0, failed: 0, total: 0 },
        e2e: { passed: 0, failed: 0, total: 0 },
        smoke: { passed: 0, failed: 0, total: 0 }
      },
      coverage: {
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0
      errors: [],
      warnings: []
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        timeout: 60000,
        encoding: 'utf8',
        ...options 
      });
      return { success: true, output: result.toString() };
    } catch (error) {
      return { 
        success: false, 
        error: error.message,
        output: error.stdout ? error.stdout.toString() : ,
        stderr: error.stderr ? error.stderr.toString() : 

  async runUnitTests() {
    this.log('🧪 Running unit tests...');
    
      const result = await this.runCommand('npm run test -- --coverage --watchAll=false');
      
      if (result.success) {
        // Parse Jest output for test results
        const output = result.output;
        const passedMatch = output.match(/(\d+) passing/);
        const failedMatch = output.match(/(\d+) failing/);
        
        this.results.tests.unit.passed = passedMatch ? parseInt(passedMatch[1]) : 0;
        this.results.tests.unit.failed = failedMatch ? parseInt(failedMatch[1]) : 0;
        this.results.tests.unit.total = this.results.tests.unit.passed + this.results.tests.unit.failed;
        
        // Parse coverage
        const coverageMatch = output.match(/All files\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)/);
        if (coverageMatch) {
          this.results.coverage.lines = parseFloat(coverageMatch[1]);
          this.results.coverage.functions = parseFloat(coverageMatch[2]);
          this.results.coverage.branches = parseFloat(coverageMatch[3]);
          this.results.coverage.statements = parseFloat(coverageMatch[4]);
        `;
        this.log(`✅ Unit tests completed: ${this.results.tests.unit.passed} passed, ${this.results.tests.unit.failed} failed`);
      } else {`;
        this.log(`❌ Unit tests failed: ${result.error}`, 'ERROR');`;
        this.results.errors.push(`Unit tests: ${result.error}`);
    } catch (error) {`;
      this.log(`❌ Unit test execution failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`Unit tests: ${error.message}`);

  async runSmokeTests() {
    this.log('💨 Running smoke tests...');
    
      const result = await this.runCommand('npm run test:smoke');
      
        this.results.tests.smoke.passed = 1;
        this.results.tests.smoke.failed = 0;
        this.results.tests.smoke.total = 1;
        this.log('✅ Smoke tests passed');
      } else {
        this.results.tests.smoke.passed = 0;
        this.results.tests.smoke.failed = 1;
        this.results.tests.smoke.total = 1;`;
        this.log(`❌ Smoke tests failed: ${result.error}`, 'ERROR');`;
        this.results.errors.push(`Smoke tests: ${result.error}`);
      this.log(`❌ Smoke test execution failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`Smoke tests: ${error.message}`);

  async runIntegrationTests() {
    this.log('🔗 Running integration tests...');
    
      // Check if integration tests exist
      const integrationTestDir = path.join(this.projectRoot, 'tests/integration');
      if (!fs.existsSync(integrationTestDir)) {
        this.log('⚠️  No integration tests found, skipping...', 'WARNING');
        this.results.warnings.push('No integration tests found');
        return;
      
      const result = await this.runCommand('npm run test -- tests/integration --watchAll=false');
      
        
        this.results.tests.integration.passed = passedMatch ? parseInt(passedMatch[1]) : 0;
        this.results.tests.integration.failed = failedMatch ? parseInt(failedMatch[1]) : 0;
        this.results.tests.integration.total = this.results.tests.integration.passed + this.results.tests.integration.failed;
        this.log(`✅ Integration tests completed: ${this.results.tests.integration.passed} passed, ${this.results.tests.integration.failed} failed`);
        this.log(`❌ Integration tests failed: ${result.error}`, 'ERROR');`;
        this.results.errors.push(`Integration tests: ${result.error}`);
      this.log(`❌ Integration test execution failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`Integration tests: ${error.message}`);

  async runE2ETests() {
    this.log('🌐 Running E2E tests...');
    
      // Check if Playwright is available
      const playwrightConfig = path.join(this.projectRoot, 'playwright.config.ts');
      if (!fs.existsSync(playwrightConfig)) {
        this.log('⚠️  No Playwright config found, skipping E2E tests...', 'WARNING');
        this.results.warnings.push('No Playwright config found');
      
      const result = await this.runCommand('npx playwright test');
      
        const passedMatch = output.match(/(\d+) passed/);
        const failedMatch = output.match(/(\d+) failed/);
        
        this.results.tests.e2e.passed = passedMatch ? parseInt(passedMatch[1]) : 0;
        this.results.tests.e2e.failed = failedMatch ? parseInt(failedMatch[1]) : 0;
        this.results.tests.e2e.total = this.results.tests.e2e.passed + this.results.tests.e2e.failed;
        this.log(`✅ E2E tests completed: ${this.results.tests.e2e.passed} passed, ${this.results.tests.e2e.failed} failed`);
        this.log(`❌ E2E tests failed: ${result.error}`, 'ERROR');`;
        this.results.errors.push(`E2E tests: ${result.error}`);
      this.log(`❌ E2E test execution failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`E2E tests: ${error.message}`);

  async runLintCheck() {
    this.log('🔍 Running lint check...');
    
      const result = await this.runCommand('npm run lint');
      
        this.log('✅ Lint check passed');
        this.log(`❌ Lint check failed: ${result.error}`, 'ERROR');`;
        this.results.errors.push(`Lint check: ${result.error}`);
      this.log(`❌ Lint check execution failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`Lint check: ${error.message}`);

  async runTypeCheck() {
    this.log('📝 Running type check...');
    
      const result = await this.runCommand('npm run type-check');
      
        this.log('✅ Type check passed');
        this.log(`❌ Type check failed: ${result.error}`, 'ERROR');`;
        this.results.errors.push(`Type check: ${result.error}`);
      this.log(`❌ Type check execution failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`Type check: ${error.message}`);

  async runAllTests() {
    this.log('🚀 Starting Comprehensive Test Automation...');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });

    // Clear previous logs
    if (fs.existsSync(this.logFile)) {
      fs.writeFileSync(this.logFile, );

    // Run all test types
    await this.runLintCheck();
    await this.runTypeCheck();
    await this.runSmokeTests();
    await this.runUnitTests();
    await this.runIntegrationTests();
    await this.runE2ETests();

    // Generate final report
    this.generateReport();
    
    this.log('🎉 Comprehensive Test Automation completed!');
    
    const totalPassed = Object.values(this.results.tests).reduce((sum, test) => sum + test.passed, 0);
    const totalFailed = Object.values(this.results.tests).reduce((sum, test) => sum + test.failed, 0);
    const totalTests = totalPassed + totalFailed;
    this.log(`📊 Test Results: ${totalPassed}/${totalTests} tests passed`);
    
    return this.results;

  generateReport() {
    this.results.endTime = new Date().toISOString();
    this.results.duration = new Date(this.results.endTime) - new Date(this.results.startTime);
    
    
    const report = {
      ...this.results,
      summary: {
        totalTests: totalTests,
        passedTests: totalPassed,
        failedTests: totalFailed,
        successRate: totalTests > 0 ? (totalPassed / totalTests * 100).toFixed(2) + '%' : '0%',
        coverage: this.results.coverage,
        duration: this.results.duration + 'ms

    const reportFile = path.join(this.projectRoot, 'comprehensive-test-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Detailed report saved to: ${reportFile}`);
    
    // Also save a human-readable summary
    const summaryFile = path.join(this.projectRoot, 'test-summary.txt');`;
    const summary = `
Comprehensive Test Automation Report
==================================
Start Time: ${this.results.startTime}
End Time: ${this.results.endTime}
Duration: ${this.results.duration}ms

Test Results:
- Unit Tests: ${this.results.tests.unit.passed}/${this.results.tests.unit.total} passed
- Integration Tests: ${this.results.tests.integration.passed}/${this.results.tests.integration.total} passed
- E2E Tests: ${this.results.tests.e2e.passed}/${this.results.tests.e2e.total} passed
- Smoke Tests: ${this.results.tests.smoke.passed}/${this.results.tests.smoke.total} passed

Total: ${totalPassed}/${totalTests} tests passed (${report.summary.successRate})

Coverage:
- Lines: ${this.results.coverage.lines}%
- Functions: ${this.results.coverage.functions}%
- Branches: ${this.results.coverage.branches}%
- Statements: ${this.results.coverage.statements}%
${this.results.errors.length > 0 ? `\nErrors:\n${this.results.errors.map(e => `- ${e}`).join('\n')}` : }`;
${this.results.warnings.length > 0 ? `\nWarnings:\n${this.results.warnings.map(w => `- ${w}`).join('\n')}` : }`;
    
    fs.writeFileSync(summaryFile, summary);`;
    this.log(`📋 Summary saved to: ${summaryFile}`);

// Handle command line arguments
if (require.main === module) {
  const testAutomation = new ComprehensiveTestAutomation();
  const command = process.argv[2];

  switch (command) {
    case "run":
      testAutomation.runAllTests().then(() => {
        const totalFailed = Object.values(testAutomation.results.tests).reduce((sum, test) => sum + test.failed, 0);
        process.exit(totalFailed > 0 ? 1 : 0);
      break;
    case "report":
      testAutomation.generateReport();
    default:
      console.log("Usage: node comprehensive-test-automation.cjs [run|report]");
      process.exit(1);

module.exports = ComprehensiveTestAutomation;`;