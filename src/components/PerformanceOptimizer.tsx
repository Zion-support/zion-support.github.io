import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceIssue {
  metric: string;
  value: number;
  threshold: number;
  severity: 'low' | 'medium' | 'high';
  recommendation: string;
}

const thresholds = {
  fcp: { good: 1800, poor: 3000 },
  lcp: { good: 2500, poor: 4000 },
  fid: { good: 100, poor: 300 },
  cls: { good: 0.1, poor: 0.25 },
  ttfb: { good: 800, poor: 1800 }
};

const getSeverity = (metric: string, value: number): 'low' | 'medium' | 'high' => {
  const metricThresholds = thresholds[metric as keyof typeof thresholds];
  if (!metricThresholds) return 'low';
  
  if (value <= metricThresholds.good) return 'low';
  if (value <= metricThresholds.poor) return 'medium';
  return 'high';
};

const getRecommendation = (metric: string, value: number): string => {
  const metricThresholds = thresholds[metric as keyof typeof thresholds];
  if (!metricThresholds) return 'No specific recommendation available.';
  
  if (value <= metricThresholds.good) return 'Performance is excellent!';
  
  switch (metric) {
    case 'fcp':
      return 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources.';
    case 'lcp':
      return 'Optimize images, implement lazy loading, use efficient image formats, consider CDN.';
    case 'fid':
      return 'Reduce JavaScript execution time, break up long tasks, optimize event handlers.';
    case 'cls':
      return 'Set explicit dimensions for images and videos, avoid inserting content above existing content.';
    case 'ttfb':
      return 'Optimize server response time, use CDN, implement caching strategies.';
    default:
      return 'Consider general performance optimization techniques.';
  }
};

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime } as PerformanceMetrics));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime } as PerformanceMetrics));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime } as PerformanceMetrics));
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
        setMetrics(prev => ({ ...prev, cls: clsValue } as PerformanceMetrics));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } as PerformanceMetrics));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (metrics) {
      const newIssues: PerformanceIssue[] = [];
      
      Object.entries(metrics).forEach(([metric, value]) => {
        const metricThresholds = thresholds[metric as keyof typeof thresholds];
        if (metricThresholds && value > metricThresholds.good) {
          newIssues.push({
            metric: metric.toUpperCase(),
            value,
            threshold: metricThresholds.good,
            severity: getSeverity(metric, value),
            recommendation: getRecommendation(metric, value)
          });
        }
      });
      
      setIssues(newIssues);
      setIsVisible(true);
    }
  }, [metrics]);

  const getScoreColor = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'low': return 'text-yellow-600 bg-yellow-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isVisible || !metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        {Object.entries(metrics).map(([metric, value]) => {
          const severity = getSeverity(metric, value);
          const isGood = value <= thresholds[metric as keyof typeof thresholds]?.good;
          
          return (
            <div key={metric} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {metric.toUpperCase()}
              </span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                isGood ? 'text-green-600 bg-green-100' : getScoreColor(severity)
              }`}>
                {value.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>

      {issues.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Issues Found ({issues.length})
          </h4>
          <div className="space-y-2">
            <AnimatePresence>
              {issues.map((issue, index) => (
                <motion.div
                  key={issue.metric}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-lg border-l-4 ${
                    issue.severity === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                    issue.severity === 'medium' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' :
                    'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {issue.metric}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getScoreColor(issue.severity)}`}>
                      {issue.severity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {issue.recommendation}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => window.location.reload()}
          className="w-full px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </motion.div>
  );
};

export default PerformanceOptimizer;
