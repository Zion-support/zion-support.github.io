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
        if (paint.length > 0) {
          const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: fcp.startTime
            }));
          }
        }

        // Measure memory usage
        if ('memory' in performance) {
          const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }));
        }

        // Measure load time
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          }));
        }

        return () => observer.disconnect();
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
        <div className="absolute bottom-12 right-0 bg-white border border-gray-300 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="font-bold text-gray-900 mb-3">Performance Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Render Time:</span>
              <span className="font-mono">{metrics.renderTime.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Memory Usage:</span>
              <span className="font-mono">{metrics.memoryUsage.toFixed(2)}MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className="font-mono">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className="font-mono">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CLS:</span>
              <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(4)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FID:</span>
              <span className="font-mono">{metrics.firstInputDelay.toFixed(2)}ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;