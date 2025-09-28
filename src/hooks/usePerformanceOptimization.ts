import { useCallback, useEffect, useMemo, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number | null;
  renderCount: number;
  lastRenderTime: number;
}

interface PerformanceOptimizationOptions {
  enableMemoryMonitoring?: boolean;
  enableRenderTracking?: boolean;
  enableLazyLoading?: boolean;
  debounceDelay?: number;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const {
    enableMemoryMonitoring = true,
    enableRenderTracking = true,
    enableLazyLoading = true,
    debounceDelay = 100
  } = options;

  const renderCountRef = useRef(0);
  const lastRenderTimeRef = useRef(performance.now());
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track render performance
  useEffect(() => {
    if (enableRenderTracking) {
      renderCountRef.current += 1;
      lastRenderTimeRef.current = performance.now();
    }
  });

  // Memory monitoring
  const memoryUsage = useMemo(() => {
    if (!enableMemoryMonitoring || !(performance as any).memory) return null;
    
    const memory = (performance as any).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit,
      percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    };
  }, [enableMemoryMonitoring]);

  // Debounced function for performance-heavy operations
  const debouncedCallback = useCallback(
    <T extends (...args: any[]) => any>(callback: T): T => {
      return ((...args: Parameters<T>) => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
        
        debounceTimeoutRef.current = setTimeout(() => {
          callback(...args);
        }, debounceDelay);
      }) as T;
    },
    [debounceDelay]
  );

  // Performance metrics
  const metrics: PerformanceMetrics = useMemo(() => ({
    loadTime: performance.now(),
    memoryUsage: memoryUsage?.used || null,
    renderCount: renderCountRef.current,
    lastRenderTime: lastRenderTimeRef.current
  }), [memoryUsage]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return {
    metrics,
    debouncedCallback,
    memoryUsage,
    renderCount: renderCountRef.current
  };
};