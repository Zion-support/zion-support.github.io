import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0,
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

        // Measure FCP
        if (paint.length > 0) {
          const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: Math.round(fcp.startTime)
            }));
          }
        }

        // Measure TTI (simplified)
        const tti = navigation.loadEventEnd - navigation.fetchStart;
        setMetrics(prev => ({
          ...prev,
          timeToInteractive: Math.round(tti)
        }));

        return () => observer.disconnect();
      }
    };

    const timeoutId = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const startRecording = () => {
    setIsRecording(true);
    // Reset metrics
    setMetrics({
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0,
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleVisibility}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Performance Monitor
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-300 rounded-lg shadow-xl p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
            <button
              onClick={toggleVisibility}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">First Contentful Paint:</span>
              <span className="font-mono">{metrics.firstContentfulPaint}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Largest Contentful Paint:</span>
              <span className="font-mono">{metrics.largestContentfulPaint}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time to Interactive:</span>
              <span className="font-mono">{metrics.timeToInteractive}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cumulative Layout Shift:</span>
              <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
            </div>
          </div>
          
          <div className="mt-4 flex gap-2">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
              >
                Stop Recording
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;