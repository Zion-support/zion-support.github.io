#!/usr/bin/env node;

const fs = require('fs');';const path = require('path');';const { execSync } = require('child_process');';';class PerformanceMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'monitoring-reports');';    this.ensureDirectories();,';}
;
  ensureDirectories() {;
    if (!fs.existsSync(this.reportsDir)) {;
      fs.mkdirSync(this.reportsDir, { "recursive": true });,";}
  }
;
  log(message) {;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);`;  }
;
  async checkBuildPerformance() {;
    this.log('🔨 Checking build performance...');';';    const startTime = Date.now();
    try {;
      execSync('npm run build', {';        "cwd": this.projectRoot,;);        "stdio": 'pipe',';        "timeout": 300000,;,";});
      const buildTime = Date.now() - startTime;
;
      this.log(`✅ Build completed in ${buildTime}ms`);`;      return { "success": true, buildTime };,";} catch (error) {;
      this.log(`❌ Build "failed": ${error.message}`);`;      return { "success": false, "error": error.message };,";}
  }
;
  async checkBundleSize() {;
    this.log('📦 Analyzing bundle size...');';';    const nextDir = path.join(this.projectRoot, '.next');';    if (!fs.existsSync(nextDir)) {;';      return { "error": 'Build directory not found' };';    }';;
    try {;
      const staticDir = path.join(nextDir, 'static');';      if (fs.existsSync(staticDir)) {;';        const files = this.getAllFiles(staticDir);
        let totalSize = 0;
        const fileSizes = {};
;
        files.forEach(file => {;);          const stats = fs.statSync(file);
          const size = stats.size;
          totalSize += size;
          const relativePath = path.relative(staticDir, file);
          fileSizes[relativePath] = size;,
});
;
        const result = {;
          "totalSize": totalSize,;";          "totalSizeMB": (totalSize / 1024 / 1024).toFixed(2),;";          "fileCount": files.length,;";          "fileSizes": fileSizes,;,";};
;
        this.log(;);          `📊 Bundle "size": ${result.totalSizeMB}MB (${result.fileCount} files)``;        );
        return result;,
}
    } catch (error) {;
      this.log(`❌ Bundle analysis "failed": ${error.message}`);`;      return { "error": error.message };,";}
;
    return { "error": 'Could not analyze bundle size' };';  }';;
  getAllFiles(dir) {;
    let files = [];
    const items = fs.readdirSync(dir);
;
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        files = files.concat(this.getAllFiles(fullPath));,
} else {;
        files.push(fullPath);,
}
    }
;
    return files;,
}
;
  async checkDependencies() {;
    this.log('📋 Checking dependencies...');';';    try {;
      const packageJsonPath = path.join(this.projectRoot, 'package.json');';      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));';';      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
;
      // Check for outdated packages;
      let outdatedPackages = [];
      try {;
        const outdatedOutput = execSync('npm outdated --json', {';          "cwd": this.projectRoot,;);          "encoding": 'utf8',';          "stdio": 'pipe',';        });';        outdatedPackages = JSON.parse(outdatedOutput);,
} catch (error) {;
        // npm outdated returns non-zero exit code when packages are outdated;
        if (error.stdout) {;
          outdatedPackages = JSON.parse(error.stdout);,
}
      }
;
      const result = {;
        "dependencies": dependencies,;";        "devDependencies": devDependencies,;";        "totalDeps": dependencies.length + devDependencies.length,;";        "outdatedPackages": Object.keys(outdatedPackages),;,";};
;
      this.log(;);        `📊 "Dependencies": ${result.totalDeps} total, ${result.outdatedPackages.length} outdated``;      );
      return result;,
} catch (error) {;
      this.log(`❌ Dependency check "failed": ${error.message}`);`;      return { "error": error.message };,";}
  }
;
  async checkSecurity() {;
    this.log('🔒 Running security audit...');';';    try {;
      const auditOutput = execSync('npm audit --json', {';        "cwd": this.projectRoot,;);        "encoding": 'utf8',';        "stdio": 'pipe',';      });';;
      const audit = JSON.parse(auditOutput);
      const vulnerabilities = audit.vulnerabilities || {};
      const vulnerabilityCount = Object.keys(vulnerabilities).length;
;
      this.log(;);        `🔒 Security "audit": ${vulnerabilityCount} vulnerabilities found``;      );
      return {;
        "success": true,;";        vulnerabilityCount,;
        "vulnerabilities": vulnerabilities,;,";};,
} catch (error) {;
      this.log(`❌ Security audit "failed": ${error.message}`);`;      return { "success": false, "error": error.message };,";}
  }
;
  async generateReport() {;
    this.log('📊 Generating performance report...');';';    const report = {;
      "timestamp": new Date().toISOString(),;";      "buildPerformance": await this.checkBuildPerformance(),;";      "bundleSize": await this.checkBundleSize(),;";      "dependencies": await this.checkDependencies(),;";      "security": await this.checkSecurity(),;,";};
;
    const reportPath = path.join(;);      this.reportsDir,;
      `performance-report-${Date.now()}.json``;    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
;
    this.log(`📊 Report "saved": ${reportPath}`);`;    return report;,
}
;
  async run() {;
    this.log('🚀 Starting Performance Monitor');';    const report = await this.generateReport();';    this.log('🎉 Performance monitoring completed');';    return report;,';}
}
;
// Run the monitor;
const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);
