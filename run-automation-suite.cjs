#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationSuiteRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'automation-suite.log');
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

  async runAutomationScripts() {
    this.log('🎯 Starting Automation Suite Execution');

    const scripts = [
      {
        command: 'npm run lint:fix',
        description: 'ESLint Fix'
      }, {
        command: 'npm run type-check',
        description: 'TypeScript Type Check'
      }, {
        command: 'npm run test',
        description: 'Test Suite'
      }, {
        command: 'npm run build',
        description: 'Build Application'
      }
    ];

    const results = [];

    for (const script of scripts) {
      const result = await this.runCommand(script.command, script.description);
      results.push({ ...script, ...result })}

    return results}

  async runCustomAutomations() {
    this.log('🔧 Running Custom Automation Scripts');

    const customScripts = [
      {
        name: 'Error Detection',
        script: () => this.detectErrors()
      }, {
        name: 'Performance Analysis',
        script: () => this.analyzePerformance()
      }, {
        name: 'Security Audit',
        script: () => this.auditSecurity()
      }, {
        name: 'Code Quality Check',
        script: () => this.checkCodeQuality()
      }
    ];

    const results = [];

    for (const customScript of customScripts) {
      this.log(`🔍 Running: ${customScript.name}`);
      try {
        const result = await customScript.script();
        results.push({ name: customScript.name, success: true, result });
        this.log(`✅ Completed: ${customScript.name}`)} catch (error) {
        results.push({
          name: customScript.name,
          success: false,
          error: error.message
        });
        this.log(`❌ Failed: ${customScript.name} - ${error.message}`)}
    }

    return results}

  async detectErrors() {
    const errorPatterns = [
      'SyntaxError',
      'TypeError',
      'ReferenceError',
      'Module not found',
      'Cannot resolve',
      'Unexpected token'
    ];

    const results = {
      totalFiles: 0,
      errorFiles: 0,
      errors: []
    };

    try {
      const files = this.getSourceFiles();
      results.totalFiles = files.length;

      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');

          lines.forEach((line, index) => {
            errorPatterns.forEach(pattern => {
              if (line.includes(pattern)) {
                results.errors.push({
                  file,
                  line: index + 1,
                  pattern,
                  content: line.trim()
                })}
            })})} catch (error) {
          results.errors.push({
            file,
            error: error.message
          })}
      }

      results.errorFiles = results.errors.length} catch (error) {
      this.log(`Error detection failed: ${error.message}`)}

    return results}

  async analyzePerformance() {
    const results = {
      bundleSize: 0,
      buildTime: 0,
      dependencies: 0,
      recommendations: []
    };

    try {
      // Check package.json for dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      results.dependencies = Object.keys(packageJson.dependencies || {}).length;

      // Check if build directory exists and get size
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        const stats = this.getDirectorySize(buildDir);
        results.bundleSize = stats.size}

      // Performance recommendations
      if (results.dependencies > 50) {
        results.recommendations.push('Consider reducing dependencies')}
      if (results.bundleSize > 10 * 1024 * 1024) { // 10MB
        results.recommendations.push('Bundle size is large, consider code splitting')}
    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`)}

    return results}

  async auditSecurity() {
    const results = {
      vulnerabilities: 0,
      outdated: 0,
      recommendations: []
    };

    try {
      const auditResult = execSync('npm audit --json' {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });

      const audit = JSON.parse(auditResult);
      results.vulnerabilities = audit.vulnerabilities?.total || 0;

      if (results.vulnerabilities > 0) {
        results.recommendations.push('Run npm audit fix to resolve vulnerabilities')}
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`)}

    return results}

  async checkCodeQuality() {
    const results = {
      totalFiles: 0,
      issues: 0,
      recommendations: []
    };

    try {
      const files = this.getSourceFiles();
      results.totalFiles = files.length;

      // Check for common code quality issues
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for console.log statements
        if (content.includes('console.log')) {
          results.issues++;
          results.recommendations.push(`Remove console.log from ${file}`)}

        // Check for TODO comments
        if (content.includes('TODO') || content.includes('FIXME')) {
          results.issues++}
      }
    } catch (error) {
      this.log(`Code quality check failed: ${error.message}`)}

    return results}

  getSourceFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];

    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath)} else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath)}
        }
      }
    };

    scanDirectory(this.projectRoot);
    return files}

  getDirectorySize(dirPath) {
    let size = 0;
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath).size} else {
        size += stat.size}
    }

    return { size }}

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      automationScripts: results.automationScripts,
      customAutomations: results.customAutomations,
      summary: {
        totalScripts: results.automationScripts.length,
        successfulScripts: results.automationScripts.filter(r => r.success).length,
        failedScripts: results.automationScripts.filter(r => !r.success).length,
        totalCustomAutomations: results.customAutomations.length,
        successfulCustomAutomations: results.customAutomations.filter(r => r.success).length
      }
    };

    const reportPath = path.join(this.reportsDir, 'automation-suite-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report}

  async run() {
    this.log('🎯 Starting Automation Suite Runner');
    
    try {
      const automationResults = await this.runAutomationScripts();
      const customResults = await this.runCustomAutomations();
      
      const results = {
        automationScripts: automationResults,
        customAutomations: customResults
      };
      
      const report = await this.generateReport(results);
      
      this.log('🎉 Automation Suite Runner Completed Successfully');
      return report} catch (error) {
      this.log(`❌ Automation Suite Runner Failed: ${error.message}`);
      throw error}
  }
}

// Run the automation suite if this file is executed directly
if (require.main === module) {
  const runner = new AutomationSuiteRunner();
  runner.run().catch(error => {
    console.error('Automation Suite failed:', error);
    process.exit(1)})}

module.exports = AutomationSuiteRunner;