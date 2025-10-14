import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0
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
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime),
          firstContentfulPaint: Math.round(firstContentfulPaint)
        }));
      }
    };

    // Measure performance after component mounts
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm font-mono z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs bg-gray-600 px-2 py-1 rounded"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime}ms</div>
          <div>FCP: {metrics.firstContentfulPaint}ms</div>
          <div>LCP: {metrics.largestContentfulPaint}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;