import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * Performance monitoring hook for React components
 */
export const usePerformanceMonitor = (componentName: string) => {
  const mountTime = useRef<number>(Date.now());
  const renderCount = useRef<number>(0);

  useEffect(() => {
    mountTime.current = Date.now();
    renderCount.current = 0;

    return () => {
      const unmountTime = Date.now();
      const totalTime = unmountTime - mountTime.current;
      
      if (import.meta.env.DEV) {
        console.log(`[Performance] ${componentName}:`, {
          renderCount: renderCount.current,
          totalTime: `${totalTime}ms`,
          avgRenderTime: `${totalTime / renderCount.current}ms`
        });
      }
    };
  }, [componentName]);

  const markRender = useCallback(() => {
    renderCount.current += 1;
  }, []);

  return { markRender };
};

/**
 * Hook for optimizing expensive calculations with memoization
 */
export const useMemoizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, deps);

  return useCallback(((...args: any[]) => {
    return ref.current?.(...args);
  }) as T, []);
};

/**
 * Hook for debounced values
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook for throttled values
 */
export const useThrottle = <T>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

/**
 * Hook for intersection observer (lazy loading)
 */
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options]);

  return isIntersecting;
};

/**
 * Hook for managing visibility state
 */
export const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
};

/**
 * Hook for managing network status
 */
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState<string>('unknown');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check connection type if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setConnectionType(connection.effectiveType || 'unknown');

      const handleConnectionChange = () => {
        setConnectionType(connection.effectiveType || 'unknown');
      };

      connection.addEventListener('change', handleConnectionChange);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        connection.removeEventListener('change', handleConnectionChange);
      };
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, connectionType };
};

/**
 * Hook for managing memory usage (if available)
 */
export const useMemoryInfo = () => {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null>(null);

  useEffect(() => {
    if ('memory' in performance) {
      const updateMemoryInfo = () => {
        const memory = (performance as any).memory;
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        });
      };

      updateMemoryInfo();
      const interval = setInterval(updateMemoryInfo, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return memoryInfo;
};

/**
 * Hook for optimizing component re-renders
 */
export const useOptimizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  const callbackRef = useRef<T>(callback);
  const depsRef = useRef(deps);

  // Update callback ref when dependencies change
  useEffect(() => {
    callbackRef.current = callback;
    depsRef.current = deps;
  }, [callback, deps]);

  return useCallback(((...args: any[]) => {
    return callbackRef.current(...args);
  }) as T, []);
};

/**
 * Hook for managing component lifecycle performance
 */
export const useComponentLifecycle = (componentName: string) => {
  const { markRender } = usePerformanceMonitor(componentName);
  const renderStartTime = useRef<number>(0);

  useEffect(() => {
    renderStartTime.current = performance.now();
    markRender();
  });

  useEffect(() => {
    const renderTime = performance.now() - renderStartTime.current;

    if (import.meta.env.DEV && renderTime > 16) {
      console.warn(`[Performance] ${componentName} render took ${renderTime.toFixed(2)}ms (target: <16ms)`);
    }
  });

  return {
    markRender,
    renderStartTime: renderStartTime.current
  };
};