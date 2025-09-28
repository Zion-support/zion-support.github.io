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
  const debounceTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

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
    
    const mem = (performance as any).memory;
    return {
      used: mem.usedJSHeapSize,
      total: mem.totalJSHeapSize,
      limit: mem.jsHeapSizeLimit,
      percentage: (mem.usedJSHeapSize / mem.jsHeapSizeLimit) * 100
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

  // Preload resource function
  const preloadResource = useCallback((url: string, type: 'script' | 'style' | 'image' = 'script') => {
    if (type === 'image') {
      const img = document.createElement('img');
      img.src = url;
    } else {
      const link = document.createElement(type === 'script' ? 'script' : 'link');
      if (type === 'script') {
        (link as HTMLScriptElement).src = url;
        (link as HTMLScriptElement).async = true;
      } else {
        (link as HTMLLinkElement).rel = 'stylesheet';
        (link as HTMLLinkElement).href = url;
      }
      document.head.appendChild(link);
    }
  }, []);

  // Record metric function
  const recordMetric = useCallback((name: string, value: number, tags?: Record<string, string>) => {
    (metrics as any)[name] = {
      value,
      timestamp: Date.now(),
      tags: tags || {}
    };
  }, [metrics]);

  return {
    metrics,
    debouncedCallback,
    memoryUsage,
    renderCount: renderCountRef.current,
    preloadResource,
    recordMetric
  };
};