import { useState, useEffect, useCallback } from 'react';

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  errorCount: number;
}

interface UseEnhancedPerformanceReturn {
  data: PerformanceData | null;
  loading: boolean;
  error: string | null;
  refresh: () => void;
  clearError: () => void;
}

export function useEnhancedPerformance(): UseEnhancedPerformanceReturn {
  const [data, setData] = useState<PerformanceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const collectPerformanceData = useCallback(() => {
    if (typeof window === 'undefined') return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const memory = (performance as any).memory;

    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      renderTime: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      memoryUsage: memory ? memory.usedJSHeapSize : 0,
      errorCount: 0 // This would be tracked by an error monitoring service
    };
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate async data collection
      await new Promise(resolve => setTimeout(resolve, 100));
      const performanceData = collectPerformanceData();
      setData(performanceData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to collect performance data');
    } finally {
      setLoading(false);
    }
  }, [collectPerformanceData]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data,
    loading,
    error,
    refresh,
    clearError
  };
}

export default useEnhancedPerformance;