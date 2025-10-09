import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
  });

  const [, setPerformanceScore] = useState(0);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure FPS
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (enableConsoleLogging) {
        requestAnimationFrame(measureFPS);
      }
    };

    if (enableConsoleLogging) {
      measureFPS();
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Measure load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));

    // Measure render time
    const renderTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime }));
  }, [enableConsoleLogging]);

  const calculatePerformanceScore = useCallback(() => {
    let score = 100;

    // FPS scoring (target: 60fps)
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 45) score -= 15;
    else if (metrics.fps < 60) score -= 5;

    // Memory usage scoring (target: < 50MB)
    if (metrics.memoryUsage > 100) score -= 25;
    else if (metrics.memoryUsage > 75) score -= 15;
    else if (metrics.memoryUsage > 50) score -= 5;

    // Load time scoring (target: < 3s)
    if (metrics.loadTime > 5000) score -= 25;
    else if (metrics.loadTime > 3000) score -= 15;
    else if (metrics.loadTime > 2000) score -= 5;

    setPerformanceScore(Math.max(0, score));
    return Math.max(0, score);
  }, [metrics]);

  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(() => {
      measurePerformance();
      if (enableReporting) {
        const score = calculatePerformanceScore();
        if (enableConsoleLogging) {
          console.log('Performance Score:', score);
          console.log('Metrics:', metrics);
        }
      }
    }, reportInterval);

    return () => clearInterval(interval);
  }, [measurePerformance, calculatePerformanceScore, enableReporting, reportInterval, metrics]);

  // Web Vitals measurement
  useEffect(() => {
    if (typeof window === 'undefined' || !enableReporting) return;

    const reportWebVitals = (metric: { name: string; value: number }) => {
      if (enableConsoleLogging) {
        console.log('Web Vital captured:', metric);
      }
    };

    // This would typically be imported from web-vitals library
    // For now, we'll just set up the structure
    return () => {
      // Cleanup if needed
    };
  }, [enableReporting, enableConsoleLogging]);

  return (
    <div className="performance-monitor">
      {enableConsoleLogging && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-sm font-mono">
          <div>FPS: {metrics.fps}</div>
          <div>Memory: {metrics.memoryUsage}MB</div>
          <div>Load Time: {metrics.loadTime}ms</div>
          <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;