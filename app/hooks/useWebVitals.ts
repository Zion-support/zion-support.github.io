import { useEffect, useCallback } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface UseWebVitalsOptions {
  enabled?: boolean;
  debug?: boolean;
  onMetric?: (metric: WebVitalMetric) => void;
}

export const useWebVitals = (options: UseWebVitalsOptions = {}) => {
  const { enabled = true, debug = false, onMetric } = options;

  const sendToAnalytics = useCallback((metric: WebVitalMetric) => {
    // Send to Google Analytics 4
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
          ...metric,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch((error) => {
        if (debug) {
          console.warn('Failed to send web vitals:', error);
        }
      });
    }

    // Call custom metric handler
    onMetric?.(metric);

    // Debug logging
    if (debug) {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value);
    }
  }, [onMetric, debug]);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    let cleanup: (() => void) | undefined;

    // Load web-vitals library dynamically
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      cleanup = () => {
        // Web vitals doesn't provide cleanup, but we can track if needed
      };

      onCLS(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
      onINP(sendToAnalytics);
    }).catch((error) => {
      if (debug) {
        console.warn('Failed to load web-vitals:', error);
      }
    });

    return cleanup;
  }, [enabled, sendToAnalytics, debug]);

  return {
    sendToAnalytics,
  };
};