import { useState, useEffect } from 'react';

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    setIsSupported(true);
    
    // First Contentful Paint
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });
    
    // Largest Contentful Paint
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart! - entry.startTime
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });
    
    // Time to First Byte
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: entry.responseStart! - entry.requestStart!
          }));
        }
      });
    }).observe({ entryTypes: ['navigation'] });
  }, []);
  
  return { metrics, isSupported };
}

interface PerformanceEntryExtended extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
  responseStart?: number;
  requestStart?: number;
}