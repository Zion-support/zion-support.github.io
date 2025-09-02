import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));

      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(1)}ms` : 'N/A'}</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(1)}ms` : 'N/A'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(1)}ms` : 'N/A'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(1)}ms` : 'N/A'}</div>
    </div>
  );
};

export default PerformanceMonitor;