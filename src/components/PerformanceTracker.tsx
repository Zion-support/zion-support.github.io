import React, { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
  errors: number;
}

interface PerformanceTrackerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  interval?: number;
}

export const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({
  onMetricsUpdate,
  interval = 5000
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    fps: 0,
    errors: 0
  });
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const errorCountRef = useRef(0);

  useEffect(() => {
    // Track load time
    const loadTime = performance.now();
    metricsRef.current.loadTime = loadTime;

    // Track FPS
    const trackFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTimeRef.current;

      if (deltaTime >= 1000) {
        metricsRef.current.fps = Math.round((frameCountRef.current * 1000) / deltaTime);
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      requestAnimationFrame(trackFPS);
    };

    // Track memory usage if available
    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
        metricsRef.current.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }
    };

    // Track errors
    const handleError = () => {
      errorCountRef.current++;
      metricsRef.current.errors = errorCountRef.current;
    };

    // Track render time
    const trackRenderTime = () => {
      const renderTime = performance.now() - loadTime;
      metricsRef.current.renderTime = renderTime;
    };

    // Set up tracking
    requestAnimationFrame(trackFPS);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    // Initial render time tracking
    requestAnimationFrame(trackRenderTime);

    // Periodic metrics update
    const metricsInterval = setInterval(() => {
      trackMemory();
      onMetricsUpdate?.(metricsRef.current);
    }, interval);

    // Cleanup
    return () => {
      clearInterval(metricsInterval);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, [onMetricsUpdate, interval]);

  return null; // This component doesn't render anything
};

export default PerformanceTracker;