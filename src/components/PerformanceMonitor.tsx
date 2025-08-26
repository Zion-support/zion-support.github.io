import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Send metrics to analytics when they're available
  useEffect(() => {
    const allMetricsAvailable = Object.values(metrics).every(metric => metric !== null);
    
    if (allMetricsAvailable) {
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'core_web_vitals', {
          event_category: 'Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_parameter_1: Math.round(metrics.fcp || 0),
          custom_parameter_2: Math.round(metrics.fid || 0),
          custom_parameter_3: Math.round((metrics.cls || 0) * 1000),
          custom_parameter_4: Math.round(metrics.ttfb || 0),
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Core Web Vitals:', {
          FCP: `${Math.round(metrics.fcp || 0)}ms`,
          LCP: `${Math.round(metrics.lcp || 0)}ms`,
          FID: `${Math.round(metrics.fid || 0)}ms`,
          CLS: (metrics.cls || 0).toFixed(3),
          TTFB: `${Math.round(metrics.ttfb || 0)}ms`,
        });
      }
    }
  }, [metrics]);

  // Performance score calculation
  const getPerformanceScore = () => {
    let score = 100;
    
    // LCP scoring (0-2500ms = good, 2500-4000ms = needs improvement, >4000ms = poor)
    if (metrics.lcp && metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp && metrics.lcp > 2500) score -= 15;
    
    // FID scoring (0-100ms = good, 100-300ms = needs improvement, >300ms = poor)
    if (metrics.fid && metrics.fid > 300) score -= 20;
    else if (metrics.fid && metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-0.1 = good, 0.1-0.25 = needs improvement, >0.25 = poor)
    if (metrics.cls && metrics.cls > 0.25) score -= 20;
    else if (metrics.cls && metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();

  // Don't render anything in production, just monitor
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>Score: <span className={performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}>{performanceScore}</span></div>
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}</div>
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : '...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '...'}</div>
      </div>
    </div>
  );
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
