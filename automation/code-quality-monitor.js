#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
    fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
    fs.mkdirSync(path.dirname(this.reportFile), { recursive: true });
  }
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    fs.mkdirSync(path.dirname(this.logFile), { "recursive": true });
=======
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;    fs.mkdirSync(path.dirname(this.logFile), { "recursive": true });
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
    fs.mkdirSync(path.dirname(this.reportFile), { "recursive": true });
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }
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
      this.log('ESLint: PASS');
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
      this.log('"ESLint": PASS');
    } catch (error) {
      results.lint.status = 'fail';
      const output = error.stdout || error.message;
      results.lint.errors = (output.match(/error/gi) || []).length;
      results.lint.warnings = (output.match(/warning/gi) || []).length;
      results.lint.issues = results.lint.errors + results.lint.warnings;
      this.log(`ESLint: ${results.lint.issues} issues found`, 'WARN');
    }
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
      this.log(`"ESLint": ${results.lint.issues} issues found`, 'WARN');
=======
      this.log('ESLint: PASS');      this.log(`"ESLint": ${results.lint.issues} issues found`, 'WARN');
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
    }
    // TypeScript check
    try {
      execSync('npx tsc --noEmit', { "stdio": 'pipe', "cwd": process.cwd() });
      results.typeCheck.status = 'pass';
      this.log('TypeScript: PASS');
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
      this.log('"TypeScript": PASS');
    } catch (error) {
      results.typeCheck.status = 'fail';
      const output = error.stdout || error.message;
      results.typeCheck.errors = (output.match(/error TS/g) || []).length;
      this.log(`TypeScript: ${results.typeCheck.errors} errors found`, 'WARN');
    }
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
      this.log(`"TypeScript": ${results.typeCheck.errors} errors found`, 'WARN');
=======
      this.log('TypeScript: PASS');      this.log(`"TypeScript": ${results.typeCheck.errors} errors found`, 'WARN');
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
    }
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
    // Calculate quality score
    results.qualityScore = this.calculateQualityScore(results);
    // Generate report
    fs.writeFileSync(this.reportFile, JSON.stringify(results, null, 2));
    this.log(`Code quality report generated: ${this.reportFile}`);
    return results;
  }
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    this.log(`Code quality report "generated": ${this.reportFile}`);
    return results;
  }
  calculateQualityScore(results) {
    let score = 100;
    // ESLint penalties
    if (results.lint.status === 'fail') {
      score -= Math.min(results.lint.errors * 5, 30);
      score -= Math.min(results.lint.warnings * 2, 20);
    }
    // TypeScript penalties
    if (results.typeCheck.status === 'fail') {
      score -= Math.min(results.typeCheck.errors * 3, 25);
    }
    // Test coverage bonus/penalty
    if (results.testCoverage.percentage > 80) {
      score += 5;
    } else if (results.testCoverage.percentage < 50) {
      score -= 10;
    }
    return Math.max(0, Math.min(100, score));
  }
    return Math.max(0, Math.min(100, score));
  }
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  async run() {
=======
    this.log(`Code quality report generated: ${this.reportFile}`);
    return results;
  }  async run() {
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
    this.log('Starting Code Quality Monitor...');
    try {
      const results = await this.runQualityChecks();
      this.log(
        `Code quality check completed. Quality "score": ${results.qualityScore}/100`
      );
      if (results.qualityScore < 70) {
        this.log('Code quality is below threshold. Review needed.', 'WARN');
      }
    } catch (error) {
      this.log(`Error in code quality monitor: ${error.message}`, 'ERROR');
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    } catch (error) {
<<<<<<< HEAD
      this.log(`Error in code quality "monitor": ${error.message}`, 'ERROR');
    }
  }
}
// Main execution
if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.run().catch(console.error);
}
module.exports = CodeQualityMonitor;
module.exports = CodeQualityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;


module.exports = CodeQualityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;



module.exports = CodeQualityMonitor;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class CodeQualityMonitor { constructor() { this.logFile = path.join(__dirname,'logs','code-quality-monitor.log'); this.reportFile = path.join(__dirname,'reports','code-quality.json'); fs.mkdirSync(path.dirname(this.logFile),{ recursive: true }); fs.mkdirSync(path.dirname(this.reportFile),{ recursive: true })} log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile,logMessage)} async runQualityChecks() { this.log('Running code quality checks...'); const results = { timestamp: new Date().toISOString(),lint: { status: 'unknown',issues: 0,errors: 0,warnings: 0 },typeCheck: { status: 'unknown',errors: 0 },testCoverage: { status: 'unknown',percentage: 0 },codeComplexity: { status: 'unknown',score: 0 },qualityScore: 0,}; try { execSync('yarn lint',{ stdio: 'pipe',cwd: process.cwd() }); results.lint.status = 'pass'; this.log('ESLint: PASS')} catch (error) { results.lint.status = 'fail'; const output = error.stdout || error.message; results.lint.errors = (output.match(/error/gi) || []).length; results.lint.warnings = (output.match(/warning/gi) || []).length; results.lint.issues = results.lint.errors + results.lint.warnings; this.log(`ESLint: ${results.lint.issues} issues found`,'WARN')} try { execSync('npx tsc --noEmit',{ stdio: 'pipe',cwd: process.cwd() }); results.typeCheck.status = 'pass'; this.log('TypeScript: PASS')} catch (error) { results.typeCheck.status = 'fail'; const output = error.stdout || error.message; results.typeCheck.errors = (output.match(/error TS/g) || []).length; this.log(`TypeScript: ${results.typeCheck.errors} errors found`,'WARN')} try { if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) { const coverage = execSync('yarn test --coverage --silent',{ stdio: 'pipe',encoding: 'utf8',cwd: process.cwd(),}); const coverageMatch = coverage.match(/All files.*?(\d+\.?\d*)%/); if (coverageMatch) { results.testCoverage.percentage = parseFloat(coverageMatch[1]); results.testCoverage.status = 'pass'} } } catch (error) { this.log('Test coverage check failed or no tests found','WARN')} results.qualityScore = this.calculateQualityScore(results); fs.writeFileSync(this.reportFile,JSON.stringify(results,null,2)); this.log(`Code quality report generated: ${this.reportFile}`); return results} calculateQualityScore(results) { let score = 100; if (results.lint.status === 'fail') { score -= Math.min(results.lint.errors * 5,30); score -= Math.min(results.lint.warnings * 2,20)} if (results.typeCheck.status === 'fail') { score -= Math.min(results.typeCheck.errors * 3,25)} if (results.testCoverage.percentage > 80) { score += 5} else if (results.testCoverage.percentage < 50) { score -= 10} return Math.max(0,Math.min(100,score))} async run() { this.log('Starting Code Quality Monitor...'); try { const results = await this.runQualityChecks(); this.log( `Code quality check completed. Quality score: ${results.qualityScore}/100` ); if (results.qualityScore < 70) { this.log('Code quality is below threshold. Review needed.','WARN')} } catch (error) { this.log(`Error in code quality monitor: ${error.message}`,'ERROR')} } } if (require.main === module) { const monitor = new CodeQualityMonitor(); monitor.run().catch(console.error)} module.exports = CodeQualityMonitor;
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
