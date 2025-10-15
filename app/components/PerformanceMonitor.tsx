import React, { useEffect } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
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
      
      // Send to custom analytics endpoint
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            delta: metric.delta,
            id: metric.id,
            navigationType: metric.navigationType,
            timestamp: Date.now()
          })
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        });
      }
      
      // Also log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
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
        console.warn('Failed to load web-vitals:', error);
      });
    }

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] Page Load Time: ${loadTime}ms`);
            console.log(`[Performance] DOM Content Loaded: ${domContentLoaded}ms`);
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