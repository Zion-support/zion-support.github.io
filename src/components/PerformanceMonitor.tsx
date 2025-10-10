import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackVital = (metric: any) => {
      // Send to analytics service (replace with your analytics)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(metric);
      }
    };

    onCLS(trackVital);
    onINP(trackVital);
    onFCP(trackVital);
    onLCP(trackVital);
    onTTFB(trackVital);

    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          if (window.gtag) {
            window.gtag('event', 'page_load_time', {
              event_category: 'Performance',
              value: Math.round(loadTime),
            });
            
            window.gtag('event', 'dom_content_loaded', {
              event_category: 'Performance',
              value: Math.round(domContentLoaded),
            });
          }
        }
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const resources = window.performance.getEntriesByType('resource');
        const slowResources = resources.filter((resource: any) => resource.duration > 1000);
        
        if (slowResources.length > 0 && window.gtag) {
          window.gtag('event', 'slow_resources', {
            event_category: 'Performance',
            value: slowResources.length,
          });
        }
      }
    };

    // Track resource performance after a delay
    setTimeout(trackResourcePerformance, 5000);

    return () => {
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;