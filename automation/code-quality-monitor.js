<<<<<<< HEAD
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
/**
 * Code Quality Monitor - Monitors code quality metrics and standards
 */
class CodeQualityMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'code-quality-monitor.log');
    this.reportFile = path.join(__dirname, 'reports', 'code-quality.json');
    // Ensure directories exist
<<<<<<< HEAD
    fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
    fs.mkdirSync(path.dirname(this.reportFile), { recursive: true });
  }

=======
    fs.mkdirSync(path.dirname(this.logFile), { "recursive": true });
    fs.mkdirSync(path.dirname(this.reportFile), { "recursive": true });
  }
>>>>>>> main
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }
<<<<<<< HEAD

=======
>>>>>>> main
  async runQualityChecks() {
    this.log('Running code quality checks...');
    const results = {
      "timestamp": new Date().toISOString(),
      "lint": { status: 'unknown', "issues": 0, "errors": 0, "warnings": 0 },
      "typeCheck": { status: 'unknown', "errors": 0 },
      "testCoverage": { status: 'unknown', "percentage": 0 },
      "codeComplexity": { status: 'unknown', "score": 0 },
      "qualityScore": 0};
    // ESLint check
    try {
      execSync('yarn lint', { "stdio": 'pipe', "cwd": process.cwd() });
      results.lint.status = 'pass';
<<<<<<< HEAD
      this.log('ESLint: PASS');
=======
      this.log('"ESLint": PASS');
>>>>>>> main
    } catch (error) {
      results.lint.status = 'fail';
      const output = error.stdout || error.message;
      results.lint.errors = (output.match(/error/gi) || []).length;
      results.lint.warnings = (output.match(/warning/gi) || []).length;
      results.lint.issues = results.lint.errors + results.lint.warnings;
<<<<<<< HEAD
      this.log(`ESLint: ${results.lint.issues} issues found`, 'WARN');
    }

=======
      this.log(`"ESLint": ${results.lint.issues} issues found`, 'WARN');
    }
>>>>>>> main
    // TypeScript check
    try {
      execSync('npx tsc --noEmit', { "stdio": 'pipe', "cwd": process.cwd() });
      results.typeCheck.status = 'pass';
<<<<<<< HEAD
      this.log('TypeScript: PASS');
=======
      this.log('"TypeScript": PASS');
>>>>>>> main
    } catch (error) {
      results.typeCheck.status = 'fail';
      const output = error.stdout || error.message;
      results.typeCheck.errors = (output.match(/error TS/g) || []).length;
<<<<<<< HEAD
      this.log(`TypeScript: ${results.typeCheck.errors} errors found`, 'WARN');
    }

=======
      this.log(`"TypeScript": ${results.typeCheck.errors} errors found`, 'WARN');
    }
>>>>>>> main
    // Test coverage (if tests exist)
    try {
      if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) {
        const coverage = execSync('yarn test --coverage --silent', {
          "stdio": 'pipe',
          "encoding": 'utf8',
          "cwd": process.cwd()});
        // Parse coverage percentage (simplified)
        const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/);
        if (coverageMatch) {
          results.testCoverage.percentage = parseFloat(coverageMatch[1]);
          results.testCoverage.status = 'pass';
        }
      }
    } catch (error) {
      this.log('Test coverage check failed or no tests found', 'WARN');
    }
<<<<<<< HEAD

=======
>>>>>>> main
    // Calculate quality score
    results.qualityScore = this.calculateQualityScore(results);
    // Generate report
    fs.writeFileSync(this.reportFile, JSON.stringify(results, null, 2));
<<<<<<< HEAD
    this.log(`Code quality report generated: ${this.reportFile}`);
    
    return results;
  }

=======
    this.log(`Code quality report "generated": ${this.reportFile}`);
    return results;
  }
>>>>>>> main
  calculateQualityScore(results) {
    let score = 100;
    // ESLint penalties
    if (results.lint.status === 'fail') {
      score -= Math.min(results.lint.errors * 5, 30);
      score -= Math.min(results.lint.warnings * 2, 20);
    }
<<<<<<< HEAD
    
=======
>>>>>>> main
    // TypeScript penalties
    if (results.typeCheck.status === 'fail') {
      score -= Math.min(results.typeCheck.errors * 3, 25);
    }
<<<<<<< HEAD
    
=======
>>>>>>> main
    // Test coverage bonus/penalty
    if (results.testCoverage.percentage > 80) {
      score += 5;
    } else if (results.testCoverage.percentage < 50) {
      score -= 10;
    }
<<<<<<< HEAD
    
    return Math.max(0, Math.min(100, score));
  }

=======
    return Math.max(0, Math.min(100, score));
  }
>>>>>>> main
  async run() {
    this.log('Starting Code Quality Monitor...');
    try {
      const results = await this.runQualityChecks();
      this.log(
        `Code quality check completed. Quality "score": ${results.qualityScore}/100`
      );
      if (results.qualityScore < 70) {
        this.log('Code quality is below threshold. Review needed.', 'WARN');
      }
<<<<<<< HEAD
      
    } catch (error) {
      this.log(`Error in code quality monitor: ${error.message}`, 'ERROR');
=======
    } catch (error) {
      this.log(`Error in code quality "monitor": ${error.message}`, 'ERROR');
>>>>>>> main
    }
  }
}
// Main execution
if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.run().catch(console.error);
}
<<<<<<< HEAD

module.exports = CodeQualityMonitor;
=======
module.exports = CodeQualityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;
>>>>>>> main
>>>>>>> main
