import React, { useEffect, useCallback } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface PerformanceData {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
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
    
    // Store in localStorage for debugging in development
    if (process.env.NODE_ENV === 'development') {
      try {
        const existingData = JSON.parse(localStorage.getItem('webVitals') || '[]');
        existingData.push({
          ...metric,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('webVitals', JSON.stringify(existingData.slice(-50))); // Keep last 50 entries
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, []);

  const measurePageLoad = useCallback((): PerformanceData | null => {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) {
      return null;
    }

    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

    const performanceData: PerformanceData = {
      loadTime,
      domContentLoaded
    };

    // Store performance data for debugging in development
    if (process.env.NODE_ENV === 'development') {
      try {
        const existingData = JSON.parse(localStorage.getItem('performanceData') || '[]');
        existingData.push({
          ...performanceData,
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
        localStorage.setItem('performanceData', JSON.stringify(existingData.slice(-20))); // Keep last 20 entries
      } catch (e) {
        // Ignore localStorage errors
      }
    }

    return performanceData;
  }, []);

  useEffect(() => {
    // Only load web-vitals in production for better performance
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch(() => {
        // Silently fail to avoid console errors in production
      });
    }

    // Measure page load performance
    const handleLoad = () => {
      measurePageLoad();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [sendToAnalytics, measurePageLoad]);

  return null;
};

export default PerformanceMonitor;