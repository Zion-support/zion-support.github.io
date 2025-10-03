import { useEffect, useState, useCallback } from 'react';
import { PerformanceMetrics } from '../types';

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface UsePerformanceOptions {
  enableMonitoring?: boolean;
  reportInterval?: number;
  onMetricUpdate?: (metrics: PerformanceMetrics) => void;
}

    });
  }, []);

  const isGoodPerformance = useCallback(() => {
    const { fcp, lcp, fid, cls } = metrics;
    
    return {
      fcp: fcp !== null && fcp < 1800, // Good FCP is under 1.8s
      lcp: lcp !== null && lcp < 2500, // Good LCP is under 2.5s
      fid: fid !== null && fid < 100,  // Good FID is under 100ms
      cls: cls !== null && cls < 0.1   // Good CLS is under 0.1
    };
  }, [metrics]);

  useEffect(() => {
    if (!enableMonitoring) return;

    const cleanup = measureWebVitals();
    return cleanup;
  }, [measureWebVitals, enableMonitoring]);

  // Periodic reporting
  useEffect(() => {
    if (!enableMonitoring || !onMetricUpdate) return;

    const interval = setInterval(() => {
      onMetricUpdate(metrics);
    }, reportInterval);

    return () => clearInterval(interval);
  }, [metrics, onMetricUpdate, reportInterval, enableMonitoring]);

  const logMetrics = useCallback(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
      console.log('Good Performance:', isGoodPerformance());
    }
  }, [metrics, isGoodPerformance]);

  const performanceScore = useCallback(() => {
    const { fcp, lcp, fid, cls } = metrics;
    let score = 0;
    let total = 0;
    
    if (fcp !== null) {
      score += fcp < 1800 ? 100 : Math.max(0, 100 - (fcp - 1800) / 100);
      total++;
    }
    if (lcp !== null) {
      score += lcp < 2500 ? 100 : Math.max(0, 100 - (lcp - 2500) / 100);
      total++;
    }
    if (fid !== null) {
      score += fid < 100 ? 100 : Math.max(0, 100 - fid);
      total++;
    }
    if (cls !== null) {
      score += cls < 0.1 ? 100 : Math.max(0, 100 - cls * 1000);
      total++;
    }
    
    return total > 0 ? Math.round(score / total) : 0;
  }, [metrics]);

  return {
    metrics,
    isSupported,
    getMemoryUsage,
    getResourceTiming,
    getNavigationTiming,
    clearMetrics,
    isGoodPerformance: isGoodPerformance(),
    logMetrics,
    performanceScore: performanceScore()
  };
};

export default usePerformance;