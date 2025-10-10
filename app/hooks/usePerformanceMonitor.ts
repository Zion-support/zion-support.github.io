import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {};

    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      metrics.lcp = lastEntry.startTime;
      
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(lastEntry.startTime),
          metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fid = (entry as any).processingStart - entry.startTime;
        metrics.fid = fid;
        
        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'web_vitals', {
            metric_name: 'FID',
            metric_value: Math.round(fid),
            metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.cls = clsValue;
      
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          metric_name: 'CLS',
          metric_value: Math.round(clsValue * 1000) / 1000,
          metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
        });
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Monitor First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime;
        
        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'web_vitals', {
            metric_name: 'FCP',
            metric_value: Math.round(fcpEntry.startTime),
            metric_rating: fcpEntry.startTime < 1800 ? 'good' : fcpEntry.startTime < 3000 ? 'needs_improvement' : 'poor'
          });
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Monitor Time to First Byte (TTFB)
    const ttfbObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
      if (navigationEntry) {
        const ttfb = (navigationEntry as any).responseStart - (navigationEntry as any).requestStart;
        metrics.ttfb = ttfb;
        
        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'web_vitals', {
            metric_name: 'TTFB',
            metric_value: Math.round(ttfb),
            metric_rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs_improvement' : 'poor'
          });
        }
      }
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });

    // Cleanup observers on unmount
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      ttfbObserver.disconnect();
    };
  }, []);
};