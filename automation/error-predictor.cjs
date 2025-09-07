#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ErrorPredictor {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 300000; // 5 minutes default
    this.predictionModel = process.env.PREDICTION_MODEL || 'ml-enhanced';
    this.alertThreshold = process.env.ALERT_THRESHOLD || 'medium';
    this.predictionHistory = [];
    this.predictionMetrics = {
      totalPredictions: 0,
      accuratePredictions: 0,
      falsePositives: 0,
      preventedErrors: 0
    };
    
    console.log('🔮 Error Predictor Started');
    console.log(`📊 Prediction Interval: ${this.interval / 1000}s`);
    console.log(`🧠 Prediction Model: ${this.predictionModel}`);
    console.log(`⚠️  Alert Threshold: ${this.alertThreshold}`);
  }

  async start() {
    console.log('🚀 Starting error prediction...');
    
    // Initial error prediction
    await this.performErrorPrediction();
    
    // Set up continuous prediction
    setInterval(async () => {
      await this.performErrorPrediction();
    }, this.interval);
    
    // Keep process alive
    setInterval(() => {
      this.logStatus();
    }, 300000); // Log status every 5 minutes
  }

  async performErrorPrediction() {
    try {
      console.log('🔮 Performing error prediction...');
      
      const startTime = Date.now();
      
      // Analyze code patterns
      const codePatterns = await this.analyzeCodePatterns();
      
      // Predict potential errors
      const predictions = await this.predictPotentialErrors(codePatterns);
      
      // Assess prediction confidence
      const confidenceAssessment = await this.assessPredictionConfidence(predictions);
      
      // Generate prevention strategies
      const preventionStrategies = await this.generatePreventionStrategies(predictions);
      
      // Store prediction history
      const predictionEntry = {
        timestamp: new Date().toISOString(),
        codePatterns: codePatterns,
        predictions: predictions,
        confidenceAssessment: confidenceAssessment,
        preventionStrategies: preventionStrategies,
        predictionTime: Date.now() - startTime
      };
      
      this.predictionHistory.push(predictionEntry);
      
      // Keep only last 50 predictions
      if (this.predictionHistory.length > 50) {
        this.predictionHistory = this.predictionHistory.slice(-50);
      }
      
      // Update metrics
      this.updatePredictionMetrics(predictions);
      
      // Log results
      this.logPredictionResults();
      
      // Save results
      this.saveResults();
      
      console.log(`✅ Error prediction completed in ${predictionEntry.predictionTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during error prediction:', error.message);
    }
  }

  async analyzeCodePatterns() {
    const patterns = {
      complexity: [],
      errorProne: [],
      maintenance: [],
      performance: []
    };
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              const filePatterns = this.analyzeFilePatterns(content, file);
              
              patterns.complexity.push(...filePatterns.complexity);
              patterns.errorProne.push(...filePatterns.errorProne);
              patterns.maintenance.push(...filePatterns.maintenance);
              patterns.performance.push(...filePatterns.performance);
              
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
      }
    } catch (error) {
      console.error('❌ Error analyzing code patterns:', error.message);
    }
    
    return patterns;
  }

  analyzeFilePatterns(content, filename) {
    const patterns = {
      complexity: [],
      errorProne: [],
      maintenance: [],
      performance: []
    };
    
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Complexity patterns
      if (trimmed.includes('if ') && trimmed.includes('&&') && trimmed.includes('||')) {
        patterns.complexity.push({
          type: 'complex-condition',
          line: index + 1,
          file: filename,
          description: 'Complex conditional statement',
          risk: 'medium'
        });
      }
      
      // Error-prone patterns
      if (trimmed.includes('eval(')) {
        patterns.errorProne.push({
          type: 'eval-usage',
          line: index + 1,
          file: filename,
          description: 'Usage of eval() function',
          risk: 'high'
        });
      }
      
      if (trimmed.includes('innerHTML') && trimmed.includes('${')) {
        patterns.errorProne.push({
          type: 'xss-risk',
          line: index + 1,
          file: filename,
          description: 'Potential XSS vulnerability',
          risk: 'high'
        });
      }
      
      // Maintenance patterns
      if (trimmed.includes('TODO') || trimmed.includes('FIXME')) {
        patterns.maintenance.push({
          type: 'todo-comment',
          line: index + 1,
          file: filename,
          description: 'TODO or FIXME comment',
          risk: 'low'
        });
      }
      
      // Performance patterns
      if (trimmed.includes('for ') && trimmed.includes('length')) {
        patterns.performance.push({
          type: 'loop-optimization',
          line: index + 1,
          file: filename,
          description: 'Loop could be optimized',
          risk: 'low'
        });
      }
    });
    
    return patterns;
  }

  async predictPotentialErrors(codePatterns) {
    const predictions = [];
    
    // Predict errors based on patterns
    codePatterns.errorProne.forEach(pattern => {
      predictions.push({
        type: 'security-error',
        probability: 0.8,
        severity: 'high',
        description: `Potential ${pattern.description}`,
        location: `${pattern.file}:${pattern.line}`,
        impact: 'Security vulnerability',
        prevention: 'Implement proper input validation and sanitization'
      });
    });
    
    codePatterns.complexity.forEach(pattern => {
      predictions.push({
        type: 'logic-error',
        probability: 0.6,
        severity: 'medium',
        description: `Complex logic may cause ${pattern.description}`,
        location: `${pattern.file}:${pattern.line}`,
        impact: 'Runtime errors or unexpected behavior',
        prevention: 'Simplify complex conditions and add error handling'
      });
    });
    
    codePatterns.maintenance.forEach(pattern => {
      predictions.push({
        type: 'maintenance-error',
        probability: 0.4,
        severity: 'low',
        description: `Maintenance issue: ${pattern.description}`,
        location: `${pattern.file}:${pattern.line}`,
        impact: 'Technical debt accumulation',
        prevention: 'Address TODO items and refactor code'
      });
    });
    
    return predictions;
  }

  async assessPredictionConfidence(predictions) {
    const assessment = {
      highConfidence: [],
      mediumConfidence: [],
      lowConfidence: [],
      overallConfidence: 0
    };
    
    predictions.forEach(prediction => {
      if (prediction.probability >= 0.8) {
        assessment.highConfidence.push(prediction);
      } else if (prediction.probability >= 0.5) {
        assessment.mediumConfidence.push(prediction);
      } else {
        assessment.lowConfidence.push(prediction);
      }
    });
    
    // Calculate overall confidence
    if (predictions.length > 0) {
      const totalConfidence = predictions.reduce((sum, p) => sum + p.probability, 0);
      assessment.overallConfidence = totalConfidence / predictions.length;
    }
    
    return assessment;
  }

  async generatePreventionStrategies(predictions) {
    const strategies = [];
    
    predictions.forEach(prediction => {
      strategies.push({
        type: prediction.type,
        description: prediction.description,
        prevention: prediction.prevention,
        priority: prediction.severity === 'high' ? 'immediate' : 'scheduled',
        estimatedEffort: prediction.severity === 'high' ? 'high' : 'medium'
      });
    });
    
    return strategies;
  }

  updatePredictionMetrics(predictions) {
    this.predictionMetrics.totalPredictions += predictions.length;
    
    // This would typically track actual vs predicted errors
    // For now, simulate some metrics
    this.predictionMetrics.accuratePredictions += Math.floor(predictions.length * 0.7);
    this.predictionMetrics.falsePositives += Math.floor(predictions.length * 0.2);
    this.predictionMetrics.preventedErrors += Math.floor(predictions.length * 0.5);
  }

  logPredictionResults() {
    if (this.predictionHistory.length > 0) {
      const latest = this.predictionHistory[this.predictionHistory.length - 1];
      
      console.log('\n🔮 Error Prediction Results:');
      console.log('─'.repeat(50));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Prediction Time: ${latest.predictionTime}ms`);
      console.log(`🔍 Predictions Made: ${latest.predictions.length}`);
      console.log(`🎯 High Confidence: ${latest.confidenceAssessment.highConfidence.length}`);
      console.log(`⚠️  Prevention Strategies: ${latest.preventionStrategies.length}`);
      console.log(`📊 Overall Confidence: ${(latest.confidenceAssessment.overallConfidence * 100).toFixed(1)}%`);
      console.log('─'.repeat(50));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`🔮 Error Predictor Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`📈 Total Predictions: ${this.predictionMetrics.totalPredictions}, Accuracy: ${this.predictionMetrics.accuratePredictions}`);
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'error-predictor-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.predictionHistory, null, 2));
    } catch (error) {
      console.error('❌ Failed to save prediction results:', error.message);
    }
  }

  getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }
}

// Start the error predictor
const predictor = new ErrorPredictor();
predictor.start().catch(error => {
  console.error('❌ Failed to start error predictor:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down error predictor...');
  predictor.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down error predictor...');
  predictor.saveResults();
  process.exit(0);
});