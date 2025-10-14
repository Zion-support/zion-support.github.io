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
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');
        
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: Math.round(entry.startTime)
              }));
            }
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value
              }));
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memoryUsage = (window as any).performance?.memory?.usedJSHeapSize || 0;
        
        // Network latency
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;
        
        // First Input Delay
        const firstInputDelay = navigation ? navigation.domInteractive - navigation.domContentLoadedEventEnd : 0;
        
        // Total Blocking Time
        const totalBlockingTime = navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0;
        
        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(performance.now()),
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkLatency: Math.round(networkLatency),
          firstContentfulPaint: Math.round(firstContentfulPaint),
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: Math.round(firstInputDelay),
          totalBlockingTime: Math.round(totalBlockingTime),
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const startRecording = () => {
    setIsRecording(true);
    // Reset metrics
    setMetrics({
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
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleVisibility}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
        >
          Performance Monitor
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={startRecording}
            disabled={isRecording}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            Start
          </button>
          <button
            onClick={stopRecording}
            disabled={!isRecording}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            Stop
          </button>
          <button
            onClick={toggleVisibility}
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            ×
          </button>
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Load Time:</span>
          <span className="font-mono">{metrics.loadTime}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Render Time:</span>
          <span className="font-mono">{metrics.renderTime}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Memory Usage:</span>
          <span className="font-mono">{metrics.memoryUsage}MB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Network Latency:</span>
          <span className="font-mono">{metrics.networkLatency}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">FCP:</span>
          <span className="font-mono">{metrics.firstContentfulPaint}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">LCP:</span>
          <span className="font-mono">{metrics.largestContentfulPaint}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">CLS:</span>
          <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">FID:</span>
          <span className="font-mono">{metrics.firstInputDelay}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">TBT:</span>
          <span className="font-mono">{metrics.totalBlockingTime}ms</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;