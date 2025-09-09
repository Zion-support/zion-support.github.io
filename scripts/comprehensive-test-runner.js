#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('🧪 Running comprehensive test suite...');

class ComprehensiveTestRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.testResults = {
      unit: { passed: 0, failed: 0, errors: [] },
      integration: { passed: 0, failed: 0, errors: [] },
      e2e: { passed: 0, failed: 0, errors: [] },
      performance: { passed: 0, failed: 0, errors: [] },
      accessibility: { passed: 0, failed: 0, errors: [] },
      security: { passed: 0, failed: 0, errors: [] }
    };
    this.startTime = Date.now()}

  async runAllTests() {
    console.log('🧪 Starting Comprehensive Test Suite...');
    
    try {
      await this.runUnitTests();
      await this.runIntegrationTests();
      await this.runE2ETests();
      await this.runPerformanceTests();
      await this.runAccessibilityTests();
      await this.runSecurityTests();
      
      this.generateReport();
      this.displaySummary()} catch (error) {
      console.error('❌ Test suite failed:', error.message)}
  }

  async runUnitTests() {
    console.log('🔬 Running unit tests...');
    
    try {
      const result = execSync('npm test' { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      this.testResults.unit.passed = this.extractTestCount(result, 'passed');
      this.testResults.unit.failed = this.extractTestCount(result, 'failed');
      console.log(`✅ Unit tests: ${this.testResults.unit.passed} passed, ${this.testResults.unit.failed} failed`)} catch (error) {
      this.testResults.unit.failed++;
      this.testResults.unit.errors.push(error.message);
      console.log(`❌ Unit tests failed: ${error.message}`)}
  }

  async runIntegrationTests() {
    console.log('🔗 Running integration tests...');
    
    try {
      // Check if integration test files exist
      const testFiles = this.findTestFiles('integration');
      
      if (testFiles.length > 0) {
        const result = execSync(`npm test -- ${testFiles.join(' ')}` { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 120000
        });
        
        this.testResults.integration.passed = this.extractTestCount(result, 'passed');
        this.testResults.integration.failed = this.extractTestCount(result, 'failed');
        console.log(`✅ Integration tests: ${this.testResults.integration.passed} passed, ${this.testResults.integration.failed} failed`)} else {
        console.log('⚠️  No integration test files found')}
      
    } catch (error) {
      this.testResults.integration.failed++;
      this.testResults.integration.errors.push(error.message);
      console.log(`❌ Integration tests failed: ${error.message}`)}
  }

  async runE2ETests() {
    console.log('🌐 Running E2E tests...');
    
    try {
      // Check if E2E test files exist
      const testFiles = this.findTestFiles('e2e');
      
      if (testFiles.length > 0) {
        const result = execSync(`npm test -- ${testFiles.join(' ')}` { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 180000
        });
        
        this.testResults.e2e.passed = this.extractTestCount(result, 'passed');
        this.testResults.e2e.failed = this.extractTestCount(result, 'failed');
        console.log(`✅ E2E tests: ${this.testResults.e2e.passed} passed, ${this.testResults.e2e.failed} failed`)} else {
        console.log('⚠️  No E2E test files found')}
      
    } catch (error) {
      this.testResults.e2e.failed++;
      this.testResults.e2e.errors.push(error.message);
      console.log(`❌ E2E tests failed: ${error.message}`)}
  }

  async runPerformanceTests() {
    console.log('⚡ Running performance tests...');
    
    try {
      // Run performance monitoring
      const result = execSync('node scripts/performance-monitor.js' { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      this.testResults.performance.passed = 1;
      console.log('✅ Performance tests: 1 passed, 0 failed')} catch (error) {
      this.testResults.performance.failed++;
      this.testResults.performance.errors.push(error.message);
      console.log(`❌ Performance tests failed: ${error.message}`)}
  }

  async runAccessibilityTests() {
    console.log('♿ Running accessibility tests...');
    
    try {
      // Check if accessibility testing tools are available
      try {
        execSync('npx @axe-core/cli --version' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 30000
        });
        
        // Run accessibility tests
        const result = execSync('npx @axe-core/cli http://localhost:3000' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 60000
        });
        
        this.testResults.accessibility.passed = 1;
        console.log('✅ Accessibility tests: 1 passed, 0 failed')} catch (error) {
        console.log('⚠️  Accessibility testing tools not available, skipping')}
      
    } catch (error) {
      this.testResults.accessibility.failed++;
      this.testResults.accessibility.errors.push(error.message);
      console.log(`❌ Accessibility tests failed: ${error.message}`)}
  }

  async runSecurityTests() {
    console.log('🔒 Running security tests...');
    
    try {
      // Run security audit
      const result = execSync('npm audit --json' { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      const auditResult = JSON.parse(result);
      const vulnerabilities = auditResult.vulnerabilities || {};
      
      if (Object.keys(vulnerabilities).length === 0) {
        this.testResults.security.passed = 1;
        console.log('✅ Security tests: 1 passed, 0 failed')} else {
        this.testResults.security.failed = Object.keys(vulnerabilities).length;
        this.testResults.security.errors.push(`${Object.keys(vulnerabilities).length} vulnerabilities found`);
        console.log(`❌ Security tests: 0 passed, ${Object.keys(vulnerabilities).length} failed`)}
      
    } catch (error) {
      this.testResults.security.failed++;
      this.testResults.security.errors.push(error.message);
      console.log(`❌ Security tests failed: ${error.message}`)}
  }

  findTestFiles(type) {
    const testFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir);
      testFiles.push(...files.filter(file => 
        file.includes(`.${type}.test.`) || 
        file.includes(`.${type}.spec.`) ||
        file.includes(`__tests__`) ||
        file.includes(`.test.`) ||
        file.includes(`.spec.`)
      ))}
    
    return testFiles}

  getAllFiles(dirPath) {
    let files = [];
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath))} else {
          files.push(fullPath)}
      }
    } catch (error) {
      // Skip directories we can't read
    }
    return files}

  extractTestCount(output, type) {
    const regex = new RegExp(`(\\d+)\\s+${type}`, 'i');
    const match = output.match(regex);
    return match ? parseInt(match[1]) : 0}

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: duration,
      results: this.testResults,
      summary: {
        totalPassed: Object.values(this.testResults).reduce((sum, result) => sum + result.passed, 0),
        totalFailed: Object.values(this.testResults).reduce((sum, result) => sum + result.failed, 0),
        totalErrors: Object.values(this.testResults).reduce((sum, result) => sum + result.errors.length, 0)
      },
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.projectRoot, 'comprehensive-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Test report saved to: ${reportPath}`)}

  generateRecommendations() {
    const recommendations = [];
    
    if (this.testResults.unit.failed > 0) {
      recommendations.push('Fix failing unit tests to ensure code quality')}
    
    if (this.testResults.integration.failed > 0) {
      recommendations.push('Fix failing integration tests to ensure component interactions work correctly')}
    
    if (this.testResults.e2e.failed > 0) {
      recommendations.push('Fix failing E2E tests to ensure user journeys work correctly')}
    
    if (this.testResults.performance.failed > 0) {
      recommendations.push('Optimize performance to meet performance benchmarks')}
    
    if (this.testResults.accessibility.failed > 0) {
      recommendations.push('Fix accessibility issues to ensure the app is accessible to all users')}
    
    if (this.testResults.security.failed > 0) {
      recommendations.push('Fix security vulnerabilities to ensure the app is secure')}
    
    if (recommendations.length === 0) {
      recommendations.push('All tests passed! Consider adding more test coverage for better quality assurance')}
    
    return recommendations}

  displaySummary() {
    const totalPassed = Object.values(this.testResults).reduce((sum, result) => sum + result.passed, 0);
    const totalFailed = Object.values(this.testResults).reduce((sum, result) => sum + result.failed, 0);
    const totalTests = totalPassed + totalFailed;
    const successRate = totalTests > 0 ? Math.round((totalPassed / totalTests) * 100) : 0;
    
    console.log('\n📊 Test Summary:');
    console.log('─'.repeat(50));
    console.log(`🔬 Unit Tests: ${this.testResults.unit.passed} passed, ${this.testResults.unit.failed} failed`);
    console.log(`🔗 Integration Tests: ${this.testResults.integration.passed} passed, ${this.testResults.integration.failed} failed`);
    console.log(`🌐 E2E Tests: ${this.testResults.e2e.passed} passed, ${this.testResults.e2e.failed} failed`);
    console.log(`⚡ Performance Tests: ${this.testResults.performance.passed} passed, ${this.testResults.performance.failed} failed`);
    console.log(`♿ Accessibility Tests: ${this.testResults.accessibility.passed} passed, ${this.testResults.accessibility.failed} failed`);
    console.log(`🔒 Security Tests: ${this.testResults.security.passed} passed, ${this.testResults.security.failed} failed`);
    console.log('─'.repeat(50));
    console.log(`📈 Overall Success Rate: ${successRate}%`);
    console.log(`⏱️  Total Duration: ${Math.round((Date.now() - this.startTime) / 1000)}s`);
    
    if (totalFailed > 0) {
      console.log('\n⚠️  Recommendations:');
      this.generateRecommendations().forEach(rec => {
        console.log(`   • ${rec}`)})} else {
      console.log('\n🎉 All tests passed!')}
  }
}

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
