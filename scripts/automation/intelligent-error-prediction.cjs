#!/usr/bin/env node

/**
 * Intelligent Error Prediction & Prevention - PM2 Automation
 * Predicts and prevents potential errors before they occur
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentErrorPrediction {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'error-prediction.log');
    this.reportsDir = path.join(this.projectRoot, 'logs', 'error-prediction-reports');
    this.errorPatternsDB = path.join(this.projectRoot, 'logs', 'error-patterns-db.json');
    this.ensureLogsDirectory();
    this.loadErrorPatternsDB();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  loadErrorPatternsDB() {
    try {
      if (fs.existsSync(this.errorPatternsDB)) {
        this.errorPatternsDB = JSON.parse(fs.readFileSync(this.errorPatternsDB, 'utf8'));
      } else {
        this.errorPatternsDB = {
          patterns: {},
          predictions: [],
          preventedErrors: [],
          lastUpdated: new Date().toISOString()
        };
      }
    } catch (error) {
      this.errorPatternsDB = {
        patterns: {},
        predictions: [],
        preventedErrors: [],
        lastUpdated: new Date().toISOString()
      };
    }
  }

  saveErrorPatternsDB() {
    try {
      fs.writeFileSync(this.errorPatternsDB, JSON.stringify(this.errorPatternsDB, null, 2));
    } catch (error) {
      this.log(`Failed to save error patterns DB: ${error.message}`, 'ERROR');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runErrorPrediction() {
    this.log('🔮 Starting intelligent error prediction...');
    
    const predictionResults = {
      predictions: [],
      preventedErrors: [],
      riskScore: 0,
      timestamp: new Date().toISOString()
    };

    try {
      // 1. Analyze code patterns for error-prone code
      const errorPatterns = await this.analyzeErrorPatterns();
      predictionResults.errorPatterns = errorPatterns;

      // 2. Predict potential errors
      const predictions = await this.predictPotentialErrors(errorPatterns);
      predictionResults.predictions = predictions;

      // 3. Prevent predictable errors
      const preventedErrors = await this.preventPredictableErrors(predictions);
      predictionResults.preventedErrors = preventedErrors;

      // 4. Calculate risk score
      predictionResults.riskScore = this.calculateRiskScore(predictions, preventedErrors);

      // 5. Generate prediction report
      await this.generatePredictionReport(predictionResults);

      // 6. Update error patterns database
      this.updateErrorPatternsDB(predictionResults);

    } catch (error) {
      this.log(`Error prediction failed: ${error.message}`, 'ERROR');
      predictionResults.error = error.message;
    }

    return predictionResults;
  }

  async analyzeErrorPatterns() {
    this.log('🔍 Analyzing error patterns...');
    
    const patterns = {
      typeErrors: [],
      runtimeErrors: [],
      logicErrors: [],
      securityIssues: []
    };

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return patterns;

      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const filePatterns = this.analyzeFileErrorPatterns(content, file);
            
            patterns.typeErrors.push(...filePatterns.typeErrors);
            patterns.runtimeErrors.push(...filePatterns.runtimeErrors);
            patterns.logicErrors.push(...filePatterns.logicErrors);
            patterns.securityIssues.push(...filePatterns.securityIssues);
          } catch (error) {
            this.log(`Error analyzing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }

    } catch (error) {
      this.log(`Error pattern analysis failed: ${error.message}`, 'ERROR');
    }

    return patterns;
  }

  analyzeFileErrorPatterns(content, filePath) {
    const patterns = {
      typeErrors: [],
      runtimeErrors: [],
      logicErrors: [],
      securityIssues: []
    };

    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;

      // Type errors
      if (line.includes('any') && filePath.includes('.ts')) {
        patterns.typeErrors.push({
          type: 'ANY_TYPE_USAGE',
          message: 'any type usage can lead to runtime errors',
          file: filePath,
          line: lineNumber,
          severity: 'MEDIUM',
          suggestion: 'Use proper TypeScript types'
        });
      }

      if (line.includes('as any')) {
        patterns.typeErrors.push({
          type: 'TYPE_ASSERTION_ANY',
          message: 'Type assertion to any bypasses type checking',
          file: filePath,
          line: lineNumber,
          severity: 'HIGH',
          suggestion: 'Use proper type guards instead'
        });
      }

      // Runtime errors
      if (line.includes('undefined') && line.includes('.')) {
        patterns.runtimeErrors.push({
          type: 'POTENTIAL_UNDEFINED_ACCESS',
          message: 'Potential undefined property access',
          file: filePath,
          line: lineNumber,
          severity: 'HIGH',
          suggestion: 'Add null/undefined checks'
        });
      }

      if (line.includes('null') && line.includes('.')) {
        patterns.runtimeErrors.push({
          type: 'POTENTIAL_NULL_ACCESS',
          message: 'Potential null property access',
          file: filePath,
          line: lineNumber,
          severity: 'HIGH',
          suggestion: 'Add null checks before access'
        });
      }

      // Logic errors
      if (line.includes('==') && !line.includes('===')) {
        patterns.logicErrors.push({
          type: 'LOOSE_EQUALITY',
          message: 'Loose equality comparison can cause unexpected behavior',
          file: filePath,
          line: lineNumber,
          severity: 'MEDIUM',
          suggestion: 'Use strict equality (===)'
        });
      }

      if (line.includes('setTimeout') && line.includes('this.')) {
        patterns.logicErrors.push({
          type: 'THIS_CONTEXT_ISSUE',
          message: 'this context may be lost in setTimeout',
          file: filePath,
          line: lineNumber,
          severity: 'MEDIUM',
          suggestion: 'Use arrow function or bind this'
        });
      }

      // Security issues
      if (line.includes('innerHTML') && line.includes('=')) {
        patterns.securityIssues.push({
          type: 'XSS_VULNERABILITY',
          message: 'innerHTML assignment can lead to XSS attacks',
          file: filePath,
          line: lineNumber,
          severity: 'CRITICAL',
          suggestion: 'Use textContent or sanitize input'
        });
      }

      if (line.includes('eval(')) {
        patterns.securityIssues.push({
          type: 'CODE_INJECTION',
          message: 'eval() can execute arbitrary code',
          file: filePath,
          line: lineNumber,
          severity: 'CRITICAL',
          suggestion: 'Avoid eval(), use alternatives'
        });
      }
    }

    return patterns;
  }

  async predictPotentialErrors(errorPatterns) {
    this.log('🔮 Predicting potential errors...');
    
    const predictions = [];

    try {
      // Predict based on type errors
      for (const error of errorPatterns.typeErrors) {
        const prediction = this.predictErrorFromPattern(error);
        if (prediction) {
          predictions.push(prediction);
        }
      }

      // Predict based on runtime errors
      for (const error of errorPatterns.runtimeErrors) {
        const prediction = this.predictErrorFromPattern(error);
        if (prediction) {
          predictions.push(prediction);
        }
      }

      // Predict based on logic errors
      for (const error of errorPatterns.logicErrors) {
        const prediction = this.predictErrorFromPattern(error);
        if (prediction) {
          predictions.push(prediction);
        }
      }

      // Predict based on security issues
      for (const error of errorPatterns.securityIssues) {
        const prediction = this.predictErrorFromPattern(error);
        if (prediction) {
          predictions.push(prediction);
        }
      }

    } catch (error) {
      this.log(`Error prediction failed: ${error.message}`, 'ERROR');
    }

    return predictions;
  }

  predictErrorFromPattern(error) {
    const predictions = {
      'ANY_TYPE_USAGE': {
        likelihood: 'HIGH',
        impact: 'MEDIUM',
        description: 'Runtime type errors when accessing properties',
        timeframe: 'During development/testing',
        prevention: 'Add proper TypeScript types'
      },
      'TYPE_ASSERTION_ANY': {
        likelihood: 'HIGH',
        impact: 'HIGH',
        description: 'Type safety bypass leading to runtime errors',
        timeframe: 'Immediate',
        prevention: 'Use type guards and proper typing'
      },
      'POTENTIAL_UNDEFINED_ACCESS': {
        likelihood: 'MEDIUM',
        impact: 'HIGH',
        description: 'Application crash or unexpected behavior',
        timeframe: 'During runtime',
        prevention: 'Add null/undefined checks'
      },
      'POTENTIAL_NULL_ACCESS': {
        likelihood: 'MEDIUM',
        impact: 'HIGH',
        description: 'Application crash or unexpected behavior',
        timeframe: 'During runtime',
        prevention: 'Add null checks'
      },
      'LOOSE_EQUALITY': {
        likelihood: 'MEDIUM',
        impact: 'MEDIUM',
        description: 'Unexpected comparison results',
        timeframe: 'During runtime',
        prevention: 'Use strict equality operators'
      },
      'THIS_CONTEXT_ISSUE': {
        likelihood: 'MEDIUM',
        impact: 'MEDIUM',
        description: 'Incorrect this binding in callbacks',
        timeframe: 'During runtime',
        prevention: 'Use arrow functions or bind this'
      },
      'XSS_VULNERABILITY': {
        likelihood: 'LOW',
        impact: 'CRITICAL',
        description: 'Cross-site scripting attacks',
        timeframe: 'When user input is processed',
        prevention: 'Sanitize input and use safe DOM methods'
      },
      'CODE_INJECTION': {
        likelihood: 'LOW',
        impact: 'CRITICAL',
        description: 'Arbitrary code execution',
        timeframe: 'When eval() is called',
        prevention: 'Avoid eval(), use alternatives'
      }
    };

    const prediction = predictions[error.type];
    if (prediction) {
      return {
        ...prediction,
        originalError: error,
        predictionId: this.generatePredictionId(),
        timestamp: new Date().toISOString()
      };
    }

    return null;
  }

  generatePredictionId() {
    return `pred_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async preventPredictableErrors(predictions) {
    this.log('🛡️ Preventing predictable errors...');
    
    const preventedErrors = [];

    try {
      for (const prediction of predictions) {
        const prevention = await this.applyErrorPrevention(prediction);
        if (prevention) {
          preventedErrors.push(prevention);
        }
      }

    } catch (error) {
      this.log(`Error prevention failed: ${error.message}`, 'ERROR');
    }

    return preventedErrors;
  }

  async applyErrorPrevention(prediction) {
    try {
      const error = prediction.originalError;
      
      switch (error.type) {
        case 'ANY_TYPE_USAGE':
          return await this.preventAnyTypeUsage(error);
        case 'TYPE_ASSERTION_ANY':
          return await this.preventTypeAssertionAny(error);
        case 'POTENTIAL_UNDEFINED_ACCESS':
          return await this.preventUndefinedAccess(error);
        case 'POTENTIAL_NULL_ACCESS':
          return await this.preventNullAccess(error);
        case 'LOOSE_EQUALITY':
          return await this.preventLooseEquality(error);
        case 'THIS_CONTEXT_ISSUE':
          return await this.preventThisContextIssue(error);
        case 'XSS_VULNERABILITY':
          return await this.preventXSSVulnerability(error);
        case 'CODE_INJECTION':
          return await this.preventCodeInjection(error);
        default:
          return null;
      }
    } catch (error) {
      this.log(`Failed to apply error prevention: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventAnyTypeUsage(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      if (lines[error.line - 1].includes('any')) {
        // Try to infer a better type
        const betterType = this.inferBetterType(lines[error.line - 1]);
        
        if (betterType) {
          const fixedLine = lines[error.line - 1].replace(/: any/g, `: ${betterType}`);
          lines[error.line - 1] = fixedLine;
          
          fs.writeFileSync(error.file, lines.join('\n'));
          
          return {
            type: 'ANY_TYPE_FIXED',
            file: error.file,
            line: error.line,
            originalType: 'any',
            newType: betterType,
            timestamp: new Date().toISOString()
          };
        }
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent any type usage: ${error.message}`, 'ERROR');
      return null;
    }
  }

  inferBetterType(line) {
    // Simple type inference based on context
    if (line.includes('string') || line.includes('"') || line.includes("'")) {
      return 'string';
    }
    if (line.includes('number') || line.includes('parseInt') || line.includes('parseFloat')) {
      return 'number';
    }
    if (line.includes('boolean') || line.includes('true') || line.includes('false')) {
      return 'boolean';
    }
    if (line.includes('[]') || line.includes('Array')) {
      return 'any[]';
    }
    if (line.includes('{}') || line.includes('object')) {
      return 'Record<string, any>';
    }
    
    return 'unknown';
  }

  async preventTypeAssertionAny(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      if (lines[error.line - 1].includes('as any')) {
        // Replace with proper type guard or unknown
        const fixedLine = lines[error.line - 1].replace(/ as any/g, ' as unknown');
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'TYPE_ASSERTION_FIXED',
          file: error.file,
          line: error.line,
          originalType: 'any',
          newType: 'unknown',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent type assertion any: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventUndefinedAccess(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      const line = lines[error.line - 1];
      if (line.includes('undefined') && line.includes('.')) {
        // Add optional chaining or null check
        const fixedLine = line.replace(/(\w+)\.(\w+)/g, '$1?.$2');
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'UNDEFINED_ACCESS_FIXED',
          file: error.file,
          line: error.line,
          fix: 'Added optional chaining',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent undefined access: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventNullAccess(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      const line = lines[error.line - 1];
      if (line.includes('null') && line.includes('.')) {
        // Add null check
        const fixedLine = line.replace(/(\w+)\.(\w+)/g, '$1?.$2');
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'NULL_ACCESS_FIXED',
          file: error.file,
          line: error.line,
          fix: 'Added null check with optional chaining',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent null access: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventLooseEquality(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      const line = lines[error.line - 1];
      if (line.includes('==') && !line.includes('===')) {
        // Replace with strict equality
        const fixedLine = line.replace(/==/g, '===');
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'LOOSE_EQUALITY_FIXED',
          file: error.file,
          line: error.line,
          fix: 'Replaced == with ===',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent loose equality: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventThisContextIssue(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      const line = lines[error.line - 1];
      if (line.includes('setTimeout') && line.includes('this.')) {
        // Convert to arrow function
        const fixedLine = line.replace(/setTimeout\(function\(\)\s*\{([^}]*)\}/g, 'setTimeout(() => {$1}');
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'THIS_CONTEXT_FIXED',
          file: error.file,
          line: error.line,
          fix: 'Converted to arrow function to preserve this context',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent this context issue: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventXSSVulnerability(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      const line = lines[error.line - 1];
      if (line.includes('innerHTML') && line.includes('=')) {
        // Replace with textContent or add sanitization
        const fixedLine = line.replace(/innerHTML\s*=\s*([^;]+)/g, 'textContent = $1');
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'XSS_VULNERABILITY_FIXED',
          file: error.file,
          line: error.line,
          fix: 'Replaced innerHTML with textContent for security',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent XSS vulnerability: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async preventCodeInjection(error) {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      const line = lines[error.line - 1];
      if (line.includes('eval(')) {
        // Comment out eval usage and add warning
        const fixedLine = `// SECURITY: eval() usage removed - ${line}`;
        lines[error.line - 1] = fixedLine;
        
        fs.writeFileSync(error.file, lines.join('\n'));
        
        return {
          type: 'CODE_INJECTION_PREVENTED',
          file: error.file,
          line: error.line,
          fix: 'Commented out eval() usage for security',
          timestamp: new Date().toISOString()
        };
      }
      
      return null;
    } catch (error) {
      this.log(`Failed to prevent code injection: ${error.message}`, 'ERROR');
      return null;
    }
  }

  calculateRiskScore(predictions, preventedErrors) {
    let riskScore = 0;
    
    // Calculate risk based on predictions
    for (const prediction of predictions) {
      const severity = this.getSeverityScore(prediction.originalError.severity);
      const likelihood = this.getLikelihoodScore(prediction.likelihood);
      const impact = this.getImpactScore(prediction.impact);
      
      riskScore += severity * likelihood * impact;
    }
    
    // Reduce risk score for prevented errors
    riskScore -= preventedErrors.length * 10;
    
    // Ensure risk score is between 0 and 100
    return Math.max(0, Math.min(100, Math.round(riskScore)));
  }

  getSeverityScore(severity) {
    const scores = { 'LOW': 1, 'MEDIUM': 2, 'HIGH': 3, 'CRITICAL': 4 };
    return scores[severity] || 1;
  }

  getLikelihoodScore(likelihood) {
    const scores = { 'LOW': 1, 'MEDIUM': 2, 'HIGH': 3 };
    return scores[likelihood] || 1;
  }

  getImpactScore(impact) {
    const scores = { 'LOW': 1, 'MEDIUM': 2, 'HIGH': 3, 'CRITICAL': 4 };
    return scores[impact] || 1;
  }

  async generatePredictionReport(predictionResults) {
    this.log('📊 Generating error prediction report...');
    
    try {
      const reportPath = path.join(this.reportsDir, `error-prediction-${Date.now()}.json`);
      const report = {
        summary: {
          predictions: predictionResults.predictions.length,
          preventedErrors: predictionResults.preventedErrors.length,
          riskScore: predictionResults.riskScore,
          timestamp: predictionResults.timestamp
        },
        details: predictionResults,
        recommendations: this.generatePreventionRecommendations(predictionResults)
      };

      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      // Generate markdown summary
      const markdownPath = path.join(this.reportsDir, `error-prediction-${Date.now()}.md`);
      const markdown = this.generateMarkdownReport(report);
      fs.writeFileSync(markdownPath, markdown);

      this.log(`Error prediction report generated: ${reportPath}`);
      this.log(`Markdown summary generated: ${markdownPath}`);

    } catch (error) {
      this.log(`Failed to generate error prediction report: ${error.message}`, 'ERROR');
    }
  }

  generatePreventionRecommendations(predictionResults) {
    const recommendations = [];

    if (predictionResults.riskScore > 70) {
      recommendations.push({
        priority: 'CRITICAL',
        action: 'Immediate code review and fixes required',
        description: 'High risk score indicates critical issues'
      });
    }

    if (predictionResults.predictions.length > 10) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Implement comprehensive error prevention strategy',
        description: 'Large number of predictions suggests systematic issues'
      });
    }

    if (predictionResults.preventedErrors.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Review and test prevented error fixes',
        description: 'Ensure automatic fixes work correctly'
      });
    }

    return recommendations;
  }

  generateMarkdownReport(report) {
    return `# Intelligent Error Prediction Report

## Summary
- **Predictions**: ${report.summary.predictions}
- **Prevented Errors**: ${report.summary.preventedErrors}
- **Risk Score**: ${report.summary.riskScore}/100
- **Timestamp**: ${report.summary.timestamp}

## Risk Assessment
${this.generateRiskAssessment(report.details)}

## Predictions
${this.generatePredictionsList(report.details.predictions)}

## Prevented Errors
${this.generatePreventedErrorsList(report.details.preventedErrors)}

## Recommendations
${this.generateRecommendationsList(report.recommendations)}

---
*Generated by Intelligent Error Prediction & Prevention Automation*
`;
  }

  generateRiskAssessment(details) {
    const riskScore = details.riskScore;
    
    if (riskScore >= 80) {
      return '**CRITICAL RISK** - Immediate action required';
    } else if (riskScore >= 60) {
      return '**HIGH RISK** - Action required within 24 hours';
    } else if (riskScore >= 40) {
      return '**MEDIUM RISK** - Action required within 1 week';
    } else if (riskScore >= 20) {
      return '**LOW RISK** - Monitor and address when possible';
    } else {
      return '**MINIMAL RISK** - Good code quality';
    }
  }

  generatePredictionsList(predictions) {
    if (predictions.length === 0) return 'No predictions made.';
    
    return predictions.map(pred => 
      `- **${pred.originalError.type}** (${pred.likelihood} likelihood, ${pred.impact} impact): ${pred.description}`
    ).join('\n');
  }

  generatePreventedErrorsList(preventedErrors) {
    if (preventedErrors.length === 0) return 'No errors prevented.';
    
    return preventedErrors.map(error => 
      `- **${error.type}**: ${error.fix} (${error.file}:${error.line})`
    ).join('\n');
  }

  generateRecommendationsList(recommendations) {
    if (recommendations.length === 0) return 'No recommendations.';
    
    return recommendations.map(rec => 
      `- **${rec.priority}**: ${rec.action} - ${rec.description}`
    ).join('\n');
  }

  updateErrorPatternsDB(predictionResults) {
    this.errorPatternsDB.lastUpdated = new Date().toISOString();
    
    // Update predictions
    this.errorPatternsDB.predictions.push({
      timestamp: predictionResults.timestamp,
      predictions: predictionResults.predictions
    });
    
    // Update prevented errors
    if (predictionResults.preventedErrors.length > 0) {
      this.errorPatternsDB.preventedErrors.push({
        timestamp: predictionResults.timestamp,
        preventedErrors: predictionResults.preventedErrors
      });
    }
    
    // Keep only last 100 entries
    if (this.errorPatternsDB.predictions.length > 100) {
      this.errorPatternsDB.predictions = this.errorPatternsDB.predictions.slice(-100);
    }
    
    this.saveErrorPatternsDB();
  }

  async getAllFiles(dirPath) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const subFiles = await this.getAllFiles(fullPath);
          files.push(...subFiles);
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dirPath}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  async start() {
    this.log('🚀 Intelligent Error Prediction started');
    
    // Run initial prediction
    await this.runErrorPrediction();
    
    // Schedule periodic predictions
    setInterval(async () => {
      await this.runErrorPrediction();
    }, 4 * 60 * 60 * 1000); // Every 4 hours
  }
}

// Main execution
if (require.main === module) {
  const automation = new IntelligentErrorPrediction();
  
  if (process.argv.includes('--start')) {
    automation.start();
  } else {
    automation.runErrorPrediction().then(() => {
      process.exit(0);
    }).catch((error) => {
      console.error('Intelligent Error Prediction failed:', error);
      process.exit(1);
    });
  }
}

module.exports = IntelligentErrorPrediction;