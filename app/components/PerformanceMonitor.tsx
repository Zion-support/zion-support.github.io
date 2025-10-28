'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = memo(() => {
  const [, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
            }
          } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, []);

  useEffect(() => {
    const cleanup = monitorPerformance();
    return cleanup;
  }, [monitorPerformance]);

  return null;
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;