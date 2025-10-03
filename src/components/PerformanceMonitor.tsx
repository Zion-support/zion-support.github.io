import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Web Vitals monitoring
      import('web-vitals').then(({ onFCP, onLCP, onFID, onCLS, onTTFB }) => {
        const performanceData: Partial<PerformanceMetrics> = {};

        onFCP((metric) => {
          performanceData.fcp = metric.value;
        });

        onLCP((metric) => {
          performanceData.lcp = metric.value;
        });

        onFID((metric) => {
          performanceData.fid = metric.value;
        });

        onCLS((metric) => {
          performanceData.cls = metric.value;
        });

        onTTFB((metric) => {
          performanceData.ttfb = metric.value;
          setMetrics(performanceData as PerformanceMetrics);
        });
      });
    }
  }, []);

  if (!metrics || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono">
      <div className="mb-2 font-bold">Performance Metrics:</div>
      <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
      <div>FID: {metrics.fid?.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls?.toFixed(3)}</div>
      <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
    </div>
  );
};

export default PerformanceMonitor;
