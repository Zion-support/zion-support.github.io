#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🤖 Starting AI Intelligent Code Analyzer...');

class AIIntelligentCodeAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      codeQuality: {},
      patterns: {},
      recommendations: [],
      issues: [],
      metrics: {},
    };
    this.learningData = this.loadLearningData();
  }

  loadLearningData() {
    const learningFile = path.join(
      this.projectRoot,
      'logs',
      'ai-learning-data.json'
    );
    try {
      if (fs.existsSync(learningFile)) {
        return JSON.parse(fs.readFileSync(learningFile, 'utf8'));
      }
    } catch (error) {
      console.log('📚 Creating new learning data file...');
    }
    return {
      patterns: {},
      fixes: {},
      performance: {},
      lastUpdated: new Date().toISOString(),
    };
  }

  saveLearningData() {
    const learningFile = path.join(
      this.projectRoot,
      'logs',
      'ai-learning-data.json'
    );
    fs.writeFileSync(learningFile, JSON.stringify(this.learningData, null, 2));
  }

  async analyzeCodebase() {
    console.log('🔍 Analyzing codebase structure...');

    // Analyze file structure and patterns
    await this.analyzeFileStructure();

    // Analyze code quality patterns
    await this.analyzeCodeQuality();

    // Detect anti-patterns
    await this.detectAntiPatterns();

    // Analyze performance patterns
    await this.analyzePerformancePatterns();

    // Generate intelligent recommendations
    await this.generateRecommendations();

    // Update learning data
    this.updateLearningData();

    // Save results
    this.saveResults();

    console.log('✅ AI Code Analysis completed successfully!');
  }

  async analyzeFileStructure() {
    console.log('📁 Analyzing file structure...');

    const structure = {
      totalFiles: 0,
      fileTypes: {},
      directoryDepth: 0,
      complexity: 'low',
    };

    const analyzeDirectory = (dir, depth = 0) => {
      const files = fs.readdirSync(dir);
      structure.totalFiles += files.length;
      structure.directoryDepth = Math.max(structure.directoryDepth, depth);

      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (
          stat.isDirectory() &&
          !file.startsWith('.') &&
          file !== 'node_modules'
        ) {
          analyzeDirectory(filePath, depth + 1);
        } else if (stat.isFile()) {
          const ext = path.extname(file);
          structure.fileTypes[ext] = (structure.fileTypes[ext] || 0) + 1;
        }
      });
    };

    analyzeDirectory(this.projectRoot);

    // Calculate complexity based on structure
    if (structure.directoryDepth > 5 || structure.totalFiles > 1000) {
      structure.complexity = 'high';
    } else if (structure.directoryDepth > 3 || structure.totalFiles > 500) {
      structure.complexity = 'medium';
    }

    this.analysisResults.codeQuality.structure = structure;
  }

  async analyzeCodeQuality() {
    console.log('🎯 Analyzing code quality patterns...');

    const qualityMetrics = {
      maintainability: 0,
      readability: 0,
      testability: 0,
      performance: 0,
    };

    // Analyze JavaScript/TypeScript files
    const jsFiles = this.findFiles(['.js', '.jsx', '.ts', '.tsx']);

    for (const file of jsFiles.slice(0, 50)) {
      // Limit to first 50 files for performance
      try {
        const content = fs.readFileSync(file, 'utf8');
        const metrics = this.analyzeFileQuality(content, file);

        qualityMetrics.maintainability += metrics.maintainability;
        qualityMetrics.readability += metrics.readability;
        qualityMetrics.testability += metrics.testability;
        qualityMetrics.performance += metrics.performance;
      } catch (error) {
        console.log(`⚠️  Could not analyze file: ${file}`);
      }
    }

    // Calculate averages
    const fileCount = Math.min(jsFiles.length, 50);
    Object.keys(qualityMetrics).forEach(key => {
      qualityMetrics[key] =
        Math.round((qualityMetrics[key] / fileCount) * 100) / 100;
    });

    this.analysisResults.codeQuality.metrics = qualityMetrics;
  }

  analyzeFileQuality(content, filePath) {
    const metrics = {
      maintainability: 0,
      readability: 0,
      testability: 0,
      performance: 0,
    };

    const lines = content.split('\n');
    const totalLines = lines.length;

    // Maintainability metrics
    const functionCount = (
      content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g) || []
    ).length;
    const classCount = (content.match(/class\s+\w+/g) || []).length;
    metrics.maintainability = Math.max(
      0,
      100 - functionCount * 2 - classCount * 5
    );

    // Readability metrics
    const commentLines = lines.filter(
      line => line.trim().startsWith('//') || line.trim().startsWith('/*')
    ).length;
    const commentRatio = commentLines / totalLines;
    metrics.readability = Math.min(100, commentRatio * 200);

    // Testability metrics
    const testFiles = filePath.includes('test') || filePath.includes('spec');
    const hasExports =
      content.includes('export') || content.includes('module.exports');
    metrics.testability = (testFiles ? 50 : 0) + (hasExports ? 50 : 0);

    // Performance metrics
    const asyncAwaitCount = (content.match(/async\s+|await\s+/g) || []).length;
    const forEachCount = (content.match(/\.forEach\(/g) || []).length;
    metrics.performance = Math.max(
      0,
      100 - asyncAwaitCount * 3 - forEachCount * 2
    );

    return metrics;
  }

  async detectAntiPatterns() {
    console.log('🚨 Detecting anti-patterns...');

    const antiPatterns = [];
    const jsFiles = this.findFiles(['.js', '.jsx', '.ts', '.tsx']);

    for (const file of jsFiles.slice(0, 30)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const patterns = this.detectFileAntiPatterns(content, file);
        antiPatterns.push(...patterns);
      } catch (error) {
        // Skip files that can't be read
      }
    }

    this.analysisResults.issues = antiPatterns;
  }

  detectFileAntiPatterns(content, filePath) {
    const patterns = [];
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Detect console.log in production code
      if (line.includes('console.log') && !filePath.includes('test')) {
        patterns.push({
          type: 'console-log',
          severity: 'medium',
          file: filePath,
          line: index + 1,
          description: 'Console.log found in production code',
        });
      }

      // Detect TODO comments
      if (line.includes('TODO') || line.includes('FIXME')) {
        patterns.push({
          type: 'todo',
          severity: 'low',
          file: filePath,
          line: index + 1,
          description: 'TODO or FIXME comment found',
        });
      }

      // Detect long functions
      if (line.includes('function') && lines.length > 50) {
        patterns.push({
          type: 'long-function',
          severity: 'medium',
          file: filePath,
          line: index + 1,
          description: 'Function might be too long',
        });
      }

      // Detect nested callbacks
      if ((line.match(/\.then\(/g) || []).length > 2) {
        patterns.push({
          type: 'callback-hell',
          severity: 'high',
          file: filePath,
          line: index + 1,
          description: 'Potential callback hell detected',
        });
      }
    });

    return patterns;
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');

    const performanceIssues = [];
    const jsFiles = this.findFiles(['.js', '.jsx', '.ts', '.tsx']);

    for (const file of jsFiles.slice(0, 20)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const issues = this.detectPerformanceIssues(content, file);
        performanceIssues.push(...issues);
      } catch (error) {
        // Skip files that can't be read
      }
    }

    this.analysisResults.performance = {
      issues: performanceIssues,
      score: Math.max(0, 100 - performanceIssues.length * 5),
    };
  }

  detectPerformanceIssues(content, filePath) {
    const issues = [];
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Detect inefficient loops
      if (line.includes('for (') && line.includes('length')) {
        issues.push({
          type: 'inefficient-loop',
          file: filePath,
          line: index + 1,
          description: 'Consider caching array length',
        });
      }

      // Detect DOM queries in loops
      if (line.includes('document.') && lines[index - 1]?.includes('for')) {
        issues.push({
          type: 'dom-in-loop',
          file: filePath,
          line: index + 1,
          description: 'DOM query inside loop detected',
        });
      }

      // Detect large object creation
      if (line.includes('new Object()') || line.includes('{}')) {
        issues.push({
          type: 'object-creation',
          file: filePath,
          line: index + 1,
          description: 'Consider object pooling for large objects',
        });
      }
    });

    return issues;
  }

  async generateRecommendations() {
    console.log('💡 Generating intelligent recommendations...');

    const recommendations = [];

    // Based on code quality metrics
    const metrics = this.analysisResults.codeQuality.metrics;
    if (metrics.maintainability < 70) {
      recommendations.push({
        type: 'maintainability',
        priority: 'high',
        description:
          'Improve code maintainability by reducing function complexity',
        action: 'Refactor large functions into smaller, focused functions',
      });
    }

    if (metrics.readability < 60) {
      recommendations.push({
        type: 'readability',
        priority: 'medium',
        description: 'Add more comments and improve code documentation',
        action: 'Add JSDoc comments and inline documentation',
      });
    }

    if (metrics.testability < 50) {
      recommendations.push({
        type: 'testability',
        priority: 'high',
        description: 'Improve code testability',
        action: 'Add unit tests and improve function modularity',
      });
    }

    // Based on anti-patterns
    const consoleLogs = this.analysisResults.issues.filter(
      issue => issue.type === 'console-log'
    );
    if (consoleLogs.length > 0) {
      recommendations.push({
        type: 'logging',
        priority: 'medium',
        description: `Remove ${consoleLogs.length} console.log statements from production code`,
        action: 'Replace with proper logging library or remove',
      });
    }

    // Based on performance issues
    const perfIssues = this.analysisResults.performance.issues;
    if (perfIssues.length > 0) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        description: `Address ${perfIssues.length} performance issues`,
        action: 'Optimize loops, DOM queries, and object creation',
      });
    }

    this.analysisResults.recommendations = recommendations;
  }

  updateLearningData() {
    console.log('🧠 Updating AI learning data...');

    // Update pattern recognition
    this.analysisResults.issues.forEach(issue => {
      if (!this.learningData.patterns[issue.type]) {
        this.learningData.patterns[issue.type] = 0;
      }
      this.learningData.patterns[issue.type]++;
    });

    // Update performance data
    this.learningData.performance[new Date().toISOString()] = {
      score: this.analysisResults.performance.score,
      issues: this.analysisResults.performance.issues.length,
    };

    this.learningData.lastUpdated = new Date().toISOString();
    this.saveLearningData();
  }

  findFiles(extensions) {
    const files = [];

    const findInDirectory = dir => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (
            stat.isDirectory() &&
            !item.startsWith('.') &&
            item !== 'node_modules'
          ) {
            findInDirectory(fullPath);
          } else if (stat.isFile() && extensions.includes(path.extname(item))) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    findInDirectory(this.projectRoot);
    return files;
  }

  saveResults() {
    const reportFile = path.join(
      this.projectRoot,
      'logs',
      `ai-code-analysis-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(this.analysisResults, null, 2));

    console.log('📊 Analysis Results:');
    console.log(
      `- Code Quality Score: ${this.analysisResults.codeQuality.metrics.maintainability}/100`
    );
    console.log(
      `- Performance Score: ${this.analysisResults.performance.score}/100`
    );
    console.log(`- Issues Found: ${this.analysisResults.issues.length}`);
    console.log(
      `- Recommendations: ${this.analysisResults.recommendations.length}`
    );
    console.log(`- Report saved to: ${reportFile}`);
  }
}

// Run the analyzer
const analyzer = new AIIntelligentCodeAnalyzer();
analyzer.analyzeCodebase().catch(console.error);
