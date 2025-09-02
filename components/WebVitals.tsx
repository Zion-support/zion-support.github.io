import React, { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const WebVitals: React.FC = () => {
  useEffect(() => {
    // Simple web vitals tracking without external dependencies
    const trackWebVitals = () => {
      // Track page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log('Page load time:', loadTime);
      });

      // Track first contentful paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            console.log(`${entry.name}:`, entry.startTime);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Paint timing not supported
      }
    };

    trackWebVitals();
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitals;