import React, { useEffect } from 'react';

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track Web Vitals
    const trackWebVitals = () => {
      // This is a placeholder - you would typically use a library like web-vitals
      console.log('Web Vitals tracking initialized');
    };

    trackWebVitals();
  }, []);

  return null;
};

export default WebVitalsTracker;
