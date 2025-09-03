#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SimpleAutomationRunner {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.logDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.ensureDirectories()}
  
  ensureDirectories() {
    [this.logDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir { recursive: true })}
    })}
  
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'automation-runner.log');
    fs.appendFileSync(logFile, logMessage + '\n')}
  
  async runScript(scriptPath, description) {
    try {
      this.log(`Running ${description}: ${scriptPath}`);
      const result = execSync(`node ${scriptPath}` { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 30000 // 30 second timeout
      });
      this.log(`${description} completed successfully`);
      return { success: true, output: result }} catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message }}
  }
  
  async runLinting() {
    this.log('Running linting checks...');
    try {
      // Check for common syntax errors in JS/TS files
      const files = this.findFiles(['.js', '.ts', '.jsx', '.tsx']);
      let errors = 0;
      
      for (const file of files) {
        try {
          // Basic syntax check
          execSync(`node -c "${file}"` { cwd: this.projectRoot })} catch (error) {
          this.log(`Syntax error in ${file}: ${error.message}`, 'ERROR');
          errors++}
      }
      
      this.log(`Linting completed. Found ${errors} syntax errors.`);
      return { success: errors === 0, errors }} catch (error) {
      this.log(`Linting failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message }}
  }
  
  findFiles(extensions) {
    const files = [];
    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDir(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath)}
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDir(this.projectRoot);
    return files}
  
  async runTests() {
    this.log('Running basic tests...');
    try {
      // Check if test files exist
      const testFiles = this.findFiles(['.test.js', '.test.ts', '.test.jsx', '.test.tsx', '.spec.js', '.spec.ts']);
      
      if (testFiles.length === 0) {
        this.log('No test files found');
        return { success: true, message: 'No tests to run' }}
      
      this.log(`Found ${testFiles.length} test files`);
      
      // Try to run tests if jest is available
      try {
        const result = execSync('npm test' { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          timeout: 60000 // 1 minute timeout
        });
        this.log('Tests completed successfully');
        return { success: true, output: result }} catch (error) {
        this.log(`Tests failed: ${error.message}`, 'ERROR');
        return { success: false, error: error.message }}
    } catch (error) {
      this.log(`Test runner failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message }}
  }
  
  async checkBuild() {
    this.log('Checking build status...');
    try {
      const buildDir = path.join(this.projectRoot, '.next');
      const buildExists = fs.existsSync(buildDir);
      
      if (buildExists) {
        this.log('Build directory exists');
        return { success: true, message: 'Build exists' }} else {
        this.log('Build directory not found');
        return { success: false, message: 'No build found' }}
    } catch (error) {
      this.log(`Build check failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message }}
  }
  
  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: Object.keys(results).length,
        successful: Object.values(results).filter(r => r.success).length,
        failed: Object.values(results).filter(r => !r.success).length
      },
      results
    };
    
    const reportFile = path.join(this.reportsDir, 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`);
    return report}
  
  async run() {
    this.log('🚀 Starting Simple Automation Runner...');
    
    const results = {};
    
    // Run various checks
    results.linting = await this.runLinting();
    results.tests = await this.runTests();
    results.build = await this.checkBuild();
    
    // Try to run some automation scripts if they exist
    const automationScripts = [
      { path: 'scripts/automation/syntax-fixer.cjs', description: 'Syntax Fixer' }, { path: 'scripts/automation/typescript-error-fixer.cjs', description: 'TypeScript Error Fixer' }, { path: 'scripts/automation/linting-error-fixer.cjs', description: 'Linting Error Fixer' }
    ];
    
    for (const script of automationScripts) {
      const fullPath = path.join(this.projectRoot, script.path);
      if (fs.existsSync(fullPath)) {
        results[script.description.toLowerCase().replace(/\s+/g, '_')] = await this.runScript(fullPath, script.description)}
    }
    
    // Generate report
    const report = await this.generateReport(results);
    
    this.log('✅ Automation Runner completed');
    this.log(`Summary: ${report.summary.successful}/${report.summary.totalChecks} checks passed`);
    
    return report}
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const runner = new SimpleAutomationRunner();
  runner.run().then(report => {
    process.exit(report.summary.failed === 0 ? 0 : 1)}).catch(error => {
    console.error('Automation runner failed:', error);
    process.exit(1)})}

export default SimpleAutomationRunner;