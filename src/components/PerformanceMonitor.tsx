import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number;
  bundleSize: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: 0,
    bundleSize: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Memory usage
      const memoryInfo = (performance as any).memory;
      if (memoryInfo) {
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memoryInfo.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }

      // Bundle size estimation
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src) {
          // Rough estimation based on URL length
          totalSize += src.length * 100;
        }
      });
      setMetrics(prev => ({ ...prev, bundleSize: totalSize / 1024 })); // Convert to KB

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return '❓';
    if (value <= thresholds.good) return '✅';
    if (value <= thresholds.needsImprovement) return '⚠️';
    return '❌';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Show Performance Monitor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        {/* Core Web Vitals */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Core Web Vitals</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>First Contentful Paint:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                {getScoreIcon(metrics.fcp, { good: 1800, needsImprovement: 3000 })} {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Largest Contentful Paint:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                {getScoreIcon(metrics.lcp, { good: 2500, needsImprovement: 4000 })} {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>First Input Delay:</span>
              <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
                {getScoreIcon(metrics.fid, { good: 100, needsImprovement: 300 })} {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Cumulative Layout Shift:</span>
              <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                {getScoreIcon(metrics.cls, { good: 0.1, needsImprovement: 0.25 })} {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Additional Metrics</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Time to First Byte:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 600, needsImprovement: 1500 })}>
                {getScoreIcon(metrics.ttfb, { good: 600, needsImprovement: 1500 })} {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Memory Usage:</span>
              <span className={metrics.memoryUsage > 50 ? 'text-red-500' : 'text-green-500'}>
                {metrics.memoryUsage > 50 ? '⚠️' : '✅'} {metrics.memoryUsage.toFixed(1)}MB
              </span>
            </div>
            <div className="flex justify-between">
              <span>Bundle Size:</span>
              <span className={metrics.bundleSize > 500 ? 'text-red-500' : 'text-green-500'}>
                {metrics.bundleSize > 500 ? '⚠️' : '✅'} {metrics.bundleSize.toFixed(1)}KB
              </span>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="bg-gray-50 p-3 rounded text-xs">
          <h5 className="font-semibold text-gray-700 mb-1">Tips:</h5>
          <ul className="space-y-1 text-gray-600">
            <li>• Keep FCP under 1.8s</li>
            <li>• Keep LCP under 2.5s</li>
            <li>• Keep FID under 100ms</li>
            <li>• Keep CLS under 0.1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;