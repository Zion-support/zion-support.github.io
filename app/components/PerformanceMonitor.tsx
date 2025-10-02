import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => {
        const updated = { ...prev, ...newMetrics };
        onMetricsUpdate?.(updated);
        return updated;
      });
    };

    // Measure Core Web Vitals
    getCLS((metric) => {
      updateMetrics({ cls: metric.value });
    });

    getFID((metric) => {
      updateMetrics({ fid: metric.value });
    });

    getFCP((metric) => {
      updateMetrics({ fcp: metric.value });
    });

    getLCP((metric) => {
      updateMetrics({ lcp: metric.value });
    });

    getTTFB((metric) => {
      updateMetrics({ ttfb: metric.value });
    });
  }, [onMetricsUpdate]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;