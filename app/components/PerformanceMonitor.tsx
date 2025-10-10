'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Send to custom analytics endpoint
      if (typeof window !== 'undefined' && 'navigator' in window) {
        fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            id: metric.id,
            url: window.location.href,
            timestamp: Date.now(),
          }),
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        });
      }
    };

    // Measure Core Web Vitals using Performance Observer API
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // Measure First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              sendToAnalytics({
                name: 'FCP',
                value: entry.startTime,
                id: 'fcp'
              });
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          sendToAnalytics({
            name: 'LCP',
            value: lastEntry.startTime,
            id: 'lcp'
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          sendToAnalytics({
            name: 'CLS',
            value: clsValue,
            id: 'cls'
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          clsObserver.disconnect();
        };
      }
      return () => {};
    };

    const cleanup = measureWebVitals();

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          sendToAnalytics({
            name: 'PageLoad',
            value: loadTime,
            id: 'page-load',
          });
          
          sendToAnalytics({
            name: 'DOMContentLoaded',
            value: domContentLoaded,
            id: 'dom-content-loaded',
          });
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading performance
    const measureResourcePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const resources = performance.getEntriesByType('resource');
        
        resources.forEach((resource: any) => {
          if (resource.duration > 1000) { // Log resources taking more than 1 second
            console.warn('Slow resource detected:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize,
            });
          }
        });
      }
    };

    // Monitor after a delay to allow resources to load
    const timeoutId = setTimeout(measureResourcePerformance, 3000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;