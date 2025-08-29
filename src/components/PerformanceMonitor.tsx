import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  autoHide = true,
  hideDelay = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
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
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // DOM Load and Window Load
      if (document.readyState === 'complete') {
        setMetrics(prev => ({ ...prev, windowLoad: performance.now() }));
      } else {
        window.addEventListener('load', () => {
          setMetrics(prev => ({ ...prev, windowLoad: performance.now() }));
        });
      }

      if (document.readyState === 'interactive') {
        setMetrics(prev => ({ ...prev, domLoad: performance.now() }));
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          setMetrics(prev => ({ ...prev, domLoad: performance.now() }));
        });
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
    if (autoHide && hideDelay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay]);

  const getScore = (metric: keyof PerformanceMetrics): 'good' | 'needs-improvement' | 'poor' => {
    const value = metrics[metric];
    if (value === null) return 'good';

    switch (metric) {
      case 'fcp':
        return value < 1800 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor';
      case 'lcp':
        return value < 2500 ? 'good' : value < 4000 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor';
      case 'cls':
        return value < 0.1 ? 'good' : value < 0.25 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value < 800 ? 'good' : value < 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'good';
    }
  };

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good':
        return 'text-green-500';
      case 'needs-improvement':
        return 'text-yellow-500';
      case 'poor':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good':
        return '✅';
      case 'needs-improvement':
        return '⚠️';
      case 'poor':
        return '❌';
      default:
        return '❓';
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isExpanded ? '−' : '+'}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {/* Core Web Vitals Summary */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {(['fcp', 'lcp', 'fid', 'cls'] as const).map((metric) => {
            const score = getScore(metric);
            const value = metrics[metric];
            return (
              <div key={metric} className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400 uppercase font-medium">
                  {metric}
                </span>
                <div className="flex items-center space-x-1">
                  <span className={getScoreColor(score)}>
                    {getScoreIcon(score)}
                  </span>
                  {value !== null && (
                    <span className="text-gray-900 dark:text-white font-mono">
                      {metric === 'cls' ? value.toFixed(3) : Math.round(value)}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Metrics */}
        {isExpanded && showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-3 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                <span className="text-gray-900 dark:text-white font-mono">
                  {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">DOM Load:</span>
                <span className="text-gray-900 dark:text-white font-mono">
                  {metrics.domLoad ? `${Math.round(metrics.domLoad)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Window Load:</span>
                <span className="text-gray-900 dark:text-white font-mono">
                  {metrics.windowLoad ? `${Math.round(metrics.windowLoad)}ms` : 'N/A'}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Performance Score */}
        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">Overall Score:</span>
            <div className="flex items-center space-x-1">
              {(() => {
                const scores = ['fcp', 'lcp', 'fid', 'cls'].map(getScore);
                const goodCount = scores.filter(s => s === 'good').length;
                const totalCount = scores.length;
                const percentage = (goodCount / totalCount) * 100;
                
                let overallScore: 'good' | 'needs-improvement' | 'poor';
                if (percentage >= 75) overallScore = 'good';
                else if (percentage >= 50) overallScore = 'needs-improvement';
                else overallScore = 'poor';

                return (
                  <>
                    <span className={getScoreColor(overallScore)}>
                      {getScoreIcon(overallScore)}
                    </span>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">
                      {Math.round(percentage)}%
                    </span>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
