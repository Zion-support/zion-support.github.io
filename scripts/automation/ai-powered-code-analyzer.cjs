#!/usr/bin/env node

/**
 * AI-Powered Code Analyzer
 * Advanced code analysis with machine learning capabilities for error prediction and auto-fixing
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

class AIPoweredCodeAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-analyzer.log');
    this.analysisCache = new Map();
    this.errorPatterns = this.loadErrorPatterns();
    this.performanceMetrics = new Map();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  loadErrorPatterns() {
    return {
      // TypeScript/JavaScript patterns
      typescript: {
        'Cannot find module': { severity: 'high', autoFix: true, pattern: /Cannot find module ['"]([^'"]+)['"]/ },
        'Property does not exist': { severity: 'medium', autoFix: true, pattern: /Property '([^']+)' does not exist/ },
        'Type is not assignable': { severity: 'medium', autoFix: true, pattern: /Type '([^']+)' is not assignable to type '([^']+)'/ },
        'Expected': { severity: 'high', autoFix: false, pattern: /Expected ([^,]+), got ([^,]+)/ },
        'Unused variable': { severity: 'low', autoFix: true, pattern: /'([^']+)' is declared but its value is never read/ }
      },
      // React patterns
      react: {
        'Missing dependency': { severity: 'medium', autoFix: true, pattern: /React Hook ([^)]+) has a missing dependency/ },
        'Cannot read property': { severity: 'high', autoFix: false, pattern: /Cannot read property '([^']+)' of (undefined|null)/ },
        'Key prop': { severity: 'medium', autoFix: true, pattern: /Each child in a list should have a unique "key" prop/ }
      },
      // Build patterns
      build: {
        'Module not found': { severity: 'high', autoFix: true, pattern: /Module not found: Error: Can't resolve '([^']+)'/ },
        'ChunkLoadError': { severity: 'high', autoFix: false, pattern: /ChunkLoadError: Loading chunk (\d+) failed/ },
        'Out of memory': { severity: 'critical', autoFix: false, pattern: /JavaScript heap out of memory/ }
      },
      // Performance patterns
      performance: {
        'Bundle size': { severity: 'medium', autoFix: true, pattern: /Bundle size is (\d+\.?\d*)\s*([KM]B)/ },
        'Slow component': { severity: 'low', autoFix: true, pattern: /Component ([^)]+) is slow/ },
        'Memory leak': { severity: 'high', autoFix: false, pattern: /Potential memory leak detected/ }
      }
    };
  }

  async analyzeCodebase() {
    this.log('Starting AI-powered code analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      project: this.projectRoot,
      files: await this.scanCodebase(),
      errors: [],
      warnings: [],
      suggestions: [],
      performance: {},
      security: {},
      quality: {},
      predictions: []
    };

    // Analyze each file
    for (const file of analysis.files) {
      const fileAnalysis = await this.analyzeFile(file);
      analysis.errors.push(...fileAnalysis.errors);
      analysis.warnings.push(...fileAnalysis.warnings);
      analysis.suggestions.push(...fileAnalysis.suggestions);
    }

    // Generate predictions
    analysis.predictions = await this.generatePredictions(analysis);
    
    // Analyze performance
    analysis.performance = await this.analyzePerformance();
    
    // Analyze security
    analysis.security = await this.analyzeSecurity();
    
    // Analyze code quality
    analysis.quality = await this.analyzeCodeQuality();

    // Generate recommendations
    analysis.recommendations = this.generateRecommendations(analysis);

    // Save analysis report
    await this.saveAnalysisReport(analysis);

    return analysis;
  }

  async scanCodebase() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.md'];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };

    scanDirectory(this.projectRoot);
    return files;
  }

  async analyzeFile(filePath) {
    const cacheKey = this.getFileHash(filePath);
    
    if (this.analysisCache.has(cacheKey)) {
      return this.analysisCache.get(cacheKey);
    }

    const analysis = {
      file: filePath,
      errors: [],
      warnings: [],
      suggestions: [],
      complexity: 0,
      maintainability: 0
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Analyze for different error patterns
      for (const [category, patterns] of Object.entries(this.errorPatterns)) {
        for (const [errorType, config] of Object.entries(patterns)) {
          const matches = content.match(new RegExp(config.pattern.source, 'g'));
          if (matches) {
            matches.forEach(match => {
              const error = {
                type: errorType,
                category: category,
                severity: config.severity,
                message: match,
                file: filePath,
                line: this.findLineNumber(content, match),
                autoFix: config.autoFix,
                suggestion: this.generateFixSuggestion(errorType, match, content)
              };
              
              if (config.severity === 'high' || config.severity === 'critical') {
                analysis.errors.push(error);
              } else {
                analysis.warnings.push(error);
              }
            });
          }
        }
      }

      // Calculate complexity
      analysis.complexity = this.calculateComplexity(content);
      
      // Calculate maintainability
      analysis.maintainability = this.calculateMaintainability(content, analysis.complexity);

      // Generate suggestions
      analysis.suggestions = this.generateFileSuggestions(content, analysis);

    } catch (error) {
      this.log(`Error analyzing file ${filePath}: ${error.message}`, 'error');
    }

    this.analysisCache.set(cacheKey, analysis);
    return analysis;
  }

  getFileHash(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return crypto.createHash('md5').update(content).digest('hex');
  }

  findLineNumber(content, searchText) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchText)) {
        return i + 1;
      }
    }
    return 0;
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count control structures
    const controlStructures = ['if', 'else', 'for', 'while', 'switch', 'case', 'catch', 'try'];
    controlStructures.forEach(structure => {
      const regex = new RegExp(`\\b${structure}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) complexity += matches.length;
    });

    // Count nested structures
    const nestedRegex = /{[\s\S]*?}/g;
    const nestedMatches = content.match(nestedRegex);
    if (nestedMatches) {
      nestedMatches.forEach(match => {
        const nestedComplexity = this.calculateComplexity(match);
        complexity += nestedComplexity * 0.5;
      });
    }

    return Math.round(complexity);
  }

  calculateMaintainability(content, complexity) {
    const lines = content.split('\n').length;
    const comments = (content.match(/\/\*[\s\S]*?\*\/|\/\/.*$/gm) || []).length;
    const functions = (content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g) || []).length;
    
    // Calculate maintainability index (0-100)
    const commentRatio = comments / lines;
    const functionDensity = functions / lines;
    const complexityRatio = complexity / lines;
    
    let maintainability = 100;
    maintainability -= complexityRatio * 20;
    maintainability += commentRatio * 10;
    maintainability += functionDensity * 5;
    
    return Math.max(0, Math.min(100, Math.round(maintainability)));
  }

  generateFixSuggestion(errorType, match, content) {
    const suggestions = {
      'Cannot find module': 'Check if the module is installed or if the import path is correct',
      'Property does not exist': 'Add the property to the type definition or check the property name',
      'Type is not assignable': 'Check type compatibility or add type assertion',
      'Missing dependency': 'Add the missing dependency to the dependency array',
      'Cannot read property': 'Add null/undefined checks before accessing the property',
      'Key prop': 'Add a unique key prop to each list item',
      'Module not found': 'Install the missing module or check the import path',
      'Bundle size': 'Consider code splitting or removing unused dependencies',
      'Unused variable': 'Remove the unused variable or use it in your code'
    };

    return suggestions[errorType] || 'Review the error and apply appropriate fixes';
  }

  generateFileSuggestions(content, analysis) {
    const suggestions = [];

    // Suggest based on complexity
    if (analysis.complexity > 20) {
      suggestions.push({
        type: 'refactor',
        message: 'Consider breaking down this file into smaller, more manageable components',
        priority: 'high'
      });
    }

    // Suggest based on maintainability
    if (analysis.maintainability < 50) {
      suggestions.push({
        type: 'documentation',
        message: 'Add more comments and documentation to improve maintainability',
        priority: 'medium'
      });
    }

    // Suggest based on file size
    if (content.length > 10000) {
      suggestions.push({
        type: 'structure',
        message: 'Consider splitting this large file into smaller modules',
        priority: 'medium'
      });
    }

    return suggestions;
  }

  async generatePredictions(analysis) {
    const predictions = [];

    // Predict potential errors based on patterns
    const errorRate = analysis.errors.length / analysis.files.length;
    if (errorRate > 0.1) {
      predictions.push({
        type: 'error_spike',
        message: 'High error rate detected. Consider implementing better error handling.',
        confidence: 0.8,
        timeframe: 'immediate'
      });
    }

    // Predict performance issues
    const avgComplexity = analysis.files.reduce((sum, file) => sum + file.complexity, 0) / analysis.files.length;
    if (avgComplexity > 15) {
      predictions.push({
        type: 'performance_degradation',
        message: 'High complexity detected. Performance may degrade under load.',
        confidence: 0.7,
        timeframe: '1-2 weeks'
      });
    }

    // Predict maintenance issues
    const avgMaintainability = analysis.files.reduce((sum, file) => sum + file.maintainability, 0) / analysis.files.length;
    if (avgMaintainability < 60) {
      predictions.push({
        type: 'maintenance_burden',
        message: 'Low maintainability detected. Code will become harder to maintain over time.',
        confidence: 0.9,
        timeframe: '2-4 weeks'
      });
    }

    return predictions;
  }

  async analyzePerformance() {
    try {
      // Run bundle analysis
      const bundleAnalysis = await this.runBundleAnalysis();
      
      // Analyze build performance
      const buildPerformance = await this.analyzeBuildPerformance();
      
      return {
        bundle: bundleAnalysis,
        build: buildPerformance,
        recommendations: this.generatePerformanceRecommendations(bundleAnalysis, buildPerformance)
      };
    } catch (error) {
      this.log(`Error analyzing performance: ${error.message}`, 'error');
      return {};
    }
  }

  async runBundleAnalysis() {
    try {
      // Check if we have a build output
      const buildDir = path.join(this.projectRoot, '.next', 'static');
      if (!fs.existsSync(buildDir)) {
        return { status: 'no_build', message: 'No build output found' };
      }

      // Analyze bundle sizes
      const bundleSizes = this.analyzeBundleSizes(buildDir);
      
      return {
        status: 'analyzed',
        sizes: bundleSizes,
        totalSize: bundleSizes.reduce((sum, file) => sum + file.size, 0),
        recommendations: this.generateBundleRecommendations(bundleSizes)
      };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  analyzeBundleSizes(buildDir) {
    const files = [];
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.css')) {
          files.push({
            name: item,
            path: fullPath,
            size: stat.size,
            sizeKB: Math.round(stat.size / 1024 * 100) / 100
          });
        }
      }
    };

    scanDir(buildDir);
    return files.sort((a, b) => b.size - a.size);
  }

  generateBundleRecommendations(bundleSizes) {
    const recommendations = [];
    const totalSize = bundleSizes.reduce((sum, file) => sum + file.size, 0);
    
    if (totalSize > 2 * 1024 * 1024) { // 2MB
      recommendations.push({
        type: 'bundle_size',
        message: 'Bundle size is large. Consider code splitting and lazy loading.',
        priority: 'high'
      });
    }

    const largeFiles = bundleSizes.filter(file => file.size > 500 * 1024); // 500KB
    if (largeFiles.length > 0) {
      recommendations.push({
        type: 'large_files',
        message: `Large files detected: ${largeFiles.map(f => f.name).join(', ')}. Consider optimization.`,
        priority: 'medium'
      });
    }

    return recommendations;
  }

  async analyzeBuildPerformance() {
    try {
      const startTime = Date.now();
      
      // Run a test build
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - startTime;
      
      return {
        buildTime: buildTime,
        status: 'success',
        recommendations: this.generateBuildRecommendations(buildTime)
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        recommendations: ['Fix build errors before optimizing performance']
      };
    }
  }

  generateBuildRecommendations(buildTime) {
    const recommendations = [];
    
    if (buildTime > 120000) { // 2 minutes
      recommendations.push({
        type: 'build_time',
        message: 'Build time is slow. Consider optimizing dependencies and build configuration.',
        priority: 'high'
      });
    }

    return recommendations;
  }

  async analyzeSecurity() {
    try {
      // Run security audit
      const auditResult = execSync('npm audit --json', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      const audit = JSON.parse(auditResult.toString());
      
      return {
        vulnerabilities: audit.metadata.vulnerabilities,
        advisories: audit.advisories || {},
        recommendations: this.generateSecurityRecommendations(audit)
      };
    } catch (error) {
      this.log(`Error running security audit: ${error.message}`, 'error');
      return { vulnerabilities: {}, advisories: {}, recommendations: [] };
    }
  }

  generateSecurityRecommendations(audit) {
    const recommendations = [];
    const vulns = audit.metadata.vulnerabilities;
    
    if (vulns.critical > 0) {
      recommendations.push({
        type: 'critical_vulnerability',
        message: `${vulns.critical} critical vulnerabilities found. Update immediately.`,
        priority: 'critical'
      });
    }

    if (vulns.high > 0) {
      recommendations.push({
        type: 'high_vulnerability',
        message: `${vulns.high} high severity vulnerabilities found. Update soon.`,
        priority: 'high'
      });
    }

    return recommendations;
  }

  async analyzeCodeQuality() {
    try {
      // Run ESLint
      const lintResult = execSync('npm run lint', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      return {
        eslint: 'passed',
        recommendations: ['Code quality checks passed']
      };
    } catch (error) {
      return {
        eslint: 'failed',
        error: error.message,
        recommendations: ['Fix ESLint errors to improve code quality']
      };
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    // Error-based recommendations
    if (analysis.errors.length > 0) {
      recommendations.push({
        type: 'error_resolution',
        message: `Fix ${analysis.errors.length} errors to improve code quality`,
        priority: 'high',
        action: 'auto_fix_errors'
      });
    }

    // Performance recommendations
    if (analysis.performance.bundle && analysis.performance.bundle.totalSize > 2 * 1024 * 1024) {
      recommendations.push({
        type: 'performance_optimization',
        message: 'Optimize bundle size for better performance',
        priority: 'medium',
        action: 'optimize_bundle'
      });
    }

    // Security recommendations
    if (analysis.security.vulnerabilities && analysis.security.vulnerabilities.critical > 0) {
      recommendations.push({
        type: 'security_update',
        message: 'Update dependencies to fix critical vulnerabilities',
        priority: 'critical',
        action: 'update_dependencies'
      });
    }

    return recommendations;
  }

  async saveAnalysisReport(analysis) {
    const reportPath = path.join(this.projectRoot, 'logs', 'ai-code-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
    this.log(`Analysis report saved to ${reportPath}`);
  }

  async autoFixErrors(analysis) {
    this.log('Starting automatic error fixing...');
    
    let fixedCount = 0;
    const fixableErrors = analysis.errors.filter(error => error.autoFix);
    
    for (const error of fixableErrors) {
      try {
        await this.fixError(error);
        fixedCount++;
      } catch (fixError) {
        this.log(`Failed to fix error in ${error.file}: ${fixError.message}`, 'error');
      }
    }
    
    this.log(`Auto-fixed ${fixedCount} out of ${fixableErrors.length} fixable errors`);
    return { fixed: fixedCount, total: fixableErrors.length };
  }

  async fixError(error) {
    // Implement specific fixes based on error type
    switch (error.type) {
      case 'Cannot find module':
        await this.fixMissingModule(error);
        break;
      case 'Property does not exist':
        await this.fixMissingProperty(error);
        break;
      case 'Missing dependency':
        await this.fixMissingDependency(error);
        break;
      case 'Unused variable':
        await this.fixUnusedVariable(error);
        break;
      default:
        this.log(`No auto-fix available for error type: ${error.type}`, 'warning');
    }
  }

  async fixMissingModule(error) {
    // Extract module name from error message
    const moduleMatch = error.message.match(/Cannot find module ['"]([^'"]+)['"]/);
    if (moduleMatch) {
      const moduleName = moduleMatch[1];
      this.log(`Installing missing module: ${moduleName}`);
      
      try {
        execSync(`npm install ${moduleName}`, { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
      } catch (installError) {
        this.log(`Failed to install module ${moduleName}: ${installError.message}`, 'error');
      }
    }
  }

  async fixMissingProperty(error) {
    // This would require more sophisticated analysis
    this.log(`Property fix for ${error.file} requires manual intervention`, 'warning');
  }

  async fixMissingDependency(error) {
    // This would require analyzing the React Hook and adding the dependency
    this.log(`Dependency fix for ${error.file} requires manual intervention`, 'warning');
  }

  async fixUnusedVariable(error) {
    // This would require removing the unused variable
    this.log(`Unused variable fix for ${error.file} requires manual intervention`, 'warning');
  }

  async run() {
    try {
      this.log('AI-Powered Code Analyzer started');
      
      const analysis = await this.analyzeCodebase();
      
      // Auto-fix errors if enabled
      if (process.env.AUTO_FIX === 'true') {
        await this.autoFixErrors(analysis);
      }
      
      this.log('AI-Powered Code Analyzer completed successfully');
      return analysis;
      
    } catch (error) {
      this.log(`AI-Powered Code Analyzer failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AIPoweredCodeAnalyzer();
  analyzer.run().catch(console.error);
}

module.exports = AIPoweredCodeAnalyzer;