'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsTrackerProps {
  onVitalsUpdate?: (vitals: unknown) => void;
}

export default function WebVitalsTracker({ onVitalsUpdate }: WebVitalsTrackerProps) {
  useEffect(() => {
    const trackWebVitals = () => {
      // Track Core Web Vitals
      onCLS(onVitalsUpdate || (() => {}));
      onFCP(onVitalsUpdate || (() => {}));
      onLCP(onVitalsUpdate || (() => {}));
      onTTFB(onVitalsUpdate || (() => {}));
    };

    trackWebVitals();
  }, [onVitalsUpdate]);

  return null;
}
