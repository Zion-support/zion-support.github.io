#!/usr/bin/env node

/**
 * Intelligent Performance Optimization Automation
 * Automatically analyzes and optimizes code performance
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class IntelligentPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-performance.log');
    this.optimizationsLog = path.join(this.projectRoot, 'logs', 'performance-optimizations.json');
    this.metricsLog = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
    this.ensureLogsDirectory();
    this.optimizationHistory = this.loadOptimizationHistory();
    this.performanceMetrics = this.loadPerformanceMetrics();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  loadOptimizationHistory() {
    try {
      if (fs.existsSync(this.optimizationsLog)) {
        return JSON.parse(fs.readFileSync(this.optimizationsLog, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load optimization history: ${error.message}`, 'WARN');
    }
    return { optimizations: [], patterns: {}, recommendations: [] };
  }

  loadPerformanceMetrics() {
    try {
      if (fs.existsSync(this.metricsLog)) {
        return JSON.parse(fs.readFileSync(this.metricsLog, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load performance metrics: ${error.message}`, 'WARN');
    }
    return { metrics: [], trends: {}, benchmarks: {} };
  }

  saveOptimizationHistory() {
    try {
      fs.writeFileSync(this.optimizationsLog, JSON.stringify(this.optimizationHistory, null, 2));
    } catch (error) {
      this.log(`Failed to save optimization history: ${error.message}`, 'ERROR');
    }
  }

  savePerformanceMetrics() {
    try {
      fs.writeFileSync(this.metricsLog, JSON.stringify(this.performanceMetrics, null, 2));
    } catch (error) {
      this.log(`Failed to save performance metrics: ${error.message}`, 'ERROR');
    }
  }

  async analyzeFilePerformance(filePath) {
    const analysis = {
      file: filePath,
      timestamp: new Date().toISOString(),
      metrics: {},
      optimizations: [],
      issues: [],
      score: 0
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const ext = path.extname(filePath);
      
      // Analyze different file types
      if (ext === '.tsx' || ext === '.jsx') {
        analysis.metrics = await this.analyzeReactPerformance(content, filePath);
      } else if (ext === '.ts' || ext === '.js') {
        analysis.metrics = await this.analyzeJavaScriptPerformance(content, filePath);
      } else if (ext === '.css' || ext === '.scss') {
        analysis.metrics = await this.analyzeCSSPerformance(content, filePath);
      }

      // Generate optimization suggestions
      analysis.optimizations = this.generateOptimizations(content, filePath, analysis.metrics);
      
      // Calculate performance score
      analysis.score = this.calculatePerformanceScore(analysis.metrics);
      
      // Identify performance issues
      analysis.issues = this.identifyPerformanceIssues(content, filePath, analysis.metrics);

    } catch (error) {
      this.log(`Failed to analyze ${filePath}: ${error.message}`, 'ERROR');
      analysis.error = error.message;
    }

    return analysis;
  }

  async analyzeReactPerformance(content, filePath) {
    const metrics = {
      componentCount: 0,
      hookCount: 0,
      renderOptimizations: 0,
      potentialRerenders: 0,
      bundleSize: Buffer.byteLength(content, 'utf8'),
      complexity: 0
    };

    // Count React components
    const componentMatches = content.match(/function\s+\w+|class\s+\w+|const\s+\w+\s*=\s*\(/g);
    if (componentMatches) {
      metrics.componentCount = componentMatches.length;
    }

    // Count React hooks
    const hookMatches = content.match(/use[A-Z]\w+/g);
    if (hookMatches) {
      metrics.hookCount = hookMatches.length;
    }

    // Detect render optimizations
    const memoMatches = content.match(/React\.memo|memo\(/g);
    const callbackMatches = content.match(/useCallback\(/g);
    const memoMatches2 = content.match(/useMemo\(/g);
    
    metrics.renderOptimizations = (memoMatches?.length || 0) + 
                                 (callbackMatches?.length || 0) + 
                                 (memoMatches2?.length || 0);

    // Detect potential unnecessary rerenders
    const inlineObjectMatches = content.match(/\{[^}]*\}/g);
    const inlineFunctionMatches = content.match(/\(\)\s*=>\s*\{/g);
    
    metrics.potentialRerenders = (inlineObjectMatches?.length || 0) + 
                                 (inlineFunctionMatches?.length || 0);

    // Calculate complexity
    metrics.complexity = this.calculateReactComplexity(content);

    return metrics;
  }

  async analyzeJavaScriptPerformance(content, filePath) {
    const metrics = {
      functionCount: 0,
      loopCount: 0,
      asyncOperations: 0,
      memoryUsage: 0,
      bundleSize: Buffer.byteLength(content, 'utf8'),
      complexity: 0
    };

    // Count functions
    const functionMatches = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(|=>\s*\{/g);
    if (functionMatches) {
      metrics.functionCount = functionMatches.length;
    }

    // Count loops
    const loopMatches = content.match(/for\s*\(|while\s*\(|forEach|map|filter|reduce/g);
    if (loopMatches) {
      metrics.loopCount = loopMatches.length;
    }

    // Count async operations
    const asyncMatches = content.match(/async|await|Promise|\.then\(/g);
    if (asyncMatches) {
      metrics.asyncOperations = asyncMatches.length;
    }

    // Estimate memory usage
    metrics.memoryUsage = this.estimateMemoryUsage(content);

    // Calculate complexity
    metrics.complexity = this.calculateJavaScriptComplexity(content);

    return metrics;
  }

  async analyzeCSSPerformance(content, filePath) {
    const metrics = {
      ruleCount: 0,
      selectorComplexity: 0,
      mediaQueries: 0,
      animations: 0,
      bundleSize: Buffer.byteLength(content, 'utf8')
    };

    // Count CSS rules
    const ruleMatches = content.match(/\{[^}]*\}/g);
    if (ruleMatches) {
      metrics.ruleCount = ruleMatches.length;
    }

    // Analyze selector complexity
    const selectorMatches = content.match(/[.#]?\w+(?:[.#]\w+)*/g);
    if (selectorMatches) {
      metrics.selectorComplexity = selectorMatches.reduce((sum, selector) => {
        return sum + (selector.split(/[.#]/).length - 1);
      }, 0);
    }

    // Count media queries
    const mediaMatches = content.match(/@media/g);
    if (mediaMatches) {
      metrics.mediaQueries = mediaMatches.length;
    }

    // Count animations
    const animationMatches = content.match(/@keyframes|animation:|transition:/g);
    if (animationMatches) {
      metrics.animations = animationMatches.length;
    }

    return metrics;
  }

  calculateReactComplexity(content) {
    let complexity = 0;
    
    // JSX complexity
    const jsxDepth = (content.match(/</g) || []).length;
    complexity += Math.min(jsxDepth * 0.1, 5);
    
    // State complexity
    const stateMatches = content.match(/useState\(/g);
    complexity += (stateMatches?.length || 0) * 0.5;
    
    // Effect complexity
    const effectMatches = content.match(/useEffect\(/g);
    complexity += (effectMatches?.length || 0) * 0.8;
    
    // Conditional rendering
    const conditionalMatches = content.match(/\?|&&|\|\|/g);
    complexity += (conditionalMatches?.length || 0) * 0.3;
    
    return Math.round(complexity * 10) / 10;
  }

  calculateJavaScriptComplexity(content) {
    let complexity = 0;
    
    // Control flow complexity
    const controlFlowPatterns = [
      /if\s*\(/g, /else\s*if\s*\(/g, /for\s*\(/g, /while\s*\(/g,
      /switch\s*\(/g, /case\s+/g, /\?\s*[^:]+:/g, /&&|\|\|/g
    ];
    
    controlFlowPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });
    
    // Function nesting
    const functionMatches = content.match(/function|=>/g);
    if (functionMatches) {
      complexity += functionMatches.length * 0.5;
    }
    
    return Math.round(complexity * 10) / 10;
  }

  estimateMemoryUsage(content) {
    let memoryScore = 0;
    
    // Large objects/arrays
    const largeDataMatches = content.match(/\[\s*\{[^}]*\}[^]]*\]|\{\s*[^}]*:\s*\[[^\]]*\]/g);
    if (largeDataMatches) {
      memoryScore += largeDataMatches.length * 2;
    }
    
    // Event listeners
    const eventMatches = content.match(/addEventListener|on[A-Z]\w+/g);
    if (eventMatches) {
      memoryScore += eventMatches.length;
    }
    
    // Timers
    const timerMatches = content.match(/setInterval|setTimeout/g);
    if (timerMatches) {
      memoryScore += timerMatches.length;
    }
    
    return memoryScore;
  }

  generateOptimizations(content, filePath, metrics) {
    const optimizations = [];
    const ext = path.extname(filePath);

    if (ext === '.tsx' || ext === '.jsx') {
      // React-specific optimizations
      if (metrics.potentialRerenders > 5) {
        optimizations.push({
          type: 'REACT_RERENDER',
          priority: 'HIGH',
          message: 'High potential for unnecessary rerenders',
          suggestion: 'Use React.memo, useCallback, and useMemo to optimize renders',
          code: `// Example optimization:
const MemoizedComponent = React.memo(Component);
const memoizedCallback = useCallback(() => {
  // Your callback logic
}, [dependencies]);
const memoizedValue = useMemo(() => {
  // Expensive calculation
}, [dependencies]);`
        });
      }

      if (metrics.hookCount > 10) {
        optimizations.push({
          type: 'REACT_HOOKS',
          priority: 'MEDIUM',
          message: 'Many React hooks detected',
          suggestion: 'Consider extracting custom hooks to reduce complexity',
          code: `// Example: Extract custom hook
const useCustomLogic = (param) => {
  const [state, setState] = useState();
  // ... hook logic
  return { state, setState };
};`
        });
      }
    }

    if (ext === '.ts' || ext === '.js') {
      // JavaScript-specific optimizations
      if (metrics.loopCount > 5) {
        optimizations.push({
          type: 'LOOP_OPTIMIZATION',
          priority: 'MEDIUM',
          message: 'Many loops detected',
          suggestion: 'Consider using more efficient array methods or breaking early',
          code: `// Example: Optimize loops
// Instead of nested loops, use:
const result = array.flatMap(item => 
  item.subItems.filter(sub => sub.condition)
);

// Or break early:
for (const item of items) {
  if (item.condition) break;
}`
        });
      }

      if (metrics.asyncOperations > 3) {
        optimizations.push({
          type: 'ASYNC_OPTIMIZATION',
          priority: 'MEDIUM',
          message: 'Many async operations',
          suggestion: 'Consider batching async operations or using Promise.all',
          code: `// Example: Batch async operations
const results = await Promise.all([
  fetch('/api/1'),
  fetch('/api/2'),
  fetch('/api/3')
]);`
        });
      }
    }

    if (ext === '.css' || ext === '.scss') {
      // CSS-specific optimizations
      if (metrics.selectorComplexity > 10) {
        optimizations.push({
          type: 'CSS_SELECTOR',
          priority: 'MEDIUM',
          message: 'Complex CSS selectors detected',
          suggestion: 'Simplify selectors to improve rendering performance',
          code: `/* Instead of: */
.nav .menu .item .link .icon { }

/* Use: */
.nav-icon { }`
        });
      }

      if (metrics.animations > 5) {
        optimizations.push({
          type: 'CSS_ANIMATION',
          priority: 'LOW',
          message: 'Many animations detected',
          suggestion: 'Use transform and opacity for better performance',
          code: `/* Instead of: */
.element { left: 100px; }

/* Use: */
.element { transform: translateX(100px); }`
        });
      }
    }

    return optimizations;
  }

  calculatePerformanceScore(metrics) {
    let score = 100;
    
    // React performance scoring
    if (metrics.componentCount > 0) {
      if (metrics.potentialRerenders > 5) score -= 20;
      if (metrics.renderOptimizations < 2) score -= 15;
      if (metrics.hookCount > 10) score -= 10;
    }
    
    // JavaScript performance scoring
    if (metrics.functionCount > 0) {
      if (metrics.complexity > 8) score -= 15;
      if (metrics.loopCount > 5) score -= 10;
      if (metrics.memoryUsage > 5) score -= 10;
    }
    
    // CSS performance scoring
    if (metrics.ruleCount > 0) {
      if (metrics.selectorComplexity > 10) score -= 10;
      if (metrics.animations > 5) score -= 5;
    }
    
    return Math.max(0, Math.round(score));
  }

  identifyPerformanceIssues(content, filePath, metrics) {
    const issues = [];
    const ext = path.extname(filePath);

    if (ext === '.tsx' || ext === '.jsx') {
      // React performance issues
      if (content.includes('console.log') && !content.includes('// DEBUG')) {
        issues.push({
          type: 'CONSOLE_LOGGING',
          severity: 'LOW',
          message: 'Console logging in production code',
          suggestion: 'Remove console.log statements or wrap in debug conditions'
        });
      }

      if (content.includes('Math.random()') || content.includes('Date.now()')) {
        issues.push({
          type: 'UNSTABLE_RENDER',
          severity: 'MEDIUM',
          message: 'Unstable values in render',
          suggestion: 'Move random/time calculations outside render or use useMemo'
        });
      }
    }

    if (ext === '.ts' || ext === '.js') {
      // JavaScript performance issues
      if (content.includes('document.querySelector') && content.includes('for')) {
        issues.push({
          type: 'DOM_QUERY_IN_LOOP',
          severity: 'HIGH',
          message: 'DOM queries inside loops',
          suggestion: 'Cache DOM queries outside loops'
        });
      }

      if (content.includes('innerHTML') && content.includes('+=')) {
        issues.push({
          type: 'STRING_CONCATENATION',
          severity: 'MEDIUM',
          message: 'String concatenation in loops',
          suggestion: 'Use array.join() or template literals for better performance'
        });
      }
    }

    return issues;
  }

  async runPerformanceBenchmark() {
    try {
      this.log('🏃 Running performance benchmark...');
      
      const benchmark = {
        timestamp: new Date().toISOString(),
        buildTime: 0,
        bundleSize: 0,
        lighthouseScore: 0,
        metrics: {}
      };

      // Measure build time
      const buildStart = Date.now();
      try {
        execSync('npm run build', { stdio: 'pipe' });
        benchmark.buildTime = Date.now() - buildStart;
        this.log(`Build completed in ${benchmark.buildTime}ms`);
      } catch (error) {
        this.log(`Build failed: ${error.message}`, 'WARN');
      }

      // Measure bundle size
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        benchmark.bundleSize = this.calculateDirectorySize(distPath);
        this.log(`Bundle size: ${(benchmark.bundleSize / 1024 / 1024).toFixed(2)}MB`);
      }

      // Save benchmark results
      this.performanceMetrics.metrics.push(benchmark);
      this.savePerformanceMetrics();

      return benchmark;

    } catch (error) {
      this.log(`Performance benchmark failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          totalSize += this.calculateDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      });
    } catch (error) {
      this.log(`Failed to calculate directory size: ${error.message}`, 'WARN');
    }
    
    return totalSize;
  }

  async run() {
    this.log('🚀 Starting Intelligent Performance Optimization...');
    
    try {
      // Run performance benchmark
      const benchmark = await this.runPerformanceBenchmark();
      
      // Analyze all code files
      const codeFiles = this.findCodeFiles();
      this.log(`Found ${codeFiles.length} code files to analyze`);
      
      const analyses = [];
      for (const file of codeFiles) {
        const analysis = await this.analyzeFilePerformance(file);
        analyses.push(analysis);
        
        if (analysis.optimizations.length > 0 || analysis.issues.length > 0) {
          this.log(`File: ${file} - Score: ${analysis.score}/100 - ${analysis.optimizations.length} optimizations, ${analysis.issues.length} issues`);
        }
      }

      // Generate optimization report
      const report = await this.generateOptimizationReport(analyses, benchmark);
      
      // Save optimization history
      this.optimizationHistory.optimizations.push(...analyses);
      this.saveOptimizationHistory();

      this.log(`✅ Performance optimization completed. Analyzed ${analyses.length} files.`);
      
      if (report) {
        this.log(`📊 Report generated with ${report.totalOptimizations} optimization suggestions.`);
      }

      return { success: true, analyses, report, benchmark };

    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  findCodeFiles() {
    const codeFiles = [];
    const codeExtensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'];
    
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath);
          } else if (stats.isFile() && codeExtensions.includes(path.extname(file))) {
            codeFiles.push(filePath);
          }
        });
      } catch (error) {
        this.log(`Failed to scan directory ${dir}: ${error.message}`, 'WARN');
      }
    };
    
    scanDirectory(this.projectRoot);
    return codeFiles;
  }

  async generateOptimizationReport(analyses, benchmark) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: analyses.length,
          totalOptimizations: 0,
          totalIssues: 0,
          averageScore: 0,
          highPriorityOptimizations: 0
        },
        benchmark,
        topOptimizations: [],
        recommendations: []
      };

      // Calculate summary
      analyses.forEach(analysis => {
        report.summary.totalOptimizations += analysis.optimizations.length;
        report.summary.totalIssues += analysis.issues.length;
        report.summary.averageScore += analysis.score;
      });
      
      report.summary.averageScore = Math.round(report.summary.averageScore / analyses.length);

      // Get top optimizations
      const allOptimizations = analyses.flatMap(a => a.optimizations);
      report.topOptimizations = allOptimizations
        .filter(o => o.priority === 'HIGH')
        .slice(0, 10);

      report.summary.highPriorityOptimizations = report.topOptimizations.length;

      // Generate recommendations
      if (report.summary.averageScore < 70) {
        report.recommendations.push({
          type: 'OVERALL_PERFORMANCE',
          priority: 'HIGH',
          message: 'Overall performance score is low',
          suggestion: 'Focus on high-priority optimizations first, then address medium and low priority items'
        });
      }

      if (benchmark && benchmark.buildTime > 30000) {
        report.recommendations.push({
          type: 'BUILD_PERFORMANCE',
          priority: 'MEDIUM',
          message: 'Build time is slow',
          suggestion: 'Consider code splitting, tree shaking, and optimizing dependencies'
        });
      }

      if (benchmark && benchmark.bundleSize > 5 * 1024 * 1024) {
        report.recommendations.push({
          type: 'BUNDLE_SIZE',
          priority: 'MEDIUM',
          message: 'Bundle size is large',
          suggestion: 'Implement code splitting, lazy loading, and analyze bundle with webpack-bundle-analyzer'
        });
      }

      // Save report
      const reportPath = path.join(this.projectRoot, 'logs', 'performance-optimization-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log(`Performance optimization report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Failed to generate optimization report: ${error.message}`, 'ERROR');
      return null;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new IntelligentPerformanceOptimizer();
  automation.run().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = IntelligentPerformanceOptimizer;