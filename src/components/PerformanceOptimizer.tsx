import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  metric?: keyof PerformanceMetrics;
  value?: number;
  threshold?: number;
  suggestion?: string;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const performanceThresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const getMetricScore = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    const thresholds = performanceThresholds[metric];
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  }, []);

  const getMetricColor = useCallback((score: string) => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }, []);

  const getMetricIcon = useCallback((score: string) => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return null;
    }
  }, []);

  const analyzePerformance = useCallback((metrics: PerformanceMetrics) => {
    const newIssues: PerformanceIssue[] = [];

    Object.entries(metrics).forEach(([metric, value]) => {
      const score = getMetricScore(metric as keyof PerformanceMetrics, value);
      const thresholds = performanceThresholds[metric as keyof PerformanceMetrics];

      if (score === 'needs-improvement') {
        newIssues.push({
          id: `${metric}-warning`,
          type: 'warning',
          message: `${metric.toUpperCase()} is above recommended threshold`,
          metric: metric as keyof PerformanceMetrics,
          value,
          threshold: thresholds.good,
          suggestion: `Consider optimizing ${metric} to improve user experience`
        });
      } else if (score === 'poor') {
        newIssues.push({
          id: `${metric}-error`,
          type: 'error',
          message: `${metric.toUpperCase()} is significantly above recommended threshold`,
          metric: metric as keyof PerformanceMetrics,
          value,
          threshold: thresholds.good,
          suggestion: `Immediate action required: ${metric} needs optimization`
        });
      }
    });

    setIssues(newIssues);
  }, [getMetricScore]);

  const measurePerformance = useCallback(async () => {
    if ('PerformanceObserver' in window) {
      try {
        // Measure FCP
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime } as PerformanceMetrics));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime } as PerformanceMetrics));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime } as PerformanceMetrics));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue } as PerformanceMetrics));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure TTFB
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb } as PerformanceMetrics));
        }

        // Cleanup observers after 10 seconds
        setTimeout(() => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }, 10000);

      } catch (error) {
        console.warn('Performance monitoring not available:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Start measuring after a short delay to ensure page is loaded
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  useEffect(() => {
    if (metrics) {
      analyzePerformance(metrics);
      setIsVisible(true);
    }
  }, [metrics, analyzePerformance]);

  const formatMetric = (metric: string, value: number) => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fid') return `${Math.round(value)}ms`;
    return `${Math.round(value)}ms`;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>

          {/* Metrics Summary */}
          <div className="p-4">
            {metrics && (
              <div className="space-y-3">
                {Object.entries(metrics).map(([metric, value]) => {
                  const score = getMetricScore(metric as keyof PerformanceMetrics, value);
                  const color = getMetricColor(score);
                  const icon = getMetricIcon(score);

                  return (
                    <div key={metric} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase">
                          {metric}
                        </span>
                        {icon && <span className={color}>{icon}</span>}
                      </div>
                      <span className={`text-sm font-mono ${color}`}>
                        {formatMetric(metric, value)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Issues */}
            {issues.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Performance Issues ({issues.length})
                </h4>
                <div className="space-y-2">
                  {issues.slice(0, 2).map((issue) => (
                    <div
                      key={issue.id}
                      className={`p-2 rounded text-xs ${
                        issue.type === 'error'
                          ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                          : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}
                    >
                      {issue.message}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <div className="p-4 space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Recommendations</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>• Optimize images and use WebP format</p>
                    <p>• Implement lazy loading for below-the-fold content</p>
                    <p>• Use CDN for static assets</p>
                    <p>• Minimize JavaScript bundles</p>
                    <p>• Enable compression and caching</p>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >
                      Refresh & Re-measure
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
