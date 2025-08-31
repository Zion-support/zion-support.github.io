import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Gauge, HardDrive, Network, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  networkRequests: number;
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Memoized performance thresholds
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 }
  }), []);

  // Performance monitoring setup
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    const startTime = performance.now();
    
    try {
      // First Contentful Paint
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
          }
        }
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : null);
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure additional metrics
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      const networkRequests = performance.getEntriesByType('resource').length;
      const bundleSize = performance.getEntriesByType('navigation')[0]?.transferSize || 0;

      setMetrics(prev => ({
        fcp: prev?.fcp || 0,
        lcp: prev?.lcp || 0,
        fid: prev?.fid || 0,
        cls: prev?.cls || 0,
        ttfb: performance.timing?.responseStart - performance.timing?.requestStart || 0,
        domLoad: performance.timing?.domContentLoadedEventEnd - performance.timing?.navigationStart || 0,
        windowLoad: performance.timing?.loadEventEnd - performance.timing?.navigationStart || 0,
        loadTime,
        bundleSize,
        memoryUsage,
        networkRequests
      }));

    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }, [enabled]);

  // Auto-optimization logic
  const runAutoOptimizations = useCallback(async () => {
    if (!autoOptimize || !enabled) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Preload critical resources
      const criticalResources = [
        '/fonts/orbitron-v19-latin-700.woff2',
        '/fonts/rajdhani-v13-latin-500.woff2'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'font';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        newOptimizations.push(`Preloaded critical font: ${resource}`);
      });

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

      // Font optimization
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      if (fontLinks.length === 0) {
        newOptimizations.push('Consider preloading critical fonts');
      }

      // Resource hints
      const dnsPrefetch = document.querySelector('link[rel="dns-prefetch"]');
      if (!dnsPrefetch) {
        newOptimizations.push('Consider adding DNS prefetch for external domains');
      }

      // Optimize CSS
      const styleSheets = Array.from(document.styleSheets);
      styleSheets.forEach(sheet => {
        if (sheet.href && !sheet.href.includes('critical')) {
          const link = document.querySelector(`link[href="${sheet.href}"]`);
          if (link) {
            link.setAttribute('media', 'print');
            link.setAttribute('onload', "this.media='all'");
            newOptimizations.push('Optimized CSS loading');
          }
        }
      });

      // Service worker optimization
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            newOptimizations.push('Service worker active and optimized');
          }
        } catch (error) {
          console.warn('Service worker optimization failed:', error);
        }
      }

      setOptimizations(newOptimizations);
    } catch (error) {
      console.warn('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, enabled]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > thresholds.fcp.needsImprovement) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    if (metrics.lcp > thresholds.lcp.needsImprovement) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    if (metrics.fid > thresholds.fid.needsImprovement) score -= 20;
    else if (metrics.fid > thresholds.fid.good) score -= 10;
    
    if (metrics.cls > thresholds.cls.needsImprovement) score -= 20;
    else if (metrics.cls > thresholds.cls.good) score -= 10;
    
    return Math.max(0, score);
  }, [thresholds]);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    setupPerformanceMonitoring();
    
    // Measure DOM and window load times
    const measureLoadTimes = () => {
      if (performance.timing) {
        const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
        
        setMetrics(prev => prev ? {
          ...prev,
          ttfb: performance.timing.responseStart - performance.timing.requestStart,
          domLoad,
          windowLoad
        } : null);
      }
    };

    if (document.readyState === 'complete') {
      measureLoadTimes();
    } else {
      window.addEventListener('load', measureLoadTimes);
    }

    // Run auto-optimizations after a delay
    timeoutRef.current = setTimeout(runAutoOptimizations, 2000);

    return cleanup;
  }, [enabled, setupPerformanceMonitoring, runAutoOptimizations, cleanup]);

  // Show metrics panel on hover
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  if (!enabled || !showMetrics) return null;

  const performanceScore = metrics ? calculatePerformanceScore(metrics) : 0;
  const grade = getPerformanceGrade(performanceScore);

  return (
    <div 
      className="fixed bottom-4 right-4 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Performance Score Badge */}
      <motion.div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer shadow-lg ${
          performanceScore >= 90 ? 'bg-green-500' :
          performanceScore >= 80 ? 'bg-yellow-500' :
          performanceScore >= 70 ? 'bg-orange-500' : 'bg-red-500'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {grade}
      </motion.div>

      {/* Metrics Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Performance Metrics
            </h3>
            
            {metrics ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Overall Score:</span>
                  <span className={`font-bold ${
                    performanceScore >= 90 ? 'text-green-600' :
                    performanceScore >= 80 ? 'text-yellow-600' :
                    performanceScore >= 70 ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {performanceScore}/100 ({grade})
                  </span>
                </div>
                
                {/* Core Web Vitals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>First Contentful Paint:</span>
                    <span className={metrics.fcp <= thresholds.fcp.good ? 'text-green-600' : 
                                   metrics.fcp <= thresholds.fcp.needsImprovement ? 'text-yellow-600' : 'text-red-600'}>
                      {metrics.fcp.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Largest Contentful Paint:</span>
                    <span className={metrics.lcp <= thresholds.lcp.good ? 'text-green-600' : 
                                   metrics.lcp <= thresholds.lcp.needsImprovement ? 'text-yellow-600' : 'text-red-600'}>
                      {metrics.lcp.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>First Input Delay:</span>
                    <span className={metrics.fid <= thresholds.fid.good ? 'text-green-600' : 
                                   metrics.fid <= thresholds.fid.needsImprovement ? 'text-yellow-600' : 'text-red-600'}>
                      {metrics.fid.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Cumulative Layout Shift:</span>
                    <span className={metrics.cls <= thresholds.cls.good ? 'text-green-600' : 
                                   metrics.cls <= thresholds.cls.needsImprovement ? 'text-yellow-600' : 'text-red-600'}>
                      {metrics.cls.toFixed(3)}
                    </span>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Load Time</div>
                    <div className="text-lg font-semibold text-blue-600">
                      {metrics.loadTime.toFixed(0)}ms
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</div>
                    <div className="text-lg font-semibold text-purple-600">
                      {(metrics.bundleSize / 1024).toFixed(1)}KB
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Memory</div>
                    <div className="text-lg font-semibold text-orange-600">
                      {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Requests</div>
                    <div className="text-lg font-semibold text-green-600">
                      {metrics.networkRequests}
                    </div>
                  </div>
                </div>

                {optimizations.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Applied Optimizations:
                    </h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {optimizations.map((opt, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Manual Optimization Button */}
                <button
                  onClick={runAutoOptimizations}
                  disabled={isOptimizing}
                  className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
                </button>
              </div>
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Collecting performance data...
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
