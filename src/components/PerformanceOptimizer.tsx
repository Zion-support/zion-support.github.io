import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, HardDrive, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  bundleSize: number;
  loadTime: number;
  memoryUsage: number | null;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800,
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    bundleSize: 0,
    loadTime: 0,
    memoryUsage: null,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceScore = useCallback((metric: number, threshold: number, isLowerBetter = true) => {
    if (isLowerBetter) {
      return metric <= threshold ? 'good' : metric <= threshold * 1.5 ? 'needs-improvement' : 'poor';
    } else {
      return metric >= threshold ? 'good' : metric >= threshold * 0.7 ? 'needs-improvement' : 'poor';
    }
  }, []);

  const getScoreColor = useCallback((score: string) => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }, []);

  const getScoreIcon = useCallback((score: string) => {
    switch (score) {
      case 'good': return '🟢';
      case 'needs-improvement': return '🟡';
      case 'poor': return '🔴';
      default: return '⚪';
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Measure bundle size
    const measureBundleSize = () => {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('js/')) {
          // Estimate size based on chunk naming
          if (src.includes('chunk')) {
            totalSize += 50; // Estimate chunk size
          } else {
            totalSize += 100; // Estimate regular script size
          }
        }
      });
      
      return totalSize;
    };

    // Measure load time
    const measureLoadTime = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    };

    // Measure memory usage (if available)
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        return memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }
      return null;
    };

    // Core Web Vitals observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const layoutShift = entry as any;
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + layoutShift.value }));
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure FCP and TTFB
    const measurePaint = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    };

    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      }
    };

    // Initial measurements
    const timer = setTimeout(() => {
      measurePaint();
      measureTTFB();
      setMetrics(prev => ({
        ...prev,
        bundleSize: measureBundleSize(),
        loadTime: measureLoadTime(),
        memoryUsage: measureMemory(),
      }));
    }, 1000);

    // Check for performance issues
    const checkPerformance = () => {
      const newAlerts: string[] = [];
      
      if (metrics.lcp && metrics.lcp > threshold.lcp) {
        newAlerts.push(`LCP (${Math.round(metrics.lcp)}ms) exceeds threshold (${threshold.lcp}ms)`);
      }
      if (metrics.fcp && metrics.fcp > threshold.fcp) {
        newAlerts.push(`FCP (${Math.round(metrics.fcp)}ms) exceeds threshold (${threshold.fcp}ms)`);
      }
      if (metrics.fid && metrics.fid > threshold.fid) {
        newAlerts.push(`FID (${Math.round(metrics.fid)}ms) exceeds threshold (${threshold.fid}ms)`);
      }
      if (metrics.cls && metrics.cls > threshold.cls) {
        newAlerts.push(`CLS (${metrics.cls.toFixed(3)}) exceeds threshold (${threshold.cls})`);
      }
      if (metrics.ttfb && metrics.ttfb > threshold.ttfb) {
        newAlerts.push(`TTFB (${Math.round(metrics.ttfb)}ms) exceeds threshold (${threshold.ttfb}ms)`);
      }
      
      setAlerts(newAlerts);
    };

    const performanceTimer = setInterval(checkPerformance, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      clearInterval(performanceTimer);
    };
  }, [enabled, threshold, metrics.lcp, metrics.fcp, metrics.fid, metrics.cls, metrics.ttfb]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan/80 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isVisible && showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-4 z-40 w-80 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-2xl backdrop-blur-sm"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-zion-slate-darker p-2 rounded">
                    <div className="text-zion-slate-light">FCP</div>
                    <div className={`font-mono ${getScoreColor(getPerformanceScore(metrics.fcp || 0, threshold.fcp))}`}>
                      {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '—'}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {getScoreIcon(getPerformanceScore(metrics.fcp || 0, threshold.fcp))}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-darker p-2 rounded">
                    <div className="text-zion-slate-light">LCP</div>
                    <div className={`font-mono ${getScoreColor(getPerformanceScore(metrics.lcp || 0, threshold.lcp))}`}>
                      {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '—'}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {getScoreIcon(getPerformanceScore(metrics.lcp || 0, threshold.lcp))}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-darker p-2 rounded">
                    <div className="text-zion-slate-light">FID</div>
                    <div className={`font-mono ${getScoreColor(getPerformanceScore(metrics.fid || 0, threshold.fid))}`}>
                      {metrics.fid ? `${Math.round(metrics.fid)}ms` : '—'}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {getScoreIcon(getPerformanceScore(metrics.fid || 0, threshold.fid))}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-darker p-2 rounded">
                    <div className="text-zion-slate-light">CLS</div>
                    <div className={`font-mono ${getScoreColor(getPerformanceScore(metrics.cls || 0, threshold.cls))}`}>
                      {metrics.cls ? metrics.cls.toFixed(3) : '—'}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {getScoreIcon(getPerformanceScore(metrics.cls || 0, threshold.cls))}
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">TTFB:</span>
                    <span className={`font-mono ${getScoreColor(getPerformanceScore(metrics.ttfb || 0, threshold.ttfb))}`}>
                      {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '—'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Load Time:</span>
                    <span className="font-mono text-white">
                      {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : '—'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Memory:</span>
                    <span className="font-mono text-white">
                      {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : '—'}
                    </span>
                  </div>
                </div>

                {/* Alerts */}
                {alerts.length > 0 && (
                  <div className="mt-3 p-2 bg-red-500/10 border border-red-500/20 rounded">
                    <div className="flex items-center text-red-400 text-sm mb-2">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Performance Issues
                    </div>
                    <ul className="text-xs text-red-300 space-y-1">
                      {alerts.map((alert, index) => (
                        <li key={index}>• {alert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};