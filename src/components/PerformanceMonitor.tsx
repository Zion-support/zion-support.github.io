import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  renderTime: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (import.meta.env.MODE !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      // Estimate bundle size (this is a rough estimate)
      const scripts = document.querySelectorAll('script[src]');
      let bundleSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('assets/')) {
          // This is a rough estimate - in reality you'd need to fetch the actual file size
          bundleSize += 200; // Estimated KB per script
        }
      });

      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      // Render time (rough estimate)
      const renderTime = performance.now();

      setMetrics({
        loadTime,
        bundleSize,
        memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
        renderTime,
      });
    };

    // Measure after component mount
    const timeoutId = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (import.meta.env.MODE !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-mono hover:bg-blue-700 transition-colors"
      >
        Perf
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-black bg-opacity-90 text-white p-4 rounded-lg font-mono text-xs min-w-64">
          <h3 className="font-bold mb-2 text-green-400">Performance Metrics</h3>
          <div className="space-y-1">
            <div>Load Time: <span className="text-yellow-400">{metrics.loadTime.toFixed(2)}ms</span></div>
            <div>Bundle Size: <span className="text-yellow-400">~{metrics.bundleSize}KB</span></div>
            <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage.toFixed(2)}MB</span></div>
            <div>Render Time: <span className="text-yellow-400">{metrics.renderTime.toFixed(2)}ms</span></div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-600">
            <div className="text-gray-400 text-xs">
              Press 'P' to toggle
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Keyboard shortcut to toggle performance monitor
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'p' && e.ctrlKey) {
      // This would need to be connected to the component state
      console.log('Performance monitor toggle requested');
    }
  });
}