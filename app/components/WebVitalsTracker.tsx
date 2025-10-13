import React, { useEffect } from 'react';

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const trackWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
        
        onCLS((metric) => {
          console.log('CLS:', metric);
        });
        
        onFID((metric) => {
          console.log('FID:', metric);
        });
        
        onFCP((metric) => {
          console.log('FCP:', metric);
        });
        
        onLCP((metric) => {
          console.log('LCP:', metric);
        });
        
        onTTFB((metric) => {
          console.log('TTFB:', metric);
        });
        
        onINP((metric) => {
          console.log('INP:', metric);
        });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    trackWebVitals();
  }, []);

  return null;
};

export default WebVitalsTracker;
