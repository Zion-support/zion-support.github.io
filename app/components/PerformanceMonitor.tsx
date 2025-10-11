'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  customMetrics: Record<string, number>;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    customMetrics: {}
  });
  
  const analytics = useAnalytics();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          analytics?.track('web_vital', {
            metric: 'LCP',
            value: lastEntry.startTime,
            rating: lastEntry.startTime <= 2500 ? 'good' : lastEntry.startTime <= 4000 ? 'needs_improvement' : 'poor'
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          analytics?.track('web_vital', {
            metric: 'FID',
            value: fid,
            rating: fid <= 100 ? 'good' : fid <= 300 ? 'needs_improvement' : 'poor'
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
            analytics?.track('web_vital', {
              metric: 'CLS',
              value: clsValue,
              rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs_improvement' : 'poor'
            });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            analytics?.track('web_vital', {
              metric: 'FCP',
              value: entry.startTime,
              rating: entry.startTime <= 1800 ? 'good' : entry.startTime <= 3000 ? 'needs_improvement' : 'poor'
            });
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB - Time to First Byte
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            setMetrics(prev => ({ ...prev, ttfb }));
            analytics?.track('web_vital', {
              metric: 'TTFB',
              value: ttfb,
              rating: ttfb <= 800 ? 'good' : ttfb <= 1800 ? 'needs_improvement' : 'poor'
            });
          }
        });
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        ttfbObserver.disconnect();
      };
    };

    const cleanup = trackWebVitals();

    // Track custom metrics
    const trackCustomMetrics = () => {
      // Page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ 
          ...prev, 
          customMetrics: { ...prev.customMetrics, pageLoadTime: loadTime }
        }));
        analytics?.track('custom_metric', {
          metric: 'page_load_time',
          value: loadTime
        });
      });

      // DOM content loaded
      document.addEventListener('DOMContentLoaded', () => {
        const domContentLoaded = performance.now();
        setMetrics(prev => ({ 
          ...prev, 
          customMetrics: { ...prev.customMetrics, domContentLoaded }
        }));
        analytics?.track('custom_metric', {
          metric: 'dom_content_loaded',
          value: domContentLoaded
        });
      });
    };

    trackCustomMetrics();

    return cleanup;
  }, [analytics]);

  // Track resource loading performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
          
          // Track slow resources
          if (loadTime > 1000) {
            analytics?.track('slow_resource', {
              name: resourceEntry.name,
              type: resourceEntry.initiatorType,
              loadTime: loadTime
            });
          }
        }
      });
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
      return () => resourceObserver.disconnect();
    } catch (error) {
      console.warn('Resource observer not supported:', error);
    }
  }, [analytics]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;