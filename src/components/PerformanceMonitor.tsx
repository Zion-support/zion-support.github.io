import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, Zap, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  speedIndex: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  showAlerts?: boolean;
  threshold?: {
    pageLoadTime: number;
    domContentLoaded: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  };
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = false,
  showAlerts = true,
  threshold = {
    pageLoadTime: 3000,
    domContentLoaded: 1500,
    firstContentfulPaint: 1800,
    largestContentfulPaint: 2500,
    firstInputDelay: 100,
    cumulativeLayoutShift: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  // Performance thresholds for different levels
  const performanceLevels = useMemo(() => ({
    excellent: { min: 90, color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-400/30' },
    good: { min: 70, color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-400/30' },
    poor: { min: 50, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-400/30' },
    critical: { min: 0, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-400/30' }
  }), []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // Page Load Time (30% weight)
    if (metrics.pageLoadTime > threshold.pageLoadTime) {
      score -= Math.min(30, ((metrics.pageLoadTime - threshold.pageLoadTime) / threshold.pageLoadTime) * 30);
    }
    
    // DOM Content Loaded (20% weight)
    if (metrics.domContentLoaded > threshold.domContentLoaded) {
      score -= Math.min(20, ((metrics.domContentLoaded - threshold.domContentLoaded) / threshold.domContentLoaded) * 20);
    }
    
    // First Contentful Paint (20% weight)
    if (metrics.firstContentfulPaint > threshold.firstContentfulPaint) {
      score -= Math.min(20, ((metrics.firstContentfulPaint - threshold.firstContentfulPaint) / threshold.firstContentfulPaint) * 20);
    }
    
    // Largest Contentful Paint (15% weight)
    if (metrics.largestContentfulPaint > threshold.largestContentfulPaint) {
      score -= Math.min(15, ((metrics.largestContentfulPaint - threshold.largestContentfulPaint) / threshold.largestContentfulPaint) * 15);
    }
    
    // First Input Delay (10% weight)
    if (metrics.firstInputDelay > threshold.firstInputDelay) {
      score -= Math.min(10, ((metrics.firstInputDelay - threshold.firstInputDelay) / threshold.firstInputDelay) * 10);
    }
    
    // Cumulative Layout Shift (5% weight)
    if (metrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) {
      score -= Math.min(5, ((metrics.cumulativeLayoutShift - threshold.cumulativeLayoutShift) / threshold.cumulativeLayoutShift) * 5);
    }
    
    return Math.max(0, Math.round(score));
  }, [threshold]);

  // Get performance level
  const getPerformanceLevel = useCallback((score: number) => {
    if (score >= performanceLevels.excellent.min) return performanceLevels.excellent;
    if (score >= performanceLevels.good.min) return performanceLevels.good;
    if (score >= performanceLevels.poor.min) return performanceLevels.poor;
    return performanceLevels.critical;
  }, [performanceLevels]);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      if (!('performance' in window)) {
        resolve({
          pageLoadTime: 0,
          domContentLoaded: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          firstInputDelay: 0,
          cumulativeLayoutShift: 0,
          timeToInteractive: 0,
          speedIndex: 0
        });
        return;
      }

      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const layoutShiftEntries = performance.getEntriesByType('layout-shift');
      
      // Wait for all metrics to be available
      const checkMetrics = () => {
        if (navigationEntry && paintEntries.length > 0) {
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
          
          const metrics: PerformanceMetrics = {
            pageLoadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            firstContentfulPaint: fcp ? fcp.startTime : 0,
            largestContentfulPaint: lcp ? lcp.startTime : 0,
            firstInputDelay: 0, // Would need to be measured with user interaction
            cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry: any) => sum + entry.value, 0),
            timeToInteractive: navigationEntry.domInteractive - navigationEntry.fetchStart,
            speedIndex: 0 // Would need to be calculated from visual completeness
          };
          
          resolve(metrics);
        } else {
          setTimeout(checkMetrics, 100);
        }
      };
      
      checkMetrics();
    });
  }, []);

  // Generate performance alerts
  const generateAlerts = useCallback((metrics: PerformanceMetrics): string[] => {
    const newAlerts: string[] = [];
    
    if (metrics.pageLoadTime > threshold.pageLoadTime) {
      newAlerts.push(`Page load time (${Math.round(metrics.pageLoadTime)}ms) exceeds threshold (${threshold.pageLoadTime}ms)`);
    }
    
    if (metrics.domContentLoaded > threshold.domContentLoaded) {
      newAlerts.push(`DOM content loaded (${Math.round(metrics.domContentLoaded)}ms) exceeds threshold (${threshold.domContentLoaded}ms)`);
    }
    
    if (metrics.firstContentfulPaint > threshold.firstContentfulPaint) {
      newAlerts.push(`First contentful paint (${Math.round(metrics.firstContentfulPaint)}ms) exceeds threshold (${threshold.firstContentfulPaint}ms)`);
    }
    
    if (metrics.largestContentfulPaint > threshold.largestContentfulPaint) {
      newAlerts.push(`Largest contentful paint (${Math.round(metrics.largestContentfulPaint)}ms) exceeds threshold (${threshold.largestContentfulPaint}ms)`);
    }
    
    if (metrics.firstInputDelay > threshold.firstInputDelay) {
      newAlerts.push(`First input delay (${Math.round(metrics.firstInputDelay)}ms) exceeds threshold (${threshold.firstInputDelay}ms)`);
    }
    
    if (metrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) {
      newAlerts.push(`Cumulative layout shift (${metrics.cumulativeLayoutShift.toFixed(3)}) exceeds threshold (${threshold.cumulativeLayoutShift})`);
    }
    
    return newAlerts;
  }, [threshold]);

  // Monitor performance
  useEffect(() => {
    if (!enabled) return;

    const monitorPerformance = async () => {
      try {
        // Wait for page to fully load
        if (document.readyState === 'complete') {
          const collectedMetrics = await collectMetrics();
          setMetrics(collectedMetrics);
          
          const score = calculatePerformanceScore(collectedMetrics);
          setPerformanceScore(score);
          
          const newAlerts = generateAlerts(collectedMetrics);
          setAlerts(newAlerts);
          
          // Log performance data
          console.group('🚀 Performance Monitor - Zion Tech Group');
          console.log('Performance Score:', score);
          console.log('Metrics:', collectedMetrics);
          if (newAlerts.length > 0) {
            console.warn('Performance Alerts:', newAlerts);
          }
          console.groupEnd();
          
          // Send to analytics if available
          if (window.gtag) {
            window.gtag('event', 'performance_metrics', {
              performance_score: score,
              page_load_time: collectedMetrics.pageLoadTime,
              first_contentful_paint: collectedMetrics.firstContentfulPaint,
              largest_contentful_paint: collectedMetrics.largestContentfulPaint
            });
          }
        } else {
          window.addEventListener('load', monitorPerformance);
        }
      } catch (error) {
        console.error('Performance monitoring error:', error);
      }
    };

    monitorPerformance();

    // Monitor for layout shifts
    if ('PerformanceObserver' in window) {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (layoutShiftEntry.value > 0.1) {
            console.warn('Layout shift detected:', layoutShiftEntry);
          }
        }
      });
      
      try {
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Layout shift observer not supported
      }
    }

    // Monitor for long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const longTaskEntry = entry as any;
          if (longTaskEntry.duration > 50) {
            console.warn('Long task detected:', longTaskEntry);
          }
        }
      });
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task observer not supported
      }
    }

    return () => {
      window.removeEventListener('load', monitorPerformance);
    };
  }, [enabled, collectMetrics, calculatePerformanceScore, generateAlerts]);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  if (!enabled) return null;

  const performanceLevel = getPerformanceLevel(performanceScore);

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={toggleVisibility}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${performanceLevel.bg} ${performanceLevel.border} border`}
        aria-label="Toggle performance metrics"
        title="Performance Monitor"
      >
        <Activity className={`w-5 h-5 ${performanceLevel.color}`} />
      </motion.button>

      {/* Performance Metrics Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 right-20 z-50 w-80 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className={`p-4 ${performanceLevel.bg} border-b ${performanceLevel.border}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className={`w-5 h-5 ${performanceLevel.color}`} />
                  <h3 className="text-white font-semibold">Performance Monitor</h3>
                </div>
                <button
                  onClick={toggleVisibility}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close performance monitor"
                >
                  ×
                </button>
              </div>
              
              {/* Performance Score */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Performance Score</span>
                  <span className={`font-bold ${performanceLevel.color}`}>{performanceScore}/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${performanceLevel.bg}`}
                    style={{ width: `${performanceScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Metrics */}
            {showMetrics && metrics && (
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">Page Load:</span>
                    <span className={`font-mono ${metrics.pageLoadTime > threshold.pageLoadTime ? 'text-red-400' : 'text-green-400'}`}>
                      {Math.round(metrics.pageLoadTime)}ms
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">DOM Ready:</span>
                    <span className={`font-mono ${metrics.domContentLoaded > threshold.domContentLoaded ? 'text-red-400' : 'text-green-400'}`}>
                      {Math.round(metrics.domContentLoaded)}ms
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">FCP:</span>
                    <span className={`font-mono ${metrics.firstContentfulPaint > threshold.firstContentfulPaint ? 'text-red-400' : 'text-green-400'}`}>
                      {Math.round(metrics.firstContentfulPaint)}ms
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">LCP:</span>
                    <span className={`font-mono ${metrics.largestContentfulPaint > threshold.largestContentfulPaint ? 'text-red-400' : 'text-green-400'}`}>
                      {Math.round(metrics.largestContentfulPaint)}ms
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Alerts */}
            {showAlerts && alerts.length > 0 && (
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-sm">Performance Alerts</span>
                </div>
                <div className="space-y-2">
                  {alerts.map((alert, index) => (
                    <div key={index} className="text-xs text-gray-300 bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-3 bg-slate-800/50 border-t border-gray-700 text-center">
              <span className="text-xs text-gray-400">
                Zion Tech Group • {new Date().toLocaleTimeString()}
              </span>
            </div>
          </motion.div>
        )}

        {/* Quick Stats */}
        <div className="p-4 bg-slate-800/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">
                {metrics.lcp ? Math.round(metrics.lcp) : '--'}
              </div>
              <div className="text-xs text-slate-400">LCP (ms)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {metrics.fid ? Math.round(metrics.fid) : '--'}
              </div>
              <div className="text-xs text-slate-400">FID (ms)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {metrics.cls ? metrics.cls.toFixed(3) : '--'}
              </div>
              <div className="text-xs text-slate-400">CLS</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
