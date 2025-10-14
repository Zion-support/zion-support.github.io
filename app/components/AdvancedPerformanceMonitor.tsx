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
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof performance === 'undefined') {
        return;
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0;
      
      const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize : 0;
      
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const firstContentfulPaint = fcpEntry ? fcpEntry.startTime : 0;
      
      const lcpEntry = performance.getEntriesByType('largest-contentful-paint');
      const largestContentfulPaint = lcpEntry.length > 0 ? lcpEntry[lcpEntry.length - 1].startTime : 0;
      
      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        networkLatency: 0, // Would need network timing API
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift: 0, // Would need CLS API
        firstInputDelay: 0, // Would need FID API
        totalBlockingTime: 0, // Would need TBT API
      });
    };

    const timeoutId = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timeoutId);
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
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          
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
              <span className="font-mono">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className="font-mono">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className="font-mono">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-full px-3 py-2 rounded text-sm font-medium ${
                isRecording 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;