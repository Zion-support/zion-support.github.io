'use client';

import React, { useEffect, useState, memo } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = memo(({ 
  className = '', 
  children,
  enableReporting = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !enableReporting) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    // Observe Core Web Vitals
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // TTFB measurement
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

  if (!enableReporting) {
    return <>{children}</>;
  }

  return (
    <div className={`performance-monitor ${className}`}>
      {children}
      <div className="performance-metrics" style={{ display: 'none' }}>
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} data-metric={key} data-value={value || 0}>
            {key}: {value?.toFixed(2) || 'N/A'}
          </div>
        ))}
      </div>
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;