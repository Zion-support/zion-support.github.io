#!/usr/bin/env node;

const fs = require('fs');';const path = require('path');';const { execSync } = require('child_process');
;;class PerformanceMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.reportFile = path.join(;);      this.projectRoot,;
      'performance-monitor-report.json'';    );',}
;
  log(message) {;
    console.log(`[${new Date().toISOString()}] ${message}`);`}
;
  async checkBuildPerformance() {;
    this.log('🔍 Checking build performance');
;;    const startTime = Date.now();
    try {;
      execSync('npm run build' {';        "cwd": this.projectRoot,;);        "stdio": 'pipe'',;        "timeout": 300000,;",});
      const buildTime = Date.now() - startTime;
;
      return {;
        "success": true,;";        "buildTime": buildTime,;";        "status":;";          buildTime < 60000;
            ? 'excellent'';            : buildTime < 120000;';              ? 'good'';              : 'needs_optimization'',};,'} catch (error) {;
      return {;
        "success": false,;";        "error": error.message,;";        "buildTime": Date.now() - startTime,;",}}
  }
;
  async checkBundleSize() {;
    this.log('📦 Checking bundle size');
;;    try {;
      const buildDir = path.join(this.projectRoot, '.next');
;      if (!fs.existsSync(buildDir)) {;;        return { "error": 'Build directory not found' };'}';;
      const getDirSize = dir => {;
        let size = 0;
        const files = fs.readdirSync(dir);
;
        for (const file of files) {;
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
;
          if (stat.isDirectory()) {;
            size += getDirSize(filePath)} else {;
            size += stat.size}
        }
;
        return size};
;
      const bundleSize = getDirSize(buildDir);
      const sizeInMB = (bundleSize / 1024 / 1024).toFixed(2);
;
      return {;
        "size": bundleSize,;";        "sizeInMB": sizeInMB,;";        "status":;";          sizeInMB < 5;
            ? 'excellent'';            : sizeInMB < 10;';              ? 'good'';              : 'needs_optimization'',};,'} catch (error) {;
      return { "error": error.message };",}
  }
;
  async checkDependencies() {;
    this.log('📋 Checking dependencies');
;;    try {;
      const packageJson = JSON.parse(;);        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')';      );';      const dependencies = {;
        ...packageJson.dependencies,;
        ...packageJson.devDependencies,};
;
      const outdatedDeps = [];
      const securityIssues = [];
;
      // Check for known security issues;
      const knownIssues = {;
        "react": '18.2.0'',;        "next": '15.5.2'',;        "typescript": '5.9.2'',};';;
      for (const [dep, version] of Object.entries(knownIssues)) {;
        if (dependencies[dep] && dependencies[dep] !== version) {;
          outdatedDeps.push({;);            dep,;
            "current": dependencies[dep],;";            "recommended": version,;",})}
      }
;
      return {;
        "totalDeps": Object.keys(dependencies).length,;";        outdatedDeps,;
        securityIssues,}} catch (error) {;
      return { "error": error.message };",}
  }
;
  generateReport(results) {;
    const report = {;
      "timestamp": new Date().toISOString(),;";      "performance": results.build,;";      "bundle": results.bundle,;";      "dependencies": results.dependencies,;";      "summary": {;";        "buildStatus": results.build?.status || 'unknown'',;        "bundleStatus": results.bundle?.status || 'unknown'',;        "totalDependencies": results.dependencies?.totalDeps || 0,;";        "outdatedDependencies": results.dependencies?.outdatedDeps?.length || 0,},};
;
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Performance report "generated": ${this.reportFile}`);`;
    return report}
;
  async run() {;
    this.log('🚀 Starting Performance Monitor');
;;    try {;
      const buildResults = await this.checkBuildPerformance();
      const bundleResults = await this.checkBundleSize();
      const depResults = await this.checkDependencies();
;
      const report = this.generateReport({;);        "build": buildResults,;";        "bundle": bundleResults,;";        "dependencies": depResults,;",});
;
      this.log('✅ Performance monitoring completed');
;      return report;,} catch (error) {;
      this.log(`❌ Performance monitoring "failed": ${error.message}`);`;      throw error}
  }
}
;
// Run the performance monitor;
const monitor = new PerformanceMonitor();
monitor;
  .run();
  .then(report => {;);    console.log('✅ Performance monitoring completed successfully');
;    process.exit(0);,});
  .catch(error => {;);    console.error('❌ Performance monitoring "failed":', error.message);
;    process.exit(1);,});
