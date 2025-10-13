import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
      
      // FPS calculation (simplified)
      let fps = 60;
      let lastTime = performance.now();
      let frameCount = 0;
      
      const calculateFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(calculateFPS);
      };
      
      calculateFPS();

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps
      });
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
        title="Performance Monitor"
      >
        📊
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-xl min-w-64">
          <h3 className="font-semibold mb-3 text-cyan-400">Performance Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span className={metrics.loadTime < 1000 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.loadTime.toFixed(2)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>Render Time:</span>
              <span className={metrics.renderTime < 1000 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.renderTime.toFixed(2)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>Memory:</span>
              <span className={metrics.memoryUsage < 50 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.memoryUsage.toFixed(2)}MB
              </span>
            </div>
            <div className="flex justify-between">
              <span>FPS:</span>
              <span className={metrics.fps > 30 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.fps}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
