'use client';
import { useEffect } from 'react';

interface WebVitalsTrackerProps {
  onVitalsUpdate?: (vitals: Record<string, number>) => void;
}

export default function WebVitalsTracker({ onVitalsUpdate }: WebVitalsTrackerProps) {
  useEffect(() => {
    // Web Vitals tracking implementation
    const trackWebVitals = () => {
      // This would typically use web-vitals library
      // For now, just a placeholder
      if (onVitalsUpdate) {
        onVitalsUpdate({
          CLS: 0,
          FID: 0,
          FCP: 0,
          LCP: 0,
          TTFB: 0
        });
      }
    };

    trackWebVitals();
  }, [onVitalsUpdate]);

  return null; // This component doesn't render anything
}