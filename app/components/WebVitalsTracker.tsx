'use client';

import { useEffect } from 'react';

interface WebVitalsTrackerProps {
  onVitalsUpdate?: (vitals: unknown) => void;
}

export default function WebVitalsTracker({ onVitalsUpdate }: WebVitalsTrackerProps) {
  useEffect(() => {
    const trackWebVitals = () => {
      // Track Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onVitalsUpdate);
          getFID(onVitalsUpdate);
          getFCP(onVitalsUpdate);
          getLCP(onVitalsUpdate);
          getTTFB(onVitalsUpdate);
        });
      }
    };

    trackWebVitals();
  }, [onVitalsUpdate]);

  return null;
}