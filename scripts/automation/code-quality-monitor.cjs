#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Code Quality Monitor...');

class CodeQualityMonitor {
  constructor() {
    this.qualityLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.qualityMetrics = {
      lintErrors: 0,
      lintWarnings: 0,
      typeErrors: 0,
      testCoverage: 0,
      codeComplexity: 0,
      overallScore: 0
    };
    this.qualityHistory = [];
    this.maxQualityHistory = 20;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.qualityLogDir)) {
      fs.mkdirSync(this.qualityLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.qualityLogDir, 'code-quality-monitor.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async checkCodeQuality() {
    this.log('🔍 Checking code quality...');
    
    try {
      // Check linting
      const lintResults = await this.runLintCheck();
      
      // Check TypeScript types
      const typeResults = await this.runTypeCheck();
      
      // Check test coverage
      const testResults = await this.runTestCheck();
      
      // Check code complexity
      const complexityResults = await this.checkCodeComplexity();
      
      // Calculate overall quality score
      const qualityScore = this.calculateQualityScore({
        lintResults,
        typeResults,
        testResults,
        complexityResults
      });
      
      // Update quality metrics
      this.updateQualityMetrics({
        lintErrors: lintResults.errors,
        lintWarnings: lintResults.warnings,
        typeErrors: typeResults.errors,
        testCoverage: testResults.coverage,
        codeComplexity: complexityResults.score,
        overallScore: qualityScore
      });
      
      // Log quality status
      this.log(`🔍 Code Quality Score: ${qualityScore}/100`);
      this.log(`📝 Lint: ${lintResults.errors} errors, ${lintResults.warnings} warnings`);
      this.log(`🔧 Types: ${typeResults.errors} errors`);
      this.log(`🧪 Tests: ${testResults.coverage}% coverage`);
      this.log(`📊 Complexity: ${complexityResults.score}/100`);
      
      return qualityScore;
      
    } catch (error) {
      this.log(`❌ Code quality check failed: ${error.message}`);
      return 0;
    }
  }

  async runLintCheck() {
    try {
      this.log('📝 Running lint check...');
      const result = execSync('npm run lint --silent', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse lint output for errors and warnings
      const lines = result.split('\n');
      const errors = lines.filter(line => line.includes('error')).length;
      const warnings = lines.filter(line => line.includes('warning')).length;
      
      return { errors, warnings, success: true };
      
    } catch (error) {
      // Lint failed, parse error output
      const errorOutput = error.stdout || error.stderr || '';
      const lines = errorOutput.split('\n');
      const errors = lines.filter(line => line.includes('error')).length;
      const warnings = lines.filter(line => line.includes('warning')).length;
      
      return { errors, warnings, success: false };
    }
  }

  async runTypeCheck() {
    try {
      this.log('🔧 Running TypeScript type check...');
      execSync('npm run type-check --silent', { 
        stdio: 'pipe'
      });
      
      return { errors: 0, success: true };
      
    } catch (error) {
      // Type check failed, parse error output
      const errorOutput = error.stdout || error.stderr || '';
      const lines = errorOutput.split('\n');
      const errors = lines.filter(line => line.includes('error')).length;
      
      return { errors, success: false };
    }
  }

  async runTestCheck() {
    try {
      this.log('🧪 Running test check...');
      const result = execSync('npm test --silent', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse test output for coverage
      const coverageMatch = result.match(/(\d+(?:\.\d+)?)%/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      return { coverage, success: true };
      
    } catch (error) {
      // Tests failed, try to extract coverage from error output
      const errorOutput = error.stdout || error.stderr || '';
      const coverageMatch = errorOutput.match(/(\d+(?:\.\d+)?)%/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      return { coverage, success: false };
    }
  }

  async checkCodeComplexity() {
    try {
      this.log('📊 Checking code complexity...');
      
      // Simple complexity check based on file sizes and line counts
      const srcDir = path.join(process.cwd(), 'src');
      const componentsDir = path.join(process.cwd(), 'components');
      
      let totalLines = 0;
      let totalFiles = 0;
      let largeFiles = 0;
      
      // Count lines in source files
      if (fs.existsSync(srcDir)) {
        const srcFiles = this.getAllFiles(srcDir);
        for (const file of srcFiles) {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(file, 'utf8');
            const lines = content.split('\n').length;
            totalLines += lines;
            totalFiles++;
            
            if (lines > 200) {
              largeFiles++;
            }
          }
        }
      }
      
      // Count lines in component files
      if (fs.existsSync(componentsDir)) {
        const componentFiles = this.getAllFiles(componentsDir);
        for (const file of componentFiles) {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(file, 'utf8');
            const lines = content.split('\n').length;
            totalLines += lines;
            totalFiles++;
            
            if (lines > 200) {
              largeFiles++;
            }
          }
        }
      }
      
      // Calculate complexity score
      const avgLinesPerFile = totalFiles > 0 ? totalLines / totalFiles : 0;
      const largeFilePercentage = totalFiles > 0 ? (largeFiles / totalFiles) * 100 : 0;
      
      let complexityScore = 100;
      
      if (avgLinesPerFile > 100) complexityScore -= 20;
      if (avgLinesPerFile > 150) complexityScore -= 20;
      if (largeFilePercentage > 20) complexityScore -= 20;
      if (largeFilePercentage > 40) complexityScore -= 20;
      
      return { 
        score: Math.max(0, complexityScore),
        avgLinesPerFile: Math.round(avgLinesPerFile),
        largeFilePercentage: Math.round(largeFilePercentage),
        totalFiles,
        totalLines
      };
      
    } catch (error) {
      this.log(`⚠️ Complexity check failed: ${error.message}`);
      return { score: 50, avgLinesPerFile: 0, largeFilePercentage: 0, totalFiles: 0, totalLines: 0 };
    }
  }

  getAllFiles(dirPath) {
    const files = [];
    
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  calculateQualityScore(metrics) {
    let score = 100;
    
    // Deduct points for lint errors
    score -= Math.min(metrics.lintResults.errors * 5, 30);
    
    // Deduct points for type errors
    score -= Math.min(metrics.typeResults.errors * 10, 30);
    
    // Deduct points for low test coverage
    if (metrics.testResults.coverage < 80) {
      score -= (80 - metrics.testResults.coverage) * 2;
    }
    
    // Deduct points for high complexity
    if (metrics.complexityResults.score < 80) {
      score -= (80 - metrics.complexityResults.score) * 0.5;
    }
    
    return Math.max(0, Math.round(score));
  }

  updateQualityMetrics(metrics) {
    this.qualityMetrics = { ...metrics };
    this.qualityMetrics.lastCheck = new Date().toISOString();
    
    // Record quality history
    this.qualityHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.qualityHistory.length > this.maxQualityHistory) {
      this.qualityHistory = this.qualityHistory.slice(-this.maxQualityHistory);
    }
    
    // Save quality metrics
    const metricsFile = path.join(this.qualityLogDir, 'code-quality-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.qualityMetrics,
      history: this.qualityHistory
    }, null, 2));
  }

  generateQualityReport() {
    const totalChecks = this.qualityHistory.length;
    const excellentChecks = this.qualityHistory.filter(h => h.overallScore >= 90).length;
    const goodChecks = this.qualityHistory.filter(h => h.overallScore >= 80 && h.overallScore < 90).length;
    const fairChecks = this.qualityHistory.filter(h => h.overallScore >= 70 && h.overallScore < 80).length;
    const poorChecks = this.qualityHistory.filter(h => h.overallScore >= 60 && h.overallScore < 70).length;
    const criticalChecks = this.qualityHistory.filter(h => h.overallScore < 60).length;
    
    const report = {
      currentQuality: this.qualityMetrics.overallScore,
      summary: {
        totalChecks,
        excellent: excellentChecks,
        good: goodChecks,
        fair: fairChecks,
        poor: poorChecks,
        critical: criticalChecks
      },
      recentHistory: this.qualityHistory.slice(-5),
      recommendations: this.generateQualityRecommendations()
    };
    
    return report;
  }

  generateQualityRecommendations() {
    const recommendations = [];
    
    if (this.qualityHistory.length > 0) {
      const recentChecks = this.qualityHistory.slice(-3);
      const avgRecentScore = recentChecks.reduce((sum, h) => sum + h.overallScore, 0) / recentChecks.length;
      
      if (this.qualityMetrics.lintErrors > 0) {
        recommendations.push('📝 Fix lint errors to improve code quality.');
      }
      
      if (this.qualityMetrics.typeErrors > 0) {
        recommendations.push('🔧 Fix TypeScript type errors for better type safety.');
      }
      
      if (this.qualityMetrics.testCoverage < 80) {
        recommendations.push('🧪 Increase test coverage to improve code reliability.');
      }
      
      if (avgRecentScore < 70) {
        recommendations.push('🚨 Code quality is declining. Review recent changes.');
      }
      
      if (avgRecentScore >= 90) {
        recommendations.push('✅ Code quality is excellent. Maintain current standards.');
      }
    }
    
    return recommendations;
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous quality monitoring...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // 15 minutes default
    
    // Run initial quality check
    await this.checkCodeQuality();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running scheduled quality check...');
      await this.checkCodeQuality();
      
      // Generate and log report
      const report = this.generateQualityReport();
      this.log(`📊 Quality Report: ${report.currentQuality}/100`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Quality monitoring active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const qualityMonitor = new CodeQualityMonitor();
  
  try {
    await qualityMonitor.startContinuousMonitoring();
  } catch (error) {
    console.error('❌ Code quality monitor failed:', error);
    process.exit(1);
  }
}

// Start the quality monitor
main().catch(console.error);
