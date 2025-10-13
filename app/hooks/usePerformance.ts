import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memory: number | null;
  connection: string | null;
}

interface PerformanceConfig {
  enableMemoryMonitoring: boolean;
  enableConnectionMonitoring: boolean;
  enableWebVitals: boolean;
  reportInterval: number;
}

const defaultConfig: PerformanceConfig = {
  enableMemoryMonitoring: true,
  enableConnectionMonitoring: true,
  enableWebVitals: true,
  reportInterval: 30000
};

export const usePerformance = (config: Partial<PerformanceConfig> = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memory: null,
    connection: null
  });

  const [isSupported, setIsSupported] = useState(false);

  const mergedConfig = { ...defaultConfig, ...config };

  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number | string | null) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  }, []);

  const getConnectionType = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      return connection.effectiveType || connection.type || 'unknown';
    }
    return 'unknown';
  }, []);

  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
    }
    return null;
  }, []);

  const measureWebVitals = useCallback(async () => {
    if (!mergedConfig.enableWebVitals) return;

    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      
      getCLS((metric) => updateMetric('cls', metric.value));
      getFID((metric) => updateMetric('fid', metric.value));
      getFCP((metric) => updateMetric('fcp', metric.value));
      getLCP((metric) => updateMetric('lcp', metric.value));
      getTTFB((metric) => updateMetric('ttfb', metric.value));
    } catch (error) {
      console.warn('Failed to load web-vitals:', error);
    }
  }, [mergedConfig.enableWebVitals, updateMetric]);

  const measureMemory = useCallback(() => {
    if (!mergedConfig.enableMemoryMonitoring) return;
    
    const memoryUsage = getMemoryUsage();
    if (memoryUsage !== null) {
      updateMetric('memory', memoryUsage);
    }
  }, [mergedConfig.enableMemoryMonitoring, getMemoryUsage, updateMetric]);

  const measureConnection = useCallback(() => {
    if (!mergedConfig.enableConnectionMonitoring) return;
    
    const connectionType = getConnectionType();
    updateMetric('connection', connectionType);
  }, [mergedConfig.enableConnectionMonitoring, getConnectionType, updateMetric]);

  const measureAll = useCallback(() => {
    measureWebVitals();
    measureMemory();
    measureConnection();
  }, [measureWebVitals, measureMemory, measureConnection]);

  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // LCP scoring
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1000) score -= 10;
    }
    
    // FID scoring
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 25;
      else if (metrics.fid > 100) score -= 15;
      else if (metrics.fid > 50) score -= 5;
    }
    
    // CLS scoring
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 25;
      else if (metrics.cls > 0.1) score -= 15;
      else if (metrics.cls > 0.05) score -= 5;
    }
    
    // Memory scoring
    if (metrics.memory !== null) {
      if (metrics.memory > 100) score -= 10;
      else if (metrics.memory > 50) score -= 5;
    }
    
    return Math.max(0, score);
  }, [metrics]);

  const getPerformanceGrade = useCallback(() => {
    const score = getPerformanceScore();
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [getPerformanceScore]);

  const isPerformanceGood = useCallback(() => {
    return getPerformanceScore() >= 80;
  }, [getPerformanceScore]);

  useEffect(() => {
    // Check if performance API is supported
    setIsSupported('performance' in window);
    
    if (typeof window === 'undefined') return;

    // Initial measurement
    measureAll();

    // Set up interval for continuous monitoring
    const interval = setInterval(measureAll, mergedConfig.reportInterval);

    // Measure on page load
    if (document.readyState === 'complete') {
      measureAll();
    } else {
      window.addEventListener('load', measureAll);
    }

    // Measure on visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        measureAll();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', measureAll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [measureAll, mergedConfig.reportInterval]);

  return {
    metrics,
    isSupported,
    measureAll,
    getPerformanceScore,
    getPerformanceGrade,
    isPerformanceGood,
    updateMetric
  };
};

export default usePerformance;