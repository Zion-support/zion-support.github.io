'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}

interface PerformanceDashboardProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  refreshInterval?: number;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  refreshInterval = 1000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // Convert to MB

    // Simple FPS calculation (this is a basic implementation)
    let fps = 0;
    if (typeof requestAnimationFrame !== 'undefined') {
      let lastTime = performance.now();
      let frameCount = 0;
      
      const countFrames = (currentTime: number) => {
        frameCount++;
        if (currentTime - lastTime >= 1000) {
          fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          frameCount = 0;
          lastTime = currentTime;
        }
        if (enableRealTimeMonitoring) {
          requestAnimationFrame(countFrames);
        }
      };
      requestAnimationFrame(countFrames);
    }

    const renderTime = performance.now();

    const newMetrics: PerformanceMetrics = {
      loadTime,
      renderTime,
      memoryUsage,
      fps,
    };

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);
  }, [onMetricsUpdate, enableRealTimeMonitoring]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    measurePerformance();
    const interval = setInterval(measurePerformance, refreshInterval);

    return () => clearInterval(interval);
  }, [measurePerformance, enableRealTimeMonitoring, refreshInterval]);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 text-white text-xs z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-cyan-400">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-green-400">{metrics.loadTime.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className="text-blue-400">{metrics.renderTime.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Memory Usage:</span>
          <span className="text-yellow-400">{metrics.memoryUsage.toFixed(1)}MB</span>
        </div>
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps > 30 ? 'text-green-400' : 'text-red-400'}>
            {metrics.fps}
          </span>
        </div>
      </div>
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceDashboard;