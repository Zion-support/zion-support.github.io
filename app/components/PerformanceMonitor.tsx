import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Web Vitals'
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Web Vitals'
            });
          }
        }
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals'
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Cleanup observers
      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
};
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
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          }
        })
        observer.observe({ entryTypes: ['paint'] })
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  onMetric?: (metric: any) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onMetric }) => {
  useEffect(() => {
    const handleMetric = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metric);
      }
      
      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      }
      
      // Call custom handler if provided
      if (onMetric) {
        onMetric(metric);
      }

      // Measure Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      }

      // Measure First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
            }
          }
        })
        observer.observe({ entryTypes: ['first-input'] })
      }

      // Measure Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }))
        })
        observer.observe({ entryTypes: ['layout-shift'] })
      }
    // Measure Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Additional performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, [onMetric]);

  return null;
};

      // Measure Time to First Byte (TTFB)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }))
            }
          }
        })
        observer.observe({ entryTypes: ['navigation'] })
      }
    }

    // Start measuring after a short delay to ensure page is loaded
    const timeoutId = setTimeout(measurePerformance, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // Send metrics to analytics (if available)
  useEffect(() => {
    if (Object.keys(metrics).length > 0 && typeof window !== 'undefined') {
      // Send to Google Analytics or other analytics service
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb
          }
        })
      }
    }
  }, [metrics])

  // Don't render anything visible
  return null
}

export default PerformanceMonitor