import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }

      if (performance.memory) {
        const memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024; // MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }

      // Measure FPS
      let lastTime = performance.now();
      let frameCount = 0;
      
      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          setMetrics(prev => ({ ...prev, fps: frameCount }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(measureFPS);
      };
      
      requestAnimationFrame(measureFPS);
    };

    measurePerformance();
  }, []);

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-50 bg-yellow-600 text-white p-2 rounded-lg shadow-lg hover:bg-yellow-700 transition-colors"
        aria-label="Toggle performance monitor"
      >
        Performance
      </button>

      {isVisible && (
        <div className="fixed top-32 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl max-w-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Performance Metrics
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Load Time:</span>
              <span className="text-gray-900 dark:text-white">{metrics.loadTime}ms</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Memory Usage:</span>
              <span className="text-gray-900 dark:text-white">{metrics.memoryUsage.toFixed(2)}MB</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">FPS:</span>
              <span className="text-gray-900 dark:text-white">{metrics.fps}</span>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="mt-3 w-full bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default AdvancedPerformanceMonitor;
