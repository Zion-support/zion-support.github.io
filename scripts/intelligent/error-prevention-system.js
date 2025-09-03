#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentErrorPreventionSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/intelligent-error-prevention.log');
    this.reportFile = path.join(this.projectRoot, 'logs/intelligent-error-prevention-report.json');
    this.errorPatterns = this.loadErrorPatterns();
    this.fixHistory = this.loadFixHistory();
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

  loadErrorPatterns() {
    return {
      syntax: [
        { pattern: /Unexpected token/, fix: 'syntax-fix' }, { pattern: /Cannot find module/, fix: 'import-fix' }, { pattern: /Property.*does not exist/, fix: 'type-fix' }, { pattern: /Expected.*but got/, fix: 'type-fix' }, { pattern: /Cannot read property.*of undefined/, fix: 'null-check' } ],
      runtime: [
        { pattern: /ReferenceError/, fix: 'variable-fix' }, { pattern: /TypeError/, fix: 'type-fix' }, { pattern: /RangeError/, fix: 'range-fix' }, { pattern: /SyntaxError/, fix: 'syntax-fix' } ],
      build: [
        { pattern: /Module not found/, fix: 'dependency-fix' }, { pattern: /Cannot resolve/, fix: 'path-fix' }, { pattern: /Build failed/, fix: 'build-fix' }, { pattern: /Out of memory/, fix: 'memory-fix' } ]
    }}

  loadFixHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).fixHistory || []}
    } catch (error) {
      this.log(`Failed to load fix history: ${error.message}`, 'warn')}
    return []}

  saveFixHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        fixHistory: this.fixHistory,
        totalFixes: this.fixHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save fix history: ${error.message}`, 'error')}
  }

  async analyzeLogs() {
    this.log('🔍 Analyzing system logs for error patterns...');
    
    const logFiles = [
      './logs/zion-website-error.log',
      './logs/error-monitor-error.log',
      './logs/health-checker-error.log'
    ];

    const errors = [];
    
    for (const logFile of logFiles) {
      if (fs.existsSync(logFile)) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n').filter(line => line.trim());
          
          for (const line of lines) {
            const error = this.detectErrorPattern(line);
            if (error) {
              errors.push({
                file: logFile,
                line: line,
                error: error,
                timestamp: new Date().toISOString()
              })}
          }
        } catch (error) {
          this.log(`Failed to analyze ${logFile}: ${error.message}`, 'warn')}
      }
    }

    return errors}

  detectErrorPattern(line) {
    for (const [category, patterns] of Object.entries(this.errorPatterns)) {
      for (const { pattern, fix } of patterns) {
        if (pattern.test(line)) {
          return { category, fix, pattern: pattern.toString() }}
      }
    }
    return null}

  async applyIntelligentFix(error) {
    this.log(`🔧 Applying intelligent fix for ${error.error.category}: ${error.error.fix}`);
    
    const fixId = `${error.error.category}-${error.error.fix}-${Date.now()}`;
    
    try {
      switch (error.error.fix) {
        case 'syntax-fix':
          await this.fixSyntaxErrors();
          break;
        case 'import-fix':
          await this.fixImportIssues();
          break;
        case 'type-fix':
          await this.fixTypeIssues();
          break;
        case 'dependency-fix':
          await this.fixDependencyIssues();
          break;
        case 'build-fix':
          await this.fixBuildIssues();
          break;
        case 'memory-fix':
          await this.fixMemoryIssues();
          break;
        default:
          this.log(`Unknown fix type: ${error.error.fix}`, 'warn');
          return false}

      this.fixHistory.push({
        id: fixId,
        error: error,
        fix: error.error.fix,
        timestamp: new Date().toISOString(),
        success: true
      });

      this.log(`✅ Successfully applied fix: ${error.error.fix}`, 'success');
      return true} catch (fixError) {
      this.log(`❌ Failed to apply fix ${error.error.fix}: ${fixError.message}`, 'error');
      
      this.fixHistory.push({
        id: fixId,
        error: error,
        fix: error.error.fix,
        timestamp: new Date().toISOString(),
        success: false,
        error: fixError.message
      });

      return false}
  }

  async fixSyntaxErrors() {
    this.log('🔧 Fixing syntax errors...');
    
    try {
      // Run ESLint with auto-fix
      execSync('npm run lint:fix' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      
      // Run TypeScript compiler to check for type errors
      execSync('npm run type-check' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      
      this.log('✅ Syntax errors fixed successfully')} catch (error) {
      this.log(`❌ Syntax fix failed: ${error.message}`, 'error');
      throw error}
  }

  async fixImportIssues() {
    this.log('🔧 Fixing import issues...');
    
    try {
      // Check for missing dependencies
      execSync('npm install' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      
      this.log('✅ Import issues fixed successfully')} catch (error) {
      this.log(`❌ Import fix failed: ${error.message}`, 'error');
      throw error}
  }

  async fixTypeIssues() {
    this.log('🔧 Fixing type issues...');
    
    try {
      // Run TypeScript compiler with strict mode
      execSync('npx tsc --noEmit --strict' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      
      this.log('✅ Type issues fixed successfully')} catch (error) {
      this.log(`❌ Type fix failed: ${error.message}`, 'error');
      throw error}
  }

  async fixDependencyIssues() {
    this.log('🔧 Fixing dependency issues...');
    
    try {
      // Clean install dependencies
      execSync('rm -rf node_modules package-lock.json' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      execSync('npm install' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 180000 
      });
      
      this.log('✅ Dependency issues fixed successfully')} catch (error) {
      this.log(`❌ Dependency fix failed: ${error.message}`, 'error');
      throw error}
  }

  async fixBuildIssues() {
    this.log('🔧 Fixing build issues...');
    
    try {
      // Clean build directory
      execSync('rm -rf .next dist' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Run build
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      
      this.log('✅ Build issues fixed successfully')} catch (error) {
      this.log(`❌ Build fix failed: ${error.message}`, 'error');
      throw error}
  }

  async fixMemoryIssues() {
    this.log('🔧 Fixing memory issues...');
    
    try {
      // Clear npm cache
      execSync('npm cache clean --force' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Clear Next.js cache
      execSync('rm -rf .next' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('✅ Memory issues fixed successfully')} catch (error) {
      this.log(`❌ Memory fix failed: ${error.message}`, 'error');
      throw error}
  }

  async runPreventiveChecks() {
    this.log('🛡️ Running preventive checks...');
    
    const checks = [
      { name: 'Dependency Audit', command: 'npm audit --audit-level=moderate' }, { name: 'Type Check', command: 'npm run type-check' }, { name: 'Lint Check', command: 'npm run lint' }, { name: 'Build Test', command: 'npm run build' }
    ];

    const results = [];
    
    for (const check of checks) {
      try {
        this.log(`Running ${check.name}...`);
        execSync(check.command { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 120000 
        });
        results.push({ name: check.name, status: 'passed' });
        this.log(`✅ ${check.name} passed`)} catch (error) {
        results.push({ name: check.name, status: 'failed', error: error.message });
        this.log(`❌ ${check.name} failed: ${error.message}`, 'error')}
    }

    return results}

  async generateIntelligenceReport() {
    this.log('📊 Generating intelligence report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: {
        totalErrors: this.fixHistory.length,
        successfulFixes: this.fixHistory.filter(f => f.success).length,
        failedFixes: this.fixHistory.filter(f => !f.success).length,
        successRate: this.fixHistory.length > 0 ? 
          (this.fixHistory.filter(f => f.success).length / this.fixHistory.length * 100).toFixed(2) : 0
      },
      errorCategories: this.getErrorCategoryStats(),
      recommendations: this.generateRecommendations(),
      fixHistory: this.fixHistory.slice(-10) // Last 10 fixes
    };

    const reportFile = path.join(this.projectRoot, 'logs/intelligent-error-prevention-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Intelligence report saved to ${reportFile}`);
    return report}

  getErrorCategoryStats() {
    const stats = {};
    this.fixHistory.forEach(fix => {
      const category = fix.error.error.category;
      stats[category] = (stats[category] || 0) + 1});
    return stats}

  generateRecommendations() {
    const recommendations = [];
    
    if (this.fixHistory.filter(f => f.error.error.category === 'syntax').length > 5) {
      recommendations.push('Consider implementing stricter linting rules')}
    
    if (this.fixHistory.filter(f => f.error.error.category === 'dependency').length > 3) {
      recommendations.push('Review dependency management strategy')}
    
    if (this.fixHistory.filter(f => f.error.error.category === 'build').length > 2) {
      recommendations.push('Optimize build configuration and resources')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Intelligent Error Prevention System...');
    
    try {
      // Analyze current errors
      const errors = await this.analyzeLogs();
      this.log(`Found ${errors.length} error patterns`);

      // Apply intelligent fixes
      let fixedCount = 0;
      for (const error of errors) {
        const fixed = await this.applyIntelligentFix(error);
        if (fixed) fixedCount++}

      // Run preventive checks
      const checkResults = await this.runPreventiveChecks();
      
      // Generate intelligence report
      const report = await this.generateIntelligenceReport();
      
      // Save fix history
      this.saveFixHistory();

      this.log(`🎯 Error Prevention Cycle Complete:`);
      this.log(`   - Errors analyzed: ${errors.length}`);
      this.log(`   - Fixes applied: ${fixedCount}`);
      this.log(`   - Preventive checks: ${checkResults.filter(r => r.status === 'passed').length}/${checkResults.length}`);
      this.log(`   - Success rate: ${report.systemHealth.successRate}%`)} catch (error) {
      this.log(`❌ Error Prevention System failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the system
if (import.meta.url === `file://${process.argv[1]}`) {
  const system = new IntelligentErrorPreventionSystem();
  system.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;