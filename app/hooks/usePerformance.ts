import { useEffect, useCallback, useRef } from 'react';

/**
 * Hook for performance monitoring and optimization
 */
export function usePerformance(componentName: string) {
  const renderStartTime = useRef<number>(0);
  const renderCount = useRef<number>(0);

  // Track render performance
  useEffect(() => {
    renderStartTime.current = performance.now();
    renderCount.current += 1;

    return () => {
      const renderTime = performance.now() - renderStartTime.current;
      if (renderTime > 16) { // More than one frame (16ms)
        console.warn(`Slow render detected in ${componentName}`, {
          renderTime,
          renderCount: renderCount.current,
          componentName
        });
      }
    };
  });

  // Debounced function for expensive operations
  const debounce = useCallback(<T extends (...args: any[]) => any>(
      func: T,
      delay: number
    ): ((...args: Parameters<T>) => void) => {
      let timeoutId: NodeJS.Timeout;
      return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    },
    []
  );

  // Throttled function for frequent operations
  const throttle = useCallback(<T extends (...args: any[]) => any>(
      func: T,
      delay: number
    ): ((...args: Parameters<T>) => void) => {
      let lastCall = 0;
      return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          func(...args);
        }
      };
    },
    []
  );

  // Memoization helper
  const memoize = useCallback(<T extends (...args: any[]) => any>(func: T): T => {
      const cache = new Map();
      return ((...args: Parameters<T>) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
          return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
      }) as T;
    },
    []
  );

  // Performance measurement helper
  const measurePerformance = useCallback((operation: string, fn: () => void) => {
      const start = performance.now();
      fn();
      const end = performance.now();
      const duration = end - start;

      console.log(`Performance - ${operation}:`, duration, { componentName });

      return duration;
    },
    [componentName]
  );

  return {
    debounce,
    throttle,
    memoize,
    measurePerformance,
    renderCount: renderCount.current
  };
}

/**
 * Hook for memory usage monitoring
 */
export function useMemoryMonitor(componentName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory) {
          const used = memory.usedJSHeapSize / 1024 / 1024; // MB
          const total = memory.totalJSHeapSize / 1024 / 1024; // MB
          const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
          if (used > limit * 0.8) {
            console.warn(`High memory usage detected in ${componentName}`, {
              used: `${used.toFixed(2)}MB`,
              total: `${total.toFixed(2)}MB`,
              limit: `${limit.toFixed(2)}MB`,
              percentage: `${((used / limit) * 100).toFixed(2)}%`
            });
          }
        }
      };
      const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, [componentName]);
}

export default usePerformance;
