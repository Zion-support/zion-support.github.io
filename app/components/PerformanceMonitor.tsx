import React, { useEffect, memo } from 'react';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = memo(() => {
  const { metrics, isOptimized, recommendations } = usePerformanceOptimization();

  useEffect(() => {
    // Monitor Core Web Vitals with proper analytics
    const sendToAnalytics = (metric: WebVitalMetric) => {
      // Send to analytics service (replace with your analytics provider)
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as { gtag: Function }).gtag('event', metric.name, {
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

    // Only load web-vitals in production or when needed
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      });
    }

    // Log performance recommendations in development
    if (process.env.NODE_ENV === 'development' && recommendations.length > 0) {
      console.log('[Performance] Recommendations:', recommendations);
    }
  }, [recommendations]);

  // Don't render anything visible
  return null;
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;