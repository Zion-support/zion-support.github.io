<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return;

    const measurePerformance = () => {
      // Measure load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Measure render time (FCP)
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const renderTime = fcp ? fcp.startTime : 0;

      // Measure memory usage
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / memory.totalJSHeapSize : 0;

      // Measure FPS
      let fps = 0;
      if (typeof window.requestAnimationFrame === 'function') {
        let lastTime = performance.now();
        let frameCount = 0;
        
        const measureFrame = (currentTime: number) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            lastTime = currentTime;
            frameCount = 0;
          }
          requestAnimationFrame(measureFrame);
        };
        
        requestAnimationFrame(measureFrame);
      }

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100),
        fps
      });
    };

    // Initial measurement
    measurePerformance();

    // Show/hide with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Render Time: {metrics.renderTime}ms</div>
      <div>Memory: {metrics.memoryUsage}%</div>
      <div>FPS: {metrics.fps}</div>
      <div className="text-xs text-gray-400 mt-2">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
    // Show performance panel after 3 seconds;
const timer = setTimeout(() => setIsVisible(true), 3000);
=======
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return null;
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
