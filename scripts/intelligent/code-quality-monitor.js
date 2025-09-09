#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SmartCodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/smart-code-quality-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/smart-code-quality-monitor-report.json');
    this.qualityHistory = this.loadQualityHistory();
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

  loadQualityHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).qualityHistory || []}
    } catch (error) {
      this.log(`Failed to load quality history: ${error.message}`, 'warn')}
    return []}

  saveQualityHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        qualityHistory: this.qualityHistory,
        totalChecks: this.qualityHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save quality history: ${error.message}`, 'error')}
  }

  async analyzeCodeQuality() {
    this.log('📊 Analyzing code quality...');
    
    const analysis = {
      linting: await this.runLinting(),
      typeChecking: await this.runTypeChecking(),
      testCoverage: await this.runTestCoverage(),
      complexity: await this.analyzeComplexity(),
      maintainability: await this.analyzeMaintainability(),
      security: await this.analyzeSecurity(),
      performance: await this.analyzePerformance()
    };

    this.log(`Code Quality Analysis Results:`);
    this.log(`  - Linting Issues: ${analysis.linting.issues.length}`);
    this.log(`  - Type Errors: ${analysis.typeChecking.errors.length}`);
    this.log(`  - Test Coverage: ${analysis.testCoverage.coverage}%`);
    this.log(`  - Complexity Score: ${analysis.complexity.score}`);
    this.log(`  - Maintainability Index: ${analysis.maintainability.index}`);
    this.log(`  - Security Issues: ${analysis.security.issues.length}`);
    this.log(`  - Performance Issues: ${analysis.performance.issues.length}`);

    return analysis}

  async runLinting() {
    try {
      this.log('🔍 Running ESLint analysis...');
      
      const output = execSync('npm run lint -- --format=json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const results = JSON.parse(output);
      const issues = [];
      
      results.forEach(file => {
        file.messages.forEach(message => {
          issues.push({
            file: file.filePath,
            line: message.line,
            column: message.column,
            severity: message.severity,
            rule: message.ruleId,
            message: message.message
          })})});
      
      return {
        issues,
        totalFiles: results.length,
        errorCount: issues.filter(i => i.severity === 2).length,
        warningCount: issues.filter(i => i.severity === 1).length
      }} catch (error) {
      // ESLint returns non-zero exit code when issues are found
      if (error.stdout) {
        try {
          const results = JSON.parse(error.stdout);
          const issues = [];
          
          results.forEach(file => {
            file.messages.forEach(message => {
              issues.push({
                file: file.filePath,
                line: message.line,
                column: message.column,
                severity: message.severity,
                rule: message.ruleId,
                message: message.message
              })})});
          
          return {
            issues,
            totalFiles: results.length,
            errorCount: issues.filter(i => i.severity === 2).length,
            warningCount: issues.filter(i => i.severity === 1).length
          }} catch (parseError) {
          this.log(`Failed to parse linting results: ${parseError.message}`, 'warn');
          return { issues: [], totalFiles: 0, errorCount: 0, warningCount: 0 }}
      }
      return { issues: [], totalFiles: 0, errorCount: 0, warningCount: 0 }}
  }

  async runTypeChecking() {
    try {
      this.log('🔍 Running TypeScript type checking...');
      
      const output = execSync('npm run type-check' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      return {
        errors: [],
        success: true
      }} catch (error) {
      // TypeScript returns non-zero exit code when errors are found
      const errors = [];
      const errorOutput = error.stdout || error.stderr || '';
      
      // Parse TypeScript errors
      const lines = errorOutput.split('\n');
      lines.forEach(line => {
        if (line.includes('error TS')) {
          const match = line.match(/\((\d+),(\d+)\): error TS(\d+): (.+)/);
          if (match) {
            errors.push({
              line: parseInt(match[1]),
              column: parseInt(match[2]),
              code: match[3],
              message: match[4]
            })}
        }
      });
      
      return {
        errors,
        success: false
      }}
  }

  async runTestCoverage() {
    try {
      this.log('🔍 Running test coverage analysis...');
      
      const output = execSync('npm run test:coverage' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      // Parse coverage from output
      const coverageMatch = output.match(/All files\s+\|\s+(\d+\.\d+)/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      return {
        coverage,
        success: true
      }} catch (error) {
      this.log(`Test coverage analysis failed: ${error.message}`, 'warn');
      return {
        coverage: 0,
        success: false
      }}
  }

  async analyzeComplexity() {
    try {
      this.log('🔍 Analyzing code complexity...');
      
      const files = this.getSourceFiles();
      let totalComplexity = 0;
      let fileCount = 0;
      
      for (const file of files) {
        const complexity = this.calculateFileComplexity(file);
        totalComplexity += complexity;
        fileCount++}
      
      const averageComplexity = fileCount > 0 ? totalComplexity / fileCount : 0;
      
      return {
        score: averageComplexity.toFixed(2),
        totalFiles: fileCount,
        highComplexityFiles: files.filter(f => this.calculateFileComplexity(f) > 10).length
      }} catch (error) {
      this.log(`Complexity analysis failed: ${error.message}`, 'warn');
      return { score: 0, totalFiles: 0, highComplexityFiles: 0 }}
  }

  getSourceFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath)}
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDirectory(this.projectRoot);
    return files}

  calculateFileComplexity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      let complexity = 1; // Base complexity
      
      // Count complexity indicators
      const complexityPatterns = [
        /if\s*\(/g,
        /else\s+if\s*\(/g,
        /for\s*\(/g,
        /while\s*\(/g,
        /switch\s*\(/g,
        /case\s+/g,
        /catch\s*\(/g,
        /&&/g,
        /\|\|/g,
        /\?/g
      ];
      
      complexityPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          complexity += matches.length}
      });
      
      return complexity} catch (error) {
      return 0}
  }

  async analyzeMaintainability() {
    try {
      this.log('🔍 Analyzing maintainability...');
      
      const files = this.getSourceFiles();
      let totalMaintainability = 0;
      let fileCount = 0;
      
      for (const file of files) {
        const maintainability = this.calculateMaintainabilityIndex(file);
        totalMaintainability += maintainability;
        fileCount++}
      
      const averageMaintainability = fileCount > 0 ? totalMaintainability / fileCount : 0;
      
      return {
        index: averageMaintainability.toFixed(2),
        totalFiles: fileCount,
        lowMaintainabilityFiles: files.filter(f => this.calculateMaintainabilityIndex(f) < 50).length
      }} catch (error) {
      this.log(`Maintainability analysis failed: ${error.message}`, 'warn');
      return { index: 0, totalFiles: 0, lowMaintainabilityFiles: 0 }}
  }

  calculateMaintainabilityIndex(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Calculate maintainability based on various factors
      let score = 100;
      
      // Reduce score for long files
      if (lines.length > 200) {
        score -= (lines.length - 200) * 0.1}
      
      // Reduce score for long lines
      const longLines = lines.filter(line => line.length > 120).length;
      score -= longLines * 0.5;
      
      // Reduce score for high complexity
      const complexity = this.calculateFileComplexity(filePath);
      score -= complexity * 2;
      
      // Reduce score for lack of comments
      const commentLines = lines.filter(line => line.trim().startsWith('//') || line.trim().startsWith('/*')).length;
      const commentRatio = commentLines / lines.length;
      if (commentRatio < 0.1) {
        score -= 10}
      
      return Math.max(0, Math.min(100, score))} catch (error) {
      return 0}
  }

  async analyzeSecurity() {
    try {
      this.log('🔍 Analyzing security issues...');
      
      const files = this.getSourceFiles();
      const issues = [];
      
      for (const file of files) {
        const securityIssues = this.findSecurityIssues(file);
        issues.push(...securityIssues)}
      
      return {
        issues,
        totalFiles: files.length,
        criticalIssues: issues.filter(i => i.severity === 'critical').length,
        highIssues: issues.filter(i => i.severity === 'high').length
      }} catch (error) {
      this.log(`Security analysis failed: ${error.message}`, 'warn');
      return { issues: [], totalFiles: 0, criticalIssues: 0, highIssues: 0 }}
  }

  findSecurityIssues(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const issues = [];
      
      const securityPatterns = [
        { pattern: /eval\s*\(/, severity: 'critical', message: 'Use of eval() is dangerous' }, { pattern: /innerHTML\s*=/, severity: 'high', message: 'Direct innerHTML assignment can lead to XSS' }, { pattern: /document\.write/, severity: 'medium', message: 'document.write() can lead to XSS' }, { pattern: /localStorage\.setItem/, severity: 'medium', message: 'Sensitive data in localStorage' }, { pattern: /sessionStorage\.setItem/, severity: 'medium', message: 'Sensitive data in sessionStorage' }, { pattern: /password.*=.*['"]/, severity: 'high', message: 'Hardcoded password detected' }, { pattern: /api[Kk]ey.*=.*['"]/, severity: 'high', message: 'Hardcoded API key detected' }
      ];
      
      lines.forEach((line, index) => {
        securityPatterns.forEach(({ pattern, severity, message }) => {
          if (pattern.test(line)) {
            issues.push({
              file: filePath,
              line: index + 1,
              severity,
              message,
              code: line.trim()
            })}
        })});
      
      return issues} catch (error) {
      return []}
  }

  async analyzePerformance() {
    try {
      this.log('🔍 Analyzing performance issues...');
      
      const files = this.getSourceFiles();
      const issues = [];
      
      for (const file of files) {
        const performanceIssues = this.findPerformanceIssues(file);
        issues.push(...performanceIssues)}
      
      return {
        issues,
        totalFiles: files.length,
        criticalIssues: issues.filter(i => i.severity === 'critical').length,
        highIssues: issues.filter(i => i.severity === 'high').length
      }} catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'warn');
      return { issues: [], totalFiles: 0, criticalIssues: 0, highIssues: 0 }}
  }

  findPerformanceIssues(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const issues = [];
      
      const performancePatterns = [
        { pattern: /for\s*\([^)]*\.length[^)]*\)/, severity: 'medium', message: 'Cache array length in loop' }, { pattern: /setTimeout\s*\(\s*0\s*\)/, severity: 'low', message: 'Use setImmediate instead of setTimeout(0)' }, { pattern: /console\.log/, severity: 'low', message: 'Remove console.log in production' }, { pattern: /\.innerHTML\s*\+/, severity: 'high', message: 'Use DocumentFragment for multiple DOM updates' }, { pattern: /document\.getElementById.*for/, severity: 'medium', message: 'Cache DOM elements in loops' }
      ];
      
      lines.forEach((line, index) => {
        performancePatterns.forEach(({ pattern, severity, message }) => {
          if (pattern.test(line)) {
            issues.push({
              file: filePath,
              line: index + 1,
              severity,
              message,
              code: line.trim()
            })}
        })});
      
      return issues} catch (error) {
      return []}
  }

  async autoFixIssues(analysis) {
    this.log('🔧 Auto-fixing code quality issues...');
    
    const fixes = [];
    
    // Auto-fix linting issues
    if (analysis.linting.issues.length > 0) {
      try {
        this.log('Fixing linting issues...');
        execSync('npm run lint:fix' { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 60000 
        });
        fixes.push({ type: 'linting', success: true, count: analysis.linting.issues.length });
        this.log('✅ Linting issues fixed')} catch (error) {
        fixes.push({ type: 'linting', success: false, error: error.message });
        this.log(`❌ Failed to fix linting issues: ${error.message}`, 'error')}
    }
    
    // Auto-fix formatting issues
    try {
      this.log('Fixing formatting issues...');
      execSync('npm run format' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      fixes.push({ type: 'formatting', success: true });
      this.log('✅ Formatting issues fixed')} catch (error) {
      fixes.push({ type: 'formatting', success: false, error: error.message });
      this.log(`❌ Failed to fix formatting issues: ${error.message}`, 'error')}
    
    return fixes}

  async generateQualityReport() {
    this.log('📊 Generating code quality report...');
    
    const analysis = await this.analyzeCodeQuality();
    const fixes = await this.autoFixIssues(analysis);
    
    // Calculate overall quality score
    const qualityScore = this.calculateQualityScore(analysis);
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis,
      fixes,
      qualityScore,
      summary: {
        overallScore: qualityScore,
        lintingIssues: analysis.linting.issues.length,
        typeErrors: analysis.typeChecking.errors.length,
        testCoverage: analysis.testCoverage.coverage,
        complexityScore: analysis.complexity.score,
        maintainabilityIndex: analysis.maintainability.index,
        securityIssues: analysis.security.issues.length,
        performanceIssues: analysis.performance.issues.length
      },
      recommendations: this.generateQualityRecommendations(analysis)
    };

    const reportFile = path.join(this.projectRoot, 'logs/smart-code-quality-monitor-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Quality report saved to ${reportFile}`);
    return report}

  calculateQualityScore(analysis) {
    let score = 100;
    
    // Deduct points for issues
    score -= analysis.linting.errorCount * 2;
    score -= analysis.linting.warningCount * 0.5;
    score -= analysis.typeChecking.errors.length * 3;
    score -= (100 - analysis.testCoverage.coverage) * 0.3;
    score -= analysis.complexity.highComplexityFiles * 1;
    score -= (100 - analysis.maintainability.index) * 0.2;
    score -= analysis.security.criticalIssues * 5;
    score -= analysis.security.highIssues * 2;
    score -= analysis.performance.criticalIssues * 3;
    score -= analysis.performance.highIssues * 1;
    
    return Math.max(0, Math.min(100, score.toFixed(2)))}

  generateQualityRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.linting.errorCount > 0) {
      recommendations.push('Fix ESLint errors to improve code consistency')}
    
    if (analysis.typeChecking.errors.length > 0) {
      recommendations.push('Resolve TypeScript errors for better type safety')}
    
    if (analysis.testCoverage.coverage < 80) {
      recommendations.push('Increase test coverage to at least 80%')}
    
    if (analysis.complexity.highComplexityFiles > 0) {
      recommendations.push('Refactor high complexity files')}
    
    if (analysis.maintainability.index < 70) {
      recommendations.push('Improve code maintainability through better structure')}
    
    if (analysis.security.issues.length > 0) {
      recommendations.push('Address security vulnerabilities immediately')}
    
    if (analysis.performance.issues.length > 0) {
      recommendations.push('Optimize performance bottlenecks')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Smart Code Quality Monitor...');
    
    try {
      // Generate comprehensive quality report
      const report = await this.generateQualityReport();
      
      // Save quality history
      this.qualityHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        qualityScore: report.qualityScore
      });
      
      this.saveQualityHistory();

      this.log(`🎯 Code Quality Analysis Complete:`);
      this.log(`   - Overall Quality Score: ${report.qualityScore}/100`);
      this.log(`   - Linting Issues: ${report.summary.lintingIssues}`);
      this.log(`   - Type Errors: ${report.summary.typeErrors}`);
      this.log(`   - Test Coverage: ${report.summary.testCoverage}%`);
      this.log(`   - Security Issues: ${report.summary.securityIssues}`);
      this.log(`   - Performance Issues: ${report.summary.performanceIssues}`);
      this.log(`   - Auto-fixes Applied: ${report.fixes.filter(f => f.success).length}`)} catch (error) {
      this.log(`❌ Code Quality Monitor failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the quality monitor
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new SmartCodeQualityMonitor();
  monitor.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;