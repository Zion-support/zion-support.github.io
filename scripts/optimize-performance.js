#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Automatically optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Remove console statements from production builds
function removeConsoleStatements() {
  console.log('📝 Removing console statements...');
  
  const files = [
    'app/components/CoreWebVitals.tsx',
    'app/components/WebVitalsTracker.tsx',
    'app/components/AnalyticsProvider.tsx',
    'app/components/EnhancedErrorBoundary.tsx',
    'app/components/GlobalErrorBoundary.tsx',
    'app/components/ErrorBoundary.tsx',
    'app/components/ImprovedErrorBoundary.tsx',
    'app/components/ServiceWorkerRegistration.tsx',
    'app/contexts/AnalyticsContext.tsx',
    'app/api-docs/page.tsx',
    'app/DynamicPageLoader.tsx',
    'utils/performanceMonitoring.ts',
    'utils/advancedCaching.ts',
    'utils/usePerformanceMonitor.ts',
    'utils/enhancedErrorHandler.ts',
    'utils/registerServiceWorker.ts',
    'utils/errorHandler.ts',
    'utils/logger.ts'
  ];

  files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace console statements with logger calls
      content = content.replace(/console\.log\(/g, 'logger.log(');
      content = content.replace(/console\.warn\(/g, 'logger.warn(');
      content = content.replace(/console\.error\(/g, 'logger.error(');
      content = content.replace(/console\.info\(/g, 'logger.info(');
      content = content.replace(/console\.debug\(/g, 'logger.debug(');
      
      // Add logger import if not present
      if (content.includes('logger.') && !content.includes("import logger")) {
        content = content.replace(
          /import React/g,
          "import logger from '../utils/logger';\nimport React"
        );
      }
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// 2. Optimize CSS classes
function optimizeCSS() {
  console.log('🎨 Optimizing CSS...');
  
  const cssPath = path.join(process.cwd(), 'app/styles/futuristic.css');
  if (fs.existsSync(cssPath)) {
    let content = fs.readFileSync(cssPath, 'utf8');
    
    // Add missing utility classes
    const additionalCSS = `
/* Performance Optimizations */
.performance-optimized {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.smooth-scroll {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High Contrast Support */
@media (prefers-contrast: high) {
  .cyber-grid-enhanced {
    background-image: 
      linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px);
  }
  
  .neon-text {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
  }
}

/* Print Styles */
@media print {
  .cyber-grid-enhanced,
  .quantum-dots,
  .particle-container {
    display: none !important;
  }
  
  body {
    background: white !important;
    color: black !important;
  }
}
`;

    if (!content.includes('performance-optimized')) {
      content += additionalCSS;
      fs.writeFileSync(cssPath, content);
    }
  }
}

// 3. Create optimized component loader
function createOptimizedLoader() {
  console.log('⚡ Creating optimized component loader...');
  
  const loaderContent = `import React, { Suspense, ComponentType } from 'react';
import logger from '../utils/logger';

interface LazyComponentProps {
  fallback?: React.ReactNode;
  errorBoundary?: React.ComponentType<any>;
}

const defaultFallback = (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

export function createLazyComponent<T = {}>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: LazyComponentProps = {}
) {
  const LazyComponent = React.lazy(importFunc);
  
  return React.forwardRef<any, T>((props, ref) => (
    <Suspense fallback={options.fallback || defaultFallback}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ));
}

export function withErrorBoundary<T = {}>(
  Component: ComponentType<T>,
  ErrorFallback?: ComponentType<{ error: Error; retry: () => void }>
) {
  return React.forwardRef<any, T>((props, ref) => {
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
      const handleError = (error: Error) => {
        logger.error('Component error:', error);
        setError(error);
        setHasError(true);
      };

      window.addEventListener('error', handleError);
      return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError && error) {
      if (ErrorFallback) {
        return <ErrorFallback error={error} retry={() => setHasError(false)} />;
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-6">{error.message}</p>
            <button
              onClick={() => setHasError(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return <Component {...props} ref={ref} />;
  });
}
`;

  const loaderPath = path.join(process.cwd(), 'utils/optimizedLoader.tsx');
  fs.writeFileSync(loaderPath, loaderContent);
}

// 4. Create performance monitoring utility
function createPerformanceMonitor() {
  console.log('📊 Creating performance monitor...');
  
  const monitorContent = `import { useEffect, useRef } from 'react';
import logger from './logger';

interface PerformanceMetrics {
  name: string;
  duration: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Monitor navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordMetric(entry.name, entry.duration);
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (e) {
      logger.warn('Navigation timing observer not supported');
    }

    // Monitor paint timing
    try {
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordMetric(\`paint-\${entry.name}\`, entry.startTime);
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (e) {
      logger.warn('Paint timing observer not supported');
    }

    // Monitor largest contentful paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordMetric('lcp', entry.startTime);
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      logger.warn('LCP observer not supported');
    }
  }

  private recordMetric(name: string, duration: number) {
    const metric: PerformanceMetrics = {
      name,
      duration,
      timestamp: Date.now()
    };
    
    this.metrics.push(metric);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(duration)
      });
    }
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getAverageMetric(name: string): number {
    const filtered = this.metrics.filter(m => m.name === name);
    if (filtered.length === 0) return 0;
    
    const sum = filtered.reduce((acc, m) => acc + m.duration, 0);
    return sum / filtered.length;
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// React hook for component performance monitoring
export function usePerformanceMonitor(componentName: string) {
  const startTime = useRef<number>();
  const endTime = useRef<number>();

  useEffect(() => {
    startTime.current = performance.now();
    
    return () => {
      if (startTime.current) {
        endTime.current = performance.now();
        const duration = endTime.current - startTime.current;
        performanceMonitor.recordMetric(\`component-\${componentName}\`, duration);
      }
    };
  }, [componentName]);
}

export default performanceMonitor;
`;

  const monitorPath = path.join(process.cwd(), 'utils/performanceMonitor.ts');
  fs.writeFileSync(monitorPath, monitorContent);
}

// 5. Update package.json scripts
function updatePackageScripts() {
  console.log('📦 Updating package scripts...');
  
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  packageJson.scripts = {
    ...packageJson.scripts,
    'optimize': 'node scripts/optimize-performance.js',
    'build:optimized': 'npm run optimize && npm run build',
    'prebuild': 'npm run optimize && npm run clean && npm run sitemap'
  };
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

// Run optimizations
try {
  removeConsoleStatements();
  optimizeCSS();
  createOptimizedLoader();
  createPerformanceMonitor();
  updatePackageScripts();
  
  console.log('✅ Performance optimization completed successfully!');
  console.log('🚀 Run "npm run build:optimized" to build with optimizations');
} catch (error) {
  console.error('❌ Optimization failed:', error);
  process.exit(1);
}