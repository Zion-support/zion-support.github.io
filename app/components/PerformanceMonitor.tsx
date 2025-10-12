<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'
=======
'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';
>>>>>>> cursor/analyze-improve-and-deploy-application-9d9d

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
  
  const analytics = useAnalytics();

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          analytics.trackEvent('performance_metric', { 
            metric: 'LCP', 
            value: entry.startTime 
          });
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          analytics.trackEvent('performance_metric', { 
            metric: 'FID', 
            value: fidEntry.processingStart - fidEntry.startTime 
          });
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev.cls || 0) + clsEntry.value 
            }));
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Monitor FCP
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          analytics.trackEvent('performance_metric', { 
            metric: 'FCP', 
            value: entry.startTime 
          });
        }
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('Paint Timing not supported');
    }

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      analytics.trackEvent('performance_metric', { 
        metric: 'TTFB', 
        value: ttfb 
      });
    }

<<<<<<< HEAD
=======
'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          } else if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
            }
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        observer.observe({ entryTypes: ['navigation'] })
      }
    }

    // Start measuring after a short delay to ensure page is loaded
    const timeout = setTimeout(() => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart
          }))
        }
      }
    }, 1000)

    return () => {
      clearTimeout(timeout)
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        observer.disconnect()
      }
    }
  }, [])

  // Log metrics for debugging (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
  return null
}
=======
    // Track page load
    const handleLoad = () => {
      analytics.trackPageView(window.location.pathname);
    };
>>>>>>> cursor/analyze-improve-and-deploy-application-9d9d

    window.addEventListener('load', handleLoad);

    return () => {
      observer.disconnect();
      fcpObserver.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, [analytics]);

  // Log performance issues
  useEffect(() => {
    if (metrics.lcp && metrics.lcp > 2500) {
      console.warn('Poor LCP:', metrics.lcp);
    }
    if (metrics.fid && metrics.fid > 100) {
      console.warn('Poor FID:', metrics.fid);
    }
    if (metrics.cls && metrics.cls > 0.1) {
      console.warn('Poor CLS:', metrics.cls);
    }
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;