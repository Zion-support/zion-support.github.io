'use client';

import { useEffect } from 'react';

interface WebVitalsTrackerProps {
  onVitalsUpdate?: (vitals: Record<string, unknown>) => void;
}

export default function WebVitalsTracker({ onVitalsUpdate }: WebVitalsTrackerProps) {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // This would typically use a web vitals library
      // For now, we'll just log that tracking is enabled
      console.log('Web Vitals tracking enabled');
      
      if (onVitalsUpdate) {
        onVitalsUpdate({
          timestamp: Date.now(),
          type: 'web-vitals-enabled'
        });
      }
    };

    trackWebVitals();
  }, [onVitalsUpdate]);

  return null; // This component doesn't render anything
}
