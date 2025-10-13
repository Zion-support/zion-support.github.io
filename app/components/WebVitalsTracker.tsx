import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

interface WebVitalsTrackerProps {
  onMetricUpdate?: (metric: Metric) => void;
  enableConsoleLogging?: boolean;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ 
  onMetricUpdate,
  enableConsoleLogging = process.env.NODE_ENV === 'development'
}) => {
  useEffect(() => {
    const handleMetric = (metric: Metric) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (typeof window !== 'undefined' && onMetricUpdate) {
        onMetricUpdate(metric);
      }

      // Console logging for development
      if (enableConsoleLogging) {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }

      // Store in localStorage for debugging
      if (typeof window !== 'undefined') {
        const stored = JSON.parse(localStorage.getItem('web-vitals') || '{}');
        stored[metric.name] = {
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          timestamp: Date.now()
        };
        localStorage.setItem('web-vitals', JSON.stringify(stored));
      }
    };

    // Measure Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [onMetricUpdate, enableConsoleLogging]);

  return null;
};

export default WebVitalsTracker;