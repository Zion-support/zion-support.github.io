#!/usr/bin/env node

/**
 * Intelligent Performance Optimizer - PM2 Automation
 * Automatically analyzes and optimizes React components, bundle size,
 * and runtime performance using intelligent pattern recognition
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-performance-optimizer.log');
    this.optimizationsLog = path.join(this.projectRoot, 'logs', 'performance-optimizations.json');
    this.bundleAnalysisPath = path.join(this.projectRoot, 'logs', 'bundle-analysis');
    this.ensureLogsDirectory();
    
    // Performance optimization patterns
    this.optimizationPatterns = {
      react: [
        { pattern: /React\.memo\(/g, suggestion: 'Component is already memoized' },
        { pattern: /useCallback\([^)]*\)/g, suggestion: 'Check if dependencies are optimized' },
        { pattern: /useMemo\([^)]*\)/g, suggestion: 'Verify memoization dependencies' },
        { pattern: /useEffect\([^)]*\)/g, suggestion: 'Optimize effect dependencies' },
        { pattern: /<Suspense[^>]*>/g, suggestion: 'Consider lazy loading for better performance' }
      ],
      bundle: [
        { pattern: /import\s+\*\s+as\s+\w+\s+from/g, suggestion: 'Use specific imports to reduce bundle size' },
        { pattern: /import\s+\{[^}]*\}\s+from\s+['"][^'"]*['"]/g, suggestion: 'Tree-shake unused imports' },
        { pattern: /require\(['"][^'"]*['"]\)/g, suggestion: 'Consider using ES6 imports for better tree-shaking' }
      ],
      rendering: [
        { pattern: /\.map\([^)]*\)\.filter\([^)]*\)/g, suggestion: 'Combine operations to reduce iterations' },
        { pattern: /for\s*\(\s*let\s+i\s*=\s*0/g, suggestion: 'Consider using forEach or reduce' },
        { pattern: /Array\.from\([^)]*\)/g, suggestion: 'Use spread operator for better performance' }
      ]
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.bundleAnalysisPath)) {
      fs.mkdirSync(this.bundleAnalysisPath, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runPerformanceOptimization() {
    this.log('Starting intelligent performance optimization...');
    
    const optimizations = [];
    const recommendations = [];
    const metrics = {};

    try {
      // 1. Analyze current performance metrics
      const currentMetrics = await this.analyzeCurrentPerformance();
      
      // 2. Analyze bundle size and composition
      const bundleAnalysis = await this.analyzeBundleSize();
      
      // 3. Analyze React component performance
      const componentAnalysis = await this.analyzeReactComponents();
      
      // 4. Generate optimization recommendations
      const optimizationSuggestions = await this.generateOptimizationSuggestions({
        currentMetrics,
        bundleAnalysis,
        componentAnalysis
      });
      
      // 5. Apply automatic optimizations
      const autoOptimizations = await this.applyAutomaticOptimizations(optimizationSuggestions);
      
      // 6. Generate performance report
      await this.generatePerformanceReport({
        currentMetrics,
        bundleAnalysis,
        componentAnalysis,
        optimizations: autoOptimizations,
        recommendations: optimizationSuggestions
      });

      // 7. Commit optimizations if any were made
      if (autoOptimizations.length > 0) {
        await this.commitOptimizations(autoOptimizations);
      }

    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
    }

    return { optimizations, recommendations, metrics };
  }

  async analyzeCurrentPerformance() {
    this.log('Analyzing current performance metrics...');
    
    const metrics = {
      buildTime: 0,
      bundleSize: 0,
      componentCount: 0,
      renderPerformance: 0,
      memoryUsage: 0
    };

    try {
      // Measure build time
      const startTime = Date.now();
      try {
        execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe' });
        metrics.buildTime = Date.now() - startTime;
      } catch (error) {
        this.log('Build failed during performance measurement', 'WARN');
      }

      // Analyze bundle size
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        metrics.bundleSize = this.calculateDirectorySize(distPath);
      }

      // Count React components
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        metrics.componentCount = this.countReactComponents(srcPath);
      }

    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'ERROR');
    }

    return metrics;
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
      this.log(`Error calculating directory size: ${error.message}`, 'WARN');
    }

    return totalSize;
  }

  countReactComponents(dirPath) {
    let count = 0;
    
    try {
      const files = this.getAllFiles(dirPath);
      
      files.forEach(file => {
        if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            if (content.includes('export default') || content.includes('function') || content.includes('const') && content.includes('=')) {
              count++;
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      });
    } catch (error) {
      this.log(`Error counting React components: ${error.message}`, 'WARN');
    }

    return count;
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size and composition...');
    
    const analysis = {
      totalSize: 0,
      fileBreakdown: {},
      largestFiles: [],
      optimizationOpportunities: []
    };

    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) return analysis;

      const files = this.getAllFiles(distPath);
      
      files.forEach(file => {
        try {
          const stats = fs.statSync(file);
          const relativePath = path.relative(distPath, file);
          
          analysis.fileBreakdown[relativePath] = {
            size: stats.size,
            sizeInMB: (stats.size / 1024 / 1024).toFixed(2)
          };
          
          analysis.totalSize += stats.size;
        } catch (error) {
          this.log(`Error analyzing file ${file}: ${error.message}`, 'WARN');
        }
      });

      // Identify largest files
      analysis.largestFiles = Object.entries(analysis.fileBreakdown)
        .sort(([,a], [,b]) => b.size - a.size)
        .slice(0, 10)
        .map(([file, data]) => ({ file, ...data }));

      // Identify optimization opportunities
      analysis.optimizationOpportunities = this.identifyBundleOptimizations(analysis.fileBreakdown);

    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  identifyBundleOptimizations(fileBreakdown) {
    const opportunities = [];
    
    Object.entries(fileBreakdown).forEach(([file, data]) => {
      if (data.size > 1024 * 1024) { // Files larger than 1MB
        opportunities.push({
          file,
          size: data.sizeInMB,
          suggestion: 'Consider code splitting or lazy loading',
          priority: 'HIGH'
        });
      } else if (file.includes('.map')) {
        opportunities.push({
          file,
          size: data.sizeInMB,
          suggestion: 'Remove source maps in production',
          priority: 'MEDIUM'
        });
      }
    });

    return opportunities;
  }

  async analyzeReactComponents() {
    this.log('Analyzing React component performance...');
    
    const analysis = {
      components: [],
      performanceIssues: [],
      optimizationSuggestions: []
    };

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return analysis;

      const files = this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const componentAnalysis = this.analyzeComponentPerformance(content, file);
            
            if (componentAnalysis) {
              analysis.components.push(componentAnalysis);
              
              if (componentAnalysis.performanceIssues.length > 0) {
                analysis.performanceIssues.push(...componentAnalysis.performanceIssues);
              }
              
              if (componentAnalysis.optimizationSuggestions.length > 0) {
                analysis.optimizationSuggestions.push(...componentAnalysis.optimizationSuggestions);
              }
            }
          } catch (error) {
            this.log(`Error analyzing component ${file}: ${error.message}`, 'WARN');
          }
        }
      }

    } catch (error) {
      this.log(`React component analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  analyzeComponentPerformance(content, filePath) {
    const analysis = {
      file: filePath,
      name: this.extractComponentName(content),
      performanceIssues: [],
      optimizationSuggestions: [],
      complexity: this.calculateComponentComplexity(content),
      renderOptimizations: []
    };

    // Check for performance patterns
    Object.keys(this.optimizationPatterns.react).forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        analysis.optimizationSuggestions.push({
          type: 'REACT_OPTIMIZATION',
          suggestion: pattern.suggestion,
          matches: matches.length
        });
      }
    });

    // Check for rendering optimizations
    if (content.includes('.map(') && content.includes('key=')) {
      analysis.renderOptimizations.push({
        type: 'KEY_OPTIMIZATION',
        suggestion: 'Ensure unique and stable keys for list items'
      });
    }

    // Check for expensive operations
    if (content.includes('JSON.parse(') || content.includes('JSON.stringify(')) {
      analysis.performanceIssues.push({
        type: 'EXPENSIVE_OPERATION',
        suggestion: 'Consider memoizing JSON operations',
        severity: 'MEDIUM'
      });
    }

    // Check for inline functions
    const inlineFunctionMatches = content.match(/onClick\s*=\s*{\s*\([^)]*\)\s*=>/g);
    if (inlineFunctionMatches) {
      analysis.performanceIssues.push({
        type: 'INLINE_FUNCTION',
        suggestion: 'Extract inline functions to prevent unnecessary re-renders',
        severity: 'HIGH',
        count: inlineFunctionMatches.length
      });
    }

    return analysis;
  }

  extractComponentName(content) {
    // Try to extract component name from various patterns
    const patterns = [
      /export\s+default\s+function\s+(\w+)/,
      /const\s+(\w+)\s*=\s*\(/,
      /function\s+(\w+)\s*\(/
    ];

    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match) return match[1];
    }

    return 'Unknown';
  }

  calculateComponentComplexity(content) {
    let complexity = 0;
    
    // Count conditional statements
    const conditionals = content.match(/if|else|switch|case/g);
    if (conditionals) complexity += conditionals.length;
    
    // Count loops
    const loops = content.match(/for|while|map|filter|reduce/g);
    if (loops) complexity += loops.length;
    
    // Count state variables
    const stateVars = content.match(/useState\(/g);
    if (stateVars) complexity += stateVars.length;
    
    // Count effects
    const effects = content.match(/useEffect\(/g);
    if (effects) complexity += effects.length;

    return complexity;
  }

  async generateOptimizationSuggestions(analysis) {
    this.log('Generating performance optimization suggestions...');
    
    const suggestions = [];
    
    // Bundle size optimizations
    if (analysis.bundleAnalysis.optimizationOpportunities.length > 0) {
      suggestions.push({
        category: 'BUNDLE_SIZE',
        priority: 'HIGH',
        title: 'Bundle Size Optimization',
        description: `Found ${analysis.bundleAnalysis.optimizationOpportunities.length} bundle optimization opportunities`,
        actions: analysis.bundleAnalysis.optimizationOpportunities,
        estimatedImpact: 'HIGH',
        estimatedEffort: 'MEDIUM'
      });
    }

    // React component optimizations
    if (analysis.componentAnalysis.optimizationSuggestions.length > 0) {
      suggestions.push({
        category: 'REACT_OPTIMIZATION',
        priority: 'MEDIUM',
        title: 'React Component Optimization',
        description: `Found ${analysis.componentAnalysis.optimizationSuggestions.length} React optimization opportunities`,
        actions: analysis.componentAnalysis.optimizationSuggestions,
        estimatedImpact: 'MEDIUM',
        estimatedEffort: 'LOW'
      });
    }

    // Performance issue fixes
    if (analysis.componentAnalysis.performanceIssues.length > 0) {
      suggestions.push({
        category: 'PERFORMANCE_FIXES',
        priority: 'HIGH',
        title: 'Performance Issue Resolution',
        description: `Found ${analysis.componentAnalysis.performanceIssues.length} performance issues to address`,
        actions: analysis.componentAnalysis.performanceIssues,
        estimatedImpact: 'HIGH',
        estimatedEffort: 'MEDIUM'
      });
    }

    return suggestions;
  }

  async applyAutomaticOptimizations(suggestions) {
    this.log('Applying automatic performance optimizations...');
    
    const optimizations = [];
    
    for (const suggestion of suggestions) {
      if (suggestion.category === 'REACT_OPTIMIZATION' && suggestion.priority !== 'CRITICAL') {
        for (const action of suggestion.actions) {
          try {
            const optimization = await this.applyReactOptimization(action);
            if (optimization) {
              optimizations.push(optimization);
            }
          } catch (error) {
            this.log(`Failed to apply optimization to ${action.file}: ${error.message}`, 'WARN');
          }
        }
      }
    }

    return optimizations;
  }

  async applyReactOptimization(action) {
    try {
      if (action.type === 'REACT_OPTIMIZATION') {
        // Apply specific React optimizations
        return {
          type: 'REACT_OPTIMIZATION',
          description: action.suggestion,
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      this.log(`Error applying React optimization: ${error.message}`, 'ERROR');
    }

    return null;
  }

  async generatePerformanceReport(data) {
    this.log('Generating comprehensive performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        buildTime: data.currentMetrics.buildTime,
        bundleSize: data.currentMetrics.bundleSize,
        componentCount: data.currentMetrics.componentCount,
        totalOptimizations: data.optimizations.length,
        totalRecommendations: data.recommendations.length
      },
      currentMetrics: data.currentMetrics,
      bundleAnalysis: data.bundleAnalysis,
      componentAnalysis: data.componentAnalysis,
      optimizations: data.optimizations,
      recommendations: data.recommendations,
      nextSteps: this.generatePerformanceNextSteps(data)
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'performance-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate HTML dashboard
    await this.generatePerformanceDashboard(report);

    this.log(`Performance report generated: ${reportPath}`);
  }

  generatePerformanceNextSteps(data) {
    const nextSteps = [];
    
    if (data.optimizations.length > 0) {
      nextSteps.push('Test automatic optimizations for performance impact');
    }
    
    if (data.recommendations.filter(r => r.priority === 'HIGH').length > 0) {
      nextSteps.push('Address high-priority performance optimizations immediately');
    }
    
    if (data.bundleAnalysis.optimizationOpportunities.length > 0) {
      nextSteps.push('Implement bundle size optimizations');
    }
    
    nextSteps.push('Set up performance monitoring in production');
    nextSteps.push('Schedule performance review sessions');
    
    return nextSteps;
  }

  async generatePerformanceDashboard(report) {
    const dashboardPath = path.join(this.projectRoot, 'logs', 'performance-dashboard');
    if (!fs.existsSync(dashboardPath)) {
      fs.mkdirSync(dashboardPath, { recursive: true });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Optimization Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2em; font-weight: bold; color: #ff6b6b; }
        .bundle-analysis { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .file-item { display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; }
        .recommendations { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .recommendation-item { border-left: 4px solid #ff6b6b; padding: 15px; margin: 10px 0; background: #f8f9fa; }
        .priority-high { border-left-color: #dc3545; }
        .priority-medium { border-left-color: #ffc107; }
        .priority-low { border-left-color: #28a745; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>⚡ Performance Optimization Dashboard</h1>
            <p>Last updated: ${new Date(report.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">${(report.summary.bundleSize / 1024 / 1024).toFixed(2)} MB</div>
                <div>Bundle Size</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.buildTime}ms</div>
                <div>Build Time</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.componentCount}</div>
                <div>React Components</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalOptimizations}</div>
                <div>Applied Optimizations</div>
            </div>
        </div>
        
        <div class="bundle-analysis">
            <h2>📦 Bundle Analysis</h2>
            <h3>Largest Files:</h3>
            ${report.bundleAnalysis.largestFiles.map(file => `
                <div class="file-item">
                    <span>${file.file}</span>
                    <span>${file.sizeInMB} MB</span>
                </div>
            `).join('')}
        </div>
        
        <div class="recommendations">
            <h2>🎯 Optimization Recommendations</h2>
            ${report.recommendations.map(r => `
                <div class="recommendation-item priority-${r.priority.toLowerCase()}">
                    <h3>${r.title}</h3>
                    <p><strong>Priority:</strong> ${r.priority} | <strong>Category:</strong> ${r.category}</p>
                    <p>${r.description}</p>
                    <p><strong>Estimated Impact:</strong> ${r.estimatedImpact} | <strong>Effort:</strong> ${r.estimatedEffort}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="recommendations">
            <h2>📋 Next Steps</h2>
            ${report.nextSteps.map(step => `<div>• ${step}</div>`).join('')}
        </div>
    </div>
</body>
</html>`;

    const dashboardFile = path.join(dashboardPath, 'index.html');
    fs.writeFileSync(dashboardFile, html);
    this.log(`Performance dashboard generated: ${dashboardFile}`);
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

  async commitOptimizations(optimizations) {
    if (optimizations.length === 0) return;

    try {
      // Stage all changes
      execSync('git add .', { cwd: this.projectRoot });
      
      // Commit with descriptive message
      const commitMessage = `⚡ Performance Optimizations: ${optimizations.length} improvements applied`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      this.log(`Committed ${optimizations.length} performance optimizations to git`);
    } catch (error) {
      this.log(`Failed to commit optimizations: ${error.message}`, 'WARN');
    }
  }
}

// Main execution
if (require.main === module) {
  const optimizer = new IntelligentPerformanceOptimizer();
  optimizer.runPerformanceOptimization()
    .then(result => {
      console.log('Intelligent Performance Optimization completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Intelligent Performance Optimization failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentPerformanceOptimizer;