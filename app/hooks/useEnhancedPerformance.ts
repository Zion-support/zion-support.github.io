import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorRate: number;
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  sampleRate: number;
  maxRetries: number;
}

export function useEnhancedPerformance(config: PerformanceConfig = {
  enableMonitoring: true,
  sampleRate: 1000,
  maxRetries: 3
}) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorRate: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [errors, setErrors] = useState<Error[]>([]);

  const collectMetrics = useCallback(() => {
    if (!config.enableMonitoring) return;

    try {
      // Collect performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100 : 0;

      // Simulate CPU usage (in real implementation, this would be more sophisticated)
      const cpuUsage = Math.random() * 100;

      // Network latency simulation
      const networkLatency = Math.random() * 100 + 10;

      // Error rate calculation
      const errorRate = (errors.length / 100) * 100;

      setMetrics({
        loadTime,
        memoryUsage,
        cpuUsage,
        networkLatency,
        errorRate
      });
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }, [config.enableMonitoring, errors.length]);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);
    collectMetrics();

    const interval = setInterval(collectMetrics, config.sampleRate);
    return () => clearInterval(interval);
  }, [isMonitoring, collectMetrics, config.sampleRate]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const logError = useCallback((error: Error) => {
    setErrors(prev => [...prev.slice(-99), error]);
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { loadTime, memoryUsage, cpuUsage, networkLatency, errorRate } = metrics;
    
    let score = 100;
    
    // Deduct points based on performance metrics
    if (loadTime > 3000) score -= 20;
    else if (loadTime > 1000) score -= 10;
    
    if (memoryUsage > 80) score -= 15;
    else if (memoryUsage > 60) score -= 5;
    
    if (cpuUsage > 80) score -= 15;
    else if (cpuUsage > 60) score -= 5;
    
    if (networkLatency > 200) score -= 10;
    else if (networkLatency > 100) score -= 5;
    
    if (errorRate > 5) score -= 20;
    else if (errorRate > 1) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  useEffect(() => {
    if (config.enableMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [config.enableMonitoring, startMonitoring]);

  return {
    metrics,
    isMonitoring,
    errors,
    startMonitoring,
    stopMonitoring,
    logError,
    clearErrors,
    getPerformanceScore
  };
}
