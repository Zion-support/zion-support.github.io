import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

interface PerformanceIndicatorProps {
  className?: string;
  showDetails?: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({ 
  className, 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure initial load time
    const startTime = performance.now();
    
    const measureMetrics = () => {
      const loadTime = performance.now() - startTime;
      const memory = (performance as any).memory;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now() - startTime),
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        fps: 60 // Placeholder - would need RAF to measure actual FPS
      });
    };

    // Measure after initial render
    const timeoutId = setTimeout(measureMetrics, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // FPS measurement
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
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
    
    const rafId = requestAnimationFrame(measureFPS);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value < 1000) return `${value}${unit}`;
    return `${(value / 1000).toFixed(1)}s`;
  };

  if (!isVisible && !showDetails) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className={clsx(
          'fixed bottom-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors',
          className
        )}
        title="Show Performance Metrics"
      >
        ⚡
      </button>
    );
  }

  return (
    <div className={clsx(
      'fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 min-w-[200px]',
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className={getPerformanceColor(metrics.loadTime, { good: 1000, poor: 3000 })}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Memory:</span>
          <span className={getPerformanceColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FPS:</span>
          <span className={getPerformanceColor(60 - metrics.fps, { good: 10, poor: 20 })}>
            {metrics.fps}
          </span>
        </div>
        
        {showDetails && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Render:</span>
            <span className={getPerformanceColor(metrics.renderTime, { good: 100, poor: 500 })}>
              {formatMetric(metrics.renderTime)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceIndicator;