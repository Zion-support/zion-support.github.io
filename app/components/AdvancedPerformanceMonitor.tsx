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
            if (entry.entryType === 'layout-shift' && !(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as PerformanceEntry & { value: number }).value
              }));
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memoryUsage = (window as Window & { performance?: { memory?: { usedJSHeapSize?: number } } }).performance?.memory?.usedJSHeapSize || 0;
        
        // Network latency
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;
        
        // Calculate Total Blocking Time
        const longTasks = window.performance.getEntriesByType('longtask');
        const totalBlockingTime = longTasks.reduce((total, task) => {
          return total + (task.duration - 50); // 50ms is the threshold
        }, 0);
        
        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(firstContentfulPaint),
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkLatency: Math.round(networkLatency),
          firstContentfulPaint: Math.round(firstContentfulPaint),
          largestContentfulPaint: 0, // Will be updated by observer
          cumulativeLayoutShift: 0, // Will be updated by observer
          firstInputDelay: 0, // Would need specific measurement
          totalBlockingTime: Math.round(totalBlockingTime),
        });
        
        return () => observer.disconnect();
      }
    };
    
    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.loadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.firstContentfulPaint > 1800 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.largestContentfulPaint > 2500 ? 'text-red-400' : 'text-green-400'}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cumulativeLayoutShift > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 50 ? 'text-red-400' : 'text-green-400'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span>TBT:</span>
          <span className={metrics.totalBlockingTime > 200 ? 'text-red-400' : 'text-green-400'}>
            {metrics.totalBlockingTime}ms
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-600">
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`w-full py-2 px-4 rounded text-sm font-medium ${
            isRecording 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;