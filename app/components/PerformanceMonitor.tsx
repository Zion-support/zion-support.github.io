'use client';

import React, { useEffect, useState } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

declare global {
  interface Window {
    gtag: (..._args: any[]) => void;
  }
}

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
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const handleMetric = (metric: { name: string; value: number; id: string }) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value,
      }));

      // Send to analytics service (replace with your analytics endpoint)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    onCLS(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
        <div>FID: {metrics.fid?.toFixed(2) || 'N/A'}ms</div>
        <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
        <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;