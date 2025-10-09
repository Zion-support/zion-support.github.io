import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {

  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;

}

interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;

}

const EnhancedPerformanceMonitor: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,

    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Basic performance monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }

      });
    });

    try {
      observer.observe({ entryTypes: ['paint'] });
      return () => observer.disconnect();
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }, []);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return null;

};

export default EnhancedPerformanceMonitor;