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
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Measure LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({ 
              ...prev, 
              fid: (entry as any).processingStart - entry.startTime 
            }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure FCP (First Contentful Paint)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure TTFB (Time to First Byte)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
          }));
        }
      }
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Send metrics to analytics
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        
        if (metrics.lcp !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(metrics.lcp)
          });
        }
        
        if (metrics.fid !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(metrics.fid)
          });
        }
        
        if (metrics.cls !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(metrics.cls * 1000) / 1000
          });
        }
      }
    };

    // Send metrics after a delay to ensure all measurements are complete
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePerformance);
    };
  }, [metrics]);

  // Log performance issues in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
      
      // Warn about poor performance
      if (metrics.lcp && metrics.lcp > 2500) {
        console.warn('⚠️ LCP is slow:', metrics.lcp + 'ms (should be < 2.5s)');
      }
      if (metrics.fid && metrics.fid > 100) {
        console.warn('⚠️ FID is slow:', metrics.fid + 'ms (should be < 100ms)');
      }
      if (metrics.cls && metrics.cls > 0.1) {
        console.warn('⚠️ CLS is poor:', metrics.cls + ' (should be < 0.1)');
      }
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;