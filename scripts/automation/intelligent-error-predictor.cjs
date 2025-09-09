#!/usr/bin/env node

/**
 * Intelligent Error Prediction & Prevention System
 * Uses ML patterns to predict and prevent errors before they occur
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentErrorPredictor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'error-predictor.log');
    this.errorPatterns = path.join(this.projectRoot, 'logs', 'error-patterns.json');
    this.predictionReport = path.join(this.projectRoot, 'logs', 'error-predictions.json');
    this.ensureLogsDirectory();
    this.errorPatternsDB = this.loadErrorPatterns();
    this.predictionHistory = this.loadPredictionHistory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadErrorPatterns() {
    const defaultPatterns = {
      // Runtime error patterns
      runtime: {
        'undefined-variable': {
          pattern: /(\w+)\s*=\s*undefined/,
          risk: 'HIGH',
          prevention: 'Add null checks and default values',
          autoFix: true,
          fixPattern: /(\w+)\s*=\s*undefined/g,
          fixReplacement: '$1 = $1 || null'
        },
        'null-access': {
          pattern: /(\w+)\.(\w+)/g,
          risk: 'MEDIUM',
          prevention: 'Use optional chaining or null checks',
          autoFix: true,
          fixPattern: /(\w+)\.(\w+)/g,
          fixReplacement: '$1?.$2'
        },
        'async-error': {
          pattern: /async\s+function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/g,
          risk: 'MEDIUM',
          prevention: 'Add proper error handling with try-catch',
          autoFix: false
        }
      },
      
      // TypeScript error patterns
      typescript: {
        'any-type': {
          pattern: /:\s*any\b/g,
          risk: 'MEDIUM',
          prevention: 'Replace with proper types',
          autoFix: false
        },
        'unused-import': {
          pattern: /import\s+\{[^}]*\}\s+from\s+['"][^'"]+['"]/g,
          risk: 'LOW',
          prevention: 'Remove unused imports',
          autoFix: true,
          fixPattern: /import\s+\{[^}]*\}\s+from\s+['"][^'"]+['"]/g,
          fixReplacement: '' // Will be handled by specific logic
        }
      },
      
      // React error patterns
      react: {
        'missing-key': {
          pattern: /\.map\s*\([^)]*\)\s*=>\s*<[^>]*>/g,
          risk: 'MEDIUM',
          prevention: 'Add unique key prop to mapped elements',
          autoFix: false
        },
        'state-update-race': {
          pattern: /setState\s*\([^)]*\)/g,
          risk: 'HIGH',
          prevention: 'Use functional state updates',
          autoFix: true,
          fixPattern: /setState\s*\(([^)]+)\)/g,
          fixReplacement: 'setState(prevState => $1)'
        },
        'memory-leak': {
          pattern: /useEffect\s*\([^)]*\)/g,
          risk: 'HIGH',
          prevention: 'Add cleanup function to useEffect',
          autoFix: false
        }
      },
      
      // Build error patterns
      build: {
        'circular-dependency': {
          pattern: /import\s+.*\s+from\s+['"][^'"]*['"]/g,
          risk: 'HIGH',
          prevention: 'Restructure imports to avoid circular dependencies',
          autoFix: false
        },
        'large-bundle': {
          pattern: /import\s+.*\s+from\s+['"][^'"]*['"]/g,
          risk: 'MEDIUM',
          prevention: 'Use dynamic imports and code splitting',
          autoFix: false
        }
      }
    };

    try {
      if (fs.existsSync(this.errorPatterns)) {
        const savedPatterns = JSON.parse(fs.readFileSync(this.errorPatterns, 'utf8'));
        return { ...defaultPatterns, ...savedPatterns };
      }
    } catch (error) {
      this.log(`⚠️ Failed to load saved patterns: ${error.message}`, 'WARN');
    }

    return defaultPatterns;
  }

  loadPredictionHistory() {
    try {
      const historyPath = path.join(this.projectRoot, 'logs', 'prediction-history.json');
      if (fs.existsSync(historyPath)) {
        return JSON.parse(fs.readFileSync(historyPath, 'utf8'));
      }
    } catch (error) {
      this.log(`⚠️ Failed to load prediction history: ${error.message}`, 'WARN');
    }

    return {
      predictions: [],
      accuracy: 0,
      totalPredictions: 0,
      correctPredictions: 0
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async predictErrors() {
    this.log('🔮 Starting Intelligent Error Prediction...');
    
    const predictions = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPredictions: 0,
        highRisk: 0,
        mediumRisk: 0,
        lowRisk: 0,
        autoFixable: 0
      },
      predictions: [],
      prevention: [],
      autoFixes: []
    };

    try {
      // Analyze source code for error patterns
      const sourceFiles = this.findSourceFiles();
      
      for (const file of sourceFiles) {
        const filePredictions = await this.analyzeFileForErrors(file);
        if (filePredictions.length > 0) {
          predictions.predictions.push({
            file,
            predictions: filePredictions
          });
          
          // Update summary
          filePredictions.forEach(pred => {
            predictions.summary.totalPredictions++;
            switch (pred.risk) {
              case 'HIGH': predictions.summary.highRisk++; break;
              case 'MEDIUM': predictions.summary.mediumRisk++; break;
              case 'LOW': predictions.summary.lowRisk++; break;
            }
            if (pred.autoFixable) predictions.summary.autoFixable++;
          });
        }
      }

      // Generate prevention strategies
      predictions.prevention = this.generatePreventionStrategies(predictions);
      
      // Apply auto-fixes
      predictions.autoFixes = await this.applyAutoFixes(predictions.predictions);
      
      // Save predictions
      await this.savePredictionReport(predictions);
      
      // Update prediction history
      await this.updatePredictionHistory(predictions);
      
      this.log(`✅ Error prediction complete. Found ${predictions.summary.totalPredictions} potential issues`);
      
    } catch (error) {
      this.log(`❌ Error prediction failed: ${error.message}`, 'ERROR');
    }

    return predictions;
  }

  async analyzeFileForErrors(filePath) {
    const predictions = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Analyze each pattern category
      for (const [category, patterns] of Object.entries(this.errorPatterns)) {
        for (const [patternName, patternData] of Object.entries(patterns)) {
          const matches = this.findPatternMatches(content, patternData.pattern);
          
          if (matches.length > 0) {
            const prediction = {
              type: patternName,
              category: category,
              risk: patternData.risk,
              prevention: patternData.prevention,
              autoFixable: patternData.autoFixable || false,
              matches: matches.length,
              lines: this.findLineNumbers(content, patternData.pattern),
              confidence: this.calculateConfidence(matches.length, patternData.risk),
              context: this.extractContext(content, matches, patternData.pattern)
            };
            
            predictions.push(prediction);
          }
        }
      }
      
      // Additional intelligent analysis
      predictions.push(...this.analyzeCodeStructure(content, lines));
      predictions.push(...this.analyzeDependencyRisks(content));
      predictions.push(...this.analyzePerformanceRisks(content));
      
    } catch (error) {
      this.log(`❌ Failed to analyze ${filePath}: ${error.message}`, 'ERROR');
    }

    return predictions;
  }

  findPatternMatches(content, pattern) {
    const matches = [];
    let match;
    
    // Reset regex lastIndex
    pattern.lastIndex = 0;
    
    while ((match = pattern.exec(content)) !== null) {
      matches.push({
        text: match[0],
        index: match.index,
        groups: match.slice(1)
      });
    }
    
    return matches;
  }

  findLineNumbers(content, pattern) {
    const lines = content.split('\n');
    const lineNumbers = [];
    
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        lineNumbers.push(index + 1);
      }
      // Reset regex lastIndex for next iteration
      pattern.lastIndex = 0;
    });
    
    return lineNumbers;
  }

  calculateConfidence(matchCount, risk) {
    let baseConfidence = 0.5;
    
    // Higher confidence for more matches
    if (matchCount > 5) baseConfidence += 0.3;
    else if (matchCount > 2) baseConfidence += 0.2;
    else if (matchCount > 0) baseConfidence += 0.1;
    
    // Risk-based confidence adjustment
    switch (risk) {
      case 'HIGH': baseConfidence += 0.2; break;
      case 'MEDIUM': baseConfidence += 0.1; break;
      case 'LOW': baseConfidence += 0.05; break;
    }
    
    return Math.min(0.95, baseConfidence);
  }

  extractContext(content, matches, pattern) {
    const contexts = [];
    
    for (const match of matches) {
      const start = Math.max(0, match.index - 100);
      const end = Math.min(content.length, match.index + match.text.length + 100);
      const context = content.substring(start, end);
      
      contexts.push({
        before: content.substring(start, match.index),
        match: match.text,
        after: content.substring(match.index + match.text.length, end)
      });
    }
    
    return contexts;
  }

  analyzeCodeStructure(content, lines) {
    const predictions = [];
    
    // Check for deeply nested structures
    let maxDepth = 0;
    let currentDepth = 0;
    
    for (const line of lines) {
      if (line.includes('{')) currentDepth++;
      if (line.includes('}')) currentDepth--;
      maxDepth = Math.max(maxDepth, currentDepth);
    }
    
    if (maxDepth > 5) {
      predictions.push({
        type: 'deep-nesting',
        category: 'structure',
        risk: 'MEDIUM',
        prevention: 'Refactor to reduce nesting depth',
        autoFixable: false,
        matches: 1,
        lines: [maxDepth],
        confidence: 0.8,
        context: [{ before: '', match: `Max nesting depth: ${maxDepth}`, after: '' }]
      });
    }
    
    // Check for long functions
    const longFunctions = this.findLongFunctions(lines);
    longFunctions.forEach(func => {
      predictions.push({
        type: 'long-function',
        category: 'structure',
        risk: 'MEDIUM',
        prevention: 'Break down into smaller functions',
        autoFixable: false,
        matches: 1,
        lines: [func.startLine],
        confidence: 0.7,
        context: [{ before: '', match: `Function "${func.name}" is ${func.lines} lines long`, after: '' }]
      });
    });
    
    return predictions;
  }

  findLongFunctions(lines) {
    const functions = [];
    let inFunction = false;
    let functionStart = 0;
    let functionName = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.match(/function\s+\w+\s*\(/) || line.match(/const\s+\w+\s*=\s*\([^)]*\)\s*=>/)) {
        if (inFunction) {
          // End previous function
          functions.push({
            name: functionName,
            startLine: functionStart + 1,
            lines: i - functionStart
          });
        }
        
        inFunction = true;
        functionStart = i;
        functionName = line.match(/(?:function\s+(\w+)|const\s+(\w+)\s*=)/)?.[1] || 'anonymous';
      } else if (inFunction && line.trim() === '}') {
        // End current function
        functions.push({
          name: functionName,
          startLine: functionStart + 1,
          lines: i - functionStart + 1
        });
        inFunction = false;
      }
    }
    
    return functions.filter(f => f.lines > 30);
  }

  analyzeDependencyRisks(content) {
    const predictions = [];
    
    // Check for potential circular dependencies
    const imports = content.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/g) || [];
    const importPaths = imports.map(imp => {
      const match = imp.match(/from\s+['"]([^'"]+)['"]/);
      return match ? match[1] : '';
    }).filter(Boolean);
    
    // Simple circular dependency detection
    if (importPaths.length > 10) {
      predictions.push({
        type: 'many-imports',
        category: 'dependency',
        risk: 'MEDIUM',
        prevention: 'Consider consolidating imports or using barrel exports',
        autoFixable: false,
        matches: importPaths.length,
        lines: [],
        confidence: 0.6,
        context: [{ before: '', match: `File has ${importPaths.length} imports`, after: '' }]
      });
    }
    
    return predictions;
  }

  analyzePerformanceRisks(content) {
    const predictions = [];
    
    // Check for expensive operations in loops
    if (content.includes('for') && content.includes('.map(')) {
      predictions.push({
        type: 'expensive-loop-operation',
        category: 'performance',
        risk: 'MEDIUM',
        prevention: 'Move expensive operations outside loops or use memoization',
        autoFixable: false,
        matches: 1,
        lines: [],
        confidence: 0.7,
        context: [{ before: '', match: 'Expensive operation detected in loop', after: '' }]
      });
    }
    
    // Check for missing React optimizations
    if (content.includes('React') && content.includes('function') && !content.includes('React.memo')) {
      predictions.push({
        type: 'missing-react-optimization',
        category: 'performance',
        risk: 'LOW',
        prevention: 'Consider using React.memo for pure components',
        autoFixable: false,
        matches: 1,
        lines: [],
        confidence: 0.5,
        context: [{ before: '', match: 'React component without optimization', after: '' }]
      });
    }
    
    return predictions;
  }

  generatePreventionStrategies(predictions) {
    const strategies = [];
    
    // Group predictions by category and risk
    const groupedPredictions = {};
    
    predictions.predictions.forEach(filePred => {
      filePred.predictions.forEach(pred => {
        if (!groupedPredictions[pred.category]) {
          groupedPredictions[pred.category] = [];
        }
        groupedPredictions[pred.category].push(pred);
      });
    });
    
    // Generate strategies for each category
    for (const [category, preds] of Object.entries(groupedPredictions)) {
      const highRisk = preds.filter(p => p.risk === 'HIGH');
      const mediumRisk = preds.filter(p => p.risk === 'MEDIUM');
      
      if (highRisk.length > 0) {
        strategies.push({
          category,
          priority: 'IMMEDIATE',
          title: `High-risk ${category} issues detected`,
          description: `Found ${highRisk.length} high-risk issues in ${category}`,
          actions: highRisk.map(p => p.prevention),
          estimatedTime: '1-2 hours'
        });
      }
      
      if (mediumRisk.length > 0) {
        strategies.push({
          category,
          priority: 'HIGH',
          title: `Medium-risk ${category} issues detected`,
          description: `Found ${mediumRisk.length} medium-risk issues in ${category}`,
          actions: mediumRisk.map(p => p.prevention),
          estimatedTime: '2-4 hours'
        });
      }
    }
    
    return strategies;
  }

  async applyAutoFixes(filePredictions) {
    this.log('🤖 Applying auto-fixes...');
    
    const appliedFixes = [];
    
    for (const filePred of filePredictions) {
      const file = filePred.file;
      const predictions = filePred.predictions.filter(p => p.autoFixable);
      
      if (predictions.length === 0) continue;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modifiedContent = content;
        let fileFixed = false;
        
        for (const pred of predictions) {
          const patternData = this.findPatternData(pred.type, pred.category);
          if (patternData && patternData.autoFix && patternData.fixPattern && patternData.fixReplacement) {
            const originalContent = modifiedContent;
            modifiedContent = modifiedContent.replace(patternData.fixPattern, patternData.fixReplacement);
            
            if (modifiedContent !== originalContent) {
              fileFixed = true;
              appliedFixes.push({
                file,
                prediction: pred.type,
                status: 'fixed',
                description: `Auto-fixed ${pred.type} issue`
              });
            }
          }
        }
        
        if (fileFixed) {
          // Create backup
          const backupPath = `${file}.backup.${Date.now()}`;
          fs.writeFileSync(backupPath, content);
          
          // Apply fixes
          fs.writeFileSync(file, modifiedContent);
          
          this.log(`✅ Auto-fixed issues in ${file}`);
        }
        
      } catch (error) {
        this.log(`❌ Failed to auto-fix ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    return appliedFixes;
  }

  findPatternData(type, category) {
    return this.errorPatterns[category]?.[type] || null;
  }

  async savePredictionReport(predictions) {
    try {
      fs.writeFileSync(this.predictionReport, JSON.stringify(predictions, null, 2));
      this.log(`📊 Prediction report saved to ${this.predictionReport}`);
    } catch (error) {
      this.log(`❌ Failed to save prediction report: ${error.message}`, 'ERROR');
    }
  }

  async updatePredictionHistory(predictions) {
    try {
      const history = this.predictionHistory;
      
      // Add new predictions
      history.predictions.push({
        timestamp: new Date().toISOString(),
        total: predictions.summary.totalPredictions,
        highRisk: predictions.summary.highRisk,
        mediumRisk: predictions.summary.mediumRisk,
        lowRisk: predictions.summary.lowRisk,
        autoFixable: predictions.summary.autoFixable
      });
      
      // Keep only last 100 predictions
      if (history.predictions.length > 100) {
        history.predictions = history.predictions.slice(-100);
      }
      
      // Update accuracy metrics
      history.totalPredictions += predictions.summary.totalPredictions;
      
      // Save updated history
      const historyPath = path.join(this.projectRoot, 'logs', 'prediction-history.json');
      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
      
    } catch (error) {
      this.log(`❌ Failed to update prediction history: ${error.message}`, 'ERROR');
    }
  }

  // Utility methods
  findSourceFiles() {
    const sourceFiles = [];
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'scripts'];
    
    for (const dir of sourceDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')
    );
  }

  walkDirectory(dir, files) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.walkDirectory(fullPath, files);
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  async run() {
    this.log('🚀 Starting Intelligent Error Predictor...');
    
    try {
      const predictions = await this.predictErrors();
      
      // Log summary
      this.log(`📊 Error Prediction Summary:`);
      this.log(`   Total Predictions: ${predictions.summary.totalPredictions}`);
      this.log(`   High Risk: ${predictions.summary.highRisk}`);
      this.log(`   Medium Risk: ${predictions.summary.mediumRisk}`);
      this.log(`   Low Risk: ${predictions.summary.lowRisk}`);
      this.log(`   Auto-fixable: ${predictions.summary.autoFixable}`);
      this.log(`   Prevention Strategies: ${predictions.prevention.length}`);
      this.log(`   Auto-fixes Applied: ${predictions.autoFixes.length}`);
      
      return predictions;
      
    } catch (error) {
      this.log(`❌ Intelligent Error Predictor failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const predictor = new IntelligentErrorPredictor();
  predictor.run().catch(console.error);
}

module.exports = IntelligentErrorPredictor;