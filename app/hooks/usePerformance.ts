import { useRef, useCallback, useEffect } from 'react';

/**
 * Hook for performance monitoring and optimization
 */
export function usePerformance(componentName: string) {
  const renderStartTime = useRef<number>(0);
  const renderCount = useRef<number>(0);

  const measureRender = useCallback(() => {
    const renderTime = performance.now() - renderStartTime.current;
    if (renderTime > 16) { // More than one frame (16ms)
      console.warn(`Slow render in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }
  }, [componentName]);

  const debounce = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: NodeJS.Timeout;
    return ((...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    }) as T;
  }, []);

  const throttle = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): T => {
    let lastCall = 0;
    return ((...args: any[]) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        return func(...args);
      }
    }) as T;
  }, []);

  const memoize = useCallback(<T extends (...args: any[]) => any>(func: T): T => {
    const cache = new Map();
    return ((...args: any[]) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = func(...args);
      cache.set(key, result);
      return result;
    }) as T;
  }, []);

  useEffect(() => {
    renderStartTime.current = performance.now();
    renderCount.current += 1;
    
    return () => {
      measureRender();
    };
  });

  return {
    measureRender,
    debounce,
    throttle,
    memoize,
    renderCount: renderCount.current
  };
}