import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Simulate performance metrics for development
    const simulateMetrics = () => {
      setMetrics({
        loadTime: Math.random() * 2000 + 500,
        firstContentfulPaint: Math.random() * 1000 + 200,
        largestContentfulPaint: Math.random() * 2000 + 500,
        firstInputDelay: Math.random() * 100 + 10,
        cumulativeLayoutShift: Math.random() * 0.1
      });
    };

    // Simulate metrics after component mount
    const timer = setTimeout(simulateMetrics, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={toggleVisibility}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-cyan-400">{metrics.loadTime?.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="text-cyan-400">{metrics.firstContentfulPaint?.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="text-cyan-400">{metrics.largestContentfulPaint?.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="text-cyan-400">{metrics.firstInputDelay?.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="text-cyan-400">{metrics.cumulativeLayoutShift?.toFixed(3)}</span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        Development mode only
      </div>
    </div>
  );
};

export default PerformanceMonitor;