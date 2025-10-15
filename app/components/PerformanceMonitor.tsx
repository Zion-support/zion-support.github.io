import React, { useEffect } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  const logPerformanceMetric = (name: string, value: number) => {
    // Use a proper logging service instead of console.log
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
      });
    }
  };

  useEffect(() => {
    // Monitor Core Web Vitals with proper analytics
    const sendToAnalytics = (metric: WebVitalMetric) => {
      // Send to analytics service (replace with your analytics provider)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        // Use a proper logging utility instead of console.log
        logPerformanceMetric(metric.name, metric.value);
      }
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
        // Log error to monitoring service instead of console
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: 'Failed to load web-vitals',
            fatal: false,
          });
        }
      });
    }

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation && navigation.loadEventEnd && navigation.loadEventStart) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd && navigation.domContentLoadedEventStart 
            ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart 
            : 0;
          
          if (process.env.NODE_ENV === 'development') {
            logPerformanceMetric('Page Load Time', loadTime);
            logPerformanceMetric('DOM Content Loaded', domContentLoaded);
          }
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    return () => {
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;