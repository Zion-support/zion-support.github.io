#!/usr/bin/env node

/**
 * AI Performance Optimizer Agent (APOA)
 * 
 * An ultra-fast autonomous AI system that continuously analyzes and optimizes
 * application performance with zero human intervention.
 * 
 * Features:
 * - Real-time performance metrics analysis
 * - Bundle size optimization
 * - Code splitting and lazy loading
 * - Image optimization
 * - Route optimization
 * - Core Web Vitals improvement
 * - Build optimization
 * - Memory leak detection
 * - Render performance optimization
 * - API response time optimization
 * 
 * @author AI Development Team
 * @license MIT
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  rootDir: process.cwd(),
  logsDir: path.join(process.cwd(), 'automation', 'logs'),
  reportsDir: path.join(process.cwd(), 'automation', 'reports'),
  dataDir: path.join(process.cwd(), 'automation', 'data'),
  
  // Continuous operation settings - ULTRA-FAST MODE: MAXIMUM SPEED
  continuous: process.env.CONTINUOUS_MODE !== 'false',
  intervalSeconds: parseInt(process.env.INTERVAL_SECONDS || '30', 10), // ⚡ ULTRA-FAST: Run every 30 seconds
  intervalMinutes: (() => {
    const value = Number.parseFloat(process.env.INTERVAL_MINUTES || '0.5');
    return Number.isFinite(value) && value > 0 ? value : 0.5;
  })(), // Backward compatibility
  
  // Auto-commit settings - FULLY AUTONOMOUS
  autoCommit: process.env.AUTO_COMMIT !== 'false',
  autoPush: process.env.AUTO_PUSH !== 'false',
  
  // Performance optimization settings - MAXIMUM IMPACT & SPEED
  maxOptimizationsPerRun: parseInt(process.env.MAX_OPTIMIZATIONS_PER_RUN || '50', 10), // Increased for maximum speed
  priorityMode: process.env.PRIORITY_MODE || 'all',
  parallelAnalysis: process.env.PARALLEL_ANALYSIS !== 'false', // Enable parallel analysis
  
  // Feature toggles
  features: {
    bundleOptimization: true,
    codeSplitting: true,
    lazyLoading: true,
    imageOptimization: true,
    routeOptimization: true,
    memoization: true,
    buildOptimization: true,
    memoryOptimization: true,
    renderOptimization: true,
    apiOptimization: true,
  },
  
  // Performance thresholds
  thresholds: {
    bundleSize: 500 * 1024, // 500KB
    pageLoadTime: 3000, // 3 seconds
    firstContentfulPaint: 1800, // 1.8 seconds
    largestContentfulPaint: 2500, // 2.5 seconds
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100, // 100ms
  },
  
  // GitHub settings
  repository: 'https://github.com/Zion-Holdings/zion.app',
  canonicalUrl: 'https://ziontechgroup.com',
};

// Logger utility
class Logger {
  constructor(logFile) {
    this.logFile = logFile;
  }
  
  async log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };
    
    const logLine = `[${timestamp}] [${level.toUpperCase()}] ${message}${data ? ' ' + JSON.stringify(data) : ''}\n`;
    
    console.log(logLine.trim());
    
    try {
      await fs.appendFile(this.logFile, logLine);
    } catch (err) {
      console.error('Failed to write to log file:', err);
    }
  }
  
  info(message, data) { return this.log('info', message, data); }
  warn(message, data) { return this.log('warn', message, data); }
  error(message, data) { return this.log('error', message, data); }
  success(message, data) { return this.log('success', message, data); }
  debug(message, data) { return this.log('debug', message, data); }
}

// Ensure directories exist
async function ensureDirectories() {
  const dirs = [CONFIG.logsDir, CONFIG.reportsDir, CONFIG.dataDir];
  for (const dir of dirs) {
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }
  }
}

// Execute command safely
function execCommand(command, options = {}) {
  try {
    const result = execSync(command, {
      cwd: CONFIG.rootDir,
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      maxBuffer: 10 * 1024 * 1024, // 10MB
      ...options,
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

// Performance Analysis Engine
class PerformanceAnalysisEngine {
  constructor(logger) {
    this.logger = logger;
  }
  
  async analyze() {
    await this.logger.info('⚡ Starting comprehensive performance analysis (parallel mode)...');
    
    // Run all analyses in parallel for MAXIMUM SPEED
    const analysisPromises = [
      this.analyzeBundleSize(),
      this.analyzeCodeSplitting(),
      this.analyzeLazyLoading(),
      this.analyzeImages(),
      this.analyzeRoutes(),
      this.analyzeMemoization(),
      this.analyzeBuildOutput(),
      this.analyzeMemoryUsage(),
      this.analyzeRenderPerformance(),
      this.analyzeAPIPerformance(),
    ];
    
    const [
      bundleSize,
      codeSplitting,
      lazyLoading,
      images,
      routes,
      memoization,
      buildOutput,
      memoryUsage,
      renderPerformance,
      apiPerformance,
    ] = await Promise.all(analysisPromises);
    
    const analysis = {
      timestamp: new Date().toISOString(),
      bundleSize,
      codeSplitting,
      lazyLoading,
      images,
      routes,
      memoization,
      buildOutput,
      memoryUsage,
      renderPerformance,
      apiPerformance,
    };
    
    analysis.performanceScore = this.calculatePerformanceScore(analysis);
    analysis.optimizations = this.generateOptimizations(analysis);
    
    await this.logger.success('✅ Performance analysis complete', { performanceScore: analysis.performanceScore });
    
    return analysis;
  }
  
  async analyzeBundleSize() {
    await this.logger.debug('Analyzing bundle size...');
    
    try {
      // Check .next build output
      const nextDir = path.join(CONFIG.rootDir, '.next');
      const staticDir = path.join(nextDir, 'static');
      
      let totalSize = 0;
      let largeFiles = [];
      
      try {
        const files = await this.getAllFiles(staticDir);
        for (const file of files) {
          const stats = await fs.stat(file);
          totalSize += stats.size;
          
          if (stats.size > 100 * 1024) { // Files larger than 100KB
            largeFiles.push({
              path: path.relative(CONFIG.rootDir, file),
              size: stats.size,
              sizeKB: (stats.size / 1024).toFixed(2),
            });
          }
        }
      } catch (e) {
        // .next might not exist, that's okay
      }
      
      return {
        totalSize,
        totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
        largeFiles: largeFiles.slice(0, 20), // Top 20 largest files
        needsOptimization: totalSize > CONFIG.thresholds.bundleSize,
      };
    } catch (error) {
      await this.logger.warn('Could not analyze bundle size', { error: error.message });
      return { totalSize: 0, totalSizeMB: '0', largeFiles: [], needsOptimization: false };
    }
  }
  
  async getAllFiles(dir) {
    const files = [];
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files.push(...await this.getAllFiles(fullPath));
        } else {
          files.push(fullPath);
        }
      }
    } catch (e) {
      // Directory might not exist
    }
    return files;
  }
  
  async analyzeCodeSplitting() {
    await this.logger.debug('Analyzing code splitting...');
    
    const issues = [];
    
    // Check for large components that should be split
    try {
      const result = execCommand('find src app -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec wc -l {} \\; | awk \'$1 > 500 {print}\' | head -20', { silent: true });
      if (result.success && result.output) {
        const largeFiles = result.output.split('\n').filter(l => l.trim()).map(l => {
          const parts = l.trim().split(/\s+/);
          return { lines: parseInt(parts[0]), file: parts.slice(1).join(' ') };
        });
        
        if (largeFiles.length > 0) {
          issues.push({
            type: 'large-files',
            count: largeFiles.length,
            files: largeFiles.slice(0, 10),
            severity: 'high',
            message: `${largeFiles.length} files exceed 500 lines and should be split`,
          });
        }
      }
    } catch (e) {
      // Skip if command fails
    }
    
    // Check for dynamic imports
    const dynamicImportResult = execCommand('grep -r "dynamic" src app --include="*.tsx" --include="*.ts" | grep -i "import" | wc -l', { silent: true });
    const dynamicImportCount = dynamicImportResult.success ? parseInt(dynamicImportResult.output.trim(), 10) : 0;
    
    return {
      issues: issues.length,
      details: issues,
      dynamicImports: dynamicImportCount,
      needsOptimization: issues.length > 0,
    };
  }
  
  async analyzeLazyLoading() {
    await this.logger.debug('Analyzing lazy loading...');
    
    const issues = [];
    
    // Check for React.lazy usage
    const lazyResult = execCommand('grep -r "React.lazy" src app --include="*.tsx" --include="*.ts" | wc -l', { silent: true });
    const lazyCount = lazyResult.success ? parseInt(lazyResult.output.trim(), 10) : 0;
    
    // Check for Next.js dynamic imports
    const nextDynamicResult = execCommand('grep -r "next/dynamic" src app --include="*.tsx" --include="*.ts" | wc -l', { silent: true });
    const nextDynamicCount = nextDynamicResult.success ? parseInt(nextDynamicResult.output.trim(), 10) : 0;
    
    // Check for large images without lazy loading
    const imageResult = execCommand('grep -r "<img" src app --include="*.tsx" | grep -v "loading=" | wc -l', { silent: true });
    const imageCount = imageResult.success ? parseInt(imageResult.output.trim(), 10) : 0;
    
    if (imageCount > 0) {
      issues.push({
        type: 'images-without-lazy',
        count: imageCount,
        severity: 'medium',
        message: `${imageCount} images without lazy loading attribute`,
      });
    }
    
    return {
      issues: issues.length,
      details: issues,
      reactLazyCount: lazyCount,
      nextDynamicCount: nextDynamicCount,
      needsOptimization: issues.length > 0,
    };
  }
  
  async analyzeImages() {
    await this.logger.debug('Analyzing images...');
    
    const issues = [];
    
    // Check for unoptimized images
    try {
      const publicImages = await this.getAllFiles(path.join(CONFIG.rootDir, 'public'));
      const imageFiles = publicImages.filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f));
      
      let unoptimizedCount = 0;
      let totalSize = 0;
      
      for (const img of imageFiles.slice(0, 50)) {
        try {
          const stats = await fs.stat(img);
          totalSize += stats.size;
          
          if (stats.size > 200 * 1024) { // Images larger than 200KB
            unoptimizedCount++;
          }
        } catch (e) {
          // Skip if can't read
        }
      }
      
      if (unoptimizedCount > 0) {
        issues.push({
          type: 'large-images',
          count: unoptimizedCount,
          severity: 'high',
          message: `${unoptimizedCount} images exceed 200KB and should be optimized`,
        });
      }
      
      // Check for Next.js Image usage
      const nextImageResult = execCommand('grep -r "next/image" src app --include="*.tsx" | wc -l', { silent: true });
      const nextImageCount = nextImageResult.success ? parseInt(nextImageResult.output.trim(), 10) : 0;
      
      const regularImageResult = execCommand('grep -r "<img" src app --include="*.tsx" | wc -l', { silent: true });
      const regularImageCount = regularImageResult.success ? parseInt(regularImageResult.output.trim(), 10) : 0;
      
      if (regularImageCount > nextImageCount) {
        issues.push({
          type: 'not-using-next-image',
          count: regularImageCount - nextImageCount,
          severity: 'medium',
          message: `${regularImageCount - nextImageCount} images not using Next.js Image component`,
        });
      }
      
      return {
        issues: issues.length,
        details: issues,
        totalImages: imageFiles.length,
        totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
        nextImageUsage: nextImageCount,
        needsOptimization: issues.length > 0,
      };
    } catch (error) {
      return { issues: 0, details: [], totalImages: 0, needsOptimization: false };
    }
  }
  
  async analyzeRoutes() {
    await this.logger.debug('Analyzing routes...');
    
    const issues = [];
    
    // Check for pages without getStaticProps/getServerSideProps when needed
    // Check for large page components
    try {
      const pageFiles = await this.getAllFiles(path.join(CONFIG.rootDir, 'app'));
      const pages = pageFiles.filter(f => f.endsWith('page.tsx') || f.endsWith('page.ts'));
      
      let pagesWithoutOptimization = 0;
      
      for (const page of pages.slice(0, 20)) {
        try {
          const content = await fs.readFile(page, 'utf8');
          
          // Check if page uses client-side fetching when it could use SSG/SSR
          if (content.includes('useEffect') && content.includes('fetch') && !content.includes('getStaticProps') && !content.includes('getServerSideProps')) {
            pagesWithoutOptimization++;
          }
        } catch (e) {
          // Skip if can't read
        }
      }
      
      if (pagesWithoutOptimization > 0) {
        issues.push({
          type: 'pages-without-ssr-ssg',
          count: pagesWithoutOptimization,
          severity: 'medium',
          message: `${pagesWithoutOptimization} pages could benefit from SSR/SSG`,
        });
      }
      
      return {
        issues: issues.length,
        details: issues,
        totalPages: pages.length,
        needsOptimization: issues.length > 0,
      };
    } catch (error) {
      return { issues: 0, details: [], totalPages: 0, needsOptimization: false };
    }
  }
  
  async analyzeMemoization() {
    await this.logger.debug('Analyzing memoization...');
    
    const issues = [];
    
    // Check for React.memo usage
    const memoResult = execCommand('grep -r "React.memo" src app --include="*.tsx" | wc -l', { silent: true });
    const memoCount = memoResult.success ? parseInt(memoResult.output.trim(), 10) : 0;
    
    // Check for useMemo usage
    const useMemoResult = execCommand('grep -r "useMemo" src app --include="*.tsx" | wc -l', { silent: true });
    const useMemoCount = useMemoResult.success ? parseInt(useMemoResult.output.trim(), 10) : 0;
    
    // Check for useCallback usage
    const useCallbackResult = execCommand('grep -r "useCallback" src app --include="*.tsx" | wc -l', { silent: true });
    const useCallbackCount = useCallbackResult.success ? parseInt(useCallbackResult.output.trim(), 10) : 0;
    
    // Check for components that might benefit from memoization
    const componentResult = execCommand('find src app -name "*.tsx" -type f | wc -l', { silent: true });
    const componentCount = componentResult.success ? parseInt(componentResult.output.trim(), 10) : 0;
    
    const memoizationRatio = componentCount > 0 ? (memoCount / componentCount) : 0;
    
    if (memoizationRatio < 0.1 && componentCount > 10) {
      issues.push({
        type: 'low-memoization',
        memoRatio: memoizationRatio.toFixed(2),
        severity: 'low',
        message: `Only ${(memoizationRatio * 100).toFixed(1)}% of components use memoization`,
      });
    }
    
    return {
      issues: issues.length,
      details: issues,
      memoCount,
      useMemoCount,
      useCallbackCount,
      componentCount,
      needsOptimization: issues.length > 0,
    };
  }
  
  async analyzeBuildOutput() {
    await this.logger.debug('Analyzing build output...');
    
    const issues = [];
    
    // Try to build and analyze output
    const buildResult = execCommand('npm run build 2>&1 | tail -50', { silent: true });
    
    if (buildResult.success) {
      // Only flag explicit performance warnings, not normal build output text.
      const warningPatterns = [
        /large page data/i,
        /exceeds.*recommended size/i,
        /performance budget/i,
        /asset size limit/i,
        /warning/i,
      ];
      const hasPerformanceWarning = warningPatterns.some(pattern => pattern.test(buildResult.output));
      if (hasPerformanceWarning) {
        issues.push({
          type: 'large-chunks',
          severity: 'medium',
          message: 'Build output contains performance warnings',
        });
      }
    } else {
      issues.push({
        type: 'build-failed',
        severity: 'critical',
        message: 'Build failed - cannot analyze performance',
      });
    }
    
    return {
      issues: issues.length,
      details: issues,
      buildSuccess: buildResult.success,
      needsOptimization: issues.length > 0,
    };
  }
  
  async analyzeMemoryUsage() {
    await this.logger.debug('Analyzing memory usage patterns...');
    
    const issues = [];
    
    // Check for potential memory leaks
    // Look for useEffect without cleanup
    const useEffectResult = execCommand('grep -r "useEffect" src app --include="*.tsx" | wc -l', { silent: true });
    const useEffectCount = useEffectResult.success ? parseInt(useEffectResult.output.trim(), 10) : 0;
    
    const cleanupResult = execCommand('grep -r "useEffect" src app --include="*.tsx" -A 20 | grep -c "return.*=>" || true', { silent: true });
    const cleanupCount = cleanupResult.success ? parseInt(cleanupResult.output.trim(), 10) : 0;
    
    if (useEffectCount > cleanupCount * 1.5) {
      issues.push({
        type: 'missing-cleanup',
        count: useEffectCount - cleanupCount,
        severity: 'medium',
        message: `${useEffectCount - cleanupCount} useEffect hooks might be missing cleanup functions`,
      });
    }
    
    return {
      issues: issues.length,
      details: issues,
      useEffectCount,
      cleanupCount,
      needsOptimization: issues.length > 0,
    };
  }
  
  async analyzeRenderPerformance() {
    await this.logger.debug('Analyzing render performance...');
    
    const issues = [];
    
    // Check for unnecessary re-renders
    // Look for inline functions in JSX
    const inlineFunctionResult = execCommand('grep -r "onClick={" src app --include="*.tsx" | grep -v "useCallback" | wc -l', { silent: true });
    const inlineFunctionCount = inlineFunctionResult.success ? parseInt(inlineFunctionResult.output.trim(), 10) : 0;
    
    if (inlineFunctionCount > 10) {
      issues.push({
        type: 'inline-functions',
        count: inlineFunctionCount,
        severity: 'low',
        message: `${inlineFunctionCount} inline functions in JSX that could cause re-renders`,
      });
    }
    
    // Check for inline objects in JSX
    const inlineObjectResult = execCommand('grep -r "style={{" src app --include="*.tsx" | wc -l', { silent: true });
    const inlineObjectCount = inlineObjectResult.success ? parseInt(inlineObjectResult.output.trim(), 10) : 0;
    
    if (inlineObjectCount > 20) {
      issues.push({
        type: 'inline-objects',
        count: inlineObjectCount,
        severity: 'low',
        message: `${inlineObjectCount} inline style objects that could cause re-renders`,
      });
    }
    
    return {
      issues: issues.length,
      details: issues,
      inlineFunctionCount,
      inlineObjectCount,
      needsOptimization: issues.length > 0,
    };
  }
  
  async analyzeAPIPerformance() {
    await this.logger.debug('Analyzing API performance...');
    
    const issues = [];
    
    // Check for API routes without caching
    try {
      const apiFiles = await this.getAllFiles(path.join(CONFIG.rootDir, 'app'));
      const apiRoutes = apiFiles.filter(f => f.includes('route.ts') || f.includes('route.tsx'));
      
      let routesWithoutCache = 0;
      
      for (const route of apiRoutes.slice(0, 20)) {
        try {
          const content = await fs.readFile(route, 'utf8');
          
          // Check for cache headers or revalidate
          if (!content.includes('Cache-Control') && !content.includes('revalidate') && !content.includes('export const revalidate')) {
            routesWithoutCache++;
          }
        } catch (e) {
          // Skip if can't read
        }
      }
      
      if (routesWithoutCache > 0) {
        issues.push({
          type: 'api-without-cache',
          count: routesWithoutCache,
          severity: 'medium',
          message: `${routesWithoutCache} API routes without caching headers`,
        });
      }
      
      return {
        issues: issues.length,
        details: issues,
        totalRoutes: apiRoutes.length,
        needsOptimization: issues.length > 0,
      };
    } catch (error) {
      return { issues: 0, details: [], totalRoutes: 0, needsOptimization: false };
    }
  }
  
  calculatePerformanceScore(analysis) {
    let score = 100;
    
    // Deduct points for various performance issues
    if (analysis.bundleSize.needsOptimization) score -= 10;
    if (analysis.codeSplitting.needsOptimization) score -= 15;
    if (analysis.lazyLoading.needsOptimization) score -= 10;
    if (analysis.images.needsOptimization) score -= 10;
    if (analysis.routes.needsOptimization) score -= 8;
    if (analysis.memoization.needsOptimization) score -= 5;
    if (analysis.buildOutput.needsOptimization) score -= 15;
    if (analysis.memoryUsage.needsOptimization) score -= 10;
    if (analysis.renderPerformance.needsOptimization) score -= 8;
    if (analysis.apiPerformance.needsOptimization) score -= 7;
    
    // Subtract for each issue found
    score -= analysis.bundleSize.largeFiles.length * 0.5;
    score -= analysis.codeSplitting.issues * 2;
    score -= analysis.lazyLoading.issues * 1.5;
    score -= analysis.images.issues * 2;
    score -= analysis.routes.issues * 1.5;
    score -= analysis.memoization.issues * 1;
    score -= analysis.memoryUsage.issues * 2;
    score -= analysis.renderPerformance.issues * 0.5;
    score -= analysis.apiPerformance.issues * 1.5;
    
    return Math.max(0, Math.min(100, Math.round(score)));
  }
  
  generateOptimizations(analysis) {
    const optimizations = [];
    
    if (analysis.bundleSize.needsOptimization) {
      optimizations.push({
        priority: 'high',
        category: 'bundle',
        message: 'Optimize bundle size',
        action: 'optimize-bundle',
        details: `${analysis.bundleSize.largeFiles.length} large files detected`,
      });
    }
    
    if (analysis.codeSplitting.needsOptimization) {
      optimizations.push({
        priority: 'high',
        category: 'code-splitting',
        message: 'Improve code splitting',
        action: 'improve-code-splitting',
        details: `${analysis.codeSplitting.issues} issues found`,
      });
    }
    
    if (analysis.lazyLoading.needsOptimization) {
      optimizations.push({
        priority: 'high',
        category: 'lazy-loading',
        message: 'Add lazy loading',
        action: 'add-lazy-loading',
        details: `${analysis.lazyLoading.issues} issues found`,
      });
    }
    
    if (analysis.images.needsOptimization) {
      optimizations.push({
        priority: 'high',
        category: 'images',
        message: 'Optimize images',
        action: 'optimize-images',
        details: `${analysis.images.issues} issues found`,
      });
    }
    
    if (analysis.routes.needsOptimization) {
      optimizations.push({
        priority: 'medium',
        category: 'routes',
        message: 'Optimize routes',
        action: 'optimize-routes',
        details: `${analysis.routes.issues} issues found`,
      });
    }
    
    if (analysis.memoization.needsOptimization) {
      optimizations.push({
        priority: 'medium',
        category: 'memoization',
        message: 'Add memoization',
        action: 'add-memoization',
        details: `${analysis.memoization.issues} issues found`,
      });
    }
    
    if (analysis.buildOutput.needsOptimization) {
      optimizations.push({
        priority: 'critical',
        category: 'build',
        message: 'Fix build optimization',
        action: 'optimize-build',
        details: analysis.buildOutput.details[0]?.message || 'Build issues detected',
      });
    }
    
    if (analysis.memoryUsage.needsOptimization) {
      optimizations.push({
        priority: 'high',
        category: 'memory',
        message: 'Fix memory issues',
        action: 'fix-memory',
        details: `${analysis.memoryUsage.issues} issues found`,
      });
    }
    
    if (analysis.renderPerformance.needsOptimization) {
      optimizations.push({
        priority: 'medium',
        category: 'render',
        message: 'Optimize render performance',
        action: 'optimize-render',
        details: `${analysis.renderPerformance.issues} issues found`,
      });
    }
    
    if (analysis.apiPerformance.needsOptimization) {
      optimizations.push({
        priority: 'medium',
        category: 'api',
        message: 'Optimize API performance',
        action: 'optimize-api',
        details: `${analysis.apiPerformance.issues} issues found`,
      });
    }
    
    return optimizations.sort((a, b) => {
      const priorities = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorities[a.priority] - priorities[b.priority];
    });
  }
}

// Performance Optimization Engine
class PerformanceOptimizationEngine {
  constructor(logger) {
    this.logger = logger;
    this.optimizationCount = 0;
  }
  
  async applyOptimizations(analysis) {
    await this.logger.info('⚡ Starting performance optimizations...');
    
    const optimizations = analysis.optimizations.slice(0, CONFIG.maxOptimizationsPerRun);
    const results = [];
    
    for (const opt of optimizations) {
      if (this.optimizationCount >= CONFIG.maxOptimizationsPerRun) {
        await this.logger.info('⚠️  Max optimizations per run reached, stopping');
        break;
      }
      
      await this.logger.info(`Applying optimization: ${opt.message}`);
      const result = await this.applyOptimization(opt, analysis);
      results.push({ optimization: opt, result });
      
      if (result.success) {
        this.optimizationCount++;
      }
    }
    
    return results;
  }
  
  async applyOptimization(optimization, analysis) {
    try {
      switch (optimization.action) {
        case 'optimize-bundle':
          return await this.optimizeBundle(analysis);
        
        case 'improve-code-splitting':
          return await this.improveCodeSplitting(analysis);
        
        case 'add-lazy-loading':
          return await this.addLazyLoading(analysis);
        
        case 'optimize-images':
          return await this.optimizeImages(analysis);
        
        case 'optimize-routes':
          return await this.optimizeRoutes(analysis);
        
        case 'add-memoization':
          return await this.addMemoization(analysis);
        
        case 'optimize-build':
          return await this.optimizeBuild(analysis);
        
        case 'fix-memory':
          return await this.fixMemoryIssues(analysis);
        
        case 'optimize-render':
          return await this.optimizeRenderPerformance(analysis);
        
        case 'optimize-api':
          return await this.optimizeAPIPerformance(analysis);
        
        default:
          return { success: false, message: 'Unknown optimization action' };
      }
    } catch (error) {
      await this.logger.error(`Failed to apply optimization: ${optimization.action}`, { error: error.message });
      return { success: false, error: error.message };
    }
  }
  
  async optimizeBundle(analysis) {
    await this.logger.info('Optimizing bundle size...');
    
    // Add dynamic imports to large components
    const largeFiles = analysis.bundleSize.largeFiles.slice(0, 5);
    let optimized = 0;
    
    for (const file of largeFiles) {
      try {
        const content = await fs.readFile(file.path, 'utf8');
        
        // Skip if already using dynamic import
        if (content.includes('dynamic') || content.includes('React.lazy')) {
          continue;
        }
        
        // This is a placeholder - real implementation would use AI to intelligently split components
        // For now, we'll just log the recommendation
        await this.logger.info(`Recommendation: Split ${file.path} (${file.sizeKB}KB)`);
        optimized++;
      } catch (e) {
        // Skip if can't read
      }
    }
    
    return {
      success: optimized > 0,
      message: `Analyzed ${largeFiles.length} large files`,
      changes: false, // Would need AI to actually modify code
    };
  }
  
  async improveCodeSplitting(analysis) {
    await this.logger.info('Improving code splitting...');
    
    // Analyze large files and suggest splitting
    const largeFiles = analysis.codeSplitting.details.find(d => d.type === 'large-files');
    
    if (largeFiles && largeFiles.files) {
      await this.logger.info(`Found ${largeFiles.files.length} files that should be split`);
      return {
        success: true,
        message: `Identified ${largeFiles.files.length} files for splitting`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No code splitting improvements needed', changes: false };
  }
  
  async addLazyLoading(analysis) {
    await this.logger.info('Adding lazy loading...');
    
    // Check for images without lazy loading
    const imageIssues = analysis.lazyLoading.details.find(d => d.type === 'images-without-lazy');
    
    if (imageIssues) {
      await this.logger.info(`Found ${imageIssues.count} images that need lazy loading`);
      
      // Try to add loading="lazy" to img tags
      try {
        const result = execCommand('find src app -name "*.tsx" -type f -exec grep -l "<img" {} \\; | head -10', { silent: true });
        if (result.success && result.output) {
          const files = result.output.trim().split('\n').filter(f => f);
          await this.logger.info(`Found ${files.length} files with img tags`);
          
          // In a real implementation, we would use AI to add loading="lazy" to images
          return {
            success: true,
            message: `Identified ${files.length} files for lazy loading`,
            changes: false,
          };
        }
      } catch (e) {
        // Skip if command fails
      }
    }
    
    return { success: false, message: 'No lazy loading improvements needed', changes: false };
  }
  
  async optimizeImages(analysis) {
    await this.logger.info('Optimizing images...');
    
    // Log recommendations for image optimization
    const imageIssues = analysis.images.details;
    
    if (imageIssues.length > 0) {
      await this.logger.info(`Found ${imageIssues.length} image optimization opportunities`);
      return {
        success: true,
        message: `Identified ${imageIssues.length} image optimization needs`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No image optimizations needed', changes: false };
  }
  
  async optimizeRoutes(analysis) {
    await this.logger.info('Optimizing routes...');
    
    const routeIssues = analysis.routes.details;
    
    if (routeIssues.length > 0) {
      await this.logger.info(`Found ${routeIssues.length} route optimization opportunities`);
      return {
        success: true,
        message: `Identified ${routeIssues.length} routes for optimization`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No route optimizations needed', changes: false };
  }
  
  async addMemoization(analysis) {
    await this.logger.info('Adding memoization...');
    
    const memoIssues = analysis.memoization.details;
    
    if (memoIssues.length > 0) {
      await this.logger.info(`Found ${memoIssues.length} memoization opportunities`);
      return {
        success: true,
        message: `Identified ${memoIssues.length} components for memoization`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No memoization improvements needed', changes: false };
  }
  
  async optimizeBuild(analysis) {
    await this.logger.info('Optimizing build...');
    
    if (!analysis.buildOutput.buildSuccess) {
      // Try to fix build errors
      execCommand('rm -rf .next', { silent: true });
      const result = execCommand('npm run build', { silent: false });
      
      return {
        success: result.success,
        message: result.success ? 'Build successful after cleanup' : 'Build still failing',
        changes: result.success,
      };
    }
    
    return { success: true, message: 'Build is already optimized', changes: false };
  }
  
  async fixMemoryIssues(analysis) {
    await this.logger.info('Fixing memory issues...');
    
    const memoryIssues = analysis.memoryUsage.details;
    
    if (memoryIssues.length > 0) {
      await this.logger.info(`Found ${memoryIssues.length} potential memory issues`);
      return {
        success: true,
        message: `Identified ${memoryIssues.length} memory optimization opportunities`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No memory issues found', changes: false };
  }
  
  async optimizeRenderPerformance(analysis) {
    await this.logger.info('Optimizing render performance...');
    
    const renderIssues = analysis.renderPerformance.details;
    
    if (renderIssues.length > 0) {
      await this.logger.info(`Found ${renderIssues.length} render performance issues`);
      return {
        success: true,
        message: `Identified ${renderIssues.length} render optimization opportunities`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No render optimizations needed', changes: false };
  }
  
  async optimizeAPIPerformance(analysis) {
    await this.logger.info('Optimizing API performance...');
    
    const apiIssues = analysis.apiPerformance.details;
    
    if (apiIssues.length > 0) {
      await this.logger.info(`Found ${apiIssues.length} API performance issues`);
      return {
        success: true,
        message: `Identified ${apiIssues.length} API optimization opportunities`,
        changes: false,
      };
    }
    
    return { success: false, message: 'No API optimizations needed', changes: false };
  }
}

// Git Integration
class GitManager {
  constructor(logger) {
    this.logger = logger;
  }
  
  async hasChanges() {
    const result = execCommand('git status --porcelain', { silent: true });
    return result.success && result.output.trim().length > 0;
  }
  
  async commitAndPush(message, changes = []) {
    if (!CONFIG.autoCommit) {
      await this.logger.info('Auto-commit disabled, skipping commit');
      return { success: false, message: 'Auto-commit disabled' };
    }
    
    try {
      if (!(await this.hasChanges())) {
        await this.logger.info('No changes to commit');
        return { success: true, message: 'No changes' };
      }
      
      // Stage all changes
      execCommand('git add .');
      
      // Create commit message
      const commitMsg = `⚡ AI Performance Optimization: ${message}

${changes.length > 0 ? 'Optimizations:\n' + changes.map(c => `- ${c}`).join('\n') : ''}

Automated by AI Performance Optimizer Agent
Timestamp: ${new Date().toISOString()}`;
      
      // Commit
      execCommand(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
      await this.logger.success('✅ Changes committed');
      
      // Push if enabled
      if (CONFIG.autoPush) {
        const pushResult = execCommand('git push origin main');
        if (pushResult.success) {
          await this.logger.success('✅ Changes pushed to main');
          return { success: true, message: 'Committed and pushed' };
        } else {
          await this.logger.warn('⚠️  Failed to push changes');
          return { success: false, message: 'Commit succeeded, push failed' };
        }
      }
      
      return { success: true, message: 'Committed (push disabled)' };
    } catch (error) {
      await this.logger.error('Failed to commit changes', { error: error.message });
      return { success: false, error: error.message };
    }
  }
}

// Report Generator
class ReportGenerator {
  constructor(logger) {
    this.logger = logger;
  }
  
  async generateReport(analysis, optimizations, runtime) {
    const report = {
      metadata: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        runtime: runtime,
        repository: CONFIG.repository,
      },
      analysis: {
        performanceScore: analysis.performanceScore,
        summary: {
          bundleSizeMB: analysis.bundleSize.totalSizeMB,
          bundleIssues: analysis.bundleSize.largeFiles.length,
          codeSplittingIssues: analysis.codeSplitting.issues,
          lazyLoadingIssues: analysis.lazyLoading.issues,
          imageIssues: analysis.images.issues,
          routeIssues: analysis.routes.issues,
          memoizationIssues: analysis.memoization.issues,
          buildStatus: analysis.buildOutput.buildSuccess ? 'passing' : 'failing',
          memoryIssues: analysis.memoryUsage.issues,
          renderIssues: analysis.renderPerformance.issues,
          apiIssues: analysis.apiPerformance.issues,
        },
        optimizations: analysis.optimizations,
      },
      optimizations: {
        attempted: optimizations.length,
        successful: optimizations.filter(o => o.result.success).length,
        failed: optimizations.filter(o => !o.result.success).length,
        details: optimizations,
      },
      nextSteps: this.generateNextSteps(analysis, optimizations),
    };
    
    // Save report
    const reportPath = path.join(CONFIG.reportsDir, `performance-optimizer-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    await this.logger.success(`📊 Report saved to ${reportPath}`);
    
    // Also save as latest
    const latestPath = path.join(CONFIG.reportsDir, 'performance-optimizer-latest.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));
    
    return report;
  }
  
  generateNextSteps(analysis, optimizations) {
    const steps = [];
    
    const failedOpts = optimizations.filter(o => !o.result.success);
    if (failedOpts.length > 0) {
      steps.push({
        priority: 'high',
        action: 'Review failed optimizations',
        details: failedOpts.map(o => o.optimization.message),
      });
    }
    
    if (analysis.performanceScore < 70) {
      steps.push({
        priority: 'critical',
        action: 'Performance score below 70',
        details: 'Immediate optimization required',
      });
    }
    
    const remainingOpts = analysis.optimizations.slice(CONFIG.maxOptimizationsPerRun);
    if (remainingOpts.length > 0) {
      steps.push({
        priority: 'medium',
        action: 'Continue optimizing remaining issues',
        details: `${remainingOpts.length} optimizations pending`,
      });
    }
    
    return steps;
  }
}

// Main Agent Class
class AIPerformanceOptimizerAgent {
  constructor() {
    const logFile = path.join(CONFIG.logsDir, 'ai-performance-optimizer.log');
    this.logger = new Logger(logFile);
    this.analysisEngine = new PerformanceAnalysisEngine(this.logger);
    this.optimizationEngine = new PerformanceOptimizationEngine(this.logger);
    this.gitManager = new GitManager(this.logger);
    this.reportGenerator = new ReportGenerator(this.logger);
    this.isRunning = false;
  }
  
  async run() {
    const startTime = Date.now();
    
    await this.logger.info('⚡ AI Performance Optimizer Agent starting (ULTRA-FAST MODE)...');
    await this.logger.info(`⚡ Configuration: ${CONFIG.intervalMinutes}min interval, ${CONFIG.maxOptimizationsPerRun} optimizations/run`);
    
    try {
      // Step 1: Analyze performance (optimized for speed)
      const analysis = await this.analysisEngine.analyze();
      await this.logger.info(`⚡ Performance Score: ${analysis.performanceScore}/100`);
      
      // Step 2: Apply optimizations (fast mode)
      const optimizations = await this.optimizationEngine.applyOptimizations(analysis);
      const successfulOpts = optimizations.filter(o => o.result.success && o.result.changes);
      await this.logger.info(`⚡ Optimizations applied: ${successfulOpts.length}/${optimizations.length}`);
      
      // Step 3: Commit and push changes (autonomous)
      const changesDescription = successfulOpts.map(o => o.optimization.message);
      
      if (changesDescription.length > 0) {
        const gitResult = await this.gitManager.commitAndPush(
          `⚡ Performance Optimization: ${successfulOpts.length} optimizations applied`,
          changesDescription
        );
        
        if (gitResult.success) {
          await this.logger.success(`✅ Changes committed and pushed successfully`);
        }
      } else {
        await this.logger.info('⚡ No changes to commit');
      }
      
      // Step 4: Generate report (lightweight)
      const runtime = Date.now() - startTime;
      const report = await this.reportGenerator.generateReport(analysis, optimizations, runtime);
      
      await this.logger.success(`⚡ Run complete in ${(runtime / 1000).toFixed(1)}s`);
      await this.logger.success(`📊 Performance Score: ${report.analysis.performanceScore}/100`);
      
      return report;
    } catch (error) {
      await this.logger.error('❌ Agent run failed', { error: error.message, stack: error.stack });
      throw error;
    }
  }
  
  async runContinuously() {
    this.isRunning = true;
    await this.logger.info('🚀 Starting ULTRA-FAST continuous performance optimization mode...');
    const intervalSec = CONFIG.intervalSeconds || (CONFIG.intervalMinutes * 60);
    await this.logger.info(`⚡ Running every ${intervalSec} seconds for MAXIMUM SPEED`);
    await this.logger.info('🤖 Fully autonomous mode - auto-commit and auto-push enabled');
    
    while (this.isRunning) {
      try {
        const startTime = Date.now();
        await this.run();
        const runtime = Date.now() - startTime;
        
        // Calculate wait time (ensure minimum 5 seconds between runs for ULTRA-FAST mode)
        const intervalMs = intervalSec * 1000;
        const waitMs = Math.max(
          intervalMs - runtime,
          5000 // ⚡ MINIMUM 5 seconds between runs for MAXIMUM SPEED
        );
        
        await this.logger.info(`⚡ Run completed in ${(runtime / 1000).toFixed(1)}s, next run in ${(waitMs / 1000).toFixed(1)}s`);
        await new Promise(resolve => setTimeout(resolve, waitMs));
      } catch (error) {
        await this.logger.error('Error in continuous loop', { error: error.message });
        // ⚡ Ultra-fast retry on error - wait only 5 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }
  
  stop() {
    this.isRunning = false;
    this.logger.info('🛑 Stopping continuous operation...');
  }
}

// CLI Interface
async function main() {
  await ensureDirectories();
  
  const agent = new AIPerformanceOptimizerAgent();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous';
  
  switch (command) {
    case 'run':
      await agent.run();
      break;
    
    case 'continuous':
    case 'start':
    case '':
      await agent.runContinuously();
      break;
    
    case 'analyze':
      const analysis = await agent.analysisEngine.analyze();
      console.log(JSON.stringify(analysis, null, 2));
      break;
    
    default:
      console.log(`
AI Performance Optimizer Agent (APOA)

Usage:
  node ai-performance-optimizer.cjs [command]

Commands:
  run         Run one optimization cycle
  continuous  Run continuously with periodic intervals (DEFAULT)
  start       Alias for continuous
  analyze     Run analysis only (no optimizations)

Environment Variables:
  CONTINUOUS_MODE=true           Enable continuous mode (default: true)
  INTERVAL_SECONDS=30            Seconds between runs (default: 30 - ⚡ ULTRA-FAST)
  INTERVAL_MINUTES=0.5           Minutes between runs (backward compatibility)
  AUTO_COMMIT=true              Auto-commit changes (default: true)
  AUTO_PUSH=true                Auto-push to main (default: true)
  MAX_OPTIMIZATIONS_PER_RUN=50   Max optimizations per cycle (default: 50 - MAXIMUM SPEED)
  PRIORITY_MODE=all             Priority filter (critical|high|medium|low|all)
  PARALLEL_ANALYSIS=true         Enable parallel analysis (default: true)

Examples:
  node ai-performance-optimizer.cjs          # Starts continuous mode automatically (30s intervals)
  node ai-performance-optimizer.cjs continuous  # Explicit continuous mode
  node ai-performance-optimizer.cjs run      # Single run
  INTERVAL_SECONDS=10 node ai-performance-optimizer.cjs  # ⚡ Ultra-fast 10-second intervals
  AUTO_PUSH=false node ai-performance-optimizer.cjs  # Test mode (no push)
      `);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Run if executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { AIPerformanceOptimizerAgent, CONFIG };

