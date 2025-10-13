import React, { useState, useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));
    };

    getFCP(handleMetric);
    getLCP(handleMetric);
    getFID(handleMetric);
    getCLS(handleMetric);
    getTTFB(handleMetric);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
      </div>
      
      <div className="space-y-2 text-xs mt-3">
        <div className="flex justify-between">
          <span>Good:</span>
          <span className="text-green-400">Green</span>
        </div>
        <div className="flex justify-between">
          <span>Needs Improvement:</span>
          <span className="text-yellow-400">Yellow</span>
        </div>
        <div className="flex justify-between">
          <span>Poor:</span>
          <span className="text-red-400">Red</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;