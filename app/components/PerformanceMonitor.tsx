import React, { useEffect, useState } from 'react';
import { Activity, Clock, Zap } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  useEffect(() => {
    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now();

      // Measure memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      // Measure FPS
      let frameCount = 0;
      let lastTime = performance.now();
      
      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          setMetrics(prev => ({ ...prev, fps, loadTime, memoryUsage }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(measureFPS);
      };

      measureFPS();
    };

    measurePerformance();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="flex items-center space-x-2 mb-2">
        <Activity className="w-4 h-4" />
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3" />
          <span>Load: {metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Zap className="w-3 h-3" />
          <span>FPS: {metrics.fps}</span>
        </div>
        
        {metrics.memoryUsage > 0 && (
          <div className="flex items-center space-x-2">
            <Activity className="w-3 h-3" />
            <span>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;