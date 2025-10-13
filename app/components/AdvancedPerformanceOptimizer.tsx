import React, { useEffect, useCallback, useMemo } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  interactionToNextPaint: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  memoryUsage?: number;
  connectionSpeed?: string;
}

interface PerformanceThresholds {
  good: number;
  needsImprovement: number;
  poor: number;
}

const PERFORMANCE_THRESHOLDS: Record<string, PerformanceThresholds> = {
  LCP: { good: 2500, needsImprovement: 4000, poor: 4000 },
  FID: { good: 100, needsImprovement: 300, poor: 300 },
  CLS: { good: 0.1, needsImprovement: 0.25, poor: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000, poor: 3000 },
  TTFB: { good: 800, needsImprovement: 1800, poor: 1800 },
};

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = React.useState(false);
  const [optimizations, setOptimizations] = React.useState<string[]>([]);

  // Advanced performance monitoring
  const updateMetric = useCallback((metric: any) => {
    setMetrics(prev => ({
      ...prev,
      [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
       metric.name === 'INP' ? 'interactionToNextPaint' :
       metric.name === 'FCP' ? 'firstContentfulPaint' :
       metric.name === 'LCP' ? 'largestContentfulPaint' :
       metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime']: metric.value
    }));
  }, []);

  // Memory usage monitoring
  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
      };
    }
    return null;
  }, []);

  // Connection speed detection
  const getConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      return connection.effectiveType || 'unknown';
    }
    return 'unknown';
  }, []);

  // Advanced optimizations
  const performOptimizations = useCallback(() => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        newOptimizations.push('Added lazy loading to images');
      }
      if (!img.decoding) {
        img.decoding = 'async';
        newOptimizations.push('Added async decoding to images');
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
        newOptimizations.push(`Preloaded critical resource: ${resource}`);
      }
    });

    // Service Worker registration
    if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => newOptimizations.push('Service Worker registered'))
        .catch(() => {});
    }

    // Resource hints
    const dnsPrefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.google-analytics.com',
      'www.googletagmanager.com',
    ];

    dnsPrefetchDomains.forEach(domain => {
      if (!document.querySelector(`link[href="//${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
        newOptimizations.push(`Added DNS prefetch for: ${domain}`);
      }
    });

    // Critical CSS inlining
    const criticalCSS = `
      .hero-section { opacity: 0; }
      .hero-section.loaded { opacity: 1; transition: opacity 0.3s ease; }
      .loading-skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
      @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    `;

    if (!document.querySelector('#critical-css')) {
      const style = document.createElement('style');
      style.id = 'critical-css';
      style.textContent = criticalCSS;
      document.head.appendChild(style);
      newOptimizations.push('Inlined critical CSS');
    }

    // Bundle splitting optimization
    const scriptTags = document.querySelectorAll('script[src]');
    const jsFiles = Array.from(scriptTags).map(script => script.getAttribute('src'));
    const largeFiles = jsFiles.filter(src => src && src.includes('.js') && !src.includes('vendor'));
    
    if (largeFiles.length > 3) {
      newOptimizations.push('Consider further bundle splitting for better performance');
    }

    setOptimizations(prev => [...prev, ...newOptimizations]);
    setIsOptimizing(false);
  }, []);

  // Performance analysis
  const analyzePerformance = useCallback(() => {
    if (!metrics) return;

    const analysis = {
      score: 0,
      issues: [] as string[],
      recommendations: [] as string[],
    };

    // LCP Analysis
    if (metrics.largestContentfulPaint) {
      const lcpScore = metrics.largestContentfulPaint <= PERFORMANCE_THRESHOLDS.LCP.good ? 3 :
                      metrics.largestContentfulPaint <= PERFORMANCE_THRESHOLDS.LCP.needsImprovement ? 2 : 1;
      analysis.score += lcpScore;
      
      if (metrics.largestContentfulPaint > PERFORMANCE_THRESHOLDS.LCP.good) {
        analysis.issues.push(`LCP is ${metrics.largestContentfulPaint}ms (target: <${PERFORMANCE_THRESHOLDS.LCP.good}ms)`);
        analysis.recommendations.push('Optimize images, use WebP format, implement lazy loading');
      }
    }

    // CLS Analysis
    if (metrics.cumulativeLayoutShift) {
      const clsScore = metrics.cumulativeLayoutShift <= PERFORMANCE_THRESHOLDS.CLS.good ? 3 :
                      metrics.cumulativeLayoutShift <= PERFORMANCE_THRESHOLDS.CLS.needsImprovement ? 2 : 1;
      analysis.score += clsScore;
      
      if (metrics.cumulativeLayoutShift > PERFORMANCE_THRESHOLDS.CLS.good) {
        analysis.issues.push(`CLS is ${metrics.cumulativeLayoutShift} (target: <${PERFORMANCE_THRESHOLDS.CLS.good})`);
        analysis.recommendations.push('Add size attributes to images, avoid dynamic content insertion');
      }
    }

    // FID Analysis
    if (metrics.interactionToNextPaint) {
      const fidScore = metrics.interactionToNextPaint <= PERFORMANCE_THRESHOLDS.FID.good ? 3 :
                      metrics.interactionToNextPaint <= PERFORMANCE_THRESHOLDS.FID.needsImprovement ? 2 : 1;
      analysis.score += fidScore;
      
      if (metrics.interactionToNextPaint > PERFORMANCE_THRESHOLDS.FID.good) {
        analysis.issues.push(`INP is ${metrics.interactionToNextPaint}ms (target: <${PERFORMANCE_THRESHOLDS.FID.good}ms)`);
        analysis.recommendations.push('Reduce JavaScript execution time, optimize event handlers');
      }
    }

    return analysis;
  }, [metrics]);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    // Measure additional metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = getMemoryUsage();
      const connection = getConnectionSpeed();
      
      setMetrics(prev => ({
        ...prev,
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        memoryUsage: memory?.used,
        connectionSpeed: connection,
      }));
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Auto-optimize after 2 seconds
    const optimizationTimer = setTimeout(performOptimizations, 2000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearTimeout(optimizationTimer);
    };
  }, [updateMetric, getMemoryUsage, getConnectionSpeed, performOptimizations]);

  const performanceAnalysis = useMemo(() => analyzePerformance(), [analyzePerformance]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-sm text-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance Monitor</h3>
        <button
          onClick={performOptimizations}
          disabled={isOptimizing}
          className="px-2 py-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded text-xs"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>
      
      {metrics && (
        <div className="space-y-1 mb-2">
          <div>LCP: {metrics.largestContentfulPaint?.toFixed(0)}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift?.toFixed(3)}</div>
          <div>INP: {metrics.interactionToNextPaint?.toFixed(0)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint?.toFixed(0)}ms</div>
          <div>TTFB: {metrics.timeToFirstByte?.toFixed(0)}ms</div>
          {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage}MB</div>}
          {metrics.connectionSpeed && <div>Connection: {metrics.connectionSpeed}</div>}
        </div>
      )}

      {performanceAnalysis && (
        <div className="text-xs">
          <div className="font-semibold mb-1">
            Score: {performanceAnalysis.score}/12
          </div>
          {performanceAnalysis.issues.length > 0 && (
            <div className="text-red-300 mb-1">
              Issues: {performanceAnalysis.issues.length}
            </div>
          )}
        </div>
      )}

      {optimizations.length > 0 && (
        <div className="mt-2 max-h-20 overflow-y-auto">
          <div className="text-green-300 text-xs">
            Optimizations applied: {optimizations.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;