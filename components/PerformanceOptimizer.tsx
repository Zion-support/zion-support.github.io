'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env['NEXT_PUBLIC_SHOW_PERFORMANCE'] === 'true') {
      setIsVisible(true);
    }

    // Measure First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
            loadTime: navigationEntry.loadEventEnd - navigationEntry.fetchStart
          }));
        }
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Measure memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }

      // Cleanup observers
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
    
    // Return undefined if PerformanceObserver is not available
    return undefined;
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };



  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        Performance Metrics
      </h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
        
        {metrics.memoryUsage && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Memory:</span>
            <span className={getScoreColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {Math.round(metrics.memoryUsage)}MB
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Core Web Vitals monitoring active
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;