#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentErrorPreventionOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.errorHistory = [];
    this.fixHistory = [];
    this.performanceMetrics = {
      totalRuns: 0,
      totalErrorsFixed: 0,
      averageFixTime: 0,
      successRate: 0
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    // Load historical data
    this.loadHistoricalData();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const levelEmoji = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    };
    
    console.log(`[${timestamp}] [${levelEmoji[level]}] [IntelligentOrchestrator] ${message}`);
  }

  loadHistoricalData() {
    try {
      const historyPath = path.join(this.reportsDir, 'error-prevention-history.json');
      if (fs.existsSync(historyPath)) {
        const data = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
        this.errorHistory = data.errorHistory || [];
        this.fixHistory = data.fixHistory || [];
        this.performanceMetrics = data.performanceMetrics || this.performanceMetrics;
      }
    } catch (error) {
      this.log(`Failed to load historical data: ${error.message}`, 'warning');
    }
  }

  saveHistoricalData() {
    try {
      const historyPath = path.join(this.reportsDir, 'error-prevention-history.json');
      const data = {
        errorHistory: this.errorHistory,
        fixHistory: this.fixHistory,
        performanceMetrics: this.performanceMetrics,
        lastUpdated: new Date().toISOString()
      };
      
      fs.writeFileSync(historyPath, JSON.stringify(data, null, 2));
    } catch (error) {
      this.log(`Failed to save historical data: ${error.message}`, 'warning');
    }
  }

  async analyzeProjectHealth() {
    this.log('Analyzing project health...');
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      typescript: await this.checkTypeScriptHealth(),
      eslint: await this.checkESLintHealth(),
      build: await this.checkBuildHealth(),
      dependencies: await this.checkDependenciesHealth(),
      overall: { score: 0, status: 'unknown' }
    };
    
    // Calculate overall health score
    const scores = [
      healthReport.typescript.score,
      healthReport.eslint.score,
      healthReport.build.score,
      healthReport.dependencies.score
    ].filter(score => score !== null);
    
    if (scores.length > 0) {
      healthReport.overall.score = scores.reduce((a, b) => a + b, 0) / scores.length;
      healthReport.overall.status = this.getHealthStatus(healthReport.overall.score);
    }
    
    this.log(`Project health analysis completed. Overall score: ${healthReport.overall.score.toFixed(2)}/100 (${healthReport.overall.status})`);
    
    // Save health report
    const healthReportPath = path.join(this.reportsDir, 'project-health-report.json');
    fs.writeFileSync(healthReportPath, JSON.stringify(healthReport, null, 2));
    
    return healthReport;
  }

  async checkTypeScriptHealth() {
    try {
      const result = execSync('npm run type-check', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return {
        score: 100,
        status: 'healthy',
        errors: 0,
        message: 'No TypeScript errors found'
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errorCount = (output.match(/error TS/g) || []).length;
      
      // Calculate score based on error count (fewer errors = higher score)
      const score = Math.max(0, 100 - (errorCount * 2));
      
      return {
        score: score,
        status: this.getHealthStatus(score),
        errors: errorCount,
        message: `Found ${errorCount} TypeScript errors`
      };
    }
  }

  async checkESLintHealth() {
    try {
      const result = execSync('npx eslint . --format=compact', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return {
        score: 100,
        status: 'healthy',
        errors: 0,
        message: 'No ESLint errors found'
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errorCount = (output.match(/error/g) || []).length;
      
      const score = Math.max(0, 100 - (errorCount * 3));
      
      return {
        score: score,
        status: this.getHealthStatus(score),
        errors: errorCount,
        message: `Found ${errorCount} ESLint errors`
      };
    }
  }

  async checkBuildHealth() {
    try {
      const result = execSync('npm run build', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot,
        timeout: 60000 // 1 minute timeout
      });
      
      return {
        score: 100,
        status: 'healthy',
        errors: 0,
        message: 'Build completed successfully'
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errorCount = (output.match(/error/g) || []).length;
      
      const score = Math.max(0, 100 - (errorCount * 5));
      
      return {
        score: score,
        status: this.getHealthStatus(score),
        errors: errorCount,
        message: `Build failed with ${errorCount} errors`
      };
    }
  }

  async checkDependenciesHealth() {
    try {
      const result = execSync('npm audit --audit-level=moderate', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return {
        score: 100,
        status: 'healthy',
        vulnerabilities: 0,
        message: 'No security vulnerabilities found'
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const vulnerabilityCount = (output.match(/(\d+) vulnerabilities/g) || []).length;
      
      const score = Math.max(0, 100 - (vulnerabilityCount * 10));
      
      return {
        score: score,
        status: this.getHealthStatus(score),
        vulnerabilities: vulnerabilityCount,
        message: `Found ${vulnerabilityCount} security vulnerabilities`
      };
    }
  }

  getHealthStatus(score) {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'fair';
    if (score >= 60) return 'poor';
    return 'critical';
  }

  async runIntelligentErrorPrevention() {
    this.log('Starting intelligent error prevention process...');
    
    const runStartTime = Date.now();
    this.performanceMetrics.totalRuns++;
    
    try {
      // 1. Analyze current project health
      const healthReport = await this.analyzeProjectHealth();
      
      // 2. Determine if intervention is needed
      if (healthReport.overall.score >= 80) {
        this.log('Project is in good health. No intervention needed.', 'success');
        this.recordFixAttempt('none', 0, Date.now() - runStartTime, true);
        return { success: true, intervention: false, healthScore: healthReport.overall.score };
      }
      
      // 3. Run targeted error prevention based on health analysis
      const interventionResult = await this.runTargetedIntervention(healthReport);
      
      // 4. Re-analyze health after intervention
      const postHealthReport = await this.analyzeProjectHealth();
      
      // 5. Record results
      const fixTime = Date.now() - runStartTime;
      const errorsFixed = healthReport.overall.score - postHealthReport.overall.score;
      
      this.recordFixAttempt('targeted', errorsFixed, fixTime, interventionResult.success);
      
      // 6. Update performance metrics
      this.updatePerformanceMetrics(errorsFixed, fixTime, interventionResult.success);
      
      this.log(`Intelligent error prevention completed. Health improved from ${healthReport.overall.score.toFixed(2)} to ${postHealthReport.overall.score.toFixed(2)}`, 'success');
      
      return {
        success: interventionResult.success,
        intervention: true,
        healthScore: postHealthReport.overall.score,
        improvement: postHealthReport.overall.score - healthReport.overall.score
      };
      
    } catch (error) {
      this.log(`Intelligent error prevention failed: ${error.message}`, 'error');
      this.recordFixAttempt('failed', 0, Date.now() - runStartTime, false);
      return { success: false, intervention: false, error: error.message };
    }
  }

  async runTargetedIntervention(healthReport) {
    this.log('Running targeted intervention based on health analysis...');
    
    const interventions = [];
    
    // TypeScript issues
    if (healthReport.typescript.score < 80) {
      this.log('TypeScript health is poor. Running TypeScript error fixer...');
      interventions.push(this.runTypeScriptIntervention());
    }
    
    // ESLint issues
    if (healthReport.eslint.score < 80) {
      this.log('ESLint health is poor. Running ESLint error fixer...');
      interventions.push(this.runESLintIntervention());
    }
    
    // Build issues
    if (healthReport.build.score < 80) {
      this.log('Build health is poor. Running build error fixer...');
      interventions.push(this.runBuildIntervention());
    }
    
    // Dependencies issues
    if (healthReport.dependencies.score < 80) {
      this.log('Dependencies health is poor. Running dependency fixer...');
      interventions.push(this.runDependencyIntervention());
    }
    
    // Run all interventions in parallel
    const results = await Promise.allSettled(interventions);
    
    // Analyze results
    const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
    const total = results.length;
    
    this.log(`Targeted intervention completed. ${successful}/${total} interventions successful.`);
    
    return {
      success: successful > 0,
      interventionsRun: total,
      successfulInterventions: successful
    };
  }

  async runTypeScriptIntervention() {
    try {
      // Import and run the enhanced error prevention automation
      const EnhancedErrorPrevention = require('./enhanced-error-prevention-automation.cjs');
      const automation = new EnhancedErrorPrevention();
      
      const result = await automation.runTypeScriptErrorFixer();
      
      return {
        success: result,
        type: 'typescript',
        errorsFixed: automation.results.typescript.errorsFixed
      };
      
    } catch (error) {
      this.log(`TypeScript intervention failed: ${error.message}`, 'error');
      return { success: false, type: 'typescript', error: error.message };
    }
  }

  async runESLintIntervention() {
    try {
      // Import and run the enhanced error prevention automation
      const EnhancedErrorPrevention = require('./enhanced-error-prevention-automation.cjs');
      const automation = new EnhancedErrorPrevention();
      
      const result = await automation.runESLintErrorFixer();
      
      return {
        success: result,
        type: 'eslint',
        errorsFixed: automation.results.eslint.errorsFixed
      };
      
    } catch (error) {
      this.log(`ESLint intervention failed: ${error.message}`, 'error');
      return { success: false, type: 'eslint', error: error.message };
    }
  }

  async runBuildIntervention() {
    try {
      // Import and run the enhanced error prevention automation
      const EnhancedErrorPrevention = require('./enhanced-error-prevention-automation.cjs');
      const automation = new EnhancedErrorPrevention();
      
      const result = await automation.runBuildErrorFixer();
      
      return {
        success: result,
        type: 'build',
        errorsFixed: automation.results.build.errorsFixed
      };
      
    } catch (error) {
      this.log(`Build intervention failed: ${error.message}`, 'error');
      return { success: false, type: 'build', error: error.message };
    }
  }

  async runDependencyIntervention() {
    try {
      // Try to fix dependency issues
      execSync('npm audit fix', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return {
        success: true,
        type: 'dependencies',
        errorsFixed: 1
      };
      
    } catch (error) {
      this.log(`Dependency intervention failed: ${error.message}`, 'warning');
      return { success: false, type: 'dependencies', error: error.message };
    }
  }

  recordFixAttempt(type, errorsFixed, duration, success) {
    const record = {
      timestamp: new Date().toISOString(),
      type: type,
      errorsFixed: errorsFixed,
      duration: duration,
      success: success
    };
    
    this.fixHistory.push(record);
    
    // Keep only last 100 records
    if (this.fixHistory.length > 100) {
      this.fixHistory = this.fixHistory.slice(-100);
    }
    
    this.saveHistoricalData();
  }

  updatePerformanceMetrics(errorsFixed, duration, success) {
    this.performanceMetrics.totalErrorsFixed += errorsFixed;
    
    // Update average fix time
    const totalTime = this.performanceMetrics.averageFixTime * (this.performanceMetrics.totalRuns - 1) + duration;
    this.performanceMetrics.averageFixTime = totalTime / this.performanceMetrics.totalRuns;
    
    // Update success rate
    const successfulRuns = this.fixHistory.filter(r => r.success).length;
    this.performanceMetrics.successRate = (successfulRuns / this.fixHistory.length) * 100;
    
    this.saveHistoricalData();
  }

  async generateIntelligenceReport() {
    this.log('Generating intelligence report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      performanceMetrics: this.performanceMetrics,
      recentActivity: this.fixHistory.slice(-10),
      recommendations: this.generateRecommendations(),
      healthTrends: this.analyzeHealthTrends()
    };
    
    const reportPath = path.join(this.reportsDir, 'intelligence-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('Intelligence report generated successfully');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.performanceMetrics.successRate < 80) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        message: 'Error prevention success rate is low. Consider reviewing error patterns and improving fix strategies.',
        action: 'Analyze error patterns and update fix strategies'
      });
    }
    
    if (this.performanceMetrics.averageFixTime > 30000) { // 30 seconds
      recommendations.push({
        type: 'efficiency',
        priority: 'medium',
        message: 'Average fix time is high. Consider optimizing error detection and fix algorithms.',
        action: 'Optimize error detection and fix algorithms'
      });
    }
    
    if (this.fixHistory.length > 0) {
      const recentErrors = this.fixHistory.slice(-5);
      const typescriptErrors = recentErrors.filter(r => r.type === 'typescript' && !r.success);
      
      if (typescriptErrors.length > 2) {
        recommendations.push({
          type: 'typescript',
          priority: 'high',
          message: 'Multiple TypeScript fix attempts failed. Review TypeScript configuration and error patterns.',
          action: 'Review TypeScript configuration and error patterns'
        });
      }
    }
    
    return recommendations;
  }

  analyzeHealthTrends() {
    if (this.fixHistory.length < 5) {
      return { trend: 'insufficient_data', message: 'Not enough data to analyze trends' };
    }
    
    const recent = this.fixHistory.slice(-5);
    const older = this.fixHistory.slice(-10, -5);
    
    if (recent.length === 0 || older.length === 0) {
      return { trend: 'insufficient_data', message: 'Not enough data to analyze trends' };
    }
    
    const recentAvgErrors = recent.reduce((sum, r) => sum + r.errorsFixed, 0) / recent.length;
    const olderAvgErrors = older.reduce((sum, r) => sum + r.errorsFixed, 0) / older.length;
    
    if (recentAvgErrors < olderAvgErrors) {
      return { trend: 'improving', message: 'Error count is decreasing over time' };
    } else if (recentAvgErrors > olderAvgErrors) {
      return { trend: 'worsening', message: 'Error count is increasing over time' };
    } else {
      return { trend: 'stable', message: 'Error count is stable over time' };
    }
  }

  async startContinuousIntelligentMode() {
    this.log('Starting continuous intelligent error prevention mode...');
    
    // Run initial analysis
    await this.runIntelligentErrorPrevention();
    
    // Set up continuous monitoring
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // Default: 15 minutes
    
    setInterval(async () => {
      this.log('Running scheduled intelligent error prevention...');
      await this.runIntelligentErrorPrevention();
      
      // Generate intelligence report every hour
      if (this.performanceMetrics.totalRuns % 4 === 0) {
        await this.generateIntelligenceReport();
      }
    }, interval);
    
    this.log(`Continuous intelligent mode active. Running every ${interval / 1000} seconds.`);
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new IntelligentErrorPreventionOrchestrator();
  
  if (process.argv.includes('--continuous')) {
    orchestrator.startContinuousIntelligentMode();
  } else if (process.argv.includes('--analyze')) {
    orchestrator.analyzeProjectHealth()
      .then(health => {
        console.log('Project health analysis:', health);
        process.exit(0);
      })
      .catch(error => {
        console.error('Health analysis failed:', error);
        process.exit(1);
      });
  } else if (process.argv.includes('--report')) {
    orchestrator.generateIntelligenceReport()
      .then(report => {
        console.log('Intelligence report:', report);
        process.exit(0);
      })
      .catch(error => {
        console.error('Report generation failed:', error);
        process.exit(1);
      });
  } else {
    orchestrator.runIntelligentErrorPrevention()
      .then(results => {
        console.log('Intelligent error prevention completed:', results);
        process.exit(results.success ? 0 : 1);
      })
      .catch(error => {
        console.error('Intelligent error prevention failed:', error);
        process.exit(1);
      });
  }
}

module.exports = IntelligentErrorPreventionOrchestrator;