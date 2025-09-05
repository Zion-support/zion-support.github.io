import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  };
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  enableReporting = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    // Core Web Vitals
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    const ttfb = navigation.responseStart - navigation.requestStart;
    
    // Memory usage (if available)
    const memory = (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize,
      total: (performance as any).memory.totalJSHeapSize,
      limit: (performance as any).memory.jsHeapSizeLimit
    } : undefined;

    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid: 0, // First Input Delay - would need user interaction to measure
      cls: 0, // Cumulative Layout Shift - would need observer
      ttfb,
      memory
    };

    setMetrics(newMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    if (enableReporting && process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', newMetrics);
    }
  }, [onMetricsUpdate, enableReporting]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    return () => {
      window.removeEventListener('load', measureWebVitals);
    };
  }, [measureWebVitals]);

  // Monitor for performance issues
  useEffect(() => {
    if (!metrics) return;

    const warnings: string[] = [];
    
    if (metrics.fcp > 1800) warnings.push('First Contentful Paint is slow (>1.8s)');
    if (metrics.lcp > 2500) warnings.push('Largest Contentful Paint is slow (>2.5s)');
    if (metrics.ttfb > 600) warnings.push('Time to First Byte is slow (>600ms)');
    
    if (metrics.memory) {
      const memoryUsage = (metrics.memory.used / metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings.push('High memory usage detected');
    }

    if (warnings.length > 0 && enableReporting) {
      console.warn('Performance Issues Detected:', warnings);
    }
  }, [metrics, enableReporting]);

  return null;
};

export default PerformanceOptimizer;