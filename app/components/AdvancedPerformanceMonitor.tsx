import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');
        
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: entry.startTime
              }));
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure Core Web Vitals
        const measureCLS = () => {
          let clsValue = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value || 0;
              }
            }
            setMetrics(prev => ({
              ...prev,
              cumulativeLayoutShift: clsValue
            }));
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        };

        const measureFID = () => {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              setMetrics(prev => ({
                ...prev,
                firstInputDelay: entry.processingStart - entry.startTime
              }));
            }
          });
          observer.observe({ entryTypes: ['first-input'] });
        };

        measureCLS();
        measureFID();

        // Calculate other metrics
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            networkLatency: navigation.responseEnd - navigation.requestStart
          }));
        }

        if (paint.length > 0) {
          const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: fcp.startTime
            }));
          }
        }

        // Memory usage
        if ('memory' in performance) {
          const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
          if (memoryInfo) {
            setMetrics(prev => ({
              ...prev,
              memoryUsage: memoryInfo.usedJSHeapSize / 1024 / 1024
            }));
          }
        }

        return () => {
          observer.disconnect();
        };
      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>Render Time:</span>
              <span className="font-mono">{metrics.renderTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>Memory Usage:</span>
              <span className="font-mono">{metrics.memoryUsage.toFixed(2)}MB</span>
            </div>
            <div className="flex justify-between">
              <span>Network Latency:</span>
              <span className="font-mono">{metrics.networkLatency.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className="font-mono">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className="font-mono">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className="font-mono">{metrics.firstInputDelay.toFixed(2)}ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;