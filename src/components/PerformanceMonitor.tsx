import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Send to custom analytics
      if (typeof window !== 'undefined' && 'dataLayer' in window) {
        (window as any).dataLayer.push({
          event: 'web_vitals',
          metric_name: metric.name,
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_id: metric.id,
        });
      }
    };

    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Monitor page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          // Send performance metrics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'page_load_time', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(loadTime),
            });
            
            (window as any).gtag('event', 'dom_content_loaded', {
              event_category: 'Performance',
              event_label: 'DOM Content Loaded',
              value: Math.round(domContentLoaded),
            });
          }
        }
      });
    }

    // Monitor resource loading
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Log slow resources
              console.warn('Slow resource detected:', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize,
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;