import { useState, useEffect } from 'react;
interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
<<<<<<< HEAD
  fmp?: number;
  tti?: number;
  tbt?: number;
}
}
interface PerformanceEntryExtended extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
  responseStart?: number;
  requestStart?: number;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
}
}
export function usePerformanceMetrics() {
}
  const [metrics, setMetrics] = useState<PerformanceMetrics></PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {';
      return;
}
    }
    setIsSupported(true);
<<<<<<< HEAD
    // First Contentful Paint;
    new PerformanceObserver(
  list => {
)
  )
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
}
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });
    // Largest Contentful Paint;
    new PerformanceObserver(
  list => {
)
  )
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
}
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    // First Input Delay;
    new PerformanceObserver(
  list => {
)
  )
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {)
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(
  prev => ({ 
            ...prev, ,
)
  fid: entry.processingStart! - entry.startTime;)
}
=======

    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics((prev: PerformanceMetrics) => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics((prev: PerformanceMetrics) => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if ('processingStart' in entry && entry.startTime) {
          setMetrics((prev: PerformanceMetrics) => ({ 
            ...prev, 
            fid: (entry as any).processingStart - entry.startTime 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });
    // Cumulative Layout Shift;
    let clsValue = 0;
<<<<<<< HEAD
    new PerformanceObserver(
  list => {
)
  )
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {)
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0;
}
=======
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!('hadRecentInput' in entry) || !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value || 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
        }
      });
      setMetrics((prev: PerformanceMetrics) => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });
<<<<<<< HEAD
    // Time to First Byte;
    new PerformanceObserver(
  list => {
)
  )
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {)
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {
          setMetrics(
  prev => ({ 
            ...prev, ,
)
  ttfb: entry.responseStart! - entry.requestStart!;)
}
=======

    // Time to First Byte
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if ('responseStart' in entry && 'requestStart' in entry) {
          setMetrics((prev: PerformanceMetrics) => ({ 
            ...prev, 
            ttfb: (entry as any).responseStart - (entry as any).requestStart 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
          }));
        }
      });
    }).observe({ entryTypes: ['navigation'] });
  }, []);
  return { metrics, isSupported };
}