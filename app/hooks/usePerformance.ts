import { useCallback, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  [key: string]: number;
}

export const usePerformance = () => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const startTimeRef = useRef<number>(0);

  const startTiming = useCallback((name: string) => {
    startTimeRef.current = performance.now();
    metricsRef.current[`${name}_start`] = startTimeRef.current;
  }, []);

  const endTiming = useCallback((name: string) => {
    const endTime = performance.now();
    const duration = endTime - startTimeRef.current;
    metricsRef.current[name] = duration;
    return duration;
  }, []);

  const measure = useCallback((name: string, fn: () => void) => {
    startTiming(name);
    fn();
    return endTiming(name);
  }, [startTiming, endTiming]);

  const getMetrics = useCallback(() => {
    return { ...metricsRef.current };
  }, []);

  const clearMetrics = useCallback(() => {
    metricsRef.current = {};
  }, []);

  const getNavigationTiming = useCallback(() => {
    if (typeof window === 'undefined') return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      firstPaint: navigation.domContentLoadedEventEnd - navigation.navigationStart
    };
  }, []);

  const getResourceTiming = useCallback(() => {
    if (typeof window === 'undefined') return [];

    return performance.getEntriesByType('resource').map((entry) => ({
      name: entry.name,
      duration: entry.duration,
      size: (entry as PerformanceResourceTiming).transferSize || 0
    }));
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    const navigationTiming = getNavigationTiming();
    if (navigationTiming) {
      Object.entries(navigationTiming).forEach(([key, value]) => {
        metricsRef.current[key] = value;
      });
    }
  }, [getNavigationTiming]);

  return {
    startTiming,
    endTiming,
    measure,
    getMetrics,
    clearMetrics,
    getNavigationTiming,
    getResourceTiming
  };
};

export default usePerformance;