import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        firstInputDelay: 0, // Would need to be measured with PerformanceObserver
        cumulativeLayoutShift: 0 // Would need to be measured with PerformanceObserver
      };

      setMetrics(newMetrics);
    };

    if (isMonitoring) {
      // Wait for page to load before measuring
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
        return () => window.removeEventListener('load', measurePerformance);
      }
    }
    
    return undefined;
  }, [isMonitoring]);

  const startMonitoring = () => {
    setIsMonitoring(true);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    setMetrics(null);
  };

  const formatTime = (time: number) => {
    return `${time.toFixed(2)}ms`;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance Monitor</h2>
      
      <div className="mb-4">
        <button
          onClick={startMonitoring}
          disabled={isMonitoring}
          className="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Start Monitoring
        </button>
        <button
          onClick={stopMonitoring}
          disabled={!isMonitoring}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
        >
          Stop Monitoring
        </button>
      </div>

      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-700">Load Time</h3>
            <p className="text-2xl font-bold text-blue-600">{formatTime(metrics.loadTime)}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-700">First Contentful Paint</h3>
            <p className="text-2xl font-bold text-green-600">{formatTime(metrics.firstContentfulPaint)}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-700">Largest Contentful Paint</h3>
            <p className="text-2xl font-bold text-purple-600">{formatTime(metrics.largestContentfulPaint)}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-700">First Input Delay</h3>
            <p className="text-2xl font-bold text-orange-600">{formatTime(metrics.firstInputDelay)}</p>
          </div>
        </div>
      )}

      {isMonitoring && !metrics && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Monitoring performance...</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;