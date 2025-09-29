import { useState, useEffect } from 'react';

export interface PerformanceMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

export interface PerformanceTrackerProps {
  onMetricsUpdate: (metrics: PerformanceMetrics) => void;
  interval?: number;
  enableCoreWebVitals?: boolean;
  enableAdvancedMetrics?: boolean;
}

export const usePerformanceTracker = (onMetricsUpdate?: (metrics: PerformanceMetrics) => void, options?: {
  interval?: number;
  enableCoreWebVitals?: boolean;
  enableAdvancedMetrics?: boolean;
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    fid: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          onMetricsUpdate?.({ ...metrics, cls: metric.value });
        });
        
        onINP((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          onMetricsUpdate?.({ ...metrics, fid: metric.value });
        });
        
        onFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          onMetricsUpdate?.({ ...metrics, fcp: metric.value });
        });
        
        onLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          onMetricsUpdate?.({ ...metrics, lcp: metric.value });
        });
        
        onTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          onMetricsUpdate?.({ ...metrics, ttfb: metric.value });
        });
      });
    }
  }, [metrics, onMetricsUpdate]);

  return metrics;
};

export default usePerformanceTracker;