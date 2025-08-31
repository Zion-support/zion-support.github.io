import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  lazyLoadComponents?: boolean;
  preloadCritical?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  lazyLoadComponents = true,
  preloadCritical = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<string>('A');
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Ready');

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // DOM Content Loaded
      const domLoad = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (domLoad) {
        setMetrics(prev => ({ ...prev, domLoad: domLoad.domContentLoadedEventEnd - domLoad.domContentLoadedEventStart }));
      }

      // Window Load
      const windowLoad = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (windowLoad) {
        setMetrics(prev => ({ ...prev, windowLoad: windowLoad.loadEventEnd - windowLoad.loadEventStart }));
      }
    }
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enabled || !optimizeImages) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add responsive srcset if not present
      if (!img.srcset && img.src) {
        const originalSrc = img.src;
        img.srcset = `${originalSrc} 1x, ${originalSrc} 2x`;
      }
    });
  }, [enabled, optimizeImages]);

  // Component lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!enabled || !lazyLoadComponents) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.lazy) {
            target.classList.remove('lazy');
            target.classList.add('loaded');
            observer.unobserve(target);
          }
        }
      });
    });

    document.querySelectorAll('[data-lazy]').forEach(el => {
      observer.observe(el);
    });
  }, [enabled, lazyLoadComponents]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!enabled || !preloadCritical) return;
    
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js',
      '/fonts/critical.woff2'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, [enabled, preloadCritical]);

  // Performance optimization
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        setupLazyLoading(),
        preloadCriticalResources()
      ]);
      
      setOptimizationStatus('Optimized');
    } catch (error) {
      setOptimizationStatus('Error');
      console.error('Performance optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImages, setupLazyLoading, preloadCriticalResources]);

  // Memory management
  const cleanupMemory = useCallback(() => {
    if (!enabled) return;
    
    // Clear performance observer
    if ('PerformanceObserver' in window) {
      // Cleanup observers when component unmounts
      return () => {
        // This will be handled by the cleanup function
      };
    }
  }, [enabled]);

  // Effect for performance monitoring
  useEffect(() => {
    if (!enabled) return;
    
    measurePerformance();
    
    // Cleanup function
    return cleanupMemory;
  }, [enabled, measurePerformance, cleanupMemory]);

  // Effect for performance score calculation
  useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      const score = calculatePerformanceScore();
      setPerformanceScore(score);
    }
  }, [metrics, calculatePerformanceScore]);

  // Effect for initial optimizations
  useEffect(() => {
    if (enabled) {
      runOptimizations();
    }
  }, [enabled, runOptimizations]);

  // Performance metrics display
  const renderMetrics = () => {
    if (!showMetrics) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm z-50"
      >
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Performance Metrics
        </h3>
        <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid && metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-500' : 'text-green-500'}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">Score:</span>
            <span className={`text-lg font-bold ${
              performanceScore === 'A' ? 'text-green-500' :
              performanceScore === 'B' ? 'text-blue-500' :
              performanceScore === 'C' ? 'text-yellow-500' :
              performanceScore === 'D' ? 'text-orange-500' : 'text-red-500'
            }`}>
              {performanceScore}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Status: {optimizationStatus}
          </div>
        </div>
      </motion.div>
    );
  };

  // Performance optimization status indicator
  const renderOptimizationStatus = () => {
    if (!enabled) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 z-50"
        title={`Performance Optimization: ${optimizationStatus}`}
      >
        <div className={`w-3 h-3 rounded-full ${
          isOptimizing ? 'bg-yellow-500 animate-pulse' :
          optimizationStatus === 'Optimized' ? 'bg-green-500' :
          optimizationStatus === 'Error' ? 'bg-red-500' : 'bg-gray-400'
        }`} />
      </motion.div>
    );
  };

  if (!enabled) return null;

  return (
    <>
      {renderOptimizationStatus()}
      {renderMetrics()}
    </>
  );
};
