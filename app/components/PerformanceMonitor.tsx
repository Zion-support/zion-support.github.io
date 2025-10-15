import React, { useEffect, useState } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

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
      
      // Also log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }
    };

    // Enhanced performance monitoring
    const collectPerformanceMetrics = (): PerformanceMetrics => {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const domContentLoaded = navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0;
      
      return {
        loadTime,
        domContentLoaded,
        firstContentfulPaint: fcpEntry ? fcpEntry.startTime : 0,
        largestContentfulPaint: 0, // Will be updated by web-vitals
        cumulativeLayoutShift: 0, // Will be updated by web-vitals
        firstInputDelay: 0, // Will be updated by web-vitals
        timeToInteractive: 0, // Will be updated by web-vitals
      };
    };

    // Load web-vitals for enhanced monitoring
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS((metric) => {
          sendToAnalytics(metric);
          setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: metric.value } : null);
        });
        onFCP((metric) => {
          sendToAnalytics(metric);
          setMetrics(prev => prev ? { ...prev, firstContentfulPaint: metric.value } : null);
        });
        onLCP((metric) => {
          sendToAnalytics(metric);
          setMetrics(prev => prev ? { ...prev, largestContentfulPaint: metric.value } : null);
        });
        onTTFB(sendToAnalytics);
        onINP((metric) => {
          sendToAnalytics(metric);
          setMetrics(prev => prev ? { ...prev, firstInputDelay: metric.value } : null);
        });
      }).catch((error) => {
        console.warn('Failed to load web-vitals:', error);
      });
    }

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const performanceMetrics = collectPerformanceMetrics();
        setMetrics(performanceMetrics);
        
        if (process.env.NODE_ENV === 'development') {
          console.log('[Performance Metrics]', performanceMetrics);
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