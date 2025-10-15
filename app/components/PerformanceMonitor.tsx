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
      
      // Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        // Use a more structured logging approach
        const logData = {
          type: 'Web Vitals',
          metric: metric.name,
          value: metric.value,
          timestamp: new Date().toISOString()
        };
        // Only log in development
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            const logs = JSON.parse(localStorage.getItem('performanceLogs') || '[]');
            logs.push(logData);
            localStorage.setItem('performanceLogs', JSON.stringify(logs.slice(-50))); // Keep last 50 logs
          } catch (e) {
            // Ignore localStorage errors
          }
        }
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
            // Store performance data for debugging
            const perfData = {
              type: 'Page Performance',
              loadTime: loadTime,
              domContentLoaded: domContentLoaded,
              timestamp: new Date().toISOString()
            };
            if (typeof window !== 'undefined' && window.localStorage) {
              try {
                const logs = JSON.parse(localStorage.getItem('performanceLogs') || '[]');
                logs.push(perfData);
                localStorage.setItem('performanceLogs', JSON.stringify(logs.slice(-50)));
              } catch (e) {
                // Ignore localStorage errors
              }
            }
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