import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
    return undefined;
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key}:</span>
            <span className="text-green-400">{value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
