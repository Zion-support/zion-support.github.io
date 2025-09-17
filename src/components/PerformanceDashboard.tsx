import React, { useState, useEffect }  from 'react';

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    ,const measurePerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const performanceMetrics = {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalTime: perfData.loadEventEnd - perfData.fetchStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
  }
];
          setMetrics(performanceMetrics);
        });
      }
  }
];
    measurePerformance();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  ,return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        title="Performance Dashboard"
      >
        📊
      </button>
      
      {isVisible && metrics && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold mb-3 text-gray-900">Performance Metrics</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Load Time:</span>
              <span className="font-mono">{metrics.totalTime?.toFixed(0)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">DOM Content Loaded:</span>
              <span className="font-mono">{metrics.domContentLoaded?.toFixed(0)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">First Paint:</span>
              <span className="font-mono">{metrics.firstPaint?.toFixed(0)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">First Contentful Paint:</span>
              <span className="font-mono">{metrics.firstContentfulPaint?.toFixed(0)}ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  }
];
export default PerformanceDashboard;