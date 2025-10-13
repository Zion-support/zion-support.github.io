import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsTrackerProps {
  onMetric?: (metric: any) => void;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ onMetric }) => {
  useEffect(() => {
    const handleMetric = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Web Vital - ${metric.name}:`, metric.value);
      }

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && onMetric) {
        onMetric(metric);
      }

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, [onMetric]);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;