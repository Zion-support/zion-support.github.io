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
      
      // Store metrics for debugging in development
      if (process.env.NODE_ENV === 'development') {
        // Store in localStorage for debugging without console logs
        try {
          const metrics = JSON.parse(localStorage.getItem('webVitals') || '[]');
          metrics.push({ ...metric, timestamp: Date.now() });
          localStorage.setItem('webVitals', JSON.stringify(metrics.slice(-50))); // Keep last 50 metrics
        } catch (e) {
          // Ignore localStorage errors
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
        // Silently handle web-vitals loading errors
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      });
    }

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          // Store performance metrics for analysis
          if (process.env.NODE_ENV === 'development') {
            try {
              const perfData = JSON.parse(localStorage.getItem('performanceMetrics') || '[]');
              perfData.push({
                loadTime,
                domContentLoaded,
                timestamp: Date.now()
              });
              localStorage.setItem('performanceMetrics', JSON.stringify(perfData.slice(-20))); // Keep last 20 entries
            } catch (e) {
              // Ignore localStorage errors
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