#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔮 Starting Advanced Error Prediction System...');

class AdvancedErrorPrediction {
  constructor() {
    this.predictionResults = {
      errorPatterns: [],
      riskFactors: [],
      predictions: [],
      recommendations: [],
      riskScore: 0,
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'error-prediction-reports');
    this.ensureReportDirectory();
    this.riskThresholds = {
      highRisk: 0.7,
      mediumRisk: 0.4,
      lowRisk: 0.2
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async predictErrors() {
    console.log('🔮 Analyzing patterns and predicting potential errors...');
    
    try {
      await this.analyzeErrorPatterns();
      await this.analyzeCodeRiskFactors();
      await this.analyzeSystemBehavior();
      await this.generatePredictions();
      await this.calculateRiskScore();
      await this.generateRecommendations();
      await this.saveReport();
      
      console.log('✅ Advanced error prediction completed');
      return this.predictionResults;
    } catch (error) {
      console.error('❌ Advanced error prediction failed:', error.message);
      throw error;
    }
  }

  async analyzeErrorPatterns() {
    console.log('📊 Analyzing error patterns from logs...');
    
    try {
      const errorPatterns = [];
      const logSources = [
        'logs',
        'pm2-logs',
        'error-logs',
        'npm-debug.log',
        'yarn-error.log'
      ];
      
      logSources.forEach(source => {
        const logDir = path.join(process.cwd(), source);
        if (fs.existsSync(logDir)) {
          this.analyzeLogDirectory(logDir, errorPatterns);
        }
      });
      
      // Also check for PM2 logs
      try {
        const pm2Logs = execSync('pm2 logs --lines 1000 --nostream', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        this.analyzePM2Logs(pm2Logs, errorPatterns);
      } catch (error) {
        console.log('⚠️  PM2 logs analysis failed, continuing...');
      }
      
      this.predictionResults.errorPatterns = errorPatterns;
      console.log(`📊 Found ${errorPatterns.length} error patterns`);
      
    } catch (error) {
      console.log('⚠️  Error pattern analysis failed:', error.message);
    }
  }

  analyzeLogDirectory(logDir, errorPatterns) {
    try {
      const files = fs.readdirSync(logDir);
      files.forEach(file => {
        if (file.endsWith('.log') || file.endsWith('.txt')) {
          const filePath = path.join(logDir, file);
          this.analyzeLogFile(filePath, errorPatterns);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  analyzeLogFile(filePath, errorPatterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        if (this.isErrorLine(line)) {
          const pattern = this.extractErrorPattern(line);
          if (pattern) {
            this.addErrorPattern(errorPatterns, pattern, filePath, index + 1);
          }
        }
      });
    } catch (error) {
      // Skip files that can't be read
    }
  }

  isErrorLine(line) {
    const errorKeywords = [
      'error', 'Error', 'ERROR',
      'exception', 'Exception', 'EXCEPTION',
      'fail', 'Fail', 'FAIL',
      'crash', 'Crash', 'CRASH',
      'timeout', 'Timeout', 'TIMEOUT',
      'undefined', 'null', 'NaN'
    ];
    
    return errorKeywords.some(keyword => line.includes(keyword));
  }

  extractErrorPattern(line) {
    // Extract error type and message
    const errorMatch = line.match(/(\w+Error|Error|Exception|TypeError|ReferenceError|SyntaxError):?\s*(.+)/i);
    if (errorMatch) {
      return {
        type: errorMatch[1],
        message: errorMatch[2].trim(),
        severity: this.assessErrorSeverity(errorMatch[1], errorMatch[2])
      };
    }
    
    // Extract generic error patterns
    const genericMatch = line.match(/(\w+):\s*(.+)/);
    if (genericMatch) {
      return {
        type: 'GenericError',
        message: genericMatch[2].trim(),
        severity: 'medium'
      };
    }
    
    return null;
  }

  assessErrorSeverity(errorType, message) {
    const criticalErrors = ['SyntaxError', 'ReferenceError', 'TypeError'];
    const highErrors = ['NetworkError', 'TimeoutError', 'ValidationError'];
    
    if (criticalErrors.includes(errorType)) return 'critical';
    if (highErrors.includes(errorType)) return 'high';
    if (message.includes('fatal') || message.includes('critical')) return 'critical';
    if (message.includes('warning')) return 'low';
    
    return 'medium';
  }

  addErrorPattern(errorPatterns, pattern, file, line) {
    const existingPattern = errorPatterns.find(p => 
      p.type === pattern.type && p.message === pattern.message
    );
    
    if (existingPattern) {
      existingPattern.occurrences.push({ file, line });
      existingPattern.frequency++;
    } else {
      errorPatterns.push({
        ...pattern,
        occurrences: [{ file, line }],
        frequency: 1,
        firstSeen: new Date().toISOString(),
        lastSeen: new Date().toISOString()
      });
    }
  }

  analyzePM2Logs(pm2Logs, errorPatterns) {
    const lines = pm2Logs.split('\n');
    
    lines.forEach((line, index) => {
      if (this.isErrorLine(line)) {
        const pattern = this.extractErrorPattern(line);
        if (pattern) {
          this.addErrorPattern(errorPatterns, pattern, 'pm2-logs', index + 1);
        }
      }
    });
  }

  async analyzeCodeRiskFactors() {
    console.log('🔍 Analyzing code for risk factors...');
    
    try {
      const riskFactors = [];
      const sourceDirs = ['src', 'pages', 'components', 'utils', 'types'];
      
      sourceDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
          this.analyzeDirectoryForRisks(dir, riskFactors);
        }
      });
      
      this.predictionResults.riskFactors = riskFactors;
      console.log(`🔍 Found ${riskFactors.length} code risk factors`);
      
    } catch (error) {
      console.log('⚠️  Code risk analysis failed:', error.message);
    }
  }

  analyzeDirectoryForRisks(dir, riskFactors) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.analyzeDirectoryForRisks(fullPath, riskFactors);
        } else if (stat.isFile() && this.isSourceFile(item)) {
          this.analyzeSourceFileForRisks(fullPath, riskFactors);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  isSourceFile(filename) {
    const sourceExtensions = ['.ts', '.tsx', '.js', '.jsx'];
    return sourceExtensions.some(ext => filename.endsWith(ext));
  }

  analyzeSourceFileForRisks(filePath, riskFactors) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        // Check for async/await without try-catch
        if (line.includes('async') && line.includes('(') && !this.hasTryCatch(content, index)) {
          riskFactors.push({
            type: 'async_without_error_handling',
            file: filePath,
            line: index + 1,
            description: 'Async function without proper error handling',
            risk: 'medium',
            suggestion: 'Wrap async operations in try-catch blocks'
          });
        }
        
        // Check for potential null/undefined access
        if (line.includes('.') && !line.includes('?.') && !line.includes('&&')) {
          const objectAccess = line.match(/(\w+)\.(\w+)/g);
          if (objectAccess) {
            objectAccess.forEach(access => {
              const [obj, prop] = access.split('.');
              if (this.isPotentialNullAccess(obj, content, index)) {
                riskFactors.push({
                  type: 'potential_null_access',
                  file: filePath,
                  line: index + 1,
                  description: `Potential null/undefined access: ${access}`,
                  risk: 'high',
                  suggestion: 'Use optional chaining (?.) or null checks'
                });
              }
            });
          }
        }
        
        // Check for unhandled promises
        if (line.includes('new Promise') && !line.includes('.catch(') && !line.includes('.catch (')) {
          riskFactors.push({
            type: 'unhandled_promise',
            file: filePath,
            line: index + 1,
            description: 'Promise without error handling',
            risk: 'medium',
            suggestion: 'Add .catch() or try-catch for promise error handling'
          });
        }
      });
    } catch (error) {
      // Skip files that can't be read
    }
  }

  hasTryCatch(content, lineIndex) {
    const lines = content.split('\n');
    const startIndex = Math.max(0, lineIndex - 10);
    const endIndex = Math.min(lines.length, lineIndex + 10);
    
    for (let i = startIndex; i < endIndex; i++) {
      if (lines[i].includes('try {') || lines[i].includes('catch')) {
        return true;
      }
    }
    
    return false;
  }

  isPotentialNullAccess(objName, content, lineIndex) {
    const lines = content.split('\n');
    const startIndex = Math.max(0, lineIndex - 20);
    
    // Check if the object is initialized or checked for null
    for (let i = startIndex; i < lineIndex; i++) {
      const line = lines[i];
      if (line.includes(`${objName} = null`) || 
          line.includes(`${objName} = undefined`) ||
          line.includes(`if (${objName})`) ||
          line.includes(`if (!${objName})`)) {
        return false;
      }
    }
    
    return true;
  }

  async analyzeSystemBehavior() {
    console.log('📈 Analyzing system behavior patterns...');
    
    try {
      // Analyze PM2 process behavior
      const pm2Processes = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Processes);
      
      const behaviorPatterns = [];
      
      processes.forEach(proc => {
        if (proc.name.includes('automation') || proc.name.includes('sync')) {
          const pattern = this.analyzeProcessBehavior(proc);
          if (pattern) {
            behaviorPatterns.push(pattern);
          }
        }
      });
      
      this.predictionResults.systemBehavior = behaviorPatterns;
      console.log(`📈 Analyzed ${behaviorPatterns.length} system behavior patterns`);
      
    } catch (error) {
      console.log('⚠️  System behavior analysis failed:', error.message);
    }
  }

  analyzeProcessBehavior(process) {
    const restarts = process.pm2_env.restart_time || 0;
    const uptime = process.pm2_env.pm_uptime || 0;
    const memory = process.monit.memory || 0;
    const cpu = process.monit.cpu || 0;
    
    // Detect potential issues
    if (restarts > 5) {
      return {
        type: 'frequent_restarts',
        process: process.name,
        restarts: restarts,
        risk: 'high',
        description: `Process ${process.name} has restarted ${restarts} times`,
        suggestion: 'Investigate root cause of frequent restarts'
      };
    }
    
    if (memory > 500 * 1024 * 1024) { // 500MB
      return {
        type: 'high_memory_usage',
        process: process.name,
        memory: Math.round(memory / 1024 / 1024),
        risk: 'medium',
        description: `Process ${process.name} using ${Math.round(memory / 1024 / 1024)}MB memory`,
        suggestion: 'Check for memory leaks or optimize memory usage'
      };
    }
    
    if (cpu > 80) {
      return {
        type: 'high_cpu_usage',
        process: process.name,
        cpu: cpu,
        risk: 'medium',
        description: `Process ${process.name} using ${cpu}% CPU`,
        suggestion: 'Investigate high CPU usage patterns'
      };
    }
    
    return null;
  }

  async generatePredictions() {
    console.log('🔮 Generating error predictions...');
    
    const predictions = [];
    
    // Predict based on error patterns
    this.predictionResults.errorPatterns.forEach(pattern => {
      if (pattern.frequency > 3) {
        predictions.push({
          type: 'recurring_error',
          description: `Recurring ${pattern.type} error`,
          probability: Math.min(0.9, pattern.frequency * 0.2),
          timeframe: 'immediate',
          impact: pattern.severity === 'critical' ? 'high' : 'medium',
          suggestion: `Investigate and fix recurring ${pattern.type} error`
        });
      }
    });
    
    // Predict based on risk factors
    this.predictionResults.riskFactors.forEach(risk => {
      if (risk.risk === 'high') {
        predictions.push({
          type: 'code_risk',
          description: risk.description,
          probability: 0.7,
          timeframe: 'short_term',
          impact: 'medium',
          suggestion: risk.suggestion
        });
      }
    });
    
    // Predict based on system behavior
    if (this.predictionResults.systemBehavior) {
      this.predictionResults.systemBehavior.forEach(behavior => {
        if (behavior.risk === 'high') {
          predictions.push({
            type: 'system_issue',
            description: behavior.description,
            probability: 0.8,
            timeframe: 'immediate',
            impact: 'high',
            suggestion: behavior.suggestion
          });
        }
      });
    }
    
    // Sort by probability and impact
    predictions.sort((a, b) => {
      const impactOrder = { high: 3, medium: 2, low: 1 };
      return (b.probability * impactOrder[b.impact]) - (a.probability * impactOrder[a.impact]);
    });
    
    this.predictionResults.predictions = predictions;
    console.log(`🔮 Generated ${predictions.length} error predictions`);
  }

  async calculateRiskScore() {
    console.log('📊 Calculating overall risk score...');
    
    let riskScore = 0;
    let totalFactors = 0;
    
    // Calculate risk from error patterns
    this.predictionResults.errorPatterns.forEach(pattern => {
      const severityWeight = { critical: 1.0, high: 0.7, medium: 0.4, low: 0.1 };
      riskScore += pattern.frequency * severityWeight[pattern.severity] * 0.3;
      totalFactors++;
    });
    
    // Calculate risk from code factors
    this.predictionResults.riskFactors.forEach(risk => {
      const riskWeight = { high: 1.0, medium: 0.6, low: 0.2 };
      riskScore += riskWeight[risk.risk] * 0.4;
      totalFactors++;
    });
    
    // Calculate risk from system behavior
    if (this.predictionResults.systemBehavior) {
      this.predictionResults.systemBehavior.forEach(behavior => {
        const riskWeight = { high: 1.0, medium: 0.6, low: 0.2 };
        riskScore += riskWeight[behavior.risk] * 0.3;
        totalFactors++;
      });
    }
    
    // Normalize risk score
    if (totalFactors > 0) {
      this.predictionResults.riskScore = Math.min(1.0, riskScore / totalFactors);
    }
    
    console.log(`📊 Overall risk score: ${(this.predictionResults.riskScore * 100).toFixed(1)}%`);
  }

  async generateRecommendations() {
    console.log('💡 Generating prevention recommendations...');
    
    const recommendations = [];
    
    // High-risk predictions
    const highRiskPredictions = this.predictionResults.predictions.filter(p => 
      p.probability > 0.7 && p.impact === 'high'
    );
    
    highRiskPredictions.forEach(prediction => {
      recommendations.push({
        priority: 'critical',
        category: 'prevention',
        description: prediction.description,
        action: prediction.suggestion,
        timeframe: 'immediate'
      });
    });
    
    // Error pattern recommendations
    const frequentErrors = this.predictionResults.errorPatterns.filter(p => p.frequency > 2);
    frequentErrors.forEach(pattern => {
      recommendations.push({
        priority: 'high',
        category: 'error_handling',
        description: `Frequent ${pattern.type} errors`,
        action: `Implement proper error handling for ${pattern.type}`,
        timeframe: 'short_term'
      });
    });
    
    // Code quality recommendations
    const highRiskCode = this.predictionResults.riskFactors.filter(r => r.risk === 'high');
    highRiskCode.forEach(risk => {
      recommendations.push({
        priority: 'high',
        category: 'code_quality',
        description: risk.description,
        action: risk.suggestion,
        timeframe: 'short_term'
      });
    });
    
    // Sort by priority
    recommendations.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.predictionResults.recommendations = recommendations;
    console.log(`💡 Generated ${recommendations.length} prevention recommendations`);
  }

  async saveReport() {
    const reportPath = path.join(this.reportDir, `error-prediction-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.predictionResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-error-prediction-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.predictionResults, null, 2));
    
    console.log(`📄 Error prediction report saved to ${reportPath}`);
  }

  async displaySummary() {
    console.log('\n🔮 Advanced Error Prediction Summary');
    console.log('=' .repeat(50));
    console.log(`📊 Overall Risk Score: ${(this.predictionResults.riskScore * 100).toFixed(1)}%`);
    console.log(`📊 Error Patterns: ${this.predictionResults.errorPatterns.length}`);
    console.log(`🔍 Risk Factors: ${this.predictionResults.riskFactors.length}`);
    console.log(`🔮 Predictions: ${this.predictionResults.predictions.length}`);
    console.log(`💡 Recommendations: ${this.predictionResults.recommendations.length}`);
    
    if (this.predictionResults.predictions.length > 0) {
      console.log('\n🔮 Top Error Predictions:');
      this.predictionResults.predictions.slice(0, 3).forEach((pred, index) => {
        console.log(`${index + 1}. [${pred.probability.toFixed(1)}] ${pred.description}`);
        console.log(`   ⏰ Timeframe: ${pred.timeframe}`);
        console.log(`   💡 ${pred.suggestion}`);
      });
    }
    
    if (this.predictionResults.recommendations.length > 0) {
      console.log('\n💡 Top Prevention Recommendations:');
      this.predictionResults.recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority.toUpperCase()}] ${rec.description}`);
        console.log(`   🎯 ${rec.action}`);
        console.log(`   ⏰ ${rec.timeframe}`);
      });
    }
  }
}

// Main execution
async function main() {
  const predictor = new AdvancedErrorPrediction();
  
  try {
    await predictor.predictErrors();
    await predictor.displaySummary();
    
    // Exit successfully
    process.exit(0);
  } catch (error) {
    console.error('❌ Advanced Error Prediction failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = AdvancedErrorPrediction;