import React, { useEffect, useCallback, useRef } from 'react';

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
  firstPaint: number;
  firstContentfulPaint: number;
}

const PerformanceMonitor: React.FC = () => {
  const hasReported = useRef(false);

  const sendToAnalytics = useCallback((metric: WebVitalMetric) => {
    // Prevent duplicate reporting
    if (hasReported.current) return;
    
    // Send to analytics service (replace with your analytics provider)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
    
    // Store in localStorage for debugging
    try {
      const existingMetrics = JSON.parse(localStorage.getItem('webVitals') || '[]');
      existingMetrics.push({
        ...metric,
        timestamp: Date.now(),
        url: window.location.href
      });
      localStorage.setItem('webVitals', JSON.stringify(existingMetrics.slice(-50))); // Keep last 50 metrics
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  const measurePageLoad = useCallback((): PerformanceData | null => {
    if (typeof window === 'undefined' || !window.performance) return null;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = window.performance.getEntriesByType('paint');
    
    if (!navigation) return null;

    const performanceData: PerformanceData = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: 0,
      firstContentfulPaint: 0
    };

    // Get paint metrics
    paintEntries.forEach(entry => {
      if (entry.name === 'first-paint') {
        performanceData.firstPaint = entry.startTime;
      } else if (entry.name === 'first-contentful-paint') {
        performanceData.firstContentfulPaint = entry.startTime;
      }
    });

    return performanceData;
  }, []);

  useEffect(() => {
    let webVitalsCleanup: (() => void) | undefined;

    // Load web-vitals dynamically for better performance
    const loadWebVitals = async () => {
      try {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
        
        // Set up web vitals monitoring
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);

        // Return cleanup function
        return () => {
          // Web vitals doesn't provide cleanup, but we can track if we've reported
          hasReported.current = true;
        };
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
        return undefined;
      }
    };

    // Load web vitals in production
    if (process.env.NODE_ENV === 'production') {
      loadWebVitals().then(cleanup => {
        webVitalsCleanup = cleanup;
      });
    }

    // Measure page load performance
    const handleLoad = () => {
      const perfData = measurePageLoad();
      if (perfData) {
        // Store performance data
        try {
          const existingData = JSON.parse(localStorage.getItem('performanceData') || '[]');
          existingData.push({
            ...perfData,
            timestamp: Date.now(),
            url: window.location.href
          });
          localStorage.setItem('performanceData', JSON.stringify(existingData.slice(-20))); // Keep last 20 entries
        } catch (e) {
          // Ignore localStorage errors
        }
      }
    };

    // Measure immediately if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      if (webVitalsCleanup) {
        webVitalsCleanup();
      }
    };
  }, [sendToAnalytics, measurePageLoad]);

  return null;
};

export default PerformanceMonitor;