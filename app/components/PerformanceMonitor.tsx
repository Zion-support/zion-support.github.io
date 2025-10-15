import React, { useEffect, useCallback } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  const sendToAnalytics = useCallback((metric: WebVitalMetric) => {
    // Send to analytics service (replace with your analytics provider)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
    
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      // Use a more structured logging approach
      const logData = {
        type: 'Web Vitals',
        metric: metric.name,
        value: metric.value,
        timestamp: new Date().toISOString(),
      };
      // Only log in development and if console is available
      if (typeof console !== 'undefined' && console.log) {
        console.log('[Performance]', logData);
      }
    }
  }, []);

  const measurePageLoad = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        if (process.env.NODE_ENV === 'development') {
          // Use structured logging
          const logData = {
            type: 'Performance',
            pageLoadTime: loadTime,
            domContentLoaded: domContentLoaded,
            timestamp: new Date().toISOString(),
          };
          if (typeof console !== 'undefined' && console.log) {
            console.log('[Performance]', logData);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const imagePreload = document.createElement('link');
      imagePreload.rel = 'preload';
      imagePreload.href = '/images/hero-bg.jpg';
      imagePreload.as = 'image';
      document.head.appendChild(imagePreload);
    };

    // Only load web-vitals in production or when needed
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch((error) => {
        console.warn('Failed to load web-vitals:', error);
      });
    }

    // Preload critical resources
    preloadCriticalResources();

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log resources taking more than 1 second
            const logData = {
              type: 'Performance Warning',
              resource: resource.name,
              duration: resource.duration,
              timestamp: new Date().toISOString(),
            };
            if (typeof console !== 'undefined' && console.warn) {
              console.warn('[Performance]', logData);
            }
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      window.removeEventListener('load', measurePageLoad);
      observer.disconnect();
    };
  }, [sendToAnalytics, measurePageLoad]);

  return null;
};

export default PerformanceMonitor;