import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsTrackerProps {
  children: React.ReactNode;
  onVitalsUpdate?: (metric: any) => void;
}

export default function WebVitalsTracker({ children, onVitalsUpdate }: WebVitalsTrackerProps) {
  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics
      if (onVitalsUpdate) {
        onVitalsUpdate(metric);
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }
    };

    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    const trackAdditionalMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            domInteractive: navigation.domInteractive - navigation.navigationStart,
            firstByte: navigation.responseStart - navigation.navigationStart,
          };

          // Send additional metrics
          Object.entries(metrics).forEach(([name, value]) => {
            if (window.gtag) {
              window.gtag('event', name, {
                event_category: 'Performance',
                value: Math.round(value),
                non_interaction: true,
              });
            }
          });
        }
      }
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackAdditionalMetrics();
    } else {
      window.addEventListener('load', trackAdditionalMetrics);
    }

    return () => {
      window.removeEventListener('load', trackAdditionalMetrics);
    };
  }, [onVitalsUpdate]);

  return <>{children}</>;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}