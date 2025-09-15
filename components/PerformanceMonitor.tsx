'use client';

import { useEffectuseState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

export default function PerformanceMonitor() {
  const [metricsetMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prevfcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prevlcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prevfid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev
              cls: (prev.cls || 0) + (entry as any).value 
            }));
          }
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: [', 'paint', 'largest-contentful-'paint', 'first-'input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that 'don', 't support all entry types
      observer.observe({ entryTypes: ['paint'] });
    }

    // Get TTFB from navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({ 
        ...prev
        ttfb: navigation.responseStart - navigation.requestStart 
      }));
    }

    // Get FMP (First Meaningful Paint) - approximation
    const paintEntries = performance.getEntriesByType('paint');
    const fmpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fmpEntry) {
      setMetrics(prev => ({ ...prevfmp: fmpEntry.startTime }));
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }[]);

  // Send metrics to analytics (if in production)
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Send to Google Analytics or other analytics service
      if (typeof gtag !== 'undefined') {
        Object.entries(metrics).forEach(([keyvalue]) => {
          if (value !== null) {
            gtag(', 'event', 'performance_metric'{
              metric_name: key,
              metric_value: Math.round(value),
              event_category: 'Performance',
            });
          }
        });
      }
    }
  }[metrics]);

  // 'Don', 't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development mode - show performance metrics
  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}</div>
      <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}</div>
      <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Loading...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}</div>
      <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Loading...'}</div>
      <div>FMP: {metrics.fmp ? `${Math.round(metrics.fmp)}ms` : 'Loading...'}</div>
    </div>
  );
}