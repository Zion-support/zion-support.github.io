'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      // This would be implemented with the web-vitals library
      // For now, we'll just show the monitor in development
      setIsVisible(true);
    }

    // Monitor basic performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ lcp: entry.startTime });
        } else if (entry.entryType === 'first-input') {
          updateMetrics({ fid: (entry as any).processingStart - entry.startTime });
        } else if (entry.entryType === 'layout-shift') {
          updateMetrics({ cls: (entry as any).value });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="flex justify-between">
          <span>{key.toUpperCase()}:</span>
          <span className={value && value > 100 ? 'text-red-400' : 'text-green-400'}>
            {value ? `${value.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMonitor;