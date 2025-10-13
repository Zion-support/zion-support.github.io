import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsTrackerProps {
  children: React.ReactNode;
}

export default function WebVitalsTracker({ children }: WebVitalsTrackerProps) {
  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      console.log($1);
      // Add actual analytics tracking here
    };

    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  return <>{children}</>;
}