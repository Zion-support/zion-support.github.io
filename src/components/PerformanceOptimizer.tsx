import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, X, Settings, BarChart3, Cpu, HardDrive, Wifi, Smartphone } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    try {
      // Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
          }
        }).observe({ entryTypes: ['paint'] });
      });

      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            resolve(lcpEntry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });

      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            resolve(fidEntry.processingStart - fidEntry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });
      });

      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      });

      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;
      const domLoad = navigation.domContentLoadedEventEnd - navigation.navigationStart;
      const windowLoad = navigation.loadEventEnd - navigation.navigationStart;

      // Memory usage (if available)
      let memoryUsage;
      if ('memory' in performance) {
        memoryUsage = (performance as any).memory;
      }

      // Network information (if available)
      let networkInfo;
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        networkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        };
      }

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        domLoad,
        windowLoad,
        memoryUsage,
        networkInfo
      };

      setMetrics(newMetrics);
      calculatePerformanceScore(newMetrics);
      generateOptimizations(newMetrics);
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;

    // FCP scoring
    if (metrics.fcp > threshold.fcp) {
      score -= Math.min(20, (metrics.fcp - threshold.fcp) / 100);
    }

    // LCP scoring
    if (metrics.lcp > threshold.lcp) {
      score -= Math.min(25, (metrics.lcp - threshold.lcp) / 200);
    }

    // FID scoring
    if (metrics.fid > threshold.fid) {
      score -= Math.min(20, (metrics.fid - threshold.fid) / 50);
    }

    // CLS scoring
    if (metrics.cls > threshold.cls) {
      score -= Math.min(15, (metrics.cls - threshold.cls) * 100);
    }

    setPerformanceScore(Math.max(0, Math.round(score)));
  }, [threshold]);

  // Generate optimization suggestions
  const generateOptimizations = useCallback((metrics: PerformanceMetrics) => {
    const suggestions: string[] = [];

    if (metrics.fcp > threshold.fcp) {
      suggestions.push('Optimize First Contentful Paint: Minimize render-blocking resources');
    }

    if (metrics.lcp > threshold.lcp) {
      suggestions.push('Improve Largest Contentful Paint: Optimize images and critical resources');
    }

    if (metrics.fid > threshold.fid) {
      suggestions.push('Reduce First Input Delay: Minimize JavaScript execution time');
    }

    if (metrics.cls > threshold.cls) {
      suggestions.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and ads');
    }

    if (metrics.ttfb > 600) {
      suggestions.push('Optimize Time to First Byte: Improve server response time');
    }

    if (metrics.memoryUsage && metrics.memoryUsage.usedJSHeapSize > 50 * 1024 * 1024) {
      suggestions.push('Reduce memory usage: Optimize JavaScript memory consumption');
    }

    setOptimizations(suggestions);
  }, [threshold]);

  // Auto-optimize performance
  const autoOptimize = useCallback(async () => {
    if (!autoOptimize || !metrics) return;

    setIsOptimizing(true);
    
    try {
      // Implement automatic optimizations
      const optimizations = [];

      // Preload critical resources
      if (metrics.fcp > threshold.fcp) {
        const criticalLinks = document.querySelectorAll('link[rel="preload"]');
        if (criticalLinks.length === 0) {
          // Add preload for critical CSS and JS
          const criticalCSS = document.createElement('link');
          criticalCSS.rel = 'preload';
          criticalCSS.href = '/src/index.css';
          criticalCSS.as = 'style';
          document.head.appendChild(criticalCSS);
          optimizations.push('Added critical CSS preload');
        }
      }

      // Optimize images
      if (metrics.lcp > threshold.lcp) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (!img.loading) {
            img.loading = 'lazy';
          }
        });
        optimizations.push('Added lazy loading to images');
      }

      // Reduce layout shifts
      if (metrics.cls > threshold.cls) {
        const elements = document.querySelectorAll('img, video, iframe');
        elements.forEach(el => {
          if (!(el as HTMLElement).style.aspectRatio) {
            (el as HTMLElement).style.aspectRatio = '16/9';
          }
        });
        optimizations.push('Added aspect ratios to prevent layout shifts');
      }

      if (optimizations.length > 0) {
        setOptimizations(prev => [...prev, ...optimizations]);
      }
    } catch (error) {
      console.error('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, metrics, threshold]);

  // Performance monitoring effect
  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    measurePerformance();

    // Continuous monitoring
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds

    // Performance observer for real-time updates
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        measurePerformance();
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [enabled, measurePerformance]);

  // Auto-optimize effect
  useEffect(() => {
    if (autoOptimize && metrics && performanceScore < 80) {
      autoOptimize();
    }
  }, [autoOptimize, metrics, performanceScore, autoOptimize]);

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {metrics && (
                <div className="space-y-4">
                  {/* Performance Score */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {performanceScore}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Performance Score
                    </div>
                  </div>

                  {/* Core Web Vitals */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {Math.round(metrics.fcp)}ms
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">FCP</div>
                      <div className={`text-xs ${metrics.fcp <= threshold.fcp ? 'text-green-600' : 'text-red-600'}`}>
                        {metrics.fcp <= threshold.fcp ? 'Good' : 'Needs Improvement'}
                      </div>
                    </div>

                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {Math.round(metrics.lcp)}ms
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">LCP</div>
                      <div className={`text-xs ${metrics.lcp <= threshold.lcp ? 'text-green-600' : 'text-red-600'}`}>
                        {metrics.lcp <= threshold.lcp ? 'Good' : 'Needs Improvement'}
                      </div>
                    </div>

                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {Math.round(metrics.fid)}ms
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">FID</div>
                      <div className={`text-xs ${metrics.fid <= threshold.fid ? 'text-green-600' : 'text-red-600'}`}>
                        {metrics.fid <= threshold.fid ? 'Good' : 'Needs Improvement'}
                      </div>
                    </div>

                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {metrics.cls.toFixed(3)}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CLS</div>
                      <div className={`text-xs ${metrics.cls <= threshold.cls ? 'text-green-600' : 'text-red-600'}`}>
                        {metrics.cls <= threshold.cls ? 'Good' : 'Needs Improvement'}
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                      <span className="font-medium">{Math.round(metrics.ttfb)}ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">DOM Load:</span>
                      <span className="font-medium">{Math.round(metrics.domLoad)}ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Window Load:</span>
                      <span className="font-medium">{Math.round(metrics.windowLoad)}ms</span>
                    </div>
                  </div>

                  {/* Memory Usage */}
                  {metrics.memoryUsage && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Memory Usage</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">Used:</span>
                          <span>{(metrics.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(1)}MB</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">Total:</span>
                          <span>{(metrics.memoryUsage.totalJSHeapSize / 1024 / 1024).toFixed(1)}MB</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Network Info */}
                  {metrics.networkInfo && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Network</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">Type:</span>
                          <span>{metrics.networkInfo.effectiveType}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">Speed:</span>
                          <span>{metrics.networkInfo.downlink.toFixed(1)}Mbps</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Optimizations */}
                  {optimizations.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        Optimizations
                      </div>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {optimizations.map((opt, index) => (
                          <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded">
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={measurePerformance}
                      disabled={isOptimizing}
                      className="flex-1 px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <BarChart3 className="w-4 h-4" />
                      Refresh
                    </button>
                    <button
                      onClick={autoOptimize}
                      disabled={isOptimizing}
                      className="flex-1 px-3 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isOptimizing ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Zap className="w-4 h-4" />
                      )}
                      {isOptimizing ? 'Optimizing...' : 'Auto-Optimize'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Performance Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Performance Monitor"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};
