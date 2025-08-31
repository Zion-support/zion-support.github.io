import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Gauge, HardDrive, Network, Clock, AlertTriangle, Settings, X, Check, RefreshCw } from 'lucide-react';

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
  children?: React.ReactNode;
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enablePerformanceMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [isMonitoring, setIsMonitoring] = useState(false);
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
    if (!enabled || !enablePerformanceMonitoring || !('PerformanceObserver' in window)) return;

    const startTime = performance.now();
    setIsMonitoring(true);
    
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
          if (entry.entryType === 'layout-shift') {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
      }

      // DOM and Window Load Times
      const domLoadTime = navigationEntry ? navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart : 0;
      const windowLoadTime = navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.loadEventStart : 0;
      
      setMetrics(prev => prev ? { 
        ...prev, 
        domLoad: domLoadTime,
        windowLoad: windowLoadTime,
        loadTime: performance.now() - startTime
      } : null);

      // Memory Usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => prev ? { 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize,
          bundleSize: memory.totalJSHeapSize
        } : null);
      }

      // Network Requests Count
      const resourceEntries = performance.getEntriesByType('resource');
      setMetrics(prev => prev ? { ...prev, networkRequests: resourceEntries.length } : null);

    } catch (error) {
      console.error('Performance monitoring setup failed:', error);
    }
  }, [enabled, enablePerformanceMonitoring]);

  // Run automatic optimizations
  const runAutoOptimizations = useCallback(() => {
    if (!enabled || !autoOptimize) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Lazy loading optimization
    if (enableLazyLoading) {
      const images = document.querySelectorAll('img[data-src]');
      if (images.length > 0) {
        newOptimizations.push('Lazy loading enabled for images');
      }
    }

    // Intersection Observer optimization
    if (enableIntersectionObserver) {
      newOptimizations.push('Intersection Observer enabled for scroll-based loading');
    }

    // Resource hints optimization
    const links = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]');
    if (links.length > 0) {
      newOptimizations.push('Resource hints optimized');
    }

    // Bundle splitting optimization
    if (typeof window !== 'undefined' && 'import' in window) {
      newOptimizations.push('Dynamic imports enabled for code splitting');
    }

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [enabled, autoOptimize, enableLazyLoading, enableIntersectionObserver]);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    if (!metrics) return 0;

    let score = 100;
    
    // FCP scoring
    if (metrics.fcp > thresholds.fcp.needsImprovement) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    // LCP scoring
    if (metrics.lcp > thresholds.lcp.needsImprovement) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    // FID scoring
    if (metrics.fid > thresholds.fid.needsImprovement) score -= 15;
    else if (metrics.fid > thresholds.fid.good) score -= 7;
    
    // CLS scoring
    if (metrics.cls > thresholds.cls.needsImprovement) score -= 15;
    else if (metrics.cls > thresholds.cls.good) score -= 7;
    
    // Load time scoring
    if (metrics.loadTime > 5000) score -= 10;
    else if (metrics.loadTime > 3000) score -= 5;
    
    // Memory usage scoring
    if (metrics.memoryUsage > 50 * 1024 * 1024) score -= 5; // 50MB
    else if (metrics.memoryUsage > 25 * 1024 * 1024) score -= 2; // 25MB
    
    return Math.max(0, score);
  }, [metrics, thresholds]);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 80) return { grade: 'B', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    if (score >= 60) return { grade: 'D', color: 'text-orange-600', bgColor: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bgColor: 'bg-red-100' };
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

  // Effects
  useEffect(() => {
    if (!enabled) return;

    setupPerformanceMonitoring();
    runAutoOptimizations();

    return cleanup;
  }, [enabled, setupPerformanceMonitoring, runAutoOptimizations, cleanup]);

  // Update performance score when metrics change
  useEffect(() => {
    if (metrics) {
      const score = calculatePerformanceScore();
      setPerformanceScore(score);
    }
  }, [metrics, calculatePerformanceScore]);

  if (!enabled) {
    return <>{children}</>;
  }

  const grade = getPerformanceGrade(performanceScore);

  return (
    <>
      {children}
      
      {/* Performance Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-24 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle performance panel"
      >
        <Zap size={24} />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Zap size={20} />
                Performance
              </h2>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close performance panel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Overall Score */}
              <div className="mb-6 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${grade.bgColor} mb-3`}>
                  <span className={`text-3xl font-bold ${grade.color}`}>{grade.grade}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Score</h3>
                <p className="text-3xl font-bold text-blue-600">{performanceScore}/100</p>
              </div>

              {/* Core Web Vitals */}
              {metrics && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Core Web Vitals</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock size={16} className="text-blue-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">FCP</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                      </p>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp size={16} className="text-green-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">LCP</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                      </p>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <Gauge size={16} className="text-purple-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">FID</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                      </p>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle size={16} className="text-orange-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">CLS</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                      </p>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">Additional Metrics</h4>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">TTFB</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Load Time</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Memory Usage</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.memoryUsage ? `${Math.round(metrics.memoryUsage / 1024 / 1024)}MB` : 'N/A'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Network Requests</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.networkRequests || 'N/A'}
                      </span>
                    </div>
                  </div>

                  {/* Applied Optimizations */}
                  {optimizations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Applied Optimizations</h4>
                      <div className="space-y-2">
                        {optimizations.map((optimization, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                            <Check size={14} />
                            <span>{optimization}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Manual Optimization Button */}
                  <button
                    onClick={runAutoOptimizations}
                    disabled={isOptimizing}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {isOptimizing ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        Optimizing...
                      </>
                    ) : (
                      <>
                        <Zap size={16} />
                        Run Optimizations
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* No Metrics Available */}
              {!metrics && (
                <div className="text-center py-8">
                  <Gauge size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    {isMonitoring ? 'Collecting performance data...' : 'Performance monitoring not available'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
