import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = React.memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));
      
      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance metric ${metric.name}:`, metric.value);
      }
    };

    // Use requestIdleCallback for better performance
    const scheduleMetrics = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          onCLS(handleMetric);
          onINP(handleMetric);
          onFCP(handleMetric);
          onLCP(handleMetric);
          onTTFB(handleMetric);
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          onCLS(handleMetric);
          onINP(handleMetric);
          onFCP(handleMetric);
          onLCP(handleMetric);
          onTTFB(handleMetric);
        }, 0);
      }
    };

    scheduleMetrics();
  }, []);

  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs">
        <div>CLS: {metrics?.cls?.toFixed(3)}</div>
        <div>INP: {metrics?.inp?.toFixed(1)}ms</div>
        <div>FCP: {metrics?.fcp?.toFixed(1)}ms</div>
        <div>LCP: {metrics?.lcp?.toFixed(1)}ms</div>
        <div>TTFB: {metrics?.ttfb?.toFixed(1)}ms</div>
      </div>
    );
  }

  return null;
});

export default PerformanceMonitor;