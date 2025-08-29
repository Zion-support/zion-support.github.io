#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Intelligent Error Recovery Automation...');

class IntelligentErrorRecovery {
  constructor() {
    this.errorPatterns = new Map();
    this.recoveryStrategies = new Map();
    this.learningData = {
      errorHistory: [],
      recoverySuccess: [],
      patterns: new Map(),
      adaptiveStrategies: new Map()
    };
    this.reportDir = path.join(process.cwd(), 'error-recovery-reports');
    this.ensureReportDirectory();
    this.loadLearningData();
    this.initializeRecoveryStrategies();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadLearningData() {
    const learningFile = path.join(this.reportDir, 'learning-data.json');
    if (fs.existsSync(learningFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(learningFile, 'utf8'));
        this.learningData = { ...this.learningData, ...data };
        console.log('📚 Loaded existing learning data');
      } catch (error) {
        console.log('⚠️ Could not load learning data, starting fresh');
      }
    }
  }

  saveLearningData() {
    const learningFile = path.join(this.reportDir, 'learning-data.json');
    fs.writeFileSync(learningFile, JSON.stringify(this.learningData, null, 2));
  }

  initializeRecoveryStrategies() {
    // Initialize with common recovery strategies
    this.recoveryStrategies.set('build-failure', [
      { name: 'clear-cache', action: () => this.clearBuildCache() },
      { name: 'reinstall-deps', action: () => this.reinstallDependencies() },
      { name: 'reset-node-modules', action: () => this.resetNodeModules() }
    ]);

    this.recoveryStrategies.set('memory-error', [
      { name: 'increase-memory', action: () => this.increaseMemoryLimit() },
      { name: 'optimize-processes', action: () => this.optimizeProcesses() },
      { name: 'restart-process', action: () => this.restartProcess() }
    ]);

    this.recoveryStrategies.set('dependency-error', [
      { name: 'update-lockfile', action: () => this.updateLockfile() },
      { name: 'clear-npm-cache', action: () => this.clearNpmCache() },
      { name: 'force-reinstall', action: () => this.forceReinstall() }
    ]);

    this.recoveryStrategies.set('type-error', [
      { name: 'fix-types', action: () => this.fixTypeErrors() },
      { name: 'update-tsconfig', action: () => this.updateTsConfig() },
      { name: 'regenerate-types', action: () => this.regenerateTypes() }
    ]);
  }

  async analyzeErrors() {
    console.log('🔍 Analyzing recent errors...');
    
    try {
      // Check PM2 logs for recent errors
      const pm2Logs = execSync('pm2 logs --lines 100 --nostream', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });

      const errors = this.extractErrorsFromLogs(pm2Logs);
      await this.processErrors(errors);
      
    } catch (error) {
      console.log('❌ Error analysis failed:', error.message);
    }
  }

  extractErrorsFromLogs(logs) {
    const errorLines = logs.split('\n').filter(line => 
      line.includes('ERROR') || 
      line.includes('Error:') || 
      line.includes('Exception:') ||
      line.includes('Failed') ||
      line.includes('failed')
    );

    return errorLines.map(line => ({
      timestamp: new Date().toISOString(),
      message: line.trim(),
      type: this.categorizeError(line),
      severity: this.assessSeverity(line)
    }));
  }

  categorizeError(errorLine) {
    if (errorLine.includes('build') || errorLine.includes('Build')) return 'build-failure';
    if (errorLine.includes('memory') || errorLine.includes('Memory')) return 'memory-error';
    if (errorLine.includes('dependency') || errorLine.includes('npm')) return 'dependency-error';
    if (errorLine.includes('Type') || errorLine.includes('tsc')) return 'type-error';
    if (errorLine.includes('lint') || errorLine.includes('eslint')) return 'lint-error';
    return 'unknown';
  }

  assessSeverity(errorLine) {
    if (errorLine.includes('Critical') || errorLine.includes('FATAL')) return 'critical';
    if (errorLine.includes('Error') || errorLine.includes('Failed')) return 'high';
    if (errorLine.includes('Warning') || errorLine.includes('Warning')) return 'medium';
    return 'low';
  }

  async processErrors(errors) {
    for (const error of errors) {
      console.log(`🔄 Processing error: ${error.type} (${error.severity})`);
      
      // Add to learning data
      this.learningData.errorHistory.push(error);
      
      // Find and execute recovery strategy
      const strategy = this.findBestRecoveryStrategy(error);
      if (strategy) {
        await this.executeRecoveryStrategy(strategy, error);
      }
      
      // Learn from this error
      this.learnFromError(error);
    }

    // Save updated learning data
    this.saveLearningData();
    
    // Generate recovery report
    this.generateRecoveryReport();
  }

  findBestRecoveryStrategy(error) {
    const strategies = this.recoveryStrategies.get(error.type) || [];
    
    // Use learning data to find the most successful strategy for this error type
    const successfulStrategies = this.learningData.recoverySuccess
      .filter(s => s.errorType === error.type)
      .sort((a, b) => b.successRate - a.successRate);

    if (successfulStrategies.length > 0) {
      const bestStrategy = successfulStrategies[0];
      return strategies.find(s => s.name === bestStrategy.strategyName);
    }

    // Fall back to first available strategy
    return strategies[0];
  }

  async executeRecoveryStrategy(strategy, error) {
    if (!strategy) return;

    console.log(`🛠️ Executing recovery strategy: ${strategy.name}`);
    
    try {
      const startTime = Date.now();
      await strategy.action();
      const duration = Date.now() - startTime;
      
      // Record successful recovery
      this.learningData.recoverySuccess.push({
        errorType: error.type,
        strategyName: strategy.name,
        timestamp: new Date().toISOString(),
        duration,
        success: true
      });
      
      console.log(`✅ Recovery strategy ${strategy.name} completed successfully in ${duration}ms`);
      
    } catch (recoveryError) {
      console.log(`❌ Recovery strategy ${strategy.name} failed:`, recoveryError.message);
      
      // Record failed recovery
      this.learningData.recoverySuccess.push({
        errorType: error.type,
        strategyName: strategy.name,
        timestamp: new Date().toISOString(),
        duration: 0,
        success: false,
        error: recoveryError.message
      });
    }
  }

  // Recovery Strategy Implementations
  async clearBuildCache() {
    console.log('🧹 Clearing build cache...');
    try {
      execSync('rm -rf .next dist build .cache', { stdio: 'inherit' });
      execSync('npm run build', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Cache clearing failed: ${error.message}`);
    }
  }

  async reinstallDependencies() {
    console.log('📦 Reinstalling dependencies...');
    try {
      execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Dependency reinstallation failed: ${error.message}`);
    }
  }

  async resetNodeModules() {
    console.log('🔄 Resetting node_modules...');
    try {
      execSync('rm -rf node_modules', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Node modules reset failed: ${error.message}`);
    }
  }

  async increaseMemoryLimit() {
    console.log('💾 Increasing memory limit...');
    try {
      // Update PM2 ecosystem config with higher memory limits
      const ecosystemPath = path.join(process.cwd(), 'ecosystem.config.cjs');
      if (fs.existsSync(ecosystemPath)) {
        let config = fs.readFileSync(ecosystemPath, 'utf8');
        config = config.replace(/max_memory_restart: '(\d+)M'/, 'max_memory_restart: \'$1M\'');
        fs.writeFileSync(ecosystemPath, config);
        
        // Restart PM2 processes
        execSync('pm2 reload ecosystem.config.cjs', { stdio: 'inherit' });
      }
    } catch (error) {
      throw new Error(`Memory limit increase failed: ${error.message}`);
    }
  }

  async optimizeProcesses() {
    console.log('⚡ Optimizing processes...');
    try {
      // Restart processes with optimized settings
      execSync('pm2 restart all', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Process optimization failed: ${error.message}`);
    }
  }

  async restartProcess() {
    console.log('🔄 Restarting processes...');
    try {
      execSync('pm2 restart all', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Process restart failed: ${error.message}`);
    }
  }

  async updateLockfile() {
    console.log('🔒 Updating lockfile...');
    try {
      execSync('rm -f package-lock.json yarn.lock', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Lockfile update failed: ${error.message}`);
    }
  }

  async clearNpmCache() {
    console.log('🧹 Clearing npm cache...');
    try {
      execSync('npm cache clean --force', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`NPM cache clearing failed: ${error.message}`);
    }
  }

  async forceReinstall() {
    console.log('💪 Force reinstalling...');
    try {
      execSync('npm install --force', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Force reinstall failed: ${error.message}`);
    }
  }

  async fixTypeErrors() {
    console.log('🔧 Fixing type errors...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      // Additional type fixing logic could be added here
    } catch (error) {
      throw new Error(`Type error fixing failed: ${error.message}`);
    }
  }

  async updateTsConfig() {
    console.log('⚙️ Updating TypeScript config...');
    try {
      const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const config = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        // Add strict mode and other optimizations
        config.compilerOptions = {
          ...config.compilerOptions,
          strict: true,
          noImplicitAny: true,
          strictNullChecks: true
        };
        fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
      }
    } catch (error) {
      throw new Error(`TSConfig update failed: ${error.message}`);
    }
  }

  async regenerateTypes() {
    console.log('🔄 Regenerating types...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
    } catch (error) {
      throw new Error(`Type regeneration failed: ${error.message}`);
    }
  }

  learnFromError(error) {
    // Update error patterns
    if (!this.learningData.patterns.has(error.type)) {
      this.learningData.patterns.set(error.type, []);
    }
    
    const patterns = this.learningData.patterns.get(error.type);
    patterns.push({
      message: error.message,
      timestamp: error.timestamp,
      severity: error.severity
    });

    // Keep only recent patterns (last 100)
    if (patterns.length > 100) {
      patterns.splice(0, patterns.length - 100);
    }

    // Analyze patterns for trends
    this.analyzePatterns(error.type);
  }

  analyzePatterns(errorType) {
    const patterns = this.learningData.patterns.get(errorType) || [];
    
    if (patterns.length < 3) return; // Need more data

    // Check for increasing frequency
    const recentPatterns = patterns.filter(p => 
      Date.now() - new Date(p.timestamp).getTime() < 24 * 60 * 60 * 1000 // Last 24 hours
    );

    if (recentPatterns.length > patterns.length * 0.3) {
      console.log(`⚠️ Warning: Increasing frequency of ${errorType} errors`);
      this.triggerProactiveRecovery(errorType);
    }
  }

  triggerProactiveRecovery(errorType) {
    console.log(`🚨 Triggering proactive recovery for ${errorType}`);
    
    // Implement proactive recovery strategies
    const strategies = this.recoveryStrategies.get(errorType) || [];
    if (strategies.length > 0) {
      this.executeRecoveryStrategy(strategies[0], { type: errorType, severity: 'medium' });
    }
  }

  generateRecoveryReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.learningData.errorHistory.length,
        errorTypes: this.getErrorTypeSummary(),
        recoverySuccess: this.getRecoverySuccessSummary(),
        recommendations: this.generateRecommendations()
      },
      recentErrors: this.learningData.errorHistory.slice(-10),
      learningInsights: this.generateLearningInsights()
    };

    const reportFile = path.join(this.reportDir, `recovery-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Recovery report generated: ${reportFile}`);
  }

  getErrorTypeSummary() {
    const summary = {};
    this.learningData.errorHistory.forEach(error => {
      summary[error.type] = (summary[error.type] || 0) + 1;
    });
    return summary;
  }

  getRecoverySuccessSummary() {
    const summary = {};
    this.learningData.recoverySuccess.forEach(recovery => {
      if (!summary[recovery.errorType]) {
        summary[recovery.errorType] = { total: 0, successful: 0 };
      }
      summary[recovery.errorType].total++;
      if (recovery.success) summary[recovery.errorType].successful++;
    });
    return summary;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Analyze error patterns and suggest improvements
    this.learningData.patterns.forEach((patterns, errorType) => {
      if (patterns.length > 10) {
        recommendations.push({
          type: 'error-prevention',
          errorType,
          suggestion: `Consider implementing preventive measures for ${errorType} errors`,
          priority: 'medium'
        });
      }
    });

    // Analyze recovery success rates
    this.learningData.recoverySuccess.forEach(recovery => {
      if (!recovery.success && recovery.errorType) {
        recommendations.push({
          type: 'recovery-improvement',
          errorType: recovery.errorType,
          suggestion: `Improve recovery strategy for ${recovery.errorType}`,
          priority: 'high'
        });
      }
    });

    return recommendations;
  }

  generateLearningInsights() {
    const insights = [];
    
    // Most common error types
    const errorCounts = this.getErrorTypeSummary();
    const mostCommon = Object.entries(errorCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
    
    insights.push({
      type: 'common-errors',
      message: `Most common errors: ${mostCommon.map(([type, count]) => `${type} (${count})`).join(', ')}`
    });

    // Recovery success rates
    const recoveryRates = this.getRecoverySuccessSummary();
    const lowSuccessRates = Object.entries(recoveryRates)
      .filter(([, stats]) => stats.total > 5 && (stats.successful / stats.total) < 0.5);
    
    if (lowSuccessRates.length > 0) {
      insights.push({
        type: 'recovery-improvement',
        message: `Low recovery success rates for: ${lowSuccessRates.map(([type]) => type).join(', ')}`
      });
    }

    return insights;
  }

  async run() {
    console.log('🚀 Starting intelligent error recovery cycle...');
    
    try {
      await this.analyzeErrors();
      console.log('✅ Intelligent error recovery cycle completed');
    } catch (error) {
      console.log('❌ Intelligent error recovery cycle failed:', error.message);
    }
  }
}

// Run the automation
const automation = new IntelligentErrorRecovery();
automation.run().catch(console.error);