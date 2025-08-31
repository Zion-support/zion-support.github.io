import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Gauge, TrendingUp, AlertTriangle, CheckCircle, Clock, Database, Network, Cpu, Memory } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{timestamp: number, improvement: number}>>([]);
  const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as any;
            setMetrics(prev => ({ ...prev, cls: prev.cls + layoutShift.value }));
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // TTFB measurement
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
          bundleSize: memory.totalJSHeapSize / 1024 / 1024
        }));
      }

      // CPU usage estimation
      const startTime = performance.now();
      setTimeout(() => {
        const endTime = performance.now();
        const cpuUsage = ((endTime - startTime) / 16.67) * 100; // 60fps = 16.67ms per frame
        setMetrics(prev => ({ ...prev, cpuUsage: Math.min(cpuUsage, 100) }));
      }, 100);

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Auto-optimization
  const autoOptimizePerformance = useCallback(async () => {
    if (!autoOptimize || isOptimizing) return;

    setIsOptimizing(true);
    const startMetrics = { ...metrics };

    try {
      // Image optimization
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) img.loading = 'lazy';
        if (!img.decoding) img.decoding = 'async';
      });

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Service Worker registration for caching
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
        }
      }

      // Wait for optimizations to take effect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Measure improvement
      const endMetrics = { ...metrics };
      const improvement = Math.max(
        (startMetrics.fcp - endMetrics.fcp) / startMetrics.fcp * 100,
        (startMetrics.lcp - endMetrics.lcp) / startMetrics.lcp * 100
      );

      if (improvement > 0) {
        setOptimizationHistory(prev => [...prev, {
          timestamp: Date.now(),
          improvement
        }]);
      }

    } catch (error) {
      console.warn('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, isOptimizing, metrics]);

  // Bundle analysis
  const analyzeBundle = useCallback(() => {
    if (!enabled) return;

    try {
      // Analyze JavaScript bundle size
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;

      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('chunk')) {
          // Estimate chunk size based on common patterns
          totalSize += 100; // KB estimate
        }
      });

      setMetrics(prev => ({ ...prev, bundleSize: totalSize }));

      // Analyze CSS bundle
      const styles = document.querySelectorAll('link[rel="stylesheet"]');
      let cssSize = 0;

      styles.forEach(style => {
        const href = style.getAttribute('href');
        if (href && href.includes('chunk')) {
          cssSize += 50; // KB estimate
        }
      });

    } catch (error) {
      console.warn('Bundle analysis failed:', error);
    }
  }, [enabled]);

  // Performance recommendations
  const getRecommendations = useMemo(() => {
    const recommendations = [];

    if (metrics.fcp > 2000) recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    if (metrics.lcp > 4000) recommendations.push('Largest Contentful Paint is slow. Optimize images and critical resources.');
    if (metrics.fid > 100) recommendations.push('First Input Delay is high. Reduce JavaScript execution time.');
    if (metrics.cls > 0.1) recommendations.push('Cumulative Layout Shift is high. Avoid layout shifts during page load.');
    if (metrics.memoryUsage > 50) recommendations.push('High memory usage. Consider memory leaks or large objects.');

    return recommendations;
  }, [metrics]);

  useEffect(() => {
    if (enabled) {
      measurePerformance();
      analyzeBundle();
      
      // Continuous monitoring
      const interval = setInterval(measurePerformance, 5000);
      return () => clearInterval(interval);
    }
  }, [enabled, measurePerformance, analyzeBundle]);

  useEffect(() => {
    if (autoOptimize && metrics.fcp > 3000) {
      autoOptimizePerformance();
    }
  }, [autoOptimize, metrics.fcp, autoOptimizePerformance]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Panel */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-sm z-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-cyan-400" />
                Performance Metrics
              </h3>
              <button
                onClick={() => setShowOptimizationPanel(!showOptimizationPanel)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Zap className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-300">FCP:</span>
                <span className={metrics.fcp > 2000 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.fcp.toFixed(0)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">LCP:</span>
                <span className={metrics.lcp > 4000 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.lcp.toFixed(0)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">FID:</span>
                <span className={metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.fid.toFixed(0)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">CLS:</span>
                <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.cls.toFixed(3)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Memory:</span>
                <span className={metrics.memoryUsage > 50 ? 'text-yellow-400' : 'text-green-400'}>
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
            </div>

            {/* Optimization Status */}
            {isOptimizing && (
              <div className="mt-3 flex items-center gap-2 text-cyan-400 text-xs">
                <div className="animate-spin rounded-full h-3 w-3 border border-cyan-400 border-t-transparent"></div>
                Optimizing...
              </div>
            )}

            {/* Recommendations */}
            {getRecommendations.length > 0 && (
              <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <AlertTriangle className="w-3 h-3" />
                  Recommendations
                </div>
                <ul className="space-y-1 text-gray-300">
                  {getRecommendations.slice(0, 2).map((rec, index) => (
                    <li key={index} className="text-xs">• {rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optimization Panel */}
      <AnimatePresence>
        {showOptimizationPanel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-20 right-4 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-sm z-50"
          >
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Optimization Tools
            </h4>

            <div className="space-y-3">
              <button
                onClick={autoOptimizePerformance}
                disabled={isOptimizing}
                className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white text-xs px-3 py-2 rounded transition-colors flex items-center justify-center gap-2"
              >
                {isOptimizing ? (
                  <>
                    <div className="animate-spin rounded-full h-3 w-3 border border-white border-t-transparent"></div>
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Zap className="w-3 h-3" />
                    Auto-Optimize
                  </>
                )}
              </button>

              <button
                onClick={analyzeBundle}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Database className="w-3 h-3" />
                Analyze Bundle
              </button>

              {optimizationHistory.length > 0 && (
                <div className="text-xs text-gray-300">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    Recent Improvements
                  </div>
                  <div className="space-y-1">
                    {optimizationHistory.slice(-3).map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
                        <span className="text-green-400">+{item.improvement.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Performance Indicator */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className="bg-gray-900/80 hover:bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full p-2 transition-all hover:scale-105"
          title="Performance Metrics"
        >
          <div className="relative">
            <Gauge className="w-5 h-5 text-cyan-400" />
            {getRecommendations.length > 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            )}
          </div>
        </button>
      </div>
    </>
  );
};
