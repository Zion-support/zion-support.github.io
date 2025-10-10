'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            break;
          case 'layout-shift':
            setMetrics(prev => ({ ...prev, cls: entry.value }));
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'navigation':
            setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            break;
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint', 'navigation'] });
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize
            });
          }
        }
      }
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (e) {
      // Resource timing not supported
    }

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }
    };

    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);

    // Cleanup
    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
      clearInterval(memoryInterval);
    };
  }, []);

  // Log metrics when they change
  useEffect(() => {
    if (metrics.lcp !== null || metrics.fid !== null || metrics.cls !== null) {
      console.log('Core Web Vitals:', metrics);
      
      // Send to analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        if (metrics.lcp !== null) {
          gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(metrics.lcp),
            event_category: 'Web Vitals'
          });
        }
        
        if (metrics.fid !== null) {
          gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(metrics.fid),
            event_category: 'Web Vitals'
          });
        }
        
        if (metrics.cls !== null) {
          gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(metrics.cls * 1000),
            event_category: 'Web Vitals'
          });
        }
      }
    }
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;