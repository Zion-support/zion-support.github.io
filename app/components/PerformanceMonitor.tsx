'use client';

import React, { useEffect, useState, memo } from 'react';

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reportWebVitals = (metric: { name: string; value: number }) => {
      // Log to console in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

<<<<<<< HEAD
    // Set up performance observer for more detailed monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP - Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
          });
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // FID - First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
            if (entry.processingStart) {
              const fid = entry.processingStart - entry.startTime;
              reportWebVitals({
                name: 'FID',
                value: fid,
              });
              setMetrics(prev => ({ ...prev, fid }));
            }
          });
        }).observe({ entryTypes: ['first-input'] });

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
              reportWebVitals({
                name: 'CLS',
                value: clsValue,
              });
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        }).observe({ entryTypes: ['layout-shift'] });

        // FCP - First Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            reportWebVitals({
              name: 'FCP',
              value: entry.startTime,
            });
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          });
        }).observe({ entryTypes: ['paint'] });

        // TTFB - Time to First Byte
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { responseStart?: number; requestStart?: number }) => {
            if (entry.responseStart && entry.requestStart && entry.responseStart > 0) {
              const ttfb = entry.responseStart - entry.requestStart;
              reportWebVitals({
                name: 'TTFB',
                value: ttfb,
              });
              setMetrics(prev => ({ ...prev, ttfb }));
            }
          });
        }).observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
=======
    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    
    if (navigation) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcp = lcpEntries[lcpEntries.length - 1];

      const newMetrics: PerformanceMetrics = {
        fcp: fcp ? fcp.startTime : undefined,
        lcp: lcp ? lcp.startTime : undefined,
        ttfb: navigation.responseStart - navigation.requestStart,
      };

      setMetrics(newMetrics);
      
      // Report metrics
      if (newMetrics.fcp) reportWebVitals({ name: 'FCP', value: newMetrics.fcp });
      if (newMetrics.lcp) reportWebVitals({ name: 'LCP', value: newMetrics.lcp });
      if (newMetrics.ttfb) reportWebVitals({ name: 'TTFB', value: newMetrics.ttfb });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-16e0
    }

    // Observe Cumulative Layout Shift
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as LayoutShift;
        if (!layoutShift.hadRecentInput) {
          setMetrics(prev => ({
            ...prev,
            cls: (prev.cls || 0) + layoutShift.value
          }));
        }
      }
    });

    try {
      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // Layout shift observation not supported
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-sm font-mono z-50 max-w-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Performance Metrics</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white ml-4"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
        {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
        {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
        <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-700">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default memo(PerformanceMonitor);