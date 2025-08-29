#!/usr/bin/env node

/**
 * Intelligent Performance Optimizer - PM2 Automation
 * Automatically analyzes and optimizes application performance
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'performance-optimizer.log');
    this.reportsDir = path.join(this.projectRoot, 'logs', 'performance-reports');
    this.bundleAnalysisDir = path.join(this.reportsDir, 'bundle-analysis');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.bundleAnalysisDir)) {
      fs.mkdirSync(this.bundleAnalysisDir, { recursive: true });
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
    const performanceMetrics = {};
    const recommendations = [];

    try {
      // 1. Analyze current bundle size and performance
      const bundleAnalysis = await this.analyzeBundleSize();
      performanceMetrics.bundle = bundleAnalysis;

      // 2. Analyze runtime performance patterns
      const runtimeAnalysis = await this.analyzeRuntimePerformance();
      performanceMetrics.runtime = runtimeAnalysis;

      // 3. Detect performance bottlenecks
      const bottlenecks = await this.detectPerformanceBottlenecks();
      performanceMetrics.bottlenecks = bottlenecks;

      // 4. Generate optimization recommendations
      const optimRecommendations = await this.generateOptimizationRecommendations(performanceMetrics);
      recommendations.push(...optimRecommendations);

      // 5. Apply automatic optimizations
      const autoOptimizations = await this.applyAutomaticOptimizations(recommendations);
      optimizations.push(...autoOptimizations);

      // 6. Generate performance report
      await this.generatePerformanceReport(performanceMetrics, recommendations, optimizations);

      // 7. Commit optimizations if successful
      if (optimizations.length > 0) {
        await this.commitOptimizations(optimizations);
      }

    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
    }

    return { optimizations, performanceMetrics, recommendations };
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      chunkSizes: {},
      largestModules: [],
      duplicateModules: [],
      unusedModules: []
    };

    try {
      // Build the project to generate bundle
      await this.buildProject();
      
      // Analyze bundle using webpack-bundle-analyzer or similar
      const bundleStats = await this.getBundleStats();
      
      if (bundleStats) {
        analysis.totalSize = bundleStats.totalSize;
        analysis.chunkSizes = bundleStats.chunkSizes;
        analysis.largestModules = bundleStats.largestModules;
        analysis.duplicateModules = bundleStats.duplicateModules;
        analysis.unusedModules = bundleStats.unusedModules;
      }

      // Check for specific bundle issues
      analysis.issues = await this.detectBundleIssues(analysis);
      
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async buildProject() {
    try {
      this.log('Building project for bundle analysis...');
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        env: { ...process.env, NODE_ENV: 'production' }
      });
      this.log('Project built successfully');
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async getBundleStats() {
    try {
      // This would integrate with webpack-bundle-analyzer in production
      // For now, we'll analyze the dist directory manually
      const distPath = path.join(this.projectRoot, 'dist');
      
      if (!fs.existsSync(distPath)) {
        return null;
      }

      const stats = await this.analyzeDistDirectory(distPath);
      return stats;
      
    } catch (error) {
      this.log(`Failed to get bundle stats: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeDistDirectory(distPath) {
    const stats = {
      totalSize: 0,
      chunkSizes: {},
      largestModules: [],
      duplicateModules: [],
      unusedModules: []
    };

    try {
      const files = await this.getAllFiles(distPath);
      
      for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.css')) {
          const stat = fs.statSync(file);
          const size = stat.size;
          const relativePath = path.relative(distPath, file);
          
          stats.totalSize += size;
          stats.chunkSizes[relativePath] = size;
          
          // Track largest files
          stats.largestModules.push({
            file: relativePath,
            size: size,
            sizeKB: Math.round(size / 1024)
          });
        }
      }
      
      // Sort by size
      stats.largestModules.sort((a, b) => b.size - a.size);
      stats.largestModules = stats.largestModules.slice(0, 10);
      
    } catch (error) {
      this.log(`Failed to analyze dist directory: ${error.message}`, 'ERROR');
    }

    return stats;
  }

  async detectBundleIssues(analysis) {
    const issues = [];
    
    // Check for oversized bundles
    const oversizedChunks = Object.entries(analysis.chunkSizes)
      .filter(([_, size]) => size > 500 * 1024) // 500KB threshold
      .map(([file, size]) => ({
        type: 'OVERSIZED_CHUNK',
        file,
        size: Math.round(size / 1024),
        threshold: 500,
        severity: 'MEDIUM'
      }));
    
    issues.push(...oversizedChunks);
    
    // Check for duplicate modules (if available)
    if (analysis.duplicateModules.length > 0) {
      issues.push({
        type: 'DUPLICATE_MODULES',
        count: analysis.duplicateModules.length,
        severity: 'HIGH',
        message: 'Duplicate modules detected in bundle'
      });
    }
    
    // Check for unused modules (if available)
    if (analysis.unusedModules.length > 0) {
      issues.push({
        type: 'UNUSED_MODULES',
        count: analysis.unusedModules.length,
        severity: 'MEDIUM',
        message: 'Unused modules detected in bundle'
      });
    }
    
    return issues;
  }

  async analyzeRuntimePerformance() {
    this.log('Analyzing runtime performance...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      metrics: {},
      patterns: [],
      issues: []
    };

    try {
      // Analyze component rendering patterns
      const renderingPatterns = await this.analyzeRenderingPatterns();
      analysis.patterns.push(...renderingPatterns);
      
      // Analyze state management patterns
      const statePatterns = await this.analyzeStateManagementPatterns();
      analysis.patterns.push(...statePatterns);
      
      // Analyze effect usage patterns
      const effectPatterns = await this.analyzeEffectUsagePatterns();
      analysis.patterns.push(...effectPatterns);
      
      // Detect performance anti-patterns
      const antiPatterns = await this.detectPerformanceAntiPatterns();
      analysis.issues.push(...antiPatterns);
      
    } catch (error) {
      this.log(`Runtime performance analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeRenderingPatterns() {
    const patterns = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return patterns;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const filePatterns = this.analyzeFileRenderingPatterns(file, content);
            patterns.push(...filePatterns);
          } catch (error) {
            this.log(`Error analyzing rendering patterns in ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Rendering pattern analysis failed: ${error.message}`, 'ERROR');
    }

    return patterns;
  }

  analyzeFileRenderingPatterns(filePath, content) {
    const patterns = [];
    
    // Check for unnecessary re-renders
    const unnecessaryRenders = [
      {
        pattern: /useMemo\s*\(\s*\(\)\s*=>\s*[^,]+,\s*\[\s*\]\s*\)/g,
        issue: 'useMemo with empty dependency array - consider removing',
        severity: 'LOW'
      },
      {
        pattern: /useCallback\s*\(\s*[^,]+,\s*\[\s*\]\s*\)/g,
        issue: 'useCallback with empty dependency array - consider removing',
        severity: 'LOW'
      },
      {
        pattern: /React\.memo\s*\(\s*\w+\s*\)/g,
        issue: 'React.memo usage - verify if memoization is beneficial',
        severity: 'MEDIUM'
      }
    ];
    
    unnecessaryRenders.forEach(({ pattern, issue, severity }) => {
      if (pattern.test(content)) {
        patterns.push({
          file: filePath,
          type: 'UNNECESSARY_OPTIMIZATION',
          issue,
          severity,
          suggestion: 'Review if these optimizations provide actual performance benefits'
        });
      }
    });
    
    // Check for expensive operations in render
    const expensiveOperations = [
      {
        pattern: /\.map\s*\([^)]*\)\.filter\s*\([^)]*\)\.map\s*\(/g,
        issue: 'Multiple array operations in render - consider memoization',
        severity: 'MEDIUM'
      },
      {
        pattern: /new\s+Date\s*\(\)/g,
        issue: 'Creating new Date objects in render - consider moving outside component',
        severity: 'MEDIUM'
      },
      {
        pattern: /JSON\.parse\s*\(/g,
        issue: 'JSON parsing in render - consider moving outside component',
        severity: 'HIGH'
      }
    ];
    
    expensiveOperations.forEach(({ pattern, issue, severity }) => {
      if (pattern.test(content)) {
        patterns.push({
          file: filePath,
          type: 'EXPENSIVE_OPERATION',
          issue,
          severity,
          suggestion: 'Move expensive operations outside render or use memoization'
        });
      }
    });
    
    return patterns;
  }

  async analyzeStateManagementPatterns() {
    const patterns = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return patterns;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const filePatterns = this.analyzeFileStatePatterns(file, content);
            patterns.push(...filePatterns);
          } catch (error) {
            this.log(`Error analyzing state patterns in ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`State management pattern analysis failed: ${error.message}`, 'ERROR');
    }

    return patterns;
  }

  analyzeFileStatePatterns(filePath, content) {
    const patterns = [];
    
    // Check for state update patterns
    const stateUpdatePatterns = [
      {
        pattern: /setState\s*\(\s*prev\s*=>\s*\(\s*\{[^}]*\s*\.\.\.prev[^}]*\}\s*\)\s*\)/g,
        issue: 'Complex state update with spread operator - consider using immer or structured updates',
        severity: 'MEDIUM'
      },
      {
        pattern: /useState\s*\(\s*\[\s*\]\s*\)/g,
        issue: 'Empty array state initialization - consider providing initial value',
        severity: 'LOW'
      },
      {
        pattern: /setState\s*\(\s*\[\s*\.\.\.prev\s*,\s*[^]]+\s*\]\s*\)/g,
        issue: 'Array state update with spread - consider using functional updates for better performance',
        severity: 'MEDIUM'
      }
    ];
    
    stateUpdatePatterns.forEach(({ pattern, issue, severity }) => {
      if (pattern.test(content)) {
        patterns.push({
          file: filePath,
          type: 'STATE_UPDATE_PATTERN',
          issue,
          severity,
          suggestion: 'Optimize state updates for better performance'
        });
      }
    });
    
    return patterns;
  }

  async analyzeEffectUsagePatterns() {
    const patterns = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return patterns;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const filePatterns = this.analyzeFileEffectPatterns(file, content);
            patterns.push(...filePatterns);
          } catch (error) {
            this.log(`Error analyzing effect patterns in ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Effect usage pattern analysis failed: ${error.message}`, 'ERROR');
    }

    return patterns;
  }

  analyzeFileEffectPatterns(filePath, content) {
    const patterns = [];
    
    // Check for effect dependency issues
    const effectPatterns = [
      {
        pattern: /useEffect\s*\(\s*[^,]+,\s*\[\s*\]\s*\)/g,
        issue: 'useEffect with empty dependency array - verify if this is intentional',
        severity: 'LOW'
      },
      {
        pattern: /useEffect\s*\(\s*[^,]+\)/g,
        issue: 'useEffect without dependency array - this runs on every render',
        severity: 'HIGH'
      },
      {
        pattern: /useEffect\s*\(\s*[^,]+,\s*\[[^\]]+\]\s*\)/g,
        issue: 'useEffect with dependencies - verify all dependencies are included',
        severity: 'MEDIUM'
      }
    ];
    
    effectPatterns.forEach(({ pattern, issue, severity }) => {
      if (pattern.test(content)) {
        patterns.push({
          file: filePath,
          type: 'EFFECT_DEPENDENCY_ISSUE',
          issue,
          severity,
          suggestion: 'Review effect dependencies and ensure they are correct'
        });
      }
    });
    
    return patterns;
  }

  async detectPerformanceAntiPatterns() {
    const antiPatterns = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return antiPatterns;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileAntiPatterns = this.detectFileAntiPatterns(file, content);
            antiPatterns.push(...fileAntiPatterns);
          } catch (error) {
            this.log(`Error detecting anti-patterns in ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Anti-pattern detection failed: ${error.message}`, 'ERROR');
    }

    return antiPatterns;
  }

  detectFileAntiPatterns(filePath, content) {
    const antiPatterns = [];
    
    // Check for common performance anti-patterns
    const patterns = [
      {
        pattern: /\.innerHTML\s*=/g,
        issue: 'innerHTML usage can cause XSS and performance issues',
        severity: 'HIGH',
        suggestion: 'Use textContent or React elements instead'
      },
      {
        pattern: /document\.querySelectorAll\s*\([^)]*\)\.forEach/g,
        issue: 'querySelectorAll in loops can cause performance issues',
        severity: 'MEDIUM',
        suggestion: 'Cache DOM queries or use event delegation'
      },
      {
        pattern: /window\.addEventListener\s*\([^)]*\)(?!\s*removeEventListener)/g,
        issue: 'Event listener added without removal plan',
        severity: 'HIGH',
        suggestion: 'Ensure proper cleanup in useEffect cleanup function'
      },
      {
        pattern: /setInterval\s*\([^)]*\)(?!\s*clearInterval)/g,
        issue: 'Interval set without cleanup plan',
        severity: 'HIGH',
        suggestion: 'Clear interval in useEffect cleanup function'
      }
    ];
    
    patterns.forEach(({ pattern, issue, severity, suggestion }) => {
      if (pattern.test(content)) {
        antiPatterns.push({
          file: filePath,
          type: 'PERFORMANCE_ANTI_PATTERN',
          issue,
          severity,
          suggestion
        });
      }
    });
    
    return antiPatterns;
  }

  async detectPerformanceBottlenecks() {
    this.log('Detecting performance bottlenecks...');
    
    const bottlenecks = [];
    
    try {
      // Check for large dependencies
      const largeDeps = await this.detectLargeDependencies();
      bottlenecks.push(...largeDeps);
      
      // Check for inefficient imports
      const inefficientImports = await this.detectInefficientImports();
      bottlenecks.push(...inefficientImports);
      
      // Check for build configuration issues
      const buildIssues = await this.detectBuildConfigurationIssues();
      bottlenecks.push(...buildIssues);
      
    } catch (error) {
      this.log(`Bottleneck detection failed: ${error.message}`, 'ERROR');
    }

    return bottlenecks;
  }

  async detectLargeDependencies() {
    const largeDeps = [];
    
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packagePath)) return largeDeps;
      
      const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      const allDeps = { ...packageContent.dependencies, ...packageContent.devDependencies };
      
      // Check for known large packages
      const largePackages = [
        'moment', 'lodash', 'underscore', 'jquery', 'bootstrap',
        'antd', 'material-ui', 'semantic-ui', 'foundation'
      ];
      
      largePackages.forEach(pkg => {
        if (allDeps[pkg]) {
          largeDeps.push({
            type: 'LARGE_DEPENDENCY',
            package: pkg,
            severity: 'MEDIUM',
            message: `Large package ${pkg} detected - consider alternatives`,
            suggestion: `Look for lighter alternatives to ${pkg}`
          });
        }
      });
      
    } catch (error) {
      this.log(`Failed to detect large dependencies: ${error.message}`, 'ERROR');
    }

    return largeDeps;
  }

  async detectInefficientImports() {
    const inefficientImports = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return inefficientImports;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileImports = this.detectFileImportIssues(file, content);
            inefficientImports.push(...fileImports);
          } catch (error) {
            this.log(`Error detecting import issues in ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Import issue detection failed: ${error.message}`, 'ERROR');
    }

    return inefficientImports;
  }

  detectFileImportIssues(filePath, content) {
    const issues = [];
    
    // Check for inefficient import patterns
    const importPatterns = [
      {
        pattern: /import\s+\*\s+as\s+\w+\s+from\s+['"][^'"]+['"]/g,
        issue: 'Wildcard import - consider specific imports for better tree-shaking',
        severity: 'MEDIUM'
      },
      {
        pattern: /import\s+\{[^}]*\}\s+from\s+['"][^'"]+['"]/g,
        issue: 'Multiple named imports - verify if all are needed',
        severity: 'LOW'
      },
      {
        pattern: /import\s+\w+\s+from\s+['"][^'"]+\/index['"]/g,
        issue: 'Import from index file - consider direct import for better tree-shaking',
        severity: 'LOW'
      }
    ];
    
    importPatterns.forEach(({ pattern, issue, severity }) => {
      if (pattern.test(content)) {
        issues.push({
          file: filePath,
          type: 'INEFFICIENT_IMPORT',
          issue,
          severity,
          suggestion: 'Optimize imports for better bundle size and tree-shaking'
        });
      }
    });
    
    return issues;
  }

  async detectBuildConfigurationIssues() {
    const issues = [];
    
    try {
      // Check Vite configuration
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const viteContent = fs.readFileSync(viteConfigPath, 'utf8');
        const viteIssues = this.analyzeViteConfig(viteContent);
        issues.push(...viteIssues);
      }
      
      // Check TypeScript configuration
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsContent = fs.readFileSync(tsConfigPath, 'utf8');
        const tsIssues = this.analyzeTypeScriptConfig(tsContent);
        issues.push(...tsIssues);
      }
      
    } catch (error) {
      this.log(`Build configuration analysis failed: ${error.message}`, 'ERROR');
    }

    return issues;
  }

  analyzeViteConfig(content) {
    const issues = [];
    
    // Check for missing optimizations
    if (!content.includes('build.rollupOptions')) {
      issues.push({
        type: 'MISSING_BUILD_OPTIMIZATION',
        severity: 'MEDIUM',
        message: 'Missing rollup build optimizations',
        suggestion: 'Configure rollup options for better bundle optimization'
      });
    }
    
    if (!content.includes('build.chunkSizeWarningLimit')) {
      issues.push({
        type: 'MISSING_CHUNK_SIZE_WARNING',
        severity: 'LOW',
        message: 'Missing chunk size warning configuration',
        suggestion: 'Set appropriate chunk size limits'
      });
    }
    
    return issues;
  }

  analyzeTypeScriptConfig(content) {
    const issues = [];
    
    try {
      const config = JSON.parse(content);
      
      // Check for performance-related settings
      if (config.compilerOptions?.incremental !== true) {
        issues.push({
          type: 'MISSING_INCREMENTAL_COMPILATION',
          severity: 'MEDIUM',
          message: 'Incremental compilation not enabled',
          suggestion: 'Enable incremental compilation for faster builds'
        });
      }
      
      if (config.compilerOptions?.skipLibCheck !== true) {
        issues.push({
          type: 'SKIP_LIB_CHECK_DISABLED',
          severity: 'LOW',
          message: 'Library type checking enabled',
          suggestion: 'Consider enabling skipLibCheck for faster builds'
        });
      }
      
    } catch (error) {
      this.log(`Failed to parse TypeScript config: ${error.message}`, 'ERROR');
    }
    
    return issues;
  }

  async generateOptimizationRecommendations(performanceMetrics) {
    this.log('Generating optimization recommendations...');
    
    const recommendations = [];
    
    try {
      // Bundle size recommendations
      if (performanceMetrics.bundle?.issues) {
        performanceMetrics.bundle.issues.forEach(issue => {
          recommendations.push({
            type: 'BUNDLE_OPTIMIZATION',
            priority: issue.severity === 'HIGH' ? 'HIGH' : 'MEDIUM',
            message: issue.message || `Bundle issue: ${issue.type}`,
            action: issue.suggestion || 'Review and optimize bundle configuration',
            estimatedImpact: 'MEDIUM'
          });
        });
      }
      
      // Runtime performance recommendations
      if (performanceMetrics.runtime?.patterns) {
        performanceMetrics.runtime.patterns.forEach(pattern => {
          recommendations.push({
            type: 'RUNTIME_OPTIMIZATION',
            priority: pattern.severity === 'HIGH' ? 'HIGH' : 'MEDIUM',
            message: pattern.issue,
            action: pattern.suggestion,
            estimatedImpact: 'HIGH'
          });
        });
      }
      
      // Bottleneck recommendations
      if (performanceMetrics.bottlenecks) {
        performanceMetrics.bottlenecks.forEach(bottleneck => {
          recommendations.push({
            type: 'BOTTLENECK_RESOLUTION',
            priority: bottleneck.severity === 'HIGH' ? 'HIGH' : 'MEDIUM',
            message: bottleneck.message || bottleneck.issue,
            action: bottleneck.suggestion,
            estimatedImpact: 'HIGH'
          });
        });
      }
      
    } catch (error) {
      this.log(`Failed to generate recommendations: ${error.message}`, 'ERROR');
    }

    return recommendations;
  }

  async applyAutomaticOptimizations(recommendations) {
    this.log('Applying automatic optimizations...');
    
    const optimizations = [];
    
    try {
      for (const recommendation of recommendations) {
        if (recommendation.type === 'BUNDLE_OPTIMIZATION' && recommendation.priority === 'HIGH') {
          const optimization = await this.optimizeBundle();
          if (optimization) optimizations.push(optimization);
        }
        
        if (recommendation.type === 'RUNTIME_OPTIMIZATION' && recommendation.priority === 'HIGH') {
          const optimization = await this.optimizeRuntime();
          if (optimization) optimizations.push(optimization);
        }
      }
      
    } catch (error) {
      this.log(`Automatic optimization failed: ${error.message}`, 'ERROR');
    }

    return optimizations;
  }

  async optimizeBundle() {
    try {
      this.log('Applying bundle optimizations...');
      
      // Update Vite configuration for better optimization
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const optimization = await this.optimizeViteConfig(viteConfigPath);
        if (optimization) return optimization;
      }
      
    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`, 'ERROR');
    }
    
    return null;
  }

  async optimizeViteConfig(configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');
      let modifiedContent = content;
      let hasChanges = false;
      
      // Add build optimizations if missing
      if (!content.includes('build.rollupOptions')) {
        const rollupOptions = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog'],
          utils: ['date-fns', 'zod', 'clsx']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },`;
        
        modifiedContent = content.replace(
          /export\s+default\s+defineConfig\s*\(\s*\{/,
          `export default defineConfig({${rollupOptions}`
        );
        hasChanges = true;
      }
      
      if (hasChanges) {
        fs.writeFileSync(configPath, modifiedContent, 'utf8');
        return {
          type: 'VITE_CONFIG_OPTIMIZATION',
          description: 'Added build optimizations and chunk splitting',
          file: configPath,
          impact: 'HIGH'
        };
      }
      
    } catch (error) {
      this.log(`Vite config optimization failed: ${error.message}`, 'ERROR');
    }
    
    return null;
  }

  async optimizeRuntime() {
    try {
      this.log('Applying runtime optimizations...');
      
      // Create performance utility functions
      const utilsPath = path.join(this.projectRoot, 'src', 'utils', 'performance.ts');
      const optimization = await this.createPerformanceUtils(utilsPath);
      
      return optimization;
      
    } catch (error) {
      this.log(`Runtime optimization failed: ${error.message}`, 'ERROR');
    }
    
    return null;
  }

  async createPerformanceUtils(utilsPath) {
    try {
      const utilsDir = path.dirname(utilsPath);
      if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir, { recursive: true });
      }
      
      const performanceUtils = `/**
 * Performance utility functions
 * Auto-generated by PM2 Performance Optimizer
 */

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>) => {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

export const createEventEmitter = () => {
  const listeners = new Map<string, Set<Function>>();
  
  return {
    on: (event: string, listener: Function) => {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event)!.add(listener);
    },
    off: (event: string, listener: Function) => {
      listeners.get(event)?.delete(listener);
    },
    emit: (event: string, ...args: any[]) => {
      listeners.get(event)?.forEach(listener => listener(...args));
    }
  };
};
`;
      
      fs.writeFileSync(utilsPath, performanceUtils, 'utf8');
      
      return {
        type: 'PERFORMANCE_UTILS_CREATION',
        description: 'Created performance utility functions for common optimizations',
        file: utilsPath,
        impact: 'MEDIUM'
      };
      
    } catch (error) {
      this.log(`Performance utils creation failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async generatePerformanceReport(performanceMetrics, recommendations, optimizations) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        bundleSize: performanceMetrics.bundle?.totalSize || 0,
        totalIssues: (performanceMetrics.bundle?.issues?.length || 0) +
                    (performanceMetrics.runtime?.patterns?.length || 0) +
                    (performanceMetrics.bottlenecks?.length || 0),
        totalRecommendations: recommendations.length,
        totalOptimizations: optimizations.length
      },
      metrics: performanceMetrics,
      recommendations: recommendations.slice(0, 20),
      optimizations: optimizations,
      nextSteps: this.generateNextSteps(recommendations, optimizations)
    };
    
    const reportPath = path.join(this.reportsDir, `performance-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Performance report generated: ${reportPath}`);
    return report;
  }

  generateNextSteps(recommendations, optimizations) {
    const nextSteps = [];
    
    // High priority recommendations
    const highPriority = recommendations.filter(r => r.priority === 'HIGH');
    if (highPriority.length > 0) {
      nextSteps.push({
        priority: 'IMMEDIATE',
        actions: highPriority.slice(0, 5).map(r => r.action),
        estimatedTime: '1-2 days'
      });
    }
    
    // Medium priority recommendations
    const mediumPriority = recommendations.filter(r => r.priority === 'MEDIUM');
    if (mediumPriority.length > 0) {
      nextSteps.push({
        priority: 'SHORT_TERM',
        actions: mediumPriority.slice(0, 10).map(r => r.action),
        estimatedTime: '1-2 weeks'
      });
    }
    
    // Follow-up optimizations
    if (optimizations.length > 0) {
      nextSteps.push({
        priority: 'FOLLOW_UP',
        actions: ['Monitor performance improvements', 'Measure bundle size changes', 'Validate optimizations'],
        estimatedTime: 'Ongoing'
      });
    }
    
    return nextSteps;
  }

  async commitOptimizations(optimizations) {
    if (optimizations.length === 0) return;
    
    try {
      // Stage changes
      execSync('git add .', { cwd: this.projectRoot });
      
      // Commit with descriptive message
      const commitMessage = `🚀 Performance Optimizations: ${optimizations.length} improvements applied\n\n` +
        optimizations.map(o => `- ${o.type}: ${o.description}`).join('\n');
      
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      this.log(`Performance optimizations committed: ${optimizations.length} changes`);
      
    } catch (error) {
      this.log(`Failed to commit optimizations: ${error.message}`, 'ERROR');
    }
  }

  async getAllFiles(dir) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...await this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }
}

// Main execution
if (require.main === module) {
  const automation = new IntelligentPerformanceOptimizer();
  
  automation.runPerformanceOptimization()
    .then(result => {
      console.log('Performance optimization completed successfully');
      console.log(`Optimizations: ${result.optimizations.length}`);
      console.log(`Recommendations: ${result.recommendations.length}`);
      process.exit(0);
    })
    .catch(error => {
      console.error('Performance optimization failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentPerformanceOptimizer;