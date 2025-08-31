import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  lazyLoadThreshold?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  lazyLoadThreshold = 0.1
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
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
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  // Image optimization
  const optimizeImagesOnPage = useCallback(() => {
    if (!optimizeImages) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="high" for above-the-fold images
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [optimizeImages]);

  // Intersection Observer for lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!('IntersectionObserver' in window)) return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('lazy-loaded');
            observer.unobserve(element);
          }
        });
      },
      { threshold: lazyLoadThreshold }
    );

    lazyElements.forEach((element) => observer.observe(element));
  }, [lazyLoadThreshold]);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // Add preconnect for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.gpteng.co'
    ];

    externalDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // Add dns-prefetch for performance
    const dnsDomains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//cdn.gpteng.co'
    ];

    dnsDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  }, []);

  // Main optimization function
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;

    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        new Promise(resolve => {
          optimizeImagesOnPage();
          resolve(true);
        }),
        new Promise(resolve => {
          setupLazyLoading();
          resolve(true);
        }),
        new Promise(resolve => {
          optimizeResourceHints();
          resolve(true);
        })
      ]);

      setOptimizationComplete(true);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImagesOnPage, setupLazyLoading, optimizeResourceHints]);

  // Effect to run optimizations
  useEffect(() => {
    if (enabled) {
      runOptimizations();
      measurePerformance();
    }
  }, [enabled, runOptimizations, measurePerformance]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return null;

    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;

    return Math.max(0, score);
  }, [metrics]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 max-w-sm"
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Performance Metrics
          </h3>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span className={metrics.fcp > 1800 ? 'text-red-600' : metrics.fcp > 1000 ? 'text-yellow-600' : 'text-green-600'}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span className={metrics.lcp > 4000 ? 'text-red-600' : metrics.lcp > 2500 ? 'text-yellow-600' : 'text-green-600'}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FID:</span>
              <span className={metrics.fid > 300 ? 'text-red-600' : metrics.fid > 100 ? 'text-yellow-600' : 'text-green-600'}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">CLS:</span>
              <span className={metrics.cls > 0.25 ? 'text-red-600' : metrics.cls > 0.1 ? 'text-yellow-600' : 'text-green-600'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            
            {performanceScore !== null && (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Score:</span>
                  <span className={`font-semibold ${
                    performanceScore >= 90 ? 'text-green-600' : 
                    performanceScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {performanceScore}/100
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Optimization Status */}
      <AnimatePresence>
        {isOptimizing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 left-4 bg-blue-600 text-white rounded-lg shadow-lg p-3 z-50"
          >
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span className="text-sm">Optimizing...</span>
            </div>
          </motion.div>
        )}
        
        {optimizationComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 left-4 bg-green-600 text-white rounded-lg shadow-lg p-3 z-50"
          >
            <div className="flex items-center space-x-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Optimized!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for lazy loading - moved to global styles */}
    </>
  );
};
