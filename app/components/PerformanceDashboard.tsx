import React, { useState, useEffect } from 'react';


interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}


const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0;

      // Measure render time// Measure memory usage
      let _memoryUsage = 0;
      if ('memory' in performance) {memoryUsage = memory?.usedJSHeapSize || 0;
      }

      // Measure FPS (simplified)
      let _fps = 0;
      if ('requestAnimationFrame' in window) {
        let _lastTime = performance.now();
        let _frameCount = 0;
        const measureFPS = (currentTime: number) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps,
      });
    };

    updateMetrics();

    // Update metrics every 5 secondsreturn () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Performance
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className="text-sm font-mono">
            {metrics.loadTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Render Time:</span>
          <span className="text-sm font-mono">
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Memory Usage:</span>
          <span className="text-sm font-mono">
            {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">FPS:</span>
          <span className="text-sm font-mono">{metrics.fps}</span>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
