'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value,
      }));
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
      <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
      <div>FID: {metrics.fid?.toFixed(2) || 'N/A'}ms</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
    </div>
  );
};

export default PerformanceMonitor;
