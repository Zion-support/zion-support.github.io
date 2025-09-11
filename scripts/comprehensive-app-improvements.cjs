#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Comprehensive App Improvements...');

class ComprehensiveAppImprover {
  constructor() {
    this.reportFile = path.join(
      __dirname,
      '..',
      'comprehensive-improvements-report.json'
    );
    this.results = {
      timestamp: new Date().toISOString(),
      build: null,
      tests: null,
      security: null,
      performance: null,
      codeQuality: null,
      automation: null,
      overall: { status: 'unknown', score: 0 },
    };
  }

  runCommand(command, description) {
    try {
      console.log(`🔍 ${description}...`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '..'),
      });
      console.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      console.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  runBuild() {
    const result = this.runCommand('npm run build', 'Production Build');
    this.results.build = result;
  }

  runTests() {
    const result = this.runCommand(
      'npx vitest run --reporter=dot --passWithNoTests',
      'Unit Tests'
    );
    this.results.tests = result;
  }

  runSecurity() {
    const result = this.runCommand(
      'node scripts/security-audit.cjs',
      'Security Audit'
    );
    this.results.security = result;
  }

  runPerformance() {
    // Fallback to optimize-performance.js if the .cjs variant isn't present
    const perfCmd = fs.existsSync(
      path.join(__dirname, 'optimize-performance.cjs')
    )
      ? 'node scripts/optimize-performance.cjs'
      : 'node scripts/optimize-performance.js';
    const result = this.runCommand(perfCmd, 'Performance Optimization');
    this.results.performance = result;
  }

  runCodeQuality() {
    const result = this.runCommand('npm run lint:check', 'Code Quality Check');
    this.results.codeQuality = result;
  }

  runAutomation() {
    // Prefer scripts/master-automation-orchestrator.cjs if exists; otherwise noop
    const orchestrator = path.join(
      __dirname,
      'master-automation-orchestrator.cjs'
    );
    if (fs.existsSync(orchestrator)) {
      const result = this.runCommand(
        'node scripts/master-automation-orchestrator.cjs',
        'Automation Orchestrator'
      );
      this.results.automation = result;
    } else {
      this.results.automation = {
        success: true,
        result: 'No orchestrator found, skipped.',
      };
    }
  }

  calculateOverallScore() {
    let totalScore = 0;
    let maxScore = 0;

    if (this.results.build?.success) totalScore += 100 * 0.25;
    maxScore += 100 * 0.25;

    if (this.results.tests?.success) totalScore += 100 * 0.2;
    maxScore += 100 * 0.2;

    if (this.results.security?.success) totalScore += 100 * 0.2;
    maxScore += 100 * 0.2;

    if (this.results.performance?.success) totalScore += 100 * 0.15;
    maxScore += 100 * 0.15;

    if (this.results.codeQuality?.success) totalScore += 100 * 0.1;
    maxScore += 100 * 0.1;

    if (this.results.automation?.success) totalScore += 100 * 0.1;
    maxScore += 100 * 0.1;

    const finalScore = Math.round((totalScore / maxScore) * 100);
    this.results.overall.score = finalScore;
    this.results.overall.status =
      finalScore >= 80
        ? 'excellent'
        : finalScore >= 60
          ? 'good'
          : finalScore >= 40
            ? 'fair'
            : 'poor';
    return finalScore;
  }

  generateReport() {
    const score = this.calculateOverallScore();
    fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
    console.log(
      `📊 Comprehensive improvements report saved to: ${this.reportFile}`
    );
    console.log(
      `🎯 Overall App Score: ${score}/100 (${this.results.overall.status})`
    );
  }

  run() {
    try {
      console.log('🚀 Running comprehensive app improvements...');
      this.runBuild();
      this.runTests();
      this.runSecurity();
      this.runPerformance();
      this.runCodeQuality();
      this.runAutomation();
      this.generateReport();
      console.log('🎉 Comprehensive app improvements completed successfully!');
    } catch (error) {
      console.log(`❌ Comprehensive app improvements failed: ${error.message}`);
      process.exit(1);
    }
  }
}

new ComprehensiveAppImprover().run();
