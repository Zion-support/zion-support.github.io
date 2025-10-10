import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  componentName: string;
  timestamp: number;
}

interface UsePerformanceMonitorOptions {
  componentName?: string;
  trackMemory?: boolean;
  trackRenderTime?: boolean;
  onPerformanceIssue?: (metrics: PerformanceMetrics) => void;
}

export function usePerformanceMonitor(options: UsePerformanceMonitorOptions = {}) {
  const {
    componentName = 'Unknown',
    trackMemory = true,
    trackRenderTime = true,
    onPerformanceIssue,
  } = options;

  const renderStartTime = useRef<number>(0);
  const renderCount = useRef<number>(0);

  const measureRender = useCallback(() => {
    if (trackRenderTime) {
      const renderTime = performance.now() - renderStartTime.current;
      
      if (renderTime > 16) { // More than one frame (60fps)
        const metrics: PerformanceMetrics = {
          renderTime,
          memoryUsage: trackMemory ? (performance as any).memory?.usedJSHeapSize || 0 : 0,
          componentName,
          timestamp: Date.now(),
        };

        if (onPerformanceIssue) {
          onPerformanceIssue(metrics);
        }
      }
    }
  }, [componentName, trackRenderTime, trackMemory, onPerformanceIssue]);

  useEffect(() => {
    renderStartTime.current = performance.now();
    renderCount.current++;

    // Measure render performance
    const timeoutId = setTimeout(measureRender, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  const trackCustomMetric = useCallback((metricName: string, value: number) => {
    if (onPerformanceIssue) {
      const metrics: PerformanceMetrics = {
        renderTime: value,
        memoryUsage: trackMemory ? (performance as any).memory?.usedJSHeapSize || 0 : 0,
        componentName: `${componentName}-${metricName}`,
        timestamp: Date.now(),
      };
      onPerformanceIssue(metrics);
    }
  }, [componentName, trackMemory, onPerformanceIssue]);

  return {
    measureRender,
    trackCustomMetric,
    renderCount: renderCount.current,
  };
}

export default usePerformanceMonitor;