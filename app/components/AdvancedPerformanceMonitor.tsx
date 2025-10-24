import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  });

  useEffect(() => {
    const observers: PerformanceObserver[] = [];

    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }

    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          if ('processingStart' in entry && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observers.push(fidObserver);
    } catch (error) {
      console.warn('FID measurement failed:', error);
    }

    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }

    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value;
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }

    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className="ml-2 font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">FCP:</span>
          <span className="ml-2 font-mono">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">LCP:</span>
          <span className="ml-2 font-mono">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">FID:</span>
          <span className="ml-2 font-mono">{metrics.firstInputDelay.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">CLS:</span>
          <span className="ml-2 font-mono">{metrics.cumulativeLayoutShift.toFixed(4)}</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;