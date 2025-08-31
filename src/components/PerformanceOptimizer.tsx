import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Gauge, HardDrive, Network, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  networkRequests: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
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
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    const startTime = performance.now();
    
    // Measure Core Web Vitals
    const measureLCP = () => {
      return new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } else {
          resolve(0);
        }
      });
    };

    const measureFID = () => {
      return new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstEntry = entries[0];
            resolve(firstEntry.processingStart - firstEntry.startTime);
          });
          observer.observe({ entryTypes: ['first-input'] });
        } else {
          resolve(0);
        }
      });
    };

    const measureCLS = () => {
      return new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          let cls = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                cls += (entry as any).value;
              }
            }
            resolve(cls);
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        } else {
          resolve(0);
        }
      });
    };

    try {
      const [lcp, fid, cls] = await Promise.all([
        measureLCP(),
        measureFID(),
        measureCLS()
      ]);

      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      const networkRequests = performance.getEntriesByType('resource').length;

      setMetrics({
        loadTime,
        bundleSize: performance.getEntriesByType('navigation')[0]?.transferSize || 0,
        memoryUsage,
        networkRequests,
        coreWebVitals: { lcp, fid, cls }
      });
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  };

  // Auto-optimization
  const performOptimizations = useCallback(async () => {
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

      // Optimize images
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
  };

  useEffect(() => {
    if (enabled) {
      measurePerformance();
      performOptimizations();
      
      // Continuous monitoring
      const interval = setInterval(measurePerformance, 30000);
      return () => clearInterval(interval);
    }
  }, [enabled, measurePerformance, performOptimizations]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Panel Toggle */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setShowPanel(!showPanel)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Performance Panel"
      >
        <Zap className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-400" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {metrics && (
              <div className="space-y-4">
                {/* Core Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                      <Clock className="w-4 h-4" />
                      Load Time
                    </div>
                    <div className="text-lg font-semibold text-cyan-400">
                      {metrics.loadTime.toFixed(0)}ms
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                      <HardDrive className="w-4 h-4" />
                      Bundle Size
                    </div>
                    <div className="text-lg font-semibold text-purple-400">
                      {(metrics.bundleSize / 1024).toFixed(1)}KB
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals */}
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Core Web Vitals</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">LCP:</span>
                      <span className={metrics.coreWebVitals.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
                        {metrics.coreWebVitals.lcp.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">FID:</span>
                      <span className={metrics.coreWebVitals.fid < 100 ? 'text-green-400' : 'text-red-400'}>
                        {metrics.coreWebVitals.fid.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">CLS:</span>
                      <span className={metrics.coreWebVitals.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
                        {metrics.coreWebVitals.cls.toFixed(3)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Network & Memory */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                      <Network className="w-4 h-4" />
                      Requests
                    </div>
                    <div className="text-lg font-semibold text-green-400">
                      {metrics.networkRequests}
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      Memory
                    </div>
                    <div className="text-lg font-semibold text-orange-400">
                      {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Optimizations */}
            {optimizations.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Applied Optimizations
                </h4>
                <div className="space-y-1">
                  {optimizations.slice(0, 3).map((opt, index) => (
                    <div key={index} className="text-xs text-gray-400 bg-slate-800/30 p-2 rounded">
                      ✓ {opt}
                    </div>
                  ))}
                  {optimizations.length > 3 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{optimizations.length - 3} more optimizations
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Manual Optimization Button */}
            <button
              onClick={performOptimizations}
              disabled={isOptimizing}
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
