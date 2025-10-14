'use client';
import React, { useEffect } from 'react';

interface WebVitalsTrackerProps {
  children: React.ReactNode;
}

export default function WebVitalsTracker({ children }: WebVitalsTrackerProps) {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // This would integrate with your analytics service
      console.log('Web Vitals tracking initialized');
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
}