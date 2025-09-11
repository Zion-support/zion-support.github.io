<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class PerformanceMonitor {
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'performance-reports'),this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    .toISOString()}] ${message}`)}
  getSystemInfo() {
    return {"platform": process.platform,"arch": process.arch,"nodeVersion": process.version;
      memoryUsage: process.memoryUsage();
      uptime: process.uptime();
      cpuUsage: process.cpuUsage()}}
  checkBuildPerformance() {
    this.log('🔍 Checking build performance...');
    try {
      const startTime = Date.now();
      // Run a test build
      execSync('npm run build', {"stdio": 'pipe',"cwd": this.projectRoot;
        timeout: 300000 // 5 minutes timeout});
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      this.log(`✅ Build completed in ${buildTime}ms`);
      return {"success": true,buildTime,"timestamp": new Date().toISOString()}} catch (error) {
      this.log(`❌ Build "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  checkBundleSize() {
    this.log('📦 Checking bundle size...');
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return {"success": false,"error": 'Dist directory not found. Run build first.';
          timestamp: new Date().toISOString()}}
      const getDirectorySize = (dir) => {
        let size = 0;
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            size += getDirectorySize(filePath)} else {
            size += stat.size}
        }
        return size}
      const totalSize = getDirectorySize(distPath);
      const sizeInMB = (totalSize / 1024 / 1024).toFixed(2);
      this.log(`✅ Bundle "size": ${sizeInMB} MB`);
      return {"success": true,totalSize,"sizeInMB": parseFloat(sizeInMB);
        timestamp: new Date().toISOString()}} catch (error) {
      this.log(`❌ Bundle size check "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  checkDependencies() {
    this.log('📋 Checking dependencies...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      this.log(`✅ Found ${dependencies.length} dependencies and ${devDependencies.length} dev dependencies`);
      return {"success": true,"dependencies": dependencies.length,"devDependencies": devDependencies.length;
        totalDependencies: dependencies.length + devDependencies.length;
        timestamp: new Date().toISOString()}} catch (error) {
      this.log(`❌ Dependency check "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  generateReport() {
    this.log('📊 Generating performance report...');
    const systemInfo = this.getSystemInfo();
    const buildPerformance = this.checkBuildPerformance();
    const bundleSize = this.checkBundleSize();
    const dependencies = this.checkDependencies();
    const report = {
      "timestamp": new Date().toISOString();
      systemInfo;
      buildPerformance;
      bundleSize;
      dependencies;
      summary: {buildSuccessful: buildPerformance.success,"bundleSizeMB": bundleSize.success ? bundleSize.sizeInMB : null;
        totalDependencies: dependencies.success ? dependencies.totalDependencies : null}
    };
    const reportFile = path.join(this.reportsDir, `performance-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved "to": ${reportFile}`);
    // Print summary
    if (buildPerformance.success) {
      }
    return report}
  async run() {
    try {this.log('🚀 Starting Performance Monitor'),const report = this.generateReport(),this.log('✅ Performance monitoring completed');
      return report} catch (error) {
      this.log(`💥 Performance monitor "error": ${error.message}`);
      throw error}
  }
}
// Run the performance monitor
if (require.main === module) {const monitor = new PerformanceMonitor(),monitor.run().catch(console.error)}
module.exports = PerformanceMonitor;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor {" constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, "performance-reports"),this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} getSystemInfo() {" return {platform: process.platform,arch: process.arch,nodeVersion: process.version; memoryUsage: process.memoryUsage(); uptime: process.uptime(); cpuUsage: process.cpuUsage()}} checkBuildPerformance() {" this.log(" Checking build performance."); try { const startTime = Date.now(); / Run a test build"" execSync("npm run build", {stdio: "pipe",cwd: this.projectRoot; timeout: 300000 / 5 minutes timeout}); const endTime = Date.now(); const buildTime = endTime - startTime;` this.log(` Build completed in ${buildTime}ms`);" return {success: true,buildTime,timestamp: new Date().toISOString()}} catch (error) {"` this.log(` Build failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } checkBundleSize() {" this.log(" Checking bundle size."); try {" const distPath = path.join(this.projectRoot, "dist"); if (!fs.existsSync(distPath)) {"" return {success: false,error: "Dist directory not found. Run build first."; timestamp: new Date().toISOString()}} const getDirectorySize = (dir) => { let size = 0; const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { size += getDirectorySize(filePath)} else { size += stat.size} } return size} const totalSize = getDirectorySize(distPath); const sizeInMB = (totalSize / 1024 / 1024).toFixed(2);"` this.log(` Bundle size: ${sizeInMB} MB`);" return {success: true,totalSize,sizeInMB: parseFloat(sizeInMB); timestamp: new Date().toISOString()}} catch (error) {"` this.log(` Bundle size check failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } checkDependencies() {" this.log(" Checking dependencies."); try {" const packageJsonPath = path.join(this.projectRoot, "package.json");" const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")); const dependencies = Object.keys(packageJson.dependencies | {}); const devDependencies = Object.keys(packageJson.devDependencies | {});` this.log(` Found ${dependencies.length} dependencies and ${devDependencies.length} dev dependencies`);" return {success: true,dependencies: dependencies.length,devDependencies: devDependencies.length; totalDependencies: dependencies.length + devDependencies.length; timestamp: new Date().toISOString()}} catch (error) {"` this.log(` Dependency check failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } generateReport() {" this.log(" Generating performance report."); const systemInfo = this.getSystemInfo(); const buildPerformance = this.checkBuildPerformance(); const bundleSize = this.checkBundleSize(); const dependencies = this.checkDependencies(); const report = {" timestamp: new Date().toISOString(); systemInfo; buildPerformance; bundleSize; dependencies;" summary: {buildSuccessful: buildPerformance.success,bundleSizeMB: bundleSize.success ? bundleSize.sizeInMB : null; totalDependencies: dependencies.success ? dependencies.totalDependencies : null} };` const reportFile = path.join(this.reportsDir, `performance-report-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"` this.log(` Report saved to: ${reportFile}`); / Print summary" console.log("\n PERFORMANCE MONITOR SUMMARY");" console.log("=" * 50);""` console.log(`Build Status: ${buildPerformance.success ? " Success" : " Failed"}`); if (buildPerformance.success) {"` console.log(`Build Time: ${buildPerformance.buildTime}ms`)}""` console.log(`Bundle Size: ${bundleSize.success ? `${bundleSize.sizeInMB} MB" : " Failed"}");""` console.log(`Dependencies: ${dependencies.success ? dependencies.totalDependencies : " Failed"}`);"` console.log(`Report: ${reportFile}`); return report} async run() {" try {this.log(" Starting Performance Monitor"),const report = this.generateReport(),this.log(" Performance monitoring completed"); return report} catch (error) {"` this.log(` Performance monitor error: ${error.message}`); throw error} }}/ Run the performance monitorif (require.main === module) {const monitor = new PerformanceMonitor(),monitor.run().catch(console.error)}module.exports = PerformanceMonitor;'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'performance-reports'})
    this.log(' Checking build performance...')
      execSync('npm run build', {"stdio"})
        return {"success": false,"error"}
// console.log(`Build "Status"`)
    console.log(`Bundle "Size": ${bundleSize.success ? `${bundleSize.sizeInMB} MB``)
<<<<<<< HEAD
    console.log(`"Dependencies"`)
=======
    console.log(`"Dependencies"`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
