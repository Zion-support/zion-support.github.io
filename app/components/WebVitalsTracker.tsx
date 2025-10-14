'use client';
import React, { useEffect } from 'react';

interface WebVitalsTrackerProps {
  children: React.ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track web vitals
    const trackWebVitals = () => {
      // Implementation for tracking web vitals
      console.log('Web vitals tracking initialized');
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
};

export default WebVitalsTracker;