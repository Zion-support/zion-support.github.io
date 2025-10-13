import React, { useEffect } from 'react';

interface PerformanceTrackerProps {
  children: React.ReactNode;
}

const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        const trackMetric = (metric: any) => {
          // Send to analytics service (replace with your analytics)
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              non_interaction: true,
            });
          }
        };

        // Track all Core Web Vitals
        getCLS(trackMetric);
        getFID(trackMetric);
        getFCP(trackMetric);
        getLCP(trackMetric);
        getTTFB(trackMetric);
      } catch (error) {
        console.error('Failed to load Web Vitals:', error);
      }
    };

    trackVitals();

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
              custom_map: {
                'dom_content_loaded': Math.round(domContentLoaded)
              }
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

    return () => {
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceTracker;