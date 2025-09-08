#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentTestingValidator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = [];
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`\n🚀 ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });
      this.log(`✅ ${description} completed successfully`);
      this.results.push({ task: description, success: true, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      this.results.push({ task: description, success: false, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runIntelligentTesting() {
    this.log('🎯 Starting Intelligent Testing and Validation...');

    // 1. Unit Tests
    await this.runCommand('npm run test:unit', 'Unit Tests');
    await this.runCommand('npm run test:coverage', 'Test Coverage Analysis');

    // 2. Integration Tests
    await this.runCommand('npm run test:integration', 'Integration Tests');

    // 3. End-to-End Tests
    await this.runCommand('npm run test:e2e', 'End-to-End Tests');

    // 4. Smoke Tests
    await this.runCommand('npm run test:smoke', 'Smoke Tests');

    // 5. Performance Tests
    await this.runCommand('npm run test:performance', 'Performance Tests');
    await this.runCommand('npm run test:load', 'Load Tests');

    // 6. Security Tests
    await this.runCommand('npm run test:security', 'Security Tests');
    await this.runCommand('npm run test:vulnerability', 'Vulnerability Tests');

    // 7. Accessibility Tests
    await this.runCommand('npm run test:a11y', 'Accessibility Tests');

    // 8. Visual Regression Tests
    await this.runCommand('npm run test:visual', 'Visual Regression Tests');

    // 9. API Tests
    await this.runCommand('npm run test:api', 'API Tests');

    // 10. Cross-browser Tests
    await this.runCommand('npm run test:cross-browser', 'Cross-browser Tests');

    // 11. Mobile Tests
    await this.runCommand('npm run test:mobile', 'Mobile Tests');

    // 12. Component Tests
    await this.runCommand('npm run test:components', 'Component Tests');

    this.generateReport();
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;

    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      totalTasks: this.results.length,
      successful: this.results.filter(r => r.success).length,
      failed: this.results.filter(r => !r.success).length,
      successRate: `${Math.round((this.results.filter(r => r.success).length / this.results.length) * 100)}%`,
      results: this.results,
      testHealth: this.calculateTestHealth()
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'intelligent-testing-validator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`\n📊 Intelligent Testing and Validation completed!`);
    this.log(`📈 Success Rate: ${report.successRate}`);
    this.log(`🏥 Test Health: ${report.testHealth}`);
    this.log(`⏱️ Duration: ${report.duration}`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }

  calculateTestHealth() {
    const successRate = this.results.filter(r => r.success).length / this.results.length;
    if (successRate >= 0.9) return 'EXCELLENT';
    if (successRate >= 0.8) return 'GOOD';
    if (successRate >= 0.7) return 'FAIR';
    if (successRate >= 0.6) return 'POOR';
    return 'CRITICAL';
  }
}

// Run the validator
if (require.main === module) {
  const validator = new IntelligentTestingValidator();
  validator.runIntelligentTesting().catch(console.error);
}

module.exports = IntelligentTestingValidator;