#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SimpleAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'simple-automation.log');
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
      return { success: true, output: result, description }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message, description }}
  }

  async fixRemainingSyntaxErrors() {
    this.log('🔧 Fixing remaining syntax errors...');

    const fixes = [
      {
        file: 'pages/pricing-guide.tsx',
        fix: content => {
          return content.replace(
            /<h3 className='text-2xl font-bold text-white mb-2'>\s*\{factor\.factor\}<\/h3>\s*<p className='text-gray-300'>\s*\{factor\.description\}<\/p>/g,
            "<h3 className='text-2xl font-bold text-white mb-2'>\n                        {factor.factor}\n                      </h3>\n                      <p className='text-gray-300'>\n                        {factor.description}\n                      </p>"
          )} }, {
        file: 'pages/sitemap.tsx',
        fix: content => {
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

  async runBasicTests() {
    this.log('🧪 Running basic tests...');

    const tests = [
      { command: 'npm run build', description: 'Build Test' }, { command: 'npm run type-check', description: 'Type Check' } ];

    const results = [];
    for (const test of tests) {
      const result = await this.runCommand(test.command, test.description);
      results.push(result)}

    return results}

  async runCustomScripts() {
    this.log('🔧 Running custom automation scripts...');

    const scripts = [
      'scripts/performance-monitor.js',
      'scripts/health-checker.js',
      'scripts/link-checker.js',
      'scripts/seo-optimizer.js' ];

    const results = [];
    for (const script of scripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand(
          `node ${script}`,
          `Custom Script: ${script}`
        );
        results.push(result)}
    }

    return results}

  async generateReport(results) {
    this.log('📊 Generating report...');

    const reportData = {
      timestamp: new Date().toISOString(),
      summary: {
        total: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length },
      results: results };

    const reportPath = path.join(
      this.reportsDir,
      'simple-automation-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2), 'utf8');

    this.log(`📊 Report generated: ${reportPath}`);
    return reportData}

  async runSuite() {
    this.log('🎯 Starting Simple Automation Suite');

    try {
      // Fix remaining syntax errors first
      await this.fixRemainingSyntaxErrors();

      // Run basic tests
      const testResults = await this.runBasicTests();

      // Run custom scripts
      const scriptResults = await this.runCustomScripts();

      // Combine all results
      const allResults = [...testResults, ...scriptResults];

      // Generate report
      const report = await this.generateReport(allResults);

      this.log('🎉 Simple Automation Suite Completed');
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

// Run the simple automation suite
const suite = new SimpleAutomationSuite();
suite
  .runSuite()
  .then(report => {
    console.log('✅ Simple Automation Suite completed successfully!');
    console.log(
      `📊 Final Summary: ${report.summary.successful}/${report.summary.total} successful`
    );
    process.exit(0)})
  .catch(error => {
    console.error('❌ Automation suite failed:', error);
    process.exit(1)});
