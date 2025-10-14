'use client';
import { useEffect } from 'react';

export default function WebVitalsTracker() {
  useEffect(() => {
    // Track web vitals
    const trackWebVitals = () => {
      // This would typically use web-vitals library
      console.log('Web vitals tracking initialized');
    };

    trackWebVitals();
  }, []);

  return null; // This component doesn't render anything
}