import React, { useEffect } from 'react';

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    // Web Vitals tracking logic
    if (typeof window !== 'undefined') {
      // Track Core Web Vitals
      const trackWebVitals = () => {
        // This would typically integrate with analytics
        console.log('Web Vitals tracking initialized');
      };
      
      trackWebVitals();
    }
  }, []);

  return null;
};

export default WebVitalsTracker;