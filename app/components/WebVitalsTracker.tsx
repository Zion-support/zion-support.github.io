'use client';
import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface WebVitalsTrackerProps {
  onMetric?: (metric: unknown) => void;
  enabled?: boolean;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({
  onMetric,
  enabled = true
}) => {
  useEffect(() => {
    if (!enabled) return;

    const handleMetric = (metric: unknown) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
      
      // Send to analytics service
      if (onMetric) {
        onMetric(metric);
      }
      
      // You can also send to your analytics service here
      // Example: analytics.track('web_vital', metric);
    };

    // Track Core Web Vitals
    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);
  }, [onMetric, enabled]);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;