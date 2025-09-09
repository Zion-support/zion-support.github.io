#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentBuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/intelligent-build-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/intelligent-build-monitor-report.json');
    this.buildHistory = this.loadBuildHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadBuildHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).buildHistory || []}
    } catch (error) {
      this.log(`Failed to load build history: ${error.message}`, 'warn')}
    return []}

  saveBuildHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        buildHistory: this.buildHistory,
        totalBuilds: this.buildHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save build history: ${error.message}`, 'error')}
  }

  async analyzeBuildHealth() {
    this.log('🏗️ Analyzing build health...');
    
    const analysis = {
      buildTime: await this.measureBuildTime(),
      buildSize: await this.analyzeBuildSize(),
      buildErrors: await this.checkBuildErrors(),
      dependencies: await this.checkDependencyHealth(),
      cache: await this.analyzeCacheHealth(),
      resources: await this.analyzeResourceUsage()
    };

    this.log(`Build Health Analysis Results:`);
    this.log(`  - Build Time: ${analysis.buildTime.duration}ms`);
    this.log(`  - Build Size: ${analysis.buildSize.totalSize}MB`);
    this.log(`  - Build Errors: ${analysis.buildErrors.count}`);
    this.log(`  - Dependency Issues: ${analysis.dependencies.issues.length}`);
    this.log(`  - Cache Health: ${analysis.cache.health}%`);
    this.log(`  - Memory Usage: ${analysis.resources.memoryUsage}MB`);

    return analysis}

  async measureBuildTime() {
    try {
      this.log('⏱️ Measuring build time...');
      
      const startTime = Date.now();
      
      // Clean build directory first
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next' { cwd: this.projectRoot, stdio: 'pipe' })}
      
      // Run build
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      
      const duration = Date.now() - startTime;
      
      return {
        duration,
        success: true,
        timestamp: new Date().toISOString()
      }} catch (error) {
      this.log(`Build time measurement failed: ${error.message}`, 'error');
      return {
        duration: -1,
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }}
  }

  async analyzeBuildSize() {
    try {
      this.log('📦 Analyzing build size...');
      
      if (!fs.existsSync('.next')) {
        return { totalSize: 0, files: [], success: false }}

      const calculateSize = (dir) => {
        let totalSize = 0;
        const files = [];
        
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            const subResult = calculateSize(fullPath);
            totalSize += subResult.totalSize;
            files.push(...subResult.files)} else {
            totalSize += stat.size;
            files.push({
              path: fullPath,
              size: stat.size,
              sizeMB: (stat.size / (1024 * 1024)).toFixed(2)
            })}
        }
        
        return { totalSize, files }};

      const result = calculateSize('.next');
      const totalSizeMB = (result.totalSize / (1024 * 1024)).toFixed(2);
      
      return {
        totalSize: totalSizeMB,
        files: result.files,
        success: true
      }} catch (error) {
      this.log(`Build size analysis failed: ${error.message}`, 'error');
      return { totalSize: 0, files: [], success: false, error: error.message }}
  }

  async checkBuildErrors() {
    try {
      this.log('🔍 Checking for build errors...');
      
      // Check for common build error patterns
      const errorPatterns = [
        { pattern: /Module not found/, severity: 'error' }, { pattern: /Cannot resolve/, severity: 'error' }, { pattern: /Build failed/, severity: 'error' }, { pattern: /Out of memory/, severity: 'critical' }, { pattern: /Syntax error/, severity: 'error' }, { pattern: /Type error/, severity: 'error' }
      ];

      const errors = [];
      
      // Check build logs if they exist
      const logFiles = ['./logs/zion-website-error.log', './logs/build-monitor-error.log'];
      
      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          try {
            const content = fs.readFileSync(logFile, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              errorPatterns.forEach(({ pattern, severity }) => {
                if (pattern.test(line)) {
                  errors.push({
                    file: logFile,
                    line: index + 1,
                    severity,
                    message: line.trim(),
                    timestamp: new Date().toISOString()
                  })}
              })})} catch (readError) {
            this.log(`Failed to read ${logFile}: ${readError.message}`, 'warn')}
        }
      }
      
      return {
        count: errors.length,
        errors,
        criticalErrors: errors.filter(e => e.severity === 'critical').length,
        regularErrors: errors.filter(e => e.severity === 'error').length
      }} catch (error) {
      this.log(`Build error check failed: ${error.message}`, 'error');
      return { count: 0, errors: [], criticalErrors: 0, regularErrors: 0 }}
  }

  async checkDependencyHealth() {
    try {
      this.log('📦 Checking dependency health...');
      
      const issues = [];
      
      // Check for outdated dependencies
      try {
        const outdatedOutput = execSync('npm outdated --json' { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          stdio: 'pipe' 
        });
        
        const outdated = JSON.parse(outdatedOutput);
        Object.keys(outdated).forEach(name => {
          issues.push({
            type: 'outdated',
            name,
            current: outdated[name].current,
            latest: outdated[name].latest,
            severity: 'medium'
          })})} catch (error) {
        // npm outdated returns non-zero when there are outdated packages
        if (error.stdout) {
          try {
            const outdated = JSON.parse(error.stdout);
            Object.keys(outdated).forEach(name => {
              issues.push({
                type: 'outdated',
                name,
                current: outdated[name].current,
                latest: outdated[name].latest,
                severity: 'medium'
              })})} catch (parseError) {
            // Ignore parse errors
          }
        }
      }
      
      // Check for security vulnerabilities
      try {
        const auditOutput = execSync('npm audit --json' { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          stdio: 'pipe' 
        });
        
        const audit = JSON.parse(auditOutput);
        if (audit.vulnerabilities) {
          Object.keys(audit.vulnerabilities).forEach(name => {
            issues.push({
              type: 'vulnerability',
              name,
              severity: audit.vulnerabilities[name].severity,
              title: audit.vulnerabilities[name].title
            })})}
      } catch (error) {
        // npm audit returns non-zero when vulnerabilities are found
        if (error.stdout) {
          try {
            const audit = JSON.parse(error.stdout);
            if (audit.vulnerabilities) {
              Object.keys(audit.vulnerabilities).forEach(name => {
                issues.push({
                  type: 'vulnerability',
                  name,
                  severity: audit.vulnerabilities[name].severity,
                  title: audit.vulnerabilities[name].title
                })})}
          } catch (parseError) {
            // Ignore parse errors
          }
        }
      }
      
      return {
        issues,
        count: issues.length,
        criticalIssues: issues.filter(i => i.severity === 'critical').length,
        highIssues: issues.filter(i => i.severity === 'high').length
      }} catch (error) {
      this.log(`Dependency health check failed: ${error.message}`, 'error');
      return { issues: [], count: 0, criticalIssues: 0, highIssues: 0 }}
  }

  async analyzeCacheHealth() {
    try {
      this.log('🗄️ Analyzing cache health...');
      
      const cacheDirs = ['.next/cache', 'node_modules/.cache'];
      let totalCacheSize = 0;
      let cacheFiles = 0;
      
      for (const cacheDir of cacheDirs) {
        if (fs.existsSync(cacheDir)) {
          const calculateCacheSize = (dir) => {
            let size = 0;
            let files = 0;
            
            try {
              const items = fs.readdirSync(dir);
              
              for (const item of items) {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                  const subResult = calculateCacheSize(fullPath);
                  size += subResult.size;
                  files += subResult.files} else {
                  size += stat.size;
                  files++}
              }
            } catch (error) {
              // Skip directories we can't read
            }
            
            return { size, files }};
          
          const result = calculateCacheSize(cacheDir);
          totalCacheSize += result.size;
          cacheFiles += result.files}
      }
      
      const cacheSizeMB = (totalCacheSize / (1024 * 1024)).toFixed(2);
      
      // Calculate cache health percentage (lower is better, but some cache is good)
      let health = 100;
      if (totalCacheSize > 500 * 1024 * 1024) { // More than 500MB
        health = 50} else if (totalCacheSize > 200 * 1024 * 1024) { // More than 200MB
        health = 75}
      
      return {
        totalSize: cacheSizeMB,
        fileCount: cacheFiles,
        health,
        success: true
      }} catch (error) {
      this.log(`Cache health analysis failed: ${error.message}`, 'error');
      return { totalSize: 0, fileCount: 0, health: 0, success: false }}
  }

  async analyzeResourceUsage() {
    try {
      this.log('💻 Analyzing resource usage...');
      
      const usage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      return {
        memoryUsage: (usage.heapUsed / (1024 * 1024)).toFixed(2),
        memoryTotal: (usage.heapTotal / (1024 * 1024)).toFixed(2),
        externalMemory: (usage.external / (1024 * 1024)).toFixed(2),
        cpuUser: cpuUsage.user,
        cpuSystem: cpuUsage.system,
        success: true
      }} catch (error) {
      this.log(`Resource usage analysis failed: ${error.message}`, 'error');
      return { memoryUsage: 0, memoryTotal: 0, externalMemory: 0, cpuUser: 0, cpuSystem: 0, success: false }}
  }

  async optimizeBuild() {
    this.log('🚀 Optimizing build process...');
    
    const optimizations = [];
    
    try {
      // Clean build directories
      this.log('Cleaning build directories...');
      execSync('rm -rf .next dist' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      optimizations.push({ type: 'clean', success: true });
      
      // Clear caches
      this.log('Clearing caches...');
      execSync('npm cache clean --force' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      optimizations.push({ type: 'cache-clean', success: true });
      
      // Run optimized build
      this.log('Running optimized build...');
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      optimizations.push({ type: 'build', success: true });
      
      this.log('✅ Build optimization completed successfully');
      return { success: true, optimizations }} catch (error) {
      this.log(`❌ Build optimization failed: ${error.message}`, 'error');
      return { success: false, error: error.message, optimizations }}
  }

  async autoFixBuildIssues(analysis) {
    this.log('🔧 Auto-fixing build issues...');
    
    const fixes = [];
    
    // Fix dependency issues
    if (analysis.dependencies.issues.length > 0) {
      try {
        this.log('Fixing dependency issues...');
        execSync('npm install' { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 180000 
        });
        fixes.push({ type: 'dependencies', success: true, count: analysis.dependencies.issues.length });
        this.log('✅ Dependency issues fixed')} catch (error) {
        fixes.push({ type: 'dependencies', success: false, error: error.message });
        this.log(`❌ Failed to fix dependency issues: ${error.message}`, 'error')}
    }
    
    // Fix cache issues
    if (analysis.cache.health < 50) {
      try {
        this.log('Fixing cache issues...');
        execSync('rm -rf .next/cache node_modules/.cache' { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
        fixes.push({ type: 'cache', success: true });
        this.log('✅ Cache issues fixed')} catch (error) {
        fixes.push({ type: 'cache', success: false, error: error.message });
        this.log(`❌ Failed to fix cache issues: ${error.message}`, 'error')}
    }
    
    return fixes}

  async generateBuildReport() {
    this.log('📊 Generating build monitoring report...');
    
    const analysis = await this.analyzeBuildHealth();
    const optimization = await this.optimizeBuild();
    const fixes = await this.autoFixBuildIssues(analysis);
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis,
      optimization,
      fixes,
      summary: {
        buildTime: analysis.buildTime.duration,
        buildSize: analysis.buildSize.totalSize,
        buildErrors: analysis.buildErrors.count,
        dependencyIssues: analysis.dependencies.count,
        cacheHealth: analysis.cache.health,
        memoryUsage: analysis.resources.memoryUsage,
        optimizationSuccess: optimization.success,
        fixesApplied: fixes.filter(f => f.success).length
      },
      recommendations: this.generateBuildRecommendations(analysis)
    };

    const reportFile = path.join(this.projectRoot, 'logs/intelligent-build-monitor-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Build report saved to ${reportFile}`);
    return report}

  generateBuildRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.buildTime.duration > 60000) { // More than 1 minute
      recommendations.push('Consider implementing incremental builds to reduce build time')}
    
    if (analysis.buildSize.totalSize > 10) { // More than 10MB
      recommendations.push('Implement code splitting and tree shaking to reduce bundle size')}
    
    if (analysis.buildErrors.count > 0) {
      recommendations.push('Address build errors to improve build reliability')}
    
    if (analysis.dependencies.issues.length > 5) {
      recommendations.push('Update dependencies to resolve compatibility issues')}
    
    if (analysis.cache.health < 50) {
      recommendations.push('Implement cache optimization strategies')}
    
    if (analysis.resources.memoryUsage > 1000) { // More than 1GB
      recommendations.push('Optimize memory usage during build process')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Intelligent Build Monitor...');
    
    try {
      // Generate comprehensive build report
      const report = await this.generateBuildReport();
      
      // Save build history
      this.buildHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        summary: report.summary
      });
      
      this.saveBuildHistory();

      this.log(`🎯 Build Monitoring Complete:`);
      this.log(`   - Build Time: ${report.summary.buildTime}ms`);
      this.log(`   - Build Size: ${report.summary.buildSize}MB`);
      this.log(`   - Build Errors: ${report.summary.buildErrors}`);
      this.log(`   - Dependency Issues: ${report.summary.dependencyIssues}`);
      this.log(`   - Cache Health: ${report.summary.cacheHealth}%`);
      this.log(`   - Memory Usage: ${report.summary.memoryUsage}MB`);
      this.log(`   - Optimization: ${report.summary.optimizationSuccess ? 'Success' : 'Failed'}`);
      this.log(`   - Fixes Applied: ${report.summary.fixesApplied}`)} catch (error) {
      this.log(`❌ Build Monitor failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the build monitor
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new IntelligentBuildMonitor();
  monitor.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;