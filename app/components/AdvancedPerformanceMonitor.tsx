import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface AdvancedMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  memory?: number;
  connection?: string;
  devicePixelRatio?: number;
}

interface PerformanceThresholds {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<AdvancedMetrics | null>(null);
  const [thresholds] = useState<PerformanceThresholds>({
    cls: 0.1,
    fid: 100,
    fcp: 1800,
    lcp: 2500,
    ttfb: 800
  });

  const getPerformanceInfo = useCallback(() => {
    const memory = (performance as any).memory;
    const connection = (navigator as any).connection;
    
    return {
      memory: memory ? Math.round(memory.usedJSHeapSize / 1048576) : undefined,
      connection: connection ? connection.effectiveType : undefined,
      devicePixelRatio: window.devicePixelRatio
    };
  }, []);

  const handleMetric = useCallback((metric: any) => {
    setMetrics(prev => ({
      ...prev,
      [metric.name]: metric.value,
      ...getPerformanceInfo()
    }));
  }, [getPerformanceInfo]);

  useEffect(() => {
    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);

    // Additional performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, [handleMetric]);

  const getStatusColor = (value: number, threshold: number) => {
    return value <= threshold ? 'text-green-600' : 'text-red-600';
  };

  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs font-mono max-w-xs">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={getStatusColor(metrics.cls, thresholds.cls)}>
              {metrics.cls?.toFixed(3)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={getStatusColor(metrics.fid, thresholds.fid)}>
              {metrics.fid?.toFixed(1)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getStatusColor(metrics.fcp, thresholds.fcp)}>
              {metrics.fcp?.toFixed(1)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={getStatusColor(metrics.lcp, thresholds.lcp)}>
              {metrics.lcp?.toFixed(1)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={getStatusColor(metrics.ttfb, thresholds.ttfb)}>
              {metrics.ttfb?.toFixed(1)}ms
            </span>
          </div>
          {metrics.memory && (
            <div className="flex justify-between">
              <span>Memory:</span>
              <span>{metrics.memory}MB</span>
            </div>
          )}
          {metrics.connection && (
            <div className="flex justify-between">
              <span>Connection:</span>
              <span>{metrics.connection}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>DPR:</span>
            <span>{metrics.devicePixelRatio}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AdvancedPerformanceMonitor;