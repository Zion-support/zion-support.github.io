#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class IntelligentPerformanceAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      sourcePatterns: [
        'src/**/*.{js,jsx,ts,tsx}',
        'components/**/*.{js,jsx,ts,tsx}',
        'pages/**/*.{js,jsx,ts,tsx}',
      ],
      ignorePatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '*.min.js',
        '*.bundle.js',
      ],
      reportDir: 'performance-reports',
      logFile: 'logs/intelligent-performance.log',
    };

    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.reportDir, 'logs'];
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

  async analyzePerformance() {
    this.log('⚡ Starting Intelligent Performance Analysis...');

    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: 0,
          performanceIssues: 0,
          optimizationOpportunities: 0,
          bundleSize: 0,
          renderOptimizations: 0,
        },
        details: {
          bundle: {},
          imports: {},
          components: {},
          rendering: {},
          state: {},
          optimizations: [],
        },
        suggestions: [],
        recommendations: [],
      };

      // Analyze bundle performance
      await this.analyzeBundlePerformance(report);

      // Analyze import patterns
      await this.analyzeImportPatterns(report);

      // Analyze component complexity
      await this.analyzeComponentComplexity(report);

      // Analyze render patterns
      await this.analyzeRenderPatterns(report);

      // Analyze state management
      await this.analyzeStateManagement(report);

      // Identify optimization opportunities
      await this.identifyOptimizationOpportunities(report);

      // Generate intelligent suggestions
      await this.generateIntelligentSuggestions(report);

      // Generate final report
      await this.generateReport(report);

      this.log('✅ Intelligent Performance Analysis completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Error during performance analysis: ${error.message}`);
      throw error;
    }
  }

  async analyzeBundlePerformance(report) {
    this.log('📦 Analyzing bundle performance...');

    try {
      const bundleInfo = await this.getBundleInfo();
      report.details.bundle = bundleInfo;
      report.summary.bundleSize = bundleInfo.size || 0;

      if (bundleInfo.size > 500) {
        report.details.optimizations.push({
          type: 'bundle-size',
          priority: 'HIGH',
          message: 'Large bundle size detected',
          suggestion: 'Implement code splitting and lazy loading',
          impact: 'High',
        });
        report.summary.optimizationOpportunities++;
      }
    } catch (error) {
      this.log(`Warning: Could not analyze bundle: ${error.message}`);
    }
  }

  async getBundleInfo() {
    try {
      // Check if build directory exists
      const buildDir = path.join(this.config.projectRoot, 'dist');
      if (fs.existsSync(buildDir)) {
        const files = glob.sync('**/*', { cwd: buildDir, nodir: true });
        let totalSize = 0;

        files.forEach(file => {
          const filePath = path.join(buildDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        });

        return {
          size: Math.round(totalSize / 1024), // KB
          files: files.length,
          directory: buildDir,
        };
      }

      return { size: 0, files: 0, directory: null };
    } catch (error) {
      return { size: 0, files: 0, directory: null, error: error.message };
    }
  }

  async analyzeImportPatterns(report) {
    this.log('📥 Analyzing import patterns...');

    const sourceFiles = this.getSourceFiles();
    const importIssues = [];

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const imports = this.extractImports(content);

        imports.forEach(importInfo => {
          if (this.isLargeImport(importInfo.path)) {
            importIssues.push({
              file,
              import: importInfo.path,
              type: importInfo.type,
              suggestion:
                'Consider lazy loading or code splitting for large imports',
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    }

    report.details.imports = {
      totalImports: importIssues.length,
      largeImports: importIssues.filter(imp => this.isLargeImport(imp.import))
        .length,
      issues: importIssues,
    };

    if (importIssues.length > 0) {
      report.summary.optimizationOpportunities++;
    }
  }

  extractImports(content) {
    const imports = [];
    const importRegex =
      /import\s+(?:(?:\*\s+as\s+)?\w+|\{[^}]*\}|\w+)\s+from\s+['"`]([^'"`]+)['"`]/g;
    const requireRegex = /require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)/g;

    let match;

    // ES6 imports
    while ((match = importRegex.exec(content)) !== null) {
      imports.push({
        path: match[1],
        type: 'es6',
        line: content.substring(0, match.index).split('\n').length,
      });
    }

    // CommonJS requires
    while ((match = requireRegex.exec(content)) !== null) {
      imports.push({
        path: match[1],
        type: 'commonjs',
        line: content.substring(0, match.index).split('\n').length,
      });
    }

    return imports;
  }

  isLargeImport(importPath) {
    // Consider imports large if they're external libraries or large modules
    const largeModules = [
      'lodash',
      'moment',
      'date-fns',
      'ramda',
      'underscore',
      'react-router-dom',
      'react-query',
      'zustand',
      'jotai',
      'framer-motion',
      'react-spring',
      'react-transition-group',
    ];

    return largeModules.some(module => importPath.includes(module));
  }

  async identifyLargeDependencies(report) {
    this.log('🔍 Identifying large dependencies...');

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      const largeDeps = [];
      for (const [name, version] of Object.entries(dependencies)) {
        if (this.isLargeDependency(name)) {
          largeDeps.push({
            name,
            version,
            impact: 'High',
            suggestion: 'Consider alternatives or lazy loading',
          });
        }
      }

      report.details.bundle.largeDependencies = largeDeps;
    } catch (error) {
      this.log(`Warning: Could not analyze dependencies: ${error.message}`);
    }
  }

  isLargeDependency(name) {
    const largeDeps = [
      'lodash',
      'moment',
      'date-fns',
      'ramda',
      'underscore',
      'react-router-dom',
      'react-query',
      'zustand',
      'jotai',
    ];

    return largeDeps.includes(name);
  }

  async analyzeRuntimePerformance(report) {
    this.log('⚡ Analyzing runtime performance...');

    const sourceFiles = this.getSourceFiles();
    let renderOptimizations = 0;

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');

        // Check for React.memo usage
        if (content.includes('React.memo') || content.includes('memo(')) {
          renderOptimizations++;
        }

        // Check for useMemo usage
        if (content.includes('useMemo(')) {
          renderOptimizations++;
        }

        // Check for useCallback usage
        if (content.includes('useCallback(')) {
          renderOptimizations++;
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    report.summary.renderOptimizations = renderOptimizations;
  }

  async analyzeComponentComplexity(report) {
    this.log('🧩 Analyzing component complexity...');

    const sourceFiles = this.getSourceFiles();
    const complexComponents = [];

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const complexity = this.calculateComponentComplexity(content);

        if (complexity.score > 7) {
          complexComponents.push({
            file,
            score: complexity.score,
            factors: complexity.factors,
            suggestions: [
              'Consider breaking down into smaller components',
              'Extract complex logic into custom hooks',
              'Use React.memo for expensive renders',
            ],
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    report.details.components = {
      total: sourceFiles.length,
      complex: complexComponents.length,
      issues: complexComponents,
    };

    if (complexComponents.length > 0) {
      report.summary.performanceIssues++;
    }
  }

  calculateComponentComplexity(content) {
    const factors = {
      lines: content.split('\n').length,
      functions: (
        content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []
      ).length,
      hooks: (content.match(/use[A-Z]\w+/g) || []).length,
      state: (content.match(/useState|useReducer/g) || []).length,
      effects: (content.match(/useEffect/g) || []).length,
    };

    // Calculate complexity score (1-10)
    const score = Math.min(
      10,
      Math.max(
        1,
        (factors.lines / 100) * 3 +
          (factors.functions / 10) * 2 +
          (factors.hooks / 5) * 2 +
          (factors.state / 3) * 1.5 +
          (factors.effects / 2) * 1
      )
    );

    return { score: Math.round(score * 10) / 10, factors };
  }

  async analyzeRenderPatterns(report) {
    this.log('🎨 Analyzing render patterns...');

    const sourceFiles = this.getSourceFiles();
    const renderIssues = [];

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');

        // Check for potential render issues
        if (content.includes('console.log') && content.includes('render')) {
          renderIssues.push({
            file,
            issue: 'Console logs in render methods',
            suggestion: 'Remove console.logs from render methods',
          });
        }

        if (content.includes('Math.random') && content.includes('render')) {
          renderIssues.push({
            file,
            issue: 'Random values in render',
            suggestion:
              'Move random calculations outside render or use useMemo',
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    report.details.rendering = {
      issues: renderIssues,
      count: renderIssues.length,
    };

    if (renderIssues.length > 0) {
      report.summary.performanceIssues++;
    }
  }

  async analyzeStateManagement(report) {
    this.log('🏗️ Analyzing state management...');

    const sourceFiles = this.getSourceFiles();
    const stateIssues = [];

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');

        // Check for excessive state usage
        const stateHooks = (content.match(/useState/g) || []).length;
        if (stateHooks > 5) {
          stateIssues.push({
            file,
            issue: 'Excessive useState hooks',
            suggestion:
              'Consider using useReducer or context for complex state',
          });
        }

        // Check for missing dependencies in useEffect
        if (content.includes('useEffect') && content.includes('[]')) {
          stateIssues.push({
            file,
            issue: 'Empty dependency array in useEffect',
            suggestion: 'Review useEffect dependencies to avoid stale closures',
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    report.details.state = {
      issues: stateIssues,
      count: stateIssues.length,
    };

    if (stateIssues.length > 0) {
      report.summary.performanceIssues++;
    }
  }

  async identifyOptimizationOpportunities(report) {
    this.log('🎯 Identifying optimization opportunities...');

    const opportunities = [];

    // Bundle size optimizations
    if (report.summary.bundleSize > 500) {
      opportunities.push({
        type: 'bundle',
        priority: 'HIGH',
        title: 'Bundle Size Reduction',
        description: 'Implement code splitting and lazy loading',
        impact: 'High',
        effort: 'Medium',
      });
    }

    // Import optimizations
    if (report.details.imports.largeImports > 0) {
      opportunities.push({
        type: 'imports',
        priority: 'MEDIUM',
        title: 'Import Optimization',
        description: 'Optimize large imports and implement lazy loading',
        impact: 'Medium',
        effort: 'Low',
      });
    }

    // Component optimizations
    if (report.details.components.complex > 0) {
      opportunities.push({
        type: 'components',
        priority: 'MEDIUM',
        title: 'Component Optimization',
        description: 'Break down complex components and implement memoization',
        impact: 'Medium',
        effort: 'Medium',
      });
    }

    report.details.optimizations = opportunities;
    report.summary.optimizationOpportunities = opportunities.length;
  }

  async generateIntelligentSuggestions(report) {
    this.log('🧠 Generating intelligent suggestions...');

    const suggestions = [];

    // High priority suggestions
    if (report.summary.bundleSize > 1000) {
      suggestions.push({
        priority: 'CRITICAL',
        category: 'Bundle Size',
        message:
          'Extremely large bundle size detected. This will significantly impact user experience.',
        action:
          'Implement aggressive code splitting and analyze bundle composition',
        impact: 'Critical',
      });
    }

    if (report.details.imports.largeImports > 5) {
      suggestions.push({
        priority: 'HIGH',
        category: 'Imports',
        message:
          'Multiple large imports detected. Consider lazy loading strategies.',
        action: 'Implement dynamic imports for large libraries',
        impact: 'High',
      });
    }

    if (report.details.components.complex > 3) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Components',
        message:
          'Several complex components found. Consider breaking them down.',
        action: 'Refactor complex components into smaller, focused ones',
        impact: 'Medium',
      });
    }

    report.suggestions = suggestions;
  }

  async generateReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(
      this.config.reportDir,
      `intelligent-performance-${timestamp}.json`
    );
    const summaryFile = path.join(
      this.config.reportDir,
      `intelligent-performance-summary-${timestamp}.md`
    );

    // Save detailed JSON report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    // Generate human-readable summary
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);

    this.log(`📄 Detailed report saved to: ${reportFile}`);
    this.log(`📋 Summary report saved to: ${summaryFile}`);

    // Log summary to console
    console.log('\n' + '='.repeat(60));
    console.log('⚡ INTELLIGENT PERFORMANCE ANALYSIS SUMMARY');
    console.log('='.repeat(60));
    console.log(`📦 Bundle Size: ${report.summary.bundleSize} KB`);
    console.log(`⚠️  Performance Issues: ${report.summary.performanceIssues}`);
    console.log(
      `🎯 Optimization Opportunities: ${report.summary.optimizationOpportunities}`
    );
    console.log(
      `🎨 Render Optimizations: ${report.summary.renderOptimizations}`
    );
    console.log('='.repeat(60));
  }

  generateHumanReadableSummary(report) {
    let summary = `# Intelligent Performance Analysis Report\n\n`;
    summary += `**Generated:** ${report.timestamp}\n\n`;

    summary += `## Summary\n\n`;
    summary += `- **Bundle Size:** ${report.summary.bundleSize} KB\n`;
    summary += `- **Performance Issues:** ${report.summary.performanceIssues}\n`;
    summary += `- **Optimization Opportunities:** ${report.summary.optimizationOpportunities}\n`;
    summary += `- **Render Optimizations:** ${report.summary.renderOptimizations}\n\n`;

    if (report.suggestions.length > 0) {
      summary += `## Priority Recommendations\n\n`;
      report.suggestions.forEach(suggestion => {
        summary += `### ${suggestion.priority} Priority: ${suggestion.category}\n`;
        summary += `${suggestion.message}\n\n`;
        summary += `**Action:** ${suggestion.action}\n`;
        summary += `**Impact:** ${suggestion.impact}\n\n`;
      });
    }

    if (report.details.optimizations.length > 0) {
      summary += `## Optimization Opportunities\n\n`;
      report.details.optimizations.forEach(opp => {
        summary += `### ${opp.priority} Priority: ${opp.title}\n`;
        summary += `${opp.description}\n\n`;
        summary += `**Impact:** ${opp.impact} | **Effort:** ${opp.effort}\n\n`;
      });
    }

    return summary;
  }

  getSourceFiles() {
    const files = [];

    this.config.sourcePatterns.forEach(pattern => {
      const matches = glob.sync(pattern, {
        ignore: this.config.ignorePatterns,
      });
      files.push(...matches);
    });

    return files.filter(file => {
      const stats = fs.statSync(file);
      return stats.isFile() && stats.size > 0;
    });
  }

  async run() {
    try {
      this.log('🚀 Starting Intelligent Performance Automation...');

      const report = await this.analyzePerformance();

      this.log('✅ Intelligent Performance Automation completed successfully');
      return report;
    } catch (error) {
      this.log(
        `❌ Intelligent Performance Automation failed: ${error.message}`
      );
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new IntelligentPerformanceAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = IntelligentPerformanceAutomation;
