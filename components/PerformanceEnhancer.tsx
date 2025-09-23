"use client";

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
}

interface PerformanceEnhancerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  children,
  enableMonitoring = true,
  onMetricsUpdate,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null,
  });

  useEffect(() => {
    if (!enableMonitoring || typeof window === 'undefined') return;

    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {
        fcp: null,
        lcp: null,
        fid: null,
        cls: null,
        ttfb: null,
        loadTime: null,
        memoryUsage: null,
      };

      // Get navigation timing
      if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          newMetrics.loadTime = perfData.loadEventEnd - perfData.fetchStart;
          newMetrics.ttfb = perfData.responseStart - perfData.fetchStart;
        }
      }

      // Get memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    };

    // Collect metrics after page load
    window.addEventListener('load', collectMetrics);
    
    // Also collect after a delay to ensure all metrics are available
    const timeoutId = setTimeout(collectMetrics, 2000);

    return () => {
      window.removeEventListener('load', collectMetrics);
      clearTimeout(timeoutId);
    };
  }, [enableMonitoring, onMetricsUpdate]);

  return <>{children}</>;
};

export default PerformanceEnhancer;