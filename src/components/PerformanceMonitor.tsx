import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceMonitor() {
  const sendMetric = useCallback((name: string, value: number, label?: string) => {
    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: label || name,
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          non_interaction: true,
        });
      }
    }
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}:`, value, label);
    }
  }, []);

  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            sendMetric('FCP', entry.startTime, 'First Contentful Paint');
            observer.disconnect();
            break;
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, [sendMetric]);

  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            sendMetric('LCP', entry.startTime, 'Largest Contentful Paint');
            observer.disconnect();
            break;
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [sendMetric]);

  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          sendMetric('FID', entry.processingStart - entry.startTime, 'First Input Delay');
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, [sendMetric]);

  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      
      // Report CLS on page unload
      window.addEventListener('beforeunload', () => {
        sendMetric('CLS', clsValue, 'Cumulative Layout Shift');
      });
    }
  }, [sendMetric]);

  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navigationEntry = entry as PerformanceNavigationTiming;
            const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            sendMetric('TTFB', ttfb, 'Time to First Byte');
            observer.disconnect();
            break;
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [sendMetric]);

  const measureUserInteractions = useCallback(() => {
    let interactionCount = 0;
    let lastInteractionTime = Date.now();

    const trackInteraction = () => {
      interactionCount++;
      lastInteractionTime = Date.now();
      
      // Track interaction patterns
      if (interactionCount % 10 === 0) {
        sendMetric('User Interactions', interactionCount, 'Total User Interactions');
      }
    };

    // Track various user interactions
    const events = ['click', 'scroll', 'keydown', 'touchstart', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, trackInteraction, { passive: true });
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        const sessionDuration = Date.now() - lastInteractionTime;
        sendMetric('Session Duration', sessionDuration, 'User Session Duration');
      }
    });
  }, [sendMetric]);

  useEffect(() => {
    // Wait for page to load before measuring
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        measureFCP();
        measureLCP();
        measureFID();
        measureCLS();
        measureTTFB();
        measureUserInteractions();
      });
    } else {
      measureFCP();
      measureLCP();
      measureFID();
      measureCLS();
      measureTTFB();
      measureUserInteractions();
    }

    // Cleanup
    return () => {
      // Cleanup event listeners if needed
    };
  }, [measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureUserInteractions]);

  // This component doesn't render anything
  return null;
}
