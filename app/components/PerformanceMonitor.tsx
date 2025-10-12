import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));

      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        }).observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }).observe({ entryTypes: ['layout-shift'] });
      }

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle performance monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed top-16 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            {/* Load Time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Load Time</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
              </span>
            </div>

            {/* FCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">FCP</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
                  {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                </span>
                <div className="text-xs text-gray-500">
                  {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
                </div>
              </div>
            </div>

            {/* LCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Wifi className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">LCP</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                  {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                </span>
                <div className="text-xs text-gray-500">
                  {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
                </div>
              </div>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">FID</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}`}>
                  {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                </span>
                <div className="text-xs text-gray-500">
                  {getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })}
                </div>
              </div>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">CLS</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                  {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </span>
                <div className="text-xs text-gray-500">
                  {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
                </div>
              </div>
            </div>

            {/* TTFB */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">TTFB</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}`}>
                  {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
                <div className="text-xs text-gray-500">
                  {getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;