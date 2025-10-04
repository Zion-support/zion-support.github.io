import React, { useEffect, useState } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));
    };

    onCLS(handleMetric);
    onFID(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs">
        <div>CLS: {metrics?.cls?.toFixed(3)}</div>
        <div>FID: {metrics?.fid?.toFixed(1)}ms</div>
        <div>FCP: {metrics?.fcp?.toFixed(1)}ms</div>
        <div>LCP: {metrics?.lcp?.toFixed(1)}ms</div>
        <div>TTFB: {metrics?.ttfb?.toFixed(1)}ms</div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;