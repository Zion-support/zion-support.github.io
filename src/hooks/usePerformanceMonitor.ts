import { useEffect, useState } from 'react';
import { PerformanceMetrics } from '../types/comprehensive';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ 
            ...prev, 
            lcp: entry.startTime,
            fcp: prev?.fcp || 0,
            fid: prev?.fid || 0,
            cls: prev?.cls || 0,
            ttfb: prev?.ttfb || 0,
            memory: prev?.memory || { used: 0, total: 0, limit: 0 }
          }));
        }
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ 
            ...prev, 
            fid: (entry as any).processingStart - entry.startTime,
            fcp: prev?.fcp || 0,
            lcp: prev?.lcp || 0,
            cls: prev?.cls || 0,
            ttfb: prev?.ttfb || 0,
            memory: prev?.memory || { used: 0, total: 0, limit: 0 }
          }));
        }
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ 
            ...prev, 
            cls: (prev?.cls || 0) + ((entry as any).value || 0),
            fcp: prev?.fcp || 0,
            lcp: prev?.lcp || 0,
            fid: prev?.fid || 0,
            ttfb: prev?.ttfb || 0,
            memory: prev?.memory || { used: 0, total: 0, limit: 0 }
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          fcp: fcpEntry.startTime,
          lcp: prev?.lcp || 0,
          fid: prev?.fid || 0,
          cls: prev?.cls || 0,
          ttfb: prev?.ttfb || 0,
          memory: prev?.memory || { used: 0, total: 0, limit: 0 }
        }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    setIsMonitoring(true);

    return () => {
      observer.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  return { metrics, isMonitoring };
};
