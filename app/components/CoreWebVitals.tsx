import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface CoreWebVitalsProps {
  children: React.ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const sendToAnalytics = (metric: any) => {
      // Send to your analytics service
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
      
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Track all Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            
            if (process.env.NODE_ENV === 'development') {
              console.log('Page Load Time:', loadTime);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
    }

    // Track resource loading performance
    const trackResourceTiming = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter((resource: any) => resource.duration > 1000);
        
        if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
          console.warn('Slow resources detected:', slowResources);
        }
      }
    };

    // Check for slow resources after page load
    setTimeout(trackResourceTiming, 2000);

  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;
