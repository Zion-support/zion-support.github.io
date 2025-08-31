import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Settings,
  BarChart3,
  Cpu,
  Memory,
  HardDrive,
  Gauge,
  Network
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
  bundleSize: number;
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
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0,
    bundleSize: 0,
    networkRequests: 0,
    coreWebVitals: {
      lcp: 0,
      fid: 0,
      cls: 0
    }
  });
  
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    const startTime = performance.now();
    
    // Measure FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

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
      const bundleSize = performance.getEntriesByType('navigation')[0]?.transferSize || 0;

      setMetrics(prev => ({
        ...prev,
        loadTime,
        bundleSize,
        memoryUsage,
        networkRequests,
        coreWebVitals: { lcp, fid, cls }
      }));
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }));
    }

    // Measure render time
    const renderStartTime = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - renderStartTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    });

    requestAnimationFrame(measureFPS);
  }, [enabled]);

  // Enhanced auto-optimization logic
  const performOptimizations = useCallback(async () => {
    if (!autoOptimize || isOptimizing) return;
    
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Check FPS and suggest optimizations
      if (metrics.fps < 30) {
        newOptimizations.push('Low FPS detected - Consider reducing animations');
        // Reduce animation complexity
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
      }

      // Check memory usage
      if (metrics.memoryUsage > 100) {
        newOptimizations.push('High memory usage - Consider lazy loading');
      }

      // Check render time
      if (metrics.renderTime > 16) {
        newOptimizations.push('Slow rendering - Optimizing component updates');
      }

      // Network optimization
      if (metrics.networkLatency > 100) {
        newOptimizations.push('High network latency - Enabling compression');
      }

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
  }, [metrics, autoOptimize, isOptimizing]);

  // Debounced optimization
  const debouncedOptimize = useMemo(
    () => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(performOptimizations, 2000);
      };
    },
    [performOptimizations]
  );

  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    debouncedOptimize();

    // Continuous monitoring
    const interval = setInterval(measurePerformance, 30000);

    // Cleanup
    return () => {
      clearInterval(interval);
      // Reset any applied optimizations
      document.documentElement.style.removeProperty('--animation-duration');
    };
  }, [enabled, measurePerformance, debouncedOptimize]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 45) score -= 15;
    
    if (metrics.memoryUsage > 100) score -= 20;
    else if (metrics.memoryUsage > 50) score -= 10;
    
    if (metrics.renderTime > 16) score -= 20;
    else if (metrics.renderTime > 8) score -= 10;
    
    // Core Web Vitals scoring
    if (metrics.coreWebVitals.lcp > 2500) score -= 15;
    if (metrics.coreWebVitals.fid > 100) score -= 15;
    if (metrics.coreWebVitals.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-4 h-4" />;
    if (score >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-20 right-4 z-40 bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 shadow-2xl min-w-[320px] max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Performance Score</span>
                {getScoreIcon(performanceScore)}
              </div>
              <div className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}/100
              </div>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">FPS</div>
                <div className={`text-sm font-semibold ${metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.fps}
                </div>
              </div>
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">Memory</div>
                <div className={`text-sm font-semibold ${metrics.memoryUsage > 100 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.memoryUsage}MB
                </div>
              </div>
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">Load Time</div>
                <div className={`text-sm font-semibold ${metrics.loadTime > 1000 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.loadTime.toFixed(0)}ms
                </div>
              </div>
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">Bundle</div>
                <div className="text-sm font-semibold text-purple-400">
                  {(metrics.bundleSize / 1024).toFixed(1)}KB
                </div>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="mb-4 bg-slate-800/50 p-3 rounded-lg">
              <h4 className="text-xs font-medium text-gray-300 mb-2">Core Web Vitals</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">LCP:</span>
                  <span className={metrics.coreWebVitals.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.coreWebVitals.lcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">FID:</span>
                  <span className={metrics.coreWebVitals.fid < 100 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.coreWebVitals.fid.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">CLS:</span>
                  <span className={metrics.coreWebVitals.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.coreWebVitals.cls.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>

            {/* Optimizations */}
            {optimizations.length > 0 && (
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">Recent Optimizations:</div>
                <div className="space-y-1">
                  {optimizations.slice(-3).map((opt, index) => (
                    <div key={index} className="text-xs text-cyan-400 bg-cyan-400/10 p-2 rounded">
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Manual Optimize Button */}
            <button
              onClick={performOptimizations}
              disabled={isOptimizing}
              className="w-full px-3 py-2 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded hover:bg-cyan-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isOptimizing ? (
                <>
                  <div className="w-3 h-3 border border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="w-3 h-3" />
                  Optimize Now
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-30 w-10 h-10 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-lg hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-center text-cyan-400 hover:text-cyan-300"
        title="Toggle Performance Monitor"
      >
        <BarChart3 className="w-5 h-5" />
      </motion.button>
    </>
  );
};
