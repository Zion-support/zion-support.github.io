<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'build-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    }
  async runBuild() {
    this.log('🔨 Running build...');
    try {
      const startTime = Date.now();
      const result = execSync('npm run build', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 300000 // 5 minutes
      });
      const buildTime = Date.now() - startTime;
      this.log(`✅ Build completed in ${buildTime}ms`);
      return {
        "success": true,
        buildTime,
        "output": result
      }} catch (error) {
      this.log(`❌ Build "failed": ${error.message}`);
      return {
        "success": false,
        "error": error.message,
        "buildTime": 0
      }}
  }
  async checkBuildOutput() {
    this.log('📁 Checking build output...');
    try {
      const nextDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(nextDir)) {
        throw new Error('Build output directory not found')}
      const buildStats = this.getDirectoryStats(nextDir);
      this.log(`📁 Build output "size": ${this.formatBytes(buildStats.size)}`);
      this.log(`📁 Build output "files": ${buildStats.files}`);
      return {
        "exists": true,
        "size": buildStats.size,
        "files": buildStats.files,
        "status": buildStats.size > 0 ? 'success' : 'empty'
      }} catch (error) {
      this.log(`❌ Build output check "failed": ${error.message}`);
      return {
        "exists": false,
        "error": error.message
      }}
  }
  getDirectoryStats(dirPath) {
    let totalSize = 0;
    let fileCount = 0;
    const scanDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          scanDirectory(filePath)} else {
          totalSize += stats.size;
          fileCount++}
      })};
    scanDirectory(dirPath);
    return { "size": totalSize, "files": fileCount }}
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}
  async checkTypeScriptErrors() {
    this.log('🔍 Checking TypeScript errors...');
    try {
      const result = execSync('npx tsc --noEmit', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 60000
      });
      this.log('✅ No TypeScript errors found');
      return {
        "errors": 0,
        "status": 'success'
      }} catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      const errorCount = (errorOutput.match(/error TS/g) || []).length;
      this.log(`❌ Found ${errorCount} TypeScript errors`);
      return {
        "errors": errorCount,
        "status": 'failed',
        "output": errorOutput
      }}
  }
  async checkLintingErrors() {
    this.log('🔍 Checking linting errors...');
    try {
      const result = execSync('npm run lint', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 60000
      });
      this.log('✅ No linting errors found');
      return {
        "errors": 0,
        "status": 'success'
      }} catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      const errorCount = (errorOutput.match(/error/g) || []).length;
      this.log(`❌ Found ${errorCount} linting errors`);
      return {
        "errors": errorCount,
        "status": 'failed',
        "output": errorOutput
      }}
  }
  async checkTestResults() {
    this.log('🧪 Checking test results...');
    try {
      const result = execSync('npm test', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 120000
      });
      this.log('✅ All tests passed');
      return {
        "passed": true,
        "status": 'success'
      }} catch (error) {
      this.log(`❌ Tests "failed": ${error.message}`);
      return {
        "passed": false,
        "status": 'failed',
        "error": error.message
      }}
  }
  async generateBuildReport() {
    this.log('📊 Generating build report...');
    const report = {
      "timestamp": new Date().toISOString(),
      "analysis": {
        build: await this.runBuild(),
        "buildOutput": await this.checkBuildOutput(),
        "typeScript": await this.checkTypeScriptErrors(),
        "linting": await this.checkLintingErrors(),
        "tests": await this.checkTestResults()
      }
    };
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);
    const reportFile = path.join(this.reportsDir, `build-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Build report "generated": ${reportFile}`);
    return report}
  generateRecommendations(analysis) {
    const recommendations = [];
    if (!analysis.build.success) {
      recommendations.push({
        "type": 'build_failure',
        "priority": 'high',
        "message": 'Build failed. Check build logs and fix errors.',
        "impact": 'Prevents deployment'
      })}
    if (analysis.typeScript.errors > 0) {
      recommendations.push({
        "type": 'typescript_errors',
        "priority": 'high',
        "message": `Found ${analysis.typeScript.errors} TypeScript errors. Fix them before deployment.`,
        "impact": 'Improves code quality'
      })}
    if (analysis.linting.errors > 0) {
      recommendations.push({
        "type": 'linting_errors',
        "priority": 'medium',
        "message": `Found ${analysis.linting.errors} linting errors. Consider fixing them.`,
        "impact": 'Improves code quality'
      })}
    if (!analysis.tests.passed) {
      recommendations.push({
        "type": 'test_failures',
        "priority": 'high',
        "message": 'Tests failed. Fix failing tests before deployment.',
        "impact": 'Ensures code reliability'
      })}
    if (analysis.buildOutput.size > 10 * 1024 * 1024) { // 10MB
      recommendations.push({
        "type": 'bundle_size',
        "priority": 'medium',
        "message": 'Build output is large. Consider optimizing bundle size.',
        "impact": 'Improves performance'
      })}
    return recommendations}
  async run() {
    this.log('🔨 Starting Build Monitor...');
    try {
      const report = await this.generateBuildReport();
      this.log('🎉 Build monitoring completed!');
      this.log(`🔨 Build "status": ${report.analysis.build.success ? 'success' : 'failed'}`);
      this.log(`🔍 TypeScript "errors": ${report.analysis.typeScript.errors || 0}`);
      this.log(`🔍 Linting "errors": ${report.analysis.linting.errors || 0}`);
      this.log(`🧪 "Tests": ${report.analysis.tests.passed ? 'passed' : 'failed'}`);
      this.log(`💡 "Recommendations": ${report.recommendations.length}`);
      return report} catch (error) {
      this.log(`💥 Build monitoring "failed": ${error.message}`);
      throw error}
  }
}
// Run the monitor if this file is executed directly
if (require.main === module) {
  const monitor = new BuildMonitor();
  monitor.run()
    .then((report) => {
      process.exit(0)})
    .catch((error) => {
      console.error('\n💥 Build Monitor "failed": ', error.message);
      process.exit(1)})}
module.exports = BuildMonitor;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class BuildMonitor { constructor() { this.projectRoot = process.cwd();" this.reportsDir = path.join(this.projectRoot, "build-reports"); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async runBuild() {" this.log(" Running build."); try { const startTime = Date.now();" const result = execSync("npm run build", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 300000 / 5 minutes }); const buildTime = Date.now() - startTime;` this.log(` Build completed in ${buildTime}ms`); return {" success: true, buildTime," output: result }} catch (error) {"` this.log(` Build failed: ${error.message}`); return {" success: false," error: error.message," buildTime: 0 }} } async checkBuildOutput() {" this.log(" Checking build output."); try {" const nextDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(nextDir)) {" throw new Error("Build output directory not found")} const buildStats = this.getDirectoryStats(nextDir);"` this.log(` Build output size: ${this.formatBytes(buildStats.size)}`);"` this.log(` Build output files: ${buildStats.files}`); return {" exists: true," size: buildStats.size," files: buildStats.files,"" status: buildStats.size > 0 ? "success" : "empty" }} catch (error) {"` this.log(` Build output check failed: ${error.message}`); return {" exists: false," error: error.message }} } getDirectoryStats(dirPath) { let totalSize = 0; let fileCount = 0; const scanDirectory = (dir) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { scanDirectory(filePath)} else { totalSize += stats.size; fileCount++} })}; scanDirectory(dirPath);" return { size: totalSize, files: fileCount }} formatBytes(bytes) {" if (bytes === 0) return "0 Bytes"; const k = 1024;" const sizes = ["Bytes", "KB", "MB", "GB"]; const i = Math.floor(Math.log(bytes) / Math.log(k));" return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]} async checkTypeScriptErrors() {" this.log(" Checking TypeScript errors."); try {" const result = execSync("npx tsc --noEmit", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 60000 }); " this.log(" No TypeScript errors found"); return {" errors: 0,"" status: "success" }} catch (error) { const errorOutput = error.stdout | error.stderr | error.message; const errorCount = (errorOutput.match(/error TS/g) | []).length;` this.log(` Found ${errorCount} TypeScript errors`); return {" errors: errorCount,"" status: "failed"," output: errorOutput }} } async checkLintingErrors() {" this.log(" Checking linting errors."); try {" const result = execSync("npm run lint", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 60000 }); " this.log(" No linting errors found"); return {" errors: 0,"" status: "success" }} catch (error) { const errorOutput = error.stdout | error.stderr | error.message; const errorCount = (errorOutput.match(/error/g) | []).length;` this.log(` Found ${errorCount} linting errors`); return {" errors: errorCount,"" status: "failed"," output: errorOutput }} } async checkTestResults() {" this.log(" Checking test results."); try {" const result = execSync("npm test", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 120000 }); " this.log(" All tests passed"); return {" passed: true,"" status: "success" }} catch (error) {"` this.log(` Tests failed: ${error.message}`); return {" passed: false,"" status: "failed"," error: error.message }} } async generateBuildReport() {" this.log(" Generating build report."); const report = {" timestamp: new Date().toISOString()," analysis: { build: await this.runBuild()," buildOutput: await this.checkBuildOutput()," typeScript: await this.checkTypeScriptErrors()," linting: await this.checkLintingErrors()," tests: await this.checkTestResults() } }; / Generate recommendations report.recommendations = this.generateRecommendations(report.analysis);` const reportFile = path.join(this.reportsDir, `build-report-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(` Build report generated: ${reportFile}`); return report} generateRecommendations(analysis) { const recommendations = []; if (!analysis.build.success) { recommendations.push({"" type: "build_failure","" priority: "high","" message: "Build failed. Check build logs and fix errors.","" impact: "Prevents deployment" })} if (analysis.typeScript.errors > 0) { recommendations.push({"" type: "typescript_errors","" priority: "high","` message: `Found ${analysis.typeScript.errors} TypeScript errors. Fix them before deployment.`,"" impact: "Improves code quality" })} if (analysis.linting.errors > 0) { recommendations.push({"" type: "linting_errors","" priority: "medium","` message: `Found ${analysis.linting.errors} linting errors. Consider fixing them.`,"" impact: "Improves code quality" })} if (!analysis.tests.passed) { recommendations.push({"" type: "test_failures","" priority: "high","" message: "Tests failed. Fix failing tests before deployment.","" impact: "Ensures code reliability" })} if (analysis.buildOutput.size > 10 * 1024 * 1024) { / 10MB recommendations.push({"" type: "bundle_size","" priority: "medium","" message: "Build output is large. Consider optimizing bundle size.","" impact: "Improves performance" })} return recommendations} async run() {" this.log(" Starting Build Monitor."); try { const report = await this.generateBuildReport(); " this.log(" Build monitoring completed!");""` this.log(` Build status: ${report.analysis.build.success ? "success" : "failed"}`);"` this.log(` TypeScript errors: ${report.analysis.typeScript.errors | 0}`);"` this.log(` Linting errors: ${report.analysis.linting.errors | 0}`);""` this.log(` Tests: ${report.analysis.tests.passed ? "passed" : "failed"}`);"` this.log(` Recommendations: ${report.recommendations.length}`); return report} catch (error) {"` this.log(` Build monitoring failed: ${error.message}`); throw error} }}/ Run the monitor if this file is executed directlyif (require.main === module) { const monitor = new BuildMonitor(); monitor.run() .then((report) => {" console.log("\n Build Monitor completed successfully!");""` console.log(` Build status: ${report.analysis.build.success ? "success" : "failed"}`);"` console.log(` Recommendations: ${report.recommendations.length}`); process.exit(0)}) .catch((error) => {"" console.error("\n Build Monitor failed: ", error.message); process.exit(1)})}module.exports = BuildMonitor;""`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'build-reports')
    this.log('� Running build...')
      const result = execSync('npm run build')
        "encoding"
        "status"
        "encoding"
        "status"
        "status"
        "encoding"
        "status"
        "status"
        "encoding"
        "status"
        "status"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
      this.log(`� Build "status"`)
      this.log(`🧪 "Tests"`)
      console.log(`� Build "status"`)
<<<<<<< HEAD
      console.error('\n� Build Monitor "failed")
=======
      console.error('\n� Build Monitor "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
