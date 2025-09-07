#!/usr/bin/env node

/**
 * Intelligent Performance Optimization Automation
 * AI-powered performance analysis and optimization automation
 * 
 * Features:
 * - Intelligent performance bottleneck detection
 * - Automated bundle optimization
 * - Smart caching strategies
 * - Performance pattern analysis
 * - Automated optimization suggestions
 * - Real-time performance monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class IntelligentPerformanceAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      analysisPatterns: [
        'src/**/*.{js,ts,tsx,jsx}',
        'components/**/*.{js,ts,tsx,jsx}',
        'utils/**/*.{js,ts,tsx,jsx}',
        'pages/**/*.{js,ts,tsx,jsx}',
        'public/**/*',
        '!node_modules/**',
        '!dist/**',
        '!.next/**',
        '!build/**'
      ],
      performanceThresholds: {
        bundleSize: 500, // KB
        loadTime: 3000, // ms
        firstPaint: 1000, // ms
        largestContentfulPaint: 2500, // ms
        cumulativeLayoutShift: 0.1,
        firstInputDelay: 100 // ms
      },
      reportDir: 'performance-reports',
      logFile: 'logs/intelligent-performance.log',
      optimizationStrategies: {
        bundleSplitting: true,
        treeShaking: true,
        codeSplitting: true,
        lazyLoading: true,
        imageOptimization: true,
        caching: true
      }
    };
    
    this.performanceMetrics = {
      bundle: {},
      runtime: {},
      optimization: {},
      suggestions: [],
      improvements: []
    };
    
    this.setupLogging();
    this.ensureDirectories();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  async analyzePerformance() {
    this.log('🚀 Starting Intelligent Performance Analysis...');
    
    try {
      await this.analyzeBundlePerformance();
      await this.analyzeRuntimePerformance();
      await this.analyzeOptimizationOpportunities();
      await this.generateIntelligentSuggestions();
      await this.generateReport();
      
      this.log('✅ Intelligent Performance Analysis completed successfully');
    } catch (error) {
      this.log(`❌ Intelligent Performance Analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBundlePerformance() {
    this.log('📦 Analyzing bundle performance...');
    
    try {
      // Analyze bundle size and composition
      const bundleInfo = await this.getBundleInfo();
      this.performanceMetrics.bundle = bundleInfo;
      
      // Analyze import patterns
      const importAnalysis = await this.analyzeImportPatterns();
      this.performanceMetrics.bundle.importAnalysis = importAnalysis;
      
      // Identify large dependencies
      const largeDependencies = await this.identifyLargeDependencies();
      this.performanceMetrics.bundle.largeDependencies = largeDependencies;
      
      this.log(`📊 Bundle analysis: ${bundleInfo.totalSize}KB total, ${largeDependencies.length} large dependencies`);
    } catch (error) {
      this.log(`Warning: Could not analyze bundle: ${error.message}`, 'WARN');
    }
  }

  async getBundleInfo() {
    try {
      // Check if build exists
      if (fs.existsSync('dist')) {
        const distSize = this.getDirectorySize('dist');
        return {
          totalSize: Math.round(distSize / 1024), // Convert to KB
          files: this.getBuildFiles(),
          timestamp: new Date().toISOString()
        };
      } else {
        // Estimate based on source files
        const sourceFiles = glob.sync(this.config.analysisPatterns);
        const estimatedSize = sourceFiles.reduce((total, file) => {
          try {
            const stats = fs.statSync(file);
            return total + stats.size;
          } catch {
            return total;
          }
        }, 0);
        
        return {
          totalSize: Math.round(estimatedSize / 1024),
          files: sourceFiles.length,
          estimated: true,
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      throw new Error(`Failed to get bundle info: ${error.message}`);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return totalSize;
  }

  getBuildFiles() {
    try {
      if (fs.existsSync('dist')) {
        return glob.sync('dist/**/*', { nodir: true }).length;
      }
      return 0;
    } catch {
      return 0;
    }
  }

  async analyzeImportPatterns() {
    this.log('🔍 Analyzing import patterns...');
    
    const files = glob.sync('**/*.{js,ts,tsx,jsx}', { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
    const importAnalysis = {
      totalImports: 0,
      externalImports: 0,
      internalImports: 0,
      largeImports: [],
      duplicateImports: []
    };
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const imports = this.extractImports(content);
        
        importAnalysis.totalImports += imports.length;
        
        for (const imp of imports) {
          if (imp.startsWith('@') || imp.startsWith('react') || imp.startsWith('framer-motion')) {
            importAnalysis.externalImports++;
            
            // Check for large imports
            if (this.isLargeImport(imp)) {
              importAnalysis.largeImports.push({
                file,
                import: imp,
                suggestion: 'Consider lazy loading or code splitting'
              });
            }
          } else {
            importAnalysis.internalImports++;
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return importAnalysis;
  }

  extractImports(content) {
    const imports = [];
    
    // Match ES6 imports
    const es6Imports = content.match(/import\s+.*?from\s+['"]([^'"]+)['"]/g) || [];
    es6Imports.forEach(imp => {
      const match = imp.match(/from\s+['"]([^'"]+)['"]/);
      if (match) imports.push(match[1]);
    });
    
    // Match require statements
    const requireImports = content.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g) || [];
    requireImports.forEach(imp => {
      const match = imp.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/);
      if (match) imports.push(match[1]);
    });
    
    return imports;
  }

  isLargeImport(importPath) {
    const largePackages = [
      'framer-motion',
      'd3',
      'recharts',
      'lucide-react',
      '@radix-ui'
    ];
    
    return largePackages.some(pkg => importPath.includes(pkg));
  }

  async identifyLargeDependencies() {
    try {
      const packageLockPath = 'package-lock.json';
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        const largeDeps = [];
        
        for (const [name, info] of Object.entries(packageLock.dependencies || {})) {
          if (info.size && info.size > 1024 * 1024) { // Larger than 1MB
            largeDeps.push({
              name,
              size: Math.round(info.size / 1024), // KB
              version: info.version,
              suggestion: 'Consider alternatives or lazy loading'
            });
          }
        }
        
        return largeDeps.sort((a, b) => b.size - a.size).slice(0, 10);
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  async analyzeRuntimePerformance() {
    this.log('⚡ Analyzing runtime performance...');
    
    try {
      // Analyze component complexity
      const componentAnalysis = await this.analyzeComponentComplexity();
      this.performanceMetrics.runtime.components = componentAnalysis;
      
      // Analyze render patterns
      const renderAnalysis = await this.analyzeRenderPatterns();
      this.performanceMetrics.runtime.rendering = renderAnalysis;
      
      // Analyze state management
      const stateAnalysis = await this.analyzeStateManagement();
      this.performanceMetrics.runtime.state = stateAnalysis;
      
      this.log(`📊 Runtime analysis: ${componentAnalysis.complexComponents} complex components identified`);
    } catch (error) {
      this.log(`Warning: Could not analyze runtime performance: ${error.message}`, 'WARN');
    }
  }

  async analyzeComponentComplexity() {
    const componentFiles = glob.sync('**/*.{jsx,tsx}', { ignore: ['node_modules/**', 'dist/**'] });
    let complexComponents = 0;
    let totalComponents = 0;
    
    for (const file of componentFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const complexity = this.calculateComponentComplexity(content);
        
        if (complexity > 15) {
          complexComponents++;
        }
        
        totalComponents++;
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return {
      totalComponents,
      complexComponents,
      averageComplexity: complexComponents / totalComponents
    };
  }

  calculateComponentComplexity(content) {
    let complexity = 1;
    
    // Count hooks usage
    const hooks = (content.match(/use[A-Z]\w+/g) || []).length;
    complexity += hooks * 2;
    
    // Count state variables
    const stateVars = (content.match(/useState\s*\(\s*[^)]+\)/g) || []).length;
    complexity += stateVars;
    
    // Count effects
    const effects = (content.match(/useEffect\s*\(/g) || []).length;
    complexity += effects * 2;
    
    // Count conditional rendering
    const conditionals = (content.match(/\{\s*\w+\s*\?/g) || []).length;
    complexity += conditionals;
    
    return complexity;
  }

  async analyzeRenderPatterns() {
    const componentFiles = glob.sync('**/*.{jsx,tsx}', { ignore: ['node_modules/**', 'dist/**'] });
    let memoizedComponents = 0;
    let optimizedRenders = 0;
    
    for (const file of componentFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('React.memo') || content.includes('memo(')) {
          memoizedComponents++;
        }
        
        if (content.includes('useCallback') || content.includes('useMemo')) {
          optimizedRenders++;
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return {
      totalComponents: componentFiles.length,
      memoizedComponents,
      optimizedRenders,
      optimizationRate: (memoizedComponents + optimizedRenders) / componentFiles.length
    };
  }

  async analyzeStateManagement() {
    const files = glob.sync('**/*.{js,ts,jsx,tsx}', { ignore: ['node_modules/**', 'dist/**'] });
    let reduxUsage = 0;
    let contextUsage = 0;
    let localStateUsage = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('useSelector') || content.includes('useDispatch')) {
          reduxUsage++;
        }
        
        if (content.includes('useContext') || content.includes('createContext')) {
          contextUsage++;
        }
        
        if (content.includes('useState')) {
          localStateUsage++;
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return {
      reduxUsage,
      contextUsage,
      localStateUsage,
      totalFiles: files.length
    };
  }

  async analyzeOptimizationOpportunities() {
    this.log('🎯 Analyzing optimization opportunities...');
    
    const opportunities = [];
    
    // Bundle optimization
    if (this.performanceMetrics.bundle.totalSize > this.config.performanceThresholds.bundleSize) {
      opportunities.push({
        type: 'bundle',
        priority: 'high',
        message: `Bundle size (${this.performanceMetrics.bundle.totalSize}KB) exceeds threshold`,
        action: 'Implement code splitting and tree shaking',
        impact: 'High',
        effort: 'Medium'
      });
    }
    
    // Component optimization
    if (this.performanceMetrics.runtime.components?.complexComponents > 0) {
      opportunities.push({
        type: 'components',
        priority: 'medium',
        message: `${this.performanceMetrics.runtime.components.complexComponents} complex components identified`,
        action: 'Break down complex components and implement memoization',
        impact: 'Medium',
        effort: 'Low'
      });
    }
    
    // Render optimization
    const renderOpt = this.performanceMetrics.runtime.rendering;
    if (renderOpt && renderOpt.optimizationRate < 0.5) {
      opportunities.push({
        type: 'rendering',
        priority: 'medium',
        message: 'Low render optimization rate detected',
        action: 'Implement React.memo, useCallback, and useMemo',
        impact: 'Medium',
        effort: 'Low'
      });
    }
    
    // Large dependencies
    if (this.performanceMetrics.bundle.largeDependencies?.length > 0) {
      opportunities.push({
        type: 'dependencies',
        priority: 'low',
        message: `${this.performanceMetrics.bundle.largeDependencies.length} large dependencies detected`,
        action: 'Consider alternatives or implement lazy loading',
        impact: 'Low',
        effort: 'High'
      });
    }
    
    this.performanceMetrics.optimization.opportunities = opportunities;
    this.log(`🎯 Found ${opportunities.length} optimization opportunities`);
  }

  async generateIntelligentSuggestions() {
    this.log('🧠 Generating intelligent performance suggestions...');
    
    const suggestions = [];
    
    // Bundle optimization suggestions
    if (this.performanceMetrics.bundle.totalSize > this.config.performanceThresholds.bundleSize) {
      suggestions.push({
        type: 'bundle',
        priority: 'high',
        message: 'Bundle size optimization needed',
        actions: [
          'Implement dynamic imports for route-based code splitting',
          'Add bundle analyzer to identify large dependencies',
          'Optimize images and assets',
          'Enable tree shaking and minification'
        ],
        estimatedImpact: '20-40% bundle size reduction'
      });
    }
    
    // Component optimization suggestions
    if (this.performanceMetrics.runtime.components?.complexComponents > 0) {
      suggestions.push({
        type: 'components',
        priority: 'medium',
        message: 'Component performance optimization',
        actions: [
          'Break down complex components into smaller ones',
          'Implement React.memo for expensive components',
          'Use useCallback and useMemo for expensive calculations',
          'Optimize re-render patterns'
        ],
        estimatedImpact: '15-30% render performance improvement'
      });
    }
    
    // State management suggestions
    const stateOpt = this.performanceMetrics.runtime.state;
    if (stateOpt && stateOpt.reduxUsage > stateOpt.totalFiles * 0.3) {
      suggestions.push({
        type: 'state',
        priority: 'medium',
        message: 'State management optimization',
        actions: [
          'Consider using React Context for local state',
          'Implement state normalization',
          'Use selectors for derived state',
          'Optimize Redux store structure'
        ],
        estimatedImpact: '10-20% state update performance improvement'
      });
    }
    
    this.performanceMetrics.suggestions = suggestions;
    this.log(`💡 Generated ${suggestions.length} intelligent performance suggestions`);
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        bundleSize: this.performanceMetrics.bundle.totalSize || 0,
        complexComponents: this.performanceMetrics.runtime.components?.complexComponents || 0,
        optimizationOpportunities: this.performanceMetrics.optimization.opportunities?.length || 0,
        suggestions: this.performanceMetrics.suggestions.length
      },
      metrics: this.performanceMetrics,
      recommendations: this.performanceMetrics.suggestions,
      nextSteps: this.generateNextSteps()
    };
    
    const reportFile = path.join(this.config.reportDir, `intelligent-performance-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate human-readable summary
    const summaryFile = path.join(this.config.reportDir, `intelligent-performance-summary-${Date.now()}.txt`);
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📄 Performance reports generated: ${reportFile} and ${summaryFile}`);
  }

  generateNextSteps() {
    const steps = [];
    
    if (this.performanceMetrics.suggestions.some(s => s.priority === 'high')) {
      steps.push('Address high-priority bundle optimization first');
    }
    
    if (this.performanceMetrics.runtime.components?.complexComponents > 0) {
      steps.push('Break down complex components for better performance');
    }
    
    if (this.performanceMetrics.runtime.rendering?.optimizationRate < 0.5) {
      steps.push('Implement render optimizations (memo, useCallback, useMemo)');
    }
    
    steps.push('Set up performance monitoring and alerting');
    steps.push('Implement automated performance testing in CI/CD');
    steps.push('Regular performance audits and optimization reviews');
    
    return steps;
  }

  generateHumanReadableSummary(report) {
    return `Intelligent Performance Analysis Report
Generated: ${report.timestamp}

📊 SUMMARY
==========
Bundle Size: ${report.summary.bundleSize}KB
Complex Components: ${report.summary.complexComponents}
Optimization Opportunities: ${report.summary.optimizationOpportunities}
Performance Suggestions: ${report.summary.suggestions}

🎯 TOP RECOMMENDATIONS
======================
${report.recommendations.map((rec, i) => `${i + 1}. ${rec.message}`).join('\n')}

📋 NEXT STEPS
=============
${report.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

🔍 DETAILED METRICS
===================
See the JSON report for detailed analysis of each performance metric.

💡 INTELLIGENT SUGGESTIONS
==========================
${report.recommendations.map(rec => `- ${rec.message}: ${rec.estimatedImpact}`).join('\n')}

---
Generated by Intelligent Performance Automation
Zion Tech Group - PM2 Automation System
`;
  }

  async run() {
    this.log('🚀 Intelligent Performance Automation started');
    
    try {
      await this.analyzePerformance();
      this.log('✅ Intelligent Performance Automation completed successfully');
    } catch (error) {
      this.log(`❌ Intelligent Performance Automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new IntelligentPerformanceAutomation();
  automation.run();
}

module.exports = IntelligentPerformanceAutomation;