#!/usr/bin/env node

/**
 * AI Code Optimizer - PM2 Automation
 * Intelligently analyzes and optimizes code for better performance and maintainability
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-optimizer.log');
    this.optimizationsLog = path.join(this.projectRoot, 'logs', 'ai-optimizations.json');
    this.performanceMetrics = new Map();
    this.ensureLogsDirectory();
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

  async runOptimization() {
    this.log('Starting AI-powered code optimization...');
    
    const optimizations = [];
    const startTime = Date.now();

    try {
      // 1. Analyze code complexity
      const complexityOptimizations = await this.analyzeCodeComplexity();
      optimizations.push(...complexityOptimizations);

      // 2. Optimize imports and dependencies
      const importOptimizations = await this.optimizeImports();
      optimizations.push(...importOptimizations);

      // 3. Performance optimizations
      const performanceOptimizations = await this.optimizePerformance();
      optimizations.push(...performanceOptimizations);

      // 4. Memory usage optimizations
      const memoryOptimizations = await this.optimizeMemoryUsage();
      optimizations.push(...memoryOptimizations);

      // 5. Bundle size optimizations
      const bundleOptimizations = await this.optimizeBundleSize();
      optimizations.push(...bundleOptimizations);

      // 6. Apply intelligent fixes
      const appliedFixes = await this.applyIntelligentFixes(optimizations);

      // 7. Generate optimization report
      await this.generateOptimizationReport(optimizations, appliedFixes);

      const executionTime = Date.now() - startTime;
      this.log(`AI Code Optimization completed in ${executionTime}ms. Applied ${appliedFixes.length} optimizations.`);

      return { optimizations, appliedFixes, executionTime };

    } catch (error) {
      this.log(`AI Code Optimization failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async analyzeCodeComplexity() {
    const optimizations = [];
    const sourceFiles = this.getSourceFiles();

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const complexity = this.calculateComplexity(content);
        
        if (complexity.cyclomatic > 10) {
          optimizations.push({
            type: 'COMPLEXITY_REDUCTION',
            file,
            severity: 'MEDIUM',
            description: `High cyclomatic complexity (${complexity.cyclomatic}). Consider refactoring into smaller functions.`,
            suggestion: 'Break down complex functions into smaller, focused functions',
            estimatedImpact: 'MEDIUM'
          });
        }

        if (complexity.cognitive > 15) {
          optimizations.push({
            type: 'COGNITIVE_COMPLEXITY',
            file,
            severity: 'HIGH',
            description: `High cognitive complexity (${complexity.cognitive}). Code may be hard to understand.`,
            suggestion: 'Simplify logic, reduce nesting, extract complex conditions',
            estimatedImpact: 'HIGH'
          });
        }

        if (complexity.lines > 200) {
          optimizations.push({
            type: 'FILE_SIZE',
            file,
            severity: 'MEDIUM',
            description: `Large file (${complexity.lines} lines). Consider splitting into modules.`,
            suggestion: 'Split large files into smaller, focused modules',
            estimatedImpact: 'MEDIUM'
          });
        }

      } catch (error) {
        this.log(`Error analyzing complexity for ${file}: ${error.message}`, 'WARN');
      }
    }

    return optimizations;
  }

  calculateComplexity(content) {
    const lines = content.split('\n').length;
    
    // Calculate cyclomatic complexity (simplified)
    const cyclomatic = (content.match(/if|else|for|while|case|catch|&&|\|\|/g) || []).length + 1;
    
    // Calculate cognitive complexity (simplified)
    const cognitive = (content.match(/if|else|for|while|case|catch|&&|\|\||\?|:|\./g) || []).length;
    
    return { lines, cyclomatic, cognitive };
  }

  async optimizeImports() {
    const optimizations = [];
    const sourceFiles = this.getSourceFiles().filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js'));

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const importAnalysis = this.analyzeImports(content);
        
        if (importAnalysis.unusedImports.length > 0) {
          optimizations.push({
            type: 'UNUSED_IMPORTS',
            file,
            severity: 'LOW',
            description: `Found ${importAnalysis.unusedImports.length} unused imports`,
            suggestion: 'Remove unused imports to reduce bundle size',
            estimatedImpact: 'LOW',
            details: importAnalysis.unusedImports
          });
        }

        if (importAnalysis.duplicateImports.length > 0) {
          optimizations.push({
            type: 'DUPLICATE_IMPORTS',
            file,
            severity: 'MEDIUM',
            description: `Found ${importAnalysis.duplicateImports.length} duplicate imports`,
            suggestion: 'Consolidate duplicate imports',
            estimatedImpact: 'MEDIUM',
            details: importAnalysis.duplicateImports
          });
        }

        if (importAnalysis.wildcardImports.length > 0) {
          optimizations.push({
            type: 'WILDCARD_IMPORTS',
            file,
            severity: 'MEDIUM',
            description: `Found ${importAnalysis.wildcardImports.length} wildcard imports`,
            suggestion: 'Use specific imports instead of wildcard imports for better tree-shaking',
            estimatedImpact: 'MEDIUM',
            details: importAnalysis.wildcardImports
          });
        }

      } catch (error) {
        this.log(`Error analyzing imports for ${file}: ${error.message}`, 'WARN');
      }
    }

    return optimizations;
  }

  analyzeImports(content) {
    const importRegex = /import\s+(?:{([^}]+)}|(\w+)|(\*))\s+from\s+['"]([^'"]+)['"]/g;
    const imports = [];
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      if (match[1]) { // Named imports
        const namedImports = match[1].split(',').map(imp => imp.trim());
        imports.push(...namedImports.map(imp => ({ type: 'named', name: imp, source: match[4] })));
      } else if (match[2]) { // Default import
        imports.push({ type: 'default', name: match[2], source: match[4] });
      } else if (match[3]) { // Wildcard import
        imports.push({ type: 'wildcard', name: '*', source: match[4] });
      }
    }

    // Simple analysis - in a real implementation, you'd use AST parsing
    const unusedImports = [];
    const duplicateImports = [];
    const wildcardImports = imports.filter(imp => imp.type === 'wildcard');

    return { unusedImports, duplicateImports, wildcardImports };
  }

  async optimizePerformance() {
    const optimizations = [];
    const sourceFiles = this.getSourceFiles().filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for expensive operations
        if (content.includes('useEffect') && content.includes('setInterval')) {
          optimizations.push({
            type: 'MEMORY_LEAK_PREVENTION',
            file,
            severity: 'HIGH',
            description: 'Potential memory leak: useEffect with setInterval without cleanup',
            suggestion: 'Add cleanup function to useEffect to clear interval',
            estimatedImpact: 'HIGH'
          });
        }

        if (content.includes('useCallback') && content.includes('useMemo')) {
          optimizations.push({
            type: 'HOOK_OPTIMIZATION',
            file,
            severity: 'MEDIUM',
            description: 'Consider using useCallback/useMemo for expensive calculations',
            suggestion: 'Wrap expensive calculations in useMemo, wrap functions in useCallback',
            estimatedImpact: 'MEDIUM'
          });
        }

        if (content.includes('Array.map') && content.includes('Array.filter')) {
          optimizations.push({
            type: 'ARRAY_OPTIMIZATION',
            file,
            severity: 'LOW',
            description: 'Multiple array operations can be chained for better performance',
            suggestion: 'Chain array operations instead of creating intermediate arrays',
            estimatedImpact: 'LOW'
          });
        }

      } catch (error) {
        this.log(`Error analyzing performance for ${file}: ${error.message}`, 'WARN');
      }
    }

    return optimizations;
  }

  async optimizeMemoryUsage() {
    const optimizations = [];
    const sourceFiles = this.getSourceFiles().filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for potential memory leaks
        if (content.includes('addEventListener') && !content.includes('removeEventListener')) {
          optimizations.push({
            type: 'EVENT_LISTENER_CLEANUP',
            file,
            severity: 'HIGH',
            description: 'Event listeners added without cleanup',
            suggestion: 'Remove event listeners in cleanup function or useEffect cleanup',
            estimatedImpact: 'HIGH'
          });
        }

        if (content.includes('setTimeout') && !content.includes('clearTimeout')) {
          optimizations.push({
            type: 'TIMEOUT_CLEANUP',
            file,
            severity: 'MEDIUM',
            description: 'setTimeout without clearTimeout cleanup',
            suggestion: 'Store timeout ID and clear it in cleanup function',
            estimatedImpact: 'MEDIUM'
          });
        }

      } catch (error) {
        this.log(`Error analyzing memory usage for ${file}: ${error.message}`, 'WARN');
      }
    }

    return optimizations;
  }

  async optimizeBundleSize() {
    const optimizations = [];
    
    try {
      // Analyze bundle size
      const bundleAnalysis = await this.analyzeBundleSize();
      
      if (bundleAnalysis.totalSize > 500 * 1024) { // 500KB
        optimizations.push({
          type: 'BUNDLE_SIZE',
          severity: 'MEDIUM',
          description: `Bundle size is ${(bundleAnalysis.totalSize / 1024).toFixed(2)}KB`,
          suggestion: 'Consider code splitting, lazy loading, and tree shaking',
          estimatedImpact: 'MEDIUM',
          details: bundleAnalysis
        });
      }

      if (bundleAnalysis.unusedCode > 100 * 1024) { // 100KB
        optimizations.push({
          type: 'UNUSED_CODE',
          severity: 'HIGH',
          description: `Estimated ${(bundleAnalysis.unusedCode / 1024).toFixed(2)}KB of unused code`,
          suggestion: 'Remove unused dependencies and implement tree shaking',
          estimatedImpact: 'HIGH'
        });
      }

    } catch (error) {
      this.log(`Error analyzing bundle size: ${error.message}`, 'WARN');
    }

    return optimizations;
  }

  async analyzeBundleSize() {
    // This would integrate with your build tool (Vite) to analyze bundle
    // For now, return mock data
    return {
      totalSize: 400 * 1024, // 400KB
      unusedCode: 50 * 1024, // 50KB
      chunks: 3,
      dependencies: 25
    };
  }

  async applyIntelligentFixes(optimizations) {
    const appliedFixes = [];
    
    for (const optimization of optimizations) {
      if (optimization.severity === 'LOW' && optimization.type === 'UNUSED_IMPORTS') {
        try {
          const fixed = await this.fixUnusedImports(optimization.file, optimization.details);
          if (fixed) {
            appliedFixes.push({
              ...optimization,
              status: 'APPLIED',
              appliedAt: new Date().toISOString()
            });
          }
        } catch (error) {
          this.log(`Failed to apply fix for ${optimization.file}: ${error.message}`, 'WARN');
        }
      }
    }

    return appliedFixes;
  }

  async fixUnusedImports(filePath, unusedImports) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;

      for (const unusedImport of unusedImports) {
        const importRegex = new RegExp(`import\\s*{[^}]*\\b${unusedImport.name}\\b[^}]*}\\s+from\\s+['"][^'"]+['"]`, 'g');
        fixedContent = fixedContent.replace(importRegex, '');
      }

      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.log(`Fixed unused imports in ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing unused imports in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateOptimizationReport(optimizations, appliedFixes) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalOptimizations: optimizations.length,
        appliedFixes: appliedFixes.length,
        highPriority: optimizations.filter(o => o.severity === 'HIGH').length,
        mediumPriority: optimizations.filter(o => o.severity === 'MEDIUM').length,
        lowPriority: optimizations.filter(o => o.severity === 'LOW').length
      },
      optimizations,
      appliedFixes,
      recommendations: this.generateRecommendations(optimizations)
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'ai-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Optimization report generated: ${reportPath}`);
  }

  generateRecommendations(optimizations) {
    const recommendations = [];
    
    const highPriorityCount = optimizations.filter(o => o.severity === 'HIGH').length;
    if (highPriorityCount > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Address high-priority optimizations immediately',
        impact: 'Significant performance and maintainability improvements'
      });
    }

    const complexityCount = optimizations.filter(o => o.type.includes('COMPLEXITY')).length;
    if (complexityCount > 5) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Focus on reducing code complexity',
        impact: 'Better maintainability and reduced bug potential'
      });
    }

    const bundleCount = optimizations.filter(o => o.type.includes('BUNDLE')).length;
    if (bundleCount > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Optimize bundle size',
        impact: 'Faster load times and better user experience'
      });
    }

    return recommendations;
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks'];
    const sourceFiles = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectFiles(dirPath, sourceFiles);
      }
    }
    
    return sourceFiles;
  }

  collectFiles(dirPath, files) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.collectFiles(fullPath, files);
      } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
}

// Run the optimizer if called directly
if (require.main === module) {
  const optimizer = new AICodeOptimizer();
  optimizer.runOptimization()
    .then(result => {
      if (result.error) {
        process.exit(1);
      }
      process.exit(0);
    })
    .catch(error => {
      console.error('AI Code Optimizer failed:', error);
      process.exit(1);
    });
}

module.exports = AICodeOptimizer;