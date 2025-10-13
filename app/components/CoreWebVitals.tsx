import React, { useEffect, useCallback } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    console.log('Core Web Vitals monitoring initialized');
  }, []);

  useEffect(() => {
    const measureWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

        onCLS(reportWebVitals);
        onFID(reportWebVitals);
        onFCP(reportWebVitals);
        onLCP(reportWebVitals);
        onTTFB(reportWebVitals);
        onINP(reportWebVitals);
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    measureWebVitals();
  }, [reportWebVitals]);

  return null; // This component doesn't render anything
};

export default CoreWebVitals;