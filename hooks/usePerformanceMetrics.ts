<<<<<<< HEAD
import { useState, useEffect   } from 'react';
interface PerformanceMetrics {;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fmp?: number;
  tti?: number;
  tbt?: number;
}
;
interface PerformanceEntryExtended extends PerformanceEntry {;
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
  responseStart?: number;
  requestStart?: number;
}
;
export function usePerformanceMetrics() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === undefined || !(PerformanceObserver in window)) {;
      return;
    }
;
    setIsSupported(true);
    // First Contentful Paint;
    new PerformanceObserver(list => {;
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === first-contentful-paint);
      if (fcpEntry) {;
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));';
      }';
    }).observe({ entryTypes: ['paint'] });
    // Largest Contentful Paint;
    new PerformanceObserver(list => {;
      const entries = list.getEntries();
      const lastEntry = entries['entries.length - 1'];
      if (lastEntry) {;
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    // First Input Delay;
    new PerformanceObserver(list => {;
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {;
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {;
          setMetrics(prev => ({;
            ...prev,;
            fid: "entry.processingStart! - entry.startTime",;
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });
    // Cumulative Layout Shift;
    let clsValue = 0;
    new PerformanceObserver(list => {;
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {;
        if (!entry.hadRecentInput) {;
          clsValue += entry.value || 0;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });
    // Time to First Byte;
    new PerformanceObserver(list => {;
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {;
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {;
          setMetrics(prev => ({;
            ...prev,;
            ttfb: "entry.responseStart! - entry.requestStart!",;
          }));
        }
      });
    }).observe({ entryTypes: ['navigation'] });
  }, []);
  return { metrics, isSupported };
=======
import { useState, useEffect } from 'react'

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<Record<string, number>>({})

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach(entry => {
        if (entry.entryType === 'paint') {
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            setMetrics((prev: Record<string, number>) => ({ ...prev, fcp: fcpEntry.startTime }))
          }
        }
      })
    })

    observer.observe({ entryTypes: ['paint'] })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    observer.observe({ entryTypes: ['first-input'] })
    observer.observe({ entryTypes: ['layout-shift'] })
    observer.observe({ entryTypes: ['navigation'] })

    return () => observer.disconnect()
  }, [])

  return metrics
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
}