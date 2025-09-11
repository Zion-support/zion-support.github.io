#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ErrorPredictionAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      sourcePatterns: ['src/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
      ignorePatterns: ['node_modules/**', 'dist/**', 'build/**'],
      reportDir: 'error-prediction-reports',
      logFile: 'logs/error-prediction.log',
      historicalDataFile: 'data/error-prediction-history.json'
    };
    
    this.ensureDirectories();
    this.historicalData = this.loadHistoricalData();
  }

  ensureDirectories() {
    const dirs = [this.config.reportDir, 'logs', 'data'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    if (fs.existsSync('logs')) {
      fs.appendFileSync(this.config.logFile, logMessage);
    }
  }

  loadHistoricalData() {
    try {
      if (fs.existsSync(this.config.historicalDataFile)) {
        return JSON.parse(fs.readFileSync(this.config.historicalDataFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Warning: Could not load historical data: ${error.message}`);
    }
    
    return {
      predictions: [],
      actualErrors: [],
      accuracy: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  saveHistoricalData() {
    try {
      fs.writeFileSync(this.config.historicalDataFile, JSON.stringify(this.historicalData, null, 2));
    } catch (error) {
      this.log(`Warning: Could not save historical data: ${error.message}`);
    }
  }

  async predictErrors() {
    this.log('🔮 Starting Error Prediction Analysis...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: 0,
          predictedErrors: 0,
          highRiskFiles: 0,
          patterns: 0
        },
        details: {
          predictions: [],
          patterns: [],
          riskFactors: [],
          prevention: []
        },
        suggestions: [],
        recommendations: []
      };

      // Analyze error patterns
      await this.analyzeErrorPatterns(report);
      
      // Predict potential errors
      await this.predictPotentialErrors(report);
      
      // Analyze risk factors
      await this.analyzeRiskFactors(report);
      
      // Generate prevention strategies
      await this.generatePreventionStrategies(report);
      
      // Generate intelligent suggestions
      await this.generateIntelligentSuggestions(report);
      
      // Generate final report
      await this.generateReport(report);
      
      // Update historical data
      this.updateHistoricalData(report);
      
      this.log('✅ Error Prediction Analysis completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ Error during error prediction: ${error.message}`);
      throw error;
    }
  }

  async analyzeErrorPatterns(report) {
    this.log('🔍 Analyzing error patterns...');
    
    const sourceFiles = this.getSourceFiles();
    report.summary.totalFiles = sourceFiles.length;
    
    const patterns = [];
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const filePatterns = this.analyzeFilePatterns(content, file);
        patterns.push(...filePatterns);
      } catch (error) {
        this.log(`Warning: Could not analyze ${file}: ${error.message}`);
      }
    }
    
    report.details.patterns = patterns;
    report.summary.patterns = patterns.length;
  }

  analyzeFilePatterns(content, filePath) {
    const patterns = [];
    
    // Syntax error patterns
    const syntaxPatterns = [
      { regex: /function\s*\([^)]*\)\s*\{[^}]*$/, type: 'syntax', description: 'Unclosed function block' },
      { regex: /if\s*\([^)]*\)\s*\{[^}]*$/, type: 'syntax', description: 'Unclosed if block' },
      { regex: /for\s*\([^)]*\)\s*\{[^}]*$/, type: 'syntax', description: 'Unclosed for loop' },
      { regex: /while\s*\([^)]*\)\s*\{[^}]*$/, type: 'syntax', description: 'Unclosed while loop' }
    ];
    
    syntaxPatterns.forEach(pattern => {
      const matches = content.match(pattern.regex);
      if (matches) {
        patterns.push({
          file: filePath,
          type: pattern.type,
          description: pattern.description,
          risk: 'HIGH',
          suggestion: 'Check for missing closing braces'
        });
      }
    });
    
    // Runtime error patterns
    const runtimePatterns = [
      { regex: /\.map\([^)]*\)\.filter\([^)]*\)\.reduce\([^)]*\)/, type: 'runtime', description: 'Complex chained array methods' },
      { regex: /JSON\.parse\([^)]*\)/, type: 'runtime', description: 'JSON parsing without try-catch' },
      { regex: /eval\([^)]*\)/, type: 'runtime', description: 'Use of eval function' },
      { regex: /new\s+Date\([^)]*\)/, type: 'runtime', description: 'Date constructor without validation' }
    ];
    
    runtimePatterns.forEach(pattern => {
      const matches = content.match(pattern.regex);
      if (matches) {
        patterns.push({
          file: filePath,
          type: pattern.type,
          description: pattern.description,
          risk: 'MEDIUM',
          suggestion: 'Add proper error handling and validation'
        });
      }
    });
    
    // Build error patterns
    const buildPatterns = [
      { regex: /import\s+.*\s+from\s+['"`][^'"`]*['"`]/, type: 'build', description: 'Import statement' },
      { regex: /require\s*\(\s*['"`][^'"`]*['"`]\s*\)/, type: 'build', description: 'Require statement' }
    ];
    
    buildPatterns.forEach(pattern => {
      const matches = content.match(pattern.regex);
      if (matches) {
        // Check if the import path might be invalid
        const importPath = matches[0].match(/['"`]([^'"`]*)['"`]/)?.[1];
        if (importPath && !this.isValidImportPath(importPath)) {
          patterns.push({
            file: filePath,
            type: pattern.type,
            description: 'Potentially invalid import path',
            risk: 'MEDIUM',
            suggestion: 'Verify import path exists and is correct'
          });
        }
      }
    });
    
    return patterns;
  }

  isValidImportPath(importPath) {
    // Simple validation - check if path starts with common valid patterns
    const validPatterns = [
      /^\./,           // Relative paths
      /^\.\./,         // Parent directory paths
      /^[a-zA-Z@]/,    // Package names
      /^\/[a-zA-Z]/    // Absolute paths
    ];
    
    return validPatterns.some(pattern => pattern.test(importPath));
  }

  calculatePatternRisk(patternType, matchCount, content) {
    let risk = 'LOW';
    
    if (patternType === 'syntax') {
      risk = 'HIGH';
    } else if (patternType === 'runtime' && matchCount > 2) {
      risk = 'MEDIUM';
    } else if (patternType === 'build' && matchCount > 5) {
      risk = 'MEDIUM';
    }
    
    return risk;
  }

  generatePatternSuggestions(patternType, matches, content) {
    const suggestions = [];
    
    switch (patternType) {
      case 'syntax':
        suggestions.push('Review code structure and ensure proper block closure');
        suggestions.push('Use linting tools to catch syntax errors early');
        break;
      case 'runtime':
        suggestions.push('Add proper error handling with try-catch blocks');
        suggestions.push('Validate input data before processing');
        break;
      case 'build':
        suggestions.push('Verify all import paths are correct');
        suggestions.push('Check package.json for missing dependencies');
        break;
    }
    
    return suggestions;
  }

  async predictPotentialErrors(report) {
    this.log('🔮 Predicting potential errors...');
    
    const predictions = [];
    const sourceFiles = this.getSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileRisk = this.analyzeFileRisks(content, file);
        
        if (fileRisk.score > 6) {
          const prediction = this.createErrorPrediction('file', fileRisk.patterns, fileRisk);
          predictions.push(prediction);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    report.details.predictions = predictions;
    report.summary.predictedErrors = predictions.length;
  }

  createErrorPrediction(type, pattern, data) {
    return {
      type,
      pattern,
      data,
      confidence: this.calculateConfidence(data),
      timestamp: new Date().toISOString(),
      status: 'predicted'
    };
  }

  calculateConfidence(data) {
    // Calculate confidence based on risk factors
    let confidence = 50; // Base confidence
    
    if (data.risk === 'HIGH') confidence += 30;
    if (data.risk === 'MEDIUM') confidence += 15;
    
    // Adjust based on pattern frequency
    if (data.patterns && data.patterns.length > 3) confidence += 20;
    
    return Math.min(95, confidence);
  }

  analyzeFileRisks(content, filePath) {
    const riskFactors = {
      complexity: 0,
      patterns: 0,
      size: content.split('\n').length
    };
    
    // Calculate complexity-based risk
    const functions = (content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []).length;
    const conditions = (content.match(/if\s*\(|else\s*if|switch\s*\(|case\s+/g) || []).length;
    const loops = (content.match(/for\s*\(|while\s*\(|do\s*\{/g) || []).length;
    
    riskFactors.complexity = (functions + conditions + loops) / 10;
    
    // Count error-prone patterns
    const errorPatterns = [
      /console\.log/, /eval\(/, /JSON\.parse/, /new\s+Date\(/, /\.innerHTML/
    ];
    
    errorPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) riskFactors.patterns++;
    });
    
    // Calculate overall risk score (1-10)
    const score = Math.min(10, Math.max(1, 
      (riskFactors.complexity * 3) + 
      (riskFactors.patterns * 2) + 
      (riskFactors.size / 100)
    ));
    
    return {
      score: Math.round(score * 10) / 10,
      risk: score > 7 ? 'HIGH' : score > 4 ? 'MEDIUM' : 'LOW',
      factors: riskFactors,
      patterns: this.analyzeFilePatterns(content, filePath)
    };
  }

  async analyzeRiskFactors(report) {
    this.log('⚠️ Analyzing risk factors...');
    
    const riskFactors = [];
    const sourceFiles = this.getSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const risk = this.calculateFileRisk(content, file);
        
        if (risk.score > 5) {
          riskFactors.push({
            file,
            score: risk.score,
            factors: risk.factors,
            suggestions: [
              'Consider breaking down complex functions',
              'Add comprehensive error handling',
              'Implement input validation',
              'Use TypeScript for better type safety'
            ]
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    report.details.riskFactors = riskFactors;
    report.summary.highRiskFiles = riskFactors.length;
  }

  calculateFileRisk(content, filePath) {
    const factors = {
      lines: content.split('\n').length,
      functions: (content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []).length,
      complexity: 0,
      errorHandling: 0
    };
    
    // Calculate cyclomatic complexity
    const conditions = (content.match(/if\s*\(|else\s*if|switch\s*\(|case\s+/g) || []).length;
    const loops = (content.match(/for\s*\(|while\s*\(|do\s*\{/g) || []).length;
    factors.complexity = conditions + loops + 1;
    
    // Check for error handling
    const tryCatch = (content.match(/try\s*\{|catch\s*\(/g) || []).length;
    const errorChecks = (content.match(/if\s*\(.*error|if\s*\(.*Error/g) || []).length;
    factors.errorHandling = tryCatch + errorChecks;
    
    // Calculate risk score (1-10)
    const score = Math.min(10, Math.max(1, 
      (factors.lines / 100) * 2 + 
      (factors.complexity / 10) * 3 + 
      (factors.functions / 20) * 2 - 
      (factors.errorHandling * 0.5)
    ));
    
    return { score: Math.round(score * 10) / 10, factors };
  }

  async generatePreventionStrategies(report) {
    this.log('🛡️ Generating prevention strategies...');
    
    const strategies = [];
    
    // High-risk file strategies
    if (report.summary.highRiskFiles > 0) {
      strategies.push({
        priority: 'HIGH',
        category: 'Code Quality',
        strategy: 'Implement comprehensive code review process',
        action: 'Set up mandatory code reviews for high-risk files',
        timeline: 'Immediate'
      });
    }
    
    // Pattern-based strategies
    if (report.summary.patterns > 10) {
      strategies.push({
        priority: 'MEDIUM',
        category: 'Pattern Analysis',
        strategy: 'Establish coding standards and best practices',
        action: 'Create style guide and enforce with linting rules',
        timeline: '1 week'
      });
    }
    
    // Prediction-based strategies
    if (report.summary.predictedErrors > 5) {
      strategies.push({
        priority: 'MEDIUM',
        category: 'Error Prevention',
        strategy: 'Implement automated testing and validation',
        action: 'Add unit tests and integration tests for high-risk areas',
        timeline: '2 weeks'
      });
    }
    
    report.details.prevention = strategies;
  }

  async generateIntelligentSuggestions(report) {
    this.log('🧠 Generating intelligent suggestions...');
    
    const suggestions = [];
    
    // High priority suggestions
    if (report.summary.highRiskFiles > 3) {
      suggestions.push({
        priority: 'HIGH',
        category: 'Risk Management',
        message: 'Multiple high-risk files detected. Immediate attention required.',
        action: 'Prioritize refactoring and testing of high-risk files',
        impact: 'High'
      });
    }
    
    if (report.summary.predictedErrors > 10) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Error Prevention',
        message: 'High number of potential errors predicted.',
        action: 'Implement comprehensive testing strategy',
        impact: 'Medium'
      });
    }
    
    if (report.summary.patterns > 15) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Code Quality',
        message: 'Multiple error-prone patterns detected.',
        action: 'Establish coding standards and review process',
        impact: 'Medium'
      });
    }
    
    report.suggestions = suggestions;
  }

  async generateReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(this.config.reportDir, `error-prediction-${timestamp}.json`);
    const summaryFile = path.join(this.config.reportDir, `error-prediction-summary-${timestamp}.md`);
    
    // Save detailed JSON report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate human-readable summary
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📄 Detailed report saved to: ${reportFile}`);
    this.log(`📋 Summary report saved to: ${summaryFile}`);
    
    // Log summary to console
    console.log('\n' + '='.repeat(60));
    console.log('🔮 ERROR PREDICTION ANALYSIS SUMMARY');
    console.log('='.repeat(60));
    console.log(`📁 Total Files: ${report.summary.totalFiles}`);
    console.log(`🔮 Predicted Errors: ${report.summary.predictedErrors}`);
    console.log(`⚠️  High Risk Files: ${report.summary.highRiskFiles}`);
    console.log(`🔍 Patterns Detected: ${report.summary.patterns}`);
    console.log('='.repeat(60));
  }

  updateHistoricalData(report) {
    this.historicalData.predictions.push({
      timestamp: report.timestamp,
      predictions: report.summary.predictedErrors,
      patterns: report.summary.patterns,
      highRiskFiles: report.summary.highRiskFiles
    });
    
    this.historicalData.lastUpdated = new Date().toISOString();
    this.saveHistoricalData();
  }

  generateHumanReadableSummary(report) {
    let summary = `# Error Prediction Analysis Report\n\n`;
    summary += `**Generated:** ${report.timestamp}\n\n`;
    
    summary += `## Summary\n\n`;
    summary += `- **Total Files Analyzed:** ${report.summary.totalFiles}\n`;
    summary += `- **Predicted Errors:** ${report.summary.predictedErrors}\n`;
    summary += `- **High Risk Files:** ${report.summary.highRiskFiles}\n`;
    summary += `- **Patterns Detected:** ${report.summary.patterns}\n\n`;
    
    if (report.suggestions.length > 0) {
      summary += `## Priority Recommendations\n\n`;
      report.suggestions.forEach(suggestion => {
        summary += `### ${suggestion.priority} Priority: ${suggestion.category}\n`;
        summary += `${suggestion.message}\n\n`;
        summary += `**Action:** ${suggestion.action}\n`;
        summary += `**Impact:** ${suggestion.impact}\n\n`;
      });
    }
    
    if (report.details.prevention.length > 0) {
      summary += `## Prevention Strategies\n\n`;
      report.details.prevention.forEach(strategy => {
        summary += `### ${strategy.priority} Priority: ${strategy.category}\n`;
        summary += `${strategy.strategy}\n\n`;
        summary += `**Action:** ${strategy.action}\n`;
        summary += `**Timeline:** ${strategy.timeline}\n\n`;
      });
    }
    
    return summary;
  }

  getSourceFiles() {
    const files = [];
    
    this.config.sourcePatterns.forEach(pattern => {
      const matches = glob.sync(pattern, { ignore: this.config.ignorePatterns });
      files.push(...matches);
    });
    
    return files.filter(file => {
      const stats = fs.statSync(file);
      return stats.isFile() && stats.size > 0;
    });
  }

  async run() {
    try {
      this.log('🚀 Starting Error Prediction Automation...');
      
      const report = await this.predictErrors();
      
      this.log('✅ Error Prediction Automation completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ Error Prediction Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new ErrorPredictionAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = ErrorPredictionAutomation;