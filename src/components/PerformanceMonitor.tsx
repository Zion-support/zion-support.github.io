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
    // Measure Core Web Vitals
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    getFID((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
    });

    getFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    getLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    getTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>FID: {metrics.fid?.toFixed(2) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
    </div>
  );
};

export default PerformanceMonitor;