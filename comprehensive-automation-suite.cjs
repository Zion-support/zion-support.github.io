#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationSuite {
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

  async runCommand(command, description, timeout = 300000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: timeout });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }

  async fixRemainingSyntaxErrors() {
    this.log('🔧 Fixing remaining syntax errors...');

    const fixes = [
      {
        file: 'pages/pricing-guide.tsx',
        fix: content => {
          // Fix the className issue
          return content.replace(
            /<h3 className='text-2xl font-bold text-white mb-2'>\s*\{factor\.factor\}<\/h3>\s*<p className='text-gray-300'>\s*\{factor\.description\}<\/p>/g,
            "<h3 className='text-2xl font-bold text-white mb-2'>\n                        {factor.factor}\n                      </h3>\n                      <p className='text-gray-300'>\n                        {factor.description}\n                      </p>"
          )} }, {
        file: 'pages/sitemap.tsx',
        fix: content => {
          // Fix the JSX structure issue
          return content.replace(
            /<\/motion\.div>\s*<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>\s*\{siteStructure\.map/g,
            "</motion.div>\n          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>\n            {siteStructure.map"
          )} } ];

    let fixedCount = 0;
    for (const fix of fixes) {
      const filePath = path.join(this.projectRoot, fix.file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          const newContent = fix.fix(content);
          if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            this.log(`✅ Fixed syntax in: ${fix.file}`);
            fixedCount++}
        } catch (error) {
          this.log(`❌ Error fixing ${fix.file}: ${error.message}`)}
      }
    }

    this.log(`🎉 Fixed ${fixedCount} remaining syntax errors!`);
    return fixedCount > 0}

  async runLinting() {
    this.log('🔍 Running ESLint...');
    return await this.runCommand('npm run lint:fix', 'ESLint Fix')}

  async runTypeChecking() {
    this.log('🔍 Running TypeScript type check...');
    return await this.runCommand('npm run type-check', 'TypeScript Type Check')}

  async runTests() {
    this.log('🧪 Running test suite...');
    return await this.runCommand('npm run test', 'Test Suite')}

  async runBuild() {
    this.log('🏗️ Building application...');
    return await this.runCommand('npm run build', 'Build Application')}

  async runPerformanceAnalysis() {
    this.log('⚡ Running performance analysis...');

    const performanceScripts = [
      'scripts/performance-monitor.js',
      'scripts/performance-optimizer.js',
      'scripts/performance-monitor-improved.js' ];

    const results = [];
    for (const script of performanceScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(
          `node ${script}`,
          `Performance Analysis: ${script}`
        );
        results.push({ script, ...result })}
    }

    return results}

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');

    const securityScripts = [
      'scripts/security-audit.js',
      'scripts/security-enhancer.js' ];

    const results = [];
    for (const script of securityScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(
          `node ${script}`,
          `Security Audit: ${script}`
        );
        results.push({ script, ...result })}
    }

    return results}

  async runCodeQualityCheck() {
    this.log('📊 Running code quality check...');

    const qualityScripts = [
      'scripts/code-quality-analyzer.js',
      'scripts/lint-checker.js',
      'scripts/syntax-fixer.cjs' ];

    const results = [];
    for (const script of qualityScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(
          `node ${script}`,
          `Code Quality: ${script}`
        );
        results.push({ script, ...result })}
    }

    return results}

  async runCustomAutomations() {
    this.log('🔧 Running custom automation scripts...');

    const customScripts = [
      'scripts/comprehensive-app-improver.js',
      'scripts/automation-orchestrator-improved.js',
      'scripts/master-automation-orchestrator.cjs',
      'scripts/intelligent-error-detector-fixer.cjs' ];

    const results = [];
    for (const script of customScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(
          `node ${script}`,
          `Custom Automation: ${script}`
        );
        results.push({ script, ...result })}
    }

    return results}

  async generateReports() {
    this.log('📊 Generating comprehensive reports...');

    const reportData = {
      timestamp: new Date().toISOString(),
      summary: {
        total: 0,
        successful: 0,
        failed: 0 },
      results: [] };

    // Add all results to the report
    const allResults = [
      ...(await this.runLinting()),
      ...(await this.runTypeChecking()),
      ...(await this.runTests()),
      ...(await this.runBuild()),
      ...(await this.runPerformanceAnalysis()),
      ...(await this.runSecurityAudit()),
      ...(await this.runCodeQualityCheck()),
      ...(await this.runCustomAutomations()) ];

    reportData.results = allResults;
    reportData.summary.total = allResults.length;
    reportData.summary.successful = allResults.filter(r => r.success).length;
    reportData.summary.failed = allResults.filter(r => !r.success).length;

    const reportPath = path.join(
      this.reportsDir,
      'comprehensive-automation-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2), 'utf8');

    this.log(`📊 Report generated: ${reportPath}`);
    return reportData}

  async runFullSuite() {
    this.log('🎯 Starting Comprehensive Automation Suite');

    try {
      // Fix remaining syntax errors first
      await this.fixRemainingSyntaxErrors();

      // Run all automation steps
      const report = await this.generateReports();

      this.log('🎉 Comprehensive Automation Suite Completed');
      this.log(
        `📊 Summary: ${report.summary.successful}/${report.summary.total} successful`
      );

      if (report.summary.failed > 0) {
        this.log(`⚠️  ${report.summary.failed} tasks failed`)}

      return report} catch (error) {
      this.log(`❌ Fatal error in automation suite: ${error.message}`);
      throw error}
  }
}

// Run the comprehensive automation suite
const suite = new ComprehensiveAutomationSuite();
suite
  .runFullSuite()
  .then(report => {
    console.log('✅ Comprehensive Automation Suite completed successfully!');
    console.log(
      `📊 Final Summary: ${report.summary.successful}/${report.summary.total} successful`
    );
    process.exit(0)})
  .catch(error => {
    console.error('❌ Automation suite failed:', error);
    process.exit(1)});
