import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  networkRequests: number;
  errors: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    networkRequests: 0,
    errors: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        // Get memory usage if available
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Count network requests
        const networkRequests = performance.getEntriesByType('resource').length;
        
        // Count errors
        const errors = performance.getEntriesByType('error').length;
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          bundleSize: 0, // This would be calculated from actual bundle analysis
          networkRequests,
          errors
        });
      });
    };

    // Measure after initial load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor performance continuously
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, []);

  // Toggle dashboard visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          title="Open Performance Dashboard (Ctrl+Shift+P)"
        >
          📊
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className={`text-sm font-medium ${metrics.loadTime > 3000 ? 'text-red-600' : metrics.loadTime > 1000 ? 'text-yellow-600' : 'text-green-600'}`}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Render Time:</span>
          <span className={`text-sm font-medium ${metrics.renderTime > 100 ? 'text-red-600' : metrics.renderTime > 50 ? 'text-yellow-600' : 'text-green-600'}`}>
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Memory Usage:</span>
          <span className={`text-sm font-medium ${metrics.memoryUsage > 100 ? 'text-red-600' : metrics.memoryUsage > 50 ? 'text-yellow-600' : 'text-green-600'}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Network Requests:</span>
          <span className="text-sm font-medium text-blue-600">
            {metrics.networkRequests}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Errors:</span>
          <span className={`text-sm font-medium ${metrics.errors > 0 ? 'text-red-600' : 'text-green-600'}`}>
            {metrics.errors}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;