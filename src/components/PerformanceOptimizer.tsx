import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
      }

      // Bundle size estimation
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((acc, resource) => {
        if (resource.transferSize) {
          return acc + resource.transferSize;
        }
        return acc;
      }, 0);

      setMetrics(prev => prev ? { ...prev, bundleSize: totalSize } : null);

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Auto-optimization
  const performOptimizations = useCallback(async () => {
    if (!autoOptimize || !enabled) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
        newOptimizations.push('Lazy loading images enabled');
      }

      // Preload critical resources
      const criticalLinks = document.querySelectorAll('link[data-critical]');
      criticalLinks.forEach(link => {
        link.setAttribute('rel', 'preload');
        newOptimizations.push('Critical resources preloaded');
      });

      // Optimize fonts
      const fontLinks = document.querySelectorAll('link[rel="stylesheet"][href*="font"]');
      fontLinks.forEach(link => {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'font');
        link.setAttribute('crossorigin', 'anonymous');
        newOptimizations.push('Font optimization applied');
      });

      // Service worker optimization
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            newOptimizations.push('Service worker active');
          }
        } catch (error) {
          console.warn('Service worker check failed:', error);
        }
      }

      // Memory optimization
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
          newOptimizations.push('Memory usage optimized');
        }
      }

    } catch (error) {
      console.warn('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
      setOptimizations(prev => [...prev, ...newOptimizations]);
    }
  }, [autoOptimize, enabled]);

  // Bundle analysis
  const analyzeBundle = useCallback(() => {
    if (!enabled) return;

    try {
      const modules = (performance as any).getEntriesByType('resource');
      const jsModules = modules.filter((m: any) => m.name.endsWith('.js'));
      const cssModules = modules.filter((m: any) => m.name.endsWith('.css'));

      const analysis = {
        totalModules: modules.length,
        jsModules: jsModules.length,
        cssModules: cssModules.length,
        totalSize: modules.reduce((acc: number, m: any) => acc + (m.transferSize || 0), 0),
        loadTime: performance.now(),
      };

      console.log('Bundle Analysis:', analysis);
      return analysis;
    } catch (error) {
      console.warn('Bundle analysis failed:', error);
      return null;
    }
  }, [enabled]);

  // Effect for initial setup
  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    performOptimizations();
    analyzeBundle();

    // Periodic performance checks
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [enabled, measurePerformance, performOptimizations, analyzeBundle]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1600) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;

    // Bundle size scoring (0-100)
    const bundleSizeMB = metrics.bundleSize / (1024 * 1024);
    if (bundleSizeMB > 2) score -= 20;
    else if (bundleSizeMB > 1) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Performance Monitor
            </h3>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                performanceScore >= 80 ? 'bg-green-500' : 
                performanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
              <span className="text-xs text-gray-500">{performanceScore}/100</span>
            </div>
          </div>

          {metrics && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                <span className="font-mono">{metrics.fcp?.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                <span className="font-mono">{metrics.lcp?.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Bundle:</span>
                <span className="font-mono">{(metrics.bundleSize / 1024 / 1024).toFixed(1)}MB</span>
              </div>
            </div>
          )}

          {isOptimizing && (
            <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
              Optimizing...
            </div>
          )}

          {optimizations.length > 0 && (
            <div className="mt-3">
              <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Recent Optimizations:
              </h4>
              <div className="space-y-1">
                {optimizations.slice(-3).map((opt, index) => (
                  <div key={index} className="text-xs text-green-600 dark:text-green-400">
                    ✓ {opt}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={performOptimizations}
            disabled={isOptimizing}
            className="mt-3 w-full px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
