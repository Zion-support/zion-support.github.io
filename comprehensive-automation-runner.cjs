#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'comprehensive-automation.log');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n')}

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000, // 5 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }

  async runLintingAndFormatting() {
    this.log('🔍 Running linting and formatting...');
    
    const lintingCommands = [
      { command: 'npm run lint', description: 'ESLint Check' }, { command: 'npm run format:check', description: 'Prettier Format Check' }, { command: 'npm run type-check', description: 'TypeScript Type Check' }
    ];

    const results = [];
    for (const cmd of lintingCommands) {
      const result = await this.runCommand(cmd.command, cmd.description);
      results.push({ ...cmd, ...result })}

    return results}

  async runTesting() {
    this.log('🧪 Running tests...');
    
    const testCommands = [
      { command: 'npm run test', description: 'Jest Test Suite' }, { command: 'npm run test:coverage', description: 'Test Coverage' }
    ];

    const results = [];
    for (const cmd of testCommands) {
      const result = await this.runCommand(cmd.command, cmd.description);
      results.push({ ...cmd, ...result })}

    return results}

  async runBuild() {
    this.log('🏗️ Running build...');
    
    const buildCommands = [
      { command: 'npm run build', description: 'Next.js Build' }, { command: 'npm run analyze', description: 'Bundle Analysis' }
    ];

    const results = [];
    for (const cmd of buildCommands) {
      const result = await this.runCommand(cmd.command, cmd.description);
      results.push({ ...cmd, ...result })}

    return results}

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    
    const securityCommands = [
      { command: 'npm audit', description: 'NPM Security Audit' }, { command: 'npm audit --audit-level=moderate', description: 'NPM Audit Moderate' }
    ];

    const results = [];
    for (const cmd of securityCommands) {
      const result = await this.runCommand(cmd.command, cmd.description);
      results.push({ ...cmd, ...result })}

    return results}

  async runPerformanceAnalysis() {
    this.log('⚡ Running performance analysis...');
    
    // Check for performance monitoring scripts
    const perfScripts = [
      'scripts/performance-monitor.js',
      'scripts/performance-monitor.cjs',
      'scripts/automation/performance-monitor.cjs'
    ];

    const results = [];
    for (const script of perfScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(`node ${script}`, `Performance Monitor: ${script}`);
        results.push({ script, ...result })}
    }

    return results}

  async runErrorDetection() {
    this.log('🔍 Running error detection...');
    
    // Check for error detection scripts
    const errorScripts = [
      'scripts/automation/comprehensive-error-fixer.cjs',
      'scripts/automation/error-monitor.cjs',
      'scripts/automation/master-error-fixer.cjs'
    ];

    const results = [];
    for (const script of errorScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(`node ${script}`, `Error Detection: ${script}`);
        results.push({ script, ...result })}
    }

    return results}

  async runQualityChecks() {
    this.log('📊 Running quality checks...');
    
    // Check for quality check scripts
    const qualityScripts = [
      'scripts/automation/quality-checks.cjs',
      'scripts/automation/code-quality-automation.cjs',
      'scripts/automation/linting-error-fixer.cjs'
    ];

    const results = [];
    for (const script of qualityScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(`node ${script}`, `Quality Check: ${script}`);
        results.push({ script, ...result })}
    }

    return results}

  async runDependencyManagement() {
    this.log('📦 Running dependency management...');
    
    const depCommands = [
      { command: 'npm outdated', description: 'Check Outdated Dependencies' }, { command: 'npm ls --depth=0', description: 'List Dependencies' }
    ];

    const results = [];
    for (const cmd of depCommands) {
      const result = await this.runCommand(cmd.command, cmd.description);
      results.push({ ...cmd, ...result })}

    return results}

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: 0,
        successful: 0,
        failed: 0
      },
      categories: {},
      recommendations: []
    };

    // Process results by category
    Object.keys(results).forEach(category => {
      const categoryResults = results[category];
      report.categories[category] = {
        total: categoryResults.length,
        successful: categoryResults.filter(r => r.success).length,
        failed: categoryResults.filter(r => !r.success).length,
        results: categoryResults
      };

      report.summary.total += categoryResults.length;
      report.summary.successful += categoryResults.filter(r => r.success).length;
      report.summary.failed += categoryResults.filter(r => !r.success).length});

    // Generate recommendations
    if (report.summary.failed > 0) {
      report.recommendations.push('Fix failed automation scripts')}
    if (report.categories.linting?.failed > 0) {
      report.recommendations.push('Address linting issues')}
    if (report.categories.testing?.failed > 0) {
      report.recommendations.push('Fix failing tests')}
    if (report.categories.build?.failed > 0) {
      report.recommendations.push('Fix build issues')}

    const reportPath = path.join(this.reportsDir, 'comprehensive-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report}

  async run() {
    this.log('🎯 Starting Comprehensive Automation Runner...');

    const results = {};

    try {
      // Run all automation categories
      results.linting = await this.runLintingAndFormatting();
      results.testing = await this.runTesting();
      results.build = await this.runBuild();
      results.security = await this.runSecurityAudit();
      results.performance = await this.runPerformanceAnalysis();
      results.errorDetection = await this.runErrorDetection();
      results.quality = await this.runQualityChecks();
      results.dependencies = await this.runDependencyManagement();

      // Generate comprehensive report
      const report = await this.generateReport(results);

      this.log('🎉 Comprehensive Automation Runner Completed!');
      this.log(`📊 Summary: ${report.summary.successful}/${report.summary.total} successful`);

      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`  - ${rec}`))}

      return report} catch (error) {
      this.log(`❌ Fatal error in automation runner: ${error.message}`);
      throw error}
  }
}

// Run the comprehensive automation
const runner = new ComprehensiveAutomationRunner();
runner.run()
  .then(report => {
    console.log('\n🎯 Comprehensive automation completed successfully!');
    process.exit(0)})
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});